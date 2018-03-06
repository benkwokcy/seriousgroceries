// "use strict";

$(document)
  .ready(function() {

    // create sidebar and attach to menu open
    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item')
    ;

    // // initialize modal
    // $('.ui.modal')
    //   .modal()
    // ;
    
    // $('.test.modal')
    //     .modal('attach events', '#mymodalg', 'show')
    // ;

    // $("#loginmodal").click(function() {
    //     $.modal('show');
    // });

  })
;
