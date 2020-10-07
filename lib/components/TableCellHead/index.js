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

var _ChevronDown = _interopRequireDefault(require("../../icons/ChevronDown"));

var _ChevronUp = _interopRequireDefault(require("../../icons/ChevronUp"));

var _colors = _interopRequireDefault(require("../../constants/colors"));

var _sortDirectionTypes = _interopRequireDefault(require("../../constants/sortDirectionTypes"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableCellHead = function TableCellHead(_ref) {
  var children = _ref.children,
      currentSortObject = _ref.currentSortObject,
      onChangeSort = _ref.onChangeSort,
      sortBy = _ref.sortBy,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["children", "currentSortObject", "onChangeSort", "sortBy", "style"]);

  var sortIsApplied = sortBy === currentSortObject.sortBy;

  var getStyleForIcon = function getStyleForIcon(direction) {
    if (!sortIsApplied || currentSortObject.sortDirection !== direction) {
      return {};
    }

    return {
      color: _colors["default"].WHITE
    };
  };

  var toggleSort = function toggleSort() {
    if (sortBy) {
      var newSortDirection = _sortDirectionTypes["default"].ASCENDING;

      if (sortIsApplied) {
        newSortDirection = currentSortObject.sortDirection === _sortDirectionTypes["default"].ASCENDING ? _sortDirectionTypes["default"].DESCENDING : _sortDirectionTypes["default"].ASCENDING;
      }

      onChangeSort({
        sortBy: sortBy,
        sortDirection: newSortDirection
      });
    }
  };

  var classes = (0, _styles["default"])();
  return /*#__PURE__*/React.createElement(_TableCell["default"], _extends({
    classes: {
      root: (0, _clsx["default"])(classes.tableCellRoot, sortBy && classes.tableCellRootSortable, sortIsApplied && classes.tableCellRootSortApplied)
    },
    component: "td",
    onClick: sortBy ? toggleSort : undefined,
    style: style
  }, props), /*#__PURE__*/React.createElement(_Typography["default"], {
    classes: {
      root: classes.typographyRoot
    }
  }, children), sortBy && /*#__PURE__*/React.createElement(_Grid["default"], {
    classes: {
      root: classes.sortContainerRoot
    },
    container: true
  }, /*#__PURE__*/React.createElement(_ChevronUp["default"], {
    classes: {
      root: classes.sortIconRoot
    },
    onClick: function onClick() {
      onChangeSort({
        sortBy: sortBy,
        sortDirection: _sortDirectionTypes["default"].ASCENDING
      });
    },
    role: "button",
    style: getStyleForIcon(_sortDirectionTypes["default"].ASCENDING),
    viewBox: "9 3 5 15"
  }), /*#__PURE__*/React.createElement(_ChevronDown["default"], {
    classes: {
      root: classes.sortIconRoot
    },
    onClick: function onClick() {
      onChangeSort({
        sortBy: sortBy,
        sortDirection: _sortDirectionTypes["default"].DESCENDING
      });
    },
    role: "button",
    style: getStyleForIcon(_sortDirectionTypes["default"].DESCENDING),
    viewBox: "9 7 5 15"
  })));
}; // eslint-disable-next-line immutable/no-mutation


TableCellHead.defaultProps = {
  sortBy: undefined,
  style: undefined
};
var _default = TableCellHead;
exports["default"] = _default;