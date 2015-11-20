$(document).ready(function(event) {

  var showList = ['red', 'cyan', 'purple'];

  var colorTemplate = Handlebars.compile($('#currentColors').html());

  try {
    $.ajax({
     url: '/data.json',
   })
    .done(function(json) {
      // var colorJson = {};
      // json.forEach(function(elem, i) {
      //   showList.forEach(function(colorElement) {
      //     if(elem.color === colorElement) {
      //
      //     }
      //   });
      // });
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
    JSON.stringify(colorObject, function(key, value) {
      if ($.inArray(value, showList)) {
        return value;
      }
    });
    var compiledHtml = colorTemplate({colors: colorObject});

    // Add compiled html to page
    $('.container').html(compiledHtml);
  }
});

///////////
function contains(a, obj) {
  var i = a.length;
  while (i--) {
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
}
