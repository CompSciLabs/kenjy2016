function initMap() {
  var church =
      { lat: 51.5162937,
        lng: -0.304803
      }  
  map = new google.maps.Map(document.getElementById('map'), {
    center: church,
    zoom: 18
  })
  var marker = new google.maps.Marker({
    position: church,
    map: map,
    title: 'Church!'
  })
}