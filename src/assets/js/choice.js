'use strict';

$(document)
    .ready(function() {
        $('.ui.form')
        .form({
            fields: {
            username: {
                identifier  : 'username',
                rules: [
                {
                    type   : 'empty',
                    prompt : 'Please enter your username'
                }
                ]
            },
            email: {
                identifier  : 'email',
                rules: [
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
                    type   : 'length[6]',
                    prompt : 'Your password must be at least 6 characters'
                }
                ]
            }
            }
        })
        ;
    })
;