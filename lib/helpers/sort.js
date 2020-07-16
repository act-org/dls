"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isString = _interopRequireDefault(require("lodash/isString"));

var _sortDirectionTypes = _interopRequireDefault(require("../constants/sortDirectionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
function sort(_ref) {
  var sortBy = _ref.sortBy,
      sortDirection = _ref.sortDirection;
  return function (_ref2, _ref3) {
    var itemA = _ref2[sortBy];
    var itemB = _ref3[sortBy];
    if (itemA === null || itemB === null) return 0;
    var normalizedItemA = itemA;
    var normalizedItemB = itemB;

    if ((0, _isString["default"])(itemA)) {
      normalizedItemA = itemA.trim().toLowerCase();
    }

    if ((0, _isString["default"])(itemB)) {
      normalizedItemB = itemB.trim().toLowerCase();
    }

    if (normalizedItemA < normalizedItemB) {
      return sortDirection === _sortDirectionTypes["default"].ASCENDING ? -1 : 1;
    }

    if (normalizedItemA > normalizedItemB) {
      return sortDirection === _sortDirectionTypes["default"].ASCENDING ? 1 : -1;
    }

    return 0;
  };
}

var _default = sort;
exports["default"] = _default;