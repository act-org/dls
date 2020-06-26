"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colors = require("@material-ui/core/colors");

var _styles = require("@material-ui/core/styles");

var _dims = _interopRequireDefault(require("../../constants/dims"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _styles.makeStyles)({
  tableCellRoot: {
    padding: "".concat(_dims["default"].LAYOUT_PADDING, "px !important")
  },
  tableCellRootSortApplied: {
    backgroundColor: _colors.grey[50]
  }
});

exports["default"] = _default;