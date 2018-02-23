import test from "tape";
import { diff } from "./index.js";

test("diff", t => {
  {
    t.deepEquals(
      diff("7a", "730p"),
      { hours: 12, minutes: 30, seconds: 0 },
      "it handles intra-day ranges"
    );
  }

  {
    t.deepEquals(
      diff("10p", "12p"),
      { hours: 14, minutes: 0, seconds: 0 },
      "it handles inter-day ranges"
    );
  }

  {
    t.deepEquals(
      diff("12p", "11:59:59a"),
      { hours: 23, minutes: 59, seconds: 59 },
      "it handles any two times within 24 hours of each other"
    );
  }

  {
    t.deepEquals(
      diff("350p", "545p"),
      { hours: 1, minutes: 55, seconds: 0 },
      "it does math correctly"
    );
  }

  {
    t.deepEquals(
      diff("07:00", "12:00"),
      { hours: 5, minutes: 0, seconds: 0 },
      "it handles 24 hour time in same day"
    );
  }

  {
    t.deepEquals(
      diff("12:00", "01:50"),
      { hours: 13, minutes: 50, seconds: 0 },
      "it handles 24 hour time on different days"
    );
  }

  t.end();
});
