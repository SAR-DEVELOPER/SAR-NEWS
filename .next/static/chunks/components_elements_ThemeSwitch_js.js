"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_elements_ThemeSwitch_js"],{

/***/ "./components/elements/ThemeSwitch.js":
/*!********************************************!*\
  !*** ./components/elements/ThemeSwitch.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ThemeSwitch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ThemeSwitch() {\n    _s();\n    const [togglETHeme, setTogglETHeme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>JSON.parse(localStorage.getItem(\"togglETHeme\")) || \"light-theme\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"togglETHeme\", JSON.stringify(togglETHeme));\n        document.body.classList.add(togglETHeme);\n        return ()=>{\n            document.body.classList.remove(togglETHeme);\n        };\n    }, [\n        togglETHeme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"switcher__tab\",\n            onClick: ()=>togglETHeme === \"light-theme\" ? setTogglETHeme(\"dark-theme\") : setTogglETHeme(\"light-theme\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"switcher__btn light-mode\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"flaticon-sun\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\it1sa\\\\OneDrive\\\\Documents\\\\SAR\\\\SAR-NEWS\\\\components\\\\elements\\\\ThemeSwitch.js\",\n                        lineNumber: 21,\n                        columnNumber: 60\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\it1sa\\\\OneDrive\\\\Documents\\\\SAR\\\\SAR-NEWS\\\\components\\\\elements\\\\ThemeSwitch.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"switcher__mode\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\it1sa\\\\OneDrive\\\\Documents\\\\SAR\\\\SAR-NEWS\\\\components\\\\elements\\\\ThemeSwitch.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"switcher__btn dark-mode\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"flaticon-moon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\it1sa\\\\OneDrive\\\\Documents\\\\SAR\\\\SAR-NEWS\\\\components\\\\elements\\\\ThemeSwitch.js\",\n                        lineNumber: 23,\n                        columnNumber: 59\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\it1sa\\\\OneDrive\\\\Documents\\\\SAR\\\\SAR-NEWS\\\\components\\\\elements\\\\ThemeSwitch.js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\it1sa\\\\OneDrive\\\\Documents\\\\SAR\\\\SAR-NEWS\\\\components\\\\elements\\\\ThemeSwitch.js\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(ThemeSwitch, \"tZvYSAtcJwqMHzKMzoNRGEYDMRg=\");\n_c = ThemeSwitch;\nvar _c;\n$RefreshReg$(_c, \"ThemeSwitch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2VsZW1lbnRzL1RoZW1lU3dpdGNoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7QUFFNUIsU0FBU0U7O0lBQ3BCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSCwrQ0FBUUEsQ0FDMUMsSUFBTUksS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsbUJBQW1CO0lBRTdEUixnREFBU0EsQ0FBQztRQUNOTyxhQUFhRSxPQUFPLENBQUMsZUFBZUosS0FBS0ssU0FBUyxDQUFDUDtRQUNuRFEsU0FBU0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQ1g7UUFDNUIsT0FBTztZQUNIUSxTQUFTQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDWjtRQUNuQztJQUNKLEdBQUc7UUFBQ0E7S0FBWTtJQUVoQixxQkFDSTtrQkFDSSw0RUFBQ2E7WUFBSUMsV0FBVTtZQUNYQyxTQUFTLElBQU1mLGdCQUFnQixnQkFBZ0JDLGVBQWUsZ0JBQWdCQSxlQUFlOzs4QkFHN0YsOERBQUNlO29CQUFLRixXQUFVOzhCQUEyQiw0RUFBQ0c7d0JBQUVILFdBQVU7Ozs7Ozs7Ozs7OzhCQUN4RCw4REFBQ0U7b0JBQUtGLFdBQVU7Ozs7Ozs4QkFDaEIsOERBQUNFO29CQUFLRixXQUFVOzhCQUEwQiw0RUFBQ0c7d0JBQUVILFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl2RTtHQXhCd0JmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZWxlbWVudHMvVGhlbWVTd2l0Y2guanM/NjM4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRoZW1lU3dpdGNoKCkge1xyXG4gICAgY29uc3QgW3RvZ2dsRVRIZW1lLCBzZXRUb2dnbEVUSGVtZV0gPSB1c2VTdGF0ZShcclxuICAgICAgICAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9nZ2xFVEhlbWVcIikpIHx8IFwibGlnaHQtdGhlbWVcIlxyXG4gICAgKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZ2dsRVRIZW1lXCIsIEpTT04uc3RyaW5naWZ5KHRvZ2dsRVRIZW1lKSlcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodG9nZ2xFVEhlbWUpXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHRvZ2dsRVRIZW1lKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFt0b2dnbEVUSGVtZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInN3aXRjaGVyX190YWJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xFVEhlbWUgPT09IFwibGlnaHQtdGhlbWVcIiA/IHNldFRvZ2dsRVRIZW1lKFwiZGFyay10aGVtZVwiKSA6IHNldFRvZ2dsRVRIZW1lKFwibGlnaHQtdGhlbWVcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoZXJfX2J0biBsaWdodC1tb2RlXCI+PGkgY2xhc3NOYW1lPVwiZmxhdGljb24tc3VuXCIgLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2hlcl9fbW9kZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2hlcl9fYnRuIGRhcmstbW9kZVwiPjxpIGNsYXNzTmFtZT1cImZsYXRpY29uLW1vb25cIiAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGhlbWVTd2l0Y2giLCJ0b2dnbEVUSGVtZSIsInNldFRvZ2dsRVRIZW1lIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJuYXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3BhbiIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/elements/ThemeSwitch.js\n"));

/***/ })

}]);