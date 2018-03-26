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
                        type   : 'length[6]',
                        prompt : 'Your password must be at least 6 characters'
                    }
                ]
            }
        }
    });

    document.querySelector('#signInButton').addEventListener('click', function(e) {
        if( $('.ui.form').form('is valid')) {
            e.preventDefault();
            e.stopPropagation();
            let email = $('.ui.form').form('get value', 'email');
            let password = $('.ui.form').form('get value', 'password');
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                console.log(error.code);
                console.log(error.message);
            });
        }
    });

    // document.querySelector('#sign-out').addEventListener('click', function(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     firebase.auth().signOut();
    // });
    
});
