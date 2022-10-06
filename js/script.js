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
    
    offset: 40, // появления элемента в пикселях
    delay: 0, // задержка исполнения анимации
    duration: 600, // скорость анимации
    easing: 'ease', // тип анимации
    once: false, // если поставим true тогда анимация будет проигрываться только один раз 
    mirror: false,
    anchorPlacement: 'top-bottom', //  откуда будет анимация 
    
});


//HEADER BURGER

  $('.menu__btn').click(function(event) {
    $('.header .menu').toggleClass('active');
    $('.menu__btn i').toggleClass('active');
    $('.menu__logo').toggleClass('active');
  });

//popup
  $('.sticky__info').click(function(event) {
    $('.popup').toggleClass('active');
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
var typed = new Typed(".typing", {
  strings: ["Front-End Developer", "Writer", "Freelancer", "Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop:true
});


//Progress circle
var number = document.getElementById('value');
	var count_value = 0;
	function running_animation(){
		 if (count_value == 80) {
		 	clearInterval();
		 }else{
		 	count_value = count_value + 1;
		 	number.innerHTML = count_value + "%";
		 }
	}
	running_animation();
	setInterval(running_animation, 88)


  var numbers = document.getElementById('value_2');
	var count_value_2 = 0;
	function running_animations(){
		 if (count_value_2 == 60) {
		 	clearInterval();
		 }else{
		 	count_value_2 = count_value_2 + 1;
		 	numbers.innerHTML = count_value_2 + "%";
		 }
	}
	running_animations();
	setInterval(running_animations, 115)

 
  var number3 = document.getElementById('value_3');
	var count_value_3 = 0;
	function running_animation3(){
		 if (count_value_3 == 45) {
		 	clearInterval();
		 }else{
		 	count_value_3 = count_value_3 + 1;
		 	number3.innerHTML = count_value_3 + "%";
		 }
	}
	running_animation3();
	setInterval(running_animation3, 155)
 

  var number4 = document.getElementById('value_4');
	var count_value_4 = 0;
	function running_animation4(){
		 if (count_value_4 == 65) {
		 	clearInterval();
		 }else{
		 	count_value_4 = count_value_4 + 1;
		 	number4.innerHTML = count_value_4 + "%";
		 }
	}
	running_animation4();
	setInterval(running_animation4, 108)


  var number5 = document.getElementById('value_5');
	var count_value_5 = 0;
	function running_animation5(){
		 if (count_value_5 == 55) {
		 	clearInterval();
		 }else{
		 	count_value_5 = count_value_5 + 1;
		 	number5.innerHTML = count_value_5 + "%";
		 }
	}
	running_animation5();
	setInterval(running_animation5, 130)


  var number6 = document.getElementById('value_6');
	var count_value_6 = 0;
	function running_animation6(){
		 if (count_value_6 == 70) {
		 	clearInterval();
		 }else{
		 	count_value_6 = count_value_6 + 1;
		 	number6.innerHTML = count_value_6 + "%";
		 }
	}
	running_animation6();
	setInterval(running_animation6, 95)


  var number7 = document.getElementById('value_7');
	var count_value_7 = 0;
	function running_animation7(){
		 if (count_value_7 == 65) {
		 	clearInterval();
		 }else{
		 	count_value_7 = count_value_7 + 1;
		 	number7.innerHTML = count_value_7 + "%";
		 }
	}
	running_animation7();
	setInterval(running_animation7, 108)


  var number8 = document.getElementById('value_8');
	var count_value_8 = 0;
	function running_animation8(){
		 if (count_value_8 == 90) {
		 	clearInterval();
		 }else{
		 	count_value_8 = count_value_8 + 1;
		 	number8.innerHTML = count_value_8 + "%";
		 }
	}
	running_animation8();
	setInterval(running_animation8, 78)


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
