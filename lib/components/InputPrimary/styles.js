"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dims = _interopRequireDefault(require("../../constants/dims"));

var _grey = _interopRequireDefault(require("../../colors/grey"));

var _makeStyles = _interopRequireDefault(require("../../styles/makeStyles"));

var _typography = _interopRequireDefault(require("../../constants/typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _makeStyles["default"])({
  inputBaseInput: {
    '&.Mui-disabled': {
      cursor: 'not-allowed'
    },
    fontSize: 14,
    height: _dims["default"].HEIGHTS.INPUT,
    minHeight: _dims["default"].HEIGHTS.INPUT,
    padding: "0 ".concat(_dims["default"].LAYOUT_PADDING, "px")
  },
  inputBaseInputPassword: {
    fontSize: 22,
    fontWeight: _typography["default"].WEIGHT_BOLD,
    letterSpacing: 4
  },
  inputBaseRoot: {
    backgroundColor: _grey["default"][100],
    border: "1px solid ".concat(_grey["default"][300]),
    borderRadius: 2,
    marginTop: 8
  }
});

exports["default"] = _default;