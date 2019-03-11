$(document).ready(function($) {

    $('.parallax-window').parallax({imageSrc: "https://maxpodufalov.github.io/gzhel/img/banner.jpg"});

	$(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 

});