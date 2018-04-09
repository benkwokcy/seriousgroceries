'use strict';

// Run when DOM is ready
$(function() {

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

  // Sign out user when sign out button is clicked.
  $('signout').bind('click', function() {
    firebase.auth().signOut();
  });

});
