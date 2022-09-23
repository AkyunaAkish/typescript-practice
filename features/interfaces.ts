// generic reusable version
interface Reportable {
  summary(): string; // a function that will return a string
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return 'summary text old civic';
  },
};

const soda = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return 'summary text soda';
  },
};

const printSummary = (item: Reportable): void => {
  console.log(`summary: ${item.summary()}`);
};

printSummary(oldCivic);
printSummary(soda);

// Vehicle Centric Version:
// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string; // a function that will return a string
// }

// const oldCivic: Vehicle = {
//   name: 'civic',
//   year: new Date(),
//   broken: true,
//   summary(): string {
//     return 'summary text';
//   },
// };

// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(`name: ${vehicle.name}`);
//   console.log(`year: ${vehicle.year}`);
//   console.log(`broken: ${vehicle.broken}`);
//   console.log(`summary: ${vehicle.summary()}`);
// };

// printVehicle(oldCivic);
