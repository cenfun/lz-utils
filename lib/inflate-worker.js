const inflateSync = require('./inflate-sync.js');
onmessage = function(e) {
    postMessage(inflateSync(e.data));
};
postMessage('workerReady');
