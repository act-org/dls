"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dims = _interopRequireDefault(require("../../constants/dims"));

var _makeStyles = _interopRequireDefault(require("../../styles/makeStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _makeStyles["default"])({
  inputContainer: {
    position: 'relative'
  },
  labelContainer: {
    marginBottom: _dims["default"].LAYOUT_PADDING / 2
  },
  warning: {
    marginLeft: 3,
    opacity: 0.5,
    position: 'absolute',
    right: -28,
    top: '35%'
  }
});

exports["default"] = _default;