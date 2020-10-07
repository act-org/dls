"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _colors = _interopRequireDefault(require("../../constants/colors"));

var _dims = _interopRequireDefault(require("../../constants/dims"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _styles.makeStyles)({
  '&::-ms-clear, & *::-ms-clear': {
    display: 'none'
  },
  "default": {
    height: _dims["default"].SECONDARY.HEIGHTS.INPUT
  },
  iconClose: {
    color: _colors["default"].BLACK_38
  },
  iconCloseHidden: {
    opacity: 0,
    pointerEvents: 'none'
  },
  inputAdornmentRoot: {
    color: _colors["default"].BORDER_SECONDARY
  },
  large: {
    height: _dims["default"].SECONDARY.HEIGHTS.INPUT + _dims["default"].SECONDARY.HEIGHT_INCREMENT
  },
  outlinedInputNotchedOutlined: {
    borderColor: _colors["default"].BORDER_SECONDARY
  },
  outlinedInputRoot: {
    borderRadius: _dims["default"].SECONDARY.BORDER_RADIUS * 2,
    color: _colors["default"].DARK_SECONDARY,
    fontSize: 14,
    paddingLeft: _dims["default"].LAYOUT_PADDING,
    paddingRight: 0
  }
});

exports["default"] = _default;