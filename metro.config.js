const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const {sourceExts} = defaultConfig.resolver;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('./rn-transformer.js'),
  },
  resolver: {
    sourceExts: [...sourceExts, 'scss', 'css'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
