var ireland = { lat: 53.1424, lng: -7.6921 };
var cork = { lat: 51.8985, lng: -8.4756 };
var dublin = { lat: 53.3498, lng: 6.2603 };
var limerick = { lat: 52.6638, lng: -8.6267 };

var map = null;

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: ireland
    });


    //Labels
    var labels = 'ABCD';

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}


//Reset Button

$('#reset').click(function() {
    map.setCenter(ireland);
    map.setZoom(7);
    $('.reset-function').slideUp('medium')
});


//Zoom to locations

$('#cork').click(function() {
    map.setCenter(cork);
    map.setZoom(15);
    
});

$('#dublin').click(function() {
    map.setCenter(dublin);
    map.setZoom(14);
    
});

$('#limerick').click(function() {
    map.setCenter(limerick);
    map.setZoom(15);
    
});



var locations = [
    { lat: 51.901923, lng: -8.470862 },
    { lat: 51.892656, lng: -8.468170 },
    { lat: 51.898848, lng: -8.476154 },
    { lat: 51.898224, lng: -8.481427 },
    { lat: 53.347902, lng: -6.258203 },
    { lat: 53.343072, lng: -6.261574 },
    { lat: 53.346073, lng: -6.269569 },
    { lat: 53.336574, lng: -6.265719 },
    { lat: 52.664419, lng: -8.628652 },
    { lat: 52.662093, lng: -8.624043 },
    { lat: 52.658333, lng: -8.637861 },
];

var ireland = { lat: 53.1424, lng: -7.6921 };
var cork = { lat: 51.8985, lng: -8.4756 };
var dublin = { lat: 53.3450, lng: -6.2603 }
var limerick = { lat: 52.6630, lng: -8.6267 }

/*

 
postions of comedy clubs
CORK
city limits cork 51.901923, -8.470862
coughlans comedy club 51.892656, -8.468170
the roundy 51.898848, -8.476154
the wonky donkey 51.898224, -8.481427

DUBLIN

laughter lounge 53.347902 -6.258203
comedy cellar  53.343072 -6.261574
jesters comedy 53.346073 -6.269569
whelans/pop the cherry 53.336574 -6.265719

LIMERICK

treaty comedy club 52.664419 -8.628652
fillbuster @ the blind pig  52.662093 -8.624043
karlnival @ dolan's  52.658333, -8.637861


*/
