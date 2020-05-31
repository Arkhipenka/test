let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJraGlwZW5rYSIsImEiOiJja2FxdHBvMjAwMHVwMnJxZGxjYjU0b3llIn0.OS1t1aYLbB2hlzbFnhqqeA';

let map = new mapboxgl.Map({
    container: 'map',
    zoom: 10,
    style: 'mapbox://styles/mapbox/streets-v11?optimize=true'
});
export let marker = new mapboxgl.Marker()
    .setLngLat([12.550343, 55.665957])
    .addTo(map);
export default map;