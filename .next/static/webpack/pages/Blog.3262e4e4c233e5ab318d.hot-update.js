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

var _jsxFileName = "F:\\NextJs\\simple-developer-portfolio-website\\pages\\Blog.tsx";




var __N_SSP = true;
function Blog(_ref) {
  var _this = this;

  var posts = _ref.posts;
  console.log(posts);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContainerBlock__WEBPACK_IMPORTED_MODULE_4__.default, {
    title: "Blogs - Tarun Singh",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "max-w-7xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container mx-auto flex px-5 py-24 md:flex-row flex-col items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: "title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900",
              children: posts[0].title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "mb-8 leading-relaxed",
              children: posts[0].description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex justify-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",
                children: "Read more"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "lg:max-w-lg lg:w-full md:w-1/2 w-5/6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "w-6/8 object-cover object-center rounded",
              alt: "hero",
              src: (0,_sanity__WEBPACK_IMPORTED_MODULE_3__.urlFor)(posts[0].mainImage).url()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
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
                lineNumber: 51,
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
                    lineNumber: 58,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    className: "text-xs text-black",
                    children: [post.description, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 74
                    }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "font-bold",
                      children: ["by ", post.author.name]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 81
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  className: "h-10 w-10 rounded-full",
                  src: (0,_sanity__WEBPACK_IMPORTED_MODULE_3__.urlFor)(post.author.image).url(),
                  alt: post.author.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this)
          }, post._id, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQmxvZy50c3giXSwibmFtZXMiOlsiQmxvZyIsInBvc3RzIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ1cmxGb3IiLCJtYWluSW1hZ2UiLCJ1cmwiLCJtYXAiLCJwb3N0Iiwic2x1ZyIsImN1cnJlbnQiLCJhdXRob3IiLCJuYW1lIiwiaW1hZ2UiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFNZSxTQUFTQSxJQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBaEJDLEtBQWdCLFFBQWhCQSxLQUFnQjtBQUM3Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxzQkFDRSw4REFBQywrREFBRDtBQUFnQixTQUFLLEVBQUMscUJBQXRCO0FBQUEsMkJBSUU7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw4QkFhRTtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxxRUFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQywwSEFBZjtBQUFBLG9DQUNFO0FBQUksdUJBQVMsRUFBQyxnRUFBZDtBQUFBLHdCQUFnRkEsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRztBQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBRyx1QkFBUyxFQUFDLHNCQUFiO0FBQUEsd0JBQXNDSCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNJO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsZUFHRTtBQUFLLHVCQUFTLEVBQUMscUJBQWY7QUFBQSxxQ0FDRTtBQUFRLHlCQUFTLEVBQUMsZ0hBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFRRTtBQUFLLHFCQUFTLEVBQUMsc0NBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsMENBQWY7QUFBMEQsaUJBQUcsRUFBQyxNQUE5RDtBQUFxRSxpQkFBRyxFQUFFQywrQ0FBTSxDQUFDTCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNNLFNBQVYsQ0FBTixDQUEyQkMsR0FBM0I7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLGVBNkJFO0FBQUssaUJBQVMsRUFBQywwRUFBZjtBQUFBLGtCQUNHUCxLQUFLLENBQUNRLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsOEJBQ1QsOERBQUMsa0RBQUQ7QUFBcUIsZ0JBQUksa0JBQVdBLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxPQUFyQixDQUF6QjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQywwRUFBZjtBQUFBLHNDQUNFO0FBQ0UseUJBQVMsRUFBQyw4RkFEWjtBQUVFLG1CQUFHLEVBQUVOLCtDQUFNLENBQUNJLElBQUksQ0FBQ0gsU0FBTixDQUFOLENBQXVCQyxHQUF2QixFQUZQO0FBR0UsbUJBQUcsRUFBRUUsSUFBSSxDQUFDTjtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFNRTtBQUFLLHlCQUFTLEVBQUMsMENBQWY7QUFBQSx3Q0FDRTtBQUFLLDJCQUFTLEVBQUMsbUJBQWY7QUFBQSwwQ0FDRTtBQUFHLDZCQUFTLEVBQUMsOEJBQWI7QUFBQSw4QkFBNkNNLElBQUksQ0FBQ047QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQUcsNkJBQVMsRUFBQyxvQkFBYjtBQUFBLCtCQUFtQ00sSUFBSSxDQUFDTCxXQUF4QyxvQkFBcUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBckQsb0JBQTREO0FBQU0sK0JBQVMsRUFBQyxXQUFoQjtBQUFBLHdDQUFnQ0ssSUFBSSxDQUFDRyxNQUFMLENBQVlDLElBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUtFO0FBQUssMkJBQVMsRUFBQyx3QkFBZjtBQUF3QyxxQkFBRyxFQUFFUiwrQ0FBTSxDQUFDSSxJQUFJLENBQUNHLE1BQUwsQ0FBWUUsS0FBYixDQUFOLENBQTBCUCxHQUExQixFQUE3QztBQUErRSxxQkFBRyxFQUFFRSxJQUFJLENBQUNHLE1BQUwsQ0FBWUM7QUFBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBV0osSUFBSSxDQUFDTSxHQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURTO0FBQUEsU0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEREO0tBNUR1QmhCLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQmxvZy4zMjYyZTRlNGMyMzNlNWFiMzE4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHNhbml0eUNsaWVudCwgdXJsRm9yIH0gZnJvbSBcIi4uL3Nhbml0eVwiO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vdHlwaW5ncyc7XHJcbmltcG9ydCBDb250YWluZXJCbG9jayBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJCbG9ja1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBwb3N0czogW1Bvc3RdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKHsgcG9zdHMgfTogUHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhwb3N0cyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXJCbG9jayB0aXRsZT1cIkJsb2dzIC0gVGFydW4gU2luZ2hcIj5cclxuXHJcbiAgICAgIHsvKiBIZWFkZXIgU2VjdGlvbiAqL31cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG9cIj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYmcteWVsbG93LTMwMCBib3JkZXIteSBib3JkZXItYmxhY2sgcHktMTAgbGc6cHktNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0xMCBzcGFjZS15LTVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIG1heC13LXhsIGZvbnQtc2VyaWZcIj5HZXQgeW91cnNlbGYgYnVzeSB3aXRoIFRlY2ggQXJ0aWNsZXMgPC9oMT5cclxuICAgICAgICAgICAgPGgyPkludHJvZHVjZWQgYnkgYSBUZWNobmljYWwgV3JpdGVyLjwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiL2Zhdmljb24uaWNvXCJcclxuICAgICAgICAgICAgYWx0PVwiYmxvZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBtZDppbmxpbmUtZmxleCBoLTMyIGxnOmgtZnVsbFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBweC01IHB5LTI0IG1kOmZsZXgtcm93IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmZsZXgtZ3JvdyBtZDp3LTEvMiBsZzpwci0yNCBtZDpwci0xNiBmbGV4IGZsZXgtY29sIG1kOml0ZW1zLXN0YXJ0IG1kOnRleHQtbGVmdCBtYi0xNiBtZDptYi0wIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZS1mb250IHNtOnRleHQtNHhsIHRleHQtM3hsIG1iLTQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPntwb3N0c1swXS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTggbGVhZGluZy1yZWxheGVkXCI+eyBwb3N0c1swXS5kZXNjcmlwdGlvbiB9PC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCB0ZXh0LXdoaXRlIGJnLWluZGlnby01MDAgYm9yZGVyLTAgcHktMiBweC02IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1pbmRpZ28tNjAwIHJvdW5kZWQgdGV4dC1sZ1wiPlJlYWQgbW9yZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptYXgtdy1sZyBsZzp3LWZ1bGwgbWQ6dy0xLzIgdy01LzZcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctNi84IG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHJvdW5kZWRcIiBhbHQ9XCJoZXJvXCIgc3JjPXt1cmxGb3IocG9zdHNbMF0ubWFpbkltYWdlKS51cmwoKSF9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBQb3N0cyBzZWN0aW9uICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtMyBtZDpnYXAtNiBwLTIgbWQ6cC02XCI+XHJcbiAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGtleT17cG9zdC5faWR9IGhyZWY9e2AvcG9zdC8ke3Bvc3Quc2x1Zy5jdXJyZW50fWB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXJvdW5kZWQtbGcgcm91bmRlZCBncm91cCBjdXJzb3ItcG9pbnRlciBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXhsXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNjAgdy1mdWxsIG9iamVjdC1jb3ZlciBncm91cC1ob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNDAwIGVhc2UtaW4tb3V0XCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IocG9zdC5tYWluSW1hZ2UpLnVybCgpIX1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcC01IGJnLXdoaXRlIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNzIgdGV4dC1qdXN0aWZ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1ibGFja1wiPntwb3N0LnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtYmxhY2tcIj57cG9zdC5kZXNjcmlwdGlvbn0gPGJyIC8+IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPmJ5IHtwb3N0LmF1dGhvci5uYW1lfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtMTAgdy0xMCByb3VuZGVkLWZ1bGxcIiBzcmM9e3VybEZvcihwb3N0LmF1dGhvci5pbWFnZSkudXJsKCkhfSBhbHQ9e3Bvc3QuYXV0aG9yLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyQmxvY2s+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwicG9zdFwiXXtcclxuICAgIF9pZCxcclxuICAgIHRpdGxlLFxyXG4gICAgc2x1ZyxcclxuICAgIGF1dGhvciAtPiB7XHJcbiAgICBuYW1lLCBcclxuICAgIGltYWdlXHJcbiAgfSxcclxuICBkZXNjcmlwdGlvbixcclxuICBtYWluSW1hZ2UsXHJcbiAgc2x1Z1xyXG4gIH1gO1xyXG5cclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0cyxcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=