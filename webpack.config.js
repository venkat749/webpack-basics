var path = require('path')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    "entry" : "./src/js/app.js",
    "output" : {
        "path" : path.resolve(__filename,'dist'),
        "filename" : 'bundle.js',
        "publicPath" : "/dist"
    },
    "module" : {
        "rules" : [
            {
                "test" : /\.css$/,
                "use" : [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    "plugins" : [
        new UglifyJsPlugin()    //this is not working as expected
    ]
}