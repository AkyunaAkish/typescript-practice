"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("../utils");
// CsvFileReader<MatchData> is passing MatchData as a generic type
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(row) {
        // update each match to be a tuple with the correct data types for each index
        return [
            (0, utils_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            +row[3],
            +row[4],
            row[5],
            row[6],
        ];
    }
}
exports.MatchReader = MatchReader;
