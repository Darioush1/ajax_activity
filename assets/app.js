var rugby = ["David Fincher", "Spiderverse", "Bong Joon Ho", "Wes Anderson", "Jon Favreau", "Dennis Villeneauve", "Christopher Nolan", "Patty Jenkins", "Hayao Miyazaki", "Paul Thomas Anderson", "Martin Scorsese", "Kathryn Bigelow", "Guy Ritchie"];

var buttonText = '';
var searchText = '';
var searchText1 = '&q=' + rugby[0];
var searchButton = document.getElementById('search');
var giphyLink = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=iBag6lGxhBwV0gHDqNYT40XlbhPwKaoO&limit=10";
var gifButtons;



//this loads the buttons onto the page when the page is loaded. it is key that this is put after we create the function that creates the buttons

$(document).ready(function(){
  getButtons();
})


function ajaxCall() {
  $.ajax({
    url: giphyLink + searchText1 + apiKey,
    method: 'GET'
  }).then(function (response) {
    console.log(response)
    console.log(response.embed_url)
    var gif = $('<img/>').attr({
      id: 'gif' + response.slug,
      src: response.embed_url,
      alt: response.slug,
      title: response.slug,
      width: 300,
    }).appendTo('.gifsHere')
    console.log(response.slug + ' ' + response.embed_url );
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
      click: function() {
        let searchText = buttonText;
        ajaxCall();
        console.log('This is the search:' + searchText)} 
    });
    //this adds the class gifButtons to the og object so we can add things to it in java/css
    
    $('.box').append(newButton)

  }

};

$('.gifButtons').on('click', function () {
 
})


