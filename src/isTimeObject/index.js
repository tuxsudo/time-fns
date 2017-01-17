export const isTimeObject = (input) => (
    typeof input === "object"
        && input !== null
        && input.hours!==undefined
        && input.minutes!==undefined
        && input.seconds!==undefined
);

export default isTimeObject;
