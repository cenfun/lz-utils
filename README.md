# lz-utils - Utils for string compression

* `compress` / `decompress` 
    - Using [lz-string](https://github.com/pieroxy/lz-string) compress/decompress in base64 only
    - Both browser and Node.js
    - Normal performance
    - Synchronous only
    - The smallest size (minified) `1.75KB` / `1.67KB`
* `deflateSync` and `deflate` 
    - Compress raw string and encode in base64
    - Node.js only
    - The highest performance (Using native `zlib`)
    - Synchronous and Asynchronous
    - The smallest size (minified) `0.13KB` / `0.17KB`
* `inflateSync` and `inflate` 
    - Decompress base64 string to raw string
    - Browser only (Using `Uint8Array` and `TextDecoder`)
    - Higher performance (Using [tiny-inflate](https://github.com/foliojs/tiny-inflate))
    - Synchronous and Asynchronous/Multi-thread (Using Worker)
    - Smaller size (minified) `3.16KB` / `3.62KB`

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

## Examples
- [test.js](/scripts/test.js)
- [test.html](/test/test.html)

## Why inflate browser only?
- The business here is to generate a lot of html reports to users or customers, so the report needs to be generated as fast as possible and the file size should be as small as possible. 
- The possible process is to compress the data on the server side and generate the html file, then the user opens the html file in the browser, and finally decompresses the data and renders the report.


## String Compression Benchmark
- [string-compression](https://github.com/cenfun/string-compression)


## Link
* [https://github.com/pieroxy/lz-string](https://github.com/pieroxy/lz-string)
* [https://github.com/foliojs/tiny-inflate](https://github.com/foliojs/tiny-inflate)

## Changelog

* 2.0.0
    - added tiny-inflate

* 1.0.7 
    - added ESM supported

* 1.0.5
    - added browser version