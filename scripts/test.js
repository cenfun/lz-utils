const fs = require('fs');
const path = require('path');
// const zlib = require('zlib');

const {
    compress, decompress, deflate
} = require('../');

const json = require('../test/test.json');

for (const s of json.list) {
    const cs = compress(s);
    console.log(cs);
    const ds = decompress(cs);
    if (ds !== s) {
        throw new Error('compress/decompress error');
    }
}

// for browser
const jsonStr = JSON.stringify(json);

const dStr = compress(jsonStr);
const iStr = deflate(jsonStr);

const testData = `window.testData = {
    raw: ${jsonStr},
    decompressStr: "${dStr}",
    inflateStr: "${iStr}"
};`;
fs.writeFileSync(path.resolve(__dirname, '../test/test.data.js'), testData);


// const tempStr = '1234567890';
// const buf = Buffer.from(tempStr);

// const dRaw = zlib.deflateRawSync(buf);
// console.log(dRaw);

// const d = zlib.deflateSync(buf);
// console.log(d);

// const dr = new Uint8Array(d.buffer, d.byteOffset + 2, d.length - 6);
// console.log(Buffer.from(dr));

// const gz = zlib.gzipSync(buf);
// console.log(Buffer.from(gz));
