import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

// This Summary class utilizes object composition via delegation
// as you can see, this class takes in instances of two other classes
// as constructor arguments (analyzer, outputTarget).
// this way, any dev who wants to use the Summary class can pick and choose
// which exact type of analyzer/outputTarget combination types they'd
// like to use, delegating the `run` and `print` methods to those
// separate class instances
export class Summary {
  // a static method can be called on a class
  // without instantiating it first
  // in this case, we've created a static method to return
  // a particular type of instance of summary to make it easy
  // to instantiate for other devs
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}

// new Summary(new WinsAnalysis(), new ConsoleReport());
