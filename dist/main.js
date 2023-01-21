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
    imgSrc: '../src/images/couscous.jpg', // Image by chefmouhcine on pixabay, https://pixabay.com/photos/couscous-vegetable-meat-recipe-3440042/
  },
  zviti: {
    name: 'Zviti',
    desc: 'Zviti is a traditional Algerian dish consisting of stewed lamb or beef, mixed with chickpeas and a variety of spices. It is often served with couscous and is a hearty, comforting meal. It is a staple of Algerian cuisine and is enjoyed by locals and visitors alike.',
    price: '4$',
    imgSrc: '../src/images/zviti2.jpeg', // Image by Djazair Cooking on tweeter post, https://twitter.com/DjazairCooking/status/1519767427684438017/photo/1
  },
  chakhchokha: {
    name: 'Chakhchokha',
    desc: 'Chakhchokha is a traditional Algerian dish made of cooked and mashed tomatoes and bell peppers, typically served with bread. It is a hearty and flavorful dish, and is often served as a side dish or as a topping for meat dishes. It is a staple in Algerian cuisine and is enjoyed by locals and visitors alike.',
    price: '3$',
    imgSrc: '../src/images/chakhchoka.jpeg', // Image from https://www.myexcellentdegustations.com/algerian-thin-flatbread-with-meat-sauce-chakhchoukha/
  },
};

const entrees = {
  category: 'Entrees and Dessert Dishes',
  tea: {
    name: 'Sahara Tea',
    desc: 'Algerian Sahara tea is a type of black tea that is grown and produced in the Sahara desert region of Algeria. It is known for its strong, bold flavor and is often served with mint or other herbs to enhance the taste. It is considered a traditional drink in Algeria and is enjoyed by many locals and tourists alike.',
    price: '0.5$',
    imgSrc: '../src/images/sahara-tea.jpg', // Image by pirkerchri on pixabay, https://pixabay.com/images/id-2431459/
  },
  baklava: {
    name: 'Baklava',
    desc: 'Algerian baklava is a sweet pastry made from layers of phyllo dough filled with chopped nuts, typically almonds or pistachios. It is sweetened with honey or syrup and is often flavored with cinnamon or orange blossom water. It is a popular dessert in Algeria and can be found in many bakeries and restaurants throughout the country.',
    price: '2$',
    imgSrc: '../src/images/baklava.jpg', // Image by fabrikasimf on Freepik, https://www.freepik.com/author/fabrikasimf
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
    img: '../src/images/mama-camel.jpg',
  },
  papCamel: {
    name: 'Papa Camel',
    job: 'Manager',
    phone: '442-544-111',
    email: 'papaCamelAg@fake.com',
    img: '../src/images/papa-camel.jpg',
  },
  babyCamel: {
    name: 'Baby Camel',
    job: 'Waiter',
    phone: '542-444-200',
    email: 'babyCamelAg@fake.com',
    img: '../src/images/baby-camel.jpg',
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

/***/ "./src/images/bg.jpg":
/*!***************************!*\
  !*** ./src/images/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e345f94e28b46896494.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM0QjtBQUNnQjtBQUM3QjtBQUNBO0FBQ087O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLDhEQUFXO0FBQ3hCLGtCQUFrQiw4REFBVztBQUM3QixpQkFBaUIsOERBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvREFBUSxDQUFDLDZDQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvREFBUSxDQUFDLDZDQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvREFBUSxDQUFDLGlEQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvREFBUTs7QUFFUiwyQkFBMkIsaUVBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZG9tLW1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5mby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXNhbmQtY29sb3I6ICNiZDliMTY7XFxuICAtLW1vb24tY29sb3I6ICNmZmZmZmY7XFxuICAtLW5pZ2h0LWNvbG9yOiByZ2IoNDQgNDYgNTcpO1xcbiAgLS1ncmVlbi1jb2xvcjogIzEyNzUzMztcXG59XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMzJweCA0OHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgY29sb3I6IHZhcigtLXNhbmQtY29sb3IpO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA2NHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5uYXYgdWwgbGkge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG5uYXYgdWwgbGk6aXMoOmZvY3VzLCA6aG92ZXIpIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXNhbmQtY29sb3IpO1xcbn1cXG5cXG5mb290ZXIgYTppcyg6Zm9jdXMsIDpob3Zlcikge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XFxufVxcblxcbi8qIHN0eWxlIGhvbWUgcGFnZSAqL1xcblxcbm1haW4ge1xcbiAgbWFyZ2luOiAxNnB4IDA7XFxuICB3aWR0aDogODAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcGFkZGluZzogMzJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5tYWluIGgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm1haW4gaDE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcXG59XFxuXFxuLnZpZXcsXFxuLndvcmstaG91cnMsXFxuLmxvY2F0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vb24tY29sb3IpO1xcbiAgcGFkZGluZzogMTJweCAyOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGNvbG9yOiB2YXIoLS1zYW5kLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuLnZpZXcgcCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udmlldyBoMiB7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLndvcmstaG91cnMge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLndvcmstaG91cnMgaDIge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLndvcmstaG91cnMgZGl2IHAgc3BhbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uIGgyIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi8qIHN0eWxlIE1lbnUgcGFnZSAqL1xcblxcbiNtZW51LXRpdGxlLFxcbiNjYXRlZ29yeSxcXG4uZm9vZC1jYXJkIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbiNtZW51LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDJweDtcXG59XFxuXFxuI2NhdGVnb3J5IHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tbW9vbi1jb2xvcik7XFxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4uZm9vZC1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vb24tY29sb3IpO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5mb29kLWNhcmQgaDQge1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmZvb2QtY2FyZCAuZm9vZC1kZXNjIHtcXG4gIG1heC13aWR0aDogNzAlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZvb2QtY2FyZCAucHJpY2Uge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXFxuLmZvb2QtY2FyZCBpbWcge1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxufVxcblxcbi8qIHN0eWxlIENvbnRhY3QgcGFnZSAqL1xcblxcbiNjb250YWN0LXRpdGxlLFxcbi5jb250YWN0LWNhcmQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jY29udGFjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4uY29udGFjdC1jYXJkIGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jb250YWN0LWNhcmQgLmNvbnRhY3QtaW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb29uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4uY29udGFjdC1jYXJkIGltZyB7XFxuICBtYXgtd2lkdGg6IDIwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseURBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsK0NBQStDO0VBQy9DLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix5QkFBeUI7QUFDM0I7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOzs7RUFHRSxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQSxvQkFBb0I7O0FBRXBCOzs7RUFHRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSx1QkFBdUI7O0FBRXZCOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tc2FuZC1jb2xvcjogI2JkOWIxNjtcXG4gIC0tbW9vbi1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tbmlnaHQtY29sb3I6IHJnYig0NCA0NiA1Nyk7XFxuICAtLWdyZWVuLWNvbG9yOiAjMTI3NTMzO1xcbn1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAzMnB4IDQ4cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2JnLmpwZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBjb2xvcjogdmFyKC0tc2FuZC1jb2xvcik7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyIG1pbi1jb250ZW50O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDY0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm5hdiB1bCBsaSB7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbm5hdiB1bCBsaTppcyg6Zm9jdXMsIDpob3Zlcikge1xcbiAgY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tc2FuZC1jb2xvcik7XFxufVxcblxcbmZvb3RlciBhOmlzKDpmb2N1cywgOmhvdmVyKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcXG59XFxuXFxuLyogc3R5bGUgaG9tZSBwYWdlICovXFxuXFxubWFpbiB7XFxuICBtYXJnaW46IDE2cHggMDtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5pZ2h0LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwYWRkaW5nOiAzMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbm1haW4gaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbiBoMTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpO1xcbn1cXG5cXG4udmlldyxcXG4ud29yay1ob3VycyxcXG4ubG9jYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9vbi1jb2xvcik7XFxuICBwYWRkaW5nOiAxMnB4IDI4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgY29sb3I6IHZhcigtLXNhbmQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG4udmlldyBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi52aWV3IGgyIHtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ud29yay1ob3VycyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ud29yay1ob3VycyBoMiB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ud29yay1ob3VycyBkaXYgcCBzcGFuIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9jYXRpb24gaDIge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLyogc3R5bGUgTWVudSBwYWdlICovXFxuXFxuI21lbnUtdGl0bGUsXFxuI2NhdGVnb3J5LFxcbi5mb29kLWNhcmQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuI21lbnUtdGl0bGUge1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbn1cXG5cXG4jY2F0ZWdvcnkge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS1tb29uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5mb29kLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9vbi1jb2xvcik7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuXFxuLmZvb2QtY2FyZCBoNCB7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZm9vZC1jYXJkIC5mb29kLWRlc2Mge1xcbiAgbWF4LXdpZHRoOiA3MCU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZm9vZC1jYXJkIC5wcmljZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4uZm9vZC1jYXJkIGltZyB7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuXFxuLyogc3R5bGUgQ29udGFjdCBwYWdlICovXFxuXFxuI2NvbnRhY3QtdGl0bGUsXFxuLmNvbnRhY3QtY2FyZCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNjb250YWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4uY29udGFjdC1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxufVxcblxcbi5jb250YWN0LWNhcmQgaDMge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZCAuY29udGFjdC1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vb24tY29sb3IpO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi5jb250YWN0LWNhcmQgaW1nIHtcXG4gIG1heC13aWR0aDogMjAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBkb21DcmVhdG9yIH0gZnJvbSAnLi9kb20tbWFuaXB1bGF0aW9uJztcbmltcG9ydCB7IGNvbnRhY3RzIH0gZnJvbSAnLi9pbmZvJztcblxuZnVuY3Rpb24gbWFrZUNvbnRhY3RUaXRsZSgpIHtcbiAgY29uc3QgY29udGFjdFRpdGxlID0gZG9tQ3JlYXRvcignaDInKTtcbiAgY29udGFjdFRpdGxlLmlkID0gJ2NvbnRhY3QtdGl0bGUnO1xuICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG4gIHJldHVybiBjb250YWN0VGl0bGU7XG59XG5cbmZ1bmN0aW9uIG1ha2VDb250YWN0Q2FyZChuYW1lLCBqb2IsIHBob25lLCBlbWFpbCwgaW1nU3JjKSB7XG4gIGNvbnN0IGNvbnRhY3RDYXJkID0gZG9tQ3JlYXRvcignZGl2Jyk7XG4gIGNvbnRhY3RDYXJkLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY2FyZCcpO1xuXG4gIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9tQ3JlYXRvcignZGl2Jyk7XG4gIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mbycpO1xuXG4gIGNvbnN0IGNvbnRhY3ROYW1lID0gZG9tQ3JlYXRvcignaDMnKTtcbiAgY29udGFjdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gIGNvbnN0IGNvbnRhY3RKb2IgPSBkb21DcmVhdG9yKCdwJyk7XG4gIGNvbnRhY3RKb2IuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1qb2InKTtcbiAgY29udGFjdEpvYi50ZXh0Q29udGVudCA9IGpvYjtcblxuICBjb25zdCBjb250YWN0UGhvbmVOdW1iZXIgPSBkb21DcmVhdG9yKCdwJyk7XG4gIGNvbnRhY3RQaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKCdwaG9uZS1udW1iZXInKTtcbiAgY29udGFjdFBob25lTnVtYmVyLnRleHRDb250ZW50ID0gcGhvbmU7XG5cbiAgY29uc3QgY29udGFjdEVtYWlsID0gZG9tQ3JlYXRvcigncCcpO1xuICBjb250YWN0RW1haWwuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1lbWFpbCcpO1xuICBjb250YWN0RW1haWwudGV4dENvbnRlbnQgPSBlbWFpbDtcblxuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0TmFtZSk7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RKb2IpO1xuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0UGhvbmVOdW1iZXIpO1xuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0RW1haWwpO1xuXG4gIGNvbnN0IGNvbnRhY3RJbWcgPSBkb21DcmVhdG9yKCdpbWcnKTtcbiAgY29udGFjdEltZy5zcmMgPSBpbWdTcmM7XG5cbiAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xuICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChjb250YWN0SW1nKTtcbiAgcmV0dXJuIGNvbnRhY3RDYXJkO1xufVxuXG5jb25zdCBtYW1hID0gbWFrZUNvbnRhY3RDYXJkKFxuICBjb250YWN0cy5tYW1hQ2FtZWwubmFtZSxcbiAgY29udGFjdHMubWFtYUNhbWVsLmpvYixcbiAgY29udGFjdHMubWFtYUNhbWVsLnBob25lLFxuICBjb250YWN0cy5tYW1hQ2FtZWwuZW1haWwsXG4gIGNvbnRhY3RzLm1hbWFDYW1lbC5pbWdcbik7XG5cbmNvbnN0IHBhcGEgPSBtYWtlQ29udGFjdENhcmQoXG4gIGNvbnRhY3RzLnBhcENhbWVsLm5hbWUsXG4gIGNvbnRhY3RzLnBhcENhbWVsLmpvYixcbiAgY29udGFjdHMucGFwQ2FtZWwucGhvbmUsXG4gIGNvbnRhY3RzLnBhcENhbWVsLmVtYWlsLFxuICBjb250YWN0cy5wYXBDYW1lbC5pbWdcbik7XG5cbmNvbnN0IGJhYnkgPSBtYWtlQ29udGFjdENhcmQoXG4gIGNvbnRhY3RzLmJhYnlDYW1lbC5uYW1lLFxuICBjb250YWN0cy5iYWJ5Q2FtZWwuam9iLFxuICBjb250YWN0cy5iYWJ5Q2FtZWwucGhvbmUsXG4gIGNvbnRhY3RzLmJhYnlDYW1lbC5lbWFpbCxcbiAgY29udGFjdHMuYmFieUNhbWVsLmltZ1xuKTtcblxuY29uc3QgY29udGFjdENvbXBvbmVudHMgPSBbbWFrZUNvbnRhY3RUaXRsZSgpLCBtYW1hLCBwYXBhLCBiYWJ5XTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdENvbXBvbmVudHM7XG4iLCJleHBvcnQgZnVuY3Rpb24gZG9tQ3JlYXRvcihlbGUpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbVNlbGVjdG9yKGVsZSkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tU2VsZWN0b3JBbGwoZWxlKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZSk7XG59XG4iLCJpbXBvcnQgeyBkb21DcmVhdG9yIH0gZnJvbSAnLi9kb20tbWFuaXB1bGF0aW9uJztcbmltcG9ydCB7IGNvbnRlbnRPYmogfSBmcm9tICcuL2luZm8nO1xuXG5mdW5jdGlvbiBtYWtlVGl0bGUoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9tQ3JlYXRvcignaDEnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBjb250ZW50T2JqLnRpdGxlO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIG1ha2VSZXZpZXcodGV4dCwgdmlld2VyTmFtZSkge1xuICBjb25zdCB2aWV3ID0gZG9tQ3JlYXRvcignZGl2Jyk7XG4gIHZpZXcuY2xhc3NMaXN0LmFkZCgndmlldycpO1xuXG4gIGNvbnN0IHZpZXdQYXJhID0gZG9tQ3JlYXRvcigncCcpO1xuICB2aWV3UGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgY29uc3Qgdmlld2VyID0gZG9tQ3JlYXRvcignaDInKTtcbiAgdmlld2VyLnRleHRDb250ZW50ID0gdmlld2VyTmFtZTtcblxuICB2aWV3LmFwcGVuZENoaWxkKHZpZXdQYXJhKTtcbiAgdmlldy5hcHBlbmRDaGlsZCh2aWV3ZXIpO1xuICByZXR1cm4gdmlldztcbn1cblxuZnVuY3Rpb24gbWFrZUhvdXJzRGl2KCkge1xuICBjb25zdCB3b3JrSG91cnMgPSBkb21DcmVhdG9yKCdkaXYnKTtcbiAgd29ya0hvdXJzLmNsYXNzTGlzdC5hZGQoJ3dvcmstaG91cnMnKTtcblxuICBjb25zdCBzdWJ0aXRsZSA9IGRvbUNyZWF0b3IoJ2gyJyk7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gJ1dvcmsgSG91cnMnO1xuXG4gIGNvbnN0IHNjaGVkdWxlID0gZG9tQ3JlYXRvcignZGl2Jyk7XG4gIHNjaGVkdWxlLmlubmVySFRNTCA9IGBcbiAgPHA+PHNwYW4+TW9uZGF5Ojwvc3Bhbj4gJHtjb250ZW50T2JqLmhvdXJzLm1vbmRheX08L3A+XG4gIDxwPjxzcGFuPlN1bmRheTo8L3NwYW4+ICR7Y29udGVudE9iai5ob3Vycy5zdW5kYXl9PC9wPlxuICA8cD48c3Bhbj5UdWVzZGF5Ojwvc3Bhbj4gJHtjb250ZW50T2JqLmhvdXJzLnR1ZXNkYXl9PC9wPlxuICA8cD48c3Bhbj5XZWRuZXNkYXk6PC9zcGFuPiAke2NvbnRlbnRPYmouaG91cnMud2VkbmVzZGF5fTwvcD5cbiAgPHA+PHNwYW4+VGh1cnNkYXk6PC9zcGFuPiAke2NvbnRlbnRPYmouaG91cnMudGh1cnNkYXl9PC9wPlxuICA8cD48c3Bhbj5GcmlkYXk6PC9zcGFuPiAke2NvbnRlbnRPYmouaG91cnMuZnJpZGF5fTwvcD5cbiAgPHA+PHNwYW4+U2F0dXJkYXk6PC9zcGFuPiAke2NvbnRlbnRPYmouaG91cnMuc2F0dXJkYXl9PC9wPlxuICBgO1xuXG4gIHdvcmtIb3Vycy5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG4gIHdvcmtIb3Vycy5hcHBlbmRDaGlsZChzY2hlZHVsZSk7XG5cbiAgcmV0dXJuIHdvcmtIb3Vycztcbn1cblxuZnVuY3Rpb24gbWFrZUxvY2F0aW9uRGl2KCkge1xuICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuICBsb2NhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xuXG4gIGNvbnN0IHN1YnRpdGxlID0gZG9tQ3JlYXRvcignaDInKTtcbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBjb250ZW50T2JqLmxvY2F0aW9uLnN1YnRpdGxlO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb21DcmVhdG9yKCdwJyk7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBjb250ZW50T2JqLmxvY2F0aW9uLmFkZHJlc3M7XG5cbiAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuICBsb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICByZXR1cm4gbG9jYXRpb25EaXY7XG59XG5cbmNvbnN0IHJldmlld2VyT25lID0gbWFrZVJldmlldyhcbiAgY29udGVudE9iai5yZXZpZXdlck9uZS50ZXh0LFxuICBjb250ZW50T2JqLnJldmlld2VyT25lLnJldmlld2VyXG4pO1xuXG5jb25zdCByZXZpZXdlclR3byA9IG1ha2VSZXZpZXcoXG4gIGNvbnRlbnRPYmoucmV2aWV3ZXJUd28udGV4dCxcbiAgY29udGVudE9iai5yZXZpZXdlclR3by5yZXZpZXdlclxuKTtcblxuY29uc3QgaG9tZUNvbXBvbmVudHMgPSBbXG4gIG1ha2VUaXRsZSgpLFxuICByZXZpZXdlck9uZSxcbiAgcmV2aWV3ZXJUd28sXG4gIG1ha2VIb3Vyc0RpdigpLFxuICBtYWtlTG9jYXRpb25EaXYoKSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVDb21wb25lbnRzO1xuIiwiLy8gSG9tZSBwYWdlXG5jb25zdCBjb250ZW50T2JqID0ge1xuICB0aXRsZTogJ0toYWltYSBSZXN0YXVyYW50JyxcbiAgcmV2aWV3ZXJPbmU6IHtcbiAgICB0ZXh0OiAnXCJLaGFpbWEgUmVzdGF1cmFudCBpcyB0aGUgcGFsY2UgaW4gbWlkZGxlIHNhaGFyYSB3aXRoIEFsZ2VyaWFuIHRyYWRpdGlvbmFsIGZvb2QuIEZvb2QgaXMgYSBwZXJmZWN0IGJsZW5kIG9mIGZsYXZvcnMgYW5kIHNwaWNlcyB0aGF0IHdpbGwgbGVhdmUgeW91ciB0YXN0ZSBidWRzIHRpbmdsaW5nLiBUaGUgZGlzaGVzIGFyZSBoZWFydHksIGNvbWZvcnRpbmcgYW5kIHBlcmZlY3QgZm9yIHNoYXJpbmcgd2l0aCBmcmllbmRzIGFuZCBmYW1pbHkuIElmIHlvdSBldmVyIGhhdmUgYSBjaGFuY2UgdG8gdHJ5IHRoaXMgY3Vpc2luZSwgSSBoaWdobHkgcmVjb21tZW5kIGl0LlwiICcsXG4gICAgcmV2aWV3ZXI6ICdKb2huIEtlbm5lZHknLFxuICB9LFxuICByZXZpZXdlclR3bzoge1xuICAgIHRleHQ6ICdcIktoYWltYSBpbiB0aGUgQWxnZXJpYW4gU2FoYXJhIGlzIGEgdW5pcXVlIGFuZCB1bmZvcmdldHRhYmxlIGRpbmluZyBleHBlcmllbmNlLiBUaGUgdHJhZGl0aW9uYWwgQmVyYmVyIGN1aXNpbmUgaXMgZGVsaWNpb3VzIGFuZCBhdXRoZW50aWMsIGFuZCB0aGUgZGVzZXJ0IHNldHRpbmcgaXMgYnJlYXRodGFraW5nLiBIaWdobHkgcmVjb21tZW5kIGEgdmlzaXQgdG8gS2hhaW1hIGZvciBhIHRydWx5IG9uZS1vZi1hLWtpbmQgbWVhbC5cIicsXG4gICAgcmV2aWV3ZXI6ICdNb2hhbW1lZCBFbCBLZW5keScsXG4gIH0sXG4gIGhvdXJzOiB7XG4gICAgc3VidGl0bGU6ICdXb3JrIEhvdXJzJyxcbiAgICBzdW5kYXk6ICc4YW0tOHBtJyxcbiAgICBtb25kYXk6ICc4YW0tOGFtJyxcbiAgICB0dWVzZGF5OiAnOGFtIC0gN3BtJyxcbiAgICB3ZWRuZXNkYXk6ICc3YW0gLSA2cG0nLFxuICAgIHRodXJzZGF5OiAnOGFtIC0gMTBwbScsXG4gICAgZnJpZGF5OiAnOGFtIC0gMTBwbScsXG4gICAgc2F0dXJkYXk6ICc4YW0gLSAxMHBtJyxcbiAgfSxcbiAgbG9jYXRpb246IHtcbiAgICBzdWJ0aXRsZTogJ0xvY2F0aW9uJyxcbiAgICBhZGRyZXNzOiAnVGFzc2lsaSwgQWxnZXJpYScsXG4gIH0sXG59O1xuXG4vLyBNZW51IHBhZ2VcblxuY29uc3QgbWFpbkRpc2hlcyA9IHtcbiAgY2F0ZWdvcnk6ICdNYWluIERpc2hlcycsXG4gIGNvdXNjb3VzOiB7XG4gICAgbmFtZTogJ0NvdXNjb3VzJyxcbiAgICBkZXNjOiAnQ291c2NvdXMgaXMgYSB0cmFkaXRpb25hbCBOb3J0aCBBZnJpY2FuIGRpc2ggbWFkZSBmcm9tIHNtYWxsIHN0ZWFtZWQgYmFsbHMgb2Ygc2Vtb2xpbmEgd2hlYXQuIEl0IGlzIG9mdGVuIHNlcnZlZCBhcyBhIHNpZGUgZGlzaCB3aXRoIG1lYXQgb3IgdmVnZXRhYmxlcyBhbmQgY2FuIGJlIG1hZGUgc3dlZXQgb3Igc2F2b3J5LiBJdCBpcyBhIHN0YXBsZSBpbiBBbGdlcmlhbiBjdWlzaW5lIGFuZCBpcyBlbmpveWVkIGJ5IGxvY2FscyBhbmQgdmlzaXRvcnMgYWxpa2UuJyxcbiAgICBwcmljZTogJzMkJyxcbiAgICBpbWdTcmM6ICcuLi9zcmMvaW1hZ2VzL2NvdXNjb3VzLmpwZycsIC8vIEltYWdlIGJ5IGNoZWZtb3VoY2luZSBvbiBwaXhhYmF5LCBodHRwczovL3BpeGFiYXkuY29tL3Bob3Rvcy9jb3VzY291cy12ZWdldGFibGUtbWVhdC1yZWNpcGUtMzQ0MDA0Mi9cbiAgfSxcbiAgenZpdGk6IHtcbiAgICBuYW1lOiAnWnZpdGknLFxuICAgIGRlc2M6ICdadml0aSBpcyBhIHRyYWRpdGlvbmFsIEFsZ2VyaWFuIGRpc2ggY29uc2lzdGluZyBvZiBzdGV3ZWQgbGFtYiBvciBiZWVmLCBtaXhlZCB3aXRoIGNoaWNrcGVhcyBhbmQgYSB2YXJpZXR5IG9mIHNwaWNlcy4gSXQgaXMgb2Z0ZW4gc2VydmVkIHdpdGggY291c2NvdXMgYW5kIGlzIGEgaGVhcnR5LCBjb21mb3J0aW5nIG1lYWwuIEl0IGlzIGEgc3RhcGxlIG9mIEFsZ2VyaWFuIGN1aXNpbmUgYW5kIGlzIGVuam95ZWQgYnkgbG9jYWxzIGFuZCB2aXNpdG9ycyBhbGlrZS4nLFxuICAgIHByaWNlOiAnNCQnLFxuICAgIGltZ1NyYzogJy4uL3NyYy9pbWFnZXMvenZpdGkyLmpwZWcnLCAvLyBJbWFnZSBieSBEamF6YWlyIENvb2tpbmcgb24gdHdlZXRlciBwb3N0LCBodHRwczovL3R3aXR0ZXIuY29tL0RqYXphaXJDb29raW5nL3N0YXR1cy8xNTE5NzY3NDI3Njg0NDM4MDE3L3Bob3RvLzFcbiAgfSxcbiAgY2hha2hjaG9raGE6IHtcbiAgICBuYW1lOiAnQ2hha2hjaG9raGEnLFxuICAgIGRlc2M6ICdDaGFraGNob2toYSBpcyBhIHRyYWRpdGlvbmFsIEFsZ2VyaWFuIGRpc2ggbWFkZSBvZiBjb29rZWQgYW5kIG1hc2hlZCB0b21hdG9lcyBhbmQgYmVsbCBwZXBwZXJzLCB0eXBpY2FsbHkgc2VydmVkIHdpdGggYnJlYWQuIEl0IGlzIGEgaGVhcnR5IGFuZCBmbGF2b3JmdWwgZGlzaCwgYW5kIGlzIG9mdGVuIHNlcnZlZCBhcyBhIHNpZGUgZGlzaCBvciBhcyBhIHRvcHBpbmcgZm9yIG1lYXQgZGlzaGVzLiBJdCBpcyBhIHN0YXBsZSBpbiBBbGdlcmlhbiBjdWlzaW5lIGFuZCBpcyBlbmpveWVkIGJ5IGxvY2FscyBhbmQgdmlzaXRvcnMgYWxpa2UuJyxcbiAgICBwcmljZTogJzMkJyxcbiAgICBpbWdTcmM6ICcuLi9zcmMvaW1hZ2VzL2NoYWtoY2hva2EuanBlZycsIC8vIEltYWdlIGZyb20gaHR0cHM6Ly93d3cubXlleGNlbGxlbnRkZWd1c3RhdGlvbnMuY29tL2FsZ2VyaWFuLXRoaW4tZmxhdGJyZWFkLXdpdGgtbWVhdC1zYXVjZS1jaGFraGNob3VraGEvXG4gIH0sXG59O1xuXG5jb25zdCBlbnRyZWVzID0ge1xuICBjYXRlZ29yeTogJ0VudHJlZXMgYW5kIERlc3NlcnQgRGlzaGVzJyxcbiAgdGVhOiB7XG4gICAgbmFtZTogJ1NhaGFyYSBUZWEnLFxuICAgIGRlc2M6ICdBbGdlcmlhbiBTYWhhcmEgdGVhIGlzIGEgdHlwZSBvZiBibGFjayB0ZWEgdGhhdCBpcyBncm93biBhbmQgcHJvZHVjZWQgaW4gdGhlIFNhaGFyYSBkZXNlcnQgcmVnaW9uIG9mIEFsZ2VyaWEuIEl0IGlzIGtub3duIGZvciBpdHMgc3Ryb25nLCBib2xkIGZsYXZvciBhbmQgaXMgb2Z0ZW4gc2VydmVkIHdpdGggbWludCBvciBvdGhlciBoZXJicyB0byBlbmhhbmNlIHRoZSB0YXN0ZS4gSXQgaXMgY29uc2lkZXJlZCBhIHRyYWRpdGlvbmFsIGRyaW5rIGluIEFsZ2VyaWEgYW5kIGlzIGVuam95ZWQgYnkgbWFueSBsb2NhbHMgYW5kIHRvdXJpc3RzIGFsaWtlLicsXG4gICAgcHJpY2U6ICcwLjUkJyxcbiAgICBpbWdTcmM6ICcuLi9zcmMvaW1hZ2VzL3NhaGFyYS10ZWEuanBnJywgLy8gSW1hZ2UgYnkgcGlya2VyY2hyaSBvbiBwaXhhYmF5LCBodHRwczovL3BpeGFiYXkuY29tL2ltYWdlcy9pZC0yNDMxNDU5L1xuICB9LFxuICBiYWtsYXZhOiB7XG4gICAgbmFtZTogJ0Jha2xhdmEnLFxuICAgIGRlc2M6ICdBbGdlcmlhbiBiYWtsYXZhIGlzIGEgc3dlZXQgcGFzdHJ5IG1hZGUgZnJvbSBsYXllcnMgb2YgcGh5bGxvIGRvdWdoIGZpbGxlZCB3aXRoIGNob3BwZWQgbnV0cywgdHlwaWNhbGx5IGFsbW9uZHMgb3IgcGlzdGFjaGlvcy4gSXQgaXMgc3dlZXRlbmVkIHdpdGggaG9uZXkgb3Igc3lydXAgYW5kIGlzIG9mdGVuIGZsYXZvcmVkIHdpdGggY2lubmFtb24gb3Igb3JhbmdlIGJsb3Nzb20gd2F0ZXIuIEl0IGlzIGEgcG9wdWxhciBkZXNzZXJ0IGluIEFsZ2VyaWEgYW5kIGNhbiBiZSBmb3VuZCBpbiBtYW55IGJha2VyaWVzIGFuZCByZXN0YXVyYW50cyB0aHJvdWdob3V0IHRoZSBjb3VudHJ5LicsXG4gICAgcHJpY2U6ICcyJCcsXG4gICAgaW1nU3JjOiAnLi4vc3JjL2ltYWdlcy9iYWtsYXZhLmpwZycsIC8vIEltYWdlIGJ5IGZhYnJpa2FzaW1mIG9uIEZyZWVwaWssIGh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2F1dGhvci9mYWJyaWthc2ltZlxuICB9LFxufTtcblxuLy8gQ29udGFjdCBwYWdlXG5cbi8vIGNhbWVsIHZlY3RvcnMgZnJvbSBGcmVlcGlrIGJ5IEJyZ2Z4LCBodHRwczovL3d3dy5mcmVlcGlrLmNvbS9hdXRob3IvYnJnZnhcbmNvbnN0IGNvbnRhY3RzID0ge1xuICBtYW1hQ2FtZWw6IHtcbiAgICBuYW1lOiAnTWFtYSBDYW1lbCcsXG4gICAgam9iOiAnQ2hlZicsXG4gICAgcGhvbmU6ICc1NDgtNTQ1LTUyNCcsXG4gICAgZW1haWw6ICdtYW1hQ2FtZWxBZ0BmYWtlLmNvbScsXG4gICAgaW1nOiAnLi4vc3JjL2ltYWdlcy9tYW1hLWNhbWVsLmpwZycsXG4gIH0sXG4gIHBhcENhbWVsOiB7XG4gICAgbmFtZTogJ1BhcGEgQ2FtZWwnLFxuICAgIGpvYjogJ01hbmFnZXInLFxuICAgIHBob25lOiAnNDQyLTU0NC0xMTEnLFxuICAgIGVtYWlsOiAncGFwYUNhbWVsQWdAZmFrZS5jb20nLFxuICAgIGltZzogJy4uL3NyYy9pbWFnZXMvcGFwYS1jYW1lbC5qcGcnLFxuICB9LFxuICBiYWJ5Q2FtZWw6IHtcbiAgICBuYW1lOiAnQmFieSBDYW1lbCcsXG4gICAgam9iOiAnV2FpdGVyJyxcbiAgICBwaG9uZTogJzU0Mi00NDQtMjAwJyxcbiAgICBlbWFpbDogJ2JhYnlDYW1lbEFnQGZha2UuY29tJyxcbiAgICBpbWc6ICcuLi9zcmMvaW1hZ2VzL2JhYnktY2FtZWwuanBnJyxcbiAgfSxcbn07XG5cbmV4cG9ydCB7IGNvbnRlbnRPYmosIG1haW5EaXNoZXMsIGVudHJlZXMsIGNvbnRhY3RzIH07XG4iLCJpbXBvcnQgeyBkb21TZWxlY3RvciwgZG9tQ3JlYXRvciB9IGZyb20gJy4vZG9tLW1hbmlwdWxhdGlvbic7XG5pbXBvcnQgaG9tZUNvbXBvbmVudHMgZnJvbSAnLi9ob21lJztcblxuZnVuY3Rpb24gbWFrZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9tQ3JlYXRvcignaGVhZGVyJyk7XG4gIGNvbnN0IG5hdiA9IGRvbUNyZWF0b3IoJ25hdicpO1xuICBjb25zdCB1bCA9IGRvbUNyZWF0b3IoJ3VsJyk7XG5cbiAgY29uc3QgaG9tZUl0ZW0gPSBkb21DcmVhdG9yKCdsaScpO1xuICBob21lSXRlbS50ZXh0Q29udGVudCA9ICdIb21lJztcblxuICBjb25zdCBtZW51SXRlbSA9IGRvbUNyZWF0b3IoJ2xpJyk7XG4gIG1lbnVJdGVtLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gIGNvbnN0IGNvbnRhY3RJdGVtID0gZG9tQ3JlYXRvcignbGknKTtcbiAgY29udGFjdEl0ZW0udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gIHVsLmFwcGVuZENoaWxkKGhvbWVJdGVtKTtcbiAgdWwuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICB1bC5hcHBlbmRDaGlsZChjb250YWN0SXRlbSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNYWluKGFycikge1xuICBjb25zdCBtYWluID0gZG9tQ3JlYXRvcignbWFpbicpO1xuICBhcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH0pO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBtYWtlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb21DcmVhdG9yKCdmb290ZXInKTtcbiAgY29uc3QgbGluayA9IGRvbUNyZWF0b3IoJ2EnKTtcbiAgbGluay50ZXh0Q29udGVudCA9ICdLcmltb3RoaWF6aW5lJztcbiAgbGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9rYXJpbS1zYW91JztcbiAgbGluay5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gIGZvb3Rlci50ZXh0Q29udGVudCA9ICdDcmVhdGVkIGJ5ICc7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChsaW5rKTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb21TZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWtlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VNYWluKGhvbWVDb21wb25lbnRzKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUZvb3RlcigpKTtcbn1cbiIsImltcG9ydCB7IGRvbUNyZWF0b3IgfSBmcm9tICcuL2RvbS1tYW5pcHVsYXRpb24nO1xuaW1wb3J0IHsgbWFpbkRpc2hlcywgZW50cmVlcyB9IGZyb20gJy4vaW5mbyc7XG5cbmZ1bmN0aW9uIG1lbnVUaXRsZSgpIHtcbiAgY29uc3QgbWVudSA9IGRvbUNyZWF0b3IoJ2gyJyk7XG4gIG1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIG1lbnUuaWQgPSAnbWVudS10aXRsZSc7XG4gIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiBtYWtlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgY29uc3QgbWVudUNhdGVnb3J5ID0gZG9tQ3JlYXRvcignaDMnKTtcbiAgbWVudUNhdGVnb3J5LnRleHRDb250ZW50ID0gY2F0ZWdvcnk7XG4gIG1lbnVDYXRlZ29yeS5pZCA9ICdjYXRlZ29yeSc7XG4gIHJldHVybiBtZW51Q2F0ZWdvcnk7XG59XG5cbmZ1bmN0aW9uIGZvb2RUeXBlKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZUZvb2QsIGltZ1NyYykge1xuICBjb25zdCBmb29kQ2FyZCA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuICBmb29kQ2FyZC5jbGFzc0xpc3QuYWRkKCdmb29kLWNhcmQnKTtcblxuICBjb25zdCB0aXRsZSA9IGRvbUNyZWF0b3IoJ2g0Jyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBkZXNjID0gZG9tQ3JlYXRvcigncCcpO1xuICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZGVzYycpO1xuICBkZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgY29uc3QgcHJpY2UgPSBkb21DcmVhdG9yKCdwJyk7XG4gIHByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XG4gIHByaWNlLnRleHRDb250ZW50ID0gcHJpY2VGb29kO1xuXG4gIGNvbnN0IGZvb2RJbWcgPSBkb21DcmVhdG9yKCdpbWcnKTtcbiAgZm9vZEltZy5zcmMgPSBpbWdTcmM7XG4gIGZvb2RJbWcuYWx0ID0gJ2ltZyc7XG5cbiAgZm9vZENhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBmb29kQ2FyZC5hcHBlbmRDaGlsZChkZXNjKTtcbiAgZm9vZENhcmQuYXBwZW5kQ2hpbGQocHJpY2UpO1xuICBmb29kQ2FyZC5hcHBlbmRDaGlsZChmb29kSW1nKTtcblxuICByZXR1cm4gZm9vZENhcmQ7XG59XG5cbmNvbnN0IGNvdXNjb3VzRGlzaCA9IGZvb2RUeXBlKFxuICBtYWluRGlzaGVzLmNvdXNjb3VzLm5hbWUsXG4gIG1haW5EaXNoZXMuY291c2NvdXMuZGVzYyxcbiAgbWFpbkRpc2hlcy5jb3VzY291cy5wcmljZSxcbiAgbWFpbkRpc2hlcy5jb3VzY291cy5pbWdTcmNcbik7XG5cbmNvbnN0IHp2aXRpRGlzaCA9IGZvb2RUeXBlKFxuICBtYWluRGlzaGVzLnp2aXRpLm5hbWUsXG4gIG1haW5EaXNoZXMuenZpdGkuZGVzYyxcbiAgbWFpbkRpc2hlcy56dml0aS5wcmljZSxcbiAgbWFpbkRpc2hlcy56dml0aS5pbWdTcmNcbik7XG5cbmNvbnN0IGNoYWtoY2hva2hhRGlzaCA9IGZvb2RUeXBlKFxuICBtYWluRGlzaGVzLmNoYWtoY2hva2hhLm5hbWUsXG4gIG1haW5EaXNoZXMuY2hha2hjaG9raGEuZGVzYyxcbiAgbWFpbkRpc2hlcy5jaGFraGNob2toYS5wcmljZSxcbiAgbWFpbkRpc2hlcy5jaGFraGNob2toYS5pbWdTcmNcbik7XG5cbmNvbnN0IHNhaGFyYVRlYSA9IGZvb2RUeXBlKFxuICBlbnRyZWVzLnRlYS5uYW1lLFxuICBlbnRyZWVzLnRlYS5kZXNjLFxuICBlbnRyZWVzLnRlYS5wcmljZSxcbiAgZW50cmVlcy50ZWEuaW1nU3JjXG4pO1xuXG5jb25zdCBiYWtsYXZhID0gZm9vZFR5cGUoXG4gIGVudHJlZXMuYmFrbGF2YS5uYW1lLFxuICBlbnRyZWVzLmJha2xhdmEuZGVzYyxcbiAgZW50cmVlcy5iYWtsYXZhLnByaWNlLFxuICBlbnRyZWVzLmJha2xhdmEuaW1nU3JjXG4pO1xuXG5jb25zdCBtYWluRGlzaGVzU3VidGl0bGUgPSBtYWtlQ2F0ZWdvcnkobWFpbkRpc2hlcy5jYXRlZ29yeSk7XG5jb25zdCBlbnRyZWVzU3VidGl0bGUgPSBtYWtlQ2F0ZWdvcnkoZW50cmVlcy5jYXRlZ29yeSk7XG5cbmNvbnN0IG1lbnVDb21wb25lbnRzID0gW1xuICBtZW51VGl0bGUoKSxcbiAgbWFpbkRpc2hlc1N1YnRpdGxlLFxuICBjb3VzY291c0Rpc2gsXG4gIHp2aXRpRGlzaCxcbiAgY2hha2hjaG9raGFEaXNoLFxuICBlbnRyZWVzU3VidGl0bGUsXG4gIHNhaGFyYVRlYSxcbiAgYmFrbGF2YSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVDb21wb25lbnRzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgbG9hZFBhZ2UsIG1ha2VNYWluIH0gZnJvbSAnLi9sb2FkLXBhZ2UnO1xuaW1wb3J0IHsgZG9tU2VsZWN0b3JBbGwsIGRvbVNlbGVjdG9yIH0gZnJvbSAnLi9kb20tbWFuaXB1bGF0aW9uJztcbmltcG9ydCBob21lQ29tcG9uZW50cyBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IG1lbnVDb21wb25lbnRzIGZyb20gJy4vbWVudSc7XG5pbXBvcnQgY29udGFjdENvbXBvbmVudHMgZnJvbSAnLi9jb250YWN0cyc7XG5cbi8vIHNldCBwYWdlIGFmdGVyIGZpcnN0IGxvYWQgYXQgSG9tZSBwYWdlXG5sZXQgcGFnZSA9ICdIb21lJztcblxuZnVuY3Rpb24gc3dpdGNoUGFnZShQYWdlKSB7XG4gIGxldCBtYWluID0gZG9tU2VsZWN0b3IoJyNjb250ZW50IG1haW4nKTtcbiAgY29uc3QgY29udGVudCA9IGRvbVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb25zdCBmb290ZXIgPSBkb21TZWxlY3RvcignZm9vdGVyJyk7XG4gIGlmIChtYWluICE9PSBudWxsKSB7XG4gICAgaWYgKFBhZ2UgPT09ICdIb21lJykge1xuICAgICAgbWFpbi5yZW1vdmUoKTtcbiAgICAgIG1haW4gPSBtYWtlTWFpbihob21lQ29tcG9uZW50cyk7XG4gICAgICBjb250ZW50Lmluc2VydEJlZm9yZShtYWluLCBmb290ZXIpO1xuICAgIH1cbiAgICBpZiAoUGFnZSA9PT0gJ01lbnUnKSB7XG4gICAgICBtYWluLnJlbW92ZSgpO1xuICAgICAgbWFpbiA9IG1ha2VNYWluKG1lbnVDb21wb25lbnRzKTtcbiAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKG1haW4sIGZvb3Rlcik7XG4gICAgfVxuICAgIGlmIChQYWdlID09PSAnQ29udGFjdCcpIHtcbiAgICAgIG1haW4ucmVtb3ZlKCk7XG4gICAgICBtYWluID0gbWFrZU1haW4oY29udGFjdENvbXBvbmVudHMpO1xuICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobWFpbiwgZm9vdGVyKTtcbiAgICB9XG4gIH1cbn1cblxubG9hZFBhZ2UoKTtcblxuY29uc3QgbmF2QnRucyA9IEFycmF5LmZyb20oZG9tU2VsZWN0b3JBbGwoJ25hdiB1bCBsaScpKTtcbm5hdkJ0bnMuZm9yRWFjaCgobmF2QnRuKSA9PiB7XG4gIG5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcGFnZSA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIHN3aXRjaFBhZ2UocGFnZSk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=