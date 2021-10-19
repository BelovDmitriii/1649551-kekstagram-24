const body = document.querySelector('body');
const overlay = body.querySelector('.img-upload__overlay');

const fileUpload = body.querySelector('#upload-file');
const formUpload = body.querySelector('#upload-select-image');
const formUploadClose = body.querySelector('#upload-cancel');

fileUpload.addEventListener('click', (evt) => {
  evt.preventDefault();
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
});

formUploadClose.addEventListener('click', () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
});
