const root = self || window;
root['lz-utils'] = {
    compress: require('./compress.js'),
    decompress: require('./decompress.js'),
    inflate: require('./inflate.js'),
    inflateSync: require('./inflate-sync.js')
};
