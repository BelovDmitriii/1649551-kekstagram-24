function getRandomNumber(min, max) {
  if (max <= min) {
    return 'Второе число должно быть больше первого числа!!!';
  }else if(min < 0){
    return 'Числа должны быть больше или равны 0!';
  }
  return Math.floor(Math.random()*(max + 1 - min)) + min;
}
getRandomNumber(10, 23);


function lengthCheck(string, maxLengthOfString) {
  if (string < maxLengthOfString) {
    return true;
  }
  return false;
}

lengthCheck(130,140);
