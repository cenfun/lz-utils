module.exports = {
    compress: require('./compress.js'),
    decompress: require('./decompress.js'),
    deflate: require('./deflate.js'),
    inflate: require('./inflate.js'),
    deflateSync: require('./deflate-sync.js'),
    inflateSync: require('./inflate-sync.js'),
    createScriptLoader: require('./create-script-loader.js')
};
