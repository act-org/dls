"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _grey = _interopRequireDefault(require("@material-ui/core/colors/grey"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _makeStyles["default"])({
  paperRoot: {
    border: "1px solid ".concat(_grey["default"][200])
  }
});

exports["default"] = _default;