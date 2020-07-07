"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colors = require("@material-ui/core/colors");

var _makeStyles = _interopRequireDefault(require("../../styles/makeStyles"));

var _typography = _interopRequireDefault(require("../../constants/typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _makeStyles["default"])({
  selectComponentRoot: {
    fontSize: 14,
    padding: '11px 16px'
  },
  selectIcon: {
    color: '#2d2d2d',
    // FIXME: TEXT_PRIMARY
    height: '70%',
    marginRight: 6
  },
  selectRoot: {
    '&.Mui-disabled': {
      cursor: 'not-allowed'
    },
    backgroundColor: '#f9f9f9',
    border: "1px solid ".concat(_colors.grey[300]),
    borderRadius: 2,
    color: '#2d2d2d',
    // FIXME: TEXT_PRIMARY
    fontSize: 14,
    fontWeight: _typography["default"].WEIGHT_REGULAR,
    marginTop: 8
  },
  selectRootEmpty: {
    color: _colors.grey[400]
  }
});

exports["default"] = _default;