function toggleMobileMenu() {
    alert("Mobile menu - expand this as needed for full functionality.");
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    this.reset();
});