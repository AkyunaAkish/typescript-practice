import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from '../MatchResult';
import { dateStringToDate } from '../utils';

// a tuple to represent a row of data in the CSV that represents a football (soccer) match
type MatchData = [Date, string, string, number, number, MatchResult, string];

// CsvFileReader<MatchData> is passing MatchData as a generic type
export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
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
  }
}
