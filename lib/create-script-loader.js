const loader = require('../dist/script-loader-data.js');
const deflateSync = require('./deflate-sync.js');
module.exports = (str) => {
    return loader.replace('{placeholder}', deflateSync(str));
};
