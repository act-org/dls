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
  var children = [];

  if (description) {
    // Search Engines
    children.push( /*#__PURE__*/React.createElement("meta", {
      content: description,
      key: "description",
      name: "description"
    })); // Facebook Open Graph

    children.push( /*#__PURE__*/React.createElement("meta", {
      content: description,
      key: "og:description",
      property: "og:description"
    })); // Twitter Cards

    children.push( /*#__PURE__*/React.createElement("meta", {
      content: description,
      key: "twitter:text:description",
      name: "twitter:text:description"
    }));
  }

  if (imageUrl) {
    // Facebook Open Graph
    children.push( /*#__PURE__*/React.createElement("meta", {
      content: imageUrl,
      key: "og:image",
      property: "og:image"
    })); // Twitter Cards

    children.push( /*#__PURE__*/React.createElement("meta", {
      content: imageUrl,
      key: "twitter:image",
      name: "twitter:image"
    }));
  }

  if (keywords) {
    // Search Engines
    children.push( /*#__PURE__*/React.createElement("meta", {
      content: keywords.toString(),
      key: "keywords",
      name: "keywords"
    }));
  }

  if (title) {
    // Browser Tab, Search Engines
    children.push( /*#__PURE__*/React.createElement("title", {
      itemProp: "name",
      key: "title",
      lang: "en"
    }, title)); // Facebook Open Graph

    children.push( /*#__PURE__*/React.createElement("meta", {
      content: title,
      key: "og:title",
      property: "og:title"
    })); // Twitter Cards

    children.push( /*#__PURE__*/React.createElement("meta", {
      content: title,
      key: "twitter:title",
      name: "twitter:title"
    }));
  }

  if (noIndex) {
    // Robots
    children.push( /*#__PURE__*/React.createElement("meta", {
      content: "noindex,follow",
      key: "robots",
      name: "robots"
    }));
  }

  if (Wrapper) {
    return Wrapper(children);
  }

  return children;
};

var _default = RenderMetaTagsBase;
exports["default"] = _default;