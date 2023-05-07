const inflate = require('tiny-inflate');

const base64ToUint8 = (str) => Uint8Array.from(window.atob(str), (c) => c.charCodeAt(0));

const uint8ArrToString = (uint8arr) => new TextDecoder().decode(uint8arr);

module.exports = (compressedB64) => {

    const list = compressedB64.split(',');

    const decompressedSize = parseInt(list[0]);

    // console.log("list length", list.length, "decompressedSize", decompressedSize);

    const b64 = list[1];

    const compressedBuffer = base64ToUint8(b64);
    const outputBuffer = new Uint8Array(decompressedSize);
    inflate(compressedBuffer, outputBuffer);

    return uint8ArrToString(outputBuffer);
};
