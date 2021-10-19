import { photosDescription } from './data.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhoto = ({url, comments, likes}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  return pictureElement;
};

const fragment = document.createDocumentFragment();
const renderPhotos = () => {
  photosDescription.forEach((item) => {
    fragment.appendChild(renderPhoto(item));
  });
  pictures.appendChild(fragment);
};

const clearPhotos = () => {
  pictures.innerHTML = '';
};

export {renderPhotos, clearPhotos};
