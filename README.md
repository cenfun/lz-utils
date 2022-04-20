# lz-utils

utils of [lz-string](https://github.com/pieroxy/lz-string) but only base64 format and compress/decompress separated for bundle self decompressed on runtime.
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
const cs = compress(s);
console.log(cs);
const ds = decompress(cs);
if (ds !== s) {
    throw new Error('compress/decompress error');
}
```
see [test.js](test/test.js)

## Browser Usage
```html
<script src="../dist/lz-compress.js"></script>
<script src="../dist/lz-decompress.js"></script>
<script src="../dist/lz-utils.js"></script>
<script>

const compress = window["lz-compress"];
const decompress = window["lz-decompress"];

const lz = window["lz-utils"];
console.log(lz)

</script>
```
see [test.html](test/test.html)
## Link
* [https://github.com/pieroxy/lz-string](https://github.com/pieroxy/lz-string)
* [https://pieroxy.net/blog/pages/lz-string/index.html](https://pieroxy.net/blog/pages/lz-string/index.html)

## Changelog

* 1.0.5
    * added browser version