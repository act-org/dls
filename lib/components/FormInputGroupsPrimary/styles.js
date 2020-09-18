"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _dims = _interopRequireDefault(require("../../constants/dims"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _makeStyles["default"])({
  gridContainerRoot: {
    marginBottom: _dims["default"].LAYOUT_PADDING / 2
  },
  gridItemRoot: {
    flex: 1
  }
});

exports["default"] = _default;