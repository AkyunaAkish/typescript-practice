import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  constructor() {
    super();
  }

  add(value: number): void {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      return;
    }

    let tail = this.head;

    // get last item in the linked list
    while (tail.next) {
      tail = tail.next;
    }

    // the new final value is the newly created node
    tail.next = node;
  }

  get length(): number {
    if (this.head === null) return 0;

    let tail = this.head;
    let count = 1;

    while (tail.next) {
      tail = tail.next;
      count += 1;
    }

    return count;
  }

  at(index: number): Node {
    if (this.head === null) {
      throw new Error('index out of bound');
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (this.head === null) {
      throw new Error('linked list is empty');
    }

    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    return leftNode.data > rightNode.data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const leftValue = leftNode.data;
    const rightNode = this.at(rightIndex);
    const rightValue = rightNode.data;
    leftNode.data = rightValue;
    rightNode.data = leftValue;
  }

  print(): void {
    if (this.head === null) {
      return;
    }

    let node: Node | null = this.head;

    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
