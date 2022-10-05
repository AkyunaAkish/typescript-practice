"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            // `- i` will ensure that we don't try to bubble sort
            // already sorted numbers on the end of the array
            // `- 1` accounts for 0 based indexes
            for (let j = 0; j < length - i - 1; j++) {
                // this will compare the left hand side element
                // with the next item to the right
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
