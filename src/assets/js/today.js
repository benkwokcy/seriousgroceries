'use strict';

// Run when DOM is ready
$(function() {
  
  $('.ui.dropdown').dropdown();

  $('.special.cards .image').dimmer({
    on: 'hover'
  });

});

// Populates table 1 from JSON
$.getJSON("assets/today.json", function(data) {
  $.each(data, function(i,dish) {
    $('#cards').append(
      `<div class=\"card\">

        <div class=\"blurring image\">
          <div class=\"ui inverted dimmer\">
            <div class=\"content\">
              <div class=\"center\">
                <div class=\"ui blue button\">More</div>
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

// Populate table 2 from JSON
$.getJSON("assets/quick.json", function(data) {
  $.each(data, function(i,dish) {
    $('#cards2').append(
      `<div class=\"card\">
      
        <div class=\"blurring image\">
          <div class=\"ui inverted dimmer\">
            <div class=\"content\">
              <div class=\"center\">
                <div class=\"ui blue button\">More</div>
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