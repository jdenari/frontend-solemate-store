"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/client/VerticalCard.tsx":
/*!************************************************!*\
  !*** ./src/components/client/VerticalCard.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _VerticalCard_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VerticalCard.module.css */ \"./src/components/client/VerticalCard.module.css\");\n/* harmony import */ var _VerticalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_VerticalCard_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\n// patterns imports\n\nvar _s = $RefreshSig$();\n\n\n\n// actions functions\n\nconst Card = (param)=>{\n    let { imgSrc , imgAlt , title , price , productId  } = param;\n    _s();\n    // data constants\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    // handle functions\n    // this changes the main content showed in landing page\n    const handleClick = ()=>{\n        dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_3__.SET_PRODUCT_SHOW)(productId));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-sm-6 px-2 py-1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_VerticalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardContainer), \" card\"),\n            onClick: handleClick,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: imgSrc,\n                    alt: imgAlt,\n                    className: \"\".concat((_VerticalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardImage), \" card-img-top \")\n                }, void 0, false, {\n                    fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/client/VerticalCard.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_VerticalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardBody), \" card-body p-3\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                            className: \"card-title my-1\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/client/VerticalCard.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"card-text my-1\",\n                            children: price\n                        }, void 0, false, {\n                            fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/client/VerticalCard.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/client/VerticalCard.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/client/VerticalCard.tsx\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/client/VerticalCard.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Card, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jbGllbnQvVmVydGljYWxDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxtQkFBbUI7OztBQUNPO0FBQ3FCO0FBQ0w7QUFFMUMsb0JBQW9CO0FBQ21DO0FBV3ZELE1BQU1JLE9BQTRCLFNBQWlEO1FBQWhELEVBQUVDLE9BQU0sRUFBRUMsT0FBTSxFQUFFQyxNQUFLLEVBQUVDLE1BQUssRUFBRUMsVUFBUyxFQUFFOztJQUMxRSxpQkFBaUI7SUFDakIsTUFBTUMsV0FBV1Isd0RBQVdBO0lBRTVCLG1CQUFtQjtJQUNmLHVEQUF1RDtJQUMzRCxNQUFNUyxjQUFjLElBQU07UUFBQ0QsU0FBU1AsZ0VBQWdCQSxDQUFDTTtJQUFZO0lBRWpFLHFCQUNJLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFXLEdBQXdCLE9BQXJCWiwrRUFBb0IsRUFBQztZQUFRYyxTQUFTSjs7OEJBQ3JELDhEQUFDSztvQkFBSUMsS0FBS1o7b0JBQVFhLEtBQUtaO29CQUFRTyxXQUFXLEdBQW9CLE9BQWpCWiwyRUFBZ0IsRUFBQzs7Ozs7OzhCQUM5RCw4REFBQ1c7b0JBQUlDLFdBQVcsR0FBbUIsT0FBaEJaLDBFQUFlLEVBQUM7O3NDQUMvQiw4REFBQ29COzRCQUFHUixXQUFVO3NDQUFtQk47Ozs7OztzQ0FDakMsOERBQUNlOzRCQUFFVCxXQUFVO3NDQUFrQkw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25EO0dBbkJNSjs7UUFFZUYsb0RBQVdBOzs7S0FGMUJFO0FBcUJOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NsaWVudC9WZXJ0aWNhbENhcmQudHN4PzE1ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGF0dGVybnMgaW1wb3J0c1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9WZXJ0aWNhbENhcmQubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuLy8gYWN0aW9ucyBmdW5jdGlvbnNcbmltcG9ydCB7IFNFVF9QUk9EVUNUX1NIT1cgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcblxuLy8gcHJvcHNcbmludGVyZmFjZSBDYXJkUHJvcHMge1xuICAgIGltZ1NyYzogc3RyaW5nO1xuICAgIGltZ0FsdDogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgcHJpY2U6IHN0cmluZztcbiAgICBwcm9kdWN0SWQ6IG51bWJlcjtcbn1cblxuY29uc3QgQ2FyZDogUmVhY3QuRkM8Q2FyZFByb3BzPiA9ICh7IGltZ1NyYywgaW1nQWx0LCB0aXRsZSwgcHJpY2UsIHByb2R1Y3RJZCB9KSA9PiB7XG4gICAgLy8gZGF0YSBjb25zdGFudHNcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIFxuICAgIC8vIGhhbmRsZSBmdW5jdGlvbnNcbiAgICAgICAgLy8gdGhpcyBjaGFuZ2VzIHRoZSBtYWluIGNvbnRlbnQgc2hvd2VkIGluIGxhbmRpbmcgcGFnZVxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge2Rpc3BhdGNoKFNFVF9QUk9EVUNUX1NIT1cocHJvZHVjdElkKSk7fTtcbiAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBweC0yIHB5LTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZENvbnRhaW5lcn0gY2FyZGB9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nU3JjfSBhbHQ9e2ltZ0FsdH0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZEltYWdlfSBjYXJkLWltZy10b3AgYH0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZEJvZHl9IGNhcmQtYm9keSBwLTNgfT5cbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgbXktMVwiPnt0aXRsZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHQgbXktMVwiPntwcmljZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJ1c2VEaXNwYXRjaCIsIlNFVF9QUk9EVUNUX1NIT1ciLCJDYXJkIiwiaW1nU3JjIiwiaW1nQWx0IiwidGl0bGUiLCJwcmljZSIsInByb2R1Y3RJZCIsImRpc3BhdGNoIiwiaGFuZGxlQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkQ29udGFpbmVyIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCIsImNhcmRJbWFnZSIsImNhcmRCb2R5IiwiaDYiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/client/VerticalCard.tsx\n"));

/***/ })

});