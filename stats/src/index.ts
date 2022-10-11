import { MatchReader } from './MatchReader';
import { Summary } from './composition/Summary';
// import { ConsoleReport } from './composition/reportTargets/consoleReport';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// currently utilizing the composition method (which is the preferred method over inheritance)
const { matches } = matchReader;

const summary = Summary.winsAnalysisWithHtmlReport('Man United');

// option using the console report instead
// and not using a static method to instantiate the
// instance of Summary
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new ConsoleReport()
// ); 

summary.buildAndPrintReport(matches);
