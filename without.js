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
  for (let i =0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      removedArr.push(source[i]);
    }
  }
  return removedArr;
};

console.log(without([1, 2, 3], [1, 2]));

/*Implement the without function
Good job on your without function! It correctly takes two arrays as arguments and returns a copy of the first array with any elements present in the second array removed.

However, the requirement specifies not to use higher-order functions like filter, but in your without function, you used filter:

let removedArr = source.filter(function(item) {
  return !itemsToRemove.includes(item);
});
Instead of using filter, you can use a simple for loop to iterate over the source array and use includes to check if the current item is in itemsToRemove. If it's not, you can add it to a new array.

Also, remember to include some tests using assertArraysEqual to confirm that without behaves correctly.

Keep going! You're almost there.*/