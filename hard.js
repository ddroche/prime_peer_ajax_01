$(document).ready(function(event) {

  var showList = ['red', 'cyan', 'purple', 'yellow'];

  var colorTemplate = Handlebars.compile($('#currentColors').html());

  try {
    $.ajax({
     url: '/data.json',
   })
    .done(function(json) {
      var colorArray = [];
      json.forEach(function(elem, i) {
        showList.forEach(function(colorElement) {
          if(elem.color === colorElement) {
            colorArray.push(elem);
          }
        });
      });
      renderColors(colorArray);
    });

  } catch (exception) {
    console.log(exception);
  } finally {
    // event.preventDefault();
  }

  /*** Render Function ***/
  function renderColors(colorObject) {
    // Pass data to template

    var compiledHtml = colorTemplate({colors: colorObject});

    // Add compiled html to page
    $('.container').html(compiledHtml);
  }
});
