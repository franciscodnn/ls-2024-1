import './css/map.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Modal
import { modalNewCampus } from './modalNewCampus';

const app = document.querySelector('#app');
app.innerHTML = `
  <div id="map" class="position-absolute z-0"></div>
  ${modalNewCampus()}
`;

let map;

function loadMap() {

  map = L.map('map').setView([-7.134715, -34.873856], 7);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  var marker = L.marker([-7.134715, -34.873856], {
    color: 'red'
  }).addTo(map);


  marker.bindPopup("IFPB - Campus João Pessoa").openPopup();

  function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
  }

  map.on('click', onMapClick);

}

function addCampus(){
  document.querySelector('#addCampus').addEventListener('click', () => {
      const campusName = document.querySelector('#modalNewCampus #titulo-campus').value;
      const campusLat = Number(document.querySelector('#modalNewCampus #lat-campus').value);
      const campusLng = Number(document.querySelector('#modalNewCampus #lng-campus').value);

      var marker = L.marker([campusLat, campusLng], {
        color: 'red'
      }).addTo(map);

      marker.bindPopup(campusName).openPopup();
  });
}

window.loadMap = loadMap;
window.addCampus = addCampus;

loadMap();
addCampus();