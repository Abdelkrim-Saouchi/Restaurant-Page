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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./bg.jpg */ "./src/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --sand-color: #bd9b16;\n  --moon-color: #ffffff;\n  --night-color: rgb(44 46 57);\n  --green-color: #127533;\n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  min-height: 100vh;\n  padding: 32px 48px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-attachment: fixed;\n  color: var(--sand-color);\n  font-size: large;\n  display: grid;\n  grid-template-rows: min-content 1fr min-content;\n  justify-items: center;\n}\n\nnav ul {\n  list-style: none;\n  display: flex;\n  gap: 64px;\n  cursor: pointer;\n}\n\nnav ul li {\n  font-size: 32px;\n}\n\nnav ul li:is(:focus, :hover) {\n  color: var(--green-color);\n}\n\nfooter a {\n  text-decoration-line: none;\n  color: var(--sand-color);\n}\n\nfooter a:is(:focus, :hover) {\n  text-decoration-line: underline;\n  color: var(--green-color);\n}\n\n/* style home page */\n\nmain {\n  margin: 16px 0;\n  width: 800px;\n  background-color: var(--night-color);\n  border-radius: 18px;\n  opacity: 0.5;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n}\n\nmain h1 {\n  align-self: center;\n  font-size: 48px;\n  margin-bottom: 16px;\n  cursor: pointer;\n}\n\nmain h1:hover {\n  color: var(--green-color);\n}\n\n.view,\n.work-hours,\n.location {\n  background-color: var(--moon-color);\n  padding: 12px 28px;\n  border-radius: 16px;\n  color: var(--sand-color);\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n}\n.view p {\n  font-weight: 600;\n}\n\n.view h2 {\n  font-size: 26px;\n  align-self: flex-end;\n}\n\n.work-hours {\n  align-items: center;\n}\n.work-hours h2 {\n  align-self: flex-start;\n}\n\n.work-hours div p span {\n  font-weight: 700;\n}\n\n.location {\n  align-items: center;\n}\n\n.location h2 {\n  align-self: flex-start;\n}\n\n/* style Menu page */\n\n#menu-title,\n#category,\n.food-card {\n  align-self: center;\n  margin-bottom: 16px;\n}\n\n#menu-title {\n  font-size: 42px;\n}\n\n#category {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--moon-color);\n  padding: 10px 16px;\n  border-radius: 16px;\n}\n\n.food-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  background-color: var(--moon-color);\n  padding: 16px;\n  border-radius: 16px;\n}\n\n.food-card h4 {\n  font-size: 26px;\n  font-weight: 700;\n}\n\n.food-card .food-desc {\n  max-width: 70%;\n  font-weight: 600;\n}\n\n.food-card .price {\n  font-weight: 700;\n  font-size: 26px;\n}\n\n.food-card img {\n  max-width: 50%;\n}\n\n/* style Contact page */\n\n#contact-title,\n.contact-card {\n  align-self: center;\n}\n\n#contact-title {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 32px;\n}\n\n.contact-card {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 32px;\n}\n\n.contact-card h3 {\n  margin-bottom: 10px;\n}\n\n.contact-card .contact-info {\n  background-color: var(--moon-color);\n  padding: 12px;\n  border-radius: 12px;\n}\n\n.contact-card img {\n  max-width: 20%;\n  border-radius: 12px;\n  overflow: hidden;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,yDAAiC;EACjC,sBAAsB;EACtB,4BAA4B;EAC5B,wBAAwB;EACxB,gBAAgB;EAChB,aAAa;EACb,+CAA+C;EAC/C,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;EAC1B,wBAAwB;AAC1B;;AAEA;EACE,+BAA+B;EAC/B,yBAAyB;AAC3B;;AAEA,oBAAoB;;AAEpB;EACE,cAAc;EACd,YAAY;EACZ,oCAAoC;EACpC,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;;EAGE,mCAAmC;EACnC,kBAAkB;EAClB,mBAAmB;EACnB,wBAAwB;EACxB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA,oBAAoB;;AAEpB;;;EAGE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,wBAAwB;EACxB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,mCAAmC;EACnC,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA,uBAAuB;;AAEvB;;EAEE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;EACnC,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,gBAAgB;AAClB","sourcesContent":[":root {\n  --sand-color: #bd9b16;\n  --moon-color: #ffffff;\n  --night-color: rgb(44 46 57);\n  --green-color: #127533;\n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  min-height: 100vh;\n  padding: 32px 48px;\n  background-image: url('./bg.jpg');\n  background-size: cover;\n  background-attachment: fixed;\n  color: var(--sand-color);\n  font-size: large;\n  display: grid;\n  grid-template-rows: min-content 1fr min-content;\n  justify-items: center;\n}\n\nnav ul {\n  list-style: none;\n  display: flex;\n  gap: 64px;\n  cursor: pointer;\n}\n\nnav ul li {\n  font-size: 32px;\n}\n\nnav ul li:is(:focus, :hover) {\n  color: var(--green-color);\n}\n\nfooter a {\n  text-decoration-line: none;\n  color: var(--sand-color);\n}\n\nfooter a:is(:focus, :hover) {\n  text-decoration-line: underline;\n  color: var(--green-color);\n}\n\n/* style home page */\n\nmain {\n  margin: 16px 0;\n  width: 800px;\n  background-color: var(--night-color);\n  border-radius: 18px;\n  opacity: 0.5;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n}\n\nmain h1 {\n  align-self: center;\n  font-size: 48px;\n  margin-bottom: 16px;\n  cursor: pointer;\n}\n\nmain h1:hover {\n  color: var(--green-color);\n}\n\n.view,\n.work-hours,\n.location {\n  background-color: var(--moon-color);\n  padding: 12px 28px;\n  border-radius: 16px;\n  color: var(--sand-color);\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n}\n.view p {\n  font-weight: 600;\n}\n\n.view h2 {\n  font-size: 26px;\n  align-self: flex-end;\n}\n\n.work-hours {\n  align-items: center;\n}\n.work-hours h2 {\n  align-self: flex-start;\n}\n\n.work-hours div p span {\n  font-weight: 700;\n}\n\n.location {\n  align-items: center;\n}\n\n.location h2 {\n  align-self: flex-start;\n}\n\n/* style Menu page */\n\n#menu-title,\n#category,\n.food-card {\n  align-self: center;\n  margin-bottom: 16px;\n}\n\n#menu-title {\n  font-size: 42px;\n}\n\n#category {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--moon-color);\n  padding: 10px 16px;\n  border-radius: 16px;\n}\n\n.food-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  background-color: var(--moon-color);\n  padding: 16px;\n  border-radius: 16px;\n}\n\n.food-card h4 {\n  font-size: 26px;\n  font-weight: 700;\n}\n\n.food-card .food-desc {\n  max-width: 70%;\n  font-weight: 600;\n}\n\n.food-card .price {\n  font-weight: 700;\n  font-size: 26px;\n}\n\n.food-card img {\n  max-width: 50%;\n}\n\n/* style Contact page */\n\n#contact-title,\n.contact-card {\n  align-self: center;\n}\n\n#contact-title {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 32px;\n}\n\n.contact-card {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 32px;\n}\n\n.contact-card h3 {\n  margin-bottom: 10px;\n}\n\n.contact-card .contact-info {\n  background-color: var(--moon-color);\n  padding: 12px;\n  border-radius: 12px;\n}\n\n.contact-card img {\n  max-width: 20%;\n  border-radius: 12px;\n  overflow: hidden;\n}\n"],"sourceRoot":""}]);
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
    imgSrc: '../src/couscous.jpg', // Image by chefmouhcine on pixabay, https://pixabay.com/photos/couscous-vegetable-meat-recipe-3440042/
  },
  zviti: {
    name: 'Zviti',
    desc: 'Zviti is a traditional Algerian dish consisting of stewed lamb or beef, mixed with chickpeas and a variety of spices. It is often served with couscous and is a hearty, comforting meal. It is a staple of Algerian cuisine and is enjoyed by locals and visitors alike.',
    price: '4$',
    imgSrc: '../src/zviti2.jpeg', // Image by Djazair Cooking on tweeter post, https://twitter.com/DjazairCooking/status/1519767427684438017/photo/1
  },
  chakhchokha: {
    name: 'Chakhchokha',
    desc: 'Chakhchokha is a traditional Algerian dish made of cooked and mashed tomatoes and bell peppers, typically served with bread. It is a hearty and flavorful dish, and is often served as a side dish or as a topping for meat dishes. It is a staple in Algerian cuisine and is enjoyed by locals and visitors alike.',
    price: '3$',
    imgSrc: '../src/chakhchoka.jpeg', // Image from https://www.myexcellentdegustations.com/algerian-thin-flatbread-with-meat-sauce-chakhchoukha/
  },
};

const entrees = {
  category: 'Entrees and Dessert Dishes',
  tea: {
    name: 'Sahara Tea',
    desc: 'Algerian Sahara tea is a type of black tea that is grown and produced in the Sahara desert region of Algeria. It is known for its strong, bold flavor and is often served with mint or other herbs to enhance the taste. It is considered a traditional drink in Algeria and is enjoyed by many locals and tourists alike.',
    price: '0.5$',
    imgSrc: '../src/sahara-tea.jpg', // Image by pirkerchri on pixabay, https://pixabay.com/images/id-2431459/
  },
  baklava: {
    name: 'Baklava',
    desc: 'Algerian baklava is a sweet pastry made from layers of phyllo dough filled with chopped nuts, typically almonds or pistachios. It is sweetened with honey or syrup and is often flavored with cinnamon or orange blossom water. It is a popular dessert in Algeria and can be found in many bakeries and restaurants throughout the country.',
    price: '2$',
    imgSrc: '../src/baklava.jpg', // Image by fabrikasimf on Freepik, https://www.freepik.com/author/fabrikasimf
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
    img: '../src/mama-camel.jpg',
  },
  papCamel: {
    name: 'Papa Camel',
    job: 'Manager',
    phone: '442-544-111',
    email: 'papaCamelAg@fake.com',
    img: '../src/papa-camel.jpg',
  },
  babyCamel: {
    name: 'Baby Camel',
    job: 'Waiter',
    phone: '542-444-200',
    email: 'babyCamelAg@fake.com',
    img: '../src/baby-camel.jpg',
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

/***/ "./src/bg.jpg":
/*!********************!*\
  !*** ./src/bg.jpg ***!
  \********************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM0QjtBQUNnQjtBQUM3QjtBQUNBO0FBQ087O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLDhEQUFXO0FBQ3hCLGtCQUFrQiw4REFBVztBQUM3QixpQkFBaUIsOERBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvREFBUSxDQUFDLDZDQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvREFBUSxDQUFDLDZDQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvREFBUSxDQUFDLGlEQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvREFBUTs7QUFFUiwyQkFBMkIsaUVBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZG9tLW1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5mby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2JnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tc2FuZC1jb2xvcjogI2JkOWIxNjtcXG4gIC0tbW9vbi1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tbmlnaHQtY29sb3I6IHJnYig0NCA0NiA1Nyk7XFxuICAtLWdyZWVuLWNvbG9yOiAjMTI3NTMzO1xcbn1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAzMnB4IDQ4cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBjb2xvcjogdmFyKC0tc2FuZC1jb2xvcik7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyIG1pbi1jb250ZW50O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDY0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm5hdiB1bCBsaSB7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbm5hdiB1bCBsaTppcyg6Zm9jdXMsIDpob3Zlcikge1xcbiAgY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tc2FuZC1jb2xvcik7XFxufVxcblxcbmZvb3RlciBhOmlzKDpmb2N1cywgOmhvdmVyKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcXG59XFxuXFxuLyogc3R5bGUgaG9tZSBwYWdlICovXFxuXFxubWFpbiB7XFxuICBtYXJnaW46IDE2cHggMDtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5pZ2h0LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwYWRkaW5nOiAzMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbm1haW4gaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbiBoMTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpO1xcbn1cXG5cXG4udmlldyxcXG4ud29yay1ob3VycyxcXG4ubG9jYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9vbi1jb2xvcik7XFxuICBwYWRkaW5nOiAxMnB4IDI4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgY29sb3I6IHZhcigtLXNhbmQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG4udmlldyBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi52aWV3IGgyIHtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ud29yay1ob3VycyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ud29yay1ob3VycyBoMiB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ud29yay1ob3VycyBkaXYgcCBzcGFuIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9jYXRpb24gaDIge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLyogc3R5bGUgTWVudSBwYWdlICovXFxuXFxuI21lbnUtdGl0bGUsXFxuI2NhdGVnb3J5LFxcbi5mb29kLWNhcmQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuI21lbnUtdGl0bGUge1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbn1cXG5cXG4jY2F0ZWdvcnkge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS1tb29uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5mb29kLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9vbi1jb2xvcik7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuXFxuLmZvb2QtY2FyZCBoNCB7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZm9vZC1jYXJkIC5mb29kLWRlc2Mge1xcbiAgbWF4LXdpZHRoOiA3MCU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZm9vZC1jYXJkIC5wcmljZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4uZm9vZC1jYXJkIGltZyB7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuXFxuLyogc3R5bGUgQ29udGFjdCBwYWdlICovXFxuXFxuI2NvbnRhY3QtdGl0bGUsXFxuLmNvbnRhY3QtY2FyZCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNjb250YWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4uY29udGFjdC1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxufVxcblxcbi5jb250YWN0LWNhcmQgaDMge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZCAuY29udGFjdC1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vb24tY29sb3IpO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi5jb250YWN0LWNhcmQgaW1nIHtcXG4gIG1heC13aWR0aDogMjAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5REFBaUM7RUFDakMsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiwrQ0FBK0M7RUFDL0MscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHlCQUF5QjtBQUMzQjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7OztFQUdFLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBLG9CQUFvQjs7QUFFcEI7OztFQUdFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLHVCQUF1Qjs7QUFFdkI7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1zYW5kLWNvbG9yOiAjYmQ5YjE2O1xcbiAgLS1tb29uLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1uaWdodC1jb2xvcjogcmdiKDQ0IDQ2IDU3KTtcXG4gIC0tZ3JlZW4tY29sb3I6ICMxMjc1MzM7XFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDMycHggNDhweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9iZy5qcGcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgY29sb3I6IHZhcigtLXNhbmQtY29sb3IpO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA2NHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5uYXYgdWwgbGkge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG5uYXYgdWwgbGk6aXMoOmZvY3VzLCA6aG92ZXIpIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXNhbmQtY29sb3IpO1xcbn1cXG5cXG5mb290ZXIgYTppcyg6Zm9jdXMsIDpob3Zlcikge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XFxufVxcblxcbi8qIHN0eWxlIGhvbWUgcGFnZSAqL1xcblxcbm1haW4ge1xcbiAgbWFyZ2luOiAxNnB4IDA7XFxuICB3aWR0aDogODAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcGFkZGluZzogMzJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5tYWluIGgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm1haW4gaDE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcXG59XFxuXFxuLnZpZXcsXFxuLndvcmstaG91cnMsXFxuLmxvY2F0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vb24tY29sb3IpO1xcbiAgcGFkZGluZzogMTJweCAyOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGNvbG9yOiB2YXIoLS1zYW5kLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuLnZpZXcgcCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udmlldyBoMiB7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLndvcmstaG91cnMge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLndvcmstaG91cnMgaDIge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLndvcmstaG91cnMgZGl2IHAgc3BhbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uIGgyIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi8qIHN0eWxlIE1lbnUgcGFnZSAqL1xcblxcbiNtZW51LXRpdGxlLFxcbiNjYXRlZ29yeSxcXG4uZm9vZC1jYXJkIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbiNtZW51LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDJweDtcXG59XFxuXFxuI2NhdGVnb3J5IHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tbW9vbi1jb2xvcik7XFxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4uZm9vZC1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vb24tY29sb3IpO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5mb29kLWNhcmQgaDQge1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmZvb2QtY2FyZCAuZm9vZC1kZXNjIHtcXG4gIG1heC13aWR0aDogNzAlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZvb2QtY2FyZCAucHJpY2Uge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXFxuLmZvb2QtY2FyZCBpbWcge1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxufVxcblxcbi8qIHN0eWxlIENvbnRhY3QgcGFnZSAqL1xcblxcbiNjb250YWN0LXRpdGxlLFxcbi5jb250YWN0LWNhcmQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jY29udGFjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4uY29udGFjdC1jYXJkIGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jb250YWN0LWNhcmQgLmNvbnRhY3QtaW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb29uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4uY29udGFjdC1jYXJkIGltZyB7XFxuICBtYXgtd2lkdGg6IDIwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZG9tQ3JlYXRvciB9IGZyb20gJy4vZG9tLW1hbmlwdWxhdGlvbic7XG5pbXBvcnQgeyBjb250YWN0cyB9IGZyb20gJy4vaW5mbyc7XG5cbmZ1bmN0aW9uIG1ha2VDb250YWN0VGl0bGUoKSB7XG4gIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvbUNyZWF0b3IoJ2gyJyk7XG4gIGNvbnRhY3RUaXRsZS5pZCA9ICdjb250YWN0LXRpdGxlJztcbiAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuICByZXR1cm4gY29udGFjdFRpdGxlO1xufVxuXG5mdW5jdGlvbiBtYWtlQ29udGFjdENhcmQobmFtZSwgam9iLCBwaG9uZSwgZW1haWwsIGltZ1NyYykge1xuICBjb25zdCBjb250YWN0Q2FyZCA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuICBjb250YWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNhcmQnKTtcblxuICBjb25zdCBjb250YWN0SW5mbyA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8nKTtcblxuICBjb25zdCBjb250YWN0TmFtZSA9IGRvbUNyZWF0b3IoJ2gzJyk7XG4gIGNvbnRhY3ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBjb250YWN0Sm9iID0gZG9tQ3JlYXRvcigncCcpO1xuICBjb250YWN0Sm9iLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3Qtam9iJyk7XG4gIGNvbnRhY3RKb2IudGV4dENvbnRlbnQgPSBqb2I7XG5cbiAgY29uc3QgY29udGFjdFBob25lTnVtYmVyID0gZG9tQ3JlYXRvcigncCcpO1xuICBjb250YWN0UGhvbmVOdW1iZXIuY2xhc3NMaXN0LmFkZCgncGhvbmUtbnVtYmVyJyk7XG4gIGNvbnRhY3RQaG9uZU51bWJlci50ZXh0Q29udGVudCA9IHBob25lO1xuXG4gIGNvbnN0IGNvbnRhY3RFbWFpbCA9IGRvbUNyZWF0b3IoJ3AnKTtcbiAgY29udGFjdEVtYWlsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZW1haWwnKTtcbiAgY29udGFjdEVtYWlsLnRleHRDb250ZW50ID0gZW1haWw7XG5cbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdE5hbWUpO1xuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0Sm9iKTtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdFBob25lTnVtYmVyKTtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdEVtYWlsKTtcblxuICBjb25zdCBjb250YWN0SW1nID0gZG9tQ3JlYXRvcignaW1nJyk7XG4gIGNvbnRhY3RJbWcuc3JjID0gaW1nU3JjO1xuXG4gIGNvbnRhY3RDYXJkLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcbiAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQoY29udGFjdEltZyk7XG4gIHJldHVybiBjb250YWN0Q2FyZDtcbn1cblxuY29uc3QgbWFtYSA9IG1ha2VDb250YWN0Q2FyZChcbiAgY29udGFjdHMubWFtYUNhbWVsLm5hbWUsXG4gIGNvbnRhY3RzLm1hbWFDYW1lbC5qb2IsXG4gIGNvbnRhY3RzLm1hbWFDYW1lbC5waG9uZSxcbiAgY29udGFjdHMubWFtYUNhbWVsLmVtYWlsLFxuICBjb250YWN0cy5tYW1hQ2FtZWwuaW1nXG4pO1xuXG5jb25zdCBwYXBhID0gbWFrZUNvbnRhY3RDYXJkKFxuICBjb250YWN0cy5wYXBDYW1lbC5uYW1lLFxuICBjb250YWN0cy5wYXBDYW1lbC5qb2IsXG4gIGNvbnRhY3RzLnBhcENhbWVsLnBob25lLFxuICBjb250YWN0cy5wYXBDYW1lbC5lbWFpbCxcbiAgY29udGFjdHMucGFwQ2FtZWwuaW1nXG4pO1xuXG5jb25zdCBiYWJ5ID0gbWFrZUNvbnRhY3RDYXJkKFxuICBjb250YWN0cy5iYWJ5Q2FtZWwubmFtZSxcbiAgY29udGFjdHMuYmFieUNhbWVsLmpvYixcbiAgY29udGFjdHMuYmFieUNhbWVsLnBob25lLFxuICBjb250YWN0cy5iYWJ5Q2FtZWwuZW1haWwsXG4gIGNvbnRhY3RzLmJhYnlDYW1lbC5pbWdcbik7XG5cbmNvbnN0IGNvbnRhY3RDb21wb25lbnRzID0gW21ha2VDb250YWN0VGl0bGUoKSwgbWFtYSwgcGFwYSwgYmFieV07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RDb21wb25lbnRzO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGRvbUNyZWF0b3IoZWxlKSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21TZWxlY3RvcihlbGUpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbVNlbGVjdG9yQWxsKGVsZSkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGUpO1xufVxuIiwiaW1wb3J0IHsgZG9tQ3JlYXRvciB9IGZyb20gJy4vZG9tLW1hbmlwdWxhdGlvbic7XG5pbXBvcnQgeyBjb250ZW50T2JqIH0gZnJvbSAnLi9pbmZvJztcblxuZnVuY3Rpb24gbWFrZVRpdGxlKCkge1xuICBjb25zdCB0aXRsZSA9IGRvbUNyZWF0b3IoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gY29udGVudE9iai50aXRsZTtcbiAgcmV0dXJuIHRpdGxlO1xufVxuXG5mdW5jdGlvbiBtYWtlUmV2aWV3KHRleHQsIHZpZXdlck5hbWUpIHtcbiAgY29uc3QgdmlldyA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuICB2aWV3LmNsYXNzTGlzdC5hZGQoJ3ZpZXcnKTtcblxuICBjb25zdCB2aWV3UGFyYSA9IGRvbUNyZWF0b3IoJ3AnKTtcbiAgdmlld1BhcmEudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIGNvbnN0IHZpZXdlciA9IGRvbUNyZWF0b3IoJ2gyJyk7XG4gIHZpZXdlci50ZXh0Q29udGVudCA9IHZpZXdlck5hbWU7XG5cbiAgdmlldy5hcHBlbmRDaGlsZCh2aWV3UGFyYSk7XG4gIHZpZXcuYXBwZW5kQ2hpbGQodmlld2VyKTtcbiAgcmV0dXJuIHZpZXc7XG59XG5cbmZ1bmN0aW9uIG1ha2VIb3Vyc0RpdigpIHtcbiAgY29uc3Qgd29ya0hvdXJzID0gZG9tQ3JlYXRvcignZGl2Jyk7XG4gIHdvcmtIb3Vycy5jbGFzc0xpc3QuYWRkKCd3b3JrLWhvdXJzJyk7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb21DcmVhdG9yKCdoMicpO1xuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9ICdXb3JrIEhvdXJzJztcblxuICBjb25zdCBzY2hlZHVsZSA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuICBzY2hlZHVsZS5pbm5lckhUTUwgPSBgXG4gIDxwPjxzcGFuPk1vbmRheTo8L3NwYW4+ICR7Y29udGVudE9iai5ob3Vycy5tb25kYXl9PC9wPlxuICA8cD48c3Bhbj5TdW5kYXk6PC9zcGFuPiAke2NvbnRlbnRPYmouaG91cnMuc3VuZGF5fTwvcD5cbiAgPHA+PHNwYW4+VHVlc2RheTo8L3NwYW4+ICR7Y29udGVudE9iai5ob3Vycy50dWVzZGF5fTwvcD5cbiAgPHA+PHNwYW4+V2VkbmVzZGF5Ojwvc3Bhbj4gJHtjb250ZW50T2JqLmhvdXJzLndlZG5lc2RheX08L3A+XG4gIDxwPjxzcGFuPlRodXJzZGF5Ojwvc3Bhbj4gJHtjb250ZW50T2JqLmhvdXJzLnRodXJzZGF5fTwvcD5cbiAgPHA+PHNwYW4+RnJpZGF5Ojwvc3Bhbj4gJHtjb250ZW50T2JqLmhvdXJzLmZyaWRheX08L3A+XG4gIDxwPjxzcGFuPlNhdHVyZGF5Ojwvc3Bhbj4gJHtjb250ZW50T2JqLmhvdXJzLnNhdHVyZGF5fTwvcD5cbiAgYDtcblxuICB3b3JrSG91cnMuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuICB3b3JrSG91cnMuYXBwZW5kQ2hpbGQoc2NoZWR1bGUpO1xuXG4gIHJldHVybiB3b3JrSG91cnM7XG59XG5cbmZ1bmN0aW9uIG1ha2VMb2NhdGlvbkRpdigpIHtcbiAgY29uc3QgbG9jYXRpb25EaXYgPSBkb21DcmVhdG9yKCdkaXYnKTtcbiAgbG9jYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcblxuICBjb25zdCBzdWJ0aXRsZSA9IGRvbUNyZWF0b3IoJ2gyJyk7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gY29udGVudE9iai5sb2NhdGlvbi5zdWJ0aXRsZTtcblxuICBjb25zdCBhZGRyZXNzID0gZG9tQ3JlYXRvcigncCcpO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gY29udGVudE9iai5sb2NhdGlvbi5hZGRyZXNzO1xuXG4gIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcbiAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgcmV0dXJuIGxvY2F0aW9uRGl2O1xufVxuXG5jb25zdCByZXZpZXdlck9uZSA9IG1ha2VSZXZpZXcoXG4gIGNvbnRlbnRPYmoucmV2aWV3ZXJPbmUudGV4dCxcbiAgY29udGVudE9iai5yZXZpZXdlck9uZS5yZXZpZXdlclxuKTtcblxuY29uc3QgcmV2aWV3ZXJUd28gPSBtYWtlUmV2aWV3KFxuICBjb250ZW50T2JqLnJldmlld2VyVHdvLnRleHQsXG4gIGNvbnRlbnRPYmoucmV2aWV3ZXJUd28ucmV2aWV3ZXJcbik7XG5cbmNvbnN0IGhvbWVDb21wb25lbnRzID0gW1xuICBtYWtlVGl0bGUoKSxcbiAgcmV2aWV3ZXJPbmUsXG4gIHJldmlld2VyVHdvLFxuICBtYWtlSG91cnNEaXYoKSxcbiAgbWFrZUxvY2F0aW9uRGl2KCksXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBob21lQ29tcG9uZW50cztcbiIsIi8vIEhvbWUgcGFnZVxuY29uc3QgY29udGVudE9iaiA9IHtcbiAgdGl0bGU6ICdLaGFpbWEgUmVzdGF1cmFudCcsXG4gIHJldmlld2VyT25lOiB7XG4gICAgdGV4dDogJ1wiS2hhaW1hIFJlc3RhdXJhbnQgaXMgdGhlIHBhbGNlIGluIG1pZGRsZSBzYWhhcmEgd2l0aCBBbGdlcmlhbiB0cmFkaXRpb25hbCBmb29kLiBGb29kIGlzIGEgcGVyZmVjdCBibGVuZCBvZiBmbGF2b3JzIGFuZCBzcGljZXMgdGhhdCB3aWxsIGxlYXZlIHlvdXIgdGFzdGUgYnVkcyB0aW5nbGluZy4gVGhlIGRpc2hlcyBhcmUgaGVhcnR5LCBjb21mb3J0aW5nIGFuZCBwZXJmZWN0IGZvciBzaGFyaW5nIHdpdGggZnJpZW5kcyBhbmQgZmFtaWx5LiBJZiB5b3UgZXZlciBoYXZlIGEgY2hhbmNlIHRvIHRyeSB0aGlzIGN1aXNpbmUsIEkgaGlnaGx5IHJlY29tbWVuZCBpdC5cIiAnLFxuICAgIHJldmlld2VyOiAnSm9obiBLZW5uZWR5JyxcbiAgfSxcbiAgcmV2aWV3ZXJUd286IHtcbiAgICB0ZXh0OiAnXCJLaGFpbWEgaW4gdGhlIEFsZ2VyaWFuIFNhaGFyYSBpcyBhIHVuaXF1ZSBhbmQgdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZS4gVGhlIHRyYWRpdGlvbmFsIEJlcmJlciBjdWlzaW5lIGlzIGRlbGljaW91cyBhbmQgYXV0aGVudGljLCBhbmQgdGhlIGRlc2VydCBzZXR0aW5nIGlzIGJyZWF0aHRha2luZy4gSGlnaGx5IHJlY29tbWVuZCBhIHZpc2l0IHRvIEtoYWltYSBmb3IgYSB0cnVseSBvbmUtb2YtYS1raW5kIG1lYWwuXCInLFxuICAgIHJldmlld2VyOiAnTW9oYW1tZWQgRWwgS2VuZHknLFxuICB9LFxuICBob3Vyczoge1xuICAgIHN1YnRpdGxlOiAnV29yayBIb3VycycsXG4gICAgc3VuZGF5OiAnOGFtLThwbScsXG4gICAgbW9uZGF5OiAnOGFtLThhbScsXG4gICAgdHVlc2RheTogJzhhbSAtIDdwbScsXG4gICAgd2VkbmVzZGF5OiAnN2FtIC0gNnBtJyxcbiAgICB0aHVyc2RheTogJzhhbSAtIDEwcG0nLFxuICAgIGZyaWRheTogJzhhbSAtIDEwcG0nLFxuICAgIHNhdHVyZGF5OiAnOGFtIC0gMTBwbScsXG4gIH0sXG4gIGxvY2F0aW9uOiB7XG4gICAgc3VidGl0bGU6ICdMb2NhdGlvbicsXG4gICAgYWRkcmVzczogJ1Rhc3NpbGksIEFsZ2VyaWEnLFxuICB9LFxufTtcblxuLy8gTWVudSBwYWdlXG5cbmNvbnN0IG1haW5EaXNoZXMgPSB7XG4gIGNhdGVnb3J5OiAnTWFpbiBEaXNoZXMnLFxuICBjb3VzY291czoge1xuICAgIG5hbWU6ICdDb3VzY291cycsXG4gICAgZGVzYzogJ0NvdXNjb3VzIGlzIGEgdHJhZGl0aW9uYWwgTm9ydGggQWZyaWNhbiBkaXNoIG1hZGUgZnJvbSBzbWFsbCBzdGVhbWVkIGJhbGxzIG9mIHNlbW9saW5hIHdoZWF0LiBJdCBpcyBvZnRlbiBzZXJ2ZWQgYXMgYSBzaWRlIGRpc2ggd2l0aCBtZWF0IG9yIHZlZ2V0YWJsZXMgYW5kIGNhbiBiZSBtYWRlIHN3ZWV0IG9yIHNhdm9yeS4gSXQgaXMgYSBzdGFwbGUgaW4gQWxnZXJpYW4gY3Vpc2luZSBhbmQgaXMgZW5qb3llZCBieSBsb2NhbHMgYW5kIHZpc2l0b3JzIGFsaWtlLicsXG4gICAgcHJpY2U6ICczJCcsXG4gICAgaW1nU3JjOiAnLi4vc3JjL2NvdXNjb3VzLmpwZycsIC8vIEltYWdlIGJ5IGNoZWZtb3VoY2luZSBvbiBwaXhhYmF5LCBodHRwczovL3BpeGFiYXkuY29tL3Bob3Rvcy9jb3VzY291cy12ZWdldGFibGUtbWVhdC1yZWNpcGUtMzQ0MDA0Mi9cbiAgfSxcbiAgenZpdGk6IHtcbiAgICBuYW1lOiAnWnZpdGknLFxuICAgIGRlc2M6ICdadml0aSBpcyBhIHRyYWRpdGlvbmFsIEFsZ2VyaWFuIGRpc2ggY29uc2lzdGluZyBvZiBzdGV3ZWQgbGFtYiBvciBiZWVmLCBtaXhlZCB3aXRoIGNoaWNrcGVhcyBhbmQgYSB2YXJpZXR5IG9mIHNwaWNlcy4gSXQgaXMgb2Z0ZW4gc2VydmVkIHdpdGggY291c2NvdXMgYW5kIGlzIGEgaGVhcnR5LCBjb21mb3J0aW5nIG1lYWwuIEl0IGlzIGEgc3RhcGxlIG9mIEFsZ2VyaWFuIGN1aXNpbmUgYW5kIGlzIGVuam95ZWQgYnkgbG9jYWxzIGFuZCB2aXNpdG9ycyBhbGlrZS4nLFxuICAgIHByaWNlOiAnNCQnLFxuICAgIGltZ1NyYzogJy4uL3NyYy96dml0aTIuanBlZycsIC8vIEltYWdlIGJ5IERqYXphaXIgQ29va2luZyBvbiB0d2VldGVyIHBvc3QsIGh0dHBzOi8vdHdpdHRlci5jb20vRGphemFpckNvb2tpbmcvc3RhdHVzLzE1MTk3Njc0Mjc2ODQ0MzgwMTcvcGhvdG8vMVxuICB9LFxuICBjaGFraGNob2toYToge1xuICAgIG5hbWU6ICdDaGFraGNob2toYScsXG4gICAgZGVzYzogJ0NoYWtoY2hva2hhIGlzIGEgdHJhZGl0aW9uYWwgQWxnZXJpYW4gZGlzaCBtYWRlIG9mIGNvb2tlZCBhbmQgbWFzaGVkIHRvbWF0b2VzIGFuZCBiZWxsIHBlcHBlcnMsIHR5cGljYWxseSBzZXJ2ZWQgd2l0aCBicmVhZC4gSXQgaXMgYSBoZWFydHkgYW5kIGZsYXZvcmZ1bCBkaXNoLCBhbmQgaXMgb2Z0ZW4gc2VydmVkIGFzIGEgc2lkZSBkaXNoIG9yIGFzIGEgdG9wcGluZyBmb3IgbWVhdCBkaXNoZXMuIEl0IGlzIGEgc3RhcGxlIGluIEFsZ2VyaWFuIGN1aXNpbmUgYW5kIGlzIGVuam95ZWQgYnkgbG9jYWxzIGFuZCB2aXNpdG9ycyBhbGlrZS4nLFxuICAgIHByaWNlOiAnMyQnLFxuICAgIGltZ1NyYzogJy4uL3NyYy9jaGFraGNob2thLmpwZWcnLCAvLyBJbWFnZSBmcm9tIGh0dHBzOi8vd3d3Lm15ZXhjZWxsZW50ZGVndXN0YXRpb25zLmNvbS9hbGdlcmlhbi10aGluLWZsYXRicmVhZC13aXRoLW1lYXQtc2F1Y2UtY2hha2hjaG91a2hhL1xuICB9LFxufTtcblxuY29uc3QgZW50cmVlcyA9IHtcbiAgY2F0ZWdvcnk6ICdFbnRyZWVzIGFuZCBEZXNzZXJ0IERpc2hlcycsXG4gIHRlYToge1xuICAgIG5hbWU6ICdTYWhhcmEgVGVhJyxcbiAgICBkZXNjOiAnQWxnZXJpYW4gU2FoYXJhIHRlYSBpcyBhIHR5cGUgb2YgYmxhY2sgdGVhIHRoYXQgaXMgZ3Jvd24gYW5kIHByb2R1Y2VkIGluIHRoZSBTYWhhcmEgZGVzZXJ0IHJlZ2lvbiBvZiBBbGdlcmlhLiBJdCBpcyBrbm93biBmb3IgaXRzIHN0cm9uZywgYm9sZCBmbGF2b3IgYW5kIGlzIG9mdGVuIHNlcnZlZCB3aXRoIG1pbnQgb3Igb3RoZXIgaGVyYnMgdG8gZW5oYW5jZSB0aGUgdGFzdGUuIEl0IGlzIGNvbnNpZGVyZWQgYSB0cmFkaXRpb25hbCBkcmluayBpbiBBbGdlcmlhIGFuZCBpcyBlbmpveWVkIGJ5IG1hbnkgbG9jYWxzIGFuZCB0b3VyaXN0cyBhbGlrZS4nLFxuICAgIHByaWNlOiAnMC41JCcsXG4gICAgaW1nU3JjOiAnLi4vc3JjL3NhaGFyYS10ZWEuanBnJywgLy8gSW1hZ2UgYnkgcGlya2VyY2hyaSBvbiBwaXhhYmF5LCBodHRwczovL3BpeGFiYXkuY29tL2ltYWdlcy9pZC0yNDMxNDU5L1xuICB9LFxuICBiYWtsYXZhOiB7XG4gICAgbmFtZTogJ0Jha2xhdmEnLFxuICAgIGRlc2M6ICdBbGdlcmlhbiBiYWtsYXZhIGlzIGEgc3dlZXQgcGFzdHJ5IG1hZGUgZnJvbSBsYXllcnMgb2YgcGh5bGxvIGRvdWdoIGZpbGxlZCB3aXRoIGNob3BwZWQgbnV0cywgdHlwaWNhbGx5IGFsbW9uZHMgb3IgcGlzdGFjaGlvcy4gSXQgaXMgc3dlZXRlbmVkIHdpdGggaG9uZXkgb3Igc3lydXAgYW5kIGlzIG9mdGVuIGZsYXZvcmVkIHdpdGggY2lubmFtb24gb3Igb3JhbmdlIGJsb3Nzb20gd2F0ZXIuIEl0IGlzIGEgcG9wdWxhciBkZXNzZXJ0IGluIEFsZ2VyaWEgYW5kIGNhbiBiZSBmb3VuZCBpbiBtYW55IGJha2VyaWVzIGFuZCByZXN0YXVyYW50cyB0aHJvdWdob3V0IHRoZSBjb3VudHJ5LicsXG4gICAgcHJpY2U6ICcyJCcsXG4gICAgaW1nU3JjOiAnLi4vc3JjL2Jha2xhdmEuanBnJywgLy8gSW1hZ2UgYnkgZmFicmlrYXNpbWYgb24gRnJlZXBpaywgaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vYXV0aG9yL2ZhYnJpa2FzaW1mXG4gIH0sXG59O1xuXG4vLyBDb250YWN0IHBhZ2VcblxuLy8gY2FtZWwgdmVjdG9ycyBmcm9tIEZyZWVwaWsgYnkgQnJnZngsIGh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2F1dGhvci9icmdmeFxuY29uc3QgY29udGFjdHMgPSB7XG4gIG1hbWFDYW1lbDoge1xuICAgIG5hbWU6ICdNYW1hIENhbWVsJyxcbiAgICBqb2I6ICdDaGVmJyxcbiAgICBwaG9uZTogJzU0OC01NDUtNTI0JyxcbiAgICBlbWFpbDogJ21hbWFDYW1lbEFnQGZha2UuY29tJyxcbiAgICBpbWc6ICcuLi9zcmMvbWFtYS1jYW1lbC5qcGcnLFxuICB9LFxuICBwYXBDYW1lbDoge1xuICAgIG5hbWU6ICdQYXBhIENhbWVsJyxcbiAgICBqb2I6ICdNYW5hZ2VyJyxcbiAgICBwaG9uZTogJzQ0Mi01NDQtMTExJyxcbiAgICBlbWFpbDogJ3BhcGFDYW1lbEFnQGZha2UuY29tJyxcbiAgICBpbWc6ICcuLi9zcmMvcGFwYS1jYW1lbC5qcGcnLFxuICB9LFxuICBiYWJ5Q2FtZWw6IHtcbiAgICBuYW1lOiAnQmFieSBDYW1lbCcsXG4gICAgam9iOiAnV2FpdGVyJyxcbiAgICBwaG9uZTogJzU0Mi00NDQtMjAwJyxcbiAgICBlbWFpbDogJ2JhYnlDYW1lbEFnQGZha2UuY29tJyxcbiAgICBpbWc6ICcuLi9zcmMvYmFieS1jYW1lbC5qcGcnLFxuICB9LFxufTtcblxuZXhwb3J0IHsgY29udGVudE9iaiwgbWFpbkRpc2hlcywgZW50cmVlcywgY29udGFjdHMgfTtcbiIsImltcG9ydCB7IGRvbVNlbGVjdG9yLCBkb21DcmVhdG9yIH0gZnJvbSAnLi9kb20tbWFuaXB1bGF0aW9uJztcbmltcG9ydCBob21lQ29tcG9uZW50cyBmcm9tICcuL2hvbWUnO1xuXG5mdW5jdGlvbiBtYWtlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb21DcmVhdG9yKCdoZWFkZXInKTtcbiAgY29uc3QgbmF2ID0gZG9tQ3JlYXRvcignbmF2Jyk7XG4gIGNvbnN0IHVsID0gZG9tQ3JlYXRvcigndWwnKTtcblxuICBjb25zdCBob21lSXRlbSA9IGRvbUNyZWF0b3IoJ2xpJyk7XG4gIGhvbWVJdGVtLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuXG4gIGNvbnN0IG1lbnVJdGVtID0gZG9tQ3JlYXRvcignbGknKTtcbiAgbWVudUl0ZW0udGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgY29uc3QgY29udGFjdEl0ZW0gPSBkb21DcmVhdG9yKCdsaScpO1xuICBjb250YWN0SXRlbS50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgbmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgdWwuYXBwZW5kQ2hpbGQoaG9tZUl0ZW0pO1xuICB1bC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gIHVsLmFwcGVuZENoaWxkKGNvbnRhY3RJdGVtKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU1haW4oYXJyKSB7XG4gIGNvbnN0IG1haW4gPSBkb21DcmVhdG9yKCdtYWluJyk7XG4gIGFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIG1ha2VGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvbUNyZWF0b3IoJ2Zvb3RlcicpO1xuICBjb25zdCBsaW5rID0gZG9tQ3JlYXRvcignYScpO1xuICBsaW5rLnRleHRDb250ZW50ID0gJ0tyaW1vdGhpYXppbmUnO1xuICBsaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2thcmltLXNhb3UnO1xuICBsaW5rLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgZm9vdGVyLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgYnkgJztcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGxpbmspO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvbVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZU1haW4oaG9tZUNvbXBvbmVudHMpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWtlRm9vdGVyKCkpO1xufVxuIiwiaW1wb3J0IHsgZG9tQ3JlYXRvciB9IGZyb20gJy4vZG9tLW1hbmlwdWxhdGlvbic7XG5pbXBvcnQgeyBtYWluRGlzaGVzLCBlbnRyZWVzIH0gZnJvbSAnLi9pbmZvJztcblxuZnVuY3Rpb24gbWVudVRpdGxlKCkge1xuICBjb25zdCBtZW51ID0gZG9tQ3JlYXRvcignaDInKTtcbiAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbWVudS5pZCA9ICdtZW51LXRpdGxlJztcbiAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIG1ha2VDYXRlZ29yeShjYXRlZ29yeSkge1xuICBjb25zdCBtZW51Q2F0ZWdvcnkgPSBkb21DcmVhdG9yKCdoMycpO1xuICBtZW51Q2F0ZWdvcnkudGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcbiAgbWVudUNhdGVnb3J5LmlkID0gJ2NhdGVnb3J5JztcbiAgcmV0dXJuIG1lbnVDYXRlZ29yeTtcbn1cblxuZnVuY3Rpb24gZm9vZFR5cGUobmFtZSwgZGVzY3JpcHRpb24sIHByaWNlRm9vZCwgaW1nU3JjKSB7XG4gIGNvbnN0IGZvb2RDYXJkID0gZG9tQ3JlYXRvcignZGl2Jyk7XG4gIGZvb2RDYXJkLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtY2FyZCcpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9tQ3JlYXRvcignaDQnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gIGNvbnN0IGRlc2MgPSBkb21DcmVhdG9yKCdwJyk7XG4gIGRlc2MuY2xhc3NMaXN0LmFkZCgnZm9vZC1kZXNjJyk7XG4gIGRlc2MudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICBjb25zdCBwcmljZSA9IGRvbUNyZWF0b3IoJ3AnKTtcbiAgcHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcbiAgcHJpY2UudGV4dENvbnRlbnQgPSBwcmljZUZvb2Q7XG5cbiAgY29uc3QgZm9vZEltZyA9IGRvbUNyZWF0b3IoJ2ltZycpO1xuICBmb29kSW1nLnNyYyA9IGltZ1NyYztcbiAgZm9vZEltZy5hbHQgPSAnaW1nJztcblxuICBmb29kQ2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGZvb2RDYXJkLmFwcGVuZENoaWxkKGRlc2MpO1xuICBmb29kQ2FyZC5hcHBlbmRDaGlsZChwcmljZSk7XG4gIGZvb2RDYXJkLmFwcGVuZENoaWxkKGZvb2RJbWcpO1xuXG4gIHJldHVybiBmb29kQ2FyZDtcbn1cblxuY29uc3QgY291c2NvdXNEaXNoID0gZm9vZFR5cGUoXG4gIG1haW5EaXNoZXMuY291c2NvdXMubmFtZSxcbiAgbWFpbkRpc2hlcy5jb3VzY291cy5kZXNjLFxuICBtYWluRGlzaGVzLmNvdXNjb3VzLnByaWNlLFxuICBtYWluRGlzaGVzLmNvdXNjb3VzLmltZ1NyY1xuKTtcblxuY29uc3QgenZpdGlEaXNoID0gZm9vZFR5cGUoXG4gIG1haW5EaXNoZXMuenZpdGkubmFtZSxcbiAgbWFpbkRpc2hlcy56dml0aS5kZXNjLFxuICBtYWluRGlzaGVzLnp2aXRpLnByaWNlLFxuICBtYWluRGlzaGVzLnp2aXRpLmltZ1NyY1xuKTtcblxuY29uc3QgY2hha2hjaG9raGFEaXNoID0gZm9vZFR5cGUoXG4gIG1haW5EaXNoZXMuY2hha2hjaG9raGEubmFtZSxcbiAgbWFpbkRpc2hlcy5jaGFraGNob2toYS5kZXNjLFxuICBtYWluRGlzaGVzLmNoYWtoY2hva2hhLnByaWNlLFxuICBtYWluRGlzaGVzLmNoYWtoY2hva2hhLmltZ1NyY1xuKTtcblxuY29uc3Qgc2FoYXJhVGVhID0gZm9vZFR5cGUoXG4gIGVudHJlZXMudGVhLm5hbWUsXG4gIGVudHJlZXMudGVhLmRlc2MsXG4gIGVudHJlZXMudGVhLnByaWNlLFxuICBlbnRyZWVzLnRlYS5pbWdTcmNcbik7XG5cbmNvbnN0IGJha2xhdmEgPSBmb29kVHlwZShcbiAgZW50cmVlcy5iYWtsYXZhLm5hbWUsXG4gIGVudHJlZXMuYmFrbGF2YS5kZXNjLFxuICBlbnRyZWVzLmJha2xhdmEucHJpY2UsXG4gIGVudHJlZXMuYmFrbGF2YS5pbWdTcmNcbik7XG5cbmNvbnN0IG1haW5EaXNoZXNTdWJ0aXRsZSA9IG1ha2VDYXRlZ29yeShtYWluRGlzaGVzLmNhdGVnb3J5KTtcbmNvbnN0IGVudHJlZXNTdWJ0aXRsZSA9IG1ha2VDYXRlZ29yeShlbnRyZWVzLmNhdGVnb3J5KTtcblxuY29uc3QgbWVudUNvbXBvbmVudHMgPSBbXG4gIG1lbnVUaXRsZSgpLFxuICBtYWluRGlzaGVzU3VidGl0bGUsXG4gIGNvdXNjb3VzRGlzaCxcbiAgenZpdGlEaXNoLFxuICBjaGFraGNob2toYURpc2gsXG4gIGVudHJlZXNTdWJ0aXRsZSxcbiAgc2FoYXJhVGVhLFxuICBiYWtsYXZhLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudUNvbXBvbmVudHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBsb2FkUGFnZSwgbWFrZU1haW4gfSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgeyBkb21TZWxlY3RvckFsbCwgZG9tU2VsZWN0b3IgfSBmcm9tICcuL2RvbS1tYW5pcHVsYXRpb24nO1xuaW1wb3J0IGhvbWVDb21wb25lbnRzIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgbWVudUNvbXBvbmVudHMgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjb250YWN0Q29tcG9uZW50cyBmcm9tICcuL2NvbnRhY3RzJztcblxuLy8gc2V0IHBhZ2UgYWZ0ZXIgZmlyc3QgbG9hZCBhdCBIb21lIHBhZ2VcbmxldCBwYWdlID0gJ0hvbWUnO1xuXG5mdW5jdGlvbiBzd2l0Y2hQYWdlKFBhZ2UpIHtcbiAgbGV0IG1haW4gPSBkb21TZWxlY3RvcignI2NvbnRlbnQgbWFpbicpO1xuICBjb25zdCBjb250ZW50ID0gZG9tU2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnN0IGZvb3RlciA9IGRvbVNlbGVjdG9yKCdmb290ZXInKTtcbiAgaWYgKG1haW4gIT09IG51bGwpIHtcbiAgICBpZiAoUGFnZSA9PT0gJ0hvbWUnKSB7XG4gICAgICBtYWluLnJlbW92ZSgpO1xuICAgICAgbWFpbiA9IG1ha2VNYWluKGhvbWVDb21wb25lbnRzKTtcbiAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKG1haW4sIGZvb3Rlcik7XG4gICAgfVxuICAgIGlmIChQYWdlID09PSAnTWVudScpIHtcbiAgICAgIG1haW4ucmVtb3ZlKCk7XG4gICAgICBtYWluID0gbWFrZU1haW4obWVudUNvbXBvbmVudHMpO1xuICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobWFpbiwgZm9vdGVyKTtcbiAgICB9XG4gICAgaWYgKFBhZ2UgPT09ICdDb250YWN0Jykge1xuICAgICAgbWFpbi5yZW1vdmUoKTtcbiAgICAgIG1haW4gPSBtYWtlTWFpbihjb250YWN0Q29tcG9uZW50cyk7XG4gICAgICBjb250ZW50Lmluc2VydEJlZm9yZShtYWluLCBmb290ZXIpO1xuICAgIH1cbiAgfVxufVxuXG5sb2FkUGFnZSgpO1xuXG5jb25zdCBuYXZCdG5zID0gQXJyYXkuZnJvbShkb21TZWxlY3RvckFsbCgnbmF2IHVsIGxpJykpO1xubmF2QnRucy5mb3JFYWNoKChuYXZCdG4pID0+IHtcbiAgbmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwYWdlID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgc3dpdGNoUGFnZShwYWdlKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==