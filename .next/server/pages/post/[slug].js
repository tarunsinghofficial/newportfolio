(function() {
var exports = {};
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./pages/post/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/post/[slug].tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ContainerBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ContainerBlock */ "./components/ContainerBlock.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sanity */ "./sanity.js");
/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-portable-text */ "react-portable-text");
/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_portable_text__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/data */ "./constants/data.js");

var _jsxFileName = "C:\\Users\\tarun\\newportfolio\\pages\\post\\[slug].tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //using react-hook-form

 // import the icons you need





function post({
  post
}) {
  const {
    0: submitted,
    1: setSubmitted
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  console.log(post); //connecting forms

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();

  const onSubmit = data => {
    /* console.log(data); */
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(() => {
      console.log('Comment created');
      setSubmitted(true);
    }).catch(err => {
      console.log(err);
      setSubmitted(false);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContainerBlock__WEBPACK_IMPORTED_MODULE_1__.default, {
    title: post.title,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "max-w-7xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "static w-12 sticky top-5 flex justify-center align-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "bg-blue-100 p-2 flex flex-col space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: _constants_data__WEBPACK_IMPORTED_MODULE_8__.default.socialLinks.linkedin,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "bg-blue-500 rounded-2 p-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faLinkedin,
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: _constants_data__WEBPACK_IMPORTED_MODULE_8__.default.socialLinks.github,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "bg-black rounded-2 p-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faGithub,
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: _constants_data__WEBPACK_IMPORTED_MODULE_8__.default.socialLinks.twitter,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "bg-blue-600 rounded-2 p-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faTwitter,
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: _constants_data__WEBPACK_IMPORTED_MODULE_8__.default.socialLinks.instagram,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "bg-red-600 rounded-2 p-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faInstagram,
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
        className: "max-w-4xl mx-auto -mt-60 p-5",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "text-5xl text-center font-bold mb-8 font-sans",
          children: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "text-center uppercase text-gray-500 my-5",
          children: [new Date(post._createdAt).toLocaleDateString(), " - 3 min read"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: "w-full h-96 object-cover flex align-items-center mb-8",
          src: (0,_sanity__WEBPACK_IMPORTED_MODULE_3__.urlFor)(post.mainImage).url(),
          alt: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "text-xl font-light text-gray-500 mb-2 ",
          children: post.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex items-center space-x-2 my-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: (0,_sanity__WEBPACK_IMPORTED_MODULE_3__.urlFor)(post.author.image).url(),
            className: "h-12 w-12 rounded-full mr-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "font-extrtalight text-sm",
            children: ["Blog post by", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-justify",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_portable_text__WEBPACK_IMPORTED_MODULE_4___default()), {
            className: "",
            dataset: "production",
            projectId: "so3yjx14",
            content: post.body,
            serializers: {
              h1: props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", _objectSpread({
                className: "text-2xl font-bold my-5"
              }, props), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, this),
              h2: props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", _objectSpread({
                className: "text-xl font-bold my-5"
              }, props), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 19
              }, this),
              li: ({
                children
              }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "ml-4 list-disc"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 44
              }, this),
              link: ({
                href,
                children
              }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: href,
                className: "text-blue-500",
                children: children
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 19
              }, this),
              img: props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", _objectSpread({
                className: "mt-4 mb-4"
              }, props), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 19
              }, this)
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
        className: "max-w-lg my-5 mx-auto border-green-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this), submitted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col p-5 my-10 bg-green-500 text-white max-w-2xl mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "text-3xl font-bold",
          children: "Thanks for your comment!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
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
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit(onSubmit),
        action: "",
        className: "flex flex-col p-5 max-w-2xl mx-auto mb-10",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "text-sm text-green-500",
          children: "Enjoyed the article?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "text-3xl font-bold",
          children: "leave us a comment below!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          className: "py-3 mt-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({}, register("_id")), {}, {
          type: "hidden",
          name: "_id",
          value: post._id
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "block md-5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "text-gray-700",
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({}, register("name", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "block md-5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({}, register("email", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "block md-5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Comment"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", _objectSpread(_objectSpread({}, register("comment", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col p-5",
          children: [errors.name && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "text-red-500",
            children: "-The Name Field is required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 17
          }, this), errors.comment && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "text-red-500",
            children: "-The Comment Field is required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 17
          }, this), errors.email && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-green-500 shadow space-y-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "text-4xl",
          children: "Comments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          className: "pb-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }, this), post.comment.map(comment => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-green-600",
              children: [comment.name, ": "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 17
            }, this), comment.comment]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 15
          }, this)
        }, comment._id, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 13
        }, this))]
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

/* harmony default export */ __webpack_exports__["default"] = (post);
const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
        _id,
        slug {
            current
        }
    }`;
  const posts = await _sanity__WEBPACK_IMPORTED_MODULE_3__.sanityClient.fetch(query);
  const paths = posts.map(post => ({
    params: {
      slug: post.slug.current
    }
  }));
  return {
    paths,
    fallback: "blocking"
  };
};
const getStaticProps = async ({
  params
}) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author-> {
            name,
            image,
        },
        'comment':  *[
          _type == "comment" && 
          post._ref == ^._id &&
          approved == true
        ],
        description,
        mainImage,
        slug,
        body
    }`;
  const post = await _sanity__WEBPACK_IMPORTED_MODULE_3__.sanityClient.fetch(query, {
    slug: params.slug
  });

  if (!post) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post
    },
    revalidate: 60 //after 60 seconds, it revalidate

  };
};
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

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/free-brands-svg-icons");;

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");;

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@sanity/image-url");;

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-sanity");;

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

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-hook-form");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-portable-text":
/*!**************************************!*\
  !*** external "react-portable-text" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-portable-text");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_ContainerBlock_js"], function() { return __webpack_exec__("./pages/post/[slug].tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9wb3N0L1tzbHVnXS50c3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vc2FuaXR5LmpzIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAc2FuaXR5L2ltYWdlLXVybFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQtc2FuaXR5XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC10aGVtZXNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0LXBvcnRhYmxlLXRleHRcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJwb3N0Iiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwidXNlU3RhdGUiLCJjb25zb2xlIiwibG9nIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJ1c2VGb3JtIiwib25TdWJtaXQiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJjYXRjaCIsImVyciIsInRpdGxlIiwidXNlckRhdGEiLCJmYUxpbmtlZGluIiwiZmFHaXRodWIiLCJmYVR3aXR0ZXIiLCJmYUluc3RhZ3JhbSIsIkRhdGUiLCJfY3JlYXRlZEF0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidXJsRm9yIiwibWFpbkltYWdlIiwidXJsIiwiZGVzY3JpcHRpb24iLCJhdXRob3IiLCJpbWFnZSIsIm5hbWUiLCJ0b0xvY2FsZVN0cmluZyIsInByb2Nlc3MiLCJoMSIsInByb3BzIiwiaDIiLCJsaSIsImNoaWxkcmVuIiwibGluayIsImhyZWYiLCJpbWciLCJfaWQiLCJyZXF1aXJlZCIsImNvbW1lbnQiLCJlbWFpbCIsIm1hcCIsImdldFN0YXRpY1BhdGhzIiwicXVlcnkiLCJwb3N0cyIsInNhbml0eUNsaWVudCIsInBhdGhzIiwicGFyYW1zIiwic2x1ZyIsImN1cnJlbnQiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwibm90Rm91bmQiLCJyZXZhbGlkYXRlIiwiY29uZmlnIiwiZGF0YXNldCIsInByb2plY3RJZCIsImFwaVZlcnNpb24iLCJ1c2VDZG4iLCJjcmVhdGVDbGllbnQiLCJzb3VyY2UiLCJjcmVhdGVJbWFnZVVybEJ1aWxkZXIiLCJ1c2VDdXJyZW50VXNlciIsImNyZWF0ZUN1cnJlbnRVc2VySG9vayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBSUE7O0NBR0E7O0FBQ0E7QUFDQTtBQUNBOztBQWFBLFNBQVNBLElBQVQsQ0FBYztBQUFFQTtBQUFGLENBQWQsRUFBK0I7QUFFN0IsUUFBTTtBQUFB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bUQiLCJmaWxlIjoicGFnZXMvcG9zdC9bc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyQmxvY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyQmxvY2tcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHNhbml0eUNsaWVudCwgdXJsRm9yIH0gZnJvbSBcIi4uLy4uL3Nhbml0eVwiO1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi4vLi4vdHlwaW5nc1wiO1xyXG5pbXBvcnQgUG9ydGFibGVUZXh0IGZyb20gXCJyZWFjdC1wb3J0YWJsZS10ZXh0XCI7XHJcbi8vdXNpbmcgcmVhY3QtaG9vay1mb3JtXHJcbmltcG9ydCB7IHVzZUZvcm0sIFN1Ym1pdEhhbmRsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcblxyXG4vLyBpbXBvcnQgdGhlIGljb25zIHlvdSBuZWVkXHJcbmltcG9ydCB7IGZhTGlua2VkaW4sIGZhR2l0aHViLCBmYUZhY2Vib29rLCBmYVdoYXRzYXBwLCBmYUdvb2dsZSwgZmFJbnN0YWdyYW0sIGZhVHdpdHRlciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHVzZXJEYXRhIGZyb20gXCIuLi8uLi9jb25zdGFudHMvZGF0YVwiO1xyXG5cclxuaW50ZXJmYWNlIElGb3JtSW5wdXQge1xyXG4gIF9pZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGNvbW1lbnQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBwb3N0OiBQb3N0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3N0KHsgcG9zdCB9OiBQcm9wcykge1xyXG5cclxuICBjb25zdCBbc3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zb2xlLmxvZyhwb3N0KTtcclxuXHJcbiAgLy9jb25uZWN0aW5nIGZvcm1zXHJcbiAgY29uc3Qge1xyXG4gICAgcmVnaXN0ZXIsXHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXHJcbiAgfSA9IHVzZUZvcm08SUZvcm1JbnB1dD4oKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQ6IFN1Ym1pdEhhbmRsZXI8SUZvcm1JbnB1dD4gPSAoZGF0YSkgPT4ge1xyXG4gICAgLyogY29uc29sZS5sb2coZGF0YSk7ICovXHJcbiAgICBmZXRjaCgnL2FwaS9jcmVhdGVDb21tZW50Jywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0NvbW1lbnQgY3JlYXRlZCcpO1xyXG4gICAgICBzZXRTdWJtaXR0ZWQodHJ1ZSk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHNldFN1Ym1pdHRlZChmYWxzZSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXJCbG9jayB0aXRsZT17cG9zdC50aXRsZX0+XHJcbiAgICAgIHsvKiBIZWFkZXIgU2VjdGlvbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0b1wiPlxyXG5cclxuICAgICAgey8qIFN0aWNreSBTb2NpYWwgTWVkaWEgQ29sdW1uICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpYyB3LTEyIHN0aWNreSB0b3AtNSBmbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJiZy1ibHVlLTEwMCBwLTIgZmxleCBmbGV4LWNvbCBzcGFjZS15LTJcIj5cclxuICAgICAgICAgICA8YSBocmVmPXt1c2VyRGF0YS5zb2NpYWxMaW5rcy5saW5rZWRpbn0+PGxpIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHJvdW5kZWQtMiBwLTJcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlua2VkaW59IHNpemU9XCIyeFwiIGNvbG9yPVwid2hpdGVcIiAvPjwvbGk+PC9hPlxyXG4gICAgICAgICAgIDxhIGhyZWY9e3VzZXJEYXRhLnNvY2lhbExpbmtzLmdpdGh1Yn0+PGxpIGNsYXNzTmFtZT1cImJnLWJsYWNrIHJvdW5kZWQtMiBwLTJcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2l0aHVifSBzaXplPVwiMnhcIiBjb2xvcj1cIndoaXRlXCIgLz48L2xpPjwvYT5cclxuICAgICAgICAgICA8YSBocmVmPXt1c2VyRGF0YS5zb2NpYWxMaW5rcy50d2l0dGVyfT48bGkgY2xhc3NOYW1lPVwiYmctYmx1ZS02MDAgcm91bmRlZC0yIHAtMlwiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFUd2l0dGVyfSBzaXplPVwiMnhcIiBjb2xvcj1cIndoaXRlXCIgLz48L2xpPjwvYT5cclxuICAgICAgICAgICA8YSBocmVmPXt1c2VyRGF0YS5zb2NpYWxMaW5rcy5pbnN0YWdyYW19PjxsaSBjbGFzc05hbWU9XCJiZy1yZWQtNjAwIHJvdW5kZWQtMiBwLTJcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSW5zdGFncmFtfSBzaXplPVwiMnhcIiBjb2xvcj1cIndoaXRlXCIgLz48L2xpPjwvYT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gLW10LTYwIHAtNVwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtY2VudGVyIGZvbnQtYm9sZCBtYi04IGZvbnQtc2Fuc1wiPntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdXBwZXJjYXNlIHRleHQtZ3JheS01MDAgbXktNVwiPntuZXcgRGF0ZShwb3N0Ll9jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfSAtIDMgbWluIHJlYWQ8L2gzPiAgIFxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC05NiBvYmplY3QtY292ZXIgZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItOFwiXHJcbiAgICAgICAgICAgIHNyYz17dXJsRm9yKHBvc3QubWFpbkltYWdlKS51cmwoKSF9XHJcbiAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWxpZ2h0IHRleHQtZ3JheS01MDAgbWItMiBcIj5cclxuICAgICAgICAgICAge3Bvc3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgbXktNFwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXt1cmxGb3IocG9zdC5hdXRob3IuaW1hZ2UpLnVybCgpIX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHctMTIgcm91bmRlZC1mdWxsIG1yLTJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWV4dHJ0YWxpZ2h0IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICBCbG9nIHBvc3QgYnl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi02MDBcIj57cG9zdC5hdXRob3IubmFtZX08L3NwYW4+IC1cclxuICAgICAgICAgICAgICBQdWJsaXNoZWQgYXQge25ldyBEYXRlKHBvc3QuX2NyZWF0ZWRBdCkudG9Mb2NhbGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtanVzdGlmeVwiPlxyXG4gICAgICAgICAgICA8UG9ydGFibGVUZXh0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICBkYXRhc2V0PXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCF9XHJcbiAgICAgICAgICAgICAgcHJvamVjdElkPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCF9XHJcbiAgICAgICAgICAgICAgY29udGVudD17cG9zdC5ib2R5fVxyXG4gICAgICAgICAgICAgIHNlcmlhbGl6ZXJzPXt7XHJcbiAgICAgICAgICAgICAgICBoMTogKHByb3BzOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBteS01XCIgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGgyOiAocHJvcHM6IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbXktNVwiIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBsaTogKHsgY2hpbGRyZW4gfTogYW55KSA9PiA8bGkgY2xhc3NOYW1lPVwibWwtNCBsaXN0LWRpc2NcIj48L2xpPixcclxuICAgICAgICAgICAgICAgIGxpbms6ICh7IGhyZWYsIGNoaWxkcmVuIH06IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtocmVmfSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAocHJvcHM6IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBtYi00XCJcclxuICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcblxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtYXgtdy1sZyBteS01IG14LWF1dG8gYm9yZGVyLWdyZWVuLTUwMFwiIC8+XHJcblxyXG4gICAgICAgIHsvKiBDb21tZW50cyBzZWN0aW9uICovfVxyXG5cclxuICAgICAgICB7c3VibWl0dGVkID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtNSBteS0xMCBiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBtYXgtdy0yeGwgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+VGhhbmtzIGZvciB5b3VyIGNvbW1lbnQhPC9oMz5cclxuICAgICAgICAgICAgPHA+T25jZSB5b3VyIGNvbW1lbnQgaXMgYXBwcm92ZWQsIGl0IHdpbGwgYXBwZWFyIGJlbG93LjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gYWN0aW9uPVwiXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTUgbWF4LXctMnhsIG14LWF1dG8gbWItMTBcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmVlbi01MDBcIj5FbmpveWVkIHRoZSBhcnRpY2xlPzwvaDM+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5sZWF2ZSB1cyBhIGNvbW1lbnQgYmVsb3chPC9oND5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInB5LTMgbXQtMlwiIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJfaWRcIil9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIl9pZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1kLTVcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+TmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcIm5hbWVcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBib3JkZXIgcm91bmRlZCBweS0yIHB4LTMgZm9ybS1pbnB1dCBtdC0xIGJsb2NrIHctZnVsbCByaW5nLWdyZWVuLTUwMCBvdXRsaW5lLW5vbmUgZm9jdXM6cmluZ1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkpvaG4gQmF5XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWQtNVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkVtYWlsPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBib3JkZXIgcm91bmRlZCBweS0yIHB4LTMgZm9ybS1pbnB1dCBtdC0xIGJsb2NrIHctZnVsbCByaW5nLWdyZWVuLTUwMCBvdXRsaW5lLW5vbmUgZm9jdXM6cmluZ1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkpvaG4gQmF5XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1kLTVcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5Db21tZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiY29tbWVudFwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGJvcmRlciByb3VuZGVkIHB5LTIgcHgtMyBmb3JtLXRleHRhcmVhIG10LTEgYmxvY2sgdy1mdWxsIHJpbmctZ3JlZW4tNTAwIG91dGxpbmUtbm9uZSBmb2N1czpyaW5nXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSm9obiBCYXlcIlxyXG4gICAgICAgICAgICAgICAgcm93cz17OH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgey8qIEVycm9ycyB3aWxsIHJldHVybiBoZXJlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC01XCI+XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5uYW1lICYmIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPi1UaGUgTmFtZSBGaWVsZCBpcyByZXF1aXJlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtlcnJvcnMuY29tbWVudCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgLVRoZSBDb21tZW50IEZpZWxkIGlzIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPi1UaGUgRW1haWwgRmllbGQgaXMgcmVxdWlyZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTMwMCBmb2N1czpzaGFkb3ctb3V0bGluZSBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHsvKiBDb21tZW50IHNlY3Rpb24gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtMTAgbXktMTAgbWF4LXctMnhsIG14LWF1dG8gc2hhZG93LWdyZWVuLTUwMCBzaGFkb3cgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC00eGxcIj5Db21tZW50czwvaDM+XHJcbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwicGItMlwiIC8+XHJcblxyXG4gICAgICAgICAge3Bvc3QuY29tbWVudC5tYXAoKGNvbW1lbnQpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2NvbW1lbnQuX2lkfT5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNjAwXCI+e2NvbW1lbnQubmFtZX06IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtjb21tZW50LmNvbW1lbnR9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXJCbG9jaz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwb3N0XCJde1xyXG4gICAgICAgIF9pZCxcclxuICAgICAgICBzbHVnIHtcclxuICAgICAgICAgICAgY3VycmVudFxyXG4gICAgICAgIH1cclxuICAgIH1gO1xyXG5cclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSk7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0OiBQb3N0KSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHNsdWc6IHBvc3Quc2x1Zy5jdXJyZW50LFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBcImJsb2NraW5nXCIsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcclxuICAgICAgICBfaWQsXHJcbiAgICAgICAgX2NyZWF0ZWRBdCxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBhdXRob3ItPiB7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGltYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2NvbW1lbnQnOiAgKltcclxuICAgICAgICAgIF90eXBlID09IFwiY29tbWVudFwiICYmIFxyXG4gICAgICAgICAgcG9zdC5fcmVmID09IF4uX2lkICYmXHJcbiAgICAgICAgICBhcHByb3ZlZCA9PSB0cnVlXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBtYWluSW1hZ2UsXHJcbiAgICAgICAgc2x1ZyxcclxuICAgICAgICBib2R5XHJcbiAgICB9YDtcclxuXHJcbiAgY29uc3QgcG9zdCA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSwge1xyXG4gICAgc2x1ZzogcGFyYW1zLnNsdWcsXHJcbiAgfSk7XHJcblxyXG4gIGlmICghcG9zdCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICB9O1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdCxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiA2MCwgLy9hZnRlciA2MCBzZWNvbmRzLCBpdCByZXZhbGlkYXRlXHJcbiAgfTtcclxufTtcclxuXHJcblxyXG5cclxuLyogY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xyXG4gICAgICAgIF9pZCxcclxuICAgICAgICBfY3JlYXRlZEF0LFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGF1dGhvci0+IHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBtYWluSW1hZ2UsXHJcbiAgICAgICAgc2x1ZyxcclxuICAgICAgICBib2R5XHJcbiAgICB9YDsgKi8iLCJpbXBvcnQge1xyXG4gICAgY3JlYXRlQ3VycmVudFVzZXJIb29rLFxyXG4gICAgY3JlYXRlQ2xpZW50LFxyXG59IGZyb20gXCJuZXh0LXNhbml0eVwiO1xyXG5pbXBvcnQgY3JlYXRlSW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGRhdGFzZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIHx8IFwicHJvZHVjdGlvblwiLFxyXG4gICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCxcclxuICAgIGFwaVZlcnNpb246IFwiMjAyMS0wMy0yNVwiLFxyXG4gICAgdXNlQ2RuOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNhbml0eUNsaWVudCA9IGNyZWF0ZUNsaWVudChjb25maWcpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB1cmxGb3IgPSAoc291cmNlKSA9PiBjcmVhdGVJbWFnZVVybEJ1aWxkZXIoY29uZmlnKS5pbWFnZShzb3VyY2UpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUN1cnJlbnRVc2VyID0gY3JlYXRlQ3VycmVudFVzZXJIb29rKGNvbmZpZyk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2ltYWdlLXVybFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zYW5pdHlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtdGhlbWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaG9vay1mb3JtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcG9ydGFibGUtdGV4dFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9