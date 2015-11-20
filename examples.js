/**
 * Created by joelmiller on 7/14/15.
 */
$(document).ready(function() {

  $.ajax('insert.html', {
    success: function(response) {$('.myContainer').html(response);},
    error: function(request, errorType, errorMessage) {
      alert(errorType + ' ' + errorMessage);
    }
  });

  $.ajax('data.json', {
    success: function(response) {
      var msg = $('<p></p>');
      msg.append('Color ' + response.color);
      msg.append('Qty ' + response.value);
      $('.myContainer').html(msg);
    },
    error: function(request, errorType, errorMessage) {
      alert(errorType + ' ' + errorMessage);
    }
  });

  $.ajax('data.json', {
      success: function(response) {
        $.each(result, function(index, myObj) {
          var msg = $('<p></p>');
          msg.append('Price ' + myObj.color);
          msg.append('Qty ' + myObj.value);
          $('.myContainer').html(msg);
        });

      },
      error: function(request, errorType, errorMessage) {
        alert(errorType + ' ' + errorMessage);
      }
    });

});
