"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mdiMaterialUi = require("mdi-material-ui");

Object.keys(_mdiMaterialUi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mdiMaterialUi[key];
    }
  });
});