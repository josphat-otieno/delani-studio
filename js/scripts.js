$(document).ready(function(){
    $("#pp1").click(function(){
        $("#design").fadeToggle()
        $("#p1").fadeToggle();
    });
    $("#pp2").click(function(){
        $("#development").fadeToggle()
        $("#p2").fadeToggle();
    });
    $("#pp3").click(function(){
        $("#product").fadeToggle()
        $("#p3").fadeToggle();
    });
     $("#images").animate({
         opacity:1
 
 });
    $("#work1").hover(function() {
     $(this).stop().animate({opacity:.4},200);
     $("#jim").slideToggle();
 
 }, function() {
     $(this).stop().animate({opacity:1},500)
     $("#jim").fadeOut();
 });
 $("#work2").hover(function() {
    $(this).stop().animate({opacity:.4},200);
    $("#pyramid").slideToggle();

}, function() {
    $(this).stop().animate({opacity:1},500)
    $("#pyramid").fadeOut();
});
$("#work3").hover(function() {
    $(this).stop().animate({opacity:.4},200);
    $("#ontario").slideToggle();

}, function() {
    $(this).stop().animate({opacity:1},500)
    $("#ontario").fadeOut();
});
$("#work4").hover(function() {
    $(this).stop().animate({opacity:.4},200);
    $("#black").slideToggle();

}, function() {
    $(this).stop().animate({opacity:1},500)
    $("#black").fadeOut();
});
$("#work5").hover(function() {
    $(this).stop().animate({opacity:.4},200);
    $("#day").slideToggle();

}, function() {
    $(this).stop().animate({opacity:1},500)
    $("#day").fadeOut();
});
$("#work6").hover(function() {
    $(this).stop().animate({opacity:.4},200);
    $("#press").slideToggle();

}, function() {
    $(this).stop().animate({opacity:1},500)
    $("#press").fadeOut();
});
$("#work7").hover(function() {
    $(this).stop().animate({opacity:.4},200);
    $("#logo").slideToggle();

}, function() {
    $(this).stop().animate({opacity:1},500)
    $("#logo").fadeOut();
});
$("#work8").hover(function() {
    $(this).stop().animate({opacity:.4},200);
    $("#giraffe").slideToggle();

}, function() {
    $(this).stop().animate({opacity:1},500)
    $("#giraffe").fadeOut();
});
     document.getElementById("submit").addEventListener('click', function(){
  var name = $("pname").val();
  if ($("#pname").val() &&  $("#mail").val()) {
    alert("Hi " + name + ", we have received your message. Thank you for reaching out to us.");
  } else {
    alert("Please fill all fields!");
  }
     })

});