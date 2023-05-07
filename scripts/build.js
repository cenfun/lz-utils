const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const EC = require('eight-colors');

const buildItem = async (item, libDir, distDir, tempDir) => {

    EC.log(`build ${item.entry} ...`);

    const outfile = path.resolve(distDir, item.entry);
    const entry = path.resolve(libDir, item.entry);

    // https://esbuild.github.io/api/
    const result = await esbuild.build({
        entryPoints: [entry],
        outfile,
        minify: true,
        metafile: true,
        bundle: true,
        format: 'cjs',
        legalComments: 'none',
        target: ['es2020'],
        platform: 'node'
    });

    // save meta file
    const metafile = result.metafile;
    const metaPath = path.resolve(tempDir, `${item.entry}.json`);
    fs.writeFileSync(metaPath, JSON.stringify(metafile, null, 4));

    EC.logGreen(`built ${outfile}`);

    return outfile;
};

const build = async () => {

    const distDir = path.resolve(__dirname, '../dist');
    if (fs.existsSync(distDir)) {
        fs.rmSync(distDir, {
            recursive: true,
            force: true
        });
    }
    fs.mkdirSync(distDir);

    const libDir = path.resolve(__dirname, '../lib');

    const tempDir = path.resolve(__dirname, '../.temp');
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
    }

    const buildList = [{
        entry: 'compress.js'
    }, {
        entry: 'decompress.js'
    }, {
        entry: 'deflate.js'
    }, {
        entry: 'inflate.js'
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