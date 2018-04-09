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

  // Change menu if user is signed in
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      $('#signin').hide();
      $('#signup').hide();
    } else {
      // No user is signed in.
      $('#signout').hide();
    }
  });

	// document.querySelector('#signout').addEventListener('click', function(e) {
  // });
  
  // Sign out user when sign out button is clicked.
  $('signout').bind('click', function() {
    firebase.auth().signOut();
  });

});
