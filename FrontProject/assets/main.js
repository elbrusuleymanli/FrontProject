$('.parallax-window').parallax({imageSrc: '/assets/image/parallax.jpg'});
$(document).ready(function(){
AOS.init();
})


 
let openmenu = document.querySelector("#mainbox")
let closemenu = document.querySelector(".close-btn")

openmenu.addEventListener("click",function(){
  document.getElementById("menu-mob").style.width="500px"
})
closemenu.addEventListener("click",function(){
    document.getElementById("menu-mob").style.width="0px"
  })
  
  
  $('.slider-banner').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
   prevArrow:".arrow-prev",
   nextArrow:".arrow-right",
    
  });