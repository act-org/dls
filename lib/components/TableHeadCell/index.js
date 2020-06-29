"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _icons = require("../../icons");

var _colors = _interopRequireDefault(require("../../constants/colors"));

var _sortDirectionTypes = _interopRequireDefault(require("../../constants/sortDirectionTypes"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @prettier
 */
var TableHeadCell = function TableHeadCell(_ref) {
  var children = _ref.children,
      dataKey = _ref.dataKey,
      setSortObject = _ref.setSortObject,
      _ref$sortable = _ref.sortable,
      sortable = _ref$sortable === void 0 ? false : _ref$sortable,
      sortObject = _ref.sortObject,
      style = _ref.style;
  var key = dataKey;
  var sortIsApplied = sortable && sortObject.dataKey === dataKey;

  var getStyleForIcon = function getStyleForIcon(direction) {
    if (!sortIsApplied || sortObject.direction !== direction) {
      return {};
    }

    return {
      color: _colors["default"].WHITE
    };
  };

  var toggleSort = function toggleSort() {
    var direction = _sortDirectionTypes["default"].ASC;

    if (sortIsApplied) {
      direction = sortObject.direction === _sortDirectionTypes["default"].ASC ? _sortDirectionTypes["default"].DESC : _sortDirectionTypes["default"].ASC;
    }

    setSortObject({
      dataKey: key,
      direction: direction
    });
  };

  var classes = (0, _styles["default"])();
  return /*#__PURE__*/React.createElement(_TableCell["default"], {
    classes: {
      root: (0, _clsx["default"])(classes.tableCellRoot, sortable && classes.tableCellRootSortable, sortIsApplied && classes.tableCellRootSortApplied)
    },
    component: "div",
    onClick: sortable ? toggleSort : undefined,
    style: style
  }, /*#__PURE__*/React.createElement(_Typography["default"], {
    classes: {
      root: classes.typographyRoot
    }
  }, children), sortable && /*#__PURE__*/React.createElement(_Grid["default"], {
    classes: {
      root: classes.sortContainerRoot
    }
  }, /*#__PURE__*/React.createElement(_icons.ChevronUp, {
    classes: {
      root: classes.sortIconRoot
    },
    onClick: function onClick() {
      setSortObject({
        dataKey: key,
        direction: _sortDirectionTypes["default"].ASC
      });
    },
    role: "button",
    style: getStyleForIcon(_sortDirectionTypes["default"].ASC),
    viewBox: "9 3 5 15"
  }), /*#__PURE__*/React.createElement(_icons.ChevronDown, {
    classes: {
      root: classes.sortIconRoot
    },
    onClick: function onClick() {
      setSortObject({
        dataKey: key,
        direction: _sortDirectionTypes["default"].DESC
      });
    },
    role: "button",
    style: getStyleForIcon(_sortDirectionTypes["default"].DESC),
    viewBox: "9 7 5 15"
  })));
};

var _default = TableHeadCell;
exports["default"] = _default;