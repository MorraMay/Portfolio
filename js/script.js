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
    
    offset: 30, // появления элемента в пикселях
    delay: 0, // задержка исполнения анимации
    duration: 400, // скорость анимации
    easing: 'ease', // тип анимации
    once: false, // если поставим true тогда анимация будет проигрываться только один раз 
    mirror: false,
    anchorPlacement: 'top-bottom', //  откуда будет анимация 
});


//HEADER BURGER

  $('.menu__btn').click(function(event) {
    $('.header .menu').toggleClass('active');
    $('.mobile__line').toggleClass('active');
  
  });

//popup
  $('.sticky__info').click(function(event) {
    $('.popup__body').toggleClass('active');
	$('.sticky__btn').toggleClass('active');
  });

  $('.inside-page__btn-1').click(function(event) {
    $('.popup-gallery').toggleClass('active');
	$('.gallery').toggleClass('active');
  });
  
  $('.inside-page__btn-2').click(function(event) {
    $('.popup-gallery-2').toggleClass('active');
	$('.gallery-2').toggleClass('active');
  });

  $('.inside-page__btn-3').click(function(event) {
    $('.popup-gallery-3').toggleClass('active');
	$('.gallery-3').toggleClass('active');
  });


//Typed
let typed = new Typed(".typing", {
  strings: ["Front-End Developer", "Teacher", "Writer", "Freelancer", "Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop:true
});



  //Tablinks
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(tabname){
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }

 // Появление хедера
 $(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20){
        $('.header').addClass("sticky");
      }else{
        $('.header').removeClass("sticky");
      }
	  if(this.scrollY > 550){
        $('.sticky__info').addClass("sticky");
      }else{
        $('.sticky__info').removeClass("sticky");
      }
	  if(this.scrollY > 3950){
        $('.arrow__up').addClass("sticky");
      }else{
        $('.arrow__up').removeClass("sticky");
      }
    })
  });
