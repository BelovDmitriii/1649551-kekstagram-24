import { photosDescription } from './data.js';

const pictures = document.querySelectorAll('#picture');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPhoto = (picture, comments, likes) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  return pictureElement;
};

const fragment = document.createDocumentFragment();
const createPhotos = () => {
  photosDescription.forEach((item) => {
    fragment.appendChild(createPhoto(item));
  });
  pictures.appendChild(fragment);
};
createPhotos();

export {createPhotos};
