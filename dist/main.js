/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bg.jpg */ "./src/images/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --sand-color: #bd9b16;\n  --moon-color: #ffffff;\n  --night-color: rgb(44 46 57);\n  --green-color: #127533;\n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  min-height: 100vh;\n  padding: 32px 48px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-attachment: fixed;\n  color: var(--sand-color);\n  font-size: large;\n  display: grid;\n  grid-template-rows: min-content 1fr min-content;\n  justify-items: center;\n}\n\nnav ul {\n  list-style: none;\n  display: flex;\n  gap: 64px;\n  cursor: pointer;\n}\n\nnav ul li {\n  font-size: 32px;\n}\n\nnav ul li:is(:focus, :hover) {\n  color: var(--green-color);\n}\n\nfooter a {\n  text-decoration-line: none;\n  color: var(--sand-color);\n}\n\nfooter a:is(:focus, :hover) {\n  text-decoration-line: underline;\n  color: var(--green-color);\n}\n\n/* style home page */\n\nmain {\n  margin: 16px 0;\n  width: 800px;\n  background-color: var(--night-color);\n  border-radius: 18px;\n  opacity: 0.5;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n}\n\nmain h1 {\n  align-self: center;\n  font-size: 48px;\n  margin-bottom: 16px;\n  cursor: pointer;\n}\n\nmain h1:hover {\n  color: var(--green-color);\n}\n\n.view,\n.work-hours,\n.location {\n  background-color: var(--moon-color);\n  padding: 12px 28px;\n  border-radius: 16px;\n  color: var(--sand-color);\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n}\n.view p {\n  font-weight: 600;\n}\n\n.view h2 {\n  font-size: 26px;\n  align-self: flex-end;\n}\n\n.work-hours {\n  align-items: center;\n}\n.work-hours h2 {\n  align-self: flex-start;\n}\n\n.work-hours div p span {\n  font-weight: 700;\n}\n\n.location {\n  align-items: center;\n}\n\n.location h2 {\n  align-self: flex-start;\n}\n\n/* style Menu page */\n\n#menu-title,\n#category,\n.food-card {\n  align-self: center;\n  margin-bottom: 16px;\n}\n\n#menu-title {\n  font-size: 42px;\n}\n\n#category {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--moon-color);\n  padding: 10px 16px;\n  border-radius: 16px;\n}\n\n.food-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  background-color: var(--moon-color);\n  padding: 16px;\n  border-radius: 16px;\n}\n\n.food-card h4 {\n  font-size: 26px;\n  font-weight: 700;\n}\n\n.food-card .food-desc {\n  max-width: 70%;\n  font-weight: 600;\n}\n\n.food-card .price {\n  font-weight: 700;\n  font-size: 26px;\n}\n\n.food-card img {\n  max-width: 50%;\n}\n\n/* style Contact page */\n\n#contact-title,\n.contact-card {\n  align-self: center;\n}\n\n#contact-title {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 32px;\n}\n\n.contact-card {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 32px;\n}\n\n.contact-card h3 {\n  margin-bottom: 10px;\n}\n\n.contact-card .contact-info {\n  background-color: var(--moon-color);\n  padding: 12px;\n  border-radius: 12px;\n}\n\n.contact-card img {\n  max-width: 20%;\n  border-radius: 12px;\n  overflow: hidden;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,yDAAwC;EACxC,sBAAsB;EACtB,4BAA4B;EAC5B,wBAAwB;EACxB,gBAAgB;EAChB,aAAa;EACb,+CAA+C;EAC/C,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;EAC1B,wBAAwB;AAC1B;;AAEA;EACE,+BAA+B;EAC/B,yBAAyB;AAC3B;;AAEA,oBAAoB;;AAEpB;EACE,cAAc;EACd,YAAY;EACZ,oCAAoC;EACpC,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;;EAGE,mCAAmC;EACnC,kBAAkB;EAClB,mBAAmB;EACnB,wBAAwB;EACxB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA,oBAAoB;;AAEpB;;;EAGE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,wBAAwB;EACxB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,mCAAmC;EACnC,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA,uBAAuB;;AAEvB;;EAEE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;EACnC,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,gBAAgB;AAClB","sourcesContent":[":root {\n  --sand-color: #bd9b16;\n  --moon-color: #ffffff;\n  --night-color: rgb(44 46 57);\n  --green-color: #127533;\n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  min-height: 100vh;\n  padding: 32px 48px;\n  background-image: url('./images/bg.jpg');\n  background-size: cover;\n  background-attachment: fixed;\n  color: var(--sand-color);\n  font-size: large;\n  display: grid;\n  grid-template-rows: min-content 1fr min-content;\n  justify-items: center;\n}\n\nnav ul {\n  list-style: none;\n  display: flex;\n  gap: 64px;\n  cursor: pointer;\n}\n\nnav ul li {\n  font-size: 32px;\n}\n\nnav ul li:is(:focus, :hover) {\n  color: var(--green-color);\n}\n\nfooter a {\n  text-decoration-line: none;\n  color: var(--sand-color);\n}\n\nfooter a:is(:focus, :hover) {\n  text-decoration-line: underline;\n  color: var(--green-color);\n}\n\n/* style home page */\n\nmain {\n  margin: 16px 0;\n  width: 800px;\n  background-color: var(--night-color);\n  border-radius: 18px;\n  opacity: 0.5;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n}\n\nmain h1 {\n  align-self: center;\n  font-size: 48px;\n  margin-bottom: 16px;\n  cursor: pointer;\n}\n\nmain h1:hover {\n  color: var(--green-color);\n}\n\n.view,\n.work-hours,\n.location {\n  background-color: var(--moon-color);\n  padding: 12px 28px;\n  border-radius: 16px;\n  color: var(--sand-color);\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n}\n.view p {\n  font-weight: 600;\n}\n\n.view h2 {\n  font-size: 26px;\n  align-self: flex-end;\n}\n\n.work-hours {\n  align-items: center;\n}\n.work-hours h2 {\n  align-self: flex-start;\n}\n\n.work-hours div p span {\n  font-weight: 700;\n}\n\n.location {\n  align-items: center;\n}\n\n.location h2 {\n  align-self: flex-start;\n}\n\n/* style Menu page */\n\n#menu-title,\n#category,\n.food-card {\n  align-self: center;\n  margin-bottom: 16px;\n}\n\n#menu-title {\n  font-size: 42px;\n}\n\n#category {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--moon-color);\n  padding: 10px 16px;\n  border-radius: 16px;\n}\n\n.food-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  background-color: var(--moon-color);\n  padding: 16px;\n  border-radius: 16px;\n}\n\n.food-card h4 {\n  font-size: 26px;\n  font-weight: 700;\n}\n\n.food-card .food-desc {\n  max-width: 70%;\n  font-weight: 600;\n}\n\n.food-card .price {\n  font-weight: 700;\n  font-size: 26px;\n}\n\n.food-card img {\n  max-width: 50%;\n}\n\n/* style Contact page */\n\n#contact-title,\n.contact-card {\n  align-self: center;\n}\n\n#contact-title {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 32px;\n}\n\n.contact-card {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 32px;\n}\n\n.contact-card h3 {\n  margin-bottom: 10px;\n}\n\n.contact-card .contact-info {\n  background-color: var(--moon-color);\n  padding: 12px;\n  border-radius: 12px;\n}\n\n.contact-card img {\n  max-width: 20%;\n  border-radius: 12px;\n  overflow: hidden;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ "./src/dom-manipulation.js");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ "./src/info.js");



function makeContactTitle() {
  const contactTitle = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('h2');
  contactTitle.id = 'contact-title';
  contactTitle.textContent = 'Contact Us';
  return contactTitle;
}

function makeContactCard(name, job, phone, email, imgSrc) {
  const contactCard = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('div');
  contactCard.classList.add('contact-card');

  const contactInfo = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('div');
  contactInfo.classList.add('contact-info');

  const contactName = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('h3');
  contactName.textContent = name;

  const contactJob = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('p');
  contactJob.classList.add('contact-job');
  contactJob.textContent = job;

  const contactPhoneNumber = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('p');
  contactPhoneNumber.classList.add('phone-number');
  contactPhoneNumber.textContent = phone;

  const contactEmail = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('p');
  contactEmail.classList.add('contact-email');
  contactEmail.textContent = email;

  contactInfo.appendChild(contactName);
  contactInfo.appendChild(contactJob);
  contactInfo.appendChild(contactPhoneNumber);
  contactInfo.appendChild(contactEmail);

  const contactImg = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('img');
  contactImg.src = imgSrc;

  contactCard.appendChild(contactInfo);
  contactCard.appendChild(contactImg);
  return contactCard;
}

const mama = makeContactCard(
  _info__WEBPACK_IMPORTED_MODULE_1__.contacts.mamaCamel.name,
  _info__WEBPACK_IMPORTED_MODULE_1__.contacts.mamaCamel.job,
  _info__WEBPACK_IMPORTED_MODULE_1__.contacts.mamaCamel.phone,
  _info__WEBPACK_IMPORTED_MODULE_1__.contacts.mamaCamel.email,
  _info__WEBPACK_IMPORTED_MODULE_1__.contacts.mamaCamel.img
);

const papa = makeContactCard(
  _info__WEBPACK_IMPORTED_MODULE_1__.contacts.papCamel.name,
  _info__WEBPACK_IMPORTED_MODULE_1__.contacts.papCamel.job,
  _info__WEBPACK_IMPORTED_MODULE_1__.contacts.papCamel.phone,
  _info__WEBPACK_IMPORTED_MODULE_1__.contacts.papCamel.email,
  _info__WEBPACK_IMPORTED_MODULE_1__.contacts.papCamel.img
);

const baby = makeContactCard(
  _info__WEBPACK_IMPORTED_MODULE_1__.contacts.babyCamel.name,
  _info__WEBPACK_IMPORTED_MODULE_1__.contacts.babyCamel.job,
  _info__WEBPACK_IMPORTED_MODULE_1__.contacts.babyCamel.phone,
  _info__WEBPACK_IMPORTED_MODULE_1__.contacts.babyCamel.email,
  _info__WEBPACK_IMPORTED_MODULE_1__.contacts.babyCamel.img
);

const contactComponents = [makeContactTitle(), mama, papa, baby];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactComponents);


/***/ }),

/***/ "./src/dom-manipulation.js":
/*!*********************************!*\
  !*** ./src/dom-manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domCreator": () => (/* binding */ domCreator),
/* harmony export */   "domSelector": () => (/* binding */ domSelector),
/* harmony export */   "domSelectorAll": () => (/* binding */ domSelectorAll)
/* harmony export */ });
function domCreator(ele) {
  return document.createElement(ele);
}

function domSelector(ele) {
  return document.querySelector(ele);
}

function domSelectorAll(ele) {
  return document.querySelectorAll(ele);
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ "./src/dom-manipulation.js");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ "./src/info.js");



function makeTitle() {
  const title = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('h1');
  title.textContent = _info__WEBPACK_IMPORTED_MODULE_1__.contentObj.title;
  return title;
}

function makeReview(text, viewerName) {
  const view = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('div');
  view.classList.add('view');

  const viewPara = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('p');
  viewPara.textContent = text;

  const viewer = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('h2');
  viewer.textContent = viewerName;

  view.appendChild(viewPara);
  view.appendChild(viewer);
  return view;
}

function makeHoursDiv() {
  const workHours = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('div');
  workHours.classList.add('work-hours');

  const subtitle = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('h2');
  subtitle.textContent = 'Work Hours';

  const schedule = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('div');
  schedule.innerHTML = `
  <p><span>Monday:</span> ${_info__WEBPACK_IMPORTED_MODULE_1__.contentObj.hours.monday}</p>
  <p><span>Sunday:</span> ${_info__WEBPACK_IMPORTED_MODULE_1__.contentObj.hours.sunday}</p>
  <p><span>Tuesday:</span> ${_info__WEBPACK_IMPORTED_MODULE_1__.contentObj.hours.tuesday}</p>
  <p><span>Wednesday:</span> ${_info__WEBPACK_IMPORTED_MODULE_1__.contentObj.hours.wednesday}</p>
  <p><span>Thursday:</span> ${_info__WEBPACK_IMPORTED_MODULE_1__.contentObj.hours.thursday}</p>
  <p><span>Friday:</span> ${_info__WEBPACK_IMPORTED_MODULE_1__.contentObj.hours.friday}</p>
  <p><span>Saturday:</span> ${_info__WEBPACK_IMPORTED_MODULE_1__.contentObj.hours.saturday}</p>
  `;

  workHours.appendChild(subtitle);
  workHours.appendChild(schedule);

  return workHours;
}

function makeLocationDiv() {
  const locationDiv = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('div');
  locationDiv.classList.add('location');

  const subtitle = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('h2');
  subtitle.textContent = _info__WEBPACK_IMPORTED_MODULE_1__.contentObj.location.subtitle;

  const address = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('p');
  address.textContent = _info__WEBPACK_IMPORTED_MODULE_1__.contentObj.location.address;

  locationDiv.appendChild(subtitle);
  locationDiv.appendChild(address);

  return locationDiv;
}

const reviewerOne = makeReview(
  _info__WEBPACK_IMPORTED_MODULE_1__.contentObj.reviewerOne.text,
  _info__WEBPACK_IMPORTED_MODULE_1__.contentObj.reviewerOne.reviewer
);

const reviewerTwo = makeReview(
  _info__WEBPACK_IMPORTED_MODULE_1__.contentObj.reviewerTwo.text,
  _info__WEBPACK_IMPORTED_MODULE_1__.contentObj.reviewerTwo.reviewer
);

const homeComponents = [
  makeTitle(),
  reviewerOne,
  reviewerTwo,
  makeHoursDiv(),
  makeLocationDiv(),
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeComponents);


/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contacts": () => (/* binding */ contacts),
/* harmony export */   "contentObj": () => (/* binding */ contentObj),
/* harmony export */   "entrees": () => (/* binding */ entrees),
/* harmony export */   "mainDishes": () => (/* binding */ mainDishes)
/* harmony export */ });
/* harmony import */ var _images_couscous_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/couscous.jpg */ "./src/images/couscous.jpg");
/* harmony import */ var _images_zviti2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/zviti2.jpeg */ "./src/images/zviti2.jpeg");
/* harmony import */ var _images_chakhchoka_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/chakhchoka.jpeg */ "./src/images/chakhchoka.jpeg");
/* harmony import */ var _images_sahara_tea_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/sahara-tea.jpg */ "./src/images/sahara-tea.jpg");
/* harmony import */ var _images_baklava_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/baklava.jpg */ "./src/images/baklava.jpg");
/* harmony import */ var _images_mama_camel_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/mama-camel.jpg */ "./src/images/mama-camel.jpg");
/* harmony import */ var _images_papa_camel_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/papa-camel.jpg */ "./src/images/papa-camel.jpg");
/* harmony import */ var _images_baby_camel_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/baby-camel.jpg */ "./src/images/baby-camel.jpg");









// Home page
const contentObj = {
  title: 'Khaima Restaurant',
  reviewerOne: {
    text: '"Khaima Restaurant is the palce in middle sahara with Algerian traditional food. Food is a perfect blend of flavors and spices that will leave your taste buds tingling. The dishes are hearty, comforting and perfect for sharing with friends and family. If you ever have a chance to try this cuisine, I highly recommend it." ',
    reviewer: 'John Kennedy',
  },
  reviewerTwo: {
    text: '"Khaima in the Algerian Sahara is a unique and unforgettable dining experience. The traditional Berber cuisine is delicious and authentic, and the desert setting is breathtaking. Highly recommend a visit to Khaima for a truly one-of-a-kind meal."',
    reviewer: 'Mohammed El Kendy',
  },
  hours: {
    subtitle: 'Work Hours',
    sunday: '8am-8pm',
    monday: '8am-8am',
    tuesday: '8am - 7pm',
    wednesday: '7am - 6pm',
    thursday: '8am - 10pm',
    friday: '8am - 10pm',
    saturday: '8am - 10pm',
  },
  location: {
    subtitle: 'Location',
    address: 'Tassili, Algeria',
  },
};

// Menu page

const mainDishes = {
  category: 'Main Dishes',
  couscous: {
    name: 'Couscous',
    desc: 'Couscous is a traditional North African dish made from small steamed balls of semolina wheat. It is often served as a side dish with meat or vegetables and can be made sweet or savory. It is a staple in Algerian cuisine and is enjoyed by locals and visitors alike.',
    price: '3$',
    imgSrc: _images_couscous_jpg__WEBPACK_IMPORTED_MODULE_0__, // Image by chefmouhcine on pixabay, https://pixabay.com/photos/couscous-vegetable-meat-recipe-3440042/
  },
  zviti: {
    name: 'Zviti',
    desc: 'Zviti is a traditional Algerian dish consisting of stewed lamb or beef, mixed with chickpeas and a variety of spices. It is often served with couscous and is a hearty, comforting meal. It is a staple of Algerian cuisine and is enjoyed by locals and visitors alike.',
    price: '4$',
    imgSrc: _images_zviti2_jpeg__WEBPACK_IMPORTED_MODULE_1__, // Image by Djazair Cooking on tweeter post, https://twitter.com/DjazairCooking/status/1519767427684438017/photo/1
  },
  chakhchokha: {
    name: 'Chakhchokha',
    desc: 'Chakhchokha is a traditional Algerian dish made of cooked and mashed tomatoes and bell peppers, typically served with bread. It is a hearty and flavorful dish, and is often served as a side dish or as a topping for meat dishes. It is a staple in Algerian cuisine and is enjoyed by locals and visitors alike.',
    price: '3$',
    imgSrc: _images_chakhchoka_jpeg__WEBPACK_IMPORTED_MODULE_2__, // Image from https://www.myexcellentdegustations.com/algerian-thin-flatbread-with-meat-sauce-chakhchoukha/
  },
};

const entrees = {
  category: 'Entrees and Dessert Dishes',
  tea: {
    name: 'Sahara Tea',
    desc: 'Algerian Sahara tea is a type of black tea that is grown and produced in the Sahara desert region of Algeria. It is known for its strong, bold flavor and is often served with mint or other herbs to enhance the taste. It is considered a traditional drink in Algeria and is enjoyed by many locals and tourists alike.',
    price: '0.5$',
    imgSrc: _images_sahara_tea_jpg__WEBPACK_IMPORTED_MODULE_3__, // Image by pirkerchri on pixabay, https://pixabay.com/images/id-2431459/
  },
  baklava: {
    name: 'Baklava',
    desc: 'Algerian baklava is a sweet pastry made from layers of phyllo dough filled with chopped nuts, typically almonds or pistachios. It is sweetened with honey or syrup and is often flavored with cinnamon or orange blossom water. It is a popular dessert in Algeria and can be found in many bakeries and restaurants throughout the country.',
    price: '2$',
    imgSrc: _images_baklava_jpg__WEBPACK_IMPORTED_MODULE_4__, // Image by fabrikasimf on Freepik, https://www.freepik.com/author/fabrikasimf
  },
};

// Contact page

// camel vectors from Freepik by Brgfx, https://www.freepik.com/author/brgfx
const contacts = {
  mamaCamel: {
    name: 'Mama Camel',
    job: 'Chef',
    phone: '548-545-524',
    email: 'mamaCamelAg@fake.com',
    img: _images_mama_camel_jpg__WEBPACK_IMPORTED_MODULE_5__,
  },
  papCamel: {
    name: 'Papa Camel',
    job: 'Manager',
    phone: '442-544-111',
    email: 'papaCamelAg@fake.com',
    img: _images_papa_camel_jpg__WEBPACK_IMPORTED_MODULE_6__,
  },
  babyCamel: {
    name: 'Baby Camel',
    job: 'Waiter',
    phone: '542-444-200',
    email: 'babyCamelAg@fake.com',
    img: _images_baby_camel_jpg__WEBPACK_IMPORTED_MODULE_7__,
  },
};




/***/ }),

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => (/* binding */ loadPage),
/* harmony export */   "makeMain": () => (/* binding */ makeMain)
/* harmony export */ });
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ "./src/dom-manipulation.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");



function makeHeader() {
  const header = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('header');
  const nav = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('nav');
  const ul = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('ul');

  const homeItem = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('li');
  homeItem.textContent = 'Home';

  const menuItem = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('li');
  menuItem.textContent = 'Menu';

  const contactItem = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('li');
  contactItem.textContent = 'Contact';

  header.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(homeItem);
  ul.appendChild(menuItem);
  ul.appendChild(contactItem);

  return header;
}

function makeMain(arr) {
  const main = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('main');
  arr.forEach((element) => {
    main.appendChild(element);
  });

  return main;
}

function makeFooter() {
  const footer = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('footer');
  const link = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('a');
  link.textContent = 'Krimothiazine';
  link.href = 'https://github.com/karim-saou';
  link.style.display = 'inline';
  footer.textContent = 'Created by ';
  footer.appendChild(link);

  return footer;
}

function loadPage() {
  const content = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domSelector)('#content');
  content.appendChild(makeHeader());
  content.appendChild(makeMain(_home__WEBPACK_IMPORTED_MODULE_1__["default"]));
  content.appendChild(makeFooter());
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ "./src/dom-manipulation.js");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ "./src/info.js");



function menuTitle() {
  const menu = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('h2');
  menu.textContent = 'Menu';
  menu.id = 'menu-title';
  return menu;
}

function makeCategory(category) {
  const menuCategory = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('h3');
  menuCategory.textContent = category;
  menuCategory.id = 'category';
  return menuCategory;
}

function foodType(name, description, priceFood, imgSrc) {
  const foodCard = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('div');
  foodCard.classList.add('food-card');

  const title = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('h4');
  title.textContent = name;

  const desc = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('p');
  desc.classList.add('food-desc');
  desc.textContent = description;

  const price = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('p');
  price.classList.add('price');
  price.textContent = priceFood;

  const foodImg = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('img');
  foodImg.src = imgSrc;
  foodImg.alt = 'img';

  foodCard.appendChild(title);
  foodCard.appendChild(desc);
  foodCard.appendChild(price);
  foodCard.appendChild(foodImg);

  return foodCard;
}

const couscousDish = foodType(
  _info__WEBPACK_IMPORTED_MODULE_1__.mainDishes.couscous.name,
  _info__WEBPACK_IMPORTED_MODULE_1__.mainDishes.couscous.desc,
  _info__WEBPACK_IMPORTED_MODULE_1__.mainDishes.couscous.price,
  _info__WEBPACK_IMPORTED_MODULE_1__.mainDishes.couscous.imgSrc
);

const zvitiDish = foodType(
  _info__WEBPACK_IMPORTED_MODULE_1__.mainDishes.zviti.name,
  _info__WEBPACK_IMPORTED_MODULE_1__.mainDishes.zviti.desc,
  _info__WEBPACK_IMPORTED_MODULE_1__.mainDishes.zviti.price,
  _info__WEBPACK_IMPORTED_MODULE_1__.mainDishes.zviti.imgSrc
);

const chakhchokhaDish = foodType(
  _info__WEBPACK_IMPORTED_MODULE_1__.mainDishes.chakhchokha.name,
  _info__WEBPACK_IMPORTED_MODULE_1__.mainDishes.chakhchokha.desc,
  _info__WEBPACK_IMPORTED_MODULE_1__.mainDishes.chakhchokha.price,
  _info__WEBPACK_IMPORTED_MODULE_1__.mainDishes.chakhchokha.imgSrc
);

const saharaTea = foodType(
  _info__WEBPACK_IMPORTED_MODULE_1__.entrees.tea.name,
  _info__WEBPACK_IMPORTED_MODULE_1__.entrees.tea.desc,
  _info__WEBPACK_IMPORTED_MODULE_1__.entrees.tea.price,
  _info__WEBPACK_IMPORTED_MODULE_1__.entrees.tea.imgSrc
);

const baklava = foodType(
  _info__WEBPACK_IMPORTED_MODULE_1__.entrees.baklava.name,
  _info__WEBPACK_IMPORTED_MODULE_1__.entrees.baklava.desc,
  _info__WEBPACK_IMPORTED_MODULE_1__.entrees.baklava.price,
  _info__WEBPACK_IMPORTED_MODULE_1__.entrees.baklava.imgSrc
);

const mainDishesSubtitle = makeCategory(_info__WEBPACK_IMPORTED_MODULE_1__.mainDishes.category);
const entreesSubtitle = makeCategory(_info__WEBPACK_IMPORTED_MODULE_1__.entrees.category);

const menuComponents = [
  menuTitle(),
  mainDishesSubtitle,
  couscousDish,
  zvitiDish,
  chakhchokhaDish,
  entreesSubtitle,
  saharaTea,
  baklava,
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuComponents);


/***/ }),

/***/ "./src/images/baby-camel.jpg":
/*!***********************************!*\
  !*** ./src/images/baby-camel.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ab801140a84a4de50b5.jpg";

/***/ }),

/***/ "./src/images/baklava.jpg":
/*!********************************!*\
  !*** ./src/images/baklava.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e71a2178e164dfe48c6.jpg";

/***/ }),

/***/ "./src/images/bg.jpg":
/*!***************************!*\
  !*** ./src/images/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e345f94e28b46896494.jpg";

/***/ }),

/***/ "./src/images/chakhchoka.jpeg":
/*!************************************!*\
  !*** ./src/images/chakhchoka.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad8d2b78d731ed4d45cb.jpeg";

/***/ }),

/***/ "./src/images/couscous.jpg":
/*!*********************************!*\
  !*** ./src/images/couscous.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "920f01296cbdb82ffa38.jpg";

/***/ }),

/***/ "./src/images/mama-camel.jpg":
/*!***********************************!*\
  !*** ./src/images/mama-camel.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d5e9b973de21463c0ba.jpg";

/***/ }),

/***/ "./src/images/papa-camel.jpg":
/*!***********************************!*\
  !*** ./src/images/papa-camel.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "deef8dc12d5e69733710.jpg";

/***/ }),

/***/ "./src/images/sahara-tea.jpg":
/*!***********************************!*\
  !*** ./src/images/sahara-tea.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71631cb4ea9522f4ff2b.jpg";

/***/ }),

/***/ "./src/images/zviti2.jpeg":
/*!********************************!*\
  !*** ./src/images/zviti2.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d6de330d2b634e8bcd1.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-page */ "./src/load-page.js");
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-manipulation */ "./src/dom-manipulation.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts */ "./src/contacts.js");







// set page after first load at Home page
let page = 'Home';

function switchPage(Page) {
  let main = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.domSelector)('#content main');
  const content = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.domSelector)('#content');
  const footer = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.domSelector)('footer');
  if (main !== null) {
    if (Page === 'Home') {
      main.remove();
      main = (0,_load_page__WEBPACK_IMPORTED_MODULE_1__.makeMain)(_home__WEBPACK_IMPORTED_MODULE_3__["default"]);
      content.insertBefore(main, footer);
    }
    if (Page === 'Menu') {
      main.remove();
      main = (0,_load_page__WEBPACK_IMPORTED_MODULE_1__.makeMain)(_menu__WEBPACK_IMPORTED_MODULE_4__["default"]);
      content.insertBefore(main, footer);
    }
    if (Page === 'Contact') {
      main.remove();
      main = (0,_load_page__WEBPACK_IMPORTED_MODULE_1__.makeMain)(_contacts__WEBPACK_IMPORTED_MODULE_5__["default"]);
      content.insertBefore(main, footer);
    }
  }
}

(0,_load_page__WEBPACK_IMPORTED_MODULE_1__.loadPage)();

const navBtns = Array.from((0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.domSelectorAll)('nav ul li'));
navBtns.forEach((navBtn) => {
  navBtn.addEventListener('click', (e) => {
    page = e.target.textContent;
    switchPage(page);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDNEI7QUFDZ0I7QUFDN0I7QUFDQTtBQUNPOztBQUUzQztBQUNBOztBQUVBO0FBQ0EsYUFBYSw4REFBVztBQUN4QixrQkFBa0IsOERBQVc7QUFDN0IsaUJBQWlCLDhEQUFXO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0RBQVEsQ0FBQyw2Q0FBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0RBQVEsQ0FBQyw2Q0FBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0RBQVEsQ0FBQyxpREFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQVE7O0FBRVIsMkJBQTJCLGlFQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RvbS1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZm8uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWQtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1zYW5kLWNvbG9yOiAjYmQ5YjE2O1xcbiAgLS1tb29uLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1uaWdodC1jb2xvcjogcmdiKDQ0IDQ2IDU3KTtcXG4gIC0tZ3JlZW4tY29sb3I6ICMxMjc1MzM7XFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDMycHggNDhweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGNvbG9yOiB2YXIoLS1zYW5kLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnIgbWluLWNvbnRlbnQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm5hdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2IHVsIGxpIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxubmF2IHVsIGxpOmlzKDpmb2N1cywgOmhvdmVyKSB7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1zYW5kLWNvbG9yKTtcXG59XFxuXFxuZm9vdGVyIGE6aXMoOmZvY3VzLCA6aG92ZXIpIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpO1xcbn1cXG5cXG4vKiBzdHlsZSBob21lIHBhZ2UgKi9cXG5cXG5tYWluIHtcXG4gIG1hcmdpbjogMTZweCAwO1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBhZGRpbmc6IDMycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubWFpbiBoMSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWluIGgxOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XFxufVxcblxcbi52aWV3LFxcbi53b3JrLWhvdXJzLFxcbi5sb2NhdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb29uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDEycHggMjhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBjb2xvcjogdmFyKC0tc2FuZC1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcbi52aWV3IHAge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnZpZXcgaDIge1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi53b3JrLWhvdXJzIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi53b3JrLWhvdXJzIGgyIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi53b3JrLWhvdXJzIGRpdiBwIHNwYW4ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbiBoMiB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4vKiBzdHlsZSBNZW51IHBhZ2UgKi9cXG5cXG4jbWVudS10aXRsZSxcXG4jY2F0ZWdvcnksXFxuLmZvb2QtY2FyZCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4jbWVudS10aXRsZSB7XFxuICBmb250LXNpemU6IDQycHg7XFxufVxcblxcbiNjYXRlZ29yeSB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLW1vb24tY29sb3IpO1xcbiAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuXFxuLmZvb2QtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb29uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4uZm9vZC1jYXJkIGg0IHtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5mb29kLWNhcmQgLmZvb2QtZGVzYyB7XFxuICBtYXgtd2lkdGg6IDcwJTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5mb29kLWNhcmQgLnByaWNlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDI2cHg7XFxufVxcblxcbi5mb29kLWNhcmQgaW1nIHtcXG4gIG1heC13aWR0aDogNTAlO1xcbn1cXG5cXG4vKiBzdHlsZSBDb250YWN0IHBhZ2UgKi9cXG5cXG4jY29udGFjdC10aXRsZSxcXG4uY29udGFjdC1jYXJkIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhY3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxufVxcblxcbi5jb250YWN0LWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZCBoMyB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY29udGFjdC1jYXJkIC5jb250YWN0LWluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9vbi1jb2xvcik7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZCBpbWcge1xcbiAgbWF4LXdpZHRoOiAyMCU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlEQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLCtDQUErQztFQUMvQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IseUJBQXlCO0FBQzNCOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7O0VBR0UsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUEsb0JBQW9COztBQUVwQjs7O0VBR0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsdUJBQXVCOztBQUV2Qjs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXNhbmQtY29sb3I6ICNiZDliMTY7XFxuICAtLW1vb24tY29sb3I6ICNmZmZmZmY7XFxuICAtLW5pZ2h0LWNvbG9yOiByZ2IoNDQgNDYgNTcpO1xcbiAgLS1ncmVlbi1jb2xvcjogIzEyNzUzMztcXG59XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMzJweCA0OHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9iZy5qcGcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgY29sb3I6IHZhcigtLXNhbmQtY29sb3IpO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA2NHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5uYXYgdWwgbGkge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG5uYXYgdWwgbGk6aXMoOmZvY3VzLCA6aG92ZXIpIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXNhbmQtY29sb3IpO1xcbn1cXG5cXG5mb290ZXIgYTppcyg6Zm9jdXMsIDpob3Zlcikge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XFxufVxcblxcbi8qIHN0eWxlIGhvbWUgcGFnZSAqL1xcblxcbm1haW4ge1xcbiAgbWFyZ2luOiAxNnB4IDA7XFxuICB3aWR0aDogODAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcGFkZGluZzogMzJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5tYWluIGgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm1haW4gaDE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcXG59XFxuXFxuLnZpZXcsXFxuLndvcmstaG91cnMsXFxuLmxvY2F0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vb24tY29sb3IpO1xcbiAgcGFkZGluZzogMTJweCAyOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGNvbG9yOiB2YXIoLS1zYW5kLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuLnZpZXcgcCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udmlldyBoMiB7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLndvcmstaG91cnMge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLndvcmstaG91cnMgaDIge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLndvcmstaG91cnMgZGl2IHAgc3BhbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uIGgyIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi8qIHN0eWxlIE1lbnUgcGFnZSAqL1xcblxcbiNtZW51LXRpdGxlLFxcbiNjYXRlZ29yeSxcXG4uZm9vZC1jYXJkIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbiNtZW51LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDJweDtcXG59XFxuXFxuI2NhdGVnb3J5IHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tbW9vbi1jb2xvcik7XFxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4uZm9vZC1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vb24tY29sb3IpO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5mb29kLWNhcmQgaDQge1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmZvb2QtY2FyZCAuZm9vZC1kZXNjIHtcXG4gIG1heC13aWR0aDogNzAlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZvb2QtY2FyZCAucHJpY2Uge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXFxuLmZvb2QtY2FyZCBpbWcge1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxufVxcblxcbi8qIHN0eWxlIENvbnRhY3QgcGFnZSAqL1xcblxcbiNjb250YWN0LXRpdGxlLFxcbi5jb250YWN0LWNhcmQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jY29udGFjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4uY29udGFjdC1jYXJkIGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jb250YWN0LWNhcmQgLmNvbnRhY3QtaW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb29uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4uY29udGFjdC1jYXJkIGltZyB7XFxuICBtYXgtd2lkdGg6IDIwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZG9tQ3JlYXRvciB9IGZyb20gJy4vZG9tLW1hbmlwdWxhdGlvbic7XG5pbXBvcnQgeyBjb250YWN0cyB9IGZyb20gJy4vaW5mbyc7XG5cbmZ1bmN0aW9uIG1ha2VDb250YWN0VGl0bGUoKSB7XG4gIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvbUNyZWF0b3IoJ2gyJyk7XG4gIGNvbnRhY3RUaXRsZS5pZCA9ICdjb250YWN0LXRpdGxlJztcbiAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuICByZXR1cm4gY29udGFjdFRpdGxlO1xufVxuXG5mdW5jdGlvbiBtYWtlQ29udGFjdENhcmQobmFtZSwgam9iLCBwaG9uZSwgZW1haWwsIGltZ1NyYykge1xuICBjb25zdCBjb250YWN0Q2FyZCA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuICBjb250YWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNhcmQnKTtcblxuICBjb25zdCBjb250YWN0SW5mbyA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8nKTtcblxuICBjb25zdCBjb250YWN0TmFtZSA9IGRvbUNyZWF0b3IoJ2gzJyk7XG4gIGNvbnRhY3ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBjb250YWN0Sm9iID0gZG9tQ3JlYXRvcigncCcpO1xuICBjb250YWN0Sm9iLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3Qtam9iJyk7XG4gIGNvbnRhY3RKb2IudGV4dENvbnRlbnQgPSBqb2I7XG5cbiAgY29uc3QgY29udGFjdFBob25lTnVtYmVyID0gZG9tQ3JlYXRvcigncCcpO1xuICBjb250YWN0UGhvbmVOdW1iZXIuY2xhc3NMaXN0LmFkZCgncGhvbmUtbnVtYmVyJyk7XG4gIGNvbnRhY3RQaG9uZU51bWJlci50ZXh0Q29udGVudCA9IHBob25lO1xuXG4gIGNvbnN0IGNvbnRhY3RFbWFpbCA9IGRvbUNyZWF0b3IoJ3AnKTtcbiAgY29udGFjdEVtYWlsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZW1haWwnKTtcbiAgY29udGFjdEVtYWlsLnRleHRDb250ZW50ID0gZW1haWw7XG5cbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdE5hbWUpO1xuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0Sm9iKTtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdFBob25lTnVtYmVyKTtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdEVtYWlsKTtcblxuICBjb25zdCBjb250YWN0SW1nID0gZG9tQ3JlYXRvcignaW1nJyk7XG4gIGNvbnRhY3RJbWcuc3JjID0gaW1nU3JjO1xuXG4gIGNvbnRhY3RDYXJkLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcbiAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQoY29udGFjdEltZyk7XG4gIHJldHVybiBjb250YWN0Q2FyZDtcbn1cblxuY29uc3QgbWFtYSA9IG1ha2VDb250YWN0Q2FyZChcbiAgY29udGFjdHMubWFtYUNhbWVsLm5hbWUsXG4gIGNvbnRhY3RzLm1hbWFDYW1lbC5qb2IsXG4gIGNvbnRhY3RzLm1hbWFDYW1lbC5waG9uZSxcbiAgY29udGFjdHMubWFtYUNhbWVsLmVtYWlsLFxuICBjb250YWN0cy5tYW1hQ2FtZWwuaW1nXG4pO1xuXG5jb25zdCBwYXBhID0gbWFrZUNvbnRhY3RDYXJkKFxuICBjb250YWN0cy5wYXBDYW1lbC5uYW1lLFxuICBjb250YWN0cy5wYXBDYW1lbC5qb2IsXG4gIGNvbnRhY3RzLnBhcENhbWVsLnBob25lLFxuICBjb250YWN0cy5wYXBDYW1lbC5lbWFpbCxcbiAgY29udGFjdHMucGFwQ2FtZWwuaW1nXG4pO1xuXG5jb25zdCBiYWJ5ID0gbWFrZUNvbnRhY3RDYXJkKFxuICBjb250YWN0cy5iYWJ5Q2FtZWwubmFtZSxcbiAgY29udGFjdHMuYmFieUNhbWVsLmpvYixcbiAgY29udGFjdHMuYmFieUNhbWVsLnBob25lLFxuICBjb250YWN0cy5iYWJ5Q2FtZWwuZW1haWwsXG4gIGNvbnRhY3RzLmJhYnlDYW1lbC5pbWdcbik7XG5cbmNvbnN0IGNvbnRhY3RDb21wb25lbnRzID0gW21ha2VDb250YWN0VGl0bGUoKSwgbWFtYSwgcGFwYSwgYmFieV07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RDb21wb25lbnRzO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGRvbUNyZWF0b3IoZWxlKSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21TZWxlY3RvcihlbGUpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbVNlbGVjdG9yQWxsKGVsZSkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGUpO1xufVxuIiwiaW1wb3J0IHsgZG9tQ3JlYXRvciB9IGZyb20gJy4vZG9tLW1hbmlwdWxhdGlvbic7XG5pbXBvcnQgeyBjb250ZW50T2JqIH0gZnJvbSAnLi9pbmZvJztcblxuZnVuY3Rpb24gbWFrZVRpdGxlKCkge1xuICBjb25zdCB0aXRsZSA9IGRvbUNyZWF0b3IoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gY29udGVudE9iai50aXRsZTtcbiAgcmV0dXJuIHRpdGxlO1xufVxuXG5mdW5jdGlvbiBtYWtlUmV2aWV3KHRleHQsIHZpZXdlck5hbWUpIHtcbiAgY29uc3QgdmlldyA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuICB2aWV3LmNsYXNzTGlzdC5hZGQoJ3ZpZXcnKTtcblxuICBjb25zdCB2aWV3UGFyYSA9IGRvbUNyZWF0b3IoJ3AnKTtcbiAgdmlld1BhcmEudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIGNvbnN0IHZpZXdlciA9IGRvbUNyZWF0b3IoJ2gyJyk7XG4gIHZpZXdlci50ZXh0Q29udGVudCA9IHZpZXdlck5hbWU7XG5cbiAgdmlldy5hcHBlbmRDaGlsZCh2aWV3UGFyYSk7XG4gIHZpZXcuYXBwZW5kQ2hpbGQodmlld2VyKTtcbiAgcmV0dXJuIHZpZXc7XG59XG5cbmZ1bmN0aW9uIG1ha2VIb3Vyc0RpdigpIHtcbiAgY29uc3Qgd29ya0hvdXJzID0gZG9tQ3JlYXRvcignZGl2Jyk7XG4gIHdvcmtIb3Vycy5jbGFzc0xpc3QuYWRkKCd3b3JrLWhvdXJzJyk7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb21DcmVhdG9yKCdoMicpO1xuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9ICdXb3JrIEhvdXJzJztcblxuICBjb25zdCBzY2hlZHVsZSA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuICBzY2hlZHVsZS5pbm5lckhUTUwgPSBgXG4gIDxwPjxzcGFuPk1vbmRheTo8L3NwYW4+ICR7Y29udGVudE9iai5ob3Vycy5tb25kYXl9PC9wPlxuICA8cD48c3Bhbj5TdW5kYXk6PC9zcGFuPiAke2NvbnRlbnRPYmouaG91cnMuc3VuZGF5fTwvcD5cbiAgPHA+PHNwYW4+VHVlc2RheTo8L3NwYW4+ICR7Y29udGVudE9iai5ob3Vycy50dWVzZGF5fTwvcD5cbiAgPHA+PHNwYW4+V2VkbmVzZGF5Ojwvc3Bhbj4gJHtjb250ZW50T2JqLmhvdXJzLndlZG5lc2RheX08L3A+XG4gIDxwPjxzcGFuPlRodXJzZGF5Ojwvc3Bhbj4gJHtjb250ZW50T2JqLmhvdXJzLnRodXJzZGF5fTwvcD5cbiAgPHA+PHNwYW4+RnJpZGF5Ojwvc3Bhbj4gJHtjb250ZW50T2JqLmhvdXJzLmZyaWRheX08L3A+XG4gIDxwPjxzcGFuPlNhdHVyZGF5Ojwvc3Bhbj4gJHtjb250ZW50T2JqLmhvdXJzLnNhdHVyZGF5fTwvcD5cbiAgYDtcblxuICB3b3JrSG91cnMuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuICB3b3JrSG91cnMuYXBwZW5kQ2hpbGQoc2NoZWR1bGUpO1xuXG4gIHJldHVybiB3b3JrSG91cnM7XG59XG5cbmZ1bmN0aW9uIG1ha2VMb2NhdGlvbkRpdigpIHtcbiAgY29uc3QgbG9jYXRpb25EaXYgPSBkb21DcmVhdG9yKCdkaXYnKTtcbiAgbG9jYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcblxuICBjb25zdCBzdWJ0aXRsZSA9IGRvbUNyZWF0b3IoJ2gyJyk7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gY29udGVudE9iai5sb2NhdGlvbi5zdWJ0aXRsZTtcblxuICBjb25zdCBhZGRyZXNzID0gZG9tQ3JlYXRvcigncCcpO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gY29udGVudE9iai5sb2NhdGlvbi5hZGRyZXNzO1xuXG4gIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcbiAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgcmV0dXJuIGxvY2F0aW9uRGl2O1xufVxuXG5jb25zdCByZXZpZXdlck9uZSA9IG1ha2VSZXZpZXcoXG4gIGNvbnRlbnRPYmoucmV2aWV3ZXJPbmUudGV4dCxcbiAgY29udGVudE9iai5yZXZpZXdlck9uZS5yZXZpZXdlclxuKTtcblxuY29uc3QgcmV2aWV3ZXJUd28gPSBtYWtlUmV2aWV3KFxuICBjb250ZW50T2JqLnJldmlld2VyVHdvLnRleHQsXG4gIGNvbnRlbnRPYmoucmV2aWV3ZXJUd28ucmV2aWV3ZXJcbik7XG5cbmNvbnN0IGhvbWVDb21wb25lbnRzID0gW1xuICBtYWtlVGl0bGUoKSxcbiAgcmV2aWV3ZXJPbmUsXG4gIHJldmlld2VyVHdvLFxuICBtYWtlSG91cnNEaXYoKSxcbiAgbWFrZUxvY2F0aW9uRGl2KCksXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBob21lQ29tcG9uZW50cztcbiIsImltcG9ydCBjb3VzY291c0ltZyBmcm9tICcuL2ltYWdlcy9jb3VzY291cy5qcGcnO1xuaW1wb3J0IHp2aXRpSW1nIGZyb20gJy4vaW1hZ2VzL3p2aXRpMi5qcGVnJztcbmltcG9ydCBjaGFraGNob2toYUltZyBmcm9tICcuL2ltYWdlcy9jaGFraGNob2thLmpwZWcnO1xuaW1wb3J0IHRlYUltZyBmcm9tICcuL2ltYWdlcy9zYWhhcmEtdGVhLmpwZyc7XG5pbXBvcnQgYmFrbGF2YUltZyBmcm9tICcuL2ltYWdlcy9iYWtsYXZhLmpwZyc7XG5pbXBvcnQgbWFtYUltZyBmcm9tICcuL2ltYWdlcy9tYW1hLWNhbWVsLmpwZyc7XG5pbXBvcnQgcGFwYUltZyBmcm9tICcuL2ltYWdlcy9wYXBhLWNhbWVsLmpwZyc7XG5pbXBvcnQgYmFieUltZyBmcm9tICcuL2ltYWdlcy9iYWJ5LWNhbWVsLmpwZyc7XG5cbi8vIEhvbWUgcGFnZVxuY29uc3QgY29udGVudE9iaiA9IHtcbiAgdGl0bGU6ICdLaGFpbWEgUmVzdGF1cmFudCcsXG4gIHJldmlld2VyT25lOiB7XG4gICAgdGV4dDogJ1wiS2hhaW1hIFJlc3RhdXJhbnQgaXMgdGhlIHBhbGNlIGluIG1pZGRsZSBzYWhhcmEgd2l0aCBBbGdlcmlhbiB0cmFkaXRpb25hbCBmb29kLiBGb29kIGlzIGEgcGVyZmVjdCBibGVuZCBvZiBmbGF2b3JzIGFuZCBzcGljZXMgdGhhdCB3aWxsIGxlYXZlIHlvdXIgdGFzdGUgYnVkcyB0aW5nbGluZy4gVGhlIGRpc2hlcyBhcmUgaGVhcnR5LCBjb21mb3J0aW5nIGFuZCBwZXJmZWN0IGZvciBzaGFyaW5nIHdpdGggZnJpZW5kcyBhbmQgZmFtaWx5LiBJZiB5b3UgZXZlciBoYXZlIGEgY2hhbmNlIHRvIHRyeSB0aGlzIGN1aXNpbmUsIEkgaGlnaGx5IHJlY29tbWVuZCBpdC5cIiAnLFxuICAgIHJldmlld2VyOiAnSm9obiBLZW5uZWR5JyxcbiAgfSxcbiAgcmV2aWV3ZXJUd286IHtcbiAgICB0ZXh0OiAnXCJLaGFpbWEgaW4gdGhlIEFsZ2VyaWFuIFNhaGFyYSBpcyBhIHVuaXF1ZSBhbmQgdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZS4gVGhlIHRyYWRpdGlvbmFsIEJlcmJlciBjdWlzaW5lIGlzIGRlbGljaW91cyBhbmQgYXV0aGVudGljLCBhbmQgdGhlIGRlc2VydCBzZXR0aW5nIGlzIGJyZWF0aHRha2luZy4gSGlnaGx5IHJlY29tbWVuZCBhIHZpc2l0IHRvIEtoYWltYSBmb3IgYSB0cnVseSBvbmUtb2YtYS1raW5kIG1lYWwuXCInLFxuICAgIHJldmlld2VyOiAnTW9oYW1tZWQgRWwgS2VuZHknLFxuICB9LFxuICBob3Vyczoge1xuICAgIHN1YnRpdGxlOiAnV29yayBIb3VycycsXG4gICAgc3VuZGF5OiAnOGFtLThwbScsXG4gICAgbW9uZGF5OiAnOGFtLThhbScsXG4gICAgdHVlc2RheTogJzhhbSAtIDdwbScsXG4gICAgd2VkbmVzZGF5OiAnN2FtIC0gNnBtJyxcbiAgICB0aHVyc2RheTogJzhhbSAtIDEwcG0nLFxuICAgIGZyaWRheTogJzhhbSAtIDEwcG0nLFxuICAgIHNhdHVyZGF5OiAnOGFtIC0gMTBwbScsXG4gIH0sXG4gIGxvY2F0aW9uOiB7XG4gICAgc3VidGl0bGU6ICdMb2NhdGlvbicsXG4gICAgYWRkcmVzczogJ1Rhc3NpbGksIEFsZ2VyaWEnLFxuICB9LFxufTtcblxuLy8gTWVudSBwYWdlXG5cbmNvbnN0IG1haW5EaXNoZXMgPSB7XG4gIGNhdGVnb3J5OiAnTWFpbiBEaXNoZXMnLFxuICBjb3VzY291czoge1xuICAgIG5hbWU6ICdDb3VzY291cycsXG4gICAgZGVzYzogJ0NvdXNjb3VzIGlzIGEgdHJhZGl0aW9uYWwgTm9ydGggQWZyaWNhbiBkaXNoIG1hZGUgZnJvbSBzbWFsbCBzdGVhbWVkIGJhbGxzIG9mIHNlbW9saW5hIHdoZWF0LiBJdCBpcyBvZnRlbiBzZXJ2ZWQgYXMgYSBzaWRlIGRpc2ggd2l0aCBtZWF0IG9yIHZlZ2V0YWJsZXMgYW5kIGNhbiBiZSBtYWRlIHN3ZWV0IG9yIHNhdm9yeS4gSXQgaXMgYSBzdGFwbGUgaW4gQWxnZXJpYW4gY3Vpc2luZSBhbmQgaXMgZW5qb3llZCBieSBsb2NhbHMgYW5kIHZpc2l0b3JzIGFsaWtlLicsXG4gICAgcHJpY2U6ICczJCcsXG4gICAgaW1nU3JjOiBjb3VzY291c0ltZywgLy8gSW1hZ2UgYnkgY2hlZm1vdWhjaW5lIG9uIHBpeGFiYXksIGh0dHBzOi8vcGl4YWJheS5jb20vcGhvdG9zL2NvdXNjb3VzLXZlZ2V0YWJsZS1tZWF0LXJlY2lwZS0zNDQwMDQyL1xuICB9LFxuICB6dml0aToge1xuICAgIG5hbWU6ICdadml0aScsXG4gICAgZGVzYzogJ1p2aXRpIGlzIGEgdHJhZGl0aW9uYWwgQWxnZXJpYW4gZGlzaCBjb25zaXN0aW5nIG9mIHN0ZXdlZCBsYW1iIG9yIGJlZWYsIG1peGVkIHdpdGggY2hpY2twZWFzIGFuZCBhIHZhcmlldHkgb2Ygc3BpY2VzLiBJdCBpcyBvZnRlbiBzZXJ2ZWQgd2l0aCBjb3VzY291cyBhbmQgaXMgYSBoZWFydHksIGNvbWZvcnRpbmcgbWVhbC4gSXQgaXMgYSBzdGFwbGUgb2YgQWxnZXJpYW4gY3Vpc2luZSBhbmQgaXMgZW5qb3llZCBieSBsb2NhbHMgYW5kIHZpc2l0b3JzIGFsaWtlLicsXG4gICAgcHJpY2U6ICc0JCcsXG4gICAgaW1nU3JjOiB6dml0aUltZywgLy8gSW1hZ2UgYnkgRGphemFpciBDb29raW5nIG9uIHR3ZWV0ZXIgcG9zdCwgaHR0cHM6Ly90d2l0dGVyLmNvbS9EamF6YWlyQ29va2luZy9zdGF0dXMvMTUxOTc2NzQyNzY4NDQzODAxNy9waG90by8xXG4gIH0sXG4gIGNoYWtoY2hva2hhOiB7XG4gICAgbmFtZTogJ0NoYWtoY2hva2hhJyxcbiAgICBkZXNjOiAnQ2hha2hjaG9raGEgaXMgYSB0cmFkaXRpb25hbCBBbGdlcmlhbiBkaXNoIG1hZGUgb2YgY29va2VkIGFuZCBtYXNoZWQgdG9tYXRvZXMgYW5kIGJlbGwgcGVwcGVycywgdHlwaWNhbGx5IHNlcnZlZCB3aXRoIGJyZWFkLiBJdCBpcyBhIGhlYXJ0eSBhbmQgZmxhdm9yZnVsIGRpc2gsIGFuZCBpcyBvZnRlbiBzZXJ2ZWQgYXMgYSBzaWRlIGRpc2ggb3IgYXMgYSB0b3BwaW5nIGZvciBtZWF0IGRpc2hlcy4gSXQgaXMgYSBzdGFwbGUgaW4gQWxnZXJpYW4gY3Vpc2luZSBhbmQgaXMgZW5qb3llZCBieSBsb2NhbHMgYW5kIHZpc2l0b3JzIGFsaWtlLicsXG4gICAgcHJpY2U6ICczJCcsXG4gICAgaW1nU3JjOiBjaGFraGNob2toYUltZywgLy8gSW1hZ2UgZnJvbSBodHRwczovL3d3dy5teWV4Y2VsbGVudGRlZ3VzdGF0aW9ucy5jb20vYWxnZXJpYW4tdGhpbi1mbGF0YnJlYWQtd2l0aC1tZWF0LXNhdWNlLWNoYWtoY2hvdWtoYS9cbiAgfSxcbn07XG5cbmNvbnN0IGVudHJlZXMgPSB7XG4gIGNhdGVnb3J5OiAnRW50cmVlcyBhbmQgRGVzc2VydCBEaXNoZXMnLFxuICB0ZWE6IHtcbiAgICBuYW1lOiAnU2FoYXJhIFRlYScsXG4gICAgZGVzYzogJ0FsZ2VyaWFuIFNhaGFyYSB0ZWEgaXMgYSB0eXBlIG9mIGJsYWNrIHRlYSB0aGF0IGlzIGdyb3duIGFuZCBwcm9kdWNlZCBpbiB0aGUgU2FoYXJhIGRlc2VydCByZWdpb24gb2YgQWxnZXJpYS4gSXQgaXMga25vd24gZm9yIGl0cyBzdHJvbmcsIGJvbGQgZmxhdm9yIGFuZCBpcyBvZnRlbiBzZXJ2ZWQgd2l0aCBtaW50IG9yIG90aGVyIGhlcmJzIHRvIGVuaGFuY2UgdGhlIHRhc3RlLiBJdCBpcyBjb25zaWRlcmVkIGEgdHJhZGl0aW9uYWwgZHJpbmsgaW4gQWxnZXJpYSBhbmQgaXMgZW5qb3llZCBieSBtYW55IGxvY2FscyBhbmQgdG91cmlzdHMgYWxpa2UuJyxcbiAgICBwcmljZTogJzAuNSQnLFxuICAgIGltZ1NyYzogdGVhSW1nLCAvLyBJbWFnZSBieSBwaXJrZXJjaHJpIG9uIHBpeGFiYXksIGh0dHBzOi8vcGl4YWJheS5jb20vaW1hZ2VzL2lkLTI0MzE0NTkvXG4gIH0sXG4gIGJha2xhdmE6IHtcbiAgICBuYW1lOiAnQmFrbGF2YScsXG4gICAgZGVzYzogJ0FsZ2VyaWFuIGJha2xhdmEgaXMgYSBzd2VldCBwYXN0cnkgbWFkZSBmcm9tIGxheWVycyBvZiBwaHlsbG8gZG91Z2ggZmlsbGVkIHdpdGggY2hvcHBlZCBudXRzLCB0eXBpY2FsbHkgYWxtb25kcyBvciBwaXN0YWNoaW9zLiBJdCBpcyBzd2VldGVuZWQgd2l0aCBob25leSBvciBzeXJ1cCBhbmQgaXMgb2Z0ZW4gZmxhdm9yZWQgd2l0aCBjaW5uYW1vbiBvciBvcmFuZ2UgYmxvc3NvbSB3YXRlci4gSXQgaXMgYSBwb3B1bGFyIGRlc3NlcnQgaW4gQWxnZXJpYSBhbmQgY2FuIGJlIGZvdW5kIGluIG1hbnkgYmFrZXJpZXMgYW5kIHJlc3RhdXJhbnRzIHRocm91Z2hvdXQgdGhlIGNvdW50cnkuJyxcbiAgICBwcmljZTogJzIkJyxcbiAgICBpbWdTcmM6IGJha2xhdmFJbWcsIC8vIEltYWdlIGJ5IGZhYnJpa2FzaW1mIG9uIEZyZWVwaWssIGh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2F1dGhvci9mYWJyaWthc2ltZlxuICB9LFxufTtcblxuLy8gQ29udGFjdCBwYWdlXG5cbi8vIGNhbWVsIHZlY3RvcnMgZnJvbSBGcmVlcGlrIGJ5IEJyZ2Z4LCBodHRwczovL3d3dy5mcmVlcGlrLmNvbS9hdXRob3IvYnJnZnhcbmNvbnN0IGNvbnRhY3RzID0ge1xuICBtYW1hQ2FtZWw6IHtcbiAgICBuYW1lOiAnTWFtYSBDYW1lbCcsXG4gICAgam9iOiAnQ2hlZicsXG4gICAgcGhvbmU6ICc1NDgtNTQ1LTUyNCcsXG4gICAgZW1haWw6ICdtYW1hQ2FtZWxBZ0BmYWtlLmNvbScsXG4gICAgaW1nOiBtYW1hSW1nLFxuICB9LFxuICBwYXBDYW1lbDoge1xuICAgIG5hbWU6ICdQYXBhIENhbWVsJyxcbiAgICBqb2I6ICdNYW5hZ2VyJyxcbiAgICBwaG9uZTogJzQ0Mi01NDQtMTExJyxcbiAgICBlbWFpbDogJ3BhcGFDYW1lbEFnQGZha2UuY29tJyxcbiAgICBpbWc6IHBhcGFJbWcsXG4gIH0sXG4gIGJhYnlDYW1lbDoge1xuICAgIG5hbWU6ICdCYWJ5IENhbWVsJyxcbiAgICBqb2I6ICdXYWl0ZXInLFxuICAgIHBob25lOiAnNTQyLTQ0NC0yMDAnLFxuICAgIGVtYWlsOiAnYmFieUNhbWVsQWdAZmFrZS5jb20nLFxuICAgIGltZzogYmFieUltZyxcbiAgfSxcbn07XG5cbmV4cG9ydCB7IGNvbnRlbnRPYmosIG1haW5EaXNoZXMsIGVudHJlZXMsIGNvbnRhY3RzIH07XG4iLCJpbXBvcnQgeyBkb21TZWxlY3RvciwgZG9tQ3JlYXRvciB9IGZyb20gJy4vZG9tLW1hbmlwdWxhdGlvbic7XG5pbXBvcnQgaG9tZUNvbXBvbmVudHMgZnJvbSAnLi9ob21lJztcblxuZnVuY3Rpb24gbWFrZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9tQ3JlYXRvcignaGVhZGVyJyk7XG4gIGNvbnN0IG5hdiA9IGRvbUNyZWF0b3IoJ25hdicpO1xuICBjb25zdCB1bCA9IGRvbUNyZWF0b3IoJ3VsJyk7XG5cbiAgY29uc3QgaG9tZUl0ZW0gPSBkb21DcmVhdG9yKCdsaScpO1xuICBob21lSXRlbS50ZXh0Q29udGVudCA9ICdIb21lJztcblxuICBjb25zdCBtZW51SXRlbSA9IGRvbUNyZWF0b3IoJ2xpJyk7XG4gIG1lbnVJdGVtLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gIGNvbnN0IGNvbnRhY3RJdGVtID0gZG9tQ3JlYXRvcignbGknKTtcbiAgY29udGFjdEl0ZW0udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gIHVsLmFwcGVuZENoaWxkKGhvbWVJdGVtKTtcbiAgdWwuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICB1bC5hcHBlbmRDaGlsZChjb250YWN0SXRlbSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNYWluKGFycikge1xuICBjb25zdCBtYWluID0gZG9tQ3JlYXRvcignbWFpbicpO1xuICBhcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH0pO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBtYWtlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb21DcmVhdG9yKCdmb290ZXInKTtcbiAgY29uc3QgbGluayA9IGRvbUNyZWF0b3IoJ2EnKTtcbiAgbGluay50ZXh0Q29udGVudCA9ICdLcmltb3RoaWF6aW5lJztcbiAgbGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9rYXJpbS1zYW91JztcbiAgbGluay5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gIGZvb3Rlci50ZXh0Q29udGVudCA9ICdDcmVhdGVkIGJ5ICc7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChsaW5rKTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb21TZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWtlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VNYWluKGhvbWVDb21wb25lbnRzKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUZvb3RlcigpKTtcbn1cbiIsImltcG9ydCB7IGRvbUNyZWF0b3IgfSBmcm9tICcuL2RvbS1tYW5pcHVsYXRpb24nO1xuaW1wb3J0IHsgbWFpbkRpc2hlcywgZW50cmVlcyB9IGZyb20gJy4vaW5mbyc7XG5cbmZ1bmN0aW9uIG1lbnVUaXRsZSgpIHtcbiAgY29uc3QgbWVudSA9IGRvbUNyZWF0b3IoJ2gyJyk7XG4gIG1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIG1lbnUuaWQgPSAnbWVudS10aXRsZSc7XG4gIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiBtYWtlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgY29uc3QgbWVudUNhdGVnb3J5ID0gZG9tQ3JlYXRvcignaDMnKTtcbiAgbWVudUNhdGVnb3J5LnRleHRDb250ZW50ID0gY2F0ZWdvcnk7XG4gIG1lbnVDYXRlZ29yeS5pZCA9ICdjYXRlZ29yeSc7XG4gIHJldHVybiBtZW51Q2F0ZWdvcnk7XG59XG5cbmZ1bmN0aW9uIGZvb2RUeXBlKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZUZvb2QsIGltZ1NyYykge1xuICBjb25zdCBmb29kQ2FyZCA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuICBmb29kQ2FyZC5jbGFzc0xpc3QuYWRkKCdmb29kLWNhcmQnKTtcblxuICBjb25zdCB0aXRsZSA9IGRvbUNyZWF0b3IoJ2g0Jyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBkZXNjID0gZG9tQ3JlYXRvcigncCcpO1xuICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZGVzYycpO1xuICBkZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgY29uc3QgcHJpY2UgPSBkb21DcmVhdG9yKCdwJyk7XG4gIHByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XG4gIHByaWNlLnRleHRDb250ZW50ID0gcHJpY2VGb29kO1xuXG4gIGNvbnN0IGZvb2RJbWcgPSBkb21DcmVhdG9yKCdpbWcnKTtcbiAgZm9vZEltZy5zcmMgPSBpbWdTcmM7XG4gIGZvb2RJbWcuYWx0ID0gJ2ltZyc7XG5cbiAgZm9vZENhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBmb29kQ2FyZC5hcHBlbmRDaGlsZChkZXNjKTtcbiAgZm9vZENhcmQuYXBwZW5kQ2hpbGQocHJpY2UpO1xuICBmb29kQ2FyZC5hcHBlbmRDaGlsZChmb29kSW1nKTtcblxuICByZXR1cm4gZm9vZENhcmQ7XG59XG5cbmNvbnN0IGNvdXNjb3VzRGlzaCA9IGZvb2RUeXBlKFxuICBtYWluRGlzaGVzLmNvdXNjb3VzLm5hbWUsXG4gIG1haW5EaXNoZXMuY291c2NvdXMuZGVzYyxcbiAgbWFpbkRpc2hlcy5jb3VzY291cy5wcmljZSxcbiAgbWFpbkRpc2hlcy5jb3VzY291cy5pbWdTcmNcbik7XG5cbmNvbnN0IHp2aXRpRGlzaCA9IGZvb2RUeXBlKFxuICBtYWluRGlzaGVzLnp2aXRpLm5hbWUsXG4gIG1haW5EaXNoZXMuenZpdGkuZGVzYyxcbiAgbWFpbkRpc2hlcy56dml0aS5wcmljZSxcbiAgbWFpbkRpc2hlcy56dml0aS5pbWdTcmNcbik7XG5cbmNvbnN0IGNoYWtoY2hva2hhRGlzaCA9IGZvb2RUeXBlKFxuICBtYWluRGlzaGVzLmNoYWtoY2hva2hhLm5hbWUsXG4gIG1haW5EaXNoZXMuY2hha2hjaG9raGEuZGVzYyxcbiAgbWFpbkRpc2hlcy5jaGFraGNob2toYS5wcmljZSxcbiAgbWFpbkRpc2hlcy5jaGFraGNob2toYS5pbWdTcmNcbik7XG5cbmNvbnN0IHNhaGFyYVRlYSA9IGZvb2RUeXBlKFxuICBlbnRyZWVzLnRlYS5uYW1lLFxuICBlbnRyZWVzLnRlYS5kZXNjLFxuICBlbnRyZWVzLnRlYS5wcmljZSxcbiAgZW50cmVlcy50ZWEuaW1nU3JjXG4pO1xuXG5jb25zdCBiYWtsYXZhID0gZm9vZFR5cGUoXG4gIGVudHJlZXMuYmFrbGF2YS5uYW1lLFxuICBlbnRyZWVzLmJha2xhdmEuZGVzYyxcbiAgZW50cmVlcy5iYWtsYXZhLnByaWNlLFxuICBlbnRyZWVzLmJha2xhdmEuaW1nU3JjXG4pO1xuXG5jb25zdCBtYWluRGlzaGVzU3VidGl0bGUgPSBtYWtlQ2F0ZWdvcnkobWFpbkRpc2hlcy5jYXRlZ29yeSk7XG5jb25zdCBlbnRyZWVzU3VidGl0bGUgPSBtYWtlQ2F0ZWdvcnkoZW50cmVlcy5jYXRlZ29yeSk7XG5cbmNvbnN0IG1lbnVDb21wb25lbnRzID0gW1xuICBtZW51VGl0bGUoKSxcbiAgbWFpbkRpc2hlc1N1YnRpdGxlLFxuICBjb3VzY291c0Rpc2gsXG4gIHp2aXRpRGlzaCxcbiAgY2hha2hjaG9raGFEaXNoLFxuICBlbnRyZWVzU3VidGl0bGUsXG4gIHNhaGFyYVRlYSxcbiAgYmFrbGF2YSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVDb21wb25lbnRzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgbG9hZFBhZ2UsIG1ha2VNYWluIH0gZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IHsgZG9tU2VsZWN0b3JBbGwsIGRvbVNlbGVjdG9yIH0gZnJvbSAnLi9kb20tbWFuaXB1bGF0aW9uJztcbmltcG9ydCBob21lQ29tcG9uZW50cyBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IG1lbnVDb21wb25lbnRzIGZyb20gJy4vbWVudSc7XG5pbXBvcnQgY29udGFjdENvbXBvbmVudHMgZnJvbSAnLi9jb250YWN0cyc7XG5cbi8vIHNldCBwYWdlIGFmdGVyIGZpcnN0IGxvYWQgYXQgSG9tZSBwYWdlXG5sZXQgcGFnZSA9ICdIb21lJztcblxuZnVuY3Rpb24gc3dpdGNoUGFnZShQYWdlKSB7XG4gIGxldCBtYWluID0gZG9tU2VsZWN0b3IoJyNjb250ZW50IG1haW4nKTtcbiAgY29uc3QgY29udGVudCA9IGRvbVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb25zdCBmb290ZXIgPSBkb21TZWxlY3RvcignZm9vdGVyJyk7XG4gIGlmIChtYWluICE9PSBudWxsKSB7XG4gICAgaWYgKFBhZ2UgPT09ICdIb21lJykge1xuICAgICAgbWFpbi5yZW1vdmUoKTtcbiAgICAgIG1haW4gPSBtYWtlTWFpbihob21lQ29tcG9uZW50cyk7XG4gICAgICBjb250ZW50Lmluc2VydEJlZm9yZShtYWluLCBmb290ZXIpO1xuICAgIH1cbiAgICBpZiAoUGFnZSA9PT0gJ01lbnUnKSB7XG4gICAgICBtYWluLnJlbW92ZSgpO1xuICAgICAgbWFpbiA9IG1ha2VNYWluKG1lbnVDb21wb25lbnRzKTtcbiAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKG1haW4sIGZvb3Rlcik7XG4gICAgfVxuICAgIGlmIChQYWdlID09PSAnQ29udGFjdCcpIHtcbiAgICAgIG1haW4ucmVtb3ZlKCk7XG4gICAgICBtYWluID0gbWFrZU1haW4oY29udGFjdENvbXBvbmVudHMpO1xuICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobWFpbiwgZm9vdGVyKTtcbiAgICB9XG4gIH1cbn1cblxubG9hZFBhZ2UoKTtcblxuY29uc3QgbmF2QnRucyA9IEFycmF5LmZyb20oZG9tU2VsZWN0b3JBbGwoJ25hdiB1bCBsaScpKTtcbm5hdkJ0bnMuZm9yRWFjaCgobmF2QnRuKSA9PiB7XG4gIG5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcGFnZSA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIHN3aXRjaFBhZ2UocGFnZSk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=