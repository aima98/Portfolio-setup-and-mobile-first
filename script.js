const menuBar = document.querySelector('.menu-bar');
const mobileMenu = document.querySelector('.mobile-menu');

const Bar = () => {
  menuBar.classList.toggle('active');
  mobileMenu.classList.toggle('active');
};

menuBar.addEventListener('click', Bar);

document.querySelectorAll('.menu-link').forEach((element) => element.addEventListener('click', () => {
  menuBar.classList.remove('active');
  mobileMenu.classList.remove('active');
}));