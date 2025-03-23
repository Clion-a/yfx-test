(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/demos/test.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/demos/test.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contracts_methods_uniNftManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/contracts/methods/uniNftManager */ "./src/contracts/methods/uniNftManager.js");
/* harmony import */ var _contracts_methods_erc20__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contracts/methods/erc20 */ "./src/contracts/methods/erc20.js");
/* harmony import */ var _components_header_Header_pc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/header/Header_pc */ "./src/components/header/Header_pc.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Header: _components_header_Header_pc__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data() {
    return {
      input: null,
      token0: '0x205f320eEB6826593fc6b1Be7B0107698D99CdD2',
      token1: '0x418bF7eD79CEc7388926f4bE101D21DDFB82c7E5',
      nftManager: '0x50ba95D2377A94dadb870291Ed84D4839446C3Ed'
    };
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])({
      userAddress: state => state.accounts
    })
  },
  async mounted() {},
  methods: {
    async approve(token) {
      await Object(_contracts_methods_erc20__WEBPACK_IMPORTED_MODULE_1__["approve"])(token, this.nftManager);
    },
    async onAdd() {
      const data = {
        'token0': this.token0,
        'token1': this.token1,
        'fee': '500',
        'tickLower': '-887270',
        'tickUpper': '887270',
        'amount0Desired': bignumber_js__WEBPACK_IMPORTED_MODULE_4___default()(this.input).multipliedBy(new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(10).pow(18)).toFixed(),
        'amount1Desired': bignumber_js__WEBPACK_IMPORTED_MODULE_4___default()(this.input).multipliedBy(new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(10).pow(18)).toFixed(),
        'amount0Min': '0',
        'amount1Min': '0',
        'recipient': this.userAddress,
        'deadline': '10000000000000'
      };
      console.log(data, "mint");
      await Object(_contracts_methods_uniNftManager__WEBPACK_IMPORTED_MODULE_0__["mint"])(data);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4b4af266-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/demos/test.vue?vue&type=template&id=5987816b&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4b4af266-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/demos/test.vue?vue&type=template&id=5987816b&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("Header"), _c("h1", {
    staticStyle: {
      color: "#FFF"
    }
  }, [_vm._v("Token0: USDC "), _c("el-button", {
    on: {
      click: function ($event) {
        return _vm.approve(_vm.token0);
      }
    }
  }, [_vm._v("Approve")])], 1), _c("h1", {
    staticStyle: {
      color: "#FFF"
    }
  }, [_vm._v("Token1: YFX "), _c("el-button", {
    on: {
      click: function ($event) {
        return _vm.approve(_vm.token1);
      }
    }
  }, [_vm._v("Approve")])], 1), _c("h1", {
    staticStyle: {
      color: "#FFF"
    }
  }, [_vm._v("Input: ")]), _c("el-input", {
    model: {
      value: _vm.input,
      callback: function ($$v) {
        _vm.input = $$v;
      },
      expression: "input"
    }
  }), _c("el-button", {
    on: {
      click: _vm.onAdd
    }
  }, [_vm._v("Add Liquidity")])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


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

/***/ }),

/***/ "./src/views/demos/test.vue":
/*!**********************************!*\
  !*** ./src/views/demos/test.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test_vue_vue_type_template_id_5987816b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.vue?vue&type=template&id=5987816b&scoped=true */ "./src/views/demos/test.vue?vue&type=template&id=5987816b&scoped=true");
/* harmony import */ var _test_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.vue?vue&type=script&lang=js */ "./src/views/demos/test.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _test_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _test_vue_vue_type_template_id_5987816b_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _test_vue_vue_type_template_id_5987816b_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5987816b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/demos/test.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/demos/test.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/views/demos/test.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./test.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/demos/test.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/demos/test.vue?vue&type=template&id=5987816b&scoped=true":
/*!****************************************************************************!*\
  !*** ./src/views/demos/test.vue?vue&type=template&id=5987816b&scoped=true ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4b4af266_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_template_id_5987816b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4b4af266-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./test.vue?vue&type=template&id=5987816b&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4b4af266-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/demos/test.vue?vue&type=template&id=5987816b&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4b4af266_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_template_id_5987816b_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4b4af266_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_template_id_5987816b_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);