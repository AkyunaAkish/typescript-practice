// ----------------------Start Non-generic class example--------------------------
class ArrayOfNumbers {
  constructor(public collection: number[]) {} // <---- specific type

  get(index: number): number {
    // <---- specific type
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {} // <---- specific type

  get(index: number): string {
    // <---- specific type
    return this.collection[index];
  }
}
// -----------------------End Non-generic class example-------------------------

// ----------------------Start generics with classes example--------------------------
// uses generics `<T>` (passes in a data type dynamically)
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// TypeScript will infer the generic type to pass
// to ArrayOfAnything based on the data provided
new ArrayOfAnything(['a', 'b', 'c', 'd']);

// If you don't pass initial data or you just want to
// be thorough, you can pass the type in
new ArrayOfAnything<string>([]);
new ArrayOfAnything<string>(['a', 'b', 'c', 'd']);
// ----------------------End generics with classes example--------------------------

// ----------------------Start Non-generic function example--------------------------
function printString(arr: string[]): void {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
  }
}

function printNumbers(arr: number[]): void {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
  }
}
// ----------------------End Non-generic function example-----------------------------

// ----------------------Start generics with functions example--------------------------
function printAnything<T>(arr: T[]): void {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
  }
}

// with type inference
printAnything(['a', 'b', 'c']);

// (Recommended) without type inference
printAnything<string>([]);

// (Recommended) with type inference, but just being thorough to make the code more readable
printAnything<string>(['a', 'b', 'c']);
// ----------------------End generics with functions example----------------------------

// ----------------------Start generic constraints example--------------------------
class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

// T extends Printable is the generic constraint.
// It specifies that T will be dynamically passed in,
// but T is required to implement the Printable interface
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    element.print(); // throws an error in the absence of a constraint saying print doesn't exist on T
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
// ----------------------End generic constraints example--------------------------
