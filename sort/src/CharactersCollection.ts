import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  // determines whether a pair of elements need to be swapped
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');

    const leftHandItem = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHandItem;

    this.data = characters.join('');
  }

  // the `get` keyword allows you to
  // refer to length as a property rather than a method
  // so you don't need to invoke it with `()` // instance.length
  get length(): number {
    return this.data.length;
  }
}
