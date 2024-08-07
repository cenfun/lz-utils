const workerData = require('../dist/inflate-worker-data.js');
module.exports = (compressedB64) => {
    return new Promise((resolve) => {
        const worker = new Worker(URL.createObjectURL(new Blob([workerData], {
            type: 'application/javascript'
        })));
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
