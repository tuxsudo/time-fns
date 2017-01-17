import test from 'tape';
import {isEQ} from '.';

test('isEQ', (t) => {


    t.equal(
        isEQ('13:03:12', '1:03:12 pm'),
        true,
        'returns true times matches'
    );

    t.equal(
        isEQ('7:00:01p', '7:00:02p'),
        false,
        'returns false when times dont match'
    );


    t.end();
})
