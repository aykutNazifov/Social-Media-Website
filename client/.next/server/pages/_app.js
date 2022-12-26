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

/***/ "./context/AuthContextProvider.tsx":
/*!*****************************************!*\
  !*** ./context/AuthContextProvider.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst AuthContextProvider = ({ children  })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const userData = localStorage.getItem(\"user\");\n        setUser(JSON.parse(userData));\n        if (JSON.parse(userData) === null) {\n            router.push(\"/login\");\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user !== null) {\n            localStorage.setItem(\"user\", JSON.stringify(user));\n        }\n    }, [\n        user\n    ]);\n    const login = (data)=>{\n        setUser(data);\n    };\n    const logout = ()=>{\n        setUser(null);\n        localStorage.setItem(\"user\", null);\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/aykut/social-media-example/client/context/AuthContextProvider.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContextProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0UHJvdmlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDMkQ7QUFDbkI7QUFFakMsTUFBTUksNEJBQWNKLG9EQUFhQSxDQUFDLElBQUksRUFBRTtBQUUvQyxNQUFNSyxzQkFBc0IsQ0FBQyxFQUFFQyxTQUFRLEVBQUUsR0FBSztJQUM1QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUMsSUFBSTtJQUNyQyxNQUFNTyxTQUFTTixzREFBU0E7SUFFeEJGLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNUyxXQUFXQyxhQUFhQyxPQUFPLENBQUM7UUFDdENKLFFBQVFLLEtBQUtDLEtBQUssQ0FBQ0o7UUFFbkIsSUFBSUcsS0FBS0MsS0FBSyxDQUFDSixjQUFjLElBQUksRUFBRTtZQUNqQ0QsT0FBT00sSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVMZCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSU0sU0FBUyxJQUFJLEVBQUU7WUFDakJJLGFBQWFLLE9BQU8sQ0FBQyxRQUFRSCxLQUFLSSxTQUFTLENBQUNWO1FBQzlDLENBQUM7SUFDSCxHQUFHO1FBQUNBO0tBQUs7SUFFVCxNQUFNVyxRQUFRLENBQUNDLE9BQVM7UUFDdEJYLFFBQVFXO0lBQ1Y7SUFFQSxNQUFNQyxTQUFTLElBQU07UUFDbkJaLFFBQVEsSUFBSTtRQUNaRyxhQUFhSyxPQUFPLENBQUMsUUFBUSxJQUFJO1FBQ2pDUCxPQUFPTSxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDWCxZQUFZaUIsUUFBUTtRQUFDQyxPQUFPO1lBQUVmO1lBQU1XO1lBQU9FO1FBQU87a0JBQ2hEZDs7Ozs7O0FBR1A7QUFFQSxpRUFBZUQsbUJBQW1CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhLWV4YW1wbGUvLi9jb250ZXh0L0F1dGhDb250ZXh0UHJvdmlkZXIudHN4Pzc4NzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuXG5jb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKTtcbiAgICBzZXRVc2VyKEpTT04ucGFyc2UodXNlckRhdGEpKTtcblxuICAgIGlmIChKU09OLnBhcnNlKHVzZXJEYXRhKSA9PT0gbnVsbCkge1xuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlciAhPT0gbnVsbCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICB9XG4gIH0sIFt1c2VyXSk7XG5cbiAgY29uc3QgbG9naW4gPSAoZGF0YSkgPT4ge1xuICAgIHNldFVzZXIoZGF0YSk7XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIHNldFVzZXIobnVsbCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIG51bGwpO1xuICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGxvZ2luLCBsb2dvdXQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0UHJvdmlkZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQXV0aENvbnRleHQiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInJvdXRlciIsInVzZXJEYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibG9naW4iLCJkYXRhIiwibG9nb3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContextProvider.tsx\n");

/***/ }),

/***/ "./context/ThemeContextProvider.tsx":
/*!******************************************!*\
  !*** ./context/ThemeContextProvider.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeContext\": () => (/* binding */ ThemeContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst ThemeContextProvider = ({ children  })=>{\n    const [darkMode, setDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const togleDarkMode = ()=>setDarkMode(!darkMode);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            darkMode,\n            togleDarkMode\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/aykut/social-media-example/client/context/ThemeContextProvider.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeContextProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1RoZW1lQ29udGV4dFByb3ZpZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFnRDtBQU96QyxNQUFNRSw2QkFBZUYsb0RBQWFBLENBQWdCLElBQUksRUFBRTtBQUUvRCxNQUFNRyx1QkFBdUIsQ0FBQyxFQUFFQyxTQUFRLEVBQUUsR0FBSztJQUM3QyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsSUFBSTtJQUU3QyxNQUFNTSxnQkFBZ0IsSUFBTUQsWUFBWSxDQUFDRDtJQUN6QyxxQkFDRSw4REFBQ0gsYUFBYU0sUUFBUTtRQUFDQyxPQUFPO1lBQUVKO1lBQVVFO1FBQWM7a0JBQ3JESDs7Ozs7O0FBR1A7QUFFQSxpRUFBZUQsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhLWV4YW1wbGUvLi9jb250ZXh0L1RoZW1lQ29udGV4dFByb3ZpZGVyLnRzeD9lY2YwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgSVRoZW1lQ29udGV4dCB7XHJcbiAgZGFya01vZGU6IGJvb2xlYW47XHJcbiAgdG9nbGVEYXJrTW9kZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SVRoZW1lQ29udGV4dD4obnVsbCk7XHJcblxyXG5jb25zdCBUaGVtZUNvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbZGFya01vZGUsIHNldERhcmtNb2RlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCB0b2dsZURhcmtNb2RlID0gKCkgPT4gc2V0RGFya01vZGUoIWRhcmtNb2RlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBkYXJrTW9kZSwgdG9nbGVEYXJrTW9kZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lQ29udGV4dFByb3ZpZGVyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiVGhlbWVDb250ZXh0IiwiVGhlbWVDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImRhcmtNb2RlIiwic2V0RGFya01vZGUiLCJ0b2dsZURhcmtNb2RlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/ThemeContextProvider.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ThemeContextProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ThemeContextProvider */ \"./context/ThemeContextProvider.tsx\");\n/* harmony import */ var _context_AuthContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContextProvider */ \"./context/AuthContextProvider.tsx\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContextProvider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ThemeContextProvider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/aykut/social-media-example/client/pages/_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/aykut/social-media-example/client/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/aykut/social-media-example/client/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDb0M7QUFDRjtBQUVqRSxTQUFTRSxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDdkMscUJBQ0UsOERBQUNILG9FQUFtQkE7a0JBQ2xCLDRFQUFDRCxxRUFBb0JBO3NCQUNuQiw0RUFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhLWV4YW1wbGUvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFRoZW1lQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0L1RoZW1lQ29udGV4dFByb3ZpZGVyXCI7XG5pbXBvcnQgQXV0aENvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dC9BdXRoQ29udGV4dFByb3ZpZGVyXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dFByb3ZpZGVyPlxuICAgICAgPFRoZW1lQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lQ29udGV4dFByb3ZpZGVyPlxuICAgIDwvQXV0aENvbnRleHRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiVGhlbWVDb250ZXh0UHJvdmlkZXIiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();