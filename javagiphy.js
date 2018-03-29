
$(function () {
  populateButtons(topicArray, 'searchButton', '#buttonsArea');

})

var topicArray = ['dog', 'horse', 'tiger'];

function populateButtons(topicArray, classToAdd, areaToAddTo) {
  $(areaToAddTo).empty();
  for (var i = 0; i < topicArray.length; i++) {
    var a = $('<button>');
    a.addClass(classToAdd);
    a.attr('data-type', topicArray[i]);
    a.text(topicArray[i]);
    $(areaToAddTo).append(a);

  }
}
$(document).on('click', '.searchButton', function () {
  $('#searches').empty();
  var type = $(this).data('type');
  var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + type + '&api_key=QpHAWgDzqRLZOs8Fqx47t4DGpGkkk8cG&limit=10';

  $.ajax({
    url: queryURL,
    method: 'GET'
  })
    .done(function (giphy) {

      for (var i = 0; i < giphy.data.length; i++) {
        var searchDiv = $('<div class ="search-item">');
        var rating = giphy.data[i].rating;
        var p = $('<p>').text('Rating: ' + rating);
        var animated = giphy.data[i].images.fixed_height.url;
        var still = giphy.data[i].images.fixed_height_still.url;
        var image = $('<img>');
        image.attr('src', still);
        image.attr('data-still', still);
        image.attr('data-animated', animated);
        image.attr('data-state', 'still');
        image.addClass('searchImage');
        searchDiv.append(p);
        searchDiv.append(image);
        $('#searches').append(searchDiv);
      }
    })
})


$(document).on('click', '.searchImage', function () {
  var state = $(this).attr('data-state');
  if (state == 'still') {
    $(this).attr('src', $(this).data('animated'));
    $(this).attr('data-state', 'animated');
  } else {
    $(this).attr('src', $(this).data('still'));
    $(this).attr('data-state', 'still');

  }
})

$('#addSearch').on('click', function () {
  var newSearch = $('input').eq(0).val().trim();
  topicArray.push(newSearch);

  populateButtons(topicArray, 'searchButton', '#buttonsArea');
  return false;
});




