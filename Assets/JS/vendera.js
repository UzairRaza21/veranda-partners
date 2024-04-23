// Nav Bar

let mobileNav = document.getElementById("mobile-nav-links");

function openMenu(){
    mobileNav.classList.toggle("mobile-nav-links");
 }
 

// Swiper Slider

var swiper = new Swiper('.swiper-container.swiper-testimonial', {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {  
      '@480': {
        slidesPerView: 2,
        spaceBetween: 30,},
      '@991': {
        slidesPerView: 2,
        spaceBetween: 30, },
    },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next-test',
      prevEl: '.swiper-button-prev-test',
  },
});

// Owl Slider

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay: true,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:1
      },
      1000:{
          items:2
      },
      1200:{
        items:3
    }
  }
  })
// Slick Slider

$(document).ready(function(){
  $('.center-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 300,
    centerPadding: '20px',
    infinite: true,
    autoplaySpeed: 5000,
    autoplay:false
  });
});