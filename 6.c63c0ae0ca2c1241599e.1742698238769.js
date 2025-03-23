(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/trade/positionList/claimUTP.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/trade/positionList/claimUTP.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_trade_setBtns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/trade/setBtns */ "./src/components/trade/setBtns.vue");
/* harmony import */ var _contracts_methods_inviteManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contracts/methods/inviteManager */ "./src/contracts/methods/inviteManager.js");
/* harmony import */ var _assets_js_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/js/utils */ "./src/assets/js/utils.js");
/* harmony import */ var _contracts_contractsAddress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contracts/contractsAddress */ "./src/contracts/contractsAddress.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SetBtns: _components_trade_setBtns__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data() {
    return {
      balance: '--'
    };
  },
  mounted() {
    this.getBalanceUTP();
  },
  methods: {
    formatNumberWithCommas: _assets_js_utils__WEBPACK_IMPORTED_MODULE_2__["formatNumberWithCommas"],
    handleClose() {
      this.$emit('handleCloseClaim');
    },
    async handleConfirm() {
      let that = this;
      Object(_contracts_methods_inviteManager__WEBPACK_IMPORTED_MODULE_1__["claimTradeToken"])(that);
      this.$emit('handleCloseClaim');
    },
    openVisible() {
      this.visible = true;
    },
    getBalanceUTP() {
      Object(_contracts_methods_inviteManager__WEBPACK_IMPORTED_MODULE_1__["tradeTokenBalance"])().then(res => {
        this.balance = Object(_assets_js_utils__WEBPACK_IMPORTED_MODULE_2__["fromDecimal"])(res, Object(_contracts_contractsAddress__WEBPACK_IMPORTED_MODULE_3__["getChainInfo"])().utpDecimals, 2);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/trade/positionList/noRecord.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/trade/positionList/noRecord.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4b4af266-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/trade/positionList/claimUTP.vue?vue&type=template&id=3956f030&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4b4af266-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/trade/positionList/claimUTP.vue?vue&type=template&id=3956f030&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("p", {
    staticStyle: {
      color: "#f5455b",
      "margin-bottom": "12px"
    }
  }, [_vm._v(_vm._s(_vm.$t("trade.utpClaimTip")))]), _c("span", {
    staticClass: "num"
  }, [_vm._v(_vm._s(_vm.$t("earn.claimable")) + ": "), _c("span", [_vm._v(_vm._s(_vm.formatNumberWithCommas(_vm.balance, 2)) + " UTP")])]), _c("div", {
    staticClass: "set-btns"
  }, [_c("van-button", {
    staticClass: "cancle-btn",
    on: {
      click: _vm.handleClose
    }
  }, [_vm._v(_vm._s(_vm.$t("common.cancel")))]), _vm.balance > 0 ? _c("van-button", {
    on: {
      click: _vm.handleConfirm
    }
  }, [_vm._v(_vm._s(_vm.$t("referrals.confirmBtn")))]) : _c("van-button", {
    attrs: {
      disabled: true
    }
  }, [_vm._v(_vm._s(_vm.$t("referrals.confirmBtn")))])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4b4af266-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/trade/positionList/noRecord.vue?vue&type=template&id=4bb249f6&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4b4af266-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/trade/positionList/noRecord.vue?vue&type=template&id=4bb249f6&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "no-record"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../../../assets/image/common/no-record.svg */ "./src/assets/image/common/no-record.svg"),
      alt: ""
    }
  }), _c("p", [_vm._v(_vm._s(_vm.$t("referrals.noDataAvailable")))])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/trade/positionList/claimUTP.vue?vue&type=style&index=0&id=3956f030&lang=less&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/trade/positionList/claimUTP.vue?vue&type=style&index=0&id=3956f030&lang=less&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".num[data-v-3956f030] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.num span[data-v-3956f030] {\n  color: white;\n  margin-left: 10px;\n}\n.set-btns[data-v-3956f030] {\n  margin-top: 18px;\n  display: flex;\n}\n.set-btns button[data-v-3956f030] {\n  flex: 1;\n  border-radius: 6px;\n  font-size: 14px;\n  border: 0;\n  height: 40px;\n  font-weight: 700;\n  background: #f7a600;\n  color: #101014;\n}\n.set-btns button[data-v-3956f030]:hover {\n  opacity: 0.9;\n}\n.set-btns .cancle-btn[data-v-3956f030] {\n  margin-right: 20px;\n  background: #2b2d34;\n  color: #adb1b8;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/trade/positionList/noRecord.vue?vue&type=style&index=0&id=4bb249f6&lang=less&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/trade/positionList/noRecord.vue?vue&type=style&index=0&id=4bb249f6&lang=less&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".no-record[data-v-4bb249f6] {\n  width: 100%;\n  text-align: center;\n  margin-top: 85px;\n  padding-bottom: 85px;\n}\n.no-record p[data-v-4bb249f6] {\n  color: #71757A;\n  font-size: 13px;\n  margin-top: 14px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/trade/positionList/claimUTP.vue?vue&type=style&index=0&id=3956f030&lang=less&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--11-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/trade/positionList/claimUTP.vue?vue&type=style&index=0&id=3956f030&lang=less&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--11-oneOf-1-2!../../../../node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./claimUTP.vue?vue&type=style&index=0&id=3956f030&lang=less&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/trade/positionList/claimUTP.vue?vue&type=style&index=0&id=3956f030&lang=less&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("20690a9d", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/trade/positionList/noRecord.vue?vue&type=style&index=0&id=4bb249f6&lang=less&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--11-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/trade/positionList/noRecord.vue?vue&type=style&index=0&id=4bb249f6&lang=less&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--11-oneOf-1-2!../../../../node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./noRecord.vue?vue&type=style&index=0&id=4bb249f6&lang=less&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/trade/positionList/noRecord.vue?vue&type=style&index=0&id=4bb249f6&lang=less&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5c0725bc", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/trade/positionList/claimUTP.vue":
/*!***************************************************!*\
  !*** ./src/views/trade/positionList/claimUTP.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claimUTP_vue_vue_type_template_id_3956f030_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claimUTP.vue?vue&type=template&id=3956f030&scoped=true */ "./src/views/trade/positionList/claimUTP.vue?vue&type=template&id=3956f030&scoped=true");
/* harmony import */ var _claimUTP_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claimUTP.vue?vue&type=script&lang=js */ "./src/views/trade/positionList/claimUTP.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _claimUTP_vue_vue_type_style_index_0_id_3956f030_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./claimUTP.vue?vue&type=style&index=0&id=3956f030&lang=less&scoped=true */ "./src/views/trade/positionList/claimUTP.vue?vue&type=style&index=0&id=3956f030&lang=less&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _claimUTP_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _claimUTP_vue_vue_type_template_id_3956f030_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _claimUTP_vue_vue_type_template_id_3956f030_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3956f030",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/trade/positionList/claimUTP.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/trade/positionList/claimUTP.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./src/views/trade/positionList/claimUTP.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_claimUTP_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./claimUTP.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/trade/positionList/claimUTP.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_claimUTP_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/trade/positionList/claimUTP.vue?vue&type=style&index=0&id=3956f030&lang=less&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./src/views/trade/positionList/claimUTP.vue?vue&type=style&index=0&id=3956f030&lang=less&scoped=true ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_claimUTP_vue_vue_type_style_index_0_id_3956f030_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--11-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--11-oneOf-1-2!../../../../node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./claimUTP.vue?vue&type=style&index=0&id=3956f030&lang=less&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/trade/positionList/claimUTP.vue?vue&type=style&index=0&id=3956f030&lang=less&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_claimUTP_vue_vue_type_style_index_0_id_3956f030_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_claimUTP_vue_vue_type_style_index_0_id_3956f030_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_claimUTP_vue_vue_type_style_index_0_id_3956f030_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_claimUTP_vue_vue_type_style_index_0_id_3956f030_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/trade/positionList/claimUTP.vue?vue&type=template&id=3956f030&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./src/views/trade/positionList/claimUTP.vue?vue&type=template&id=3956f030&scoped=true ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4b4af266_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_claimUTP_vue_vue_type_template_id_3956f030_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4b4af266-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./claimUTP.vue?vue&type=template&id=3956f030&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4b4af266-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/trade/positionList/claimUTP.vue?vue&type=template&id=3956f030&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4b4af266_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_claimUTP_vue_vue_type_template_id_3956f030_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4b4af266_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_claimUTP_vue_vue_type_template_id_3956f030_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/trade/positionList/noRecord.vue":
/*!***************************************************!*\
  !*** ./src/views/trade/positionList/noRecord.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noRecord_vue_vue_type_template_id_4bb249f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noRecord.vue?vue&type=template&id=4bb249f6&scoped=true */ "./src/views/trade/positionList/noRecord.vue?vue&type=template&id=4bb249f6&scoped=true");
/* harmony import */ var _noRecord_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noRecord.vue?vue&type=script&lang=js */ "./src/views/trade/positionList/noRecord.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _noRecord_vue_vue_type_style_index_0_id_4bb249f6_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noRecord.vue?vue&type=style&index=0&id=4bb249f6&lang=less&scoped=true */ "./src/views/trade/positionList/noRecord.vue?vue&type=style&index=0&id=4bb249f6&lang=less&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _noRecord_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _noRecord_vue_vue_type_template_id_4bb249f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _noRecord_vue_vue_type_template_id_4bb249f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4bb249f6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/trade/positionList/noRecord.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/trade/positionList/noRecord.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./src/views/trade/positionList/noRecord.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_noRecord_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./noRecord.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/trade/positionList/noRecord.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_noRecord_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/trade/positionList/noRecord.vue?vue&type=style&index=0&id=4bb249f6&lang=less&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./src/views/trade/positionList/noRecord.vue?vue&type=style&index=0&id=4bb249f6&lang=less&scoped=true ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_noRecord_vue_vue_type_style_index_0_id_4bb249f6_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--11-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--11-oneOf-1-2!../../../../node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./noRecord.vue?vue&type=style&index=0&id=4bb249f6&lang=less&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/trade/positionList/noRecord.vue?vue&type=style&index=0&id=4bb249f6&lang=less&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_noRecord_vue_vue_type_style_index_0_id_4bb249f6_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_noRecord_vue_vue_type_style_index_0_id_4bb249f6_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_noRecord_vue_vue_type_style_index_0_id_4bb249f6_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_noRecord_vue_vue_type_style_index_0_id_4bb249f6_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/trade/positionList/noRecord.vue?vue&type=template&id=4bb249f6&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./src/views/trade/positionList/noRecord.vue?vue&type=template&id=4bb249f6&scoped=true ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4b4af266_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_noRecord_vue_vue_type_template_id_4bb249f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4b4af266-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./noRecord.vue?vue&type=template&id=4bb249f6&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4b4af266-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/trade/positionList/noRecord.vue?vue&type=template&id=4bb249f6&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4b4af266_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_noRecord_vue_vue_type_template_id_4bb249f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4b4af266_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_noRecord_vue_vue_type_template_id_4bb249f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);