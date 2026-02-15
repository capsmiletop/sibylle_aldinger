/**
 * Main JavaScript File
 * Loads and initializes all modules
 */

// Email obfuscation function (for kontakt.html)
function em1() {
  var c = "jogpAtjczmmfbmejohfs/dpn@tvckfdu>'cpez>";
  var addr = "mailto:";
  for (var i = 0; i < c.length; i++) {
    addr += String.fromCharCode(c.charCodeAt(i) - 1);
  }
  window.location.href = addr;
}

// Make email function globally available
window.em1 = em1;

// Load modules when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadModules);
} else {
  loadModules();
}

function loadModules() {
  // Modules are loaded via script tags in HTML
  // This file provides the email function and any global initialization
  console.log('Sibylle Aldinger website initialized');
}
