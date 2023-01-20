var incrementWidthM = 100 / 300;
var SharePrice = "9";
var ratio = "0.05";
var ratiobased = "100000";
var $1M = 10000000;
let value;

$(document).ready(function () {
  $("#SharePrice-label").text("$" + SharePrice);

  const ch = $("span.ui-slider-label");

  $("span.ui-slider-label").click(function (e) {
    alert("called");
  });
  // console.log(ch);

  $("#Investment").on("input", function () {
    update(1);
  });

  $("#price-range")
    .slider({
      animate: true,
      value: 25,
      min: 0,
      max: 300,
      // step:30,
      //step: 7,
      slide: function (event, ui) {
        update(1, ui.value); //changed
      },
    })
    .slider("pips", {
      rest: "label",
      step: 50,
      prefix: "$",
      suffix: "M",
    })
    .slider("float", {
      suffix: "M",
      slide: function (event, ui) {
        update(1, ui.value); //changed
      },
    });
  $("#price-range")
    .find("span .ui-slider-label")
    .click(function (e) {
      update(1, $(this).attr("data-value"));
    });
  //Added, set initial value.
  $("#Earnings").val(0);
  $("#Earnings-label").text(0);

  update();
});

//changed. now with parameter
function update(slider, val) {
  if (val == undefined && value == undefined) {
    val = 25;
  } else if (value == undefined || val != undefined) {
    value = val;
  } else if (val == undefined) {
    val = value;
  }
  $(".filler").width(val * incrementWidthM + "%");
  //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
  var $PotentialCareerEarnings = slider == 1 ? val : $("#Earnings").val();
  var $total = $PotentialCareerEarnings * $1M;

  $(".tooltipslider").html("<i></i> " + $PotentialCareerEarnings + "M");

  $("#Earnings-label").text("$" + $total);
  $("#Earnings").val($total);

  var Investment = $("#Investment").val().replace(/,/g, "");
  var $PotentialCareerEarnings = $("#Earnings").val().replace(/,/g, "");

  if ($("#Investment").is(":visible")) {
    $("#Investment").addClass("error");
    $("#nextstep").addClass("error");
    if ($("#Investment").val().length == 0) return false;
  }

  $("#nextstep").removeClass("error");
  $("#Investment").removeClass("error");

  var resultratio = ratio / ratiobased;

  $("#Investment-label").text("$" + Investment);

  var Shares = (Investment / SharePrice).toFixed(4);

  $("#Shares-label").text(Shares + " Shares");

  var PercentageofEarnings = (resultratio * Shares).toFixed(5);

  $("#PercentageofEarnings-label").text(PercentageofEarnings + "%");

  var $payout = ($total * PercentageofEarnings).toFixed(4);

  var $payoutotal = parseFloat($payout - Investment);

  $("#Payout-label").text("$" + $payoutotal);

  //$('#slider a').html('<label>'+$Investment+'</label>');
  $.fn.digits = function () {
    return this.each(function () {
      $(this).text(
        $(this)
          .text()
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
      );
    });
  };

  $(".comma").digits();
}

$(function () {
  $("input.number_only").keyup(function (event) {
    // skip for arrow keys
    if (event.which >= 37 && event.which <= 40) return;

    // format number
    $(this).val(function (index, value) {
      return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
  });
});
