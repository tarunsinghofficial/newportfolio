(function() {
var exports = {};
exports.id = "pages/experience";
exports.ids = ["pages/experience"];
exports.modules = {

/***/ "./components/Experience.js":
/*!**********************************!*\
  !*** ./components/Experience.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Experience; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_getLatestRepos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/getLatestRepos */ "./lib/getLatestRepos.js");
/* harmony import */ var _constants_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/data */ "./constants/data.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "F:\\NextJs\\simple-developer-portfolio-website\\components\\Experience.js";



function Experience() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "bg-white dark:bg-gray-800",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: " text-5xl md:text-9xl font-bold py-20 text-center md:text-left",
        children: "Experience"
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
      className: "bg-[#F1F1F1] dark:bg-gray-900 -mt-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20",
        children: _constants_data__WEBPACK_IMPORTED_MODULE_2__.default.experience.map((exp, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExperienceCard, {
            title: exp.title,
            desc: exp.desc,
            year: exp.year,
            company: exp.company,
            companyLink: exp.companyLink
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 15
          }, this), idx === _constants_data__WEBPACK_IMPORTED_MODULE_2__.default.experience.length - 1 ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "divider-container flex flex-col items-center -mt-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w-4 h-4 bg-green-500 rounded-full relative z-10",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 17
          }, this)]
        }, void 0, true))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

const ExperienceCard = ({
  title,
  desc,
  year,
  company,
  companyLink
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800",
      children: year
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "font-semibold text-xl",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: companyLink,
      className: "text-gray-500",
      children: company
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-gray-600 dark:text-gray-400 my-2",
      children: desc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
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

/***/ "./pages/experience.js":
/*!*****************************!*\
  !*** ./pages/experience.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ experience; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ContainerBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContainerBlock */ "./components/ContainerBlock.js");
/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Experience */ "./components/Experience.js");

var _jsxFileName = "F:\\NextJs\\simple-developer-portfolio-website\\pages\\experience.js";



function experience() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContainerBlock__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "Experience - Tarun Singh",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Experience__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_ContainerBlock_js"], function() { return __webpack_exec__("./pages/experience.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9jb21wb25lbnRzL0V4cGVyaWVuY2UuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbGliL2dldExhdGVzdFJlcG9zLmpzIiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2V4cGVyaWVuY2UuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJuZXh0LXRoZW1lc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRXhwZXJpZW5jZSIsInVzZXJEYXRhIiwiZXhwIiwiaWR4IiwidGl0bGUiLCJkZXNjIiwieWVhciIsImNvbXBhbnkiLCJjb21wYW55TGluayIsIkV4cGVyaWVuY2VDYXJkIiwiZ2V0TGF0ZXN0UmVwb3MiLCJkYXRhIiwidG9rZW4iLCJ1c2VybmFtZSIsImdpdGh1YlVzZXJuYW1lIiwicmVzIiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlcG9zIiwiaXRlbXMiLCJsYXRlc3RTaXhSZXBvcyIsInNwbGljZSIsImVyciIsImNvbnNvbGUiLCJs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QWMsR0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFyQixDQVZTLENBV1Q7O0FBQ0EsYUFBT0QsY0FBUDtBQUNELEtBYkQsTUFhTztBQUNMLFlBQU1OLEdBQUcsR0FBRyxNQUFNQyxnREFBQSxDQUNmLHFEQUFvREgsUUFBUyx1QkFEOUMsQ0FBbEI7QUFHQSxVQUFJTSxLQUFLLEdBQUdKLEdBQUcsQ0FBQ0osSUFBSixDQUFTUyxLQUFyQjtBQUNBLFVBQUlDLGNBQWMsR0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFyQjtBQUNBLGFBQU9ELGNBQVA7QUFDRDtBQUNGLEdBM0JELENBMkJFLE9BQU9FLEdBQVAsRUFBWTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBQ0YsQ0FoQ0Q7O0FBa0NBLCtEQUFlYixjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUVlLFNBQVNnQixVQUFULEdBQXNCO0FBQ25DLHNCQUNFLDhEQUFDLCtEQUFEO0FBQWdCLFNBQUssRUFBQywwQkFBdEI7QUFBQSwyQkFDRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQzs7Ozs7Ozs7Ozs7QUNWRCxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9leHBlcmllbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldExhdGVzdFJlcG9zIGZyb20gXCIuLi9saWIvZ2V0TGF0ZXN0UmVwb3NcIjtcclxuaW1wb3J0IHVzZXJEYXRhIGZyb20gXCIuLi9jb25zdGFudHMvZGF0YVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeHBlcmllbmNlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gaC00OCBiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiB0ZXh0LTV4bCBtZDp0ZXh0LTl4bCBmb250LWJvbGQgcHktMjAgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICBFeHBlcmllbmNlXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGMUYxRjFdIGRhcms6YmctZ3JheS05MDAgLW10LTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZGFyazpiZy1ncmF5LTkwMCBtYXgtdy14bCBteC1hdXRvIHB0LTIwXCI+XHJcbiAgICAgICAgICB7LyogRXhwZXJpZW5jZSBjYXJkICovfVxyXG4gICAgICAgICAge3VzZXJEYXRhLmV4cGVyaWVuY2UubWFwKChleHAsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxFeHBlcmllbmNlQ2FyZFxyXG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17ZXhwLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgZGVzYz17ZXhwLmRlc2N9XHJcbiAgICAgICAgICAgICAgICB5ZWFyPXtleHAueWVhcn1cclxuICAgICAgICAgICAgICAgIGNvbXBhbnk9e2V4cC5jb21wYW55fVxyXG4gICAgICAgICAgICAgICAgY29tcGFueUxpbms9e2V4cC5jb21wYW55TGlua31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtpZHggPT09IHVzZXJEYXRhLmV4cGVyaWVuY2UubGVuZ3RoIC0gMSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXItY29udGFpbmVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIC1tdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00IGgtNCBiZy1ncmVlbi01MDAgcm91bmRlZC1mdWxsIHJlbGF0aXZlIHotMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNCBoLTQgYmctZ3JlZW4tNTAwIHJvdW5kZWQtZnVsbCByZWxhdGl2ZSB6LTEwIGFuaW1hdGUtcGluZ1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEgaC0yNCBiZy1ncmF5LTIwMCBkYXJrOmJnLWdyYXktNTAwIHJvdW5kZWQtZnVsbCAtbXQtMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgRXhwZXJpZW5jZUNhcmQgPSAoeyB0aXRsZSwgZGVzYywgeWVhciwgY29tcGFueSwgY29tcGFueUxpbmsgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGV4cGVyaWVuY2UtY2FyZCBib3JkZXIgcC00IHJvdW5kZWQtbWQgc2hhZG93LXhsIGJnLXdoaXRlIGRhcms6YmctZ3JheS04MDAgei0xMCBteC00XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTEwIG1kOi1sZWZ0LTEwIG1kOi10b3AtMTAgdGV4dC00eGwgdGV4dC1ncmF5LTIwMCBmb250LWJvbGQgZGFyazp0ZXh0LWdyYXktODAwXCI+XHJcbiAgICAgICAge3llYXJ9XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQteGxcIj57dGl0bGV9PC9oMT5cclxuICAgICAgPGEgaHJlZj17Y29tcGFueUxpbmt9IGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICB7Y29tcGFueX1cclxuICAgICAgPC9hPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMCBteS0yXCI+e2Rlc2N9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgZ2V0TGF0ZXN0UmVwb3MgPSBhc3luYyAoZGF0YSwgdG9rZW4pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gZGF0YS5naXRodWJVc2VybmFtZTtcclxuXHJcbiAgICAvLyBsZXQgdG9rZW4gPSBgdG9rZW4gJHtwcm9jZXNzLmVudi5HSVRIVUJfQVVUSF9UT0tFTn1gO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJUT0tFTlwiLCB0b2tlbik7XHJcblxyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9dXNlcjoke3VzZXJuYW1lfStzb3J0OmF1dGhvci1kYXRlLWFzY2AsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGxldCByZXBvcyA9IHJlcy5kYXRhLml0ZW1zO1xyXG4gICAgICBsZXQgbGF0ZXN0U2l4UmVwb3MgPSByZXBvcy5zcGxpY2UoMCwgNik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiTEFURVNUIDYgcmVwb3NcIiwgbGF0ZXN0U2l4UmVwb3MpO1xyXG4gICAgICByZXR1cm4gbGF0ZXN0U2l4UmVwb3M7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3JlcG9zaXRvcmllcz9xPXVzZXI6JHt1c2VybmFtZX0rc29ydDphdXRob3ItZGF0ZS1hc2NgXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCByZXBvcyA9IHJlcy5kYXRhLml0ZW1zO1xyXG4gICAgICBsZXQgbGF0ZXN0U2l4UmVwb3MgPSByZXBvcy5zcGxpY2UoMCwgNik7XHJcbiAgICAgIHJldHVybiBsYXRlc3RTaXhSZXBvcztcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0TGF0ZXN0UmVwb3M7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnRhaW5lckJsb2NrIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lckJsb2NrXCI7XHJcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gXCIuLi9jb21wb25lbnRzL0V4cGVyaWVuY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGVyaWVuY2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXJCbG9jayB0aXRsZT1cIkV4cGVyaWVuY2UgLSBUYXJ1biBTaW5naFwiPlxyXG4gICAgICA8RXhwZXJpZW5jZSAvPlxyXG4gICAgPC9Db250YWluZXJCbG9jaz5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXRoZW1lc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=