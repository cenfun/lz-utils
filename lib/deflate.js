const zlib = require('zlib');
module.exports = (str) => {
    return new Promise((resolve) => {
        const buf = Buffer.from(str);
        const length = buf.length;
        zlib.deflateRaw(buf, (err, buffer) => {
            if (err) {
                resolve();
                return;
            }
            const b64 = buffer.toString('base64');
            const result = `${b64}.${length}`;
            resolve(result);
        });
    });
};
