import { closeForm } from './form.js';
import { isEscapeKey } from './utils.js';

const errorMessage = document.querySelector('#error').content.querySelector('.error');
const successMessage = document.querySelector('#success').content.querySelector('.success');

const closePopup = () => {
  const popup =  document.querySelector('.error') || document.querySelector('.success');
  popup.remove();
};

const onEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    closePopup();
  }
};

const onPopupClick = (evt) => {
  if (!evt.target.classList.contains('success__inner') && !evt.target.classList.contains('error__inner')) {
    evt.preventDefault();
    closePopup();
    document.removeEventListener('keydown', onEscKeydown);
  }
};

const showMessage = (message) => {
  message.addEventListener('click', onPopupClick);
  document.body.appendChild(message);
  document.addEventListener('keydown', onEscKeydown, {once: true});
};

const showErrorMessage = () => {
  const messageFragment = errorMessage.cloneNode(true);
  showMessage(messageFragment);
  closeForm();
};

const showSuccessMessage = () => {
  const messageFragment = successMessage.cloneNode(true);
  showMessage(messageFragment);
  closeForm();
};

export {showErrorMessage, showSuccessMessage};
