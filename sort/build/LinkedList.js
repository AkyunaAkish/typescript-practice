"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super();
        this.head = null;
    }
    add(value) {
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
    get length() {
        if (this.head === null)
            return 0;
        let tail = this.head;
        let count = 1;
        while (tail.next) {
            tail = tail.next;
            count += 1;
        }
        return count;
    }
    at(index) {
        if (this.head === null) {
            throw new Error('index out of bound');
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('index out of bounds');
    }
    compare(leftIndex, rightIndex) {
        if (this.head === null) {
            throw new Error('linked list is empty');
        }
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        return leftNode.data > rightNode.data;
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const leftValue = leftNode.data;
        const rightNode = this.at(rightIndex);
        const rightValue = rightNode.data;
        leftNode.data = rightValue;
        rightNode.data = leftValue;
    }
    print() {
        if (this.head === null) {
            return;
        }
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
