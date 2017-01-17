import parse from '../parse';

export const elapsedSeconds = (input) => {
    const time = parse(input);
    return time && time.hours*3600 + time.minutes*60 + time.seconds
}

export default elapsedSeconds;
