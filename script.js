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
const EMAIL_INVALID = 'Please enter your email address in lowercase';
const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.querySelector("input[type='email']");
    const emailValid = validateEmail(email, EMAIL_INVALID);
    if (emailValid) {
      showSuccess();
      form.submit();
});