import safeParse from '../parse/cautiously';

const formatChar = (n, doPad = true) => (
    doPad && `${n}`.length===1
        ? `0${n}`
        : `${n}`
);

const charToTime = ({hours, minutes, seconds}) => (char) => {
    switch(char) {
        case 'HH': case 'H':
            return formatChar(hours, char==="HH");

        case 'hh': case 'h':
            return formatChar(hours%12||12, char==="hh");

        case 'mm': case 'm':
            return formatChar(minutes, char==="mm");

        case 'ss': case 's':
            return formatChar(seconds, char==="ss");

        case 'aa':
            return hours < 12 ? "am" : "pm";

        case 'a':
            return hours < 12 ? "a" : "p";

        default:
            return char;
    }

}

export const format = (input, pattern = "HH:mm:ss") => {

    const timeData = safeParse(input);

    return timeData
        ? pattern
            .split(/(HH|H|hh|h|mm|m|ss|s|aa|a)/)
            .map(charToTime(timeData))
            .join("")
        : null;
}

export default format;
