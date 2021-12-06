const compress = require('../packages/lz-compress');
const decompress = require('../packages/lz-decompress');

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

for (const s of list) {
    const cs = compress(s);
    console.log(cs);
    const ds = decompress(cs);
    if (ds !== s) {
        throw new Error('compress/decompress error');
    }
}