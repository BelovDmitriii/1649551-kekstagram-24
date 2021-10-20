import { isEscapeKey } from './utils.js';

const body = document.querySelector('body');
const overlay = body.querySelector('.img-upload__overlay');

const fileUpload = body.querySelector('#upload-file');

const formUploadClose = body.querySelector('#upload-cancel');

const onCloseFormEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    overlay.classList.add('hidden');
  }
};

const openForm = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onCloseFormEscKeyDown);
};

const closeForm = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onCloseFormEscKeyDown);
};

fileUpload.addEventListener('change', () => {
  openForm();
});

formUploadClose.addEventListener('click', () => {
  closeForm();
});
