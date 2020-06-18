"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/styles");

var _colors = _interopRequireDefault(require("../../constants/colors"));

var _typography = _interopRequireDefault(require("../../constants/typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _styles.makeStyles)({
  buttonLabel: {
    textTransform: 'none'
  },
  buttonOutlined: {
    border: "2px solid red",
    borderRadius: 20,
    color: _colors["default"].PRIMARY,
    fontSize: 14,
    fontWeight: _typography["default"].WEIGHT_MEDIUM
  },
  buttonText: {
    '& .MuiButton-endIcon': {
      marginLeft: 'auto'
    },
    '& .MuiButton-startIcon': {
      color: _colors["default"].PRIMARY
    },
    color: _colors["default"].TEXT_PRIMARY,
    fontSize: 12,
    fontWeight: _typography["default"].WEIGHT_REGULAR,
    justifyContent: 'flex-start'
  }
});

exports["default"] = _default;