import parse from '../parse';
import {elapsedSeconds} from '../elapsedSeconds';

export const isEQ = (fromTimeIn, toTimeIn) => {
    const from = parse(fromTimeIn);
    const to = parse(toTimeIn);

    return from && to && elapsedSeconds(to) === elapsedSeconds(from);
}

export default isEQ;
