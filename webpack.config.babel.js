import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from'html-webpack-plugin'
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({ 
    template: './index.html',
    filename: 'index.html',
    inject: 'body',
})

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist'),
}

const LAUNCH_COMMAND = process.env.npm_lifecycle_event

const isProduction = LAUNCH_COMMAND === 'production'
process.env.BABEL_ENV = LAUNCH_COMMAND

const productionPlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production')
    }
})

const base = {
    entry: [
        PATHS.src,
    ],
    output: {
        path: PATHS.build,
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
             }
            //{ test: /\.css$/, loader: 'style-loader!css-loader?sourceMap&modules&localIdentName=[name]__[local]__[hash:base64:5]'},
            //     //{ test: /\.scss$/, loader: 'style-loader!sass-loader?sourceMap&modules&localIdentName=[name]__[local]__[hash:base64:5]'},
            //     { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
            // ]
            // {
            //     test: /\.scss$/,
            //     use: [
            //         {
            //             loader: 'style-loader'
            //         },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         },
            //         {
            //             loader: 'sass-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         }
            //     ]
            // }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    }
}

const developmentConfig = {
     mode: 'development',
     devtool: 'cheap-module-inline-source-map',
     devServer: {
        contentBase: PATHS.build,
        hot: true, 
        inline: true,
        progress: true,
     },
     plugins: [HtmlWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()]
}

const productionConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    plugins: [HtmlWebpackPluginConfig, productionPlugin]
}

export default Object.assign({}, base, 
    isProduction === true ? productionConfig : developmentConfig
)