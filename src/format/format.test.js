import test from 'tape';
import {format} from './index.js';

test('format', (t) => {

    {
        t.equals(
            format('10101p', 'hh:mm:ss aa'),
            '01:01:01 pm',
            'it handles two-char formats'
        )
    }

    {
        t.equals(
            format('10101p', 'h:m:s a'),
            '1:1:1 p',
            'it handles one-char formats'
        )
    }

    {
        t.equals(
            format('1p', 'HH'),
            '13',
            'it handles 24hr-clock format'
        )
    }

    {
        t.equals(
            format('00:00:00', 'hh aa'),
            '12 am',
            'it properly deals with 0 in 12 hour clock'
        )
    }

    {
        t.equals(
            format('13', 'HH'),
            '13',
            'HH works as 2-digit, 24hr hour format'
        )
    }

    {
        t.equals(
            format('9', 'H'),
            '9',
            'H works as 1-digit, 24hr hour format'
        )
    }

    {
        t.equals(
            format('13', 'hh'),
            '01',
            'hh works as 2-digit, 12hr hour format'
        )
    }

    {
        t.equals(
            format('13', 'h'),
            '1',
            'h works as 1-digit, 12hr hour format'
        )
    }


    {
        t.equals(
            format('1307', 'mm'),
            '07',
            'mm works as 2-digit minute format'
        )
    }

    {
        t.equals(
            format('1307', 'm'),
            '7',
            'm works as 1-digit minute format'
        )
    }

    {
        t.equals(
            format('1:30:00p', 'ss'),
            '00',
            'ss works as 2-digit seconds format'
        )
    }

    {
        t.equals(
            format('10:04:09', 's'),
            '9',
            's works as 1-digit seconds format'
        )
    }

    {
        t.equals(
            format('1300', 'aa'),
            'pm',
            'aa works as 2-char meridiem format'
        )
    }

    {
        t.equals(
            format('0', 'a'),
            'a',
            'a works as 1-char meridiem format'
        )
    }

    {
        t.equals(
            format('n', 'h:m:s a'),
            null,
            'it returns null when error'
        )
    }

    t.end();
})
