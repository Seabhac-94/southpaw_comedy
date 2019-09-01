function initMap() {
  // The location of Cork
  var cork = {lat: 51.8985, lng: 8.4756};
  // The map, centered at Cork
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: cork});
  // The marker, positioned at Cork
  var marker = new google.maps.Marker({position: cork, map: map});
}