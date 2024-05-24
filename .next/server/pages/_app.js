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

/***/ "./client/contexts/ThemeContext.js":
/*!*****************************************!*\
  !*** ./client/contexts/ThemeContext.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),\n/* harmony export */   useTheme: () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// client/contexts/ThemeContext.js\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    theme: \"light\",\n    toggleTheme: ()=>{}\n});\nconst ThemeProvider = ({ children })=>{\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\");\n    const toggleTheme = ()=>{\n        const newTheme = theme === \"light\" ? \"dark\" : \"light\";\n        setTheme(newTheme);\n        if (false) {}\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedTheme =  false ? 0 : \"light\";\n        if (storedTheme) {\n            setTheme(storedTheme);\n            document.documentElement.className = storedTheme;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggleTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Taipy Cmms\\\\client\\\\contexts\\\\ThemeContext.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\nconst useTheme = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29udGV4dHMvVGhlbWVDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGtDQUFrQzs7QUFDNEM7QUFFOUUsTUFBTUssNkJBQWVKLG9EQUFhQSxDQUFDO0lBQ2pDSyxPQUFPO0lBQ1BDLGFBQWEsS0FBTztBQUN0QjtBQUVPLE1BQU1DLGdCQUFnQixDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN4QyxNQUFNLENBQUNILE9BQU9JLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFFbkMsTUFBTUksY0FBYztRQUNsQixNQUFNSSxXQUFXTCxVQUFVLFVBQVUsU0FBUztRQUM5Q0ksU0FBU0M7UUFDVCxJQUFJLEtBQWtCLEVBQWEsRUFHbEM7SUFDSDtJQUVBUCxnREFBU0EsQ0FBQztRQUNSLE1BQU1hLGNBQWMsTUFBa0IsR0FBY0wsQ0FBcUIsR0FBVztRQUNwRixJQUFJSyxhQUFhO1lBQ2ZQLFNBQVNPO1lBQ1RILFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxHQUFHQztRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDWixhQUFhYyxRQUFRO1FBQUNDLE9BQU87WUFBRWQ7WUFBT0M7UUFBWTtrQkFDaERFOzs7Ozs7QUFHUCxFQUFFO0FBRUssTUFBTVksV0FBVyxJQUFNbkIsaURBQVVBLENBQUNHLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbW1zLy4vY2xpZW50L2NvbnRleHRzL1RoZW1lQ29udGV4dC5qcz85MDA3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNsaWVudC9jb250ZXh0cy9UaGVtZUNvbnRleHQuanNcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICB0aGVtZTogJ2xpZ2h0JyxcclxuICB0b2dnbGVUaGVtZTogKCkgPT4ge31cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKCdsaWdodCcpO1xyXG5cclxuICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RoZW1lID0gdGhlbWUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnO1xyXG4gICAgc2V0VGhlbWUobmV3VGhlbWUpO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIG5ld1RoZW1lKTtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSA9IG5ld1RoZW1lO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRUaGVtZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgOiAnbGlnaHQnO1xyXG4gICAgaWYgKHN0b3JlZFRoZW1lKSB7XHJcbiAgICAgIHNldFRoZW1lKHN0b3JlZFRoZW1lKTtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSA9IHN0b3JlZFRoZW1lO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdGhlbWUsIHRvZ2dsZVRoZW1lIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVRoZW1lID0gKCkgPT4gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVGhlbWVDb250ZXh0IiwidGhlbWUiLCJ0b2dnbGVUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldFRoZW1lIiwibmV3VGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdG9yZWRUaGVtZSIsImdldEl0ZW0iLCJQcm92aWRlciIsInZhbHVlIiwidXNlVGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/contexts/ThemeContext.js\n");

/***/ }),

/***/ "./i18n.ts":
/*!*****************!*\
  !*** ./i18n.ts ***!
  \*****************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next-http-backend */ \"i18next-http-backend\");\n/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next-browser-languagedetector */ \"i18next-browser-languagedetector\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__, i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__, i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3__]);\n([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__, i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__, i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\ni18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({\n    fallbackLng: \"pt\",\n    backend: {\n        loadPath: \"/locales/{{lng}}/translation.json\"\n    },\n    ns: [\n        \"common\"\n    ],\n    defaultNS: \"common\",\n    react: {\n        useSuspense: false\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pMThuLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJCO0FBQ3NCO0FBQ047QUFDcUI7QUFFaEVBLG1EQUNNLENBQUNFLDREQUFPQSxFQUNYRSxHQUFHLENBQUNELHdFQUFnQkEsRUFDcEJDLEdBQUcsQ0FBQ0gsMkRBQWdCQSxFQUNwQkksSUFBSSxDQUFDO0lBQ0pDLGFBQWE7SUFDYkMsU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsSUFBSTtRQUFDO0tBQVM7SUFDZEMsV0FBVztJQUNYQyxPQUFPO1FBQ0xDLGFBQWE7SUFDZjtBQUNGO0FBRUYsaUVBQWVaLCtDQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY21tcy8uL2kxOG4udHM/OTcwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaTE4biBmcm9tICdpMThuZXh0JztcclxuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgQmFja2VuZCBmcm9tICdpMThuZXh0LWh0dHAtYmFja2VuZCc7XHJcbmltcG9ydCBMYW5ndWFnZURldGVjdG9yIGZyb20gJ2kxOG5leHQtYnJvd3Nlci1sYW5ndWFnZWRldGVjdG9yJztcclxuXHJcbmkxOG5cclxuICAudXNlKEJhY2tlbmQpXHJcbiAgLnVzZShMYW5ndWFnZURldGVjdG9yKVxyXG4gIC51c2UoaW5pdFJlYWN0STE4bmV4dClcclxuICAuaW5pdCh7XHJcbiAgICBmYWxsYmFja0xuZzogJ3B0JyxcclxuICAgIGJhY2tlbmQ6IHtcclxuICAgICAgbG9hZFBhdGg6ICcvbG9jYWxlcy97e2xuZ319L3RyYW5zbGF0aW9uLmpzb24nLFxyXG4gICAgfSxcclxuICAgIG5zOiBbJ2NvbW1vbiddLFxyXG4gICAgZGVmYXVsdE5TOiAnY29tbW9uJyxcclxuICAgIHJlYWN0OiB7XHJcbiAgICAgIHVzZVN1c3BlbnNlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpMThuO1xyXG4iXSwibmFtZXMiOlsiaTE4biIsImluaXRSZWFjdEkxOG5leHQiLCJCYWNrZW5kIiwiTGFuZ3VhZ2VEZXRlY3RvciIsInVzZSIsImluaXQiLCJmYWxsYmFja0xuZyIsImJhY2tlbmQiLCJsb2FkUGF0aCIsIm5zIiwiZGVmYXVsdE5TIiwicmVhY3QiLCJ1c2VTdXNwZW5zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./i18n.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/contexts/ThemeContext */ \"./client/contexts/ThemeContext.js\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../i18n */ \"./i18n.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_i18n__WEBPACK_IMPORTED_MODULE_4__]);\n_i18n__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n // Certifique-se de importar o i18n aqui\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_client_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Taipy Cmms\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Taipy Cmms\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.appWithTranslation)(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ2lDO0FBQ2Q7QUFDakMsQ0FBQyx3Q0FBd0M7QUFFMUQsU0FBU0UsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ0osd0VBQWFBO2tCQUNaLDRFQUFDRztZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVILGdFQUFrQkEsQ0FBQ0MsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NtbXMvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJy4uL2NsaWVudC9jb250ZXh0cy9UaGVtZUNvbnRleHQnO1xyXG5pbXBvcnQgeyBhcHBXaXRoVHJhbnNsYXRpb24gfSBmcm9tICduZXh0LWkxOG5leHQnO1xyXG5pbXBvcnQgJy4uL2kxOG4nOyAvLyBDZXJ0aWZpcXVlLXNlIGRlIGltcG9ydGFyIG8gaTE4biBhcXVpXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBXaXRoVHJhbnNsYXRpb24oTXlBcHApO1xyXG4iXSwibmFtZXMiOlsiVGhlbWVQcm92aWRlciIsImFwcFdpdGhUcmFuc2xhdGlvbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

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

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("i18next");;

/***/ }),

/***/ "i18next-browser-languagedetector":
/*!***************************************************!*\
  !*** external "i18next-browser-languagedetector" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("i18next-browser-languagedetector");;

/***/ }),

/***/ "i18next-http-backend":
/*!***************************************!*\
  !*** external "i18next-http-backend" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("i18next-http-backend");;

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-i18next");;

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