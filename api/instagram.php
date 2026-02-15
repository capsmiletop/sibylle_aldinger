<?php

function url_get_contents($url) {
    if(function_exists('curl_exec')) {
        $conn = curl_init($url);
        curl_setopt($conn, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($conn, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($conn, CURLOPT_FRESH_CONNECT,  true);
        curl_setopt($conn, CURLOPT_RETURNTRANSFER, 1);
        $url_get_contents_data = curl_exec($conn);
        curl_close($conn);
    } else if(function_exists('file_get_contents')) {
        $context = stream_context_create(array('http' => array('header' => 'Connection: close\r\n', 'timeout' => 3)));
        $url_get_contents_data = file_get_contents($url, false, $context);
    } else {
        $url_get_contents_data = false;
    }
    return $url_get_contents_data;
}

function cached_url_get_contents($url) {
    $content = NULL;
    $apcu = false;
    if(function_exists('apcu_enabled') && apcu_enabled()) {
        $content = apcu_fetch('urlcache_' . rawurlencode($url));
        $apcu = true;
    }
    if(! $content) {
        $content = url_get_contents($url);
    }
    if($apcu && $content !== false) {
        apcu_store('urlcache_' . rawurlencode($url), $content, 86400);
    }
    return $content;
}

$err = NULL;
$res = NULL;

$apcu = false;
if(function_exists('apcu_enabled') && apcu_enabled()) {
    $apcu = true;
    $feed = apcu_fetch('ig_recent_https://feeds.behold.so/3V0n4cXgnxGRBvTu4zit', $success);
    if($success) {
            $res = $feed;
    }
}
if($res === NULL) {
    $res = url_get_contents('https://feeds.behold.so/3V0n4cXgnxGRBvTu4zit');
    if($res === false) {
        $err = 'unknown error';
    }
    else if($apcu) {
        apcu_store('ig_recent_https://feeds.behold.so/3V0n4cXgnxGRBvTu4zit', $res, 60);
    }
}

header('Content-Type: application/json');

if($err !== NULL) {
    header('X-PHP-Response-Code: 400', true, 400);
    $res = json_encode(array('error' => $err));
}
else {
    header('X-PHP-Response-Code: 200', true, 200);
}

header('Access-Control-Allow-Origin: *');
header('Content-Length: ' . strlen($res));
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: post-check=0, pre-check=0', false);
header('Expires: Sat, 26 Jul 1997 05:00:00 GMT');
header('Pragma: no-cache');
header('Last-Modified: ' . gmdate("D, d M Y H:i:s") . ' GMT');
echo $res;
