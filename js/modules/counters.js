/**
 * Animated Counters Module
 * Animates number counters when they come into view
 */

(function() {
  'use strict';

  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    if (!counters.length) return;
    
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-counter'), 10);
          const duration = parseInt(counter.getAttribute('data-duration') || '2000', 10);
          const suffix = counter.getAttribute('data-suffix') || '';
          
          animateCounter(counter, 0, target, duration, suffix);
          observer.unobserve(counter);
        }
      });
    }, observerOptions);
    
    counters.forEach(function(counter) {
      observer.observe(counter);
    });
  }
  
  function animateCounter(element, start, end, duration, suffix) {
    const startTime = performance.now();
    const range = end - start;
    
    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (range * easeOut));
      
      element.textContent = current + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = end + suffix;
      }
    }
    
    requestAnimationFrame(updateCounter);
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCounters);
  } else {
    initCounters();
  }
})();

