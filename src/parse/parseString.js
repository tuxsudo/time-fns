export const parseString = (input="") => {

    const [
        ,
        hoursString,
        minutesString="0",
        secondsString="0",
        meridiemString="am"
    ] = (input)
        .toString()
        .match(/^(\d{1,2})\s*[:]?\s*(\d{2})?\s*[:]?\s*(\d{2})?\s*([ap]m?)?$/i)
        || []
    ;

    if(hoursString && minutesString) {
        const parsedHours = parseInt(hoursString);
        const isPM = /^pm?$/i.test(meridiemString);
        const diff = isPM ? 12 : 0;
        const seconds = parseInt(secondsString) % 60;
        const minutes = parseInt(minutesString) % 60;
        const hours = isPM && parsedHours === 12 // if they said 12pm
            ? 12 // leave it at 12
            : !isPM && parsedHours === 12 || parsedHours === 0 // they explicity said 12am or 0
                ? 0 // make it 0
                // otherwise...
                : parsedHours + diff; // add 12 if PM, 0 if not

        return { hours, minutes, seconds }

    }

    return null;
}

export default parseString;
