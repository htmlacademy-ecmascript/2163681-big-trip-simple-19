const MONTHS = ['JAN', 'FAB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getSentence = (arr, max) => {
  const newDescriptions = [];
  for (let i = 0; i < arr.length; i++) {
    if (newDescriptions.length < getRandomNumber(0, max)) {
      newDescriptions.push(getRandomArrayElement(arr));
    }
  }
  return newDescriptions.join('');
};

const convertsDate = (originalDate) => {
  const date = new Date(originalDate);
  return MONTHS[date.getMonth()];
};

export {getRandomArrayElement, getRandomNumber, getSentence, convertsDate};
