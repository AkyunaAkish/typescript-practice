"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader {
    // a reader will be passed in and will need to
    // implement the DataReader interface
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    static fromCsv(file) {
        const csvFileReader = new CsvFileReader_1.CsvFileReader(file);
        return new MatchReader(csvFileReader);
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
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
        });
    }
}
exports.MatchReader = MatchReader;
