$(document).ready(function(event) {

  var colorTemplate = Handlebars.compile($('#currentColors').html());

  try {
    $.ajax({
     url: '/data.json',
   })
    .done(function(json) {

      renderColors(json);
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
