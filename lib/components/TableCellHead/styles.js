"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colors = require("@material-ui/core/colors");

var _styles = require("@material-ui/core/styles");

var _dims = _interopRequireDefault(require("../../constants/dims"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _styles.makeStyles)(function (_ref) {
  var typography = _ref.typography;
  return {
    sortContainerRoot: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      right: 10,
      top: "calc(50% - 14px)",
      width: 14
    },
    sortIconRoot: {
      color: 'rgba(255, 255, 255, 0.35)',
      cursor: 'pointer',
      fontSize: typography.fontSize,
      // FIXME 14
      userSelect: 'auto'
    },
    tableCellRoot: {
      border: 'none',
      boxSizing: 'border-box',
      height: _dims["default"].HEIGHTS.TABLE_HEADER,
      position: 'relative'
    },
    tableCellRootSortable: {
      cursor: 'pointer',
      paddingRight: 30
    },
    tableCellRootSortApplied: {
      backgroundColor: _colors.grey[900]
    },
    typographyRoot: {
      color: 'white',
      fontSize: typography.fontSize,
      // FIXME 16
      fontWeight: typography.fontWeightMedium,
      // FIXME 500
      lineHeight: 1,
      userSelect: 'none'
    }
  };
});

exports["default"] = _default;