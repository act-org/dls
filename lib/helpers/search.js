"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _get = _interopRequireDefault(require("lodash/get"));

var _toString = _interopRequireDefault(require("lodash/toString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @prettier
 */
function search(docs, properties, value) {
  return docs.filter(function (doc) {
    return properties.some(function (property) {
      var currentValue = (0, _get["default"])(doc, property);

      if (doc !== null && currentValue !== null) {
        return (0, _toString["default"])(currentValue).toLowerCase().includes(value.trim().toLowerCase());
      }

      return false;
    });
  });
}

var _default = search;
exports["default"] = _default;