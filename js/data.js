import { getRandomPositiveInteger, getRandomArrayElement } from './util.js';

const titles = [
    'Жилье 1',
    'Жилье 2',
    'Жилье 3',
    'Жилье 4',
    'Жилье 5',
    'Жилье 6',
  ];
  
  const types = [
    'palace', 
    'flat', 
    'house', 
    'bungalow',
    'hotel',
  ];
  
  const checkinTime = [
    '12:00', 
    '13:00',
    '14:00',
  ];
  const checkoutTime = [
    '12:00', 
    '13:00',
    '14:00',
  ];
  const featuresList = [
    'wifi', 
    'dishwasher',
    'parking', 
    'washer', 
    'elevator', 
    'conditioner',
  ];
  const descriptions = [
    'Описание 1',
    'Описание 2',
    'Описание 3',
    'Описание 4',
    'Описание 5',
    'Описание 6',
  ];
  const photosList = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ];
  



const mockAuthor = () => ({
  let number = getRandomPositiveInteger(1, 10);
  let asString = number.toString().padStart(2, '0');
  return {
  avatar: `img/avatars/user-${asString}.png`,
  };
});
const mockLocation = () => {
  lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
  lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
}

const mockPhotos = () => Array.from({length: getRandomPositiveInteger(1, 10)}, () => 
getRandomArrayElement(photosList));

const addZero = (number) => number < 10 ? `0${number}` : number;
const offer = (index) => ({
  const location = mockLocation();
  return {
    author: mockAuthor(), 
    offer: {
      address `${location.lat, $location.lng}`
    },
    location,
    title: getRandomArrayElement(titles),
    address: getRandomArrayElement(addresses),
    price: getRandomPositiveInteger(a, b),
    type: getRandomArrayElement(types),
    rooms: getRandomPositiveInteger(a, b),
    guests: getRandomPositiveInteger(a, b),
    checkin: getRandomArrayElement(checkinTime),
    checkin: getRandomArrayElement(checkoutTime),
    features: getRandomArrayElement(featuresList),
    description: getRandomArrayElement(descriptions),
    photos: getRandomArrayElement(photosList),
  }    
});

export { author, offer };