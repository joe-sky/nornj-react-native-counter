module.exports = {
  getTransformModulePath() {
    return require.resolve('./node_modules/nornj/tools/metroTransformer');
  },
  getSourceExts() {
    return ['htm', 'nj', 'nornj'];
  }
};