exports.id = "components_ContainerBlock_js";
exports.ids = ["components_ContainerBlock_js"];
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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9jb21wb25lbnRzL0NvbnRhaW5lckJsb2NrLmpzIiwid2VicGFjazovL25leHRqcy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovL25leHRqcy8uL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovL25leHRqcy8uL2NvbnN0YW50cy9kYXRhLmpzIiwid2VicGFjazovL25leHRqcy9pZ25vcmVkfEM6XFxVc2Vyc1xcdGFydW5cXG5ld3BvcnRmb2xpb1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkNvbnRhaW5lckJsb2NrIiwiY2hpbGRyZW4iLCJjdXN0b21NZXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwibWV0YSIsInRpdGxlIiwiaW1hZ2UiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJhc1BhdGgiLCJkYXRlIiwiRm9vdGVyIiwidXNlckRhdGEiLCJOYXZiYXIiLCJjb25zb2xlIiwibG9nIiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZVRoZW1lIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm5hbWUiLCJkZXNpZ25hdGlvbiIsImdpdGh1YlVzZXJuYW1lIiwiYXZhdGFyVXJsIiwiZW1haWwiLCJwaG9uZSIsImFkZHJlc3MiLCJwcm9qZWN0cyIsImxpbmsiLCJpbWdVcmwiLCJhYm91dCIsImN1cnJlbnRQcm9qZWN0IiwiY3VycmVudFByb2plY3RVcmwiLCJleHBlcmllbmNlIiwiY29tcGFueSIsInllYXIiLCJjb21wYW55TGluayIsImRlc2MiLCJyZXN1bWVVcmwiLCJzb2NpYWxMaW5rcyIsImluc3RhZ3JhbSIsInR3aXR0ZXIiLCJsaW5rZWRpbiIsImdpdGh1YiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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V0FBTyxFQUFFLGdDQUZFO0FBR1hDLFlBQVEsRUFBRSxzQ0FIQztBQUlYQyxVQUFNLEVBQUU7QUFKRztBQWxFRSxDQUFqQjtBQTBFQSwrREFBZWxDLFFBQWYsRTs7Ozs7Ozs7OztBQzFFQSxlIiwiZmlsZSI6ImNvbXBvbmVudHNfQ29udGFpbmVyQmxvY2tfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXJCbG9jayh7IGNoaWxkcmVuLCAuLi5jdXN0b21NZXRhIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgbWV0YSA9IHtcclxuICAgIHRpdGxlOiBcIlRhcnVuIFNpbmdoIC0gRGV2ZWxvcGVyLCBUZWNobmljYWwgV3JpdGVyLCBZb3VUdWJlclwiLFxyXG4gICAgLyogZGVzY3JpcHRpb246IGBJJ3ZlIGJlZW4gZGV2ZWxvcGluZyB3ZWJzaXRlcyBmb3IgNSB5ZWFycyBzdHJhaWdodC4gR2V0IGluIHRvdWNoIHdpdGggbWUgdG8ga25vdyBtb3JlLmAsICovXHJcbiAgICBpbWFnZTogXCIvYXZhdGFyLnBuZ1wiLFxyXG4gICAgdHlwZTogXCJ3ZWJzaXRlXCIsXHJcbiAgICAuLi5jdXN0b21NZXRhLFxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57bWV0YS50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiZm9sbG93LCBpbmRleFwiIC8+XHJcbiAgICAgICAgPG1ldGEgY29udGVudD17bWV0YS5kZXNjcmlwdGlvbn0gbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzp1cmxcIlxyXG4gICAgICAgICAgY29udGVudD17YGh0dHBzOi8veW91cndlYnNpdGUuY29tJHtyb3V0ZXIuYXNQYXRofWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwiY2Fub25pY2FsXCJcclxuICAgICAgICAgIGhyZWY9e2BodHRwczovL3lvdXJ3ZWJzaXRlLmNvbSR7cm91dGVyLmFzUGF0aH1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD17bWV0YS50eXBlfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIk1hbnUgQXJvcmFcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXttZXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXttZXRhLnRpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXttZXRhLmltYWdlfSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJAbWFubnVwYWFqaVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXttZXRhLnRpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17bWV0YS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e21ldGEuaW1hZ2V9IC8+XHJcbiAgICAgICAge21ldGEuZGF0ZSAmJiAoXHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cImFydGljbGU6cHVibGlzaGVkX3RpbWVcIiBjb250ZW50PXttZXRhLmRhdGV9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJkYXJrOmJnLWdyYXktODAwIHctZnVsbFwiPlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlckRhdGEgZnJvbSBcIi4uL2NvbnN0YW50cy9kYXRhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGMUYxRjFdIGRhcms6YmctZ3JheS05MDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgIG14LWF1dG8gcHgtNCBweS0xMCBtZDpweS0yMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0wLjUgdy1mdWxsIGJnLXdoaXRlIGRhcms6YmctZ3JheS03MDBcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00IG1kOnNwYWNlLXktMCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbWQ6aXRlbXMtY2VudGVyIG10LThcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwPiZjb3B5OyBUYXJ1biBTaW5naC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiBTdXBwb3J0IG1lIGJ5IGtlZXBpbmcgdGhpcyBpbiB0aGUgZm9vdGVyLCBwbGVhc2UuIDopICovfVxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBEZXZlbG9wZWQgYnlcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwIGhvdmVyOi1yb3RhdGUtMyB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctZ3JlZW4tNTAwIHJvdW5kZWQtbWQgcHgtMiBweS0xICBob3Zlcjp0ZXh0LWdyYXktNTBcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBUYXJ1biBTaW5naFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC00IGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj17dXNlckRhdGEuc29jaWFsTGlua3MuaW5zdGFncmFtfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW5vcm1hbCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1pbnN0YWdyYW0gaC01IHctNVwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTggMEM1LjgyOSAwIDUuNTU2LjAxIDQuNzAzLjA0OCAzLjg1LjA4OCAzLjI2OS4yMjIgMi43Ni40MmEzLjkxNyAzLjkxNyAwIDAgMC0xLjQxNy45MjNBMy45MjcgMy45MjcgMCAwIDAgLjQyIDIuNzZDLjIyMiAzLjI2OC4wODcgMy44NS4wNDggNC43LjAxIDUuNTU1IDAgNS44MjcgMCA4LjAwMWMwIDIuMTcyLjAxIDIuNDQ0LjA0OCAzLjI5Ny4wNC44NTIuMTc0IDEuNDMzLjM3MiAxLjk0Mi4yMDUuNTI2LjQ3OC45NzIuOTIzIDEuNDE3LjQ0NC40NDUuODkuNzE5IDEuNDE2LjkyMy41MS4xOTggMS4wOS4zMzMgMS45NDIuMzcyQzUuNTU1IDE1Ljk5IDUuODI3IDE2IDggMTZzMi40NDQtLjAxIDMuMjk4LS4wNDhjLjg1MS0uMDQgMS40MzQtLjE3NCAxLjk0My0uMzcyYTMuOTE2IDMuOTE2IDAgMCAwIDEuNDE2LS45MjNjLjQ0NS0uNDQ1LjcxOC0uODkxLjkyMy0xLjQxNy4xOTctLjUwOS4zMzItMS4wOS4zNzItMS45NDJDMTUuOTkgMTAuNDQ1IDE2IDEwLjE3MyAxNiA4cy0uMDEtMi40NDUtLjA0OC0zLjI5OWMtLjA0LS44NTEtLjE3NS0xLjQzMy0uMzcyLTEuOTQxYTMuOTI2IDMuOTI2IDAgMCAwLS45MjMtMS40MTdBMy45MTEgMy45MTEgMCAwIDAgMTMuMjQuNDJjLS41MS0uMTk4LTEuMDkyLS4zMzMtMS45NDMtLjM3MkMxMC40NDMuMDEgMTAuMTcyIDAgNy45OTggMGguMDAzem0tLjcxNyAxLjQ0MmguNzE4YzIuMTM2IDAgMi4zODkuMDA3IDMuMjMyLjA0Ni43OC4wMzUgMS4yMDQuMTY2IDEuNDg2LjI3NS4zNzMuMTQ1LjY0LjMxOS45Mi41OTkuMjguMjguNDUzLjU0Ni41OTguOTIuMTEuMjgxLjI0LjcwNS4yNzUgMS40ODUuMDM5Ljg0My4wNDcgMS4wOTYuMDQ3IDMuMjMxcy0uMDA4IDIuMzg5LS4wNDcgMy4yMzJjLS4wMzUuNzgtLjE2NiAxLjIwMy0uMjc1IDEuNDg1YTIuNDcgMi40NyAwIDAgMS0uNTk5LjkxOWMtLjI4LjI4LS41NDYuNDUzLS45Mi41OTgtLjI4LjExLS43MDQuMjQtMS40ODUuMjc2LS44NDMuMDM4LTEuMDk2LjA0Ny0zLjIzMi4wNDdzLTIuMzktLjAwOS0zLjIzMy0uMDQ3Yy0uNzgtLjAzNi0xLjIwMy0uMTY2LTEuNDg1LS4yNzZhMi40NzggMi40NzggMCAwIDEtLjkyLS41OTggMi40OCAyLjQ4IDAgMCAxLS42LS45MmMtLjEwOS0uMjgxLS4yNC0uNzA1LS4yNzUtMS40ODUtLjAzOC0uODQzLS4wNDYtMS4wOTYtLjA0Ni0zLjIzMyAwLTIuMTM2LjAwOC0yLjM4OC4wNDYtMy4yMzEuMDM2LS43OC4xNjYtMS4yMDQuMjc2LTEuNDg2LjE0NS0uMzczLjMxOS0uNjQuNTk5LS45Mi4yOC0uMjguNTQ2LS40NTMuOTItLjU5OC4yODItLjExLjcwNS0uMjQgMS40ODUtLjI3Ni43MzgtLjAzNCAxLjAyNC0uMDQ0IDIuNTE1LS4wNDV2LjAwMnptNC45ODggMS4zMjhhLjk2Ljk2IDAgMSAwIDAgMS45Mi45Ni45NiAwIDAgMCAwLTEuOTJ6bS00LjI3IDEuMTIyYTQuMTA5IDQuMTA5IDAgMSAwIDAgOC4yMTcgNC4xMDkgNC4xMDkgMCAwIDAgMC04LjIxN3ptMCAxLjQ0MWEyLjY2NyAyLjY2NyAwIDEgMSAwIDUuMzM0IDIuNjY3IDIuNjY3IDAgMCAxIDAtNS4zMzR6XCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9e3VzZXJEYXRhLnNvY2lhbExpbmtzLnR3aXR0ZXJ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLXR3aXR0ZXIgaC01IHctNVwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUuMDI2IDE1YzYuMDM4IDAgOS4zNDEtNS4wMDMgOS4zNDEtOS4zMzQgMC0uMTQgMC0uMjgyLS4wMDYtLjQyMkE2LjY4NSA2LjY4NSAwIDAgMCAxNiAzLjU0MmE2LjY1OCA2LjY1OCAwIDAgMS0xLjg4OS41MTggMy4zMDEgMy4zMDEgMCAwIDAgMS40NDctMS44MTcgNi41MzMgNi41MzMgMCAwIDEtMi4wODcuNzkzQTMuMjg2IDMuMjg2IDAgMCAwIDcuODc1IDYuMDNhOS4zMjUgOS4zMjUgMCAwIDEtNi43NjctMy40MjkgMy4yODkgMy4yODkgMCAwIDAgMS4wMTggNC4zODJBMy4zMjMgMy4zMjMgMCAwIDEgLjY0IDYuNTc1di4wNDVhMy4yODggMy4yODggMCAwIDAgMi42MzIgMy4yMTggMy4yMDMgMy4yMDMgMCAwIDEtLjg2NS4xMTUgMy4yMyAzLjIzIDAgMCAxLS42MTQtLjA1NyAzLjI4MyAzLjI4MyAwIDAgMCAzLjA2NyAyLjI3N0E2LjU4OCA2LjU4OCAwIDAgMSAuNzggMTMuNThhNi4zMiA2LjMyIDAgMCAxLS43OC0uMDQ1QTkuMzQ0IDkuMzQ0IDAgMCAwIDUuMDI2IDE1elwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPXt1c2VyRGF0YS5zb2NpYWxMaW5rcy5saW5rZWRpbn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktbGlua2VkaW4gaC01IHctNVwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAgMS4xNDZDMCAuNTEzLjUyNiAwIDEuMTc1IDBoMTMuNjVDMTUuNDc0IDAgMTYgLjUxMyAxNiAxLjE0NnYxMy43MDhjMCAuNjMzLS41MjYgMS4xNDYtMS4xNzUgMS4xNDZIMS4xNzVDLjUyNiAxNiAwIDE1LjQ4NyAwIDE0Ljg1NFYxLjE0NnptNC45NDMgMTIuMjQ4VjYuMTY5SDIuNTQydjcuMjI1aDIuNDAxem0tMS4yLTguMjEyYy44MzcgMCAxLjM1OC0uNTU0IDEuMzU4LTEuMjQ4LS4wMTUtLjcwOS0uNTItMS4yNDgtMS4zNDItMS4yNDgtLjgyMiAwLTEuMzU5LjU0LTEuMzU5IDEuMjQ4IDAgLjY5NC41MjEgMS4yNDggMS4zMjcgMS4yNDhoLjAxNnptNC45MDggOC4yMTJWOS4zNTljMC0uMjE2LjAxNi0uNDMyLjA4LS41ODYuMTczLS40MzEuNTY4LS44NzggMS4yMzItLjg3OC44NjkgMCAxLjIxNi42NjIgMS4yMTYgMS42MzR2My44NjVoMi40MDFWOS4yNWMwLTIuMjItMS4xODQtMy4yNTItMi43NjQtMy4yNTItMS4yNzQgMC0xLjg0NS43LTIuMTY1IDEuMTkzdi4wMjVoLS4wMTZhNS41NCA1LjU0IDAgMCAxIC4wMTYtLjAyNVY2LjE2OWgtMi40Yy4wMy42NzggMCA3LjIyNSAwIDcuMjI1aDIuNHpcIiAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB1c2VyRGF0YSBmcm9tIFwiLi4vY29uc3RhbnRzL2RhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zb2xlLmxvZyhyb3V0ZXIuYXNQYXRoKTtcclxuICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRNb3VudGVkKHRydWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsICBteC1hdXRvIHB4LTQgcHktMTAgbWQ6cHktMjBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgey8qIExvZ28gLyBIb21lIC8gVGV4dCAqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXhsIGRhcms6dGV4dC1ncmF5LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAge3VzZXJEYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1saWdodCB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICAgICAge3VzZXJEYXRhLmRlc2lnbmF0aW9ufVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtOCBoaWRkZW4gbWQ6YmxvY2tcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWJhc2UgICR7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIuYXNQYXRoID09PSBcIi9hYm91dFwiXHJcbiAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBkYXJrOnRleHQtZ3JheS00MDBcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDAgZm9udC1ub3JtYWwgXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFib3V0e1wiIFwifVxyXG4gICAgICAgICAgICAgIHtyb3V0ZXIuYXNQYXRoID09PSBcIi9hYm91dFwiICYmIChcclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1hcnJvdy1kb3duIGlubGluZS1ibG9jayBoLTMgdy0zXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTggMWEuNS41IDAgMCAxIC41LjV2MTEuNzkzbDMuMTQ2LTMuMTQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTQgNGEuNS41IDAgMCAxLS43MDggMGwtNC00YS41LjUgMCAwIDEgLjcwOC0uNzA4TDcuNSAxMy4yOTNWMS41QS41LjUgMCAwIDEgOCAxelwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1iYXNlICAke1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLmFzUGF0aCA9PT0gXCIvcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgICA/IFwidGV4dC1ncmF5LTgwMCBmb250LWJvbGQgZGFyazp0ZXh0LWdyYXktNDAwXCJcclxuICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwIGZvbnQtbm9ybWFsIFwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQcm9qZWN0c1xyXG4gICAgICAgICAgICAgIHtyb3V0ZXIuYXNQYXRoID09PSBcIi9wcm9qZWN0c1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1hcnJvdy1kb3duIGlubGluZS1ibG9jayBoLTMgdy0zXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTggMWEuNS41IDAgMCAxIC41LjV2MTEuNzkzbDMuMTQ2LTMuMTQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTQgNGEuNS41IDAgMCAxLS43MDggMGwtNC00YS41LjUgMCAwIDEgLjcwOC0uNzA4TDcuNSAxMy4yOTNWMS41QS41LjUgMCAwIDEgOCAxelwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2V4cGVyaWVuY2VcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWJhc2UgICR7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIuYXNQYXRoID09PSBcIi9leHBlcmllbmNlXCJcclxuICAgICAgICAgICAgICAgICAgPyBcInRleHQtZ3JheS04MDAgZm9udC1ib2xkIGRhcms6dGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMCBmb250LW5vcm1hbCBcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRXhwZXJpZW5jZXtcIiBcIn1cclxuICAgICAgICAgICAgICB7cm91dGVyLmFzUGF0aCA9PT0gXCIvZXhwZXJpZW5jZVwiICYmIChcclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1hcnJvdy1kb3duIGlubGluZS1ibG9jayBoLTMgdy0zXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTggMWEuNS41IDAgMCAxIC41LjV2MTEuNzkzbDMuMTQ2LTMuMTQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTQgNGEuNS41IDAgMCAxLS43MDggMGwtNC00YS41LjUgMCAwIDEgLjcwOC0uNzA4TDcuNSAxMy4yOTNWMS41QS41LjUgMCAwIDEgOCAxelwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL0Jsb2dcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWJhc2UgICR7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIuYXNQYXRoID09PSBcIi9ibG9nXCJcclxuICAgICAgICAgICAgICAgICAgPyBcInRleHQtZ3JheS04MDAgZm9udC1ib2xkIGRhcms6dGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMCBmb250LW5vcm1hbCBcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQmxvZ3tcIiBcIn1cclxuICAgICAgICAgICAgICB7cm91dGVyLmFzUGF0aCA9PT0gXCIvQmxvZ1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1hcnJvdy1kb3duIGlubGluZS1ibG9jayBoLTMgdy0zXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTggMWEuNS41IDAgMCAxIC41LjV2MTEuNzkzbDMuMTQ2LTMuMTQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTQgNGEuNS41IDAgMCAxLS43MDggMGwtNC00YS41LjUgMCAwIDEgLjcwOC0uNzA4TDcuNSAxMy4yOTNWMS41QS41LjUgMCAwIDEgOCAxelwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWJhc2UgICR7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIuYXNQYXRoID09PSBcIi9jb250YWN0XCJcclxuICAgICAgICAgICAgICAgICAgPyBcInRleHQtZ3JheS04MDAgZm9udC1ib2xkIGRhcms6dGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMCBmb250LW5vcm1hbCBcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgIHtyb3V0ZXIuYXNQYXRoID09PSBcIi9jb250YWN0XCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWFycm93LWRvd24gaW5saW5lLWJsb2NrIGgtMyB3LTNcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNOCAxYS41LjUgMCAwIDEgLjUuNXYxMS43OTNsMy4xNDYtMy4xNDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtNCA0YS41LjUgMCAwIDEtLjcwOCAwbC00LTRhLjUuNSAwIDAgMSAuNzA4LS43MDhMNy41IDEzLjI5M1YxLjVBLjUuNSAwIDAgMSA4IDF6XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS14LTQgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9e3VzZXJEYXRhLnNvY2lhbExpbmtzLmluc3RhZ3JhbX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1pbnN0YWdyYW0gaC01IHctNVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTggMEM1LjgyOSAwIDUuNTU2LjAxIDQuNzAzLjA0OCAzLjg1LjA4OCAzLjI2OS4yMjIgMi43Ni40MmEzLjkxNyAzLjkxNyAwIDAgMC0xLjQxNy45MjNBMy45MjcgMy45MjcgMCAwIDAgLjQyIDIuNzZDLjIyMiAzLjI2OC4wODcgMy44NS4wNDggNC43LjAxIDUuNTU1IDAgNS44MjcgMCA4LjAwMWMwIDIuMTcyLjAxIDIuNDQ0LjA0OCAzLjI5Ny4wNC44NTIuMTc0IDEuNDMzLjM3MiAxLjk0Mi4yMDUuNTI2LjQ3OC45NzIuOTIzIDEuNDE3LjQ0NC40NDUuODkuNzE5IDEuNDE2LjkyMy41MS4xOTggMS4wOS4zMzMgMS45NDIuMzcyQzUuNTU1IDE1Ljk5IDUuODI3IDE2IDggMTZzMi40NDQtLjAxIDMuMjk4LS4wNDhjLjg1MS0uMDQgMS40MzQtLjE3NCAxLjk0My0uMzcyYTMuOTE2IDMuOTE2IDAgMCAwIDEuNDE2LS45MjNjLjQ0NS0uNDQ1LjcxOC0uODkxLjkyMy0xLjQxNy4xOTctLjUwOS4zMzItMS4wOS4zNzItMS45NDJDMTUuOTkgMTAuNDQ1IDE2IDEwLjE3MyAxNiA4cy0uMDEtMi40NDUtLjA0OC0zLjI5OWMtLjA0LS44NTEtLjE3NS0xLjQzMy0uMzcyLTEuOTQxYTMuOTI2IDMuOTI2IDAgMCAwLS45MjMtMS40MTdBMy45MTEgMy45MTEgMCAwIDAgMTMuMjQuNDJjLS41MS0uMTk4LTEuMDkyLS4zMzMtMS45NDMtLjM3MkMxMC40NDMuMDEgMTAuMTcyIDAgNy45OTggMGguMDAzem0tLjcxNyAxLjQ0MmguNzE4YzIuMTM2IDAgMi4zODkuMDA3IDMuMjMyLjA0Ni43OC4wMzUgMS4yMDQuMTY2IDEuNDg2LjI3NS4zNzMuMTQ1LjY0LjMxOS45Mi41OTkuMjguMjguNDUzLjU0Ni41OTguOTIuMTEuMjgxLjI0LjcwNS4yNzUgMS40ODUuMDM5Ljg0My4wNDcgMS4wOTYuMDQ3IDMuMjMxcy0uMDA4IDIuMzg5LS4wNDcgMy4yMzJjLS4wMzUuNzgtLjE2NiAxLjIwMy0uMjc1IDEuNDg1YTIuNDcgMi40NyAwIDAgMS0uNTk5LjkxOWMtLjI4LjI4LS41NDYuNDUzLS45Mi41OTgtLjI4LjExLS43MDQuMjQtMS40ODUuMjc2LS44NDMuMDM4LTEuMDk2LjA0Ny0zLjIzMi4wNDdzLTIuMzktLjAwOS0zLjIzMy0uMDQ3Yy0uNzgtLjAzNi0xLjIwMy0uMTY2LTEuNDg1LS4yNzZhMi40NzggMi40NzggMCAwIDEtLjkyLS41OTggMi40OCAyLjQ4IDAgMCAxLS42LS45MmMtLjEwOS0uMjgxLS4yNC0uNzA1LS4yNzUtMS40ODUtLjAzOC0uODQzLS4wNDYtMS4wOTYtLjA0Ni0zLjIzMyAwLTIuMTM2LjAwOC0yLjM4OC4wNDYtMy4yMzEuMDM2LS43OC4xNjYtMS4yMDQuMjc2LTEuNDg2LjE0NS0uMzczLjMxOS0uNjQuNTk5LS45Mi4yOC0uMjguNTQ2LS40NTMuOTItLjU5OC4yODItLjExLjcwNS0uMjQgMS40ODUtLjI3Ni43MzgtLjAzNCAxLjAyNC0uMDQ0IDIuNTE1LS4wNDV2LjAwMnptNC45ODggMS4zMjhhLjk2Ljk2IDAgMSAwIDAgMS45Mi45Ni45NiAwIDAgMCAwLTEuOTJ6bS00LjI3IDEuMTIyYTQuMTA5IDQuMTA5IDAgMSAwIDAgOC4yMTcgNC4xMDkgNC4xMDkgMCAwIDAgMC04LjIxN3ptMCAxLjQ0MWEyLjY2NyAyLjY2NyAwIDEgMSAwIDUuMzM0IDIuNjY3IDIuNjY3IDAgMCAxIDAtNS4zMzR6XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPXt1c2VyRGF0YS5zb2NpYWxMaW5rcy50d2l0dGVyfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLXR3aXR0ZXIgaC01IHctNVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUuMDI2IDE1YzYuMDM4IDAgOS4zNDEtNS4wMDMgOS4zNDEtOS4zMzQgMC0uMTQgMC0uMjgyLS4wMDYtLjQyMkE2LjY4NSA2LjY4NSAwIDAgMCAxNiAzLjU0MmE2LjY1OCA2LjY1OCAwIDAgMS0xLjg4OS41MTggMy4zMDEgMy4zMDEgMCAwIDAgMS40NDctMS44MTcgNi41MzMgNi41MzMgMCAwIDEtMi4wODcuNzkzQTMuMjg2IDMuMjg2IDAgMCAwIDcuODc1IDYuMDNhOS4zMjUgOS4zMjUgMCAwIDEtNi43NjctMy40MjkgMy4yODkgMy4yODkgMCAwIDAgMS4wMTggNC4zODJBMy4zMjMgMy4zMjMgMCAwIDEgLjY0IDYuNTc1di4wNDVhMy4yODggMy4yODggMCAwIDAgMi42MzIgMy4yMTggMy4yMDMgMy4yMDMgMCAwIDEtLjg2NS4xMTUgMy4yMyAzLjIzIDAgMCAxLS42MTQtLjA1NyAzLjI4MyAzLjI4MyAwIDAgMCAzLjA2NyAyLjI3N0E2LjU4OCA2LjU4OCAwIDAgMSAuNzggMTMuNThhNi4zMiA2LjMyIDAgMCAxLS43OC0uMDQ1QTkuMzQ0IDkuMzQ0IDAgMCAwIDUuMDI2IDE1elwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj17dXNlckRhdGEuc29jaWFsTGlua3MubGlua2VkaW59XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW5vcm1hbCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktbGlua2VkaW4gaC01IHctNVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAgMS4xNDZDMCAuNTEzLjUyNiAwIDEuMTc1IDBoMTMuNjVDMTUuNDc0IDAgMTYgLjUxMyAxNiAxLjE0NnYxMy43MDhjMCAuNjMzLS41MjYgMS4xNDYtMS4xNzUgMS4xNDZIMS4xNzVDLjUyNiAxNiAwIDE1LjQ4NyAwIDE0Ljg1NFYxLjE0NnptNC45NDMgMTIuMjQ4VjYuMTY5SDIuNTQydjcuMjI1aDIuNDAxem0tMS4yLTguMjEyYy44MzcgMCAxLjM1OC0uNTU0IDEuMzU4LTEuMjQ4LS4wMTUtLjcwOS0uNTItMS4yNDgtMS4zNDItMS4yNDgtLjgyMiAwLTEuMzU5LjU0LTEuMzU5IDEuMjQ4IDAgLjY5NC41MjEgMS4yNDggMS4zMjcgMS4yNDhoLjAxNnptNC45MDggOC4yMTJWOS4zNTljMC0uMjE2LjAxNi0uNDMyLjA4LS41ODYuMTczLS40MzEuNTY4LS44NzggMS4yMzItLjg3OC44NjkgMCAxLjIxNi42NjIgMS4yMTYgMS42MzR2My44NjVoMi40MDFWOS4yNWMwLTIuMjItMS4xODQtMy4yNTItMi43NjQtMy4yNTItMS4yNzQgMC0xLjg0NS43LTIuMTY1IDEuMTkzdi4wMjVoLS4wMTZhNS41NCA1LjU0IDAgMCAxIC4wMTYtLjAyNVY2LjE2OWgtMi40Yy4wMy42NzggMCA3LjIyNSAwIDcuMjI1aDIuNHpcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBEYXJrIE1vZGVcIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHAtMyByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKHRoZW1lID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21vdW50ZWQgJiYgKFxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQteWVsbG93LTUwMCBkYXJrOnRleHQteWVsbG93LTUwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoZW1lID09PSBcImRhcmtcIiA/IChcclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgM3YxbTAgMTZ2MW05LTloLTFNNCAxMkgzbTE1LjM2NCA2LjM2NGwtLjcwNy0uNzA3TTYuMzQzIDYuMzQzbC0uNzA3LS43MDdtMTIuNzI4IDBsLS43MDcuNzA3TTYuMzQzIDE3LjY1N2wtLjcwNy43MDdNMTYgMTJhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwelwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0yMC4zNTQgMTUuMzU0QTkgOSAwIDAxOC42NDYgMy42NDYgOS4wMDMgOS4wMDMgMCAwMDEyIDIxYTkuMDAzIDkuMDAzIDAgMDA4LjM1NC01LjY0NnpcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS14LTggYmxvY2sgbWQ6aGlkZGVuIG10LTRcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgIFByb2plY3RzXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZXhwZXJpZW5jZVwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgIEV4cGVyaWVuY2VcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImNvbnN0IHVzZXJEYXRhID0ge1xyXG4gIGdpdGh1YlVzZXJuYW1lOiBcInRhcnVuc2luZ2hvZmZpY2lhbFwiLFxyXG4gIG5hbWU6IFwiVGFydW4gU2luZ2hcIixcclxuICBkZXNpZ25hdGlvbjogXCJTb2Z0d2FyZSBEZXZlbG9wZXJcIixcclxuICBhdmF0YXJVcmw6IFwiL2F2YXRhci5wbmdcIixcclxuICBlbWFpbDogXCJ0YXJ1bnNpbmdod2FwN0BnbWFpbC5jb21cIixcclxuICBwaG9uZTogXCIrOTEgOTU4MjQyMzUzOVwiLFxyXG4gIGFkZHJlc3M6IFwiTmV3IERlbGhpLCBJbmRpYS5cIixcclxuICBwcm9qZWN0czogW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJBcG9sbG8gTXVzaWMgUGxheWVyXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3RhcnVuc2luZ2hvZmZpY2lhbC9BcG9sbG9NdXNpY1wiLFxyXG4gICAgICBpbWdVcmw6IFwiL3BybzIucG5nXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJPbmVEZXZQbGFjZVwiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vb25lZGV2cGxhY2UubmV0bGlmeS5jb20vXCIsXHJcbiAgICAgIGltZ1VybDogXCIvcHJvMy5wbmdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIk5ld3MgQXBwXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3RhcnVuc2luZ2hvZmZpY2lhbC9PbmVEZXZQbGFjZVwiLFxyXG4gICAgICBpbWdVcmw6IFwiL3BybzEucG5nXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgYWJvdXQ6IHtcclxuICAgIHRpdGxlOlxyXG4gICAgICBcIkknbSBhIFNvZnR3YXJlIERldmVsb3BlciwgVGVjaG5pY2FsIFdyaXRlciwgWW91VHViZXIsIGFuZCBhIHBhc3Npb25hdGUgbGVhcm5lci4gSSBhbSBjdXJyZW50bHkgd3JpdGluZyB2YXJpb3VzIFRlY2huaWNhbCBBcnRpY2xlcyBhdFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgYEFzIGEgQ1Mgc3R1ZGVudCwgSSBoYXZlIGJlZW4gd29ya2luZyBvbiB2YXJpb3VzIHByb2plY3RzIGluIHRoZSBwYXN0LiBUaGUgdGVjaCBzdGFjayB0aGF0IEkgbW9zdGx5IHVzZWQgYXJlIFJlYWN0IE5hdGl2ZSwgQVdTLCBGaXJlYmFzZSwgSmF2YSwgU1FMLCBldGMuIEkgaGF2ZSBjb250cmlidXRlZCB0byB2YXJpb3VzIG9wZW4tc291cmNlIHByb2plY3RzIGFuZCBhbHNvIG1lbnRvcmVkIGF0IEdpcmxzY3JpcHQgU3VtbWVyIG9mIENvZGUgMjAyMiwgd2hlcmUgSSBoYXZlIGFzc2lzdGVkIHRoZSBQcm9qZWN0IGFkbWluIGFuZCB2YXJpb3VzIG90aGVyIG9wZW4tc291cmNlIGNvbnRyaWJ1dG9ycyB3aXRoIHRoZWlyIHF1ZXJpZXMuYCxcclxuICAgIF0sXHJcbiAgICBjdXJyZW50UHJvamVjdDogXCJHZWVrc2ZvckdlZWtzXCIsXHJcbiAgICBjdXJyZW50UHJvamVjdFVybDogXCJodHRwczovL2F1dGguZ2Vla3Nmb3JnZWVrcy5vcmcvdXNlci90YXJ1bnNpbmdod2FwN1wiLFxyXG4gIH0sXHJcbiAgZXhwZXJpZW5jZTogW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJNZW50b3JcIixcclxuICAgICAgY29tcGFueTogXCJHU1NvQycyMlwiLFxyXG4gICAgICB5ZWFyOiBcIjIwMjJcIixcclxuICAgICAgY29tcGFueUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3RhcnVuc2luZ2hvZmZpY2lhbFwiLFxyXG4gICAgICBkZXNjOiBcIk1lbnRvcmVkIHN0dWRlbnRzIGluIEdpcmxzY3JpcHQgU3VtbWVyIG9mIENvZGUgZm9yIE9wZW4gU291cmNlIHByb2plY3QgZm9yIFNvY2lhbCBHb29kLiBSZXZpZXdlZCB2YXJpb3VzIGNvZGUgYW5kIEdpdGh1YiBQUnMgb2YgcGFydGljaXBhbnRzIGluIEhUTUwvQ1NTLCBCb290c3RyYXAsIGV0Yy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlRlY2huaWNhbCBDb250ZW50IFdyaXRlclwiLFxyXG4gICAgICBjb21wYW55OiBcIkdlZWtzZm9yR2Vla3NcIixcclxuICAgICAgeWVhcjogXCIyMDIwLTIyXCIsXHJcbiAgICAgIGNvbXBhbnlMaW5rOiBcImh0dHBzOi8vYXV0aC5nZWVrc2ZvcmdlZWtzLm9yZy91c2VyL3RhcnVuc2luZ2h3YXA3XCIsXHJcbiAgICAgIGRlc2M6IFwiV3JpdHRlbiBtb3JlIHRoYW4gNjArIFRlY2huaWNhbCBBcnRpY2xlcyByZWxhdGVkIHRvIFByb2dyYW1taW5nIExhbmd1YWdlcywgREJNUywgU1FMLCBTb2Z0d2FyZSBFbmdpbmVlcmluZywgZXRjXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCLkMuQVwiLFxyXG4gICAgICBjb21wYW55OiBcIk1haGFyYWphIFN1cmFqbWFsIEluc3RpdHV0ZSwgKEdHU0lQVSkuXCIsXHJcbiAgICAgIHllYXI6IFwiMjAxOS0yMlwiLFxyXG4gICAgICBjb21wYW55TGluazogXCIjXCIsXHJcbiAgICAgIGRlc2M6IFwiU3R1ZGllZCBDb21wdXRlciBBcHBsY2F0aW9ucyBhbmQgSW5mb3JtYXRpb24gVGVjaG5vbG9neS5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkhpZ2ggU2Nob29sXCIsXHJcbiAgICAgIGNvbXBhbnk6IFwiQmFsIE1hbmRpciBTci4gU2VjLiBTY2hvb2wsIERlbGhpXCIsXHJcbiAgICAgIHllYXI6IFwiMjAxOVwiLFxyXG4gICAgICBjb21wYW55TGluazogXCIjXCIsXHJcbiAgICAgIGRlc2M6IFwiU3ViamVjdHMgYmVpbmcgQ29tbWVyY2UgLSBJIGJhcmVseSBzdXJ2aXZlZCB3aXRoIDgxLjYlIG1hcmtzIGFnZ3JlZ2F0ZS5cIixcclxuICAgIH0sXHJcbiAgXSxcclxuICByZXN1bWVVcmw6XHJcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVIxeTFUUWktNFFVWk82LTd3LUhBTGp0SENFMnY4MjlmL3ZpZXc/dXNwPXNoYXJpbmdcIixcclxuICBzb2NpYWxMaW5rczoge1xyXG4gICAgaW5zdGFncmFtOiBcImh0dHBzOi8vaW5zdGFncmFtLmNvbS90YXJncmFwaGVyMjRcIixcclxuICAgIHR3aXR0ZXI6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pdHNUYXJ1bjI0XCIsXHJcbiAgICBsaW5rZWRpbjogXCJodHRwczovL2xpbmtlZGluLmNvbS9pbi90YXJ1bnNpbmdoMjRcIixcclxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vdGFydW5zaW5naG9mZmljaWFsXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJEYXRhO1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9