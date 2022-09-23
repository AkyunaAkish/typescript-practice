// type inference: string[]
const carMakers = ['ford', 'toyota', 'chevy'];

// if you initialize an empty array, the type should be annotated to avoid any[]
const carYears: number[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];
const carsByMakeEmpty: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0]; // TS knows this is a string

// Prevent incompatible values
// carMakers.push(100); // this is an error because TS knows the type should be a string

// Help with map
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

// Flexible Types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];


