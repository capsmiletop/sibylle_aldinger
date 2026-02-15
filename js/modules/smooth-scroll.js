/**
 * Smooth Scroll Module
 * Handles smooth scrolling for anchor links
 */

(function() {
  'use strict';

  function initSmoothScroll() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      return; // Skip smooth scrolling if user prefers reduced motion
    }
    
    // Handle anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip empty anchors
        if (href === '#' || href === '') {
          return;
        }
        
        const targetId = href.substring(1);
        const target = document.getElementById(targetId) || document.querySelector(`[name="${targetId}"]`);
        
        if (target) {
          e.preventDefault();
          
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
          const offset = 80; // Account for sticky header
          
          window.scrollTo({
            top: targetPosition - offset,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSmoothScroll);
  } else {
    initSmoothScroll();
  }
})();

