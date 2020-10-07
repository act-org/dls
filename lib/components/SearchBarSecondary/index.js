"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _get = _interopRequireDefault(require("lodash/get"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _OutlinedInput = _interopRequireDefault(require("@material-ui/core/OutlinedInput"));

var _CloseCircle = _interopRequireDefault(require("../../icons/CloseCircle"));

var _Magnify = _interopRequireDefault(require("../../icons/Magnify"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SearchBarSecondary = function SearchBarSecondary(_ref) {
  var classesProp = _ref.classes,
      onChange = _ref.onChange,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'default' : _ref$size,
      value = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["classes", "onChange", "size", "value"]);

  var shouldHideCloseButton = !value;
  var classes = (0, _styles["default"])();
  return /*#__PURE__*/React.createElement(_OutlinedInput["default"], _extends({
    classes: _objectSpread({
      notchedOutline: (0, _clsx["default"])(classes.outlinedInputNotchedOutlined, (0, _get["default"])(classesProp, 'notchedOutline')),
      root: (0, _clsx["default"])(classes.outlinedInputRoot, classes[size], (0, _get["default"])(classesProp, 'root'))
    }, (0, _omit["default"])(classesProp, ['notchedOutline', 'root']) || {}),
    endAdornment: /*#__PURE__*/React.createElement(_InputAdornment["default"], {
      classes: {
        root: (0, _clsx["default"])(classes.iconClose, shouldHideCloseButton && classes.iconCloseHidden)
      },
      position: "end"
    }, /*#__PURE__*/React.createElement(_IconButton["default"], {
      "aria-label": "Clear",
      onClick: function onClick(e) {
        if (onChange) {
          onChange(_objectSpread(_objectSpread({}, e), {}, {
            target: _objectSpread(_objectSpread({}, e.target), {}, {
              value: ''
            })
          }));
        }
      }
    }, /*#__PURE__*/React.createElement(_CloseCircle["default"], {
      fontSize: "small"
    }))),
    inputProps: {
      'aria-label': 'Search'
    },
    onChange: onChange,
    startAdornment: /*#__PURE__*/React.createElement(_InputAdornment["default"], {
      classes: {
        root: classes.inputAdornmentRoot
      },
      position: "start"
    }, /*#__PURE__*/React.createElement(_Magnify["default"], null)),
    value: value
  }, otherProps));
}; // eslint-disable-next-line immutable/no-mutation


SearchBarSecondary.defaultProps = {
  size: 'default'
};
var _default = SearchBarSecondary;
exports["default"] = _default;