# Time of day functions

Utility functions for dealing with the time of day.

Tree-shake-able & pluck-able / `modules.root`-able?


# install

```
npm i -S @tuxsudo/time
```

# usage

```
import {parse, format} from '@tuxsudo/time';

parse('1p'); // {hours: 13, minutes: 0, seconds: 0}
format('5p', 'h:mm:ss a'); // 5:00:00 pm
```


## pluck-able format

```
import parse from '@tuxsudo/time/parse';
parse('1111p')
```

## commonjs format

```
var time = require('@tuxsudo/time');
time.parse("130a");
time.format("23:03:01", 'hh aa');
```


## api


### `parse`

A flexible time-parser intended to extract the time of day from user input.

```
import {parse} from '@tuxsudo/time';

parse('130'); // {hours: 1, minutes: 30, seconds: 0};
parse('130p'); // {hours: 13, minutes: 30, seconds: 0};
parse('22:00:00'); // {hours: 22, minutes: 0, seconds: 0};

parse('n'); // null (error)
```

### `format`

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


## with `modules.root`

```
import parse from '@tuxsudo/time/parse';
```
