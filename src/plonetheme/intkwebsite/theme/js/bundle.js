/* Custom JS */

/* Menu animation */
jQuery(document).ready(function (){
	var isLateralNavAnimating = false;

	var menu_buttons = document.getElementsByClassName("cd-nav-trigger");

	var trigger_menu_button = function(event) {		
		if( !isLateralNavAnimating ) {
	      	if (jQuery(this).parents('.csstransitions').length > 0) isLateralNavAnimating = true; 
      		jQuery('body').toggleClass('navigation-is-open');
      
      		jQuery('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
	        	//animation is over
	        	isLateralNavAnimating = false;
	      	});
	    }
	};

	for (var i = 0; i < menu_buttons.length; i++) {
	    menu_buttons[i].addEventListener('click', trigger_menu_button, {passive: true});
		menu_buttons[i].addEventListener('touchstart', trigger_menu_button, {passive: true});
	}
	
});

