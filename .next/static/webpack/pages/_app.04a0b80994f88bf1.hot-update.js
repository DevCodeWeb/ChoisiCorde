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

/***/ "./src/helper/ScrollTo.ts":
/*!********************************!*\
  !*** ./src/helper/ScrollTo.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GoContact\": function() { return /* binding */ GoContact; },\n/* harmony export */   \"GoInterventions\": function() { return /* binding */ GoInterventions; },\n/* harmony export */   \"GoPresentation\": function() { return /* binding */ GoPresentation; }\n/* harmony export */ });\nfunction GoPresentation(param) {\n    let { scroll  } = param;\n    window.scrollTo(0, scroll);\n}\nfunction GoInterventions() {\n    window.scrollTo(0, 1700);\n}\nfunction GoContact() {\n    window.scrollTo(0, 7000);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVyL1Njcm9sbFRvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUlPLFNBQVNBLGVBQWUsS0FBc0IsRUFBRTtRQUF4QixFQUFFQyxPQUFNLEVBQWMsR0FBdEI7SUFDN0JDLE9BQU9DLFFBQVEsQ0FBQyxHQUFHRjtBQUNyQixDQUFDO0FBRU0sU0FBU0csa0JBQWtCO0lBQ2hDRixPQUFPQyxRQUFRLENBQUMsR0FBRztBQUNyQixDQUFDO0FBRU0sU0FBU0UsWUFBWTtJQUMxQkgsT0FBT0MsUUFBUSxDQUFDLEdBQUc7QUFDckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaGVscGVyL1Njcm9sbFRvLnRzPzhmYzkiXSwic291cmNlc0NvbnRlbnQiOlsidHlwZSBUWVBFU0NST0xMID0ge1xuICBzY3JvbGw6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBHb1ByZXNlbnRhdGlvbih7IHNjcm9sbCB9OiBUWVBFU0NST0xMKSB7XG4gIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gR29JbnRlcnZlbnRpb25zKCkge1xuICB3aW5kb3cuc2Nyb2xsVG8oMCwgMTcwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBHb0NvbnRhY3QoKSB7XG4gIHdpbmRvdy5zY3JvbGxUbygwLCA3MDAwKTtcbn1cbiJdLCJuYW1lcyI6WyJHb1ByZXNlbnRhdGlvbiIsInNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFRvIiwiR29JbnRlcnZlbnRpb25zIiwiR29Db250YWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/helper/ScrollTo.ts\n"));

/***/ })

});