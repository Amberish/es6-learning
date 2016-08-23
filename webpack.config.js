module.exports = {
     entry: './src/index.js',
     output: {
         path: './bin',
         filename: 'app.js'
     },
     module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
        }]
    },
    resolve: {
      extensions: ['', '.js', '.es6']
    },
 };
