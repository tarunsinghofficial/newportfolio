(function() {
var exports = {};
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "./components/AboutMe.js":
/*!*******************************!*\
  !*** ./components/AboutMe.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AboutMe; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_getLatestRepos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/getLatestRepos */ "./lib/getLatestRepos.js");
/* harmony import */ var _constants_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/data */ "./constants/data.js");

var _jsxFileName = "C:\\Users\\tarun\\newportfolio\\components\\AboutMe.js";



function AboutMe() {
  var _userData$about$descr;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "bg-white dark:bg-gray-800",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: " text-5xl md:text-9xl font-bold py-20 text-center md:text-left",
        children: "About Me."
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
      className: "bg-[#F1F1F1] -mt-10 dark:bg-gray-900",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-container max-w-6xl mx-auto pt-20",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "leading-loose text-2xl md:text-4xl font-semibold  mx-4",
          style: {
            lineHeight: "3rem"
          },
          children: [_constants_data__WEBPACK_IMPORTED_MODULE_3__.default.about.title, " ", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "bg-green-500 rounded-md px-2 py-1 text-white",
            href: _constants_data__WEBPACK_IMPORTED_MODULE_3__.default.about.currentProjectUrl,
            children: _constants_data__WEBPACK_IMPORTED_MODULE_3__.default.about.currentProject
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bg-[#F1F1F1] dark:bg-gray-900 px-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "inline-flex flex-col",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: "text-xl font-semibold text-gray-700 dark:text-gray-200",
              children: "Contact"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-lg text-gray-500 mt-4 dark:text-gray-300",
              children: ["If you want to know something from me, send me a ", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: `mailto:${_constants_data__WEBPACK_IMPORTED_MODULE_3__.default.email}`,
                className: "text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300",
                children: "mail"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, this), " ", "and I'll get back to you. I swear."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "mt-8",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: "text-xl font-semibold text-gray-700 dark:text-gray-200",
              children: "Job Opportunities"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-lg text-gray-500 mt-4 dark:text-gray-300",
              children: ["As, I'm in my Final Year, I'm looking for a job, If you see me as a good fit, check my", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: _constants_data__WEBPACK_IMPORTED_MODULE_3__.default.resumeUrl,
                target: "__blank",
                className: "text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300",
                children: "CV"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, this), " ", "and I'd love to work for you."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200",
            children: "Social Links"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "mt-4 ml-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex flex-row justify-start items-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: _constants_data__WEBPACK_IMPORTED_MODULE_3__.default.socialLinks.twitter,
                className: "flex flex-row items-center space-x-4 group",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "my-4",
                  children: "\u2192"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 21
                  }, this), "Twitter"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex flex-row justify-start items-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: _constants_data__WEBPACK_IMPORTED_MODULE_3__.default.socialLinks.github,
                className: "flex flex-row items-center space-x-4 group",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "my-4",
                  children: "\u2192"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 21
                  }, this), "GitHub"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex flex-row justify-start items-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: _constants_data__WEBPACK_IMPORTED_MODULE_3__.default.socialLinks.linkedin,
                className: "flex flex-row items-center space-x-4 group",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "my-4",
                  children: "\u2192"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 21
                  }, this), "LinkedIn"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex flex-row justify-start items-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: _constants_data__WEBPACK_IMPORTED_MODULE_3__.default.socialLinks.instagram,
                className: "flex flex-row items-center space-x-4 group",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "my-4",
                  children: "\u2192"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 21
                  }, this), "Instagram"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-1 md:col-span-2",
          children: [(_userData$about$descr = _constants_data__WEBPACK_IMPORTED_MODULE_3__.default.about.description) === null || _userData$about$descr === void 0 ? void 0 : _userData$about$descr.map((desc, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-xl text-gray-700 mb-4 dark:text-gray-300 ",
            children: desc
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 15
          }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "bg-green-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50",
            children: "Tech Stack"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex flex-row flex-wrap mt-8",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
              className: "h-20 w-20 mx-4 my-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png",
              className: "h-20 w-20 mx-4 my-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
              className: "h-20 w-20 mx-4 my-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
              className: "h-20 w-20 mx-4 my-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
              className: "h-20 w-20 mx-4 my-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
              className: "h-20 w-20 mx-4 my-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aws/aws.png",
              className: "h-20 w-20 mx-4 my-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png",
              className: "h-20 w-20 mx-4 my-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
              className: "h-20 w-20 mx-4 my-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png",
              className: "h-20 w-20 mx-4 my-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png",
              className: "h-20 w-20 mx-4 my-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ about; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ContainerBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContainerBlock */ "./components/ContainerBlock.js");
/* harmony import */ var _components_AboutMe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AboutMe */ "./components/AboutMe.js");

var _jsxFileName = "C:\\Users\\tarun\\newportfolio\\pages\\about.js";



function about() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContainerBlock__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "Tarun Singh - Developer, Technical Writer, YouTuber",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AboutMe__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_ContainerBlock_js","lib_getLatestRepos_js"], function() { return __webpack_exec__("./pages/about.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9jb21wb25lbnRzL0Fib3V0TWUuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJuZXh0LXRoZW1lc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQWJvdXRNZSIsImxpbmVIZWlnaHQiLCJ1c2VyRGF0YSIsImN1cnJlbnRQcm9qZWN0IiwibWFwIiwiZGVzYyIsImlkeCIsImFib3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUNoQyxzQkFDRTtBQUFTLGFBQVMsRUFBQywyQkFBbkI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxrREFBZjtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQyxnRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FB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O0FBQUE7QUFBQTtBQUFBLG9CQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTNGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUxELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeExEO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLEtBQVQsR0FBaUI7QUFDOUIsc0JBQ0UsOERBQUMsK0RBQUQ7QUFDRSxTQUFLLEVBQUMscURBRFI7QUFBQSwyQkFHRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0QsQzs7Ozs7Ozs7Ozs7QUNaRCxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGdldExhdGVzdFJlcG9zIGZyb20gXCIuLi9saWIvZ2V0TGF0ZXN0UmVwb3NcIjtcclxuaW1wb3J0IHVzZXJEYXRhIGZyb20gXCIuLi9jb25zdGFudHMvZGF0YVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXRNZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctd2hpdGUgZGFyazpiZy1ncmF5LTgwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIGgtNDggYmctd2hpdGUgZGFyazpiZy1ncmF5LTgwMFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCIgdGV4dC01eGwgbWQ6dGV4dC05eGwgZm9udC1ib2xkIHB5LTIwIHRleHQtY2VudGVyIG1kOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgQWJvdXQgTWUuXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGMUYxRjFdIC1tdC0xMCBkYXJrOmJnLWdyYXktOTAwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lciBtYXgtdy02eGwgbXgtYXV0byBwdC0yMFwiPlxyXG4gICAgICAgICAgPHBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVhZGluZy1sb29zZSB0ZXh0LTJ4bCBtZDp0ZXh0LTR4bCBmb250LXNlbWlib2xkICBteC00XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbGluZUhlaWdodDogXCIzcmVtXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3VzZXJEYXRhLmFib3V0LnRpdGxlfSB7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHJvdW5kZWQtbWQgcHgtMiBweS0xIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgIGhyZWY9e3VzZXJEYXRhLmFib3V0LmN1cnJlbnRQcm9qZWN0VXJsfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3VzZXJEYXRhLmFib3V0LmN1cnJlbnRQcm9qZWN0fSBcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0YxRjFGMV0gZGFyazpiZy1ncmF5LTkwMCBweC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yMCBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIG1heC13LTZ4bCBteC1hdXRvIGdhcC15LTIwIGdhcC14LTIwXCI+XHJcbiAgICAgICAgICB7LyogU29jaWFsIEJ1dHRvbnMgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNTAwIG10LTQgZGFyazp0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICBJZiB5b3Ugd2FudCB0byBrbm93IHNvbWV0aGluZyBmcm9tIG1lLCBzZW5kIG1lIGEge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj17YG1haWx0bzoke3VzZXJEYXRhLmVtYWlsfWB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgYm9yZGVyLWItMiBib3JkZXItZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS0zMDAgZm9udC1ib2xkIGRhcms6dGV4dC1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIG1haWxcclxuICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICBhbmQgSSdsbCBnZXQgYmFjayB0byB5b3UuIEkgc3dlYXIuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgSm9iIE9wcG9ydHVuaXRpZXNcclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTUwMCBtdC00IGRhcms6dGV4dC1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgQXMsIEknbSBpbiBteSBGaW5hbCBZZWFyLCBJJ20gbG9va2luZyBmb3IgYSBqb2IsIElmIHlvdSBzZWUgbWUgYXMgYSBnb29kIGZpdCxcclxuICAgICAgICAgICAgICAgIGNoZWNrIG15e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj17dXNlckRhdGEucmVzdW1lVXJsfVxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCBib3JkZXItYi0yIGJvcmRlci1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTMwMCBmb250LWJvbGQgZGFyazp0ZXh0LWdyYXktMzAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ1ZcclxuICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICBhbmQgSSdkIGxvdmUgdG8gd29yayBmb3IgeW91LlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBTb2NpYWwgTGlua3MgKi99XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCBtdC04IGRhcms6dGV4dC1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgIFNvY2lhbCBMaW5rc1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgbWwtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj17dXNlckRhdGEuc29jaWFsTGlua3MudHdpdHRlcn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgc3BhY2UteC00IGdyb3VwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS00XCI+JnJhcnI7PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTUwMCBmb250LW1vbm8gcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaC0wLjUgdy1mdWxsIGJnLWdyYXktNDAwIGJvdHRvbS0wIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMjQgZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFR3aXR0ZXJcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj17dXNlckRhdGEuc29jaWFsTGlua3MuZ2l0aHVifVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTRcIj4mcmFycjs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNTAwIGZvbnQtbW9ubyByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gZGFyazp0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBoLTAuNSB3LWZ1bGwgYmctZ3JheS00MDAgYm90dG9tLTAgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0yNCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0wIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgR2l0SHViXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e3VzZXJEYXRhLnNvY2lhbExpbmtzLmxpbmtlZGlufVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTRcIj4mcmFycjs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNTAwIGZvbnQtbW9ubyByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gZGFyazp0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBoLTAuNSB3LWZ1bGwgYmctZ3JheS00MDAgYm90dG9tLTAgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0yNCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0wIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgTGlua2VkSW5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj17dXNlckRhdGEuc29jaWFsTGlua3MuaW5zdGFncmFtfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTRcIj4mcmFycjs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNTAwIGZvbnQtbW9ubyByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gZGFyazp0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBoLTAuNSB3LWZ1bGwgYmctZ3JheS00MDAgYm90dG9tLTAgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0yOCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0wIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgSW5zdGFncmFtXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBUZXh0IGFyZWEgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbWQ6Y29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICB7dXNlckRhdGEuYWJvdXQuZGVzY3JpcHRpb24/Lm1hcCgoZGVzYywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWdyYXktNzAwIG1iLTQgZGFyazp0ZXh0LWdyYXktMzAwIFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2Rlc2N9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgdGV4dC0zeGwgcm91bmRlZC1tZCBweC0yIHB5LTEgaW5saW5lLWJsb2NrIGZvbnQtYm9sZCB0ZXh0LWdyYXktNTBcIj5cclxuICAgICAgICAgICAgICBUZWNoIFN0YWNrXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgbXQtOFwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9naXRodWIvZXhwbG9yZS84MDY4OGU0MjlhN2Q0ZWYyZmNhMWU4MjM1MGZlOGUzNTE3ZDM0OTRkL3RvcGljcy9yZWFjdC9yZWFjdC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0yMCB3LTIwIG14LTQgbXktNFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZ2l0aHViL2V4cGxvcmUvODA2ODhlNDI5YTdkNGVmMmZjYTFlODIzNTBmZThlMzUxN2QzNDk0ZC90b3BpY3MvamF2YS9qYXZhLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTIwIHctMjAgbXgtNCBteS00XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9naXRodWIvZXhwbG9yZS84MDY4OGU0MjlhN2Q0ZWYyZmNhMWU4MjM1MGZlOGUzNTE3ZDM0OTRkL3RvcGljcy90eXBlc2NyaXB0L3R5cGVzY3JpcHQucG5nXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMjAgdy0yMCBteC00IG15LTRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2dpdGh1Yi9leHBsb3JlLzgwNjg4ZTQyOWE3ZDRlZjJmY2ExZTgyMzUwZmU4ZTM1MTdkMzQ5NGQvdG9waWNzL2h0bWwvaHRtbC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0yMCB3LTIwIG14LTQgbXktNFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZ2l0aHViL2V4cGxvcmUvODA2ODhlNDI5YTdkNGVmMmZjYTFlODIzNTBmZThlMzUxN2QzNDk0ZC90b3BpY3MvY3NzL2Nzcy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0yMCB3LTIwIG14LTQgbXktNFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZ2l0aHViL2V4cGxvcmUvODA2ODhlNDI5YTdkNGVmMmZjYTFlODIzNTBmZThlMzUxN2QzNDk0ZC90b3BpY3MvamF2YXNjcmlwdC9qYXZhc2NyaXB0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTIwIHctMjAgbXgtNCBteS00XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9naXRodWIvZXhwbG9yZS84MDY4OGU0MjlhN2Q0ZWYyZmNhMWU4MjM1MGZlOGUzNTE3ZDM0OTRkL3RvcGljcy9hd3MvYXdzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTIwIHctMjAgbXgtNCBteS00XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9naXRodWIvZXhwbG9yZS84MDY4OGU0MjlhN2Q0ZWYyZmNhMWU4MjM1MGZlOGUzNTE3ZDM0OTRkL3RvcGljcy9naXQvZ2l0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTIwIHctMjAgbXgtNCBteS00XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9naXRodWIvZXhwbG9yZS84MDY4OGU0MjlhN2Q0ZWYyZmNhMWU4MjM1MGZlOGUzNTE3ZDM0OTRkL3RvcGljcy9yZWFjdC9yZWFjdC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0yMCB3LTIwIG14LTQgbXktNFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZ2l0aHViL2V4cGxvcmUvODA2ODhlNDI5YTdkNGVmMmZjYTFlODIzNTBmZThlMzUxN2QzNDk0ZC90b3BpY3MvZmlyZWJhc2UvZmlyZWJhc2UucG5nXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMjAgdy0yMCBteC00IG15LTRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2dpdGh1Yi9leHBsb3JlLzgwNjg4ZTQyOWE3ZDRlZjJmY2ExZTgyMzUwZmU4ZTM1MTdkMzQ5NGQvdG9waWNzL215c3FsL215c3FsLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTIwIHctMjAgbXgtNCBteS00XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnRhaW5lckJsb2NrIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lckJsb2NrXCI7XHJcbmltcG9ydCBBYm91dE1lIGZyb20gXCIuLi9jb21wb25lbnRzL0Fib3V0TWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyQmxvY2tcclxuICAgICAgdGl0bGU9XCJUYXJ1biBTaW5naCAtIERldmVsb3BlciwgVGVjaG5pY2FsIFdyaXRlciwgWW91VHViZXJcIlxyXG4gICAgPlxyXG4gICAgICA8QWJvdXRNZSAvPlxyXG4gICAgPC9Db250YWluZXJCbG9jaz5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXRoZW1lc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=