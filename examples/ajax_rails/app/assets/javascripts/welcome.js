var app = {
  click: function(event){
    $.ajax({
      url: "/ajaxtest",   // this ajax call will end up giving me back the name of the first task -- see route action update and update.js.erb file
      type: "GET",

    })
  },
  getjson: function(event) {   // ajax call to getjson route gets Task.all converted to json as its response, iterates through in the for loop, and passes the name of each object into a paragraph tag which is appended to the basic id on the index.html.erb
    $.ajax({
      url: "/getjson",
      type: "GET",
      dataType: "json",
    }).done(function(response) {
      for (var i = 0; i < response.length; i++) {
        var htmlElement = $("<p>").text(response[i].name)
        $("#basic").append(htmlElement);
      }
    });
  }
}

$(document).ready(function(){
  $('#button').click(app.click);
  $('#button2').click(app.getjson);
});
