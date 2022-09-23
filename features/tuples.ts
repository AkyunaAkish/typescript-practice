// a Tuple looks like an Array, but it is more similar in
// use-case to an object
// each item within the tuple represents a property
// of one particular piece of data

// a tuple will generally have a mix of different
// types since each item is a distinct property

// a tuple will have a fixed order of elements so that
// a developer can know that a particular property is at
// a particular index

// example object equivalent
// const drink = {
//   color: 'brown',
//   carbonated: true,
//   sugar: 40,
// };

// this is a tuple stating this item needs a string,
// then a boolean, then a number strictly
const pepsi: [string, boolean, number] = ['brown', true, 40];

// Type Alias version
type Drink = [string, boolean, number];
const coke: Drink = ['brown', true, 45];
const tea: Drink = ['clear', true, 35];
const lemonade: Drink = ['yellow', false, 25];

// Tuples will not be used very often

// working with CSV files is one use case where tuples could make sense to use

// Because tuples do not have labels/keys
// an object is much easier to digest/understand 
// so tuples are only used in a small number of edge cases

