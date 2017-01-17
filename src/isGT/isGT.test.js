import test from 'tape';
import {isGT} from '.';

test('isGT', (t) => {

    t.ok(isGT('700', '701'), 'it checks if second time is greater than first');

    t.equal(
        isGT('2300', '2301'),
        true,
        'returns true when second time is greater than first'
    );

    t.equal(
        isGT('700p', '701a'),
        false,
        'returns false when second time is not greater than first'
    );


    t.end();
})
