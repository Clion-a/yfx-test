(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/isows/_esm/native.js":
/*!*******************************************!*\
  !*** ./node_modules/isows/_esm/native.js ***!
  \*******************************************/
/*! exports provided: WebSocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocket", function() { return WebSocket; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/isows/_esm/utils.js");

const WebSocket = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getNativeWebSocket"])();
//# sourceMappingURL=native.js.map

/***/ }),

/***/ "./node_modules/isows/_esm/utils.js":
/*!******************************************!*\
  !*** ./node_modules/isows/_esm/utils.js ***!
  \******************************************/
/*! exports provided: getNativeWebSocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNativeWebSocket", function() { return getNativeWebSocket; });
function getNativeWebSocket() {
    if (typeof WebSocket !== "undefined")
        return WebSocket;
    if (typeof global.WebSocket !== "undefined")
        return global.WebSocket;
    if (typeof window.WebSocket !== "undefined")
        return window.WebSocket;
    if (typeof self.WebSocket !== "undefined")
        return self.WebSocket;
    throw new Error("`WebSocket` is not supported in this environment");
}
//# sourceMappingURL=utils.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);