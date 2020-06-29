"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var React = _interopRequireWildcard(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _icons = require("../../icons");

var _colors = _interopRequireDefault(require("../../constants/colors"));

var _dims = _interopRequireDefault(require("../../constants/dims"));

var _InputLabelPrimary = _interopRequireDefault(require("../InputLabelPrimary"));

var _MenuItemBase = _interopRequireDefault(require("../MenuItemBase"));

var _SelectPrimary = _interopRequireDefault(require("../SelectPrimary"));

var _styles = _interopRequireDefault(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FormSelectPrimary = function FormSelectPrimary(_ref) {
  var disabled = _ref.disabled,
      labelProps = _ref.labelProps,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      placeholder = _ref.placeholder,
      required = _ref.required,
      selectProps = _ref.selectProps;
  var classes = (0, _styles["default"])();
  var children = /*#__PURE__*/React.createElement("div", {
    className: "selectContainer"
  }, /*#__PURE__*/React.createElement(_SelectPrimary["default"], _extends({
    disabled: disabled,
    fullWidth: true,
    required: required
  }, selectProps), /*#__PURE__*/React.createElement(_MenuItemBase["default"], {
    classes: {
      root: classes.selectOptionRoot
    },
    disabled: true,
    value: "undefined"
  }, placeholder || 'Select'), options.map(function (_ref2) {
    var optionLabel = _ref2.label,
        optionValue = _ref2.value;
    return /*#__PURE__*/React.createElement(_MenuItemBase["default"], {
      classes: {
        root: classes.selectOptionRoot
      },
      key: optionValue,
      value: optionValue
    }, optionLabel);
  })), (0, _get["default"])(selectProps, 'error') && /*#__PURE__*/React.createElement(_icons.AlertOutline, {
    classes: {
      root: classes.warning
    },
    htmlColor: _colors["default"].REQUIRED
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_style["default"], {
    id: "3991016465",
    dynamic: [_dims["default"].LAYOUT_PADDING / 2]
  }, [".labelContainer.__jsx-style-dynamic-selector{margin-bottom:".concat(_dims["default"].LAYOUT_PADDING / 2, "px;}"), ".selectContainer.__jsx-style-dynamic-selector{position:relative;}"]), labelProps && /*#__PURE__*/React.createElement("div", {
    className: _style["default"].dynamic([["3991016465", [_dims["default"].LAYOUT_PADDING / 2]]]) + " " + "labelContainer"
  }, /*#__PURE__*/React.createElement(_InputLabelPrimary["default"], _extends({
    disabled: disabled,
    required: required
  }, labelProps))), children);
};

var _default = FormSelectPrimary;
exports["default"] = _default;