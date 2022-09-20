let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
let now: Date = new Date();
let colors: string[] = ['blue', 'green', 'orange']; // array of strings
let myNums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let truths: boolean[] = [true, false, true, false, true];

class Car {}

let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 11,
  y: 11,
};

// a function that takes an number 'i' and returns nothing 'void'
const logNumber: (i: number) => void = (i: number) => {
  console.log('i', i);
};
