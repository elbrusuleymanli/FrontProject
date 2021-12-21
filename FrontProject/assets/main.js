$('.parallax-window').parallax({imageSrc: '/assets/image/parallax.jpg'});
$(document).ready(function(){
AOS.init();
})

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)
 
let openmenu = document.querySelector(".mainbox")
let closemenu = document.querySelector(".close-btn")

openmenu.addEvenListener("click",function(){
  document.getElementById("menu-mob").style.width="300px"
})
closemenu.addEvenListener("click",function(){
    document.getElementById("menu-mob").style.width="0px"
  })
