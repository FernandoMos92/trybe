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

module.exports = { sum, myRemove };
