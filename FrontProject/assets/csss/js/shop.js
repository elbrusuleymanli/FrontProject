// shop slide
$('.slider-shop').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	prevArrow: '.arrow-prev',
	nextArrow: '.arrow-right',

 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    

  ]
 });