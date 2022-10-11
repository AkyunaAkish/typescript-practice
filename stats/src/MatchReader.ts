import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './composition/MatchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(file: string): MatchReader {
    const csvFileReader = new CsvFileReader(file);
    return new MatchReader(csvFileReader);
  }

  matches: MatchData[] = [];

  // a reader will be passed in and will need to
  // implement the DataReader interface
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      // update each match to be a tuple with the correct data types for each index
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        +row[3],
        +row[4],
        row[5] as MatchResult, // type assertion (tells typescript in this case to use the enum rather than just assuming it's a string)
        row[6],
      ];
    });
  }
}
