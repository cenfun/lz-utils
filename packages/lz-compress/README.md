## lz-compress

```js
const compress = require('lz-compress');
const decompress = require('lz-decompress');

var s = 'this is my string english'
const cs = compress(s);
console.log(cs);
const ds = decompress(cs);
if (ds !== s) {
    throw new Error('compress/decompress error');
}
```