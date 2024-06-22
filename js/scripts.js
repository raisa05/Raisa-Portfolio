document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('[data-scroll]');
    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href");
        const targetPosition = document.querySelector(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition - 50,
            behavior: "smooth"
        });
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
