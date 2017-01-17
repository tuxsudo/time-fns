import test from 'tape';
import {parse, format} from './main';


test('@tuxsudo/time', (t) => {

    t.equal(typeof parse, "function", "it re-exports parse");

    t.equal(typeof format, "function", "it re-exports format");

    t.end();
});
