"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _clsx = _interopRequireDefault(require("clsx"));

var _mergeWith = _interopRequireDefault(require("lodash/mergeWith"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
var mergeClasses = function mergeClasses(classes1, classes2) {
  return (0, _mergeWith["default"])(classes1 || {}, classes2 || {}, function (className1, className2) {
    return (0, _clsx["default"])(className1, className2);
  });
};

var _default = mergeClasses;
exports["default"] = _default;