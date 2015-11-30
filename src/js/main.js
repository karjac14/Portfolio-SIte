

$('#port-ziptrip').on('click', function(){
  $(this).toggleClass('clicked');
	$('#port-dyel,#port-kvsk').removeClass('clicked');
  $('#port-ziptrip-long-desc').slideToggle('50');
  $('#port-dyel-long-desc,#port-kvsk-long-desc').hide(); // to refactor?
});

$('#port-dyel').on('click', function(){
  $(this).toggleClass('clicked');
	$('#port-ziptrip,#port-kvsk').removeClass('clicked');
  $('#port-dyel-long-desc').slideToggle('50');
  $('#port-ziptrip-long-desc,#port-kvsk-long-desc').hide(); // to refactor?
});

$('#port-kvsk').on('click', function(){
  $(this).toggleClass('clicked');
	$('#port-dyel,#ziptrip').removeClass('clicked');
  $('#port-kvsk-long-desc').slideToggle('50');
  $('#port-ziptrip-long-desc,#port-dyel-long-desc').hide(); // to refactor?
});
