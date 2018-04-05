'use strict';

$(document).ready(function() {
 
  
  $('.ui.form').form({
    fields: {
      username: {
        identifier  : 'username',
        rules: [
          {type   : 'empty', prompt : 'Please enter a username'}
        ]
      },
      email: {
        identifier  : 'email',
        rules: [
          {type   : 'empty', prompt : 'Please enter your e-mail'},
          {type   : 'email', prompt : 'Please enter a valid e-mail'}
        ]
      },
      password: {
        identifier  : 'password',
        rules: [
          {type   : 'empty', prompt : 'Please enter your password'},
          {type   : 'length[6]', prompt : 'Your password must be at least 6 characters'}
        ]
      }
    }
  });

  document.querySelector('#signUpButton').addEventListener('click', function(e) {
      if( $('.ui.form').form('is valid')) {
          var email, password;

          e.preventDefault();
          e.stopPropagation();
          email = $('.ui.form').form('get value', 'email');
          password = $('.ui.form').form('get value', 'password');
          firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
              console.log(error.code);
              console.log(error.message);
          });
      }
  });

  //Handle Account Status
  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      window.location = 'choice.html'; // After successful login, user will be redirected to home.html
    }
  });

  // document.querySelector('#sign-out').addEventListener('click', function(e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     firebase.auth().signOut();
  // });
    
});

/**
 * initApp handles setting up UI event listeners and registering Firebase auth listeners:
 *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
 *    out, and that is where we update the UI.
 */
function initApp() {
  // Listening for auth state changes.
  // [START authstatelistener]
  firebase.auth().onAuthStateChanged(function(user) {
    // [START_EXCLUDE silent]
    document.getElementById('quickstart-verify-email').disabled = true;
    // [END_EXCLUDE]
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // [START_EXCLUDE]
      document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
      document.getElementById('quickstart-sign-in').textContent = 'Sign out';
      document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
      if (!emailVerified) {
        document.getElementById('quickstart-verify-email').disabled = false;
      }
      // [END_EXCLUDE]
    } else {
      // User is signed out.
      // [START_EXCLUDE]
      document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
      document.getElementById('quickstart-sign-in').textContent = 'Sign in';
      document.getElementById('quickstart-account-details').textContent = 'null';
      // [END_EXCLUDE]
    }
    // [START_EXCLUDE silent]
    document.getElementById('quickstart-sign-in').disabled = false;
    // [END_EXCLUDE]
  });
  // [END authstatelistener]
  document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
  document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
  document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
  document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
}