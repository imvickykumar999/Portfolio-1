$(document).click(function(e) {
	if (!$(e.target).is('.topnav')) {
    	$('.collapse').collapse('hide');	    
    }
});