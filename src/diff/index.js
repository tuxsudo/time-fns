import parse from '../parse';
import {elapsedSeconds} from '../elapsedSeconds';

const {max, floor} = Math;

const revertElapsedSeconds = (seconds) => {
    const hours = max(0, floor(seconds/(3600)));
    const minutes = max(0, floor((seconds - hours*3600)/60));
    return {hours, minutes, seconds: seconds - hours*3600 - minutes*60};
}

export const diff = (fromTimeIn, toTimeIn) => {
    const fromTime = parse(fromTimeIn);
    const toTime = parse(toTimeIn);

    if(fromTime && toTime) {
        const from = elapsedSeconds(fromTime);
        const to = elapsedSeconds(toTime);
        const lastSecondOfDay = elapsedSeconds({hours: 23, minutes: 59, seconds: 59});

        return from <= to
            ? revertElapsedSeconds(to - from)
            : revertElapsedSeconds(lastSecondOfDay - from + to + 1);
    }

    return null;

}

export default diff;
