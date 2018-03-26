'use strict';

$(document).ready(function() {
  $('.ui.dropdown')
  .dropdown()
  ;
});

$(function(){
  $.getJSON("assets/today.json", function(data) {
    $.each(data, function(i,dish) {
      $('#cards').append(
        `<div class=\"ui card\">
            <div class=\"image\">
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
});
