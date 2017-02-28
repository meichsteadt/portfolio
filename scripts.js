$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#navbar').fadeIn(500);
    }
    else {
      $('#navbar').fadeOut(500);
    }
  });
	// Cache the Window object
	var $window = $(window);
	// Parallax Backgrounds
	// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641

	$('div[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object

		$(window).scroll(function() {

			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			// Put together our final background position
			var coords = '50% '+ yPos + 'px';

			// Move the background
			$bgobj.css({ backgroundPosition: coords });

      //Darkens the background on scroll down
      $('.background').css('filter', "brightness(" + (50 - (($window.scrollTop()/$window.height())*30)) + '%)');
      var contentScroll = ($window.scrollTop()/$window.height())*($window.height()/3);
      if( contentScroll < 300)
      $('.content').css('margin-top', contentScroll + 'px')
		}); // end window scroll
	});

  //Show nav on scroll
});
