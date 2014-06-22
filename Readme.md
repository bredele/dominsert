
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

## TODO

  - clean api

## License

  MIT
