const takeUntil = function(array, callback) {
  // define new array to push items into
  newArr = [];
  // loop through array
  for (const item of array) {
    // check if item meets callback
    if (!callback(item)) {
      // if not, push to newArr
      newArr.push(item);
    } else {
      // if item meets callback, break loop
      break;
    }
  }
  // faltten response as nested arrays cannot be compared
  return newArr.flat();
};

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
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const test2 = ['this', 'is', 'a', 'test'];
const test3 = [['this', 'is'], ['a', 'test'], 'for', 'nested', 'arrays'];

// test for multiples
assertArraysEqual(takeUntil(test1, x => x % 4 === 0), [1, 2, 3]);
// test for word length
assertArraysEqual(takeUntil(test2, x => x.length < 2), ['this', 'is']);
// test for item type
assertArraysEqual(takeUntil(test3, x => !Array.isArray(x)), ['this', 'is', 'a', 'test']);