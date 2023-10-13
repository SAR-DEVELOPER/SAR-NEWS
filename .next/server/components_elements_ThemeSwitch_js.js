"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_elements_ThemeSwitch_js";
exports.ids = ["components_elements_ThemeSwitch_js"];
exports.modules = {

/***/ "./components/elements/ThemeSwitch.js":
/*!********************************************!*\
  !*** ./components/elements/ThemeSwitch.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ThemeSwitch)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ThemeSwitch() {\n    const [togglETHeme, setTogglETHeme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>JSON.parse(localStorage.getItem(\"togglETHeme\")) || \"light-theme\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"togglETHeme\", JSON.stringify(togglETHeme));\n        document.body.classList.add(togglETHeme);\n        return ()=>{\n            document.body.classList.remove(togglETHeme);\n        };\n    }, [\n        togglETHeme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"switcher__tab\",\n            onClick: ()=>togglETHeme === \"light-theme\" ? setTogglETHeme(\"dark-theme\") : setTogglETHeme(\"light-theme\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"switcher__btn light-mode\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"flaticon-sun\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\it1sa\\\\OneDrive\\\\Documents\\\\SAR\\\\SAR-NEWS\\\\components\\\\elements\\\\ThemeSwitch.js\",\n                        lineNumber: 21,\n                        columnNumber: 60\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\it1sa\\\\OneDrive\\\\Documents\\\\SAR\\\\SAR-NEWS\\\\components\\\\elements\\\\ThemeSwitch.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"switcher__mode\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\it1sa\\\\OneDrive\\\\Documents\\\\SAR\\\\SAR-NEWS\\\\components\\\\elements\\\\ThemeSwitch.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"switcher__btn dark-mode\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"flaticon-moon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\it1sa\\\\OneDrive\\\\Documents\\\\SAR\\\\SAR-NEWS\\\\components\\\\elements\\\\ThemeSwitch.js\",\n                        lineNumber: 23,\n                        columnNumber: 59\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\it1sa\\\\OneDrive\\\\Documents\\\\SAR\\\\SAR-NEWS\\\\components\\\\elements\\\\ThemeSwitch.js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\it1sa\\\\OneDrive\\\\Documents\\\\SAR\\\\SAR-NEWS\\\\components\\\\elements\\\\ThemeSwitch.js\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2VsZW1lbnRzL1RoZW1lU3dpdGNoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUU1QixTQUFTRTtJQUNwQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0gsK0NBQVFBLENBQzFDLElBQU1JLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDLG1CQUFtQjtJQUU3RFIsZ0RBQVNBLENBQUM7UUFDTk8sYUFBYUUsT0FBTyxDQUFDLGVBQWVKLEtBQUtLLFNBQVMsQ0FBQ1A7UUFDbkRRLFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUNYO1FBQzVCLE9BQU87WUFDSFEsU0FBU0MsSUFBSSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQ1o7UUFDbkM7SUFDSixHQUFHO1FBQUNBO0tBQVk7SUFFaEIscUJBQ0k7a0JBQ0ksNEVBQUNhO1lBQUlDLFdBQVU7WUFDWEMsU0FBUyxJQUFNZixnQkFBZ0IsZ0JBQWdCQyxlQUFlLGdCQUFnQkEsZUFBZTs7OEJBRzdGLDhEQUFDZTtvQkFBS0YsV0FBVTs4QkFBMkIsNEVBQUNHO3dCQUFFSCxXQUFVOzs7Ozs7Ozs7Ozs4QkFDeEQsOERBQUNFO29CQUFLRixXQUFVOzs7Ozs7OEJBQ2hCLDhEQUFDRTtvQkFBS0YsV0FBVTs4QkFBMEIsNEVBQUNHO3dCQUFFSCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYXJzYS8uL2NvbXBvbmVudHMvZWxlbWVudHMvVGhlbWVTd2l0Y2guanM/NjM4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRoZW1lU3dpdGNoKCkge1xyXG4gICAgY29uc3QgW3RvZ2dsRVRIZW1lLCBzZXRUb2dnbEVUSGVtZV0gPSB1c2VTdGF0ZShcclxuICAgICAgICAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9nZ2xFVEhlbWVcIikpIHx8IFwibGlnaHQtdGhlbWVcIlxyXG4gICAgKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZ2dsRVRIZW1lXCIsIEpTT04uc3RyaW5naWZ5KHRvZ2dsRVRIZW1lKSlcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodG9nZ2xFVEhlbWUpXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHRvZ2dsRVRIZW1lKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFt0b2dnbEVUSGVtZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInN3aXRjaGVyX190YWJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xFVEhlbWUgPT09IFwibGlnaHQtdGhlbWVcIiA/IHNldFRvZ2dsRVRIZW1lKFwiZGFyay10aGVtZVwiKSA6IHNldFRvZ2dsRVRIZW1lKFwibGlnaHQtdGhlbWVcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoZXJfX2J0biBsaWdodC1tb2RlXCI+PGkgY2xhc3NOYW1lPVwiZmxhdGljb24tc3VuXCIgLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2hlcl9fbW9kZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2hlcl9fYnRuIGRhcmstbW9kZVwiPjxpIGNsYXNzTmFtZT1cImZsYXRpY29uLW1vb25cIiAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGhlbWVTd2l0Y2giLCJ0b2dnbEVUSGVtZSIsInNldFRvZ2dsRVRIZW1lIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJuYXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3BhbiIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/elements/ThemeSwitch.js\n");

/***/ })

};
;