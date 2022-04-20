const StatsReportPlugin = require('webpack-stats-report').StatsReportPlugin;

module.exports = {
    mode: 'production',
    //mode: 'development',
    entry: {
        'lz-compress': './lib/compress.js',
        'lz-decompress': './lib/decompress.js',
        'lz-utils': './lib/index.js'
    },
    target: ['web', 'es5'],
    output: {
        umdNamedDefine: true,
        library: '[name]',
        libraryTarget: 'umd'
    },
    plugins: [new StatsReportPlugin({
        title: 'Stats Report - lz-decompress',
        output: '.temp/stats-report.html',
        outputStatsJson: true,
        generateMinifiedAndGzipSize: true
    })],
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    babelrc: false
                }
            }
        }]
    }
};