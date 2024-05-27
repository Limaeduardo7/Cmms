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

/***/ "./client/contexts/CurrencyContext.tsx":
/*!*********************************************!*\
  !*** ./client/contexts/CurrencyContext.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CurrencyProvider: () => (/* binding */ CurrencyProvider),\n/* harmony export */   useCurrency: () => (/* binding */ useCurrency)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CurrencyContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst useCurrency = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CurrencyContext);\n    if (!context) {\n        throw new Error(\"useCurrency must be used within a CurrencyProvider\");\n    }\n    return context;\n};\nconst CurrencyProvider = ({ children })=>{\n    const [currency, setCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"USD\");\n    const formatCurrency = (value, currency)=>{\n        return new Intl.NumberFormat(\"en-US\", {\n            style: \"currency\",\n            currency\n        }).format(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CurrencyContext.Provider, {\n        value: {\n            currency,\n            setCurrency,\n            formatCurrency\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Taipy Cmms\\\\client\\\\contexts\\\\CurrencyContext.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29udGV4dHMvQ3VycmVuY3lDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThFO0FBUTlFLE1BQU1JLGdDQUFrQkgsb0RBQWFBLENBQW1DSTtBQUVqRSxNQUFNQyxjQUFjO0lBQ3pCLE1BQU1DLFVBQVVMLGlEQUFVQSxDQUFDRTtJQUMzQixJQUFJLENBQUNHLFNBQVM7UUFDWixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxPQUFPRDtBQUNULEVBQUU7QUFFSyxNQUFNRSxtQkFBbUIsQ0FBQyxFQUFFQyxRQUFRLEVBQTJCO0lBQ3BFLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNVSxpQkFBaUIsQ0FBQ0MsT0FBZUg7UUFDckMsT0FBTyxJQUFJSSxLQUFLQyxZQUFZLENBQUMsU0FBUztZQUFFQyxPQUFPO1lBQVlOO1FBQVMsR0FBR08sTUFBTSxDQUFDSjtJQUNoRjtJQUVBLHFCQUNFLDhEQUFDVixnQkFBZ0JlLFFBQVE7UUFBQ0wsT0FBTztZQUFFSDtZQUFVQztZQUFhQztRQUFlO2tCQUN0RUg7Ozs7OztBQUdQLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbW1zLy4vY2xpZW50L2NvbnRleHRzL0N1cnJlbmN5Q29udGV4dC50c3g/ZTE3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBDdXJyZW5jeUNvbnRleHRQcm9wcyB7XHJcbiAgY3VycmVuY3k6IHN0cmluZztcclxuICBzZXRDdXJyZW5jeTogKGN1cnJlbmN5OiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgZm9ybWF0Q3VycmVuY3k6ICh2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeTogc3RyaW5nKSA9PiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEN1cnJlbmN5Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Q3VycmVuY3lDb250ZXh0UHJvcHMgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ3VycmVuY3kgPSAoKTogQ3VycmVuY3lDb250ZXh0UHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEN1cnJlbmN5Q29udGV4dCk7XHJcbiAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUN1cnJlbmN5IG11c3QgYmUgdXNlZCB3aXRoaW4gYSBDdXJyZW5jeVByb3ZpZGVyJyk7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEN1cnJlbmN5UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW5jeSwgc2V0Q3VycmVuY3ldID0gdXNlU3RhdGUoJ1VTRCcpO1xyXG5cclxuICBjb25zdCBmb3JtYXRDdXJyZW5jeSA9ICh2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywgeyBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3kgfSkuZm9ybWF0KHZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEN1cnJlbmN5Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjdXJyZW5jeSwgc2V0Q3VycmVuY3ksIGZvcm1hdEN1cnJlbmN5IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0N1cnJlbmN5Q29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQ3VycmVuY3lDb250ZXh0IiwidW5kZWZpbmVkIiwidXNlQ3VycmVuY3kiLCJjb250ZXh0IiwiRXJyb3IiLCJDdXJyZW5jeVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjdXJyZW5jeSIsInNldEN1cnJlbmN5IiwiZm9ybWF0Q3VycmVuY3kiLCJ2YWx1ZSIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImZvcm1hdCIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/contexts/CurrencyContext.tsx\n");

/***/ }),

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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/contexts/ThemeContext */ \"./client/contexts/ThemeContext.js\");\n/* harmony import */ var _client_contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/contexts/CurrencyContext */ \"./client/contexts/CurrencyContext.tsx\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../i18n */ \"./i18n.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_i18n__WEBPACK_IMPORTED_MODULE_5__]);\n_i18n__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n // Certifique-se de importar o i18n aqui\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_client_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_client_contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_3__.CurrencyProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Taipy Cmms\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Taipy Cmms\\\\pages\\\\_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Taipy Cmms\\\\pages\\\\_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.appWithTranslation)(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNpQztBQUNNO0FBQ3BCO0FBQ2pDLENBQUMsd0NBQXdDO0FBRTFELFNBQVNHLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0UsOERBQUNMLHdFQUFhQTtrQkFDWiw0RUFBQ0MsOEVBQWdCQTtzQkFDZiw0RUFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztBQUVBLGlFQUFlSCxnRUFBa0JBLENBQUNDLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbW1zLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICcuLi9jbGllbnQvY29udGV4dHMvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgQ3VycmVuY3lQcm92aWRlciB9IGZyb20gJy4uL2NsaWVudC9jb250ZXh0cy9DdXJyZW5jeUNvbnRleHQnO1xyXG5pbXBvcnQgeyBhcHBXaXRoVHJhbnNsYXRpb24gfSBmcm9tICduZXh0LWkxOG5leHQnO1xyXG5pbXBvcnQgJy4uL2kxOG4nOyAvLyBDZXJ0aWZpcXVlLXNlIGRlIGltcG9ydGFyIG8gaTE4biBhcXVpXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXI+XHJcbiAgICAgIDxDdXJyZW5jeVByb3ZpZGVyPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9DdXJyZW5jeVByb3ZpZGVyPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcFdpdGhUcmFuc2xhdGlvbihNeUFwcCk7XHJcbiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwiQ3VycmVuY3lQcm92aWRlciIsImFwcFdpdGhUcmFuc2xhdGlvbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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