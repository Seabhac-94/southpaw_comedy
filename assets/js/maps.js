var ireland = { lat: 53.1424, lng: -7.6921 };
var cork = { lat: 51.8985, lng: -8.4756 };
var dublin = { lat: 53.3450, lng: -6.2603 };
var limerick = { lat: 52.6630, lng: -8.6267 };
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
    // marker clusterer
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

//Reset Button
$('#reset').click(function() {
    map.setCenter(ireland);
    map.setZoom(7);
    $('.reset-function').slideUp('medium');
    $('.nav-bg, footer').css('backgroundColor', '#FF6322');
    $('.mapOpacity').css('opacity', '0.7');
});

//Zoom to Counties
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

//Zoom to Clubs
//Cork
$('#cityLimitsButton').click(function() {
    map.setCenter({ lat: 51.901923, lng: -8.470862 });
    map.setZoom(18);
});
$('#comedyCavernButton').click(function() {
    map.setCenter({ lat: 51.892656, lng: -8.468170 });
    map.setZoom(18);
});
$('#cocoClubButton').click(function() {
    map.setCenter({ lat: 51.898848, lng: -8.476154 });
    map.setZoom(18);
});
$('#wonkyDonkeyButton').click(function() {
    map.setCenter({ lat: 51.898224, lng: -8.481427 });
    map.setZoom(18);
});

//Dublin
$('#laughterLoungeButton').click(function() {
    map.setCenter({ lat: 53.347902, lng: -6.258203 });
    map.setZoom(18);
});
$('#comedyCellarButton').click(function() {
    map.setCenter({ lat: 53.343072, lng: -6.261574 });
    map.setZoom(18);
});
$('#jestersComedyButton').click(function() {
    map.setCenter({ lat: 53.346073, lng: -6.269569 });
    map.setZoom(18);
});
$('#popCherryButton').click(function() {
    map.setCenter({ lat: 53.336574, lng: -6.265719 });
    map.setZoom(18);
});

//Limerick
$('#treatyComedyButton').click(function() {
    map.setCenter({ lat: 52.664419, lng: -8.628652 });
    map.setZoom(18);
});
$('#filibusterButton').click(function() {
    map.setCenter({ lat: 52.662093, lng: -8.624043 });
    map.setZoom(18);
});
$('#karlnivalButton').click(function() {
    map.setCenter( { lat: 52.658333, lng: -8.637861 });
    map.setZoom(18);
});
