"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _dims = _interopRequireDefault(require("../../constants/dims"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _makeStyles["default"])(function (_ref) {
  var typography = _ref.typography;
  return {
    tableCellRoot: {
      fontSize: '0.888rem',
      fontWeight: typography.fontWeightRegular,
      padding: "".concat(_dims["default"].LAYOUT_PADDING, "px !important")
    }
  };
});

exports["default"] = _default;