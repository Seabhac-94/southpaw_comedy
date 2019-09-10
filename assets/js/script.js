function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: { lat: 53.1424, lng: -7.6921 }
    });
    
    //Cork
    var corkLabels = 'ABCD';

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: corkLabels[i % corkLabels.length]
            
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}
var locations = [
    { lat: 51.901923, lng: -8.470862 },
    { lat: 51.892656, lng: -8.468170 },
    { lat: 51.898848, lng: -8.476154 },
    { lat: 51.898224, lng: -8.481427 },
];


var cork = { lat: 51.8985, lng: -8.4756 };

//Dublin


//Limerick




/*

 //City Limits Info
 
    var contentStringCityLimits = `<div id="cityLimitsContent">
<h3>City Limits Comedy Club Cork</h3>
<p>City Limits has been in the funny business on Coburg Street since the Nineties, with comedians like Tommy Tiernan, 
Jason Byrne and Colin Murphy performing some of their earliest gigs there.</p>
<p>You can usually get tickets at the door provided you arrive before 9pm but it’s better to book them on 
<a href="https://events.tickets.ie/?text=city%20limits&_ga=2.32169468.331765262.1550249527-50873700.1550249527">tickets.ie.<a/></p> 
<p>It’s a late bar too so you can rehash the funniest bits over drinks until the wee hours.</p>
</div>`

    var infowindow = new google.maps.InfoWindow({
        content: contentStringCityLimits,
        maxWidth: 200,

    });

    var marker = new google.maps.Marker({
        position: locations[0],
        map: map,
        title: 'City Limits Club Cork'
    });

    markers.addListener('click', function() {
        infowindow.open(map, markers);
    });





var locations = [
    { lat: 51.901923, lng: -8.470862 },
    { lat: 51.892656, lng: -8.468170 },
    { lat: 51.898848, lng: -8.476154 },
    { lat: 51.898224, lng: -8.481427 },
];


var cork = { lat: 51.8985, lng: -8.4756 };







postions of comedy clubs
CORK
city limits cork 51.901923, -8.470862
coughlans comedy club 51.892656, -8.468170
the roundy 51.898848, -8.476154
the wonky donkey 51.898224, -8.481427

DUBLIN

*/