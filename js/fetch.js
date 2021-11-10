import { showErrorMessage, showSuccessMessage } from './messages.js';
import { showMessage } from './utils.js';

const getData = (onSuccess, onFail) => {
  fetch('https://24.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      onFail(showMessage());
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch (
    'https://24.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess(showSuccessMessage);
      } else {
        onFail(showErrorMessage);
      }
    })
    .catch(() => {
      onFail(showErrorMessage);
    });
};

export {getData, sendData};
