
/* 1. Proloder */
$(window).on('load', function () {
	// $('.preloader').delay(350).fadeOut('slow');
	// $('body').delay(350).css({
	//   'overflow': 'visible'
	// });
	$(document).click(function(e) {
		if (!$(e.target).is('.topnav')) {
			$('.collapse').collapse('hide');	    
		}
	});
  });

