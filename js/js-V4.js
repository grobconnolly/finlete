 
// on scroll sticky nav

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 150) {
        //clearHeader, not clearheader - caps H
        $(".top-bar").addClass("sticky");
    }
    else{
        $(".top-bar").removeClass("sticky");
    }
}); //missing );

 // Function to handle play/pause for a specific video and button
 function handlePlayPause(videoId,buttonId) {
    var video = document.getElementById(videoId);
    var playButton = document.getElementById(buttonId);
    var playButton = document.getElementById(buttonId);
    var btnImg = playButton.querySelector('.btn-img');

    playButton.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            btnImg.src = "images/echedry-page-assets/Btn-pause.png";
        } else {
            video.pause();
            btnImg.src = "images/echedry-page-assets/Btn-play.png";
        }
    });
}

// Call the function for each video and button pair
handlePlayPause("echedryVideo_1", "playButton_1");
handlePlayPause("echedryVideo_2", "playButton_2");

        
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
    spaceBetween: 20,
    //
    slidesPerView: "auto",
    //
    centeredSlides: false,
    //
    slidesOffsetBefore: 0,
    //
    grabCursor: true,
    

})        

// FAQ accord

if ($('#MTaccordion,#MTaccordionA,#MTaccordionB').length) {

    var $panels = $('.panel');

    // add active class to first open panel
    // only necessary if this panel is open by default on your accordion
    //$panels.first().addClass('active');

    $('.panel-heading a[data-toggle="collapse"]').on('click', function (e) {

        $this = $(this);

        $panel = $this.parents('.panel');

        $panels.not( $panel ).removeClass('active');

        $panel.toggleClass('active');

    });
}

$(document).ready(function() {
    // Create a new Date object
    var currentDate = new Date();

    // Get the current year
    var currentYear = currentDate.getFullYear();

    // Set the current year to the span with id "year"
    $("#dateYear").text(currentYear);

    console.log(currentYear);
});