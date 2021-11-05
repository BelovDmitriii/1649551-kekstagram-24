import { scaleControllValue } from './form.js';

const DEFAULT_EFFECT_LEVEL = 100;

const Slider = {
  MIN: 0,
  MAX: 100,
  STEP: 1,
};

const effectsList = document.querySelector('.effects__list');
const imagePreview = document.querySelector('.img-upload__preview');
const sliderUpload = document.querySelector('.img-upload__effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
const sliderElement = document.querySelector('.effect-level__slider');
const image = imagePreview.querySelector('img');

effectLevelValue.value = DEFAULT_EFFECT_LEVEL;
let currentEffect = '';

const effects = {
  none: () => {
    sliderUpload.classList.add('visually-hidden');
    return 'none';
  },

  chrome: () => {
    sliderUpload.classList.remove('visually-hidden');
    return `grayscale(${parseInt(effectLevelValue.value, 10) * 0.01})`;
  },

  sepia: () => {
    sliderUpload.classList.remove('visually-hidden');
    return `sepia(${parseInt(effectLevelValue.value, 10) * 0.01})`;
  },

  marvin: () => {
    sliderUpload.classList.remove('visually-hidden');
    return `invert(${Math.floor(effectLevelValue.value)}%)`;
  },

  phobos: () => {
    sliderUpload.classList.remove('visually-hidden');
    return `blur(${(parseInt(effectLevelValue.value, 10) * 3) * 0.01}px)`;
  },

  heat: () => {
    sliderUpload.classList.remove('visually-hidden');
    return `brightness(${(parseInt(effectLevelValue.value, 10) * 3) * 0.01})`;
  },
};

effectsList.addEventListener('click', (evt) => {
  let target = evt.target;

  if (target.classList.contains('effects__label')) {
    target = evt.target.querySelector('span');
  }

  if (target.classList.contains('effects__preview')) {
    if (currentEffect !== '') {
      image.classList.remove(currentEffect);
    }

    sliderElement.noUiSlider.set(Slider.MAX);
    effectLevelValue.value = Slider.MAX;
    imagePreview.style.transform = '';
    scaleControllValue.value = '100%';

    currentEffect = target.classList[1];
    image.classList.add(currentEffect);
    image.style.filter = effects[currentEffect.replace('effects__preview--', '')]();
  }
});

noUiSlider.create(sliderElement, {
  range: {
    min: Slider.MIN,
    max: Slider.MAX,
  },
  start: Slider.MAX,
  step: Slider.STEP,
  connect: 'lower',
});

sliderElement.noUiSlider.on('change', () => {
  effectLevelValue.value = sliderElement.noUiSlider.get();

  image.style.filter = effects[currentEffect.replace('effects__preview--', '')]();
});

export {image, effects};
