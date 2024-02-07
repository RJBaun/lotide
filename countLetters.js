const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let letterCounts = {};
  for (letter of string) {
    if (letterCounts[letter]) {
      letterCounts[letter] += 1;
    } else {
      letterCounts[letter] = 1;
    }
  }
  return letterCounts;
};

let result1 = countLetters('aaabbc');

assertEqual(result1['a'], 3);