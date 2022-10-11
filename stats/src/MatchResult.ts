// enum (enumeration): an object that stores options/related values
// enums signal to other devs this is a collection of related values
export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

// enums can be used as annotations to tell TS
// that a function will take/return any one of the
// values on the enum
// function printResults(): MatchResult {
//   return MatchResult.HomeWin;
// }
