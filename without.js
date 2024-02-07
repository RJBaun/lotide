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

const without = function(source, itemsToRemove) {
  let removedArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      removedArr.push(source[i]);
    }
  }
  return removedArr;
};

console.log(without([1, 2, 3], [1, 2]));
