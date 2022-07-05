exports.id = "components_ContainerBlock_js-lib_getLatestRepos_js";
exports.ids = ["components_ContainerBlock_js-lib_getLatestRepos_js"];
exports.modules = {

/***/ "./components/ContainerBlock.js":
/*!**************************************!*\
  !*** ./components/ContainerBlock.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ContainerBlock; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");

var _jsxFileName = "C:\\Users\\tarun\\newportfolio\\components\\ContainerBlock.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function ContainerBlock(_ref) {
  let {
    children
  } = _ref,
      customMeta = _objectWithoutProperties(_ref, ["children"]);

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const meta = _objectSpread({
    title: "Tarun Singh - Developer, Technical Writer, YouTuber",

    /* description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`, */
    image: "/avatar.png",
    type: "website"
  }, customMeta);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: meta.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "robots",
        content: "follow, index"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        content: meta.description,
        name: "description"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:url",
        content: `https://yourwebsite.com${router.asPath}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "canonical",
        href: `https://yourwebsite.com${router.asPath}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:type",
        content: meta.type
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:site_name",
        content: "Manu Arora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:description",
        content: meta.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:title",
        content: meta.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image",
        content: meta.image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:site",
        content: "@mannupaaji"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:title",
        content: meta.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:description",
        content: meta.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:image",
        content: meta.image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), meta.date && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "article:published_time",
        content: meta.date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "dark:bg-gray-800 w-full",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/data */ "./constants/data.js");

var _jsxFileName = "C:\\Users\\tarun\\newportfolio\\components\\Footer.js";


function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-[#F1F1F1] dark:bg-gray-900",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "max-w-6xl  mx-auto px-4 py-10 md:py-20",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "h-0.5 w-full bg-white dark:bg-gray-700"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\xA9 Tarun Singh. All Rights Reserved."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Developed by", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "hover:bg-green-500 rounded-md px-2 py-1  hover:text-gray-50",
                href: "https://",
                children: "Tarun Singh"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "space-x-4 flex flex-row items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: _constants_data__WEBPACK_IMPORTED_MODULE_2__.default.socialLinks.instagram,
            className: "text-base font-normal text-gray-600 dark:text-gray-300",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-instagram h-5 w-5",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: _constants_data__WEBPACK_IMPORTED_MODULE_2__.default.socialLinks.twitter,
            className: "text-base font-normal text-gray-600 dark:text-gray-300",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-twitter h-5 w-5",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: _constants_data__WEBPACK_IMPORTED_MODULE_2__.default.socialLinks.linkedin,
            className: "text-base font-normal text-gray-600 dark:text-gray-300",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-linkedin h-5 w-5",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Navbar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ "next-themes");
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/data */ "./constants/data.js");

var _jsxFileName = "C:\\Users\\tarun\\newportfolio\\components\\Navbar.js";





function Navbar() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  console.log(router.asPath);
  const {
    theme,
    setTheme
  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
  const {
    0: mounted,
    1: setMounted
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setMounted(true);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "max-w-6xl  mx-auto px-4 py-10 md:py-20",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex  md:flex-row justify-between items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: "font-semibold text-xl dark:text-gray-100",
              children: _constants_data__WEBPACK_IMPORTED_MODULE_5__.default.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-base font-light text-gray-500 dark:text-gray-300",
              children: _constants_data__WEBPACK_IMPORTED_MODULE_5__.default.designation
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "space-x-8 hidden md:block",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/about",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: `text-base  ${router.asPath === "/about" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
            children: ["About", " ", router.asPath === "/about" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-arrow-down inline-block h-3 w-3",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                fillRule: "evenodd",
                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/projects",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: `text-base  ${router.asPath === "/projects" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
            children: ["Projects", router.asPath === "/projects" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-arrow-down inline-block h-3 w-3",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                fillRule: "evenodd",
                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/experience",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: `text-base  ${router.asPath === "/experience" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
            children: ["Experience", " ", router.asPath === "/experience" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-arrow-down inline-block h-3 w-3",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                fillRule: "evenodd",
                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/Blog",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: `text-base  ${router.asPath === "/blog" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
            children: ["Blog", " ", router.asPath === "/Blog" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-arrow-down inline-block h-3 w-3",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                fillRule: "evenodd",
                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/contact",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: `text-base  ${router.asPath === "/contact" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
            children: ["Contact", router.asPath === "/contact" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-arrow-down inline-block h-3 w-3",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                fillRule: "evenodd",
                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "space-x-4 flex flex-row items-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: _constants_data__WEBPACK_IMPORTED_MODULE_5__.default.socialLinks.instagram,
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-instagram h-5 w-5",
            viewBox: "0 0 16 16",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: _constants_data__WEBPACK_IMPORTED_MODULE_5__.default.socialLinks.twitter,
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-twitter h-5 w-5",
            viewBox: "0 0 16 16",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: _constants_data__WEBPACK_IMPORTED_MODULE_5__.default.socialLinks.linkedin,
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-linkedin h-5 w-5",
            viewBox: "0 0 16 16",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          "aria-label": "Toggle Dark Mode",
          type: "button",
          className: "w-10 h-10 p-3 rounded focus:outline-none",
          onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
          children: mounted && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            stroke: "currentColor",
            className: "w-4 h-4 text-yellow-500 dark:text-yellow-500",
            children: theme === "dark" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 19
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "space-x-8 block md:hidden mt-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/about",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/projects",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/experience",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: "Experience"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/contact",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./constants/data.js":
/*!***************************!*\
  !*** ./constants/data.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const userData = {
  githubUsername: "tarunsinghofficial",
  name: "Tarun Singh",
  designation: "Software Developer",
  avatarUrl: "/avatar.png",
  email: "tarunsinghwap7@gmail.com",
  phone: "+91 9582423539",
  address: "New Delhi, India.",
  projects: [{
    title: "Apollo Music Player",
    link: "https://github.com/tarunsinghofficial/ApolloMusic",
    imgUrl: "/pro2.png"
  }, {
    title: "OneDevPlace",
    link: "https://onedevplace.netlify.com/",
    imgUrl: "/pro3.png"
  }, {
    title: "News App",
    link: "https://github.com/tarunsinghofficial/OneDevPlace",
    imgUrl: "/pro1.png"
  }],
  about: {
    title: "I'm a Software Developer, Technical Writer, YouTuber, and a passionate learner. I am currently writing various Technical Articles at",
    description: [`As a CS student, I have been working on various projects in the past. The tech stack that I mostly used are React Native, AWS, Firebase, Java, SQL, etc. I have contributed to various open-source projects and also mentored at Girlscript Summer of Code 2022, where I have assisted the Project admin and various other open-source contributors with their queries.`],
    currentProject: "GeeksforGeeks",
    currentProjectUrl: "https://auth.geeksforgeeks.org/user/tarunsinghwap7"
  },
  experience: [{
    title: "Mentor",
    company: "GSSoC'22",
    year: "2022",
    companyLink: "https://github.com/tarunsinghofficial",
    desc: "Mentored students in Girlscript Summer of Code for Open Source project for Social Good. Reviewed various code and Github PRs of participants in HTML/CSS, Bootstrap, etc."
  }, {
    title: "Technical Content Writer",
    company: "GeeksforGeeks",
    year: "2020-22",
    companyLink: "https://auth.geeksforgeeks.org/user/tarunsinghwap7",
    desc: "Written more than 60+ Technical Articles related to Programming Languages, DBMS, SQL, Software Engineering, etc"
  }, {
    title: "B.C.A",
    company: "Maharaja Surajmal Institute, (GGSIPU).",
    year: "2019-22",
    companyLink: "#",
    desc: "Studied Computer Applcations and Information Technology."
  }, {
    title: "High School",
    company: "Bal Mandir Sr. Sec. School, Delhi",
    year: "2019",
    companyLink: "#",
    desc: "Subjects being Commerce - I barely survived with 81.6% marks aggregate."
  }],
  resumeUrl: "https://drive.google.com/file/d/1R1y1TQi-4QUZO6-7w-HALjtHCE2v829f/view?usp=sharing",
  socialLinks: {
    instagram: "https://instagram.com/targrapher24",
    twitter: "https://twitter.com/itsTarun24",
    linkedin: "https://linkedin.com/in/tarunsingh24",
    github: "https://github.com/tarunsinghofficial"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (userData);

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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9jb21wb25lbnRzL0NvbnRhaW5lckJsb2NrLmpzIiwid2VicGFjazovL25leHRqcy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovL25leHRqcy8uL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovL25leHRqcy8uL2NvbnN0YW50cy9kYXRhLmpzIiwid2VicGFjazovL25leHRqcy8uL2xpYi9nZXRMYXRlc3RSZXBvcy5qcyIsIndlYnBhY2s6Ly9uZXh0anMvaWdub3JlZHxDOlxcVXNlcnNcXHRhcnVuXFxuZXdwb3J0Zm9saW9cXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJDb250YWluZXJCbG9jayIsImNoaWxkcmVuIiwiY3VzdG9tTWV0YSIsInJvdXRlciIsInVzZVJvdXRlciIsIm1ldGEiLCJ0aXRsZSIsImltYWdlIiwidHlwZSIsImRlc2NyaXB0aW9uIiwiYXNQYXRoIiwiZGF0ZSIsIkZvb3RlciIsInVzZXJEYXRhIiwiTmF2YmFyIiwiY29uc29sZSIsImxvZyIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VUaGVtZSIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJuYW1lIiwiZGVzaWduYXRpb24iLCJnaXRodWJVc2VybmFtZSIsImF2YXRhclVybCIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzIiwicHJvamVjdHMiLCJsaW5rIiwiaW1nVXJsIiwiYWJvdXQiLCJjdXJyZW50UHJvamVjdCIsImN1cnJlbnRQcm9qZWN0VXJsIiwiZXhwZXJpZW5jZSIsImNvbXBhbnkiLCJ5ZWFyIiwiY29tcGFueUxpbmsiLCJkZXNjIiwicmVzdW1lVXJsIiwic29jaWFsTGlua3MiLCJpbnN0YWdyYW0iLCJ0d2l0dGVyIiwibGlua2VkaW4iLCJnaXRodWIiLCJnZXRMYXRlc3RSZXBvcyIsImRhdGEiLCJ0b2tlbiIsInVzZXJuYW1lIiwicmVzIiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlcG9zIiwiaXRlbXMiLCJsYXRlc3RTaXhSZXBvcyIsInNwbGljZSIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsY0FBVCxPQUFxRDtBQUFBLE1BQTdCO0FBQUVDO0FBQUYsR0FBNkI7QUFBQSxNQUFkQyxVQUFjOztBQUNsRSxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUVBLFFBQU1DLElBQUk7QUFDUkMsU0FBSyxFQUFFLHFEQURDOztBQUVSO0FBQ0FDLFNBQUssRUFBRSxhQUhDO0FBSVJDLFFBQUksRUFBRTtBQUpFLEtBS0xOLFVBTEssQ0FBVjs7QUFPQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQSxrQkFBUUcsSUFBSSxDQUFDQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBb0IsZUFBTyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sZUFBTyxFQUFFRCxJQUFJLENBQUNJLFdBQXBCO0FBQWlDLFlBQUksRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUNFLGdCQUFRLEVBQUMsUUFEWDtBQUVFLGVBQU8sRUFBRywwQkFBeUJOLE1BQU0sQ0FBQ08sTUFBTztBQUZuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFRRTtBQUNFLFdBQUcsRUFBQyxXQUROO0FBRUUsWUFBSSxFQUFHLDBCQUF5QlAsTUFBTSxDQUFDTyxNQUFPO0FBRmhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVlFO0FBQU0sZ0JBQVEsRUFBQyxTQUFmO0FBQXlCLGVBQU8sRUFBRUwsSUFB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QUNBLGFBQU9ELGNBQVA7QUFDRDtBQUNGLEdBM0JELENBMkJFLE9BQU9FLEdBQVAsRUFBWTtBQUNaN0MsV0FBTyxDQUFDQyxHQUFSLENBQVk0QyxHQUFaO0FBQ0Q7QUFDRixDQWhDRDs7QUFrQ0EsK0RBQWVaLGNBQWYsRTs7Ozs7Ozs7OztBQ3BDQSxlIiwiZmlsZSI6ImNvbXBvbmVudHNfQ29udGFpbmVyQmxvY2tfanMtbGliX2dldExhdGVzdFJlcG9zX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFpbmVyQmxvY2soeyBjaGlsZHJlbiwgLi4uY3VzdG9tTWV0YSB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IG1ldGEgPSB7XHJcbiAgICB0aXRsZTogXCJUYXJ1biBTaW5naCAtIERldmVsb3BlciwgVGVjaG5pY2FsIFdyaXRlciwgWW91VHViZXJcIixcclxuICAgIC8qIGRlc2NyaXB0aW9uOiBgSSd2ZSBiZWVuIGRldmVsb3Bpbmcgd2Vic2l0ZXMgZm9yIDUgeWVhcnMgc3RyYWlnaHQuIEdldCBpbiB0b3VjaCB3aXRoIG1lIHRvIGtub3cgbW9yZS5gLCAqL1xyXG4gICAgaW1hZ2U6IFwiL2F2YXRhci5wbmdcIixcclxuICAgIHR5cGU6IFwid2Vic2l0ZVwiLFxyXG4gICAgLi4uY3VzdG9tTWV0YSxcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e21ldGEudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cImZvbGxvdywgaW5kZXhcIiAvPlxyXG4gICAgICAgIDxtZXRhIGNvbnRlbnQ9e21ldGEuZGVzY3JpcHRpb259IG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dXJsXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL3lvdXJ3ZWJzaXRlLmNvbSR7cm91dGVyLmFzUGF0aH1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cImNhbm9uaWNhbFwiXHJcbiAgICAgICAgICBocmVmPXtgaHR0cHM6Ly95b3Vyd2Vic2l0ZS5jb20ke3JvdXRlci5hc1BhdGh9YH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9e21ldGEudHlwZX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJNYW51IEFyb3JhXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17bWV0YS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17bWV0YS50aXRsZX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17bWV0YS5pbWFnZX0gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQG1hbm51cGFhamlcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17bWV0YS50aXRsZX0gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e21ldGEuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXttZXRhLmltYWdlfSAvPlxyXG4gICAgICAgIHttZXRhLmRhdGUgJiYgKFxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJhcnRpY2xlOnB1Ymxpc2hlZF90aW1lXCIgY29udGVudD17bWV0YS5kYXRlfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZGFyazpiZy1ncmF5LTgwMCB3LWZ1bGxcIj5cclxuICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgPGRpdj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZXJEYXRhIGZyb20gXCIuLi9jb25zdGFudHMvZGF0YVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRjFGMUYxXSBkYXJrOmJnLWdyYXktOTAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsICBteC1hdXRvIHB4LTQgcHktMTAgbWQ6cHktMjBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMC41IHctZnVsbCBiZy13aGl0ZSBkYXJrOmJnLWdyYXktNzAwXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNCBtZDpzcGFjZS15LTAgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG1kOml0ZW1zLWNlbnRlciBtdC04XCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cD4mY29weTsgVGFydW4gU2luZ2guIEFsbCBSaWdodHMgUmVzZXJ2ZWQuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7LyogU3VwcG9ydCBtZSBieSBrZWVwaW5nIHRoaXMgaW4gdGhlIGZvb3RlciwgcGxlYXNlLiA6KSAqL31cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgRGV2ZWxvcGVkIGJ5XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMCBob3Zlcjotcm90YXRlLTMgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLWdyZWVuLTUwMCByb3VuZGVkLW1kIHB4LTIgcHktMSAgaG92ZXI6dGV4dC1ncmF5LTUwXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgVGFydW4gU2luZ2hcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtNCBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9e3VzZXJEYXRhLnNvY2lhbExpbmtzLmluc3RhZ3JhbX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktaW5zdGFncmFtIGgtNSB3LTVcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk04IDBDNS44MjkgMCA1LjU1Ni4wMSA0LjcwMy4wNDggMy44NS4wODggMy4yNjkuMjIyIDIuNzYuNDJhMy45MTcgMy45MTcgMCAwIDAtMS40MTcuOTIzQTMuOTI3IDMuOTI3IDAgMCAwIC40MiAyLjc2Qy4yMjIgMy4yNjguMDg3IDMuODUuMDQ4IDQuNy4wMSA1LjU1NSAwIDUuODI3IDAgOC4wMDFjMCAyLjE3Mi4wMSAyLjQ0NC4wNDggMy4yOTcuMDQuODUyLjE3NCAxLjQzMy4zNzIgMS45NDIuMjA1LjUyNi40NzguOTcyLjkyMyAxLjQxNy40NDQuNDQ1Ljg5LjcxOSAxLjQxNi45MjMuNTEuMTk4IDEuMDkuMzMzIDEuOTQyLjM3MkM1LjU1NSAxNS45OSA1LjgyNyAxNiA4IDE2czIuNDQ0LS4wMSAzLjI5OC0uMDQ4Yy44NTEtLjA0IDEuNDM0LS4xNzQgMS45NDMtLjM3MmEzLjkxNiAzLjkxNiAwIDAgMCAxLjQxNi0uOTIzYy40NDUtLjQ0NS43MTgtLjg5MS45MjMtMS40MTcuMTk3LS41MDkuMzMyLTEuMDkuMzcyLTEuOTQyQzE1Ljk5IDEwLjQ0NSAxNiAxMC4xNzMgMTYgOHMtLjAxLTIuNDQ1LS4wNDgtMy4yOTljLS4wNC0uODUxLS4xNzUtMS40MzMtLjM3Mi0xLjk0MWEzLjkyNiAzLjkyNiAwIDAgMC0uOTIzLTEuNDE3QTMuOTExIDMuOTExIDAgMCAwIDEzLjI0LjQyYy0uNTEtLjE5OC0xLjA5Mi0uMzMzLTEuOTQzLS4zNzJDMTAuNDQzLjAxIDEwLjE3MiAwIDcuOTk4IDBoLjAwM3ptLS43MTcgMS40NDJoLjcxOGMyLjEzNiAwIDIuMzg5LjAwNyAzLjIzMi4wNDYuNzguMDM1IDEuMjA0LjE2NiAxLjQ4Ni4yNzUuMzczLjE0NS42NC4zMTkuOTIuNTk5LjI4LjI4LjQ1My41NDYuNTk4LjkyLjExLjI4MS4yNC43MDUuMjc1IDEuNDg1LjAzOS44NDMuMDQ3IDEuMDk2LjA0NyAzLjIzMXMtLjAwOCAyLjM4OS0uMDQ3IDMuMjMyYy0uMDM1Ljc4LS4xNjYgMS4yMDMtLjI3NSAxLjQ4NWEyLjQ3IDIuNDcgMCAwIDEtLjU5OS45MTljLS4yOC4yOC0uNTQ2LjQ1My0uOTIuNTk4LS4yOC4xMS0uNzA0LjI0LTEuNDg1LjI3Ni0uODQzLjAzOC0xLjA5Ni4wNDctMy4yMzIuMDQ3cy0yLjM5LS4wMDktMy4yMzMtLjA0N2MtLjc4LS4wMzYtMS4yMDMtLjE2Ni0xLjQ4NS0uMjc2YTIuNDc4IDIuNDc4IDAgMCAxLS45Mi0uNTk4IDIuNDggMi40OCAwIDAgMS0uNi0uOTJjLS4xMDktLjI4MS0uMjQtLjcwNS0uMjc1LTEuNDg1LS4wMzgtLjg0My0uMDQ2LTEuMDk2LS4wNDYtMy4yMzMgMC0yLjEzNi4wMDgtMi4zODguMDQ2LTMuMjMxLjAzNi0uNzguMTY2LTEuMjA0LjI3Ni0xLjQ4Ni4xNDUtLjM3My4zMTktLjY0LjU5OS0uOTIuMjgtLjI4LjU0Ni0uNDUzLjkyLS41OTguMjgyLS4xMS43MDUtLjI0IDEuNDg1LS4yNzYuNzM4LS4wMzQgMS4wMjQtLjA0NCAyLjUxNS0uMDQ1di4wMDJ6bTQuOTg4IDEuMzI4YS45Ni45NiAwIDEgMCAwIDEuOTIuOTYuOTYgMCAwIDAgMC0xLjkyem0tNC4yNyAxLjEyMmE0LjEwOSA0LjEwOSAwIDEgMCAwIDguMjE3IDQuMTA5IDQuMTA5IDAgMCAwIDAtOC4yMTd6bTAgMS40NDFhMi42NjcgMi42NjcgMCAxIDEgMCA1LjMzNCAyLjY2NyAyLjY2NyAwIDAgMSAwLTUuMzM0elwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPXt1c2VyRGF0YS5zb2NpYWxMaW5rcy50d2l0dGVyfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW5vcm1hbCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS10d2l0dGVyIGgtNSB3LTVcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk01LjAyNiAxNWM2LjAzOCAwIDkuMzQxLTUuMDAzIDkuMzQxLTkuMzM0IDAtLjE0IDAtLjI4Mi0uMDA2LS40MjJBNi42ODUgNi42ODUgMCAwIDAgMTYgMy41NDJhNi42NTggNi42NTggMCAwIDEtMS44ODkuNTE4IDMuMzAxIDMuMzAxIDAgMCAwIDEuNDQ3LTEuODE3IDYuNTMzIDYuNTMzIDAgMCAxLTIuMDg3Ljc5M0EzLjI4NiAzLjI4NiAwIDAgMCA3Ljg3NSA2LjAzYTkuMzI1IDkuMzI1IDAgMCAxLTYuNzY3LTMuNDI5IDMuMjg5IDMuMjg5IDAgMCAwIDEuMDE4IDQuMzgyQTMuMzIzIDMuMzIzIDAgMCAxIC42NCA2LjU3NXYuMDQ1YTMuMjg4IDMuMjg4IDAgMCAwIDIuNjMyIDMuMjE4IDMuMjAzIDMuMjAzIDAgMCAxLS44NjUuMTE1IDMuMjMgMy4yMyAwIDAgMS0uNjE0LS4wNTcgMy4yODMgMy4yODMgMCAwIDAgMy4wNjcgMi4yNzdBNi41ODggNi41ODggMCAwIDEgLjc4IDEzLjU4YTYuMzIgNi4zMiAwIDAgMS0uNzgtLjA0NUE5LjM0NCA5LjM0NCAwIDAgMCA1LjAyNiAxNXpcIiAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj17dXNlckRhdGEuc29jaWFsTGlua3MubGlua2VkaW59XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWxpbmtlZGluIGgtNSB3LTVcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDEuMTQ2QzAgLjUxMy41MjYgMCAxLjE3NSAwaDEzLjY1QzE1LjQ3NCAwIDE2IC41MTMgMTYgMS4xNDZ2MTMuNzA4YzAgLjYzMy0uNTI2IDEuMTQ2LTEuMTc1IDEuMTQ2SDEuMTc1Qy41MjYgMTYgMCAxNS40ODcgMCAxNC44NTRWMS4xNDZ6bTQuOTQzIDEyLjI0OFY2LjE2OUgyLjU0MnY3LjIyNWgyLjQwMXptLTEuMi04LjIxMmMuODM3IDAgMS4zNTgtLjU1NCAxLjM1OC0xLjI0OC0uMDE1LS43MDktLjUyLTEuMjQ4LTEuMzQyLTEuMjQ4LS44MjIgMC0xLjM1OS41NC0xLjM1OSAxLjI0OCAwIC42OTQuNTIxIDEuMjQ4IDEuMzI3IDEuMjQ4aC4wMTZ6bTQuOTA4IDguMjEyVjkuMzU5YzAtLjIxNi4wMTYtLjQzMi4wOC0uNTg2LjE3My0uNDMxLjU2OC0uODc4IDEuMjMyLS44NzguODY5IDAgMS4yMTYuNjYyIDEuMjE2IDEuNjM0djMuODY1aDIuNDAxVjkuMjVjMC0yLjIyLTEuMTg0LTMuMjUyLTIuNzY0LTMuMjUyLTEuMjc0IDAtMS44NDUuNy0yLjE2NSAxLjE5M3YuMDI1aC0uMDE2YTUuNTQgNS41NCAwIDAgMSAuMDE2LS4wMjVWNi4xNjloLTIuNGMuMDMuNjc4IDAgNy4yMjUgMCA3LjIyNWgyLjR6XCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgdXNlckRhdGEgZnJvbSBcIi4uL2NvbnN0YW50cy9kYXRhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc29sZS5sb2cocm91dGVyLmFzUGF0aCk7XHJcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TW91bnRlZCh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCAgbXgtYXV0byBweC00IHB5LTEwIG1kOnB5LTIwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIHsvKiBMb2dvIC8gSG9tZSAvIFRleHQgKi99XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC14bCBkYXJrOnRleHQtZ3JheS0xMDBcIj5cclxuICAgICAgICAgICAgICAgIHt1c2VyRGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbGlnaHQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAgICAgIHt1c2VyRGF0YS5kZXNpZ25hdGlvbn1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS14LTggaGlkZGVuIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1iYXNlICAke1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLmFzUGF0aCA9PT0gXCIvYWJvdXRcIlxyXG4gICAgICAgICAgICAgICAgICA/IFwidGV4dC1ncmF5LTgwMCBmb250LWJvbGQgZGFyazp0ZXh0LWdyYXktNDAwXCJcclxuICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwIGZvbnQtbm9ybWFsIFwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBYm91dHtcIiBcIn1cclxuICAgICAgICAgICAgICB7cm91dGVyLmFzUGF0aCA9PT0gXCIvYWJvdXRcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktYXJyb3ctZG93biBpbmxpbmUtYmxvY2sgaC0zIHctM1wiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk04IDFhLjUuNSAwIDAgMSAuNS41djExLjc5M2wzLjE0Ni0zLjE0N2EuNS41IDAgMCAxIC43MDguNzA4bC00IDRhLjUuNSAwIDAgMS0uNzA4IDBsLTQtNGEuNS41IDAgMCAxIC43MDgtLjcwOEw3LjUgMTMuMjkzVjEuNUEuNS41IDAgMCAxIDggMXpcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtYmFzZSAgJHtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5hc1BhdGggPT09IFwiL3Byb2plY3RzXCJcclxuICAgICAgICAgICAgICAgICAgPyBcInRleHQtZ3JheS04MDAgZm9udC1ib2xkIGRhcms6dGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMCBmb250LW5vcm1hbCBcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUHJvamVjdHNcclxuICAgICAgICAgICAgICB7cm91dGVyLmFzUGF0aCA9PT0gXCIvcHJvamVjdHNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktYXJyb3ctZG93biBpbmxpbmUtYmxvY2sgaC0zIHctM1wiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk04IDFhLjUuNSAwIDAgMSAuNS41djExLjc5M2wzLjE0Ni0zLjE0N2EuNS41IDAgMCAxIC43MDguNzA4bC00IDRhLjUuNSAwIDAgMS0uNzA4IDBsLTQtNGEuNS41IDAgMCAxIC43MDgtLjcwOEw3LjUgMTMuMjkzVjEuNUEuNS41IDAgMCAxIDggMXpcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9leHBlcmllbmNlXCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1iYXNlICAke1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLmFzUGF0aCA9PT0gXCIvZXhwZXJpZW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBkYXJrOnRleHQtZ3JheS00MDBcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDAgZm9udC1ub3JtYWwgXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEV4cGVyaWVuY2V7XCIgXCJ9XHJcbiAgICAgICAgICAgICAge3JvdXRlci5hc1BhdGggPT09IFwiL2V4cGVyaWVuY2VcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktYXJyb3ctZG93biBpbmxpbmUtYmxvY2sgaC0zIHctM1wiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk04IDFhLjUuNSAwIDAgMSAuNS41djExLjc5M2wzLjE0Ni0zLjE0N2EuNS41IDAgMCAxIC43MDguNzA4bC00IDRhLjUuNSAwIDAgMS0uNzA4IDBsLTQtNGEuNS41IDAgMCAxIC43MDgtLjcwOEw3LjUgMTMuMjkzVjEuNUEuNS41IDAgMCAxIDggMXpcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9CbG9nXCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1iYXNlICAke1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLmFzUGF0aCA9PT0gXCIvYmxvZ1wiXHJcbiAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBkYXJrOnRleHQtZ3JheS00MDBcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDAgZm9udC1ub3JtYWwgXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJsb2d7XCIgXCJ9XHJcbiAgICAgICAgICAgICAge3JvdXRlci5hc1BhdGggPT09IFwiL0Jsb2dcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktYXJyb3ctZG93biBpbmxpbmUtYmxvY2sgaC0zIHctM1wiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk04IDFhLjUuNSAwIDAgMSAuNS41djExLjc5M2wzLjE0Ni0zLjE0N2EuNS41IDAgMCAxIC43MDguNzA4bC00IDRhLjUuNSAwIDAgMS0uNzA4IDBsLTQtNGEuNS41IDAgMCAxIC43MDgtLjcwOEw3LjUgMTMuMjkzVjEuNUEuNS41IDAgMCAxIDggMXpcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1iYXNlICAke1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLmFzUGF0aCA9PT0gXCIvY29udGFjdFwiXHJcbiAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBkYXJrOnRleHQtZ3JheS00MDBcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDAgZm9udC1ub3JtYWwgXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICB7cm91dGVyLmFzUGF0aCA9PT0gXCIvY29udGFjdFwiICYmIChcclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1hcnJvdy1kb3duIGlubGluZS1ibG9jayBoLTMgdy0zXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTggMWEuNS41IDAgMCAxIC41LjV2MTEuNzkzbDMuMTQ2LTMuMTQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTQgNGEuNS41IDAgMCAxLS43MDggMGwtNC00YS41LjUgMCAwIDEgLjcwOC0uNzA4TDcuNSAxMy4yOTNWMS41QS41LjUgMCAwIDEgOCAxelwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC00IGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPXt1c2VyRGF0YS5zb2NpYWxMaW5rcy5pbnN0YWdyYW19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW5vcm1hbCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktaW5zdGFncmFtIGgtNSB3LTVcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk04IDBDNS44MjkgMCA1LjU1Ni4wMSA0LjcwMy4wNDggMy44NS4wODggMy4yNjkuMjIyIDIuNzYuNDJhMy45MTcgMy45MTcgMCAwIDAtMS40MTcuOTIzQTMuOTI3IDMuOTI3IDAgMCAwIC40MiAyLjc2Qy4yMjIgMy4yNjguMDg3IDMuODUuMDQ4IDQuNy4wMSA1LjU1NSAwIDUuODI3IDAgOC4wMDFjMCAyLjE3Mi4wMSAyLjQ0NC4wNDggMy4yOTcuMDQuODUyLjE3NCAxLjQzMy4zNzIgMS45NDIuMjA1LjUyNi40NzguOTcyLjkyMyAxLjQxNy40NDQuNDQ1Ljg5LjcxOSAxLjQxNi45MjMuNTEuMTk4IDEuMDkuMzMzIDEuOTQyLjM3MkM1LjU1NSAxNS45OSA1LjgyNyAxNiA4IDE2czIuNDQ0LS4wMSAzLjI5OC0uMDQ4Yy44NTEtLjA0IDEuNDM0LS4xNzQgMS45NDMtLjM3MmEzLjkxNiAzLjkxNiAwIDAgMCAxLjQxNi0uOTIzYy40NDUtLjQ0NS43MTgtLjg5MS45MjMtMS40MTcuMTk3LS41MDkuMzMyLTEuMDkuMzcyLTEuOTQyQzE1Ljk5IDEwLjQ0NSAxNiAxMC4xNzMgMTYgOHMtLjAxLTIuNDQ1LS4wNDgtMy4yOTljLS4wNC0uODUxLS4xNzUtMS40MzMtLjM3Mi0xLjk0MWEzLjkyNiAzLjkyNiAwIDAgMC0uOTIzLTEuNDE3QTMuOTExIDMuOTExIDAgMCAwIDEzLjI0LjQyYy0uNTEtLjE5OC0xLjA5Mi0uMzMzLTEuOTQzLS4zNzJDMTAuNDQzLjAxIDEwLjE3MiAwIDcuOTk4IDBoLjAwM3ptLS43MTcgMS40NDJoLjcxOGMyLjEzNiAwIDIuMzg5LjAwNyAzLjIzMi4wNDYuNzguMDM1IDEuMjA0LjE2NiAxLjQ4Ni4yNzUuMzczLjE0NS42NC4zMTkuOTIuNTk5LjI4LjI4LjQ1My41NDYuNTk4LjkyLjExLjI4MS4yNC43MDUuMjc1IDEuNDg1LjAzOS44NDMuMDQ3IDEuMDk2LjA0NyAzLjIzMXMtLjAwOCAyLjM4OS0uMDQ3IDMuMjMyYy0uMDM1Ljc4LS4xNjYgMS4yMDMtLjI3NSAxLjQ4NWEyLjQ3IDIuNDcgMCAwIDEtLjU5OS45MTljLS4yOC4yOC0uNTQ2LjQ1My0uOTIuNTk4LS4yOC4xMS0uNzA0LjI0LTEuNDg1LjI3Ni0uODQzLjAzOC0xLjA5Ni4wNDctMy4yMzIuMDQ3cy0yLjM5LS4wMDktMy4yMzMtLjA0N2MtLjc4LS4wMzYtMS4yMDMtLjE2Ni0xLjQ4NS0uMjc2YTIuNDc4IDIuNDc4IDAgMCAxLS45Mi0uNTk4IDIuNDggMi40OCAwIDAgMS0uNi0uOTJjLS4xMDktLjI4MS0uMjQtLjcwNS0uMjc1LTEuNDg1LS4wMzgtLjg0My0uMDQ2LTEuMDk2LS4wNDYtMy4yMzMgMC0yLjEzNi4wMDgtMi4zODguMDQ2LTMuMjMxLjAzNi0uNzguMTY2LTEuMjA0LjI3Ni0xLjQ4Ni4xNDUtLjM3My4zMTktLjY0LjU5OS0uOTIuMjgtLjI4LjU0Ni0uNDUzLjkyLS41OTguMjgyLS4xMS43MDUtLjI0IDEuNDg1LS4yNzYuNzM4LS4wMzQgMS4wMjQtLjA0NCAyLjUxNS0uMDQ1di4wMDJ6bTQuOTg4IDEuMzI4YS45Ni45NiAwIDEgMCAwIDEuOTIuOTYuOTYgMCAwIDAgMC0xLjkyem0tNC4yNyAxLjEyMmE0LjEwOSA0LjEwOSAwIDEgMCAwIDguMjE3IDQuMTA5IDQuMTA5IDAgMCAwIDAtOC4yMTd6bTAgMS40NDFhMi42NjcgMi42NjcgMCAxIDEgMCA1LjMzNCAyLjY2NyAyLjY2NyAwIDAgMSAwLTUuMzM0elwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj17dXNlckRhdGEuc29jaWFsTGlua3MudHdpdHRlcn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS10d2l0dGVyIGgtNSB3LTVcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk01LjAyNiAxNWM2LjAzOCAwIDkuMzQxLTUuMDAzIDkuMzQxLTkuMzM0IDAtLjE0IDAtLjI4Mi0uMDA2LS40MjJBNi42ODUgNi42ODUgMCAwIDAgMTYgMy41NDJhNi42NTggNi42NTggMCAwIDEtMS44ODkuNTE4IDMuMzAxIDMuMzAxIDAgMCAwIDEuNDQ3LTEuODE3IDYuNTMzIDYuNTMzIDAgMCAxLTIuMDg3Ljc5M0EzLjI4NiAzLjI4NiAwIDAgMCA3Ljg3NSA2LjAzYTkuMzI1IDkuMzI1IDAgMCAxLTYuNzY3LTMuNDI5IDMuMjg5IDMuMjg5IDAgMCAwIDEuMDE4IDQuMzgyQTMuMzIzIDMuMzIzIDAgMCAxIC42NCA2LjU3NXYuMDQ1YTMuMjg4IDMuMjg4IDAgMCAwIDIuNjMyIDMuMjE4IDMuMjAzIDMuMjAzIDAgMCAxLS44NjUuMTE1IDMuMjMgMy4yMyAwIDAgMS0uNjE0LS4wNTcgMy4yODMgMy4yODMgMCAwIDAgMy4wNjcgMi4yNzdBNi41ODggNi41ODggMCAwIDEgLjc4IDEzLjU4YTYuMzIgNi4zMiAwIDAgMS0uNzgtLjA0NUE5LjM0NCA5LjM0NCAwIDAgMCA1LjAyNiAxNXpcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9e3VzZXJEYXRhLnNvY2lhbExpbmtzLmxpbmtlZGlufVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWxpbmtlZGluIGgtNSB3LTVcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDEuMTQ2QzAgLjUxMy41MjYgMCAxLjE3NSAwaDEzLjY1QzE1LjQ3NCAwIDE2IC41MTMgMTYgMS4xNDZ2MTMuNzA4YzAgLjYzMy0uNTI2IDEuMTQ2LTEuMTc1IDEuMTQ2SDEuMTc1Qy41MjYgMTYgMCAxNS40ODcgMCAxNC44NTRWMS4xNDZ6bTQuOTQzIDEyLjI0OFY2LjE2OUgyLjU0MnY3LjIyNWgyLjQwMXptLTEuMi04LjIxMmMuODM3IDAgMS4zNTgtLjU1NCAxLjM1OC0xLjI0OC0uMDE1LS43MDktLjUyLTEuMjQ4LTEuMzQyLTEuMjQ4LS44MjIgMC0xLjM1OS41NC0xLjM1OSAxLjI0OCAwIC42OTQuNTIxIDEuMjQ4IDEuMzI3IDEuMjQ4aC4wMTZ6bTQuOTA4IDguMjEyVjkuMzU5YzAtLjIxNi4wMTYtLjQzMi4wOC0uNTg2LjE3My0uNDMxLjU2OC0uODc4IDEuMjMyLS44NzguODY5IDAgMS4yMTYuNjYyIDEuMjE2IDEuNjM0djMuODY1aDIuNDAxVjkuMjVjMC0yLjIyLTEuMTg0LTMuMjUyLTIuNzY0LTMuMjUyLTEuMjc0IDAtMS44NDUuNy0yLjE2NSAxLjE5M3YuMDI1aC0uMDE2YTUuNTQgNS41NCAwIDAgMSAuMDE2LS4wMjVWNi4xNjloLTIuNGMuMDMuNjc4IDAgNy4yMjUgMCA3LjIyNWgyLjR6XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgRGFyayBNb2RlXCJcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCBwLTMgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZSh0aGVtZSA9PT0gXCJkYXJrXCIgPyBcImxpZ2h0XCIgOiBcImRhcmtcIil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttb3VudGVkICYmIChcclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXllbGxvdy01MDAgZGFyazp0ZXh0LXllbGxvdy01MDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGVtZSA9PT0gXCJkYXJrXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEyIDN2MW0wIDE2djFtOS05aC0xTTQgMTJIM20xNS4zNjQgNi4zNjRsLS43MDctLjcwN002LjM0MyA2LjM0M2wtLjcwNy0uNzA3bTEyLjcyOCAwbC0uNzA3LjcwN002LjM0MyAxNy42NTdsLS43MDcuNzA3TTE2IDEyYTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHpcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMjAuMzU0IDE1LjM1NEE5IDkgMCAwMTguNjQ2IDMuNjQ2IDkuMDAzIDkuMDAzIDAgMDAxMiAyMWE5LjAwMyA5LjAwMyAwIDAwOC4zNTQtNS42NDZ6XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC04IGJsb2NrIG1kOmhpZGRlbiBtdC00XCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW5vcm1hbCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICBQcm9qZWN0c1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2V4cGVyaWVuY2VcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW5vcm1hbCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICBFeHBlcmllbmNlXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJjb25zdCB1c2VyRGF0YSA9IHtcclxuICBnaXRodWJVc2VybmFtZTogXCJ0YXJ1bnNpbmdob2ZmaWNpYWxcIixcclxuICBuYW1lOiBcIlRhcnVuIFNpbmdoXCIsXHJcbiAgZGVzaWduYXRpb246IFwiU29mdHdhcmUgRGV2ZWxvcGVyXCIsXHJcbiAgYXZhdGFyVXJsOiBcIi9hdmF0YXIucG5nXCIsXHJcbiAgZW1haWw6IFwidGFydW5zaW5naHdhcDdAZ21haWwuY29tXCIsXHJcbiAgcGhvbmU6IFwiKzkxIDk1ODI0MjM1MzlcIixcclxuICBhZGRyZXNzOiBcIk5ldyBEZWxoaSwgSW5kaWEuXCIsXHJcbiAgcHJvamVjdHM6IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQXBvbGxvIE11c2ljIFBsYXllclwiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90YXJ1bnNpbmdob2ZmaWNpYWwvQXBvbGxvTXVzaWNcIixcclxuICAgICAgaW1nVXJsOiBcIi9wcm8yLnBuZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiT25lRGV2UGxhY2VcIixcclxuICAgICAgbGluazogXCJodHRwczovL29uZWRldnBsYWNlLm5ldGxpZnkuY29tL1wiLFxyXG4gICAgICBpbWdVcmw6IFwiL3BybzMucG5nXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJOZXdzIEFwcFwiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90YXJ1bnNpbmdob2ZmaWNpYWwvT25lRGV2UGxhY2VcIixcclxuICAgICAgaW1nVXJsOiBcIi9wcm8xLnBuZ1wiLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGFib3V0OiB7XHJcbiAgICB0aXRsZTpcclxuICAgICAgXCJJJ20gYSBTb2Z0d2FyZSBEZXZlbG9wZXIsIFRlY2huaWNhbCBXcml0ZXIsIFlvdVR1YmVyLCBhbmQgYSBwYXNzaW9uYXRlIGxlYXJuZXIuIEkgYW0gY3VycmVudGx5IHdyaXRpbmcgdmFyaW91cyBUZWNobmljYWwgQXJ0aWNsZXMgYXRcIixcclxuICAgIGRlc2NyaXB0aW9uOiBbXHJcbiAgICAgIGBBcyBhIENTIHN0dWRlbnQsIEkgaGF2ZSBiZWVuIHdvcmtpbmcgb24gdmFyaW91cyBwcm9qZWN0cyBpbiB0aGUgcGFzdC4gVGhlIHRlY2ggc3RhY2sgdGhhdCBJIG1vc3RseSB1c2VkIGFyZSBSZWFjdCBOYXRpdmUsIEFXUywgRmlyZWJhc2UsIEphdmEsIFNRTCwgZXRjLiBJIGhhdmUgY29udHJpYnV0ZWQgdG8gdmFyaW91cyBvcGVuLXNvdXJjZSBwcm9qZWN0cyBhbmQgYWxzbyBtZW50b3JlZCBhdCBHaXJsc2NyaXB0IFN1bW1lciBvZiBDb2RlIDIwMjIsIHdoZXJlIEkgaGF2ZSBhc3Npc3RlZCB0aGUgUHJvamVjdCBhZG1pbiBhbmQgdmFyaW91cyBvdGhlciBvcGVuLXNvdXJjZSBjb250cmlidXRvcnMgd2l0aCB0aGVpciBxdWVyaWVzLmAsXHJcbiAgICBdLFxyXG4gICAgY3VycmVudFByb2plY3Q6IFwiR2Vla3Nmb3JHZWVrc1wiLFxyXG4gICAgY3VycmVudFByb2plY3RVcmw6IFwiaHR0cHM6Ly9hdXRoLmdlZWtzZm9yZ2Vla3Mub3JnL3VzZXIvdGFydW5zaW5naHdhcDdcIixcclxuICB9LFxyXG4gIGV4cGVyaWVuY2U6IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTWVudG9yXCIsXHJcbiAgICAgIGNvbXBhbnk6IFwiR1NTb0MnMjJcIixcclxuICAgICAgeWVhcjogXCIyMDIyXCIsXHJcbiAgICAgIGNvbXBhbnlMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90YXJ1bnNpbmdob2ZmaWNpYWxcIixcclxuICAgICAgZGVzYzogXCJNZW50b3JlZCBzdHVkZW50cyBpbiBHaXJsc2NyaXB0IFN1bW1lciBvZiBDb2RlIGZvciBPcGVuIFNvdXJjZSBwcm9qZWN0IGZvciBTb2NpYWwgR29vZC4gUmV2aWV3ZWQgdmFyaW91cyBjb2RlIGFuZCBHaXRodWIgUFJzIG9mIHBhcnRpY2lwYW50cyBpbiBIVE1ML0NTUywgQm9vdHN0cmFwLCBldGMuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJUZWNobmljYWwgQ29udGVudCBXcml0ZXJcIixcclxuICAgICAgY29tcGFueTogXCJHZWVrc2ZvckdlZWtzXCIsXHJcbiAgICAgIHllYXI6IFwiMjAyMC0yMlwiLFxyXG4gICAgICBjb21wYW55TGluazogXCJodHRwczovL2F1dGguZ2Vla3Nmb3JnZWVrcy5vcmcvdXNlci90YXJ1bnNpbmdod2FwN1wiLFxyXG4gICAgICBkZXNjOiBcIldyaXR0ZW4gbW9yZSB0aGFuIDYwKyBUZWNobmljYWwgQXJ0aWNsZXMgcmVsYXRlZCB0byBQcm9ncmFtbWluZyBMYW5ndWFnZXMsIERCTVMsIFNRTCwgU29mdHdhcmUgRW5naW5lZXJpbmcsIGV0Y1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQi5DLkFcIixcclxuICAgICAgY29tcGFueTogXCJNYWhhcmFqYSBTdXJham1hbCBJbnN0aXR1dGUsIChHR1NJUFUpLlwiLFxyXG4gICAgICB5ZWFyOiBcIjIwMTktMjJcIixcclxuICAgICAgY29tcGFueUxpbms6IFwiI1wiLFxyXG4gICAgICBkZXNjOiBcIlN0dWRpZWQgQ29tcHV0ZXIgQXBwbGNhdGlvbnMgYW5kIEluZm9ybWF0aW9uIFRlY2hub2xvZ3kuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJIaWdoIFNjaG9vbFwiLFxyXG4gICAgICBjb21wYW55OiBcIkJhbCBNYW5kaXIgU3IuIFNlYy4gU2Nob29sLCBEZWxoaVwiLFxyXG4gICAgICB5ZWFyOiBcIjIwMTlcIixcclxuICAgICAgY29tcGFueUxpbms6IFwiI1wiLFxyXG4gICAgICBkZXNjOiBcIlN1YmplY3RzIGJlaW5nIENvbW1lcmNlIC0gSSBiYXJlbHkgc3Vydml2ZWQgd2l0aCA4MS42JSBtYXJrcyBhZ2dyZWdhdGUuXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgcmVzdW1lVXJsOlxyXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFSMXkxVFFpLTRRVVpPNi03dy1IQUxqdEhDRTJ2ODI5Zi92aWV3P3VzcD1zaGFyaW5nXCIsXHJcbiAgc29jaWFsTGlua3M6IHtcclxuICAgIGluc3RhZ3JhbTogXCJodHRwczovL2luc3RhZ3JhbS5jb20vdGFyZ3JhcGhlcjI0XCIsXHJcbiAgICB0d2l0dGVyOiBcImh0dHBzOi8vdHdpdHRlci5jb20vaXRzVGFydW4yNFwiLFxyXG4gICAgbGlua2VkaW46IFwiaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vdGFydW5zaW5naDI0XCIsXHJcbiAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3RhcnVuc2luZ2hvZmZpY2lhbFwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyRGF0YTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgZ2V0TGF0ZXN0UmVwb3MgPSBhc3luYyAoZGF0YSwgdG9rZW4pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gZGF0YS5naXRodWJVc2VybmFtZTtcclxuXHJcbiAgICAvLyBsZXQgdG9rZW4gPSBgdG9rZW4gJHtwcm9jZXNzLmVudi5HSVRIVUJfQVVUSF9UT0tFTn1gO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJUT0tFTlwiLCB0b2tlbik7XHJcblxyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9dXNlcjoke3VzZXJuYW1lfStzb3J0OmF1dGhvci1kYXRlLWFzY2AsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGxldCByZXBvcyA9IHJlcy5kYXRhLml0ZW1zO1xyXG4gICAgICBsZXQgbGF0ZXN0U2l4UmVwb3MgPSByZXBvcy5zcGxpY2UoMCwgNik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiTEFURVNUIDYgcmVwb3NcIiwgbGF0ZXN0U2l4UmVwb3MpO1xyXG4gICAgICByZXR1cm4gbGF0ZXN0U2l4UmVwb3M7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3JlcG9zaXRvcmllcz9xPXVzZXI6JHt1c2VybmFtZX0rc29ydDphdXRob3ItZGF0ZS1hc2NgXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCByZXBvcyA9IHJlcy5kYXRhLml0ZW1zO1xyXG4gICAgICBsZXQgbGF0ZXN0U2l4UmVwb3MgPSByZXBvcy5zcGxpY2UoMCwgNik7XHJcbiAgICAgIHJldHVybiBsYXRlc3RTaXhSZXBvcztcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0TGF0ZXN0UmVwb3M7XHJcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=