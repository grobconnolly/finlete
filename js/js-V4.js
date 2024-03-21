$(window).scroll(function() {
    var e = $(window).scrollTop();
    150 <= e ? $(".top-bar").addClass("sticky") : $(".top-bar").removeClass("sticky"), 500 <= e ? $(".time-offer-echedry").addClass("stickft") : $(".time-offer-echedry").removeClass("stickft")
});
// Smooth scroll to section when clicking on a link with href="#id"
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            
            var targetId = this.getAttribute('href').substring(1); // Get target section id
            var targetSection = document.getElementById(targetId); // Get target section element
            if (targetSection) {
                var offset = 60; // Offset for header height
                var targetPosition = targetSection.offsetTop - offset; // Calculate target position
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth' // Smooth scroll behavior
                });
            }
        });
    });
});

var $panels, swiper = new Swiper(".swiper", {
    speed: 400,
    spaceBetween: 20,
    initialSlide: 0,
    autoHeight: !1,
    direction: "horizontal",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    effect: "slide",
    slidesPerView: "auto",
    centeredSlides: !1,
    slidesOffsetBefore: 0,
    grabCursor: !0
});
var swiperNews = new Swiper(".swiperNews", {
    speed: 400,
    spaceBetween: 20,
    initialSlide: 0,
    autoHeight: !1,
    direction: "horizontal",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    effect: "slide",
    slidesPerView: "auto",
    centeredSlides: !1,
    slidesOffsetBefore: 0,
    grabCursor: !0
});
$("#MTaccordion,#MTaccordionA,#MTaccordionB").length && ($panels = $(".panel"), $('.panel-heading a[data-toggle="collapse"]').on("click", function(e) {
    $this = $(this), $panel = $this.parents(".panel"), $panels.not($panel).removeClass("active"), $panel.toggleClass("active")
})), $(document).ready(function() {
    var e = (new Date).getFullYear();
    $("#dateYear").text(e), console.log(e)
});