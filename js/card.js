const houseTypeToString = {
    'flat': 'Квартира',
    'bungalow': 'Бунгало',
    'house': 'Дом',
    'palace': 'Дворец',
    'hotel': 'Отель',
};

const templateFragment = document.querySelector('#card').content;
const template = templateFragment.querySelector('.popup');

const createGallery = (container, photos) => {
  const photoNode = container.querySelector('.popup_photo');
  photos.forEach((photo) => {
    const clonePhoto = photoNode.cloneNode(true);
    clonePhoto.photo.src = photo;
    container.append(clonePhoto);
  });
  photoNode.remove();
};

const createPopup = (offer, author) => {
  const card = template.cloneNode(true);
  const cardPopupElement = card.querySelector('.popup__avatar');
  const cardTitle = card.querySelector('.popup__title');
  const cardAddress = card.querySelector('.popup__text--address');
  const offerPrice = card.querySelector('.popup__text--price');
  const offerType = card.querySelector('.popup__type');
  const flat = card.querySelector('.popup__text--capacity');
  const checkTime = card.querySelector('.popup__text--time');
  const popupDescription = card.querySelector('.popup__description');
  const popupFeatures = card.querySelector('.popup__features');
  const galleryPopup = card.querySelector('.popup__photos')
  cardAvatar.src = offer.author.avatar;
  cardTitle.textContent = offer.title;
  cardAddress.texcontent = offer.address;
  offerPrice.texcontent = `${offer.price} ₽/ночь`;
    if(offer.features.length) {
    popupFeatures.textContent = offer.features.map((offerItem) => OFER_FEATURES[offerItem]).join('. ') ;
  }
  flat.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  checkTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  popupDescription.textContent = offer.description;
};

export { createPopup };
