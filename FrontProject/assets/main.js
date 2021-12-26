
$(document).ready(function(){
  $('.parallax-window').parallax({imageSrc: '/assets/image/parallax.jpg'});
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
  if ($(this).scrollTop() > 70) {
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
    100,
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


	
// });
//mob-menu

// $(".mobile-btn").click(function () {
  
//   $("body").addClass("show-mobile-menu");
// });

// $(".mob-close").click(function () {
//   $("body").removeClass("show-mobile-menu");
// });

// $(".overlay").click(function (e) {
//   if (e.target == this) {
//     $("body").removeClass("show-mobile-menu");
//   }
// });

// $(".nav-dropdown").click(function (e) {
//   e.preventDefault();
//   $(e.target).parents(".dropdown").find(".dropdown-menu").slideToggle();
// });
})

 
 
let openmenu = document.querySelector("#mainbox")
let closemenu = document.querySelector(".close-btn")

// openmenu.addEventListener("click",function(){
//   document.getElementById("menu-mob").style.width="500px"
// })
// closemenu.addEventListener("click",function(){
//     document.getElementById("menu-mob").style.width="0px",style.transition="all 0.5s ease-in-out;"
//   })
  
  
  $('.slider-banner').slick({
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
  

let buttons = document.querySelectorAll(".addToCart");
// let dropdown = document.querySelector(".dropdown-menu")
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
    // let price = this.previousElementSibling.children[0].innerText;
    let name = this.parentElement.children[0].innerText;
    let image = this.parentElement.previousElementSibling.src;
    let dataId = this.getAttribute("data-id");

    let existProd = basket.find((p) => p.dataId == dataId);

    if (existProd == undefined) {
      let product = {
        dataId,
        // price,
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
// if (
//   localStorage.getItem("basket") === null ||
//   localStorage.getItem("basket") == "[]"
// ) {
//   localStorage.setItem("basket", JSON.stringify([]));
//   let div = document.createElement("div");
//   let p = document.createElement("p");
//   let bag = document.querySelector(".bag")
  
//   bag.addEventListener("click",function(e){
//     e.preventDefault();
    
//   div.appendChild(p);
//   row.append(div);
//   }

//   )
//   p.innerText = "No products in the cart.";
//   p.style.fontSize = "13px";
//   p.style.color = "black";
//   p.style.padding = "20px";
//   p.style.backgroundColor = "white"
//   p.style.position = "absolute";
//   p.style.top = "113px";
//   p.style.right = "170px";

//   row.append(p)
// } else {
//   let basket = JSON.parse(localStorage.getItem("basket"));
//   this
//   basket.forEach((p) => {
//     let div = document.createElement("div");
//     let image = document.createElement("img");
//     let pCount = document.createElement("p");
//     let pPrice = document.createElement("p");
//     let pname = document.createElement("p");
//     let del = document.createElement("span");
//     let view = document.createElement("button");
//     let checkout = document.createElement("button");
//     let totalprice = document.createElement("p");
    
   
    
//     del.style.color = "red ";
//     del.style.paddingLeft = "60px ";
//     pname.style.fontWeight="bold" 
//     pPrice.style.color="grey"
//     pPrice.style.marginLeft="8px"
//     image.style.width = "110px";
//     image.style.float="left"
//     pCount.style.textAlign="center"
//     pname.style.marginRight="100px"
//     pPrice.style.float="left"

//     div.style.backgroundColor="white"
//     div.style.width="450px"
    
//     div.style.padding="60px"
//     del.style.marginLeft="15px"
//     del.style.marginBottom = "10px";
//     image.src = p.image;

   
//     pname.innerText = p.name;
//     pPrice.innerText = p.count + "X" +"$"+ p.price * p.count ;
//     del.innerText = "x";
 
    

//     div.append(image, pname, pCount, pPrice, del);
  
//     row.append(div);
   
//     del.addEventListener("click", function (e) {
//         e.preventDefault();
     
//       if (p.count == 1) {
//         div.remove(this.image, this.name, this.pCount, this.pPrice, this.del);
//       } else {
//         p.count--;
        
//         pPrice.innerText = p.count + "X" +"$"+ p.price * p.count ;
       
//       }
     
//     });
     
//   });
// }

//sidenav
function openNav() {
	document.getElementById("mySidenav").style.width = "420px";
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

