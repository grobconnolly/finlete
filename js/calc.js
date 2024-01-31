// calculator fn
jQuery(document).ready(function ($) {
  var SharePrice = "9";
  var ratio = "0.1";
  var ratiobased = "10000";
  var SharePrice2 = $("#SharePrice").text("$" + SharePrice + ".00");

  $("#Calculate").click(function () {
    var Investment = $("#Investment").val().replace(/,/g, "");
    var Earnings = $("#Earnings").val().replace(/,/g, "");

    if ($("#Investment").is(":visible")) {
      $("#Investment").addClass("error");
      if ($("#Investment").val().length == 0) return false;
    }
    if ($("#Earnings").is(":visible")) {
      $("#Earnings").addClass("error");
      if ($("#Earnings").val().length == 0) return false;
    }

    $("#Investment").removeClass("error");
    $("#Earnings").removeClass("error");

    var resultratio = ratio / ratiobased;
    var Investment2 = $("#Investment2").text("$" + Investment);
    var Earnings2 = $("#Earnings2").text("$" + Earnings);

    var Shares = (Investment / SharePrice).toFixed(2);
    var Shares2 = $("#Shares2").text(Shares + " Shares");

    var PercentageofEarnings = (resultratio * Shares).toFixed(5);
    var PercentageofEarnings2 = $("#PercentageofEarnings2").text(
      PercentageofEarnings + "%"
    );

    var Payout = (PercentageofEarnings * Earnings).toFixed(2);
    var Payout2 = $("#Payout").text("$" + Payout);

    if (parseFloat(Payout) < parseFloat(Investment)) {
      $("#Payout-label").css("color", "#ff0000");
    } else {
      $("#Payout-label").css("color", "#44a647");
    }

    //alert(PercentageofEarnings+"%");
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
  });

  $(".number_only").bind("keyup paste", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
    return;
  });

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

  $("select#Earnings").change(function () {
    if ($("select#Earnings option:selected").hasClass("active")) {
      $(".spotresult").addClass("active");
    } else {
      $(".spotresult").removeClass("active");
    }
  });
});
// resdyend
