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
`, "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap\");\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Navbar Styling */\nheader {\n  width: 100vw;\n  height: 75px;\n  position: fixed;\n  top: -75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: white;\n  transition: 0.2s ease-in;\n  box-shadow: 0 1px 10px -3px rgba(0, 0, 0, 0.2);\n  z-index: 2;\n}\n\nheader.active {\n  top: 0px;\n}\n\nheader ul {\n  width: 70%;\n  list-style: none;\n  display: flex;\n  justify-content: end;\n  background: white;\n}\n\nheader ul li {\n  font-size: 16px;\n  padding-right: 50px;\n  font-weight: 700;\n}\n\nheader ul li:last-of-type {\n  margin: 0;\n}\n\nheader ul a {\n  text-decoration: none;\n  color: #999999;\n  transition: 0.2s;\n}\n\nheader ul a:hover {\n  color: #b59d7c;\n}\n\nheader ul a.active {\n  color: #b59d7c;\n}\n\nmain {\n  overflow: visible;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nmain .intro {\n  width: 100vw;\n  height: 100vh;\n  color: white;\n  overflow: visible;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.intro .box {\n  width: 70%;\n  position: relative;\n  left: 75px;\n}\n\n.intro h1 {\n  font-size: 42px;\n  margin: 0;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\n.intro p {\n  margin: 0;\n}\n\n.intro .social_media {\n  margin-top: 15px;\n}\n\n.social_media a {\n  margin-right: 10px;\n  color: white;\n}\n\n.description {\n  height: 800px;\n  background: #f7f7f7;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.description p {\n  width: 70%;\n  letter-spacing: 1px;\n  color: #999999;\n  margin-top: 150px;\n}\n\n.description h2 {\n  text-align: center;\n  font-weight: 500;\n  margin: 0;\n  color: #999999;\n}\n\n/* Slider of skills here */\n.skills {\n  width: 70vw;\n  height: 300px;\n  overflow: hidden;\n  position: relative;\n  transition: 0.3s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.skills_container {\n  width: 1250px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n  left: 0px;\n  transition: 0.3s;\n}\n\n.skills .skill {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-self: center;\n  color: #999999;\n}\n\n.skills .skill_icon {\n  width: 150px;\n}\n\n.skills h3 {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n/* Projects list */\n.projects {\n  width: 100vw;\n  height: 750px;\n  overflow: hidden;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.projects h2 {\n  text-align: center;\n  letter-spacing: 1px;\n  padding-top: 50px;\n  font-weight: 500;\n}\n\n.projects_container {\n  width: 70vw;\n  height: 550px;\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(3, 1fr);\n  place-items: center;\n}\n\n.projects .project {\n  width: 410px;\n  height: 231px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 10px -5px;\n  margin-left: 15px;\n  margin-top: 50px;\n  overflow: hidden;\n  position: relative;\n}\n\n.projects img {\n  width: 410px;\n  height: 231px;\n  transition: 0.3s;\n}\n\n.projects img:hover {\n  transform: scale(1.05);\n  cursor: default;\n}\n\n.project .project_label {\n  width: 330px;\n  height: 70px;\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  inset: 140px 15px;\n  transition: 0.4s;\n  z-index: 1;\n  box-shadow: 5px 5px 10px -10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 25px;\n  opacity: 0%;\n}\n\n.project_label:hover {\n  opacity: 100%;\n}\n\n.project_label h3 {\n  font-weight: 400;\n  color: #999999;\n  font-size: 16px;\n}\n\n.project_label i {\n  color: #999999;\n  margin-left: 10px;\n}\n\n.project_label i:hover {\n  color: #b59d7c;\n}\n\n/* Get in touch */\nsection.contact {\n  width: 100vw;\n  height: 600px;\n  background: #f7f7f7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 50px;\n  overflow: hidden;\n}\n\n.contact h2 {\n  font-size: 32px;\n}\n\n.contact .container {\n  width: 65vw;\n  height: fit-content;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.contact .left {\n  position: relative;\n  bottom: 125px;\n}\n\n.contact .right {\n  width: 50%;\n  padding: 25px;\n  position: relative;\n  left: 35px;\n}\n\n.contact span {\n  width: 225px;\n  color: #999999;\n  display: block;\n}\n\n.contact input {\n  width: 95%;\n  border-radius: 0;\n  border: 1px solid black;\n  padding: 10px;\n  margin: 7px 0;\n}\n\n.contact .message_box {\n  position: relative;\n}\n\n.contact .message_box.invalid::before {\n  content: \"*\";\n  font-size: 22px;\n  color: red;\n  position: absolute;\n  left: -20px;\n  top: 10px;\n  display: inline-block;\n}\n\n.contact input:focus,\n.contact textarea:focus {\n  border: 1px solid cornflowerblue;\n  outline: none;\n}\n\n.contact textarea {\n  width: 95%;\n  padding: 10px;\n  margin: 7px 0;\n  border: 1px solid black;\n}\n\n.contact input::placeholder,\n.contact textarea::placeholder {\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\n.contact button {\n  width: calc(100% - 8px);\n  padding: 10px;\n  margin: 7px 0;\n  background: black;\n  border: 1px solid black;\n  color: white;\n  font-size: 14px;\n}\n\n.contact button:hover {\n  color: black;\n  background: white;\n  cursor: pointer;\n}\n\n.copyright {\n  width: 100vw;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.copyright i {\n  color: black;\n}\n\n.copyright i:first-of-type {\n  margin-right: 5px;\n}\n"],"sourceRoot":""}]);
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
}

/* Styles for tablets and smaller laptops */
@media screen and (min-width: 768px) and (max-width: 1080px) {
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
`, "",{"version":3,"sources":["webpack://./src/css/tablets_mobiles.css"],"names":[],"mappings":"AAAA,8BAA8B;AAC9B;AACA;;AAEA,2CAA2C;AAC3C;EACE;IACE,wBAAwB;IACxB,gBAAgB;EAClB;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,aAAa;IACb,kCAAkC;IAClC,qCAAqC;IACrC,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;EACnB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,kCAAkC;IAClC,qCAAqC;IACrC,aAAa;IACb,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,UAAU;EACZ;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,sBAAsB;IACtB,aAAa;EACf;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;EACpB;;EAEA;IACE,SAAS;IACT,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,YAAY;EACd;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,WAAW;IACX,aAAa;EACf;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;EACd;AACF","sourcesContent":["/* Styles for mobile devices */\n@media screen and (max-width: 767px) {\n}\n\n/* Styles for tablets and smaller laptops */\n@media screen and (min-width: 768px) and (max-width: 1080px) {\n  .intro {\n    height: 575px !important;\n    overflow: hidden;\n  }\n\n  .intro .box {\n    left: 0px;\n  }\n\n  .intro h1 {\n    font-size: 32px;\n  }\n\n  .intro p {\n    font-size: 14px;\n  }\n\n  .description p {\n    font-size: 15px;\n    text-align: center;\n    margin-top: 75px;\n  }\n\n  .description h2 {\n    font-size: 22px;\n  }\n\n  .skills_container {\n    width: 100%;\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: repeat(3, 1fr);\n    column-gap: 125px;\n    row-gap: 5px;\n    margin-top: 100px;\n  }\n\n  .skills .skill_icon {\n    width: 75px;\n  }\n\n  .projects {\n    height: 800px;\n  }\n\n  .projects_container {\n    width: 90vw;\n    height: 650px;\n    margin-top: 25px;\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    grid-template-columns: repeat(2, 1fr);\n    row-gap: 25px;\n    column-gap: 25px;\n  }\n\n  .projects .project {\n    width: 350px;\n    height: 197px;\n    margin: 0;\n  }\n\n  .project img {\n    width: 350px;\n    height: 197px;\n  }\n\n  .project .project_label {\n    width: 77%;\n    height: 55px;\n    opacity: 93%;\n    position: relative;\n    top: -75px;\n  }\n\n  section.contact {\n    height: 600px;\n  }\n\n  .contact .container {\n    flex-direction: column;\n    height: 500px;\n  }\n\n  .contact .left {\n    bottom: 0px;\n    width: 350px;\n    text-align: center;\n  }\n\n  .contact h2 {\n    margin: 0;\n    margin-top: 25px;\n    margin-bottom: 10px;\n    text-align: center;\n  }\n\n  .contact span {\n    width: fit-content;\n    display: inline;\n  }\n\n  .contact .right {\n    position: static;\n    width: 400px;\n  }\n\n  .contact input {\n    width: 100%;\n    height: 10px;\n  }\n\n  .contact textarea {\n    width: 100%;\n    height: 100px;\n  }\n\n  .contact button {\n    width: 106%;\n  }\n\n  .copyright {\n    height: 75px;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _images_calm_image_md_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/calm_image_md.jpg */ "./src/images/calm_image_md.jpg");
/* harmony import */ var _images_calm_image_sm_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/calm_image_sm.jpg */ "./src/images/calm_image_sm.jpg");
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
  function checkScreenSize() {
    if (window.matchMedia("(max-width: 767px)").matches) {
      intro.style.background = "url('images/calm_image_sm.jpg') no-repeat";
    } else if (window.matchMedia("(max-width: 1023px)").matches) {
      intro.style.background = "url('images/calm_image_md.jpg') no-repeat";
    } else {
      intro.style.background = "url('images/calm_image.png')";
    }
  }

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

/***/ "./src/images/calm_image_sm.jpg":
/*!**************************************!*\
  !*** ./src/images/calm_image_sm.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/calm_image_sm.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGdIQUFnSCxJQUFJLElBQUksa0JBQWtCO0FBQzFJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxxRkFBcUYsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxh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QTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNtRDtBQUNFO0FBQ047QUFDSjs7QUFFM0M7QUFDMEI7QUFDUzs7QUFFbkMsZ0VBQVk7QUFDWiwrREFBVztBQUNYLCtEQUFXO0FBQ1gsMkRBQU87QUFDUCwrREFBTztBQUNQLGdDQUFnQyxnRUFBWTtBQUM1QyxrQ0FBa0MsZ0VBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vc3JjL2Nzcy90YWJsZXRzX21vYmlsZXMuY3NzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vc3JjL2Nzcy9zdHlsZXMuY3NzPzk5YTMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vc3JjL2Nzcy90YWJsZXRzX21vYmlsZXMuY3NzPzkyMmIiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9zcmMvamF2YXNjcmlwdC9jb250YWN0LmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL3NyYy9qYXZhc2NyaXB0L2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL3NyYy9qYXZhc2NyaXB0L2ludHJvZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9zcmMvamF2YXNjcmlwdC9zZW5kTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215X3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL215X3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBOYXZiYXIgU3R5bGluZyAqL1xuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDc1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAtNzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XG4gIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDI7XG59XG5cbmhlYWRlci5hY3RpdmUge1xuICB0b3A6IDBweDtcbn1cblxuaGVhZGVyIHVsIHtcbiAgd2lkdGg6IDcwJTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5oZWFkZXIgdWwgbGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmhlYWRlciB1bCBsaTpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW46IDA7XG59XG5cbmhlYWRlciB1bCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzk5OTk5OTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuaGVhZGVyIHVsIGE6aG92ZXIge1xuICBjb2xvcjogI2I1OWQ3Yztcbn1cblxuaGVhZGVyIHVsIGEuYWN0aXZlIHtcbiAgY29sb3I6ICNiNTlkN2M7XG59XG5cbm1haW4ge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubWFpbiAuaW50cm8ge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW50cm8gLmJveCB7XG4gIHdpZHRoOiA3MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNzVweDtcbn1cblxuLmludHJvIGgxIHtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnRybyBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaW50cm8gLnNvY2lhbF9tZWRpYSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zb2NpYWxfbWVkaWEgYSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBoZWlnaHQ6IDgwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uZGVzY3JpcHRpb24gcCB7XG4gIHdpZHRoOiA3MCU7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbn1cblxuLmRlc2NyaXB0aW9uIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG4vKiBTbGlkZXIgb2Ygc2tpbGxzIGhlcmUgKi9cbi5za2lsbHMge1xuICB3aWR0aDogNzB2dztcbiAgaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNraWxsc19jb250YWluZXIge1xuICB3aWR0aDogMTI1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5za2lsbHMgLnNraWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG4uc2tpbGxzIC5za2lsbF9pY29uIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uc2tpbGxzIGgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKiBQcm9qZWN0cyBsaXN0ICovXG4ucHJvamVjdHMge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogNzUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3RzIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnByb2plY3RzX2NvbnRhaW5lciB7XG4gIHdpZHRoOiA3MHZ3O1xuICBoZWlnaHQ6IDU1MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvamVjdHMgLnByb2plY3Qge1xuICB3aWR0aDogNDEwcHg7XG4gIGhlaWdodDogMjMxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IC01cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9qZWN0cyBpbWcge1xuICB3aWR0aDogNDEwcHg7XG4gIGhlaWdodDogMjMxcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5wcm9qZWN0cyBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5wcm9qZWN0IC5wcm9qZWN0X2xhYmVsIHtcbiAgd2lkdGg6IDMzMHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaW5zZXQ6IDE0MHB4IDE1cHg7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAtMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIG9wYWNpdHk6IDAlO1xufVxuXG4ucHJvamVjdF9sYWJlbDpob3ZlciB7XG4gIG9wYWNpdHk6IDEwMCU7XG59XG5cbi5wcm9qZWN0X2xhYmVsIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnByb2plY3RfbGFiZWwgaSB7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnByb2plY3RfbGFiZWwgaTpob3ZlciB7XG4gIGNvbG9yOiAjYjU5ZDdjO1xufVxuXG4vKiBHZXQgaW4gdG91Y2ggKi9cbnNlY3Rpb24uY29udGFjdCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA2MDBweDtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250YWN0IGgyIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4uY29udGFjdCAuY29udGFpbmVyIHtcbiAgd2lkdGg6IDY1dnc7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QgLmxlZnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTI1cHg7XG59XG5cbi5jb250YWN0IC5yaWdodCB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMzVweDtcbn1cblxuLmNvbnRhY3Qgc3BhbiB7XG4gIHdpZHRoOiAyMjVweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29udGFjdCBpbnB1dCB7XG4gIHdpZHRoOiA5NSU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDdweCAwO1xufVxuXG4uY29udGFjdCAubWVzc2FnZV9ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250YWN0IC5tZXNzYWdlX2JveC5pbnZhbGlkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIipcIjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogcmVkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0yMHB4O1xuICB0b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbnRhY3QgaW5wdXQ6Zm9jdXMsXG4uY29udGFjdCB0ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY29udGFjdCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogN3B4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uY29udGFjdCBpbnB1dDo6cGxhY2Vob2xkZXIsXG4uY29udGFjdCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5jb250YWN0IGJ1dHRvbiB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4cHgpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDdweCAwO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29udGFjdCBidXR0b246aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb3B5cmlnaHQge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29weXJpZ2h0IGkge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb3B5cmlnaHQgaTpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4Qiw4Q0FBOEM7RUFDOUMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Is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O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxnQ0FBZ0M7RUFDaEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBOYXZiYXIgU3R5bGluZyAqL1xcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IC03NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xcbiAgYm94LXNoYWRvdzogMCAxcHggMTBweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbmhlYWRlci5hY3RpdmUge1xcbiAgdG9wOiAwcHg7XFxufVxcblxcbmhlYWRlciB1bCB7XFxuICB3aWR0aDogNzAlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIgdWwgbGkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmhlYWRlciB1bCBsaTpsYXN0LW9mLXR5cGUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oZWFkZXIgdWwgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzk5OTk5OTtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbmhlYWRlciB1bCBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjYjU5ZDdjO1xcbn1cXG5cXG5oZWFkZXIgdWwgYS5hY3RpdmUge1xcbiAgY29sb3I6ICNiNTlkN2M7XFxufVxcblxcbm1haW4ge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm1haW4gLmludHJvIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnRybyAuYm94IHtcXG4gIHdpZHRoOiA3MCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA3NXB4O1xcbn1cXG5cXG4uaW50cm8gaDEge1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pbnRybyBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmludHJvIC5zb2NpYWxfbWVkaWEge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLnNvY2lhbF9tZWRpYSBhIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGhlaWdodDogODAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbiBwIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6ICM5OTk5OTk7XFxuICBtYXJnaW4tdG9wOiAxNTBweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogIzk5OTk5OTtcXG59XFxuXFxuLyogU2xpZGVyIG9mIHNraWxscyBoZXJlICovXFxuLnNraWxscyB7XFxuICB3aWR0aDogNzB2dztcXG4gIGhlaWdodDogMzAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5za2lsbHNfY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMjUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnNraWxscyAuc2tpbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogIzk5OTk5OTtcXG59XFxuXFxuLnNraWxscyAuc2tpbGxfaWNvbiB7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5za2lsbHMgaDMge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLyogUHJvamVjdHMgbGlzdCAqL1xcbi5wcm9qZWN0cyB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDc1MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cyBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ucHJvamVjdHNfY29udGFpbmVyIHtcXG4gIHdpZHRoOiA3MHZ3O1xcbiAgaGVpZ2h0OiA1NTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cyAucHJvamVjdCB7XFxuICB3aWR0aDogNDEwcHg7XFxuICBoZWlnaHQ6IDIzMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IC01cHg7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdHMgaW1nIHtcXG4gIHdpZHRoOiA0MTBweDtcXG4gIGhlaWdodDogMjMxcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ucHJvamVjdHMgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5wcm9qZWN0IC5wcm9qZWN0X2xhYmVsIHtcXG4gIHdpZHRoOiAzMzBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaW5zZXQ6IDE0MHB4IDE1cHg7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgei1pbmRleDogMTtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAtMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAyNXB4O1xcbiAgb3BhY2l0eTogMCU7XFxufVxcblxcbi5wcm9qZWN0X2xhYmVsOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0X2xhYmVsIGgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzk5OTk5OTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnByb2plY3RfbGFiZWwgaSB7XFxuICBjb2xvcjogIzk5OTk5OTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdF9sYWJlbCBpOmhvdmVyIHtcXG4gIGNvbG9yOiAjYjU5ZDdjO1xcbn1cXG5cXG4vKiBHZXQgaW4gdG91Y2ggKi9cXG5zZWN0aW9uLmNvbnRhY3Qge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jb250YWN0IGgyIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuLmNvbnRhY3QgLmNvbnRhaW5lciB7XFxuICB3aWR0aDogNjV2dztcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QgLmxlZnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAxMjVweDtcXG59XFxuXFxuLmNvbnRhY3QgLnJpZ2h0IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMzVweDtcXG59XFxuXFxuLmNvbnRhY3Qgc3BhbiB7XFxuICB3aWR0aDogMjI1cHg7XFxuICBjb2xvcjogIzk5OTk5OTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY29udGFjdCBpbnB1dCB7XFxuICB3aWR0aDogOTUlO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogN3B4IDA7XFxufVxcblxcbi5jb250YWN0IC5tZXNzYWdlX2JveCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb250YWN0IC5tZXNzYWdlX2JveC5pbnZhbGlkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIipcXFwiO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgY29sb3I6IHJlZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0yMHB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uY29udGFjdCBpbnB1dDpmb2N1cyxcXG4uY29udGFjdCB0ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5jb250YWN0IHRleHRhcmVhIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiA3cHggMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY29udGFjdCBpbnB1dDo6cGxhY2Vob2xkZXIsXFxuLmNvbnRhY3QgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi5jb250YWN0IGJ1dHRvbiB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDdweCAwO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmNvbnRhY3QgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29weXJpZ2h0IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29weXJpZ2h0IGkge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY29weXJpZ2h0IGk6Zmlyc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBTdHlsZXMgZm9yIG1vYmlsZSBkZXZpY2VzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xufVxuXG4vKiBTdHlsZXMgZm9yIHRhYmxldHMgYW5kIHNtYWxsZXIgbGFwdG9wcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgLmludHJvIHtcbiAgICBoZWlnaHQ6IDU3NXB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5pbnRybyAuYm94IHtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cblxuICAuaW50cm8gaDEge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuXG4gIC5pbnRybyBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuZGVzY3JpcHRpb24gcCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xuICB9XG5cbiAgLmRlc2NyaXB0aW9uIGgyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxuICAuc2tpbGxzX2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgY29sdW1uLWdhcDogMTI1cHg7XG4gICAgcm93LWdhcDogNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICB9XG5cbiAgLnNraWxscyAuc2tpbGxfaWNvbiB7XG4gICAgd2lkdGg6IDc1cHg7XG4gIH1cblxuICAucHJvamVjdHMge1xuICAgIGhlaWdodDogODAwcHg7XG4gIH1cblxuICAucHJvamVjdHNfY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBoZWlnaHQ6IDY1MHB4O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgcm93LWdhcDogMjVweDtcbiAgICBjb2x1bW4tZ2FwOiAyNXB4O1xuICB9XG5cbiAgLnByb2plY3RzIC5wcm9qZWN0IHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAxOTdweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAucHJvamVjdCBpbWcge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDE5N3B4O1xuICB9XG5cbiAgLnByb2plY3QgLnByb2plY3RfbGFiZWwge1xuICAgIHdpZHRoOiA3NyU7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIG9wYWNpdHk6IDkzJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNzVweDtcbiAgfVxuXG4gIHNlY3Rpb24uY29udGFjdCB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgfVxuXG4gIC5jb250YWN0IC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxuXG4gIC5jb250YWN0IC5sZWZ0IHtcbiAgICBib3R0b206IDBweDtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRhY3QgaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRhY3Qgc3BhbiB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuXG4gIC5jb250YWN0IC5yaWdodCB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cblxuICAuY29udGFjdCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLmNvbnRhY3QgdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cblxuICAuY29udGFjdCBidXR0b24ge1xuICAgIHdpZHRoOiAxMDYlO1xuICB9XG5cbiAgLmNvcHlyaWdodCB7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvdGFibGV0c19tb2JpbGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQSwyQ0FBMkM7QUFDM0M7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQyxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsU0FBUztJQUNULGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTdHlsZXMgZm9yIG1vYmlsZSBkZXZpY2VzICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG59XFxuXFxuLyogU3R5bGVzIGZvciB0YWJsZXRzIGFuZCBzbWFsbGVyIGxhcHRvcHMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwODBweCkge1xcbiAgLmludHJvIHtcXG4gICAgaGVpZ2h0OiA1NzVweCAhaW1wb3J0YW50O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcblxcbiAgLmludHJvIC5ib3gge1xcbiAgICBsZWZ0OiAwcHg7XFxuICB9XFxuXFxuICAuaW50cm8gaDEge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICB9XFxuXFxuICAuaW50cm8gcCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG5cXG4gIC5kZXNjcmlwdGlvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDc1cHg7XFxuICB9XFxuXFxuICAuZGVzY3JpcHRpb24gaDIge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICB9XFxuXFxuICAuc2tpbGxzX2NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBjb2x1bW4tZ2FwOiAxMjVweDtcXG4gICAgcm93LWdhcDogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIH1cXG5cXG4gIC5za2lsbHMgLnNraWxsX2ljb24ge1xcbiAgICB3aWR0aDogNzVweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0cyB7XFxuICAgIGhlaWdodDogODAwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdHNfY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGhlaWdodDogNjUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIHJvdy1nYXA6IDI1cHg7XFxuICAgIGNvbHVtbi1nYXA6IDI1cHg7XFxuICB9XFxuXFxuICAucHJvamVjdHMgLnByb2plY3Qge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMTk3cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0IGltZyB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAxOTdweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0IC5wcm9qZWN0X2xhYmVsIHtcXG4gICAgd2lkdGg6IDc3JTtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICBvcGFjaXR5OiA5MyU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtNzVweDtcXG4gIH1cXG5cXG4gIHNlY3Rpb24uY29udGFjdCB7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICB9XFxuXFxuICAuY29udGFjdCAuY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0IC5sZWZ0IHtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QgaDIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jb250YWN0IHNwYW4ge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gIH1cXG5cXG4gIC5jb250YWN0IC5yaWdodCB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0IGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0IHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICB9XFxuXFxuICAuY29udGFjdCBidXR0b24ge1xcbiAgICB3aWR0aDogMTA2JTtcXG4gIH1cXG5cXG4gIC5jb3B5cmlnaHQge1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFibGV0c19tb2JpbGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFibGV0c19tb2JpbGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3B5cmlnaHRcIik7XG5jb25zdCBpbnRybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9cIik7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xuXG5jb25zdCBlID0gKCgpID0+IHtcbiAgY29uc3QgYWRkQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlX2JveFwiKTtcbiAgICAgIGJveC5hcHBlbmRDaGlsZChmb3JtLmNoaWxkTm9kZXNbaSArIDFdKTtcbiAgICAgIGRhdGEuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICB9XG4gICAgZGF0YS5hcHBlbmRDaGlsZChmb3JtLmNoaWxkTm9kZXNbNV0pO1xuICAgIGZvcm0uaW5uZXJIVE1MID0gZGF0YS5pbm5lckhUTUw7XG4gICAgZS5hZGRNZWRpYSgpO1xuICB9O1xuXG4gIGNvbnN0IGFkZE1lZGlhID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvZGUgPSBpbnRyby5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbNV07XG4gICAgY29weXJpZ2h0LmlubmVySFRNTCA9IGNvZGUuaW5uZXJIVE1MO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkQ29udGFpbmVyLFxuICAgIGFkZE1lZGlhLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZTtcbiIsImltcG9ydCBcIi4uL2ltYWdlcy9odG1sLnN2Z1wiO1xuaW1wb3J0IFwiLi4vaW1hZ2VzL2Nzcy5zdmdcIjtcbmltcG9ydCBcIi4uL2ltYWdlcy9qYXZhc2NyaXB0LnN2Z1wiO1xuaW1wb3J0IFwiLi4vaW1hZ2VzL2xpbnV4LnN2Z1wiO1xuaW1wb3J0IFwiLi4vaW1hZ2VzL2xhbmRpbmdfcGFnZS5wbmdcIjtcbmltcG9ydCBcIi4uL2ltYWdlcy9ldGNoX2Ffc2tldGNoLnBuZ1wiO1xuaW1wb3J0IFwiLi4vaW1hZ2VzL2Rhc2hib2FyZC5wbmdcIjtcbmltcG9ydCBcIi4uL2ltYWdlcy9jYWxjdWxhdG9yLnBuZ1wiO1xuaW1wb3J0IFwiLi4vaW1hZ2VzL2Zvcm0ucG5nXCI7XG5pbXBvcnQgXCIuLi9pbWFnZXMvbXlfbGlicmFyeS5wbmdcIjtcbmltcG9ydCBcIi4uL2ltYWdlcy93ZWJwYWNrLnN2Z1wiO1xuaW1wb3J0IFwiLi4vaW1hZ2VzL2dpdC5zdmdcIjtcblxuY29uc3Qgc2tpbGxCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNraWxsc19jb250YWluZXJcIik7XG5jb25zdCBza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNraWxsc1wiKTtcbmNvbnN0IHByb2plY3RzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c19jb250YWluZXJcIik7XG5cbmNvbnN0IHNraWxsSWNvbnMgPSBbXG4gIFwiaHRtbC5zdmdcIixcbiAgXCJjc3Muc3ZnXCIsXG4gIFwiamF2YXNjcmlwdC5zdmdcIixcbiAgXCJ3ZWJwYWNrLnN2Z1wiLFxuICBcImdpdC5zdmdcIixcbiAgXCJsaW51eC5zdmdcIixcbl07XG5jb25zdCBwcm9qZWN0SWNvbnMgPSBbXG4gIFwibGFuZGluZ19wYWdlLnBuZ1wiLFxuICBcImV0Y2hfYV9za2V0Y2gucG5nXCIsXG4gIFwiZGFzaGJvYXJkLnBuZ1wiLFxuICBcImNhbGN1bGF0b3IucG5nXCIsXG4gIFwiZm9ybS5wbmdcIixcbiAgXCJteV9saWJyYXJ5LnBuZ1wiLFxuXTtcbmNvbnN0IHByb2plY3RMaW5rcyA9IFtcbiAgXCJMYW5kaW5nX3BhZ2VcIixcbiAgXCJFdGNoLWEtU2tldGNoXCIsXG4gIFwiZGFzaGJvYXJkX3VzaW5nX2dyaWRcIixcbiAgXCJDYWxjdWxhdG9yXCIsXG4gIFwiZmlyc3RfZm9ybV9wYWdlXCIsXG4gIFwibXlMaWJyYXJ5XCIsXG5dO1xuY29uc3QgcHJvamVjdE5hbWVzID0gW1xuICBcIkxhbmRpbmcgUGFnZVwiLFxuICBcIkV0Y2ggYSBTa2V0Y2hcIixcbiAgXCJEYXNoYm9hcmQgdXNpbmcgR3JpZFwiLFxuICBcIkNhbGN1bGF0b3JcIixcbiAgXCJGb3JtIFBhZ2VcIixcbiAgXCJNeSBMaWJyYXJ5XCIsXG5dO1xuXG5jb25zdCBlID0gKCgpID0+IHtcbiAgLy8gQWRkIHNraWxscyB0byB0aGUgc2xpZGVyXG4gIGNvbnN0IGFkZFNraWxscyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgc2tpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2tpbGwuY2xhc3NMaXN0LmFkZChgc2tpbGxgKTtcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaWNvbi5zcmMgPSBgaW1hZ2VzLyR7c2tpbGxJY29uc1tpXX1gO1xuICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwic2tpbGxfaWNvblwiKTtcbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHtza2lsbEljb25zW2ldLnNsaWNlKDAsIC00KX1gO1xuICAgICAgc2tpbGxCb3guYXBwZW5kQ2hpbGQoc2tpbGwpO1xuICAgICAgc2tpbGxCb3guY2hpbGROb2Rlc1tpXS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgIHNraWxsQm94LmNoaWxkTm9kZXNbaV0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIH1cbiAgfTtcblxuICAvLyBBZGQgc2xpZGVpbmcgdG8gdGhlIHNraWxscyBzbGlkZXJcbiAgY29uc3QgYWRkU2xpZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgbGVmdC5jbGFzc05hbWUgPSBcImJ4IGJ4cy1jaGV2cm9uLWxlZnQgYngtbGdcIjtcbiAgICByaWdodC5jbGFzc05hbWUgPSBcImJ4IGJ4cy1jaGV2cm9uLXJpZ2h0IGJ4LWxnXCI7XG4gICAgc2tpbGxzLmFwcGVuZENoaWxkKGxlZnQpO1xuICAgIHNraWxscy5hcHBlbmRDaGlsZChyaWdodCk7XG4gIH07XG5cbiAgY29uc3Qgc2tpbGxCb3hTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHNraWxsQm94KTtcblxuICAvLyBNb3ZlIHNsaWRlciBsZWZ0IG9yIHJpZ2h0XG4gIGNvbnN0IG1vdmVTbGlkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJyb3dMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ieHMtY2hldnJvbi1sZWZ0XCIpO1xuICAgIGNvbnN0IGFycm93UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ4cy1jaGV2cm9uLXJpZ2h0XCIpO1xuICAgIGFycm93TGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZS5zbGlkZSk7XG4gICAgYXJyb3dSaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZS5zbGlkZSk7XG4gIH07XG5cbiAgLy8gTW92ZSBzbGlkZXIgbGVmdCBvciByaWdodFxuICBjb25zdCBzbGlkZSA9ICgpID0+IHtcbiAgICBsZXQgbGVmdCA9IHBhcnNlSW50KHNraWxsQm94U3R5bGVzLmxlZnQsIDEwKTtcbiAgICBpZiAobGVmdCA+IDApIHtcbiAgICAgIGxlZnQgLT0gNjI1O1xuICAgIH0gZWxzZSBpZiAobGVmdCA+IC01MDApIHtcbiAgICAgIGxlZnQgKz0gNjI1O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhsZWZ0KTtcbiAgICBza2lsbEJveC5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7XG4gIH07XG5cbiAgLy8gQWRkIHByb2plY3RzIHRvIHRoZSBwcm9qZWN0cyBjb250YWluZXJcbiAgY29uc3QgYWRkUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBhbmNob3IuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgYW5jaG9yLmNsYXNzTmFtZSA9IFwicHJvamVjdEFuY2hvclwiO1xuICAgICAgYW5jaG9yLmhyZWYgPSBgaHR0cHM6Ly92aWthczIzNi5naXRodWIuaW8vJHtwcm9qZWN0TGlua3NbaV19YDtcbiAgICAgIGFuY2hvci50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICAgIGltYWdlLnNyYyA9IGBpbWFnZXMvJHtwcm9qZWN0SWNvbnNbaV19YDtcbiAgICAgIHByb2plY3RzQm94LmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgcHJvamVjdHNCb3guY2hpbGROb2Rlc1tpXS5hcHBlbmRDaGlsZChhbmNob3IpO1xuICAgICAgZS5hZGRQcm9qZWN0TGFiZWxzKGkpO1xuICAgIH1cbiAgICBlLnNob3dMYWJlbCgpO1xuICB9O1xuXG4gIC8vIEFkZCBsYWJlbHMgdG8gdGhlIHByb2plY3RzXG4gIGNvbnN0IGFkZFByb2plY3RMYWJlbHMgPSAoaSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IGljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpY29ucy5jbGFzc05hbWUgPSBcImNvZGVfbGlua3NcIjtcbiAgICBpY29ucy5pbm5lckhUTUwgPSBgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92aWthczIzNi8ke3Byb2plY3RMaW5rc1tpXX1cIiB0YXJnZXQ9X2JsYW5rPjxpIGNsYXNzPVwiYnggYngtY29kZS1hbHQgYngtc21cIiA+PC9hPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly92aWthczIzNi5naXRodWIuaW8vJHtwcm9qZWN0TGlua3NbaV19XCIgIHRhcmdldD1fYmxhbms+PGkgY2xhc3M9XCJieCBieC1saW5rLWV4dGVybmFsIGJ4LXNtXCI+PC9pPjwvYT5gO1xuICAgIGgzLnRleHRDb250ZW50ID0gYCR7cHJvamVjdE5hbWVzW2ldfWA7XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKGljb25zKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9sYWJlbFwiKTtcbiAgICBwcm9qZWN0W2ldLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgfTtcblxuICAvLyBTaG93IGxhYmVsIGJ5IGhvdmVyaW5nIG9uIHByb2plY3RcbiAgY29uc3Qgc2hvd0xhYmVsID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RfbGFiZWxcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpICs9IDEpIHtcbiAgICAgIHByb2plY3RbaV0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgIGxhYmVsW2ldLnN0eWxlLm9wYWNpdHkgPSBcIjEwMCVcIjtcbiAgICAgIH0pO1xuICAgICAgcHJvamVjdFtpXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgICBsYWJlbFtpXS5zdHlsZS5vcGFjaXR5ID0gXCIwJVwiO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkU2tpbGxzLFxuICAgIGFkZFByb2plY3RzLFxuICAgIGFkZFByb2plY3RMYWJlbHMsXG4gICAgYWRkU2xpZGUsXG4gICAgbW92ZVNsaWRlcixcbiAgICBzbGlkZSxcbiAgICBzaG93TGFiZWwsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBlO1xuIiwiLy8gSW1wb3J0IEltYWdlc1xuaW1wb3J0IFwiLi4vaW1hZ2VzL2NhbG1faW1hZ2UucG5nXCI7XG5pbXBvcnQgXCIuLi9pbWFnZXMvY2FsbV9pbWFnZV9tZC5qcGdcIjtcbmltcG9ydCBcIi4uL2ltYWdlcy9jYWxtX2ltYWdlX3NtLmpwZ1wiO1xuXG4vLyBJbXBvcnQgaHRtbCBFbGVtZW50c1xuY29uc3QgaW50cm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludHJvXCIpO1xuY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbmNvbnN0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcbmNvbnN0IG1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZVwiKTtcbmNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9ja1wiKTsgLy8gY3Vyc29yIGFmdGVyIG5hbWVcblxuaW50cm8uc3R5bGUuYmFja2dyb3VuZCA9IFwidXJsKCdpbWFnZXMvY2FsbV9pbWFnZS5wbmcnKVwiO1xuXG5jb25zdCBlID0gKCgpID0+IHtcbiAgbGV0IHByZXZpb3VzUG9zID0gd2luZG93LnNjcm9sbFk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQb3MgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBpZiAocHJldmlvdXNQb3MgPCBjdXJyZW50UG9zKSB7XG4gICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGFuY2hvcnNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBwcmV2aW91c1BvcyA9IGN1cnJlbnRQb3M7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgaWYgKGN1cnJlbnRQb3MgPCAoaSArIDEpICogOTAwKSB7XG4gICAgICAgIGFuY2hvcnNbaV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBsZXQgY2hhckluZGV4ID0gMDtcbiAgbGV0IGRpcmVjdGlvbiA9IDE7XG4gIGxldCB0ZXh0ID0gXCJTQUkgVklLQVNcIjtcblxuICAvLyBBbmltYXRlIHdpdGggdHlwaW5nIGFuaW1hdGlvblxuICBjb25zdCBhbmltYXRlVGV4dCA9ICgpID0+IHtcbiAgICBpZiAoY2hhckluZGV4IDwgMCkge1xuICAgICAgaWYgKHRleHQubGVuZ3RoIDw9IDkpIHtcbiAgICAgICAgdGV4dCA9IFwiRlJPTlRFTkQgREVWRUxPUEVSXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ID0gXCJTQUkgVklLQVNcIjtcbiAgICAgIH1cbiAgICAgIGRpcmVjdGlvbiA9IDE7IC8vIFN3aXRjaCBkaXJlY3Rpb24gdG8gdHlwaW5nIGZvcndhcmRcbiAgICAgIGNoYXJJbmRleCA9IDA7XG4gICAgICBzZXRUaW1lb3V0KGFuaW1hdGVUZXh0LCAxMDApO1xuICAgIH0gZWxzZSBpZiAoY2hhckluZGV4ID4gdGV4dC5sZW5ndGgpIHtcbiAgICAgIGRpcmVjdGlvbiA9IC0xOyAvLyBTd2l0Y2ggZGlyZWN0aW9uIHRvIGVyYXNpbmcgYmFja3dhcmRcbiAgICAgIGNoYXJJbmRleCA9IHRleHQubGVuZ3RoO1xuXG4gICAgICBsZXQgYmxpbmtDb3VudCA9IDA7XG5cbiAgICAgIGNvbnN0IGJsaW5rSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGUuYmxpbmtPbmNlKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZS5ibGlua09uY2UoKTtcblxuICAgICAgICAgIGJsaW5rQ291bnQgKz0gMTtcblxuICAgICAgICAgIGlmIChibGlua0NvdW50ID09PSAyKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGJsaW5rSW50ZXJ2YWwpO1xuICAgICAgICAgICAgYW5pbWF0ZVRleHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWUudGV4dENvbnRlbnQgPSB0ZXh0LnN1YnN0cmluZygwLCBjaGFySW5kZXgpO1xuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgIGNoYXJJbmRleCArPSAxO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IC0xKSB7XG4gICAgICAgIGNoYXJJbmRleCAtPSAxO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dChhbmltYXRlVGV4dCwgMTAwKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYmxpbmtPbmNlID0gKCkgPT4ge1xuICAgIGlmIChibG9jay50ZXh0Q29udGVudCA9PT0gXCJ8XCIpIHtcbiAgICAgIGJsb2NrLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgYmxvY2sudGV4dENvbnRlbnQgPSBcInxcIjtcbiAgICB9XG4gIH07XG5cbiAgLy8gQ2hlY2sgdGhlIGN1cnJlbnQgc2NyZWVuIHNpemUgYW5kIGFwcGx5IGFwcHJvcHJpYXRlIHN0eWxlc1xuICBmdW5jdGlvbiBjaGVja1NjcmVlblNpemUoKSB7XG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY3cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgIGludHJvLnN0eWxlLmJhY2tncm91bmQgPSBcInVybCgnaW1hZ2VzL2NhbG1faW1hZ2Vfc20uanBnJykgbm8tcmVwZWF0XCI7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDEwMjNweClcIikubWF0Y2hlcykge1xuICAgICAgaW50cm8uc3R5bGUuYmFja2dyb3VuZCA9IFwidXJsKCdpbWFnZXMvY2FsbV9pbWFnZV9tZC5qcGcnKSBuby1yZXBlYXRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaW50cm8uc3R5bGUuYmFja2dyb3VuZCA9IFwidXJsKCdpbWFnZXMvY2FsbV9pbWFnZS5wbmcnKVwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGFuaW1hdGVUZXh0LCBibGlua09uY2UsIGNoZWNrU2NyZWVuU2l6ZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZTtcbiIsImNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XG5jb25zdCBpbnB1dCA9IGZvcm0uY2hpbGROb2RlcztcbmNvbnN0IHZhbHVlcyA9IFtdO1xuXG5jb25zdCBlID0gKCgpID0+IHtcbiAgY29uc3Qgc3VibWl0TWVzc2FnZSA9ICgpID0+IHtcbiAgICBlLmlzVmFsaWQoKTtcbiAgICBmb3JtLmNoaWxkTm9kZXNbNF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGUuY2hlY2tNZXNzYWdlKCk7XG4gICAgICBpZiAoZS5jaGVja01lc3NhZ2UoKSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBkYXRhID0gYG5hbWU6ICR7dmFsdWVzWzBdfVxuICAgICAgICBlbWFpbDogJHt2YWx1ZXNbMV19XG4gICAgICAgIHN1YmplY3Q6ICR7dmFsdWVzWzJdfVxuICAgICAgICBtZXNzYWdlOiAke3ZhbHVlc1szXX1gO1xuICAgICAgICBlLnNlbmRNZXNzYWdlKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJtZXNzYWdlIG5vdCBzdWJtaXR0ZWRcIik7XG4gICAgICAgIGUucmVmaWxsTWVzc2FnZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGlzVmFsaWQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGJveCA9IGlucHV0W2ldLmNoaWxkTm9kZXNbMF07XG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoYm94LmNoZWNrVmFsaWRpdHkoKSAmJiBib3gudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICBpbnB1dFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICBib3guc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnB1dFtpXS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICBib3guc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmVkXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBDaGVjayB2YWxpZGl0eSBvZiBtZXNzYWdlIGRldGFpbHNcbiAgY29uc3QgY2hlY2tNZXNzYWdlID0gKCkgPT4ge1xuICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGJveCA9IGlucHV0W2ldLmNoaWxkTm9kZXNbMF07XG4gICAgICBpZiAoYm94LmNoZWNrVmFsaWRpdHkoKSAmJiBib3gudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgaW5wdXRbaV0uY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIik7XG4gICAgICAgIHZhbHVlc1tpXSA9IGJveC52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0W2ldLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgICBib3guc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmVkXCI7XG4gICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBSZWZpbGwgbWVzc2FnZSBkZXRhaWxzIGlmIGludmFsaWRcbiAgY29uc3QgcmVmaWxsTWVzc2FnZSA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgYm94ID0gaW5wdXRbaV0uY2hpbGROb2Rlc1swXTtcbiAgICAgIGlmICh2YWx1ZXNbaV0pIHtcbiAgICAgICAgYm94LnZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZW5kTWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgY29uc3QgYm90VG9rZW4gPSBcIjY2MDkwNzg1NTQ6QUFHaV9tM3BjNEM2VEtmRVVIeVRRdUdaOV9zU2hOTDFjZVlcIjtcbiAgICBjb25zdCBjaGF0SWQgPSBcIi0xMDAxOTI0MDYxODc0XCI7XG4gICAgY29uc3QgcGFyc2VNb2RlID0gXCJNYXJrZG93blwiO1xuXG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3Qke2JvdFRva2VufS9zZW5kTWVzc2FnZWAsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY2hhdF9pZDogY2hhdElkLFxuICAgICAgICB0ZXh0OiBtZXNzYWdlLFxuICAgICAgICBwYXJzZV9tb2RlOiBwYXJzZU1vZGUsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgbWVzc2FnZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNlbmRpbmcgbWVzc2FnZTpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG4gIHJldHVybiB7IHN1Ym1pdE1lc3NhZ2UsIGNoZWNrTWVzc2FnZSwgaXNWYWxpZCwgcmVmaWxsTWVzc2FnZSwgc2VuZE1lc3NhZ2UgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBJbXBvcnQgamF2YXNjcmlwdFxuaW1wb3J0IGRlc2NyaXB0aW9uIGZyb20gXCIuL2phdmFzY3JpcHQvZGVzY3JpcHRpb25cIjtcbmltcG9ydCBpbnRyb2R1Y3Rpb24gZnJvbSBcIi4vamF2YXNjcmlwdC9pbnRyb2R1Y3Rpb25cIjtcbmltcG9ydCBtZXNzYWdlIGZyb20gXCIuL2phdmFzY3JpcHQvc2VuZE1lc3NhZ2VcIjtcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2phdmFzY3JpcHQvY29udGFjdFwiO1xuXG4vLyBJbXBvcnQgY3NzIHN0eWxpbmdcbmltcG9ydCBcIi4vY3NzL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL3RhYmxldHNfbW9iaWxlcy5jc3NcIjtcblxuaW50cm9kdWN0aW9uLmFuaW1hdGVUZXh0KCk7XG5kZXNjcmlwdGlvbi5hZGRTa2lsbHMoKTtcbmRlc2NyaXB0aW9uLmFkZFByb2plY3RzKCk7XG5jb250YWN0LmFkZENvbnRhaW5lcigpO1xubWVzc2FnZS5zdWJtaXRNZXNzYWdlKCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW50cm9kdWN0aW9uLmNoZWNrU2NyZWVuU2l6ZSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBpbnRyb2R1Y3Rpb24uY2hlY2tTY3JlZW5TaXplKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==