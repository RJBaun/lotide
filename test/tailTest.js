const assertEqual = require('../assertEqual');
const tail = require('../tail');


const result = tail(["hello", "from", "the", "future"]);
const words = ['here', 'are', 'some', 'words'];
const originalLength = words.length;
tail(words);
const testEmpty = [];


assertEqual(result[0], "from");
assertEqual(result.length, 3);
assertEqual(words.length, originalLength);
assertEqual(tail(testEmpty).length, 0);