/**
 * author: Benjamin Kwok
 */

'use strict';

/**********  IMPORTS  **********/
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK
const admin = require('firebase-admin');
admin.initializeApp();

/**********  WEB SCRAPER  **********/
// Scrape Thrifty Food JSON flyer from Flipp
exports.scrape = functions.https.onRequest((request, response) => {

    var db = admin.firestore();
    var url = "https://backflipp.wishabi.com/flipp/items/search?locale=en-ca&postal_code=V8N2P5&q=Thrifty Foods"
    var request = require('request');
    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
         var flyer = JSON.parse(body);   
        for (let item in flyer.items) {
            db.collection("flyersTest").add({
                name: flyer.items[item].name,
                valid_to: flyer.items[item].valid_to,
                valid_from: flyer.items[item].valid_from,
                store_name: flyer.items[item].merchant_name
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        }
      }
    })

    response.send("Scrape complete!");
    
});
