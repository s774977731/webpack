var path = require('path');
module.exports = {
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
    loaders: [
      {test: /\.js?$/, loader: 'babel',query: {presets: ['es2015']}},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/, loader: 'style!css!less'},
    ]
    },
    resolve: {// 现在你require文件的时候可以直接使用require('file')，不用使用require('file.coffee')
      extensions: ['', '.js', '.json', '.coffee']
    }
};
