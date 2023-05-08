const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const EC = require('eight-colors');

const buildItem = async (item, libDir, distDir, tempDir) => {

    const entry = item.entry;
    delete item.entry;

    EC.log(`build ${entry} ...`);

    const outfile = path.resolve(distDir, entry);
    const entryPath = path.resolve(libDir, entry);


    // https://esbuild.github.io/api/
    const result = await esbuild.build({
        entryPoints: [entryPath],
        outfile,
        minify: true,
        metafile: true,
        bundle: true,
        format: 'cjs',
        legalComments: 'none',
        target: ['es2020'],
        platform: 'node',
        ... item
    });

    // save meta file
    const metafile = result.metafile;
    const metaPath = path.resolve(tempDir, `${entry}.json`);
    fs.writeFileSync(metaPath, JSON.stringify(metafile, null, 4));

    EC.logGreen(`built ${outfile}`);

    return outfile;
};

const build = async () => {

    const libDir = path.resolve(__dirname, '../lib');

    const distDir = path.resolve(__dirname, '../dist');
    if (fs.existsSync(distDir)) {
        fs.rmSync(distDir, {
            recursive: true,
            force: true
        });
    }
    fs.mkdirSync(distDir);

    const tempDir = path.resolve(__dirname, '../.temp');
    if (fs.existsSync(tempDir)) {
        fs.rmSync(tempDir, {
            recursive: true,
            force: true
        });
    }
    fs.mkdirSync(tempDir);

    const workerItem = {
        entry: 'inflate-worker.js',
        platform: 'browser',
        format: 'iife',
        minify: true
    };
    const workerFIle = await buildItem(workerItem, libDir, distDir, tempDir);
    const workerJs = fs.readFileSync(workerFIle);
    const workerData = {
        data: workerJs.toString('utf-8')
    };
    const workerStr = JSON.stringify(workerData);
    fs.writeFileSync(path.resolve(tempDir, 'inflate-worker-data.json'), workerStr);

    const buildList = [{
        entry: 'compress.js'
    }, {
        entry: 'decompress.js'
    }, {
        entry: 'deflate.js'
    }, {
        entry: 'deflate-sync.js'
    }, {
        entry: 'inflate.js'
    }, {
        entry: 'inflate-sync.js'
    }, {
        entry: 'browser.js',
        platform: 'browser',
        format: 'iife'
    }];

    for (const item of buildList) {
        await buildItem(item, libDir, distDir, tempDir);
    }

    const copyList = ['index.js', 'index.mjs'];
    for (const item of copyList) {
        fs.copyFileSync(
            path.resolve(libDir, item),
            path.resolve(distDir, item)
        );

        EC.logGreen(`copied ${item}`);
    }
};

build();
