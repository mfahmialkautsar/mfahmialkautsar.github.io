import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';
import WebpackDevServer from 'webpack-dev-server';
import CopyPlugin from 'copy-webpack-plugin';
import dotenv from 'dotenv';

const dotenvConfig = dotenv.config();
import {OPEN_SOURCE_PROJECT_IMAGE_URL} from './src/lib/constants/api';

const isProduction = process.env.NODE_ENV == 'production';
const ASSET_PATH = process.env.ASSET_PATH || path.resolve(__dirname, 'docs');

const metas: {[key: string]: string} = {
  keywords: 'Fahmi, Portfolio',
  author: 'Muhamad Fahmi Al Kautsar',
  viewport: 'width=device-width, initial-scale=1',
  title: 'Fahmi Al',
  url: 'https://mfahmialkautsar.github.io',
  description: 'Fahmi Al\'s Portfolio',
  image: `${OPEN_SOURCE_PROJECT_IMAGE_URL}/linebot_rememberme.jpg`,
  site_name: 'Fahmi Al\'s Portfolio',
  type: 'website',
};

const metaKeys: {[key: string]: {[key: string]: string}} = {
  title: {
    default: 'name',
  },
};

const platforms: {[key: string]: {property: string, content: string, prefix: string}} = {
  default: {
    property: 'name',
    content: 'content',
    prefix: '',
  },
  facebook: {
    property: 'property',
    content: 'content',
    prefix: 'og:',
  },
  twitter: {
    property: 'name',
    content: 'content',
    prefix: 'twitter:',
  },
};

function generateMetaKey() {
  for (const meta in metas) {
    if (metas.hasOwnProperty(meta)) {
      if (!metaKeys.hasOwnProperty(meta)) {
        metaKeys[meta] = {};
      }
      for (const platform in platforms) {
        if (!metaKeys[meta].hasOwnProperty(platform)) {
          metaKeys[meta][platform] = meta;
        }
      }
    }
  }
}

generateMetaKey();

const getMeta = (platform: string) => {
  const {property, content, prefix} = platforms[platform];
  const platformMetas = Object.entries(metas).map(([key, value]) => ({
    [`${platform}:${key}`]: {
      [property]: prefix + metaKeys[key][platform],
      [content]: value,
    },
  }));
  return Object.assign({}, ...platformMetas);
};

const getMetaObject = () => {
  const metaTags = Object.keys(platforms).map(getMeta);
  return Object.assign({}, ...metaTags);
};

const stylesHandler = isProduction ?
  MiniCssExtractPlugin.loader :
  'style-loader';

interface Configuration extends webpack.Configuration {
  devServer?: WebpackDevServer.Configuration;
}

const config: Configuration = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    filename: '[id].[hash].js',
    path: ASSET_PATH,
    clean: true,
  },
  devServer: {
    open: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenvConfig.parsed) || JSON.stringify(process.env),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html', '**/favicon.ico', '**/main.js'],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
      meta: {
        ...getMetaObject(),
      },
      minify: 'auto',
      template: path.resolve(__dirname, 'public/index.html'),
      inject: 'body',
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

    config.plugins.push(new MiniCssExtractPlugin({
      filename: '[id].[hash].css',
    }));

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = 'development';
  }
  return config;
};
