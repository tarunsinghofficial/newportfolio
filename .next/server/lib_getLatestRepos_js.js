exports.id = "lib_getLatestRepos_js";
exports.ids = ["lib_getLatestRepos_js"];
exports.modules = {

/***/ "./lib/getLatestRepos.js":
/*!*******************************!*\
  !*** ./lib/getLatestRepos.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const getLatestRepos = async (data, token) => {
  // console.log("data", data);
  try {
    const username = data.githubUsername; // let token = `token ${process.env.GITHUB_AUTH_TOKEN}`;
    // console.log("TOKEN", token);

    if (token) {
      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`, {
        headers: {
          Authorization: `token ${token}`
        }
      });
      let repos = res.data.items;
      let latestSixRepos = repos.splice(0, 6); // console.log("LATEST 6 repos", latestSixRepos);

      return latestSixRepos;
    } else {
      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`);
      let repos = res.data.items;
      let latestSixRepos = repos.splice(0, 6);
      return latestSixRepos;
    }
  } catch (err) {
    console.log(err);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getLatestRepos);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9saWIvZ2V0TGF0ZXN0UmVwb3MuanMiXSwibmFtZXMiOlsiZ2V0TGF0ZXN0UmVwb3MiLCJkYXRhIiwidG9rZW4iLCJ1c2VybmFtZSIsImdpdGh1YlVzZXJuYW1lIiwicmVzIiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlcG9zIiwiaXRlbXMiLCJsYXRlc3RTaXhSZXBvcyIsInNwbGljZSIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLE9BQU9DLElBQVAsRUFBYUMsS0FBYixLQUF1QjtBQUM1QztBQUNBLE1BQUk7QUFDRixVQUFNQyxRQUFRLEdBQUdGLElBQUksQ0FBQ0csY0FBdEIsQ0FERSxDQUdGO0FBQ0E7O0FBRUEsUUFBSUYsS0FBSixFQUFXO0FBQ1QsWUFBTUcsR0FBRyxHQUFHLE1BQU1DLGdEQUFBLENBQ2YscURBQW9ESCxRQUFTLHVCQUQ5QyxFQUVoQjtBQUNFSSxlQUFPLEVBQUU7QUFDUEMsdUJBQWEsRUFBRyxTQUFRTixLQUFNO0FBRHZCO0FBRFgsT0FGZ0IsQ0FBbEI7QUFRQSxVQUFJTyxLQUFLLEdBQUdKLEdBQUcsQ0FBQ0osSUFBSixDQUFTUyxLQUFyQjtBQUNBLFVBQUlDLGNBQWMsR0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFyQixDQVZTLENBV1Q7O0FBQ0EsYUFBT0QsY0FBUDtBQUNELEtBYkQsTUFhTztBQUNMLFlBQU1OLEdBQUcsR0FBRyxNQUFNQyxnREFBQSxDQUNmLHFEQUFvREgsUUFBUyx1QkFEOUMsQ0FBbEI7QUFHQSxVQUFJTSxLQUFLLEdBQUdKLEdBQUcsQ0FBQ0osSUFBSixDQUFTUyxLQUFyQjtBQUNBLFVBQUlDLGNBQWMsR0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFyQjtBQUNBLGFBQU9ELGNBQVA7QUFDRDtBQUNGLEdBM0JELENBMkJFLE9BQU9FLEdBQVAsRUFBWTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBQ0YsQ0FoQ0Q7O0FBa0NBLCtEQUFlYixjQUFmLEUiLCJmaWxlIjoibGliX2dldExhdGVzdFJlcG9zX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgZ2V0TGF0ZXN0UmVwb3MgPSBhc3luYyAoZGF0YSwgdG9rZW4pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gZGF0YS5naXRodWJVc2VybmFtZTtcclxuXHJcbiAgICAvLyBsZXQgdG9rZW4gPSBgdG9rZW4gJHtwcm9jZXNzLmVudi5HSVRIVUJfQVVUSF9UT0tFTn1gO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJUT0tFTlwiLCB0b2tlbik7XHJcblxyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9dXNlcjoke3VzZXJuYW1lfStzb3J0OmF1dGhvci1kYXRlLWFzY2AsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGxldCByZXBvcyA9IHJlcy5kYXRhLml0ZW1zO1xyXG4gICAgICBsZXQgbGF0ZXN0U2l4UmVwb3MgPSByZXBvcy5zcGxpY2UoMCwgNik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiTEFURVNUIDYgcmVwb3NcIiwgbGF0ZXN0U2l4UmVwb3MpO1xyXG4gICAgICByZXR1cm4gbGF0ZXN0U2l4UmVwb3M7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3JlcG9zaXRvcmllcz9xPXVzZXI6JHt1c2VybmFtZX0rc29ydDphdXRob3ItZGF0ZS1hc2NgXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCByZXBvcyA9IHJlcy5kYXRhLml0ZW1zO1xyXG4gICAgICBsZXQgbGF0ZXN0U2l4UmVwb3MgPSByZXBvcy5zcGxpY2UoMCwgNik7XHJcbiAgICAgIHJldHVybiBsYXRlc3RTaXhSZXBvcztcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0TGF0ZXN0UmVwb3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=