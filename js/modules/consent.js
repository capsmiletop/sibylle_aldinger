/**
 * Cookie Consent Module
 * Handles cookie consent banner functionality
 */

(function() {
  'use strict';

  const CONSENT_KEY = 'cookie-consent';
  const CONSENT_EXPIRY_DAYS = 365;

  function initConsent() {
    const consentBanner = document.getElementById('consentBanner');
    const allowBtn = document.querySelector('.consent-btn-allow');
    const denyBtn = document.querySelector('.consent-btn-deny');
    
    if (!consentBanner) return;
    
    // Check if consent has been given
    const consent = getConsent();
    if (consent !== null) {
      consentBanner.classList.remove('active');
      if (consent === 'allowed') {
        loadThirdPartyScripts();
      }
      return;
    }
    
    // Show banner if no consent
    consentBanner.classList.add('active');
    
    // Allow button
    if (allowBtn) {
      allowBtn.addEventListener('click', function() {
        setConsent('allowed');
        consentBanner.classList.remove('active');
        loadThirdPartyScripts();
      });
    }
    
    // Deny button
    if (denyBtn) {
      denyBtn.addEventListener('click', function() {
        setConsent('denied');
        consentBanner.classList.remove('active');
      });
    }
  }
  
  function setConsent(value) {
    const expiry = new Date();
    expiry.setTime(expiry.getTime() + (CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000));
    document.cookie = `${CONSENT_KEY}=${value};expires=${expiry.toUTCString()};path=/;SameSite=Lax`;
  }
  
  function getConsent() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(CONSENT_KEY + '=')) {
        return cookie.substring(CONSENT_KEY.length + 1);
      }
    }
    return null;
  }
  
  function loadThirdPartyScripts() {
    // Load Zeeg booking widget or other third-party scripts here
    // This will be called only after consent is given
    const zeegWidget = document.querySelector('.zeeg-booking');
    if (zeegWidget) {
      // Load Zeeg booking script
      // Replace with actual Zeeg integration code
      console.log('Loading Zeeg booking widget...');
    }
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConsent);
  } else {
    initConsent();
  }
})();

