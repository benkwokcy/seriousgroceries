'use strict';

$(document).ready(function() {
 
  $('.ui.form').form({
    fields: {
      username: {
        identifier  : 'username',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a username'
          }
        ]
      },
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
    window.location = 'choice.html'; //After successful login, user will be redirected to home.html
  }
});

  // document.querySelector('#sign-out').addEventListener('click', function(e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     firebase.auth().signOut();
  // });
    
});
