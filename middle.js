const middle = function(array) {
  let middleArr = [];
  if (array.length <= 2) {
    return middleArr;
  }
  if (array.length % 2 === 0) {
    middleArr.push(array[(array.length / 2) - 1], array[(array.length / 2)]);
    return middleArr;
  } else {
    middleArr.push(array[Math.floor(array.length / 2)]);
    return middleArr;
  }
};

module.exports = middle;
