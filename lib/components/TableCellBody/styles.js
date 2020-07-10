"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dims = _interopRequireDefault(require("../../constants/dims"));

var _grey = _interopRequireDefault(require("../../colors/grey"));

var _makeStyles = _interopRequireDefault(require("../../styles/makeStyles"));

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
    },
    tableCellRootSortApplied: {
      backgroundColor: _grey["default"][100]
    }
  };
});

exports["default"] = _default;