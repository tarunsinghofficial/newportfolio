(function() {
var exports = {};
exports.id = "pages/Blog";
exports.ids = ["pages/Blog"];
exports.modules = {

/***/ "./pages/Blog.tsx":
/*!************************!*\
  !*** ./pages/Blog.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Blog; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sanity */ "./sanity.js");
/* harmony import */ var _components_ContainerBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ContainerBlock */ "./components/ContainerBlock.js");

var _jsxFileName = "C:\\Users\\tarun\\newportfolio\\pages\\Blog.tsx";




function Blog({
  posts
}) {
  //change text every 3 seconds
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const customText = ["Tech", "Coding", "Design"];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const interval = setInterval(() => {
      setText(customText.indexOf(text) === customText.length - 1 ? customText[0] : customText[customText.indexOf(text) + 1]);
    }, 3000);
    return () => clearInterval(interval);
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
                  href: `/post/${posts[0].slug.current}`,
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
            className: "lg:max-w-lg lg:w-full md:w-1/2 sm:w-0 xs:w-0 w-5/6",
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
        children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: `/post/${post.slug.current}`,
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
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "text-sm text-black line-clamp-3",
                  children: post.description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "absolute bottom-5",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "text-xs text-white bg-green-500 p-2 rounded-full",
                  children: post.author.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "absolute right-5 bottom-5",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "text-xs text-gray-500",
                  children: "3 min read"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: "h-10 w-10 rounded-full",
                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_3__.urlFor)(post.author.image).url(),
                alt: post.author.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, this)
        }, post._id, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, this))
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
const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    author -> {
    name, 
    image
  },
  description,
  mainImage,
  slug
  }`;
  const posts = await _sanity__WEBPACK_IMPORTED_MODULE_3__.sanityClient.fetch(query);
  return {
    props: {
      posts
    }
  };
};

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_ContainerBlock_js"], function() { return __webpack_exec__("./pages/Blog.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9CbG9nLnRzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9zYW5pdHkuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQHNhbml0eS9pbWFnZS11cmxcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJuZXh0LXNhbml0eVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQtdGhlbWVzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJCbG9nIiwicG9zdHMiLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZVN0YXRlIiwiY3VzdG9tVGV4dCIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJpbmRleE9mIiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2x1ZyIsImN1cnJlbnQiLCJfaWQiLCJ1cmxGb3IiLCJtYWluSW1hZ2UiLCJ1cmwiLCJtYXAiLCJwb3N0IiwiYXV0aG9yIiwibmFtZSIsImltYWdlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicXVlcnkiLCJzYW5pdHlDbGllbnQiLCJwcm9wcyIsImNvbmZpZyIsImRhdGFzZXQiLCJwcm9jZXNzIiwicHJvamVjdElkIiwiYXBpVmVyc2lvbiIsInVzZUNkbiIsImNyZWF0ZUNsaWVudCIsInNvdXJjZSIsImNyZWF0ZUltYWdlVXJsQnVpbGRlciIsInVzZUN1cnJlbnRVc2VyIiwiY3JlYXRlQ3VycmVudFVzZXJIb29rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFPZSxTQUFTQSxJQUFULENBQWM7QUFBRUM7QUFBRixDQUFkLEVBQWdDO0FBRTdDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNQyxVQUFVLEdBQUcsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixRQUFuQixDQUFuQjtBQUdBQyxrREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxNQUFNO0FBQ2pDTCxhQUFPLENBQUNFLFVBQVUsQ0FBQ0ksT0FBWCxDQUFtQlAsSUFBbkIsTUFBNkJHLFVBQVUsQ0FBQ0ssTUFBWCxHQUFvQixDQUFqRCxHQUFxREwsVUFBVSxDQUFDLENBQUQsQ0FBL0QsR0FBcUVBLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDSSxPQUFYLENBQW1CUCxJQUFuQixJQUEyQixDQUE1QixDQUFoRixDQUFQO0FBQ0QsS0FGMkIsRUFFekIsSUFGeUIsQ0FBNUI7QUFHQSxXQUFPLE1BQU1TLGFBQWEsQ0FBQ0osUUFBRCxDQUExQjtBQUNELEdBTFEsRUFLTixDQUFDTCxJQUFELENBTE0sQ0FBVDtBQU9BVSxTQUFPLENBQUNDLEdBQVIsQ0FBWVosS0FBWjtBQUNBLHNCQUNFLDhEQUFDLCtEQUFEO0FBQWdCLFNBQUssRUFBQyxxQkFBdEI7QUFBQSwyQkFJRTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDhCQWFFO0FBQUss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dEJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxR1A7QUFJQTtBQUVPLE1BQU04QixNQUFNLEdBQUc7QUFDbEJDLFNBQU8sRUFBRUMsWUFBQSxJQUEwQyxDQURqQztBQUVsQkMsV0FBUyxFQUFFRCxVQUZPO0FBR2xCRSxZQUFVLEVBQUUsWUFITTtBQUlsQkMsUUFBTTtBQUpZLENBQWY7QUFRQSxNQUFNUCxZQUFZLEdBQUdRLHlEQUFZLENBQUNOLE1BQUQsQ0FBakM7QUFHQSxNQUFNWixNQUFNLEdBQUltQixNQUFELElBQVlDLHdEQUFxQixDQUFDUixNQUFELENBQXJCLENBQThCTCxLQUE5QixDQUFvQ1ksTUFBcEMsQ0FBM0I7QUFFQSxNQUFNRSxjQUFjLEdBQUdDLGtFQUFxQixDQUFDVixNQUFELENBQTVDLEM7Ozs7Ozs7Ozs7O0FDbkJQLCtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL0Jsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHNhbml0eUNsaWVudCwgdXJsRm9yIH0gZnJvbSBcIi4uL3Nhbml0eVwiO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vdHlwaW5ncyc7XHJcbmltcG9ydCBDb250YWluZXJCbG9jayBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJCbG9ja1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBwb3N0czogW1Bvc3RdO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZyh7IHBvc3RzIH06IFByb3BzKSB7XHJcblxyXG4gIC8vY2hhbmdlIHRleHQgZXZlcnkgMyBzZWNvbmRzXHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgY3VzdG9tVGV4dCA9IFtcIlRlY2hcIiwgXCJDb2RpbmdcIiwgXCJEZXNpZ25cIl1cclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0VGV4dChjdXN0b21UZXh0LmluZGV4T2YodGV4dCkgPT09IGN1c3RvbVRleHQubGVuZ3RoIC0gMSA/IGN1c3RvbVRleHRbMF0gOiBjdXN0b21UZXh0W2N1c3RvbVRleHQuaW5kZXhPZih0ZXh0KSArIDFdKTtcclxuICAgIH0sIDMwMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFt0ZXh0XSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHBvc3RzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lckJsb2NrIHRpdGxlPVwiQmxvZ3MgLSBUYXJ1biBTaW5naFwiPlxyXG5cclxuICAgICAgey8qIEhlYWRlciBTZWN0aW9uICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0b1wiPlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBiZy15ZWxsb3ctMzAwIGJvcmRlci15IGJvcmRlci1ibGFjayBweS0xMCBsZzpweS01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTEwIHNwYWNlLXktNVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgbWF4LXcteGwgZm9udC1zZXJpZlwiPkdldCB5b3Vyc2VsZiBidXN5IHdpdGggVGVjaCBBcnRpY2xlcyA8L2gxPlxyXG4gICAgICAgICAgICA8aDI+SW50cm9kdWNlZCBieSBhIFRlY2huaWNhbCBXcml0ZXIuPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIvZmF2aWNvbi5pY29cIlxyXG4gICAgICAgICAgICBhbHQ9XCJibG9nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmlubGluZS1mbGV4IGgtMzIgbGc6aC1mdWxsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTRcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTd4bCBmb250LWJvbGQgdGV4dC1ncmVlbi01MDBcIj57dGV4dH08L2gxPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtN3hsIGZvbnQtYm9sZFwiPkJsb2dzIGZvciBldmVyeW9uZTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBweC01IHB5LTI0IG1kOmZsZXgtcm93IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmZsZXgtZ3JvdyBtZDp3LTEvMiBsZzpwci0yNCBtZDpwci0xNiBmbGV4IGZsZXgtY29sIG1kOml0ZW1zLXN0YXJ0IG1kOnRleHQtbGVmdCBtYi0xNiBtZDptYi0wIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzbTp0ZXh0LTR4bCB0ZXh0LTN4bCBtYi00IGZvbnQtYm9sZCBsaW5lLWNsYW1wLTJcIj57cG9zdHNbMF0udGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04IGxlYWRpbmctcmVsYXhlZCBsaW5lLWNsYW1wLTRcIj57cG9zdHNbMF0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCB0ZXh0LXdoaXRlIGJvcmRlci0wIHB5LTIgcHgtNiBmb2N1czpvdXRsaW5lLW5vbmUgcm91bmRlZCB0ZXh0LWxnIGJnLWdyZWVuLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBrZXk9e3Bvc3RzWzBdLl9pZH0gaHJlZj17YC9wb3N0LyR7cG9zdHNbMF0uc2x1Zy5jdXJyZW50fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgXCI+UmVhZCBNb3JlPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6bWF4LXctbGcgbGc6dy1mdWxsIG1kOnctMS8yIHNtOnctMCB4czp3LTAgdy01LzZcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctNi84IG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHJvdW5kZWRcIiBhbHQ9XCJoZXJvXCIgc3JjPXt1cmxGb3IocG9zdHNbMF0ubWFpbkltYWdlKS51cmwoKSF9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtYi02IFwiIC8+XHJcblxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgZm9udC1zYW5zIG14LTZcIj5MYXRlc3QgUG9zdHM8L2gxPlxyXG5cclxuICAgICAgICB7LyogUG9zdHMgc2VjdGlvbiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTMgbWQ6Z2FwLTYgcC0yIG1kOnAtNlwiPlxyXG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e3Bvc3QuX2lkfSBocmVmPXtgL3Bvc3QvJHtwb3N0LnNsdWcuY3VycmVudH1gfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJvcmRlci1yb3VuZGVkLWxnIHJvdW5kZWQgZ3JvdXAgY3Vyc29yLXBvaW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy14bFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYwIHctZnVsbCBvYmplY3QtY292ZXIgZ3JvdXAtaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTQwMCBlYXNlLWluLW91dFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKHBvc3QubWFpbkltYWdlKS51cmwoKSF9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHAtNSBiZy13aGl0ZSBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcyIHRleHQtanVzdGlmeSBoLTQwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgY2FwaXRhbGl6ZSBsaW5lLWNsYW1wLTIgdGV4dC1ibGFja1wiPntwb3N0LnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmxhY2sgbGluZS1jbGFtcC0zXCIgPntwb3N0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtd2hpdGUgYmctZ3JlZW4tNTAwIHAtMiByb3VuZGVkLWZ1bGxcIj57cG9zdC5hdXRob3IubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTUgYm90dG9tLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj4zIG1pbiByZWFkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTEwIHctMTAgcm91bmRlZC1mdWxsXCIgc3JjPXt1cmxGb3IocG9zdC5hdXRob3IuaW1hZ2UpLnVybCgpIX0gYWx0PXtwb3N0LmF1dGhvci5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lckJsb2NrPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInBvc3RcIl17XHJcbiAgICBfaWQsXHJcbiAgICB0aXRsZSxcclxuICAgIHNsdWcsXHJcbiAgICBhdXRob3IgLT4ge1xyXG4gICAgbmFtZSwgXHJcbiAgICBpbWFnZVxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgbWFpbkltYWdlLFxyXG4gIHNsdWdcclxuICB9YDtcclxuXHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdHMsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgY3JlYXRlQ3VycmVudFVzZXJIb29rLFxyXG4gICAgY3JlYXRlQ2xpZW50LFxyXG59IGZyb20gXCJuZXh0LXNhbml0eVwiO1xyXG5pbXBvcnQgY3JlYXRlSW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGRhdGFzZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIHx8IFwicHJvZHVjdGlvblwiLFxyXG4gICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCxcclxuICAgIGFwaVZlcnNpb246IFwiMjAyMS0wMy0yNVwiLFxyXG4gICAgdXNlQ2RuOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNhbml0eUNsaWVudCA9IGNyZWF0ZUNsaWVudChjb25maWcpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB1cmxGb3IgPSAoc291cmNlKSA9PiBjcmVhdGVJbWFnZVVybEJ1aWxkZXIoY29uZmlnKS5pbWFnZShzb3VyY2UpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUN1cnJlbnRVc2VyID0gY3JlYXRlQ3VycmVudFVzZXJIb29rKGNvbmZpZyk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhbml0eS9pbWFnZS11cmxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2FuaXR5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXRoZW1lc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=