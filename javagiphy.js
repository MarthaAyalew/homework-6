
$(function() {
    populateButtons(topicArray,'searchButton','#buttonsArea');
    console.log("loaded");
  })

var topicArray =  ['dog','horse','tiger'];
  function populateButtons(topicArray,classToAdd,areaToAddTo){
    $(areaToAddTo).empty();
    for (var i=0;i<topicArray.length;i++){
      var a = $('<button>');
      a.addClass(classToAdd);
      a.attr('data-type',topicArray[i]);
      a.text(topicArray[i]);
      $(areaToAddTo).append(a);
    }
  }

  
$(document).on('click','.searchButton',function(){
var type = $(this).data('type');
//var queryUrl = 'https://api.giphy.com/v1/gifs/search?q'+type+'&api_key=h7TtbNMemZNJ9TmFbt75PKreXJFOMVuKlimit=10';
var queryUrl = 'http://api.giphy.com/v1/gifs/search?q='+type+'&api_key=h7TtbNMemZNJ9TmFbt75PKreXJFOMVuKlimit=10';

$.ajax({url:queryUrl,method:'GET'})
.done(function(data){
console.log(data)
})

})
