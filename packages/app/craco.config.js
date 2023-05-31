const path = require("path");
const { getLoader, loaderByName } = require("craco");

const packages = [];
packages.push(path.join(__dirname, "../react-components/src"));

module.exports = {
  webpack: {
    configure: (webpackConfig, arg) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        match.loader.include = Array.isArray(match.loader.include)
          ? [...match.loader.include, ...packages]
          : [match.loader.include, ...packages];
      }
      return webpackConfig;
    },
  },
};
