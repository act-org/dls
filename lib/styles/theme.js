"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.theme = void 0;

var _colors = _interopRequireDefault(require("../constants/colors"));

var _styles = require("@material-ui/core/styles");

var _typography = _interopRequireDefault(require("../constants/typography"));

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
    fontWeightBold: _typography["default"].WEIGHT_BOLD,
    fontWeightLight: _typography["default"].WEIGHT_LIGHT,
    fontWeightMedium: _typography["default"].WEIGHT_MEDIUM,
    fontWeightRegular: _typography["default"].WEIGHT_REGULAR,
    htmlFontSize: 18
  }
};
exports.theme = theme;

var _default = (0, _styles.createMuiTheme)(theme);

exports["default"] = _default;