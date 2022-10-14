"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
const fs_1 = __importDefault(require("fs"));
class HtmlReport {
    print(report) {
        const html = `
            <div>
                <h1>${report}</h1>
            </div>
        `;
        fs_1.default.writeFileSync(`report_${Date.now()}.html`, html);
    }
}
exports.HtmlReport = HtmlReport;