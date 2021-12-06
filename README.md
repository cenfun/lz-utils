# lz-utils

utils of [lz-string](https://github.com/pieroxy/lz-string)
## Install
```sh
npm install lz-utils
```

```js
const {compress, decompress} = require('lz-utils');
var s = 'this is my string english'
const cs = compress(s);
console.log(cs);
const ds = decompress(cs);
if (ds !== s) {
    throw new Error('compress/decompress error');
}
```