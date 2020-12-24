$(document).ready(function () {
  /* mobile menu */
  $("#menu-open").click(function () {
    $("#dashboard-menu-clone").addClass("active");
    $(".right-side-nav").addClass("active");
    $(".backdrop-menu-layer").addClass("active");
    $(".nav-dashboard-right").addClass("active");
  });

  $("#menu-closed").click(function () {
    $("#dashboard-menu-clone").removeClass("active");
    $(".right-side-nav").removeClass("active");
    $(".backdrop-menu-layer").removeClass("active");
    $(".nav-dashboard-right").removeClass("active");
  });

  /* End of mobile menu */

  $("[data-toggle='tooltip']").tooltip({ html: true });

  $(".backdrop-menu-layer").click(function () {
    $("#dashboard-menu-clone").removeClass("active");
    $(".left-side-nav").removeClass("active");
    $(".backdrop-menu-layer").removeClass("active");
    $(".nav-dashboard-right").removeClass("active");
  });
});
