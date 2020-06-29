"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _compact = _interopRequireDefault(require("lodash/compact"));

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _search = _interopRequireDefault(require("../../helpers/search"));

var _sort = _interopRequireDefault(require("../../helpers/sort"));

var _TableCellBody = _interopRequireDefault(require("../TableCellBody"));

var _TableCellHead = _interopRequireDefault(require("../TableCellHead"));

var _TableContainerPrimary = _interopRequireDefault(require("../TableContainerPrimary"));

var _TableRowBase = _interopRequireDefault(require("../TableRowBase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @prettier
 */
var TablePrimary = function TablePrimary(_ref) {
  var cells = _ref.cells,
      originalItems = _ref.items,
      _ref$searchQuery = _ref.searchQuery,
      searchQuery = _ref$searchQuery === void 0 ? '' : _ref$searchQuery,
      setSortObject = _ref.setSortObject,
      sortObject = _ref.sortObject;
  // sort items
  var items = originalItems.sort((0, _sort["default"])(sortObject)); // search items

  var searchableKeys = (0, _compact["default"])(cells.map(function (_ref2) {
    var dataKey = _ref2.dataKey,
        searchable = _ref2.searchable;
    return searchable ? dataKey : null;
  }));

  if (searchableKeys.length > 0 && searchQuery.length > 0) {
    items = (0, _search["default"])(items, searchableKeys, searchQuery);
  }

  return /*#__PURE__*/React.createElement(_TableContainerPrimary["default"], null, /*#__PURE__*/React.createElement(_Table["default"], null, /*#__PURE__*/React.createElement(_TableHead["default"], null, /*#__PURE__*/React.createElement(_TableRowBase["default"], null, cells.map(function (cell) {
    return /*#__PURE__*/React.createElement(_TableCellHead["default"], {
      dataKey: cell.dataKey,
      key: cell.dataKey,
      setSortObject: setSortObject,
      sortable: cell.sortable,
      sortObject: sortObject,
      style: cell.style
    }, cell.label);
  }))), /*#__PURE__*/React.createElement(_TableBody["default"], null, items.map(function (item, i) {
    return /*#__PURE__*/React.createElement(_TableRowBase["default"], {
      key: i
    }, cells.map(function (cell) {
      return /*#__PURE__*/React.createElement(_TableCellBody["default"], {
        key: cell.dataKey,
        style: cell.style
      }, cell.displayValueFn ? cell.displayValueFn(item) : item[cell.dataKey]);
    }));
  }))));
};

var _default = TablePrimary;
exports["default"] = _default;