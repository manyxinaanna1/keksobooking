import { getOffer } from './data.js';
import { createPopup } from './card.js';

const mapCanvas = document.querySelector('#map-canvas');

const offerData = getoffer();
const card = createPopup(offer());
map.appendChild(card);