const assertEqual = require('../assertEqual');
const head = require('../head')

assertEqual(head([5,2,3]), (5));
assertEqual(head([1, 2, 3, 4]), 1)