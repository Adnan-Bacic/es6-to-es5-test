const path = require('path');

module.exports = {
    entry: {
        app: './src/app.js' //which file is gonna be the src file with es6
    },
    output: {
        path: path.resolve(__dirname, 'build'), //compiled to es5
        filename: 'app.bundle.js' //compiles code to here, include this in html
    },
    module:{
        rules: [{
            test: /\.js?$/,
            exclude: /node-modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env', 'stage-0']
            }
        }]
    }
}