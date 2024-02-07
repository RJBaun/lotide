const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} and ${arr2} are identical!`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} and ${arr2} are not identical!`);
  }
};



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

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);