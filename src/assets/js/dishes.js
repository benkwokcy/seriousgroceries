'use strict';

// Run when DOM is ready
$(function() {

	// Populate DataTable from Firestore
	var db = firebase.firestore();
	var table = $('#myTable').DataTable();
	populate("sgRecipes", db, table);
	populate("userRecipes", db, table);
		
	// Add new row to table
	function populate(collection, db, table) {
		db.collection(collection).get().then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				table.row.add( [
					doc.data().name,
					doc.data().ingredients,
					doc.data().category,
					'<a href="#"><i class="edit icon"></i></a>',
					'<a href="#"><i class="trash icon"></i></a>'
				] );
			});		
			table.draw();
		});
	}

	// Show addDish modal menu when button is clicked
	$('#addDish').click(function() {
		$('.ui.modal').modal({inverted: true,closable: false}).modal('show');
	});

  	// Semantic UI Elements
  	$('.ui.dropdown').dropdown();
	$('.ui.radio.checkbox').checkbox();
	$('.ui.fluid.multiple.dropdown').dropdown({
		allowAdditions: true
	});

	// Add new recipe
	$("#create").click(function(event) {
		let name = $('.ui.form').form('get value', 'recipeName');
		let category = $('.ui.form').form('get value', 'recipeCategory');
		let ingredients = $('.ui.form').form('get value', 'ingredients');
		let shared = $('.ui.checkbox').checkbox('is checked')[0] === false;
		var dish = {name: name, ingredients: ingredients, category: category, shared: shared};

		db.collection("recipes").add(dish)
		.then(function(docRef) {
			console.log("Document written with ID: ", docRef.id);
			table.row.add( [
				dish.name,
				dish.ingredients,
				dish.category,
				'<a href="#"><i class="edit icon"></i></a>',
				'<a href="#"><i class="trash icon"></i></a>' 
			] ).draw();
		})
		.catch(function(error) {
			console.error("Error adding document: ", error);
			alert("Could not create recipe.");
		});
	});

	// Clear form when cancelling
	$("#cancel").click(function(event) {
		$('form').form('clear');
	});
  
});

// moveStuff("sgRecipes","recipes", db);
// moveStuff("userRecipes","recipes", db);

// function moveStuff(a,b,db) {
// 	db.collection(a).get().then(function(querySnapshot) {
// 		querySnapshot.forEach(function(doc) {
// 			// doc.data() is never undefined for query doc snapshots
// 			db.collection(b).add(doc.data());
// 			console.log("Document written from", a);
// 		});
// 	});
// }