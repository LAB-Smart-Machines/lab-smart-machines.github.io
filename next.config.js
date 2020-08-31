// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
// https://github.com/cyrilwanner/next-compose-plugins
require('dotenv').config();
const path = require('path');
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const debug = process.env.NODE_ENV !== 'production';

const { LSM_GITHUB_TOKEN } = process.env;

const env = {
  LSM_GITHUB_TOKEN,
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
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      net: 'empty',
      fs: 'empty',
      tls: 'empty',
    };

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };

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
  nextConfiguration
);
