const burgerHeader = document.querySelector('.header-burger');
const menuHeader = document.querySelector('.header-menu');

burgerHeader.addEventListener('click', function () {
  menuHeader.classList.toggle('is-active');
  burgerHeader.classList.toggle('is-active');
});