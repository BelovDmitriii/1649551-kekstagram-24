const NAMES = [
  'Дмитрий',
  'Артём',
  'Алексей',
  'Наталья',
  'Виктор',
  'Иван',
  'Сергей',
  'Анатолий',
];

const PHOTO_DESCRIPTION = [
  'Кукла колдуна',
  'Камнем по голове',
  'Дурак и молния',
  'Проклятый старый дом',
  'Лесник',
  'Утопленник',
  'Воспоминания о былой любви',
  'Валет и дама',
  'Любовь и пропеллер',
  'Ели мясо мужики',
  'Смельчак и ветер',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const PHOTO_DESCRIPTION_COUNT = 25;

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

let id = 1;

const createPhotoDescription = () => ({
  id:  id++,
  url: `/photos/ ${_.random(1,25)} .jpg`,
  description: getRandomElement(PHOTO_DESCRIPTION),
  likes: _.random(15, 200),
  comments: createComments(),
});

const photosDescription = Array.from({length: PHOTO_DESCRIPTION_COUNT}, createPhotoDescription);

// eslint-disable-next-line no-console
console.log(photosDescription);
