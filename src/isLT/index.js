import parse from '../parse';
import {elapsedSeconds} from '../elapsedSeconds';

export const isLT = (fromTimeIn, toTimeIn) => {
    const from = parse(fromTimeIn);
    const to = parse(toTimeIn);

    return from && to
        ? elapsedSeconds(to) < elapsedSeconds(from)
        : null;

}

export default isLT;
