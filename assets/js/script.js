function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: {lat:53.1424 , lng: -7.6921 }
        });


        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
      
      var locations = [
        {lat: 51.901923, lng: -8.470862},
        {lat: 51.892656, lng: -8.468170},
        {lat: 51.898848, lng: -8.476154},
        {lat: 51.898224, lng: -8.481427},
        ]


/*
postions of comedy clubs
CORK
city limits cork 51.901923, -8.470862
coughlans comedy club 51.892656, -8.468170
the roundy 51.898848, -8.476154
the wonky donkey 51.898224, -8.481427

DUBLIN

*/