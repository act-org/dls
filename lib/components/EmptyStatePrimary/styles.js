"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colors = _interopRequireDefault(require("../../constants/colors"));

var _dims = _interopRequireDefault(require("../../constants/dims"));

var _makeStyles = _interopRequireDefault(require("../../styles/makeStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var _default = (0, _makeStyles["default"])({
  container: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  descriptionRoot: {
    color: _colors["default"].BLACK_54,
    marginBottom: _dims["default"].LAYOUT_PADDING * 2,
    marginTop: _dims["default"].LAYOUT_PADDING / 2,
    maxWidth: 350
  },
  descriptionRootFlexibleHeight: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  descriptionRootWithoutTitle: {
    marginTop: _dims["default"].LAYOUT_PADDING * 2
  },
  iconRoot: {
    fontSize: 50
  },
  titleGridContainer: {
    marginBottom: _dims["default"].LAYOUT_PADDING * 2,
    marginTop: _dims["default"].LAYOUT_PADDING,
    maxWidth: 300
  },
  titleGridContainerWithDescription: {
    marginBottom: _dims["default"].LAYOUT_PADDING / 2
  },
  titleGridItem: {
    display: 'flex'
  }
});

exports["default"] = _default;