"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../../constants");

var _colors = require("../../colors");

var _styles = require("../../styles");

/**
 * @prettier
 */
var _default = (0, _styles.makeStyles)({
  inputBaseInput: {
    '&.Mui-disabled': {
      cursor: 'not-allowed'
    },
    fontSize: 14,
    height: _constants.DIMS.HEIGHTS.INPUT,
    minHeight: _constants.DIMS.HEIGHTS.INPUT,
    padding: "0 ".concat(_constants.DIMS.LAYOUT_PADDING, "px")
  },
  inputBaseInputPassword: {
    fontSize: 22,
    fontWeight: _constants.TYPOGRAPHY.WEIGHT_BOLD,
    letterSpacing: 4
  },
  inputBaseRoot: {
    backgroundColor: _colors.grey[100],
    border: "1px solid ".concat(_colors.grey[300]),
    borderRadius: 2,
    marginTop: 8
  }
});

exports["default"] = _default;