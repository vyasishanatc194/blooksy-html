$(document).ready(function () {
  $("#scratch-box-item-btn").click(function () {
    $(this).parent().toggleClass("active");
    $("#scratch-pad-root").toggleClass("active");
    $("#scratch-pad-active-main").toggleClass("active");
    $("#scratch-pad-active-header").toggleClass("active");
  });
});
