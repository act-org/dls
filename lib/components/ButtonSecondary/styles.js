"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _colors = _interopRequireDefault(require("../../constants/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _styles.makeStyles)({
  contained: {
    '&:hover': {
      backgroundColor: _colors["default"].PRIMARY_DARK
    },
    backgroundColor: _colors["default"].PRIMARY,
    borderRadius: 90,
    color: _colors["default"].WHITE
  },
  "default": {
    maxHeight: 40,
    padding: '8px 16px'
  },
  label: {
    fontSize: 14,
    lineHeight: '24px',
    textTransform: 'none'
  },
  large: {
    maxHeight: 42,
    padding: '9px 16px'
  },
  outlined: {
    border: "solid 2px ".concat(_colors["default"].PRIMARY),
    borderRadius: 90,
    color: _colors["default"].PRIMARY
  },
  small: {
    maxHeight: 34,
    padding: '5px 16px'
  },
  text: {
    padding: 0
  }
});

exports["default"] = _default;