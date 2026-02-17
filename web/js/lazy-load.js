/**
 * Lazy Loading for Images
 * Implements IntersectionObserver for efficient image loading
 */

(function() {
    'use strict';
    
    // Check for IntersectionObserver support
    if (!('IntersectionObserver' in window)) {
        console.warn('IntersectionObserver not supported, loading all images immediately');
        return;
    }
    
    // Configuration
    const config = {
        rootMargin: '50px 0px',
        threshold: 0.01
    };
    
    // Create observer
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Load the image
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                
                if (img.dataset.srcset) {
                    img.srcset = img.dataset.srcset;
                }
                
                // Add loaded class for styling
                img.classList.add('loaded');
                
                // Stop observing this image
                observer.unobserve(img);
            }
        });
    }, config);
    
    // Find all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    // Start observing
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
    
    // Log initialization
    console.log(`Lazy loading initialized for ${lazyImages.length} images`);
})();
