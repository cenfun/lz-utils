# lz-utils - Utils for string compression

[![](https://img.shields.io/npm/v/lz-utils)](https://www.npmjs.com/package/lz-utils)
![](https://img.shields.io/librariesio/github/cenfun/lz-utils)
![](https://img.shields.io/librariesio/dependents/npm/lz-utils)
[![](https://badgen.net/npm/dw/lz-utils)](https://www.npmjs.com/package/lz-utils)
![](https://img.shields.io/github/license/cenfun/lz-utils)

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
* `compress` / `decompress` 
    - Using [lz-string](https://github.com/pieroxy/lz-string) compress/decompress in base64 only
    - Both browser and Node.js
    - Normal performance
    - Synchronous only
    - The smallest size (minified) `1.75KB` / `1.67KB`
* `createScriptLoader`
    - create script loader


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

## Business Requirements and Why lz-utils?
- The business here is to generate a lot of `html reports` to users or customers, so the report needs to be generated as `fast` as possible and the file size should be as `small` as possible. 
- The possible process is to compress the report data and bundle it with the html file. When the user opens the html file in the browser, the report data will be `self-decompressed` and rendered in the browser. So that's why `inflate` browser only.
- Why `base64`? First of all, the data is stored in `JSON` format, which is easily serialized and compressed. At this time, we get `binary` data. Although its size is the smallest, it has many problems, such as `security issues` (CORS) because it is not JS type or object, so we need to convert binary data into JS string, and `base64` is a good choice.


## String Compression Benchmark
- [string-compression](https://github.com/cenfun/string-compression) lz-string, pako, uzip.js, fflate, tiny-inflate   


## Link
* [https://github.com/pieroxy/lz-string](https://github.com/pieroxy/lz-string)
* [https://github.com/foliojs/tiny-inflate](https://github.com/foliojs/tiny-inflate)

## Changelog

* 2.1.0
    - added `createScriptLoader`

* 2.0.2
    - added types

* 2.0.0
    - added tiny-inflate

* 1.0.7 
    - added ESM supported

* 1.0.5
    - added browser version