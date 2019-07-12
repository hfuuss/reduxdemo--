module.exports = {
    mode: "development",
    entry: "./app/main.js",
    output: {
        filename: "bundle.js",
        publicPath: "xuni"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react'],
                        plugins : [
                            "transform-runtime",
                            "transform-object-rest-spread"
                        ]
                    }
                }
            }
        ]
    }
}