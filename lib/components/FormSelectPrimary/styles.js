"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/styles");

var _typography = _interopRequireDefault(require("../../constants/typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _styles.makeStyles)({
  selectOptionRoot: {
    color: '#2d2d2d',
    // FIXME: COLORS.TEXT_PRIMARY,
    fontSize: 14,
    fontWeight: _typography["default"].WEIGHT_REGULAR
  },
  warning: {
    left: '100%',
    marginLeft: 3,
    opacity: 0.5,
    position: 'absolute',
    top: '45%'
  }
});

exports["default"] = _default;