"use strict";

// Run when DOM is ready
$(function() {

    // create sidebar and attach to menu open
    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item')
    ;

});
