import {renderPhotos} from './pictures.js';
import './pictures.js';
import { closeForm, setUserformSubmit } from './form.js';
import './hashtags.js';
import './effects.js';
import {getData} from './fetch.js';

getData((photos) => {
  renderPhotos(photos);
});

setUserformSubmit(closeForm);
