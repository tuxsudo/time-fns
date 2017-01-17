import {parse} from '.';

// item might already be parsed, so check for that first...
export const cautiouslyParse = (input) => (
    typeof input === "object"
        && input.hours!==undefined
        && input.minutes!==undefined
        && input.seconds!==undefined
            ? input
            : parse(input)
);

export default cautiouslyParse;
