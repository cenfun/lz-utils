# lz-utils

utils of [lz-string](https://github.com/pieroxy/lz-string) but compress/decompress separated for bundle self decompressed on runtime.
```js
const compress = require('lz-utils/lib/compress.js');
const decompress = require('lz-utils/lib/decompress.js');
```
## Install
```sh
npm install lz-utils
```
## Usage
```js
const {compress, decompress} = require('lz-utils');
const s = 'this is my string english'
//base64 or utf16 (default)
const base64 = true;
const cs = compress(s, base64);
console.log(cs);
const ds = decompress(cs, base64);
if (ds !== s) {
    throw new Error('compress/decompress error');
}
```

## Link
* [https://github.com/pieroxy/lz-string](https://github.com/pieroxy/lz-string)
* [https://pieroxy.net/blog/pages/lz-string/index.html](https://pieroxy.net/blog/pages/lz-string/index.html)