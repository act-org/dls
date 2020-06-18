"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.theme = void 0;

var _styles = require("@material-ui/core/styles");

var _colors = _interopRequireDefault(require("../constants/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var theme = {
  palette: {
    primary: {
      dark: _colors["default"].PRIMARY,
      light: _colors["default"].PRIMARY,
      main: _colors["default"].PRIMARY
    },
    secondary: {
      main: _colors["default"].WHITE
    },
    text: {
      primary: _colors["default"].TEXT_PRIMARY,
      secondary: _colors["default"].TEXT_SECONDARY
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'Helvetica', 'sans-serif'].join(','),
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    htmlFontSize: 18
  }
};
exports.theme = theme;

var _default = (0, _styles.createMuiTheme)(theme);

exports["default"] = _default;