$(function() {

	// jQuery Goes here!

	// When we click on the hamburger
	$('.fa-bars').on('click', function() {
		// We need to display flex the main nav
		console.log('Hi!');
		$('.navItems').toggleClass('show');
	});

});