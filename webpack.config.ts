import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';
import WebpackDevServer from 'webpack-dev-server';

const isProduction = process.env.NODE_ENV == 'production';
const ASSET_PATH = process.env.ASSET_PATH || path.resolve(__dirname, 'docs');

const stylesHandler = isProduction ?
  MiniCssExtractPlugin.loader :
  'style-loader';

interface Configuration extends webpack.Configuration {
  devServer?: WebpackDevServer.Configuration;
}

const config: Configuration = {
  entry: path.resolve(__dirname, 'src/ts/app.ts'),
  output: {
    path: ASSET_PATH,
  },
  devServer: {
    open: true,
    contentBase: ASSET_PATH,
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, 'src/favicon.ico'),
      meta: {
        'keywords': 'Fahmi, Portfolio',
        'author': 'Muhamad Fahmi Al Kautsar',
        'viewport': 'width=device-width, initial-scale=1',
        'og:title': {property: 'og:title', content: 'Fahmi Al'},
        'og:url': {
          property: 'og:url',
          content: 'https://mfahmialkautsar.github.io',
        },
        'og:description': {
          property: 'og:description',
          content: 'Fahmi Al\'s Portfolio',
        },
        'og:image': {
          property: 'og:image',
          content:
            'https://raw.githubusercontent.com/mfahmialkautsar/mfahmialkautsar.github.io/master/docs/images/project/linebot_rememberme.jpg',
        },
        'og:site_name': {
          property: 'og:site_name',
          content: 'Fahmi Al\'s Portfolio',
        },
        'og:type': {property: 'og:type', content: 'website'},
      },
      minify: 'auto',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};

export default () => {
  if (isProduction) {
    config.mode = 'production';
    if (!config.plugins) return;

    config.plugins.push(new MiniCssExtractPlugin());

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = 'development';
  }
  return config;
};
