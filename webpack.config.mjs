import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: "main.js",
    path: path.resolve('./dist/')
  },
  module: {
    rules: [
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /.*\/src\/.*\.svg$/,
        issuer: /\.[jt]sx?$/,
        options: {
          replaceAttrValues: {
            black: 'currentColor',
            "#000": 'currentColor',
            "#202020": 'currentColor'
          }
        },
        loader: '@svgr/webpack',
      },
    ],

  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [new HtmlWebpackPlugin({
    title: "Custom title",
    template: './public/index.html'
  })],
}
