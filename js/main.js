function getRandomNumber(min, max) {
  if (max <= min) {
    alert('Второе число должно быть больше первого числа!!!');
  }else if(min < 0){
    alert('Числа должны быть больше или равны 0!');
  }
  return Math.floor(Math.random()*(max + 1 - min)) + min;
}
getRandomNumber(10, 23);


function lengthCheck(string, maxLengthOfString) {
  string < maxLengthOfString ? console.log(true) : console.log(false);
}

lengthCheck(130,140);
