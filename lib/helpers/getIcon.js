"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _constant = _interopRequireDefault(require("lodash/constant"));

var _CloudDownload = _interopRequireDefault(require("@material-ui/icons/CloudDownload"));

var _KeyboardArrowDown = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDown"));

var _KeyboardArrowLeft = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowLeft"));

var _KeyboardArrowRight = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowRight"));

var _KeyboardArrowUp = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowUp"));

var _Sync = _interopRequireDefault(require("@material-ui/icons/Sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @prettier
 */
var getIcon = function getIcon(selector) {
  switch (selector) {
    case 'general.arrow.down':
      return _KeyboardArrowDown["default"];

    case 'general.arrow.left':
      return _KeyboardArrowLeft["default"];

    case 'general.arrow.right':
      return _KeyboardArrowRight["default"];

    case 'general.arrow.up':
      return _KeyboardArrowUp["default"];

    case 'general.download':
      return _CloudDownload["default"];

    case 'general.refresh':
      return _Sync["default"];

    default:
      return (0, _constant["default"])( /*#__PURE__*/React.createElement("div", null, "?"));
  }
};

var _default = getIcon;
exports["default"] = _default;