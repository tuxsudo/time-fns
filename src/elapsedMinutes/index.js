import parse from "../parse";

export const elapsedMinutes = input => {
  const time = parse(input);
  return time && time.hours * 60 + time.minutes + time.seconds / 60;
};

export default elapsedMinutes;
