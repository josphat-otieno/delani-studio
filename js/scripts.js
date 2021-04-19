$(document).ready(function(){
    $("#design").click(function(){
        $("#design").fadeToggle()
        $("#p1").toggle(function(click){
            $("this").fadeToggle()
        })
        
    })
    $("#development").click(function(){
        $("#development").toggle()
        $("#p2").toggle(function(click){
            $("this").fadeOut()
        })
        
    })
    $("#product").click(function(){
        $("#product").toggle()
        $("#p3").toggle(function(click){
            $("this").fadeOut()
        })
        
    })
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
    $("#forms").submit(function(event){
        let personName=$("#pname").val();
        let emailAddress = $("#mail").val();
        let typedMessage = $("#message").val()
        if(personName!="" && emailAddress!="" && typedMessage!=""){
            alert($("#name.text(personName))")+ "we have received your message. Thank you for reaching out to us.")
        } else if(personName=="" && emailAddress=="" && typedMessage=="")
        event.preventDefault();
    });
});