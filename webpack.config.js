import wpWebpackConfig from '@wordpress/scripts/config/webpack.config.js'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import {resolve} from "path";

export default {
    ...wpWebpackConfig,
    entry: './dir/file.js',
    output: {
        filename: 'file.js',
        path: resolve( process.cwd(), 'assets/js' ),
    },
    plugins: [
        ...(( wpWebpackConfig?.plugins || [] ).filter(plugin => ! (plugin instanceof CopyWebpackPlugin))),

    ]
}
