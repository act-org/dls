"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(path) {
  var Icon = _react["default"].memo(_react["default"].forwardRef(function (props, ref) {
    return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], _extends({}, props, {
      ref: ref
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: path
    }));
  }));

  Icon.muiName = 'SvgIcon';
  return Icon;
};

exports["default"] = _default;