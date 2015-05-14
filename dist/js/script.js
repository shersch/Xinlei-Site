$(document).ready(function() {
    $("#works").hide();
    $("#contact").hide();
    
    var hideNav = function() {
        $("#navbar").removeClass("in");
    }
    
    $("#home-link").click(function(){
        event.preventDefault();
        $("#home").fadeIn("slow");
        $("#works").hide();
        $("#contact").hide();
        hideNav();
    });
    
        $("#works-link").click(function(){
        event.preventDefault();
        $("#works").fadeIn("slow");
        $("#home").hide();
        $("#contact").hide();
        hideNav();
    });
    
        $("#contact-link").click(function(){
        event.preventDefault();
        $("#contact").fadeIn("slow");
        $("#works").hide();
        $("#home").hide();
        hideNav();
    });
    
});