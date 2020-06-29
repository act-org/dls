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

var _isString = _interopRequireDefault(require("lodash/isString"));

var _ButtonPrimary = _interopRequireDefault(require("../ButtonPrimary"));

var _styles = _interopRequireDefault(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var EmptyStatePrimary = function EmptyStatePrimary(_ref) {
  var buttonProps = _ref.buttonProps,
      description = _ref.description,
      Icon = _ref.Icon,
      style = _ref.style,
      title = _ref.title;
  var classes = (0, _styles["default"])();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_style["default"], {
    id: "1627717759"
  }, [".container.jsx-1627717759{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}"]), /*#__PURE__*/React.createElement("div", {
    style: style,
    className: "jsx-1627717759" + " " + "container"
  }, Icon && /*#__PURE__*/React.createElement(Icon, {
    classes: {
      root: (0, _clsx["default"])(classes.iconRoot)
    },
    color: "disabled",
    titleAccess: (0, _isString["default"])(title) ? title : undefined,
    className: "jsx-1627717759"
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
    variant: "body1"
  }, description), buttonProps && /*#__PURE__*/React.createElement(_ButtonPrimary["default"], buttonProps)));
};

var _default = EmptyStatePrimary;
exports["default"] = _default;