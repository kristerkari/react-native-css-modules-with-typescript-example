module.exports = {
  getTransformModulePath() {
    return require.resolve("./rn-transformer.js");
  },
  getSourceExts() {
    return ["ts", "tsx", "scss", "css"];
  },
};
