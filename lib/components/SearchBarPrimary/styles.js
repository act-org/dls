"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/styles");

var _colors = _interopRequireDefault(require("../../constants/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _styles.makeStyles)({
  '&::-ms-clear, & *::-ms-clear': {
    display: 'none'
  },
  iconClose: {
    color: _colors["default"].BLACK_38
  },
  iconCloseHidden: {
    opacity: 0,
    pointerEvents: 'none'
  },
  inputAdornmentRoot: {
    color: '#8f8f8f' // FIXME: COLORS.MEDIUM_GREY,

  },
  outlinedInputNotchedOutlined: {
    borderColor: '#f1f1f1'
  },
  outlinedInputRoot: {
    backgroundColor: '#f9f9f9',
    // FIXME: COLORS.LIGHT_GREY,
    borderRadius: 11,
    color: '#2d2d2d',
    // FIXME: COLORS.TEXT_PRIMARY,
    fontSize: 14,
    height: 40,
    paddingRight: 0
  }
});

exports["default"] = _default;