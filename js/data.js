import { getRandomInt, getRandomElement } from './utils.js';

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
const LikesCount = {
  MIN: 15,
  MAX: 200,
};
const TOTAL_PHOTOS = 25;
const TOTAL_AVATARS = 6;
const CommentsCount = {
  MIN: 1,
  MAX: 3,
};

const createComments = () => {
  const comments = [];
  for (let index = 0; index < getRandomInt(CommentsCount.MIN, CommentsCount.MAX); index++){
    comments.push(
      {
        id: index + 1,
        avatar: `img/avatar-${getRandomInt(1,TOTAL_AVATARS)}.svg`,
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
  url: `./photos/${getRandomInt(1,TOTAL_PHOTOS)}.jpg`,
  description: getRandomElement(PHOTO_DESCRIPTION),
  likes: getRandomInt(LikesCount.MIN, LikesCount.MAX),
  comments: createComments(),
});

export const photosDescription = Array.from({length: PHOTO_DESCRIPTION_COUNT}, createPhotoDescription);
