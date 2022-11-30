const mapInfoClose = document.querySelector('.map-info__close');
const mapInfo = document.querySelector('.map-info');

mapInfoClose.addEventListener('click', function () {
  mapInfo.classList.add('is-hidden');
})