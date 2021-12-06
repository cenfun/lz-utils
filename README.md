# lz-utils

utils of [lz-string](https://github.com/pieroxy/lz-string)
## Install
```sh
npm install lz-compress
npm install lz-decompress
```

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