'use strict';

// Run when DOM is ready
$(function() {

  // Populate table from server
  $.getJSON("assets/table.json", function(data) {
    $.each(data, function(i,dish) {
      $('#table').append('<tr><td>' + data[i]["name"] + '</td><td>' + data[i]["ingredients"] + '</td></tr>');
    });
  });

  // Show addDish modal menu when button is clicked
  $("#addDish").click(function() {
    $('.ui.modal')
      .modal({
        inverted: true
      })
      .modal('show')
    ;
  });

  // Dropdown menu for Semantic UI
  $('.ui.dropdown')
    .dropdown()
  ;

});
