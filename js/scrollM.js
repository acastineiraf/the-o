//HERO ANIMATIONS

var wh = window.innerHeight,
	$fronto = $('.fronto'),
	$backo = $('.backo');

	// init
	var ctrl = new ScrollMagic.Controller({
	    globalSceneOptions: {
	        triggerHook: 'onLeave'
	    }
	});

	// Create scene
	$("section1").each(function() {

		new ScrollMagic.Scene({
			triggerElement: this,
			duration: '0%'
		})
		.setPin(this)
		.addTo(ctrl);

	});

	// O's intro animation Timeline
	var frontoIntroTl = new TimelineMax();
	frontoIntroTl
		.from($fronto, 1, {yPercent: -130,xPercent: 5, rotation:15})
		/*, ease: Power4.easeInOut*/
	  /*.to($iphone, 0.5, {opacity: 0, yPercent: -5, scale: 0.98}, '0');*/


		var backoIntroTl = new TimelineMax();
		backoIntroTl
			.from($backo, 1, {yPercent: -90,xPercent: 3, rotation:-13})

	// iPhone back to stylesheet position
	new ScrollMagic.Scene({
		duration: '100%'
	})
	.setTween(frontoIntroTl)
	.triggerElement($('body')[0])
	.addTo(ctrl);

	new ScrollMagic.Scene({
		duration: '100%'
	})
	.setTween(backoIntroTl)
	.triggerElement($('body')[0])
	.addTo(ctrl);

	// jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
	    if ($(".navbar").offset().top > 300) {
	        $(".navbar-fixed-top").addClass("top-nav-collapse");
	    } else {
	        $(".navbar-fixed-top").removeClass("top-nav-collapse");
	    }
	});

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
	    $('a.page-scroll').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });
	});
	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
	    $('.navbar-toggle:visible').click();
	});
