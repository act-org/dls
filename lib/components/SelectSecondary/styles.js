"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

/**
 * @prettier
 */
var BORDER_WIDTH = 2;

var _default = (0, _styles.makeStyles)(function (_ref) {
  var palette = _ref.palette,
      shape = _ref.shape,
      typography = _ref.typography;
  return {
    selectIcon: {
      color: palette.primary.main
    },
    selectRoot: {
      alignItems: 'center',
      border: "".concat(BORDER_WIDTH, "px solid ").concat(palette.primary.main),
      borderRadius: "".concat(shape.borderRadius * 5, "px !important"),
      color: palette.primary.main,
      display: 'flex',
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeightMedium,
      height: 38 - BORDER_WIDTH * 2,
      marginTop: 0,
      paddingBottom: 0,
      paddingTop: 0
    }
  };
});

exports["default"] = _default;