(function() {
var exports = {};
exports.id = "pages/projects";
exports.ids = ["pages/projects"];
exports.modules = {

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Projects; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_getLatestRepos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/getLatestRepos */ "./lib/getLatestRepos.js");
/* harmony import */ var _constants_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/data */ "./constants/data.js");

var _jsxFileName = "C:\\Users\\tarun\\newportfolio\\components\\Projects.js";



function Projects() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "bg-white dark:bg-gray-800",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: " text-5xl md:text-9xl font-bold py-20 text-center md:text-left",
        children: "Projects"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bg-[#F1F1F1] dark:bg-gray-900",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40",
        children: _constants_data__WEBPACK_IMPORTED_MODULE_3__.default.projects.map((proj, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectCard, {
          title: proj.title,
          link: proj.link,
          imgUrl: proj.imgUrl,
          number: `${idx + 1}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

const ProjectCard = ({
  title,
  link,
  imgUrl,
  number
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    href: link,
    className: "w-full block shadow-2xl",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "relative overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "h-72 object-cover",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: imgUrl,
          alt: "portfolio",
          className: "transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "absolute bottom-10 left-10 text-gray-50 font-bold text-xl",
        children: number.length === 1 ? "0" + number : number
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./lib/getLatestRepos.js":
/*!*******************************!*\
  !*** ./lib/getLatestRepos.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const getLatestRepos = async (data, token) => {
  // console.log("data", data);
  try {
    const username = data.githubUsername; // let token = `token ${process.env.GITHUB_AUTH_TOKEN}`;
    // console.log("TOKEN", token);

    if (token) {
      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`, {
        headers: {
          Authorization: `token ${token}`
        }
      });
      let repos = res.data.items;
      let latestSixRepos = repos.splice(0, 6); // console.log("LATEST 6 repos", latestSixRepos);

      return latestSixRepos;
    } else {
      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`);
      let repos = res.data.items;
      let latestSixRepos = repos.splice(0, 6);
      return latestSixRepos;
    }
  } catch (err) {
    console.log(err);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getLatestRepos);

/***/ }),

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ projects; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ContainerBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContainerBlock */ "./components/ContainerBlock.js");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects.js");

var _jsxFileName = "C:\\Users\\tarun\\newportfolio\\pages\\projects.js";



function projects() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContainerBlock__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "Projects - Tarun Singh",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-themes");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_ContainerBlock_js"], function() { return __webpack_exec__("./pages/projects.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9jb21wb25lbnRzL1Byb2plY3RzLmpzIiwid2VicGFjazovL25leHRqcy8uL2xpYi9nZXRMYXRlc3RSZXBvcy5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQtdGhlbWVzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsInVzZXJEYXRhIiwicHJvaiIsImlkeCIsInRpdGxlIiwibGluayIsImltZ1VybCIsIlByb2plY3RDYXJkIiwibnVtYmVyIiwibGVuZ3RoIiwiZ2V0TGF0ZXN0UmVwb3MiLCJkYXRhIiwidG9rZW4iLCJ1c2VybmFtZSIsImdpdGh1YlVzZXJuYW1lIiwicmVzIiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlcG9zIiwiaXRlbXMiLCJsYXRlc3RTaXhSZXBvcyIsInNwbGljZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJwcm9qZWN0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QUFDRyxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFyQjtBQUNBLGFBQU9ELGNBQVA7QUFDRDtBQUNGLEdBM0JELENBMkJFLE9BQU9FLEdBQVAsRUFBWTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBQ0YsQ0FoQ0Q7O0FBa0NBLCtEQUFlYixjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUVlLFNBQVNnQixRQUFULEdBQW9CO0FBQ2pDLHNCQUNFLDhEQUFDLCtEQUFEO0FBQWdCLFNBQUssRUFBQyx3QkFBdEI7QUFBQSwyQkFDRSw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQzs7Ozs7Ozs7Ozs7QUNWRCxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9wcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGdldExhdGVzdFJlcG9zIGZyb20gXCIuLi9saWIvZ2V0TGF0ZXN0UmVwb3NcIjtcclxuaW1wb3J0IHVzZXJEYXRhIGZyb20gXCIuLi9jb25zdGFudHMvZGF0YVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIGRhcms6YmctZ3JheS04MDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBoLTQ4IGJnLXdoaXRlIGRhcms6YmctZ3JheS04MDBcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHRleHQtNXhsIG1kOnRleHQtOXhsIGZvbnQtYm9sZCBweS0yMCB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgIFByb2plY3RzXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBHcmlkIHN0YXJ0cyBoZXJlICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRjFGMUYxXSBkYXJrOmJnLWdyYXktOTAwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC04IHB5LTIwIHBiLTQwXCI+XHJcbiAgICAgICAgICB7dXNlckRhdGEucHJvamVjdHMubWFwKChwcm9qLCBpZHgpID0+IChcclxuICAgICAgICAgICAgPFByb2plY3RDYXJkXHJcbiAgICAgICAgICAgICAgdGl0bGU9e3Byb2oudGl0bGV9XHJcbiAgICAgICAgICAgICAgbGluaz17cHJvai5saW5rfVxyXG4gICAgICAgICAgICAgIGltZ1VybD17cHJvai5pbWdVcmx9XHJcbiAgICAgICAgICAgICAgbnVtYmVyPXtgJHtpZHggKyAxfWB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUHJvamVjdENhcmQgPSAoeyB0aXRsZSwgbGluaywgaW1nVXJsLCBudW1iZXIgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YSBocmVmPXtsaW5rfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmxvY2sgc2hhZG93LTJ4bFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC03MiBvYmplY3QtY292ZXJcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtpbWdVcmx9XHJcbiAgICAgICAgICAgIGFsdD1cInBvcnRmb2xpb1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMjUgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAwIGVhc2Utb3V0IG9iamVjdC1jb3ZlciBoLWZ1bGwgdy1mdWxsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xMCBsZWZ0LTEwIHRleHQtZ3JheS01MCBmb250LWJvbGQgdGV4dC14bCBiZy1yZWQtNTAwIHJvdW5kZWQtbWQgcHgtMlwiPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0xMCBsZWZ0LTEwIHRleHQtZ3JheS01MCBmb250LWJvbGQgdGV4dC14bFwiPlxyXG4gICAgICAgICAge251bWJlci5sZW5ndGggPT09IDEgPyBcIjBcIiArIG51bWJlciA6IG51bWJlcn1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYT5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBnZXRMYXRlc3RSZXBvcyA9IGFzeW5jIChkYXRhLCB0b2tlbikgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBkYXRhLmdpdGh1YlVzZXJuYW1lO1xyXG5cclxuICAgIC8vIGxldCB0b2tlbiA9IGB0b2tlbiAke3Byb2Nlc3MuZW52LkdJVEhVQl9BVVRIX1RPS0VOfWA7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlRPS0VOXCIsIHRva2VuKTtcclxuXHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT11c2VyOiR7dXNlcm5hbWV9K3NvcnQ6YXV0aG9yLWRhdGUtYXNjYCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke3Rva2VufWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgbGV0IHJlcG9zID0gcmVzLmRhdGEuaXRlbXM7XHJcbiAgICAgIGxldCBsYXRlc3RTaXhSZXBvcyA9IHJlcG9zLnNwbGljZSgwLCA2KTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJMQVRFU1QgNiByZXBvc1wiLCBsYXRlc3RTaXhSZXBvcyk7XHJcbiAgICAgIHJldHVybiBsYXRlc3RTaXhSZXBvcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9dXNlcjoke3VzZXJuYW1lfStzb3J0OmF1dGhvci1kYXRlLWFzY2BcclxuICAgICAgKTtcclxuICAgICAgbGV0IHJlcG9zID0gcmVzLmRhdGEuaXRlbXM7XHJcbiAgICAgIGxldCBsYXRlc3RTaXhSZXBvcyA9IHJlcG9zLnNwbGljZSgwLCA2KTtcclxuICAgICAgcmV0dXJuIGxhdGVzdFNpeFJlcG9zO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRMYXRlc3RSZXBvcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyQmxvY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyQmxvY2tcIjtcclxuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2plY3RzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0cygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lckJsb2NrIHRpdGxlPVwiUHJvamVjdHMgLSBUYXJ1biBTaW5naFwiPlxyXG4gICAgICA8UHJvamVjdHMgLz5cclxuICAgIDwvQ29udGFpbmVyQmxvY2s+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC10aGVtZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9