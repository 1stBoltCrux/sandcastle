$(document).ready(function() {
  $(".clickable").click(function() {
    $(".test1").fadeToggle();
    $(".test2").slideToggle();
  });
  $("button#night").click(function() {
    $("body").removeClass();
    $("body").addClass("night");
  });
  $("button#day").click(function() {
    $("body").removeClass();
    $("body").addClass("day");
  });
  $(".highlight").click(function(){
    $(".highlight2").removeClass("box");
    $(".highlight2").addClass("box");
  })
});
