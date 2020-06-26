"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _dims = _interopRequireDefault(require("../../../constants/dims"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
// import COLORS from '~/constants/colors';
var _default = (0, _styles.makeStyles)({
  buttonRoot: {
    color: 'red',
    // FIXME
    textTransform: 'capitalize'
  },
  gridItemAction: {
    marginRight: _dims["default"].LAYOUT_PADDING
  },
  typographyRoot: {
    fontSize: 14 // FIXME

  }
});

exports["default"] = _default;