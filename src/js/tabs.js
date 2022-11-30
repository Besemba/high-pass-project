$(function () {
  $(".projects-tables").tabs({
    hide: { effect: "slide", duration: 300 },
    show: { effect: "slide", duration: 300 }
  });
});
$(function () {
  $(".services").tabs();
});

const tabBtns = Array.from(document.querySelectorAll('.services-tab'));
const tabIndicator = document.querySelector('.services-tab__indicator');
console.log(tabBtns)

tabBtns.forEach(btn => btn.addEventListener('click', function() {
  const indexBtn = tabBtns.indexOf(btn);
  if(indexBtn === 0) {
    tabIndicator.classList.add('left');
    tabIndicator.classList.remove('right');
  } else {
    tabIndicator.classList.add('right');
    tabIndicator.classList.remove('left');
  }
  
}))
