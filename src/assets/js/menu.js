'use strict';

// Run when DOM is ready
$(function() {
  
  // Change menu if logged in
  firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			// User is signed in.
			$('#signin').hide();
			$('#signup').hide();
			$('#signout').show();
		} else {
			// No user is signed in.
			$('#signout').hide();
			$('#signin').show();
			$('#signup').show();
		}
	});
	
	// Sign out user when sign out button is clicked.
	$('#signout').on('click', function() {
		firebase.auth().signOut();
		alert("Log out successful");
	});
});
