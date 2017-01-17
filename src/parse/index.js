import {parseString} from './parseString';
import {isTimeObject} from '../isTimeObject';

// item might already be parsed, so check for that first...
export const parse = (input) => (
    isTimeObject(input)
        ? input
        : parseString(input)
);

export default parse;
