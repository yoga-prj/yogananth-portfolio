// Smooth scrolling for navbar links
document.querySelectorAll('nav .nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetID);

        // Offset for fixed navbar
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
