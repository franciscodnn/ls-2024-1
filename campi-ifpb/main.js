import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import 'leaflet/dist/leaflet.css'
import 'leaflet'
import L from 'leaflet'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { load, post, remove } from './src/services/lib.js'

let map = undefined;

const init = () => {

  const UFParaiba = [-7.136323, -35.36087];

  map = L.map('map').setView(UFParaiba, 10);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const dados = load();

  plotOnMap(dados);

  map.on('click', onMapClick);
}

function onMapClick(e) {
  alert("LatLong = " + e.latlng);
}

function plotOnMap(arrayCampi) {
  // map._panes.markerPane.remove();
  // L.markerClusterGroup().clearLayers();

  arrayCampi.forEach( (elem) => {
    const html = `${elem.titulo}<br>${elem.descricao}<button onclick='removeCampus("${elem.titulo}")'>x</button>`;

    const marker = L.marker([elem.lat, elem.lng]).addTo(map);
    marker.bindPopup(html).openPopup();
  });
}

function removeCampus(titulo){
  const database = remove(titulo);

  plotOnMap(database);
}

function createNewCampus(){
  const inputCampus = document.querySelector('#campus');
  const inputLatLong = document.querySelector('#latLong');
  const inputDescricao = document.querySelector('#descricao');

  const latLong = inputLatLong.value.split(',');
  latLong[0] = Number(latLong[0].trim());
  latLong[1] = Number(latLong[1].trim());

  const novoCampus = {
    titulo: inputCampus.value,
    descricao: inputDescricao.value,
    lat: latLong[0],
    lng: latLong[1],
  };

  post(novoCampus);

  plotOnMap([novoCampus]);

  inputCampus.value = '';
  inputLatLong.value = '';
  inputDescricao.value = '';

  // const modal = document.querySelector('#staticBackdrop');

  // bootstrap.Modal.getInstance(modal).hide();
  document.querySelector('#btnFechar').click();
}

window.init = init;
window.removeCampus = removeCampus;
window.createNewCampus = createNewCampus;
