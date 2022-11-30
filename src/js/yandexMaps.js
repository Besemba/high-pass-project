ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.758869005408854, 37.61940759243772],
    zoom: 13,
    controls: [],
  }, {
    suppressMapOpenBlock: true
  }
  );
  myMap.behaviors.disable('scrollZoom');

  var myPlacemark = new ymaps.Placemark([55.76953456898229, 37.63998549999998], {}, {
    iconLayout: 'default#image',
    iconImageHref: "@img/map-mark.svg",
    iconImageSize: [12, 12],
    iconImageOffset: [0, 0]
  });

  myMap.geoObjects.add(myPlacemark);
}