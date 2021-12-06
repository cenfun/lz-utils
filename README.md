# lz-utils

utils of [lz-string](https://github.com/pieroxy/lz-string)
## Install
```sh
npm install lz-utils
```

## Usage
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

## Only import compress or decompress
```js
const compress = require('lz-utils/lib/compress.js');
const decompress = require('lz-utils/lib/decompress.js');
```

## Link
* [https://github.com/pieroxy/lz-string](https://github.com/pieroxy/lz-string)
* [https://pieroxy.net/blog/pages/lz-string/index.html](https://pieroxy.net/blog/pages/lz-string/index.html)