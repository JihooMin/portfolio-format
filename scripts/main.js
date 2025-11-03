// scripts/main.js

// (Optional) Smooth scrolling for anchor links
// Used for #achievements, #skills, #contact links in index.html
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Exclude links that are just "#"
        if (this.getAttribute('href') === '#') {
            return;
        }

        // Check if the link is pointing to an anchor on the *current* page
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// (Optional) You can add code here for a mobile navigation menu toggle
console.log("Portfolio script loaded.");
