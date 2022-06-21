//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".top-bar").offset().top > 150) {
        $('.top-bar').addClass("top-nav-fixed");
    } else {
        $('.top-bar').removeClass("top-nav-fixed");
    }
});

// swiper for profile section
 
var swiper = new Swiper(".swiper", {
    speed: 400,
    spaceBetween: 10,
    initialSlide: 0,
    //truewrapper adoptsheight of active slide
    autoHeight: false,
    // Optional parameters
    direction: 'horizontal',
    // delay between transitions in ms
      //Navigation arrows
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    // "slide", "fade", "cube", "coverflow" or "flip"
    effect: 'slide',
    // Distance between slides in px.
    spaceBetween: 10,
    //
    slidesPerView: "auto",
    //
    centeredSlides: false,
    //
    slidesOffsetBefore: 0,
    //
    grabCursor: true,
    

  })        
