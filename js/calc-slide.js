var incrementWidthM = 100/(300);

$(document).ready(function() {
    
        $("#price-range").slider({
            animate: true,
            value:1,
            min: 1,
            max: 300,
            //step: 7,
            slide: function(event, ui) {
                update(1,ui.value); //changed
                $(".filler").width(ui.value * incrementWidthM + "%");
            }
        });
        //Added, set initial value.
        $("#Investment").val(0);
        $("#Investment-label").text(0);
        
        update();
    });

    //changed. now with parameter
    function update(slider,val) {
      //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
      var $Investment = slider == 1?val:$("#Investment").val();

        var $SharePrice = "9";
        var $ratio = "0.0250";
        var $ratiobased = "100000";
       
         $('#SharePrice').text("$"+$SharePrice+".00");

        var $resultratio = ($ratio/$ratiobased);
        
        $('#Investment2').text("$"+$Investment);
        
        var $Shares = ($Investment / $SharePrice).toFixed(2);
        
        $('#Shares2').text($Shares+" Shares");
        
        var $PercentageofEarnings = ($resultratio*$Shares).toFixed(5);
       
        $('#PercentageofEarnings2').text($PercentageofEarnings+"%");
        
       

       
     
        $( "#Investment" ).val($Investment);
        
        var $Payout = ($Investment*$PercentageofEarnings).toFixed(3);

        $( "#Payout2" ).text("$"+$Payout);
       
       

       //$('#slider a').html('<label>'+$Investment+'</label>');
       
    }