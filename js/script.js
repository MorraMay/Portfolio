
//Animation load
let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
    mask.remove();
  }, 600);
})


//Scroll animation
AOS.init({
    // Настройки:
    disable: 'phone', // Если мы не хотим чтобы анимация была на телефоне, тогда прописываем вместо fals: 'phone', 'tablet', 'mobile', boolean.
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', // скрипт работает только с этими классами
    animatedClassName: 'aos-animate', // имя класса анимации
    useClassNames: false, 
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99, 
    
    offset: 100, // появления элемента в пикселях
    delay: 0, // задержка исполнения анимации
    duration: 600, // скорость анимации
    easing: 'ease', // тип анимации
    once: false, // если поставим true тогда анимация будет проигрываться только один раз 
    mirror: false,
    anchorPlacement: 'top-bottom', //  откуда будет анимация 
    
});


//HEADER BURGER
$(document).ready(function () {
  $('.header__burger').click(function(event) {
  $('.header__burger, .header__menu').toggleClass('active');
  $('body').toggleClass('lock');
  });
});    


//SLIDER
$(document).ready(function() {
  $('.slider').slick({
      dots: true,
      arrows: true,
      slidesToShow:3,
      speed: 400,
      adaptiveHeight:false,
      autoplay:true,
      autoplaySpeed: 700,
      centerMode:false

  });
});    
var limits = 15.0;


//Card 3D
$(".card, .card-2").mousemove(function (e) {
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left; //x position within the element.
  var y = e.clientY - rect.top; //y position within the element.
  var offsetX = x / rect.width;
  var offsetY = y / rect.height;

  var rotateY = ((offsetX - 0) / (1 - 0)) * (limits - -limits) + -limits;
  var rotateX = ((offsetY - 0) / (1 - 0)) * (limits - -limits) + -limits;

  var shadowOffsetX = ((offsetX - 0) / (1 - 0)) * (16 - -16) + -16;
  var shadowOffsetY = ((offsetY - 0) / (1 - 0)) * (16 - -16) + -16;

  $(this).css({
    "box-shadow":
      (1 / 6) * shadowOffsetX * -1 +
      "px " +
      (1 / 6) * shadowOffsetY * -1 +
      "px 3px rgba(0, 0, 0, 0.051), " +
      (2 / 6) * shadowOffsetX * -1 +
      "px " +
      (2 / 6) * shadowOffsetY * -1 +
      "px 7.2px rgba(0, 0, 0, 0.073), " +
      (3 / 6) * shadowOffsetX * -1 +
      "px " +
      (3 / 6) * shadowOffsetY * -1 +
      "px 13.6px rgba(0, 0, 0, 0.09), " +
      (4 / 6) * shadowOffsetX * -1 +
      "px " +
      (4 / 6) * shadowOffsetY * -1 +
      "px 24.3px rgba(0, 0, 0, 0.107), " +
      (5 / 6) * shadowOffsetX * -1 +
      "px " +
      (5 / 6) * shadowOffsetY * -1 +
      "px 45.5px rgba(0, 0, 0, 0.129), " +
      shadowOffsetX * -1 +
      "px " +
      shadowOffsetY * -1 +
      "px 109px rgba(0, 0, 0, 0.18)",
    transform:
      "perspective(1000px) rotateX(" +
      -rotateX +
      "deg) rotateY(" +
      rotateY +
      "deg)"
  });

  $(".card").mouseleave(function (e) {
    $(".card").css({"box-shadow": "0px 0px 3px rgba(0, 0, 0, 0.051), 0px 0px 7.2px rgba(0, 0, 0, 0.073), 0px 0px 13.6px rgba(0, 0, 0, 0.09), 0px 0px 24.3px rgba(0, 0, 0, 0.107), 0px 0px 45.5px rgba(0, 0, 0, 0.129), 0px 0px 109px rgba(0, 0, 0, 0.18)", "transform": "scale(1.0)"});
  });

  $(".card-2").mouseleave(function (e) {
    $(".card-2").css({"box-shadow": "0px 0px 3px rgba(0, 0, 0, 0.051), 0px 0px 7.2px rgba(0, 0, 0, 0.073), 0px 0px 13.6px rgba(0, 0, 0, 0.09), 0px 0px 24.3px rgba(0, 0, 0, 0.107), 0px 0px 45.5px rgba(0, 0, 0, 0.129), 0px 0px 109px rgba(0, 0, 0, 0.18)", "transform": "scale(1.0)"});
  });

});


//click and move to element
$('.menu__link-2').click(function() {
  var target = $('.content');
  if (target.length) {
      $('html,body').animate({
          scrollTop: target.offset().top
      }, 1000);
      return false;
  }
});

$('.menu__link-3').click(function() {
  var target = $('.container__projects');
  if (target.length) {
      $('html,body').animate({
          scrollTop: target.offset().top
      }, 1000);
      return false;
  }
});