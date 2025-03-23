(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/tradeLoading/index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/tradeLoading/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    info: {
      type: String
    },
    w: {
      type: Number,
      default: 20
    },
    h: {
      type: Number,
      default: 20
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/trade/setBtns.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/trade/setBtns.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: {
    num: {
      type: Number,
      default: () => 2
    },
    confirmBtn: {
      type: String,
      default: '确认'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleClose() {
      this.$emit('setClose');
    },
    handleConfirm() {
      this.$emit('setConfirm');
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"23743ea2-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/tradeLoading/index.vue?vue&type=template&id=3664367f&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23743ea2-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/tradeLoading/index.vue?vue&type=template&id=3664367f&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "loading-box"
  }, [_c("div", [_c("svg", {
    staticStyle: {
      margin: "auto",
      background: "none",
      display: "block"
    },
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: `${_vm.w}px`,
      height: `${_vm.h}px`,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid"
    }
  }, [_c("g", {
    attrs: {
      transform: "rotate(180 50 50)"
    }
  }, [_c("rect", {
    attrs: {
      x: "14",
      y: "15",
      width: "12",
      height: "40",
      fill: "#f7a602"
    }
  }, [_c("animate", {
    attrs: {
      attributeName: "height",
      values: "50;70;30;50",
      keyTimes: "0;0.33;0.66;1",
      dur: "1s",
      repeatCount: "indefinite",
      calcMode: "spline",
      keySplines: "0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1",
      begin: "-0.4s"
    }
  })]), _c("rect", {
    attrs: {
      x: "34",
      y: "15",
      width: "12",
      height: "40",
      fill: "#f7a602"
    }
  }, [_c("animate", {
    attrs: {
      attributeName: "height",
      values: "50;70;30;50",
      keyTimes: "0;0.33;0.66;1",
      dur: "1s",
      repeatCount: "indefinite",
      calcMode: "spline",
      keySplines: "0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1",
      begin: "-0.2s"
    }
  })]), _c("rect", {
    attrs: {
      x: "54",
      y: "15",
      width: "12",
      height: "40",
      fill: "#f7a602"
    }
  }, [_c("animate", {
    attrs: {
      attributeName: "height",
      values: "50;70;30;50",
      keyTimes: "0;0.33;0.66;1",
      dur: "1s",
      repeatCount: "indefinite",
      calcMode: "spline",
      keySplines: "0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1",
      begin: "-0.6s"
    }
  })]), _c("rect", {
    attrs: {
      x: "74",
      y: "15",
      width: "12",
      height: "40",
      fill: "#f7a602"
    }
  }, [_c("animate", {
    attrs: {
      attributeName: "height",
      values: "50;70;30;50",
      keyTimes: "0;0.33;0.66;1",
      dur: "1s",
      repeatCount: "indefinite",
      calcMode: "spline",
      keySplines: "0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1",
      begin: "-1s"
    }
  })])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"23743ea2-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/trade/setBtns.vue?vue&type=template&id=74d2648e&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23743ea2-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/trade/setBtns.vue?vue&type=template&id=74d2648e&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "set-btns"
  }, [_vm.num == 2 ? _c("van-button", {
    staticClass: "cancle-btn",
    on: {
      click: _vm.handleClose
    }
  }, [_vm._v(_vm._s(_vm.$t("common.cancel")))]) : _vm._e(), _c("van-button", {
    attrs: {
      disabled: _vm.disabled
    },
    on: {
      click: _vm.handleConfirm
    }
  }, [_vm._v(_vm._s(_vm.confirmBtn))])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/tradeLoading/index.vue?vue&type=style&index=0&id=3664367f&lang=less&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/tradeLoading/index.vue?vue&type=style&index=0&id=3664367f&lang=less&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".loading-box[data-v-3664367f] {\n  width: auto;\n  display: flex;\n  align-items: center;\n}\n.loading-box[data-v-3664367f] .el-loading-spinner i {\n  color: #f7a600;\n  font-size: 18px;\n}\n.loading-box .loading-font[data-v-3664367f] {\n  display: block;\n  color: #f7a600;\n  margin: -17px 0 0 24px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/trade/setBtns.vue?vue&type=style&index=0&id=74d2648e&scoped=true&lang=less":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/trade/setBtns.vue?vue&type=style&index=0&id=74d2648e&scoped=true&lang=less ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/**.set-btns */\n.set-btns[data-v-74d2648e] {\n  display: flex;\n}\n.set-btns button[data-v-74d2648e] {\n  flex: 1;\n  border-radius: 6px;\n  font-size: 14px;\n  border: 0;\n  height: 40px;\n  font-weight: 700;\n  background: #f7a600;\n  color: #101014;\n}\n.set-btns button[data-v-74d2648e]:hover {\n  opacity: 0.9;\n}\n.set-btns .cancle-btn[data-v-74d2648e] {\n  margin-right: 20px;\n  background: #25262C;\n  color: #adb1b8;\n}\n.van-button--disabled[data-v-74d2648e] {\n  opacity: 0.5 !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/tradeLoading/index.vue?vue&type=style&index=0&id=3664367f&lang=less&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--11-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/tradeLoading/index.vue?vue&type=style&index=0&id=3664367f&lang=less&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--11-oneOf-1-2!../../../../node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=3664367f&lang=less&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/tradeLoading/index.vue?vue&type=style&index=0&id=3664367f&lang=less&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("c5c45c78", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/trade/setBtns.vue?vue&type=style&index=0&id=74d2648e&scoped=true&lang=less":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--11-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/trade/setBtns.vue?vue&type=style&index=0&id=74d2648e&scoped=true&lang=less ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--11-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./setBtns.vue?vue&type=style&index=0&id=74d2648e&scoped=true&lang=less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/trade/setBtns.vue?vue&type=style&index=0&id=74d2648e&scoped=true&lang=less");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7475891f", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/common/tradeLoading/index.vue":
/*!******************************************************!*\
  !*** ./src/components/common/tradeLoading/index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3664367f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3664367f&scoped=true */ "./src/components/common/tradeLoading/index.vue?vue&type=template&id=3664367f&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/components/common/tradeLoading/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_3664367f_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=3664367f&lang=less&scoped=true */ "./src/components/common/tradeLoading/index.vue?vue&type=style&index=0&id=3664367f&lang=less&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3664367f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3664367f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3664367f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/common/tradeLoading/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/common/tradeLoading/index.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./src/components/common/tradeLoading/index.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/tradeLoading/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/common/tradeLoading/index.vue?vue&type=style&index=0&id=3664367f&lang=less&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./src/components/common/tradeLoading/index.vue?vue&type=style&index=0&id=3664367f&lang=less&scoped=true ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3664367f_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--11-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--11-oneOf-1-2!../../../../node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=3664367f&lang=less&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/tradeLoading/index.vue?vue&type=style&index=0&id=3664367f&lang=less&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3664367f_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3664367f_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3664367f_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3664367f_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/common/tradeLoading/index.vue?vue&type=template&id=3664367f&scoped=true":
/*!************************************************************************************************!*\
  !*** ./src/components/common/tradeLoading/index.vue?vue&type=template&id=3664367f&scoped=true ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_23743ea2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3664367f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23743ea2-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3664367f&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"23743ea2-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/tradeLoading/index.vue?vue&type=template&id=3664367f&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_23743ea2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3664367f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_23743ea2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3664367f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/trade/setBtns.vue":
/*!******************************************!*\
  !*** ./src/components/trade/setBtns.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setBtns_vue_vue_type_template_id_74d2648e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBtns.vue?vue&type=template&id=74d2648e&scoped=true */ "./src/components/trade/setBtns.vue?vue&type=template&id=74d2648e&scoped=true");
/* harmony import */ var _setBtns_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setBtns.vue?vue&type=script&lang=js */ "./src/components/trade/setBtns.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _setBtns_vue_vue_type_style_index_0_id_74d2648e_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setBtns.vue?vue&type=style&index=0&id=74d2648e&scoped=true&lang=less */ "./src/components/trade/setBtns.vue?vue&type=style&index=0&id=74d2648e&scoped=true&lang=less");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _setBtns_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _setBtns_vue_vue_type_template_id_74d2648e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _setBtns_vue_vue_type_template_id_74d2648e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "74d2648e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/trade/setBtns.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/trade/setBtns.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/components/trade/setBtns.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setBtns_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./setBtns.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/trade/setBtns.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setBtns_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/trade/setBtns.vue?vue&type=style&index=0&id=74d2648e&scoped=true&lang=less":
/*!***************************************************************************************************!*\
  !*** ./src/components/trade/setBtns.vue?vue&type=style&index=0&id=74d2648e&scoped=true&lang=less ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setBtns_vue_vue_type_style_index_0_id_74d2648e_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--11-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--11-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./setBtns.vue?vue&type=style&index=0&id=74d2648e&scoped=true&lang=less */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/trade/setBtns.vue?vue&type=style&index=0&id=74d2648e&scoped=true&lang=less");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setBtns_vue_vue_type_style_index_0_id_74d2648e_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setBtns_vue_vue_type_style_index_0_id_74d2648e_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setBtns_vue_vue_type_style_index_0_id_74d2648e_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setBtns_vue_vue_type_style_index_0_id_74d2648e_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/trade/setBtns.vue?vue&type=template&id=74d2648e&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/components/trade/setBtns.vue?vue&type=template&id=74d2648e&scoped=true ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_23743ea2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setBtns_vue_vue_type_template_id_74d2648e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23743ea2-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./setBtns.vue?vue&type=template&id=74d2648e&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"23743ea2-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/trade/setBtns.vue?vue&type=template&id=74d2648e&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_23743ea2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setBtns_vue_vue_type_template_id_74d2648e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_23743ea2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setBtns_vue_vue_type_template_id_74d2648e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/contracts/abi/erc20.json":
/*!**************************************!*\
  !*** ./src/contracts/abi/erc20.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}]");

/***/ }),

/***/ "./src/contracts/methods/erc20.js":
/*!****************************************!*\
  !*** ./src/contracts/methods/erc20.js ***!
  \****************************************/
/*! exports provided: approve, allowance, balanceOf, decimals, name */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approve", function() { return approve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowance", function() { return allowance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "balanceOf", function() { return balanceOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decimals", function() { return decimals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abi_erc20_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abi/erc20.json */ "./src/contracts/abi/erc20.json");
var _abi_erc20_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../abi/erc20.json */ "./src/contracts/abi/erc20.json", 1);
/* harmony import */ var _contractsAddress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contractsAddress */ "./src/contracts/contractsAddress.js");
/* harmony import */ var _assets_web3_getWallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/web3/getWallet */ "./src/assets/web3/getWallet.js");
/* harmony import */ var _assets_js_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/js/utils */ "./src/assets/js/utils.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.min.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);






// const alchemy = getChainInfo().alchemyRpc
// import Web3 from "web3"
// const web3AsAlchemy = new Web3(new Web3.providers.HttpProvider(alchemy));

const rpcNodes = Object(_contractsAddress__WEBPACK_IMPORTED_MODULE_2__["getChainInfo"])().rpcNodes2;

let web3AsAlchemy, web3AsAlchemy2;
function switchNode() {
  const currentNode = rpcNodes.shift(); // 获取并移除第一个节点
  rpcNodes.push(currentNode); // 将该节点添加到列表末尾，实现循环切换
  // 创建新的 Web3 实例
  web3AsAlchemy = new web3__WEBPACK_IMPORTED_MODULE_5___default.a(new web3__WEBPACK_IMPORTED_MODULE_5___default.a.providers.HttpProvider(currentNode));
}
// 初始化使用第一个节点
switchNode();
const rpcNodes3 = Object(_contractsAddress__WEBPACK_IMPORTED_MODULE_2__["getChainInfo"])().rpcNodes3;
function switchNode2() {
  const currentNode = rpcNodes3.shift(); // 获取并移除第一个节点
  rpcNodes3.push(currentNode); // 将该节点添加到列表末尾，实现循环切换
  // 创建新的 Web3 实例
  web3AsAlchemy2 = new web3__WEBPACK_IMPORTED_MODULE_5___default.a(new web3__WEBPACK_IMPORTED_MODULE_5___default.a.providers.HttpProvider(currentNode));
}
// 初始化使用第一个节点
switchNode2();

// APPROVE
const approve = async (clear_anchor_address, address) => {
  const {
    accounts,
    walletContract
  } = await Object(_assets_web3_getWallet__WEBPACK_IMPORTED_MODULE_3__["initWalletContract"])(_abi_erc20_json__WEBPACK_IMPORTED_MODULE_1__, clear_anchor_address);
  const gasPrice = await Object(_assets_web3_getWallet__WEBPACK_IMPORTED_MODULE_3__["getGasPrice"])();
  const gas = await walletContract.methods.approve(address, "100000000000000000000000000000").estimateGas({
    from: accounts
  });
  await walletContract.methods.approve(address, '100000000000000000000000000000').send({
    from: accounts,
    gas,
    gasPrice
  }).on('transactionHash', hash => {
    if (hash) {
      Object(_assets_js_utils__WEBPACK_IMPORTED_MODULE_4__["handleNotify"])(hash, 'prove');
    }
  }).then(res => {
    if (res) {
      // handleNotify(res, 'prove')
    }
  });
};

// CHECK
const allowance = async (clear_anchor_address, address) => {
  try {
    let _decimals = await decimals(clear_anchor_address);
    const {
      accounts
    } = await Object(_assets_web3_getWallet__WEBPACK_IMPORTED_MODULE_3__["initWalletContract"])(_abi_erc20_json__WEBPACK_IMPORTED_MODULE_1__, clear_anchor_address, false);
    // const web3 = new Web3(new Web3.providers.HttpProvider(rpcNodes[0]));
    // const web3 = new Web3(new Web3.providers.HttpProvider(alchemy));
    const contract = new web3AsAlchemy.eth.Contract(_abi_erc20_json__WEBPACK_IMPORTED_MODULE_1__, clear_anchor_address);
    let result = await contract.methods.allowance(accounts, address).call();
    return Object(_assets_js_utils__WEBPACK_IMPORTED_MODULE_4__["fromDecimal"])(result, _decimals);
  } catch (error) {
    switchNode();
  }
};
// GET BALANCE
/**
 * precision: 保留的小数位
 */
const balanceOf = async (clear_anchor_address, _decimals, precision, accountsDisplay = null) => {
  try {
    let clear_anchor_decimals, _accounts;
    if (clear_anchor_address) {
      if (_decimals) {
        clear_anchor_decimals = _decimals;
      } else {
        clear_anchor_decimals = await decimals(clear_anchor_address);
      }
    }
    if (!accountsDisplay) {
      const {
        accounts
      } = await Object(_assets_web3_getWallet__WEBPACK_IMPORTED_MODULE_3__["initWalletContract"])(_abi_erc20_json__WEBPACK_IMPORTED_MODULE_1__, clear_anchor_address, false);
      _accounts = accounts;
    } else {
      _accounts = accountsDisplay;
    }
    if (clear_anchor_address.toLowerCase() === Object(_contractsAddress__WEBPACK_IMPORTED_MODULE_2__["getChainInfo"])().weth.toLowerCase()) {
      const {
        web3
      } = await Object(_assets_web3_getWallet__WEBPACK_IMPORTED_MODULE_3__["initWalletContract"])();
      let result = await web3.eth.getBalance(_accounts);
      return Object(_assets_js_utils__WEBPACK_IMPORTED_MODULE_4__["fromDecimal"])(result, clear_anchor_decimals, precision);
    } else {
      // const web3 = new Web3(new Web3.providers.HttpProvider(rpcNodes[0]));
      // const web3 = new Web3(new Web3.providers.HttpProvider(alchemy));
      const contract = new web3AsAlchemy.eth.Contract(_abi_erc20_json__WEBPACK_IMPORTED_MODULE_1__, clear_anchor_address);
      let result = await contract.methods.balanceOf(_accounts).call();
      return Object(_assets_js_utils__WEBPACK_IMPORTED_MODULE_4__["fromDecimal"])(result, clear_anchor_decimals, precision);
    }
  } catch (error) {
    switchNode();
  }
};
const decimals = async clear_anchor_address => {
  try {
    // const { walletContract } = await initWalletContract(erc20ABI, clear_anchor_address)
    const contract = new web3AsAlchemy2.eth.Contract(_abi_erc20_json__WEBPACK_IMPORTED_MODULE_1__, clear_anchor_address);
    return await contract.methods.decimals().call();
  } catch (error) {
    switchNode2();
  }
};
const name = async clear_anchor_address => {
  const {
    walletContract
  } = await Object(_assets_web3_getWallet__WEBPACK_IMPORTED_MODULE_3__["initWalletContract"])(_abi_erc20_json__WEBPACK_IMPORTED_MODULE_1__, clear_anchor_address);
  return await walletContract.methods.name().call();
};

/***/ })

}]);