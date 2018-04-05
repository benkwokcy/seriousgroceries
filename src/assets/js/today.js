'use strict';

$(document).ready(function() {
  
  $('.ui.dropdown').dropdown();

  $('.special.cards .image').dimmer({
    on: 'hover'
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });

});

// Populates table from JSON

  $.getJSON("assets/today.json", function(data) {
    $.each(data, function(i,dish) {
      $('#cards').append(
        `<div class=\"card\">

          <div class=\"blurring image\">
            <div class=\"ui inverted dimmer\">
              <div class=\"content\">
                <div class=\"center\">
                  <div class=\"ui primary button\">Details</div>
                </div>
              </div>
            </div>
            <img src=\"` + data[i]["url"] + `\">
          </div>

          <div class=\"content\">
            <div class=\"header\">` + data[i]["name"] + `</div>
            <div class=\"meta\">
              <a class=\"group\">SG Price Score: ` + data[i]["score"] + `</a>
            </div>
            <div class=\"description\">Sale Items: ` + data[i]["ingredients"] + `</div>
          </div>

          <div class=\"extra content\">
            <a class=\"friends\">Available at: ` + data[i]["location"] + `</a>
          </div>

        </div>`);
    });
  }); 


// Populates table from JSON
      // $('#cards').append(
      //   `<div class=\"card\">
        
      //   <div class=\"blurring dimmable image\">
      //     <div class=\"ui dimmer\">
      //       <div class=\"content\">
      //         <div class=\"center\">
      //           <div class=\"ui primary button\">Add Friend</div>
      //         </div>
      //       </div>
      //     </div>
      //     <img src=\"https://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg\">
      //   </div>

      //   <div class=\"content\">
      //     <div class=\"header\">header</div>
      //     <div class=\"meta\">
      //       <a class=\"group\">SG Price Score: 123</a>
      //     </div>
      //     <div class=\"description\">Sale Items: Items</div>
      //   </div>

      //   <div class=\"extra content\">
      //     <a class=\"friends\">Available at: Location</a>
      //   </div>

      // </div>`
      // );

