$( document ).ready(function() {
     
    $(".button-collapse").sideNav();

    $('.slider').slider(
	  {
	    dist: 0,
	    padding: 0,
	    fullWidth: true,
	    indicators: true,
	    duration: 100,
	  }
  	);

autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 10000);
}

	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},6000);
	});

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

    $('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	$('.carousel').carousel({
    padding: 200    
		});
		autoplay()   
		function autoplay() {
		    $('.carousel').carousel('next');
		    setTimeout(autoplay, 2000);
		}

})

