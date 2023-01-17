$(document).ready(function() {
          $("#slider").slider({
              animate: true,
              value:1,
              min: 0,
              max: 100000,
              step: 10,
              slide: function(event, ui) {
                  update(1,ui.value); //changed
              }
          });
          //Added, set initial value.
          $("#amount").val(0);
          $("#amount-label").text(0);
          
          update();
      });

      //changed. now with parameter
      function update(slider,val) {
        //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
        var $amount = slider == 1?val:$("#amount").val();

        /* commented
        $amount = $( "#slider" ).slider( "value" );
         */
				if( $amount <= 2000 ){
               $total = "₹" + (($amount * 9)  / 100);
					$('#percentage-label').html('9');
            }
            
            else{
               $total = "₹" + (($amount * 10)  / 100);
							$('#percentage-label').html('10');
            }
         //$total = "₹" + (($amount * 10)  / 100);
         $( "#amount" ).val($amount);
         $( "#amount-label" ).text($amount);
         $( "#total" ).val($total);
         $( "#total-label" ).text($total);

         $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
         
      }