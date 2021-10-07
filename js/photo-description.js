import {createComments} from './utils';
import {getRandomElement} from './utils';
import {PHOTO_DESCRIPTION, PHOTO_DESCRIPTION_COUNT} from './data';
let id = 1;

const createPhotoDescription = () => ({
  id:  id++,
  url: `/photos/ ${_.random(1,25)} .jpg`,
  description: getRandomElement(PHOTO_DESCRIPTION),
  likes: _.random(15, 200),
  comments: createComments(),
});

const photosDescription = Array.from({length: PHOTO_DESCRIPTION_COUNT}, createPhotoDescription);

export {photosDescription};
