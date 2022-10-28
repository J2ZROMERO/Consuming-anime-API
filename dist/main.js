"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkconsuming_anime_api"] = self["webpackChunkconsuming_anime_api"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  font-family: 'Pokemon Solid', sans-serif;\\r\\n  margin: 0%;\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.logo-image {\\r\\n  width: 40px;\\r\\n  margin: 2%;\\r\\n  margin-top: 40%;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  width: 100%;\\r\\n  align-items: center;\\r\\n  background-color: #b4b4b4;\\r\\n  border: 3px solid black;\\r\\n}\\r\\n\\r\\n.nav-ul {\\r\\n  display: flex;\\r\\n  list-style-type: none;\\r\\n  gap: 10%;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: rgb(180, 180, 180);\\r\\n  padding: 2%;\\r\\n  border-top: 3px solid black;\\r\\n}\\r\\n\\r\\n.listPokemons {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  grid-template-rows: repeat(2, 1fr);\\r\\n  grid-column-gap: 17px;\\r\\n  grid-row-gap: 25px;\\r\\n  margin-bottom: 5%;\\r\\n  margin-top: 3%;\\r\\n}\\r\\n\\r\\n.target {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  height: 94%;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  width: 51%;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  width: 100%;\\r\\n  text-align: end;\\r\\n  font-size: 0.7em;\\r\\n}\\r\\n\\r\\n.poke {\\r\\n  width: 50%;\\r\\n  height: 50%;\\r\\n}\\r\\n\\r\\n.reservations {\\r\\n  margin-top: 4%;\\r\\n  width: 56%;\\r\\n  box-shadow: 2.5px 5px;\\r\\n  border: 3px solid black;\\r\\n  background-color: #b4b4b4;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  width: 51%;\\r\\n  box-shadow: 2.5px 5px;\\r\\n  border: 3px solid black;\\r\\n  background-color: #b4b4b4;\\r\\n  margin-top: 2%;\\r\\n}\\r\\n\\r\\n.pokename {\\r\\n  font-size: 1em;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.heart {\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n}\\r\\n\\r\\n.totalpokemons {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.selectPokemon {\\r\\n  height: 29px;\\r\\n  margin-left: 1%;\\r\\n  border: 3px solid black;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.confirm {\\r\\n  width: 29px;\\r\\n  margin-left: 1%;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.seemore {\\r\\n  margin-left: 12%;\\r\\n}\\r\\n\\r\\n.poke-image {\\r\\n  width: 70%;\\r\\n  margin: 5%;\\r\\n  margin-right: 0%;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  border: 3px solid black;\\r\\n  width: 90%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n}\\r\\n\\r\\n.item-details {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.ul-cont {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.close-btn {\\r\\n  font-size: 30px;\\r\\n}\\r\\n\\r\\n.image-div {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.poke-name {\\r\\n  text-align: center;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://consuming-anime-api/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://consuming-anime-api/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://consuming-anime-api/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://consuming-anime-api/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://consuming-anime-api/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://consuming-anime-api/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://consuming-anime-api/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://consuming-anime-api/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://consuming-anime-api/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://consuming-anime-api/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_pokeicon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/pokeicon.png */ \"./src/img/pokeicon.png\");\n/* harmony import */ var _img_sear_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/sear.png */ \"./src/img/sear.png\");\n/* harmony import */ var _modules_requestApi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/requestApi.js */ \"./src/modules/requestApi.js\");\n/* harmony import */ var _modules_capstoneAPI_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/capstoneAPI.js */ \"./src/modules/capstoneAPI.js\");\n/* eslint-disable */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst apiCtone = new _modules_capstoneAPI_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\nconst api = new _modules_requestApi_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\r\n// const qweasd = async () => {\r\n//   console.log(await api.comments(3));\r\n// }\r\n// qweasd();\r\ndocument.querySelector('.logo-image').src = _img_pokeicon_png__WEBPACK_IMPORTED_MODULE_1__;\r\ndocument.querySelector('.confirm').src = _img_sear_png__WEBPACK_IMPORTED_MODULE_2__;\r\n\r\nwindow.addEventListener('load', () => {\r\n  const totalPokemons = document.querySelector('.selectPokemon').defaultValue;\r\n  api.addlielement(totalPokemons);\r\n  api.contadorElementos().then((e) => {\r\n    document.querySelector('.totalPokemonesApi').innerHTML = e;\r\n  });\r\n});\r\n\r\ndocument.querySelector('.confirm').addEventListener('click', () => {\r\n  const totalPokemons = document.querySelector('.selectPokemon').value;\r\n  api.addlielement(totalPokemons);\r\n});\r\n\r\ndocument.addEventListener('click', (e) => {\r\n  console.log(e.target.parentElement.parentElement.id)  \r\n  const commentsId = parseInt(e.target.parentElement.parentElement.id, 10);\r\n  api.comments(commentsId);\r\n  if (e.target.parentElement.parentElement.parentElement.parentElement != null) {\r\n    const idelement = parseInt(e.target.parentElement.parentElement.parentElement.parentElement.id, 10);\r\n    apiCtone.setLikes(idelement);\r\n \r\n  }\r\n});\r\n/* eslint-disable */\r\n\r\ndocument.querySelector('.poke-image').src = _img_pokeicon_png__WEBPACK_IMPORTED_MODULE_1__;\n\n//# sourceURL=webpack://consuming-anime-api/./src/index.js?");

/***/ }),

/***/ "./src/modules/capstoneAPI.js":
/*!************************************!*\
  !*** ./src/modules/capstoneAPI.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Requestapicapstone)\n/* harmony export */ });\n/* eslint-disable */\r\nclass Requestapicapstone {\r\n  constructor() {\r\n    this.idApp = 'lQZw1DCmIXevvDoqUdE0';\r\n    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\n    this.ulrlikes = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.idApp}/likes/`;\r\n  }\r\n\r\n  \r\n  getid = async () => {\r\n    const val = await fetch(this.url, {\r\n      method: 'POST',\r\n    });\r\n    const data = await val.text();\r\n    return data;\r\n  }\r\n\r\n    setLikes = async (id) => {\r\n      await fetch(this.ulrlikes, {\r\n        method: 'POST',\r\n        headers: { 'Content-Type': 'application/json' },\r\n        body: JSON.stringify({ item_id: id }),\r\n      });\r\n\r\n      const datalikes = await this.getlikes();\r\n\r\n      for (const u of datalikes) {\r\n        if (u.item_id === id) {\r\n          document.getElementById(id).children[0].children[1].children[1].children[0].innerHTML = u.likes;\r\n        }\r\n      }\r\n    }\r\n\r\n  getlikes = async () => {\r\n    const response = await fetch(this.ulrlikes);\r\n    let data;\r\n    try {\r\n      data = await response.json();\r\n    } catch (error) {\r\n      data = 'null';\r\n    }\r\n    return data;\r\n  }\r\n}\n\n//# sourceURL=webpack://consuming-anime-api/./src/modules/capstoneAPI.js?");

/***/ }),

/***/ "./src/modules/eleLiPok.js":
/*!*********************************!*\
  !*** ./src/modules/eleLiPok.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ lielement)\n/* harmony export */ });\n/* harmony import */ var _img_heart_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/heart.png */ \"./src/img/heart.png\");\n\r\n\r\nclass lielement {\r\n  static generateElement(name, img) {\r\n    return `<li class=\"contentpoke\">\r\n    <div class=\"target\">\r\n        <img src=\"${img}\" alt=\"\" class=\"poke\">\r\n        <div class=\"likes\">\r\n            <h2 class=\"pokename\">${name}<img src=\"${_img_heart_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"\" class=\"heart\"></h2>\r\n    <h3><span class=\"countlikes\"></span>  Likes</h3>        \r\n        </div>\r\n        <button class=\"comments\">Comments</button>\r\n        <button class=\"reservations\">Reservations</button>\r\n    </div>\r\n    \r\n    </li>`;\r\n  }\r\n}\n\n//# sourceURL=webpack://consuming-anime-api/./src/modules/eleLiPok.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n const popup = () => {\r\n  const popupHtml = `<div class=\"popup\">\r\n    \r\n    <div class=\"item-details\">\r\n        <div class=\"image-div\">\r\n    <img class=\"poke-image\" src=\"./img/pokeicon.png\" alt=\"\">\r\n    <p class=\"close-btn\">X</p>\r\n    </div>\r\n    <h2 class=\"poke-name\">Name</h2>\r\n    <div class=\"ul-cont\">\r\n    <ul>\r\n        <li class='height'></li>\r\n        <li class='weight'>/li>\r\n    </ul>\r\n    <ul>\r\n        <li class='base_experience'></li>\r\n        <li class='order'></li>\r\n    </ul>\r\n    </div>\r\n    </div>\r\n    </div>`\r\n    return popupHtml;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\r\n\n\n//# sourceURL=webpack://consuming-anime-api/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/requestApi.js":
/*!***********************************!*\
  !*** ./src/modules/requestApi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Requestapi)\n/* harmony export */ });\n/* harmony import */ var _eleLiPok_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eleLiPok.js */ \"./src/modules/eleLiPok.js\");\n/* harmony import */ var _capstoneAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capstoneAPI.js */ \"./src/modules/capstoneAPI.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n/* eslint-disable */\r\n\r\n\r\n\r\n\r\n\r\nconst likes = new _capstoneAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nclass Requestapi {\r\n  addlielement = async (total) => {\r\n    const data = await this.getsPokemons();\r\n\r\n    let elementsli = '';\r\n    let count = 1;\r\n    for (const e of data.results) {\r\n      if (count <= total) {\r\n        const response = await fetch(e.url);\r\n        const data = await response.json();\r\n        data.sprites.front_default;\r\n        elementsli += _eleLiPok_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].generateElement(e.name, data.sprites.front_default);\r\n      }\r\n      count += 1;\r\n    }\r\n    document.querySelector('.listPokemons').innerHTML = elementsli;\r\n\r\n    const parentl = document.querySelector('.listPokemons').children;\r\n    const valid = await this.getsPokemonsid(total);\r\n    const like = await likes.getlikes();\r\n console.log(parentl[0].children[0].children[2]);\r\n const mobileVE = [];\r\n const mobileVersion = document.body;\r\n    for (let i = 0; i < parentl.length; i += 1) {\r\n      parentl[i].id = valid[i];\r\n      parentl[i].children[0].children[2].addEventListener('click', () => {\r\n        \r\n        while (mobileVersion.hasChildNodes()) {\r\n                    mobileVE.push(mobileVersion.firstChild);\r\n                    mobileVersion.removeChild(mobileVersion.firstChild); \r\n                         }\r\n        document.body.innerHTML = (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\n        document.querySelector('.close-btn').addEventListener('click',(e)=>{\r\n          for (let i = 0; i <= mobileVE.length - 1; i += 1) {\r\n                        mobileVersion.appendChild(mobileVE[i]);\r\n                                }\r\n          document.body.removeChild(e.target.parentElement.parentElement.parentElement)\r\n        })\r\n      })\r\n\r\n      if (like.item_id !== 'null') {\r\n        for (let j = 0; j <= like.length - 1; j += 1) {\r\n          if (parentl[i].id == like[j].item_id) {\r\n            parentl[i].children[0].children[1].children[1].children[0].innerHTML = like[j].likes;\r\n          }\r\n        }\r\n      }\r\n    }\r\n   \r\n  }\r\n\r\n  getsPokemons = async () => {\r\n    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');\r\n    const data = await response.json();\r\n    return data;\r\n  }\r\n\r\n  getsPokemonsid = async (cuantity) => {\r\n    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');\r\n    const data = await response.json();\r\n    const arrdata = data.results;\r\n    const ids = [];\r\n    for (let i = 0; i < cuantity; i+=1) {\r\n      const t = arrdata[i].url;\r\n      ids.push(t.split('').filter((x, i) => {\r\n        if (i > 33 && x !== '/') {\r\n          return x;\r\n        }\r\n      })\r\n        .join(''));\r\n    }\r\n\r\n    return new Promise((solve) => {\r\n      solve(ids);\r\n    });\r\n  }\r\n\r\n  contadorElementos = async () => {\r\n    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');\r\n    const data = await response.json();\r\n\r\n    const total = data.results.length;\r\n    return total;\r\n  }\r\n\r\ncomments = async (e) => {\r\n  const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+e+'/');\r\n  const data = await response.json();\r\n  for(const [key, value] of Object.entries(data)){\r\n    if(key === 'height'){\r\n      document.querySelector('.height').innerHTML = 'Height: ' + value;      \r\n    }\r\n    if(key === 'weight'){\r\n      document.querySelector('.weight').innerHTML = 'Weight: ' + value;      \r\n    }\r\n    if(key === 'base_experience'){\r\n      document.querySelector('.base_experience').innerHTML = 'Base experience: ' + value;      \r\n    }\r\n    if(key === 'order'){\r\n      document.querySelector('.order').innerHTML = 'Order: ' + value;      \r\n    }\r\n\r\n    if(key === 'name'){\r\n      document.querySelector('.poke-name').innerHTML = value;      \r\n    }\r\n    if(key === 'sprites.front_default'){\r\n      document.querySelector('.poke-name').innerHTML = value;      \r\n    }\r\n\r\n    \r\n\r\n    console.log(key, value)\r\n  }\r\n  return data;\r\n}\r\nbase_experience\r\n}\r\n\r\n\n\n//# sourceURL=webpack://consuming-anime-api/./src/modules/requestApi.js?");

/***/ }),

/***/ "./src/img/heart.png":
/*!***************************!*\
  !*** ./src/img/heart.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"702c95e2f8da5b85404c.png\";\n\n//# sourceURL=webpack://consuming-anime-api/./src/img/heart.png?");

/***/ }),

/***/ "./src/img/pokeicon.png":
/*!******************************!*\
  !*** ./src/img/pokeicon.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e4458284651838f0413.png\";\n\n//# sourceURL=webpack://consuming-anime-api/./src/img/pokeicon.png?");

/***/ }),

/***/ "./src/img/sear.png":
/*!**************************!*\
  !*** ./src/img/sear.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2b18ea3a04d471507ffd.png\";\n\n//# sourceURL=webpack://consuming-anime-api/./src/img/sear.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);