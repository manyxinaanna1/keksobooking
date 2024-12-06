const houseTypeToString = {
    'flat': 'Квартира',
    'bungalow': 'Бунгало',
    'house': 'Дом',
    'palace': 'Дворец',
    'hotel': 'Отель',
};

const templateFragment = document.querySelector('#card').content;
const template = templateFragment.querySelector('.popup');

/*const createGallery = (container, photos) => {
  const photoNode = container.querySelector('.popup_photo');
  photos.forEach((photo) => {
    const clonePhoto = photoNode.cloneNode(true);
    clonePhoto.photo.src = photo;
    container.append(clonePhoto);
  });
  photoNode.remove();
}; */

// card.querySelector('.popup__feature--$(feature)')

const createPopup = (offer, author) => {
  const card = template.cloneNode(true);
  // const cardPopupElement = card.querySelector('.popup__avatar');
  const cardTitle = card.querySelector('.popup__title');
  const cardAddress = card.querySelector('.popup__text--address');
  const offerPrice = card.querySelector('.popup__text--price');
  // const offerType = card.querySelector('.popup__type');
  const flat = card.querySelector('.popup__text--capacity');
  const checkTime = card.querySelector('.popup__text--time');
  const popupDescription = card.querySelector('.popup__description');
  //const popupFeatures = card.querySelector('.popup__features');
  // const galleryPopup = card.querySelector('.popup__photos');
  cardAvatar.src = author.avatar;
  cardTitle.textContent = houseTypeToString[offer.title];
  
  offerPrice.texcontent = `${offer.price} ₽/ночь`;
  flat.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  checkTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  popupDescription.textContent = offer.description;

  //offer.photos.forEach(photo => {})

  const img = document.createElement('img').src ='...';
  photoContainer.appendChild(img);

  if(offer.address) {
    cardAddress.texcontent = offer.address;
  } else {
    cardAddress.classList.add('hidden')
  }
};

export { createPopup };
