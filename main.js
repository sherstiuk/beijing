$(document).ready(function(){

  // centering on Beijing old town
  var mymap = L.map('mapid').setView([39.91, 116.39], 14);
  // applying theme
  L.tileLayer.provider('Thunderforest.Pioneer', {apikey: '97aee903a5d243fa8b38476ea30c271c'}).addTo(mymap);

  // popup
  L.marker([39.91, 116.39]).addTo(mymap).bindPopup("<b>Hello!</b><br />I am a popup.").openPopup();
  var popup = L.popup();
  function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);
  } //mymap.on('click', onMapClick);

  // old map overlay
  var imgBounds = [ [39.94909, 116.3428], [39.8678, 116.4391] ]
  var a = L.imageOverlay('img/map.jpg', imgBounds).addTo(mymap);
  mymap.fitBounds(imgBounds);

});
