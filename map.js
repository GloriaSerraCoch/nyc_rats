'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2xvcmlhc2VycmFjb2NoIiwiYSI6ImNqc3Q4NGwxaTIxZjk0NHJyN3BjdmNlMnMifQ.NvZI9cAJogU5rbJi0b6jLQ'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/gloriaserracoch/cjtqn4ot11at31fqkjty4xcco',
    center: [-73.96216,40.80779],
    zoom: 12
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

})
