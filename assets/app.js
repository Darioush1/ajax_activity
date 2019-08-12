var rugby = ['Sebastien Chabal', 'Jonah Lomu', 'Alesana Tuilagi', 'Manu Tuilagi', 'Ma\'a Nonu', 'Richie McCaw', 'Perry Baker', 'Henry Tuilagi', 'Sonny Bill Williams', 'Siya Kolisi', 'Faf de Klerk', 'Allan Alaalatoa', 'Nick Cummins'];

var buttonText = '';
var searchText = '';
var searchButton = document.getElementById('search');

//function that creates the button and puts in the button text for each button
function getButtons() {
    for (i = 0; i < rugby.length; i++) {

        var gifButtons = document.createElement('button');
        gifButtons.classList.add('gifButtons');
        let buttonText = rugby[i]; 
        gifButtons.innerText = buttonText;
        document.body.appendChild(gifButtons)

    }

};

//searchButton.addEventListener('click', addButton())

window.onload=function () {
  getButtons();
}
