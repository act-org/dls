"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _EmptyStatePrimary = _interopRequireDefault(require("../EmptyStatePrimary"));

var _TableBase = _interopRequireDefault(require("../TableBase"));

var _TableBodyBase = _interopRequireDefault(require("../TableBodyBase"));

var _TableCellBody = _interopRequireDefault(require("../TableCellBody"));

var _TableCellHead = _interopRequireDefault(require("../TableCellHead"));

var _TableContainerPrimary = _interopRequireDefault(require("../TableContainerPrimary"));

var _TableHeadBase = _interopRequireDefault(require("../TableHeadBase"));

var _TableRowBase = _interopRequireDefault(require("../TableRowBase"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DataTablePrimary = function DataTablePrimary(_ref) {
  var columns = _ref.columns,
      currentSortObject = _ref.currentSortObject,
      emptyStateProps = _ref.emptyStateProps,
      items = _ref.items,
      onChangeSort = _ref.onChangeSort,
      RowWrapper = _ref.RowWrapper;
  var classes = (0, _styles["default"])();
  return /*#__PURE__*/React.createElement(_TableContainerPrimary["default"], null, /*#__PURE__*/React.createElement(_TableBase["default"], null, /*#__PURE__*/React.createElement(_TableHeadBase["default"], null, /*#__PURE__*/React.createElement(_TableRowBase["default"], null, columns.map(function (column) {
    return /*#__PURE__*/React.createElement(_TableCellHead["default"], {
      currentSortObject: currentSortObject,
      key: column.label,
      onChangeSort: onChangeSort,
      sortBy: column.sortBy,
      style: column.style
    }, column.label);
  }))), /*#__PURE__*/React.createElement(_TableBodyBase["default"], null, items.map(function (item, i) {
    /* eslint-disable react/no-array-index-key */
    var children = /*#__PURE__*/React.createElement(_TableRowBase["default"], {
      hover: true,
      key: i
    }, columns.map(function (column) {
      return /*#__PURE__*/React.createElement(_TableCellBody["default"], {
        key: column.label,
        style: column.style
      }, column.renderValue(item));
    }));
    /* eslint-enable react/no-array-index-key */

    if (RowWrapper) {
      return RowWrapper(item, children);
    }

    return children;
  }))), items.length === 0 && emptyStateProps && /*#__PURE__*/React.createElement("div", {
    className: classes.emptyStateContainer
  }, /*#__PURE__*/React.createElement(_EmptyStatePrimary["default"], _extends({
    description: "No Results Found"
  }, emptyStateProps))));
}; // eslint-disable-next-line immutable/no-mutation


DataTablePrimary.defaultProps = {
  RowWrapper: undefined
};
var _default = DataTablePrimary;
exports["default"] = _default;