const path = require('path')

const main = {
    entry: "./src/index.ts",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "dist/"
    },
    context: __dirname,
    devtool: "source-map",
    mode: "development",
    resolve: {
        modules: [
            'src',
            'node_modules'
        ],
        extensions: [
            '.js',
            '.ts',
            '.tsx'
        ],
        plugins: [],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
    },
}

const worker = {
    entry: "./src/ably.worker.ts",
    output: {
        filename: 'ably.worker.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "dist/"
    },
    target: "webworker",
    devtool: "source-map",
    mode: "development",
    resolve: {
        modules: [
            'src',
            'node_modules'
        ],
        extensions: [
            '.js',
            '.ts',
            '.tsx'
        ],
        plugins: [],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
    },
}


module.exports = [main, worker]