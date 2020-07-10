"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _AlertOutline = _interopRequireDefault(require("../../icons/AlertOutline"));

var _colors = _interopRequireDefault(require("../../constants/colors"));

var _InputLabelPrimary = _interopRequireDefault(require("../InputLabelPrimary"));

var _MenuItemBase = _interopRequireDefault(require("../MenuItemBase"));

var _SelectPrimary = _interopRequireDefault(require("../SelectPrimary"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FormSelectPrimary = function FormSelectPrimary(_ref) {
  var disabled = _ref.disabled,
      labelProps = _ref.labelProps,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      placeholder = _ref.placeholder,
      placeholderIsDisabled = _ref.placeholderIsDisabled,
      required = _ref.required,
      selectProps = _ref.selectProps;
  var classes = (0, _styles["default"])();
  var children = /*#__PURE__*/React.createElement("div", {
    className: classes.selectContainer
  }, /*#__PURE__*/React.createElement(_SelectPrimary["default"], _extends({}, selectProps, {
    disabled: disabled,
    fullWidth: true,
    required: required,
    value: selectProps.value || 'undefined'
  }), /*#__PURE__*/React.createElement(_MenuItemBase["default"], {
    classes: {
      root: classes.selectOptionRoot
    },
    disabled: placeholderIsDisabled,
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
  })), (0, _get["default"])(selectProps, 'error') && /*#__PURE__*/React.createElement(_AlertOutline["default"], {
    classes: {
      root: classes.warning
    },
    htmlColor: _colors["default"].REQUIRED
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, labelProps && /*#__PURE__*/React.createElement("div", {
    className: classes.labelContainer
  }, /*#__PURE__*/React.createElement(_InputLabelPrimary["default"], _extends({
    disabled: disabled,
    required: required
  }, labelProps))), children);
};

var _default = FormSelectPrimary;
exports["default"] = _default;