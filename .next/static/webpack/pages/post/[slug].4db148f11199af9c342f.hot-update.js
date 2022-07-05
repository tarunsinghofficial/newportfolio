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
/* harmony import */ var C_Users_tarun_newportfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ContainerBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ContainerBlock */ "./components/ContainerBlock.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sanity */ "./sanity.js");
/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-portable-text */ "./node_modules/react-portable-text/dist/index.js");
/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_portable_text__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _constants_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/data */ "./constants/data.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\tarun\\newportfolio\\pages\\post\\[slug].tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_tarun_newportfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 //using react-hook-form

 // import the icons you need





function post(_ref) {
  _s();

  var _this = this;

  var post = _ref.post;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      submitted = _useState[0],
      setSubmitted = _useState[1];

  console.log(post); //connecting forms

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)(),
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
    title: post.title,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "max-w-7xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "static w-12 sticky top-5 flex justify-center align-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          className: "bg-blue-100 p-2 flex flex-col space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: _constants_data__WEBPACK_IMPORTED_MODULE_7__.default.socialLinks.linkedin,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              className: "bg-blue-500 rounded-2 p-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faLinkedin,
                size: "2x",
                color: "white"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 94
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 52
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 12
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: _constants_data__WEBPACK_IMPORTED_MODULE_7__.default.socialLinks.github,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              className: "bg-black rounded-2 p-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faGithub,
                size: "2x",
                color: "white"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 89
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 50
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 12
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: _constants_data__WEBPACK_IMPORTED_MODULE_7__.default.socialLinks.twitter,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              className: "bg-blue-600 rounded-2 p-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faTwitter,
                size: "2x",
                color: "white"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 93
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 51
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 12
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: _constants_data__WEBPACK_IMPORTED_MODULE_7__.default.socialLinks.instagram,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              className: "bg-red-600 rounded-2 p-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faInstagram,
                size: "2x",
                color: "white"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 94
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 53
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 12
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("article", {
        className: "max-w-4xl mx-auto -mt-60 p-5",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
          className: "text-5xl text-center font-bold mb-8 font-sans",
          children: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          className: "text-center uppercase text-gray-500 my-5",
          children: [new Date(post._createdAt).toLocaleDateString(), " - 3 min read"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          className: "w-full h-96 object-cover flex align-items-center mb-8",
          src: (0,_sanity__WEBPACK_IMPORTED_MODULE_4__.urlFor)(post.mainImage).url(),
          alt: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
          className: "text-xl font-light text-gray-500 mb-2 ",
          children: post.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "flex items-center space-x-2 my-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: (0,_sanity__WEBPACK_IMPORTED_MODULE_4__.urlFor)(post.author.image).url(),
            className: "h-12 w-12 rounded-full mr-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "font-extrtalight text-sm",
            children: ["Blog post by", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              className: "text-green-600",
              children: post.author.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this), " - Published at ", new Date(post._createdAt).toLocaleString()]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
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
                  lineNumber: 98,
                  columnNumber: 19
                }, _this);
              },
              h2: function h2(props) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", _objectSpread({
                  className: "text-xl font-bold my-5"
                }, props), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 19
                }, _this);
              },
              li: function li(_ref2) {
                var children = _ref2.children;
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  className: "ml-4 list-disc"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
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
                  lineNumber: 105,
                  columnNumber: 19
                }, _this);
              },
              img: function img(props) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", _objectSpread({
                  className: "mt-4 mb-4"
                }, props), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 19
                }, _this);
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("hr", {
        className: "max-w-lg my-5 mx-auto border-green-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this), submitted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "flex flex-col p-5 my-10 bg-green-500 text-white max-w-2xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          className: "text-3xl font-bold",
          children: "Thanks for your comment!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: "Once your comment is approved, it will appear below."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
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
          lineNumber: 131,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
          className: "text-3xl font-bold",
          children: "leave us a comment below!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("hr", {
          className: "py-3 mt-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread(_objectSpread({}, register("_id")), {}, {
          type: "hidden",
          name: "_id",
          value: post._id
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          className: "block md-5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: "text-gray-700",
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread(_objectSpread({}, register("name", {
            required: true
          })), {}, {
            className: "shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-green-500 outline-none focus:ring",
            placeholder: "John Bay",
            type: "text"
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          className: "block md-5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread(_objectSpread({}, register("email", {
            required: true
          })), {}, {
            className: "shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-green-500 outline-none focus:ring",
            placeholder: "John Bay",
            type: "email"
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          className: "block md-5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            children: "Comment"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", _objectSpread(_objectSpread({}, register("comment", {
            required: true
          })), {}, {
            className: "shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-green-500 outline-none focus:ring",
            placeholder: "John Bay",
            rows: 8
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "flex flex-col p-5",
          children: [errors.name && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: "text-red-500",
            children: "-The Name Field is required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 17
          }, this), errors.comment && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: "text-red-500",
            children: "-The Comment Field is required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 17
          }, this), errors.email && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: "text-red-500",
            children: "-The Email Field is required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "submit",
          className: "shadow bg-green-500 hover:bg-green-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-green-500 shadow space-y-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          className: "text-4xl",
          children: "Comments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("hr", {
          className: "pb-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }, this), post.comment.map(function (comment) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                className: "text-green-600",
                children: [comment.name, ": "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 17
              }, _this), comment.comment]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, _this)
          }, comment._id, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

_s(post, "DiZJe3xKVmV3H9qVa+XmlnP70ss=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10udHN4Il0sIm5hbWVzIjpbInBvc3QiLCJ1c2VTdGF0ZSIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJvblN1Ym1pdCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsImVyciIsInRpdGxlIiwidXNlckRhdGEiLCJmYUxpbmtlZGluIiwiZmFHaXRodWIiLCJmYVR3aXR0ZXIiLCJmYUluc3RhZ3JhbSIsIkRhdGUiLCJfY3JlYXRlZEF0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidXJsRm9yIiwibWFpbkltYWdlIiwidXJsIiwiZGVzY3JpcHRpb24iLCJhdXRob3IiLCJpbWFnZSIsIm5hbWUiLCJ0b0xvY2FsZVN0cmluZyIsInByb2Nlc3MiLCJoMSIsInByb3BzIiwiaDIiLCJsaSIsImNoaWxkcmVuIiwibGluayIsImhyZWYiLCJpbWciLCJfaWQiLCJyZXF1aXJlZCIsImNvbW1lbnQiLCJlbWFpbCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUlBOztDQUdBOztBQUNBO0FBQ0E7QUFDQTs7QUFhQSxTQUFTQSxJQUFULE9BQStCO0FBQUE7O0FBQUE7O0FBQUEsTUFBZkEsSUFBZSxRQUFmQSxJQUFlOztBQUFBLGtCQUVLQywrQ0FBUSxDQUFDLEtBQUQsQ0FGYjtBQUFBLE1BRXRCQyxTQUZzQjtBQUFBLE1BRVhDLFlBRlc7O0FBSTdCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBWixFQUo2QixDQU03Qjs7QUFONkIsaUJBV3pCTSx3REFBTyxFQVhrQjtBQUFBLE1BUTNCQyxRQVIyQixZQVEzQkEsUUFSMkI7QUFBQSxNQVMz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QSxnQkFGRixFQUlHakQsSUFBSSxDQUFDZ0QsT0FBTCxDQUFhRSxHQUFiLENBQWlCLFVBQUNGLE9BQUQ7QUFBQSw4QkFDaEI7QUFBQSxtQ0FDRTtBQUFBLHNDQUNFO0FBQU0seUJBQVMsRUFBQyxnQkFBaEI7QUFBQSwyQkFBa0NBLE9BQU8sQ0FBQ2IsSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUdhLE9BQU8sQ0FBQ0EsT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFVQSxPQUFPLENBQUNGLEdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGdCO0FBQUEsU0FBakIsQ0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6SUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEpEOztHQXpMUTlDLEk7VUFXSE0sb0Q7Ozs7QUFnTE4sK0RBQWVOLElBQWY7QUErREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uNGRiMTQ4ZjExMTk5YWY5YzM0MmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXJCbG9jayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250YWluZXJCbG9ja1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2FuaXR5Q2xpZW50LCB1cmxGb3IgfSBmcm9tIFwiLi4vLi4vc2FuaXR5XCI7XHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuLi8uLi90eXBpbmdzXCI7XHJcbmltcG9ydCBQb3J0YWJsZVRleHQgZnJvbSBcInJlYWN0LXBvcnRhYmxlLXRleHRcIjtcclxuLy91c2luZyByZWFjdC1ob29rLWZvcm1cclxuaW1wb3J0IHsgdXNlRm9ybSwgU3VibWl0SGFuZGxlciB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuXHJcbi8vIGltcG9ydCB0aGUgaWNvbnMgeW91IG5lZWRcclxuaW1wb3J0IHsgZmFMaW5rZWRpbiwgZmFHaXRodWIsIGZhRmFjZWJvb2ssIGZhV2hhdHNhcHAsIGZhR29vZ2xlLCBmYUluc3RhZ3JhbSwgZmFUd2l0dGVyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgdXNlckRhdGEgZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgSUZvcm1JbnB1dCB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgY29tbWVudDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHBvc3Q6IFBvc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3QoeyBwb3N0IH06IFByb3BzKSB7XHJcblxyXG4gIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHBvc3QpO1xyXG5cclxuICAvL2Nvbm5lY3RpbmcgZm9ybXNcclxuICBjb25zdCB7XHJcbiAgICByZWdpc3RlcixcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcclxuICB9ID0gdXNlRm9ybTxJRm9ybUlucHV0PigpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdDogU3VibWl0SGFuZGxlcjxJRm9ybUlucHV0PiA9IChkYXRhKSA9PiB7XHJcbiAgICAvKiBjb25zb2xlLmxvZyhkYXRhKTsgKi9cclxuICAgIGZldGNoKCcvYXBpL2NyZWF0ZUNvbW1lbnQnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnQ29tbWVudCBjcmVhdGVkJyk7XHJcbiAgICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgc2V0U3VibWl0dGVkKGZhbHNlKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lckJsb2NrIHRpdGxlPXtwb3N0LnRpdGxlfT5cclxuICAgICAgey8qIEhlYWRlciBTZWN0aW9uICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvXCI+XHJcblxyXG4gICAgICB7LyogU3RpY2t5IFNvY2lhbCBNZWRpYSBDb2x1bW4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljIHctMTIgc3RpY2t5IHRvcC01IGZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJnLWJsdWUtMTAwIHAtMiBmbGV4IGZsZXgtY29sIHNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgIDxhIGhyZWY9e3VzZXJEYXRhLnNvY2lhbExpbmtzLmxpbmtlZGlufT48bGkgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcm91bmRlZC0yIHAtMlwiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaW5rZWRpbn0gc2l6ZT1cIjJ4XCIgY29sb3I9XCJ3aGl0ZVwiIC8+PC9saT48L2E+XHJcbiAgICAgICAgICAgPGEgaHJlZj17dXNlckRhdGEuc29jaWFsTGlua3MuZ2l0aHVifT48bGkgY2xhc3NOYW1lPVwiYmctYmxhY2sgcm91bmRlZC0yIHAtMlwiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFHaXRodWJ9IHNpemU9XCIyeFwiIGNvbG9yPVwid2hpdGVcIiAvPjwvbGk+PC9hPlxyXG4gICAgICAgICAgIDxhIGhyZWY9e3VzZXJEYXRhLnNvY2lhbExpbmtzLnR3aXR0ZXJ9PjxsaSBjbGFzc05hbWU9XCJiZy1ibHVlLTYwMCByb3VuZGVkLTIgcC0yXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVR3aXR0ZXJ9IHNpemU9XCIyeFwiIGNvbG9yPVwid2hpdGVcIiAvPjwvbGk+PC9hPlxyXG4gICAgICAgICAgIDxhIGhyZWY9e3VzZXJEYXRhLnNvY2lhbExpbmtzLmluc3RhZ3JhbX0+PGxpIGNsYXNzTmFtZT1cImJnLXJlZC02MDAgcm91bmRlZC0yIHAtMlwiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFJbnN0YWdyYW19IHNpemU9XCIyeFwiIGNvbG9yPVwid2hpdGVcIiAvPjwvbGk+PC9hPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byAtbXQtNjAgcC01XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC1jZW50ZXIgZm9udC1ib2xkIG1iLTggZm9udC1zYW5zXCI+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMCBteS01XCI+e25ldyBEYXRlKHBvc3QuX2NyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9IC0gMyBtaW4gcmVhZDwvaDM+ICAgXHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTk2IG9iamVjdC1jb3ZlciBmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi04XCJcclxuICAgICAgICAgICAgc3JjPXt1cmxGb3IocG9zdC5tYWluSW1hZ2UpLnVybCgpIX1cclxuICAgICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbGlnaHQgdGV4dC1ncmF5LTUwMCBtYi0yIFwiPlxyXG4gICAgICAgICAgICB7cG9zdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBteS00XCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e3VybEZvcihwb3N0LmF1dGhvci5pbWFnZSkudXJsKCkhfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTIgdy0xMiByb3VuZGVkLWZ1bGwgbXItMlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtZXh0cnRhbGlnaHQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIEJsb2cgcG9zdCBieXtcIiBcIn1cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTYwMFwiPntwb3N0LmF1dGhvci5uYW1lfTwvc3Bhbj4gLVxyXG4gICAgICAgICAgICAgIFB1Ymxpc2hlZCBhdCB7bmV3IERhdGUocG9zdC5fY3JlYXRlZEF0KS50b0xvY2FsZVN0cmluZygpfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5XCI+XHJcbiAgICAgICAgICAgIDxQb3J0YWJsZVRleHRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgIGRhdGFzZXQ9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIX1cclxuICAgICAgICAgICAgICBwcm9qZWN0SWQ9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIX1cclxuICAgICAgICAgICAgICBjb250ZW50PXtwb3N0LmJvZHl9XHJcbiAgICAgICAgICAgICAgc2VyaWFsaXplcnM9e3tcclxuICAgICAgICAgICAgICAgIGgxOiAocHJvcHM6IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG15LTVcIiB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaDI6IChwcm9wczogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBteS01XCIgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGxpOiAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IDxsaSBjbGFzc05hbWU9XCJtbC00IGxpc3QtZGlzY1wiPjwvbGk+LFxyXG4gICAgICAgICAgICAgICAgbGluazogKHsgaHJlZiwgY2hpbGRyZW4gfTogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpbWc6IChwcm9wczogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IG1iLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm1heC13LWxnIG15LTUgbXgtYXV0byBib3JkZXItZ3JlZW4tNTAwXCIgLz5cclxuXHJcbiAgICAgICAgey8qIENvbW1lbnRzIHNlY3Rpb24gKi99XHJcblxyXG4gICAgICAgIHtzdWJtaXR0ZWQgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC01IG15LTEwIGJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIG1heC13LTJ4bCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5UaGFua3MgZm9yIHlvdXIgY29tbWVudCE8L2gzPlxyXG4gICAgICAgICAgICA8cD5PbmNlIHlvdXIgY29tbWVudCBpcyBhcHByb3ZlZCwgaXQgd2lsbCBhcHBlYXIgYmVsb3cuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfSBhY3Rpb249XCJcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtNSBtYXgtdy0yeGwgbXgtYXV0byBtYi0xMFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyZWVuLTUwMFwiPkVuam95ZWQgdGhlIGFydGljbGU/PC9oMz5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPmxlYXZlIHVzIGEgY29tbWVudCBiZWxvdyE8L2g0PlxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwicHktMyBtdC0yXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcIl9pZFwiKX1cclxuICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiX2lkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cG9zdC5faWR9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWQtNVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj5OYW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwibmFtZVwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGJvcmRlciByb3VuZGVkIHB5LTIgcHgtMyBmb3JtLWlucHV0IG10LTEgYmxvY2sgdy1mdWxsIHJpbmctZ3JlZW4tNTAwIG91dGxpbmUtbm9uZSBmb2N1czpyaW5nXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSm9obiBCYXlcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBtZC01XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+RW1haWw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJlbWFpbFwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGJvcmRlciByb3VuZGVkIHB5LTIgcHgtMyBmb3JtLWlucHV0IG10LTEgYmxvY2sgdy1mdWxsIHJpbmctZ3JlZW4tNTAwIG91dGxpbmUtbm9uZSBmb2N1czpyaW5nXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSm9obiBCYXlcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWQtNVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkNvbW1lbnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJjb21tZW50XCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYm9yZGVyIHJvdW5kZWQgcHktMiBweC0zIGZvcm0tdGV4dGFyZWEgbXQtMSBibG9jayB3LWZ1bGwgcmluZy1ncmVlbi01MDAgb3V0bGluZS1ub25lIGZvY3VzOnJpbmdcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKb2huIEJheVwiXHJcbiAgICAgICAgICAgICAgICByb3dzPXs4fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICB7LyogRXJyb3JzIHdpbGwgcmV0dXJuIGhlcmUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTVcIj5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+LVRoZSBOYW1lIEZpZWxkIGlzIHJlcXVpcmVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5jb21tZW50ICYmIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAtVGhlIENvbW1lbnQgRmllbGQgaXMgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+LVRoZSBFbWFpbCBGaWVsZCBpcyByZXF1aXJlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tMzAwIGZvY3VzOnNoYWRvdy1vdXRsaW5lIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgey8qIENvbW1lbnQgc2VjdGlvbiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC0xMCBteS0xMCBtYXgtdy0yeGwgbXgtYXV0byBzaGFkb3ctZ3JlZW4tNTAwIHNoYWRvdyBzcGFjZS15LTJcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiPkNvbW1lbnRzPC9oMz5cclxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJwYi0yXCIgLz5cclxuXHJcbiAgICAgICAgICB7cG9zdC5jb21tZW50Lm1hcCgoY29tbWVudCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17Y29tbWVudC5faWR9PlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi02MDBcIj57Y29tbWVudC5uYW1lfTogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge2NvbW1lbnQuY29tbWVudH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lckJsb2NrPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInBvc3RcIl17XHJcbiAgICAgICAgX2lkLFxyXG4gICAgICAgIHNsdWcge1xyXG4gICAgICAgICAgICBjdXJyZW50XHJcbiAgICAgICAgfVxyXG4gICAgfWA7XHJcblxyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5KTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3Q6IFBvc3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgc2x1ZzogcG9zdC5zbHVnLmN1cnJlbnQsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IFwiYmxvY2tpbmdcIixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xyXG4gICAgICAgIF9pZCxcclxuICAgICAgICBfY3JlYXRlZEF0LFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGF1dGhvci0+IHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnY29tbWVudCc6ICAqW1xyXG4gICAgICAgICAgX3R5cGUgPT0gXCJjb21tZW50XCIgJiYgXHJcbiAgICAgICAgICBwb3N0Ll9yZWYgPT0gXi5faWQgJiZcclxuICAgICAgICAgIGFwcHJvdmVkID09IHRydWVcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIG1haW5JbWFnZSxcclxuICAgICAgICBzbHVnLFxyXG4gICAgICAgIGJvZHlcclxuICAgIH1gO1xyXG5cclxuICBjb25zdCBwb3N0ID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5LCB7XHJcbiAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcclxuICB9KTtcclxuXHJcbiAgaWYgKCFwb3N0KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0LFxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDYwLCAvL2FmdGVyIDYwIHNlY29uZHMsIGl0IHJldmFsaWRhdGVcclxuICB9O1xyXG59O1xyXG5cclxuXHJcblxyXG4vKiBjb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XHJcbiAgICAgICAgX2lkLFxyXG4gICAgICAgIF9jcmVhdGVkQXQsXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgYXV0aG9yLT4ge1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBpbWFnZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIG1haW5JbWFnZSxcclxuICAgICAgICBzbHVnLFxyXG4gICAgICAgIGJvZHlcclxuICAgIH1gOyAqLyJdLCJzb3VyY2VSb290IjoiIn0=