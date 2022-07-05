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


var _jsxFileName = "C:\\Users\\tarun\\newportfolio\\pages\\Blog.tsx",
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
    }, 3000);
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
          className: "text-7xl font-bold text-green-500",
          children: text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "text-7xl font-bold",
          children: "Blogs for everyone"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container mx-auto flex px-5 py-24 md:flex-row flex-col items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: "sm:text-4xl text-3xl mb-4 font-bold line-clamp-2",
              children: posts[0].title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "mb-8 leading-relaxed line-clamp-4",
              children: posts[0].description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex justify-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg bg-green-500",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "/post/".concat(posts[0].slug.current),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "text-white ",
                    children: "Read More"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 21
                  }, this)
                }, posts[0]._id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "lg:max-w-lg lg:w-full md:w-0 sm:w-0 xs:w-0 w-5/6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "w-6/8 object-cover object-center rounded",
              alt: "hero",
              src: (0,_sanity__WEBPACK_IMPORTED_MODULE_3__.urlFor)(posts[0].mainImage).url()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
        className: "mb-6 "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-4xl font-bold font-sans mx-6",
        children: "Latest Posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6",
        children: posts.map(function (post) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/post/".concat(post.slug.current),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "relative border-rounded-lg rounded group cursor-pointer overflow-hidden shadow-xl",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: "h-60 w-full object-cover group-hover:scale-105 transition-transform duration-400 ease-in-out",
                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_3__.urlFor)(post.mainImage).url(),
                alt: post.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex justify-between p-5 bg-white h-full",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "w-72 text-justify h-40",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    className: "text-xl font-bold capitalize line-clamp-2 text-black",
                    children: post.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    className: "text-sm text-black line-clamp-3",
                    children: post.description
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "absolute bottom-5",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "text-xs text-white bg-green-500 p-2 rounded-full",
                    children: post.author.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "absolute right-5 bottom-5",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "text-xs text-gray-500",
                    children: "3 min read"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  className: "h-10 w-10 rounded-full",
                  src: (0,_sanity__WEBPACK_IMPORTED_MODULE_3__.urlFor)(post.author.image).url(),
                  alt: post.author.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this)
          }, post._id, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQmxvZy50c3giXSwibmFtZXMiOlsiQmxvZyIsInBvc3RzIiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsImN1c3RvbVRleHQiLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiaW5kZXhPZiIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNsdWciLCJjdXJyZW50IiwiX2lkIiwidXJsRm9yIiwibWFpbkltYWdlIiwidXJsIiwibWFwIiwicG9zdCIsImF1dGhvciIsIm5hbWUiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQU9lLFNBQVNBLElBQVQsT0FBZ0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFoQkMsS0FBZ0IsUUFBaEJBLEtBQWdCOztBQUU3QztBQUY2QyxrQkFHckJDLCtDQUFRLENBQUMsRUFBRCxDQUhhO0FBQUEsTUFHdENDLElBSHNDO0FBQUEsTUFHaENDLE9BSGdDOztBQUk3QyxNQUFNQyxVQUFVLEdBQUcsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixRQUFuQixDQUFuQjtBQUdBQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQ2pDSixhQUFPLENBQUNDLFVBQVUsQ0FBQ0ksT0FBWCxDQUFtQk4sSUFBbkIsTUFBNkJFLFVBQVUsQ0FBQ0ssTUFBWCxHQUFvQixDQUFqRCxHQUFxREwsVUFBVSxDQUFDLENBQUQsQ0FBL0QsR0FBcUVBLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDSSxPQUFYLENBQW1CTixJQUFuQixJQUEyQixDQUE1QixDQUFoRixDQUFQO0FBQ0QsS0FGMkIsRUFFekIsSUFGeUIsQ0FBNUI7QUFHQSxXQUFPO0FBQUEsYUFBTVEsYUFBYSxDQUFDSixRQUFELENBQW5CO0FB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aWMvd2VicGFjay9wYWdlcy9CbG9nLjM4MDJmYjExYjNmYzVjODc2NDRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHNhbml0eUNsaWVudCwgdXJsRm9yIH0gZnJvbSBcIi4uL3Nhbml0eVwiO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vdHlwaW5ncyc7XHJcbmltcG9ydCBDb250YWluZXJCbG9jayBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJCbG9ja1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBwb3N0czogW1Bvc3RdO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZyh7IHBvc3RzIH06IFByb3BzKSB7XHJcblxyXG4gIC8vY2hhbmdlIHRleHQgZXZlcnkgMyBzZWNvbmRzXHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgY3VzdG9tVGV4dCA9IFtcIlRlY2hcIiwgXCJDb2RpbmdcIiwgXCJEZXNpZ25cIl1cclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0VGV4dChjdXN0b21UZXh0LmluZGV4T2YodGV4dCkgPT09IGN1c3RvbVRleHQubGVuZ3RoIC0gMSA/IGN1c3RvbVRleHRbMF0gOiBjdXN0b21UZXh0W2N1c3RvbVRleHQuaW5kZXhPZih0ZXh0KSArIDFdKTtcclxuICAgIH0sIDMwMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFt0ZXh0XSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHBvc3RzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lckJsb2NrIHRpdGxlPVwiQmxvZ3MgLSBUYXJ1biBTaW5naFwiPlxyXG5cclxuICAgICAgey8qIEhlYWRlciBTZWN0aW9uICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0b1wiPlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBiZy15ZWxsb3ctMzAwIGJvcmRlci15IGJvcmRlci1ibGFjayBweS0xMCBsZzpweS01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTEwIHNwYWNlLXktNVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgbWF4LXcteGwgZm9udC1zZXJpZlwiPkdldCB5b3Vyc2VsZiBidXN5IHdpdGggVGVjaCBBcnRpY2xlcyA8L2gxPlxyXG4gICAgICAgICAgICA8aDI+SW50cm9kdWNlZCBieSBhIFRlY2huaWNhbCBXcml0ZXIuPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIvZmF2aWNvbi5pY29cIlxyXG4gICAgICAgICAgICBhbHQ9XCJibG9nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmlubGluZS1mbGV4IGgtMzIgbGc6aC1mdWxsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTRcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTd4bCBmb250LWJvbGQgdGV4dC1ncmVlbi01MDBcIj57dGV4dH08L2gxPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtN3hsIGZvbnQtYm9sZFwiPkJsb2dzIGZvciBldmVyeW9uZTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBweC01IHB5LTI0IG1kOmZsZXgtcm93IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmZsZXgtZ3JvdyBtZDp3LTEvMiBsZzpwci0yNCBtZDpwci0xNiBmbGV4IGZsZXgtY29sIG1kOml0ZW1zLXN0YXJ0IG1kOnRleHQtbGVmdCBtYi0xNiBtZDptYi0wIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzbTp0ZXh0LTR4bCB0ZXh0LTN4bCBtYi00IGZvbnQtYm9sZCBsaW5lLWNsYW1wLTJcIj57cG9zdHNbMF0udGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04IGxlYWRpbmctcmVsYXhlZCBsaW5lLWNsYW1wLTRcIj57cG9zdHNbMF0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCB0ZXh0LXdoaXRlIGJvcmRlci0wIHB5LTIgcHgtNiBmb2N1czpvdXRsaW5lLW5vbmUgcm91bmRlZCB0ZXh0LWxnIGJnLWdyZWVuLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBrZXk9e3Bvc3RzWzBdLl9pZH0gaHJlZj17YC9wb3N0LyR7cG9zdHNbMF0uc2x1Zy5jdXJyZW50fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgXCI+UmVhZCBNb3JlPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6bWF4LXctbGcgbGc6dy1mdWxsIG1kOnctMCBzbTp3LTAgeHM6dy0wIHctNS82XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTYvOCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciByb3VuZGVkXCIgYWx0PVwiaGVyb1wiIHNyYz17dXJsRm9yKHBvc3RzWzBdLm1haW5JbWFnZSkudXJsKCkhfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibWItNiBcIiAvPlxyXG5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIGZvbnQtc2FucyBteC02XCI+TGF0ZXN0IFBvc3RzPC9oMT5cclxuXHJcbiAgICAgICAgey8qIFBvc3RzIHNlY3Rpb24gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC0zIG1kOmdhcC02IHAtMiBtZDpwLTZcIj5cclxuICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgPExpbmsga2V5PXtwb3N0Ll9pZH0gaHJlZj17YC9wb3N0LyR7cG9zdC5zbHVnLmN1cnJlbnR9YH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBib3JkZXItcm91bmRlZC1sZyByb3VuZGVkIGdyb3VwIGN1cnNvci1wb2ludGVyIG92ZXJmbG93LWhpZGRlbiBzaGFkb3cteGxcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02MCB3LWZ1bGwgb2JqZWN0LWNvdmVyIGdyb3VwLWhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi00MDAgZWFzZS1pbi1vdXRcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihwb3N0Lm1haW5JbWFnZSkudXJsKCkhfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBwLTUgYmctd2hpdGUgaC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy03MiB0ZXh0LWp1c3RpZnkgaC00MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIGNhcGl0YWxpemUgbGluZS1jbGFtcC0yIHRleHQtYmxhY2tcIj57cG9zdC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsYWNrIGxpbmUtY2xhbXAtM1wiID57cG9zdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXdoaXRlIGJnLWdyZWVuLTUwMCBwLTIgcm91bmRlZC1mdWxsXCI+e3Bvc3QuYXV0aG9yLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC01IGJvdHRvbS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+MyBtaW4gcmVhZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHJvdW5kZWQtZnVsbFwiIHNyYz17dXJsRm9yKHBvc3QuYXV0aG9yLmltYWdlKS51cmwoKSF9IGFsdD17cG9zdC5hdXRob3IubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXJCbG9jaz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwb3N0XCJde1xyXG4gICAgX2lkLFxyXG4gICAgdGl0bGUsXHJcbiAgICBzbHVnLFxyXG4gICAgYXV0aG9yIC0+IHtcclxuICAgIG5hbWUsIFxyXG4gICAgaW1hZ2VcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIG1haW5JbWFnZSxcclxuICBzbHVnXHJcbiAgfWA7XHJcblxyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3RzLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==