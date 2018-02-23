import parse from "../parse";

export const elapsedHours = input => {
  const time = parse(input);
  return time && time.hours + time.minutes / 60 + time.seconds / 3600;
};

export default elapsedHours;
