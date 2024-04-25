const houseTypeToString = {
    'flat': 'Квартира',
    'bungalow': 'Бунгало',
    'house': 'Дом',
    'palace': 'Дворец',
    'hotel': 'Отель',
};

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const markUpFeatures = (card, features) => {
    const featureList = card.qurySelector('.popup__features');

    if (features === underfind || features.length ===0) {
        return featureList.remove();
    } 

    featureList.textcontent = '';
    for (const feature of features) {
        const featureElement = document.createElement('li');
        featureElement.classList.add('.popup__feature');
        featureElement.classList.add('.popup__feature--$(feature}');
        featureList.append(featureElement);
    }
    
}

constmarkUpPhotos = (cardElement, photos) => {
    photoElement.src = photo;
    photoWraper.append(photoElement);
};

for (const {offer, author} of photoMocks){
    cardElement.querySelector('.popup__title').textContent = offer.title;
    cardElement.querySelector('.popup__text--address').textContent = offer.address;
    cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    cardElement.querySelector('.popup__type').textContent = houseTypeToString(offer, type);
    cardElement.querySelector('.popup__text--capacity').textContent = `${offer, rooms} комнаты для ${offer, guests} гостей`;
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer,checkin}, выезд до ${offer,checkout}`;
    makeupFeatures(cardElement, offer, features);
    cardElement.querySelector('.popup__description').textContent = offer, description;
    markUpPhotos(cardElement, offer.photos);
    cardElement.querySelector('.popup__avatar').src = author.avatar;
    cardFragment.append(cardElement);
}

const canvasElement = document.querySelector('#map-canvas');
canvasElement.append(getRandomPositiveInteger(cardFragment.childNodes));