"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = void 0;
// enum (enumeration): an object that stores options/related values
// enums signal to other devs this is a collection of related values
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
// enums can be used as annotations to tell TS
// that a function will take/return any one of the
// values on the enum
// function printResults(): MatchResult {
//   return MatchResult.HomeWin;
// }
