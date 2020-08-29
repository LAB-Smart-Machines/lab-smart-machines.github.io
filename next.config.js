// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
// https://github.com/cyrilwanner/next-compose-plugins
require('dotenv').config();
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const CompressionPlugin = require('compression-webpack-plugin');
const debug = process.env.NODE_ENV !== 'production';

const {
  NEXT_PUBLIC_GREETING,
  LSM_GITHUB_TOKEN,
  NEXT_PUBLIC_GITHUB_TOKEN,
} = process.env;

const env = {
  NEXT_PUBLIC_GREETING,
  LSM_GITHUB_TOKEN,
  NEXT_PUBLIC_GITHUB_TOKEN,
};

const optimizedImagesConfig = {
  mozjpeg: {
    quality: 80,
  },
  pngquant: {
    speed: 3,
    strip: true,
    verbose: true,
  },
  inlineImageLimit: 8192,
  imagesFolder: 'images',
  imagesName: '[name]-[hash].[ext]',
  handleImages: ['jpeg', 'jpg', 'svg', 'png'],
  optimizeImages: true,
  optimizeImagesInDev: false,
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3,
  },
  webp: {
    preset: 'default',
    quality: 75,
  },
};

const nextConfiguration = {
  env,
  test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
  compression: true,
  loader: 'url-loader?limit=100000',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    };
  },
  assetPrefix: !debug ? '/staging/' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    // Important: return the modified config
    return config;
  },
};

module.exports = withPlugins(
  [withOptimizedImages, optimizedImagesConfig],
  new CompressionPlugin({
    //gzip plugin
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8,
    cache: true,
  }),
  nextConfiguration
);
