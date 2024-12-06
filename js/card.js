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
  //const popupFeatures = card.querySelector('.popup__feature--$(feature');
  // const galleryPopup = card.querySelector('.popup__photos');
  cardAvatar.src = author.avatar;

  if(offer.title) {
    cardTitle.textContent = houseTypeToString[offer.title];
  } else {
    cardTitle.classList.add('hidden');
  }

  if(offer.address) {
    cardAddress.texcontent = offer.address;
  } else {
    cardAddress.classList.add('hidden');
  }

  if(offer.price) {
    offerPrice.texcontent = `${offer.price} ₽/ночь`;
  } else {
    offerPrice.classList.add('hidden');
  }

  if(offer.rooms && offer.guests) {
    flat.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  } else {
    offer.rooms.classList.add('hidden');
    offer.guests.classList.add('hidden');
  }

  if (offer.checkin && offer.checkout) {
  checkTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    offer.checkin.classList.add('hidden');
    offer.checkout.classList.add('hidden');
    }

  if (offer.description) {
    popupDescription.textContent = offer.description;
  } else {
    popupDescription.classList.add('hidden');
  }

  //offer.photos.forEach(photo => {})

  const img = document.createElement('img').src ='...';
  photoContainer.appendChild(img);
};

export { createPopup };
