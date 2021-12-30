//parallax
$(document).ready(function(){
$('.parallax-window').parallax({imageSrc:'/assets/image/parallax.jpg'});
AOS.init();
$('.portfolio-item').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
});
$('.portfolio-menu ul li').click(function(){
  $('.portfolio-menu ul li').removeClass('active').css("color","black");
  $(this).addClass('active').css("color","red");
   
  var selector = $(this).attr('data-filter');
  $('.portfolio-item').isotope({
    filter: selector
  });

return false;
})

//search
$('.search-item').click(function(e){
  e.preventDefault();
  $('.search-place').toggle();
 
})


 
//arrow bir
$('.sliders-test').slick({
	dots: false,
	infinite: true,
	speed: 500,
	cssEase: 'linear',
  arrow:true,
	prevArrow: '.arrow-prev',
	nextArrow: '.arrow-right'
});
//scroll to up
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 80) {
    $(".scroll-up").fadeIn();
  } else {
    $(".scroll-up").fadeOut();
  }
});

$(".scroll-up").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1,
    "swing"
  );
  return false;
});
//navbar fixed

$(window).scroll(function (e) {
  if ($(this).scrollTop() > 500) {
    $(".header").addClass("header-fixed");
  } else {
    $(".header").removeClass("header-fixed");
  }
 
});

})


  //banner
  $('.slide').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:'.arrow-prev',
    nextArrow:'.arrow-right',
    responsive: [
  
      {
        breakpoint: 768,
        settings: {
          dots:true,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          infinite: true,
          speed: 500,
          fade: true,
          cssEase: 'linear',
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 1
        }
      }
    ]
  });

 
  //add to cart

let buttons = document.querySelectorAll(".addToCart");

if (localStorage.getItem("basket") === null) {
  localStorage.setItem("basket", JSON.stringify([]));
}
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (localStorage.getItem("basket") === null) {
      localStorage.setItem("basket", JSON.stringify([]));
    }
    let basket = JSON.parse(localStorage.getItem("basket"));
    let price = this.parentElement.children[0].innerText;
    let name = this.parentElement.children[0].innerText;
    let image = this.parentElement.previousElementSibling.src;
    let dataId = this.getAttribute("data-id");

    let existProd = basket.find((p) => p.dataId == dataId);

    if (existProd == undefined) {
      let product = {
        dataId,
        price,
        name,
        image,
        count: 1,
      };

      basket.push(product);
    } else {
      existProd.count++;
    }
    localStorage.setItem("basket", JSON.stringify(basket));
    productCount();
  });
});

function productCount() {
  let basket = JSON.parse(localStorage.getItem("basket"));
  let countElement = document.querySelector(".countProduct");
  let count = 0;

  basket.forEach((c) => {
    count = count + c.count;
  });
  countElement.innerText = count;
}


productCount();

function totalPrice() {
  let basket = JSON.parse(localStorage.getItem("basket"));
  let priceElement = document.querySelector(".totalPrice");

  let total = basket.reduce((total, p) => {
    return (total += p.price * p.count);
  }, 0);
  priceElement.innerText = total;
}
totalPrice();
let row = document.querySelector(".row");


//sidenav
function openNav() {
	document.getElementById("mySidenav").style.width = "400px";
  }
  
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }

  var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}



