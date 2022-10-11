import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8', // gives a string of data rather than a buffer
      })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
