"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _dims = _interopRequireDefault(require("../../constants/dims"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _styles.makeStyles)({
  emptyStateContainer: {
    padding: "".concat(_dims["default"].LAYOUT_PADDING * 2.5, "px ").concat(_dims["default"].LAYOUT_PADDING, "px\n      ").concat(_dims["default"].LAYOUT_PADDING, "px ").concat(_dims["default"].LAYOUT_PADDING, "px"),
    width: '100%'
  }
});

exports["default"] = _default;