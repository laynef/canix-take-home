// Support component names relative to this directory:
const componentRequireContexts = require.context("components", true);
const ReactRailsUJSS = require("react_ujs");
ReactRailsUJSS.useContext(componentRequireContexts);
