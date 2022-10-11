"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const splitDate = dateString.split('/');
    return new Date(+splitDate[2], +splitDate[1] - 1, +splitDate[0]); // month is 0 indexed, hence the `- 1`
};
exports.dateStringToDate = dateStringToDate;
