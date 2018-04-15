'use strict';

// Run when DOM is ready
$(function() {

	// Populate Table from Firestore
	var db = firebase.firestore();
	populate("sgRecipes", db);
	populate("userRecipes", db);

	// Show addDish modal menu when button is clicked
	$("#addDish").click(function() {
		$('.ui.modal').modal({inverted: true}).modal('show');
	});

  	// Semantic UI Elements
  	$('.ui.dropdown').dropdown();
  	$('.ui.radio.checkbox').checkbox();

	// Add new recipe
	$("#create").click(function(event) {
		// event.preventDefault()
		let recipeName = $('.ui.form').form('get value', 'recipeName');
		let recipeCategory = $('.ui.form').form('get value', 'recipeCategory');
		let mainIngredients = $('.ui.form').form('get value', 'mainIngredients');
		let secondaryIngredients = $('.ui.form').form('get value', 'secondaryIngredients');
		// let visibility = $('.ui.form').form('is checked', 'private');
		console.log(recipeName);
		var dish = {name: recipeName, category: recipeCategory, ingredients: mainIngredients};
		console.log(dish);
		db.collection("createRecipes").add(dish)
		.then(function(docRef) {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch(function(error) {
			console.error("Error adding document: ", error);
		});
	});
  
});

function populate(collection, db) {
	db.collection(collection).get().then(function(querySnapshot) {
		querySnapshot.forEach(function(doc) {
			$('#table').append('<tr><td>' + doc.data().name + '</td><td>' + doc.data().ingredients + '</td></tr>');
		});		
	});
}