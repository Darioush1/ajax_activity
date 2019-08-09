var rugby = ['Sebastien Chabal', 'Jonah Lomu', 'Alesana Tuilagi', 'Manu Tuilagi', 'Ma\'a Nonu', 'Richie McCaw', 'Perry Baker', 'Henry Tuilagi','Sonny Bill Williams', 'Siya Kolisi', 'Faf de Klerk', 'Allan Alaalatoa', 'Nick Cummins']
var searchText = '';
var searchButton = document.getElementById('search');

function addButton () {
    document.getElementsByClassName('searchBox').append("<button id='gifButton'>yo</button>")
};

searchButton.addEventListener('click', addButton())
