// Array to map;
const words = ["ground", "control", "to", "major", "tom"];
const beers = ['bud', 'pbr', 'mgd', 'coors'];
const temperatures = [20, 33, 15, 27, 35];

// defining map;
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} and ${arr2} are identical!`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} and ${arr2} are not identical!`);
  }
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

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(beers, beer => beer.length), [3, 3, 3, 5]);
assertArraysEqual(map(temperatures, temperature => temperature - 10), [10, 23, 5, 17, 25]);