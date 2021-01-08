$(document).ready(function () {
  $(".form-input").bind("blur", function () {
    $(this).parent().parent().removeClass("focus-hover").addClass("focus-none");
  });

  $(".form-input").bind("focus", function () {
    $(this).parent().parent().removeClass("focus-none").addClass("focus-hover");
  });
});
