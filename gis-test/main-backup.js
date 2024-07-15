import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import ifpbPRPIPG from './public/logo-prpipg.png'
import { setupCounter } from './scripts/counter.js'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

document.querySelector('#app').innerHTML = `
  <h1 class="text-danger">Teste</h1>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${ifpbPRPIPG}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
