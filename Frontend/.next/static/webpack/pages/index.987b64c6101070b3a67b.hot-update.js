webpackHotUpdate_N_E("pages/index",{

/***/ "./component/startPage/startPage.js":
/*!******************************************!*\
  !*** ./component/startPage/startPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StartPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _startPage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startPage.module.css */ \"./component/startPage/startPage.module.css\");\n/* harmony import */ var _startPage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_startPage_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/marvinisawesome/Downloads/My Website Project/Postman Hackathon/Frontend/ez-machine-learning/component/startPage/startPage.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction StartPage(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      id = _useState[0],\n      setId = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      name = _useState2[0],\n      setName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      model = _useState3[0],\n      setModel = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      desc = _useState4[0],\n      setDesc = _useState4[1];\n\n  var handleInitiate = function handleInitiate() {\n    props.setInitiate(true);\n    fetch('https://postmanai.herokuapp.com/createmodel?id=ab1214&name=Text Classifier 1&model=nn&desc=Classifies Twitter Post for Bernie Memes', {\n      headers: {\n        apikey: props.token\n      }\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n      className: _startPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,\n      onSubmit: handleInitiate,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"FormGroup\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], {\n          children: \"Id\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 38\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          type: \"textarea\",\n          name: \"text\",\n          id: \"exampleText\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"FormGroup\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], {\n          children: \"Name your model!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 52\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          type: \"textarea\",\n          name: \"text\",\n          id: \"exampleText\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"FormGroup\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], {\n          children: \"Model\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 41\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          type: \"select\",\n          name: \"select\",\n          id: \"exampleSelect\",\n          onChange: function onChange(e) {\n            return setModel(e.target.value);\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n            children: \"Regression\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n            children: \"Bayes Net\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n            children: \"Neural Net\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"FormGroup\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], {\n          children: \"Describe your Model\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 55\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          type: \"textarea\",\n          name: \"text\",\n          id: \"exampleText\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n        type: \"submit\",\n        children: \"Let's make a model!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, this);\n}\n\n_s(StartPage, \"5AySzihgz9HXhjk6V+uaj+csdBw=\");\n\n_c = StartPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"StartPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3N0YXJ0UGFnZS9zdGFydFBhZ2UuanM/NGU2OCJdLCJuYW1lcyI6WyJTdGFydFBhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiaWQiLCJzZXRJZCIsIm5hbWUiLCJzZXROYW1lIiwibW9kZWwiLCJzZXRNb2RlbCIsImRlc2MiLCJzZXREZXNjIiwiaGFuZGxlSW5pdGlhdGUiLCJzZXRJbml0aWF0ZSIsImZldGNoIiwiaGVhZGVycyIsImFwaWtleSIsInRva2VuIiwic3R5bGVzIiwiZm9ybSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFBOztBQUFBLGtCQUNsQkMsc0RBQVEsRUFEVTtBQUFBLE1BQy9CQyxFQUQrQjtBQUFBLE1BQzNCQyxLQUQyQjs7QUFBQSxtQkFFZEYsc0RBQVEsRUFGTTtBQUFBLE1BRS9CRyxJQUYrQjtBQUFBLE1BRXpCQyxPQUZ5Qjs7QUFBQSxtQkFHWkosc0RBQVEsRUFISTtBQUFBLE1BRy9CSyxLQUgrQjtBQUFBLE1BR3hCQyxRQUh3Qjs7QUFBQSxtQkFJZE4sc0RBQVEsRUFKTTtBQUFBLE1BSS9CTyxJQUorQjtBQUFBLE1BSXpCQyxPQUp5Qjs7QUFNckMsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCVixTQUFLLENBQUNXLFdBQU4sQ0FBa0IsSUFBbEI7QUFDQUMsU0FBSyxDQUFDLHFJQUFELEVBQXdJO0FBQ3pJQyxhQUFPLEVBQUU7QUFDTEMsY0FBTSxFQUFFZCxLQUFLLENBQUNlO0FBRFQ7QUFEZ0ksS0FBeEksQ0FBTDtBQUtILEdBUEQ7O0FBVUEsc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQywrQ0FBRDtBQUFNLGVBQVMsRUFBRUMsNERBQU0sQ0FBQ0MsSUFBeEI7QUFBOEIsY0FBUSxFQUFFUCxjQUF4QztBQUFBLDhCQUNJLHFFQUFDLG9EQUFEO0FBQUEsZ0NBQ0kscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFDcUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEckIsZUFFSSxxRUFBQyxnREFBRDtBQUFPLGNBQUksRUFBQyxVQUFaO0FBQXVCLGNBQUksRUFBQyxNQUE1QjtBQUFtQyxZQUFFLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUtJLHFFQUFDLG9EQUFEO0FBQUEsZ0NBQ0kscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFDbUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEbkMsZUFFSSxxRUFBQyxnREFBRDtBQUFPLGNBQUksRUFBQyxVQUFaO0FBQXVCLGNBQUksRUFBQyxNQUE1QjtBQUFtQyxZQUFFLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSixlQVNJLHFFQUFDLG9EQUFEO0FBQUEsZ0NBQ0kscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFDd0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEeEIsZUFFSSxxRUFBQyxnREFBRDtBQUFPLGNBQUksRUFBQyxRQUFaO0FBQXFCLGNBQUksRUFBQyxRQUExQjtBQUFtQyxZQUFFLEVBQUMsZUFBdEM7QUFBc0Qsa0JBQVEsRUFBRSxrQkFBQVEsQ0FBQztBQUFBLG1CQUFJWCxRQUFRLENBQUNXLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVo7QUFBQSxXQUFqRTtBQUFBLGtDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkEsZUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEosZUFpQkkscUVBQUMsb0RBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUNzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUR0QyxlQUVJLHFFQUFDLGdEQUFEO0FBQU8sY0FBSSxFQUFDLFVBQVo7QUFBdUIsY0FBSSxFQUFDLE1BQTVCO0FBQW1DLFlBQUUsRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCSixlQXFCSSxxRUFBQyxpREFBRDtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJCSDs7R0EzQ3VCckIsUzs7S0FBQUEsUyIsImZpbGUiOiIuL2NvbXBvbmVudC9zdGFydFBhZ2Uvc3RhcnRQYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdGFydFBhZ2UubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEZvcm1Hcm91cCwgTGFiZWwsIElucHV0LCBGb3JtVGV4dCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFydFBhZ2UocHJvcHMpIHtcbiAgICBjb25zdFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3RbbW9kZWwsIHNldE1vZGVsXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3RbZGVzYywgc2V0RGVzY10gPSB1c2VTdGF0ZSgpO1xuXG4gICAgY29uc3QgaGFuZGxlSW5pdGlhdGUgPSAoKSA9PiB7XG4gICAgICAgIHByb3BzLnNldEluaXRpYXRlKHRydWUpO1xuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9wb3N0bWFuYWkuaGVyb2t1YXBwLmNvbS9jcmVhdGVtb2RlbD9pZD1hYjEyMTQmbmFtZT1UZXh0IENsYXNzaWZpZXIgMSZtb2RlbD1ubiZkZXNjPUNsYXNzaWZpZXMgVHdpdHRlciBQb3N0IGZvciBCZXJuaWUgTWVtZXMnLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgYXBpa2V5OiBwcm9wcy50b2tlblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVJbml0aWF0ZX0+XG4gICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPklkPC9MYWJlbD48YnIvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cInRleHRcIiBpZD1cImV4YW1wbGVUZXh0XCIgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWw+TmFtZSB5b3VyIG1vZGVsITwvTGFiZWw+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJ0ZXh0XCIgaWQ9XCJleGFtcGxlVGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPk1vZGVsPC9MYWJlbD48YnIvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInNlbGVjdFwiIG5hbWU9XCJzZWxlY3RcIiBpZD1cImV4YW1wbGVTZWxlY3RcIiBvbkNoYW5nZT17ZSA9PiBzZXRNb2RlbChlLnRhcmdldC52YWx1ZSl9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlJlZ3Jlc3Npb248L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5CYXllcyBOZXQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5OZXVyYWwgTmV0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXQ+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbD5EZXNjcmliZSB5b3VyIE1vZGVsPC9MYWJlbD48YnIvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cInRleHRcIiBpZD1cImV4YW1wbGVUZXh0XCIgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5MZXQncyBtYWtlIGEgbW9kZWwhPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/startPage/startPage.js\n");

/***/ })

})