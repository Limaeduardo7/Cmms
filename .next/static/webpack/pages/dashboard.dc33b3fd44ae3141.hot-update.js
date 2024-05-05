"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./pages/dashboard.tsx":
/*!*****************************!*\
  !*** ./pages/dashboard.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/components/Layout */ \"./client/components/Layout.js\");\n/* harmony import */ var _client_components_BarChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/components/BarChart */ \"./client/components/BarChart.tsx\");\n/* harmony import */ var _client_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/contexts/ThemeContext */ \"./client/contexts/ThemeContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const { theme } = (0,_client_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useTheme)();\n    const indicators = [\n        {\n            label: \"Disponibilidade\",\n            value: \"99.68%\"\n        },\n        {\n            label: \"Confiabilidade\",\n            value: \"75.04%\"\n        },\n        {\n            label: \"MTBF\",\n            value: \"104d 11h\"\n        },\n        {\n            label: \"MTTA\",\n            value: \"14h 26min\"\n        },\n        {\n            label: \"MTTR\",\n            value: \"21h 17min\"\n        }\n    ];\n    const dataSets = {\n        Disponibilidade: [\n            {\n                label: \"Jan\",\n                value: 98\n            },\n            {\n                label: \"Fev\",\n                value: 96\n            }\n        ],\n        Confiabilidade: [\n            {\n                label: \"Jan\",\n                value: 75\n            },\n            {\n                label: \"Fev\",\n                value: 77\n            }\n        ],\n        MTBF: [\n            {\n                label: \"Jan\",\n                value: 120\n            },\n            {\n                label: \"Fev\",\n                value: 110\n            }\n        ],\n        MTTA: [\n            {\n                label: \"Jan\",\n                value: 130\n            },\n            {\n                label: \"Fev\",\n                value: 120\n            }\n        ],\n        MTTR: [\n            {\n                label: \"Jan\",\n                value: 140\n            },\n            {\n                label: \"Fev\",\n                value: 130\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_client_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        pageTitle: \"Dashboard de Indicadores de Manuten\\xe7\\xe3o\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl font-bold mb-4 ml-4\",\n                    children: \"Dashboard\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Taipy Cmms\\\\pages\\\\dashboard.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap justify-between items-start\",\n                    children: indicators.map((indicator)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 min-w-[20%] p-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"font-semibold \".concat(theme === \"dark\" ? \"text-white\" : \"text-gray-800\"),\n                                    children: indicator.label\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Taipy Cmms\\\\pages\\\\dashboard.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xl \".concat(theme === \"dark\" ? \"text-white\" : \"text-gray-600\"),\n                                    children: indicator.value\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Taipy Cmms\\\\pages\\\\dashboard.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Taipy Cmms\\\\pages\\\\dashboard.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Taipy Cmms\\\\pages\\\\dashboard.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap justify-between items-start\",\n                    children: Object.entries(dataSets).map((param)=>{\n                        let [title, data] = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 min-w-[48%] p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_client_components_BarChart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                data: data,\n                                title: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Taipy Cmms\\\\pages\\\\dashboard.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Taipy Cmms\\\\pages\\\\dashboard.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Taipy Cmms\\\\pages\\\\dashboard.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Taipy Cmms\\\\pages\\\\dashboard.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Taipy Cmms\\\\pages\\\\dashboard.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dashboard, \"JkSxfi8+JQlqgIgDOc3wQN+nVIw=\", false, function() {\n    return [\n        _client_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useTheme\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDdUI7QUFDSTtBQUNNO0FBRTNELE1BQU1JLFlBQVk7O0lBQ2hCLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdGLHVFQUFRQTtJQUUxQixNQUFNRyxhQUFhO1FBQ2pCO1lBQUVDLE9BQU87WUFBbUJDLE9BQU87UUFBUztRQUM1QztZQUFFRCxPQUFPO1lBQWtCQyxPQUFPO1FBQVM7UUFDM0M7WUFBRUQsT0FBTztZQUFRQyxPQUFPO1FBQVc7UUFDbkM7WUFBRUQsT0FBTztZQUFRQyxPQUFPO1FBQVk7UUFDcEM7WUFBRUQsT0FBTztZQUFRQyxPQUFPO1FBQVk7S0FDckM7SUFFRCxNQUFNQyxXQUFXO1FBQ2ZDLGlCQUFpQjtZQUNmO2dCQUFFSCxPQUFPO2dCQUFPQyxPQUFPO1lBQUc7WUFDMUI7Z0JBQUVELE9BQU87Z0JBQU9DLE9BQU87WUFBRztTQUUzQjtRQUNERyxnQkFBZ0I7WUFDZDtnQkFBRUosT0FBTztnQkFBT0MsT0FBTztZQUFHO1lBQzFCO2dCQUFFRCxPQUFPO2dCQUFPQyxPQUFPO1lBQUc7U0FFM0I7UUFDREksTUFBTTtZQUNKO2dCQUFFTCxPQUFPO2dCQUFPQyxPQUFPO1lBQUk7WUFDM0I7Z0JBQUVELE9BQU87Z0JBQU9DLE9BQU87WUFBSTtTQUU1QjtRQUNESyxNQUFNO1lBQ0o7Z0JBQUVOLE9BQU87Z0JBQU9DLE9BQU87WUFBSTtZQUMzQjtnQkFBRUQsT0FBTztnQkFBT0MsT0FBTztZQUFJO1NBRTVCO1FBQ0RNLE1BQU07WUFDSjtnQkFBRVAsT0FBTztnQkFBT0MsT0FBTztZQUFJO1lBQzNCO2dCQUFFRCxPQUFPO2dCQUFPQyxPQUFPO1lBQUk7U0FFNUI7SUFDSDtJQUVBLHFCQUNFLDhEQUFDUCxpRUFBTUE7UUFBQ2MsV0FBVTtrQkFFaEIsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBOEI7Ozs7Ozs4QkFDNUMsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNaWCxXQUFXYSxHQUFHLENBQUNDLENBQUFBLDBCQUNkLDhEQUFDSjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNJO29DQUFHSixXQUFXLGlCQUFtRSxPQUFsRFosVUFBVSxTQUFTLGVBQWU7OENBQW9CZSxVQUFVYixLQUFLOzs7Ozs7OENBQ3JHLDhEQUFDZTtvQ0FBRUwsV0FBVyxXQUE2RCxPQUFsRFosVUFBVSxTQUFTLGVBQWU7OENBQW9CZSxVQUFVWixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJcEcsOERBQUNRO29CQUFJQyxXQUFVOzhCQUNaTSxPQUFPQyxPQUFPLENBQUNmLFVBQVVVLEdBQUcsQ0FBQzs0QkFBQyxDQUFDTSxPQUFPQyxLQUFLOzZDQUMxQyw4REFBQ1Y7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNmLG1FQUFRQTtnQ0FBQ3dCLE1BQU1BO2dDQUFNRCxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8zQztHQTlETXJCOztRQUNjRCxtRUFBUUE7OztLQUR0QkM7QUFnRU4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLnRzeD9kN2Y2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY2xpZW50L2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEJhckNoYXJ0IGZyb20gJy4uL2NsaWVudC9jb21wb25lbnRzL0JhckNoYXJ0JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi9jbGllbnQvY29udGV4dHMvVGhlbWVDb250ZXh0JztcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG5cclxuICBjb25zdCBpbmRpY2F0b3JzID0gW1xyXG4gICAgeyBsYWJlbDogJ0Rpc3BvbmliaWxpZGFkZScsIHZhbHVlOiAnOTkuNjglJyB9LFxyXG4gICAgeyBsYWJlbDogJ0NvbmZpYWJpbGlkYWRlJywgdmFsdWU6ICc3NS4wNCUnIH0sXHJcbiAgICB7IGxhYmVsOiAnTVRCRicsIHZhbHVlOiAnMTA0ZCAxMWgnIH0sXHJcbiAgICB7IGxhYmVsOiAnTVRUQScsIHZhbHVlOiAnMTRoIDI2bWluJyB9LFxyXG4gICAgeyBsYWJlbDogJ01UVFInLCB2YWx1ZTogJzIxaCAxN21pbicgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGRhdGFTZXRzID0ge1xyXG4gICAgRGlzcG9uaWJpbGlkYWRlOiBbXHJcbiAgICAgIHsgbGFiZWw6ICdKYW4nLCB2YWx1ZTogOTggfSxcclxuICAgICAgeyBsYWJlbDogJ0ZldicsIHZhbHVlOiA5NiB9LFxyXG4gICAgICAvLyBtb3JlIGRhdGEuLi5cclxuICAgIF0sXHJcbiAgICBDb25maWFiaWxpZGFkZTogW1xyXG4gICAgICB7IGxhYmVsOiAnSmFuJywgdmFsdWU6IDc1IH0sXHJcbiAgICAgIHsgbGFiZWw6ICdGZXYnLCB2YWx1ZTogNzcgfSxcclxuICAgICAgLy8gbW9yZSBkYXRhLi4uXHJcbiAgICBdLFxyXG4gICAgTVRCRjogW1xyXG4gICAgICB7IGxhYmVsOiAnSmFuJywgdmFsdWU6IDEyMCB9LFxyXG4gICAgICB7IGxhYmVsOiAnRmV2JywgdmFsdWU6IDExMCB9LFxyXG4gICAgICAvLyBtb3JlIGRhdGEuLi5cclxuICAgIF0sXHJcbiAgICBNVFRBOiBbXHJcbiAgICAgIHsgbGFiZWw6ICdKYW4nLCB2YWx1ZTogMTMwIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdGZXYnLCB2YWx1ZTogMTIwIH0sXHJcbiAgICAgIC8vIG1vcmUgZGF0YS4uLlxyXG4gICAgXSxcclxuICAgIE1UVFI6IFtcclxuICAgICAgeyBsYWJlbDogJ0phbicsIHZhbHVlOiAxNDAgfSxcclxuICAgICAgeyBsYWJlbDogJ0ZldicsIHZhbHVlOiAxMzAgfSxcclxuICAgICAgLy8gbW9yZSBkYXRhLi4uXHJcbiAgICBdXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgcGFnZVRpdGxlPVwiRGFzaGJvYXJkIGRlIEluZGljYWRvcmVzIGRlIE1hbnV0ZW7Dp8Ojb1wiPlxyXG4gICAgICB7LyogQWp1c3RlIHBhcmEgZ2FyYW50aXIgcXVlIGEgZGl2IGV4dGVybmEgb2N1cGUgMTAwJSBkYSBsYXJndXJhIGRpc3BvbsOtdmVsICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00IG1sLTRcIj5EYXNoYm9hcmQ8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICB7aW5kaWNhdG9ycy5tYXAoaW5kaWNhdG9yID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctWzIwJV0gcC00IGJnLWdyYXktMjAwIGRhcms6YmctZ3JheS03MDAgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgZm9udC1zZW1pYm9sZCAke3RoZW1lID09PSAnZGFyaycgPyAndGV4dC13aGl0ZScgOiAndGV4dC1ncmF5LTgwMCd9YH0+e2luZGljYXRvci5sYWJlbH08L2gyPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHRleHQteGwgJHt0aGVtZSA9PT0gJ2RhcmsnID8gJ3RleHQtd2hpdGUnIDogJ3RleHQtZ3JheS02MDAnfWB9PntpbmRpY2F0b3IudmFsdWV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoZGF0YVNldHMpLm1hcCgoW3RpdGxlLCBkYXRhXSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy1bNDglXSBwLTQgYmctd2hpdGUgZGFyazpiZy1ncmF5LTgwMCByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICAgIDxCYXJDaGFydCBkYXRhPXtkYXRhfSB0aXRsZT17dGl0bGV9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQmFyQ2hhcnQiLCJ1c2VUaGVtZSIsIkRhc2hib2FyZCIsInRoZW1lIiwiaW5kaWNhdG9ycyIsImxhYmVsIiwidmFsdWUiLCJkYXRhU2V0cyIsIkRpc3BvbmliaWxpZGFkZSIsIkNvbmZpYWJpbGlkYWRlIiwiTVRCRiIsIk1UVEEiLCJNVFRSIiwicGFnZVRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJpbmRpY2F0b3IiLCJoMiIsInAiLCJPYmplY3QiLCJlbnRyaWVzIiwidGl0bGUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.tsx\n"));

/***/ })

});