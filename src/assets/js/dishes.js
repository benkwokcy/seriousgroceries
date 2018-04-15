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
		$('.ui.modal').modal({inverted: true}).modal('show');
	});

  	// Semantic UI Elements
  	$('.ui.dropdown').dropdown();
	$('.ui.radio.checkbox').checkbox();
	$('.ui.fluid.multiple.dropdown').dropdown({
		allowAdditions: true
	});

	// Add new recipe
	$("#create").click(function(event) {
		// event.preventDefault()
		let recipeName = $('.ui.form').form('get value', 'recipeName');
		let recipeCategory = $('.ui.form').form('get value', 'recipeCategory');
		let ingredients = $('.ui.form').form('get value', 'ingredients');
		let visibility = $('#dropdown').dropdown('set selected', value);
		console.log(recipeName);
		var dish = {name: recipeName, category: recipeCategory, ingredients: mainIngredients};
		console.log(dish);
		// db.collection("createRecipes").add(dish)
		// .then(function(docRef) {
		// 	console.log("Document written with ID: ", docRef.id);
		// })
		// .catch(function(error) {
		// 	console.error("Error adding document: ", error);
		// });
	});

	// Clear form when cancelling
	$("#cancel").click(function(event) {
		$('form').form('clear');
	});
  
});