function initMap() {
  // The location of Ireland
  var ireland = {lat:53.1424 , lng: -7.6921 };
  // The location of Counties
  var cork = {lat: 51.8985, lng: -8.4756};
  var dublin = {lat: 53.3498, lng: -6.2603};
  var limerick = {lat:  52.6638, lng: -8.6267};
  
  // The map, centered at Cork
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 6, center: ireland});
  // The marker, positioned at Cork
  var marker = new google.maps.Marker({position: cork, map: map});
  var marker = new google.maps.Marker({position: dublin, map: map});
  var marker = new google.maps.Marker({position: limerick, map: map});
}