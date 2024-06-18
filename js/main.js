import { getOffer } from './data.js';
import { getTemplate } from './card.js';

author();

const map = document.querySelector('.map');
const card = getTemplate(offer());
map.appendChild(card);