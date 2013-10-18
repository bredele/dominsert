
# insert

  cross-browser insert adjacent html/element

## Installation

  Install with [component(1)](http://component.io):

    $ component install bredele/insert

## API

### insert(child, parent[, position])

	Insert adjacent child element or string into parent element.
	`position` can be :
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


### insert.element(child, parent[, position])

  insert child HTML element.

## TODO

  - clean api

## License

  MIT
