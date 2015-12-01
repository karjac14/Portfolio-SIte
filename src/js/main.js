
//nav auto scroll

$(function(){$("#nav-about, #learnmore").click(function(){
  $("html,body").animate({scrollTop:$("#about").offset().top},"1000");return false})});

$(function(){$("#nav-portfolio").click(function(){
  $("html,body").animate({scrollTop:$("#portfolio").offset().top},"1000");return false})});

$(function(){$("#nav-contact").click(function(){
  $("html,body").animate({scrollTop:$("#contact").offset().top},"1000");return false})});

//blinking cursor

function blinker() {
	  $('.cursor').fadeOut(200);
	  $('.cursor').fadeIn(200);
}
setInterval(blinker, 800);


// portfolio event listener
$('#port-ziptrip').on('click', function(){
  $(this).toggleClass('clicked');
	$('#port-dyel,#port-kvsk').removeClass('clicked');
	$('#about').addClass('down');
  $('#port-ziptrip-long-desc').slideToggle('50');
  $('#port-dyel-long-desc,#port-kvsk-long-desc').hide();
});

$('#port-dyel').on('click', function(){
  $(this).toggleClass('clicked');
	$('#port-ziptrip,#port-kvsk').removeClass('clicked');
	$('#about').addClass('down');
  $('#port-dyel-long-desc').slideToggle('50');
  $('#port-ziptrip-long-desc,#port-kvsk-long-desc').hide();
});

$('#port-kvsk').on('click', function(){
  $(this).toggleClass('clicked');
	$('#port-dyel,#port-ziptrip').removeClass('clicked');
	$('#about').addClass('down');
  $('#port-kvsk-long-desc').slideToggle('50');
  $('#port-ziptrip-long-desc,#port-dyel-long-desc').hide();
});
