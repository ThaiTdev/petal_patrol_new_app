// metro.config.js
const { getDefaultConfig } = require('@expo/metro-config');

module.exports = async (defaultConfig) => {
  const config = await getDefaultConfig(__dirname);

  return {
    ...config,
    transformer: {
      ...config.transformer,
      babelTransformerPath: require.resolve('react-native-sass-transformer'),
    },
    resolver: {
      ...config.resolver,
      sourceExts: [...config.resolver.sourceExts, 'scss', 'sass'],
    },
  };
};