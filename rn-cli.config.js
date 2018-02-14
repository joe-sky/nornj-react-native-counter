module.exports = {
  getTransformModulePath() {
    return require.resolve('./njMetroTransformer');
  },
  getSourceExts() {
    return ['htm'];
  }
};