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

/* Projects list */
.projects {
  width: 100vw;
  height: 750px;
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
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
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
  height: 600px;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  overflow: hidden;
}

.contact h2 {
  font-size: 32px;
}

.contact .container {
  width: 65vw;
  height: fit-content;
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
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.copyright i {
  color: black;
}

.copyright i:first-of-type {
  margin-right: 5px;
}
`, "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,kCAAkC;EAClC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA,mBAAmB;AACnB;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,wBAAwB;EACxB,8CAA8C;EAC9C,UAAU;AACZ;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,SAAS;EACT,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,UAAU;EACV,mBAAmB;EACnB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,SAAS;EACT,cAAc;AAChB;;AAEA,0BAA0B;AAC1B;EACE,WAAW;EACX,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;EAClB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;EACpB,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA,kBAAkB;AAClB;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,kCAAkC;EAClC,qCAAqC;EACrC,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,6BAA6B;EAC7B,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,UAAU;EACV,8BAA8B;EAC9B,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA,iBAAiB;AACjB;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,UAAU;EACV,aAAa;EACb,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;EACb,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,qBAAqB;AACvB;;AAEA;;EAEE,gCAAgC;EAChC,aAAa;AACf;;AAEA;EACE,UAAU;EACV,aAAa;EACb,aAAa;EACb,uBAAuB;AACzB;;AAEA;;EAEE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,aAAa;EACb,iBAAiB;EACjB,uBAAuB;EACvB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap\");\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Navbar Styling */\nheader {\n  width: 100vw;\n  height: 75px;\n  position: fixed;\n  top: -75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: white;\n  transition: 0.2s ease-in;\n  box-shadow: 0 1px 10px -3px rgba(0, 0, 0, 0.2);\n  z-index: 2;\n}\n\nheader.active {\n  top: 0px;\n}\n\nheader ul {\n  width: 70%;\n  list-style: none;\n  display: flex;\n  justify-content: end;\n  background: white;\n}\n\nheader ul li {\n  font-size: 16px;\n  padding-right: 50px;\n  font-weight: 700;\n}\n\nheader ul li:last-of-type {\n  margin: 0;\n}\n\nheader ul a {\n  text-decoration: none;\n  color: #999999;\n  transition: 0.2s;\n}\n\nheader ul a:hover {\n  color: #b59d7c;\n}\n\nheader ul a.active {\n  color: #b59d7c;\n}\n\nmain {\n  overflow: visible;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nmain .intro {\n  width: 100vw;\n  height: 100vh;\n  color: white;\n  overflow: visible;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.intro .box {\n  width: 70%;\n  position: relative;\n  left: 75px;\n}\n\n.intro h1 {\n  font-size: 42px;\n  margin: 0;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\n.intro p {\n  margin: 0;\n}\n\n.intro .social_media {\n  margin-top: 15px;\n}\n\n.social_media a {\n  margin-right: 10px;\n  color: white;\n}\n\n.description {\n  height: 800px;\n  background: #f7f7f7;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.description p {\n  width: 70%;\n  letter-spacing: 1px;\n  color: #999999;\n  margin-top: 150px;\n}\n\n.description h2 {\n  text-align: center;\n  font-weight: 500;\n  margin: 0;\n  color: #999999;\n}\n\n/* Slider of skills here */\n.skills {\n  width: 70vw;\n  height: 300px;\n  overflow: hidden;\n  position: relative;\n  transition: 0.3s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.skills_container {\n  width: 1250px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n  left: 0px;\n  transition: 0.3s;\n}\n\n.skills .skill {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-self: center;\n  color: #999999;\n}\n\n.skills .skill_icon {\n  width: 150px;\n}\n\n.skills h3 {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n/* Projects list */\n.projects {\n  width: 100vw;\n  height: 750px;\n  overflow: hidden;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.projects h2 {\n  text-align: center;\n  letter-spacing: 1px;\n  padding-top: 50px;\n  font-weight: 500;\n}\n\n.projects_container {\n  width: 70vw;\n  height: 550px;\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(3, 1fr);\n  place-items: center;\n}\n\n.projects .project {\n  width: 410px;\n  height: 231px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 10px -5px;\n  margin-left: 15px;\n  margin-top: 50px;\n  overflow: hidden;\n  position: relative;\n}\n\n.projects img {\n  width: 410px;\n  height: 231px;\n  transition: 0.3s;\n}\n\n.projects img:hover {\n  transform: scale(1.05);\n  cursor: default;\n}\n\n.project .project_label {\n  width: 330px;\n  height: 70px;\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  inset: 140px 15px;\n  transition: 0.4s;\n  z-index: 1;\n  box-shadow: 5px 5px 10px -10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 25px;\n  opacity: 0%;\n}\n\n.project_label:hover {\n  opacity: 100%;\n}\n\n.project_label h3 {\n  font-weight: 400;\n  color: #999999;\n  font-size: 16px;\n}\n\n.project_label i {\n  color: #999999;\n  margin-left: 10px;\n}\n\n.project_label i:hover {\n  color: #b59d7c;\n}\n\n/* Get in touch */\nsection.contact {\n  width: 100vw;\n  height: 600px;\n  background: #f7f7f7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 50px;\n  overflow: hidden;\n}\n\n.contact h2 {\n  font-size: 32px;\n}\n\n.contact .container {\n  width: 65vw;\n  height: fit-content;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.contact .left {\n  position: relative;\n  bottom: 125px;\n}\n\n.contact .right {\n  width: 50%;\n  padding: 25px;\n  position: relative;\n  left: 35px;\n}\n\n.contact span {\n  width: 225px;\n  color: #999999;\n  display: block;\n}\n\n.contact input {\n  width: 95%;\n  border-radius: 0;\n  border: 1px solid black;\n  padding: 10px;\n  margin: 7px 0;\n}\n\n.contact .message_box {\n  position: relative;\n}\n\n.contact .message_box.invalid::before {\n  content: \"*\";\n  font-size: 22px;\n  color: red;\n  position: absolute;\n  left: -20px;\n  top: 10px;\n  display: inline-block;\n}\n\n.contact input:focus,\n.contact textarea:focus {\n  border: 1px solid cornflowerblue;\n  outline: none;\n}\n\n.contact textarea {\n  width: 95%;\n  padding: 10px;\n  margin: 7px 0;\n  border: 1px solid black;\n}\n\n.contact input::placeholder,\n.contact textarea::placeholder {\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\n.contact button {\n  width: calc(100% - 8px);\n  padding: 10px;\n  margin: 7px 0;\n  background: black;\n  border: 1px solid black;\n  color: white;\n  font-size: 14px;\n}\n\n.contact button:hover {\n  color: black;\n  background: white;\n  cursor: pointer;\n}\n\n.copyright {\n  width: 100vw;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.copyright i {\n  color: black;\n}\n\n.copyright i:first-of-type {\n  margin-right: 5px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/tablets_mobiles.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/tablets_mobiles.css ***!
  \***************************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Styles for mobile devices */
@media screen and (max-width: 767px) {
  html {
    overflow-x: hidden;
  }

  .intro .box {
    left: 0;
  }

  .intro h1 {
    font-size: 24px;
  }

  .intro p {
    font-size: 12px;
  }

  .description {
    height: 600px;
  }

  .description p {
    width: 80%;
    margin-top: 25px;
    font-size: 14px;
    text-align: center;
  }

  .description h2 {
    font-size: 20px;
  }

  .skills_container {
    width: 100%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    column-gap: 35px;
    row-gap: 35px;
    overflow: visible;
  }

  .skills .skill_icon {
    width: 50px;
  }

  .skills h3 {
    font-size: 14px;
  }

  .projects {
    height: 1250px;
  }

  .projects_container {
    width: 90vw;
    height: 1250px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .projects .project {
    width: 300px;
    height: 169px;
    margin: 0;
  }

  .project img {
    width: 300px;
    height: 169px;
  }

  .project .project_label {
    width: 73%;
    height: 45px;
    opacity: 93%;
    position: relative;
    top: -65px;
  }

  .project_label h3 {
    font-size: 14px;
  }

  /* edit below */
  section.contact {
    height: 550px;
  }

  .contact .container {
    flex-direction: column;
    height: 500px;
  }

  .contact .left {
    bottom: 0px;
    width: 350px;
    text-align: center;
  }

  .contact h2 {
    margin: 0;
    text-align: center;
    font-size: 22px;
  }

  .contact span {
    width: fit-content;
    display: inline;
    font-size: 15px;
  }

  .contact .right {
    position: static;
    width: 275px;
    margin-right: 20px;
  }

  .contact input {
    width: 100%;
    height: 7px;
  }

  .contact textarea {
    width: 100%;
    height: 100px;
  }

  .contact button {
    width: 109%;
  }

  .copyright {
    height: 50px;
  }
}

/* Styles for tablets and smaller laptops */
@media screen and (min-width: 768px) and (max-width: 1440px) {
  .intro {
    height: 575px !important;
    overflow: hidden;
  }

  .intro .box {
    left: 0px;
  }

  .intro h1 {
    font-size: 32px;
  }

  .intro p {
    font-size: 14px;
  }

  .description p {
    font-size: 15px;
    text-align: center;
    margin-top: 75px;
  }

  .description h2 {
    font-size: 22px;
  }

  .skills_container {
    width: 100%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    column-gap: 125px;
    row-gap: 5px;
    margin-top: 100px;
  }

  .skills .skill_icon {
    width: 75px;
  }

  .projects {
    height: 800px;
  }

  .projects_container {
    width: 90vw;
    height: 650px;
    margin-top: 25px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    row-gap: 25px;
    column-gap: 25px;
  }

  .projects .project {
    width: 350px;
    height: 197px;
    margin: 0;
  }

  .project img {
    width: 350px;
    height: 197px;
  }

  .project .project_label {
    width: 77%;
    height: 55px;
    opacity: 93%;
    position: relative;
    top: -75px;
  }

  section.contact {
    height: 600px;
  }

  .contact .container {
    flex-direction: column;
    height: 500px;
  }

  .contact .left {
    bottom: 0px;
    width: 350px;
    text-align: center;
  }

  .contact h2 {
    margin: 0;
    margin-top: 25px;
    margin-bottom: 10px;
    text-align: center;
  }

  .contact span {
    width: fit-content;
    display: inline;
  }

  .contact .right {
    position: static;
    width: 400px;
  }

  .contact input {
    width: 100%;
    height: 10px;
  }

  .contact textarea {
    width: 100%;
    height: 100px;
  }

  .contact button {
    width: 106%;
  }

  .copyright {
    height: 75px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/tablets_mobiles.css"],"names":[],"mappings":"AAAA,8BAA8B;AAC9B;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,OAAO;EACT;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,UAAU;IACV,gBAAgB;IAChB,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,aAAa;IACb,kCAAkC;IAClC,qCAAqC;IACrC,gBAAgB;IAChB,aAAa;IACb,iBAAiB;EACnB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,WAAW;IACX,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,UAAU;EACZ;;EAEA;IACE,eAAe;EACjB;;EAEA,eAAe;EACf;IACE,aAAa;EACf;;EAEA;IACE,sBAAsB;IACtB,aAAa;EACf;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;EACpB;;EAEA;IACE,SAAS;IACT,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;EACpB;;EAEA;IACE,WAAW;IACX,WAAW;EACb;;EAEA;IACE,WAAW;IACX,aAAa;EACf;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;EACd;AACF;;AAEA,2CAA2C;AAC3C;EACE;IACE,wBAAwB;IACxB,gBAAgB;EAClB;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,aAAa;IACb,kCAAkC;IAClC,qCAAqC;IACrC,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;EACnB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,kCAAkC;IAClC,qCAAqC;IACrC,aAAa;IACb,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,UAAU;EACZ;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,sBAAsB;IACtB,aAAa;EACf;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;EACpB;;EAEA;IACE,SAAS;IACT,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,YAAY;EACd;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,WAAW;IACX,aAAa;EACf;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;EACd;AACF","sourcesContent":["/* Styles for mobile devices */\n@media screen and (max-width: 767px) {\n  html {\n    overflow-x: hidden;\n  }\n\n  .intro .box {\n    left: 0;\n  }\n\n  .intro h1 {\n    font-size: 24px;\n  }\n\n  .intro p {\n    font-size: 12px;\n  }\n\n  .description {\n    height: 600px;\n  }\n\n  .description p {\n    width: 80%;\n    margin-top: 25px;\n    font-size: 14px;\n    text-align: center;\n  }\n\n  .description h2 {\n    font-size: 20px;\n  }\n\n  .skills_container {\n    width: 100%;\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: repeat(3, 1fr);\n    column-gap: 35px;\n    row-gap: 35px;\n    overflow: visible;\n  }\n\n  .skills .skill_icon {\n    width: 50px;\n  }\n\n  .skills h3 {\n    font-size: 14px;\n  }\n\n  .projects {\n    height: 1250px;\n  }\n\n  .projects_container {\n    width: 90vw;\n    height: 1250px;\n    margin-top: 25px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n  }\n\n  .projects .project {\n    width: 300px;\n    height: 169px;\n    margin: 0;\n  }\n\n  .project img {\n    width: 300px;\n    height: 169px;\n  }\n\n  .project .project_label {\n    width: 73%;\n    height: 45px;\n    opacity: 93%;\n    position: relative;\n    top: -65px;\n  }\n\n  .project_label h3 {\n    font-size: 14px;\n  }\n\n  /* edit below */\n  section.contact {\n    height: 550px;\n  }\n\n  .contact .container {\n    flex-direction: column;\n    height: 500px;\n  }\n\n  .contact .left {\n    bottom: 0px;\n    width: 350px;\n    text-align: center;\n  }\n\n  .contact h2 {\n    margin: 0;\n    text-align: center;\n    font-size: 22px;\n  }\n\n  .contact span {\n    width: fit-content;\n    display: inline;\n    font-size: 15px;\n  }\n\n  .contact .right {\n    position: static;\n    width: 275px;\n    margin-right: 20px;\n  }\n\n  .contact input {\n    width: 100%;\n    height: 7px;\n  }\n\n  .contact textarea {\n    width: 100%;\n    height: 100px;\n  }\n\n  .contact button {\n    width: 109%;\n  }\n\n  .copyright {\n    height: 50px;\n  }\n}\n\n/* Styles for tablets and smaller laptops */\n@media screen and (min-width: 768px) and (max-width: 1440px) {\n  .intro {\n    height: 575px !important;\n    overflow: hidden;\n  }\n\n  .intro .box {\n    left: 0px;\n  }\n\n  .intro h1 {\n    font-size: 32px;\n  }\n\n  .intro p {\n    font-size: 14px;\n  }\n\n  .description p {\n    font-size: 15px;\n    text-align: center;\n    margin-top: 75px;\n  }\n\n  .description h2 {\n    font-size: 22px;\n  }\n\n  .skills_container {\n    width: 100%;\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: repeat(3, 1fr);\n    column-gap: 125px;\n    row-gap: 5px;\n    margin-top: 100px;\n  }\n\n  .skills .skill_icon {\n    width: 75px;\n  }\n\n  .projects {\n    height: 800px;\n  }\n\n  .projects_container {\n    width: 90vw;\n    height: 650px;\n    margin-top: 25px;\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    grid-template-columns: repeat(2, 1fr);\n    row-gap: 25px;\n    column-gap: 25px;\n  }\n\n  .projects .project {\n    width: 350px;\n    height: 197px;\n    margin: 0;\n  }\n\n  .project img {\n    width: 350px;\n    height: 197px;\n  }\n\n  .project .project_label {\n    width: 77%;\n    height: 55px;\n    opacity: 93%;\n    position: relative;\n    top: -75px;\n  }\n\n  section.contact {\n    height: 600px;\n  }\n\n  .contact .container {\n    flex-direction: column;\n    height: 500px;\n  }\n\n  .contact .left {\n    bottom: 0px;\n    width: 350px;\n    text-align: center;\n  }\n\n  .contact h2 {\n    margin: 0;\n    margin-top: 25px;\n    margin-bottom: 10px;\n    text-align: center;\n  }\n\n  .contact span {\n    width: fit-content;\n    display: inline;\n  }\n\n  .contact .right {\n    position: static;\n    width: 400px;\n  }\n\n  .contact input {\n    width: 100%;\n    height: 10px;\n  }\n\n  .contact textarea {\n    width: 100%;\n    height: 100px;\n  }\n\n  .contact button {\n    width: 106%;\n  }\n\n  .copyright {\n    height: 75px;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/css/tablets_mobiles.css":
/*!*************************************!*\
  !*** ./src/css/tablets_mobiles.css ***!
  \*************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tablets_mobiles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./tablets_mobiles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/tablets_mobiles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tablets_mobiles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_tablets_mobiles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_tablets_mobiles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_tablets_mobiles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
const copyright = document.querySelector(".copyright");
const intro = document.querySelector(".intro");
const form = document.querySelector(".form");

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
    e.addMedia();
  };

  const addMedia = () => {
    const code = intro.childNodes[1].childNodes[5];
    copyright.innerHTML = code.innerHTML;
  };

  return {
    addContainer,
    addMedia,
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
  "Dashboard (grid)",
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
    if (window.innerWidth > 1440) e.showLabel();
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
/* harmony import */ var _images_calm_image_md_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/calm_image_md.jpg */ "./src/images/calm_image_md.jpg");
/* harmony import */ var _images_calm_image_sm_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/calm_image_sm.png */ "./src/images/calm_image_sm.png");
// Import Images




// Import html Elements
const intro = document.querySelector(".intro");
const navbar = document.querySelector("header");
const anchors = document.querySelectorAll("a");
const me = document.querySelector(".me");
const block = document.querySelector(".block"); // cursor after name

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

  // Check the current screen size and apply appropriate styles
  const checkScreenSize = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      intro.style.background = "url('images/calm_image_sm.png') no-repeat";
    } else if (window.matchMedia("(max-width: 1023px)").matches) {
      intro.style.background = "url('images/calm_image_md.jpg') no-repeat";
    } else {
      intro.style.background = "url('images/calm_image.png')";
    }
  };

  return { animateText, blinkOnce, checkScreenSize };
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
const form = document.querySelector(".form");
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
      return valid;
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

/***/ "./src/images/calm_image_md.jpg":
/*!**************************************!*\
  !*** ./src/images/calm_image_md.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/calm_image_md.jpg";

/***/ }),

/***/ "./src/images/calm_image_sm.png":
/*!**************************************!*\
  !*** ./src/images/calm_image_sm.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/calm_image_sm.png";

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
/* harmony import */ var _css_tablets_mobiles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/tablets_mobiles.css */ "./src/css/tablets_mobiles.css");
// Import javascript





// Import css styling



_javascript_introduction__WEBPACK_IMPORTED_MODULE_1__["default"].animateText();
_javascript_description__WEBPACK_IMPORTED_MODULE_0__["default"].addSkills();
_javascript_description__WEBPACK_IMPORTED_MODULE_0__["default"].addProjects();
_javascript_contact__WEBPACK_IMPORTED_MODULE_3__["default"].addContainer();
_javascript_sendMessage__WEBPACK_IMPORTED_MODULE_2__["default"].submitMessage();
window.addEventListener("load", _javascript_introduction__WEBPACK_IMPORTED_MODULE_1__["default"].checkScreenSize);
window.addEventListener("resize", _javascript_introduction__WEBPACK_IMPORTED_MODULE_1__["default"].checkScreenSize);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGdIQUFnSCxJQUFJLElBQUksa0JBQWtCO0FBQzFJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxxRkFBcUYsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxh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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxxR0FBcUcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLFVBQVUsS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLGdHQUFnRyxVQUFVLHlCQUF5QixLQUFLLG1CQUFtQixjQUFjLEtBQUssaUJBQWlCLHNCQUFzQixLQUFLLGdCQUFnQixzQkFBc0IsS0FBSyxvQkFBb0Isb0JBQW9CLEtBQUssc0JBQXNCLGlCQUFpQix1QkFBdUIsc0JBQXNCLHlCQUF5QixLQUFLLHVCQUF1QixzQkFBc0IsS0FBSyx5QkFBeUIsa0JBQWtCLG9CQUFvQix5Q0FBeUMsNENBQTRDLHVCQUF1QixvQkFBb0Isd0JBQXdCLEtBQUssMkJBQTJCLGtCQUFrQixLQUFLLGtCQUFrQixzQkFBc0IsS0FBSyxpQkFBaUIscUJBQXFCLEtBQUssMkJBQTJCLGtCQUFrQixxQkFBcUIsdUJBQXVCLG9CQUFvQiw2QkFBNkIsb0NBQW9DLDBCQUEwQixLQUFLLDBCQUEwQixtQkFBbUIsb0JBQW9CLGdCQUFnQixLQUFLLG9CQUFvQixtQkFBbUIsb0JBQW9CLEtBQUssK0JBQStCLGlCQUFpQixtQkFBbUIsbUJBQW1CLHlCQUF5QixpQkFBaUIsS0FBSyx5QkFBeUIsc0JBQXNCLEtBQUssMkNBQTJDLG9CQUFvQixLQUFLLDJCQUEyQiw2QkFBNkIsb0JBQW9CLEtBQUssc0JBQXNCLGtCQUFrQixtQkFBbUIseUJBQXlCLEtBQUssbUJBQW1CLGdCQUFnQix5QkFBeUIsc0JBQXNCLEtBQUsscUJBQXFCLHlCQUF5QixzQkFBc0Isc0JBQXNCLEtBQUssdUJBQXVCLHVCQUF1QixtQkFBbUIseUJBQXlCLEtBQUssc0JBQXNCLGtCQUFrQixrQkFBa0IsS0FBSyx5QkFBeUIsa0JBQWtCLG9CQUFvQixLQUFLLHVCQUF1QixrQkFBa0IsS0FBSyxrQkFBa0IsbUJBQW1CLEtBQUssR0FBRyxnSEFBZ0gsWUFBWSwrQkFBK0IsdUJBQXVCLEtBQUssbUJBQW1CLGdCQUFnQixLQUFLLGlCQUFpQixzQkFBc0IsS0FBSyxnQkFBZ0Isc0JBQXNCLEtBQUssc0JBQXNCLHNCQUFzQix5QkFBeUIsdUJBQXVCLEtBQUssdUJBQXVCLHNCQUFzQixLQUFLLHlCQUF5QixrQkFBa0Isb0JBQW9CLHlDQUF5Qyw0Q0FBNEMsd0JBQXdCLG1CQUFtQix3QkFBd0IsS0FBSywyQkFBMkIsa0JBQWtCLEtBQUssaUJBQWlCLG9CQUFvQixLQUFLLDJCQUEyQixrQkFBa0Isb0JBQW9CLHVCQUF1QixvQkFBb0IseUNBQXlDLDRDQUE0QyxvQkFBb0IsdUJBQXVCLEtBQUssMEJBQTBCLG1CQUFtQixvQkFBb0IsZ0JBQWdCLEtBQUssb0JBQW9CLG1CQUFtQixvQkFBb0IsS0FBSywrQkFBK0IsaUJBQWlCLG1CQUFtQixtQkFBbUIseUJBQXlCLGlCQUFpQixLQUFLLHVCQUF1QixvQkFBb0IsS0FBSywyQkFBMkIsNkJBQTZCLG9CQUFvQixLQUFLLHNCQUFzQixrQkFBa0IsbUJBQW1CLHlCQUF5QixLQUFLLG1CQUFtQixnQkFBZ0IsdUJBQXVCLDBCQUEwQix5QkFBeUIsS0FBSyxxQkFBcUIseUJBQXlCLHNCQUFzQixLQUFLLHVCQUF1Qix1QkFBdUIsbUJBQW1CLEtBQUssc0JBQXNCLGtCQUFrQixtQkFBbUIsS0FBSyx5QkFBeUIsa0JBQWtCLG9CQUFvQixLQUFLLHVCQUF1QixrQkFBa0IsS0FBSyxrQkFBa0IsbUJBQW1CLEtBQUssR0FBRyxxQkFBcUI7QUFDOTdMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDblIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBdUc7QUFDdkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUlpRDtBQUN6RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWdIO0FBQ2hIO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsZ0dBQU87Ozs7QUFJMEQ7QUFDbEYsT0FBTyxpRUFBZSxnR0FBTyxJQUFJLGdHQUFPLFVBQVUsZ0dBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Qlc7QUFDRDtBQUNPO0FBQ0w7QUFDTztBQUNDO0FBQ0o7QUFDQztBQUNOO0FBQ007QUFDSDtBQUNKOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsNkJBQTZCLDJCQUEyQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixLQUFLO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdCQUFnQjtBQUNsRTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsZ0JBQWdCO0FBQzlFLDREQUE0RCxnQkFBZ0I7QUFDNUUsd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9KakI7QUFDa0M7QUFDRztBQUNBOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxNQUFNO0FBQ04sc0JBQXNCO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzVHakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEdqQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNtRDtBQUNFO0FBQ047QUFDSjs7QUFFM0M7QUFDMEI7QUFDUzs7QUFFbkMsZ0VBQVk7QUFDWiwrREFBVztBQUNYLCtEQUFXO0FBQ1gsMkRBQU87QUFDUCwrREFBTztBQUNQLGdDQUFnQyxnRUFBWTtBQUM1QyxrQ0FBa0MsZ0VBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vc3JjL2Nzcy90YWJsZXRzX21vYmlsZXMuY3NzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vc3JjL2Nzcy9zdHlsZXMuY3NzPzk5YTMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vc3JjL2Nzcy90YWJsZXRzX21vYmlsZXMuY3NzPzkyMmIiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9zcmMvamF2YXNjcmlwdC9jb250YWN0LmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL3NyYy9qYXZhc2NyaXB0L2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL3NyYy9qYXZhc2NyaXB0L2ludHJvZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9zcmMvamF2YXNjcmlwdC9zZW5kTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215X3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL215X3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBOYXZiYXIgU3R5bGluZyAqL1xuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDc1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAtNzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XG4gIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDI7XG59XG5cbmhlYWRlci5hY3RpdmUge1xuICB0b3A6IDBweDtcbn1cblxuaGVhZGVyIHVsIHtcbiAgd2lkdGg6IDcwJTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5oZWFkZXIgdWwgbGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmhlYWRlciB1bCBsaTpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW46IDA7XG59XG5cbmhlYWRlciB1bCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzk5OTk5OTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuaGVhZGVyIHVsIGE6aG92ZXIge1xuICBjb2xvcjogI2I1OWQ3Yztcbn1cblxuaGVhZGVyIHVsIGEuYWN0aXZlIHtcbiAgY29sb3I6ICNiNTlkN2M7XG59XG5cbm1haW4ge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubWFpbiAuaW50cm8ge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW50cm8gLmJveCB7XG4gIHdpZHRoOiA3MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNzVweDtcbn1cblxuLmludHJvIGgxIHtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnRybyBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaW50cm8gLnNvY2lhbF9tZWRpYSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zb2NpYWxfbWVkaWEgYSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBoZWlnaHQ6IDgwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uZGVzY3JpcHRpb24gcCB7XG4gIHdpZHRoOiA3MCU7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbn1cblxuLmRlc2NyaXB0aW9uIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG4vKiBTbGlkZXIgb2Ygc2tpbGxzIGhlcmUgKi9cbi5za2lsbHMge1xuICB3aWR0aDogNzB2dztcbiAgaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNraWxsc19jb250YWluZXIge1xuICB3aWR0aDogMTI1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5za2lsbHMgLnNraWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG4uc2tpbGxzIC5za2lsbF9pY29uIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uc2tpbGxzIGgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKiBQcm9qZWN0cyBsaXN0ICovXG4ucHJvamVjdHMge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogNzUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3RzIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnByb2plY3RzX2NvbnRhaW5lciB7XG4gIHdpZHRoOiA3MHZ3O1xuICBoZWlnaHQ6IDU1MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvamVjdHMgLnByb2plY3Qge1xuICB3aWR0aDogNDEwcHg7XG4gIGhlaWdodDogMjMxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IC01cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9qZWN0cyBpbWcge1xuICB3aWR0aDogNDEwcHg7XG4gIGhlaWdodDogMjMxcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5wcm9qZWN0cyBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5wcm9qZWN0IC5wcm9qZWN0X2xhYmVsIHtcbiAgd2lkdGg6IDMzMHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaW5zZXQ6IDE0MHB4IDE1cHg7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAtMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIG9wYWNpdHk6IDAlO1xufVxuXG4ucHJvamVjdF9sYWJlbDpob3ZlciB7XG4gIG9wYWNpdHk6IDEwMCU7XG59XG5cbi5wcm9qZWN0X2xhYmVsIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnByb2plY3RfbGFiZWwgaSB7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnByb2plY3RfbGFiZWwgaTpob3ZlciB7XG4gIGNvbG9yOiAjYjU5ZDdjO1xufVxuXG4vKiBHZXQgaW4gdG91Y2ggKi9cbnNlY3Rpb24uY29udGFjdCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA2MDBweDtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250YWN0IGgyIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4uY29udGFjdCAuY29udGFpbmVyIHtcbiAgd2lkdGg6IDY1dnc7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QgLmxlZnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTI1cHg7XG59XG5cbi5jb250YWN0IC5yaWdodCB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMzVweDtcbn1cblxuLmNvbnRhY3Qgc3BhbiB7XG4gIHdpZHRoOiAyMjVweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29udGFjdCBpbnB1dCB7XG4gIHdpZHRoOiA5NSU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDdweCAwO1xufVxuXG4uY29udGFjdCAubWVzc2FnZV9ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250YWN0IC5tZXNzYWdlX2JveC5pbnZhbGlkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIipcIjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogcmVkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0yMHB4O1xuICB0b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbnRhY3QgaW5wdXQ6Zm9jdXMsXG4uY29udGFjdCB0ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY29udGFjdCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogN3B4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uY29udGFjdCBpbnB1dDo6cGxhY2Vob2xkZXIsXG4uY29udGFjdCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5jb250YWN0IGJ1dHRvbiB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4cHgpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDdweCAwO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29udGFjdCBidXR0b246aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb3B5cmlnaHQge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29weXJpZ2h0IGkge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb3B5cmlnaHQgaTpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4Qiw4Q0FBOEM7RUFDOUMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxj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QTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxnQ0FBZ0M7RUFDaEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBOYXZiYXIgU3R5bGluZyAqL1xcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IC03NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xcbiAgYm94LXNoYWRvdzogMCAxcHggMTBweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbmhlYWRlci5hY3RpdmUge1xcbiAgdG9wOiAwcHg7XFxufVxcblxcbmhlYWRlciB1bCB7XFxuICB3aWR0aDogNzAlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIgdWwgbGkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmhlYWRlciB1bCBsaTpsYXN0LW9mLXR5cGUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oZWFkZXIgdWwgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzk5OTk5OTtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbmhlYWRlciB1bCBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjYjU5ZDdjO1xcbn1cXG5cXG5oZWFkZXIgdWwgYS5hY3RpdmUge1xcbiAgY29sb3I6ICNiNTlkN2M7XFxufVxcblxcbm1haW4ge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm1haW4gLmludHJvIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnRybyAuYm94IHtcXG4gIHdpZHRoOiA3MCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA3NXB4O1xcbn1cXG5cXG4uaW50cm8gaDEge1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pbnRybyBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmludHJvIC5zb2NpYWxfbWVkaWEge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLnNvY2lhbF9tZWRpYSBhIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGhlaWdodDogODAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbiBwIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6ICM5OTk5OTk7XFxuICBtYXJnaW4tdG9wOiAxNTBweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogIzk5OTk5OTtcXG59XFxuXFxuLyogU2xpZGVyIG9mIHNraWxscyBoZXJlICovXFxuLnNraWxscyB7XFxuICB3aWR0aDogNzB2dztcXG4gIGhlaWdodDogMzAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5za2lsbHNfY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMjUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnNraWxscyAuc2tpbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogIzk5OTk5OTtcXG59XFxuXFxuLnNraWxscyAuc2tpbGxfaWNvbiB7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5za2lsbHMgaDMge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLyogUHJvamVjdHMgbGlzdCAqL1xcbi5wcm9qZWN0cyB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDc1MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cyBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ucHJvamVjdHNfY29udGFpbmVyIHtcXG4gIHdpZHRoOiA3MHZ3O1xcbiAgaGVpZ2h0OiA1NTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cyAucHJvamVjdCB7XFxuICB3aWR0aDogNDEwcHg7XFxuICBoZWlnaHQ6IDIzMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IC01cHg7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdHMgaW1nIHtcXG4gIHdpZHRoOiA0MTBweDtcXG4gIGhlaWdodDogMjMxcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ucHJvamVjdHMgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5wcm9qZWN0IC5wcm9qZWN0X2xhYmVsIHtcXG4gIHdpZHRoOiAzMzBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaW5zZXQ6IDE0MHB4IDE1cHg7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgei1pbmRleDogMTtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAtMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAyNXB4O1xcbiAgb3BhY2l0eTogMCU7XFxufVxcblxcbi5wcm9qZWN0X2xhYmVsOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0X2xhYmVsIGgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzk5OTk5OTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnByb2plY3RfbGFiZWwgaSB7XFxuICBjb2xvcjogIzk5OTk5OTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdF9sYWJlbCBpOmhvdmVyIHtcXG4gIGNvbG9yOiAjYjU5ZDdjO1xcbn1cXG5cXG4vKiBHZXQgaW4gdG91Y2ggKi9cXG5zZWN0aW9uLmNvbnRhY3Qge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jb250YWN0IGgyIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuLmNvbnRhY3QgLmNvbnRhaW5lciB7XFxuICB3aWR0aDogNjV2dztcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QgLmxlZnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAxMjVweDtcXG59XFxuXFxuLmNvbnRhY3QgLnJpZ2h0IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMzVweDtcXG59XFxuXFxuLmNvbnRhY3Qgc3BhbiB7XFxuICB3aWR0aDogMjI1cHg7XFxuICBjb2xvcjogIzk5OTk5OTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY29udGFjdCBpbnB1dCB7XFxuICB3aWR0aDogOTUlO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogN3B4IDA7XFxufVxcblxcbi5jb250YWN0IC5tZXNzYWdlX2JveCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb250YWN0IC5tZXNzYWdlX2JveC5pbnZhbGlkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIipcXFwiO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgY29sb3I6IHJlZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0yMHB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uY29udGFjdCBpbnB1dDpmb2N1cyxcXG4uY29udGFjdCB0ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5jb250YWN0IHRleHRhcmVhIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiA3cHggMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY29udGFjdCBpbnB1dDo6cGxhY2Vob2xkZXIsXFxuLmNvbnRhY3QgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi5jb250YWN0IGJ1dHRvbiB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDdweCAwO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmNvbnRhY3QgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29weXJpZ2h0IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29weXJpZ2h0IGkge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY29weXJpZ2h0IGk6Zmlyc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBTdHlsZXMgZm9yIG1vYmlsZSBkZXZpY2VzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBodG1sIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cblxuICAuaW50cm8gLmJveCB7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gIC5pbnRybyBoMSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG5cbiAgLmludHJvIHAge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiBwIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLnNraWxsc19jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGNvbHVtbi1nYXA6IDM1cHg7XG4gICAgcm93LWdhcDogMzVweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIC5za2lsbHMgLnNraWxsX2ljb24ge1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG5cbiAgLnNraWxscyBoMyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLnByb2plY3RzIHtcbiAgICBoZWlnaHQ6IDEyNTBweDtcbiAgfVxuXG4gIC5wcm9qZWN0c19jb250YWluZXIge1xuICAgIHdpZHRoOiA5MHZ3O1xuICAgIGhlaWdodDogMTI1MHB4O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAucHJvamVjdHMgLnByb2plY3Qge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDE2OXB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5wcm9qZWN0IGltZyB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMTY5cHg7XG4gIH1cblxuICAucHJvamVjdCAucHJvamVjdF9sYWJlbCB7XG4gICAgd2lkdGg6IDczJTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgb3BhY2l0eTogOTMlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC02NXB4O1xuICB9XG5cbiAgLnByb2plY3RfbGFiZWwgaDMge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC8qIGVkaXQgYmVsb3cgKi9cbiAgc2VjdGlvbi5jb250YWN0IHtcbiAgICBoZWlnaHQ6IDU1MHB4O1xuICB9XG5cbiAgLmNvbnRhY3QgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9XG5cbiAgLmNvbnRhY3QgLmxlZnQge1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY29udGFjdCBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxuICAuY29udGFjdCBzcGFuIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG4gIC5jb250YWN0IC5yaWdodCB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogMjc1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG5cbiAgLmNvbnRhY3QgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogN3B4O1xuICB9XG5cbiAgLmNvbnRhY3QgdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cblxuICAuY29udGFjdCBidXR0b24ge1xuICAgIHdpZHRoOiAxMDklO1xuICB9XG5cbiAgLmNvcHlyaWdodCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG59XG5cbi8qIFN0eWxlcyBmb3IgdGFibGV0cyBhbmQgc21hbGxlciBsYXB0b3BzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuaW50cm8ge1xuICAgIGhlaWdodDogNTc1cHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmludHJvIC5ib3gge1xuICAgIGxlZnQ6IDBweDtcbiAgfVxuXG4gIC5pbnRybyBoMSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG5cbiAgLmludHJvIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiBwIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDc1cHg7XG4gIH1cblxuICAuZGVzY3JpcHRpb24gaDIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuXG4gIC5za2lsbHNfY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBjb2x1bW4tZ2FwOiAxMjVweDtcbiAgICByb3ctZ2FwOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIH1cblxuICAuc2tpbGxzIC5za2lsbF9pY29uIHtcbiAgICB3aWR0aDogNzVweDtcbiAgfVxuXG4gIC5wcm9qZWN0cyB7XG4gICAgaGVpZ2h0OiA4MDBweDtcbiAgfVxuXG4gIC5wcm9qZWN0c19jb250YWluZXIge1xuICAgIHdpZHRoOiA5MHZ3O1xuICAgIGhlaWdodDogNjUwcHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICByb3ctZ2FwOiAyNXB4O1xuICAgIGNvbHVtbi1nYXA6IDI1cHg7XG4gIH1cblxuICAucHJvamVjdHMgLnByb2plY3Qge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDE5N3B4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5wcm9qZWN0IGltZyB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMTk3cHg7XG4gIH1cblxuICAucHJvamVjdCAucHJvamVjdF9sYWJlbCB7XG4gICAgd2lkdGg6IDc3JTtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgb3BhY2l0eTogOTMlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC03NXB4O1xuICB9XG5cbiAgc2VjdGlvbi5jb250YWN0IHtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICB9XG5cbiAgLmNvbnRhY3QgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9XG5cbiAgLmNvbnRhY3QgLmxlZnQge1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY29udGFjdCBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY29udGFjdCBzcGFuIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG5cbiAgLmNvbnRhY3QgLnJpZ2h0IHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgfVxuXG4gIC5jb250YWN0IGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gIH1cblxuICAuY29udGFjdCB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuXG4gIC5jb250YWN0IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwNiU7XG4gIH1cblxuICAuY29weXJpZ2h0IHtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy90YWJsZXRzX21vYmlsZXMu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QTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogU3R5bGVzIGZvciBtb2JpbGUgZGV2aWNlcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICBodG1sIHtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgfVxcblxcbiAgLmludHJvIC5ib3gge1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcblxcbiAgLmludHJvIGgxIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgfVxcblxcbiAgLmludHJvIHAge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxuXFxuICAuZGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgfVxcblxcbiAgLmRlc2NyaXB0aW9uIHAge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5kZXNjcmlwdGlvbiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG5cXG4gIC5za2lsbHNfY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGNvbHVtbi1nYXA6IDM1cHg7XFxuICAgIHJvdy1nYXA6IDM1cHg7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgfVxcblxcbiAgLnNraWxscyAuc2tpbGxfaWNvbiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgfVxcblxcbiAgLnNraWxscyBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0cyB7XFxuICAgIGhlaWdodDogMTI1MHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3RzX2NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBoZWlnaHQ6IDEyNTBweDtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAucHJvamVjdHMgLnByb2plY3Qge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMTY5cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0IGltZyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAxNjlweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0IC5wcm9qZWN0X2xhYmVsIHtcXG4gICAgd2lkdGg6IDczJTtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBvcGFjaXR5OiA5MyU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtNjVweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0X2xhYmVsIGgzIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcblxcbiAgLyogZWRpdCBiZWxvdyAqL1xcbiAgc2VjdGlvbi5jb250YWN0IHtcXG4gICAgaGVpZ2h0OiA1NTBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0IC5jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QgLmxlZnQge1xcbiAgICBib3R0b206IDBweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY29udGFjdCBoMiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICB9XFxuXFxuICAuY29udGFjdCBzcGFuIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0IC5yaWdodCB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIHdpZHRoOiAyNzVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QgaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA3cHg7XFxuICB9XFxuXFxuICAuY29udGFjdCB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwOSU7XFxuICB9XFxuXFxuICAuY29weXJpZ2h0IHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgfVxcbn1cXG5cXG4vKiBTdHlsZXMgZm9yIHRhYmxldHMgYW5kIHNtYWxsZXIgbGFwdG9wcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XFxuICAuaW50cm8ge1xcbiAgICBoZWlnaHQ6IDU3NXB4ICFpbXBvcnRhbnQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuXFxuICAuaW50cm8gLmJveCB7XFxuICAgIGxlZnQ6IDBweDtcXG4gIH1cXG5cXG4gIC5pbnRybyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gIH1cXG5cXG4gIC5pbnRybyBwIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcblxcbiAgLmRlc2NyaXB0aW9uIHAge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogNzVweDtcXG4gIH1cXG5cXG4gIC5kZXNjcmlwdGlvbiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gIH1cXG5cXG4gIC5za2lsbHNfY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGNvbHVtbi1nYXA6IDEyNXB4O1xcbiAgICByb3ctZ2FwOiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgfVxcblxcbiAgLnNraWxscyAuc2tpbGxfaWNvbiB7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgfVxcblxcbiAgLnByb2plY3RzIHtcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0c19jb250YWluZXIge1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgaGVpZ2h0OiA2NTBweDtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgcm93LWdhcDogMjVweDtcXG4gICAgY29sdW1uLWdhcDogMjVweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0cyAucHJvamVjdCB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAxOTdweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgLnByb2plY3QgaW1nIHtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDE5N3B4O1xcbiAgfVxcblxcbiAgLnByb2plY3QgLnByb2plY3RfbGFiZWwge1xcbiAgICB3aWR0aDogNzclO1xcbiAgICBoZWlnaHQ6IDU1cHg7XFxuICAgIG9wYWNpdHk6IDkzJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC03NXB4O1xcbiAgfVxcblxcbiAgc2VjdGlvbi5jb250YWN0IHtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0IC5jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QgLmxlZnQge1xcbiAgICBib3R0b206IDBweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY29udGFjdCBoMiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNvbnRhY3Qgc3BhbiB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QgLnJpZ2h0IHtcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QgaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QgdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDYlO1xcbiAgfVxcblxcbiAgLmNvcHlyaWdodCB7XFxuICAgIGhlaWdodDogNzVweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWJsZXRzX21vYmlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWJsZXRzX21vYmlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvcHlyaWdodFwiKTtcbmNvbnN0IGludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyb1wiKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XG5cbmNvbnN0IGUgPSAoKCkgPT4ge1xuICBjb25zdCBhZGRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBib3guY2xhc3NMaXN0LmFkZChcIm1lc3NhZ2VfYm94XCIpO1xuICAgICAgYm94LmFwcGVuZENoaWxkKGZvcm0uY2hpbGROb2Rlc1tpICsgMV0pO1xuICAgICAgZGF0YS5hcHBlbmRDaGlsZChib3gpO1xuICAgIH1cbiAgICBkYXRhLmFwcGVuZENoaWxkKGZvcm0uY2hpbGROb2Rlc1s1XSk7XG4gICAgZm9ybS5pbm5lckhUTUwgPSBkYXRhLmlubmVySFRNTDtcbiAgICBlLmFkZE1lZGlhKCk7XG4gIH07XG5cbiAgY29uc3QgYWRkTWVkaWEgPSAoKSA9PiB7XG4gICAgY29uc3QgY29kZSA9IGludHJvLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1s1XTtcbiAgICBjb3B5cmlnaHQuaW5uZXJIVE1MID0gY29kZS5pbm5lckhUTUw7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRDb250YWluZXIsXG4gICAgYWRkTWVkaWEsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBlO1xuIiwiaW1wb3J0IFwiLi4vaW1hZ2VzL2h0bWwuc3ZnXCI7XG5pbXBvcnQgXCIuLi9pbWFnZXMvY3NzLnN2Z1wiO1xuaW1wb3J0IFwiLi4vaW1hZ2VzL2phdmFzY3JpcHQuc3ZnXCI7XG5pbXBvcnQgXCIuLi9pbWFnZXMvbGludXguc3ZnXCI7XG5pbXBvcnQgXCIuLi9pbWFnZXMvbGFuZGluZ19wYWdlLnBuZ1wiO1xuaW1wb3J0IFwiLi4vaW1hZ2VzL2V0Y2hfYV9za2V0Y2gucG5nXCI7XG5pbXBvcnQgXCIuLi9pbWFnZXMvZGFzaGJvYXJkLnBuZ1wiO1xuaW1wb3J0IFwiLi4vaW1hZ2VzL2NhbGN1bGF0b3IucG5nXCI7XG5pbXBvcnQgXCIuLi9pbWFnZXMvZm9ybS5wbmdcIjtcbmltcG9ydCBcIi4uL2ltYWdlcy9teV9saWJyYXJ5LnBuZ1wiO1xuaW1wb3J0IFwiLi4vaW1hZ2VzL3dlYnBhY2suc3ZnXCI7XG5pbXBvcnQgXCIuLi9pbWFnZXMvZ2l0LnN2Z1wiO1xuXG5jb25zdCBza2lsbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2tpbGxzX2NvbnRhaW5lclwiKTtcbmNvbnN0IHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2tpbGxzXCIpO1xuY29uc3QgcHJvamVjdHNCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzX2NvbnRhaW5lclwiKTtcblxuY29uc3Qgc2tpbGxJY29ucyA9IFtcbiAgXCJodG1sLnN2Z1wiLFxuICBcImNzcy5zdmdcIixcbiAgXCJqYXZhc2NyaXB0LnN2Z1wiLFxuICBcIndlYnBhY2suc3ZnXCIsXG4gIFwiZ2l0LnN2Z1wiLFxuICBcImxpbnV4LnN2Z1wiLFxuXTtcbmNvbnN0IHByb2plY3RJY29ucyA9IFtcbiAgXCJsYW5kaW5nX3BhZ2UucG5nXCIsXG4gIFwiZXRjaF9hX3NrZXRjaC5wbmdcIixcbiAgXCJkYXNoYm9hcmQucG5nXCIsXG4gIFwiY2FsY3VsYXRvci5wbmdcIixcbiAgXCJmb3JtLnBuZ1wiLFxuICBcIm15X2xpYnJhcnkucG5nXCIsXG5dO1xuY29uc3QgcHJvamVjdExpbmtzID0gW1xuICBcIkxhbmRpbmdfcGFnZVwiLFxuICBcIkV0Y2gtYS1Ta2V0Y2hcIixcbiAgXCJkYXNoYm9hcmRfdXNpbmdfZ3JpZFwiLFxuICBcIkNhbGN1bGF0b3JcIixcbiAgXCJmaXJzdF9mb3JtX3BhZ2VcIixcbiAgXCJteUxpYnJhcnlcIixcbl07XG5jb25zdCBwcm9qZWN0TmFtZXMgPSBbXG4gIFwiTGFuZGluZyBQYWdlXCIsXG4gIFwiRXRjaCBhIFNrZXRjaFwiLFxuICBcIkRhc2hib2FyZCAoZ3JpZClcIixcbiAgXCJDYWxjdWxhdG9yXCIsXG4gIFwiRm9ybSBQYWdlXCIsXG4gIFwiTXkgTGlicmFyeVwiLFxuXTtcblxuY29uc3QgZSA9ICgoKSA9PiB7XG4gIC8vIEFkZCBza2lsbHMgdG8gdGhlIHNsaWRlclxuICBjb25zdCBhZGRTa2lsbHMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNraWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNraWxsLmNsYXNzTGlzdC5hZGQoYHNraWxsYCk7XG4gICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGljb24uc3JjID0gYGltYWdlcy8ke3NraWxsSWNvbnNbaV19YDtcbiAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcInNraWxsX2ljb25cIik7XG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gYCR7c2tpbGxJY29uc1tpXS5zbGljZSgwLCAtNCl9YDtcbiAgICAgIHNraWxsQm94LmFwcGVuZENoaWxkKHNraWxsKTtcbiAgICAgIHNraWxsQm94LmNoaWxkTm9kZXNbaV0uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICBza2lsbEJveC5jaGlsZE5vZGVzW2ldLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQWRkIHNsaWRlaW5nIHRvIHRoZSBza2lsbHMgc2xpZGVyXG4gIGNvbnN0IGFkZFNsaWRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGxlZnQuY2xhc3NOYW1lID0gXCJieCBieHMtY2hldnJvbi1sZWZ0IGJ4LWxnXCI7XG4gICAgcmlnaHQuY2xhc3NOYW1lID0gXCJieCBieHMtY2hldnJvbi1yaWdodCBieC1sZ1wiO1xuICAgIHNraWxscy5hcHBlbmRDaGlsZChsZWZ0KTtcbiAgICBza2lsbHMuYXBwZW5kQ2hpbGQocmlnaHQpO1xuICB9O1xuXG4gIGNvbnN0IHNraWxsQm94U3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShza2lsbEJveCk7XG5cbiAgLy8gTW92ZSBzbGlkZXIgbGVmdCBvciByaWdodFxuICBjb25zdCBtb3ZlU2xpZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGFycm93TGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnhzLWNoZXZyb24tbGVmdFwiKTtcbiAgICBjb25zdCBhcnJvd1JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ieHMtY2hldnJvbi1yaWdodFwiKTtcbiAgICBhcnJvd0xlZnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUuc2xpZGUpO1xuICAgIGFycm93UmlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUuc2xpZGUpO1xuICB9O1xuXG4gIC8vIE1vdmUgc2xpZGVyIGxlZnQgb3IgcmlnaHRcbiAgY29uc3Qgc2xpZGUgPSAoKSA9PiB7XG4gICAgbGV0IGxlZnQgPSBwYXJzZUludChza2lsbEJveFN0eWxlcy5sZWZ0LCAxMCk7XG4gICAgaWYgKGxlZnQgPiAwKSB7XG4gICAgICBsZWZ0IC09IDYyNTtcbiAgICB9IGVsc2UgaWYgKGxlZnQgPiAtNTAwKSB7XG4gICAgICBsZWZ0ICs9IDYyNTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cobGVmdCk7XG4gICAgc2tpbGxCb3guc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuICB9O1xuXG4gIC8vIEFkZCBwcm9qZWN0cyB0byB0aGUgcHJvamVjdHMgY29udGFpbmVyXG4gIGNvbnN0IGFkZFByb2plY3RzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgYW5jaG9yLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgIGFuY2hvci5jbGFzc05hbWUgPSBcInByb2plY3RBbmNob3JcIjtcbiAgICAgIGFuY2hvci5ocmVmID0gYGh0dHBzOi8vdmlrYXMyMzYuZ2l0aHViLmlvLyR7cHJvamVjdExpbmtzW2ldfWA7XG4gICAgICBhbmNob3IudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICBpbWFnZS5zcmMgPSBgaW1hZ2VzLyR7cHJvamVjdEljb25zW2ldfWA7XG4gICAgICBwcm9qZWN0c0JveC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICAgIHByb2plY3RzQm94LmNoaWxkTm9kZXNbaV0uYXBwZW5kQ2hpbGQoYW5jaG9yKTtcbiAgICAgIGUuYWRkUHJvamVjdExhYmVscyhpKTtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTQ0MCkgZS5zaG93TGFiZWwoKTtcbiAgfTtcblxuICAvLyBBZGQgbGFiZWxzIHRvIHRoZSBwcm9qZWN0c1xuICBjb25zdCBhZGRQcm9qZWN0TGFiZWxzID0gKGkpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBpY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWNvbnMuY2xhc3NOYW1lID0gXCJjb2RlX2xpbmtzXCI7XG4gICAgaWNvbnMuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmlrYXMyMzYvJHtwcm9qZWN0TGlua3NbaV19XCIgdGFyZ2V0PV9ibGFuaz48aSBjbGFzcz1cImJ4IGJ4LWNvZGUtYWx0IGJ4LXNtXCIgPjwvYT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdmlrYXMyMzYuZ2l0aHViLmlvLyR7cHJvamVjdExpbmtzW2ldfVwiICB0YXJnZXQ9X2JsYW5rPjxpIGNsYXNzPVwiYnggYngtbGluay1leHRlcm5hbCBieC1zbVwiPjwvaT48L2E+YDtcbiAgICBoMy50ZXh0Q29udGVudCA9IGAke3Byb2plY3ROYW1lc1tpXX1gO1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKGgzKTtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpY29ucyk7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInByb2plY3RfbGFiZWxcIik7XG4gICAgcHJvamVjdFtpXS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIH07XG5cbiAgLy8gU2hvdyBsYWJlbCBieSBob3ZlcmluZyBvbiBwcm9qZWN0XG4gIGNvbnN0IHNob3dMYWJlbCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0X2xhYmVsXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSArPSAxKSB7XG4gICAgICBwcm9qZWN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICBsYWJlbFtpXS5zdHlsZS5vcGFjaXR5ID0gXCIxMDAlXCI7XG4gICAgICB9KTtcbiAgICAgIHByb2plY3RbaV0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgICAgbGFiZWxbaV0uc3R5bGUub3BhY2l0eSA9IFwiMCVcIjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZFNraWxscyxcbiAgICBhZGRQcm9qZWN0cyxcbiAgICBhZGRQcm9qZWN0TGFiZWxzLFxuICAgIGFkZFNsaWRlLFxuICAgIG1vdmVTbGlkZXIsXG4gICAgc2xpZGUsXG4gICAgc2hvd0xhYmVsLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZTtcbiIsIi8vIEltcG9ydCBJbWFnZXNcbmltcG9ydCBcIi4uL2ltYWdlcy9jYWxtX2ltYWdlLnBuZ1wiO1xuaW1wb3J0IFwiLi4vaW1hZ2VzL2NhbG1faW1hZ2VfbWQuanBnXCI7XG5pbXBvcnQgXCIuLi9pbWFnZXMvY2FsbV9pbWFnZV9zbS5wbmdcIjtcblxuLy8gSW1wb3J0IGh0bWwgRWxlbWVudHNcbmNvbnN0IGludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyb1wiKTtcbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG5jb25zdCBhbmNob3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIik7XG5jb25zdCBtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVcIik7XG5jb25zdCBibG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvY2tcIik7IC8vIGN1cnNvciBhZnRlciBuYW1lXG5cbmludHJvLnN0eWxlLmJhY2tncm91bmQgPSBcInVybCgnaW1hZ2VzL2NhbG1faW1hZ2UucG5nJylcIjtcblxuY29uc3QgZSA9ICgoKSA9PiB7XG4gIGxldCBwcmV2aW91c1BvcyA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UG9zID0gd2luZG93LnNjcm9sbFk7XG4gICAgaWYgKHByZXZpb3VzUG9zIDwgY3VycmVudFBvcykge1xuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBhbmNob3JzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgcHJldmlvdXNQb3MgPSBjdXJyZW50UG9zO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGlmIChjdXJyZW50UG9zIDwgKGkgKyAxKSAqIDkwMCkge1xuICAgICAgICBhbmNob3JzW2ldLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbGV0IGNoYXJJbmRleCA9IDA7XG4gIGxldCBkaXJlY3Rpb24gPSAxO1xuICBsZXQgdGV4dCA9IFwiU0FJIFZJS0FTXCI7XG5cbiAgLy8gQW5pbWF0ZSB3aXRoIHR5cGluZyBhbmltYXRpb25cbiAgY29uc3QgYW5pbWF0ZVRleHQgPSAoKSA9PiB7XG4gICAgaWYgKGNoYXJJbmRleCA8IDApIHtcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCA8PSA5KSB7XG4gICAgICAgIHRleHQgPSBcIkZST05URU5EIERFVkVMT1BFUlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCA9IFwiU0FJIFZJS0FTXCI7XG4gICAgICB9XG4gICAgICBkaXJlY3Rpb24gPSAxOyAvLyBTd2l0Y2ggZGlyZWN0aW9uIHRvIHR5cGluZyBmb3J3YXJkXG4gICAgICBjaGFySW5kZXggPSAwO1xuICAgICAgc2V0VGltZW91dChhbmltYXRlVGV4dCwgMTAwKTtcbiAgICB9IGVsc2UgaWYgKGNoYXJJbmRleCA+IHRleHQubGVuZ3RoKSB7XG4gICAgICBkaXJlY3Rpb24gPSAtMTsgLy8gU3dpdGNoIGRpcmVjdGlvbiB0byBlcmFzaW5nIGJhY2t3YXJkXG4gICAgICBjaGFySW5kZXggPSB0ZXh0Lmxlbmd0aDtcblxuICAgICAgbGV0IGJsaW5rQ291bnQgPSAwO1xuXG4gICAgICBjb25zdCBibGlua0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBlLmJsaW5rT25jZSgpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGUuYmxpbmtPbmNlKCk7XG5cbiAgICAgICAgICBibGlua0NvdW50ICs9IDE7XG5cbiAgICAgICAgICBpZiAoYmxpbmtDb3VudCA9PT0gMikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChibGlua0ludGVydmFsKTtcbiAgICAgICAgICAgIGFuaW1hdGVUZXh0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCA1MDApO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lLnRleHRDb250ZW50ID0gdGV4dC5zdWJzdHJpbmcoMCwgY2hhckluZGV4KTtcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICBjaGFySW5kZXggKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAtMSkge1xuICAgICAgICBjaGFySW5kZXggLT0gMTtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoYW5pbWF0ZVRleHQsIDEwMCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGJsaW5rT25jZSA9ICgpID0+IHtcbiAgICBpZiAoYmxvY2sudGV4dENvbnRlbnQgPT09IFwifFwiKSB7XG4gICAgICBibG9jay50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJsb2NrLnRleHRDb250ZW50ID0gXCJ8XCI7XG4gICAgfVxuICB9O1xuXG4gIC8vIENoZWNrIHRoZSBjdXJyZW50IHNjcmVlbiBzaXplIGFuZCBhcHBseSBhcHByb3ByaWF0ZSBzdHlsZXNcbiAgY29uc3QgY2hlY2tTY3JlZW5TaXplID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc2N3B4KVwiKS5tYXRjaGVzKSB7XG4gICAgICBpbnRyby5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ1cmwoJ2ltYWdlcy9jYWxtX2ltYWdlX3NtLnBuZycpIG5vLXJlcGVhdFwiO1xuICAgIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMDIzcHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgIGludHJvLnN0eWxlLmJhY2tncm91bmQgPSBcInVybCgnaW1hZ2VzL2NhbG1faW1hZ2VfbWQuanBnJykgbm8tcmVwZWF0XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGludHJvLnN0eWxlLmJhY2tncm91bmQgPSBcInVybCgnaW1hZ2VzL2NhbG1faW1hZ2UucG5nJylcIjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgYW5pbWF0ZVRleHQsIGJsaW5rT25jZSwgY2hlY2tTY3JlZW5TaXplIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBlO1xuIiwiY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbmNvbnN0IGlucHV0ID0gZm9ybS5jaGlsZE5vZGVzO1xuY29uc3QgdmFsdWVzID0gW107XG5cbmNvbnN0IGUgPSAoKCkgPT4ge1xuICBjb25zdCBzdWJtaXRNZXNzYWdlID0gKCkgPT4ge1xuICAgIGUuaXNWYWxpZCgpO1xuICAgIGZvcm0uY2hpbGROb2Rlc1s0XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZS5jaGVja01lc3NhZ2UoKTtcbiAgICAgIGlmIChlLmNoZWNrTWVzc2FnZSgpID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBgbmFtZTogJHt2YWx1ZXNbMF19XG4gICAgICAgIGVtYWlsOiAke3ZhbHVlc1sxXX1cbiAgICAgICAgc3ViamVjdDogJHt2YWx1ZXNbMl19XG4gICAgICAgIG1lc3NhZ2U6ICR7dmFsdWVzWzNdfWA7XG4gICAgICAgIGUuc2VuZE1lc3NhZ2UoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2Ugbm90IHN1Ym1pdHRlZFwiKTtcbiAgICAgICAgZS5yZWZpbGxNZXNzYWdlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaXNWYWxpZCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgYm94ID0gaW5wdXRbaV0uY2hpbGROb2Rlc1swXTtcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgIGlmIChib3guY2hlY2tWYWxpZGl0eSgpICYmIGJveC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgIGlucHV0W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgIGJveC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBibGFja1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlucHV0W2ldLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgIGJveC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZWRcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIENoZWNrIHZhbGlkaXR5IG9mIG1lc3NhZ2UgZGV0YWlsc1xuICBjb25zdCBjaGVja01lc3NhZ2UgPSAoKSA9PiB7XG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgYm94ID0gaW5wdXRbaV0uY2hpbGROb2Rlc1swXTtcbiAgICAgIGlmIChib3guY2hlY2tWYWxpZGl0eSgpICYmIGJveC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICBpbnB1dFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZFwiKTtcbiAgICAgICAgdmFsdWVzW2ldID0gYm94LnZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXRbaV0uY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgIGJveC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZWRcIjtcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIFJlZmlsbCBtZXNzYWdlIGRldGFpbHMgaWYgaW52YWxpZFxuICBjb25zdCByZWZpbGxNZXNzYWdlID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBib3ggPSBpbnB1dFtpXS5jaGlsZE5vZGVzWzBdO1xuICAgICAgaWYgKHZhbHVlc1tpXSkge1xuICAgICAgICBib3gudmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCBib3RUb2tlbiA9IFwiNjYwOTA3ODU1NDpBQUdpX20zcGM0QzZUS2ZFVUh5VFF1R1o5X3NTaE5MMWNlWVwiO1xuICAgIGNvbnN0IGNoYXRJZCA9IFwiLTEwMDE5MjQwNjE4NzRcIjtcbiAgICBjb25zdCBwYXJzZU1vZGUgPSBcIk1hcmtkb3duXCI7XG5cbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdCR7Ym90VG9rZW59L3NlbmRNZXNzYWdlYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBjaGF0X2lkOiBjaGF0SWQsXG4gICAgICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgICAgIHBhcnNlX21vZGU6IHBhcnNlTW9kZSxcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBtZXNzYWdlXCIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2VuZGluZyBtZXNzYWdlOlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHsgc3VibWl0TWVzc2FnZSwgY2hlY2tNZXNzYWdlLCBpc1ZhbGlkLCByZWZpbGxNZXNzYWdlLCBzZW5kTWVzc2FnZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIEltcG9ydCBqYXZhc2NyaXB0XG5pbXBvcnQgZGVzY3JpcHRpb24gZnJvbSBcIi4vamF2YXNjcmlwdC9kZXNjcmlwdGlvblwiO1xuaW1wb3J0IGludHJvZHVjdGlvbiBmcm9tIFwiLi9qYXZhc2NyaXB0L2ludHJvZHVjdGlvblwiO1xuaW1wb3J0IG1lc3NhZ2UgZnJvbSBcIi4vamF2YXNjcmlwdC9zZW5kTWVzc2FnZVwiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vamF2YXNjcmlwdC9jb250YWN0XCI7XG5cbi8vIEltcG9ydCBjc3Mgc3R5bGluZ1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3MvdGFibGV0c19tb2JpbGVzLmNzc1wiO1xuXG5pbnRyb2R1Y3Rpb24uYW5pbWF0ZVRleHQoKTtcbmRlc2NyaXB0aW9uLmFkZFNraWxscygpO1xuZGVzY3JpcHRpb24uYWRkUHJvamVjdHMoKTtcbmNvbnRhY3QuYWRkQ29udGFpbmVyKCk7XG5tZXNzYWdlLnN1Ym1pdE1lc3NhZ2UoKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpbnRyb2R1Y3Rpb24uY2hlY2tTY3JlZW5TaXplKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGludHJvZHVjdGlvbi5jaGVja1NjcmVlblNpemUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9