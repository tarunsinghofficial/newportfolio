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

  var customText = ["Tech", "Coding"];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var interval = setInterval(function () {
      setText(customText[Math.floor(Math.random() * customText.length)]);
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
          className: "text-7xl font-bold",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQmxvZy50c3giXSwibmFtZXMiOlsiQmxvZyIsInBvc3RzIiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsImN1c3RvbVRleHQiLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwic2x1ZyIsImN1cnJlbnQiLCJfaWQiLCJ1cmxGb3IiLCJtYWluSW1hZ2UiLCJ1cmwiLCJtYXAiLCJwb3N0IiwiYXV0aG9yIiwibmFtZSIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBT2UsU0FBU0EsSUFBVCxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQWhCQyxLQUFnQixRQUFoQkEsS0FBZ0I7O0FBRTdDO0FBRjZDLGtCQUdyQkMsK0NBQVEsQ0FBQyxFQUFELENBSGE7QUFBQSxNQUd0Q0MsSUFIc0M7QUFBQSxNQUdoQ0MsT0FIZ0M7O0FBSTdDLE1BQU1DLFVBQVUsR0FBRyxDQUFDLE1BQUQsRUFBUyxRQUFULENBQW5CO0FBQ0FDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVEsR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDakNKLGFBQU8sQ0FBQ0MsVUFBVSxDQUFFSSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCTixVQUFVLENBQUNPLE1BQXRDLENBQUYsQ0FBWCxDQUFQO0FBQ0QsS0FGMkIsRUFFekIsSUFGeUIsQ0FBNUI7QUFHQSxXQUFPO0FBQUEsYUFBTUMsYUFBYSxDQUFDTixRQUFELENBQW5CO0FBQUEsS0FBUDtBQUNELEdBTFEsRUFLTixDQUFDSixJQUFELENBTE0sQ0FBVDtBQU9BVyxTQUFP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UyxFQUFDLG1CQUFmO0FBQUEsMENBQ0U7QUFBRyw2QkFBUyxFQUFDLDhCQUFiO0FBQUEsOEJBQTZDVSxJQUFJLENBQUNWO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFFRTtBQUFHLDZCQUFTLEVBQUMsb0JBQWI7QUFBQSwrQkFBbUNVLElBQUksQ0FBQ1QsV0FBeEMsb0JBQXFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQXJELG9CQUE0RDtBQUFNLCtCQUFTLEVBQUMsV0FBaEI7QUFBQSx3Q0FBZ0NTLElBQUksQ0FBQ0MsTUFBTCxDQUFZQyxJQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFLRTtBQUFLLDJCQUFTLEVBQUMsd0JBQWY7QUFBd0MscUJBQUcsRUFBRU4sK0NBQU0sQ0FBQ0ksSUFBSSxDQUFDQyxNQUFMLENBQVlFLEtBQWIsQ0FBTixDQUEwQkwsR0FBMUIsRUFBN0M7QUFBK0UscUJBQUcsRUFBRUUsSUFBSSxDQUFDQyxNQUFMLENBQVlDO0FBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQVdGLElBQUksQ0FBQ0wsR0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUztBQUFBLFNBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVFRDs7R0FwRnVCckIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9CbG9nLjBjMzY4OTc1Nzg5YzA1ZTdlNjU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHNhbml0eUNsaWVudCwgdXJsRm9yIH0gZnJvbSBcIi4uL3Nhbml0eVwiO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vdHlwaW5ncyc7XHJcbmltcG9ydCBDb250YWluZXJCbG9jayBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJCbG9ja1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBwb3N0czogW1Bvc3RdO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZyh7IHBvc3RzIH06IFByb3BzKSB7XHJcblxyXG4gIC8vY2hhbmdlIHRleHQgZXZlcnkgMyBzZWNvbmRzXHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgY3VzdG9tVGV4dCA9IFtcIlRlY2hcIiwgXCJDb2RpbmdcIiwgXVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0VGV4dChjdXN0b21UZXh0WyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXN0b21UZXh0Lmxlbmd0aCkgXSk7XHJcbiAgICB9LCAzMDAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbdGV4dF0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhwb3N0cyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXJCbG9jayB0aXRsZT1cIkJsb2dzIC0gVGFydW4gU2luZ2hcIj5cclxuXHJcbiAgICAgIHsvKiBIZWFkZXIgU2VjdGlvbiAqL31cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG9cIj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYmcteWVsbG93LTMwMCBib3JkZXIteSBib3JkZXItYmxhY2sgcHktMTAgbGc6cHktNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0xMCBzcGFjZS15LTVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIG1heC13LXhsIGZvbnQtc2VyaWZcIj5HZXQgeW91cnNlbGYgYnVzeSB3aXRoIFRlY2ggQXJ0aWNsZXMgPC9oMT5cclxuICAgICAgICAgICAgPGgyPkludHJvZHVjZWQgYnkgYSBUZWNobmljYWwgV3JpdGVyLjwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiL2Zhdmljb24uaWNvXCJcclxuICAgICAgICAgICAgYWx0PVwiYmxvZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBtZDppbmxpbmUtZmxleCBoLTMyIGxnOmgtZnVsbFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC03eGwgZm9udC1ib2xkXCI+e3RleHR9PC9oMT5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTd4bCBmb250LWJvbGRcIj5CbG9ncyBmb3IgZXZlcnlvbmU8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgYm9keS1mb250XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggcHgtNSBweS0yNCBtZDpmbGV4LXJvdyBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpmbGV4LWdyb3cgbWQ6dy0xLzIgbGc6cHItMjQgbWQ6cHItMTYgZmxleCBmbGV4LWNvbCBtZDppdGVtcy1zdGFydCBtZDp0ZXh0LWxlZnQgbWItMTYgbWQ6bWItMCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic206dGV4dC00eGwgdGV4dC0zeGwgbWItNCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPntwb3N0c1swXS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTggbGVhZGluZy1yZWxheGVkXCI+eyBwb3N0c1swXS5kZXNjcmlwdGlvbiB9PC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMyNzQ2NzInfX0gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdGV4dC13aGl0ZSBib3JkZXItMCBweS0yIHB4LTYgZm9jdXM6b3V0bGluZS1ub25lIHJvdW5kZWQgdGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBrZXk9e3Bvc3RzWzBdLl9pZH0gaHJlZj17YC9wb3N0LyR7cG9zdHNbMF0uc2x1Zy5jdXJyZW50fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5SZWFkIE1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptYXgtdy1sZyBsZzp3LWZ1bGwgbWQ6dy0xLzIgeHM6dy0wIHctNS82XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTYvOCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciByb3VuZGVkXCIgYWx0PVwiaGVyb1wiIHNyYz17dXJsRm9yKHBvc3RzWzBdLm1haW5JbWFnZSkudXJsKCkhfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibWItNiBcIi8+XHJcblxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgZm9udC1zYW5zIG14LTZcIj5MYXRlc3QgUG9zdHM8L2gxPlxyXG5cclxuICAgICAgICB7LyogUG9zdHMgc2VjdGlvbiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTMgbWQ6Z2FwLTYgcC0yIG1kOnAtNlwiPlxyXG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e3Bvc3QuX2lkfSBocmVmPXtgL3Bvc3QvJHtwb3N0LnNsdWcuY3VycmVudH1gfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1yb3VuZGVkLWxnIHJvdW5kZWQgZ3JvdXAgY3Vyc29yLXBvaW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy14bFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYwIHctZnVsbCBvYmplY3QtY292ZXIgZ3JvdXAtaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTQwMCBlYXNlLWluLW91dFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKHBvc3QubWFpbkltYWdlKS51cmwoKSF9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHAtNSBiZy13aGl0ZSBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcyIHRleHQtanVzdGlmeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtYmxhY2tcIj57cG9zdC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWJsYWNrXCI+e3Bvc3QuZGVzY3JpcHRpb259IDxiciAvPiA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5ieSB7cG9zdC5hdXRob3IubmFtZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTEwIHctMTAgcm91bmRlZC1mdWxsXCIgc3JjPXt1cmxGb3IocG9zdC5hdXRob3IuaW1hZ2UpLnVybCgpIX0gYWx0PXtwb3N0LmF1dGhvci5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lckJsb2NrPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInBvc3RcIl17XHJcbiAgICBfaWQsXHJcbiAgICB0aXRsZSxcclxuICAgIHNsdWcsXHJcbiAgICBhdXRob3IgLT4ge1xyXG4gICAgbmFtZSwgXHJcbiAgICBpbWFnZVxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgbWFpbkltYWdlLFxyXG4gIHNsdWdcclxuICB9YDtcclxuXHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdHMsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9