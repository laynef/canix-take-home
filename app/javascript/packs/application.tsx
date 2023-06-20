// Support component names relative to this directory:
// imports
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
// use context
ReactRailsUJS.useContext(componentRequireContext);
