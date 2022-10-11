import { MatchResult } from '../MatchResult';

// a tuple to represent a row of data in the CSV that represents a football (soccer) match
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
