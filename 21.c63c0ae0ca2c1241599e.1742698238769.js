(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/connectWallet/index.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/connectWallet/index.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _contracts_contractsAddress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contracts/contractsAddress */ "./src/contracts/contractsAddress.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../main */ "./src/main.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      chainId: null
    };
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
      userAddress: state => state.accounts,
      currentChainId: state => state.currentChainId
    })
  },
  mounted() {
    this.chainId = Object(_contracts_contractsAddress__WEBPACK_IMPORTED_MODULE_1__["getChainInfo"])().rpcId;
  },
  methods: {
    modalOpen() {
      _main__WEBPACK_IMPORTED_MODULE_2__["modal"].open();
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auction/index.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/auction/index.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_common_connectWallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/connectWallet */ "./src/components/common/connectWallet/index.vue");
/* harmony import */ var _assets_js_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/js/utils */ "./src/assets/js/utils.js");
/* harmony import */ var _contracts_contractsAddress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contracts/contractsAddress */ "./src/contracts/contractsAddress.js");
/* harmony import */ var _contracts_methods_auction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contracts/methods/auction.js */ "./src/contracts/methods/auction.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ConnectWallet: _components_common_connectWallet__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  name: 'YFXDutchAuction',
  data() {
    return {
      chainId: null,
      isLoading: false,
      blockBrowser: null,
      // Auction details
      startPrice: null,
      endPrice: null,
      startTime: null,
      endTime: null,
      // endTime: new Date('2025-03-22T09:52:00Z').getTime(),

      auctionTime: null,
      buyer: null,
      // Current state
      currentPrice: null,
      currentTime: Date.now(),
      isStarted: false,
      isEnded: false,
      isSuccess: false,
      auctionPrice: null,
      // Countdown
      countdown: {
        days: '10',
        hours: '05',
        minutes: '04',
        seconds: '03'
      },
      // Timers
      countdownTimer: null,
      priceUpdateTimer: null
    };
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
      currentChainId: state => state.currentChainId,
      userAddress: state => state.accounts
    }),
    // Calculate price progress percentage
    priceProgress() {
      if (this.currentPrice) {
        const totalDrop = this.startPrice - this.endPrice;
        const currentDrop = this.startPrice - parseFloat(this.currentPrice);
        return currentDrop / totalDrop * 100;
      }
    },
    // Dynamic progress bar color
    progressColor() {
      return [{
        color: '#F7A600',
        percentage: 20
      }, {
        color: '#F7A600',
        percentage: 50
      }, {
        color: '#F7A600',
        percentage: 100
      }];
    }
  },
  mounted() {
    this.chainId = Object(_contracts_contractsAddress__WEBPACK_IMPORTED_MODULE_3__["getChainInfo"])().rpcId;
    this.getInfo();
    this.blockBrowser = Object(_contracts_contractsAddress__WEBPACK_IMPORTED_MODULE_3__["getChainInfo"])().blockBrowser;
    // Start countdown timer
    this.updateCountdown();
    this.countdownTimer = setInterval(this.updateCountdown, 1000);

    // Start price update timer
    this.updateCurrentPrice();
    this.priceUpdateTimer = setInterval(this.updateCurrentPrice, 5000);
  },
  beforeDestroy() {
    // Clear timers
    clearInterval(this.countdownTimer);
    clearInterval(this.priceUpdateTimer);
  },
  methods: {
    subAddress: _assets_js_utils__WEBPACK_IMPORTED_MODULE_2__["subAddress"],
    formatNumberWithCommas: _assets_js_utils__WEBPACK_IMPORTED_MODULE_2__["formatNumberWithCommas"],
    formatTimestampToUTC: _assets_js_utils__WEBPACK_IMPORTED_MODULE_2__["formatTimestampToUTC"],
    getInfo() {
      Object(_contracts_methods_auction_js__WEBPACK_IMPORTED_MODULE_4__["getStartPrice"])().then(res => {
        this.startPrice = Object(_assets_js_utils__WEBPACK_IMPORTED_MODULE_2__["fromDecimal"])(res, 18);
      });
      Object(_contracts_methods_auction_js__WEBPACK_IMPORTED_MODULE_4__["getEndPrice"])().then(res => {
        this.endPrice = Object(_assets_js_utils__WEBPACK_IMPORTED_MODULE_2__["fromDecimal"])(res, 18);
      });
      Object(_contracts_methods_auction_js__WEBPACK_IMPORTED_MODULE_4__["getStartTime"])().then(res => {
        this.startTime = res * 1000;
        // this.startTime = 1742553600000
        this.currentTime = Date.now();
        if (this.currentTime >= this.startTime) {
          this.isStarted = true;
        }
      });
      Object(_contracts_methods_auction_js__WEBPACK_IMPORTED_MODULE_4__["getEndTime"])().then(res => {
        this.endTime = res * 1000;
        // this.endTime = 1742553760000
        this.currentTime = Date.now();
        if (this.currentTime >= this.endTime) {
          this.isEnded = true;
        }
      });
    },
    async getAuctionTime() {
      this.auctionTime = (await Object(_contracts_methods_auction_js__WEBPACK_IMPORTED_MODULE_4__["getAuctionTime"])()) * 1000;
    },
    async getBuyer() {
      this.buyer = await Object(_contracts_methods_auction_js__WEBPACK_IMPORTED_MODULE_4__["getBuyer"])();
    },
    async getIsEnded() {
      const res = await Object(_contracts_methods_auction_js__WEBPACK_IMPORTED_MODULE_4__["isAuctionSuccess"])();
      this.isSuccess = res;
      if (res) {
        this.getAuctionPrice();
        this.getAuctionTime();
        this.getBuyer();
      } else {
        this.getCurrentPrice();
      }
    },
    async getAuctionPrice() {
      const res = await Object(_contracts_methods_auction_js__WEBPACK_IMPORTED_MODULE_4__["getAuctionPrice"])();
      this.auctionPrice = Object(_assets_js_utils__WEBPACK_IMPORTED_MODULE_2__["fromDecimal"])(res, 18);
    },
    async getCurrentPrice() {
      const res = await Object(_contracts_methods_auction_js__WEBPACK_IMPORTED_MODULE_4__["getCurrentPrice"])();
      this.currentPrice = Object(_assets_js_utils__WEBPACK_IMPORTED_MODULE_2__["fromDecimal"])(res, 18);
    },
    // Update countdown timer
    updateCountdown() {
      if (!this.startTime || !this.endTime) {
        this.countdown = {
          days: '--',
          hours: '--',
          minutes: '--',
          seconds: '--'
        };
        return;
      }
      const now = Date.now();
      if (this.isEnded) return;
      let targetTime = this.isStarted ? this.endTime : this.startTime;
      let timeLeft = targetTime - now;
      if (timeLeft <= 0) {
        if (!this.isStarted) {
          // Auction has started
          this.isStarted = true;
          // Now count down to end time
          timeLeft = this.endTime - now;
        } else {
          // Auction has ended
          this.isEnded = true;
          timeLeft = 0;
          clearInterval(this.countdownTimer);
          clearInterval(this.priceUpdateTimer);
          this.currentPrice = this.endPrice;
        }
      }

      // Calculate days, hours, minutes, seconds
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(timeLeft % (1000 * 60) / 1000);

      // Update countdown object
      this.countdown = {
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      };
    },
    // Update current price
    updateCurrentPrice() {
      this.getIsEnded();
    },
    // Place bid
    async placeBid() {
      this.isLoading = true;
      let ethAmount = await Object(_contracts_methods_auction_js__WEBPACK_IMPORTED_MODULE_4__["getCurrentPrice"])();
      ethAmount = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(ethAmount).multipliedBy(1.05).toFixed(0);
      await Object(_contracts_methods_auction_js__WEBPACK_IMPORTED_MODULE_4__["auction"])(ethAmount, this);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4b4af266-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/connectWallet/index.vue?vue&type=template&id=7ecac032&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4b4af266-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/connectWallet/index.vue?vue&type=template&id=7ecac032&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [!_vm.userAddress ? _c("van-button", {
    staticClass: "btn",
    on: {
      click: _vm.modalOpen
    }
  }, [_vm._v(_vm._s(_vm.$t("common.connectWallet")))]) : parseFloat(_vm.chainId) !== parseFloat(_vm.currentChainId) ? _c("van-button", {
    staticClass: "btn",
    on: {
      click: _vm.modalOpen
    }
  }, [_vm._v("Switch Network")]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4b4af266-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auction/index.vue?vue&type=template&id=15ef635c&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4b4af266-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/auction/index.vue?vue&type=template&id=15ef635c&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "auction-container"
  }, [_c("div", {
    staticClass: "auction-header"
  }, [_c("h1", [_vm._v("YFX Dutch Auction(Arbitrum)")]), !_vm.isSuccess ? _c("el-button", {
    class: ["status-button", _vm.isEnded ? "status-ended" : _vm.isStarted ? "status-active" : "status-pending"]
  }, [_vm._v(" " + _vm._s(_vm.isEnded ? _vm.$t("earn.ended") : _vm.isStarted ? _vm.$t("earn.processing") : _vm.$t("earn.openSoon")) + " ")]) : _c("el-button", {
    staticClass: "status-success status-button"
  }, [_vm._v(" " + _vm._s(_vm.$t("auction.auctionSuccessful")) + " ")]), _c("a", {
    staticClass: "rules-link",
    attrs: {
      href: "#"
    }
  }, [_vm._v(_vm._s(_vm.$t("mining.lk_Detail")))])], 1), !_vm.isSuccess ? _c("div", [!_vm.isEnded ? _c("div", {
    staticClass: "countdown-section"
  }, [_c("p", {
    staticClass: "countdown-label"
  }, [_vm._v(_vm._s(_vm.isStarted ? _vm.$t("auction.distanceEnd") : _vm.$t("auction.distanceStarts")))]), _c("div", {
    staticClass: "countdown-timer"
  }, [_c("div", {
    staticClass: "time-unit"
  }, [_c("span", {
    staticClass: "time-value"
  }, [_vm._v(_vm._s(_vm.countdown.days))])]), _c("div", {
    staticClass: "time-divider"
  }, [_vm._v(":")]), _c("div", {
    staticClass: "time-unit"
  }, [_c("span", {
    staticClass: "time-value"
  }, [_vm._v(_vm._s(_vm.countdown.hours))])]), _c("div", {
    staticClass: "time-divider"
  }, [_vm._v(":")]), _c("div", {
    staticClass: "time-unit"
  }, [_c("span", {
    staticClass: "time-value"
  }, [_vm._v(_vm._s(_vm.countdown.minutes))])]), _c("div", {
    staticClass: "time-divider"
  }, [_vm._v(":")]), _c("div", {
    staticClass: "time-unit"
  }, [_c("span", {
    staticClass: "time-value"
  }, [_vm._v(_vm._s(_vm.countdown.seconds))])])])]) : _c("div", {
    staticClass: "ended-message"
  }, [_c("h3", [_vm._v(_vm._s(_vm.$t("auction.auctionDed")))])])]) : _c("div", [_c("div", {
    staticClass: "ended-message"
  }, [_c("h3", {
    staticStyle: {
      color: "#f7a600"
    }
  }, [_vm._v(_vm._s(_vm.$t("auction.auctionSuccessful")))])])]), _vm.isSuccess ? _c("div", {
    staticClass: "current-price-section current-price-section-success"
  }, [_c("div", {
    staticClass: "price-display price-label-price"
  }, [_c("p", {
    staticClass: "price-label"
  }, [_vm._v(_vm._s(_vm.$t("auction.currentPrice")) + ":")]), _c("p", {
    staticClass: "price-value",
    staticStyle: {
      "font-size": "26px!important"
    }
  }, [_vm._v(_vm._s(_vm.formatNumberWithCommas(_vm.auctionPrice, 12)) + " ETH")])]), _c("div", {
    staticClass: "price-display"
  }, [_c("p", {
    staticClass: "price-label"
  }, [_vm._v(_vm._s(_vm.$t("auction.address")) + ":")]), _c("p", {
    staticClass: "price-value"
  }, [_vm._v(_vm._s(_vm.subAddress(_vm.buyer, 4, 4)))])]), _c("div", {
    staticClass: "price-display"
  }, [_c("p", {
    staticClass: "price-label"
  }, [_vm._v(_vm._s(_vm.$t("auction.tradeTime")) + ":")]), _c("p", {
    staticClass: "price-value"
  }, [_vm._v(_vm._s(_vm.formatTimestampToUTC(_vm.auctionTime)))])])]) : _vm.isStarted && !_vm.isEnded ? _c("div", {
    staticClass: "current-price-section"
  }, [_c("div", {
    staticClass: "price-display"
  }, [_c("p", {
    staticClass: "price-label"
  }, [_vm._v(_vm._s(_vm.$t("auction.currentPrice")))]), _c("p", {
    staticClass: "price-value"
  }, [_vm._v(_vm._s(_vm.formatNumberWithCommas(_vm.currentPrice, 18)) + " ETH")])]), !_vm.userAddress || parseFloat(_vm.chainId) !== parseFloat(_vm.currentChainId) ? _c("ConnectWallet") : _c("el-button", {
    staticClass: "bid-button",
    attrs: {
      type: "primary",
      loading: _vm.isLoading
    },
    on: {
      click: _vm.placeBid
    }
  }, [_vm._v(_vm._s(_vm.$t("auction.bidNow")))])], 1) : _vm._e(), _c("div", {
    staticClass: "auction-details"
  }, [_c("div", {
    staticClass: "detail-section"
  }, [_c("div", {
    staticClass: "detail-card"
  }, [_c("div", {
    staticClass: "detail-item"
  }, [_c("p", {
    staticClass: "detail-label"
  }, [_vm._v(_vm._s(_vm.$t("auction.startingPrice")) + ":")]), _c("p", {
    staticClass: "detail-value"
  }, [_vm._v(_vm._s(_vm.formatNumberWithCommas(_vm.startPrice, 12)) + " ETH")])]), _c("div", {
    staticClass: "detail-item"
  }, [_c("p", {
    staticClass: "detail-label"
  }, [_vm._v(_vm._s(_vm.$t("common.start")) + ":")]), _c("p", {
    staticClass: "detail-value"
  }, [_vm._v(_vm._s(_vm.formatTimestampToUTC(_vm.startTime)))])])])]), _c("div", {
    staticClass: "detail-section"
  }, [_c("div", {
    staticClass: "detail-card"
  }, [_c("div", {
    staticClass: "detail-item"
  }, [_c("p", {
    staticClass: "detail-label"
  }, [_vm._v(_vm._s(_vm.$t("auction.endPrice")) + ":")]), _c("p", {
    staticClass: "detail-value"
  }, [_vm._v(_vm._s(_vm.endPrice) + " ETH")])]), _c("div", {
    staticClass: "detail-item"
  }, [_c("p", {
    staticClass: "detail-label"
  }, [_vm._v(_vm._s(_vm.$t("common.end")) + ":")]), _c("p", {
    staticClass: "detail-value"
  }, [_vm._v(_vm._s(_vm.formatTimestampToUTC(_vm.endTime)))])])])])]), _c("div", {
    staticClass: "progress-section"
  }, [_c("p", {
    staticClass: "progress-label"
  }, [_vm._v(_vm._s(_vm.$t("auction.priceReductionProgress")))]), _c("el-progress", {
    attrs: {
      percentage: _vm.isEnded ? 100 : _vm.priceProgress,
      color: _vm.isEnded ? "#909399" : _vm.progressColor,
      "stroke-width": 10,
      "show-text": false
    }
  }), _c("div", {
    staticClass: "progress-indicators"
  }, [_c("span", [_vm._v(_vm._s(_vm.formatNumberWithCommas(_vm.startPrice, 12)) + " ETH")]), _c("span", [_vm._v(_vm._s(_vm.endPrice) + " ETH")])])], 1), _c("div", {
    staticClass: "info-boxes"
  }, [_c("div", {
    staticClass: "info-box"
  }, [_c("h3", [_vm._v(_vm._s(_vm.$t("auction.successfulAuction")) + ":")]), _c("ol", [_c("li", [_c("i", {
    staticClass: "el-icon-check"
  }), _c("span", [_vm._v(_vm._s(_vm.$t("auction.YFXSystem")))])]), _c("li", [_c("i", {
    staticClass: "el-icon-check"
  }), _c("span", [_vm._v(_vm._s(_vm.$t("auction.domainControl")))])]), _c("li", [_c("i", {
    staticClass: "el-icon-check"
  }), _c("span", [_vm._v(_vm._s(_vm.$t("auction.YFXGitHub")))])]), _c("li", [_c("i", {
    staticClass: "el-icon-check"
  }), _c("span", [_vm._v(_vm._s(_vm.$t("auction.thefounder")))])]), _c("li", [_c("i", {
    staticClass: "el-icon-check"
  }), _c("span", [_vm._v(_vm._s(_vm.$t("auction.distributionRights")))])]), _c("li", [_c("i", {
    staticClass: "el-icon-check"
  }), _c("span", [_vm._v(_vm._s(_vm.$t("auction.controlOf")))])]), _c("li", [_c("i", {
    staticClass: "el-icon-check"
  }), _c("span", [_vm._v(_vm._s(_vm.$t("auction.YFXTeam")))])])])]), _c("div", {
    staticClass: "info-box"
  }, [_c("h3", [_vm._v(_vm._s(_vm.$t("auction.howTo")) + ":")]), _c("ol", {
    staticClass: "participation-steps"
  }, [_c("li", [_c("div", {
    staticClass: "step-number"
  }, [_vm._v("1")]), _c("div", {
    staticClass: "step-content"
  }, [_c("p", [_vm._v(_vm._s(_vm.$t("auction.downloadMetamask")))])])]), _c("li", [_c("div", {
    staticClass: "step-number"
  }, [_vm._v("2")]), _c("div", {
    staticClass: "step-content"
  }, [_c("p", [_vm._v(_vm._s(_vm.$t("auction.clickOn")))])])]), _c("li", [_c("div", {
    staticClass: "step-number"
  }, [_vm._v("3")]), _c("div", {
    staticClass: "step-content"
  }, [_c("p", [_vm._v(_vm._s(_vm.$t("auction.afterConfirming")))])])])])])]), _c("div", {
    staticClass: "auction-rules"
  }, [_c("h3", [_vm._v(_vm._s(_vm.$t("auction.auctionRules")))]), _c("ol", [_c("li", [_c("i", {
    staticClass: "el-icon-warning-outline"
  }), _c("span", [_vm._v(_vm._s(_vm.$t("auction.adoptingDutch")))])]), _c("li", [_c("i", {
    staticClass: "el-icon-money"
  }), _c("span", [_vm._v(_vm._s(_vm.$t("auction.onlyAccept")))])]), _c("li", [_c("i", {
    staticClass: "el-icon-shopping-cart-full"
  }), _c("span", [_vm._v(_vm._s(_vm.$t("auction.theETH")))])]), _c("li", [_c("i", {
    staticClass: "el-icon-lock"
  }), _c("span", [_vm._v(_vm._s(_vm.$t("auction.weCannot")))])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/connectWallet/index.vue?vue&type=style&index=0&id=7ecac032&lang=less&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/connectWallet/index.vue?vue&type=style&index=0&id=7ecac032&lang=less&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".btn[data-v-7ecac032] {\n  width: 100%;\n  color: #101014;\n  background: #f7a600;\n  border: none;\n  border-radius: 6px;\n  font-size: 16px;\n  height: 46px !important;\n  line-height: 46px !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auction/index.vue?vue&type=style&index=0&id=15ef635c&lang=less&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/auction/index.vue?vue&type=style&index=0&id=15ef635c&lang=less&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".auction-container[data-v-15ef635c] {\n  background-color: #13151a;\n  color: #ffffff;\n  padding: 30px;\n  font-family: 'Inter', Arial, sans-serif;\n  max-width: 1200px;\n  margin: 60px auto;\n  border-radius: 10px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n}\n/* Header styles */\n.auction-header[data-v-15ef635c] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.auction-header h1[data-v-15ef635c] {\n  margin-right: 15px;\n  font-size: 28px;\n  font-weight: 700;\n  background: linear-gradient(90deg, #fff, #F7A600);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.status-button[data-v-15ef635c] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  border: none;\n}\n.status-pending[data-v-15ef635c] {\n  background-color: #424656;\n  color: #ffffff;\n}\n.status-active[data-v-15ef635c] {\n  background-color: #5cb87a;\n  color: #ffffff;\n}\n.rules-link[data-v-15ef635c] {\n  color: #ffc107;\n  text-decoration: none;\n  margin-left: auto;\n  font-weight: 500;\n  transition: color 0.3s;\n}\n.rules-link[data-v-15ef635c]:hover {\n  color: #ffda79;\n  text-decoration: underline;\n}\n/* Countdown styles */\n.countdown-section[data-v-15ef635c] {\n  margin: 40px 0;\n  text-align: center;\n}\n.countdown-label[data-v-15ef635c] {\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 26px;\n  color: #b0b7c3;\n}\n.countdown-timer[data-v-15ef635c] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.time-unit[data-v-15ef635c] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 5px;\n}\n.time-value[data-v-15ef635c] {\n  font-size: 36px;\n  font-weight: 700;\n  background: linear-gradient(180deg, #fff, #F7A600);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  padding: 12px;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.05);\n  border-radius: 10px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n  /* 增强可见性的额外样式 */\n  position: relative;\n  margin: 0 5px;\n  min-width: 70px;\n  /* 确保数字有足够空间 */\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  /* 毛玻璃效果 */\n  transition: all 0.3s ease;\n}\n.time-label[data-v-15ef635c] {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.6);\n  text-align: center;\n  margin-top: 5px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.time-divider[data-v-15ef635c] {\n  font-size: 36px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.7);\n  margin: -8px 12px 0 12px;\n}\n/* Current price styles */\n.current-price-section[data-v-15ef635c] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 40px auto 60px auto;\n  padding: 22px 20px;\n  background-color: rgba(240, 165, 0, 0.1);\n  border-radius: 10px;\n  border: 1px solid rgba(240, 165, 0, 0.2);\n  flex-direction: column;\n}\n.price-display[data-v-15ef635c] {\n  text-align: center;\n}\n.price-label[data-v-15ef635c] {\n  font-size: 16px;\n  color: #b0b7c3;\n}\n.price-value[data-v-15ef635c] {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 12px 0 16px 0;\n  color: #F7A600;\n}\n.bid-button[data-v-15ef635c] {\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 6px;\n  background-color: #F7A600;\n  border-color: #F7A600;\n  transition: all 0.3s;\n}\n.bid-button[data-v-15ef635c]:hover {\n  background-color: #d89200;\n  border-color: #d89200;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(240, 165, 0, 0.3);\n}\n/* Auction details styles */\n.auction-details[data-v-15ef635c] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n}\n.detail-section[data-v-15ef635c] {\n  width: 48%;\n}\n.detail-card[data-v-15ef635c] {\n  background-color: #1e222b;\n  padding: 12px 20px;\n  border-radius: 10px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s;\n}\n.detail-card[data-v-15ef635c]:hover {\n  transform: translateY(-5px);\n}\n.detail-item[data-v-15ef635c] {\n  display: flex;\n  margin: 10px 0;\n}\n.detail-label[data-v-15ef635c] {\n  font-size: 14px;\n  width: 100px;\n  font-weight: 500;\n  color: #b0b7c3;\n}\n.detail-value[data-v-15ef635c] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #ffffff;\n}\n/* Progress bar styles */\n.progress-section[data-v-15ef635c] {\n  margin: 40px 0;\n}\n.progress-label[data-v-15ef635c] {\n  font-size: 16px;\n  color: #b0b7c3;\n  margin-bottom: 14px;\n}\n.progress-indicators[data-v-15ef635c] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 8px;\n  font-size: 14px;\n  color: #b0b7c3;\n}\n/* Info boxes styles */\n.info-boxes[data-v-15ef635c] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n  gap: 20px;\n}\n.info-box[data-v-15ef635c] {\n  width: 48%;\n  background-color: #1e222b;\n  padding: 25px;\n  border-radius: 10px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.info-box h3[data-v-15ef635c] {\n  margin-top: 0;\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #F7A600;\n}\n.info-box ol[data-v-15ef635c] {\n  padding-left: 0;\n  list-style-type: none;\n  margin: 0;\n}\n.info-box li[data-v-15ef635c] {\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  font-size: 13px;\n}\n.info-box li i[data-v-15ef635c] {\n  margin-right: 10px;\n  color: #5cb87a;\n  font-size: 18px;\n}\n.participation-steps[data-v-15ef635c] {\n  counter-reset: step;\n}\n.participation-steps li[data-v-15ef635c] {\n  display: flex;\n  margin-bottom: 20px;\n}\n.step-number[data-v-15ef635c] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 12px;\n}\n.auction-rules li[data-v-15ef635c] {\n  margin-top: 12px;\n}\n.auction-rules i[data-v-15ef635c] {\n  margin-right: 6px;\n}\n.step-content p[data-v-15ef635c] {\n  line-height: 18px;\n}\n.auction-rules h3[data-v-15ef635c] {\n  color: #F7A600;\n}\n@keyframes pulse-15ef635c {\n0% {\n    transform: scale(1);\n}\n50% {\n    transform: scale(1.05);\n}\n100% {\n    transform: scale(1);\n}\n}\n/* 当数字变化时添加动画 */\n.countdown-timer.changing[data-v-15ef635c] {\n  animation: pulse-15ef635c 0.5s ease;\n  background: linear-gradient(180deg, #fff, #ffcc00);\n  -webkit-background-clip: text;\n}\n@media screen and (max-width: 1000px) {\n.current-price-section[data-v-15ef635c] {\n    width: 100%;\n}\n.current-price-section-success[data-v-15ef635c] {\n    width: 100%!important;\n    margin: 20px auto 40px auto;\n}\n.auction-container[data-v-15ef635c] {\n    padding: 16px;\n}\n.auction-header[data-v-15ef635c] {\n    justify-content: space-between;\n}\n.auction-header h1[data-v-15ef635c] {\n    font-size: 18px;\n    margin: 0;\n}\n.time-value[data-v-15ef635c],\n  .time-divider[data-v-15ef635c] {\n    font-size: 22px;\n}\n.time-divider[data-v-15ef635c] {\n    margin: -8px 4px 0 4px;\n}\n.time-value[data-v-15ef635c] {\n    min-width: 60px;\n}\n.countdown-timer[data-v-15ef635c] {\n    margin: auto;\n}\n.countdown-label[data-v-15ef635c] {\n    font-size: 16px;\n    margin-bottom: 20px;\n}\n.countdown-section[data-v-15ef635c] {\n    margin: 0;\n}\n.price-value[data-v-15ef635c] {\n    font-size: 26px;\n}\n.bid-button[data-v-15ef635c] {\n    padding: 8px 26px;\n    font-size: 14px;\n}\n.auction-details[data-v-15ef635c] {\n    margin-bottom: 0;\n    flex-direction: column;\n}\n.detail-section[data-v-15ef635c] {\n    width: 100%;\n    margin-bottom: 22px;\n}\n.rules-link[data-v-15ef635c] {\n    display: none;\n}\n.progress-section[data-v-15ef635c] {\n    margin: 10px 0 30px;\n}\n.info-boxes[data-v-15ef635c] {\n    flex-direction: column;\n}\n.info-box[data-v-15ef635c] {\n    width: 100%;\n    padding: 20px 20px;\n}\n.info-box h3[data-v-15ef635c] {\n    font-size: 16px;\n    margin-bottom: 16px;\n}\n.auction-rules h3[data-v-15ef635c] {\n    font-size: 16px;\n}\n.auction-rules li[data-v-15ef635c] {\n    font-size: 13px;\n    line-height: 22px;\n}\n.auction-container[data-v-15ef635c] {\n    margin: 20px auto;\n}\n.ended-message[data-v-15ef635c] {\n    margin: 20px 0!important;\n}\n}\n.status-ended[data-v-15ef635c] {\n  background-color: #909399 !important;\n  color: white !important;\n}\n.status-success[data-v-15ef635c] {\n  background-color: #F7A600;\n  color: white;\n}\n.ended-message[data-v-15ef635c] {\n  text-align: center;\n  font-size: 22px;\n  margin: 50px 0;\n}\n.current-price-section-success[data-v-15ef635c] {\n  width: 50%;\n}\n.current-price-section-success .price-label-price[data-v-15ef635c] {\n  margin: 0!important;\n}\n.current-price-section-success .price-label-price .price-label[data-v-15ef635c] {\n  margin-right: 22px!important;\n}\n.current-price-section-success .price-label-price .price-value[data-v-15ef635c] {\n  color: #F7A600 !important;\n  margin: 0!important;\n}\n.current-price-section-success .price-display[data-v-15ef635c] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: flex-start;\n  margin-top: 12px;\n}\n.current-price-section-success .price-display .price-label[data-v-15ef635c] {\n  font-size: 16px;\n  margin-right: 12px;\n}\n.current-price-section-success .price-display .price-value[data-v-15ef635c] {\n  margin: 0;\n  color: #b0b7c3;\n  font-size: 16px!important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/connectWallet/index.vue?vue&type=style&index=0&id=7ecac032&lang=less&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--11-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/connectWallet/index.vue?vue&type=style&index=0&id=7ecac032&lang=less&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--11-oneOf-1-2!../../../../node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=7ecac032&lang=less&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/connectWallet/index.vue?vue&type=style&index=0&id=7ecac032&lang=less&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("49f49ff2", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auction/index.vue?vue&type=style&index=0&id=15ef635c&lang=less&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--11-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/auction/index.vue?vue&type=style&index=0&id=15ef635c&lang=less&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--11-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=15ef635c&lang=less&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auction/index.vue?vue&type=style&index=0&id=15ef635c&lang=less&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("539775e8", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/common/connectWallet/index.vue":
/*!*******************************************************!*\
  !*** ./src/components/common/connectWallet/index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_7ecac032_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7ecac032&scoped=true */ "./src/components/common/connectWallet/index.vue?vue&type=template&id=7ecac032&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/components/common/connectWallet/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_7ecac032_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=7ecac032&lang=less&scoped=true */ "./src/components/common/connectWallet/index.vue?vue&type=style&index=0&id=7ecac032&lang=less&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7ecac032_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7ecac032_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7ecac032",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/common/connectWallet/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/common/connectWallet/index.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./src/components/common/connectWallet/index.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/connectWallet/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/common/connectWallet/index.vue?vue&type=style&index=0&id=7ecac032&lang=less&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./src/components/common/connectWallet/index.vue?vue&type=style&index=0&id=7ecac032&lang=less&scoped=true ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7ecac032_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--11-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--11-oneOf-1-2!../../../../node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=7ecac032&lang=less&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/connectWallet/index.vue?vue&type=style&index=0&id=7ecac032&lang=less&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7ecac032_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7ecac032_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7ecac032_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7ecac032_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/common/connectWallet/index.vue?vue&type=template&id=7ecac032&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./src/components/common/connectWallet/index.vue?vue&type=template&id=7ecac032&scoped=true ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4b4af266_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7ecac032_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4b4af266-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7ecac032&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4b4af266-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/connectWallet/index.vue?vue&type=template&id=7ecac032&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4b4af266_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7ecac032_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4b4af266_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7ecac032_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/contracts/abi/auction.json":
/*!****************************************!*\
  !*** ./src/contracts/abi/auction.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_startTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_endTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_startPrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_endPrice\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"buyer\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"time\",\"type\":\"uint256\"}],\"name\":\"AuctionEnd\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_startTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_endTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_startPrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_endPrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"}],\"name\":\"AuctionStart\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"buyer\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"refundAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"time\",\"type\":\"uint256\"}],\"name\":\"Refund\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_block\",\"type\":\"uint256\"}],\"name\":\"Stop\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"auction\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"auctionPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"auctionTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"buyer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"currentPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"endPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"endTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isAuctionSuccess\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"receiver\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"startPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"startTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}]");

/***/ }),

/***/ "./src/contracts/methods/auction.js":
/*!******************************************!*\
  !*** ./src/contracts/methods/auction.js ***!
  \******************************************/
/*! exports provided: getStartPrice, getEndPrice, getStartTime, getEndTime, getCurrentPrice, getBuyer, getAuctionTime, getAuctionPrice, isAuctionSuccess, auction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStartPrice", function() { return getStartPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndPrice", function() { return getEndPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStartTime", function() { return getStartTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndTime", function() { return getEndTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPrice", function() { return getCurrentPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBuyer", function() { return getBuyer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuctionTime", function() { return getAuctionTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuctionPrice", function() { return getAuctionPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuctionSuccess", function() { return isAuctionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auction", function() { return auction; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_web3_getWallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/web3/getWallet */ "./src/assets/web3/getWallet.js");
/* harmony import */ var _abi_auction_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abi/auction.json */ "./src/contracts/abi/auction.json");
var _abi_auction_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../abi/auction.json */ "./src/contracts/abi/auction.json", 1);
/* harmony import */ var merkletreejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! merkletreejs */ "./node_modules/merkletreejs/dist/index.js");
/* harmony import */ var merkletreejs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(merkletreejs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_js_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/js/utils */ "./src/assets/js/utils.js");
/* harmony import */ var _contracts_contractsAddress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contracts/contractsAddress */ "./src/contracts/contractsAddress.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.min.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);






const contractAddress = Object(_contracts_contractsAddress__WEBPACK_IMPORTED_MODULE_5__["getChainInfo"])().auction;

let contract, contract2, web3;
const rpcNodes = Object(_contracts_contractsAddress__WEBPACK_IMPORTED_MODULE_5__["getChainInfo"])().rpcNodes;
function switchNode() {
  const currentNode = rpcNodes.shift(); // 获取并移除第一个节点
  rpcNodes.push(currentNode); // 将该节点添加到列表末尾，实现循环切换
  web3 = new web3__WEBPACK_IMPORTED_MODULE_6___default.a(new web3__WEBPACK_IMPORTED_MODULE_6___default.a.providers.HttpProvider(currentNode));
  contract = new web3.eth.Contract(_abi_auction_json__WEBPACK_IMPORTED_MODULE_2__, contractAddress);
}
switchNode();
const rpcNodes2 = Object(_contracts_contractsAddress__WEBPACK_IMPORTED_MODULE_5__["getChainInfo"])().rpcNodes3;
function switchNode2() {
  const currentNode = rpcNodes2.shift();
  rpcNodes2.push(currentNode);
  // 创建新的 Web3 实例
  const web3 = new web3__WEBPACK_IMPORTED_MODULE_6___default.a(new web3__WEBPACK_IMPORTED_MODULE_6___default.a.providers.HttpProvider(currentNode));
  contract2 = new web3.eth.Contract(_abi_auction_json__WEBPACK_IMPORTED_MODULE_2__, contractAddress);
}
switchNode2();

//开始价格
const getStartPrice = async () => {
  try {
    return await contract.methods.startPrice().call();
  } catch (error) {
    console.log(error);
    switchNode();
  }
};

//结束价格
const getEndPrice = async () => {
  try {
    return await contract.methods.endPrice().call();
  } catch (error) {
    console.log(error);
    switchNode();
  }
};

//开始时间
const getStartTime = async () => {
  try {
    return await contract2.methods.startTime().call();
  } catch (error) {
    console.log(error);
    switchNode();
  }
};

//结束时间
const getEndTime = async () => {
  try {
    return await contract2.methods.endTime().call();
  } catch (error) {
    console.log(error);
    switchNode();
  }
};

//当前价格
const getCurrentPrice = async () => {
  try {
    return await contract.methods.currentPrice().call();
  } catch (error) {
    console.log(error);
    switchNode();
  }
};

//购买人
const getBuyer = async () => {
  try {
    return await contract2.methods.buyer().call();
  } catch (error) {
    console.log(error);
    switchNode();
  }
};

//购买时间
const getAuctionTime = async () => {
  try {
    return await contract2.methods.auctionTime().call();
  } catch (error) {
    console.log(error);
    switchNode();
  }
};

//拍卖成功价格
const getAuctionPrice = async () => {
  try {
    return await contract.methods.auctionPrice().call();
  } catch (error) {
    console.log(error);
    switchNode();
  }
};

//拍卖是否成功 true成功 false失败
const isAuctionSuccess = async () => {
  try {
    return await contract.methods.isAuctionSuccess().call();
  } catch (error) {
    console.log(error);
    switchNode();
  }
};

//拍卖
const auction = async (value, that) => {
  const {
    accounts,
    walletContract
  } = await Object(_assets_web3_getWallet__WEBPACK_IMPORTED_MODULE_1__["initWalletContract"])(_abi_auction_json__WEBPACK_IMPORTED_MODULE_2__, contractAddress);
  const gasPrice = await Object(_assets_web3_getWallet__WEBPACK_IMPORTED_MODULE_1__["getGasPrice"])();
  const gas = await walletContract.methods.auction().estimateGas({
    from: accounts,
    value
  });
  walletContract.methods.auction().send({
    from: accounts,
    gasPrice,
    gas,
    value
  }).on('transactionHash', hash => {
    if (hash) {
      that.isLoading = false;
      Object(_assets_js_utils__WEBPACK_IMPORTED_MODULE_4__["handleNotify"])(hash);
    }
  }).on('receipt', receipt => {
    that.isLoading = false;
    console.log('success:' + receipt.blockNumber);
  }).on('error', error => {
    that.isLoading = false;
    Object(_assets_js_utils__WEBPACK_IMPORTED_MODULE_4__["handleNotify"])(0, 'Error', error.message);
    console.error(error);
  });
};

/***/ }),

/***/ "./src/views/auction/index.vue":
/*!*************************************!*\
  !*** ./src/views/auction/index.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_15ef635c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=15ef635c&scoped=true */ "./src/views/auction/index.vue?vue&type=template&id=15ef635c&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/views/auction/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_15ef635c_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=15ef635c&lang=less&scoped=true */ "./src/views/auction/index.vue?vue&type=style&index=0&id=15ef635c&lang=less&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_15ef635c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_15ef635c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "15ef635c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/auction/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/auction/index.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/views/auction/index.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auction/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/auction/index.vue?vue&type=style&index=0&id=15ef635c&lang=less&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./src/views/auction/index.vue?vue&type=style&index=0&id=15ef635c&lang=less&scoped=true ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15ef635c_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--11-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--11-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--11-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=15ef635c&lang=less&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auction/index.vue?vue&type=style&index=0&id=15ef635c&lang=less&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15ef635c_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15ef635c_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15ef635c_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15ef635c_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/auction/index.vue?vue&type=template&id=15ef635c&scoped=true":
/*!*******************************************************************************!*\
  !*** ./src/views/auction/index.vue?vue&type=template&id=15ef635c&scoped=true ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4b4af266_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_15ef635c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4b4af266-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=15ef635c&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4b4af266-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auction/index.vue?vue&type=template&id=15ef635c&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4b4af266_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_15ef635c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4b4af266_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_15ef635c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);