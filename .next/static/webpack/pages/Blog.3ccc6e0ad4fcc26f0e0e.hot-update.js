self["webpackHotUpdate_N_E"]("pages/Blog",{

/***/ "./pages/Blog.tsx":
/*!************************!*\
  !*** ./pages/Blog.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ Blog; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sanity */ "./sanity.js");
/* harmony import */ var _components_ContainerBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ContainerBlock */ "./components/ContainerBlock.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\NextJs\\simple-developer-portfolio-website\\pages\\Blog.tsx",
    _s = $RefreshSig$();





var __N_SSP = true;
function Blog(_ref) {
  _s();

  var _this = this;

  var posts = _ref.posts;

  //change text every 3 seconds
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      text = _useState[0],
      setText = _useState[1];

  var customText = ["Tech", "Coding", "Design"];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var interval = setInterval(function () {
      setText(customText.indexOf(text) === customText.length - 1 ? customText[0] : customText[customText.indexOf(text) + 1]);
    }, 5000);
    return function () {
      return clearInterval(interval);
    };
  }, [text]);
  console.log(posts);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContainerBlock__WEBPACK_IMPORTED_MODULE_4__.default, {
    title: "Blogs - Tarun Singh",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "max-w-7xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mx-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "text-7xl font-bold bg-yellow-300",
          children: text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "text-7xl font-bold",
          children: "Blogs for everyone"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-gray-600 body-font",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container mx-auto flex px-5 py-24 md:flex-row flex-col items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: "sm:text-4xl text-3xl mb-4 font-bold text-gray-900",
              children: posts[0].title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "mb-8 leading-relaxed",
              children: posts[0].description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex justify-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                style: {
                  backgroundColor: '#274672'
                },
                className: "inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "/post/".concat(posts[0].slug.current),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "text-white",
                    children: "Read More"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 21
                  }, this)
                }, posts[0]._id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "lg:max-w-lg lg:w-full md:w-1/2 xs:w-0 w-5/6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "w-6/8 object-cover object-center rounded",
              alt: "hero",
              src: (0,_sanity__WEBPACK_IMPORTED_MODULE_3__.urlFor)(posts[0].mainImage).url()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
        className: "mb-6 "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-4xl font-bold font-sans mx-6",
        children: "Latest Posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6",
        children: posts.map(function (post) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/post/".concat(post.slug.current),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "border-rounded-lg rounded group cursor-pointer overflow-hidden shadow-xl",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: "h-60 w-full object-cover group-hover:scale-105 transition-transform duration-400 ease-in-out",
                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_3__.urlFor)(post.mainImage).url(),
                alt: post.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex justify-between p-5 bg-white h-full",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "w-72 text-justify",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    className: "text-xl font-bold text-black",
                    children: post.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    className: "text-xs text-black",
                    children: [post.description, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 84,
                      columnNumber: 74
                    }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "font-bold",
                      children: ["by ", post.author.name]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 84,
                      columnNumber: 81
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  className: "h-10 w-10 rounded-full",
                  src: (0,_sanity__WEBPACK_IMPORTED_MODULE_3__.urlFor)(post.author.image).url(),
                  alt: post.author.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, _this)
          }, post._id, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_s(Blog, "mMfSPvg3kjJBAgiHJD0l85bq0UA=");

_c = Blog;

var _c;

$RefreshReg$(_c, "Blog");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQmxvZy50c3giXSwibmFtZXMiOlsiQmxvZyIsInBvc3RzIiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsImN1c3RvbVRleHQiLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiaW5kZXhPZiIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImJhY2tncm91bmRDb2xvciIsInNsdWciLCJjdXJyZW50IiwiX2lkIiwidXJsRm9yIiwibWFpbkltYWdlIiwidXJsIiwibWFwIiwicG9zdCIsImF1dGhvciIsIm5hbWUiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQU9lLFNBQVNBLElBQVQsT0FBZ0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFoQkMsS0FBZ0IsUUFBaEJBLEtBQWdCOztBQUU3QztBQUY2QyxrQkFHckJDLCtDQUFRLENBQUMsRUFBRCxDQUhhO0FBQUEsTUFHdENDLElBSHNDO0FBQUEsTUFHaENDLE9BSGdDOztBQUk3QyxNQUFNQyxVQUFVLEdBQUcsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixRQUFuQixDQUFuQjtBQUNBQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQ2pDSixhQUFPLENBQUNDLFVBQVUsQ0FBQ0ksT0FBWCxDQUFtQk4sSUFBbkIsTUFBNkJFLFVBQVUsQ0FBQ0ssTUFBWCxHQUFvQixDQUFqRCxHQUFxREwsVUFBVSxDQUFDLENBQUQsQ0FBL0QsR0FBcUVBLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDSSxPQUFYLENBQW1CTixJQUFuQixJQUEyQixDQUE1QixDQUFoRixDQUFQO0FBQ0QsS0FGMkIsRUFFekIsSUFGeUIsQ0FBNUI7QUFHQSxXQUFPO0FBQUEsYUFBTVEsYUFBYSxD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dXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzYW5pdHlDbGllbnQsIHVybEZvciB9IGZyb20gXCIuLi9zYW5pdHlcIjtcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uL3R5cGluZ3MnO1xyXG5pbXBvcnQgQ29udGFpbmVyQmxvY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyQmxvY2tcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgcG9zdHM6IFtQb3N0XTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coeyBwb3N0cyB9OiBQcm9wcykge1xyXG5cclxuICAvL2NoYW5nZSB0ZXh0IGV2ZXJ5IDMgc2Vjb25kc1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGN1c3RvbVRleHQgPSBbXCJUZWNoXCIsIFwiQ29kaW5nXCIsIFwiRGVzaWduXCJdXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBzZXRUZXh0KGN1c3RvbVRleHQuaW5kZXhPZih0ZXh0KSA9PT0gY3VzdG9tVGV4dC5sZW5ndGggLSAxID8gY3VzdG9tVGV4dFswXSA6IGN1c3RvbVRleHRbY3VzdG9tVGV4dC5pbmRleE9mKHRleHQpICsgMV0pO1xyXG4gICAgfSwgNTAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW3RleHRdKTtcclxuXHJcbiAgY29uc29sZS5sb2cocG9zdHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyQmxvY2sgdGl0bGU9XCJCbG9ncyAtIFRhcnVuIFNpbmdoXCI+XHJcblxyXG4gICAgICB7LyogSGVhZGVyIFNlY3Rpb24gKi99XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvXCI+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGJnLXllbGxvdy0zMDAgYm9yZGVyLXkgYm9yZGVyLWJsYWNrIHB5LTEwIGxnOnB5LTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMTAgc3BhY2UteS01XCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBtYXgtdy14bCBmb250LXNlcmlmXCI+R2V0IHlvdXJzZWxmIGJ1c3kgd2l0aCBUZWNoIEFydGljbGVzIDwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5JbnRyb2R1Y2VkIGJ5IGEgVGVjaG5pY2FsIFdyaXRlci48L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi9mYXZpY29uLmljb1wiXHJcbiAgICAgICAgICAgIGFsdD1cImJsb2dcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6aW5saW5lLWZsZXggaC0zMiBsZzpoLWZ1bGxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtN3hsIGZvbnQtYm9sZCBiZy15ZWxsb3ctMzAwXCI+e3RleHR9PC9oMT5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTd4bCBmb250LWJvbGRcIj5CbG9ncyBmb3IgZXZlcnlvbmU8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgYm9keS1mb250XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggcHgtNSBweS0yNCBtZDpmbGV4LXJvdyBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpmbGV4LWdyb3cgbWQ6dy0xLzIgbGc6cHItMjQgbWQ6cHItMTYgZmxleCBmbGV4LWNvbCBtZDppdGVtcy1zdGFydCBtZDp0ZXh0LWxlZnQgbWItMTYgbWQ6bWItMCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic206dGV4dC00eGwgdGV4dC0zeGwgbWItNCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPntwb3N0c1swXS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTggbGVhZGluZy1yZWxheGVkXCI+eyBwb3N0c1swXS5kZXNjcmlwdGlvbiB9PC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMyNzQ2NzInfX0gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdGV4dC13aGl0ZSBib3JkZXItMCBweS0yIHB4LTYgZm9jdXM6b3V0bGluZS1ub25lIHJvdW5kZWQgdGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBrZXk9e3Bvc3RzWzBdLl9pZH0gaHJlZj17YC9wb3N0LyR7cG9zdHNbMF0uc2x1Zy5jdXJyZW50fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5SZWFkIE1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptYXgtdy1sZyBsZzp3LWZ1bGwgbWQ6dy0xLzIgeHM6dy0wIHctNS82XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTYvOCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciByb3VuZGVkXCIgYWx0PVwiaGVyb1wiIHNyYz17dXJsRm9yKHBvc3RzWzBdLm1haW5JbWFnZSkudXJsKCkhfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibWItNiBcIi8+XHJcblxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgZm9udC1zYW5zIG14LTZcIj5MYXRlc3QgUG9zdHM8L2gxPlxyXG5cclxuICAgICAgICB7LyogUG9zdHMgc2VjdGlvbiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTMgbWQ6Z2FwLTYgcC0yIG1kOnAtNlwiPlxyXG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e3Bvc3QuX2lkfSBocmVmPXtgL3Bvc3QvJHtwb3N0LnNsdWcuY3VycmVudH1gfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1yb3VuZGVkLWxnIHJvdW5kZWQgZ3JvdXAgY3Vyc29yLXBvaW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy14bFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYwIHctZnVsbCBvYmplY3QtY292ZXIgZ3JvdXAtaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTQwMCBlYXNlLWluLW91dFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKHBvc3QubWFpbkltYWdlKS51cmwoKSF9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHAtNSBiZy13aGl0ZSBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcyIHRleHQtanVzdGlmeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtYmxhY2tcIj57cG9zdC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWJsYWNrXCI+e3Bvc3QuZGVzY3JpcHRpb259IDxiciAvPiA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5ieSB7cG9zdC5hdXRob3IubmFtZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTEwIHctMTAgcm91bmRlZC1mdWxsXCIgc3JjPXt1cmxGb3IocG9zdC5hdXRob3IuaW1hZ2UpLnVybCgpIX0gYWx0PXtwb3N0LmF1dGhvci5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lckJsb2NrPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInBvc3RcIl17XHJcbiAgICBfaWQsXHJcbiAgICB0aXRsZSxcclxuICAgIHNsdWcsXHJcbiAgICBhdXRob3IgLT4ge1xyXG4gICAgbmFtZSwgXHJcbiAgICBpbWFnZVxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgbWFpbkltYWdlLFxyXG4gIHNsdWdcclxuICB9YDtcclxuXHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdHMsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9