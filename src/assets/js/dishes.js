'use strict';

$(function(){
  $.getJSON("assets/table.json", function(data) {
    // console.log('success');
    $.each(data, function(i,dish) {
      $('#table').append('<tr><td>' + data[i]["name"] + '</td><td>' + data[i]["ingredients"] + '</td></tr>');
    });
  });
  $( "#addDish" ).click(function() {
    $('.ui.modal').modal('show');
  });
});
