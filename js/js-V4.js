$(window).scroll(function() {
    var e = $(window).scrollTop();
    150 <= e ? $(".top-bar").addClass("sticky") : $(".top-bar").removeClass("sticky"), 500 <= e ? $(".time-offer-echedry").addClass("stickft") : $(".time-offer-echedry").removeClass("stickft")
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