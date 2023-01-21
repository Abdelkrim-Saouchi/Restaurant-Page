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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --sand-color: #bd9b16;\n  --moon-color: #ffffff;\n  --night-color: rgb(44 46 57);\n  --green-color: #127533;\n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  min-height: 100vh;\n  padding: 32px 48px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-attachment: fixed;\n  color: var(--sand-color);\n  font-size: large;\n  display: grid;\n  grid-template-rows: min-content 1fr min-content;\n  justify-items: center;\n}\n\nnav ul {\n  list-style: none;\n  display: flex;\n  gap: 64px;\n  cursor: pointer;\n}\n\nnav ul li {\n  font-size: 32px;\n}\n\nnav ul li:is(:focus, :hover) {\n  color: var(--green-color);\n}\n\n/* style home page */\n\nmain {\n  margin: 16px 0;\n  width: 800px;\n  background-color: var(--night-color);\n  border-radius: 18px;\n  opacity: 0.5;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n}\n\nmain h1 {\n  align-self: center;\n  font-size: 48px;\n  margin-bottom: 16px;\n  cursor: pointer;\n}\n\nmain h1:hover {\n  color: var(--green-color);\n}\n\n.view,\n.work-hours,\n.location {\n  background-color: var(--moon-color);\n  padding: 12px 28px;\n  border-radius: 16px;\n  color: var(--sand-color);\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n}\n.view p {\n  font-weight: 600;\n}\n\n.view h2 {\n  font-size: 26px;\n  align-self: flex-end;\n}\n\n.work-hours {\n  align-items: center;\n}\n.work-hours h2 {\n  align-self: flex-start;\n}\n\n.work-hours div p span {\n  font-weight: 700;\n}\n\n.location {\n  align-items: center;\n}\n\n.location h2 {\n  align-self: flex-start;\n}\n\n/* style Menu page */\n\n#menu-title,\n#category,\n.food-card {\n  align-self: center;\n  margin-bottom: 16px;\n}\n\n#menu-title {\n  font-size: 42px;\n}\n\n#category {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--moon-color);\n  padding: 10px 16px;\n  border-radius: 16px;\n}\n\n.food-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  background-color: var(--moon-color);\n  padding: 16px;\n  border-radius: 16px;\n}\n\n.food-card h4 {\n  font-size: 26px;\n  font-weight: 700;\n}\n\n.food-card .food-desc {\n  max-width: 70%;\n  font-weight: 600;\n}\n\n.food-card .price {\n  font-weight: 700;\n  font-size: 26px;\n}\n\n.food-card img {\n  max-width: 50%;\n}\n\n/* style Contact page */\n\n#contact-title,\n.contact-card {\n  align-self: center;\n}\n\n#contact-title {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 32px;\n}\n\n.contact-card {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 32px;\n}\n\n.contact-card h3 {\n  margin-bottom: 10px;\n}\n\n.contact-card .contact-info {\n  background-color: var(--moon-color);\n  padding: 12px;\n  border-radius: 12px;\n}\n\n.contact-card img {\n  max-width: 20%;\n  border-radius: 12px;\n  overflow: hidden;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,yDAAiC;EACjC,sBAAsB;EACtB,4BAA4B;EAC5B,wBAAwB;EACxB,gBAAgB;EAChB,aAAa;EACb,+CAA+C;EAC/C,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,oBAAoB;;AAEpB;EACE,cAAc;EACd,YAAY;EACZ,oCAAoC;EACpC,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;;EAGE,mCAAmC;EACnC,kBAAkB;EAClB,mBAAmB;EACnB,wBAAwB;EACxB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA,oBAAoB;;AAEpB;;;EAGE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,wBAAwB;EACxB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,mCAAmC;EACnC,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA,uBAAuB;;AAEvB;;EAEE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;EACnC,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,gBAAgB;AAClB","sourcesContent":[":root {\n  --sand-color: #bd9b16;\n  --moon-color: #ffffff;\n  --night-color: rgb(44 46 57);\n  --green-color: #127533;\n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  min-height: 100vh;\n  padding: 32px 48px;\n  background-image: url('./bg.jpg');\n  background-size: cover;\n  background-attachment: fixed;\n  color: var(--sand-color);\n  font-size: large;\n  display: grid;\n  grid-template-rows: min-content 1fr min-content;\n  justify-items: center;\n}\n\nnav ul {\n  list-style: none;\n  display: flex;\n  gap: 64px;\n  cursor: pointer;\n}\n\nnav ul li {\n  font-size: 32px;\n}\n\nnav ul li:is(:focus, :hover) {\n  color: var(--green-color);\n}\n\n/* style home page */\n\nmain {\n  margin: 16px 0;\n  width: 800px;\n  background-color: var(--night-color);\n  border-radius: 18px;\n  opacity: 0.5;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n}\n\nmain h1 {\n  align-self: center;\n  font-size: 48px;\n  margin-bottom: 16px;\n  cursor: pointer;\n}\n\nmain h1:hover {\n  color: var(--green-color);\n}\n\n.view,\n.work-hours,\n.location {\n  background-color: var(--moon-color);\n  padding: 12px 28px;\n  border-radius: 16px;\n  color: var(--sand-color);\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n}\n.view p {\n  font-weight: 600;\n}\n\n.view h2 {\n  font-size: 26px;\n  align-self: flex-end;\n}\n\n.work-hours {\n  align-items: center;\n}\n.work-hours h2 {\n  align-self: flex-start;\n}\n\n.work-hours div p span {\n  font-weight: 700;\n}\n\n.location {\n  align-items: center;\n}\n\n.location h2 {\n  align-self: flex-start;\n}\n\n/* style Menu page */\n\n#menu-title,\n#category,\n.food-card {\n  align-self: center;\n  margin-bottom: 16px;\n}\n\n#menu-title {\n  font-size: 42px;\n}\n\n#category {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--moon-color);\n  padding: 10px 16px;\n  border-radius: 16px;\n}\n\n.food-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  background-color: var(--moon-color);\n  padding: 16px;\n  border-radius: 16px;\n}\n\n.food-card h4 {\n  font-size: 26px;\n  font-weight: 700;\n}\n\n.food-card .food-desc {\n  max-width: 70%;\n  font-weight: 600;\n}\n\n.food-card .price {\n  font-weight: 700;\n  font-size: 26px;\n}\n\n.food-card img {\n  max-width: 50%;\n}\n\n/* style Contact page */\n\n#contact-title,\n.contact-card {\n  align-self: center;\n}\n\n#contact-title {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 32px;\n}\n\n.contact-card {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 32px;\n}\n\n.contact-card h3 {\n  margin-bottom: 10px;\n}\n\n.contact-card .contact-info {\n  background-color: var(--moon-color);\n  padding: 12px;\n  border-radius: 12px;\n}\n\n.contact-card img {\n  max-width: 20%;\n  border-radius: 12px;\n  overflow: hidden;\n}\n"],"sourceRoot":""}]);
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
  contacts.mamaCamel.name,
  contacts.mamaCamel.job,
  contacts.mamaCamel.phone,
  contacts.mamaCamel.email,
  contacts.mamaCamel.img
);

const papa = makeContactCard(
  contacts.papCamel.name,
  contacts.papCamel.job,
  contacts.papCamel.phone,
  contacts.papCamel.email,
  contacts.papCamel.img
);

const baby = makeContactCard(
  contacts.babyCamel.name,
  contacts.babyCamel.job,
  contacts.babyCamel.phone,
  contacts.babyCamel.email,
  contacts.babyCamel.img
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

// eslint-disable-next-line import/prefer-default-export
function makeTitle() {
  const title = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('h1');
  title.textContent = contentObj.title;
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
  <p><span>Monday:</span> ${contentObj.hours.monday}</p>
  <p><span>Sunday:</span> ${contentObj.hours.sunday}</p>
  <p><span>Tuesday:</span> ${contentObj.hours.tuesday}</p>
  <p><span>Wednesday:</span> ${contentObj.hours.wednesday}</p>
  <p><span>Thursday:</span> ${contentObj.hours.thursday}</p>
  <p><span>Friday:</span> ${contentObj.hours.friday}</p>
  <p><span>Saturday:</span> ${contentObj.hours.saturday}</p>
  `;

  workHours.appendChild(subtitle);
  workHours.appendChild(schedule);

  return workHours;
}

function makeLocationDiv() {
  const locationDiv = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('div');
  locationDiv.classList.add('location');

  const subtitle = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('h2');
  subtitle.textContent = contentObj.location.subtitle;

  const address = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domCreator)('p');
  address.textContent = contentObj.location.address;

  locationDiv.appendChild(subtitle);
  locationDiv.appendChild(address);

  return locationDiv;
}

const reviewerOne = makeReview(
  contentObj.reviewerOne.text,
  contentObj.reviewerOne.reviewer
);

const reviewerTwo = makeReview(
  contentObj.reviewerTwo.text,
  contentObj.reviewerTwo.reviewer
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

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ "./src/dom-manipulation.js");
/* harmony import */ var _structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structure */ "./src/structure.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");




function loadPage() {
  const content = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domSelector)('#content');
  content.appendChild((0,_structure__WEBPACK_IMPORTED_MODULE_1__.makeHeader)());
  content.appendChild((0,_structure__WEBPACK_IMPORTED_MODULE_1__.makeMain)(_home__WEBPACK_IMPORTED_MODULE_2__["default"]));
  content.appendChild((0,_structure__WEBPACK_IMPORTED_MODULE_1__.makeFooter)());
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


const mainDishes = {
  category: 'Main Dishes',
  couscous: {
    name: 'Couscous',
    desc: 'Couscous is a traditional North African dish made from small steamed balls of semolina wheat. It is often served as a side dish with meat or vegetables and can be made sweet or savory. It is a staple in Algerian cuisine and is enjoyed by locals and visitors alike.',
    price: '3$',
    imgSrc: '../src/couscous.jpg',
  },
  zviti: {
    name: 'Zviti',
    desc: 'Zviti is a traditional Algerian dish consisting of stewed lamb or beef, mixed with chickpeas and a variety of spices. It is often served with couscous and is a hearty, comforting meal. It is a staple of Algerian cuisine and is enjoyed by locals and visitors alike.',
    price: '4$',
    imgSrc: '../src/zviti2.jpeg',
  },
  chakhchokha: {
    name: 'Chakhchokha',
    desc: 'Chakhchokha is a traditional Algerian dish made of cooked and mashed tomatoes and bell peppers, typically served with bread. It is a hearty and flavorful dish, and is often served as a side dish or as a topping for meat dishes. It is a staple in Algerian cuisine and is enjoyed by locals and visitors alike.',
    price: '3$',
    imgSrc: '../src/chakhchoka.jpeg',
  },
};

const entrees = {
  category: 'Entrees and Dessert Dishes',
  tea: {
    name: 'Sahara Tea',
    desc: 'Algerian Sahara tea is a type of black tea that is grown and produced in the Sahara desert region of Algeria. It is known for its strong, bold flavor and is often served with mint or other herbs to enhance the taste. It is considered a traditional drink in Algeria and is enjoyed by many locals and tourists alike.',
    price: '0.5$',
    imgSrc: '../src/sahara-tea.jpg',
  },
  baklava: {
    name: 'Baklava',
    desc: 'Algerian baklava is a sweet pastry made from layers of phyllo dough filled with chopped nuts, typically almonds or pistachios. It is sweetened with honey or syrup and is often flavored with cinnamon or orange blossom water. It is a popular dessert in Algeria and can be found in many bakeries and restaurants throughout the country.',
    price: '2$',
    // Image by fabrikasimf on Freepik
    imgSrc: '../src/baklava.jpg',
  },
};

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
  mainDishes.couscous.name,
  mainDishes.couscous.desc,
  mainDishes.couscous.price,
  mainDishes.couscous.imgSrc
);

const zvitiDish = foodType(
  mainDishes.zviti.name,
  mainDishes.zviti.desc,
  mainDishes.zviti.price,
  mainDishes.zviti.imgSrc
);

const chakhchokhaDish = foodType(
  mainDishes.chakhchokha.name,
  mainDishes.chakhchokha.desc,
  mainDishes.chakhchokha.price,
  mainDishes.chakhchokha.imgSrc
);

const saharaTea = foodType(
  entrees.tea.name,
  entrees.tea.desc,
  entrees.tea.price,
  entrees.tea.imgSrc
);

const baklava = foodType(
  entrees.baklava.name,
  entrees.baklava.desc,
  entrees.baklava.price,
  entrees.baklava.imgSrc
);

const mainDishesSubtitle = makeCategory(mainDishes.category);
const entreesSubtitle = makeCategory(entrees.category);

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

/***/ "./src/structure.js":
/*!**************************!*\
  !*** ./src/structure.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeFooter": () => (/* binding */ makeFooter),
/* harmony export */   "makeHeader": () => (/* binding */ makeHeader),
/* harmony export */   "makeMain": () => (/* binding */ makeMain)
/* harmony export */ });
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ "./src/dom-manipulation.js");


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
  footer.textContent = 'Created by Krimothiazine';
  return footer;
}


/***/ }),

/***/ "./src/switch-page.js":
/*!****************************!*\
  !*** ./src/switch-page.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ switchPage)
/* harmony export */ });
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ "./src/dom-manipulation.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./structure */ "./src/structure.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts */ "./src/contacts.js");






function switchPage(page) {
  let main = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domSelector)('#content main');
  const content = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domSelector)('#content');
  const footer = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.domSelector)('footer');
  if (main !== null) {
    if (page === 'Home') {
      main.remove();
      main = (0,_structure__WEBPACK_IMPORTED_MODULE_2__.makeMain)(_home__WEBPACK_IMPORTED_MODULE_1__["default"]);
      content.insertBefore(main, footer);
    }
    if (page === 'Menu') {
      main.remove();
      main = (0,_structure__WEBPACK_IMPORTED_MODULE_2__.makeMain)(_menu__WEBPACK_IMPORTED_MODULE_3__["default"]);
      content.insertBefore(main, footer);
    }
    if (page === 'Contact') {
      main.remove();
      main = (0,_structure__WEBPACK_IMPORTED_MODULE_2__.makeMain)(_contacts__WEBPACK_IMPORTED_MODULE_4__["default"]);
      content.insertBefore(main, footer);
    }
  }
}


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
/* harmony import */ var _switch_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./switch-page */ "./src/switch-page.js");





let page = 'Home';

(0,_load_page__WEBPACK_IMPORTED_MODULE_1__["default"])();
const navBtns = Array.from((0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.domSelectorAll)('nav ul li'));

navBtns.forEach((navBtn) => {
  navBtn.addEventListener('click', (e) => {
    page = e.target.textContent;
    (0,_switch_page__WEBPACK_IMPORTED_MODULE_3__["default"])(page);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O1VDM0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2M7QUFDaUI7QUFDYjs7QUFFdkM7O0FBRUEsc0RBQVE7QUFDUiwyQkFBMkIsaUVBQWM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQVU7QUFDZCxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZG9tLW1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N3aXRjaC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2JnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tc2FuZC1jb2xvcjogI2JkOWIxNjtcXG4gIC0tbW9vbi1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tbmlnaHQtY29sb3I6IHJnYig0NCA0NiA1Nyk7XFxuICAtLWdyZWVuLWNvbG9yOiAjMTI3NTMzO1xcbn1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAzMnB4IDQ4cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBjb2xvcjogdmFyKC0tc2FuZC1jb2xvcik7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyIG1pbi1jb250ZW50O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDY0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm5hdiB1bCBsaSB7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbm5hdiB1bCBsaTppcyg6Zm9jdXMsIDpob3Zlcikge1xcbiAgY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcXG59XFxuXFxuLyogc3R5bGUgaG9tZSBwYWdlICovXFxuXFxubWFpbiB7XFxuICBtYXJnaW46IDE2cHggMDtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5pZ2h0LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwYWRkaW5nOiAzMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbm1haW4gaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbiBoMTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpO1xcbn1cXG5cXG4udmlldyxcXG4ud29yay1ob3VycyxcXG4ubG9jYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9vbi1jb2xvcik7XFxuICBwYWRkaW5nOiAxMnB4IDI4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgY29sb3I6IHZhcigtLXNhbmQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG4udmlldyBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi52aWV3IGgyIHtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ud29yay1ob3VycyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ud29yay1ob3VycyBoMiB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ud29yay1ob3VycyBkaXYgcCBzcGFuIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9jYXRpb24gaDIge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLyogc3R5bGUgTWVudSBwYWdlICovXFxuXFxuI21lbnUtdGl0bGUsXFxuI2NhdGVnb3J5LFxcbi5mb29kLWNhcmQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuI21lbnUtdGl0bGUge1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbn1cXG5cXG4jY2F0ZWdvcnkge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS1tb29uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5mb29kLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9vbi1jb2xvcik7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuXFxuLmZvb2QtY2FyZCBoNCB7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZm9vZC1jYXJkIC5mb29kLWRlc2Mge1xcbiAgbWF4LXdpZHRoOiA3MCU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZm9vZC1jYXJkIC5wcmljZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4uZm9vZC1jYXJkIGltZyB7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuXFxuLyogc3R5bGUgQ29udGFjdCBwYWdlICovXFxuXFxuI2NvbnRhY3QtdGl0bGUsXFxuLmNvbnRhY3QtY2FyZCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNjb250YWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4uY29udGFjdC1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxufVxcblxcbi5jb250YWN0LWNhcmQgaDMge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZCAuY29udGFjdC1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vb24tY29sb3IpO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi5jb250YWN0LWNhcmQgaW1nIHtcXG4gIG1heC13aWR0aDogMjAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5REFBaUM7RUFDakMsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiwrQ0FBK0M7RUFDL0MscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOzs7RUFHRSxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQSxvQkFBb0I7O0FBRXBCOzs7RUFHRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSx1QkFBdUI7O0FBRXZCOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tc2FuZC1jb2xvcjogI2JkOWIxNjtcXG4gIC0tbW9vbi1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tbmlnaHQtY29sb3I6IHJnYig0NCA0NiA1Nyk7XFxuICAtLWdyZWVuLWNvbG9yOiAjMTI3NTMzO1xcbn1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAzMnB4IDQ4cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmcuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGNvbG9yOiB2YXIoLS1zYW5kLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnIgbWluLWNvbnRlbnQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm5hdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2IHVsIGxpIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxubmF2IHVsIGxpOmlzKDpmb2N1cywgOmhvdmVyKSB7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpO1xcbn1cXG5cXG4vKiBzdHlsZSBob21lIHBhZ2UgKi9cXG5cXG5tYWluIHtcXG4gIG1hcmdpbjogMTZweCAwO1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBhZGRpbmc6IDMycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubWFpbiBoMSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWluIGgxOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XFxufVxcblxcbi52aWV3LFxcbi53b3JrLWhvdXJzLFxcbi5sb2NhdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb29uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDEycHggMjhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBjb2xvcjogdmFyKC0tc2FuZC1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcbi52aWV3IHAge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnZpZXcgaDIge1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi53b3JrLWhvdXJzIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi53b3JrLWhvdXJzIGgyIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi53b3JrLWhvdXJzIGRpdiBwIHNwYW4ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbiBoMiB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4vKiBzdHlsZSBNZW51IHBhZ2UgKi9cXG5cXG4jbWVudS10aXRsZSxcXG4jY2F0ZWdvcnksXFxuLmZvb2QtY2FyZCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4jbWVudS10aXRsZSB7XFxuICBmb250LXNpemU6IDQycHg7XFxufVxcblxcbiNjYXRlZ29yeSB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLW1vb24tY29sb3IpO1xcbiAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuXFxuLmZvb2QtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb29uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4uZm9vZC1jYXJkIGg0IHtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5mb29kLWNhcmQgLmZvb2QtZGVzYyB7XFxuICBtYXgtd2lkdGg6IDcwJTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5mb29kLWNhcmQgLnByaWNlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDI2cHg7XFxufVxcblxcbi5mb29kLWNhcmQgaW1nIHtcXG4gIG1heC13aWR0aDogNTAlO1xcbn1cXG5cXG4vKiBzdHlsZSBDb250YWN0IHBhZ2UgKi9cXG5cXG4jY29udGFjdC10aXRsZSxcXG4uY29udGFjdC1jYXJkIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhY3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxufVxcblxcbi5jb250YWN0LWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZCBoMyB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY29udGFjdC1jYXJkIC5jb250YWN0LWluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9vbi1jb2xvcik7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZCBpbWcge1xcbiAgbWF4LXdpZHRoOiAyMCU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGRvbUNyZWF0b3IgfSBmcm9tICcuL2RvbS1tYW5pcHVsYXRpb24nO1xuXG5jb25zdCBjb250YWN0cyA9IHtcbiAgbWFtYUNhbWVsOiB7XG4gICAgbmFtZTogJ01hbWEgQ2FtZWwnLFxuICAgIGpvYjogJ0NoZWYnLFxuICAgIHBob25lOiAnNTQ4LTU0NS01MjQnLFxuICAgIGVtYWlsOiAnbWFtYUNhbWVsQWdAZmFrZS5jb20nLFxuICAgIGltZzogJy4uL3NyYy9tYW1hLWNhbWVsLmpwZycsXG4gIH0sXG4gIHBhcENhbWVsOiB7XG4gICAgbmFtZTogJ1BhcGEgQ2FtZWwnLFxuICAgIGpvYjogJ01hbmFnZXInLFxuICAgIHBob25lOiAnNDQyLTU0NC0xMTEnLFxuICAgIGVtYWlsOiAncGFwYUNhbWVsQWdAZmFrZS5jb20nLFxuICAgIGltZzogJy4uL3NyYy9wYXBhLWNhbWVsLmpwZycsXG4gIH0sXG4gIGJhYnlDYW1lbDoge1xuICAgIG5hbWU6ICdCYWJ5IENhbWVsJyxcbiAgICBqb2I6ICdXYWl0ZXInLFxuICAgIHBob25lOiAnNTQyLTQ0NC0yMDAnLFxuICAgIGVtYWlsOiAnYmFieUNhbWVsQWdAZmFrZS5jb20nLFxuICAgIGltZzogJy4uL3NyYy9iYWJ5LWNhbWVsLmpwZycsXG4gIH0sXG59O1xuXG5mdW5jdGlvbiBtYWtlQ29udGFjdFRpdGxlKCkge1xuICBjb25zdCBjb250YWN0VGl0bGUgPSBkb21DcmVhdG9yKCdoMicpO1xuICBjb250YWN0VGl0bGUuaWQgPSAnY29udGFjdC10aXRsZSc7XG4gIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcbiAgcmV0dXJuIGNvbnRhY3RUaXRsZTtcbn1cblxuZnVuY3Rpb24gbWFrZUNvbnRhY3RDYXJkKG5hbWUsIGpvYiwgcGhvbmUsIGVtYWlsLCBpbWdTcmMpIHtcbiAgY29uc3QgY29udGFjdENhcmQgPSBkb21DcmVhdG9yKCdkaXYnKTtcbiAgY29udGFjdENhcmQuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jYXJkJyk7XG5cbiAgY29uc3QgY29udGFjdEluZm8gPSBkb21DcmVhdG9yKCdkaXYnKTtcbiAgY29udGFjdEluZm8uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvJyk7XG5cbiAgY29uc3QgY29udGFjdE5hbWUgPSBkb21DcmVhdG9yKCdoMycpO1xuICBjb250YWN0TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY29uc3QgY29udGFjdEpvYiA9IGRvbUNyZWF0b3IoJ3AnKTtcbiAgY29udGFjdEpvYi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWpvYicpO1xuICBjb250YWN0Sm9iLnRleHRDb250ZW50ID0gam9iO1xuXG4gIGNvbnN0IGNvbnRhY3RQaG9uZU51bWJlciA9IGRvbUNyZWF0b3IoJ3AnKTtcbiAgY29udGFjdFBob25lTnVtYmVyLmNsYXNzTGlzdC5hZGQoJ3Bob25lLW51bWJlcicpO1xuICBjb250YWN0UGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSBwaG9uZTtcblxuICBjb25zdCBjb250YWN0RW1haWwgPSBkb21DcmVhdG9yKCdwJyk7XG4gIGNvbnRhY3RFbWFpbC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWVtYWlsJyk7XG4gIGNvbnRhY3RFbWFpbC50ZXh0Q29udGVudCA9IGVtYWlsO1xuXG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3ROYW1lKTtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdEpvYik7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RQaG9uZU51bWJlcik7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RFbWFpbCk7XG5cbiAgY29uc3QgY29udGFjdEltZyA9IGRvbUNyZWF0b3IoJ2ltZycpO1xuICBjb250YWN0SW1nLnNyYyA9IGltZ1NyYztcblxuICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XG4gIGNvbnRhY3RDYXJkLmFwcGVuZENoaWxkKGNvbnRhY3RJbWcpO1xuICByZXR1cm4gY29udGFjdENhcmQ7XG59XG5cbmNvbnN0IG1hbWEgPSBtYWtlQ29udGFjdENhcmQoXG4gIGNvbnRhY3RzLm1hbWFDYW1lbC5uYW1lLFxuICBjb250YWN0cy5tYW1hQ2FtZWwuam9iLFxuICBjb250YWN0cy5tYW1hQ2FtZWwucGhvbmUsXG4gIGNvbnRhY3RzLm1hbWFDYW1lbC5lbWFpbCxcbiAgY29udGFjdHMubWFtYUNhbWVsLmltZ1xuKTtcblxuY29uc3QgcGFwYSA9IG1ha2VDb250YWN0Q2FyZChcbiAgY29udGFjdHMucGFwQ2FtZWwubmFtZSxcbiAgY29udGFjdHMucGFwQ2FtZWwuam9iLFxuICBjb250YWN0cy5wYXBDYW1lbC5waG9uZSxcbiAgY29udGFjdHMucGFwQ2FtZWwuZW1haWwsXG4gIGNvbnRhY3RzLnBhcENhbWVsLmltZ1xuKTtcblxuY29uc3QgYmFieSA9IG1ha2VDb250YWN0Q2FyZChcbiAgY29udGFjdHMuYmFieUNhbWVsLm5hbWUsXG4gIGNvbnRhY3RzLmJhYnlDYW1lbC5qb2IsXG4gIGNvbnRhY3RzLmJhYnlDYW1lbC5waG9uZSxcbiAgY29udGFjdHMuYmFieUNhbWVsLmVtYWlsLFxuICBjb250YWN0cy5iYWJ5Q2FtZWwuaW1nXG4pO1xuXG5jb25zdCBjb250YWN0Q29tcG9uZW50cyA9IFttYWtlQ29udGFjdFRpdGxlKCksIG1hbWEsIHBhcGEsIGJhYnldO1xuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0Q29tcG9uZW50cztcbiIsImV4cG9ydCBmdW5jdGlvbiBkb21DcmVhdG9yKGVsZSkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tU2VsZWN0b3IoZWxlKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21TZWxlY3RvckFsbChlbGUpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlKTtcbn1cbiIsImltcG9ydCB7IGRvbUNyZWF0b3IgfSBmcm9tICcuL2RvbS1tYW5pcHVsYXRpb24nO1xuXG5jb25zdCBjb250ZW50T2JqID0ge1xuICB0aXRsZTogJ0toYWltYSBSZXN0YXVyYW50JyxcbiAgcmV2aWV3ZXJPbmU6IHtcbiAgICB0ZXh0OiAnXCJLaGFpbWEgUmVzdGF1cmFudCBpcyB0aGUgcGFsY2UgaW4gbWlkZGxlIHNhaGFyYSB3aXRoIEFsZ2VyaWFuIHRyYWRpdGlvbmFsIGZvb2QuIEZvb2QgaXMgYSBwZXJmZWN0IGJsZW5kIG9mIGZsYXZvcnMgYW5kIHNwaWNlcyB0aGF0IHdpbGwgbGVhdmUgeW91ciB0YXN0ZSBidWRzIHRpbmdsaW5nLiBUaGUgZGlzaGVzIGFyZSBoZWFydHksIGNvbWZvcnRpbmcgYW5kIHBlcmZlY3QgZm9yIHNoYXJpbmcgd2l0aCBmcmllbmRzIGFuZCBmYW1pbHkuIElmIHlvdSBldmVyIGhhdmUgYSBjaGFuY2UgdG8gdHJ5IHRoaXMgY3Vpc2luZSwgSSBoaWdobHkgcmVjb21tZW5kIGl0LlwiICcsXG4gICAgcmV2aWV3ZXI6ICdKb2huIEtlbm5lZHknLFxuICB9LFxuICByZXZpZXdlclR3bzoge1xuICAgIHRleHQ6ICdcIktoYWltYSBpbiB0aGUgQWxnZXJpYW4gU2FoYXJhIGlzIGEgdW5pcXVlIGFuZCB1bmZvcmdldHRhYmxlIGRpbmluZyBleHBlcmllbmNlLiBUaGUgdHJhZGl0aW9uYWwgQmVyYmVyIGN1aXNpbmUgaXMgZGVsaWNpb3VzIGFuZCBhdXRoZW50aWMsIGFuZCB0aGUgZGVzZXJ0IHNldHRpbmcgaXMgYnJlYXRodGFraW5nLiBIaWdobHkgcmVjb21tZW5kIGEgdmlzaXQgdG8gS2hhaW1hIGZvciBhIHRydWx5IG9uZS1vZi1hLWtpbmQgbWVhbC5cIicsXG4gICAgcmV2aWV3ZXI6ICdNb2hhbW1lZCBFbCBLZW5keScsXG4gIH0sXG4gIGhvdXJzOiB7XG4gICAgc3VidGl0bGU6ICdXb3JrIEhvdXJzJyxcbiAgICBzdW5kYXk6ICc4YW0tOHBtJyxcbiAgICBtb25kYXk6ICc4YW0tOGFtJyxcbiAgICB0dWVzZGF5OiAnOGFtIC0gN3BtJyxcbiAgICB3ZWRuZXNkYXk6ICc3YW0gLSA2cG0nLFxuICAgIHRodXJzZGF5OiAnOGFtIC0gMTBwbScsXG4gICAgZnJpZGF5OiAnOGFtIC0gMTBwbScsXG4gICAgc2F0dXJkYXk6ICc4YW0gLSAxMHBtJyxcbiAgfSxcbiAgbG9jYXRpb246IHtcbiAgICBzdWJ0aXRsZTogJ0xvY2F0aW9uJyxcbiAgICBhZGRyZXNzOiAnVGFzc2lsaSwgQWxnZXJpYScsXG4gIH0sXG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZnVuY3Rpb24gbWFrZVRpdGxlKCkge1xuICBjb25zdCB0aXRsZSA9IGRvbUNyZWF0b3IoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gY29udGVudE9iai50aXRsZTtcbiAgcmV0dXJuIHRpdGxlO1xufVxuXG5mdW5jdGlvbiBtYWtlUmV2aWV3KHRleHQsIHZpZXdlck5hbWUpIHtcbiAgY29uc3QgdmlldyA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuICB2aWV3LmNsYXNzTGlzdC5hZGQoJ3ZpZXcnKTtcblxuICBjb25zdCB2aWV3UGFyYSA9IGRvbUNyZWF0b3IoJ3AnKTtcbiAgdmlld1BhcmEudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIGNvbnN0IHZpZXdlciA9IGRvbUNyZWF0b3IoJ2gyJyk7XG4gIHZpZXdlci50ZXh0Q29udGVudCA9IHZpZXdlck5hbWU7XG5cbiAgdmlldy5hcHBlbmRDaGlsZCh2aWV3UGFyYSk7XG4gIHZpZXcuYXBwZW5kQ2hpbGQodmlld2VyKTtcbiAgcmV0dXJuIHZpZXc7XG59XG5cbmZ1bmN0aW9uIG1ha2VIb3Vyc0RpdigpIHtcbiAgY29uc3Qgd29ya0hvdXJzID0gZG9tQ3JlYXRvcignZGl2Jyk7XG4gIHdvcmtIb3Vycy5jbGFzc0xpc3QuYWRkKCd3b3JrLWhvdXJzJyk7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb21DcmVhdG9yKCdoMicpO1xuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9ICdXb3JrIEhvdXJzJztcblxuICBjb25zdCBzY2hlZHVsZSA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuICBzY2hlZHVsZS5pbm5lckhUTUwgPSBgXG4gIDxwPjxzcGFuPk1vbmRheTo8L3NwYW4+ICR7Y29udGVudE9iai5ob3Vycy5tb25kYXl9PC9wPlxuICA8cD48c3Bhbj5TdW5kYXk6PC9zcGFuPiAke2NvbnRlbnRPYmouaG91cnMuc3VuZGF5fTwvcD5cbiAgPHA+PHNwYW4+VHVlc2RheTo8L3NwYW4+ICR7Y29udGVudE9iai5ob3Vycy50dWVzZGF5fTwvcD5cbiAgPHA+PHNwYW4+V2VkbmVzZGF5Ojwvc3Bhbj4gJHtjb250ZW50T2JqLmhvdXJzLndlZG5lc2RheX08L3A+XG4gIDxwPjxzcGFuPlRodXJzZGF5Ojwvc3Bhbj4gJHtjb250ZW50T2JqLmhvdXJzLnRodXJzZGF5fTwvcD5cbiAgPHA+PHNwYW4+RnJpZGF5Ojwvc3Bhbj4gJHtjb250ZW50T2JqLmhvdXJzLmZyaWRheX08L3A+XG4gIDxwPjxzcGFuPlNhdHVyZGF5Ojwvc3Bhbj4gJHtjb250ZW50T2JqLmhvdXJzLnNhdHVyZGF5fTwvcD5cbiAgYDtcblxuICB3b3JrSG91cnMuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuICB3b3JrSG91cnMuYXBwZW5kQ2hpbGQoc2NoZWR1bGUpO1xuXG4gIHJldHVybiB3b3JrSG91cnM7XG59XG5cbmZ1bmN0aW9uIG1ha2VMb2NhdGlvbkRpdigpIHtcbiAgY29uc3QgbG9jYXRpb25EaXYgPSBkb21DcmVhdG9yKCdkaXYnKTtcbiAgbG9jYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcblxuICBjb25zdCBzdWJ0aXRsZSA9IGRvbUNyZWF0b3IoJ2gyJyk7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gY29udGVudE9iai5sb2NhdGlvbi5zdWJ0aXRsZTtcblxuICBjb25zdCBhZGRyZXNzID0gZG9tQ3JlYXRvcigncCcpO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gY29udGVudE9iai5sb2NhdGlvbi5hZGRyZXNzO1xuXG4gIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcbiAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgcmV0dXJuIGxvY2F0aW9uRGl2O1xufVxuXG5jb25zdCByZXZpZXdlck9uZSA9IG1ha2VSZXZpZXcoXG4gIGNvbnRlbnRPYmoucmV2aWV3ZXJPbmUudGV4dCxcbiAgY29udGVudE9iai5yZXZpZXdlck9uZS5yZXZpZXdlclxuKTtcblxuY29uc3QgcmV2aWV3ZXJUd28gPSBtYWtlUmV2aWV3KFxuICBjb250ZW50T2JqLnJldmlld2VyVHdvLnRleHQsXG4gIGNvbnRlbnRPYmoucmV2aWV3ZXJUd28ucmV2aWV3ZXJcbik7XG5cbmNvbnN0IGhvbWVDb21wb25lbnRzID0gW1xuICBtYWtlVGl0bGUoKSxcbiAgcmV2aWV3ZXJPbmUsXG4gIHJldmlld2VyVHdvLFxuICBtYWtlSG91cnNEaXYoKSxcbiAgbWFrZUxvY2F0aW9uRGl2KCksXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBob21lQ29tcG9uZW50cztcbiIsImltcG9ydCB7IGRvbVNlbGVjdG9yIH0gZnJvbSAnLi9kb20tbWFuaXB1bGF0aW9uJztcbmltcG9ydCB7IG1ha2VIZWFkZXIsIG1ha2VNYWluLCBtYWtlRm9vdGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUnO1xuaW1wb3J0IGhvbWVDb21wb25lbnRzIGZyb20gJy4vaG9tZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9tU2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWtlTWFpbihob21lQ29tcG9uZW50cykpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VGb290ZXIoKSk7XG59XG4iLCJpbXBvcnQgeyBkb21DcmVhdG9yIH0gZnJvbSAnLi9kb20tbWFuaXB1bGF0aW9uJztcblxuY29uc3QgbWFpbkRpc2hlcyA9IHtcbiAgY2F0ZWdvcnk6ICdNYWluIERpc2hlcycsXG4gIGNvdXNjb3VzOiB7XG4gICAgbmFtZTogJ0NvdXNjb3VzJyxcbiAgICBkZXNjOiAnQ291c2NvdXMgaXMgYSB0cmFkaXRpb25hbCBOb3J0aCBBZnJpY2FuIGRpc2ggbWFkZSBmcm9tIHNtYWxsIHN0ZWFtZWQgYmFsbHMgb2Ygc2Vtb2xpbmEgd2hlYXQuIEl0IGlzIG9mdGVuIHNlcnZlZCBhcyBhIHNpZGUgZGlzaCB3aXRoIG1lYXQgb3IgdmVnZXRhYmxlcyBhbmQgY2FuIGJlIG1hZGUgc3dlZXQgb3Igc2F2b3J5LiBJdCBpcyBhIHN0YXBsZSBpbiBBbGdlcmlhbiBjdWlzaW5lIGFuZCBpcyBlbmpveWVkIGJ5IGxvY2FscyBhbmQgdmlzaXRvcnMgYWxpa2UuJyxcbiAgICBwcmljZTogJzMkJyxcbiAgICBpbWdTcmM6ICcuLi9zcmMvY291c2NvdXMuanBnJyxcbiAgfSxcbiAgenZpdGk6IHtcbiAgICBuYW1lOiAnWnZpdGknLFxuICAgIGRlc2M6ICdadml0aSBpcyBhIHRyYWRpdGlvbmFsIEFsZ2VyaWFuIGRpc2ggY29uc2lzdGluZyBvZiBzdGV3ZWQgbGFtYiBvciBiZWVmLCBtaXhlZCB3aXRoIGNoaWNrcGVhcyBhbmQgYSB2YXJpZXR5IG9mIHNwaWNlcy4gSXQgaXMgb2Z0ZW4gc2VydmVkIHdpdGggY291c2NvdXMgYW5kIGlzIGEgaGVhcnR5LCBjb21mb3J0aW5nIG1lYWwuIEl0IGlzIGEgc3RhcGxlIG9mIEFsZ2VyaWFuIGN1aXNpbmUgYW5kIGlzIGVuam95ZWQgYnkgbG9jYWxzIGFuZCB2aXNpdG9ycyBhbGlrZS4nLFxuICAgIHByaWNlOiAnNCQnLFxuICAgIGltZ1NyYzogJy4uL3NyYy96dml0aTIuanBlZycsXG4gIH0sXG4gIGNoYWtoY2hva2hhOiB7XG4gICAgbmFtZTogJ0NoYWtoY2hva2hhJyxcbiAgICBkZXNjOiAnQ2hha2hjaG9raGEgaXMgYSB0cmFkaXRpb25hbCBBbGdlcmlhbiBkaXNoIG1hZGUgb2YgY29va2VkIGFuZCBtYXNoZWQgdG9tYXRvZXMgYW5kIGJlbGwgcGVwcGVycywgdHlwaWNhbGx5IHNlcnZlZCB3aXRoIGJyZWFkLiBJdCBpcyBhIGhlYXJ0eSBhbmQgZmxhdm9yZnVsIGRpc2gsIGFuZCBpcyBvZnRlbiBzZXJ2ZWQgYXMgYSBzaWRlIGRpc2ggb3IgYXMgYSB0b3BwaW5nIGZvciBtZWF0IGRpc2hlcy4gSXQgaXMgYSBzdGFwbGUgaW4gQWxnZXJpYW4gY3Vpc2luZSBhbmQgaXMgZW5qb3llZCBieSBsb2NhbHMgYW5kIHZpc2l0b3JzIGFsaWtlLicsXG4gICAgcHJpY2U6ICczJCcsXG4gICAgaW1nU3JjOiAnLi4vc3JjL2NoYWtoY2hva2EuanBlZycsXG4gIH0sXG59O1xuXG5jb25zdCBlbnRyZWVzID0ge1xuICBjYXRlZ29yeTogJ0VudHJlZXMgYW5kIERlc3NlcnQgRGlzaGVzJyxcbiAgdGVhOiB7XG4gICAgbmFtZTogJ1NhaGFyYSBUZWEnLFxuICAgIGRlc2M6ICdBbGdlcmlhbiBTYWhhcmEgdGVhIGlzIGEgdHlwZSBvZiBibGFjayB0ZWEgdGhhdCBpcyBncm93biBhbmQgcHJvZHVjZWQgaW4gdGhlIFNhaGFyYSBkZXNlcnQgcmVnaW9uIG9mIEFsZ2VyaWEuIEl0IGlzIGtub3duIGZvciBpdHMgc3Ryb25nLCBib2xkIGZsYXZvciBhbmQgaXMgb2Z0ZW4gc2VydmVkIHdpdGggbWludCBvciBvdGhlciBoZXJicyB0byBlbmhhbmNlIHRoZSB0YXN0ZS4gSXQgaXMgY29uc2lkZXJlZCBhIHRyYWRpdGlvbmFsIGRyaW5rIGluIEFsZ2VyaWEgYW5kIGlzIGVuam95ZWQgYnkgbWFueSBsb2NhbHMgYW5kIHRvdXJpc3RzIGFsaWtlLicsXG4gICAgcHJpY2U6ICcwLjUkJyxcbiAgICBpbWdTcmM6ICcuLi9zcmMvc2FoYXJhLXRlYS5qcGcnLFxuICB9LFxuICBiYWtsYXZhOiB7XG4gICAgbmFtZTogJ0Jha2xhdmEnLFxuICAgIGRlc2M6ICdBbGdlcmlhbiBiYWtsYXZhIGlzIGEgc3dlZXQgcGFzdHJ5IG1hZGUgZnJvbSBsYXllcnMgb2YgcGh5bGxvIGRvdWdoIGZpbGxlZCB3aXRoIGNob3BwZWQgbnV0cywgdHlwaWNhbGx5IGFsbW9uZHMgb3IgcGlzdGFjaGlvcy4gSXQgaXMgc3dlZXRlbmVkIHdpdGggaG9uZXkgb3Igc3lydXAgYW5kIGlzIG9mdGVuIGZsYXZvcmVkIHdpdGggY2lubmFtb24gb3Igb3JhbmdlIGJsb3Nzb20gd2F0ZXIuIEl0IGlzIGEgcG9wdWxhciBkZXNzZXJ0IGluIEFsZ2VyaWEgYW5kIGNhbiBiZSBmb3VuZCBpbiBtYW55IGJha2VyaWVzIGFuZCByZXN0YXVyYW50cyB0aHJvdWdob3V0IHRoZSBjb3VudHJ5LicsXG4gICAgcHJpY2U6ICcyJCcsXG4gICAgLy8gSW1hZ2UgYnkgZmFicmlrYXNpbWYgb24gRnJlZXBpa1xuICAgIGltZ1NyYzogJy4uL3NyYy9iYWtsYXZhLmpwZycsXG4gIH0sXG59O1xuXG5mdW5jdGlvbiBtZW51VGl0bGUoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb21DcmVhdG9yKCdoMicpO1xuICBtZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBtZW51LmlkID0gJ21lbnUtdGl0bGUnO1xuICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gbWFrZUNhdGVnb3J5KGNhdGVnb3J5KSB7XG4gIGNvbnN0IG1lbnVDYXRlZ29yeSA9IGRvbUNyZWF0b3IoJ2gzJyk7XG4gIG1lbnVDYXRlZ29yeS50ZXh0Q29udGVudCA9IGNhdGVnb3J5O1xuICBtZW51Q2F0ZWdvcnkuaWQgPSAnY2F0ZWdvcnknO1xuICByZXR1cm4gbWVudUNhdGVnb3J5O1xufVxuXG5mdW5jdGlvbiBmb29kVHlwZShuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2VGb29kLCBpbWdTcmMpIHtcbiAgY29uc3QgZm9vZENhcmQgPSBkb21DcmVhdG9yKCdkaXYnKTtcbiAgZm9vZENhcmQuY2xhc3NMaXN0LmFkZCgnZm9vZC1jYXJkJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb21DcmVhdG9yKCdoNCcpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY29uc3QgZGVzYyA9IGRvbUNyZWF0b3IoJ3AnKTtcbiAgZGVzYy5jbGFzc0xpc3QuYWRkKCdmb29kLWRlc2MnKTtcbiAgZGVzYy50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IHByaWNlID0gZG9tQ3JlYXRvcigncCcpO1xuICBwcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuICBwcmljZS50ZXh0Q29udGVudCA9IHByaWNlRm9vZDtcblxuICBjb25zdCBmb29kSW1nID0gZG9tQ3JlYXRvcignaW1nJyk7XG4gIGZvb2RJbWcuc3JjID0gaW1nU3JjO1xuICBmb29kSW1nLmFsdCA9ICdpbWcnO1xuXG4gIGZvb2RDYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgZm9vZENhcmQuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gIGZvb2RDYXJkLmFwcGVuZENoaWxkKHByaWNlKTtcbiAgZm9vZENhcmQuYXBwZW5kQ2hpbGQoZm9vZEltZyk7XG5cbiAgcmV0dXJuIGZvb2RDYXJkO1xufVxuXG5jb25zdCBjb3VzY291c0Rpc2ggPSBmb29kVHlwZShcbiAgbWFpbkRpc2hlcy5jb3VzY291cy5uYW1lLFxuICBtYWluRGlzaGVzLmNvdXNjb3VzLmRlc2MsXG4gIG1haW5EaXNoZXMuY291c2NvdXMucHJpY2UsXG4gIG1haW5EaXNoZXMuY291c2NvdXMuaW1nU3JjXG4pO1xuXG5jb25zdCB6dml0aURpc2ggPSBmb29kVHlwZShcbiAgbWFpbkRpc2hlcy56dml0aS5uYW1lLFxuICBtYWluRGlzaGVzLnp2aXRpLmRlc2MsXG4gIG1haW5EaXNoZXMuenZpdGkucHJpY2UsXG4gIG1haW5EaXNoZXMuenZpdGkuaW1nU3JjXG4pO1xuXG5jb25zdCBjaGFraGNob2toYURpc2ggPSBmb29kVHlwZShcbiAgbWFpbkRpc2hlcy5jaGFraGNob2toYS5uYW1lLFxuICBtYWluRGlzaGVzLmNoYWtoY2hva2hhLmRlc2MsXG4gIG1haW5EaXNoZXMuY2hha2hjaG9raGEucHJpY2UsXG4gIG1haW5EaXNoZXMuY2hha2hjaG9raGEuaW1nU3JjXG4pO1xuXG5jb25zdCBzYWhhcmFUZWEgPSBmb29kVHlwZShcbiAgZW50cmVlcy50ZWEubmFtZSxcbiAgZW50cmVlcy50ZWEuZGVzYyxcbiAgZW50cmVlcy50ZWEucHJpY2UsXG4gIGVudHJlZXMudGVhLmltZ1NyY1xuKTtcblxuY29uc3QgYmFrbGF2YSA9IGZvb2RUeXBlKFxuICBlbnRyZWVzLmJha2xhdmEubmFtZSxcbiAgZW50cmVlcy5iYWtsYXZhLmRlc2MsXG4gIGVudHJlZXMuYmFrbGF2YS5wcmljZSxcbiAgZW50cmVlcy5iYWtsYXZhLmltZ1NyY1xuKTtcblxuY29uc3QgbWFpbkRpc2hlc1N1YnRpdGxlID0gbWFrZUNhdGVnb3J5KG1haW5EaXNoZXMuY2F0ZWdvcnkpO1xuY29uc3QgZW50cmVlc1N1YnRpdGxlID0gbWFrZUNhdGVnb3J5KGVudHJlZXMuY2F0ZWdvcnkpO1xuXG5jb25zdCBtZW51Q29tcG9uZW50cyA9IFtcbiAgbWVudVRpdGxlKCksXG4gIG1haW5EaXNoZXNTdWJ0aXRsZSxcbiAgY291c2NvdXNEaXNoLFxuICB6dml0aURpc2gsXG4gIGNoYWtoY2hva2hhRGlzaCxcbiAgZW50cmVlc1N1YnRpdGxlLFxuICBzYWhhcmFUZWEsXG4gIGJha2xhdmEsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBtZW51Q29tcG9uZW50cztcbiIsImltcG9ydCB7IGRvbUNyZWF0b3IgfSBmcm9tICcuL2RvbS1tYW5pcHVsYXRpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9tQ3JlYXRvcignaGVhZGVyJyk7XG4gIGNvbnN0IG5hdiA9IGRvbUNyZWF0b3IoJ25hdicpO1xuICBjb25zdCB1bCA9IGRvbUNyZWF0b3IoJ3VsJyk7XG5cbiAgY29uc3QgaG9tZUl0ZW0gPSBkb21DcmVhdG9yKCdsaScpO1xuICBob21lSXRlbS50ZXh0Q29udGVudCA9ICdIb21lJztcblxuICBjb25zdCBtZW51SXRlbSA9IGRvbUNyZWF0b3IoJ2xpJyk7XG4gIG1lbnVJdGVtLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gIGNvbnN0IGNvbnRhY3RJdGVtID0gZG9tQ3JlYXRvcignbGknKTtcbiAgY29udGFjdEl0ZW0udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gIHVsLmFwcGVuZENoaWxkKGhvbWVJdGVtKTtcbiAgdWwuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICB1bC5hcHBlbmRDaGlsZChjb250YWN0SXRlbSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNYWluKGFycikge1xuICBjb25zdCBtYWluID0gZG9tQ3JlYXRvcignbWFpbicpO1xuICBhcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH0pO1xuICByZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvbUNyZWF0b3IoJ2Zvb3RlcicpO1xuICBmb290ZXIudGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBieSBLcmltb3RoaWF6aW5lJztcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cbiIsImltcG9ydCB7IGRvbVNlbGVjdG9yIH0gZnJvbSAnLi9kb20tbWFuaXB1bGF0aW9uJztcbmltcG9ydCBob21lQ29tcG9uZW50cyBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgbWFrZU1haW4gfSBmcm9tICcuL3N0cnVjdHVyZSc7XG5pbXBvcnQgbWVudUNvbXBvbmVudHMgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjb250YWN0Q29tcG9uZW50cyBmcm9tICcuL2NvbnRhY3RzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3dpdGNoUGFnZShwYWdlKSB7XG4gIGxldCBtYWluID0gZG9tU2VsZWN0b3IoJyNjb250ZW50IG1haW4nKTtcbiAgY29uc3QgY29udGVudCA9IGRvbVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb25zdCBmb290ZXIgPSBkb21TZWxlY3RvcignZm9vdGVyJyk7XG4gIGlmIChtYWluICE9PSBudWxsKSB7XG4gICAgaWYgKHBhZ2UgPT09ICdIb21lJykge1xuICAgICAgbWFpbi5yZW1vdmUoKTtcbiAgICAgIG1haW4gPSBtYWtlTWFpbihob21lQ29tcG9uZW50cyk7XG4gICAgICBjb250ZW50Lmluc2VydEJlZm9yZShtYWluLCBmb290ZXIpO1xuICAgIH1cbiAgICBpZiAocGFnZSA9PT0gJ01lbnUnKSB7XG4gICAgICBtYWluLnJlbW92ZSgpO1xuICAgICAgbWFpbiA9IG1ha2VNYWluKG1lbnVDb21wb25lbnRzKTtcbiAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKG1haW4sIGZvb3Rlcik7XG4gICAgfVxuICAgIGlmIChwYWdlID09PSAnQ29udGFjdCcpIHtcbiAgICAgIG1haW4ucmVtb3ZlKCk7XG4gICAgICBtYWluID0gbWFrZU1haW4oY29udGFjdENvbXBvbmVudHMpO1xuICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobWFpbiwgZm9vdGVyKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XG5pbXBvcnQgeyBkb21TZWxlY3RvckFsbCB9IGZyb20gJy4vZG9tLW1hbmlwdWxhdGlvbic7XG5pbXBvcnQgc3dpdGNoUGFnZSBmcm9tICcuL3N3aXRjaC1wYWdlJztcblxubGV0IHBhZ2UgPSAnSG9tZSc7XG5cbmxvYWRQYWdlKCk7XG5jb25zdCBuYXZCdG5zID0gQXJyYXkuZnJvbShkb21TZWxlY3RvckFsbCgnbmF2IHVsIGxpJykpO1xuXG5uYXZCdG5zLmZvckVhY2goKG5hdkJ0bikgPT4ge1xuICBuYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHBhZ2UgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBzd2l0Y2hQYWdlKHBhZ2UpO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9