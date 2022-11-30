document.addEventListener("DOMContentLoaded", () => {
  const searchInitial = document.querySelector('.search-initial-link');
  const searchHeader = document.querySelector('.header-search');
  const searchClose = document.querySelector('.header-search__close');

  searchInitial.addEventListener('click', function (e) {
    e.stopPropagation();
    searchHeader.classList.add('header-search_active');
  });
  searchClose.addEventListener('click', function () {
    searchHeader.classList.remove('header-search_active');
  })
})