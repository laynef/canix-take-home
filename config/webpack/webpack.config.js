const { webpackConfig, merge } = require("shakapacker");
const ForkTSCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const ignoreWarningsConfig = {
    ignoreWarnings: [/Module not found: Error: Can't resolve 'react-dom\/client'/],
};

module.exports = merge({}, webpackConfig, ignoreWarningsConfig, {
    plugins: [new ForkTSCheckerWebpackPlugin()],
});
