"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/styles");

/**
 * @prettier
 */
var _default = (0, _styles.makeStyles)(function (_ref) {
  var palette = _ref.palette,
      shape = _ref.shape,
      typography = _ref.typography;
  return {
    label: {
      textTransform: 'none'
    },
    outlined: {
      border: "2px solid red",
      borderRadius: shape.borderRadius * 5,
      color: palette.primary.main,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeightMedium
    },
    text: {
      '& .MuiButton-endIcon': {
        marginLeft: 'auto'
      },
      '& .MuiButton-startIcon': {
        color: palette.primary.main
      },
      justifyContent: 'flex-start'
    }
  };
});

exports["default"] = _default;