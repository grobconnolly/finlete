var incrementWidthM = 100/(350);
var SharePrice = "9";
var ratio = "0.05";
var ratiobased = "100000";
var $1M = 1000000;


$(document).ready(function() {


    $('#SharePrice-label').text("$"+SharePrice);
    
    $("#price-range").slider({
        animate: true,
        value:1,
        min: 1,
        max: 350,
        //step: 7,
        slide: function(event, ui) {
            update(1,ui.value); //changed
            $(".filler").width(ui.value * incrementWidthM + "%");
        }
    });
    //Added, set initial value.
    $("#Earnings").val(0);
    $("#Earnings-label").text(0);
    
    update();
    
}).each(function() {
    var opt = $(this).data().uiSlider.options;
    var vals = (opt.max - opt.min) / 1000;
    for (var i = 0; i <= vals; i++) {
        var el = $('<label class="value-label">'+(i+1)+'TB</label>').css('left', 'calc('+(i/vals*100)+'% - 10px)');
        $(this).append(el);
    }
});

    //changed. now with parameter
    function update(slider,val) {
      //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
      var $PotentialCareerEarnings = slider == 1?val:$("#Earnings").val();
      var $total = $PotentialCareerEarnings*$1M;

      $( "#Earnings-label" ).text("$"+ $total);
      $( "#Earnings" ).val($total);
        
      
        var Investment =$('#Investment').val().replace(/,/g, "");
        var PotentialCareerEarnings = $('#Earnings').val().replace(/,/g, "");
    
          if($('#Investment').is(":visible")){
            $('#Investment').addClass("error");
            $('#nextstep').addClass('error');
            if($('#Investment').val().length == 0) return false;
          }
         
          
          $('#nextstep').removeClass('error');
          $('#Investment').removeClass("error");
              
          var resultratio = (ratio/ratiobased);
          
          $('#Investment-label').text("$"+Investment);
                   
          var Shares = (Investment / SharePrice).toFixed(4);
          
         $('#Shares-label').text(Shares+" Shares");

        
          var PercentageofEarnings = (resultratio*Shares).toFixed(5);
          
          $('#PercentageofEarnings-label').text(PercentageofEarnings+"%");
          
          var $payout = ($total * PercentageofEarnings).toFixed(4);

          var $payoutotal = ($payout) - (Investment);

          $('#Payout-label').text("$"+ $payoutotal);

        

       //$('#slider a').html('<label>'+$Investment+'</label>');
       $.fn.digits = function(){ 
        return this.each(function(){ 
            $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
            })
        }
  
        $(".comma").digits();

      
    }

   
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