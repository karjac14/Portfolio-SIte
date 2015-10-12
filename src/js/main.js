




//nav stay top
// credit to: http://stanhub.com/scroll-to-top-then-fixed-navigation-effect-with-jquery-and-css-free-download/

$(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 60;
			 if ($(window).scrollTop() > navHeight) {
				 $('.nav-main').addClass('stay-top');
         $('.nav-filler').addClass('filling');
			 }
			 else {
				 $('.nav-main').removeClass('stay-top');
         $('.nav-filler').removeClass('filling');
			 }
		});

    $('#nav-toggle').on('click', function (){
      $('.nav-menu').slideToggle('50');
    });

		function blinker() {
		  $('.cursor').fadeOut(300);
		  $('.cursor').fadeIn(300);
		}
		setInterval(blinker, 600);


	});
