import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Meu CSS
import '../css/map.css'

import { map } from 'leaflet';

export function Map(){
    return `
        <div id="map"></div>
    `;
}

export function run(){
    var map = L.map('map').setView([51.505, -0.09], 13);
}