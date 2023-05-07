const inflate = require('tiny-inflate');

const base64ToUint8 = (str) => Uint8Array.from(window.atob(str), (c) => c.charCodeAt(0));
const uint8ArrToString = (uint8arr) => new TextDecoder().decode(uint8arr);

module.exports = (compressedB64) => {
    const [b64Str, sizeStr] = compressedB64.split('.');
    const compressedBuffer = base64ToUint8(b64Str);
    const outputBuffer = new Uint8Array(parseInt(sizeStr));
    inflate(compressedBuffer, outputBuffer);
    return uint8ArrToString(outputBuffer);
};
