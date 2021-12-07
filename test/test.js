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

let format = 'base64';
for (const s of list) {
    const cs = compress(s, format);
    console.log(cs);
    const ds = decompress(cs, format);
    if (ds !== s) {
        throw new Error('compress/decompress error');
    }
}

format = 'utf16';
for (const s of list) {
    const cs = compress(s, format);
    console.log(cs);
    const ds = decompress(cs, format);
    if (ds !== s) {
        throw new Error('compress/decompress error');
    }
}