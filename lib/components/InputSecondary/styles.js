"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _colors = _interopRequireDefault(require("../../constants/colors"));

var _dims = _interopRequireDefault(require("../../constants/dims"));

var _typography = _interopRequireDefault(require("../../constants/typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _styles.makeStyles)({
  "default": {
    height: _dims["default"].SECONDARY.HEIGHTS.INPUT,
    minHeight: _dims["default"].SECONDARY.HEIGHTS.INPUT
  },
  inputInput: {
    '&.Mui-disabled': {
      cursor: 'not-allowed'
    },
    fontSize: 14,
    padding: "0 ".concat(_dims["default"].LAYOUT_PADDING, "px")
  },
  inputInputPassword: {
    fontSize: 22,
    fontWeight: _typography["default"].WEIGHT_BOLD,
    letterSpacing: 4
  },
  inputRoot: {
    border: "1px solid ".concat(_colors["default"].BORDER_SECONDARY),
    borderRadius: _dims["default"].SECONDARY.BORDER_RADIUS * 2,
    color: _colors["default"].DARK_SECONDARY
  },
  large: {
    height: _dims["default"].SECONDARY.HEIGHTS.INPUT + _dims["default"].SECONDARY.HEIGHT_INCREMENT,
    minHeight: _dims["default"].SECONDARY.HEIGHTS.INPUT + _dims["default"].SECONDARY.HEIGHT_INCREMENT
  },
  multiline: {
    height: 'unset'
  }
});

exports["default"] = _default;