# Time of day functions

Utility functions for dealing with the time of day.

Tree-shake-able & pluck-able / `modules.root`-able?


## Install

```
npm i -S @tuxsudo/time
```

## Usage


### ES6 module import

Use this format if your build process includes tree-shaking.

```
import {parse, format} from '@tuxsudo/time';

parse('1p'); // {hours: 13, minutes: 0, seconds: 0}
format('5p', 'h:mm:ss a'); // 5:00:00 pm
```


### Pluck-able format

Use this format if your uses ES6 modules but no tree-shaking.

```
import parse from '@tuxsudo/time/parse';
parse('1111p')
```

### CommonJS format

```
var time = require('@tuxsudo/time');
time.parse("130a");
time.format("23:03:01", 'hh aa');
```


## API


### `parse(time)`

A flexible time-parser intended to extract the time of day from user input.

```
import {parse} from '@tuxsudo/time';

parse('130'); // {hours: 1, minutes: 30, seconds: 0};
parse('130p'); // {hours: 13, minutes: 30, seconds: 0};
parse('22:00:00'); // {hours: 22, minutes: 0, seconds: 0};

parse('n'); // null (error)
```



### `format(time, pattern)`

Format a time string

```
import {format} from '@tuxsudo/format';

format('130', 'hh:mm:ss aa'); // "01:30:00 am"
format('130p', 'HH:MM:SS'); // "13:30:00"

format('n', 'HH'); // null (error)
```

options:

*   `HH`: hour - 2 digit, 24hr format (00, 01, 02, ..., 13, 14, ...)
*   `H`: hour - 1 digit, 24hr hour format (0, 1, 2, ..., 10, ..., 13, 14, ...)
*   `hh`: hour - 2 digit, 12hr format (12, 01, 02, ..., 10, 11, 12, 01)
*   `h`: hour - 1 digit, 12hr format (12, 1, 2, ..., 10, 11, 12, 1)
*   `mm`: minute - 2 digit format (01, 02, ...10, 11, ...)
*   `m`: minute - 1 digit format (1, 2, ...10, 11, ...)
*   `ss`: second - 2 digit format (01, 02, ...10, 11, ...)
*   `s`: second - 1 digit format (1, 2, ...10, 11, ...)
*   `aa`: meridiem - 2 char format (am, pm)
*   `a`: meridiem - 1 char format (a, p)


### `diff(from, to)`

calculate the number of hours, minutes and seconds between two times. Order of arguments matter,
so `diff('10p', '12a')` will produce different results than `diff('12a', '10p')`

```
import {diff} from '@tuxsudo/time';

diff('7a', '730p'); // {hours: 12, minutes: 30, seconds: 0};
diff('10p', '12p'); // {hours: 14, minutes: 0, seconds: 0}; <- went overnight

```

### `isEQ(time1, time2)`

are `time2` and `time1` the same?

```
isEQ('8:01p', '20:01:00'); // true
```

### `isGT(time1, time2)`

is `time2` greater than `time1`?

```
isGT('8p', '9a'); // false
```

### `isLT(time1, time2)`

is `time2` less than `time1`?

```
isLT('8p', '9a'); // true
```


### `isTimeObject(timeObj)`

checks if `timeObj` is a valid, `parse`d object

```
itTimeObject({hours: 1, minutes: 1, seconds: 1}); // true
```


### `elapsedSeconds(time1)`

the number of elapsed seconds (since midnight)

```
elapsedSeconds('8:00:01p'); // 72001
```
