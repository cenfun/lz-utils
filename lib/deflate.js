const zlib = require('zlib');
module.exports = (str) => {
    const buf = Buffer.from(str);
    const length = buf.length;
    const compressed = zlib.deflateRawSync(buf);
    const b64 = Buffer.from(compressed).toString('base64');
    return `${b64}.${length}`;
};
