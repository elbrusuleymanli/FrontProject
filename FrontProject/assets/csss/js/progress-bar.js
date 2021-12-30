$(document).ready(function () {
  function modifValues() {
    var val = $(".download-prog-bar").attr("data-value");

    if (val >= 95) {
      val = 95;
    }

    var newVal = val * 1 + 0.5;

    var txt = Math.floor(newVal) + "%";

    $(".download-prog-bar").attr("data-value", newVal);
    $(".percentage").html(txt);
    $(".download-prog-bar").css("width", txt);
  }

  setInterval(function () {
    modifValues();
  }, 15);

  function modifValues2() {
    var val2 = $(".download-prog-bar2").attr("data-value");

    if (val2 >= 80) {
      val2 = 80;
    }

    var newVal2 = val2 * 1 + 0.5;

    var txt2 = Math.floor(newVal2) + "%";

    $(".download-prog-bar2").attr("data-value", newVal2);
    $(".percentage2").html(txt2);
    $(".download-prog-bar2").css("width", txt2);
  }

  setInterval(function () {
    modifValues2();
  }, 15);

  function modifValues3() {
    var val3 = $(".download-prog-bar3").attr("data-value");

    if (val3 >= 55) {
      val3 = 55;
    }

    var newVal3 = val3 * 1 + 0.5;

    var txt3 = Math.floor(newVal3) + "%";

    $(".download-prog-bar3").attr("data-value", newVal3);
    $(".percentage3").html(txt3);
    $(".download-prog-bar3").css("width", txt3);
  }

  setInterval(function () {
    modifValues3();
  }, 15);
});
