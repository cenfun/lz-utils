const compress = require('../lib/compress');
const decompress = require('../lib/decompress');

const list = [
    'this is my string english',
    '~!@#$%^&*()_+{}[]:;<>,.?/|\\',
    'Chinese,这是中文测试',
    '汉字繁體',
    '12【标，点。】',
    '☆√✔×✘❤♬',
    '①⑵⒊Ⅳ❺ʊəts',
    'あいアイサてつろ',
    '㈀ㅏ㉡ㅎㅉㅃㅈㅂ',
    'АБВДшщыф'
];

console.log('utf16 =================================================');
for (const s of list) {
    const cs = compress(s);
    console.log(cs);
    const ds = decompress(cs);
    if (ds !== s) {
        throw new Error('compress/decompress error');
    }
}

console.log('base64 ================================================');
const base64 = true;
for (const s of list) {
    const cs = compress(s, base64);
    console.log(cs);
    const ds = decompress(cs, base64);
    if (ds !== s) {
        throw new Error('compress/decompress error');
    }
}