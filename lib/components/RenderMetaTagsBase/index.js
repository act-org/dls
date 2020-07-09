"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @prettier
 */
var RenderMetaTagsBase = function RenderMetaTagsBase(_ref) {
  var description = _ref.description,
      imageUrl = _ref.imageUrl,
      keywords = _ref.keywords,
      noIndex = _ref.noIndex,
      title = _ref.title,
      Wrapper = _ref.Wrapper;
  var children = /*#__PURE__*/React.createElement(React.Fragment, null, description && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("meta", {
    content: description,
    name: "description"
  }), /*#__PURE__*/React.createElement("meta", {
    content: description,
    property: "og:description"
  }), /*#__PURE__*/React.createElement("meta", {
    content: description,
    name: "twitter:text:description"
  })), imageUrl && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("meta", {
    content: imageUrl,
    property: "og:image"
  }), /*#__PURE__*/React.createElement("meta", {
    content: imageUrl,
    name: "twitter:image"
  })), keywords && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("meta", {
    content: keywords.toString(),
    name: "keywords"
  })), title && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("title", {
    itemProp: "name",
    lang: "en"
  }, title), /*#__PURE__*/React.createElement("meta", {
    content: title,
    property: "og:title"
  }), /*#__PURE__*/React.createElement("meta", {
    content: title,
    name: "twitter:title"
  })), noIndex && /*#__PURE__*/React.createElement("meta", {
    content: "noindex,follow",
    name: "robots"
  }));

  if (Wrapper) {
    return Wrapper(children);
  }

  return children;
};

var _default = RenderMetaTagsBase;
exports["default"] = _default;