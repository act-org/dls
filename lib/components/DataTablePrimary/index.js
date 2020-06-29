"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _compact = _interopRequireDefault(require("lodash/compact"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _search = _interopRequireDefault(require("../../helpers/search"));

var _sort = _interopRequireDefault(require("../../helpers/sort"));

var _TableBase = _interopRequireDefault(require("../TableBase"));

var _TableBodyBase = _interopRequireDefault(require("../TableBodyBase"));

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
var DataTablePrimary = function DataTablePrimary(_ref) {
  var columns = _ref.columns,
      originalItems = _ref.items,
      _ref$searchQuery = _ref.searchQuery,
      searchQuery = _ref$searchQuery === void 0 ? '' : _ref$searchQuery,
      setSortObject = _ref.setSortObject,
      sortObject = _ref.sortObject;
  // sort items
  var items = originalItems.sort((0, _sort["default"])(sortObject)); // search items

  var searchableKeys = (0, _compact["default"])(columns.map(function (_ref2) {
    var dataKey = _ref2.dataKey,
        searchable = _ref2.searchable;
    return searchable ? dataKey : null;
  }));

  if (searchableKeys.length > 0 && searchQuery.length > 0) {
    items = (0, _search["default"])(items, searchableKeys, searchQuery);
  }

  return /*#__PURE__*/React.createElement(_TableContainerPrimary["default"], null, /*#__PURE__*/React.createElement(_TableBase["default"], null, /*#__PURE__*/React.createElement(_TableHead["default"], null, /*#__PURE__*/React.createElement(_TableRowBase["default"], null, columns.map(function (column) {
    return /*#__PURE__*/React.createElement(_TableCellHead["default"], {
      dataKey: column.dataKey,
      key: column.dataKey,
      setSortObject: setSortObject,
      sortable: column.sortable,
      sortObject: sortObject,
      style: column.style
    }, column.label);
  }))), /*#__PURE__*/React.createElement(_TableBodyBase["default"], null, items.map(function (item, i) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement(_TableRowBase["default"], {
        key: i
      }, columns.map(function (column) {
        return /*#__PURE__*/React.createElement(_TableCellBody["default"], {
          key: column.dataKey,
          style: column.style
        }, column.displayValueFn ? column.displayValueFn(item) : item[column.dataKey]);
      }))
    );
  }))));
};

var _default = DataTablePrimary;
exports["default"] = _default;