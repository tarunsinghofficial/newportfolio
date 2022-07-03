self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./pages/post/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/post/[slug].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var F_NextJs_simple_developer_portfolio_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ContainerBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ContainerBlock */ "./components/ContainerBlock.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sanity */ "./sanity.js");
/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-portable-text */ "./node_modules/react-portable-text/dist/index.js");
/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_portable_text__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "F:\\NextJs\\simple-developer-portfolio-website\\pages\\post\\[slug].tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_NextJs_simple_developer_portfolio_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 //using react-hook-form



function post(_ref) {
  _s();

  var _this = this;

  var post = _ref.post;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      submitted = _useState[0],
      setSubmitted = _useState[1];

  console.log(post); //connecting forms

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;

  var onSubmit = function onSubmit(data) {
    /* console.log(data); */
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(function () {
      console.log('Comment created');
      setSubmitted(true);
    })["catch"](function (err) {
      console.log(err);
      setSubmitted(false);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ContainerBlock__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "max-w-7xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("article", {
        className: "max-w-4xl mx-auto p-5",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
          className: "text-5xl text-center font-bold mt-10 mb-8 font-sans",
          children: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          className: "text-center uppercase text-gray-500 my-5",
          children: [new Date(post._createdAt).toLocaleString(), "- 3 min read"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          className: "object-cover flex align-items-center mb-8",
          src: (0,_sanity__WEBPACK_IMPORTED_MODULE_4__.urlFor)(post.mainImage).url(),
          alt: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
          className: "text-xl font-light text-gray-500 mb-2 ",
          children: post.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "flex items-center space-x-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: (0,_sanity__WEBPACK_IMPORTED_MODULE_4__.urlFor)(post.author.image).url(),
            className: "h-12 w-12 rounded-full mr-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "font-extrtalight text-sm",
            children: ["Blog post by", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              className: "text-green-600",
              children: post.author.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this), " - Published at ", new Date(post._createdAt).toLocaleString()]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "text-justify",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_portable_text__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: "",
            dataset: "production",
            projectId: "so3yjx14",
            content: post.body,
            serializers: {
              h1: function h1(props) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", _objectSpread({
                  className: "text-2xl font-bold my-5"
                }, props), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 19
                }, _this);
              },
              h2: function h2(props) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", _objectSpread({
                  className: "text-xl font-bold my-5"
                }, props), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, _this);
              },
              li: function li(_ref2) {
                var children = _ref2.children;
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  className: "ml-4 list-disc"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 44
                }, _this);
              },
              link: function link(_ref3) {
                var href = _ref3.href,
                    children = _ref3.children;
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                  href: href,
                  className: "text-blue-500",
                  children: children
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, _this);
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("hr", {
        className: "max-w-lg my-5 mx-auto border-green-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), submitted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "flex flex-col p-5 my-10 bg-green-500 text-white max-w-2xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          className: "text-3xl font-bold",
          children: "Thanks for your comment!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: "Once your comment is approved, it will appear below."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
        onSubmit: handleSubmit(onSubmit),
        action: "",
        className: "flex flex-col p-5 max-w-2xl mx-auto mb-10",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          className: "text-sm text-green-500",
          children: "Enjoyed the article?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
          className: "text-3xl font-bold",
          children: "leave us a comment below!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("hr", {
          className: "py-3 mt-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread(_objectSpread({}, register("_id")), {}, {
          type: "hidden",
          name: "_id",
          value: post._id
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          className: "block md-5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: "text-gray-700",
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread(_objectSpread({}, register("name", {
            required: true
          })), {}, {
            className: "shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-green-500 outline-none focus:ring",
            placeholder: "John Bay",
            type: "text"
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          className: "block md-5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread(_objectSpread({}, register("email", {
            required: true
          })), {}, {
            className: "shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-green-500 outline-none focus:ring",
            placeholder: "John Bay",
            type: "email"
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          className: "block md-5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            children: "Comment"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", _objectSpread(_objectSpread({}, register("comment", {
            required: true
          })), {}, {
            className: "shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-green-500 outline-none focus:ring",
            placeholder: "John Bay",
            rows: 8
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "flex flex-col p-5",
          children: [errors.name && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: "text-red-500",
            children: "-The Name Field is required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 17
          }, this), errors.comment && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: "text-red-500",
            children: "-The Comment Field is required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 17
          }, this), errors.email && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: "text-red-500",
            children: "-The Email Field is required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "submit",
          className: "shadow bg-green-500 hover:bg-green-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-green-500 shadow space-y-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          className: "text-4xl",
          children: "Comments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("hr", {
          className: "pb-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, this), post.comment.map(function (comment) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                className: "text-green-600",
                children: [comment.name, ": "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 17
              }, _this), comment.comment]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, _this)
          }, comment._id, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

_s(post, "DiZJe3xKVmV3H9qVa+XmlnP70ss=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm];
});

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (post);
/* const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author-> {
            name,
            image,
        },
        description,
        mainImage,
        slug,
        body
    }`; */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10udHN4Il0sIm5hbWVzIjpbInBvc3QiLCJ1c2VTdGF0ZSIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJvblN1Ym1pdCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsImVyciIsInRpdGxlIiwiRGF0ZSIsIl9jcmVhdGVkQXQiLCJ0b0xvY2FsZVN0cmluZyIsInVybEZvciIsIm1haW5JbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIiwiYXV0aG9yIiwiaW1hZ2UiLCJuYW1lIiwicHJvY2VzcyIsImgxIiwicHJvcHMiLCJoMiIsImxpIiwiY2hpbGRyZW4iLCJsaW5rIiwiaHJlZiIsIl9pZCIsInJlcXVpcmVkIiwiY29tbWVudCIsImVtYWlsIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBSUE7O0FBQ0E7O0FBYUEsU0FBU0EsSUFBVCxPQUErQjtBQUFBOztBQUFBOztBQUFBLE1BQWZBLElBQWUsUUFBZkEsSUFBZTs7QUFBQSxrQkFFS0MsK0NBQVEsQ0FBQyxLQUFELENBRmI7QUFBQSxNQUV0QkMsU0FGc0I7QUFBQSxNQUVYQyxZQUZXOztBQUk3QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQVosRUFKNkIsQ0FNN0I7O0FBTjZCLGlCQVd6Qk0sd0RBQU8sRUFYa0I7QUFBQSxNQVEzQkMsUUFSMkIsWUFRM0JBLFFBUjJCO0FBQUEsTUFTM0JDLFlBVDJCLFlBUzNCQSxZQVQyQjtBQUFBLE1BVWRDLE1BVmMsWUFVM0JDLFNBVjJCLENBVWRELE1BVmM7O0FBYTdCLE1BQU1FLFFBQW1DLEdBQUcsU0FBdENBLFFBQXNDLENBQUNDLElB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K0pOLCtEQUFlTixJQUFmO0FBK0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW3NsdWddLjZhNDRiZjBkN2NkYWFkZDkzZGM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyQmxvY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyQmxvY2tcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHNhbml0eUNsaWVudCwgdXJsRm9yIH0gZnJvbSBcIi4uLy4uL3Nhbml0eVwiO1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi4vLi4vdHlwaW5nc1wiO1xyXG5pbXBvcnQgUG9ydGFibGVUZXh0IGZyb20gXCJyZWFjdC1wb3J0YWJsZS10ZXh0XCI7XHJcbi8vdXNpbmcgcmVhY3QtaG9vay1mb3JtXHJcbmltcG9ydCB7IHVzZUZvcm0sIFN1Ym1pdEhhbmRsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcblxyXG5pbnRlcmZhY2UgSUZvcm1JbnB1dCB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgY29tbWVudDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHBvc3Q6IFBvc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3QoeyBwb3N0IH06IFByb3BzKSB7XHJcblxyXG4gIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHBvc3QpO1xyXG5cclxuICAvL2Nvbm5lY3RpbmcgZm9ybXNcclxuICBjb25zdCB7XHJcbiAgICByZWdpc3RlcixcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcclxuICB9ID0gdXNlRm9ybTxJRm9ybUlucHV0PigpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdDogU3VibWl0SGFuZGxlcjxJRm9ybUlucHV0PiA9IChkYXRhKSA9PiB7XHJcbiAgICAvKiBjb25zb2xlLmxvZyhkYXRhKTsgKi9cclxuICAgIGZldGNoKCcvYXBpL2NyZWF0ZUNvbW1lbnQnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnQ29tbWVudCBjcmVhdGVkJyk7XHJcbiAgICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgc2V0U3VibWl0dGVkKGZhbHNlKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lckJsb2NrPlxyXG4gICAgICB7LyogSGVhZGVyIFNlY3Rpb24gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG9cIj5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBwLTVcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCB0ZXh0LWNlbnRlciBmb250LWJvbGQgbXQtMTAgbWItOCBmb250LXNhbnNcIj57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIG15LTVcIj57bmV3IERhdGUocG9zdC5fY3JlYXRlZEF0KS50b0xvY2FsZVN0cmluZygpfS0gMyBtaW4gcmVhZDwvaDM+ICAgXHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi04XCJcclxuICAgICAgICAgICAgc3JjPXt1cmxGb3IocG9zdC5tYWluSW1hZ2UpLnVybCgpIX1cclxuICAgICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbGlnaHQgdGV4dC1ncmF5LTUwMCBtYi0yIFwiPlxyXG4gICAgICAgICAgICB7cG9zdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXt1cmxGb3IocG9zdC5hdXRob3IuaW1hZ2UpLnVybCgpIX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHctMTIgcm91bmRlZC1mdWxsIG1yLTJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWV4dHJ0YWxpZ2h0IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBCbG9nIHBvc3QgYnl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi02MDBcIj57cG9zdC5hdXRob3IubmFtZX08L3NwYW4+IC1cclxuICAgICAgICAgICAgICBQdWJsaXNoZWQgYXQge25ldyBEYXRlKHBvc3QuX2NyZWF0ZWRBdCkudG9Mb2NhbGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtanVzdGlmeVwiPlxyXG4gICAgICAgICAgICA8UG9ydGFibGVUZXh0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICBkYXRhc2V0PXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCF9XHJcbiAgICAgICAgICAgICAgcHJvamVjdElkPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCF9XHJcbiAgICAgICAgICAgICAgY29udGVudD17cG9zdC5ib2R5fVxyXG4gICAgICAgICAgICAgIHNlcmlhbGl6ZXJzPXt7XHJcbiAgICAgICAgICAgICAgICBoMTogKHByb3BzOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBteS01XCIgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGgyOiAocHJvcHM6IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbXktNVwiIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBsaTogKHsgY2hpbGRyZW4gfTogYW55KSA9PiA8bGkgY2xhc3NOYW1lPVwibWwtNCBsaXN0LWRpc2NcIj48L2xpPixcclxuICAgICAgICAgICAgICAgIGxpbms6ICh7IGhyZWYsIGNoaWxkcmVuIH06IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtocmVmfSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcblxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtYXgtdy1sZyBteS01IG14LWF1dG8gYm9yZGVyLWdyZWVuLTUwMFwiIC8+XHJcblxyXG4gICAgICAgIHsvKiBDb21tZW50cyBzZWN0aW9uICovfVxyXG5cclxuICAgICAgICB7c3VibWl0dGVkID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtNSBteS0xMCBiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBtYXgtdy0yeGwgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+VGhhbmtzIGZvciB5b3VyIGNvbW1lbnQhPC9oMz5cclxuICAgICAgICAgICAgPHA+T25jZSB5b3VyIGNvbW1lbnQgaXMgYXBwcm92ZWQsIGl0IHdpbGwgYXBwZWFyIGJlbG93LjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gYWN0aW9uPVwiXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTUgbWF4LXctMnhsIG14LWF1dG8gbWItMTBcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmVlbi01MDBcIj5FbmpveWVkIHRoZSBhcnRpY2xlPzwvaDM+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5sZWF2ZSB1cyBhIGNvbW1lbnQgYmVsb3chPC9oND5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInB5LTMgbXQtMlwiIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJfaWRcIil9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIl9pZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1kLTVcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+TmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcIm5hbWVcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBib3JkZXIgcm91bmRlZCBweS0yIHB4LTMgZm9ybS1pbnB1dCBtdC0xIGJsb2NrIHctZnVsbCByaW5nLWdyZWVuLTUwMCBvdXRsaW5lLW5vbmUgZm9jdXM6cmluZ1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkpvaG4gQmF5XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWQtNVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkVtYWlsPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBib3JkZXIgcm91bmRlZCBweS0yIHB4LTMgZm9ybS1pbnB1dCBtdC0xIGJsb2NrIHctZnVsbCByaW5nLWdyZWVuLTUwMCBvdXRsaW5lLW5vbmUgZm9jdXM6cmluZ1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkpvaG4gQmF5XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1kLTVcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5Db21tZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiY29tbWVudFwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGJvcmRlciByb3VuZGVkIHB5LTIgcHgtMyBmb3JtLXRleHRhcmVhIG10LTEgYmxvY2sgdy1mdWxsIHJpbmctZ3JlZW4tNTAwIG91dGxpbmUtbm9uZSBmb2N1czpyaW5nXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSm9obiBCYXlcIlxyXG4gICAgICAgICAgICAgICAgcm93cz17OH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgey8qIEVycm9ycyB3aWxsIHJldHVybiBoZXJlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC01XCI+XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5uYW1lICYmIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPi1UaGUgTmFtZSBGaWVsZCBpcyByZXF1aXJlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtlcnJvcnMuY29tbWVudCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgLVRoZSBDb21tZW50IEZpZWxkIGlzIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPi1UaGUgRW1haWwgRmllbGQgaXMgcmVxdWlyZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTMwMCBmb2N1czpzaGFkb3ctb3V0bGluZSBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHsvKiBDb21tZW50IHNlY3Rpb24gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtMTAgbXktMTAgbWF4LXctMnhsIG14LWF1dG8gc2hhZG93LWdyZWVuLTUwMCBzaGFkb3cgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC00eGxcIj5Db21tZW50czwvaDM+XHJcbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwicGItMlwiIC8+XHJcblxyXG4gICAgICAgICAge3Bvc3QuY29tbWVudC5tYXAoKGNvbW1lbnQpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2NvbW1lbnQuX2lkfT5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNjAwXCI+e2NvbW1lbnQubmFtZX06IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtjb21tZW50LmNvbW1lbnR9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXJCbG9jaz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwb3N0XCJde1xyXG4gICAgICAgIF9pZCxcclxuICAgICAgICBzbHVnIHtcclxuICAgICAgICAgICAgY3VycmVudFxyXG4gICAgICAgIH1cclxuICAgIH1gO1xyXG5cclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSk7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0OiBQb3N0KSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHNsdWc6IHBvc3Quc2x1Zy5jdXJyZW50LFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBcImJsb2NraW5nXCIsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcclxuICAgICAgICBfaWQsXHJcbiAgICAgICAgX2NyZWF0ZWRBdCxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBhdXRob3ItPiB7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGltYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2NvbW1lbnQnOiAgKltcclxuICAgICAgICAgIF90eXBlID09IFwiY29tbWVudFwiICYmIFxyXG4gICAgICAgICAgcG9zdC5fcmVmID09IF4uX2lkICYmXHJcbiAgICAgICAgICBhcHByb3ZlZCA9PSB0cnVlXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBtYWluSW1hZ2UsXHJcbiAgICAgICAgc2x1ZyxcclxuICAgICAgICBib2R5XHJcbiAgICB9YDtcclxuXHJcbiAgY29uc3QgcG9zdCA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSwge1xyXG4gICAgc2x1ZzogcGFyYW1zLnNsdWcsXHJcbiAgfSk7XHJcblxyXG4gIGlmICghcG9zdCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICB9O1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdCxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiA2MCwgLy9hZnRlciA2MCBzZWNvbmRzLCBpdCByZXZhbGlkYXRlXHJcbiAgfTtcclxufTtcclxuXHJcblxyXG5cclxuLyogY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xyXG4gICAgICAgIF9pZCxcclxuICAgICAgICBfY3JlYXRlZEF0LFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGF1dGhvci0+IHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBtYWluSW1hZ2UsXHJcbiAgICAgICAgc2x1ZyxcclxuICAgICAgICBib2R5XHJcbiAgICB9YDsgKi8iXSwic291cmNlUm9vdCI6IiJ9