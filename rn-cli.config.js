const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("./rn-transformer.js")
    },
    resolver: {
      sourceExts: [...sourceExts, "scss", "css"]
    }
  };
})();
