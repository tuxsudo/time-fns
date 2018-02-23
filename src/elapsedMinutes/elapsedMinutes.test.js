import test from "tape";
import { elapsedMinutes } from ".";

test("elapsedMinutes", t => {
  t.equal(
    elapsedMinutes("6:45:10p"),
    18 * 60 + 45 + 10 / 60,
    "it calculates the number of minutes since 00:00:00"
  );

  t.equal(
    elapsedMinutes("48:59:10"),
    48 * 60 + 59 + 10 / 60,
    "it works when spanning days"
  );

  t.equal(elapsedMinutes("nan"), null, "returns null when cant parse");

  t.end();
});
