"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    // determines whether a pair of elements need to be swapped
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        const leftHandItem = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHandItem;
        this.data = characters.join('');
    }
    // the `get` keyword allows you to
    // refer to length as a property rather than a method
    // so you don't need to invoke it with `()` // instance.length
    get length() {
        return this.data.length;
    }
}
exports.CharactersCollection = CharactersCollection;
