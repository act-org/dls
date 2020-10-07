"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _dims = _interopRequireDefault(require("../../constants/dims"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _styles.makeStyles)({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    width: '100%'
  },
  typographyRoot: {
    marginTop: _dims["default"].LAYOUT_PADDING / 2
  }
});

exports["default"] = _default;