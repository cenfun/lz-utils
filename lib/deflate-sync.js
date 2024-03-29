const zlib = require('zlib');
module.exports = (str) => {
    const buf = Buffer.from(str);
    const length = buf.length;
    const buffer = zlib.deflateRawSync(buf);
    const b64 = buffer.toString('base64');
    const result = `${b64}.${length}`;
    return result;
};
