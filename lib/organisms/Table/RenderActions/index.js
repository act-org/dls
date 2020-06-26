"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _getIcon = _interopRequireDefault(require("../../../helpers/getIcon"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @prettier
 */
var RenderActions = function RenderActions(_ref) {
  var thing = _ref.thing;
  var actions = [{
    Icon: (0, _getIcon["default"])('general.download'),
    label: 'Download',
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log(thing);
    }
  }, {
    Icon: (0, _getIcon["default"])('general.refresh'),
    label: 'Regenerate',
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log(thing);
    }
  }];
  var classes = (0, _styles["default"])();
  return /*#__PURE__*/React.createElement(React.Fragment, null, actions.length > 0 && /*#__PURE__*/React.createElement(_Grid["default"], {
    container: true
  }, actions.map(function (action) {
    return /*#__PURE__*/React.createElement(_Grid["default"], {
      classes: {
        item: classes.gridItemAction
      },
      item: true,
      key: action.label
    }, /*#__PURE__*/React.createElement(_Button["default"], {
      classes: {
        root: classes.buttonRoot
      },
      onClick: action.onClick,
      variant: "outlined"
    }, /*#__PURE__*/React.createElement(action.Icon, {
      fontSize: "small"
    }), "\xA0\xA0", /*#__PURE__*/React.createElement(_Typography["default"], {
      classes: {
        root: classes.typographyRoot
      },
      variant: "body1"
    }, action.label)));
  })), actions.length === 0 && 'N/A');
};

var _default = RenderActions;
exports["default"] = _default;