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

/***/ "./src/components/landingpage/MainSection.tsx":
/*!****************************************************!*\
  !*** ./src/components/landingpage/MainSection.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MainSection_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MainSection.module.css */ \"./src/components/landingpage/MainSection.module.css\");\n/* harmony import */ var _MainSection_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_MainSection_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBar */ \"./src/components/landingpage/SearchBar.tsx\");\n/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Counter */ \"./src/components/Counter.tsx\");\n/* harmony import */ var _SolemateModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SolemateModal */ \"./src/components/SolemateModal.tsx\");\n/* harmony import */ var _SolemateButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SolemateButton */ \"./src/components/SolemateButton.tsx\");\n/* harmony import */ var _MessageReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MessageReturn */ \"./src/components/MessageReturn.tsx\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\n// patterns imports\n\nvar _s = $RefreshSig$();\n\n\n\n// child components imports\n\n\n\n\n\n\nconst MainSection = ()=>{\n    _s();\n    // data constants\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const message = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.returnMessage);\n    // count\n    const count = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.counter.count);\n    // products\n    const productShow = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.counter.productShow);\n    const product = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.product.products[productShow]);\n    const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.product.products);\n    // modals\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // functions to deal to cart\n    const handleAddProductToCart = ()=>{\n        dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_8__.ADD_PRODUCT_TO_CART)({\n            product,\n            count\n        }));\n        dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_8__.SET_MESSAGE)({\n            text: \"\".concat(product.productName, \" foi adicionado ao carrinho.\"),\n            variant: \"success\"\n        }));\n        setTimeout(()=>{\n            dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_8__.CLEAR_MESSAGE)());\n        }, 3000);\n    };\n    const handleCleanCart = ()=>{\n        dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_8__.CLEAN_CART)());\n        setShowModal(false);\n    };\n    // functions to activate and deactivate modal\n    const handleOpenModal = ()=>{\n        setShowModal(true);\n    };\n    const handleCloseModal = ()=>{\n        setShowModal(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                placeholder: \"What are you looking for?\"\n            }, void 0, false, {\n                fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"\".concat((_MainSection_module_css__WEBPACK_IMPORTED_MODULE_9___default().titleProduct), \" p-1 m-0\"),\n                            children: product ? product.productName : \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"lead p-1 m-0\",\n                            children: product ? product.description : \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-12 d-flex flex-column\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"d-flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex flex-row mb-4 my-3 col-9\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SolemateButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        buttonText: \"Clean\",\n                                        imageUrl: \"./icons/eraser.png\",\n                                        onClick: handleOpenModal,\n                                        variant: \"light\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SolemateButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        buttonText: \"Add (\".concat(count, \")\"),\n                                        imageUrl: \"./icons/cart.png\",\n                                        onClick: handleAddProductToCart,\n                                        variant: \"purple\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-3 px-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"d-flex flex-row-reverse align-items-center col-12\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"\".concat((_MainSection_module_css__WEBPACK_IMPORTED_MODULE_9___default().price), \" m-1 mb-0\"),\n                                            children: product ? product.price.toFixed(2) : 0\n                                        }, void 0, false, {\n                                            fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"\".concat((_MainSection_module_css__WEBPACK_IMPORTED_MODULE_9___default().currency), \" m-1 mb-0\"),\n                                            children: \"R$\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"d-flex flex-row-reverse mx-1 \".concat((_MainSection_module_css__WEBPACK_IMPORTED_MODULE_9___default().noWrap)),\n                                    children: product ? product.productName : \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-12 d-flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"position-relative col-9 my-3 mx-auto mx-md-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"http://localhost:5000/api/photos/\".concat(product ? product.id : \"\", \"/photo\"),\n                            alt: \"\",\n                            className: \"\".concat((_MainSection_module_css__WEBPACK_IMPORTED_MODULE_9___default().mainPhoto), \" text-center shadow p-3 bg-body-tertiary rounded w-100\")\n                        }, void 0, false, {\n                            fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Counter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: (_MainSection_module_css__WEBPACK_IMPORTED_MODULE_9___default().counter)\n                        }, void 0, false, {\n                            fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_MainSection_module_css__WEBPACK_IMPORTED_MODULE_9___default().arrow), \" d-flex position-absolute\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SolemateButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    imageUrl: \"./icons/arrow-left-short.svg\",\n                                    onClick: ()=>dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_8__.DECREMENT_PRODUCT_SHOW)(1)),\n                                    variant: \"light\"\n                                }, void 0, false, {\n                                    fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SolemateButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    imageUrl: \"./icons/arrow-right-short.svg\",\n                                    onClick: ()=>dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_8__.INCREMENT_PRODUCT_SHOW)(products.length)),\n                                    variant: \"light\"\n                                }, void 0, false, {\n                                    fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-3 mt-5\",\n                children: message.message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MessageReturn__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    text: message.message.text,\n                    variant: message.message.variant\n                }, void 0, false, {\n                    fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 37\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SolemateModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                show: showModal,\n                handleClose: handleCloseModal,\n                handleYes: handleCleanCart,\n                text: \"Are you sure you want to clear your cart?\",\n                title: \"Clear Cart\"\n            }, void 0, false, {\n                fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n                lineNumber: 102,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/joao/Documentos/projetos/solemate-store/frontend-solemate-store/src/components/landingpage/MainSection.tsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MainSection, \"cKPIcsmlFLZ0DJpM59tZ2ZjnatI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = MainSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainSection);\nvar _c;\n$RefreshReg$(_c, \"MainSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYW5kaW5ncGFnZS9NYWluU2VjdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQkFBbUI7OztBQUNnQztBQUNMO0FBQ1M7QUFFdkQsMkJBQTJCO0FBQ1M7QUFDSDtBQUNZO0FBQ0U7QUFDRjtBQUlxRztBQUdsSixNQUFNZ0IsY0FBYyxJQUFNOztJQUN0QixpQkFBaUI7SUFDakIsTUFBTUMsV0FBV2Isd0RBQVdBO0lBQzVCLE1BQU1jLFVBQVVmLHdEQUFXQSxDQUFDLENBQUNnQixRQUFxQkEsTUFBTUMsYUFBYTtJQUVqRSxRQUFRO0lBQ1osTUFBTUMsUUFBUWxCLHdEQUFXQSxDQUFDLENBQUNnQixRQUFxQkEsTUFBTUcsT0FBTyxDQUFDRCxLQUFLO0lBRS9ELFdBQVc7SUFDZixNQUFNRSxjQUFjcEIsd0RBQVdBLENBQUMsQ0FBQ2dCLFFBQXFCQSxNQUFNRyxPQUFPLENBQUNDLFdBQVc7SUFDL0UsTUFBTUMsVUFBVXJCLHdEQUFXQSxDQUFDLENBQUNnQixRQUFxQkEsTUFBTUssT0FBTyxDQUFDQyxRQUFRLENBQUNGLFlBQVk7SUFDckYsTUFBTUUsV0FBV3RCLHdEQUFXQSxDQUFDLENBQUNnQixRQUFxQkEsTUFBTUssT0FBTyxDQUFDQyxRQUFRO0lBRXJFLFNBQVM7SUFDYixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBRzFCLCtDQUFRQSxDQUFDLEtBQUs7SUFHaEQsNEJBQTRCO0lBQzVCLE1BQU0yQix5QkFBeUIsSUFBTTtRQUNqQ1gsU0FBU0wsbUVBQW1CQSxDQUFDO1lBQUVZO1lBQVNIO1FBQU07UUFDOUNKLFNBQVNILDJEQUFXQSxDQUFDO1lBQUVlLE1BQU0sR0FBdUIsT0FBcEJMLFFBQVFNLFdBQVcsRUFBQztZQUErQkMsU0FBUztRQUFTO1FBQ3JHQyxXQUFXLElBQU07WUFBRWYsU0FBU0YsNkRBQWFBO1FBQUksR0FBRztJQUNwRDtJQUNBLE1BQU1rQixrQkFBa0IsSUFBTTtRQUFDaEIsU0FBU0os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WixvREFBV0E7UUFDWkQsb0RBQVdBO1FBR2JBLG9EQUFXQTtRQUdMQSxvREFBV0E7UUFDZkEsb0RBQVdBO1FBQ1ZBLG9EQUFXQTs7O0tBWDFCYTtBQStGTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sYW5kaW5ncGFnZS9NYWluU2VjdGlvbi50c3g/MjE1YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYXR0ZXJucyBpbXBvcnRzXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NYWluU2VjdGlvbi5tb2R1bGUuY3NzJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuLy8gY2hpbGQgY29tcG9uZW50cyBpbXBvcnRzXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vU2VhcmNoQmFyJztcbmltcG9ydCBDb3VudGVyIGZyb20gJy4uL0NvdW50ZXInO1xuaW1wb3J0IFNvbGVtYXRlTW9kYWwgZnJvbSAnLi4vU29sZW1hdGVNb2RhbCc7XG5pbXBvcnQgU29sZW1hdGVCdXR0b24gZnJvbSAnLi4vU29sZW1hdGVCdXR0b24nO1xuaW1wb3J0IE1lc3NhZ2VSZXR1cm4gZnJvbSAnLi4vTWVzc2FnZVJldHVybic7XG5cbi8vIGFjdGlvbnMgaW1wb3J0c1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUvdHlwZXMnO1xuaW1wb3J0IHsgREVDUkVNRU5UX1BST0RVQ1RfU0hPVywgSU5DUkVNRU5UX1BST0RVQ1RfU0hPVywgQUREX1BST0RVQ1RfVE9fQ0FSVCwgQ0xFQU5fQ0FSVCwgU0VUX01FU1NBR0UsIENMRUFSX01FU1NBR0UgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcblxuXG5jb25zdCBNYWluU2VjdGlvbiA9ICgpID0+IHtcbiAgICAvLyBkYXRhIGNvbnN0YW50c1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBtZXNzYWdlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnJldHVybk1lc3NhZ2UpO1xuXG4gICAgICAgIC8vIGNvdW50XG4gICAgY29uc3QgY291bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuY291bnRlci5jb3VudCk7XG5cbiAgICAgICAgLy8gcHJvZHVjdHNcbiAgICBjb25zdCBwcm9kdWN0U2hvdyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5jb3VudGVyLnByb2R1Y3RTaG93KTtcbiAgICBjb25zdCBwcm9kdWN0ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnByb2R1Y3QucHJvZHVjdHNbcHJvZHVjdFNob3ddKTtcbiAgICBjb25zdCBwcm9kdWN0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0LnByb2R1Y3RzKTtcblxuICAgICAgICAvLyBtb2RhbHNcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgICAvLyBmdW5jdGlvbnMgdG8gZGVhbCB0byBjYXJ0XG4gICAgY29uc3QgaGFuZGxlQWRkUHJvZHVjdFRvQ2FydCA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goQUREX1BST0RVQ1RfVE9fQ0FSVCh7IHByb2R1Y3QsIGNvdW50IH0pKTtcbiAgICAgICAgZGlzcGF0Y2goU0VUX01FU1NBR0UoeyB0ZXh0OiBgJHtwcm9kdWN0LnByb2R1Y3ROYW1lfSBmb2kgYWRpY2lvbmFkbyBhbyBjYXJyaW5oby5gLCB2YXJpYW50OiAnc3VjY2Vzcyd9KSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBkaXNwYXRjaChDTEVBUl9NRVNTQUdFKCkpO30sIDMwMDApO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlQ2xlYW5DYXJ0ID0gKCkgPT4ge2Rpc3BhdGNoKENMRUFOX0NBUlQoKSk7c2V0U2hvd01vZGFsKGZhbHNlKTt9O1xuXG4gICAgLy8gZnVuY3Rpb25zIHRvIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIG1vZGFsXG4gICAgY29uc3QgaGFuZGxlT3Blbk1vZGFsID0gKCkgPT4ge3NldFNob3dNb2RhbCh0cnVlKTt9O1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7c2V0U2hvd01vZGFsKGZhbHNlKTt9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtMyc+XG4gICAgICAgICAgICA8U2VhcmNoQmFyIHBsYWNlaG9sZGVyPSdXaGF0IGFyZSB5b3UgbG9va2luZyBmb3I/JyAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMic+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Ake3N0eWxlcy50aXRsZVByb2R1Y3R9IHAtMSBtLTBgfT57cHJvZHVjdCA/IHByb2R1Y3QucHJvZHVjdE5hbWUgOiAnJ308L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BsZWFkIHAtMSBtLTBgfT57cHJvZHVjdCA/IHByb2R1Y3QuZGVzY3JpcHRpb24gOiAnJ308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLTEyIGQtZmxleCBmbGV4LWNvbHVtbmB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtcm93IG1iLTQgbXktMyBjb2wtOSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U29sZW1hdGVCdXR0b24gYnV0dG9uVGV4dD1cIkNsZWFuXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsPScuL2ljb25zL2VyYXNlci5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW5Nb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nbGlnaHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U29sZW1hdGVCdXR0b24gYnV0dG9uVGV4dD17YEFkZCAoJHtjb3VudH0pYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9Jy4vaWNvbnMvY2FydC5wbmcnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRQcm9kdWN0VG9DYXJ0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdwdXJwbGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0zIHB4LTQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBmbGV4LXJvdy1yZXZlcnNlIGFsaWduLWl0ZW1zLWNlbnRlciBjb2wtMTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7c3R5bGVzLnByaWNlfSBtLTEgbWItMGB9Pntwcm9kdWN0ID8gcHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpIDogMH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY3VycmVuY3l9IG0tMSBtYi0wYH0+UiQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZC1mbGV4IGZsZXgtcm93LXJldmVyc2UgbXgtMSAke3N0eWxlcy5ub1dyYXB9YH0+e3Byb2R1Y3QgPyBwcm9kdWN0LnByb2R1Y3ROYW1lIDogJyd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIGQtZmxleCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bvc2l0aW9uLXJlbGF0aXZlIGNvbC05IG15LTMgbXgtYXV0byBteC1tZC0wJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3Bob3Rvcy8ke3Byb2R1Y3QgPyBwcm9kdWN0LmlkIDogJyd9L3Bob3RvYH0gYWx0PVwiXCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWFpblBob3RvfSB0ZXh0LWNlbnRlciBzaGFkb3cgcC0zIGJnLWJvZHktdGVydGlhcnkgcm91bmRlZCB3LTEwMGB9Lz5cbiAgICAgICAgICAgICAgICAgICAgPENvdW50ZXIgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5hcnJvd30gZC1mbGV4IHBvc2l0aW9uLWFic29sdXRlYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U29sZW1hdGVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD0nLi9pY29ucy9hcnJvdy1sZWZ0LXNob3J0LnN2ZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChERUNSRU1FTlRfUFJPRFVDVF9TSE9XKDEpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdsaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U29sZW1hdGVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD0nLi9pY29ucy9hcnJvdy1yaWdodC1zaG9ydC5zdmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goSU5DUkVNRU5UX1BST0RVQ1RfU0hPVyhwcm9kdWN0cy5sZW5ndGgpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdsaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbS0zIG10LTUnPlxuICAgICAgICAgICAgICAgIHttZXNzYWdlLm1lc3NhZ2UgJiYgPE1lc3NhZ2VSZXR1cm4gdGV4dD17bWVzc2FnZS5tZXNzYWdlLnRleHR9IHZhcmlhbnQ9e21lc3NhZ2UubWVzc2FnZS52YXJpYW50fSAvPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNvbGVtYXRlTW9kYWwgXG4gICAgICAgICAgICAgICAgc2hvdz17c2hvd01vZGFsfSBcbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH0gXG4gICAgICAgICAgICAgICAgaGFuZGxlWWVzPXtoYW5kbGVDbGVhbkNhcnR9XG4gICAgICAgICAgICAgICAgdGV4dD0nQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNsZWFyIHlvdXIgY2FydD8nXG4gICAgICAgICAgICAgICAgdGl0bGU9J0NsZWFyIENhcnQnXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpblNlY3Rpb247XG5cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJTZWFyY2hCYXIiLCJDb3VudGVyIiwiU29sZW1hdGVNb2RhbCIsIlNvbGVtYXRlQnV0dG9uIiwiTWVzc2FnZVJldHVybiIsIkRFQ1JFTUVOVF9QUk9EVUNUX1NIT1ciLCJJTkNSRU1FTlRfUFJPRFVDVF9TSE9XIiwiQUREX1BST0RVQ1RfVE9fQ0FSVCIsIkNMRUFOX0NBUlQiLCJTRVRfTUVTU0FHRSIsIkNMRUFSX01FU1NBR0UiLCJNYWluU2VjdGlvbiIsImRpc3BhdGNoIiwibWVzc2FnZSIsInN0YXRlIiwicmV0dXJuTWVzc2FnZSIsImNvdW50IiwiY291bnRlciIsInByb2R1Y3RTaG93IiwicHJvZHVjdCIsInByb2R1Y3RzIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiaGFuZGxlQWRkUHJvZHVjdFRvQ2FydCIsInRleHQiLCJwcm9kdWN0TmFtZSIsInZhcmlhbnQiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2xlYW5DYXJ0IiwiaGFuZGxlT3Blbk1vZGFsIiwiaGFuZGxlQ2xvc2VNb2RhbCIsImRpdiIsImNsYXNzTmFtZSIsInBsYWNlaG9sZGVyIiwiaDIiLCJ0aXRsZVByb2R1Y3QiLCJwIiwiZGVzY3JpcHRpb24iLCJidXR0b25UZXh0IiwiaW1hZ2VVcmwiLCJvbkNsaWNrIiwicHJpY2UiLCJ0b0ZpeGVkIiwiY3VycmVuY3kiLCJub1dyYXAiLCJpbWciLCJzcmMiLCJpZCIsImFsdCIsIm1haW5QaG90byIsImFycm93IiwibGVuZ3RoIiwic2hvdyIsImhhbmRsZUNsb3NlIiwiaGFuZGxlWWVzIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/landingpage/MainSection.tsx\n"));

/***/ })

});