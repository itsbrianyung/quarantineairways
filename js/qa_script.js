$(document).ready(function () {
	var currentYear = new Date().getFullYear();
	$('.globalfooter-copyright-year').html(currentYear);
	
	$('.globalnav-icon').click(function () {
		if ($('.globalnav-wrapper').hasClass('open')) {
			$('.globalnav-wrapper').removeClass('open');
		} else {
			$('.globalnav-wrapper').addClass('open');
		}
		if ($('body').hasClass('no-scroll')) {
			$('body').removeClass('no-scroll');
		} else {
			$('body').addClass('no-scroll');
		}
	});
	
	var rellax = new Rellax('.parallax');
});