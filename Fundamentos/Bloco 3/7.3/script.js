const sum = (a, b) => {
  if (typeof a === "string" || typeof b === "string") {
    throw new Error("parameters must be numbers");
  }

  return a + b;
};

const myRemove = (arr, item) => {
  if (!arr.includes(item)) {
    throw new Error("item not contains");
  }
  const findIndex = arr.indexOf(item);
  arr.splice(findIndex, 1);
  return `[${arr.toString()}]`;
};

const myFizzBuzz = (num) => {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}


module.exports = { sum, myRemove, myFizzBuzz };
