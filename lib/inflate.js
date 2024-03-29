const workerJson = require('../.temp/inflate-worker-data.json');
module.exports = (compressedB64) => {
    return new Promise((resolve) => {
        const worker = new Worker(URL.createObjectURL(new Blob([workerJson.data], {
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
