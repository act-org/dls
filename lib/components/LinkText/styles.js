"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colors = _interopRequireDefault(require("../../constants/colors"));

var _makeStyles = _interopRequireDefault(require("../../styles/makeStyles"));

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