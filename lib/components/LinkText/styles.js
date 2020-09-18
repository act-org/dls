"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _colors = _interopRequireDefault(require("../../constants/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _makeStyles["default"])({
  linkBase: {
    '&:hover': {
      textDecoration: 'underline'
    },
    color: _colors["default"].LINK,
    textDecoration: 'none'
  }
});

exports["default"] = _default;