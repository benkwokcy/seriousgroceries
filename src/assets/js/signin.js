'use strict';

// Run when DOM is ready
$(function() {

	// Set validation rules for form
	$('.ui.form').form({
		fields: {
			email: {
				identifier  : 'email',
				rules: [
					{
						type   : 'empty',
						prompt : 'Please enter your e-mail'
					},
					{
						type   : 'email',
						prompt : 'Please enter a valid e-mail'
					}
				]
			},
			password: {
				identifier  : 'password',
				rules: [
					{
						type   : 'empty',
						prompt : 'Please enter your password'
					},
					{
						type   : 'length[6]',
						prompt : 'Your password must be at least 6 characters'
					}
				]
			}
		}
	});

	// When form is submitted, sign user in with Firebase.
	document.querySelector('#signInButton').addEventListener('click', function(e) {
		if( $('.ui.form').form('is valid')) {
			e.preventDefault();
			e.stopPropagation();
			let email = $('.ui.form').form('get value', 'email');
			let password = $('.ui.form').form('get value', 'password');
			firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
				var errorCode = error.code;
      			var errorMessage = error.message;
				console.log(errorCode);
				console.log(errorMessage);
				if (errorCode == 'auth/wrong-password') {
					alert('Incorrect password.');
				} else if (errorCode == 'auth/user-not-found') {
					alert('Account not found.');
				}
			});
		}
	});

	//Sign in flow for Google Sign-In
	var provider = new firebase.auth.GoogleAuthProvider();
	document.querySelector('#google').addEventListener('click', function(e) {
		firebase.auth().signInWithPopup(provider).then(function(result) {
			// This gives you a Google Access Token. You can use it to access the Google API.
			var token = result.credential.accessToken;
			// The signed-in user info.
			var user = result.user;
			// ...
		  }).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;
			// ...
		  });
	});

	//Handle Account Status
	firebase.auth().onAuthStateChanged(user => {
		if (user) {
			window.location = 'today.html'; // After successful login, user will be redirected to home.html
		}
	});

});
