import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  // determines whether a pair of elements need to be swapped
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHandItem = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHandItem;
  }

  // the `get` keyword allows you to
  // refer to length as a property rather than a method
  // so you don't need to invoke it with `()` // instance.length
  get length(): number {
    return this.data.length;
  }
}
