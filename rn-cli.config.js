const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('./node_modules/nornj/tools/metroTransformer')
    },
    resolver: {
      sourceExts: [...sourceExts, 'jsx', 'htm', 'nj', 'nornj']
    }
  };
})();