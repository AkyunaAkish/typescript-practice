// JSON.parse returns an 'any' type
// this is unclear
// which is why we should annotate any JSON.parse statement
const json = '{"x": 20, "y": 10}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// delayed initialization requires annotations
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // label as boolean because an initial value isn't set

words.forEach((word) => {
  if (word === 'green') {
    foundWord = true;
  }
});

// when inference doesn't work
// a variable whose type cannot be inferred correctly
let nums = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // this will be either a number or a boolean

nums.forEach((num) => {
  if (num > 0) {
    numberAboveZero = num;
  }
});
