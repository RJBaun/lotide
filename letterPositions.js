const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
    index++;
  }
  return results;
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
    console.log(`✅✅✅ Assertion Passed: ${arr1} and ${arr2} are identical!`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} and ${arr2} are not identical!`);
  }
};

assertArraysEqual(letterPositions("hello")['h'], [0]);
assertArraysEqual(letterPositions("hello")['e'], [1]);
assertArraysEqual(letterPositions("hello")['l'], [2, 3]);
assertArraysEqual(letterPositions("hello")['o'], [4])