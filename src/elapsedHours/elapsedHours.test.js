import test from "tape";
import { elapsedHours } from ".";

test("elapsedHours", t => {
  t.equal(
    elapsedHours("6:45:10p"),
    18 + 45 / 60 + 10 / 3600,
    "it calculates the number of hours since 00:00:00"
  );

  t.equal(
    elapsedHours("48:59:10"),
    48 + 59 / 60 + 10 / 3600,
    "it works when spanning days"
  );

  t.equal(elapsedHours("nan"), null, "returns null when cant parse");

  t.end();
});
