const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
function getRandomPositiveFloat (a, b, digits=1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.min(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

const checkStringLength = (string, length) => string.length <= length;

const getRandomArrayElement = (array) =>
  array[getRandomPositiveInteger(0, array.length - 1)];

export { getRandomPositiveInteger, checkStringLength, getRandomArrayElement, getRandomPositiveFloat };
