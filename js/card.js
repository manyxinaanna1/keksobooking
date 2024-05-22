/*const houseTypeToString = {
    'flat': 'Квартира',
    'bungalow': 'Бунгало',
    'house': 'Дом',
    'palace': 'Дворец',
    'hotel': 'Отель',
};*/

const getTemplate = (offer) => {
  const card = document.querySelector('#card').content;
  const cardAvatar = card.querySelector('.popup__avatar');
  const cardTitle = card.querySelector('.popup__title');
  const cardAdress = card.querySelector('.popup__text--address');
  const offerPrice = card.querySelector('.popup__text--price');
  const offerType = card.querySelector('.popup__type');
  const flat = card.querySelector('.popup__text--capacity');
  const checkTime = card.querySelector('.popup__text--time');
  const popupDescription = card.querySelector('.popup__description');

  cardAvatar.src = offer.author.avatar;
  cardTitle.textContent = offer.title;
  cardAdress.texcontent = offer.address;
  offerPrice.texcontent = `${offer.price} ₽/ночь`;
  offerType.textContent = offer.type;
  flat.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  checkTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  popupDescription.textContent = offer.description;
};

export { getTemplate };
