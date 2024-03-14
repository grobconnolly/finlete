

// Set the date we're counting down to (February 28, 2024)
var countDownDate = new Date("February 28, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML with the calculated values
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer-eche").innerHTML = "OFFER EXPIRED 😕";
    }
}, 1000);
            
        // Function to handle play/pause for a specific video and button
        // var video_1 = document.getElementById("echedryVideo_1");
        // var playButton_1 = document.getElementById("playButton_1");
        // var btnImg_1 = document.getElementById("btnImg_1");

        // playButton_1.addEventListener("click", function() {
        //     if (video_1.paused) {
        //         video_1.play();
        //         btnImg_1.src = "images/echedry-page-assets/Btn-pause.png";
        //     } else {
        //         video_1.pause();
        //         btnImg_1.src = "images/echedry-page-assets/Btn-play.png";
        //     }
        // });
        // video 2
        var video = document.getElementById("echedryVideo_2");
        var playButton = document.getElementById("playButton_2");
        var btnImg = document.getElementById("btn-img");

        playButton.addEventListener("click", function() {
            if (video.paused) {
                video.play();
                btnImg.src = "images/echedry-page-assets/Btn-pause.png";
            } else {
                video.pause();
                btnImg.src = "images/echedry-page-assets/Btn-play.png";
            }
        });
        
        //  Popup video
        // document.addEventListener("DOMContentLoaded", function () {
        //     var videoPop = document.getElementById("echedryVideo_popup");
        //     var playButtonPop = document.getElementById("playButton_1");
        //     var closeButton = document.getElementById("close_video");

        //     playButtonPop.addEventListener("click", function () {
        //         videoPop.play();
        //     });

        //     closeButton.addEventListener("click", function () {
        //         videoPop.pause();
        //         videoPop.currentTime = 0; // Rewind video to the beginning
        //     });
        // });
      
    
    
    
    
        var incrementWidthM = 100 / 1500;
        var SharePrice = "8.00";

        $(document).ready(function () {
    
        $("#share-echedry").slider({
            min: 12, 
            max: 1500, 
            slide: function (event, ui) {
                //update(1, ui.value); //changed
                $(".filler").width(ui.value * incrementWidthM + "%");
                //$('#sharecount').text(ui.value + '');
                //$('#price-share').text('$' + (ui.value * SharePrice).toFixed(0));
                $('#sharecount').text(addCommas(ui.value));
                $('#price-share').text('$' + addCommas((ui.value * SharePrice).toFixed(0)));
                
                // Remove 'active' class from all elements
                $('#share-echedryTp .inline-perk-eche').removeClass('active');

                let perk = ui.value;

                if (perk > 24) {
                    $('#perk35').addClass('active');
                } else {
                    $('#perk35').removeClass('active');
                }

                if (perk > 49) {
                    $('#perk70').addClass('active');
                } else {
                    $('#perk70').removeClass('active');
                }

                if (perk > 99) {
                    $('#perk125').addClass('active');
                } else {
                    $('#perk125').removeClass('active');
                }

                if (perk > 499) {
                    $('#perk650').addClass('active');
                } else {
                    $('#perk650').removeClass('active');
                }

                if (perk === 1500) {
                    $('#perk30kplus').addClass('active');
                } else {
                    $('#perk30kplus').removeClass('active');
                }
               
            },
    
            })    
            
            $("#share-echedry_1").slider({
            min: 12, 
            max: 1500, 
            slide: function (event, ui) {
                //update(1, ui.value); //changed
                $(".filler2").width(ui.value * incrementWidthM + "%");
                //$('#sharecount_1').text(ui.value + '');
                //$('#price-share_1').text('$' + (ui.value * SharePrice).toFixed(0));
                $('#sharecount_1').text(addCommas(ui.value));
                $('#price-share_1').text('$' + addCommas((ui.value * SharePrice).toFixed(0)));
                // Remove 'active' class from all elements
                $('#share-echedryFT .inline-perk-eche').removeClass('active');

                let perk1 = ui.value;
                
                if (perk1 > 24) {
                    $('#perk35_1').addClass('active');
                } else {
                    $('#perk35_1').removeClass('active');
                }

                if (perk1 > 49) {
                    $('#perk70_1').addClass('active');
                } else {
                    $('#perk70_1').removeClass('active');
                }

                if (perk1 > 99) {
                    $('#perk125_1').addClass('active');
                } else {
                    $('#perk125_1').removeClass('active');
                }

                if (perk1 > 499) {
                    $('#perk650_1').addClass('active');
                } else {
                    $('#perk650_1').removeClass('active');
                }

                if (perk1 === 1500) {
                    $('#perk30kplus_1').addClass('active');
                } else {
                    $('#perk30kplus_1').removeClass('active');
                }


            },
    
            })    
            
        
            

        function addCommas(n) {
            return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        });
    
    