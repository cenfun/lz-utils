const dataStr = require('../.temp/inflate-worker-data.js');
module.exports = (compressedB64) => {
    return new Promise((resolve) => {
        const worker = new Worker(`data:application/javascript;base64,${dataStr}`);
        worker.onmessage = (e) => {
            if (e.data === 'workerReady') {
                worker.postMessage(compressedB64);
                return;
            }
            resolve(e.data);
            worker.terminate();
        };
        worker.onerror = (err) => {
            resolve({
                error: err
            });
            worker.terminate();
        };
    });
};
