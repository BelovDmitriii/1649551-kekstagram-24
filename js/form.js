import { isEscapeKey } from './utils.js';

const zoomValue = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const body = document.querySelector('body');
const overlay = body.querySelector('.img-upload__overlay');

const fileUpload = body.querySelector('#upload-file');

const formUploadClose = body.querySelector('#upload-cancel');

const scaleControllSmallerButton = body.querySelector('.scale__control--smaller');
const scaleControllBiggerButton = body.querySelector('.scale__control--bigger');
const scaleControllValue = body.querySelector('.scale__control--value');

const onCloseFormEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    overlay.classList.add('hidden');
  }
};

const closeForm = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onCloseFormEscKeyDown);
};

const openForm = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onCloseFormEscKeyDown);
};

fileUpload.addEventListener('change', () => {
  openForm();
});

formUploadClose.addEventListener('click', () => {
  closeForm();
});

scaleControllSmallerButton.addEventListener('click', () => {
  let size = parseInt(scaleControllValue.value, 10);
  if (size === zoomValue.MIN) {
    return;
  }
  size -= zoomValue.STEP;
  scaleControllValue.value = `${size}%`;
});

scaleControllBiggerButton.addEventListener('click', () => {
  let size = parseInt(scaleControllValue.value, 10);
  if (size === zoomValue.MAX) {
    return;
  }
  size += zoomValue.STEP;
  scaleControllValue.value = `${size}%`;
});
