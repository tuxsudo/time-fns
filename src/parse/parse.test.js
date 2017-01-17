import test from 'tape';
import {parse} from './index.js';

test('parse', (t) => {

    {
        t.deepEquals(
            Object.keys(parse('1')),
            ['hours', 'minutes', 'seconds'],
            'it returns an object with `hours`, `minutes`, and `seconds` props'
        )
    }

    {
        const {hours, minutes, seconds} = parse('17:11:31');
        t.deepEquals(
            {hours, minutes, seconds},
            {hours: 17, minutes: 11, seconds: 31},
            'it parses 24hr format'
        );
    }

    {
        const {hours, minutes, seconds} = parse('17:11');
        t.deepEquals(
            {hours, minutes, seconds},
            {hours: 17, minutes: 11, seconds: 0},
            'when two segments, seconds defaults to 0'
        );
    }

    {
        const {hours, minutes, seconds} = parse('23');
        t.deepEquals(
            {hours, minutes, seconds},
            {hours: 23, minutes: 0, seconds: 0},
            'when 1 segment, minutes and seconds default to 0'
        );
    }


    {
        const {hours, minutes} = parse('7:11a');
        t.deepEquals(
            {hours, minutes},
            {hours: 7, minutes: 11},
            'it parses 12hr am'
        );

    }

    {
        const {hours, minutes} = parse('7:11p');
        t.deepEquals(
            {hours, minutes},
            {hours: 19, minutes: 11},
            'it parses 12hr pm'
        );

    }

    {
        t.deepEquals(
            parse('1:00p'),
            parse('1:00pm'),
            'meridiem can be 1 or two chars'
        );

    }

    {
        t.deepEquals(
            parse('1:00A'),
            parse('1:00am'),
            'meridiem can upper or lower case'
        );

    }

    {
        const {hours, minutes} = parse('1p');
        t.deepEquals(
            {hours, minutes},
            {hours: 13, minutes: 0},
            'minutes is optionals'
        );
    }

    {
        const {hours, minutes, seconds} = parse('13045pm');
        t.deepEquals(
            {hours, minutes, seconds},
            {hours: 13, minutes: 30, seconds: 45},
            'works without colons and spaces (12hr, 3segments)'
        );
    }

    {
        const {hours, minutes, seconds} = parse('130pm');
        t.deepEquals(
            {hours, minutes, seconds},
            {hours: 13, minutes: 30, seconds: 0},
            'works without colons and spaces (12hr, 2segments)'
        );
    }

    {
        const {hours, minutes, seconds} = parse('222134');
        t.deepEquals(
            {hours, minutes, seconds},
            {hours: 22, minutes: 21, seconds: 34},
            'works without colons and spaces (24hr, 3segments)'
        );
    }

    {
        const {hours, minutes, seconds} = parse('2312');
        t.deepEquals(
            {hours, minutes, seconds},
            {hours: 23, minutes: 12, seconds: 0},
            'works without colons and spaces (24hr, 2segments)'
        );
    }

    {
        const {hours} = parse(9);
        t.equal(hours, 9, 'coerces numbers to strings');
    }


    {
        const results = parse('abc');
        t.equal(results, null, 'returns null when cant parse');
    }







    t.end();
})
