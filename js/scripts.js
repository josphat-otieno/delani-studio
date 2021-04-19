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
 $("work1").hover(function() {
     $(this).stop().animate({opacity:.4},200);
     $("#jim").fadeIn();
 
 }, function() {
     $(this).stop().animate({opacity:1},500)
     $("#jim").fadeOut();
 });
     document.getElementById("submit").addEventListener('click', function(){
  var name = $("pname").val();
  if ($("#pname").val() &&  $("#mail").val()) {
    alert("Hi " + name + ", we have received your message. Thank you for reaching out to us.");
  } else {
    alert("Please fill all fields!");
  }
     })
    // $("#forms").submit(function(event){
    //     let personName=$("#pname").val();
    //     let emailAddress = $("#mail").val();
    //     let typedMessage = $("#message").val()
    //     if(personName!="" && emailAddress!="" && typedMessage!=""){
    //         alert($("#name.text(personName))")+ "we have received your message. Thank you for reaching out to us.")
    //     } else if(personName=="" && emailAddress=="" && typedMessage=="")
    //     event.preventDefault();
    // });
});