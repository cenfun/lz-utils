const zlib = require('zlib');
module.exports = (str) => {
    const buf = Buffer.from(str);
    const length = buf.length;
    // console.log('buffer length', length, 'string length', str.length);
    const compressed = zlib.deflateRawSync(buf);
    const b64 = Buffer.from(compressed).toString('base64');
    return `${length},${b64}`;
};
