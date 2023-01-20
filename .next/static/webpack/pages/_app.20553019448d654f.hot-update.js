"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/shared/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/shared/Header.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/Button */ \"./src/components/atoms/Button.tsx\");\n/* harmony import */ var _shared_Drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Drop */ \"./src/components/shared/Drop.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Header = ()=>{\n    _s();\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const goTo = ()=>{\n        window.scrollTo(0, 1000);\n    };\n    const navigationElements = [\n        {\n            title: \"Controle EPI\"\n        },\n        {\n            title: \"Nuisibles\"\n        },\n        {\n            title: \"Couverture\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed top-0 z-50 w-screen bg-primary300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"h-[75px] flex justify-between px-[32px] relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"sm:hidden md:hidden\",\n                            children: \"Choisi Corde\"\n                        }, void 0, false, {\n                            fileName: \"/Users/david/Documents/Freelence/ChoisiCorde/siteWeb/ChoisiCorde/src/components/shared/Header.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \" lg:hidden xl:hidden\",\n                            onClick: ()=>{\n                                setVisible(true);\n                            },\n                            children: \"Menu\"\n                        }, void 0, false, {\n                            fileName: \"/Users/david/Documents/Freelence/ChoisiCorde/siteWeb/ChoisiCorde/src/components/shared/Header.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/david/Documents/Freelence/ChoisiCorde/siteWeb/ChoisiCorde/src/components/shared/Header.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                visible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_Drop__WEBPACK_IMPORTED_MODULE_3__.MobileMenu, {\n                    setVisible: setVisible\n                }, void 0, false, {\n                    fileName: \"/Users/david/Documents/Freelence/ChoisiCorde/siteWeb/ChoisiCorde/src/components/shared/Header.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-[24px]\",\n                    children: [\n                        navigationElements.map((navigationElement, i)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative sm:hidden md:hidden\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"duration-150 cursor-pointer hover:underline\",\n                                        children: navigationElement.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/david/Documents/Freelence/ChoisiCorde/siteWeb/ChoisiCorde/src/components/shared/Header.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    navigationElement.drop && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(navigationElement.drop, {}, void 0, false, {\n                                        fileName: \"/Users/david/Documents/Freelence/ChoisiCorde/siteWeb/ChoisiCorde/src/components/shared/Header.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 44\n                                    }, undefined)\n                                ]\n                            }, i, true, {\n                                fileName: \"/Users/david/Documents/Freelence/ChoisiCorde/siteWeb/ChoisiCorde/src/components/shared/Header.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, undefined);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            label: \"Demander un devis\",\n                            onClick: ()=>{\n                                goTo();\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/david/Documents/Freelence/ChoisiCorde/siteWeb/ChoisiCorde/src/components/shared/Header.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/david/Documents/Freelence/ChoisiCorde/siteWeb/ChoisiCorde/src/components/shared/Header.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/david/Documents/Freelence/ChoisiCorde/siteWeb/ChoisiCorde/src/components/shared/Header.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/david/Documents/Freelence/ChoisiCorde/siteWeb/ChoisiCorde/src/components/shared/Header.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"OGsIWlGlwYpVUqIrDReJ1GWx7rw=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvSGVhZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQWlDO0FBQ1E7QUFDMEI7QUFFNUQsTUFBTUcsU0FBUyxJQUFNOztJQUMxQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUU1QyxNQUFNTSxPQUFPLElBQU07UUFDakJDLE9BQU9DLFFBQVEsQ0FBQyxHQUFHO0lBQ3JCO0lBRUEsTUFBTUMscUJBQXFCO1FBQ3pCO1lBQ0VDLE9BQU87UUFDVDtRQUNBO1lBQ0VBLE9BQU87UUFDVDtRQUNBO1lBQ0VBLE9BQU87UUFDVDtLQUNEO0lBRUQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQU9ELFdBQVU7OzhCQUNoQiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBR0YsV0FBVTtzQ0FBc0I7Ozs7OztzQ0FDcEMsOERBQUNFOzRCQUNDRixXQUFVOzRCQUNWRyxTQUFTLElBQU07Z0NBQ2JWLFdBQVcsSUFBSTs0QkFDakI7c0NBQ0Q7Ozs7Ozs7Ozs7OztnQkFJRkQseUJBQVcsOERBQUNGLG9EQUFVQTtvQkFBQ0csWUFBWUE7Ozs7Ozs4QkFDcEMsOERBQUNNO29CQUFJQyxXQUFVOzt3QkFDWkgsbUJBQW1CTyxHQUFHLENBQUMsQ0FBQ0MsbUJBQXdCQyxJQUFXOzRCQUMxRCxxQkFDRSw4REFBQ1A7Z0NBQVlDLFdBQVU7O2tEQUNyQiw4REFBQ087d0NBQUdQLFdBQVU7a0RBQ1hLLGtCQUFrQlAsS0FBSzs7Ozs7O29DQUV6Qk8sa0JBQWtCRyxJQUFJLGtCQUFJLDhEQUFDSCxrQkFBa0JHLElBQUk7Ozs7OzsrQkFKMUNGOzs7Ozt3QkFPZDtzQ0FDQSw4REFBQ2pCLGlEQUFNQTs0QkFDTG9CLE9BQU07NEJBQ05OLFNBQVMsSUFBTTtnQ0FDYlQ7NEJBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVosRUFBRTtHQXZEV0g7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL0hlYWRlci50c3g/NDYwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL2F0b21zL0J1dHRvblwiO1xuaW1wb3J0IHsgQ291dmVydHVyZSwgTW9iaWxlTWVudSwgTnVpc2libGVzIH0gZnJvbSBcIi4uL3NoYXJlZC9Ecm9wXCI7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBnb1RvID0gKCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAxMDAwKTtcbiAgfTtcblxuICBjb25zdCBuYXZpZ2F0aW9uRWxlbWVudHMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiQ29udHJvbGUgRVBJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJOdWlzaWJsZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNvdXZlcnR1cmVcIixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCB6LTUwIHctc2NyZWVuIGJnLXByaW1hcnkzMDBcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaC1bNzVweF0gZmxleCBqdXN0aWZ5LWJldHdlZW4gcHgtWzMycHhdIHJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic206aGlkZGVuIG1kOmhpZGRlblwiPkNob2lzaSBDb3JkZTwvaDI+XG4gICAgICAgICAgPGgyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgbGc6aGlkZGVuIHhsOmhpZGRlblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE1lbnVcbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Zpc2libGUgJiYgPE1vYmlsZU1lbnUgc2V0VmlzaWJsZT17c2V0VmlzaWJsZX0gLz59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLVsyNHB4XVwiPlxuICAgICAgICAgIHtuYXZpZ2F0aW9uRWxlbWVudHMubWFwKChuYXZpZ2F0aW9uRWxlbWVudDogYW55LCBpOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzbTpoaWRkZW4gbWQ6aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImR1cmF0aW9uLTE1MCBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9uRWxlbWVudC50aXRsZX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9uRWxlbWVudC5kcm9wICYmIDxuYXZpZ2F0aW9uRWxlbWVudC5kcm9wIC8+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgbGFiZWw9XCJEZW1hbmRlciB1biBkZXZpc1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGdvVG8oKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCdXR0b24iLCJNb2JpbGVNZW51IiwiSGVhZGVyIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJnb1RvIiwid2luZG93Iiwic2Nyb2xsVG8iLCJuYXZpZ2F0aW9uRWxlbWVudHMiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImgyIiwib25DbGljayIsIm1hcCIsIm5hdmlnYXRpb25FbGVtZW50IiwiaSIsInVsIiwiZHJvcCIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/shared/Header.tsx\n"));

/***/ })

});