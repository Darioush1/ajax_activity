var rugby = ['Sebastien Chabal', 'Jonah Lomu', 'Alesana Tuilagi', 'Manu Tuilagi', 'Ma\'a Nonu', 'Richie McCaw', 'Perry Baker', 'Henry Tuilagi', 'Sonny Bill Williams', 'Siya Kolisi', 'Faf de Klerk', 'Allan Alaalatoa', 'Nick Cummins'];

var buttonText = '';
var searchText = '';
var searchButton = document.getElementById('search');

function getButtons() {
    for (i = 0; i < rugby.length; i++) {

        console.log(rugby);
        let gifButtons = "<button id='gifButton'></button>";
        document.getElementsByClassName('Box').append(gifButtons)

    }
}

    

};

//searchButton.addEventListener('click', addButton())

window.onload=function () {
  getButtons();
}
