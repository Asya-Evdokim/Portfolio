const path = require("path");


module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/css/fonts.scss'),
        path.resolve(__dirname, './src/assets/css/variable.scss'),
        path.resolve(__dirname, './src/assets/css/reset.scss'),
        path.resolve(__dirname, './src/assets/css/mixins.scss'),
        path.resolve(__dirname, './src/assets/css/global.scss'),

      ]
    }
  },
};
