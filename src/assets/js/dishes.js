'use strict';

$(function(){
  $.getJSON("assets/table.json", function(data) {
    console.log('success');
    $.each(data, function(i,dish) {
      $('#table').append('<tr><td>' + data[i]["name"] + '</td><td>' + data[i]["ingredients"] + '</td></tr>');
    });
  });
});

// function add() {
//   var input = document.getElementsByClassName("ui.action.input");
//   var text = input.innerHTML;
// }