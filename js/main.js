/* ===================================================================
* # MENU UI
*
* ------------------------------------------------------------------- */

// SHOW/HIDE NAV

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event) {
	didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();

	// Make sure they scroll more than delta
	if (Math.abs(lastScrollTop - st) <= delta) return;

	// If they scrolled down and are past the navbar, add class .nav-up.
	// This is necessary so you never see what is "behind" the navbar.
	if (st > lastScrollTop && st > navbarHeight) {
		// Scroll Down
		$('header').removeClass('show-nav').addClass('hide-nav');
		$('.nav-toggle').removeClass('open');
		$('.menu-left').removeClass('collapse');
	} else {
		// Scroll Up
		if (st + $(window).height() < $(document).height()) {
			$('header').removeClass('hide-nav').addClass('show-nav');
		}
	}

	lastScrollTop = st;
}

/* ===================================================================
* # SMOOTH SCROLL & PRE-LOADER
*
* ------------------------------------------------------------------- */

jQuery(document).ready(function($) {
	//Preloader
	$('.spinner').fadeOut(); // will first fade out the loading animation
	$('.spinner-wrapper').delay(600).fadeOut('slow'); // will fade out the white DIV that covers the website.
	//Smoothscroll
	$('.smoothscroll').on('click', function(e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			scrollTop: $target.offset().top
		}, 800, 'swing', function() {
			window.location.hash = target;
		});
	});
});

/* ===================================================================
* # WOW.JS ANIMATIONS
*
* ------------------------------------------------------------------- */

new WOW().init();
