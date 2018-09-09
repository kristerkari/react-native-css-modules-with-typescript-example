var upstreamTransformer = require("metro/src/reactNativeTransformer");
var sassTransformer = require("react-native-sass-transformer");
var cssTransformer = require("react-native-css-transformer");
var typescriptTransformer = require("react-native-typescript-transformer");
const sass = require("node-sass");
const DtsCreator = require("typed-css-modules");
const creator = new DtsCreator();

const isPlatformSpecific = filename => {
  const platformSpecific = [".native.", ".ios.", ".android."];
  return platformSpecific.some(name => filename.includes(name));
};

module.exports.transform = function({ src, filename, options }) {
  if (filename.endsWith(".scss")) {
    if (isPlatformSpecific(filename)) {
      return sassTransformer.transform({ src, filename, options });
    }

    const css = sass
      .renderSync({
        data: src
      })
      .css.toString();

    return creator.create(filename, css).then(content => {
      return content.writeFile().then(() => {
        return sassTransformer.transform({ src, filename, options });
      });
    });
  } else if (filename.endsWith(".css")) {
    if (isPlatformSpecific(filename)) {
      return cssTransformer.transform({ src, filename, options });
    }
    return creator.create(filename, src).then(content => {
      return content.writeFile().then(() => {
        return cssTransformer.transform({ src, filename, options });
      });
    });
  } else if (filename.endsWith(".ts") || filename.endsWith(".tsx")) {
    return typescriptTransformer.transform({ src, filename, options });
  } else {
    return upstreamTransformer.transform({ src, filename, options });
  }
};
