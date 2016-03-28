
$(window).bind('resize', function(e)
{
 if (window.RT) clearTimeout(window.RT);
 window.RT = setTimeout(function()
 {
   this.location.reload(false); /* false to get page from cache */
 }, 100);
});
// init controller
	var controller = new ScrollMagic.Controller();

	// build Intro Scene
	var scene = new ScrollMagic.Scene({triggerElement: "#intro-animation-starter", duration: $(window).height()})
					// animate color and top border in relation to scroll position
					.setTween("#fronto", {yPercent: -50,xPercent: 0, rotation:0}) // the tween durtion can be omitted and defaults to 1

					.addTo(controller);

	var scene1 = new ScrollMagic.Scene({triggerElement: "#intro-animation-starter", duration: $(window).height()})
					// animate color and top border in relation to scroll position
					.setTween("#backo", {yPercent: -40,xPercent: 6, rotation: -40}) // the tween durtion can be omitted and defaults to 1
					.addTo(controller);

if (  $(window).width() < 480 ) {
	var scene2 = new ScrollMagic.Scene({triggerElement: "#hiw-animation", triggerHook: 'onEnter', offset: $(window).height()*0.85, duration: 1000})
						.setPin("#hiw-animation")
						.addTo(controller);
}else if (  $(window).width() < 768 ) {
	var scene2 = new ScrollMagic.Scene({triggerElement: "#hiw-animation", triggerHook: 'onEnter', offset: $(window).height()*0.75, duration: 1000})
						.setPin("#hiw-animation")
						.addTo(controller);
}else{
	var scene2 = new ScrollMagic.Scene({triggerElement: "#hiw-animation", triggerHook: 'onEnter', offset: $(window).height()*0.9, duration: 1000})
						.setPin("#hiw-animation")
						.addTo(controller);
}

	var scene3 = new ScrollMagic.Scene({triggerElement: "#line1", triggerHook: 'onLeave', duration: 300})
					// animate color and top border in relation to scroll position
					.setTween("#hiw-o", {yPercent: 170,xPercent: 0, rotation:0}) // the tween durtion can be omitted and defaults to 1
					.addTo(controller);

// if for the phone movement
if ( $(window).width() > 1200) {
	var scene4 = new ScrollMagic.Scene({triggerElement: "#line2",triggerHook: 'onLeave',  duration: 300})
					// animate color and top border in relation to scroll position
					.setTween("#phone-leash", {yPercent: 0, xPercent: 27, rotation:0, ease: Power4.easeInOut}) // the tween durtion can be omitted and defaults to 1
					.addTo(controller);
} else if ( $(window).width() > 990) {
	var scene4 = new ScrollMagic.Scene({triggerElement: "#line2",triggerHook: 'onLeave',  duration: 300})
					// animate color and top border in relation to scroll position
					.setTween("#phone-leash", {yPercent: 0, xPercent: 20, rotation:0, ease: Power4.easeInOut}) // the tween durtion can be omitted and defaults to 1
					.addTo(controller);
} else if ( $(window).width() > 480){
	var scene4 = new ScrollMagic.Scene({triggerElement: "#line2",triggerHook: 'onLeave',  duration: 300})
					// animate color and top border in relation to scroll position
					.setTween("#phone-leash", {yPercent: 0, xPercent: 25, rotation:0, ease: Power4.easeInOut}) // the tween durtion can be omitted and defaults to 1
					.addTo(controller);
} else {
	var scene4 = new ScrollMagic.Scene({triggerElement: "#line2",triggerHook: 'onLeave',  duration: 300})
					// animate color and top border in relation to scroll position
					.setTween("#phone-leash", {yPercent: 0, xPercent: 20, rotation:0, ease: Power4.easeInOut}) // the tween durtion can be omitted and defaults to 1
					.addTo(controller);
}// End if for the phone movement

	var scene5 = new ScrollMagic.Scene({triggerElement: "#line3",triggerHook: 'onLeave',  duration: 50})
					// animate color and top border in relation to scroll position
					.setTween("#phone-screen",  {autoAlpha: 1}) // the tween durtion can be omitted and defaults to 1
					.addTo(controller);

	var scene5 = new ScrollMagic.Scene({triggerElement: "#line3",triggerHook: 'onLeave',  duration: 50})
					// animate color and top border in relation to scroll position
					.setTween("#brokenLeash",  {autoAlpha: 1}) // the tween durtion can be omitted and defaults to 1
					.addTo(controller);

	var scene5 = new ScrollMagic.Scene({triggerElement: "#line1",triggerHook: 'onLeave',  duration: 150})
					// animate color and top border in relation to scroll position
					.setTween("#hiw-caption2",  {autoAlpha: 1}) // the tween durtion can be omitted and defaults to 1
					.addTo(controller);

	var scene7 = new ScrollMagic.Scene({triggerElement: "#line2",triggerHook: 'onLeave',  duration: 150})
					// animate color and top border in relation to scroll position
					.setTween("#hiw-caption3",  {autoAlpha: 1}) // the tween durtion can be omitted and defaults to 1
					.addTo(controller);

	var scene8 = new ScrollMagic.Scene({triggerElement: "#line3",triggerHook: 'onLeave',  duration: 150})
					// animate color and top border in relation to scroll position
					.setTween("#hiw-caption4",  {autoAlpha: 1}) // the tween durtion can be omitted and defaults to 1
					.addTo(controller);



	// jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
	    if ($(".navbar").offset().top > $(window).height()*2/3) {
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

// Lightbox

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$('videolightox').magnificPopup({
		type: 'image',
		closeBtnInside: false,
    closeOnContentClick: true,
  tLoading: '',
  });
