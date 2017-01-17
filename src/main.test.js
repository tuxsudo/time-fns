import test from 'tape';
import {diff, elapsedSeconds, format, isEQ, isGT, isLT, isTimeObject, parse} from './main';


test('@tuxsudo/time', (t) => {

    t.equal(typeof diff, "function", "it re-exports diff");
    t.equal(typeof elapsedSeconds, "function", "it re-exports elapsedSeconds");
    t.equal(typeof format, "function", "it re-exports format");
    t.equal(typeof isEQ, "function", "it re-exports isEQ");
    t.equal(typeof isGT, "function", "it re-exports isGT");
    t.equal(typeof isLT, "function", "it re-exports isLT");
    t.equal(typeof isTimeObject, "function", "it re-exports isTimeObject");
    t.equal(typeof parse, "function", "it re-exports parse");

    t.end();
});
