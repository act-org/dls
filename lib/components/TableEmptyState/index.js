"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var React = _interopRequireWildcard(require("react"));

var _dims = _interopRequireDefault(require("../../constants/dims"));

var _EmptyStatePrimary = _interopRequireDefault(require("../EmptyStatePrimary"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TableEmptyState = function TableEmptyState(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_style["default"], {
    id: "2819924421",
    dynamic: [_dims["default"].LAYOUT_PADDING * 2.5, _dims["default"].LAYOUT_PADDING, _dims["default"].LAYOUT_PADDING, _dims["default"].LAYOUT_PADDING]
  }, [".container.__jsx-style-dynamic-selector{padding:".concat(_dims["default"].LAYOUT_PADDING * 2.5, "px ").concat(_dims["default"].LAYOUT_PADDING, "px ").concat(_dims["default"].LAYOUT_PADDING, "px ").concat(_dims["default"].LAYOUT_PADDING, "px;width:100%;}")]), /*#__PURE__*/React.createElement("div", {
    className: _style["default"].dynamic([["2819924421", [_dims["default"].LAYOUT_PADDING * 2.5, _dims["default"].LAYOUT_PADDING, _dims["default"].LAYOUT_PADDING, _dims["default"].LAYOUT_PADDING]]]) + " " + "container"
  }, /*#__PURE__*/React.createElement(_EmptyStatePrimary["default"], _extends({
    description: "No Results Found"
  }, props))));
};

var _default = TableEmptyState;
exports["default"] = _default;