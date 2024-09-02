import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import ifpbImage from '/images/ifpb-1.png'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1 class="text-primary">Restaurantes e Reviews - João Pessoa</h1>
    <img src=${javascriptLogo} alt="Javascript Logo">
  </div>
`

setupCounter(document.querySelector('#counter'))
