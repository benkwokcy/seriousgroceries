'use strict';

// Run when DOM is ready
$(function() {

    $('.ui.dropdown').dropdown();

	var db = firebase.firestore();
    document.querySelector('#continue').addEventListener('click', function(e) {
		// if( $('.ui.form').form('is valid')) {
			
			// Add a new document with a generated id.
			db.collection("sgRecipes").add({
				name: "Tokyo",
				country: "Japan"
			})
			.then(function(docRef) {
				console.log("Document written with ID: ", docRef.id);
			})
			.catch(function(error) {
				console.error("Error adding document: ", error);
			});

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