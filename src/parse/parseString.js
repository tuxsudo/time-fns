export const parseString = (input = "") => {
  const [
    ,
    hoursString,
    minutesString = "0",
    secondsString = "0",
    meridiemString
  ] =
    input
      .toString()
      .match(/^(\d{1,2})\s*[:]?\s*(\d{2})?\s*[:]?\s*(\d{2})?\s*([ap]m?)?$/i) ||
    [];

  if (hoursString && minutesString) {
    const parsedHours = parseInt(hoursString);
    const isPM = meridiemString && /^pm?$/i.test(meridiemString);
    const diff = isPM && parsedHours !== 12 ? 12 : 0;
    const seconds = parseInt(secondsString) % 60;
    const minutes = parseInt(minutesString) % 60;
    const hours = parsedHours + diff;

    return { hours, minutes, seconds };
  }

  return null;
};

export default parseString;
