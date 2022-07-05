exports.id = "components_ContainerBlock_js-sanity_js";
exports.ids = ["components_ContainerBlock_js-sanity_js"];
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
        lineNumber: 48,
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

/***/ "./sanity.js":
/*!*******************!*\
  !*** ./sanity.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "sanityClient": function() { return /* binding */ sanityClient; },
/* harmony export */   "urlFor": function() { return /* binding */ urlFor; },
/* harmony export */   "useCurrentUser": function() { return /* binding */ useCurrentUser; }
/* harmony export */ });
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ "next-sanity");
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ "@sanity/image-url");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const config = {
  dataset: "production" || 0,
  projectId: "so3yjx14",
  apiVersion: "2021-03-25",
  useCdn: false
};
const sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);
const urlFor = source => _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(config).image(source);
const useCurrentUser = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createCurrentUserHook)(config);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9jb21wb25lbnRzL0NvbnRhaW5lckJsb2NrLmpzIiwid2VicGFjazovL25leHRqcy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovL25leHRqcy8uL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovL25leHRqcy8uL2NvbnN0YW50cy9kYXRhLmpzIiwid2VicGFjazovL25leHRqcy8uL3Nhbml0eS5qcyIsIndlYnBhY2s6Ly9uZXh0anMvaWdub3JlZHxDOlxcVXNlcnNcXHRhcnVuXFxuZXdwb3J0Zm9saW9cXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJDb250YWluZXJCbG9jayIsImNoaWxkcmVuIiwiY3VzdG9tTWV0YSIsInJvdXRlciIsInVzZVJvdXRlciIsIm1ldGEiLCJ0aXRsZSIsImltYWdlIiwidHlwZSIsImRlc2NyaXB0aW9uIiwiYXNQYXRoIiwiZGF0ZSIsIkZvb3RlciIsInVzZXJEYXRhIiwiTmF2YmFyIiwiY29uc29sZSIsImxvZyIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VUaGVtZSIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJuYW1lIiwiZGVzaWduYXRpb24iLCJnaXRodWJVc2VybmFtZSIsImF2YXRhclVybCIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzIiwicHJvamVjdHMiLCJsaW5rIiwiaW1nVXJsIiwiYWJvdXQiLCJjdXJyZW50UHJvamVjdCIsImN1cnJlbnRQcm9qZWN0VXJsIiwiZXhwZXJpZW5jZSIsImNvbXBhbnkiLCJ5ZWFyIiwiY29tcGFueUxpbmsiLCJkZXNjIiwicmVzdW1lVXJsIiwic29jaWFsTGlua3MiLCJpbnN0YWdyYW0iLCJ0d2l0dGVyIiwibGlua2VkaW4iLCJnaXRodWIiLCJjb25maWciLCJkYXRhc2V0IiwicHJvY2VzcyIsInByb2plY3RJZCIsImFwaVZlcnNpb24iLCJ1c2VDZG4iLCJzYW5pdHlDbGllbnQiLCJjcmVhdGVDbGllbnQiLCJ1cmxGb3IiLCJzb3VyY2UiLCJjcmVhdGVJbWFnZVVybEJ1aWxkZXIiLCJ1c2VDdXJyZW50VXNlciIsImNyZWF0ZUN1cnJlbnRVc2VySG9vayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsY0FBVCxPQUFxRDtBQUFBLE1BQTdCO0FBQUVDO0FBQUYsR0FBNkI7QUFBQSxNQUFkQyxVQUFjOztBQUNsRSxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUVBLFFBQU1DLElBQUk7QUFDUkMsU0FBSyxFQUFFLHFEQURDOztBQUVSO0FBQ0FDLFNBQUssRUFBRSxhQUhDO0FBSVJDLFFBQUksRUFBRTtBQUpFLEtBS0xOLFVBTEssQ0FBVjs7QUFPQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQSxrQkFBUUcsSUFBSSxDQUFDQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBb0IsZUFBTyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sZUFBTyxFQUFFRCxJQUFJLENBQUNJLFdBQXBCO0FBQWlDLFlBQUksRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUNFLGdCQUFRLEVBQUMsUUFEWDtBQUVFLGVBQU8sRUFBRywwQkFBeUJOLE1BQU0sQ0FBQ08sTUFBTztBQUZuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFRRTtBQUNFLFdBQUcsRUFBQyxXQUROO0FBRUUsWUFBSSxFQUFHLDBCQUF5QlAsTUFBTSxDQUFDTyxNQUFPO0FBRmhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVlFO0FBQU0sZ0JB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RTtBQUxSLEdBZlUsRUFzQlY7QUFDRW5DLFNBQUssRUFBRSxhQURUO0FBRUVnQyxXQUFPLEVBQUUsbUNBRlg7QUFHRUMsUUFBSSxFQUFFLE1BSFI7QUFJRUMsZUFBVyxFQUFFLEdBSmY7QUFLRUMsUUFBSSxFQUFFO0FBTFIsR0F0QlUsQ0FsQ0c7QUFnRWZDLFdBQVMsRUFDUCxvRkFqRWE7QUFrRWZDLGFBQVcsRUFBRTtBQUNYQyxhQUFTLEVBQUUsb0NBREE7QUFFWEMsV0FBTyxFQUFFLGdDQUZFO0FBR1hDLFlBQVEsRUFBRSxzQ0FIQztBQUlYQyxVQUFNLEVBQUU7QUFKRztBQWxFRSxDQUFqQjtBQTBFQSwrREFBZWxDLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUlBO0FBRU8sTUFBTW1DLE1BQU0sR0FBRztBQUNsQkMsU0FBTyxFQUFFQyxZQUFBLElBQTBDLENBRGpDO0FBRWxCQyxXQUFTLEVBQUVELFVBRk87QUFHbEJFLFlBQVUsRUFBRSxZQUhNO0FBSWxCQyxRQUFNO0FBSlksQ0FBZjtBQVFBLE1BQU1DLFlBQVksR0FBR0MseURBQVksQ0FBQ1AsTUFBRCxDQUFqQztBQUdBLE1BQU1RLE1BQU0sR0FBSUMsTUFBRCxJQUFZQyx3REFBcUIsQ0FBQ1YsTUFBRCxDQUFyQixDQUE4QnpDLEtBQTlCLENBQW9Da0QsTUFBcEMsQ0FBM0I7QUFFQSxNQUFNRSxjQUFjLEdBQUdDLGtFQUFxQixDQUFDWixNQUFELENBQTVDLEM7Ozs7Ozs7Ozs7QUNuQlAsZSIsImZpbGUiOiJjb21wb25lbnRzX0NvbnRhaW5lckJsb2NrX2pzLXNhbml0eV9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhaW5lckJsb2NrKHsgY2hpbGRyZW4sIC4uLmN1c3RvbU1ldGEgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBtZXRhID0ge1xyXG4gICAgdGl0bGU6IFwiVGFydW4gU2luZ2ggLSBEZXZlbG9wZXIsIFRlY2huaWNhbCBXcml0ZXIsIFlvdVR1YmVyXCIsXHJcbiAgICAvKiBkZXNjcmlwdGlvbjogYEkndmUgYmVlbiBkZXZlbG9waW5nIHdlYnNpdGVzIGZvciA1IHllYXJzIHN0cmFpZ2h0LiBHZXQgaW4gdG91Y2ggd2l0aCBtZSB0byBrbm93IG1vcmUuYCwgKi9cclxuICAgIGltYWdlOiBcIi9hdmF0YXIucG5nXCIsXHJcbiAgICB0eXBlOiBcIndlYnNpdGVcIixcclxuICAgIC4uLmN1c3RvbU1ldGEsXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnttZXRhLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJmb2xsb3csIGluZGV4XCIgLz5cclxuICAgICAgICA8bWV0YSBjb250ZW50PXttZXRhLmRlc2NyaXB0aW9ufSBuYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnVybFwiXHJcbiAgICAgICAgICBjb250ZW50PXtgaHR0cHM6Ly95b3Vyd2Vic2l0ZS5jb20ke3JvdXRlci5hc1BhdGh9YH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJjYW5vbmljYWxcIlxyXG4gICAgICAgICAgaHJlZj17YGh0dHBzOi8veW91cndlYnNpdGUuY29tJHtyb3V0ZXIuYXNQYXRofWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PXttZXRhLnR5cGV9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiTWFudSBBcm9yYVwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e21ldGEuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e21ldGEudGl0bGV9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e21ldGEuaW1hZ2V9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBtYW5udXBhYWppXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e21ldGEudGl0bGV9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXttZXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17bWV0YS5pbWFnZX0gLz5cclxuICAgICAgICB7bWV0YS5kYXRlICYmIChcclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwiYXJ0aWNsZTpwdWJsaXNoZWRfdGltZVwiIGNvbnRlbnQ9e21ldGEuZGF0ZX0gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImRhcms6YmctZ3JheS04MDAgdy1mdWxsXCI+XHJcbiAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VyRGF0YSBmcm9tIFwiLi4vY29uc3RhbnRzL2RhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0YxRjFGMV0gZGFyazpiZy1ncmF5LTkwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCAgbXgtYXV0byBweC00IHB5LTEwIG1kOnB5LTIwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTAuNSB3LWZ1bGwgYmctd2hpdGUgZGFyazpiZy1ncmF5LTcwMFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTQgbWQ6c3BhY2UteS0wIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBtZDppdGVtcy1jZW50ZXIgbXQtOFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+JmNvcHk7IFRhcnVuIFNpbmdoLiBBbGwgUmlnaHRzIFJlc2VydmVkLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qIFN1cHBvcnQgbWUgYnkga2VlcGluZyB0aGlzIGluIHRoZSBmb290ZXIsIHBsZWFzZS4gOikgKi99XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIERldmVsb3BlZCBieVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMTAgaG92ZXI6LXJvdGF0ZS0zIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjpiZy1ncmVlbi01MDAgcm91bmRlZC1tZCBweC0yIHB5LTEgIGhvdmVyOnRleHQtZ3JheS01MFwiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFRhcnVuIFNpbmdoXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS14LTQgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPXt1c2VyRGF0YS5zb2NpYWxMaW5rcy5pbnN0YWdyYW19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWluc3RhZ3JhbSBoLTUgdy01XCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOCAwQzUuODI5IDAgNS41NTYuMDEgNC43MDMuMDQ4IDMuODUuMDg4IDMuMjY5LjIyMiAyLjc2LjQyYTMuOTE3IDMuOTE3IDAgMCAwLTEuNDE3LjkyM0EzLjkyNyAzLjkyNyAwIDAgMCAuNDIgMi43NkMuMjIyIDMuMjY4LjA4NyAzLjg1LjA0OCA0LjcuMDEgNS41NTUgMCA1LjgyNyAwIDguMDAxYzAgMi4xNzIuMDEgMi40NDQuMDQ4IDMuMjk3LjA0Ljg1Mi4xNzQgMS40MzMuMzcyIDEuOTQyLjIwNS41MjYuNDc4Ljk3Mi45MjMgMS40MTcuNDQ0LjQ0NS44OS43MTkgMS40MTYuOTIzLjUxLjE5OCAxLjA5LjMzMyAxLjk0Mi4zNzJDNS41NTUgMTUuOTkgNS44MjcgMTYgOCAxNnMyLjQ0NC0uMDEgMy4yOTgtLjA0OGMuODUxLS4wNCAxLjQzNC0uMTc0IDEuOTQzLS4zNzJhMy45MTYgMy45MTYgMCAwIDAgMS40MTYtLjkyM2MuNDQ1LS40NDUuNzE4LS44OTEuOTIzLTEuNDE3LjE5Ny0uNTA5LjMzMi0xLjA5LjM3Mi0xLjk0MkMxNS45OSAxMC40NDUgMTYgMTAuMTczIDE2IDhzLS4wMS0yLjQ0NS0uMDQ4LTMuMjk5Yy0uMDQtLjg1MS0uMTc1LTEuNDMzLS4zNzItMS45NDFhMy45MjYgMy45MjYgMCAwIDAtLjkyMy0xLjQxN0EzLjkxMSAzLjkxMSAwIDAgMCAxMy4yNC40MmMtLjUxLS4xOTgtMS4wOTItLjMzMy0xLjk0My0uMzcyQzEwLjQ0My4wMSAxMC4xNzIgMCA3Ljk5OCAwaC4wMDN6bS0uNzE3IDEuNDQyaC43MThjMi4xMzYgMCAyLjM4OS4wMDcgMy4yMzIuMDQ2Ljc4LjAzNSAxLjIwNC4xNjYgMS40ODYuMjc1LjM3My4xNDUuNjQuMzE5LjkyLjU5OS4yOC4yOC40NTMuNTQ2LjU5OC45Mi4xMS4yODEuMjQuNzA1LjI3NSAxLjQ4NS4wMzkuODQzLjA0NyAxLjA5Ni4wNDcgMy4yMzFzLS4wMDggMi4zODktLjA0NyAzLjIzMmMtLjAzNS43OC0uMTY2IDEuMjAzLS4yNzUgMS40ODVhMi40NyAyLjQ3IDAgMCAxLS41OTkuOTE5Yy0uMjguMjgtLjU0Ni40NTMtLjkyLjU5OC0uMjguMTEtLjcwNC4yNC0xLjQ4NS4yNzYtLjg0My4wMzgtMS4wOTYuMDQ3LTMuMjMyLjA0N3MtMi4zOS0uMDA5LTMuMjMzLS4wNDdjLS43OC0uMDM2LTEuMjAzLS4xNjYtMS40ODUtLjI3NmEyLjQ3OCAyLjQ3OCAwIDAgMS0uOTItLjU5OCAyLjQ4IDIuNDggMCAwIDEtLjYtLjkyYy0uMTA5LS4yODEtLjI0LS43MDUtLjI3NS0xLjQ4NS0uMDM4LS44NDMtLjA0Ni0xLjA5Ni0uMDQ2LTMuMjMzIDAtMi4xMzYuMDA4LTIuMzg4LjA0Ni0zLjIzMS4wMzYtLjc4LjE2Ni0xLjIwNC4yNzYtMS40ODYuMTQ1LS4zNzMuMzE5LS42NC41OTktLjkyLjI4LS4yOC41NDYtLjQ1My45Mi0uNTk4LjI4Mi0uMTEuNzA1LS4yNCAxLjQ4NS0uMjc2LjczOC0uMDM0IDEuMDI0LS4wNDQgMi41MTUtLjA0NXYuMDAyem00Ljk4OCAxLjMyOGEuOTYuOTYgMCAxIDAgMCAxLjkyLjk2Ljk2IDAgMCAwIDAtMS45MnptLTQuMjcgMS4xMjJhNC4xMDkgNC4xMDkgMCAxIDAgMCA4LjIxNyA0LjEwOSA0LjEwOSAwIDAgMCAwLTguMjE3em0wIDEuNDQxYTIuNjY3IDIuNjY3IDAgMSAxIDAgNS4zMzQgMi42NjcgMi42NjcgMCAwIDEgMC01LjMzNHpcIiAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj17dXNlckRhdGEuc29jaWFsTGlua3MudHdpdHRlcn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktdHdpdHRlciBoLTUgdy01XCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNS4wMjYgMTVjNi4wMzggMCA5LjM0MS01LjAwMyA5LjM0MS05LjMzNCAwLS4xNCAwLS4yODItLjAwNi0uNDIyQTYuNjg1IDYuNjg1IDAgMCAwIDE2IDMuNTQyYTYuNjU4IDYuNjU4IDAgMCAxLTEuODg5LjUxOCAzLjMwMSAzLjMwMSAwIDAgMCAxLjQ0Ny0xLjgxNyA2LjUzMyA2LjUzMyAwIDAgMS0yLjA4Ny43OTNBMy4yODYgMy4yODYgMCAwIDAgNy44NzUgNi4wM2E5LjMyNSA5LjMyNSAwIDAgMS02Ljc2Ny0zLjQyOSAzLjI4OSAzLjI4OSAwIDAgMCAxLjAxOCA0LjM4MkEzLjMyMyAzLjMyMyAwIDAgMSAuNjQgNi41NzV2LjA0NWEzLjI4OCAzLjI4OCAwIDAgMCAyLjYzMiAzLjIxOCAzLjIwMyAzLjIwMyAwIDAgMS0uODY1LjExNSAzLjIzIDMuMjMgMCAwIDEtLjYxNC0uMDU3IDMuMjgzIDMuMjgzIDAgMCAwIDMuMDY3IDIuMjc3QTYuNTg4IDYuNTg4IDAgMCAxIC43OCAxMy41OGE2LjMyIDYuMzIgMCAwIDEtLjc4LS4wNDVBOS4zNDQgOS4zNDQgMCAwIDAgNS4wMjYgMTV6XCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9e3VzZXJEYXRhLnNvY2lhbExpbmtzLmxpbmtlZGlufVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW5vcm1hbCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1saW5rZWRpbiBoLTUgdy01XCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAxLjE0NkMwIC41MTMuNTI2IDAgMS4xNzUgMGgxMy42NUMxNS40NzQgMCAxNiAuNTEzIDE2IDEuMTQ2djEzLjcwOGMwIC42MzMtLjUyNiAxLjE0Ni0xLjE3NSAxLjE0NkgxLjE3NUMuNTI2IDE2IDAgMTUuNDg3IDAgMTQuODU0VjEuMTQ2em00Ljk0MyAxMi4yNDhWNi4xNjlIMi41NDJ2Ny4yMjVoMi40MDF6bS0xLjItOC4yMTJjLjgzNyAwIDEuMzU4LS41NTQgMS4zNTgtMS4yNDgtLjAxNS0uNzA5LS41Mi0xLjI0OC0xLjM0Mi0xLjI0OC0uODIyIDAtMS4zNTkuNTQtMS4zNTkgMS4yNDggMCAuNjk0LjUyMSAxLjI0OCAxLjMyNyAxLjI0OGguMDE2em00LjkwOCA4LjIxMlY5LjM1OWMwLS4yMTYuMDE2LS40MzIuMDgtLjU4Ni4xNzMtLjQzMS41NjgtLjg3OCAxLjIzMi0uODc4Ljg2OSAwIDEuMjE2LjY2MiAxLjIxNiAxLjYzNHYzLjg2NWgyLjQwMVY5LjI1YzAtMi4yMi0xLjE4NC0zLjI1Mi0yLjc2NC0zLjI1Mi0xLjI3NCAwLTEuODQ1LjctMi4xNjUgMS4xOTN2LjAyNWgtLjAxNmE1LjU0IDUuNTQgMCAwIDEgLjAxNi0uMDI1VjYuMTY5aC0yLjRjLjAzLjY3OCAwIDcuMjI1IDAgNy4yMjVoMi40elwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJuZXh0LXRoZW1lc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHVzZXJEYXRhIGZyb20gXCIuLi9jb25zdGFudHMvZGF0YVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnNvbGUubG9nKHJvdXRlci5hc1BhdGgpO1xyXG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldE1vdW50ZWQodHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgIG14LWF1dG8gcHgtNCBweS0xMCBtZDpweS0yMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICB7LyogTG9nbyAvIEhvbWUgLyBUZXh0ICovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQteGwgZGFyazp0ZXh0LWdyYXktMTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7dXNlckRhdGEubmFtZX1cclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWxpZ2h0IHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICB7dXNlckRhdGEuZGVzaWduYXRpb259XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC04IGhpZGRlbiBtZDpibG9ja1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtYmFzZSAgJHtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5hc1BhdGggPT09IFwiL2Fib3V0XCJcclxuICAgICAgICAgICAgICAgICAgPyBcInRleHQtZ3JheS04MDAgZm9udC1ib2xkIGRhcms6dGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMCBmb250LW5vcm1hbCBcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWJvdXR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAge3JvdXRlci5hc1BhdGggPT09IFwiL2Fib3V0XCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWFycm93LWRvd24gaW5saW5lLWJsb2NrIGgtMyB3LTNcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNOCAxYS41LjUgMCAwIDEgLjUuNXYxMS43OTNsMy4xNDYtMy4xNDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtNCA0YS41LjUgMCAwIDEtLjcwOCAwbC00LTRhLjUuNSAwIDAgMSAuNzA4LS43MDhMNy41IDEzLjI5M1YxLjVBLjUuNSAwIDAgMSA4IDF6XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWJhc2UgICR7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIuYXNQYXRoID09PSBcIi9wcm9qZWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBkYXJrOnRleHQtZ3JheS00MDBcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDAgZm9udC1ub3JtYWwgXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFByb2plY3RzXHJcbiAgICAgICAgICAgICAge3JvdXRlci5hc1BhdGggPT09IFwiL3Byb2plY3RzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWFycm93LWRvd24gaW5saW5lLWJsb2NrIGgtMyB3LTNcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNOCAxYS41LjUgMCAwIDEgLjUuNXYxMS43OTNsMy4xNDYtMy4xNDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtNCA0YS41LjUgMCAwIDEtLjcwOCAwbC00LTRhLjUuNSAwIDAgMSAuNzA4LS43MDhMNy41IDEzLjI5M1YxLjVBLjUuNSAwIDAgMSA4IDF6XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXhwZXJpZW5jZVwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtYmFzZSAgJHtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5hc1BhdGggPT09IFwiL2V4cGVyaWVuY2VcIlxyXG4gICAgICAgICAgICAgICAgICA/IFwidGV4dC1ncmF5LTgwMCBmb250LWJvbGQgZGFyazp0ZXh0LWdyYXktNDAwXCJcclxuICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwIGZvbnQtbm9ybWFsIFwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBFeHBlcmllbmNle1wiIFwifVxyXG4gICAgICAgICAgICAgIHtyb3V0ZXIuYXNQYXRoID09PSBcIi9leHBlcmllbmNlXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWFycm93LWRvd24gaW5saW5lLWJsb2NrIGgtMyB3LTNcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNOCAxYS41LjUgMCAwIDEgLjUuNXYxMS43OTNsMy4xNDYtMy4xNDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtNCA0YS41LjUgMCAwIDEtLjcwOCAwbC00LTRhLjUuNSAwIDAgMSAuNzA4LS43MDhMNy41IDEzLjI5M1YxLjVBLjUuNSAwIDAgMSA4IDF6XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQmxvZ1wiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtYmFzZSAgJHtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5hc1BhdGggPT09IFwiL2Jsb2dcIlxyXG4gICAgICAgICAgICAgICAgICA/IFwidGV4dC1ncmF5LTgwMCBmb250LWJvbGQgZGFyazp0ZXh0LWdyYXktNDAwXCJcclxuICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwIGZvbnQtbm9ybWFsIFwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBCbG9ne1wiIFwifVxyXG4gICAgICAgICAgICAgIHtyb3V0ZXIuYXNQYXRoID09PSBcIi9CbG9nXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWFycm93LWRvd24gaW5saW5lLWJsb2NrIGgtMyB3LTNcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNOCAxYS41LjUgMCAwIDEgLjUuNXYxMS43OTNsMy4xNDYtMy4xNDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtNCA0YS41LjUgMCAwIDEtLjcwOCAwbC00LTRhLjUuNSAwIDAgMSAuNzA4LS43MDhMNy41IDEzLjI5M1YxLjVBLjUuNSAwIDAgMSA4IDF6XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtYmFzZSAgJHtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5hc1BhdGggPT09IFwiL2NvbnRhY3RcIlxyXG4gICAgICAgICAgICAgICAgICA/IFwidGV4dC1ncmF5LTgwMCBmb250LWJvbGQgZGFyazp0ZXh0LWdyYXktNDAwXCJcclxuICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwIGZvbnQtbm9ybWFsIFwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAge3JvdXRlci5hc1BhdGggPT09IFwiL2NvbnRhY3RcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktYXJyb3ctZG93biBpbmxpbmUtYmxvY2sgaC0zIHctM1wiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk04IDFhLjUuNSAwIDAgMSAuNS41djExLjc5M2wzLjE0Ni0zLjE0N2EuNS41IDAgMCAxIC43MDguNzA4bC00IDRhLjUuNSAwIDAgMS0uNzA4IDBsLTQtNGEuNS41IDAgMCAxIC43MDgtLjcwOEw3LjUgMTMuMjkzVjEuNUEuNS41IDAgMCAxIDggMXpcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtNCBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj17dXNlckRhdGEuc29jaWFsTGlua3MuaW5zdGFncmFtfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWluc3RhZ3JhbSBoLTUgdy01XCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOCAwQzUuODI5IDAgNS41NTYuMDEgNC43MDMuMDQ4IDMuODUuMDg4IDMuMjY5LjIyMiAyLjc2LjQyYTMuOTE3IDMuOTE3IDAgMCAwLTEuNDE3LjkyM0EzLjkyNyAzLjkyNyAwIDAgMCAuNDIgMi43NkMuMjIyIDMuMjY4LjA4NyAzLjg1LjA0OCA0LjcuMDEgNS41NTUgMCA1LjgyNyAwIDguMDAxYzAgMi4xNzIuMDEgMi40NDQuMDQ4IDMuMjk3LjA0Ljg1Mi4xNzQgMS40MzMuMzcyIDEuOTQyLjIwNS41MjYuNDc4Ljk3Mi45MjMgMS40MTcuNDQ0LjQ0NS44OS43MTkgMS40MTYuOTIzLjUxLjE5OCAxLjA5LjMzMyAxLjk0Mi4zNzJDNS41NTUgMTUuOTkgNS44MjcgMTYgOCAxNnMyLjQ0NC0uMDEgMy4yOTgtLjA0OGMuODUxLS4wNCAxLjQzNC0uMTc0IDEuOTQzLS4zNzJhMy45MTYgMy45MTYgMCAwIDAgMS40MTYtLjkyM2MuNDQ1LS40NDUuNzE4LS44OTEuOTIzLTEuNDE3LjE5Ny0uNTA5LjMzMi0xLjA5LjM3Mi0xLjk0MkMxNS45OSAxMC40NDUgMTYgMTAuMTczIDE2IDhzLS4wMS0yLjQ0NS0uMDQ4LTMuMjk5Yy0uMDQtLjg1MS0uMTc1LTEuNDMzLS4zNzItMS45NDFhMy45MjYgMy45MjYgMCAwIDAtLjkyMy0xLjQxN0EzLjkxMSAzLjkxMSAwIDAgMCAxMy4yNC40MmMtLjUxLS4xOTgtMS4wOTItLjMzMy0xLjk0My0uMzcyQzEwLjQ0My4wMSAxMC4xNzIgMCA3Ljk5OCAwaC4wMDN6bS0uNzE3IDEuNDQyaC43MThjMi4xMzYgMCAyLjM4OS4wMDcgMy4yMzIuMDQ2Ljc4LjAzNSAxLjIwNC4xNjYgMS40ODYuMjc1LjM3My4xNDUuNjQuMzE5LjkyLjU5OS4yOC4yOC40NTMuNTQ2LjU5OC45Mi4xMS4yODEuMjQuNzA1LjI3NSAxLjQ4NS4wMzkuODQzLjA0NyAxLjA5Ni4wNDcgMy4yMzFzLS4wMDggMi4zODktLjA0NyAzLjIzMmMtLjAzNS43OC0uMTY2IDEuMjAzLS4yNzUgMS40ODVhMi40NyAyLjQ3IDAgMCAxLS41OTkuOTE5Yy0uMjguMjgtLjU0Ni40NTMtLjkyLjU5OC0uMjguMTEtLjcwNC4yNC0xLjQ4NS4yNzYtLjg0My4wMzgtMS4wOTYuMDQ3LTMuMjMyLjA0N3MtMi4zOS0uMDA5LTMuMjMzLS4wNDdjLS43OC0uMDM2LTEuMjAzLS4xNjYtMS40ODUtLjI3NmEyLjQ3OCAyLjQ3OCAwIDAgMS0uOTItLjU5OCAyLjQ4IDIuNDggMCAwIDEtLjYtLjkyYy0uMTA5LS4yODEtLjI0LS43MDUtLjI3NS0xLjQ4NS0uMDM4LS44NDMtLjA0Ni0xLjA5Ni0uMDQ2LTMuMjMzIDAtMi4xMzYuMDA4LTIuMzg4LjA0Ni0zLjIzMS4wMzYtLjc4LjE2Ni0xLjIwNC4yNzYtMS40ODYuMTQ1LS4zNzMuMzE5LS42NC41OTktLjkyLjI4LS4yOC41NDYtLjQ1My45Mi0uNTk4LjI4Mi0uMTEuNzA1LS4yNCAxLjQ4NS0uMjc2LjczOC0uMDM0IDEuMDI0LS4wNDQgMi41MTUtLjA0NXYuMDAyem00Ljk4OCAxLjMyOGEuOTYuOTYgMCAxIDAgMCAxLjkyLjk2Ljk2IDAgMCAwIDAtMS45MnptLTQuMjcgMS4xMjJhNC4xMDkgNC4xMDkgMCAxIDAgMCA4LjIxNyA0LjEwOSA0LjEwOSAwIDAgMCAwLTguMjE3em0wIDEuNDQxYTIuNjY3IDIuNjY3IDAgMSAxIDAgNS4zMzQgMi42NjcgMi42NjcgMCAwIDEgMC01LjMzNHpcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9e3VzZXJEYXRhLnNvY2lhbExpbmtzLnR3aXR0ZXJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW5vcm1hbCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktdHdpdHRlciBoLTUgdy01XCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNS4wMjYgMTVjNi4wMzggMCA5LjM0MS01LjAwMyA5LjM0MS05LjMzNCAwLS4xNCAwLS4yODItLjAwNi0uNDIyQTYuNjg1IDYuNjg1IDAgMCAwIDE2IDMuNTQyYTYuNjU4IDYuNjU4IDAgMCAxLTEuODg5LjUxOCAzLjMwMSAzLjMwMSAwIDAgMCAxLjQ0Ny0xLjgxNyA2LjUzMyA2LjUzMyAwIDAgMS0yLjA4Ny43OTNBMy4yODYgMy4yODYgMCAwIDAgNy44NzUgNi4wM2E5LjMyNSA5LjMyNSAwIDAgMS02Ljc2Ny0zLjQyOSAzLjI4OSAzLjI4OSAwIDAgMCAxLjAxOCA0LjM4MkEzLjMyMyAzLjMyMyAwIDAgMSAuNjQgNi41NzV2LjA0NWEzLjI4OCAzLjI4OCAwIDAgMCAyLjYzMiAzLjIxOCAzLjIwMyAzLjIwMyAwIDAgMS0uODY1LjExNSAzLjIzIDMuMjMgMCAwIDEtLjYxNC0uMDU3IDMuMjgzIDMuMjgzIDAgMCAwIDMuMDY3IDIuMjc3QTYuNTg4IDYuNTg4IDAgMCAxIC43OCAxMy41OGE2LjMyIDYuMzIgMCAwIDEtLjc4LS4wNDVBOS4zNDQgOS4zNDQgMCAwIDAgNS4wMjYgMTV6XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPXt1c2VyRGF0YS5zb2NpYWxMaW5rcy5saW5rZWRpbn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1saW5rZWRpbiBoLTUgdy01XCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAxLjE0NkMwIC41MTMuNTI2IDAgMS4xNzUgMGgxMy42NUMxNS40NzQgMCAxNiAuNTEzIDE2IDEuMTQ2djEzLjcwOGMwIC42MzMtLjUyNiAxLjE0Ni0xLjE3NSAxLjE0NkgxLjE3NUMuNTI2IDE2IDAgMTUuNDg3IDAgMTQuODU0VjEuMTQ2em00Ljk0MyAxMi4yNDhWNi4xNjlIMi41NDJ2Ny4yMjVoMi40MDF6bS0xLjItOC4yMTJjLjgzNyAwIDEuMzU4LS41NTQgMS4zNTgtMS4yNDgtLjAxNS0uNzA5LS41Mi0xLjI0OC0xLjM0Mi0xLjI0OC0uODIyIDAtMS4zNTkuNTQtMS4zNTkgMS4yNDggMCAuNjk0LjUyMSAxLjI0OCAxLjMyNyAxLjI0OGguMDE2em00LjkwOCA4LjIxMlY5LjM1OWMwLS4yMTYuMDE2LS40MzIuMDgtLjU4Ni4xNzMtLjQzMS41NjgtLjg3OCAxLjIzMi0uODc4Ljg2OSAwIDEuMjE2LjY2MiAxLjIxNiAxLjYzNHYzLjg2NWgyLjQwMVY5LjI1YzAtMi4yMi0xLjE4NC0zLjI1Mi0yLjc2NC0zLjI1Mi0xLjI3NCAwLTEuODQ1LjctMi4xNjUgMS4xOTN2LjAyNWgtLjAxNmE1LjU0IDUuNTQgMCAwIDEgLjAxNi0uMDI1VjYuMTY5aC0yLjRjLjAzLjY3OCAwIDcuMjI1IDAgNy4yMjVoMi40elwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIERhcmsgTW9kZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcC0zIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUodGhlbWUgPT09IFwiZGFya1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCIpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bW91bnRlZCAmJiAoXHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC15ZWxsb3ctNTAwIGRhcms6dGV4dC15ZWxsb3ctNTAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhlbWUgPT09IFwiZGFya1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiAzdjFtMCAxNnYxbTktOWgtMU00IDEySDNtMTUuMzY0IDYuMzY0bC0uNzA3LS43MDdNNi4zNDMgNi4zNDNsLS43MDctLjcwN20xMi43MjggMGwtLjcwNy43MDdNNi4zNDMgMTcuNjU3bC0uNzA3LjcwN00xNiAxMmE0IDQgMCAxMS04IDAgNCA0IDAgMDE4IDB6XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIwLjM1NCAxNS4zNTRBOSA5IDAgMDE4LjY0NiAzLjY0NiA5LjAwMyA5LjAwMyAwIDAwMTIgMjFhOS4wMDMgOS4wMDMgMCAwMDguMzU0LTUuNjQ2elwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtOCBibG9jayBtZDpoaWRkZW4gbXQtNFwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW5vcm1hbCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAgUHJvamVjdHNcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9leHBlcmllbmNlXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAgRXhwZXJpZW5jZVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW5vcm1hbCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiY29uc3QgdXNlckRhdGEgPSB7XHJcbiAgZ2l0aHViVXNlcm5hbWU6IFwidGFydW5zaW5naG9mZmljaWFsXCIsXHJcbiAgbmFtZTogXCJUYXJ1biBTaW5naFwiLFxyXG4gIGRlc2lnbmF0aW9uOiBcIlNvZnR3YXJlIERldmVsb3BlclwiLFxyXG4gIGF2YXRhclVybDogXCIvYXZhdGFyLnBuZ1wiLFxyXG4gIGVtYWlsOiBcInRhcnVuc2luZ2h3YXA3QGdtYWlsLmNvbVwiLFxyXG4gIHBob25lOiBcIis5MSA5NTgyNDIzNTM5XCIsXHJcbiAgYWRkcmVzczogXCJOZXcgRGVsaGksIEluZGlhLlwiLFxyXG4gIHByb2plY3RzOiBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkFwb2xsbyBNdXNpYyBQbGF5ZXJcIixcclxuICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vdGFydW5zaW5naG9mZmljaWFsL0Fwb2xsb011c2ljXCIsXHJcbiAgICAgIGltZ1VybDogXCIvcHJvMi5wbmdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIk9uZURldlBsYWNlXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9vbmVkZXZwbGFjZS5uZXRsaWZ5LmNvbS9cIixcclxuICAgICAgaW1nVXJsOiBcIi9wcm8zLnBuZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTmV3cyBBcHBcIixcclxuICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vdGFydW5zaW5naG9mZmljaWFsL09uZURldlBsYWNlXCIsXHJcbiAgICAgIGltZ1VybDogXCIvcHJvMS5wbmdcIixcclxuICAgIH0sXHJcbiAgXSxcclxuICBhYm91dDoge1xyXG4gICAgdGl0bGU6XHJcbiAgICAgIFwiSSdtIGEgU29mdHdhcmUgRGV2ZWxvcGVyLCBUZWNobmljYWwgV3JpdGVyLCBZb3VUdWJlciwgYW5kIGEgcGFzc2lvbmF0ZSBsZWFybmVyLiBJIGFtIGN1cnJlbnRseSB3cml0aW5nIHZhcmlvdXMgVGVjaG5pY2FsIEFydGljbGVzIGF0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogW1xyXG4gICAgICBgQXMgYSBDUyBzdHVkZW50LCBJIGhhdmUgYmVlbiB3b3JraW5nIG9uIHZhcmlvdXMgcHJvamVjdHMgaW4gdGhlIHBhc3QuIFRoZSB0ZWNoIHN0YWNrIHRoYXQgSSBtb3N0bHkgdXNlZCBhcmUgUmVhY3QgTmF0aXZlLCBBV1MsIEZpcmViYXNlLCBKYXZhLCBTUUwsIGV0Yy4gSSBoYXZlIGNvbnRyaWJ1dGVkIHRvIHZhcmlvdXMgb3Blbi1zb3VyY2UgcHJvamVjdHMgYW5kIGFsc28gbWVudG9yZWQgYXQgR2lybHNjcmlwdCBTdW1tZXIgb2YgQ29kZSAyMDIyLCB3aGVyZSBJIGhhdmUgYXNzaXN0ZWQgdGhlIFByb2plY3QgYWRtaW4gYW5kIHZhcmlvdXMgb3RoZXIgb3Blbi1zb3VyY2UgY29udHJpYnV0b3JzIHdpdGggdGhlaXIgcXVlcmllcy5gLFxyXG4gICAgXSxcclxuICAgIGN1cnJlbnRQcm9qZWN0OiBcIkdlZWtzZm9yR2Vla3NcIixcclxuICAgIGN1cnJlbnRQcm9qZWN0VXJsOiBcImh0dHBzOi8vYXV0aC5nZWVrc2ZvcmdlZWtzLm9yZy91c2VyL3RhcnVuc2luZ2h3YXA3XCIsXHJcbiAgfSxcclxuICBleHBlcmllbmNlOiBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIk1lbnRvclwiLFxyXG4gICAgICBjb21wYW55OiBcIkdTU29DJzIyXCIsXHJcbiAgICAgIHllYXI6IFwiMjAyMlwiLFxyXG4gICAgICBjb21wYW55TGluazogXCJodHRwczovL2dpdGh1Yi5jb20vdGFydW5zaW5naG9mZmljaWFsXCIsXHJcbiAgICAgIGRlc2M6IFwiTWVudG9yZWQgc3R1ZGVudHMgaW4gR2lybHNjcmlwdCBTdW1tZXIgb2YgQ29kZSBmb3IgT3BlbiBTb3VyY2UgcHJvamVjdCBmb3IgU29jaWFsIEdvb2QuIFJldmlld2VkIHZhcmlvdXMgY29kZSBhbmQgR2l0aHViIFBScyBvZiBwYXJ0aWNpcGFudHMgaW4gSFRNTC9DU1MsIEJvb3RzdHJhcCwgZXRjLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVGVjaG5pY2FsIENvbnRlbnQgV3JpdGVyXCIsXHJcbiAgICAgIGNvbXBhbnk6IFwiR2Vla3Nmb3JHZWVrc1wiLFxyXG4gICAgICB5ZWFyOiBcIjIwMjAtMjJcIixcclxuICAgICAgY29tcGFueUxpbms6IFwiaHR0cHM6Ly9hdXRoLmdlZWtzZm9yZ2Vla3Mub3JnL3VzZXIvdGFydW5zaW5naHdhcDdcIixcclxuICAgICAgZGVzYzogXCJXcml0dGVuIG1vcmUgdGhhbiA2MCsgVGVjaG5pY2FsIEFydGljbGVzIHJlbGF0ZWQgdG8gUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VzLCBEQk1TLCBTUUwsIFNvZnR3YXJlIEVuZ2luZWVyaW5nLCBldGNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkIuQy5BXCIsXHJcbiAgICAgIGNvbXBhbnk6IFwiTWFoYXJhamEgU3VyYWptYWwgSW5zdGl0dXRlLCAoR0dTSVBVKS5cIixcclxuICAgICAgeWVhcjogXCIyMDE5LTIyXCIsXHJcbiAgICAgIGNvbXBhbnlMaW5rOiBcIiNcIixcclxuICAgICAgZGVzYzogXCJTdHVkaWVkIENvbXB1dGVyIEFwcGxjYXRpb25zIGFuZCBJbmZvcm1hdGlvbiBUZWNobm9sb2d5LlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiSGlnaCBTY2hvb2xcIixcclxuICAgICAgY29tcGFueTogXCJCYWwgTWFuZGlyIFNyLiBTZWMuIFNjaG9vbCwgRGVsaGlcIixcclxuICAgICAgeWVhcjogXCIyMDE5XCIsXHJcbiAgICAgIGNvbXBhbnlMaW5rOiBcIiNcIixcclxuICAgICAgZGVzYzogXCJTdWJqZWN0cyBiZWluZyBDb21tZXJjZSAtIEkgYmFyZWx5IHN1cnZpdmVkIHdpdGggODEuNiUgbWFya3MgYWdncmVnYXRlLlwiLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIHJlc3VtZVVybDpcclxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUjF5MVRRaS00UVVaTzYtN3ctSEFManRIQ0UydjgyOWYvdmlldz91c3A9c2hhcmluZ1wiLFxyXG4gIHNvY2lhbExpbmtzOiB7XHJcbiAgICBpbnN0YWdyYW06IFwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL3RhcmdyYXBoZXIyNFwiLFxyXG4gICAgdHdpdHRlcjogXCJodHRwczovL3R3aXR0ZXIuY29tL2l0c1RhcnVuMjRcIixcclxuICAgIGxpbmtlZGluOiBcImh0dHBzOi8vbGlua2VkaW4uY29tL2luL3RhcnVuc2luZ2gyNFwiLFxyXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90YXJ1bnNpbmdob2ZmaWNpYWxcIixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlckRhdGE7XHJcbiIsImltcG9ydCB7XHJcbiAgICBjcmVhdGVDdXJyZW50VXNlckhvb2ssXHJcbiAgICBjcmVhdGVDbGllbnQsXHJcbn0gZnJvbSBcIm5leHQtc2FuaXR5XCI7XHJcbmltcG9ydCBjcmVhdGVJbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gICAgZGF0YXNldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQgfHwgXCJwcm9kdWN0aW9uXCIsXHJcbiAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lELFxyXG4gICAgYXBpVmVyc2lvbjogXCIyMDIxLTAzLTI1XCIsXHJcbiAgICB1c2VDZG46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2FuaXR5Q2xpZW50ID0gY3JlYXRlQ2xpZW50KGNvbmZpZyk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVybEZvciA9IChzb3VyY2UpID0+IGNyZWF0ZUltYWdlVXJsQnVpbGRlcihjb25maWcpLmltYWdlKHNvdXJjZSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ3VycmVudFVzZXIgPSBjcmVhdGVDdXJyZW50VXNlckhvb2soY29uZmlnKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9