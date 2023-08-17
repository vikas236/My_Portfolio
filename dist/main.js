/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Navbar Styling */
header {
  width: 100vw;
  height: 75px;
  position: fixed;
  top: -75px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  transition: 0.2s ease-in;
  box-shadow: 0 1px 10px -3px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

header.active {
  top: 0px;
}

header ul {
  width: 70%;
  list-style: none;
  display: flex;
  justify-content: end;
  background: white;
}

header ul li {
  font-size: 16px;
  padding-right: 50px;
  font-weight: 700;
}

header ul li:last-of-type {
  margin: 0;
}

header ul a {
  text-decoration: none;
  color: #999999;
  transition: 0.2s;
}

header ul a:hover {
  color: #b59d7c;
}

header ul a.active {
  color: #b59d7c;
}

main {
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
}

main .intro {
  width: 100vw;
  height: 100vh;
  color: white;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro .box {
  width: 70%;
  position: relative;
  left: 75px;
}

.intro h1 {
  font-size: 42px;
  margin: 0;
  margin-bottom: 5px;
  font-weight: bold;
}

.intro p {
  margin: 0;
}

.intro .social_media {
  margin-top: 15px;
}

.social_media a {
  margin-right: 10px;
  color: white;
}

.description {
  height: 800px;
  background: #f7f7f7;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.description p {
  width: 70%;
  letter-spacing: 1px;
  color: #999999;
  margin-top: 150px;
}

.description h2 {
  text-align: center;
  font-weight: 500;
  margin: 0;
  color: #999999;
}

/* Slider of skills here */
.skills {
  width: 70vw;
  height: 300px;
  overflow: hidden;
  position: relative;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.skills_container {
  width: 1250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  left: 0px;
  transition: 0.3s;
}

.skills .skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  color: #999999;
}

.skills .skill_icon {
  width: 150px;
}

.skills h3 {
  font-size: 20px;
  font-weight: 500;
}

/* .skills i {
  position: absolute;
  color: grey;
  padding: 100px;
  transition: 0.3s;
  border-radius: 50%;
  top: 0px;
}

.skills i:hover {
  color: white;
  background: linear-gradient(90deg, transparent 45%, rgba(153, 153, 153, 0.7));
}

.skills .bxs-chevron-left {
  left: -100px;
  padding-right: 50px;
}

.skills .bxs-chevron-right {
  right: -100px;
  padding-left: 50px;
}

.skills .bxs-chevron-right:hover {
  background: linear-gradient(
    -90deg,
    transparent 45%,
    rgba(153, 153, 153, 0.7)
  );
} */

/* Projects list */
.projects {
  width: 100vw;
  height: 900px;
  overflow: hidden;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.projects h2 {
  text-align: center;
  letter-spacing: 1px;
  padding-top: 50px;
  font-weight: 500;
}

.projects_container {
  width: 70vw;
  height: 550px;
  overflow: hidden;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
}

.projects .project {
  width: 410px;
  height: 231px;
  border-radius: 5px;
  box-shadow: 2px 2px 10px -5px;
  margin-left: 15px;
  margin-top: 50px;
  overflow: hidden;
  position: relative;
}

.projects img {
  width: 410px;
  height: 231px;
  transition: 0.3s;
}

.projects img:hover {
  transform: scale(1.05);
  cursor: default;
}

.project .project_label {
  width: 330px;
  height: 70px;
  background: white;
  position: absolute;
  border-radius: 5px;
  opacity: 0.96;
  inset: 140px 15px;
  transition: 0.4s;
  z-index: 1;
  box-shadow: 5px 5px 10px -10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  opacity: 0%;
}

.project_label:hover {
  opacity: 100%;
}

.project_label h3 {
  font-weight: 400;
  color: #999999;
  font-size: 16px;
}

.project_label i {
  color: #999999;
  margin-left: 10px;
}

.project_label i:hover {
  color: #b59d7c;
}

/* Get in touch */
section.contact {
  width: 100vw;
  height: 650px;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.contact h2 {
  font-size: 32px;
}

.contact .container {
  width: 65vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contact .left {
  position: relative;
  bottom: 125px;
}

.contact .right {
  width: 50%;
  padding: 25px;
  position: relative;
  left: 35px;
}

.contact span {
  width: 225px;
  color: #999999;
  display: block;
}

.contact input {
  width: 95%;
  border-radius: 0;
  border: 1px solid black;
  padding: 10px;
  margin: 7px 0;
}

.contact .message_box {
  position: relative;
}

.contact .message_box.invalid::before {
  content: "*";
  font-size: 22px;
  color: red;
  position: absolute;
  left: -20px;
  top: 10px;
  display: inline-block;
}

.contact input:focus,
.contact textarea:focus {
  border: 1px solid cornflowerblue;
  outline: none;
}

.contact textarea {
  width: 95%;
  padding: 10px;
  margin: 7px 0;
  border: 1px solid black;
}

.contact input::placeholder,
.contact textarea::placeholder {
  font-size: 12px;
  letter-spacing: 1px;
}

.contact button {
  width: calc(100% - 8px);
  padding: 10px;
  margin: 7px 0;
  background: black;
  border: 1px solid black;
  color: white;
  font-size: 14px;
}

.contact button:hover {
  color: black;
  background: white;
  cursor: pointer;
}

.copyright {
  width: 100vw;
  height: 150px;
}
`, "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap\");\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Navbar Styling */\nheader {\n  width: 100vw;\n  height: 75px;\n  position: fixed;\n  top: -75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: white;\n  transition: 0.2s ease-in;\n  box-shadow: 0 1px 10px -3px rgba(0, 0, 0, 0.2);\n  z-index: 2;\n}\n\nheader.active {\n  top: 0px;\n}\n\nheader ul {\n  width: 70%;\n  list-style: none;\n  display: flex;\n  justify-content: end;\n  background: white;\n}\n\nheader ul li {\n  font-size: 16px;\n  padding-right: 50px;\n  font-weight: 700;\n}\n\nheader ul li:last-of-type {\n  margin: 0;\n}\n\nheader ul a {\n  text-decoration: none;\n  color: #999999;\n  transition: 0.2s;\n}\n\nheader ul a:hover {\n  color: #b59d7c;\n}\n\nheader ul a.active {\n  color: #b59d7c;\n}\n\nmain {\n  overflow: visible;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nmain .intro {\n  width: 100vw;\n  height: 100vh;\n  color: white;\n  overflow: visible;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.intro .box {\n  width: 70%;\n  position: relative;\n  left: 75px;\n}\n\n.intro h1 {\n  font-size: 42px;\n  margin: 0;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\n.intro p {\n  margin: 0;\n}\n\n.intro .social_media {\n  margin-top: 15px;\n}\n\n.social_media a {\n  margin-right: 10px;\n  color: white;\n}\n\n.description {\n  height: 800px;\n  background: #f7f7f7;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.description p {\n  width: 70%;\n  letter-spacing: 1px;\n  color: #999999;\n  margin-top: 150px;\n}\n\n.description h2 {\n  text-align: center;\n  font-weight: 500;\n  margin: 0;\n  color: #999999;\n}\n\n/* Slider of skills here */\n.skills {\n  width: 70vw;\n  height: 300px;\n  overflow: hidden;\n  position: relative;\n  transition: 0.3s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.skills_container {\n  width: 1250px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n  left: 0px;\n  transition: 0.3s;\n}\n\n.skills .skill {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-self: center;\n  color: #999999;\n}\n\n.skills .skill_icon {\n  width: 150px;\n}\n\n.skills h3 {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n/* .skills i {\n  position: absolute;\n  color: grey;\n  padding: 100px;\n  transition: 0.3s;\n  border-radius: 50%;\n  top: 0px;\n}\n\n.skills i:hover {\n  color: white;\n  background: linear-gradient(90deg, transparent 45%, rgba(153, 153, 153, 0.7));\n}\n\n.skills .bxs-chevron-left {\n  left: -100px;\n  padding-right: 50px;\n}\n\n.skills .bxs-chevron-right {\n  right: -100px;\n  padding-left: 50px;\n}\n\n.skills .bxs-chevron-right:hover {\n  background: linear-gradient(\n    -90deg,\n    transparent 45%,\n    rgba(153, 153, 153, 0.7)\n  );\n} */\n\n/* Projects list */\n.projects {\n  width: 100vw;\n  height: 900px;\n  overflow: hidden;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.projects h2 {\n  text-align: center;\n  letter-spacing: 1px;\n  padding-top: 50px;\n  font-weight: 500;\n}\n\n.projects_container {\n  width: 70vw;\n  height: 550px;\n  overflow: hidden;\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.projects .project {\n  width: 410px;\n  height: 231px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 10px -5px;\n  margin-left: 15px;\n  margin-top: 50px;\n  overflow: hidden;\n  position: relative;\n}\n\n.projects img {\n  width: 410px;\n  height: 231px;\n  transition: 0.3s;\n}\n\n.projects img:hover {\n  transform: scale(1.05);\n  cursor: default;\n}\n\n.project .project_label {\n  width: 330px;\n  height: 70px;\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  opacity: 0.96;\n  inset: 140px 15px;\n  transition: 0.4s;\n  z-index: 1;\n  box-shadow: 5px 5px 10px -10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 25px;\n  opacity: 0%;\n}\n\n.project_label:hover {\n  opacity: 100%;\n}\n\n.project_label h3 {\n  font-weight: 400;\n  color: #999999;\n  font-size: 16px;\n}\n\n.project_label i {\n  color: #999999;\n  margin-left: 10px;\n}\n\n.project_label i:hover {\n  color: #b59d7c;\n}\n\n/* Get in touch */\nsection.contact {\n  width: 100vw;\n  height: 650px;\n  background: #f7f7f7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 50px;\n}\n\n.contact h2 {\n  font-size: 32px;\n}\n\n.contact .container {\n  width: 65vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.contact .left {\n  position: relative;\n  bottom: 125px;\n}\n\n.contact .right {\n  width: 50%;\n  padding: 25px;\n  position: relative;\n  left: 35px;\n}\n\n.contact span {\n  width: 225px;\n  color: #999999;\n  display: block;\n}\n\n.contact input {\n  width: 95%;\n  border-radius: 0;\n  border: 1px solid black;\n  padding: 10px;\n  margin: 7px 0;\n}\n\n.contact .message_box {\n  position: relative;\n}\n\n.contact .message_box.invalid::before {\n  content: \"*\";\n  font-size: 22px;\n  color: red;\n  position: absolute;\n  left: -20px;\n  top: 10px;\n  display: inline-block;\n}\n\n.contact input:focus,\n.contact textarea:focus {\n  border: 1px solid cornflowerblue;\n  outline: none;\n}\n\n.contact textarea {\n  width: 95%;\n  padding: 10px;\n  margin: 7px 0;\n  border: 1px solid black;\n}\n\n.contact input::placeholder,\n.contact textarea::placeholder {\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\n.contact button {\n  width: calc(100% - 8px);\n  padding: 10px;\n  margin: 7px 0;\n  background: black;\n  border: 1px solid black;\n  color: white;\n  font-size: 14px;\n}\n\n.contact button:hover {\n  color: black;\n  background: white;\n  cursor: pointer;\n}\n\n.copyright {\n  width: 100vw;\n  height: 150px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/javascript/contact.js":
/*!***********************************!*\
  !*** ./src/javascript/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const form = document.querySelector("form");
// const input = document.querySelectorAll("input");

const e = (() => {
  const addContainer = () => {
    const data = document.createElement("div");
    for (let i = 0; i < 4; i += 1) {
      const box = document.createElement("div");
      box.classList.add("message_box");
      box.appendChild(form.childNodes[i + 1]);
      data.appendChild(box);
    }
    data.appendChild(form.childNodes[5]);
    form.innerHTML = data.innerHTML;
  };

  return {
    addContainer,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e);


/***/ }),

/***/ "./src/javascript/description.js":
/*!***************************************!*\
  !*** ./src/javascript/description.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_html_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/html.svg */ "./src/images/html.svg");
/* harmony import */ var _images_css_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/css.svg */ "./src/images/css.svg");
/* harmony import */ var _images_javascript_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/javascript.svg */ "./src/images/javascript.svg");
/* harmony import */ var _images_linux_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/linux.svg */ "./src/images/linux.svg");
/* harmony import */ var _images_landing_page_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/landing_page.png */ "./src/images/landing_page.png");
/* harmony import */ var _images_etch_a_sketch_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/etch_a_sketch.png */ "./src/images/etch_a_sketch.png");
/* harmony import */ var _images_dashboard_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/dashboard.png */ "./src/images/dashboard.png");
/* harmony import */ var _images_calculator_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/calculator.png */ "./src/images/calculator.png");
/* harmony import */ var _images_form_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/form.png */ "./src/images/form.png");
/* harmony import */ var _images_my_library_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/my_library.png */ "./src/images/my_library.png");
/* harmony import */ var _images_webpack_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/webpack.svg */ "./src/images/webpack.svg");
/* harmony import */ var _images_git_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/git.svg */ "./src/images/git.svg");













const skillBox = document.querySelector(".skills_container");
const skills = document.querySelector(".skills");
const projectsBox = document.querySelector(".projects_container");

const skillIcons = [
  "html.svg",
  "css.svg",
  "javascript.svg",
  "webpack.svg",
  "git.svg",
  "linux.svg",
];
const projectIcons = [
  "landing_page.png",
  "etch_a_sketch.png",
  "dashboard.png",
  "calculator.png",
  "form.png",
  "my_library.png",
];
const projectLinks = [
  "Landing_page",
  "Etch-a-Sketch",
  "dashboard_using_grid",
  "Calculator",
  "first_form_page",
  "myLibrary",
];
const projectNames = [
  "Landing Page",
  "Etch a Sketch",
  "Dashboard using Grid",
  "Calculator",
  "Form Page",
  "My Library",
];

const e = (() => {
  // Add skills to the slider
  const addSkills = () => {
    for (let i = 0; i < 6; i += 1) {
      const skill = document.createElement("div");
      skill.classList.add(`skill`);
      const icon = document.createElement("img");
      icon.src = `images/${skillIcons[i]}`;
      icon.classList.add("skill_icon");
      const label = document.createElement("h3");
      label.textContent = `${skillIcons[i].slice(0, -4)}`;
      skillBox.appendChild(skill);
      skillBox.childNodes[i].appendChild(icon);
      skillBox.childNodes[i].appendChild(label);
    }
  };

  // Add slideing to the skills slider
  const addSlide = () => {
    const left = document.createElement("i");
    const right = document.createElement("i");
    left.className = "bx bxs-chevron-left bx-lg";
    right.className = "bx bxs-chevron-right bx-lg";
    skills.appendChild(left);
    skills.appendChild(right);
  };

  const skillBoxStyles = getComputedStyle(skillBox);

  // Move slider left or right
  const moveSlider = () => {
    const arrowLeft = document.querySelector(".bxs-chevron-left");
    const arrowRight = document.querySelector(".bxs-chevron-right");
    arrowLeft.addEventListener("click", e.slide);
    arrowRight.addEventListener("click", e.slide);
  };

  // Move slider left or right
  const slide = () => {
    let left = parseInt(skillBoxStyles.left, 10);
    if (left > 0) {
      left -= 625;
    } else if (left > -500) {
      left += 625;
    }
    console.log(left);
    skillBox.style.left = `${left}px`;
  };

  // Add projects to the projects container
  const addProjects = () => {
    for (let i = 0; i < 6; i += 1) {
      const project = document.createElement("div");
      const image = document.createElement("img");
      const anchor = document.createElement("a");
      anchor.appendChild(image);
      anchor.className = "projectAnchor";
      anchor.href = `https://vikas236.github.io/${projectLinks[i]}`;
      anchor.target = "_blank";
      project.classList.add("project");
      image.src = `images/${projectIcons[i]}`;
      projectsBox.appendChild(project);
      projectsBox.childNodes[i].appendChild(anchor);
      e.addProjectLabels(i);
    }
    e.showLabel();
  };

  // Add labels to the projects
  const addProjectLabels = (i) => {
    const project = document.querySelectorAll(".project");
    const label = document.createElement("div");
    const h3 = document.createElement("h3");
    const icons = document.createElement("div");
    icons.className = "code_links";
    icons.innerHTML = `<a href="https://github.com/vikas236/${projectLinks[i]}" target=_blank><i class="bx bx-code-alt bx-sm" ></a></i>
                      <a href="https://vikas236.github.io/${projectLinks[i]}"  target=_blank><i class="bx bx-link-external bx-sm"></i></a>`;
    h3.textContent = `${projectNames[i]}`;
    label.appendChild(h3);
    label.appendChild(icons);
    label.classList.add("project_label");
    project[i].appendChild(label);
  };

  // Show label by hovering on project
  const showLabel = () => {
    const project = document.querySelectorAll(".project");
    const label = document.querySelectorAll(".project_label");
    for (let i = 0; i < 6; i += 1) {
      project[i].addEventListener("mouseover", () => {
        label[i].style.opacity = "100%";
      });
      project[i].addEventListener("mouseout", () => {
        label[i].style.opacity = "0%";
      });
    }
  };

  return {
    addSkills,
    addProjects,
    addProjectLabels,
    addSlide,
    moveSlider,
    slide,
    showLabel,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e);


/***/ }),

/***/ "./src/javascript/introduction.js":
/*!****************************************!*\
  !*** ./src/javascript/introduction.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_calm_image_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/calm_image.png */ "./src/images/calm_image.png");
// Import Images


// Import html Elements
const intro = document.querySelector(".intro");
const navbar = document.querySelector("header");
const anchors = document.querySelectorAll("a");
const me = document.querySelector(".me");
const block = document.querySelector(".block"); // blinking cursor in intro

intro.style.background = "url('images/calm_image.png')";

const e = (() => {
  let previousPos = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentPos = window.scrollY;
    if (previousPos < currentPos) {
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }

    for (let i = 0; i < 3; i += 1) {
      anchors[i].classList.remove("active");
    }

    previousPos = currentPos;

    for (let i = 0; i < 3; i += 1) {
      if (currentPos < (i + 1) * 900) {
        anchors[i].classList.add("active");
        break;
      }
    }
  });

  let charIndex = 0;
  let direction = 1;
  let text = "SAI VIKAS";

  // Animate with typing animation
  const animateText = () => {
    if (charIndex < 0) {
      if (text.length <= 9) {
        text = "FRONTEND DEVELOPER";
      } else {
        text = "SAI VIKAS";
      }
      direction = 1; // Switch direction to typing forward
      charIndex = 0;
      setTimeout(animateText, 100);
    } else if (charIndex > text.length) {
      direction = -1; // Switch direction to erasing backward
      charIndex = text.length;

      let blinkCount = 0;

      const blinkInterval = setInterval(() => {
        e.blinkOnce();

        setTimeout(() => {
          e.blinkOnce();

          blinkCount += 1;

          if (blinkCount === 2) {
            clearInterval(blinkInterval);
            animateText();
          }
        }, 500);
      }, 1000);
    } else {
      me.textContent = text.substring(0, charIndex);

      if (direction === 1) {
        charIndex += 1;
      } else if (direction === -1) {
        charIndex -= 1;
      }
      setTimeout(animateText, 100);
    }
  };

  const blinkOnce = () => {
    if (block.textContent === "|") {
      block.textContent = "";
    } else {
      block.textContent = "|";
    }
  };

  return { animateText, blinkOnce };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e);


/***/ }),

/***/ "./src/javascript/sendMessage.js":
/*!***************************************!*\
  !*** ./src/javascript/sendMessage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const form = document.querySelector("form");
const input = form.childNodes;
const values = [];

const e = (() => {
  const submitMessage = () => {
    e.isValid();
    form.childNodes[4].addEventListener("click", () => {
      e.checkMessage();
      if (e.checkMessage() === true) {
        const data = `name: ${values[0]}
        email: ${values[1]}
        subject: ${values[2]}
        message: ${values[3]}`;
        e.sendMessage(data);
      } else {
        console.log("message not submitted");
        e.refillMessage();
      }
    });
  };

  const isValid = () => {
    for (let i = 0; i < 4; i += 1) {
      const box = input[i].childNodes[0];
      box.addEventListener("blur", () => {
        if (box.checkValidity() && box.value !== "") {
          input[i].classList.remove("invalid");
          box.style.border = "1px solid black";
        } else {
          input[i].classList.add("invalid");
          box.style.border = "1px solid red";
        }
      });
    }
  };

  // Check validity of message details
  const checkMessage = () => {
    let valid = true;
    for (let i = 0; i < 4; i += 1) {
      const box = input[i].childNodes[0];
      if (box.checkValidity() && box.value !== "") {
        input[i].classList.remove("invalid");
        values[i] = box.value;
      } else {
        input[i].classList.add("invalid");
        box.style.border = "1px solid red";
        valid = false;
      }
    }

    if (valid === false) {
      return false;
    }
    return true;
  };

  // Refill message details if invalid
  const refillMessage = () => {
    for (let i = 0; i < 4; i += 1) {
      const box = input[i].childNodes[0];
      if (values[i]) {
        box.value = values[i];
      }
    }
  };

  const sendMessage = (message) => {
    const botToken = "6609078554:AAGi_m3pc4C6TKfEUHyTQuGZ9_sShNL1ceY";
    const chatId = "-1001924061874";
    const parseMode = "Markdown";

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: parseMode,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          console.error("Failed to send message");
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };
  return { submitMessage, checkMessage, isValid, refillMessage, sendMessage };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e);


/***/ }),

/***/ "./src/images/calculator.png":
/*!***********************************!*\
  !*** ./src/images/calculator.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/calculator.png";

/***/ }),

/***/ "./src/images/calm_image.png":
/*!***********************************!*\
  !*** ./src/images/calm_image.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/calm_image.png";

/***/ }),

/***/ "./src/images/css.svg":
/*!****************************!*\
  !*** ./src/images/css.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/css.svg";

/***/ }),

/***/ "./src/images/dashboard.png":
/*!**********************************!*\
  !*** ./src/images/dashboard.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/dashboard.png";

/***/ }),

/***/ "./src/images/etch_a_sketch.png":
/*!**************************************!*\
  !*** ./src/images/etch_a_sketch.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/etch_a_sketch.png";

/***/ }),

/***/ "./src/images/form.png":
/*!*****************************!*\
  !*** ./src/images/form.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/form.png";

/***/ }),

/***/ "./src/images/git.svg":
/*!****************************!*\
  !*** ./src/images/git.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/git.svg";

/***/ }),

/***/ "./src/images/html.svg":
/*!*****************************!*\
  !*** ./src/images/html.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/html.svg";

/***/ }),

/***/ "./src/images/javascript.svg":
/*!***********************************!*\
  !*** ./src/images/javascript.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/javascript.svg";

/***/ }),

/***/ "./src/images/landing_page.png":
/*!*************************************!*\
  !*** ./src/images/landing_page.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/landing_page.png";

/***/ }),

/***/ "./src/images/linux.svg":
/*!******************************!*\
  !*** ./src/images/linux.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/linux.svg";

/***/ }),

/***/ "./src/images/my_library.png":
/*!***********************************!*\
  !*** ./src/images/my_library.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/my_library.png";

/***/ }),

/***/ "./src/images/webpack.svg":
/*!********************************!*\
  !*** ./src/images/webpack.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/webpack.svg";

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
/******/ 		__webpack_require__.p = "/";
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
/* harmony import */ var _javascript_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript/description */ "./src/javascript/description.js");
/* harmony import */ var _javascript_introduction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/introduction */ "./src/javascript/introduction.js");
/* harmony import */ var _javascript_sendMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascript/sendMessage */ "./src/javascript/sendMessage.js");
/* harmony import */ var _javascript_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascript/contact */ "./src/javascript/contact.js");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");
// Import javascript





// Import css styling


_javascript_introduction__WEBPACK_IMPORTED_MODULE_1__["default"].animateText();
_javascript_description__WEBPACK_IMPORTED_MODULE_0__["default"].addSkills();
_javascript_description__WEBPACK_IMPORTED_MODULE_0__["default"].addProjects();
_javascript_contact__WEBPACK_IMPORTED_MODULE_3__["default"].addContainer();
_javascript_sendMessage__WEBPACK_IMPORTED_MODULE_2__["default"].submitMessage();
// description.moveSlider();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGdIQUFnSCxJQUFJLElBQUksa0JBQWtCO0FBQzFJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxxRkFBcUYsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxrQ0FBa0MsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZ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OztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hHakI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNtRDtBQUNFO0FBQ047QUFDSjs7QUFFM0M7QUFDMEI7O0FBRTFCLGdFQUFZO0FBQ1osK0RBQVc7QUFDWCwrREFBVztBQUNYLDJEQUFPO0FBQ1AsK0RBQU87QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL215X3BvcnRmb2xpby8uL3NyYy9jc3Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL3NyYy9jc3Mvc3R5bGVzLmNzcz85OWEzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vc3JjL2phdmFzY3JpcHQvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9zcmMvamF2YXNjcmlwdC9kZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9zcmMvamF2YXNjcmlwdC9pbnRyb2R1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vc3JjL2phdmFzY3JpcHQvc2VuZE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215X3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215X3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215X3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215X3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogTmF2YmFyIFN0eWxpbmcgKi9cbmhlYWRlciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA3NXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogLTc1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xuICBib3gtc2hhZG93OiAwIDFweCAxMHB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAyO1xufVxuXG5oZWFkZXIuYWN0aXZlIHtcbiAgdG9wOiAwcHg7XG59XG5cbmhlYWRlciB1bCB7XG4gIHdpZHRoOiA3MCU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaGVhZGVyIHVsIGxpIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oZWFkZXIgdWwgbGk6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5oZWFkZXIgdWwgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbmhlYWRlciB1bCBhOmhvdmVyIHtcbiAgY29sb3I6ICNiNTlkN2M7XG59XG5cbmhlYWRlciB1bCBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjYjU5ZDdjO1xufVxuXG5tYWluIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm1haW4gLmludHJvIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBjb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmludHJvIC5ib3gge1xuICB3aWR0aDogNzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDc1cHg7XG59XG5cbi5pbnRybyBoMSB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW50cm8gcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmludHJvIC5zb2NpYWxfbWVkaWEge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uc29jaWFsX21lZGlhIGEge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmRlc2NyaXB0aW9uIHAge1xuICB3aWR0aDogNzAlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG59XG5cbi5kZXNjcmlwdGlvbiBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxuLyogU2xpZGVyIG9mIHNraWxscyBoZXJlICovXG4uc2tpbGxzIHtcbiAgd2lkdGg6IDcwdnc7XG4gIGhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5za2lsbHNfY29udGFpbmVyIHtcbiAgd2lkdGg6IDEyNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uc2tpbGxzIC5za2lsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxuLnNraWxscyAuc2tpbGxfaWNvbiB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLnNraWxscyBoMyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLyogLnNraWxscyBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogZ3JleTtcbiAgcGFkZGluZzogMTAwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdG9wOiAwcHg7XG59XG5cbi5za2lsbHMgaTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCA0NSUsIHJnYmEoMTUzLCAxNTMsIDE1MywgMC43KSk7XG59XG5cbi5za2lsbHMgLmJ4cy1jaGV2cm9uLWxlZnQge1xuICBsZWZ0OiAtMTAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5cbi5za2lsbHMgLmJ4cy1jaGV2cm9uLXJpZ2h0IHtcbiAgcmlnaHQ6IC0xMDBweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuXG4uc2tpbGxzIC5ieHMtY2hldnJvbi1yaWdodDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAtOTBkZWcsXG4gICAgdHJhbnNwYXJlbnQgNDUlLFxuICAgIHJnYmEoMTUzLCAxNTMsIDE1MywgMC43KVxuICApO1xufSAqL1xuXG4vKiBQcm9qZWN0cyBsaXN0ICovXG4ucHJvamVjdHMge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogOTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3RzIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnByb2plY3RzX2NvbnRhaW5lciB7XG4gIHdpZHRoOiA3MHZ3O1xuICBoZWlnaHQ6IDU1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xufVxuXG4ucHJvamVjdHMgLnByb2plY3Qge1xuICB3aWR0aDogNDEwcHg7XG4gIGhlaWdodDogMjMxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IC01cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9qZWN0cyBpbWcge1xuICB3aWR0aDogNDEwcHg7XG4gIGhlaWdodDogMjMxcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5wcm9qZWN0cyBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5wcm9qZWN0IC5wcm9qZWN0X2xhYmVsIHtcbiAgd2lkdGg6IDMzMHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3BhY2l0eTogMC45NjtcbiAgaW5zZXQ6IDE0MHB4IDE1cHg7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAtMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIG9wYWNpdHk6IDAlO1xufVxuXG4ucHJvamVjdF9sYWJlbDpob3ZlciB7XG4gIG9wYWNpdHk6IDEwMCU7XG59XG5cbi5wcm9qZWN0X2xhYmVsIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnByb2plY3RfbGFiZWwgaSB7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnByb2plY3RfbGFiZWwgaTpob3ZlciB7XG4gIGNvbG9yOiAjYjU5ZDdjO1xufVxuXG4vKiBHZXQgaW4gdG91Y2ggKi9cbnNlY3Rpb24uY29udGFjdCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA2NTBweDtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5jb250YWN0IGgyIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4uY29udGFjdCAuY29udGFpbmVyIHtcbiAgd2lkdGg6IDY1dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QgLmxlZnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTI1cHg7XG59XG5cbi5jb250YWN0IC5yaWdodCB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMzVweDtcbn1cblxuLmNvbnRhY3Qgc3BhbiB7XG4gIHdpZHRoOiAyMjVweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29udGFjdCBpbnB1dCB7XG4gIHdpZHRoOiA5NSU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDdweCAwO1xufVxuXG4uY29udGFjdCAubWVzc2FnZV9ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250YWN0IC5tZXNzYWdlX2JveC5pbnZhbGlkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIipcIjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogcmVkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0yMHB4O1xuICB0b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbnRhY3QgaW5wdXQ6Zm9jdXMsXG4uY29udGFjdCB0ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY29udGFjdCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogN3B4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uY29udGFjdCBpbnB1dDo6cGxhY2Vob2xkZXIsXG4uY29udGFjdCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5jb250YWN0IGJ1dHRvbiB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4cHgpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDdweCAwO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29udGFjdCBidXR0b246aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb3B5cmlnaHQge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTUwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4Qiw4Q0FBOEM7RUFDOUMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVB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O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsZ0NBQWdDO0VBQ2hDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG5odG1sIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogTmF2YmFyIFN0eWxpbmcgKi9cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAtNzVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG5oZWFkZXIuYWN0aXZlIHtcXG4gIHRvcDogMHB4O1xcbn1cXG5cXG5oZWFkZXIgdWwge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyIHVsIGxpIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oZWFkZXIgdWwgbGk6bGFzdC1vZi10eXBlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaGVhZGVyIHVsIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICM5OTk5OTk7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG5oZWFkZXIgdWwgYTpob3ZlciB7XFxuICBjb2xvcjogI2I1OWQ3YztcXG59XFxuXFxuaGVhZGVyIHVsIGEuYWN0aXZlIHtcXG4gIGNvbG9yOiAjYjU5ZDdjO1xcbn1cXG5cXG5tYWluIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5tYWluIC5pbnRybyB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW50cm8gLmJveCB7XFxuICB3aWR0aDogNzAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogNzVweDtcXG59XFxuXFxuLmludHJvIGgxIHtcXG4gIGZvbnQtc2l6ZTogNDJweDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaW50cm8gcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5pbnRybyAuc29jaWFsX21lZGlhIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbi5zb2NpYWxfbWVkaWEgYSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBoZWlnaHQ6IDgwMHB4O1xcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gcCB7XFxuICB3aWR0aDogNzAlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGNvbG9yOiAjOTk5OTk5O1xcbiAgbWFyZ2luLXRvcDogMTUwcHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbiBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgY29sb3I6ICM5OTk5OTk7XFxufVxcblxcbi8qIFNsaWRlciBvZiBza2lsbHMgaGVyZSAqL1xcbi5za2lsbHMge1xcbiAgd2lkdGg6IDcwdnc7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2tpbGxzX2NvbnRhaW5lciB7XFxuICB3aWR0aDogMTI1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDBweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5za2lsbHMgLnNraWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgY29sb3I6ICM5OTk5OTk7XFxufVxcblxcbi5za2lsbHMgLnNraWxsX2ljb24ge1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uc2tpbGxzIGgzIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi8qIC5za2lsbHMgaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogZ3JleTtcXG4gIHBhZGRpbmc6IDEwMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRvcDogMHB4O1xcbn1cXG5cXG4uc2tpbGxzIGk6aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCA0NSUsIHJnYmEoMTUzLCAxNTMsIDE1MywgMC43KSk7XFxufVxcblxcbi5za2lsbHMgLmJ4cy1jaGV2cm9uLWxlZnQge1xcbiAgbGVmdDogLTEwMHB4O1xcbiAgcGFkZGluZy1yaWdodDogNTBweDtcXG59XFxuXFxuLnNraWxscyAuYnhzLWNoZXZyb24tcmlnaHQge1xcbiAgcmlnaHQ6IC0xMDBweDtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG59XFxuXFxuLnNraWxscyAuYnhzLWNoZXZyb24tcmlnaHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAtOTBkZWcsXFxuICAgIHRyYW5zcGFyZW50IDQ1JSxcXG4gICAgcmdiYSgxNTMsIDE1MywgMTUzLCAwLjcpXFxuICApO1xcbn0gKi9cXG5cXG4vKiBQcm9qZWN0cyBsaXN0ICovXFxuLnByb2plY3RzIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogOTAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RzIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBwYWRkaW5nLXRvcDogNTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5wcm9qZWN0c19jb250YWluZXIge1xcbiAgd2lkdGg6IDcwdnc7XFxuICBoZWlnaHQ6IDU1MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuXFxuLnByb2plY3RzIC5wcm9qZWN0IHtcXG4gIHdpZHRoOiA0MTBweDtcXG4gIGhlaWdodDogMjMxcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggLTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wcm9qZWN0cyBpbWcge1xcbiAgd2lkdGg6IDQxMHB4O1xcbiAgaGVpZ2h0OiAyMzFweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5wcm9qZWN0cyBpbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnByb2plY3QgLnByb2plY3RfbGFiZWwge1xcbiAgd2lkdGg6IDMzMHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvcGFjaXR5OiAwLjk2O1xcbiAgaW5zZXQ6IDE0MHB4IDE1cHg7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgei1pbmRleDogMTtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAtMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAyNXB4O1xcbiAgb3BhY2l0eTogMCU7XFxufVxcblxcbi5wcm9qZWN0X2xhYmVsOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0X2xhYmVsIGgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzk5OTk5OTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnByb2plY3RfbGFiZWwgaSB7XFxuICBjb2xvcjogIzk5OTk5OTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdF9sYWJlbCBpOmhvdmVyIHtcXG4gIGNvbG9yOiAjYjU5ZDdjO1xcbn1cXG5cXG4vKiBHZXQgaW4gdG91Y2ggKi9cXG5zZWN0aW9uLmNvbnRhY3Qge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA2NTBweDtcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLmNvbnRhY3QgaDIge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4uY29udGFjdCAuY29udGFpbmVyIHtcXG4gIHdpZHRoOiA2NXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0IC5sZWZ0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMTI1cHg7XFxufVxcblxcbi5jb250YWN0IC5yaWdodCB7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMjVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDM1cHg7XFxufVxcblxcbi5jb250YWN0IHNwYW4ge1xcbiAgd2lkdGg6IDIyNXB4O1xcbiAgY29sb3I6ICM5OTk5OTk7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNvbnRhY3QgaW5wdXQge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDdweCAwO1xcbn1cXG5cXG4uY29udGFjdCAubWVzc2FnZV9ib3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY29udGFjdCAubWVzc2FnZV9ib3guaW52YWxpZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIqXFxcIjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGNvbG9yOiByZWQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtMjBweDtcXG4gIHRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmNvbnRhY3QgaW5wdXQ6Zm9jdXMsXFxuLmNvbnRhY3QgdGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgY29ybmZsb3dlcmJsdWU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY29udGFjdCB0ZXh0YXJlYSB7XFxuICB3aWR0aDogOTUlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogN3B4IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNvbnRhY3QgaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbi5jb250YWN0IHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4uY29udGFjdCBidXR0b24ge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiA3cHggMDtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5jb250YWN0IGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvcHlyaWdodCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4vLyBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcblxuY29uc3QgZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwibWVzc2FnZV9ib3hcIik7XG4gICAgICBib3guYXBwZW5kQ2hpbGQoZm9ybS5jaGlsZE5vZGVzW2kgKyAxXSk7XG4gICAgICBkYXRhLmFwcGVuZENoaWxkKGJveCk7XG4gICAgfVxuICAgIGRhdGEuYXBwZW5kQ2hpbGQoZm9ybS5jaGlsZE5vZGVzWzVdKTtcbiAgICBmb3JtLmlubmVySFRNTCA9IGRhdGEuaW5uZXJIVE1MO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkQ29udGFpbmVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZTtcbiIsImltcG9ydCBcIi4uL2ltYWdlcy9odG1sLnN2Z1wiO1xuaW1wb3J0IFwiLi4vaW1hZ2VzL2Nzcy5zdmdcIjtcbmltcG9ydCBcIi4uL2ltYWdlcy9qYXZhc2NyaXB0LnN2Z1wiO1xuaW1wb3J0IFwiLi4vaW1hZ2VzL2xpbnV4LnN2Z1wiO1xuaW1wb3J0IFwiLi4vaW1hZ2VzL2xhbmRpbmdfcGFnZS5wbmdcIjtcbmltcG9ydCBcIi4uL2ltYWdlcy9ldGNoX2Ffc2tldGNoLnBuZ1wiO1xuaW1wb3J0IFwiLi4vaW1hZ2VzL2Rhc2hib2FyZC5wbmdcIjtcbmltcG9ydCBcIi4uL2ltYWdlcy9jYWxjdWxhdG9yLnBuZ1wiO1xuaW1wb3J0IFwiLi4vaW1hZ2VzL2Zvcm0ucG5nXCI7XG5pbXBvcnQgXCIuLi9pbWFnZXMvbXlfbGlicmFyeS5wbmdcIjtcbmltcG9ydCBcIi4uL2ltYWdlcy93ZWJwYWNrLnN2Z1wiO1xuaW1wb3J0IFwiLi4vaW1hZ2VzL2dpdC5zdmdcIjtcblxuY29uc3Qgc2tpbGxCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNraWxsc19jb250YWluZXJcIik7XG5jb25zdCBza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNraWxsc1wiKTtcbmNvbnN0IHByb2plY3RzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c19jb250YWluZXJcIik7XG5cbmNvbnN0IHNraWxsSWNvbnMgPSBbXG4gIFwiaHRtbC5zdmdcIixcbiAgXCJjc3Muc3ZnXCIsXG4gIFwiamF2YXNjcmlwdC5zdmdcIixcbiAgXCJ3ZWJwYWNrLnN2Z1wiLFxuICBcImdpdC5zdmdcIixcbiAgXCJsaW51eC5zdmdcIixcbl07XG5jb25zdCBwcm9qZWN0SWNvbnMgPSBbXG4gIFwibGFuZGluZ19wYWdlLnBuZ1wiLFxuICBcImV0Y2hfYV9za2V0Y2gucG5nXCIsXG4gIFwiZGFzaGJvYXJkLnBuZ1wiLFxuICBcImNhbGN1bGF0b3IucG5nXCIsXG4gIFwiZm9ybS5wbmdcIixcbiAgXCJteV9saWJyYXJ5LnBuZ1wiLFxuXTtcbmNvbnN0IHByb2plY3RMaW5rcyA9IFtcbiAgXCJMYW5kaW5nX3BhZ2VcIixcbiAgXCJFdGNoLWEtU2tldGNoXCIsXG4gIFwiZGFzaGJvYXJkX3VzaW5nX2dyaWRcIixcbiAgXCJDYWxjdWxhdG9yXCIsXG4gIFwiZmlyc3RfZm9ybV9wYWdlXCIsXG4gIFwibXlMaWJyYXJ5XCIsXG5dO1xuY29uc3QgcHJvamVjdE5hbWVzID0gW1xuICBcIkxhbmRpbmcgUGFnZVwiLFxuICBcIkV0Y2ggYSBTa2V0Y2hcIixcbiAgXCJEYXNoYm9hcmQgdXNpbmcgR3JpZFwiLFxuICBcIkNhbGN1bGF0b3JcIixcbiAgXCJGb3JtIFBhZ2VcIixcbiAgXCJNeSBMaWJyYXJ5XCIsXG5dO1xuXG5jb25zdCBlID0gKCgpID0+IHtcbiAgLy8gQWRkIHNraWxscyB0byB0aGUgc2xpZGVyXG4gIGNvbnN0IGFkZFNraWxscyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgc2tpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2tpbGwuY2xhc3NMaXN0LmFkZChgc2tpbGxgKTtcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaWNvbi5zcmMgPSBgaW1hZ2VzLyR7c2tpbGxJY29uc1tpXX1gO1xuICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwic2tpbGxfaWNvblwiKTtcbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHtza2lsbEljb25zW2ldLnNsaWNlKDAsIC00KX1gO1xuICAgICAgc2tpbGxCb3guYXBwZW5kQ2hpbGQoc2tpbGwpO1xuICAgICAgc2tpbGxCb3guY2hpbGROb2Rlc1tpXS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgIHNraWxsQm94LmNoaWxkTm9kZXNbaV0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIH1cbiAgfTtcblxuICAvLyBBZGQgc2xpZGVpbmcgdG8gdGhlIHNraWxscyBzbGlkZXJcbiAgY29uc3QgYWRkU2xpZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgbGVmdC5jbGFzc05hbWUgPSBcImJ4IGJ4cy1jaGV2cm9uLWxlZnQgYngtbGdcIjtcbiAgICByaWdodC5jbGFzc05hbWUgPSBcImJ4IGJ4cy1jaGV2cm9uLXJpZ2h0IGJ4LWxnXCI7XG4gICAgc2tpbGxzLmFwcGVuZENoaWxkKGxlZnQpO1xuICAgIHNraWxscy5hcHBlbmRDaGlsZChyaWdodCk7XG4gIH07XG5cbiAgY29uc3Qgc2tpbGxCb3hTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHNraWxsQm94KTtcblxuICAvLyBNb3ZlIHNsaWRlciBsZWZ0IG9yIHJpZ2h0XG4gIGNvbnN0IG1vdmVTbGlkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJyb3dMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ieHMtY2hldnJvbi1sZWZ0XCIpO1xuICAgIGNvbnN0IGFycm93UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ4cy1jaGV2cm9uLXJpZ2h0XCIpO1xuICAgIGFycm93TGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZS5zbGlkZSk7XG4gICAgYXJyb3dSaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZS5zbGlkZSk7XG4gIH07XG5cbiAgLy8gTW92ZSBzbGlkZXIgbGVmdCBvciByaWdodFxuICBjb25zdCBzbGlkZSA9ICgpID0+IHtcbiAgICBsZXQgbGVmdCA9IHBhcnNlSW50KHNraWxsQm94U3R5bGVzLmxlZnQsIDEwKTtcbiAgICBpZiAobGVmdCA+IDApIHtcbiAgICAgIGxlZnQgLT0gNjI1O1xuICAgIH0gZWxzZSBpZiAobGVmdCA+IC01MDApIHtcbiAgICAgIGxlZnQgKz0gNjI1O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhsZWZ0KTtcbiAgICBza2lsbEJveC5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7XG4gIH07XG5cbiAgLy8gQWRkIHByb2plY3RzIHRvIHRoZSBwcm9qZWN0cyBjb250YWluZXJcbiAgY29uc3QgYWRkUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBhbmNob3IuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgYW5jaG9yLmNsYXNzTmFtZSA9IFwicHJvamVjdEFuY2hvclwiO1xuICAgICAgYW5jaG9yLmhyZWYgPSBgaHR0cHM6Ly92aWthczIzNi5naXRodWIuaW8vJHtwcm9qZWN0TGlua3NbaV19YDtcbiAgICAgIGFuY2hvci50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICAgIGltYWdlLnNyYyA9IGBpbWFnZXMvJHtwcm9qZWN0SWNvbnNbaV19YDtcbiAgICAgIHByb2plY3RzQm94LmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgcHJvamVjdHNCb3guY2hpbGROb2Rlc1tpXS5hcHBlbmRDaGlsZChhbmNob3IpO1xuICAgICAgZS5hZGRQcm9qZWN0TGFiZWxzKGkpO1xuICAgIH1cbiAgICBlLnNob3dMYWJlbCgpO1xuICB9O1xuXG4gIC8vIEFkZCBsYWJlbHMgdG8gdGhlIHByb2plY3RzXG4gIGNvbnN0IGFkZFByb2plY3RMYWJlbHMgPSAoaSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IGljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpY29ucy5jbGFzc05hbWUgPSBcImNvZGVfbGlua3NcIjtcbiAgICBpY29ucy5pbm5lckhUTUwgPSBgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92aWthczIzNi8ke3Byb2plY3RMaW5rc1tpXX1cIiB0YXJnZXQ9X2JsYW5rPjxpIGNsYXNzPVwiYnggYngtY29kZS1hbHQgYngtc21cIiA+PC9hPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly92aWthczIzNi5naXRodWIuaW8vJHtwcm9qZWN0TGlua3NbaV19XCIgIHRhcmdldD1fYmxhbms+PGkgY2xhc3M9XCJieCBieC1saW5rLWV4dGVybmFsIGJ4LXNtXCI+PC9pPjwvYT5gO1xuICAgIGgzLnRleHRDb250ZW50ID0gYCR7cHJvamVjdE5hbWVzW2ldfWA7XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKGljb25zKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9sYWJlbFwiKTtcbiAgICBwcm9qZWN0W2ldLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgfTtcblxuICAvLyBTaG93IGxhYmVsIGJ5IGhvdmVyaW5nIG9uIHByb2plY3RcbiAgY29uc3Qgc2hvd0xhYmVsID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RfbGFiZWxcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpICs9IDEpIHtcbiAgICAgIHByb2plY3RbaV0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgIGxhYmVsW2ldLnN0eWxlLm9wYWNpdHkgPSBcIjEwMCVcIjtcbiAgICAgIH0pO1xuICAgICAgcHJvamVjdFtpXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgICBsYWJlbFtpXS5zdHlsZS5vcGFjaXR5ID0gXCIwJVwiO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkU2tpbGxzLFxuICAgIGFkZFByb2plY3RzLFxuICAgIGFkZFByb2plY3RMYWJlbHMsXG4gICAgYWRkU2xpZGUsXG4gICAgbW92ZVNsaWRlcixcbiAgICBzbGlkZSxcbiAgICBzaG93TGFiZWwsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBlO1xuIiwiLy8gSW1wb3J0IEltYWdlc1xuaW1wb3J0IFwiLi4vaW1hZ2VzL2NhbG1faW1hZ2UucG5nXCI7XG5cbi8vIEltcG9ydCBodG1sIEVsZW1lbnRzXG5jb25zdCBpbnRybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9cIik7XG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuY29uc3QgYW5jaG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xuY29uc3QgbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lXCIpO1xuY29uc3QgYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2NrXCIpOyAvLyBibGlua2luZyBjdXJzb3IgaW4gaW50cm9cblxuaW50cm8uc3R5bGUuYmFja2dyb3VuZCA9IFwidXJsKCdpbWFnZXMvY2FsbV9pbWFnZS5wbmcnKVwiO1xuXG5jb25zdCBlID0gKCgpID0+IHtcbiAgbGV0IHByZXZpb3VzUG9zID0gd2luZG93LnNjcm9sbFk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQb3MgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBpZiAocHJldmlvdXNQb3MgPCBjdXJyZW50UG9zKSB7XG4gICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGFuY2hvcnNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBwcmV2aW91c1BvcyA9IGN1cnJlbnRQb3M7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgaWYgKGN1cnJlbnRQb3MgPCAoaSArIDEpICogOTAwKSB7XG4gICAgICAgIGFuY2hvcnNbaV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBsZXQgY2hhckluZGV4ID0gMDtcbiAgbGV0IGRpcmVjdGlvbiA9IDE7XG4gIGxldCB0ZXh0ID0gXCJTQUkgVklLQVNcIjtcblxuICAvLyBBbmltYXRlIHdpdGggdHlwaW5nIGFuaW1hdGlvblxuICBjb25zdCBhbmltYXRlVGV4dCA9ICgpID0+IHtcbiAgICBpZiAoY2hhckluZGV4IDwgMCkge1xuICAgICAgaWYgKHRleHQubGVuZ3RoIDw9IDkpIHtcbiAgICAgICAgdGV4dCA9IFwiRlJPTlRFTkQgREVWRUxPUEVSXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ID0gXCJTQUkgVklLQVNcIjtcbiAgICAgIH1cbiAgICAgIGRpcmVjdGlvbiA9IDE7IC8vIFN3aXRjaCBkaXJlY3Rpb24gdG8gdHlwaW5nIGZvcndhcmRcbiAgICAgIGNoYXJJbmRleCA9IDA7XG4gICAgICBzZXRUaW1lb3V0KGFuaW1hdGVUZXh0LCAxMDApO1xuICAgIH0gZWxzZSBpZiAoY2hhckluZGV4ID4gdGV4dC5sZW5ndGgpIHtcbiAgICAgIGRpcmVjdGlvbiA9IC0xOyAvLyBTd2l0Y2ggZGlyZWN0aW9uIHRvIGVyYXNpbmcgYmFja3dhcmRcbiAgICAgIGNoYXJJbmRleCA9IHRleHQubGVuZ3RoO1xuXG4gICAgICBsZXQgYmxpbmtDb3VudCA9IDA7XG5cbiAgICAgIGNvbnN0IGJsaW5rSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGUuYmxpbmtPbmNlKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZS5ibGlua09uY2UoKTtcblxuICAgICAgICAgIGJsaW5rQ291bnQgKz0gMTtcblxuICAgICAgICAgIGlmIChibGlua0NvdW50ID09PSAyKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGJsaW5rSW50ZXJ2YWwpO1xuICAgICAgICAgICAgYW5pbWF0ZVRleHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWUudGV4dENvbnRlbnQgPSB0ZXh0LnN1YnN0cmluZygwLCBjaGFySW5kZXgpO1xuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgIGNoYXJJbmRleCArPSAxO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IC0xKSB7XG4gICAgICAgIGNoYXJJbmRleCAtPSAxO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dChhbmltYXRlVGV4dCwgMTAwKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYmxpbmtPbmNlID0gKCkgPT4ge1xuICAgIGlmIChibG9jay50ZXh0Q29udGVudCA9PT0gXCJ8XCIpIHtcbiAgICAgIGJsb2NrLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgYmxvY2sudGV4dENvbnRlbnQgPSBcInxcIjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgYW5pbWF0ZVRleHQsIGJsaW5rT25jZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZTtcbiIsImNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbmNvbnN0IGlucHV0ID0gZm9ybS5jaGlsZE5vZGVzO1xuY29uc3QgdmFsdWVzID0gW107XG5cbmNvbnN0IGUgPSAoKCkgPT4ge1xuICBjb25zdCBzdWJtaXRNZXNzYWdlID0gKCkgPT4ge1xuICAgIGUuaXNWYWxpZCgpO1xuICAgIGZvcm0uY2hpbGROb2Rlc1s0XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZS5jaGVja01lc3NhZ2UoKTtcbiAgICAgIGlmIChlLmNoZWNrTWVzc2FnZSgpID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBgbmFtZTogJHt2YWx1ZXNbMF19XG4gICAgICAgIGVtYWlsOiAke3ZhbHVlc1sxXX1cbiAgICAgICAgc3ViamVjdDogJHt2YWx1ZXNbMl19XG4gICAgICAgIG1lc3NhZ2U6ICR7dmFsdWVzWzNdfWA7XG4gICAgICAgIGUuc2VuZE1lc3NhZ2UoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2Ugbm90IHN1Ym1pdHRlZFwiKTtcbiAgICAgICAgZS5yZWZpbGxNZXNzYWdlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaXNWYWxpZCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgYm94ID0gaW5wdXRbaV0uY2hpbGROb2Rlc1swXTtcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgIGlmIChib3guY2hlY2tWYWxpZGl0eSgpICYmIGJveC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgIGlucHV0W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgIGJveC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBibGFja1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlucHV0W2ldLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgIGJveC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZWRcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIENoZWNrIHZhbGlkaXR5IG9mIG1lc3NhZ2UgZGV0YWlsc1xuICBjb25zdCBjaGVja01lc3NhZ2UgPSAoKSA9PiB7XG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgYm94ID0gaW5wdXRbaV0uY2hpbGROb2Rlc1swXTtcbiAgICAgIGlmIChib3guY2hlY2tWYWxpZGl0eSgpICYmIGJveC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICBpbnB1dFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZFwiKTtcbiAgICAgICAgdmFsdWVzW2ldID0gYm94LnZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXRbaV0uY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgIGJveC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZWRcIjtcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIFJlZmlsbCBtZXNzYWdlIGRldGFpbHMgaWYgaW52YWxpZFxuICBjb25zdCByZWZpbGxNZXNzYWdlID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBib3ggPSBpbnB1dFtpXS5jaGlsZE5vZGVzWzBdO1xuICAgICAgaWYgKHZhbHVlc1tpXSkge1xuICAgICAgICBib3gudmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCBib3RUb2tlbiA9IFwiNjYwOTA3ODU1NDpBQUdpX20zcGM0QzZUS2ZFVUh5VFF1R1o5X3NTaE5MMWNlWVwiO1xuICAgIGNvbnN0IGNoYXRJZCA9IFwiLTEwMDE5MjQwNjE4NzRcIjtcbiAgICBjb25zdCBwYXJzZU1vZGUgPSBcIk1hcmtkb3duXCI7XG5cbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdCR7Ym90VG9rZW59L3NlbmRNZXNzYWdlYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBjaGF0X2lkOiBjaGF0SWQsXG4gICAgICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgICAgIHBhcnNlX21vZGU6IHBhcnNlTW9kZSxcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBtZXNzYWdlXCIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2VuZGluZyBtZXNzYWdlOlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHsgc3VibWl0TWVzc2FnZSwgY2hlY2tNZXNzYWdlLCBpc1ZhbGlkLCByZWZpbGxNZXNzYWdlLCBzZW5kTWVzc2FnZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIEltcG9ydCBqYXZhc2NyaXB0XG5pbXBvcnQgZGVzY3JpcHRpb24gZnJvbSBcIi4vamF2YXNjcmlwdC9kZXNjcmlwdGlvblwiO1xuaW1wb3J0IGludHJvZHVjdGlvbiBmcm9tIFwiLi9qYXZhc2NyaXB0L2ludHJvZHVjdGlvblwiO1xuaW1wb3J0IG1lc3NhZ2UgZnJvbSBcIi4vamF2YXNjcmlwdC9zZW5kTWVzc2FnZVwiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vamF2YXNjcmlwdC9jb250YWN0XCI7XG5cbi8vIEltcG9ydCBjc3Mgc3R5bGluZ1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGVzLmNzc1wiO1xuXG5pbnRyb2R1Y3Rpb24uYW5pbWF0ZVRleHQoKTtcbmRlc2NyaXB0aW9uLmFkZFNraWxscygpO1xuZGVzY3JpcHRpb24uYWRkUHJvamVjdHMoKTtcbmNvbnRhY3QuYWRkQ29udGFpbmVyKCk7XG5tZXNzYWdlLnN1Ym1pdE1lc3NhZ2UoKTtcbi8vIGRlc2NyaXB0aW9uLm1vdmVTbGlkZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==