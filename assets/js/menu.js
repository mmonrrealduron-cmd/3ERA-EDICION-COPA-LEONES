const toggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
