'use strict';

// Run when DOM is ready
$(function() {

    $('.ui.dropdown').dropdown();

    document.querySelector('#continue').addEventListener('click', function(e) {
		// if( $('.ui.form').form('is valid')) {
			var diet = $('#adropdown').dropdown('get value');
			window.location = 'find.html';
		// }
	});

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
		  // User is signed in.
		} else {
		  // No user is signed in.
		//   window.location = 'today.html';
		}
	  });
	  

});