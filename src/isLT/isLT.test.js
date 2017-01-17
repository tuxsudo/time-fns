import test from 'tape';
import {isLT} from '.';

test('isLT', (t) => {

    t.ok(isLT('800', '701'), 'it checks if second time is less than first');

    t.equal(
        isLT('2330', '2301'),
        true,
        'returns true when second time is less than first'
    );

    t.equal(
        isLT('700a', '701p'),
        false,
        'returns false when second time is not less than first'
    );


    t.end();
})
