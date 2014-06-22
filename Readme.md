
# insert

  cross-browser insert adjacent html/element

## Installation

  Install with [component(1)](http://component.io):

    $ component install bredele/insert

## API

### insert(child, parent[, position])

  Insert a node into the DOM tree at a specified position:
  - beforeend (default)
  - afterend
  - beforebegin
  - afterbegin


```js
var insert = require('insert');
insert('<button>btn</button>', document.body);
```

### insert.html(child, parent[, position])

  Insert child string

```js
insert('<button>btn</button>', document.body, 'beforebegin');
```

  `insert` avoids the extra step of serialization which make it much faster than direct innerHTML manipulation.

### insert.element(child, parent[, position])

  insert child HTML element.

```js
insert(btn, document.body);
```

## License

The MIT License (MIT)

Copyright (c) 2014 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


