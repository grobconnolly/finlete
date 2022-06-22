// calculator fn
jQuery(document).ready(function($) {

        var SharePrice = "50";
        var ratio = "0.1";
        var ratiobased = "10000";
        var SharePrice2 = $('#SharePrice').text("$"+SharePrice+".00");

        $("#Calculate").click(function(){

          var Investment =$('#Investment').val().replace(/,/g, "");
          var Earnings = $('#Earnings').val().replace(/,/g, "");

            if($('#Investment').is(":visible")){
              $('#Investment').addClass("error");
              if($('#Investment').val().length == 0) return false;
            }
            if($('#Earnings').is(":visible")){
                $('#Earnings').addClass("error");
              if($('#Earnings').val().length == 0) return false;
            }
            
            $('#Investment').removeClass("error");
            $('#Earnings').removeClass("error");
            
            var resultratio = (ratio/ratiobased);
            var Investment2 = $('#Investment2').text("$"+Investment);
            var Earnings2 = $('#Earnings2').text("$"+Earnings);
          
            var TokenCoin = (Investment / SharePrice).toFixed(2);
            var TokenCoin2 = $('#TokenCoin2').text(TokenCoin+" Coins");
          
            var PercentageofEarnings = (resultratio*TokenCoin).toFixed(5);
            var PercentageofEarnings2 = $('#PercentageofEarnings2').text(PercentageofEarnings+"%");
          
            var Payout = (PercentageofEarnings*Earnings).toFixed(2);
            var Payout2 = $('#Payout').text("$"+Payout);

          //alert(PercentageofEarnings+"%");
            $.fn.digits = function(){ 
            return this.each(function(){ 
                $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
                })
            }

                $(".comma").digits();
            });
        

            $('.number_only').bind('keyup paste', function(){
               this.value = this.value.replace(/[^0-9]/g, '')
               return;
            });
            
            $(function(){ 
             
                $('input.number_only').keyup(function(event) {

                    // skip for arrow keys
                  if(event.which >= 37 && event.which <= 40) return;

                  // format number
                  $(this).val(function(index, value) {
                    return value
                    .replace(/\D/g, "")
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    ;
                  });
                });
            });
            
           
});
// resdyend

//jQuery to collapse the navbar on scroll
// $(window).scroll(function() {
//     if ($(".top-bar").offset().top > 150) {
//         $('.top-bar').addClass("top-nav-fixed");
//     } else {
//         $('.top-bar').removeClass("top-nav-fixed");
//     }
// });

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
