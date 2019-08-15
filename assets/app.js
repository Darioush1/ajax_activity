var rugby = ["David Fincher", "Spiderverse", "Bong Joon Ho", "Wes Anderson", "Jon Favreau", "Dennis Villeneauve", "Christopher Nolan", "Patty Jenkins", "Hayao Miyazaki", "Paul Thomas Anderson", "Martin Scorsese", "Kathryn Bigelow", "Guy Ritchie"];

var buttonText = '';
var searchText = '';
var searchButton = document.getElementById('search');
var giphyUrl = "http://api.giphy.com/v1/gifs/search?&q=" + searchText + "&api_key=iBag6lGxhBwV0gHDqNYT40XlbhPwKaoO&limit=10";
var gifButtons;

//function that creates the button and puts in the button text for each button
function getButtons() {
  for (i = 0; i < rugby.length; i++) {
    
    //this creates an object
    var newButton = document.createElement('button');
    //this adds the class gifButtons to the og object so we can add things to it
    newButton.classList.add('gifButtons');
    //this calls the point in the array se we can USE it to put text inside the button
    let buttonText = rugby[i];
    //honestly dont get this, I get help with it, i need to ask the TA's again
    newButton.innerText = buttonText;
    newButton.buttonText = buttonText;
    //this is the function(?) used to get the text from with the button so we ca put it in the searchText part of the api
    newButton.addEventListener('click', getText);
    
    //this actually puts the button on the dom after we have made all of its classsification and gotten everything we needed
    document.body.appendChild(newButton)

  }

};

function accessApi(){
  var apiLink = giphyUrl;
  loadJSON
}
//searchButton.addEventListener('click', addButton())

//this loads the buttons onto the page when the page is loaded. it is key that this is put after we create the function that creates the buttons
window.onload = function () {
  getButtons();
}


// this function gets the text from the button. it is loggin correctly, searchText is showing corrcectly, but giphy api does not have the search text
function getText() {
  let searchText = this.buttonText
  console.log(searchText)
  let giphyUrl= "api.giphy.com/v1/gifs/search?&q=" + searchText + "&api_key=iBag6lGxhBwV0gHDqNYT40XlbhPwKaoO&limit=10"
  console.log(giphyUrl)
};


