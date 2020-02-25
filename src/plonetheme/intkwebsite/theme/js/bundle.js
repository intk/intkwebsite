/* Custom JS */

require([
  'jquery',
], function($, dep1, logger){
  'use strict';
  
  // initialize only if we are in top frame
  if (window.parent === window) {
    
    jQuery(document).ready(function() {
      jQuery('body').addClass('intkwebsite-main');
    });


  }
});