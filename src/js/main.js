




//nav stay top
// credit to: http://stanhub.com/scroll-to-top-then-fixed-navigation-effect-with-jquery-and-css-free-download/

$(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 40;
			 if ($(window).scrollTop() > navHeight) {
				 $('.nav-main').addClass('stay-top');
			 }
			 else {
				 $('.nav-main').removeClass('stay-top');
			 }
		});
	});
