import { getRandomPositiveInteger, getRandomArrayElement, getRandomPositiveFloat } from './util.js';

const TITLES_MOCK = [
    'Жилье 1',
    'Жилье 2',
    'Жилье 3',
    'Жилье 4',
    'Жилье 5',
    'Жилье 6',
  ];

  const TYPES = [
    'palace',
    'flat',
    'house',
    'bungalow',
    'hotel',
  ];

  const CHECKIN_TIME = [
    '12:00',
    '13:00',
    '14:00',
  ];
  const CHECKOUTTIME = [
    '12:00',
    '13:00',
    '14:00',
  ];
  const FEATURES_LIST = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ];
  const DESCRIPTIONS = [
    'Описание 1',
    'Описание 2',
    'Описание 3',
    'Описание 4',
    'Описание 5',
    'Описание 6',
  ];
  const PHOTOSLIST = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ];




const mockAuthor = () => {
  const number = getRandomPositiveInteger(1, 10);
  const asString = number.toString().padStart(2, '0');
  return {
  avatar: `img/avatars/user-${asString}.png`,
  };
};


const mockLocation = () => ({
  lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
  lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
});

const mockPhotos = () => Array.from({length: getRandomPositiveInteger(1, 10)}, () =>
getRandomArrayElement(photosList));


const mockOffer = () => {

  return {
    author: mockAuthor(),
    offer: {
      address: `${location.lat}, ${location.lng}`,
    title: getRandomArrayElement(TITLES_MOCK),
    price: getRandomPositiveInteger(0, 100000),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomPositiveInteger(1, 100),
    guests: getRandomPositiveInteger(1, 20),
    checkin: getRandomArrayElement(CHECKIN_TIME),
    checkin: getRandomArrayElement(CHECKOUTTIME),
    features: getRandomArrayElement(FEATURES_LIST),
    description: Array.from({ length: getRandomPositiveInteger(1, 10)},
      getRandomArrayElement(DESCRIPTIONS)),
    photos: Array.from({ length: getRandomPositiveInteger(1, 10)},getRandomArrayElement(PHOTOSLIST)),
    location,
    },
    location,
  }
};

export { getOffer };
