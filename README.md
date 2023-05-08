# lz-utils - Utils for string compression

* `compress` / `decompress` 
    - Using [lz-string](https://github.com/pieroxy/lz-string) compress/decompress in base64 only
    - Works in both the browser and Node.js
    - Normal performance
    - Synchronous only
    - The smallest size (minified) `1.75KB` / `1.67KB`
* `deflateSync` and `deflate` compress raw string and encode in base64
    - Node.js only
    - The highest performance (Using native `zlib`)
    - Synchronous and Asynchronous
    - The smallest size (minified) `0.13KB` / `0.17KB`
* `inflateSync` and `inflate` decompress base64 string to raw string
    - Browser only (Using `Uint8Array` and `TextDecoder`)
    - High performance (Using [tiny-inflate](https://github.com/foliojs/tiny-inflate))
    - Synchronous and Asynchronous/Multi-thread (Using Worker)
    - Small size (minified) `3.16KB` / `3.62KB`

## Install
```sh
npm install lz-utils
```
## Usage
```js
import { 
    compress, decompress,
    deflateSync, deflate,
    inflateSync, inflate
} from 'lz-utils';

const raw = "this is string";
const cs = compress(raw);
const ds = decompress(cs);

```
see [test.js](/scripts/test.js)
see [test.html](/test/test.html)


## String Compression Benchmark
- [string-compression](https://github.com/cenfun/string-compression)

## Link
* [https://github.com/pieroxy/lz-string](https://github.com/pieroxy/lz-string)
* [https://pieroxy.net/blog/pages/lz-string/index.html](https://pieroxy.net/blog/pages/lz-string/index.html)
* [https://github.com/foliojs/tiny-inflate](https://github.com/foliojs/tiny-inflate)

## Changelog

* 2.0.0
    - added tiny-inflate

* 1.0.7 
    - added ESM supported

* 1.0.5
    - added browser version