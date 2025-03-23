(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/@lit/reactive-element/css-tag.js":
/*!*******************************************************!*\
  !*** ./node_modules/@lit/reactive-element/css-tag.js ***!
  \*******************************************************/
/*! exports provided: CSSResult, adoptStyles, css, getCompatibleStyle, supportsAdoptingStyleSheets, unsafeCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adoptStyles", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompatibleStyle", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return r; });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(s,t))}return t}toString(){return this.cssText}}const r=t=>new o("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o(n,t,s)},S=(s,n)=>{e?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n)}))},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;
//# sourceMappingURL=css-tag.js.map


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/base.js":
/*!***************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/base.js ***!
  \***************************************************************/
/*! exports provided: decorateProperty, legacyPrototypeMethod, standardPrototypeMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorateProperty", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legacyPrototypeMethod", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "standardPrototypeMethod", function() { return t; });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=(e,t,o)=>{Object.defineProperty(t,o,e)},t=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),o=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n)}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n)}};
//# sourceMappingURL=base.js.map


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/custom-element.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/custom-element.js ***!
  \*************************************************************************/
/*! exports provided: customElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return e; });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return{kind:t,elements:s,finisher(n){customElements.define(e,n)}}})(e,n);
//# sourceMappingURL=custom-element.js.map


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/event-options.js":
/*!************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/event-options.js ***!
  \************************************************************************/
/*! exports provided: eventOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return e; });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/decorators/base.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e(e){return Object(_base_js__WEBPACK_IMPORTED_MODULE_0__["decorateProperty"])({finisher:(r,t)=>{Object.assign(r.prototype[t],e)}})}
//# sourceMappingURL=event-options.js.map


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/property.js ***!
  \*******************************************************************/
/*! exports provided: property */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "property", function() { return n; });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,i)}},e=(i,e,n)=>{e.constructor.createProperty(n,i)};function n(n){return(t,o)=>void 0!==o?e(n,t,o):i(n,t)}
//# sourceMappingURL=property.js.map


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/query-all.js":
/*!********************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/query-all.js ***!
  \********************************************************************/
/*! exports provided: queryAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return e; });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/decorators/base.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e(e){return Object(_base_js__WEBPACK_IMPORTED_MODULE_0__["decorateProperty"])({descriptor:r=>({get(){var r,o;return null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelectorAll(e))&&void 0!==o?o:[]},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-all.js.map


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/query-assigned-elements.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/query-assigned-elements.js ***!
  \**********************************************************************************/
/*! exports provided: queryAssignedElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAssignedElements", function() { return l; });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/decorators/base.js");

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;const e=null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function l(n){const{slot:l,selector:t}=null!=n?n:{};return Object(_base_js__WEBPACK_IMPORTED_MODULE_0__["decorateProperty"])({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?e(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-assigned-elements.js.map


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js ***!
  \*******************************************************************************/
/*! exports provided: queryAssignedNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAssignedNodes", function() { return o; });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/decorators/base.js");
/* harmony import */ var _query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query-assigned-elements.js */ "./node_modules/@lit/reactive-element/decorators/query-assigned-elements.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o(o,n,r){let l,s=o;return"object"==typeof o?(s=o.slot,l=o):l={flatten:n},r?Object(_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__["queryAssignedElements"])({slot:s,flatten:n,selector:r}):Object(_base_js__WEBPACK_IMPORTED_MODULE_0__["decorateProperty"])({descriptor:e=>({get(){var e,t;const o="slot"+(s?`[name=${s}]`:":not([name])"),n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(o);return null!==(t=null==n?void 0:n.assignedNodes(l))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-assigned-nodes.js.map


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/query-async.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/query-async.js ***!
  \**********************************************************************/
/*! exports provided: queryAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAsync", function() { return e; });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/decorators/base.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e){return Object(_base_js__WEBPACK_IMPORTED_MODULE_0__["decorateProperty"])({descriptor:r=>({async get(){var r;return await this.updateComplete,null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-async.js.map


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/query.js":
/*!****************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/query.js ***!
  \****************************************************************/
/*! exports provided: query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return i; });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/decorators/base.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i(i,n){return Object(_base_js__WEBPACK_IMPORTED_MODULE_0__["decorateProperty"])({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]}}return t}})}
//# sourceMappingURL=query.js.map


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/state.js":
/*!****************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/state.js ***!
  \****************************************************************/
/*! exports provided: state */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return t; });
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property.js */ "./node_modules/@lit/reactive-element/decorators/property.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t(t){return Object(_property_js__WEBPACK_IMPORTED_MODULE_0__["property"])({...t,state:!0})}
//# sourceMappingURL=state.js.map


/***/ }),

/***/ "./node_modules/@lit/reactive-element/reactive-element.js":
/*!****************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/reactive-element.js ***!
  \****************************************************************/
/*! exports provided: CSSResult, adoptStyles, css, getCompatibleStyle, supportsAdoptingStyleSheets, unsafeCSS, ReactiveElement, defaultConverter, notEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveElement", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return a; });
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-tag.js */ "./node_modules/@lit/reactive-element/css-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adoptStyles", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["adoptStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCompatibleStyle", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["getCompatibleStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["unsafeCSS"]; });


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s;const e=window,r=e.trustedTypes,h=r?r.emptyScript:"",o=e.reactiveElementPolyfillSupport,n={toAttribute(t,i){switch(i){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},a=(t,i)=>i!==t&&(i==i||t==t),l={attribute:!0,type:String,converter:n,reflect:!1,hasChanged:a},d="finalized";class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=l){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l}static finalize(){if(this.hasOwnProperty(d))return!1;this[d]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(Object(_css_tag_js__WEBPACK_IMPORTED_MODULE_0__["getCompatibleStyle"])(i))}else void 0!==i&&s.push(Object(_css_tag_js__WEBPACK_IMPORTED_MODULE_0__["getCompatibleStyle"])(i));return s}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return Object(_css_tag_js__WEBPACK_IMPORTED_MODULE_0__["adoptStyles"])(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=l){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}u[d]=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==o||o({ReactiveElement:u}),(null!==(s=e.reactiveElementVersions)&&void 0!==s?s:e.reactiveElementVersions=[]).push("1.6.3");
//# sourceMappingURL=reactive-element.js.map


/***/ }),

/***/ "./node_modules/@motionone/animation/dist/Animation.es.js":
/*!****************************************************************!*\
  !*** ./node_modules/@motionone/animation/dist/Animation.es.js ***!
  \****************************************************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
/* harmony import */ var _utils_easing_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/easing.es.js */ "./node_modules/@motionone/animation/dist/utils/easing.es.js");



class Animation {
    constructor(output, keyframes = [0, 1], { easing, duration: initialDuration = _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"].duration, delay = _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"].delay, endDelay = _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"].endDelay, repeat = _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"].repeat, offset, direction = "normal", autoplay = true, } = {}) {
        this.startTime = null;
        this.rate = 1;
        this.t = 0;
        this.cancelTimestamp = null;
        this.easing = _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["noopReturn"];
        this.duration = 0;
        this.totalDuration = 0;
        this.repeat = 0;
        this.playState = "idle";
        this.finished = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
        easing = easing || _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"].easing;
        if (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["isEasingGenerator"])(easing)) {
            const custom = easing.createAnimation(keyframes);
            easing = custom.easing;
            keyframes = custom.keyframes || keyframes;
            initialDuration = custom.duration || initialDuration;
        }
        this.repeat = repeat;
        this.easing = Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["isEasingList"])(easing) ? _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["noopReturn"] : Object(_utils_easing_es_js__WEBPACK_IMPORTED_MODULE_1__["getEasingFunction"])(easing);
        this.updateDuration(initialDuration);
        const interpolate$1 = Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["interpolate"])(keyframes, offset, Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["isEasingList"])(easing) ? easing.map(_utils_easing_es_js__WEBPACK_IMPORTED_MODULE_1__["getEasingFunction"]) : _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["noopReturn"]);
        this.tick = (timestamp) => {
            var _a;
            // TODO: Temporary fix for OptionsResolver typing
            delay = delay;
            let t = 0;
            if (this.pauseTime !== undefined) {
                t = this.pauseTime;
            }
            else {
                t = (timestamp - this.startTime) * this.rate;
            }
            this.t = t;
            // Convert to seconds
            t /= 1000;
            // Rebase on delay
            t = Math.max(t - delay, 0);
            /**
             * If this animation has finished, set the current time
             * to the total duration.
             */
            if (this.playState === "finished" && this.pauseTime === undefined) {
                t = this.totalDuration;
            }
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */
            const progress = t / this.duration;
            // TODO progress += iterationStart
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */
            let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */
            let iterationProgress = progress % 1.0;
            if (!iterationProgress && progress >= 1) {
                iterationProgress = 1;
            }
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */
            iterationProgress === 1 && currentIteration--;
            /**
             * Reverse progress if we're not running in "normal" direction
             */
            const iterationIsOdd = currentIteration % 2;
            if (direction === "reverse" ||
                (direction === "alternate" && iterationIsOdd) ||
                (direction === "alternate-reverse" && !iterationIsOdd)) {
                iterationProgress = 1 - iterationProgress;
            }
            const p = t >= this.totalDuration ? 1 : Math.min(iterationProgress, 1);
            const latest = interpolate$1(this.easing(p));
            output(latest);
            const isAnimationFinished = this.pauseTime === undefined &&
                (this.playState === "finished" || t >= this.totalDuration + endDelay);
            if (isAnimationFinished) {
                this.playState = "finished";
                (_a = this.resolve) === null || _a === void 0 ? void 0 : _a.call(this, latest);
            }
            else if (this.playState !== "idle") {
                this.frameRequestId = requestAnimationFrame(this.tick);
            }
        };
        if (autoplay)
            this.play();
    }
    play() {
        const now = performance.now();
        this.playState = "running";
        if (this.pauseTime !== undefined) {
            this.startTime = now - this.pauseTime;
        }
        else if (!this.startTime) {
            this.startTime = now;
        }
        this.cancelTimestamp = this.startTime;
        this.pauseTime = undefined;
        this.frameRequestId = requestAnimationFrame(this.tick);
    }
    pause() {
        this.playState = "paused";
        this.pauseTime = this.t;
    }
    finish() {
        this.playState = "finished";
        this.tick(0);
    }
    stop() {
        var _a;
        this.playState = "idle";
        if (this.frameRequestId !== undefined) {
            cancelAnimationFrame(this.frameRequestId);
        }
        (_a = this.reject) === null || _a === void 0 ? void 0 : _a.call(this, false);
    }
    cancel() {
        this.stop();
        this.tick(this.cancelTimestamp);
    }
    reverse() {
        this.rate *= -1;
    }
    commitStyles() { }
    updateDuration(duration) {
        this.duration = duration;
        this.totalDuration = duration * (this.repeat + 1);
    }
    get currentTime() {
        return this.t;
    }
    set currentTime(t) {
        if (this.pauseTime !== undefined || this.rate === 0) {
            this.pauseTime = t;
        }
        else {
            this.startTime = performance.now() - t / this.rate;
        }
    }
    get playbackRate() {
        return this.rate;
    }
    set playbackRate(rate) {
        this.rate = rate;
    }
}




/***/ }),

/***/ "./node_modules/@motionone/animation/dist/index.es.js":
/*!************************************************************!*\
  !*** ./node_modules/@motionone/animation/dist/index.es.js ***!
  \************************************************************/
/*! exports provided: Animation, getEasingFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Animation_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animation.es.js */ "./node_modules/@motionone/animation/dist/Animation.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return _Animation_es_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]; });

/* harmony import */ var _utils_easing_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/easing.es.js */ "./node_modules/@motionone/animation/dist/utils/easing.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEasingFunction", function() { return _utils_easing_es_js__WEBPACK_IMPORTED_MODULE_1__["getEasingFunction"]; });





/***/ }),

/***/ "./node_modules/@motionone/animation/dist/utils/easing.es.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@motionone/animation/dist/utils/easing.es.js ***!
  \*******************************************************************/
/*! exports provided: getEasingFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEasingFunction", function() { return getEasingFunction; });
/* harmony import */ var _motionone_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/easing */ "./node_modules/@motionone/easing/dist/index.es.js");
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");



const namedEasings = {
    ease: Object(_motionone_easing__WEBPACK_IMPORTED_MODULE_0__["cubicBezier"])(0.25, 0.1, 0.25, 1.0),
    "ease-in": Object(_motionone_easing__WEBPACK_IMPORTED_MODULE_0__["cubicBezier"])(0.42, 0.0, 1.0, 1.0),
    "ease-in-out": Object(_motionone_easing__WEBPACK_IMPORTED_MODULE_0__["cubicBezier"])(0.42, 0.0, 0.58, 1.0),
    "ease-out": Object(_motionone_easing__WEBPACK_IMPORTED_MODULE_0__["cubicBezier"])(0.0, 0.0, 0.58, 1.0),
};
const functionArgsRegex = /\((.*?)\)/;
function getEasingFunction(definition) {
    // If already an easing function, return
    if (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(definition))
        return definition;
    // If an easing curve definition, return bezier function
    if (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_1__["isCubicBezier"])(definition))
        return Object(_motionone_easing__WEBPACK_IMPORTED_MODULE_0__["cubicBezier"])(...definition);
    // If we have a predefined easing function, return
    const namedEasing = namedEasings[definition];
    if (namedEasing)
        return namedEasing;
    // If this is a steps function, attempt to create easing curve
    if (definition.startsWith("steps")) {
        const args = functionArgsRegex.exec(definition);
        if (args) {
            const argsArray = args[1].split(",");
            return Object(_motionone_easing__WEBPACK_IMPORTED_MODULE_0__["steps"])(parseFloat(argsArray[0]), argsArray[1].trim());
        }
    }
    return _motionone_utils__WEBPACK_IMPORTED_MODULE_1__["noopReturn"];
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/animate-style.es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/animate-style.es.js ***!
  \**********************************************************************/
/*! exports provided: animateStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateStyle", function() { return animateStyle; });
/* harmony import */ var _data_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.es.js */ "./node_modules/@motionone/dom/dist/animate/data.es.js");
/* harmony import */ var _utils_css_var_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/css-var.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/css-var.es.js");
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
/* harmony import */ var _utils_transforms_es_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/transforms.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/transforms.es.js");
/* harmony import */ var _utils_easing_es_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/easing.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/easing.es.js");
/* harmony import */ var _utils_feature_detection_es_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/feature-detection.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js");
/* harmony import */ var _utils_keyframes_es_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/keyframes.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js");
/* harmony import */ var _style_es_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.es.js */ "./node_modules/@motionone/dom/dist/animate/style.es.js");
/* harmony import */ var _utils_get_style_name_es_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/get-style-name.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js");
/* harmony import */ var _utils_stop_animation_es_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/stop-animation.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js");
/* harmony import */ var _utils_get_unit_es_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/get-unit.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/get-unit.es.js");












function getDevToolsRecord() {
    return window.__MOTION_DEV_TOOLS_RECORD;
}
function animateStyle(element, key, keyframesDefinition, options = {}, AnimationPolyfill) {
    const record = getDevToolsRecord();
    const isRecording = options.record !== false && record;
    let animation;
    let { duration = _motionone_utils__WEBPACK_IMPORTED_MODULE_2__["defaults"].duration, delay = _motionone_utils__WEBPACK_IMPORTED_MODULE_2__["defaults"].delay, endDelay = _motionone_utils__WEBPACK_IMPORTED_MODULE_2__["defaults"].endDelay, repeat = _motionone_utils__WEBPACK_IMPORTED_MODULE_2__["defaults"].repeat, easing = _motionone_utils__WEBPACK_IMPORTED_MODULE_2__["defaults"].easing, persist = false, direction, offset, allowWebkitAcceleration = false, autoplay = true, } = options;
    const data = Object(_data_es_js__WEBPACK_IMPORTED_MODULE_0__["getAnimationData"])(element);
    const valueIsTransform = Object(_utils_transforms_es_js__WEBPACK_IMPORTED_MODULE_3__["isTransform"])(key);
    let canAnimateNatively = _utils_feature_detection_es_js__WEBPACK_IMPORTED_MODULE_5__["supports"].waapi();
    /**
     * If this is an individual transform, we need to map its
     * key to a CSS variable and update the element's transform style
     */
    valueIsTransform && Object(_utils_transforms_es_js__WEBPACK_IMPORTED_MODULE_3__["addTransformToElement"])(element, key);
    const name = Object(_utils_get_style_name_es_js__WEBPACK_IMPORTED_MODULE_8__["getStyleName"])(key);
    const motionValue = Object(_data_es_js__WEBPACK_IMPORTED_MODULE_0__["getMotionValue"])(data.values, name);
    /**
     * Get definition of value, this will be used to convert numerical
     * keyframes into the default value type.
     */
    const definition = _utils_transforms_es_js__WEBPACK_IMPORTED_MODULE_3__["transformDefinitions"].get(name);
    /**
     * Stop the current animation, if any. Because this will trigger
     * commitStyles (DOM writes) and we might later trigger DOM reads,
     * this is fired now and we return a factory function to create
     * the actual animation that can get called in batch,
     */
    Object(_utils_stop_animation_es_js__WEBPACK_IMPORTED_MODULE_9__["stopAnimation"])(motionValue.animation, !(Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_2__["isEasingGenerator"])(easing) && motionValue.generator) &&
        options.record !== false);
    /**
     * Batchable factory function containing all DOM reads.
     */
    return () => {
        const readInitialValue = () => { var _a, _b; return (_b = (_a = _style_es_js__WEBPACK_IMPORTED_MODULE_7__["style"].get(element, name)) !== null && _a !== void 0 ? _a : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0; };
        /**
         * Replace null values with the previous keyframe value, or read
         * it from the DOM if it's the first keyframe.
         */
        let keyframes = Object(_utils_keyframes_es_js__WEBPACK_IMPORTED_MODULE_6__["hydrateKeyframes"])(Object(_utils_keyframes_es_js__WEBPACK_IMPORTED_MODULE_6__["keyframesList"])(keyframesDefinition), readInitialValue);
        /**
         * Detect unit type of keyframes.
         */
        const toUnit = Object(_utils_get_unit_es_js__WEBPACK_IMPORTED_MODULE_10__["getUnitConverter"])(keyframes, definition);
        if (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_2__["isEasingGenerator"])(easing)) {
            const custom = easing.createAnimation(keyframes, key !== "opacity", readInitialValue, name, motionValue);
            easing = custom.easing;
            keyframes = custom.keyframes || keyframes;
            duration = custom.duration || duration;
        }
        /**
         * If this is a CSS variable we need to register it with the browser
         * before it can be animated natively. We also set it with setProperty
         * rather than directly onto the element.style object.
         */
        if (Object(_utils_css_var_es_js__WEBPACK_IMPORTED_MODULE_1__["isCssVar"])(name)) {
            if (_utils_feature_detection_es_js__WEBPACK_IMPORTED_MODULE_5__["supports"].cssRegisterProperty()) {
                Object(_utils_css_var_es_js__WEBPACK_IMPORTED_MODULE_1__["registerCssVariable"])(name);
            }
            else {
                canAnimateNatively = false;
            }
        }
        /**
         * If we've been passed a custom easing function, and this browser
         * does **not** support linear() easing, and the value is a transform
         * (and thus a pure number) we can still support the custom easing
         * by falling back to the animation polyfill.
         */
        if (valueIsTransform &&
            !_utils_feature_detection_es_js__WEBPACK_IMPORTED_MODULE_5__["supports"].linearEasing() &&
            (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(easing) || (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_2__["isEasingList"])(easing) && easing.some(_motionone_utils__WEBPACK_IMPORTED_MODULE_2__["isFunction"])))) {
            canAnimateNatively = false;
        }
        /**
         * If we can animate this value with WAAPI, do so.
         */
        if (canAnimateNatively) {
            /**
             * Convert numbers to default value types. Currently this only supports
             * transforms but it could also support other value types.
             */
            if (definition) {
                keyframes = keyframes.map((value) => Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(value) ? definition.toDefaultUnit(value) : value);
            }
            /**
             * If this browser doesn't support partial/implicit keyframes we need to
             * explicitly provide one.
             */
            if (keyframes.length === 1 &&
                (!_utils_feature_detection_es_js__WEBPACK_IMPORTED_MODULE_5__["supports"].partialKeyframes() || isRecording)) {
                keyframes.unshift(readInitialValue());
            }
            const animationOptions = {
                delay: _motionone_utils__WEBPACK_IMPORTED_MODULE_2__["time"].ms(delay),
                duration: _motionone_utils__WEBPACK_IMPORTED_MODULE_2__["time"].ms(duration),
                endDelay: _motionone_utils__WEBPACK_IMPORTED_MODULE_2__["time"].ms(endDelay),
                easing: !Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_2__["isEasingList"])(easing)
                    ? Object(_utils_easing_es_js__WEBPACK_IMPORTED_MODULE_4__["convertEasing"])(easing, duration)
                    : undefined,
                direction,
                iterations: repeat + 1,
                fill: "both",
            };
            animation = element.animate({
                [name]: keyframes,
                offset,
                easing: Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_2__["isEasingList"])(easing)
                    ? easing.map((thisEasing) => Object(_utils_easing_es_js__WEBPACK_IMPORTED_MODULE_4__["convertEasing"])(thisEasing, duration))
                    : undefined,
            }, animationOptions);
            /**
             * Polyfill finished Promise in browsers that don't support it
             */
            if (!animation.finished) {
                animation.finished = new Promise((resolve, reject) => {
                    animation.onfinish = resolve;
                    animation.oncancel = reject;
                });
            }
            const target = keyframes[keyframes.length - 1];
            animation.finished
                .then(() => {
                if (persist)
                    return;
                // Apply styles to target
                _style_es_js__WEBPACK_IMPORTED_MODULE_7__["style"].set(element, name, target);
                // Ensure fill modes don't persist
                animation.cancel();
            })
                .catch(_motionone_utils__WEBPACK_IMPORTED_MODULE_2__["noop"]);
            /**
             * This forces Webkit to run animations on the main thread by exploiting
             * this condition:
             * https://trac.webkit.org/browser/webkit/trunk/Source/WebCore/platform/graphics/ca/GraphicsLayerCA.cpp?rev=281238#L1099
             *
             * This fixes Webkit's timing bugs, like accelerated animations falling
             * out of sync with main thread animations and massive delays in starting
             * accelerated animations in WKWebView.
             */
            if (!allowWebkitAcceleration)
                animation.playbackRate = 1.000001;
            /**
             * If we can't animate the value natively then we can fallback to the numbers-only
             * polyfill for transforms.
             */
        }
        else if (AnimationPolyfill && valueIsTransform) {
            /**
             * If any keyframe is a string (because we measured it from the DOM), we need to convert
             * it into a number before passing to the Animation polyfill.
             */
            keyframes = keyframes.map((value) => typeof value === "string" ? parseFloat(value) : value);
            /**
             * If we only have a single keyframe, we need to create an initial keyframe by reading
             * the current value from the DOM.
             */
            if (keyframes.length === 1) {
                keyframes.unshift(parseFloat(readInitialValue()));
            }
            animation = new AnimationPolyfill((latest) => {
                _style_es_js__WEBPACK_IMPORTED_MODULE_7__["style"].set(element, name, toUnit ? toUnit(latest) : latest);
            }, keyframes, Object.assign(Object.assign({}, options), { duration,
                easing }));
        }
        else {
            const target = keyframes[keyframes.length - 1];
            _style_es_js__WEBPACK_IMPORTED_MODULE_7__["style"].set(element, name, definition && Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(target)
                ? definition.toDefaultUnit(target)
                : target);
        }
        if (isRecording) {
            record(element, key, keyframes, {
                duration,
                delay: delay,
                easing,
                repeat,
                offset,
            }, "motion-one");
        }
        motionValue.setAnimation(animation);
        if (animation && !autoplay)
            animation.pause();
        return animation;
    };
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/create-animate.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/create-animate.es.js ***!
  \***********************************************************************/
/*! exports provided: createAnimate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnimate", function() { return createAnimate; });
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _animate_style_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate-style.es.js */ "./node_modules/@motionone/dom/dist/animate/animate-style.es.js");
/* harmony import */ var _utils_options_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/options.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/options.es.js");
/* harmony import */ var _utils_resolve_elements_es_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/resolve-elements.es.js */ "./node_modules/@motionone/dom/dist/utils/resolve-elements.es.js");
/* harmony import */ var _utils_controls_es_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/controls.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/controls.es.js");
/* harmony import */ var _utils_stagger_es_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/stagger.es.js */ "./node_modules/@motionone/dom/dist/utils/stagger.es.js");







function createAnimate(AnimatePolyfill) {
    return function animate(elements, keyframes, options = {}) {
        elements = Object(_utils_resolve_elements_es_js__WEBPACK_IMPORTED_MODULE_3__["resolveElements"])(elements);
        const numElements = elements.length;
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_0__["invariant"])(Boolean(numElements), "No valid element provided.");
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_0__["invariant"])(Boolean(keyframes), "No keyframes defined.");
        /**
         * Create and start new animations
         */
        const animationFactories = [];
        for (let i = 0; i < numElements; i++) {
            const element = elements[i];
            for (const key in keyframes) {
                const valueOptions = Object(_utils_options_es_js__WEBPACK_IMPORTED_MODULE_2__["getOptions"])(options, key);
                valueOptions.delay = Object(_utils_stagger_es_js__WEBPACK_IMPORTED_MODULE_5__["resolveOption"])(valueOptions.delay, i, numElements);
                const animation = Object(_animate_style_es_js__WEBPACK_IMPORTED_MODULE_1__["animateStyle"])(element, key, keyframes[key], valueOptions, AnimatePolyfill);
                animationFactories.push(animation);
            }
        }
        return Object(_utils_controls_es_js__WEBPACK_IMPORTED_MODULE_4__["withControls"])(animationFactories, options, 
        /**
         * TODO:
         * If easing is set to spring or glide, duration will be dynamically
         * generated. Ideally we would dynamically generate this from
         * animation.effect.getComputedTiming().duration but this isn't
         * supported in iOS13 or our number polyfill. Perhaps it's possible
         * to Proxy animations returned from animateStyle that has duration
         * as a getter.
         */
        options.duration);
    };
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/data.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/data.es.js ***!
  \*************************************************************/
/*! exports provided: getAnimationData, getMotionValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnimationData", function() { return getAnimationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMotionValue", function() { return getMotionValue; });
/* harmony import */ var _motionone_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/types */ "./node_modules/@motionone/types/dist/index.es.js");


const data = new WeakMap();
function getAnimationData(element) {
    if (!data.has(element)) {
        data.set(element, {
            transforms: [],
            values: new Map(),
        });
    }
    return data.get(element);
}
function getMotionValue(motionValues, name) {
    if (!motionValues.has(name)) {
        motionValues.set(name, new _motionone_types__WEBPACK_IMPORTED_MODULE_0__["MotionValue"]());
    }
    return motionValues.get(name);
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/index.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/index.es.js ***!
  \**************************************************************/
/*! exports provided: animate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony import */ var _motionone_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/animation */ "./node_modules/@motionone/animation/dist/index.es.js");
/* harmony import */ var _create_animate_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-animate.es.js */ "./node_modules/@motionone/dom/dist/animate/create-animate.es.js");



const animate = Object(_create_animate_es_js__WEBPACK_IMPORTED_MODULE_1__["createAnimate"])(_motionone_animation__WEBPACK_IMPORTED_MODULE_0__["Animation"]);




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/style.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/style.es.js ***!
  \**************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _utils_css_var_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/css-var.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/css-var.es.js");
/* harmony import */ var _utils_get_style_name_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/get-style-name.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js");
/* harmony import */ var _utils_transforms_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/transforms.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/transforms.es.js");




const style = {
    get: (element, name) => {
        name = Object(_utils_get_style_name_es_js__WEBPACK_IMPORTED_MODULE_1__["getStyleName"])(name);
        let value = Object(_utils_css_var_es_js__WEBPACK_IMPORTED_MODULE_0__["isCssVar"])(name)
            ? element.style.getPropertyValue(name)
            : getComputedStyle(element)[name];
        // TODO Decide if value can be 0
        if (!value && value !== 0) {
            const definition = _utils_transforms_es_js__WEBPACK_IMPORTED_MODULE_2__["transformDefinitions"].get(name);
            if (definition)
                value = definition.initialValue;
        }
        return value;
    },
    set: (element, name, value) => {
        name = Object(_utils_get_style_name_es_js__WEBPACK_IMPORTED_MODULE_1__["getStyleName"])(name);
        if (Object(_utils_css_var_es_js__WEBPACK_IMPORTED_MODULE_0__["isCssVar"])(name)) {
            element.style.setProperty(name, value);
        }
        else {
            element.style[name] = value;
        }
    },
};




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/controls.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/controls.es.js ***!
  \***********************************************************************/
/*! exports provided: controls, withControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controls", function() { return controls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withControls", function() { return withControls; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
/* harmony import */ var _stop_animation_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stop-animation.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js");



const createAnimation = (factory) => factory();
const withControls = (animationFactory, options, duration = _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"].duration) => {
    return new Proxy({
        animations: animationFactory.map(createAnimation).filter(Boolean),
        duration,
        options,
    }, controls);
};
/**
 * TODO:
 * Currently this returns the first animation, ideally it would return
 * the first active animation.
 */
const getActiveAnimation = (state) => state.animations[0];
const controls = {
    get: (target, key) => {
        const activeAnimation = getActiveAnimation(target);
        switch (key) {
            case "duration":
                return target.duration;
            case "currentTime":
                return _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["time"].s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
            case "playbackRate":
            case "playState":
                return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
            case "finished":
                if (!target.finished) {
                    target.finished = Promise.all(target.animations.map(selectFinished)).catch(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["noop"]);
                }
                return target.finished;
            case "stop":
                return () => {
                    target.animations.forEach((animation) => Object(_stop_animation_es_js__WEBPACK_IMPORTED_MODULE_1__["stopAnimation"])(animation));
                };
            case "forEachNative":
                /**
                 * This is for internal use only, fire a callback for each
                 * underlying animation.
                 */
                return (callback) => {
                    target.animations.forEach((animation) => callback(animation, target));
                };
            default:
                return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) ===
                    "undefined"
                    ? undefined
                    : () => target.animations.forEach((animation) => animation[key]());
        }
    },
    set: (target, key, value) => {
        switch (key) {
            case "currentTime":
                value = _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["time"].ms(value);
            // Fall-through
            case "playbackRate":
                for (let i = 0; i < target.animations.length; i++) {
                    target.animations[i][key] = value;
                }
                return true;
        }
        return false;
    },
};
const selectFinished = (animation) => animation.finished;




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/css-var.es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/css-var.es.js ***!
  \**********************************************************************/
/*! exports provided: isCssVar, registerCssVariable, registeredProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCssVar", function() { return isCssVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerCssVariable", function() { return registerCssVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registeredProperties", function() { return registeredProperties; });
/* harmony import */ var _transforms_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transforms.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/transforms.es.js");


const isCssVar = (name) => name.startsWith("--");
const registeredProperties = new Set();
function registerCssVariable(name) {
    if (registeredProperties.has(name))
        return;
    registeredProperties.add(name);
    try {
        const { syntax, initialValue } = _transforms_es_js__WEBPACK_IMPORTED_MODULE_0__["transformDefinitions"].has(name)
            ? _transforms_es_js__WEBPACK_IMPORTED_MODULE_0__["transformDefinitions"].get(name)
            : {};
        CSS.registerProperty({
            name,
            inherits: false,
            syntax,
            initialValue,
        });
    }
    catch (e) { }
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/easing.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/easing.es.js ***!
  \*********************************************************************/
/*! exports provided: convertEasing, cubicBezierAsString, generateLinearEasingPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertEasing", function() { return convertEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicBezierAsString", function() { return cubicBezierAsString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateLinearEasingPoints", function() { return generateLinearEasingPoints; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
/* harmony import */ var _feature_detection_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature-detection.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js");



// Create a linear easing point for every x second
const resolution = 0.015;
const generateLinearEasingPoints = (easing, duration) => {
    let points = "";
    const numPoints = Math.round(duration / resolution);
    for (let i = 0; i < numPoints; i++) {
        points += easing(Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["progress"])(0, numPoints - 1, i)) + ", ";
    }
    return points.substring(0, points.length - 2);
};
const convertEasing = (easing, duration) => {
    if (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(easing)) {
        return _feature_detection_es_js__WEBPACK_IMPORTED_MODULE_1__["supports"].linearEasing()
            ? `linear(${generateLinearEasingPoints(easing, duration)})`
            : _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"].easing;
    }
    else {
        return Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["isCubicBezier"])(easing) ? cubicBezierAsString(easing) : easing;
    }
};
const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js ***!
  \********************************************************************************/
/*! exports provided: supports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supports", function() { return supports; });
const testAnimation = (keyframes, options) => document.createElement("div").animate(keyframes, options);
const featureTests = {
    cssRegisterProperty: () => typeof CSS !== "undefined" &&
        Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
        try {
            testAnimation({ opacity: [1] });
        }
        catch (e) {
            return false;
        }
        return true;
    },
    finished: () => Boolean(testAnimation({ opacity: [0, 1] }, { duration: 0.001 }).finished),
    linearEasing: () => {
        try {
            testAnimation({ opacity: 0 }, { easing: "linear(0, 1)" });
        }
        catch (e) {
            return false;
        }
        return true;
    },
};
const results = {};
const supports = {};
for (const key in featureTests) {
    supports[key] = () => {
        if (results[key] === undefined)
            results[key] =
                featureTests[key]();
        return results[key];
    };
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js ***!
  \*****************************************************************************/
/*! exports provided: getStyleName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyleName", function() { return getStyleName; });
/* harmony import */ var _transforms_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transforms.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/transforms.es.js");


function getStyleName(key) {
    if (_transforms_es_js__WEBPACK_IMPORTED_MODULE_0__["transformAlias"][key])
        key = _transforms_es_js__WEBPACK_IMPORTED_MODULE_0__["transformAlias"][key];
    return Object(_transforms_es_js__WEBPACK_IMPORTED_MODULE_0__["isTransform"])(key) ? Object(_transforms_es_js__WEBPACK_IMPORTED_MODULE_0__["asTransformCssVar"])(key) : key;
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/get-unit.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/get-unit.es.js ***!
  \***********************************************************************/
/*! exports provided: getUnitConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnitConverter", function() { return getUnitConverter; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");


function getUnitConverter(keyframes, definition) {
    var _a;
    let toUnit = (definition === null || definition === void 0 ? void 0 : definition.toDefaultUnit) || _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["noopReturn"];
    const finalKeyframe = keyframes[keyframes.length - 1];
    if (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(finalKeyframe)) {
        const unit = ((_a = finalKeyframe.match(/(-?[\d.]+)([a-z%]*)/)) === null || _a === void 0 ? void 0 : _a[2]) || "";
        if (unit)
            toUnit = (value) => value + unit;
    }
    return toUnit;
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js":
/*!************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js ***!
  \************************************************************************/
/*! exports provided: hydrateKeyframes, keyframesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrateKeyframes", function() { return hydrateKeyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframesList", function() { return keyframesList; });
function hydrateKeyframes(keyframes, readInitialValue) {
    for (let i = 0; i < keyframes.length; i++) {
        if (keyframes[i] === null) {
            keyframes[i] = i ? keyframes[i - 1] : readInitialValue();
        }
    }
    return keyframes;
}
const keyframesList = (keyframes) => Array.isArray(keyframes) ? keyframes : [keyframes];




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/options.es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/options.es.js ***!
  \**********************************************************************/
/*! exports provided: getOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptions", function() { return getOptions; });
const getOptions = (options, key) => 
/**
 * TODO: Make test for this
 * Always return a new object otherwise delay is overwritten by results of stagger
 * and this results in no stagger
 */
options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options);




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js ***!
  \*****************************************************************************/
/*! exports provided: stopAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopAnimation", function() { return stopAnimation; });
function stopAnimation(animation, needsCommit = true) {
    if (!animation || animation.playState === "finished")
        return;
    // Suppress error thrown by WAAPI
    try {
        if (animation.stop) {
            animation.stop();
        }
        else {
            needsCommit && animation.commitStyles();
            animation.cancel();
        }
    }
    catch (e) { }
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/style-object.es.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/style-object.es.js ***!
  \***************************************************************************/
/*! exports provided: createStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return createStyles; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
/* harmony import */ var _transforms_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transforms.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/transforms.es.js");



function createStyles(keyframes) {
    const initialKeyframes = {};
    const transformKeys = [];
    for (let key in keyframes) {
        const value = keyframes[key];
        if (Object(_transforms_es_js__WEBPACK_IMPORTED_MODULE_1__["isTransform"])(key)) {
            if (_transforms_es_js__WEBPACK_IMPORTED_MODULE_1__["transformAlias"][key])
                key = _transforms_es_js__WEBPACK_IMPORTED_MODULE_1__["transformAlias"][key];
            transformKeys.push(key);
            key = Object(_transforms_es_js__WEBPACK_IMPORTED_MODULE_1__["asTransformCssVar"])(key);
        }
        let initialKeyframe = Array.isArray(value) ? value[0] : value;
        /**
         * If this is a number and we have a default value type, convert the number
         * to this type.
         */
        const definition = _transforms_es_js__WEBPACK_IMPORTED_MODULE_1__["transformDefinitions"].get(key);
        if (definition) {
            initialKeyframe = Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value)
                ? definition.toDefaultUnit(value)
                : value;
        }
        initialKeyframes[key] = initialKeyframe;
    }
    if (transformKeys.length) {
        initialKeyframes.transform = Object(_transforms_es_js__WEBPACK_IMPORTED_MODULE_1__["buildTransformTemplate"])(transformKeys);
    }
    return initialKeyframes;
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/style-string.es.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/style-string.es.js ***!
  \***************************************************************************/
/*! exports provided: createStyleString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyleString", function() { return createStyleString; });
/* harmony import */ var _style_object_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style-object.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/style-object.es.js");


const camelLetterToPipeLetter = (letter) => `-${letter.toLowerCase()}`;
const camelToPipeCase = (str) => str.replace(/[A-Z]/g, camelLetterToPipeLetter);
function createStyleString(target = {}) {
    const styles = Object(_style_object_es_js__WEBPACK_IMPORTED_MODULE_0__["createStyles"])(target);
    let style = "";
    for (const key in styles) {
        style += key.startsWith("--") ? key : camelToPipeCase(key);
        style += `: ${styles[key]}; `;
    }
    return style;
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/animate/utils/transforms.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/animate/utils/transforms.es.js ***!
  \*************************************************************************/
/*! exports provided: addTransformToElement, asTransformCssVar, axes, buildTransformTemplate, compareTransformOrder, isTransform, transformAlias, transformDefinitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTransformToElement", function() { return addTransformToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asTransformCssVar", function() { return asTransformCssVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axes", function() { return axes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTransformTemplate", function() { return buildTransformTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareTransformOrder", function() { return compareTransformOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransform", function() { return isTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformAlias", function() { return transformAlias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformDefinitions", function() { return transformDefinitions; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
/* harmony import */ var _data_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.es.js */ "./node_modules/@motionone/dom/dist/animate/data.es.js");



/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */
const axes = ["", "X", "Y", "Z"];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */
const order = ["translate", "scale", "rotate", "skew"];
const transformAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
};
const rotation = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (v) => v + "deg",
};
const baseTransformProperties = {
    translate: {
        syntax: "<length-percentage>",
        initialValue: "0px",
        toDefaultUnit: (v) => v + "px",
    },
    rotate: rotation,
    scale: {
        syntax: "<number>",
        initialValue: 1,
        toDefaultUnit: _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["noopReturn"],
    },
    skew: rotation,
};
const transformDefinitions = new Map();
const asTransformCssVar = (name) => `--motion-${name}`;
/**
 * Generate a list of every possible transform key
 */
const transforms = ["x", "y", "z"];
order.forEach((name) => {
    axes.forEach((axis) => {
        transforms.push(name + axis);
        transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */
const compareTransformOrder = (a, b) => transforms.indexOf(a) - transforms.indexOf(b);
/**
 * Provide a quick way to check if a string is the name of a transform
 */
const transformLookup = new Set(transforms);
const isTransform = (name) => transformLookup.has(name);
const addTransformToElement = (element, name) => {
    // Map x to translateX etc
    if (transformAlias[name])
        name = transformAlias[name];
    const { transforms } = Object(_data_es_js__WEBPACK_IMPORTED_MODULE_1__["getAnimationData"])(element);
    Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["addUniqueItem"])(transforms, name);
    /**
     * TODO: An optimisation here could be to cache the transform in element data
     * and only update if this has changed.
     */
    element.style.transform = buildTransformTemplate(transforms);
};
const buildTransformTemplate = (transforms) => transforms
    .sort(compareTransformOrder)
    .reduce(transformListToString, "")
    .trim();
const transformListToString = (template, name) => `${template} ${name}(var(${asTransformCssVar(name)}))`;




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/easing/create-generator-easing.es.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/easing/create-generator-easing.es.js ***!
  \*******************************************************************************/
/*! exports provided: createGeneratorEasing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGeneratorEasing", function() { return createGeneratorEasing; });
/* harmony import */ var _motionone_generators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/generators */ "./node_modules/@motionone/generators/dist/index.es.js");
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
/* harmony import */ var _animate_utils_get_unit_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animate/utils/get-unit.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/get-unit.es.js");
/* harmony import */ var _animate_utils_transforms_es_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animate/utils/transforms.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/transforms.es.js");
/* harmony import */ var _animate_utils_get_style_name_es_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animate/utils/get-style-name.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js");






function canGenerate(value) {
    return Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(value) && !isNaN(value);
}
function getAsNumber(value) {
    return Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(value) ? parseFloat(value) : value;
}
function createGeneratorEasing(createGenerator) {
    const keyframesCache = new WeakMap();
    return (options = {}) => {
        const generatorCache = new Map();
        const getGenerator = (from = 0, to = 100, velocity = 0, isScale = false) => {
            const key = `${from}-${to}-${velocity}-${isScale}`;
            if (!generatorCache.has(key)) {
                generatorCache.set(key, createGenerator(Object.assign({ from,
                    to,
                    velocity }, options)));
            }
            return generatorCache.get(key);
        };
        const getKeyframes = (generator, toUnit) => {
            if (!keyframesCache.has(generator)) {
                keyframesCache.set(generator, Object(_motionone_generators__WEBPACK_IMPORTED_MODULE_0__["pregenerateKeyframes"])(generator, toUnit));
            }
            return keyframesCache.get(generator);
        };
        return {
            createAnimation: (keyframes, shouldGenerate = true, getOrigin, name, motionValue) => {
                let settings;
                let origin;
                let target;
                let velocity = 0;
                let toUnit = _motionone_utils__WEBPACK_IMPORTED_MODULE_1__["noopReturn"];
                const numKeyframes = keyframes.length;
                /**
                 * If we should generate an animation for this value, run some preperation
                 * like resolving target/origin, finding a unit (if any) and determine if
                 * it is actually possible to generate.
                 */
                if (shouldGenerate) {
                    toUnit = Object(_animate_utils_get_unit_es_js__WEBPACK_IMPORTED_MODULE_2__["getUnitConverter"])(keyframes, name ? _animate_utils_transforms_es_js__WEBPACK_IMPORTED_MODULE_3__["transformDefinitions"].get(Object(_animate_utils_get_style_name_es_js__WEBPACK_IMPORTED_MODULE_4__["getStyleName"])(name)) : undefined);
                    const targetDefinition = keyframes[numKeyframes - 1];
                    target = getAsNumber(targetDefinition);
                    if (numKeyframes > 1 && keyframes[0] !== null) {
                        /**
                         * If we have multiple keyframes, take the initial keyframe as the origin.
                         */
                        origin = getAsNumber(keyframes[0]);
                    }
                    else {
                        const prevGenerator = motionValue === null || motionValue === void 0 ? void 0 : motionValue.generator;
                        /**
                         * If we have an existing generator for this value we can use it to resolve
                         * the animation's current value and velocity.
                         */
                        if (prevGenerator) {
                            /**
                             * If we have a generator for this value we can use it to resolve
                             * the animations's current value and velocity.
                             */
                            const { animation, generatorStartTime } = motionValue;
                            const startTime = (animation === null || animation === void 0 ? void 0 : animation.startTime) || generatorStartTime || 0;
                            const currentTime = (animation === null || animation === void 0 ? void 0 : animation.currentTime) || performance.now() - startTime;
                            const prevGeneratorCurrent = prevGenerator(currentTime).current;
                            origin = prevGeneratorCurrent;
                            velocity = Object(_motionone_generators__WEBPACK_IMPORTED_MODULE_0__["calcGeneratorVelocity"])((t) => prevGenerator(t).current, currentTime, prevGeneratorCurrent);
                        }
                        else if (getOrigin) {
                            /**
                             * As a last resort, read the origin from the DOM.
                             */
                            origin = getAsNumber(getOrigin());
                        }
                    }
                }
                /**
                 * If we've determined it is possible to generate an animation, do so.
                 */
                if (canGenerate(origin) && canGenerate(target)) {
                    const generator = getGenerator(origin, target, velocity, name === null || name === void 0 ? void 0 : name.includes("scale"));
                    settings = Object.assign(Object.assign({}, getKeyframes(generator, toUnit)), { easing: "linear" });
                    // TODO Add test for this
                    if (motionValue) {
                        motionValue.generator = generator;
                        motionValue.generatorStartTime = performance.now();
                    }
                }
                /**
                 * If by now we haven't generated a set of keyframes, create a generic generator
                 * based on the provided props that animates from 0-100 to fetch a rough
                 * "overshootDuration" - the moment when the generator first hits the animation target.
                 * Then return animation settings that will run a normal animation for that duration.
                 */
                if (!settings) {
                    const keyframesMetadata = getKeyframes(getGenerator(0, 100));
                    settings = {
                        easing: "ease",
                        duration: keyframesMetadata.overshootDuration,
                    };
                }
                return settings;
            },
        };
    };
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/easing/glide/index.es.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/easing/glide/index.es.js ***!
  \*******************************************************************/
/*! exports provided: glide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glide", function() { return glide; });
/* harmony import */ var _motionone_generators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/generators */ "./node_modules/@motionone/generators/dist/index.es.js");
/* harmony import */ var _create_generator_easing_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create-generator-easing.es.js */ "./node_modules/@motionone/dom/dist/easing/create-generator-easing.es.js");



const glide = Object(_create_generator_easing_es_js__WEBPACK_IMPORTED_MODULE_1__["createGeneratorEasing"])(_motionone_generators__WEBPACK_IMPORTED_MODULE_0__["glide"]);




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/easing/spring/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/easing/spring/index.es.js ***!
  \********************************************************************/
/*! exports provided: spring */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return spring; });
/* harmony import */ var _motionone_generators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/generators */ "./node_modules/@motionone/generators/dist/index.es.js");
/* harmony import */ var _create_generator_easing_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create-generator-easing.es.js */ "./node_modules/@motionone/dom/dist/easing/create-generator-easing.es.js");



const spring = Object(_create_generator_easing_es_js__WEBPACK_IMPORTED_MODULE_1__["createGeneratorEasing"])(_motionone_generators__WEBPACK_IMPORTED_MODULE_0__["spring"]);




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/gestures/in-view.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/gestures/in-view.es.js ***!
  \*****************************************************************/
/*! exports provided: inView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inView", function() { return inView; });
/* harmony import */ var _utils_resolve_elements_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/resolve-elements.es.js */ "./node_modules/@motionone/dom/dist/utils/resolve-elements.es.js");
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");



const thresholds = {
    any: 0,
    all: 1,
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "any" } = {}) {
    /**
     * If this browser doesn't support IntersectionObserver, return a dummy stop function.
     * Default triggering of onStart is tricky - it could be used for starting/stopping
     * videos, lazy loading content etc. We could provide an option to enable a fallback, or
     * provide a fallback callback option.
     */
    if (typeof IntersectionObserver === "undefined") {
        return () => { };
    }
    const elements = Object(_utils_resolve_elements_es_js__WEBPACK_IMPORTED_MODULE_0__["resolveElements"])(elementOrSelector);
    const activeIntersections = new WeakMap();
    const onIntersectionChange = (entries) => {
        entries.forEach((entry) => {
            const onEnd = activeIntersections.get(entry.target);
            /**
             * If there's no change to the intersection, we don't need to
             * do anything here.
             */
            if (entry.isIntersecting === Boolean(onEnd))
                return;
            if (entry.isIntersecting) {
                const newOnEnd = onStart(entry);
                if (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(newOnEnd)) {
                    activeIntersections.set(entry.target, newOnEnd);
                }
                else {
                    observer.unobserve(entry.target);
                }
            }
            else if (onEnd) {
                onEnd(entry);
                activeIntersections.delete(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
        root,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholds[amount],
    });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/gestures/resize/handle-element.es.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/gestures/resize/handle-element.es.js ***!
  \*******************************************************************************/
/*! exports provided: resizeElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeElement", function() { return resizeElement; });
/* harmony import */ var _utils_resolve_elements_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/resolve-elements.es.js */ "./node_modules/@motionone/dom/dist/utils/resolve-elements.es.js");


const resizeHandlers = new WeakMap();
let observer;
function getElementSize(target, borderBoxSize) {
    if (borderBoxSize) {
        const { inlineSize, blockSize } = borderBoxSize[0];
        return { width: inlineSize, height: blockSize };
    }
    else if (target instanceof SVGElement && "getBBox" in target) {
        return target.getBBox();
    }
    else {
        return {
            width: target.offsetWidth,
            height: target.offsetHeight,
        };
    }
}
function notifyTarget({ target, contentRect, borderBoxSize, }) {
    var _a;
    (_a = resizeHandlers.get(target)) === null || _a === void 0 ? void 0 : _a.forEach((handler) => {
        handler({
            target,
            contentSize: contentRect,
            get size() {
                return getElementSize(target, borderBoxSize);
            },
        });
    });
}
function notifyAll(entries) {
    entries.forEach(notifyTarget);
}
function createResizeObserver() {
    if (typeof ResizeObserver === "undefined")
        return;
    observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
    if (!observer)
        createResizeObserver();
    const elements = Object(_utils_resolve_elements_es_js__WEBPACK_IMPORTED_MODULE_0__["resolveElements"])(target);
    elements.forEach((element) => {
        let elementHandlers = resizeHandlers.get(element);
        if (!elementHandlers) {
            elementHandlers = new Set();
            resizeHandlers.set(element, elementHandlers);
        }
        elementHandlers.add(handler);
        observer === null || observer === void 0 ? void 0 : observer.observe(element);
    });
    return () => {
        elements.forEach((element) => {
            const elementHandlers = resizeHandlers.get(element);
            elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
            if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
                observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
            }
        });
    };
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/gestures/resize/handle-window.es.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/gestures/resize/handle-window.es.js ***!
  \******************************************************************************/
/*! exports provided: resizeWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeWindow", function() { return resizeWindow; });
const windowCallbacks = new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
    windowResizeHandler = () => {
        const size = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        const info = {
            target: window,
            size,
            contentSize: size,
        };
        windowCallbacks.forEach((callback) => callback(info));
    };
    window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler)
        createWindowResizeHandler();
    return () => {
        windowCallbacks.delete(callback);
        if (!windowCallbacks.size && windowResizeHandler) {
            windowResizeHandler = undefined;
        }
    };
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/gestures/resize/index.es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/gestures/resize/index.es.js ***!
  \**********************************************************************/
/*! exports provided: resize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return resize; });
/* harmony import */ var _handle_element_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handle-element.es.js */ "./node_modules/@motionone/dom/dist/gestures/resize/handle-element.es.js");
/* harmony import */ var _handle_window_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handle-window.es.js */ "./node_modules/@motionone/dom/dist/gestures/resize/handle-window.es.js");
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");




function resize(a, b) {
    return Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(a) ? Object(_handle_window_es_js__WEBPACK_IMPORTED_MODULE_1__["resizeWindow"])(a) : Object(_handle_element_es_js__WEBPACK_IMPORTED_MODULE_0__["resizeElement"])(a, b);
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/gestures/scroll/index.es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/gestures/scroll/index.es.js ***!
  \**********************************************************************/
/*! exports provided: scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _resize_index_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resize/index.es.js */ "./node_modules/@motionone/dom/dist/gestures/resize/index.es.js");
/* harmony import */ var _info_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info.es.js */ "./node_modules/@motionone/dom/dist/gestures/scroll/info.es.js");
/* harmony import */ var _on_scroll_handler_es_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on-scroll-handler.es.js */ "./node_modules/@motionone/dom/dist/gestures/scroll/on-scroll-handler.es.js");





const scrollListeners = new WeakMap();
const resizeListeners = new WeakMap();
const onScrollHandlers = new WeakMap();
const getEventTarget = (element) => element === document.documentElement ? window : element;
function scroll(onScroll, _a = {}) {
    var { container = document.documentElement } = _a, options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["container"]);
    let containerHandlers = onScrollHandlers.get(container);
    /**
     * Get the onScroll handlers for this container.
     * If one isn't found, create a new one.
     */
    if (!containerHandlers) {
        containerHandlers = new Set();
        onScrollHandlers.set(container, containerHandlers);
    }
    /**
     * Create a new onScroll handler for the provided callback.
     */
    const info = Object(_info_es_js__WEBPACK_IMPORTED_MODULE_2__["createScrollInfo"])();
    const containerHandler = Object(_on_scroll_handler_es_js__WEBPACK_IMPORTED_MODULE_3__["createOnScrollHandler"])(container, onScroll, info, options);
    containerHandlers.add(containerHandler);
    /**
     * Check if there's a scroll event listener for this container.
     * If not, create one.
     */
    if (!scrollListeners.has(container)) {
        const listener = () => {
            const time = performance.now();
            for (const handler of containerHandlers)
                handler.measure();
            for (const handler of containerHandlers)
                handler.update(time);
            for (const handler of containerHandlers)
                handler.notify();
        };
        scrollListeners.set(container, listener);
        const target = getEventTarget(container);
        window.addEventListener("resize", listener, { passive: true });
        if (container !== document.documentElement) {
            resizeListeners.set(container, Object(_resize_index_es_js__WEBPACK_IMPORTED_MODULE_1__["resize"])(container, listener));
        }
        target.addEventListener("scroll", listener, { passive: true });
    }
    const listener = scrollListeners.get(container);
    const onLoadProcesss = requestAnimationFrame(listener);
    return () => {
        var _a;
        if (typeof onScroll !== "function")
            onScroll.stop();
        cancelAnimationFrame(onLoadProcesss);
        /**
         * Check if we even have any handlers for this container.
         */
        const containerHandlers = onScrollHandlers.get(container);
        if (!containerHandlers)
            return;
        containerHandlers.delete(containerHandler);
        if (containerHandlers.size)
            return;
        /**
         * If no more handlers, remove the scroll listener too.
         */
        const listener = scrollListeners.get(container);
        scrollListeners.delete(container);
        if (listener) {
            getEventTarget(container).removeEventListener("scroll", listener);
            (_a = resizeListeners.get(container)) === null || _a === void 0 ? void 0 : _a();
            window.removeEventListener("resize", listener);
        }
    };
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/gestures/scroll/info.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/gestures/scroll/info.es.js ***!
  \*********************************************************************/
/*! exports provided: createScrollInfo, updateScrollInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createScrollInfo", function() { return createScrollInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateScrollInfo", function() { return updateScrollInfo; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");


/**
 * A time in milliseconds, beyond which we consider the scroll velocity to be 0.
 */
const maxElapsed = 50;
const createAxisInfo = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
});
const createScrollInfo = () => ({
    time: 0,
    x: createAxisInfo(),
    y: createAxisInfo(),
});
const keys = {
    x: {
        length: "Width",
        position: "Left",
    },
    y: {
        length: "Height",
        position: "Top",
    },
};
function updateAxisInfo(element, axisName, info, time) {
    const axis = info[axisName];
    const { length, position } = keys[axisName];
    const prev = axis.current;
    const prevTime = info.time;
    axis.current = element[`scroll${position}`];
    axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
    axis.offset.length = 0;
    axis.offset[0] = 0;
    axis.offset[1] = axis.scrollLength;
    axis.progress = Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["progress"])(0, axis.scrollLength, axis.current);
    const elapsed = time - prevTime;
    axis.velocity =
        elapsed > maxElapsed ? 0 : Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["velocityPerSecond"])(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
    updateAxisInfo(element, "x", info, time);
    updateAxisInfo(element, "y", info, time);
    info.time = time;
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/gestures/scroll/offsets/edge.es.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/gestures/scroll/offsets/edge.es.js ***!
  \*****************************************************************************/
/*! exports provided: namedEdges, resolveEdge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namedEdges", function() { return namedEdges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveEdge", function() { return resolveEdge; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");


const namedEdges = {
    start: 0,
    center: 0.5,
    end: 1,
};
function resolveEdge(edge, length, inset = 0) {
    let delta = 0;
    /**
     * If we have this edge defined as a preset, replace the definition
     * with the numerical value.
     */
    if (namedEdges[edge] !== undefined) {
        edge = namedEdges[edge];
    }
    /**
     * Handle unit values
     */
    if (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(edge)) {
        const asNumber = parseFloat(edge);
        if (edge.endsWith("px")) {
            delta = asNumber;
        }
        else if (edge.endsWith("%")) {
            edge = asNumber / 100;
        }
        else if (edge.endsWith("vw")) {
            delta = (asNumber / 100) * document.documentElement.clientWidth;
        }
        else if (edge.endsWith("vh")) {
            delta = (asNumber / 100) * document.documentElement.clientHeight;
        }
        else {
            edge = asNumber;
        }
    }
    /**
     * If the edge is defined as a number, handle as a progress value.
     */
    if (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(edge)) {
        delta = length * edge;
    }
    return inset + delta;
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/gestures/scroll/offsets/index.es.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/gestures/scroll/offsets/index.es.js ***!
  \******************************************************************************/
/*! exports provided: resolveOffsets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveOffsets", function() { return resolveOffsets; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
/* harmony import */ var _inset_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inset.es.js */ "./node_modules/@motionone/dom/dist/gestures/scroll/offsets/inset.es.js");
/* harmony import */ var _presets_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presets.es.js */ "./node_modules/@motionone/dom/dist/gestures/scroll/offsets/presets.es.js");
/* harmony import */ var _offset_es_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offset.es.js */ "./node_modules/@motionone/dom/dist/gestures/scroll/offsets/offset.es.js");





const point = { x: 0, y: 0 };
function resolveOffsets(container, info, options) {
    let { offset: offsetDefinition = _presets_es_js__WEBPACK_IMPORTED_MODULE_2__["ScrollOffset"].All } = options;
    const { target = container, axis = "y" } = options;
    const lengthLabel = axis === "y" ? "height" : "width";
    const inset = target !== container ? Object(_inset_es_js__WEBPACK_IMPORTED_MODULE_1__["calcInset"])(target, container) : point;
    /**
     * Measure the target and container. If they're the same thing then we
     * use the container's scrollWidth/Height as the target, from there
     * all other calculations can remain the same.
     */
    const targetSize = target === container
        ? { width: container.scrollWidth, height: container.scrollHeight }
        : { width: target.clientWidth, height: target.clientHeight };
    const containerSize = {
        width: container.clientWidth,
        height: container.clientHeight,
    };
    /**
     * Reset the length of the resolved offset array rather than creating a new one.
     * TODO: More reusable data structures for targetSize/containerSize would also be good.
     */
    info[axis].offset.length = 0;
    /**
     * Populate the offset array by resolving the user's offset definition into
     * a list of pixel scroll offets.
     */
    let hasChanged = !info[axis].interpolate;
    const numOffsets = offsetDefinition.length;
    for (let i = 0; i < numOffsets; i++) {
        const offset = Object(_offset_es_js__WEBPACK_IMPORTED_MODULE_3__["resolveOffset"])(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
        if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
            hasChanged = true;
        }
        info[axis].offset[i] = offset;
    }
    /**
     * If the pixel scroll offsets have changed, create a new interpolator function
     * to map scroll value into a progress.
     */
    if (hasChanged) {
        info[axis].interpolate = Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["interpolate"])(Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["defaultOffset"])(numOffsets), info[axis].offset);
        info[axis].interpolatorOffsets = [...info[axis].offset];
    }
    info[axis].progress = info[axis].interpolate(info[axis].current);
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/gestures/scroll/offsets/inset.es.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/gestures/scroll/offsets/inset.es.js ***!
  \******************************************************************************/
/*! exports provided: calcInset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcInset", function() { return calcInset; });
function calcInset(element, container) {
    let inset = { x: 0, y: 0 };
    let current = element;
    while (current && current !== container) {
        if (current instanceof HTMLElement) {
            inset.x += current.offsetLeft;
            inset.y += current.offsetTop;
            current = current.offsetParent;
        }
        else if (current instanceof SVGGraphicsElement && "getBBox" in current) {
            const { top, left } = current.getBBox();
            inset.x += left;
            inset.y += top;
            /**
             * Assign the next parent element as the <svg /> tag.
             */
            while (current && current.tagName !== "svg") {
                current = current.parentNode;
            }
        }
    }
    return inset;
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/gestures/scroll/offsets/offset.es.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/gestures/scroll/offsets/offset.es.js ***!
  \*******************************************************************************/
/*! exports provided: resolveOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveOffset", function() { return resolveOffset; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
/* harmony import */ var _edge_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edge.es.js */ "./node_modules/@motionone/dom/dist/gestures/scroll/offsets/edge.es.js");



const defaultOffset = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
    let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
    let targetPoint = 0;
    let containerPoint = 0;
    if (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(offset)) {
        /**
         * If we're provided offset: [0, 0.5, 1] then each number x should become
         * [x, x], so we default to the behaviour of mapping 0 => 0 of both target
         * and container etc.
         */
        offsetDefinition = [offset, offset];
    }
    else if (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(offset)) {
        offset = offset.trim();
        if (offset.includes(" ")) {
            offsetDefinition = offset.split(" ");
        }
        else {
            /**
             * If we're provided a definition like "100px" then we want to apply
             * that only to the top of the target point, leaving the container at 0.
             * Whereas a named offset like "end" should be applied to both.
             */
            offsetDefinition = [
                offset,
                _edge_es_js__WEBPACK_IMPORTED_MODULE_1__["namedEdges"][offset] ? offset : `0`,
            ];
        }
    }
    targetPoint = Object(_edge_es_js__WEBPACK_IMPORTED_MODULE_1__["resolveEdge"])(offsetDefinition[0], targetLength, targetInset);
    containerPoint = Object(_edge_es_js__WEBPACK_IMPORTED_MODULE_1__["resolveEdge"])(offsetDefinition[1], containerLength);
    return targetPoint - containerPoint;
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/gestures/scroll/offsets/presets.es.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/gestures/scroll/offsets/presets.es.js ***!
  \********************************************************************************/
/*! exports provided: ScrollOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollOffset", function() { return ScrollOffset; });
const ScrollOffset = {
    Enter: [
        [0, 1],
        [1, 1],
    ],
    Exit: [
        [0, 0],
        [1, 0],
    ],
    Any: [
        [1, 0],
        [0, 1],
    ],
    All: [
        [0, 0],
        [1, 1],
    ],
};




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/gestures/scroll/on-scroll-handler.es.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/gestures/scroll/on-scroll-handler.es.js ***!
  \**********************************************************************************/
/*! exports provided: createOnScrollHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOnScrollHandler", function() { return createOnScrollHandler; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
/* harmony import */ var _info_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.es.js */ "./node_modules/@motionone/dom/dist/gestures/scroll/info.es.js");
/* harmony import */ var _offsets_index_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offsets/index.es.js */ "./node_modules/@motionone/dom/dist/gestures/scroll/offsets/index.es.js");




function measure(container, target = container, info) {
    /**
     * Find inset of target within scrollable container
     */
    info.x.targetOffset = 0;
    info.y.targetOffset = 0;
    if (target !== container) {
        let node = target;
        while (node && node != container) {
            info.x.targetOffset += node.offsetLeft;
            info.y.targetOffset += node.offsetTop;
            node = node.offsetParent;
        }
    }
    info.x.targetLength =
        target === container ? target.scrollWidth : target.clientWidth;
    info.y.targetLength =
        target === container ? target.scrollHeight : target.clientHeight;
    info.x.containerLength = container.clientWidth;
    info.y.containerLength = container.clientHeight;
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
    const axis = options.axis || "y";
    return {
        measure: () => measure(element, options.target, info),
        update: (time) => {
            Object(_info_es_js__WEBPACK_IMPORTED_MODULE_1__["updateScrollInfo"])(element, info, time);
            if (options.offset || options.target) {
                Object(_offsets_index_es_js__WEBPACK_IMPORTED_MODULE_2__["resolveOffsets"])(element, info, options);
            }
        },
        notify: Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(onScroll)
            ? () => onScroll(info)
            : scrubAnimation(onScroll, info[axis]),
    };
}
function scrubAnimation(controls, axisInfo) {
    controls.pause();
    controls.forEachNative((animation, { easing }) => {
        var _a, _b;
        if (animation.updateDuration) {
            if (!easing)
                animation.easing = _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["noopReturn"];
            animation.updateDuration(1);
        }
        else {
            const timingOptions = { duration: 1000 };
            if (!easing)
                timingOptions.easing = "linear";
            (_b = (_a = animation.effect) === null || _a === void 0 ? void 0 : _a.updateTiming) === null || _b === void 0 ? void 0 : _b.call(_a, timingOptions);
        }
    });
    return () => {
        controls.currentTime = axisInfo.progress;
    };
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/index.es.js":
/*!******************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/index.es.js ***!
  \******************************************************/
/*! exports provided: animate, createAnimate, animateStyle, timeline, stagger, spring, glide, style, inView, resize, scroll, ScrollOffset, withControls, getAnimationData, getStyleName, createMotionState, mountedStates, createStyles, createStyleString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animate_index_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate/index.es.js */ "./node_modules/@motionone/dom/dist/animate/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return _animate_index_es_js__WEBPACK_IMPORTED_MODULE_0__["animate"]; });

/* harmony import */ var _animate_create_animate_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate/create-animate.es.js */ "./node_modules/@motionone/dom/dist/animate/create-animate.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimate", function() { return _animate_create_animate_es_js__WEBPACK_IMPORTED_MODULE_1__["createAnimate"]; });

/* harmony import */ var _animate_animate_style_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animate/animate-style.es.js */ "./node_modules/@motionone/dom/dist/animate/animate-style.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animateStyle", function() { return _animate_animate_style_es_js__WEBPACK_IMPORTED_MODULE_2__["animateStyle"]; });

/* harmony import */ var _timeline_index_es_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline/index.es.js */ "./node_modules/@motionone/dom/dist/timeline/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeline", function() { return _timeline_index_es_js__WEBPACK_IMPORTED_MODULE_3__["timeline"]; });

/* harmony import */ var _utils_stagger_es_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/stagger.es.js */ "./node_modules/@motionone/dom/dist/utils/stagger.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stagger", function() { return _utils_stagger_es_js__WEBPACK_IMPORTED_MODULE_4__["stagger"]; });

/* harmony import */ var _easing_spring_index_es_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./easing/spring/index.es.js */ "./node_modules/@motionone/dom/dist/easing/spring/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return _easing_spring_index_es_js__WEBPACK_IMPORTED_MODULE_5__["spring"]; });

/* harmony import */ var _easing_glide_index_es_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./easing/glide/index.es.js */ "./node_modules/@motionone/dom/dist/easing/glide/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "glide", function() { return _easing_glide_index_es_js__WEBPACK_IMPORTED_MODULE_6__["glide"]; });

/* harmony import */ var _animate_style_es_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animate/style.es.js */ "./node_modules/@motionone/dom/dist/animate/style.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _animate_style_es_js__WEBPACK_IMPORTED_MODULE_7__["style"]; });

/* harmony import */ var _gestures_in_view_es_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gestures/in-view.es.js */ "./node_modules/@motionone/dom/dist/gestures/in-view.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inView", function() { return _gestures_in_view_es_js__WEBPACK_IMPORTED_MODULE_8__["inView"]; });

/* harmony import */ var _gestures_resize_index_es_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gestures/resize/index.es.js */ "./node_modules/@motionone/dom/dist/gestures/resize/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return _gestures_resize_index_es_js__WEBPACK_IMPORTED_MODULE_9__["resize"]; });

/* harmony import */ var _gestures_scroll_index_es_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gestures/scroll/index.es.js */ "./node_modules/@motionone/dom/dist/gestures/scroll/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return _gestures_scroll_index_es_js__WEBPACK_IMPORTED_MODULE_10__["scroll"]; });

/* harmony import */ var _gestures_scroll_offsets_presets_es_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gestures/scroll/offsets/presets.es.js */ "./node_modules/@motionone/dom/dist/gestures/scroll/offsets/presets.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollOffset", function() { return _gestures_scroll_offsets_presets_es_js__WEBPACK_IMPORTED_MODULE_11__["ScrollOffset"]; });

/* harmony import */ var _animate_utils_controls_es_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./animate/utils/controls.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/controls.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withControls", function() { return _animate_utils_controls_es_js__WEBPACK_IMPORTED_MODULE_12__["withControls"]; });

/* harmony import */ var _animate_data_es_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./animate/data.es.js */ "./node_modules/@motionone/dom/dist/animate/data.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAnimationData", function() { return _animate_data_es_js__WEBPACK_IMPORTED_MODULE_13__["getAnimationData"]; });

/* harmony import */ var _animate_utils_get_style_name_es_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./animate/utils/get-style-name.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStyleName", function() { return _animate_utils_get_style_name_es_js__WEBPACK_IMPORTED_MODULE_14__["getStyleName"]; });

/* harmony import */ var _state_index_es_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state/index.es.js */ "./node_modules/@motionone/dom/dist/state/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMotionState", function() { return _state_index_es_js__WEBPACK_IMPORTED_MODULE_15__["createMotionState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountedStates", function() { return _state_index_es_js__WEBPACK_IMPORTED_MODULE_15__["mountedStates"]; });

/* harmony import */ var _animate_utils_style_object_es_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./animate/utils/style-object.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/style-object.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return _animate_utils_style_object_es_js__WEBPACK_IMPORTED_MODULE_16__["createStyles"]; });

/* harmony import */ var _animate_utils_style_string_es_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./animate/utils/style-string.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/style-string.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStyleString", function() { return _animate_utils_style_string_es_js__WEBPACK_IMPORTED_MODULE_17__["createStyleString"]; });





















/***/ }),

/***/ "./node_modules/@motionone/dom/dist/state/gestures/hover.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/state/gestures/hover.es.js ***!
  \*********************************************************************/
/*! exports provided: hover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hover", function() { return hover; });
/* harmony import */ var _utils_events_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/events.es.js */ "./node_modules/@motionone/dom/dist/state/utils/events.es.js");


const mouseEvent = (element, name, action) => (event) => {
    if (event.pointerType && event.pointerType !== "mouse")
        return;
    action();
    Object(_utils_events_es_js__WEBPACK_IMPORTED_MODULE_0__["dispatchPointerEvent"])(element, name, event);
};
const hover = {
    isActive: (options) => Boolean(options.hover),
    subscribe: (element, { enable, disable }) => {
        const onEnter = mouseEvent(element, "hoverstart", enable);
        const onLeave = mouseEvent(element, "hoverend", disable);
        element.addEventListener("pointerenter", onEnter);
        element.addEventListener("pointerleave", onLeave);
        return () => {
            element.removeEventListener("pointerenter", onEnter);
            element.removeEventListener("pointerleave", onLeave);
        };
    },
};




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/state/gestures/in-view.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/state/gestures/in-view.es.js ***!
  \***********************************************************************/
/*! exports provided: inView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inView", function() { return inView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_events_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/events.es.js */ "./node_modules/@motionone/dom/dist/state/utils/events.es.js");
/* harmony import */ var _gestures_in_view_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestures/in-view.es.js */ "./node_modules/@motionone/dom/dist/gestures/in-view.es.js");




const inView = {
    isActive: (options) => Boolean(options.inView),
    subscribe: (element, { enable, disable }, { inViewOptions = {} }) => {
        const { once } = inViewOptions, viewOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(inViewOptions, ["once"]);
        return Object(_gestures_in_view_es_js__WEBPACK_IMPORTED_MODULE_2__["inView"])(element, (enterEntry) => {
            enable();
            Object(_utils_events_es_js__WEBPACK_IMPORTED_MODULE_1__["dispatchViewEvent"])(element, "viewenter", enterEntry);
            if (!once) {
                return (leaveEntry) => {
                    disable();
                    Object(_utils_events_es_js__WEBPACK_IMPORTED_MODULE_1__["dispatchViewEvent"])(element, "viewleave", leaveEntry);
                };
            }
        }, viewOptions);
    },
};




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/state/gestures/press.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/state/gestures/press.es.js ***!
  \*********************************************************************/
/*! exports provided: press */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "press", function() { return press; });
/* harmony import */ var _utils_events_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/events.es.js */ "./node_modules/@motionone/dom/dist/state/utils/events.es.js");


const press = {
    isActive: (options) => Boolean(options.press),
    subscribe: (element, { enable, disable }) => {
        const onPointerUp = (event) => {
            disable();
            Object(_utils_events_es_js__WEBPACK_IMPORTED_MODULE_0__["dispatchPointerEvent"])(element, "pressend", event);
            window.removeEventListener("pointerup", onPointerUp);
        };
        const onPointerDown = (event) => {
            enable();
            Object(_utils_events_es_js__WEBPACK_IMPORTED_MODULE_0__["dispatchPointerEvent"])(element, "pressstart", event);
            window.addEventListener("pointerup", onPointerUp);
        };
        element.addEventListener("pointerdown", onPointerDown);
        return () => {
            element.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointerup", onPointerUp);
        };
    },
};




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/state/index.es.js":
/*!************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/state/index.es.js ***!
  \************************************************************/
/*! exports provided: createMotionState, mountedStates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMotionState", function() { return createMotionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountedStates", function() { return mountedStates; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
/* harmony import */ var _animate_animate_style_es_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animate/animate-style.es.js */ "./node_modules/@motionone/dom/dist/animate/animate-style.es.js");
/* harmony import */ var _animate_style_es_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animate/style.es.js */ "./node_modules/@motionone/dom/dist/animate/style.es.js");
/* harmony import */ var _animate_utils_options_es_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animate/utils/options.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/options.es.js");
/* harmony import */ var _utils_has_changed_es_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/has-changed.es.js */ "./node_modules/@motionone/dom/dist/state/utils/has-changed.es.js");
/* harmony import */ var _utils_resolve_variant_es_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/resolve-variant.es.js */ "./node_modules/@motionone/dom/dist/state/utils/resolve-variant.es.js");
/* harmony import */ var _utils_schedule_es_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/schedule.es.js */ "./node_modules/@motionone/dom/dist/state/utils/schedule.es.js");
/* harmony import */ var _gestures_in_view_es_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gestures/in-view.es.js */ "./node_modules/@motionone/dom/dist/state/gestures/in-view.es.js");
/* harmony import */ var _gestures_hover_es_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gestures/hover.es.js */ "./node_modules/@motionone/dom/dist/state/gestures/hover.es.js");
/* harmony import */ var _gestures_press_es_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gestures/press.es.js */ "./node_modules/@motionone/dom/dist/state/gestures/press.es.js");
/* harmony import */ var _utils_events_es_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/events.es.js */ "./node_modules/@motionone/dom/dist/state/utils/events.es.js");
/* harmony import */ var _motionone_animation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @motionone/animation */ "./node_modules/@motionone/animation/dist/index.es.js");















const gestures = { inView: _gestures_in_view_es_js__WEBPACK_IMPORTED_MODULE_9__["inView"], hover: _gestures_hover_es_js__WEBPACK_IMPORTED_MODULE_10__["hover"], press: _gestures_press_es_js__WEBPACK_IMPORTED_MODULE_11__["press"] };
/**
 * A list of state types, in priority order. If a value is defined in
 * a righter-most type, it will override any definition in a lefter-most.
 */
const stateTypes = ["initial", "animate", ...Object.keys(gestures), "exit"];
/**
 * A global store of all generated motion states. This can be used to lookup
 * a motion state for a given Element.
 */
const mountedStates = new WeakMap();
function createMotionState(options = {}, parent) {
    /**
     * The element represented by the motion state. This is an empty reference
     * when we create the state to support SSR and allow for later mounting
     * in view libraries.
     *
     * @ts-ignore
     */
    let element;
    /**
     * Calculate a depth that we can use to order motion states by tree depth.
     */
    let depth = parent ? parent.getDepth() + 1 : 0;
    /**
     * Track which states are currently active.
     */
    const activeStates = { initial: true, animate: true };
    /**
     * A map of functions that, when called, will remove event listeners for
     * a given gesture.
     */
    const gestureSubscriptions = {};
    /**
     * Initialise a context to share through motion states. This
     * will be populated by variant names (if any).
     */
    const context = {};
    for (const name of stateTypes) {
        context[name] =
            typeof options[name] === "string"
                ? options[name]
                : parent === null || parent === void 0 ? void 0 : parent.getContext()[name];
    }
    /**
     * If initial is set to false we use the animate prop as the initial
     * animation state.
     */
    const initialVariantSource = options.initial === false ? "animate" : "initial";
    /**
     * Destructure an initial target out from the resolved initial variant.
     */
    let _a = Object(_utils_resolve_variant_es_js__WEBPACK_IMPORTED_MODULE_7__["resolveVariant"])(options[initialVariantSource] || context[initialVariantSource], options.variants) || {}, target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["transition"]);
    /**
     * The base target is a cached map of values that we'll use to animate
     * back to if a value is removed from all active state types. This
     * is usually the initial value as read from the DOM, for instance if
     * it hasn't been defined in initial.
     */
    const baseTarget = Object.assign({}, target);
    /**
     * A generator that will be processed by the global animation scheduler.
     * This yields when it switches from reading the DOM to writing to it
     * to prevent layout thrashing.
     */
    function* animateUpdates() {
        var _a, _b;
        const prevTarget = target;
        target = {};
        const animationOptions = {};
        for (const name of stateTypes) {
            if (!activeStates[name])
                continue;
            const variant = Object(_utils_resolve_variant_es_js__WEBPACK_IMPORTED_MODULE_7__["resolveVariant"])(options[name]);
            if (!variant)
                continue;
            for (const key in variant) {
                if (key === "transition")
                    continue;
                target[key] = variant[key];
                animationOptions[key] = Object(_animate_utils_options_es_js__WEBPACK_IMPORTED_MODULE_5__["getOptions"])((_b = (_a = variant.transition) !== null && _a !== void 0 ? _a : options.transition) !== null && _b !== void 0 ? _b : {}, key);
            }
        }
        const allTargetKeys = new Set([
            ...Object.keys(target),
            ...Object.keys(prevTarget),
        ]);
        const animationFactories = [];
        allTargetKeys.forEach((key) => {
            var _a;
            if (target[key] === undefined) {
                target[key] = baseTarget[key];
            }
            if (Object(_utils_has_changed_es_js__WEBPACK_IMPORTED_MODULE_6__["hasChanged"])(prevTarget[key], target[key])) {
                (_a = baseTarget[key]) !== null && _a !== void 0 ? _a : (baseTarget[key] = _animate_style_es_js__WEBPACK_IMPORTED_MODULE_4__["style"].get(element, key));
                animationFactories.push(Object(_animate_animate_style_es_js__WEBPACK_IMPORTED_MODULE_3__["animateStyle"])(element, key, target[key], animationOptions[key], _motionone_animation__WEBPACK_IMPORTED_MODULE_13__["Animation"]));
            }
        });
        // Wait for all animation states to read from the DOM
        yield;
        const animations = animationFactories
            .map((factory) => factory())
            .filter(Boolean);
        if (!animations.length)
            return;
        const animationTarget = target;
        element.dispatchEvent(Object(_utils_events_es_js__WEBPACK_IMPORTED_MODULE_12__["motionEvent"])("motionstart", animationTarget));
        Promise.all(animations.map((animation) => animation.finished))
            .then(() => {
            element.dispatchEvent(Object(_utils_events_es_js__WEBPACK_IMPORTED_MODULE_12__["motionEvent"])("motioncomplete", animationTarget));
        })
            .catch(_motionone_utils__WEBPACK_IMPORTED_MODULE_2__["noop"]);
    }
    const setGesture = (name, isActive) => () => {
        activeStates[name] = isActive;
        Object(_utils_schedule_es_js__WEBPACK_IMPORTED_MODULE_8__["scheduleAnimation"])(state);
    };
    const updateGestureSubscriptions = () => {
        for (const name in gestures) {
            const isGestureActive = gestures[name].isActive(options);
            const remove = gestureSubscriptions[name];
            if (isGestureActive && !remove) {
                gestureSubscriptions[name] = gestures[name].subscribe(element, {
                    enable: setGesture(name, true),
                    disable: setGesture(name, false),
                }, options);
            }
            else if (!isGestureActive && remove) {
                remove();
                delete gestureSubscriptions[name];
            }
        }
    };
    const state = {
        update: (newOptions) => {
            if (!element)
                return;
            options = newOptions;
            updateGestureSubscriptions();
            Object(_utils_schedule_es_js__WEBPACK_IMPORTED_MODULE_8__["scheduleAnimation"])(state);
        },
        setActive: (name, isActive) => {
            if (!element)
                return;
            activeStates[name] = isActive;
            Object(_utils_schedule_es_js__WEBPACK_IMPORTED_MODULE_8__["scheduleAnimation"])(state);
        },
        animateUpdates,
        getDepth: () => depth,
        getTarget: () => target,
        getOptions: () => options,
        getContext: () => context,
        mount: (newElement) => {
            Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(Boolean(newElement), "Animation state must be mounted with valid Element");
            element = newElement;
            mountedStates.set(element, state);
            updateGestureSubscriptions();
            return () => {
                mountedStates.delete(element);
                Object(_utils_schedule_es_js__WEBPACK_IMPORTED_MODULE_8__["unscheduleAnimation"])(state);
                for (const key in gestureSubscriptions) {
                    gestureSubscriptions[key]();
                }
            };
        },
        isMounted: () => Boolean(element),
    };
    return state;
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/state/utils/events.es.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/state/utils/events.es.js ***!
  \*******************************************************************/
/*! exports provided: dispatchPointerEvent, dispatchViewEvent, motionEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchPointerEvent", function() { return dispatchPointerEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchViewEvent", function() { return dispatchViewEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "motionEvent", function() { return motionEvent; });
const motionEvent = (name, target) => new CustomEvent(name, { detail: { target } });
function dispatchPointerEvent(element, name, event) {
    element.dispatchEvent(new CustomEvent(name, { detail: { originalEvent: event } }));
}
function dispatchViewEvent(element, name, entry) {
    element.dispatchEvent(new CustomEvent(name, { detail: { originalEntry: entry } }));
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/state/utils/has-changed.es.js":
/*!************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/state/utils/has-changed.es.js ***!
  \************************************************************************/
/*! exports provided: hasChanged, shallowCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasChanged", function() { return hasChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowCompare", function() { return shallowCompare; });
function hasChanged(a, b) {
    if (typeof a !== typeof b)
        return true;
    if (Array.isArray(a) && Array.isArray(b))
        return !shallowCompare(a, b);
    return a !== b;
}
function shallowCompare(next, prev) {
    const prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (let i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/state/utils/is-variant.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/state/utils/is-variant.es.js ***!
  \***********************************************************************/
/*! exports provided: isVariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVariant", function() { return isVariant; });
function isVariant(definition) {
    return typeof definition === "object";
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/state/utils/resolve-variant.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/state/utils/resolve-variant.es.js ***!
  \****************************************************************************/
/*! exports provided: resolveVariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveVariant", function() { return resolveVariant; });
/* harmony import */ var _is_variant_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-variant.es.js */ "./node_modules/@motionone/dom/dist/state/utils/is-variant.es.js");


function resolveVariant(definition, variants) {
    if (Object(_is_variant_es_js__WEBPACK_IMPORTED_MODULE_0__["isVariant"])(definition)) {
        return definition;
    }
    else if (definition && variants) {
        return variants[definition];
    }
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/state/utils/schedule.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/state/utils/schedule.es.js ***!
  \*********************************************************************/
/*! exports provided: scheduleAnimation, unscheduleAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleAnimation", function() { return scheduleAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unscheduleAnimation", function() { return unscheduleAnimation; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");


let scheduled = undefined;
function processScheduledAnimations() {
    if (!scheduled)
        return;
    const generators = scheduled.sort(compareByDepth).map(fireAnimateUpdates);
    generators.forEach(fireNext);
    generators.forEach(fireNext);
    scheduled = undefined;
}
function scheduleAnimation(state) {
    if (!scheduled) {
        scheduled = [state];
        requestAnimationFrame(processScheduledAnimations);
    }
    else {
        Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["addUniqueItem"])(scheduled, state);
    }
}
function unscheduleAnimation(state) {
    scheduled && Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["removeItem"])(scheduled, state);
}
const compareByDepth = (a, b) => a.getDepth() - b.getDepth();
const fireAnimateUpdates = (state) => state.animateUpdates();
const fireNext = (iterator) => iterator.next();




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/timeline/index.es.js":
/*!***************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/timeline/index.es.js ***!
  \***************************************************************/
/*! exports provided: createAnimationsFromTimeline, timeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnimationsFromTimeline", function() { return createAnimationsFromTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeline", function() { return timeline; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
/* harmony import */ var _utils_stagger_es_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/stagger.es.js */ "./node_modules/@motionone/dom/dist/utils/stagger.es.js");
/* harmony import */ var _animate_animate_style_es_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animate/animate-style.es.js */ "./node_modules/@motionone/dom/dist/animate/animate-style.es.js");
/* harmony import */ var _animate_utils_controls_es_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animate/utils/controls.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/controls.es.js");
/* harmony import */ var _animate_utils_keyframes_es_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animate/utils/keyframes.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js");
/* harmony import */ var _animate_utils_options_es_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../animate/utils/options.es.js */ "./node_modules/@motionone/dom/dist/animate/utils/options.es.js");
/* harmony import */ var _utils_resolve_elements_es_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/resolve-elements.es.js */ "./node_modules/@motionone/dom/dist/utils/resolve-elements.es.js");
/* harmony import */ var _utils_calc_time_es_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/calc-time.es.js */ "./node_modules/@motionone/dom/dist/timeline/utils/calc-time.es.js");
/* harmony import */ var _utils_edit_es_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/edit.es.js */ "./node_modules/@motionone/dom/dist/timeline/utils/edit.es.js");
/* harmony import */ var _utils_sort_es_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/sort.es.js */ "./node_modules/@motionone/dom/dist/timeline/utils/sort.es.js");
/* harmony import */ var _motionone_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @motionone/animation */ "./node_modules/@motionone/animation/dist/index.es.js");














function timeline(definition, options = {}) {
    var _a;
    const animationDefinitions = createAnimationsFromTimeline(definition, options);
    /**
     * Create and start animations
     */
    const animationFactories = animationDefinitions
        .map((definition) => Object(_animate_animate_style_es_js__WEBPACK_IMPORTED_MODULE_4__["animateStyle"])(...definition, _motionone_animation__WEBPACK_IMPORTED_MODULE_12__["Animation"]))
        .filter(Boolean);
    return Object(_animate_utils_controls_es_js__WEBPACK_IMPORTED_MODULE_5__["withControls"])(animationFactories, options, 
    // Get the duration from the first animation definition
    (_a = animationDefinitions[0]) === null || _a === void 0 ? void 0 : _a[3].duration);
}
function createAnimationsFromTimeline(definition, _a = {}) {
    var { defaultOptions = {} } = _a, timelineOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["defaultOptions"]);
    const animationDefinitions = [];
    const elementSequences = new Map();
    const elementCache = {};
    const timeLabels = new Map();
    let prevTime = 0;
    let currentTime = 0;
    let totalDuration = 0;
    /**
     * Build the timeline by mapping over the definition array and converting
     * the definitions into keyframes and offsets with absolute time values.
     * These will later get converted into relative offsets in a second pass.
     */
    for (let i = 0; i < definition.length; i++) {
        const segment = definition[i];
        /**
         * If this is a timeline label, mark it and skip the rest of this iteration.
         */
        if (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_2__["isString"])(segment)) {
            timeLabels.set(segment, currentTime);
            continue;
        }
        else if (!Array.isArray(segment)) {
            timeLabels.set(segment.name, Object(_utils_calc_time_es_js__WEBPACK_IMPORTED_MODULE_9__["calcNextTime"])(currentTime, segment.at, prevTime, timeLabels));
            continue;
        }
        const [elementDefinition, keyframes, options = {}] = segment;
        /**
         * If a relative or absolute time value has been specified we need to resolve
         * it in relation to the currentTime.
         */
        if (options.at !== undefined) {
            currentTime = Object(_utils_calc_time_es_js__WEBPACK_IMPORTED_MODULE_9__["calcNextTime"])(currentTime, options.at, prevTime, timeLabels);
        }
        /**
         * Keep track of the maximum duration in this definition. This will be
         * applied to currentTime once the definition has been parsed.
         */
        let maxDuration = 0;
        /**
         * Find all the elements specified in the definition and parse value
         * keyframes from their timeline definitions.
         */
        const elements = Object(_utils_resolve_elements_es_js__WEBPACK_IMPORTED_MODULE_8__["resolveElements"])(elementDefinition, elementCache);
        const numElements = elements.length;
        for (let elementIndex = 0; elementIndex < numElements; elementIndex++) {
            const element = elements[elementIndex];
            const elementSequence = getElementSequence(element, elementSequences);
            for (const key in keyframes) {
                const valueSequence = getValueSequence(key, elementSequence);
                let valueKeyframes = Object(_animate_utils_keyframes_es_js__WEBPACK_IMPORTED_MODULE_6__["keyframesList"])(keyframes[key]);
                const valueOptions = Object(_animate_utils_options_es_js__WEBPACK_IMPORTED_MODULE_7__["getOptions"])(options, key);
                let { duration = defaultOptions.duration || _motionone_utils__WEBPACK_IMPORTED_MODULE_2__["defaults"].duration, easing = defaultOptions.easing || _motionone_utils__WEBPACK_IMPORTED_MODULE_2__["defaults"].easing, } = valueOptions;
                if (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_2__["isEasingGenerator"])(easing)) {
                    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(key === "opacity" || valueKeyframes.length > 1, "spring must be provided 2 keyframes within timeline()");
                    const custom = easing.createAnimation(valueKeyframes, key !== "opacity", () => 0, key);
                    easing = custom.easing;
                    valueKeyframes = custom.keyframes || valueKeyframes;
                    duration = custom.duration || duration;
                }
                const delay = Object(_utils_stagger_es_js__WEBPACK_IMPORTED_MODULE_3__["resolveOption"])(options.delay, elementIndex, numElements) || 0;
                const startTime = currentTime + delay;
                const targetTime = startTime + duration;
                /**
                 *
                 */
                let { offset = Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_2__["defaultOffset"])(valueKeyframes.length) } = valueOptions;
                /**
                 * If there's only one offset of 0, fill in a second with length 1
                 *
                 * TODO: Ensure there's a test that covers this removal
                 */
                if (offset.length === 1 && offset[0] === 0) {
                    offset[1] = 1;
                }
                /**
                 * Fill out if offset if fewer offsets than keyframes
                 */
                const remainder = offset.length - valueKeyframes.length;
                remainder > 0 && Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_2__["fillOffset"])(offset, remainder);
                /**
                 * If only one value has been set, ie [1], push a null to the start of
                 * the keyframe array. This will let us mark a keyframe at this point
                 * that will later be hydrated with the previous value.
                 */
                valueKeyframes.length === 1 && valueKeyframes.unshift(null);
                /**
                 * Add keyframes, mapping offsets to absolute time.
                 */
                Object(_utils_edit_es_js__WEBPACK_IMPORTED_MODULE_10__["addKeyframes"])(valueSequence, valueKeyframes, easing, offset, startTime, targetTime);
                maxDuration = Math.max(delay + duration, maxDuration);
                totalDuration = Math.max(targetTime, totalDuration);
            }
        }
        prevTime = currentTime;
        currentTime += maxDuration;
    }
    /**
     * For every element and value combination create a new animation.
     */
    elementSequences.forEach((valueSequences, element) => {
        for (const key in valueSequences) {
            const valueSequence = valueSequences[key];
            /**
             * Arrange all the keyframes in ascending time order.
             */
            valueSequence.sort(_utils_sort_es_js__WEBPACK_IMPORTED_MODULE_11__["compareByTime"]);
            const keyframes = [];
            const valueOffset = [];
            const valueEasing = [];
            /**
             * For each keyframe, translate absolute times into
             * relative offsets based on the total duration of the timeline.
             */
            for (let i = 0; i < valueSequence.length; i++) {
                const { at, value, easing } = valueSequence[i];
                keyframes.push(value);
                valueOffset.push(Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_2__["progress"])(0, totalDuration, at));
                valueEasing.push(easing || _motionone_utils__WEBPACK_IMPORTED_MODULE_2__["defaults"].easing);
            }
            /**
             * If the first keyframe doesn't land on offset: 0
             * provide one by duplicating the initial keyframe. This ensures
             * it snaps to the first keyframe when the animation starts.
             */
            if (valueOffset[0] !== 0) {
                valueOffset.unshift(0);
                keyframes.unshift(keyframes[0]);
                valueEasing.unshift("linear");
            }
            /**
             * If the last keyframe doesn't land on offset: 1
             * provide one with a null wildcard value. This will ensure it
             * stays static until the end of the animation.
             */
            if (valueOffset[valueOffset.length - 1] !== 1) {
                valueOffset.push(1);
                keyframes.push(null);
            }
            animationDefinitions.push([
                element,
                key,
                keyframes,
                Object.assign(Object.assign(Object.assign({}, defaultOptions), { duration: totalDuration, easing: valueEasing, offset: valueOffset }), timelineOptions),
            ]);
        }
    });
    return animationDefinitions;
}
function getElementSequence(element, sequences) {
    !sequences.has(element) && sequences.set(element, {});
    return sequences.get(element);
}
function getValueSequence(name, sequences) {
    if (!sequences[name])
        sequences[name] = [];
    return sequences[name];
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/timeline/utils/calc-time.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/timeline/utils/calc-time.es.js ***!
  \*************************************************************************/
/*! exports provided: calcNextTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcNextTime", function() { return calcNextTime; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");


function calcNextTime(current, next, prev, labels) {
    var _a;
    if (Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(next)) {
        return next;
    }
    else if (next.startsWith("-") || next.startsWith("+")) {
        return Math.max(0, current + parseFloat(next));
    }
    else if (next === "<") {
        return prev;
    }
    else {
        return (_a = labels.get(next)) !== null && _a !== void 0 ? _a : current;
    }
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/timeline/utils/edit.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/timeline/utils/edit.es.js ***!
  \********************************************************************/
/*! exports provided: addKeyframes, eraseKeyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addKeyframes", function() { return addKeyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eraseKeyframes", function() { return eraseKeyframes; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");


function eraseKeyframes(sequence, startTime, endTime) {
    for (let i = 0; i < sequence.length; i++) {
        const keyframe = sequence[i];
        if (keyframe.at > startTime && keyframe.at < endTime) {
            Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["removeItem"])(sequence, keyframe);
            // If we remove this item we have to push the pointer back one
            i--;
        }
    }
}
function addKeyframes(sequence, keyframes, easing, offset, startTime, endTime) {
    /**
     * Erase every existing value between currentTime and targetTime,
     * this will essentially splice this timeline into any currently
     * defined ones.
     */
    eraseKeyframes(sequence, startTime, endTime);
    for (let i = 0; i < keyframes.length; i++) {
        sequence.push({
            value: keyframes[i],
            at: Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["mix"])(startTime, endTime, offset[i]),
            easing: Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["getEasingForSegment"])(easing, i),
        });
    }
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/timeline/utils/sort.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/timeline/utils/sort.es.js ***!
  \********************************************************************/
/*! exports provided: compareByTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareByTime", function() { return compareByTime; });
function compareByTime(a, b) {
    if (a.at === b.at) {
        return a.value === null ? 1 : -1;
    }
    else {
        return a.at - b.at;
    }
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/utils/resolve-elements.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/utils/resolve-elements.es.js ***!
  \***********************************************************************/
/*! exports provided: resolveElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveElements", function() { return resolveElements; });
function resolveElements(elements, selectorCache) {
    var _a;
    if (typeof elements === "string") {
        if (selectorCache) {
            (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : (selectorCache[elements] = document.querySelectorAll(elements));
            elements = selectorCache[elements];
        }
        else {
            elements = document.querySelectorAll(elements);
        }
    }
    else if (elements instanceof Element) {
        elements = [elements];
    }
    /**
     * Return an empty array
     */
    return Array.from(elements || []);
}




/***/ }),

/***/ "./node_modules/@motionone/dom/dist/utils/stagger.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/@motionone/dom/dist/utils/stagger.es.js ***!
  \**************************************************************/
/*! exports provided: getFromIndex, resolveOption, stagger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFromIndex", function() { return getFromIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveOption", function() { return resolveOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger", function() { return stagger; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
/* harmony import */ var _motionone_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @motionone/animation */ "./node_modules/@motionone/animation/dist/index.es.js");



function stagger(duration = 0.1, { start = 0, from = 0, easing } = {}) {
    return (i, total) => {
        const fromIndex = Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(from) ? from : getFromIndex(from, total);
        const distance = Math.abs(fromIndex - i);
        let delay = duration * distance;
        if (easing) {
            const maxDelay = total * duration;
            const easingFunction = Object(_motionone_animation__WEBPACK_IMPORTED_MODULE_1__["getEasingFunction"])(easing);
            delay = easingFunction(delay / maxDelay) * maxDelay;
        }
        return start + delay;
    };
}
function getFromIndex(from, total) {
    if (from === "first") {
        return 0;
    }
    else {
        const lastIndex = total - 1;
        return from === "last" ? lastIndex : lastIndex / 2;
    }
}
function resolveOption(option, i, total) {
    return Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(option) ? option(i, total) : option;
}




/***/ }),

/***/ "./node_modules/@motionone/easing/dist/cubic-bezier.es.js":
/*!****************************************************************!*\
  !*** ./node_modules/@motionone/easing/dist/cubic-bezier.es.js ***!
  \****************************************************************/
/*! exports provided: cubicBezier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return cubicBezier; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");


/*
  Bezier function generator

  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.

  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.

  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2) => (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        }
        else {
            lowerBound = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2)
        return _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["noopReturn"];
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}




/***/ }),

/***/ "./node_modules/@motionone/easing/dist/index.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/@motionone/easing/dist/index.es.js ***!
  \*********************************************************/
/*! exports provided: cubicBezier, steps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cubic_bezier_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubic-bezier.es.js */ "./node_modules/@motionone/easing/dist/cubic-bezier.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return _cubic_bezier_es_js__WEBPACK_IMPORTED_MODULE_0__["cubicBezier"]; });

/* harmony import */ var _steps_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./steps.es.js */ "./node_modules/@motionone/easing/dist/steps.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return _steps_es_js__WEBPACK_IMPORTED_MODULE_1__["steps"]; });





/***/ }),

/***/ "./node_modules/@motionone/easing/dist/steps.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/@motionone/easing/dist/steps.es.js ***!
  \*********************************************************/
/*! exports provided: steps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return steps; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");


const steps = (steps, direction = "end") => (progress) => {
    progress =
        direction === "end"
            ? Math.min(progress, 0.999)
            : Math.max(progress, 0.001);
    const expanded = progress * steps;
    const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
    return Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["clamp"])(0, 1, rounded / steps);
};




/***/ }),

/***/ "./node_modules/@motionone/generators/dist/glide/index.es.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@motionone/generators/dist/glide/index.es.js ***!
  \*******************************************************************/
/*! exports provided: glide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glide", function() { return glide; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
/* harmony import */ var _utils_velocity_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/velocity.es.js */ "./node_modules/@motionone/generators/dist/utils/velocity.es.js");
/* harmony import */ var _spring_index_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spring/index.es.js */ "./node_modules/@motionone/generators/dist/spring/index.es.js");




const glide = ({ from = 0, velocity = 0.0, power = 0.8, decay = 0.325, bounceDamping, bounceStiffness, changeTarget, min, max, restDistance = 0.5, restSpeed, }) => {
    decay = _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["time"].ms(decay);
    const state = {
        hasReachedTarget: false,
        done: false,
        current: from,
        target: from,
    };
    const isOutOfBounds = (v) => (min !== undefined && v < min) || (max !== undefined && v > max);
    const nearestBoundary = (v) => {
        if (min === undefined)
            return max;
        if (max === undefined)
            return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = from + amplitude;
    const target = changeTarget === undefined ? ideal : changeTarget(ideal);
    state.target = target;
    /**
     * If the target has changed we need to re-calculate the amplitude, otherwise
     * the animation will start from the wrong position.
     */
    if (target !== ideal)
        amplitude = target - from;
    const calcDelta = (t) => -amplitude * Math.exp(-t / decay);
    const calcLatest = (t) => target + calcDelta(t);
    const applyFriction = (t) => {
        const delta = calcDelta(t);
        const latest = calcLatest(t);
        state.done = Math.abs(delta) <= restDistance;
        state.current = state.done ? target : latest;
    };
    /**
     * Ideally this would resolve for t in a stateless way, we could
     * do that by always precalculating the animation but as we know
     * this will be done anyway we can assume that spring will
     * be discovered during that.
     */
    let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t) => {
        if (!isOutOfBounds(state.current))
            return;
        timeReachedBoundary = t;
        spring$1 = Object(_spring_index_es_js__WEBPACK_IMPORTED_MODULE_2__["spring"])({
            from: state.current,
            to: nearestBoundary(state.current),
            velocity: Object(_utils_velocity_es_js__WEBPACK_IMPORTED_MODULE_1__["calcGeneratorVelocity"])(calcLatest, t, state.current), // TODO: This should be passing * 1000
            damping: bounceDamping,
            stiffness: bounceStiffness,
            restDistance,
            restSpeed,
        });
    };
    checkCatchBoundary(0);
    return (t) => {
        /**
         * We need to resolve the friction to figure out if we need a
         * spring but we don't want to do this twice per frame. So here
         * we flag if we updated for this frame and later if we did
         * we can skip doing it again.
         */
        let hasUpdatedFrame = false;
        if (!spring$1 && timeReachedBoundary === undefined) {
            hasUpdatedFrame = true;
            applyFriction(t);
            checkCatchBoundary(t);
        }
        /**
         * If we have a spring and the provided t is beyond the moment the friction
         * animation crossed the min/max boundary, use the spring.
         */
        if (timeReachedBoundary !== undefined && t > timeReachedBoundary) {
            state.hasReachedTarget = true;
            return spring$1(t - timeReachedBoundary);
        }
        else {
            state.hasReachedTarget = false;
            !hasUpdatedFrame && applyFriction(t);
            return state;
        }
    };
};




/***/ }),

/***/ "./node_modules/@motionone/generators/dist/index.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/@motionone/generators/dist/index.es.js ***!
  \*************************************************************/
/*! exports provided: glide, spring, pregenerateKeyframes, calcGeneratorVelocity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glide_index_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glide/index.es.js */ "./node_modules/@motionone/generators/dist/glide/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "glide", function() { return _glide_index_es_js__WEBPACK_IMPORTED_MODULE_0__["glide"]; });

/* harmony import */ var _spring_index_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spring/index.es.js */ "./node_modules/@motionone/generators/dist/spring/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return _spring_index_es_js__WEBPACK_IMPORTED_MODULE_1__["spring"]; });

/* harmony import */ var _utils_pregenerate_keyframes_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/pregenerate-keyframes.es.js */ "./node_modules/@motionone/generators/dist/utils/pregenerate-keyframes.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pregenerateKeyframes", function() { return _utils_pregenerate_keyframes_es_js__WEBPACK_IMPORTED_MODULE_2__["pregenerateKeyframes"]; });

/* harmony import */ var _utils_velocity_es_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/velocity.es.js */ "./node_modules/@motionone/generators/dist/utils/velocity.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcGeneratorVelocity", function() { return _utils_velocity_es_js__WEBPACK_IMPORTED_MODULE_3__["calcGeneratorVelocity"]; });







/***/ }),

/***/ "./node_modules/@motionone/generators/dist/spring/defaults.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@motionone/generators/dist/spring/defaults.es.js ***!
  \***********************************************************************/
/*! exports provided: defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
const defaults = {
    stiffness: 100.0,
    damping: 10.0,
    mass: 1.0,
};




/***/ }),

/***/ "./node_modules/@motionone/generators/dist/spring/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@motionone/generators/dist/spring/index.es.js ***!
  \********************************************************************/
/*! exports provided: spring */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return spring; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
/* harmony import */ var _defaults_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaults.es.js */ "./node_modules/@motionone/generators/dist/spring/defaults.es.js");
/* harmony import */ var _utils_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.es.js */ "./node_modules/@motionone/generators/dist/spring/utils.es.js");
/* harmony import */ var _utils_has_reached_target_es_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/has-reached-target.es.js */ "./node_modules/@motionone/generators/dist/utils/has-reached-target.es.js");
/* harmony import */ var _utils_velocity_es_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/velocity.es.js */ "./node_modules/@motionone/generators/dist/utils/velocity.es.js");






const spring = ({ stiffness = _defaults_es_js__WEBPACK_IMPORTED_MODULE_1__["defaults"].stiffness, damping = _defaults_es_js__WEBPACK_IMPORTED_MODULE_1__["defaults"].damping, mass = _defaults_es_js__WEBPACK_IMPORTED_MODULE_1__["defaults"].mass, from = 0, to = 1, velocity = 0.0, restSpeed, restDistance, } = {}) => {
    velocity = velocity ? _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["time"].s(velocity) : 0.0;
    const state = {
        done: false,
        hasReachedTarget: false,
        current: from,
        target: to,
    };
    const initialDelta = to - from;
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
    const dampingRatio = Object(_utils_es_js__WEBPACK_IMPORTED_MODULE_2__["calcDampingRatio"])(stiffness, damping, mass);
    const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale ? 0.01 : 2);
    restDistance || (restDistance = isGranularScale ? 0.005 : 0.5);
    let resolveSpring;
    if (dampingRatio < 1) {
        const angularFreq = undampedAngularFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
        // Underdamped spring (bouncy)
        resolveSpring = (t) => to -
            Math.exp(-dampingRatio * undampedAngularFreq * t) *
                (((-velocity + dampingRatio * undampedAngularFreq * initialDelta) /
                    angularFreq) *
                    Math.sin(angularFreq * t) +
                    initialDelta * Math.cos(angularFreq * t));
    }
    else {
        // Critically damped spring
        resolveSpring = (t) => {
            return (to -
                Math.exp(-undampedAngularFreq * t) *
                    (initialDelta + (-velocity + undampedAngularFreq * initialDelta) * t));
        };
    }
    return (t) => {
        state.current = resolveSpring(t);
        const currentVelocity = t === 0
            ? velocity
            : Object(_utils_velocity_es_js__WEBPACK_IMPORTED_MODULE_4__["calcGeneratorVelocity"])(resolveSpring, t, state.current);
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(to - state.current) <= restDistance;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
        state.hasReachedTarget = Object(_utils_has_reached_target_es_js__WEBPACK_IMPORTED_MODULE_3__["hasReachedTarget"])(from, to, state.current);
        return state;
    };
};




/***/ }),

/***/ "./node_modules/@motionone/generators/dist/spring/utils.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@motionone/generators/dist/spring/utils.es.js ***!
  \********************************************************************/
/*! exports provided: calcDampingRatio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcDampingRatio", function() { return calcDampingRatio; });
/* harmony import */ var _defaults_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.es.js */ "./node_modules/@motionone/generators/dist/spring/defaults.es.js");


const calcDampingRatio = (stiffness = _defaults_es_js__WEBPACK_IMPORTED_MODULE_0__["defaults"].stiffness, damping = _defaults_es_js__WEBPACK_IMPORTED_MODULE_0__["defaults"].damping, mass = _defaults_es_js__WEBPACK_IMPORTED_MODULE_0__["defaults"].mass) => damping / (2 * Math.sqrt(stiffness * mass));




/***/ }),

/***/ "./node_modules/@motionone/generators/dist/utils/has-reached-target.es.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@motionone/generators/dist/utils/has-reached-target.es.js ***!
  \********************************************************************************/
/*! exports provided: hasReachedTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasReachedTarget", function() { return hasReachedTarget; });
function hasReachedTarget(origin, target, current) {
    return ((origin < target && current >= target) ||
        (origin > target && current <= target));
}




/***/ }),

/***/ "./node_modules/@motionone/generators/dist/utils/pregenerate-keyframes.es.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@motionone/generators/dist/utils/pregenerate-keyframes.es.js ***!
  \***********************************************************************************/
/*! exports provided: pregenerateKeyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pregenerateKeyframes", function() { return pregenerateKeyframes; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");


const timeStep = 10;
const maxDuration = 10000;
function pregenerateKeyframes(generator, toUnit = _motionone_utils__WEBPACK_IMPORTED_MODULE_0__["noopReturn"]) {
    let overshootDuration = undefined;
    let timestamp = timeStep;
    let state = generator(0);
    const keyframes = [toUnit(state.current)];
    while (!state.done && timestamp < maxDuration) {
        state = generator(timestamp);
        keyframes.push(toUnit(state.done ? state.target : state.current));
        if (overshootDuration === undefined && state.hasReachedTarget) {
            overshootDuration = timestamp;
        }
        timestamp += timeStep;
    }
    const duration = timestamp - timeStep;
    /**
     * If generating an animation that didn't actually move,
     * generate a second keyframe so we have an origin and target.
     */
    if (keyframes.length === 1)
        keyframes.push(state.current);
    return {
        keyframes,
        duration: duration / 1000,
        overshootDuration: (overshootDuration !== null && overshootDuration !== void 0 ? overshootDuration : duration) / 1000,
    };
}




/***/ }),

/***/ "./node_modules/@motionone/generators/dist/utils/velocity.es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@motionone/generators/dist/utils/velocity.es.js ***!
  \**********************************************************************/
/*! exports provided: calcGeneratorVelocity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcGeneratorVelocity", function() { return calcGeneratorVelocity; });
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");


const sampleT = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - sampleT, 0);
    return Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_0__["velocityPerSecond"])(current - resolveValue(prevT), t - prevT);
}




/***/ }),

/***/ "./node_modules/@motionone/types/dist/MotionValue.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/@motionone/types/dist/MotionValue.es.js ***!
  \**************************************************************/
/*! exports provided: MotionValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionValue", function() { return MotionValue; });
/**
 * The MotionValue tracks the state of a single animatable
 * value. Currently, updatedAt and current are unused. The
 * long term idea is to use this to minimise the number
 * of DOM reads, and to abstract the DOM interactions here.
 */
class MotionValue {
    setAnimation(animation) {
        this.animation = animation;
        animation === null || animation === void 0 ? void 0 : animation.finished.then(() => this.clearAnimation()).catch(() => { });
    }
    clearAnimation() {
        this.animation = this.generator = undefined;
    }
}




/***/ }),

/***/ "./node_modules/@motionone/types/dist/index.es.js":
/*!********************************************************!*\
  !*** ./node_modules/@motionone/types/dist/index.es.js ***!
  \********************************************************/
/*! exports provided: MotionValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MotionValue_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MotionValue.es.js */ "./node_modules/@motionone/types/dist/MotionValue.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionValue", function() { return _MotionValue_es_js__WEBPACK_IMPORTED_MODULE_0__["MotionValue"]; });




/***/ }),

/***/ "./node_modules/@motionone/utils/dist/array.es.js":
/*!********************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/array.es.js ***!
  \********************************************************/
/*! exports provided: addUniqueItem, removeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUniqueItem", function() { return addUniqueItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
function addUniqueItem(array, item) {
    array.indexOf(item) === -1 && array.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
}




/***/ }),

/***/ "./node_modules/@motionone/utils/dist/clamp.es.js":
/*!********************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/clamp.es.js ***!
  \********************************************************/
/*! exports provided: clamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
const clamp = (min, max, v) => Math.min(Math.max(v, min), max);




/***/ }),

/***/ "./node_modules/@motionone/utils/dist/defaults.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/defaults.es.js ***!
  \***********************************************************/
/*! exports provided: defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
const defaults = {
    duration: 0.3,
    delay: 0,
    endDelay: 0,
    repeat: 0,
    easing: "ease",
};




/***/ }),

/***/ "./node_modules/@motionone/utils/dist/easing.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/easing.es.js ***!
  \*********************************************************/
/*! exports provided: getEasingForSegment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEasingForSegment", function() { return getEasingForSegment; });
/* harmony import */ var _is_easing_list_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-easing-list.es.js */ "./node_modules/@motionone/utils/dist/is-easing-list.es.js");
/* harmony import */ var _wrap_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrap.es.js */ "./node_modules/@motionone/utils/dist/wrap.es.js");



function getEasingForSegment(easing, i) {
    return Object(_is_easing_list_es_js__WEBPACK_IMPORTED_MODULE_0__["isEasingList"])(easing) ? easing[Object(_wrap_es_js__WEBPACK_IMPORTED_MODULE_1__["wrap"])(0, easing.length, i)] : easing;
}




/***/ }),

/***/ "./node_modules/@motionone/utils/dist/index.es.js":
/*!********************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/index.es.js ***!
  \********************************************************/
/*! exports provided: addUniqueItem, removeItem, clamp, defaults, getEasingForSegment, interpolate, isCubicBezier, isEasingGenerator, isEasingList, isFunction, isNumber, isString, mix, noop, noopReturn, defaultOffset, fillOffset, progress, time, velocityPerSecond, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.es.js */ "./node_modules/@motionone/utils/dist/array.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUniqueItem", function() { return _array_es_js__WEBPACK_IMPORTED_MODULE_0__["addUniqueItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return _array_es_js__WEBPACK_IMPORTED_MODULE_0__["removeItem"]; });

/* harmony import */ var _clamp_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clamp.es.js */ "./node_modules/@motionone/utils/dist/clamp.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return _clamp_es_js__WEBPACK_IMPORTED_MODULE_1__["clamp"]; });

/* harmony import */ var _defaults_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults.es.js */ "./node_modules/@motionone/utils/dist/defaults.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _defaults_es_js__WEBPACK_IMPORTED_MODULE_2__["defaults"]; });

/* harmony import */ var _easing_es_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./easing.es.js */ "./node_modules/@motionone/utils/dist/easing.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEasingForSegment", function() { return _easing_es_js__WEBPACK_IMPORTED_MODULE_3__["getEasingForSegment"]; });

/* harmony import */ var _interpolate_es_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interpolate.es.js */ "./node_modules/@motionone/utils/dist/interpolate.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return _interpolate_es_js__WEBPACK_IMPORTED_MODULE_4__["interpolate"]; });

/* harmony import */ var _is_cubic_bezier_es_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-cubic-bezier.es.js */ "./node_modules/@motionone/utils/dist/is-cubic-bezier.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCubicBezier", function() { return _is_cubic_bezier_es_js__WEBPACK_IMPORTED_MODULE_5__["isCubicBezier"]; });

/* harmony import */ var _is_easing_generator_es_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./is-easing-generator.es.js */ "./node_modules/@motionone/utils/dist/is-easing-generator.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEasingGenerator", function() { return _is_easing_generator_es_js__WEBPACK_IMPORTED_MODULE_6__["isEasingGenerator"]; });

/* harmony import */ var _is_easing_list_es_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./is-easing-list.es.js */ "./node_modules/@motionone/utils/dist/is-easing-list.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEasingList", function() { return _is_easing_list_es_js__WEBPACK_IMPORTED_MODULE_7__["isEasingList"]; });

/* harmony import */ var _is_function_es_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./is-function.es.js */ "./node_modules/@motionone/utils/dist/is-function.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _is_function_es_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"]; });

/* harmony import */ var _is_number_es_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./is-number.es.js */ "./node_modules/@motionone/utils/dist/is-number.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _is_number_es_js__WEBPACK_IMPORTED_MODULE_9__["isNumber"]; });

/* harmony import */ var _is_string_es_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./is-string.es.js */ "./node_modules/@motionone/utils/dist/is-string.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _is_string_es_js__WEBPACK_IMPORTED_MODULE_10__["isString"]; });

/* harmony import */ var _mix_es_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mix.es.js */ "./node_modules/@motionone/utils/dist/mix.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return _mix_es_js__WEBPACK_IMPORTED_MODULE_11__["mix"]; });

/* harmony import */ var _noop_es_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./noop.es.js */ "./node_modules/@motionone/utils/dist/noop.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _noop_es_js__WEBPACK_IMPORTED_MODULE_12__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noopReturn", function() { return _noop_es_js__WEBPACK_IMPORTED_MODULE_12__["noopReturn"]; });

/* harmony import */ var _offset_es_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./offset.es.js */ "./node_modules/@motionone/utils/dist/offset.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultOffset", function() { return _offset_es_js__WEBPACK_IMPORTED_MODULE_13__["defaultOffset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fillOffset", function() { return _offset_es_js__WEBPACK_IMPORTED_MODULE_13__["fillOffset"]; });

/* harmony import */ var _progress_es_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./progress.es.js */ "./node_modules/@motionone/utils/dist/progress.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return _progress_es_js__WEBPACK_IMPORTED_MODULE_14__["progress"]; });

/* harmony import */ var _time_es_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./time.es.js */ "./node_modules/@motionone/utils/dist/time.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "time", function() { return _time_es_js__WEBPACK_IMPORTED_MODULE_15__["time"]; });

/* harmony import */ var _velocity_es_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./velocity.es.js */ "./node_modules/@motionone/utils/dist/velocity.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "velocityPerSecond", function() { return _velocity_es_js__WEBPACK_IMPORTED_MODULE_16__["velocityPerSecond"]; });

/* harmony import */ var _wrap_es_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./wrap.es.js */ "./node_modules/@motionone/utils/dist/wrap.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _wrap_es_js__WEBPACK_IMPORTED_MODULE_17__["wrap"]; });





















/***/ }),

/***/ "./node_modules/@motionone/utils/dist/interpolate.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/interpolate.es.js ***!
  \**************************************************************/
/*! exports provided: interpolate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
/* harmony import */ var _mix_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mix.es.js */ "./node_modules/@motionone/utils/dist/mix.es.js");
/* harmony import */ var _noop_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noop.es.js */ "./node_modules/@motionone/utils/dist/noop.es.js");
/* harmony import */ var _offset_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offset.es.js */ "./node_modules/@motionone/utils/dist/offset.es.js");
/* harmony import */ var _progress_es_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress.es.js */ "./node_modules/@motionone/utils/dist/progress.es.js");
/* harmony import */ var _easing_es_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./easing.es.js */ "./node_modules/@motionone/utils/dist/easing.es.js");
/* harmony import */ var _clamp_es_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clamp.es.js */ "./node_modules/@motionone/utils/dist/clamp.es.js");







function interpolate(output, input = Object(_offset_es_js__WEBPACK_IMPORTED_MODULE_2__["defaultOffset"])(output.length), easing = _noop_es_js__WEBPACK_IMPORTED_MODULE_1__["noopReturn"]) {
    const length = output.length;
    /**
     * If the input length is lower than the output we
     * fill the input to match. This currently assumes the input
     * is an animation progress value so is a good candidate for
     * moving outside the function.
     */
    const remainder = length - input.length;
    remainder > 0 && Object(_offset_es_js__WEBPACK_IMPORTED_MODULE_2__["fillOffset"])(input, remainder);
    return (t) => {
        let i = 0;
        for (; i < length - 2; i++) {
            if (t < input[i + 1])
                break;
        }
        let progressInRange = Object(_clamp_es_js__WEBPACK_IMPORTED_MODULE_5__["clamp"])(0, 1, Object(_progress_es_js__WEBPACK_IMPORTED_MODULE_3__["progress"])(input[i], input[i + 1], t));
        const segmentEasing = Object(_easing_es_js__WEBPACK_IMPORTED_MODULE_4__["getEasingForSegment"])(easing, i);
        progressInRange = segmentEasing(progressInRange);
        return Object(_mix_es_js__WEBPACK_IMPORTED_MODULE_0__["mix"])(output[i], output[i + 1], progressInRange);
    };
}




/***/ }),

/***/ "./node_modules/@motionone/utils/dist/is-cubic-bezier.es.js":
/*!******************************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/is-cubic-bezier.es.js ***!
  \******************************************************************/
/*! exports provided: isCubicBezier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCubicBezier", function() { return isCubicBezier; });
/* harmony import */ var _is_number_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-number.es.js */ "./node_modules/@motionone/utils/dist/is-number.es.js");


const isCubicBezier = (easing) => Array.isArray(easing) && Object(_is_number_es_js__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(easing[0]);




/***/ }),

/***/ "./node_modules/@motionone/utils/dist/is-easing-generator.es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/is-easing-generator.es.js ***!
  \**********************************************************************/
/*! exports provided: isEasingGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEasingGenerator", function() { return isEasingGenerator; });
const isEasingGenerator = (easing) => typeof easing === "object" &&
    Boolean(easing.createAnimation);




/***/ }),

/***/ "./node_modules/@motionone/utils/dist/is-easing-list.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/is-easing-list.es.js ***!
  \*****************************************************************/
/*! exports provided: isEasingList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEasingList", function() { return isEasingList; });
/* harmony import */ var _is_number_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-number.es.js */ "./node_modules/@motionone/utils/dist/is-number.es.js");


const isEasingList = (easing) => Array.isArray(easing) && !Object(_is_number_es_js__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(easing[0]);




/***/ }),

/***/ "./node_modules/@motionone/utils/dist/is-function.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/is-function.es.js ***!
  \**************************************************************/
/*! exports provided: isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
const isFunction = (value) => typeof value === "function";




/***/ }),

/***/ "./node_modules/@motionone/utils/dist/is-number.es.js":
/*!************************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/is-number.es.js ***!
  \************************************************************/
/*! exports provided: isNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
const isNumber = (value) => typeof value === "number";




/***/ }),

/***/ "./node_modules/@motionone/utils/dist/is-string.es.js":
/*!************************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/is-string.es.js ***!
  \************************************************************/
/*! exports provided: isString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
const isString = (value) => typeof value === "string";




/***/ }),

/***/ "./node_modules/@motionone/utils/dist/mix.es.js":
/*!******************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/mix.es.js ***!
  \******************************************************/
/*! exports provided: mix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
const mix = (min, max, progress) => -progress * min + progress * max + min;




/***/ }),

/***/ "./node_modules/@motionone/utils/dist/noop.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/noop.es.js ***!
  \*******************************************************/
/*! exports provided: noop, noopReturn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noopReturn", function() { return noopReturn; });
const noop = () => { };
const noopReturn = (v) => v;




/***/ }),

/***/ "./node_modules/@motionone/utils/dist/offset.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/offset.es.js ***!
  \*********************************************************/
/*! exports provided: defaultOffset, fillOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOffset", function() { return defaultOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillOffset", function() { return fillOffset; });
/* harmony import */ var _mix_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mix.es.js */ "./node_modules/@motionone/utils/dist/mix.es.js");
/* harmony import */ var _progress_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress.es.js */ "./node_modules/@motionone/utils/dist/progress.es.js");



function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i = 1; i <= remaining; i++) {
        const offsetProgress = Object(_progress_es_js__WEBPACK_IMPORTED_MODULE_1__["progress"])(0, remaining, i);
        offset.push(Object(_mix_es_js__WEBPACK_IMPORTED_MODULE_0__["mix"])(min, 1, offsetProgress));
    }
}
function defaultOffset(length) {
    const offset = [0];
    fillOffset(offset, length - 1);
    return offset;
}




/***/ }),

/***/ "./node_modules/@motionone/utils/dist/progress.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/progress.es.js ***!
  \***********************************************************/
/*! exports provided: progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return progress; });
const progress = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);




/***/ }),

/***/ "./node_modules/@motionone/utils/dist/time.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/time.es.js ***!
  \*******************************************************/
/*! exports provided: time */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return time; });
const time = {
    ms: (seconds) => seconds * 1000,
    s: (milliseconds) => milliseconds / 1000,
};




/***/ }),

/***/ "./node_modules/@motionone/utils/dist/velocity.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/velocity.es.js ***!
  \***********************************************************/
/*! exports provided: velocityPerSecond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerSecond", function() { return velocityPerSecond; });
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}




/***/ }),

/***/ "./node_modules/@motionone/utils/dist/wrap.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/@motionone/utils/dist/wrap.es.js ***!
  \*******************************************************/
/*! exports provided: wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};




/***/ }),

/***/ "./node_modules/@walletconnect/modal-ui/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@walletconnect/modal-ui/dist/index.js ***!
  \************************************************************/
/*! exports provided: WcmModal, WcmQrCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WcmModal", function() { return ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WcmQrCode", function() { return j; });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
/* harmony import */ var _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @walletconnect/modal-core */ "./node_modules/@walletconnect/modal-core/dist/index.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/main.es.js");
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit/directives/if-defined.js */ "./node_modules/lit/directives/if-defined.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_10__);











var et = Object.defineProperty,
  Be = Object.getOwnPropertySymbols,
  tt = Object.prototype.hasOwnProperty,
  ot = Object.prototype.propertyIsEnumerable,
  Ue = (e, o, r) => o in e ? et(e, o, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
  }) : e[o] = r,
  ve = (e, o) => {
    for (var r in o || (o = {})) tt.call(o, r) && Ue(e, r, o[r]);
    if (Be) for (var r of Be(o)) ot.call(o, r) && Ue(e, r, o[r]);
    return e;
  };
function rt() {
  var e;
  const o = (e = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ThemeCtrl"].state.themeMode) != null ? e : "dark",
    r = {
      light: {
        foreground: {
          1: "rgb(20,20,20)",
          2: "rgb(121,134,134)",
          3: "rgb(158,169,169)"
        },
        background: {
          1: "rgb(255,255,255)",
          2: "rgb(241,243,243)",
          3: "rgb(228,231,231)"
        },
        overlay: "rgba(0,0,0,0.1)"
      },
      dark: {
        foreground: {
          1: "rgb(228,231,231)",
          2: "rgb(148,158,158)",
          3: "rgb(110,119,119)"
        },
        background: {
          1: "rgb(20,20,20)",
          2: "rgb(39,42,42)",
          3: "rgb(59,64,64)"
        },
        overlay: "rgba(255,255,255,0.1)"
      }
    }[o];
  return {
    "--wcm-color-fg-1": r.foreground[1],
    "--wcm-color-fg-2": r.foreground[2],
    "--wcm-color-fg-3": r.foreground[3],
    "--wcm-color-bg-1": r.background[1],
    "--wcm-color-bg-2": r.background[2],
    "--wcm-color-bg-3": r.background[3],
    "--wcm-color-overlay": r.overlay
  };
}
function He() {
  return {
    "--wcm-accent-color": "#3396FF",
    "--wcm-accent-fill-color": "#FFFFFF",
    "--wcm-z-index": "89",
    "--wcm-background-color": "#3396FF",
    "--wcm-background-border-radius": "8px",
    "--wcm-container-border-radius": "30px",
    "--wcm-wallet-icon-border-radius": "15px",
    "--wcm-wallet-icon-large-border-radius": "30px",
    "--wcm-wallet-icon-small-border-radius": "7px",
    "--wcm-input-border-radius": "28px",
    "--wcm-button-border-radius": "10px",
    "--wcm-notification-border-radius": "36px",
    "--wcm-secondary-button-border-radius": "28px",
    "--wcm-icon-button-border-radius": "50%",
    "--wcm-button-hover-highlight-border-radius": "10px",
    "--wcm-text-big-bold-size": "20px",
    "--wcm-text-big-bold-weight": "600",
    "--wcm-text-big-bold-line-height": "24px",
    "--wcm-text-big-bold-letter-spacing": "-0.03em",
    "--wcm-text-big-bold-text-transform": "none",
    "--wcm-text-xsmall-bold-size": "10px",
    "--wcm-text-xsmall-bold-weight": "700",
    "--wcm-text-xsmall-bold-line-height": "12px",
    "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
    "--wcm-text-xsmall-bold-text-transform": "uppercase",
    "--wcm-text-xsmall-regular-size": "12px",
    "--wcm-text-xsmall-regular-weight": "600",
    "--wcm-text-xsmall-regular-line-height": "14px",
    "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
    "--wcm-text-xsmall-regular-text-transform": "none",
    "--wcm-text-small-thin-size": "14px",
    "--wcm-text-small-thin-weight": "500",
    "--wcm-text-small-thin-line-height": "16px",
    "--wcm-text-small-thin-letter-spacing": "-0.03em",
    "--wcm-text-small-thin-text-transform": "none",
    "--wcm-text-small-regular-size": "14px",
    "--wcm-text-small-regular-weight": "600",
    "--wcm-text-small-regular-line-height": "16px",
    "--wcm-text-small-regular-letter-spacing": "-0.03em",
    "--wcm-text-small-regular-text-transform": "none",
    "--wcm-text-medium-regular-size": "16px",
    "--wcm-text-medium-regular-weight": "600",
    "--wcm-text-medium-regular-line-height": "20px",
    "--wcm-text-medium-regular-letter-spacing": "-0.03em",
    "--wcm-text-medium-regular-text-transform": "none",
    "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
    "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
    "--wcm-success-color": "rgb(38,181,98)",
    "--wcm-error-color": "rgb(242, 90, 103)",
    "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
    "--wcm-overlay-backdrop-filter": "none"
  };
}
const h = {
    getPreset(e) {
      return He()[e];
    },
    setTheme() {
      const e = document.querySelector(":root"),
        {
          themeVariables: o
        } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ThemeCtrl"].state;
      if (e) {
        const r = ve(ve(ve({}, rt()), He()), o);
        Object.entries(r).forEach(([a, t]) => e.style.setProperty(a, t));
      }
    },
    globalCss: lit__WEBPACK_IMPORTED_MODULE_3__["css"]`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`
  },
  at = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
var lt = Object.defineProperty,
  it = Object.getOwnPropertyDescriptor,
  F = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? it(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && lt(o, r, t), t;
  };
let T = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(...arguments), this.disabled = !1, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = () => null, this.variant = "default";
  }
  render() {
    const e = {
      "wcm-icon-left": this.iconLeft !== void 0,
      "wcm-icon-right": this.iconRight !== void 0,
      "wcm-ghost": this.variant === "ghost",
      "wcm-outline": this.variant === "outline"
    };
    let o = "inverse";
    return this.variant === "ghost" && (o = "secondary"), this.variant === "outline" && (o = "accent"), lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<button class="${Object(lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__["classMap"])(e)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<wcm-text variant="small-regular" color="${o}"><slot></slot></wcm-text>${this.iconRight}</button>`;
  }
};
T.styles = [h.globalCss, at], F([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
})], T.prototype, "disabled", 2), F([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], T.prototype, "iconLeft", 2), F([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], T.prototype, "iconRight", 2), F([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], T.prototype, "onClick", 2), F([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], T.prototype, "variant", 2), T = F([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-button")], T);
const nt = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
var ct = Object.defineProperty,
  st = Object.getOwnPropertyDescriptor,
  ue = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? st(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && ct(o, r, t), t;
  };
let ee = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(...arguments), this.disabled = !1, this.variant = "primary";
  }
  render() {
    const e = {
      "wcm-secondary": this.variant === "secondary"
    };
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<button ?disabled="${this.disabled}" class="${Object(lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__["classMap"])(e)}"><slot></slot></button>`;
  }
};
ee.styles = [h.globalCss, nt], ue([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
})], ee.prototype, "disabled", 2), ue([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], ee.prototype, "variant", 2), ee = ue([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-button-big")], ee);
const dt = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
var mt = Object.defineProperty,
  ht = Object.getOwnPropertyDescriptor,
  wt = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? ht(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && mt(o, r, t), t;
  };
let be = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  render() {
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<div><slot></slot></div>`;
  }
};
be.styles = [h.globalCss, dt], be = wt([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-info-footer")], be);
const v = {
    CROSS_ICON: lit_html__WEBPACK_IMPORTED_MODULE_7__["svg"]`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
    WALLET_CONNECT_LOGO: lit_html__WEBPACK_IMPORTED_MODULE_7__["svg"]`<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
    WALLET_CONNECT_ICON: lit_html__WEBPACK_IMPORTED_MODULE_7__["svg"]`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
    WALLET_CONNECT_ICON_COLORED: lit_html__WEBPACK_IMPORTED_MODULE_7__["svg"]`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
    BACK_ICON: lit_html__WEBPACK_IMPORTED_MODULE_7__["svg"]`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
    COPY_ICON: lit_html__WEBPACK_IMPORTED_MODULE_7__["svg"]`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
    RETRY_ICON: lit_html__WEBPACK_IMPORTED_MODULE_7__["svg"]`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
    DESKTOP_ICON: lit_html__WEBPACK_IMPORTED_MODULE_7__["svg"]`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    MOBILE_ICON: lit_html__WEBPACK_IMPORTED_MODULE_7__["svg"]`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
    ARROW_DOWN_ICON: lit_html__WEBPACK_IMPORTED_MODULE_7__["svg"]`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
    ARROW_UP_RIGHT_ICON: lit_html__WEBPACK_IMPORTED_MODULE_7__["svg"]`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    ARROW_RIGHT_ICON: lit_html__WEBPACK_IMPORTED_MODULE_7__["svg"]`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
    QRCODE_ICON: lit_html__WEBPACK_IMPORTED_MODULE_7__["svg"]`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
    SCAN_ICON: lit_html__WEBPACK_IMPORTED_MODULE_7__["svg"]`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
    CHECKMARK_ICON: lit_html__WEBPACK_IMPORTED_MODULE_7__["svg"]`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
    SEARCH_ICON: lit_html__WEBPACK_IMPORTED_MODULE_7__["svg"]`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
    WALLET_PLACEHOLDER: lit_html__WEBPACK_IMPORTED_MODULE_7__["svg"]`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    GLOBE_ICON: lit_html__WEBPACK_IMPORTED_MODULE_7__["svg"]`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`
  },
  pt = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
var gt = Object.defineProperty,
  vt = Object.getOwnPropertyDescriptor,
  ut = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? vt(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && gt(o, r, t), t;
  };
let fe = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  render() {
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${v.WALLET_CONNECT_LOGO} <button @click="${_walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ModalCtrl"].close}">${v.CROSS_ICON}</button></div>`;
  }
};
fe.styles = [h.globalCss, pt], fe = ut([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-modal-backcard")], fe);
const bt = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`main{padding:20px;padding-top:0;width:100%}`;
var ft = Object.defineProperty,
  xt = Object.getOwnPropertyDescriptor,
  yt = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? xt(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && ft(o, r, t), t;
  };
let xe = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  render() {
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<main><slot></slot></main>`;
  }
};
xe.styles = [h.globalCss, bt], xe = yt([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-modal-content")], xe);
const $t = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
var Ct = Object.defineProperty,
  kt = Object.getOwnPropertyDescriptor,
  Ot = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? kt(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Ct(o, r, t), t;
  };
let ye = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  render() {
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<footer><slot></slot></footer>`;
  }
};
ye.styles = [h.globalCss, $t], ye = Ot([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-modal-footer")], ye);
const Wt = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
var It = Object.defineProperty,
  Et = Object.getOwnPropertyDescriptor,
  te = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? Et(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && It(o, r, t), t;
  };
let S = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = !1;
  }
  backBtnTemplate() {
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<button class="wcm-back-btn" @click="${_walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].goBack}">${v.BACK_ICON}</button>`;
  }
  actionBtnTemplate() {
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
  }
  render() {
    const e = {
        "wcm-border": this.border
      },
      o = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].state.history.length > 1,
      r = this.title ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-text variant="big-bold">${this.title}</wcm-text>` : lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<slot></slot>`;
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<header class="${Object(lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__["classMap"])(e)}">${o ? this.backBtnTemplate() : null} ${r} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
  }
};
S.styles = [h.globalCss, Wt], te([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], S.prototype, "title", 2), te([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], S.prototype, "onAction", 2), te([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], S.prototype, "actionIcon", 2), te([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
})], S.prototype, "border", 2), S = te([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-modal-header")], S);
const c = {
    MOBILE_BREAKPOINT: 600,
    WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
    EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
    getShadowRootElement(e, o) {
      const r = e.renderRoot.querySelector(o);
      if (!r) throw new Error(`${o} not found`);
      return r;
    },
    getWalletIcon({
      id: e,
      image_id: o
    }) {
      const {
        walletImages: r
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ConfigCtrl"].state;
      return r != null && r[e] ? r[e] : o ? _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ExplorerCtrl"].getWalletImageUrl(o) : "";
    },
    getWalletName(e, o = !1) {
      return o && e.length > 8 ? `${e.substring(0, 8)}..` : e;
    },
    isMobileAnimation() {
      return window.innerWidth <= c.MOBILE_BREAKPOINT;
    },
    async preloadImage(e) {
      const o = new Promise((r, a) => {
        const t = new Image();
        t.onload = r, t.onerror = a, t.crossOrigin = "anonymous", t.src = e;
      });
      return Promise.race([o, _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].wait(3e3)]);
    },
    getErrorMessage(e) {
      return e instanceof Error ? e.message : "Unknown Error";
    },
    debounce(e, o = 500) {
      let r;
      return (...a) => {
        function t() {
          e(...a);
        }
        r && clearTimeout(r), r = setTimeout(t, o);
      };
    },
    handleMobileLinking(e) {
      const {
          walletConnectUri: o
        } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["OptionsCtrl"].state,
        {
          mobile: r,
          name: a
        } = e,
        t = r === null || r === void 0 ? void 0 : r.native,
        l = r === null || r === void 0 ? void 0 : r.universal;
      c.setRecentWallet(e);
      function i(s) {
        let $ = "";
        t ? $ = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].formatUniversalUrl(t, s, a) : l && ($ = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].formatNativeUrl(l, s, a)), _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].openHref($, "_self");
      }
      o && i(o);
    },
    handleAndroidLinking() {
      const {
        walletConnectUri: e
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["OptionsCtrl"].state;
      e && (_walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].setWalletConnectAndroidDeepLink(e), _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].openHref(e, "_self"));
    },
    async handleUriCopy() {
      const {
        walletConnectUri: e
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["OptionsCtrl"].state;
      if (e) try {
        await navigator.clipboard.writeText(e), _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ToastCtrl"].openToast("Link copied", "success");
      } catch {
        _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ToastCtrl"].openToast("Failed to copy", "error");
      }
    },
    getCustomImageUrls() {
      const {
          walletImages: e
        } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ConfigCtrl"].state,
        o = Object.values(e !== null && e !== void 0 ? e : {});
      return Object.values(o);
    },
    truncate(e, o = 8) {
      return e.length <= o ? e : `${e.substring(0, 4)}...${e.substring(e.length - 4)}`;
    },
    setRecentWallet(e) {
      try {
        localStorage.setItem(c.WCM_RECENT_WALLET_DATA, JSON.stringify(e));
      } catch {
        console.info("Unable to set recent wallet");
      }
    },
    getRecentWallet() {
      try {
        const e = localStorage.getItem(c.WCM_RECENT_WALLET_DATA);
        return e ? JSON.parse(e) : void 0;
      } catch {
        console.info("Unable to get recent wallet");
      }
    },
    caseSafeIncludes(e, o) {
      return e.toUpperCase().includes(o.toUpperCase());
    },
    openWalletExplorerUrl() {
      _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].openHref(c.EXPLORER_WALLET_URL, "_blank");
    },
    getCachedRouterWalletPlatforms() {
      const {
          desktop: e,
          mobile: o
        } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].getWalletRouterData(),
        r = Boolean(e === null || e === void 0 ? void 0 : e.native),
        a = Boolean(e === null || e === void 0 ? void 0 : e.universal),
        t = Boolean(o === null || o === void 0 ? void 0 : o.native) || Boolean(o === null || o === void 0 ? void 0 : o.universal);
      return {
        isDesktop: r,
        isMobile: t,
        isWeb: a
      };
    },
    goToConnectingView(e) {
      _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].setData({
        Wallet: e
      });
      const o = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].isMobile(),
        {
          isDesktop: r,
          isWeb: a,
          isMobile: t
        } = c.getCachedRouterWalletPlatforms();
      o ? t ? _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].push("MobileConnecting") : a ? _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].push("WebConnecting") : _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].push("InstallWallet") : r ? _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].push("DesktopConnecting") : a ? _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].push("WebConnecting") : t ? _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].push("MobileQrcodeConnecting") : _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].push("InstallWallet");
    }
  },
  Mt = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
var Lt = Object.defineProperty,
  Rt = Object.getOwnPropertyDescriptor,
  $e = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? Rt(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Lt(o, r, t), t;
  };
let oe = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(), this.view = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].state.view, this.prevView = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].subscribe(e => {
      this.view !== e.view && this.onChangeRoute();
    });
  }
  firstUpdated() {
    this.resizeObserver = new ResizeObserver(([e]) => {
      const o = `${e.contentRect.height}px`;
      this.oldHeight !== "0px" && Object(motion__WEBPACK_IMPORTED_MODULE_8__["animate"])(this.routerEl, {
        height: [this.oldHeight, o]
      }, {
        duration: .2
      }), this.oldHeight = o;
    }), this.resizeObserver.observe(this.contentEl);
  }
  disconnectedCallback() {
    var e, o;
    (e = this.unsubscribe) == null || e.call(this), (o = this.resizeObserver) == null || o.disconnect();
  }
  get routerEl() {
    return c.getShadowRootElement(this, ".wcm-router");
  }
  get contentEl() {
    return c.getShadowRootElement(this, ".wcm-content");
  }
  viewTemplate() {
    switch (this.view) {
      case "ConnectWallet":
        return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
      case "DesktopConnecting":
        return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
      case "MobileConnecting":
        return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
      case "WebConnecting":
        return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-web-connecting-view></wcm-web-connecting-view>`;
      case "MobileQrcodeConnecting":
        return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
      case "WalletExplorer":
        return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
      case "Qrcode":
        return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-qrcode-view></wcm-qrcode-view>`;
      case "InstallWallet":
        return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-install-wallet-view></wcm-install-wallet-view>`;
      default:
        return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<div>Not Found</div>`;
    }
  }
  async onChangeRoute() {
    await Object(motion__WEBPACK_IMPORTED_MODULE_8__["animate"])(this.routerEl, {
      opacity: [1, 0],
      scale: [1, 1.02]
    }, {
      duration: .15,
      delay: .1
    }).finished, this.view = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].state.view, Object(motion__WEBPACK_IMPORTED_MODULE_8__["animate"])(this.routerEl, {
      opacity: [0, 1],
      scale: [.99, 1]
    }, {
      duration: .37,
      delay: .05
    });
  }
  render() {
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`;
  }
};
oe.styles = [h.globalCss, Mt], $e([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["state"])()], oe.prototype, "view", 2), $e([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["state"])()], oe.prototype, "prevView", 2), oe = $e([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-modal-router")], oe);
const At = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
var Pt = Object.defineProperty,
  Tt = Object.getOwnPropertyDescriptor,
  ze = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? Tt(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Pt(o, r, t), t;
  };
let ne = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(), this.open = !1, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ToastCtrl"].subscribe(e => {
      e.open ? (this.open = !0, this.timeout = setTimeout(() => _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ToastCtrl"].closeToast(), 2200)) : (this.open = !1, clearTimeout(this.timeout));
    });
  }
  disconnectedCallback() {
    var e;
    (e = this.unsubscribe) == null || e.call(this), clearTimeout(this.timeout), _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ToastCtrl"].closeToast();
  }
  render() {
    const {
        message: e,
        variant: o
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ToastCtrl"].state,
      r = {
        "wcm-success": o === "success",
        "wcm-error": o === "error"
      };
    return this.open ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<div class="${Object(lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__["classMap"])(r)}">${o === "success" ? v.CHECKMARK_ICON : null} ${o === "error" ? v.CROSS_ICON : null}<wcm-text variant="small-regular">${e}</wcm-text></div>` : null;
  }
};
ne.styles = [h.globalCss, At], ze([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["state"])()], ne.prototype, "open", 2), ne = ze([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-modal-toast")], ne);
const jt = .1,
  Ve = 2.5,
  A = 7;
function Ce(e, o, r) {
  return e === o ? !1 : (e - o < 0 ? o - e : e - o) <= r + jt;
}
function _t(e, o) {
  const r = Array.prototype.slice.call(qrcode__WEBPACK_IMPORTED_MODULE_10___default.a.create(e, {
      errorCorrectionLevel: o
    }).modules.data, 0),
    a = Math.sqrt(r.length);
  return r.reduce((t, l, i) => (i % a === 0 ? t.push([l]) : t[t.length - 1].push(l)) && t, []);
}
const Dt = {
    generate(e, o, r) {
      const a = "#141414",
        t = "#ffffff",
        l = [],
        i = _t(e, "Q"),
        s = o / i.length,
        $ = [{
          x: 0,
          y: 0
        }, {
          x: 1,
          y: 0
        }, {
          x: 0,
          y: 1
        }];
      $.forEach(({
        x: y,
        y: u
      }) => {
        const O = (i.length - A) * s * y,
          b = (i.length - A) * s * u,
          E = .45;
        for (let M = 0; M < $.length; M += 1) {
          const V = s * (A - M * 2);
          l.push(lit__WEBPACK_IMPORTED_MODULE_3__["svg"]`<rect fill="${M % 2 === 0 ? a : t}" height="${V}" rx="${V * E}" ry="${V * E}" width="${V}" x="${O + s * M}" y="${b + s * M}">`);
        }
      });
      const f = Math.floor((r + 25) / s),
        Ne = i.length / 2 - f / 2,
        Ze = i.length / 2 + f / 2 - 1,
        Se = [];
      i.forEach((y, u) => {
        y.forEach((O, b) => {
          if (i[u][b] && !(u < A && b < A || u > i.length - (A + 1) && b < A || u < A && b > i.length - (A + 1)) && !(u > Ne && u < Ze && b > Ne && b < Ze)) {
            const E = u * s + s / 2,
              M = b * s + s / 2;
            Se.push([E, M]);
          }
        });
      });
      const J = {};
      return Se.forEach(([y, u]) => {
        J[y] ? J[y].push(u) : J[y] = [u];
      }), Object.entries(J).map(([y, u]) => {
        const O = u.filter(b => u.every(E => !Ce(b, E, s)));
        return [Number(y), O];
      }).forEach(([y, u]) => {
        u.forEach(O => {
          l.push(lit__WEBPACK_IMPORTED_MODULE_3__["svg"]`<circle cx="${y}" cy="${O}" fill="${a}" r="${s / Ve}">`);
        });
      }), Object.entries(J).filter(([y, u]) => u.length > 1).map(([y, u]) => {
        const O = u.filter(b => u.some(E => Ce(b, E, s)));
        return [Number(y), O];
      }).map(([y, u]) => {
        u.sort((b, E) => b < E ? -1 : 1);
        const O = [];
        for (const b of u) {
          const E = O.find(M => M.some(V => Ce(b, V, s)));
          E ? E.push(b) : O.push([b]);
        }
        return [y, O.map(b => [b[0], b[b.length - 1]])];
      }).forEach(([y, u]) => {
        u.forEach(([O, b]) => {
          l.push(lit__WEBPACK_IMPORTED_MODULE_3__["svg"]`<line x1="${y}" x2="${y}" y1="${O}" y2="${b}" stroke="${a}" stroke-width="${s / (Ve / 2)}" stroke-linecap="round">`);
        });
      }), l;
    }
  },
  Nt = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
var Zt = Object.defineProperty,
  St = Object.getOwnPropertyDescriptor,
  q = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? St(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Zt(o, r, t), t;
  };
let j = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(...arguments), this.uri = "", this.size = 0, this.imageId = void 0, this.walletId = void 0, this.imageUrl = void 0;
  }
  svgTemplate() {
    const e = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ThemeCtrl"].state.themeMode === "light" ? this.size : this.size - 36;
    return lit__WEBPACK_IMPORTED_MODULE_3__["svg"]`<svg height="${e}" width="${e}">${Dt.generate(this.uri, e, e / 4)}</svg>`;
  }
  render() {
    const e = {
      "wcm-dark": _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ThemeCtrl"].state.themeMode === "dark"
    };
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<div style="${`width: ${this.size}px`}" class="${Object(lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__["classMap"])(e)}">${this.walletId || this.imageUrl ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-wallet-image walletId="${Object(lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_9__["ifDefined"])(this.walletId)}" imageId="${Object(lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_9__["ifDefined"])(this.imageId)}" imageUrl="${Object(lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_9__["ifDefined"])(this.imageUrl)}"></wcm-wallet-image>` : v.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`;
  }
};
j.styles = [h.globalCss, Nt], q([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], j.prototype, "uri", 2), q([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Number
})], j.prototype, "size", 2), q([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], j.prototype, "imageId", 2), q([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], j.prototype, "walletId", 2), q([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], j.prototype, "imageUrl", 2), j = q([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-qrcode")], j);
const Bt = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
var Ut = Object.defineProperty,
  Ht = Object.getOwnPropertyDescriptor,
  Fe = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? Ht(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Ut(o, r, t), t;
  };
let ce = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(...arguments), this.onChange = () => null;
  }
  render() {
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${v.SEARCH_ICON}`;
  }
};
ce.styles = [h.globalCss, Bt], Fe([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], ce.prototype, "onChange", 2), ce = Fe([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-search-input")], ce);
const zt = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
var Vt = Object.defineProperty,
  Ft = Object.getOwnPropertyDescriptor,
  qt = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? Ft(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Vt(o, r, t), t;
  };
let ke = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  render() {
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
  }
};
ke.styles = [h.globalCss, zt], ke = qt([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-spinner")], ke);
const Qt = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
var Kt = Object.defineProperty,
  Yt = Object.getOwnPropertyDescriptor,
  Oe = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? Yt(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Kt(o, r, t), t;
  };
let re = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(...arguments), this.variant = "medium-regular", this.color = "primary";
  }
  render() {
    const e = {
      "wcm-big-bold": this.variant === "big-bold",
      "wcm-medium-regular": this.variant === "medium-regular",
      "wcm-small-regular": this.variant === "small-regular",
      "wcm-small-thin": this.variant === "small-thin",
      "wcm-xsmall-regular": this.variant === "xsmall-regular",
      "wcm-xsmall-bold": this.variant === "xsmall-bold",
      "wcm-color-primary": this.color === "primary",
      "wcm-color-secondary": this.color === "secondary",
      "wcm-color-tertiary": this.color === "tertiary",
      "wcm-color-inverse": this.color === "inverse",
      "wcm-color-accnt": this.color === "accent",
      "wcm-color-error": this.color === "error"
    };
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<span><slot class="${Object(lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__["classMap"])(e)}"></slot></span>`;
  }
};
re.styles = [h.globalCss, Qt], Oe([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], re.prototype, "variant", 2), Oe([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], re.prototype, "color", 2), re = Oe([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-text")], re);
const Gt = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
var Xt = Object.defineProperty,
  Jt = Object.getOwnPropertyDescriptor,
  _ = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? Jt(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Xt(o, r, t), t;
  };
let L = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(...arguments), this.onClick = () => null, this.name = "", this.walletId = "", this.label = void 0, this.imageId = void 0, this.installed = !1, this.recent = !1;
  }
  sublabelTemplate() {
    return this.recent ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>` : this.installed ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>` : null;
  }
  handleClick() {
    _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["EventsCtrl"].click({
      name: "WALLET_BUTTON",
      walletId: this.walletId
    }), this.onClick();
  }
  render() {
    var e;
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<button @click="${this.handleClick.bind(this)}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${Object(lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_9__["ifDefined"])(this.imageId)}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${(e = this.label) != null ? e : c.getWalletName(this.name, !0)}</wcm-text>${this.sublabelTemplate()}</div></button>`;
  }
};
L.styles = [h.globalCss, Gt], _([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], L.prototype, "onClick", 2), _([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], L.prototype, "name", 2), _([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], L.prototype, "walletId", 2), _([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], L.prototype, "label", 2), _([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], L.prototype, "imageId", 2), _([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
})], L.prototype, "installed", 2), _([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
})], L.prototype, "recent", 2), L = _([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-wallet-button")], L);
const eo = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var to = Object.defineProperty,
  oo = Object.getOwnPropertyDescriptor,
  se = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? oo(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && to(o, r, t), t;
  };
let Q = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(...arguments), this.walletId = "", this.imageId = void 0, this.imageUrl = void 0;
  }
  render() {
    var e;
    const o = (e = this.imageUrl) != null && e.length ? this.imageUrl : c.getWalletIcon({
      id: this.walletId,
      image_id: this.imageId
    });
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`${o.length ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<div><img crossorigin="anonymous" src="${o}" alt="${this.id}"></div>` : v.WALLET_PLACEHOLDER}`;
  }
};
Q.styles = [h.globalCss, eo], se([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], Q.prototype, "walletId", 2), se([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], Q.prototype, "imageId", 2), se([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], Q.prototype, "imageUrl", 2), Q = se([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-wallet-image")], Q);
var ro = Object.defineProperty,
  ao = Object.getOwnPropertyDescriptor,
  qe = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? ao(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && ro(o, r, t), t;
  };
let We = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(), this.preload = !0, this.preloadData();
  }
  async loadImages(e) {
    try {
      e != null && e.length && (await Promise.all(e.map(async o => c.preloadImage(o))));
    } catch {
      console.info("Unsuccessful attempt at preloading some images", e);
    }
  }
  async preloadListings() {
    if (_walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ConfigCtrl"].state.enableExplorer) {
      await _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ExplorerCtrl"].getRecomendedWallets(), _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["OptionsCtrl"].setIsDataLoaded(!0);
      const {
          recomendedWallets: e
        } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ExplorerCtrl"].state,
        o = e.map(r => c.getWalletIcon(r));
      await this.loadImages(o);
    } else _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["OptionsCtrl"].setIsDataLoaded(!0);
  }
  async preloadCustomImages() {
    const e = c.getCustomImageUrls();
    await this.loadImages(e);
  }
  async preloadData() {
    try {
      this.preload && (this.preload = !1, await Promise.all([this.preloadListings(), this.preloadCustomImages()]));
    } catch (e) {
      console.error(e), _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ToastCtrl"].openToast("Failed preloading", "error");
    }
  }
};
qe([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["state"])()], We.prototype, "preload", 2), We = qe([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-explorer-context")], We);
var lo = Object.defineProperty,
  io = Object.getOwnPropertyDescriptor,
  no = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? io(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && lo(o, r, t), t;
  };
let Qe = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(), this.unsubscribeTheme = void 0, h.setTheme(), this.unsubscribeTheme = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ThemeCtrl"].subscribe(h.setTheme);
  }
  disconnectedCallback() {
    var e;
    (e = this.unsubscribeTheme) == null || e.call(this);
  }
};
Qe = no([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-theme-context")], Qe);
const co = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var so = Object.defineProperty,
  mo = Object.getOwnPropertyDescriptor,
  ho = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? mo(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && so(o, r, t), t;
  };
let Ie = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  onGoToQrcode() {
    _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].push("Qrcode");
  }
  render() {
    const {
        recomendedWallets: e
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ExplorerCtrl"].state,
      o = [...e, ...e],
      r = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].RECOMMENDED_WALLET_AMOUNT * 2;
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${v.QRCODE_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${v.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[...Array(r)].map((a, t) => {
      const l = o[t % o.length];
      return l ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-wallet-image walletId="${l.id}" imageId="${l.image_id}"></wcm-wallet-image>` : v.WALLET_PLACEHOLDER;
    })}</div><wcm-button-big @click="${c.handleAndroidLinking}"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`;
  }
};
Ie.styles = [h.globalCss, co], Ie = ho([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-android-wallet-selection")], Ie);
const wo = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
var po = Object.defineProperty,
  go = Object.getOwnPropertyDescriptor,
  K = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? go(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && po(o, r, t), t;
  };
let D = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(...arguments), this.walletId = void 0, this.imageId = void 0, this.isError = !1, this.isStale = !1, this.label = "";
  }
  svgLoaderTemplate() {
    var e, o;
    const r = (o = (e = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ThemeCtrl"].state.themeVariables) == null ? void 0 : e["--wcm-wallet-icon-large-border-radius"]) != null ? o : h.getPreset("--wcm-wallet-icon-large-border-radius");
    let a = 0;
    r.includes("%") ? a = 88 / 100 * parseInt(r, 10) : a = parseInt(r, 10), a *= 1.17;
    const t = 317 - a * 1.57,
      l = 425 - a * 1.8;
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${a}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${t}" stroke-dashoffset="${l}"></use></svg>`;
  }
  render() {
    const e = {
      "wcm-error": this.isError,
      "wcm-stale": this.isStale
    };
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<div class="${Object(lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__["classMap"])(e)}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${Object(lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_9__["ifDefined"])(this.walletId)}" imageId="${Object(lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_9__["ifDefined"])(this.imageId)}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${this.isError ? "error" : "primary"}">${this.isError ? "Connection declined" : this.label}</wcm-text>`;
  }
};
D.styles = [h.globalCss, wo], K([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], D.prototype, "walletId", 2), K([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], D.prototype, "imageId", 2), K([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
})], D.prototype, "isError", 2), K([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
})], D.prototype, "isStale", 2), K([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], D.prototype, "label", 2), D = K([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-connector-waiting")], D);
const G = {
    manualWallets() {
      var e, o;
      const {
          mobileWallets: r,
          desktopWallets: a
        } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ConfigCtrl"].state,
        t = (e = G.recentWallet()) == null ? void 0 : e.id,
        l = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].isMobile() ? r : a,
        i = l === null || l === void 0 ? void 0 : l.filter(s => t !== s.id);
      return (o = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].isMobile() ? i === null || i === void 0 ? void 0 : i.map(({
        id: s,
        name: $,
        links: f
      }) => ({
        id: s,
        name: $,
        mobile: f,
        links: f
      })) : i === null || i === void 0 ? void 0 : i.map(({
        id: s,
        name: $,
        links: f
      }) => ({
        id: s,
        name: $,
        desktop: f,
        links: f
      }))) != null ? o : [];
    },
    recentWallet() {
      return c.getRecentWallet();
    },
    recomendedWallets(e = !1) {
      var o;
      const r = e || (o = G.recentWallet()) == null ? void 0 : o.id,
        {
          recomendedWallets: a
        } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ExplorerCtrl"].state;
      return a.filter(t => r !== t.id);
    }
  },
  Z = {
    onConnecting(e) {
      c.goToConnectingView(e);
    },
    manualWalletsTemplate() {
      return G.manualWallets().map(e => lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-wallet-button walletId="${e.id}" name="${e.name}" .onClick="${() => this.onConnecting(e)}"></wcm-wallet-button>`);
    },
    recomendedWalletsTemplate(e = !1) {
      return G.recomendedWallets(e).map(o => lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-wallet-button name="${o.name}" walletId="${o.id}" imageId="${o.image_id}" .onClick="${() => this.onConnecting(o)}"></wcm-wallet-button>`);
    },
    recentWalletTemplate() {
      const e = G.recentWallet();
      if (e) return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-wallet-button name="${e.name}" walletId="${e.id}" imageId="${Object(lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_9__["ifDefined"])(e.image_id)}" .recent="${!0}" .onClick="${() => this.onConnecting(e)}"></wcm-wallet-button>`;
    }
  },
  vo = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
var uo = Object.defineProperty,
  bo = Object.getOwnPropertyDescriptor,
  fo = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? bo(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && uo(o, r, t), t;
  };
let Ee = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  render() {
    const {
        explorerExcludedWalletIds: e,
        enableExplorer: o
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ConfigCtrl"].state,
      r = e !== "ALL" && o,
      a = Z.manualWalletsTemplate(),
      t = Z.recomendedWalletsTemplate();
    let l = [Z.recentWalletTemplate(), ...a, ...t];
    l = l.filter(Boolean);
    const i = l.length > 4 || r;
    let s = [];
    i ? s = l.slice(0, 3) : s = l;
    const $ = Boolean(s.length);
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-modal-header .border="${!0}" title="Connect your wallet" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${v.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${v.SCAN_ICON}<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${$ ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-modal-footer><div class="wcm-desktop-title">${v.DESKTOP_ICON}<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${s} ${i ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-footer>` : null}`;
  }
};
Ee.styles = [h.globalCss, vo], Ee = fo([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-desktop-wallet-selection")], Ee);
const xo = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
var yo = Object.defineProperty,
  $o = Object.getOwnPropertyDescriptor,
  Co = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? $o(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && yo(o, r, t), t;
  };
let Me = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  render() {
    const {
      termsOfServiceUrl: e,
      privacyPolicyUrl: o
    } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ConfigCtrl"].state;
    return (e !== null && e !== void 0 ? e : o) ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${e ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<a href="${e}" target="_blank" rel="noopener noreferrer">Terms of Service</a>` : null} ${e && o ? "and" : null} ${o ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<a href="${o}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>` : null}</wcm-text></div>` : null;
  }
};
Me.styles = [h.globalCss, xo], Me = Co([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-legal-notice")], Me);
const ko = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
var Oo = Object.defineProperty,
  Wo = Object.getOwnPropertyDescriptor,
  Io = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? Wo(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Oo(o, r, t), t;
  };
let Le = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  onQrcode() {
    _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].push("Qrcode");
  }
  render() {
    const {
        explorerExcludedWalletIds: e,
        enableExplorer: o
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ConfigCtrl"].state,
      r = e !== "ALL" && o,
      a = Z.manualWalletsTemplate(),
      t = Z.recomendedWalletsTemplate();
    let l = [Z.recentWalletTemplate(), ...a, ...t];
    l = l.filter(Boolean);
    const i = l.length > 8 || r;
    let s = [];
    i ? s = l.slice(0, 7) : s = l;
    const $ = Boolean(s.length);
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${v.QRCODE_ICON}"></wcm-modal-header>${$ ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-modal-content><div>${s} ${i ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-content>` : null}`;
  }
};
Le.styles = [h.globalCss, ko], Le = Io([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-mobile-wallet-selection")], Le);
const Eo = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
var Mo = Object.defineProperty,
  Lo = Object.getOwnPropertyDescriptor,
  Re = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? Lo(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Mo(o, r, t), t;
  };
let ae = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(), this.open = !1, this.active = !1, this.unsubscribeModal = void 0, this.abortController = void 0, this.unsubscribeModal = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ModalCtrl"].subscribe(e => {
      e.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
    });
  }
  disconnectedCallback() {
    var e;
    (e = this.unsubscribeModal) == null || e.call(this);
  }
  get overlayEl() {
    return c.getShadowRootElement(this, ".wcm-overlay");
  }
  get containerEl() {
    return c.getShadowRootElement(this, ".wcm-container");
  }
  toggleBodyScroll(e) {
    if (document.querySelector("body")) if (e) {
      const o = document.getElementById("wcm-styles");
      o === null || o === void 0 || o.remove();
    } else document.head.insertAdjacentHTML("beforeend", '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>');
  }
  onCloseModal(e) {
    e.target === e.currentTarget && _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ModalCtrl"].close();
  }
  onOpenModalEvent() {
    this.toggleBodyScroll(!1), this.addKeyboardEvents(), this.open = !0, setTimeout(async () => {
      const e = c.isMobileAnimation() ? {
          y: ["50vh", "0vh"]
        } : {
          scale: [.98, 1]
        },
        o = .1,
        r = .2;
      await Promise.all([Object(motion__WEBPACK_IMPORTED_MODULE_8__["animate"])(this.overlayEl, {
        opacity: [0, 1]
      }, {
        delay: o,
        duration: r
      }).finished, Object(motion__WEBPACK_IMPORTED_MODULE_8__["animate"])(this.containerEl, e, {
        delay: o,
        duration: r
      }).finished]), this.active = !0;
    }, 0);
  }
  async onCloseModalEvent() {
    this.toggleBodyScroll(!0), this.removeKeyboardEvents();
    const e = c.isMobileAnimation() ? {
        y: ["0vh", "50vh"]
      } : {
        scale: [1, .98]
      },
      o = .2;
    await Promise.all([Object(motion__WEBPACK_IMPORTED_MODULE_8__["animate"])(this.overlayEl, {
      opacity: [1, 0]
    }, {
      duration: o
    }).finished, Object(motion__WEBPACK_IMPORTED_MODULE_8__["animate"])(this.containerEl, e, {
      duration: o
    }).finished]), this.containerEl.removeAttribute("style"), this.active = !1, this.open = !1;
  }
  addKeyboardEvents() {
    this.abortController = new AbortController(), window.addEventListener("keydown", e => {
      var o;
      e.key === "Escape" ? _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ModalCtrl"].close() : e.key === "Tab" && ((o = e.target) != null && o.tagName.includes("wcm-") || this.containerEl.focus());
    }, this.abortController), this.containerEl.focus();
  }
  removeKeyboardEvents() {
    var e;
    (e = this.abortController) == null || e.abort(), this.abortController = void 0;
  }
  render() {
    const e = {
      "wcm-overlay": !0,
      "wcm-active": this.active
    };
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${Object(lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__["classMap"])(e)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${this.open ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>` : null}</div></div>`;
  }
};
ae.styles = [h.globalCss, Eo], Re([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["state"])()], ae.prototype, "open", 2), Re([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["state"])()], ae.prototype, "active", 2), ae = Re([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-modal")], ae);
const Ro = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
var Ao = Object.defineProperty,
  Po = Object.getOwnPropertyDescriptor,
  le = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? Po(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Ao(o, r, t), t;
  };
let B = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(...arguments), this.isMobile = !1, this.isDesktop = !1, this.isWeb = !1, this.isRetry = !1;
  }
  onMobile() {
    _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].isMobile() ? _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].replace("MobileConnecting") : _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].replace("MobileQrcodeConnecting");
  }
  onDesktop() {
    _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].replace("DesktopConnecting");
  }
  onWeb() {
    _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].replace("WebConnecting");
  }
  render() {
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<div>${this.isRetry ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<slot></slot>` : null} ${this.isMobile ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-button .onClick="${this.onMobile}" .iconLeft="${v.MOBILE_ICON}" variant="outline">Mobile</wcm-button>` : null} ${this.isDesktop ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${v.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>` : null} ${this.isWeb ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-button .onClick="${this.onWeb}" .iconLeft="${v.GLOBE_ICON}" variant="outline">Web</wcm-button>` : null}</div>`;
  }
};
B.styles = [h.globalCss, Ro], le([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
})], B.prototype, "isMobile", 2), le([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
})], B.prototype, "isDesktop", 2), le([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
})], B.prototype, "isWeb", 2), le([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
  type: Boolean
})], B.prototype, "isRetry", 2), B = le([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-platform-selection")], B);
const To = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var jo = Object.defineProperty,
  _o = Object.getOwnPropertyDescriptor,
  Do = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? _o(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && jo(o, r, t), t;
  };
let Ae = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  onClick() {
    _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["RouterCtrl"].push("WalletExplorer");
  }
  render() {
    const {
        recomendedWallets: e
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ExplorerCtrl"].state,
      o = G.manualWallets(),
      r = [...e, ...o].reverse().slice(0, 4);
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<button @click="${this.onClick}"><div class="wcm-icons">${r.map(a => {
      const t = c.getWalletIcon(a);
      if (t) return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<img crossorigin="anonymous" src="${t}">`;
      const l = c.getWalletIcon({
        id: a.id
      });
      return l ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<img crossorigin="anonymous" src="${l}">` : v.WALLET_PLACEHOLDER;
    })} ${[...Array(4 - r.length)].map(() => v.WALLET_PLACEHOLDER)}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`;
  }
};
Ae.styles = [h.globalCss, To], Ae = Do([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-view-all-wallets-button")], Ae);
const No = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
var Zo = Object.defineProperty,
  So = Object.getOwnPropertyDescriptor,
  de = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? So(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Zo(o, r, t), t;
  };
let Y = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(), this.walletId = "", this.imageId = "", this.uri = "", setTimeout(() => {
      const {
        walletConnectUri: e
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["OptionsCtrl"].state;
      this.uri = e;
    }, 0);
  }
  get overlayEl() {
    return c.getShadowRootElement(this, ".wcm-qr-container");
  }
  render() {
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<div class="wcm-qr-container">${this.uri ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${Object(lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_9__["ifDefined"])(this.walletId)}" imageId="${Object(lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_9__["ifDefined"])(this.imageId)}"></wcm-qrcode>` : lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-spinner></wcm-spinner>`}</div>`;
  }
};
Y.styles = [h.globalCss, No], de([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], Y.prototype, "walletId", 2), de([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], Y.prototype, "imageId", 2), de([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["state"])()], Y.prototype, "uri", 2), Y = de([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-walletconnect-qr")], Y);
var Bo = Object.defineProperty,
  Uo = Object.getOwnPropertyDescriptor,
  Ho = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? Uo(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Bo(o, r, t), t;
  };
let Pe = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  viewTemplate() {
    return _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].isAndroid() ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-android-wallet-selection></wcm-android-wallet-selection>` : _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].isMobile() ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>` : lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`;
  }
  render() {
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`;
  }
};
Pe.styles = [h.globalCss], Pe = Ho([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-connect-wallet-view")], Pe);
const zo = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var Vo = Object.defineProperty,
  Fo = Object.getOwnPropertyDescriptor,
  Ke = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? Fo(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Vo(o, r, t), t;
  };
let me = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(), this.isError = !1, this.openDesktopApp();
  }
  onFormatAndRedirect(e) {
    const {
        desktop: o,
        name: r
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].getWalletRouterData(),
      a = o === null || o === void 0 ? void 0 : o.native;
    if (a) {
      const t = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].formatNativeUrl(a, e, r);
      _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].openHref(t, "_self");
    }
  }
  openDesktopApp() {
    const {
        walletConnectUri: e
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["OptionsCtrl"].state,
      o = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].getWalletRouterData();
    c.setRecentWallet(o), e && this.onFormatAndRedirect(e);
  }
  render() {
    const {
        name: e,
        id: o,
        image_id: r
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].getWalletRouterData(),
      {
        isMobile: a,
        isWeb: t
      } = c.getCachedRouterWalletPlatforms();
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-modal-header title="${e}" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o}" imageId="${Object(lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_9__["ifDefined"])(r)}" label="${`Continue in ${e}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${e} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${a}" .isWeb="${t}" .isRetry="${!0}"><wcm-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${v.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
  }
};
me.styles = [h.globalCss, zo], Ke([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["state"])()], me.prototype, "isError", 2), me = Ke([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-desktop-connecting-view")], me);
const qo = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
var Qo = Object.defineProperty,
  Ko = Object.getOwnPropertyDescriptor,
  Yo = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? Ko(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Qo(o, r, t), t;
  };
let Te = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  onInstall(e) {
    e && _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].openHref(e, "_blank");
  }
  render() {
    const {
      name: e,
      id: o,
      image_id: r,
      homepage: a
    } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].getWalletRouterData();
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-modal-header title="${e}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o}" imageId="${Object(lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_9__["ifDefined"])(r)}" label="Not Detected" .isStale="${!0}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${e} to continue. If multiple browser extensions are installed, disable non ${e} ones and try again`}</wcm-text><wcm-button .onClick="${() => this.onInstall(a)}" .iconLeft="${v.ARROW_DOWN_ICON}">Download</wcm-button></wcm-info-footer>`;
  }
};
Te.styles = [h.globalCss, qo], Te = Yo([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-install-wallet-view")], Te);
const Go = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
var Xo = Object.defineProperty,
  Jo = Object.getOwnPropertyDescriptor,
  Ye = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? Jo(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Xo(o, r, t), t;
  };
let he = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(), this.isError = !1, this.openMobileApp();
  }
  onFormatAndRedirect(e, o = !1) {
    const {
        mobile: r,
        name: a
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].getWalletRouterData(),
      t = r === null || r === void 0 ? void 0 : r.native,
      l = r === null || r === void 0 ? void 0 : r.universal;
    if (t && !o) {
      const i = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].formatNativeUrl(t, e, a);
      _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].openHref(i, "_self");
    } else if (l) {
      const i = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].formatUniversalUrl(l, e, a);
      _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].openHref(i, "_self");
    }
  }
  openMobileApp(e = !1) {
    const {
        walletConnectUri: o
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["OptionsCtrl"].state,
      r = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].getWalletRouterData();
    c.setRecentWallet(r), o && this.onFormatAndRedirect(o, e);
  }
  onGoToAppStore(e) {
    e && _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].openHref(e, "_blank");
  }
  render() {
    const {
        name: e,
        id: o,
        image_id: r,
        app: a,
        mobile: t
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].getWalletRouterData(),
      {
        isWeb: l
      } = c.getCachedRouterWalletPlatforms(),
      i = a === null || a === void 0 ? void 0 : a.ios,
      s = t === null || t === void 0 ? void 0 : t.universal;
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-modal-header title="${e}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o}" imageId="${Object(lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_9__["ifDefined"])(r)}" label="Tap 'Open' to continue…" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${l}" .isRetry="${!0}"><wcm-button .onClick="${() => this.openMobileApp(!1)}" .iconRight="${v.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection>${s ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${() => this.openMobileApp(!0)}">Try this alternate link</span></wcm-text>` : null}</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${o}" imageId="${Object(lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_9__["ifDefined"])(r)}"></wcm-wallet-image><wcm-text>${`Get ${e}`}</wcm-text></div><wcm-button .iconRight="${v.ARROW_RIGHT_ICON}" .onClick="${() => this.onGoToAppStore(i)}" variant="ghost">App Store</wcm-button></wcm-info-footer>`;
  }
};
he.styles = [h.globalCss, Go], Ye([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["state"])()], he.prototype, "isError", 2), he = Ye([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-mobile-connecting-view")], he);
const er = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var tr = Object.defineProperty,
  or = Object.getOwnPropertyDescriptor,
  rr = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? or(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && tr(o, r, t), t;
  };
let je = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  render() {
    const {
        name: e,
        id: o,
        image_id: r
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].getWalletRouterData(),
      {
        isDesktop: a,
        isWeb: t
      } = c.getCachedRouterWalletPlatforms();
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-modal-header title="${e}" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${o}" imageId="${Object(lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_9__["ifDefined"])(r)}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${e} app`}</wcm-text><wcm-platform-selection .isDesktop="${a}" .isWeb="${t}"></wcm-platform-selection></wcm-info-footer>`;
  }
};
je.styles = [h.globalCss, er], je = rr([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-mobile-qr-connecting-view")], je);
var ar = Object.defineProperty,
  lr = Object.getOwnPropertyDescriptor,
  ir = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? lr(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && ar(o, r, t), t;
  };
let _e = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  render() {
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-modal-header title="Scan the code" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`;
  }
};
_e.styles = [h.globalCss], _e = ir([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-qrcode-view")], _e);
const nr = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
var cr = Object.defineProperty,
  sr = Object.getOwnPropertyDescriptor,
  ie = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? sr(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && cr(o, r, t), t;
  };
const De = 40;
let U = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(...arguments), this.loading = !_walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ExplorerCtrl"].state.wallets.listings.length, this.firstFetch = !_walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ExplorerCtrl"].state.wallets.listings.length, this.search = "", this.endReached = !1, this.intersectionObserver = void 0, this.searchDebounce = c.debounce(e => {
      e.length >= 1 ? (this.firstFetch = !0, this.endReached = !1, this.search = e, _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ExplorerCtrl"].resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ExplorerCtrl"].resetSearch());
    });
  }
  firstUpdated() {
    this.createPaginationObserver();
  }
  disconnectedCallback() {
    var e;
    (e = this.intersectionObserver) == null || e.disconnect();
  }
  get placeholderEl() {
    return c.getShadowRootElement(this, ".wcm-placeholder-block");
  }
  createPaginationObserver() {
    this.intersectionObserver = new IntersectionObserver(([e]) => {
      e.isIntersecting && !(this.search && this.firstFetch) && this.fetchWallets();
    }), this.intersectionObserver.observe(this.placeholderEl);
  }
  isLastPage() {
    const {
        wallets: e,
        search: o
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ExplorerCtrl"].state,
      {
        listings: r,
        total: a
      } = this.search ? o : e;
    return a <= De || r.length >= a;
  }
  async fetchWallets() {
    var e;
    const {
        wallets: o,
        search: r
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ExplorerCtrl"].state,
      {
        listings: a,
        total: t,
        page: l
      } = this.search ? r : o;
    if (!this.endReached && (this.firstFetch || t > De && a.length < t)) try {
      this.loading = !0;
      const i = (e = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["OptionsCtrl"].state.chains) == null ? void 0 : e.join(","),
        {
          listings: s
        } = await _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ExplorerCtrl"].getWallets({
          page: this.firstFetch ? 1 : l + 1,
          entries: De,
          search: this.search,
          version: 2,
          chains: i
        }),
        $ = s.map(f => c.getWalletIcon(f));
      await Promise.all([...$.map(async f => c.preloadImage(f)), _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].wait(300)]), this.endReached = this.isLastPage();
    } catch (i) {
      console.error(i), _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ToastCtrl"].openToast(c.getErrorMessage(i), "error");
    } finally {
      this.loading = !1, this.firstFetch = !1;
    }
  }
  onConnect(e) {
    _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].isAndroid() ? c.handleMobileLinking(e) : c.goToConnectingView(e);
  }
  onSearchChange(e) {
    const {
      value: o
    } = e.target;
    this.searchDebounce(o);
  }
  render() {
    const {
        wallets: e,
        search: o
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["ExplorerCtrl"].state,
      {
        listings: r
      } = this.search ? o : e,
      a = this.loading && !r.length,
      t = this.search.length >= 3;
    let l = Z.manualWalletsTemplate(),
      i = Z.recomendedWalletsTemplate(!0);
    t && (l = l.filter(({
      values: f
    }) => c.caseSafeIncludes(f[0], this.search)), i = i.filter(({
      values: f
    }) => c.caseSafeIncludes(f[0], this.search)));
    const s = !this.loading && !r.length && !i.length,
      $ = {
        "wcm-loading": a,
        "wcm-end-reached": this.endReached || !this.loading,
        "wcm-empty": s
      };
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(this)}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${Object(lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__["classMap"])($)}"><div class="wcm-grid">${a ? null : l} ${a ? null : i} ${a ? null : r.map(f => lit__WEBPACK_IMPORTED_MODULE_3__["html"]`${f ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-wallet-button imageId="${f.image_id}" name="${f.name}" walletId="${f.id}" .onClick="${() => this.onConnect(f)}"></wcm-wallet-button>` : null}`)}</div><div class="wcm-placeholder-block">${s ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>` : null} ${!s && this.loading ? lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-spinner></wcm-spinner>` : null}</div></wcm-modal-content>`;
  }
};
U.styles = [h.globalCss, nr], ie([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["state"])()], U.prototype, "loading", 2), ie([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["state"])()], U.prototype, "firstFetch", 2), ie([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["state"])()], U.prototype, "search", 2), ie([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["state"])()], U.prototype, "endReached", 2), U = ie([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-wallet-explorer-view")], U);
const dr = lit__WEBPACK_IMPORTED_MODULE_3__["css"]`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var mr = Object.defineProperty,
  hr = Object.getOwnPropertyDescriptor,
  Ge = (e, o, r, a) => {
    for (var t = a > 1 ? void 0 : a ? hr(o, r) : o, l = e.length - 1, i; l >= 0; l--) (i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && mr(o, r, t), t;
  };
let we = class extends lit__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
  constructor() {
    super(), this.isError = !1, this.openWebWallet();
  }
  onFormatAndRedirect(e) {
    const {
        desktop: o,
        name: r
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].getWalletRouterData(),
      a = o === null || o === void 0 ? void 0 : o.universal;
    if (a) {
      const t = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].formatUniversalUrl(a, e, r);
      _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].openHref(t, "_blank");
    }
  }
  openWebWallet() {
    const {
        walletConnectUri: e
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["OptionsCtrl"].state,
      o = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].getWalletRouterData();
    c.setRecentWallet(o), e && this.onFormatAndRedirect(e);
  }
  render() {
    const {
        name: e,
        id: o,
        image_id: r
      } = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].getWalletRouterData(),
      {
        isMobile: a,
        isDesktop: t
      } = c.getCachedRouterWalletPlatforms(),
      l = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_6__["CoreUtil"].isMobile();
    return lit__WEBPACK_IMPORTED_MODULE_3__["html"]`<wcm-modal-header title="${e}" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o}" imageId="${Object(lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_9__["ifDefined"])(r)}" label="${`Continue in ${e}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${e} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${a}" .isDesktop="${l ? !1 : t}" .isRetry="${!0}"><wcm-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${v.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
  }
};
we.styles = [h.globalCss, dr], Ge([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["state"])()], we.prototype, "isError", 2), we = Ge([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__["customElement"])("wcm-web-connecting-view")], we);


/***/ }),

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/hey-listen/dist/hey-listen.es.js ***!
  \*******************************************************/
/*! exports provided: invariant, warning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
var warning = function () { };
var invariant = function () { };
if (true) {
    warning = function (check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(message);
        }
    };
    invariant = function (check, message) {
        if (!check) {
            throw new Error(message);
        }
    };
}




/***/ }),

/***/ "./node_modules/lit-element/lit-element.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lit-element.js ***!
  \*************************************************/
/*! exports provided: CSSResult, adoptStyles, css, getCompatibleStyle, supportsAdoptingStyleSheets, unsafeCSS, ReactiveElement, defaultConverter, notEqual, _$LH, html, noChange, nothing, render, svg, LitElement, UpdatingElement, _$LE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_$LE", function() { return h; });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/reactive-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adoptStyles", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["adoptStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCompatibleStyle", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["getCompatibleStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactiveElement", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["ReactiveElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["notEqual"]; });

/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_$LH", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["_$LH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["nothing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["svg"]; });


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;const r=_lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["ReactiveElement"];class s extends _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["ReactiveElement"]{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Object(lit_html__WEBPACK_IMPORTED_MODULE_1__["render"])(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return lit_html__WEBPACK_IMPORTED_MODULE_1__["noChange"]}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s});const h={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.3");
//# sourceMappingURL=lit-element.js.map


/***/ }),

/***/ "./node_modules/lit-html/directive.js":
/*!********************************************!*\
  !*** ./node_modules/lit-html/directive.js ***!
  \********************************************/
/*! exports provided: Directive, PartType, directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directive", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartType", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return e; });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
//# sourceMappingURL=directive.js.map


/***/ }),

/***/ "./node_modules/lit-html/directives/class-map.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/directives/class-map.js ***!
  \*******************************************************/
/*! exports provided: classMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classMap", function() { return o; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/directive.js");

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=Object(_directive_js__WEBPACK_IMPORTED_MODULE_1__["directive"])(class extends _directive_js__WEBPACK_IMPORTED_MODULE_1__["Directive"]{constructor(t){var i;if(super(t),t.type!==_directive_js__WEBPACK_IMPORTED_MODULE_1__["PartType"].ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t))}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)))}return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["noChange"]}});
//# sourceMappingURL=class-map.js.map


/***/ }),

/***/ "./node_modules/lit-html/directives/if-defined.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/directives/if-defined.js ***!
  \********************************************************/
/*! exports provided: ifDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifDefined", function() { return l; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=l=>null!=l?l:_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["nothing"];
//# sourceMappingURL=if-defined.js.map


/***/ }),

/***/ "./node_modules/lit-html/is-server.js":
/*!********************************************!*\
  !*** ./node_modules/lit-html/is-server.js ***!
  \********************************************/
/*! exports provided: isServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return o; });
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=!1;
//# sourceMappingURL=is-server.js.map


/***/ }),

/***/ "./node_modules/lit-html/lit-html.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/*! exports provided: _$LH, html, noChange, nothing, render, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_$LH", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return b; });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const i=window,s=i.trustedTypes,e=s?s.createPolicy("lit-html",{createHTML:t=>t}):void 0,o="$lit$",n=`lit$${(Math.random()+"").slice(9)}$`,l="?"+n,h=`<${l}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),b=w(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o+s.slice(v)+n+w):s+n+(-2===v?(e.push(void 0),i):w)}return[P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o)||i.startsWith(n)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o).split(n),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k})}else v.push({type:6,index:r})}for(const i of t)h.removeAttribute(i)}if(y.test(h.tagName)){const t=h.textContent.split(n),i=t.length-1;if(i>0){h.textContent=s?s.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u())}}}else if(8===h.nodeType)if(h.data===l)v.push({type:2,index:r});else{let t=-1;for(;-1!==(t=h.data.indexOf(n,t+1));)v.push({type:7,index:r}),t+=n.length-1}r++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return(null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h]}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++)}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else{const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h}n&&!e&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}const I=s?s.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name)}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const j={O:o,P:n,A:l,C:1,M:V,L:M,R:v,D:S,I:R,V:k,H:L,N:z,U:H,F:Z},B=i.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t=i.litHtmlVersions)&&void 0!==t?t:i.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l};
//# sourceMappingURL=lit-html.js.map


/***/ }),

/***/ "./node_modules/lit/decorators.js":
/*!****************************************!*\
  !*** ./node_modules/lit/decorators.js ***!
  \****************************************/
/*! exports provided: customElement, property, state, eventOptions, query, queryAll, queryAsync, queryAssignedElements, queryAssignedNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element/decorators/custom-element.js */ "./node_modules/@lit/reactive-element/decorators/custom-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__["customElement"]; });

/* harmony import */ var _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit/reactive-element/decorators/property.js */ "./node_modules/@lit/reactive-element/decorators/property.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"]; });

/* harmony import */ var _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lit/reactive-element/decorators/state.js */ "./node_modules/@lit/reactive-element/decorators/state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "state", function() { return _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__["state"]; });

/* harmony import */ var _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lit/reactive-element/decorators/event-options.js */ "./node_modules/@lit/reactive-element/decorators/event-options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__["eventOptions"]; });

/* harmony import */ var _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lit/reactive-element/decorators/query.js */ "./node_modules/@lit/reactive-element/decorators/query.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__["query"]; });

/* harmony import */ var _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-all.js */ "./node_modules/@lit/reactive-element/decorators/query-all.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__["queryAll"]; });

/* harmony import */ var _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-async.js */ "./node_modules/@lit/reactive-element/decorators/query-async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAsync", function() { return _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__["queryAsync"]; });

/* harmony import */ var _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-elements.js */ "./node_modules/@lit/reactive-element/decorators/query-assigned-elements.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAssignedElements", function() { return _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__["queryAssignedElements"]; });

/* harmony import */ var _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-nodes.js */ "./node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAssignedNodes", function() { return _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__["queryAssignedNodes"]; });


//# sourceMappingURL=decorators.js.map


/***/ }),

/***/ "./node_modules/lit/directives/class-map.js":
/*!**************************************************!*\
  !*** ./node_modules/lit/directives/class-map.js ***!
  \**************************************************/
/*! exports provided: classMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/class-map.js */ "./node_modules/lit-html/directives/class-map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classMap", function() { return lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_0__["classMap"]; });


//# sourceMappingURL=class-map.js.map


/***/ }),

/***/ "./node_modules/lit/directives/if-defined.js":
/*!***************************************************!*\
  !*** ./node_modules/lit/directives/if-defined.js ***!
  \***************************************************/
/*! exports provided: ifDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/if-defined.js */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ifDefined", function() { return lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_0__["ifDefined"]; });


//# sourceMappingURL=if-defined.js.map


/***/ }),

/***/ "./node_modules/lit/index.js":
/*!***********************************!*\
  !*** ./node_modules/lit/index.js ***!
  \***********************************/
/*! exports provided: CSSResult, adoptStyles, css, getCompatibleStyle, supportsAdoptingStyleSheets, unsafeCSS, ReactiveElement, defaultConverter, notEqual, _$LH, html, noChange, nothing, render, svg, LitElement, UpdatingElement, _$LE, isServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element/lit-element.js */ "./node_modules/lit-element/lit-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adoptStyles", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["adoptStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCompatibleStyle", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["getCompatibleStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactiveElement", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["ReactiveElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["notEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_$LH", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["_$LH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["LitElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["UpdatingElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_$LE", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["_$LE"]; });

/* harmony import */ var lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/is-server.js */ "./node_modules/lit-html/is-server.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__["isServer"]; });


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/motion/dist/animate.es.js":
/*!************************************************!*\
  !*** ./node_modules/motion/dist/animate.es.js ***!
  \************************************************/
/*! exports provided: animate, animateProgress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateProgress", function() { return animateProgress; });
/* harmony import */ var _motionone_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/dom */ "./node_modules/@motionone/dom/dist/index.es.js");
/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @motionone/utils */ "./node_modules/@motionone/utils/dist/index.es.js");
/* harmony import */ var _motionone_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @motionone/animation */ "./node_modules/@motionone/animation/dist/index.es.js");




function animateProgress(target, options = {}) {
    return Object(_motionone_dom__WEBPACK_IMPORTED_MODULE_0__["withControls"])([
        () => {
            const animation = new _motionone_animation__WEBPACK_IMPORTED_MODULE_2__["Animation"](target, [0, 1], options);
            animation.finished.catch(() => { });
            return animation;
        },
    ], options, options.duration);
}
function animate(target, keyframesOrOptions, options) {
    const factory = Object(_motionone_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(target) ? animateProgress : _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["animate"];
    return factory(target, keyframesOrOptions, options);
}




/***/ }),

/***/ "./node_modules/motion/dist/main.es.js":
/*!*********************************************!*\
  !*** ./node_modules/motion/dist/main.es.js ***!
  \*********************************************/
/*! exports provided: createAnimate, animateStyle, timeline, stagger, spring, glide, style, inView, resize, scroll, ScrollOffset, withControls, getAnimationData, getStyleName, createMotionState, mountedStates, createStyles, createStyleString, MotionValue, animate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _motionone_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/dom */ "./node_modules/@motionone/dom/dist/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimate", function() { return _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["createAnimate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animateStyle", function() { return _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["animateStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeline", function() { return _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["timeline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stagger", function() { return _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["stagger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["spring"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "glide", function() { return _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["glide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["style"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inView", function() { return _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["inView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["resize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["scroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollOffset", function() { return _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["ScrollOffset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withControls", function() { return _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["withControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAnimationData", function() { return _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["getAnimationData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStyleName", function() { return _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["getStyleName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMotionState", function() { return _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["createMotionState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountedStates", function() { return _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["mountedStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["createStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStyleString", function() { return _motionone_dom__WEBPACK_IMPORTED_MODULE_0__["createStyleString"]; });

/* harmony import */ var _motionone_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @motionone/types */ "./node_modules/@motionone/types/dist/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionValue", function() { return _motionone_types__WEBPACK_IMPORTED_MODULE_1__["MotionValue"]; });

/* harmony import */ var _animate_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animate.es.js */ "./node_modules/motion/dist/animate.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return _animate_es_js__WEBPACK_IMPORTED_MODULE_2__["animate"]; });






/***/ })

}]);