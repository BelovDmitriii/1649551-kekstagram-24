import {closeBigPicture} from './big-picture.js';

const getRandomInt = (min, max) => {
  if (min < 0 || max < 0){
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomElement = (element) => element[getRandomInt(0, element.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const onBigPictureEscKeyDown = () => {
  if (isEscapeKey) {
    closeBigPicture();
  }
};

const showMessage = () => {
  const messageAlert = document.createElement('div');
  messageAlert.style.position = 'absolute';
  messageAlert.style.left = 0;
  messageAlert.style.top = 0;
  messageAlert.style.right = 0;
  messageAlert.style.fontSize = '30px';
  messageAlert.style.backgroundColor = 'red';
  messageAlert.style.textAlign = 'center';
  messageAlert.textContent = 'Ошибка загрузки фотографий';
  document.body.append(messageAlert);
};

export {getRandomInt, getRandomElement, isEscapeKey, onBigPictureEscKeyDown, showMessage};
