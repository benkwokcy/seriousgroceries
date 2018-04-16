'use strict';

// Run when DOM is ready
$(function() {
	
	// Semantic UI Elements
	$('.ui.dropdown').dropdown();
	$('.special.cards .image').dimmer({
		on: 'hover'
	});

	// Populate Tables 1 and 2 from Firestore
	var db = firebase.firestore();
	populate(db, "Quick", "cards");
	populate(db, "Thanksgiving", "cards2");

});

// Append card to table
function populate(db, category, id) {
	db.collection("recipes").where("category", "==", category).orderBy("score", "desc").get().then(function(querySnapshot) {
		querySnapshot.forEach(function(doc) {
			// doc.data() is never undefined for query doc snapshots
			// console.log(doc.id, " => ", doc.data());
			$('#' + id).append(
				`<div class=\"card\">

					<div class=\"blurring image\">
						<div class=\"ui inverted dimmer\">
							<div class=\"content\">
								<div class=\"center\">
									<div class=\"ui blue button\">Save</div>
								</div>
							</div>
						</div>
						<img src=\"` + doc.data().img + `\">
					</div>

					<div class=\"content\">
						<div class=\"header\">` + doc.data().name + `</div>
						<div class=\"meta\">
							<a class=\"group\">SG Price Score: ` + doc.data().score + `</a>
						</div>
						<div class=\"description\">Sale Items: ` + doc.data().ingredients + `</div>
					</div>

					<div class=\"extra content\">
						<a class=\"friends\">Available at: ` + doc.data().location + `</a>
					</div>

			</div>`);
		});		
	});
}