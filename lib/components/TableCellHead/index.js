"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _ChevronDown = _interopRequireDefault(require("../../icons/ChevronDown"));

var _ChevronUp = _interopRequireDefault(require("../../icons/ChevronUp"));

var _colors = _interopRequireDefault(require("../../constants/colors"));

var _GridContainer = _interopRequireDefault(require("../GridContainer"));

var _sortDirectionTypes = _interopRequireDefault(require("../../constants/sortDirectionTypes"));

var _TableCellBase = _interopRequireDefault(require("../TableCellBase"));

var _TypographyBase = _interopRequireDefault(require("../TypographyBase"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableCellHead = function TableCellHead(_ref) {
  var children = _ref.children,
      dataKey = _ref.dataKey,
      setSortObject = _ref.setSortObject,
      _ref$sortable = _ref.sortable,
      sortable = _ref$sortable === void 0 ? false : _ref$sortable,
      sortObject = _ref.sortObject,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["children", "dataKey", "setSortObject", "sortable", "sortObject", "style"]);

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
      dataKey: dataKey,
      direction: direction
    });
  };

  var classes = (0, _styles["default"])();
  return /*#__PURE__*/React.createElement(_TableCellBase["default"], _extends({
    classes: {
      root: (0, _clsx["default"])(classes.tableCellRoot, sortable && classes.tableCellRootSortable, sortIsApplied && classes.tableCellRootSortApplied)
    },
    component: "div",
    onClick: sortable ? toggleSort : undefined,
    style: style
  }, props), /*#__PURE__*/React.createElement(_TypographyBase["default"], {
    classes: {
      root: classes.typographyRoot
    }
  }, children), sortable && /*#__PURE__*/React.createElement(_GridContainer["default"], {
    classes: {
      root: classes.sortContainerRoot
    }
  }, /*#__PURE__*/React.createElement(_ChevronUp["default"], {
    classes: {
      root: classes.sortIconRoot
    },
    onClick: function onClick() {
      setSortObject({
        dataKey: dataKey,
        direction: _sortDirectionTypes["default"].ASC
      });
    },
    role: "button",
    style: getStyleForIcon(_sortDirectionTypes["default"].ASC),
    viewBox: "9 3 5 15"
  }), /*#__PURE__*/React.createElement(_ChevronDown["default"], {
    classes: {
      root: classes.sortIconRoot
    },
    onClick: function onClick() {
      setSortObject({
        dataKey: dataKey,
        direction: _sortDirectionTypes["default"].DESC
      });
    },
    role: "button",
    style: getStyleForIcon(_sortDirectionTypes["default"].DESC),
    viewBox: "9 7 5 15"
  })));
};

var _default = TableCellHead;
exports["default"] = _default;