"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _colors = _interopRequireDefault(require("../../constants/colors"));

var _typography = _interopRequireDefault(require("../../constants/typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _styles.makeStyles)({
  labelRoot: {
    '& .label-split': {
      '& > .required': {
        color: _colors["default"].REQUIRED,
        fontSize: 12,
        fontWeight: _typography["default"].WEIGHT_REGULAR
      },
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between'
    },
    color: _colors["default"].TEXT_PRIMARY,
    fontSize: 14,
    fontWeight: _typography["default"].WEIGHT_BOLD,
    position: 'relative'
  }
});

exports["default"] = _default;