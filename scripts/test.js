const fs = require('fs');
const path = require('path');
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

