import test from 'tape';
import {elapsedSeconds} from '.';

test('elapsedSeconds', (t) => {

    t.equal(
        elapsedSeconds('6:45:10p'),
        18*3600 + 45*60 + 10,
        'it calculates the number of seconds since midnight'
    );

    t.equal(
        elapsedSeconds('nan'),
        null,
        'returns null when cant parse'
    );


    t.end();
})
