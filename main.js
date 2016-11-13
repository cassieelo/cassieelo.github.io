$(document).ready(function() {
    
    $(".fadein").hide().fadeIn(2500);
    $("header").hide();
    
    $("#aboutNav").click(function() {
       $("html, body").animate({
           scrollTop: $("#about").offset().top
       }, 900);
    });
     
    $("#productsNav").click(function() {
       $("html, body").animate({
           scrollTop: $("#products").offset().top
       }, 900);
        
        
    });
    
    $("#logo").click(function() {
       $("html, body").animate({
           scrollTop: $("#home").offset().top
       }, 900);
        
        
    });
    
    $("#tutorialsNav").click(function() {
       $("html, body").animate({
           scrollTop: $("#tutorials").offset().top
       }, 900);
        
        
    });
    
    
	if($("header").hasClass("hide")){
		var navPopPosition = 300;
		$(document).scroll(function() {
			if (navPopPosition <= $(document).scrollTop()) {
                if(!$("header").is(":visible"))
                {
                    $("header").fadeIn(400);
                }
			} else {
                $("header").fadeOut(400);
			}
		});
	}
    
});
         

