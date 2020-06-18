"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _ButtonBase = _interopRequireDefault(require("../ButtonBase"));

var _styles = _interopRequireDefault(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var EmptyStateBase = function EmptyStateBase(_ref) {
  var _ref$Button = _ref.Button,
      Button = _ref$Button === void 0 ? _ButtonBase["default"] : _ref$Button,
      buttonProps = _ref.buttonProps,
      classesProps = _ref.classes,
      css = _ref.css,
      description = _ref.description,
      Icon = _ref.Icon,
      maxWidth = _ref.maxWidth,
      title = _ref.title;
  var classesBase = (0, _styles["default"])();
  var classes = classesProps || classesBase;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_style["default"], {
    id: "775442319",
    dynamic: [css]
  }, [".__jsx-style-dynamic-selector{".concat(css, ";}"), ".container.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}"]), /*#__PURE__*/React.createElement("div", {
    className: _style["default"].dynamic([["775442319", [css]]]) + " " + "container"
  }, Icon && /*#__PURE__*/React.createElement(Icon, {
    classes: {
      root: (0, _clsx["default"])(classes.iconRoot)
    },
    color: "disabled",
    titleAccess: title,
    className: _style["default"].dynamic([["775442319", [css]]])
  }), title && /*#__PURE__*/React.createElement(_Grid["default"], {
    alignItems: "center",
    classes: {
      container: (0, _clsx["default"])(classes.titleGridContainer)
    },
    container: true,
    justify: "center"
  }, /*#__PURE__*/React.createElement(_Grid["default"], {
    classes: {
      item: classes.titleGridItem
    },
    item: true
  }, /*#__PURE__*/React.createElement(_Typography["default"], {
    align: "center",
    variant: "h6"
  }, title))), description && /*#__PURE__*/React.createElement(_Typography["default"], {
    align: "center",
    classes: {
      root: (0, _clsx["default"])(classes.descriptionRoot, !title && classes.descriptionRootWithoutTitle)
    },
    style: {
      maxWidth: maxWidth
    },
    variant: "body1"
  }, description), buttonProps && /*#__PURE__*/React.createElement(Button, _extends({}, buttonProps, {
    className: _style["default"].dynamic([["775442319", [css]]]) + " " + (buttonProps && buttonProps.className != null && buttonProps.className || "")
  }))));
};

var _default = EmptyStateBase;
exports["default"] = _default;