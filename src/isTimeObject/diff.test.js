import test from 'tape';
import {isTimeObject} from './index.js';

const hours = 1;
const minutes = 1;
const seconds = 1;

test('isTimeObject', (t) => {

    {
        t.ok(
            isTimeObject({hours, minutes, seconds}),
            'it detects valid time object'
        );
    }

    {
        t.error(
            isTimeObject({hours, minutes}),
            'it must have `seconds` prop'
        );
    }

    {
        t.error(
            isTimeObject({hours, seconds}),
            'it must have `minutes` prop'
        );
    }

    {
        t.error(
            isTimeObject({minutes, seconds}),
            'it must have `hours` prop'
        );
    }

    {
        t.error(
            isTimeObject(null),
            'rejects null'
        );
    }

    t.end();
})
