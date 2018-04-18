'use strict';

// Run when DOM is ready
$(function() {

	// Redirect unlogged in users
	// firebase.auth().onAuthStateChanged(user => {
	// 	if(!user) {
	// 		window.location = 'signin.html'; 
	// 	}
	// });

	// Populate DataTable from Firestore
	var db = firebase.firestore();
	var table = $('#myTable').DataTable();
	populate("recipes", db, table);
		
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

  	// Semantic UI Elements
  	$('.ui.dropdown').dropdown();
	$('.ui.radio.checkbox').checkbox();
	$('.ui.fluid.multiple.dropdown').dropdown({
		allowAdditions: true
	});

	// Show addDish modal menu when button is clicked
	$('#addDish').click(function() {
		$('.ui.modal').modal({inverted: true,closable: false}).modal('show');
	});

	// Add new recipe
	$("#create").click(function(event) {
		if( $('.ui.form').form('is valid')) {
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
				$('form').form('clear');
			})
			.catch(function(error) {
				console.error("Error adding document: ", error);
				alert("Could not create recipe.");
			});
		} else {
			event.preventDefault();
			event.stopPropagation();
			$('.ui.form').form('validate form');
		}
	});

	// Clear form when cancelling
	$("#cancel").click(function(event) {
		$('form').form('clear');
	});

	// Set validation rules for form
	$('.ui.form').form({
		fields: {
			recipeName: 'empty',
			recipeCategory: 'empty',
			ingredients: 'empty'
		}
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