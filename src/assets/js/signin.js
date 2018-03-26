'use strict';

$(document).ready(function() {
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
                        type   : 'length[1]',
                        prompt : 'Your password must be at least 6 characters'
                    }
                ]
            }
        },
        onSuccess: function(event, fields) {
            let email = $('.ui.form').form('get value', 'email');
            let password = $('.ui.form').form('get value', 'password');
            alert(email + password);

            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
            });

            // alert("help!");
            // event.preventDefault();
            // $.ajax({
            //     type: 'post',
            //     url: 'signin.html',
            //     data: $('form').serialize(),
            //     success: function () {
            //         alert("something happened");
            //     }            
            // });
        }
    });
    // $('.ui.form').submit(function() {
    //     if( $('.ui.form').form('is valid')) {
    //         // form is valid (both email and name)
    //         submitForm();
    //     }
    // });
});

function submitForm() {
    // let email = $('.ui.form').form('get value', 'email');
    // let password = $('.ui.form').form('get value', 'password');
    // alert(email + password);
    // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //   });
}
