"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/build-client.ts":
/*!*****************************!*\
  !*** ./api/build-client.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ req })=>{\n    if (true) {\n        return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n            baseURL: \"http://ingress-nginx-controller.ingress-nginx.svc.cluster.local\",\n            headers: req.headers\n        });\n    }\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create();\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtEO0FBRWxELGlFQUFlLENBQUMsRUFBRUMsR0FBRyxFQUErQjtJQUNsRCxJQUFJLElBQTZCLEVBQUU7UUFDakMsT0FBT0Qsb0RBQVksQ0FBQztZQUNsQkcsU0FDRTtZQUNGQyxTQUFTSCxJQUFJRyxPQUFPO1FBQ3RCO0lBQ0Y7SUFFQSxPQUFPSixvREFBWTtBQUNyQixHQUFFIiwic291cmNlcyI6WyIvaG9tZS9udWxjeS9EZXNrdG9wL3Byb2plY3RzL3RpY2tldGluZy1hcHAvY2xpZW50L2FwaS9idWlsZC1jbGllbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyByZXEgfTogeyByZXE6IEF4aW9zUmVxdWVzdENvbmZpZyB9KSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XG4gICAgICBiYXNlVVJMOlxuICAgICAgICBcImh0dHA6Ly9pbmdyZXNzLW5naW54LWNvbnRyb2xsZXIuaW5ncmVzcy1uZ2lueC5zdmMuY2x1c3Rlci5sb2NhbFwiLFxuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gYXhpb3MuY3JlYXRlKCk7XG59O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/build-client.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AppComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/.pnpm/bootstrap@5.3.3_@popperjs+core@2.11.8/node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_build_client__WEBPACK_IMPORTED_MODULE_2__]);\n_api_build_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction AppComponent({ Component, pageProps, currentUser }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Hello \",\n                    currentUser.email\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nulcy/Desktop/projects/ticketing-app/client/pages/_app.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/nulcy/Desktop/projects/ticketing-app/client/pages/_app.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nAppComponent.getInitialProps = async (appContext)=>{\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(appContext.ctx);\n    const { data } = await client.get(\"/api/users/currentuser\");\n    let pageProps = {};\n    if (appContext.Component.getInitialProps) {\n        pageProps = appContext.Component.getInitialProps(appContext.ctx);\n    }\n    return {\n        pageProps,\n        ...data\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0k7QUFFL0IsU0FBU0MsYUFBYSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFO0lBQ3hFLHFCQUNFOzswQkFDRSw4REFBQ0M7O29CQUFHO29CQUFPRCxZQUFZRSxLQUFLOzs7Ozs7OzBCQUM1Qiw4REFBQ0o7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7QUFHOUI7QUFFQUYsYUFBYU0sZUFBZSxHQUFHLE9BQU9DO0lBQ3BDLE1BQU1DLFNBQVNULDZEQUFXQSxDQUFDUSxXQUFXRSxHQUFHO0lBQ3pDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTUYsT0FBT0csR0FBRyxDQUFDO0lBRWxDLElBQUlULFlBQVksQ0FBQztJQUNqQixJQUFJSyxXQUFXTixTQUFTLENBQUNLLGVBQWUsRUFBRTtRQUN4Q0osWUFBWUssV0FBV04sU0FBUyxDQUFDSyxlQUFlLENBQUNDLFdBQVdFLEdBQUc7SUFDakU7SUFFQSxPQUFPO1FBQ0xQO1FBQ0EsR0FBR1EsSUFBSTtJQUNUO0FBQ0YiLCJzb3VyY2VzIjpbIi9ob21lL251bGN5L0Rlc2t0b3AvcHJvamVjdHMvdGlja2V0aW5nLWFwcC9jbGllbnQvcGFnZXMvX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3NcIjtcbmltcG9ydCBidWlsZENsaWVudCBmcm9tIFwiLi4vYXBpL2J1aWxkLWNsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBDb21wb25lbnQoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgY3VycmVudFVzZXIgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+SGVsbG8ge2N1cnJlbnRVc2VyLmVtYWlsfTwvaDE+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbkFwcENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuICBjb25zdCBjbGllbnQgPSBidWlsZENsaWVudChhcHBDb250ZXh0LmN0eCk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdldChcIi9hcGkvdXNlcnMvY3VycmVudHVzZXJcIik7XG5cbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuICBpZiAoYXBwQ29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgcGFnZVByb3BzID0gYXBwQ29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQuY3R4KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGFnZVByb3BzLFxuICAgIC4uLmRhdGEsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImJ1aWxkQ2xpZW50IiwiQXBwQ29tcG9uZW50IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3VycmVudFVzZXIiLCJoMSIsImVtYWlsIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsImNsaWVudCIsImN0eCIsImRhdGEiLCJnZXQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/bootstrap@5.3.3_@popperjs+core@2.11.8"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();