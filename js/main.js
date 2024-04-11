const titles = [
  'Жилье 1',
  'Жилье 2',
  'Жилье 3',
  'Жилье 4',
  'Жилье 5',
  'Жилье 6',
];

const types = [
  palace, 
  flat, 
  house, 
  bungalow,
  hotel,
];

const addresses = [
  location.lat,
  location.lng,
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
  wifi, 
  dishwasher,
   parking, 
   washer, 
   elevator, 
   conditioner,
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
  https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg,
  https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg,
  https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg,
];
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (string, length) => string.length <= length;

const getRandomArrayElement = (array) =>
  array[getRandomPositiveInteger(0, array.length - 1)];

const author = (index) => ({
  avatar: `img/avatars/user-${getRandomPositiveInteger(1, 10)}.png`,
});

const offer = (index) => ({
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
    
});



checkStringLength('', 140);
author();
offer();
