const  path = require('path');

module.exports = {
  entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    module:{
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        }]
    },
    mode: "development",
    devServer: {
      contentBase: path.join(__dirname, 'public')
    }
};