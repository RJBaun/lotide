
const tail = function(arr) {
  let tailArr = [];
  for (let i = 1; i < arr.length; i++) {
    tailArr.push(arr[i]);
  }
  return tailArr;
};

const result = tail(["hello", "from", "the", "future"]);
const words = ['here', 'are', 'some', 'words'];
const originalLength = words.length;
tail(words);
const testEmpty = [];

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(result[0], "from");
assertEqual(result.length, 3);
assertEqual(words.length, originalLength);
assertEqual(tail(testEmpty).length, 0);