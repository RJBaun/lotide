const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail(['5']), []);
  });
});


const result = tail(["hello", "from", "the", "future"]);
const words = ['here', 'are', 'some', 'words'];
const originalLength = words.length;
tail(words);
const testEmpty = [];


assertEqual(result[0], "from");
assertEqual(result.length, 3);
assertEqual(words.length, originalLength);
assertEqual(tail(testEmpty).length, 0);