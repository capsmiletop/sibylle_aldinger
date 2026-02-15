/**
 * Navigation Module
 * Handles mobile menu toggle and dropdown functionality
 */

(function() {
  'use strict';

  function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navDropdowns = document.querySelectorAll('.nav-dropdown');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
        this.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        this.setAttribute('aria-expanded', navMenu.classList.contains('active'));
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
          navMenu.classList.remove('active');
          navToggle.classList.remove('active');
          navToggle.textContent = '☰';
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
    
    // Dropdown menu functionality
    navDropdowns.forEach(function(dropdown) {
      const toggle = dropdown.querySelector('.nav-dropdown-toggle');
      
      if (toggle) {
        toggle.addEventListener('click', function(e) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        });
      }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
      navDropdowns.forEach(function(dropdown) {
        if (!dropdown.contains(event.target)) {
          dropdown.classList.remove('active');
        }
      });
    });
    
    // Set active navigation item based on current page
    setActiveNavigation();
  }
  
  function setActiveNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '/' && href === './') || (currentPath === '/index.html' && (href === './' || href === 'index.html'))) {
        link.classList.add('active');
      }
    });
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    initNavigation();
  }
})();

