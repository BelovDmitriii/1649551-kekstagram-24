import { NAMES, MESSAGES } from './data';

const checkStringLength = (string, length) => string.length <= length;

const getRandomInt = (min, max) => {
  if (min < 0 || max < 0){
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomElement = (element) => element[_.random(0, element.length - 1)];

const createComments = () => {
  const comments = [];
  for (let index = 0; index < getRandomInt(1,2); index++){
    comments.push(
      {
        id: index + 1,
        avatar: `img/avatar-${_.random(1, 6)}.svg`,
        message: getRandomElement(MESSAGES),
        name: getRandomElement(NAMES),
      },
    );
  }
  return comments;
};

export {checkStringLength, createComments};
