"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
// This Summary class utilizes object composition via delegation
// as you can see, this class takes in instances of two other classes
// as constructor arguments (analyzer, outputTarget).
// this way, any dev who wants to use the Summary class can pick and choose
// which exact type of analyzer/outputTarget combination types they'd
// like to use, delegating the `run` and `print` methods to those
// separate class instances
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    // a static method can be called on a class
    // without instantiating it first
    // in this case, we've created a static method to return
    // a particular type of instance of summary to make it easy
    // to instantiate for other devs
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    buildAndPrintReport(matches) {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}
exports.Summary = Summary;
// new Summary(new WinsAnalysis(), new ConsoleReport());
