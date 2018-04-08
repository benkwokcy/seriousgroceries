'use strict';

$(function(){

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

  // Change menu if user is signed in
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      $('#loginButton').hide();
      $('#signupButton').hide();
    } else {
      // No user is signed in.
      $('#logoutButton').hide();
    }
  });

});
