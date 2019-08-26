var rugby = ["David_Fincher", "Spiderverse", "Bong JoonHo", "Wes_Anderson", "Jon_Favreau", "Dennis_Villeneauve", "Christopher_Nolan", "Patty_Jenkins", "Hayao_Miyazaki", "Paul_Thomas_Anderson", "Martin_Scorsese", "Kathryn_Bigelow", "Guy_Ritchie"];

var buttonText = '';
var searchText = '';
var searchText1 = '&q=' + searchText;
var searchButton = document.getElementById('search');
var giphyLink = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=iBag6lGxhBwV0gHDqNYT40XlbhPwKaoO&limit=10";
var gifButtons;



//this loads the buttons onto the page when the page is loaded. it is key that this is put after we create the function that creates the buttons

$(document).ready(function () {
  getButtons();
});


function ajaxCall() {
  $.ajax({
    url: giphyLink + searchText1 + apiKey,
    method: 'GET'
  }).then(function (response) {
    var results = response.data;
    for (i = 0; i < rugby.length; i++) {

      var gifDiv = $('<div>');
      var p = $('<p>').text(searchText.embed_url);
      var gif = $('<img>');
      gif = $('<img/>').attr('src', results[i].images.fixed_height.url);
      gif.appendTo('.gifDiv')
      console.log(response.data.embed_url);
      
    }
  });
};

// this function gets the text from the button. it is loggin correctly, searchText is showing correctly, but giphy api does not have the search text
function getText() {

  console.log(searchText);
  // let giphyUrl= api.giphy.com/v1/gifs/search?&q=' + searchText + '&api_key=iBag6lGxhBwV0gHDqNYT40XlbhPwKaoO&limit=10'";
  // console.log(giphyUrl)
};



//function that creates the buttons and puts in the button text for each button
function getButtons() {
  for (i = 0; i < rugby.length; i++) {
    //this calls the point in the array se we can USE it to put text inside the button
    let buttonText = rugby[i];
    //this creates an object to hold the button that we can call
    var newButton = $('<button/>', {
      text: buttonText,
      class: 'gifButtons',
      click: function () {
        let searchText = buttonText;
        var queryURL = giphyLink + searchText1 + apiKey;
        console.log('search text: ' + searchText)
        console.log(queryURL);
        ajaxCall();
      }
    });
    $('.box').append(newButton);
  }
}
  
    //this adds the class gifButtons to the og object so we can add things to it in java/css