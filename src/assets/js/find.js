"use strict";

// Run when DOM is ready
$(function() {

	document.querySelector('#done').addEventListener('click', function(e) {
		// if( $('.ui.form').form('is valid')) {
			// e.preventDefault();
			// e.stopPropagation();
			window.location = 'today.html';
		// }
	});

});

function initMap() {
	var coords = {lat: 48.465, lng: -123.315};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: coords
	});
	var thriftys = new google.maps.Marker({
		position: {lat: 48.4690, lng: -123.331545},
		map: map,
		title: "Thrifty Foods",
		animation: google.maps.Animation.DROP
	});
	var fairway = new google.maps.Marker({
		position: {lat: 48.459889, lng: -123.332024},
		map: map,
		title: "Fairway Markets",
		animation: google.maps.Animation.DROP
	});
	var peppers = new google.maps.Marker({
		position: {lat: 48.460997, lng: -123.296956},
		map: map,
		title: "Peppers Grocery",
		animation: google.maps.Animation.DROP
	});
	var saveonfoods = new google.maps.Marker({
		position: {lat: 48.469557, lng: -123.334042},
		map: map,
		title: "Save On Foods",
		animation: google.maps.Animation.DROP
	});
}