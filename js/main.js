const getRandomNumber = function (min, max) {
  if(min < 0 || max < 0){
    return -1;
  } else if (max <= min) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random()*(max + 1 - min)) + min;
};
getRandomNumber(10, 23);


const lengthCheck = function (string, maxLengthOfString) {
  return string.length <= maxLengthOfString;
};

lengthCheck('good morning',140);
