const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`Assertion failed: ${arr1} and ${arr2} are not identical.`);
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(`Assertion Failed: ${arr1} and ${arr2} are not identical.`);
      } else {
        console.log(`Assertion Passed: ${arr1} and ${arr2} are identical.`);
      }
    }
  }
};

assertArraysEqual(['Emma', 'is', 'cool'], ['Emma', 'is', 'not', 'cool']);
