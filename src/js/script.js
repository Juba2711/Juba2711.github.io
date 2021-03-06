const humburger = document.querySelector('.humburger'),
  menu =  document.querySelector('.menu'),
  close =  document.querySelector('.menu__close');

humburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.progress__item-percent'),
  lines = document.querySelectorAll('.progress__item-line span');

percents.forEach( (item, i) => {
lines[i].style.width = item.innerHTML;
});





  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      $('#preloader').fadeOut();
    $('.preloader_img').delay(150).fadeOut('slow'); 
}, 10000000);
  }
