webpackHotUpdate_N_E("pages/index",{

/***/ "./component/startPage/startPage.js":
/*!******************************************!*\
  !*** ./component/startPage/startPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StartPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _startPage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startPage.module.css */ \"./component/startPage/startPage.module.css\");\n/* harmony import */ var _startPage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_startPage_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/marvinisawesome/Downloads/My Website Project/Postman Hackathon/Frontend/ez-machine-learning/component/startPage/startPage.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction StartPage(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      id = _useState[0],\n      setId = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      name = _useState2[0],\n      setName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      model = _useState3[0],\n      setModel = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      desc = _useState4[0],\n      setDesc = _useState4[1];\n\n  var handleInitiate = function handleInitiate() {\n    props.setInitiate(true);\n    fetch('https://postmanai.herokuapp.com/createmodel?id=ab1214&name=Text Classifier 1&model=nn&desc=Classifies Twitter Post for Bernie Memes', {\n      headers: {\n        apikey: props.token\n      }\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _startPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n      className: _startPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,\n      onSubmit: handleInitiate,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"FormGroup\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], {\n          children: \"Id\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 38\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          type: \"textarea\",\n          name: \"text\",\n          id: \"exampleText\",\n          onChange: function onChange(e) {\n            return setId(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"FormGroup\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], {\n          children: \"Name your model!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 52\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          type: \"textarea\",\n          name: \"text\",\n          id: \"exampleText\",\n          onChange: function onChange(e) {\n            return setName(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"FormGroup\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], {\n          children: \"Model\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 41\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          type: \"select\",\n          name: \"select\",\n          id: \"exampleSelect\",\n          onChange: function onChange(e) {\n            return console.log(e.target.value);\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n            children: \"Regression\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n            children: \"Bayes Net\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n            children: \"Neural Net\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"FormGroup\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], {\n          children: \"Describe your Model\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 55\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          type: \"textarea\",\n          name: \"text\",\n          id: \"exampleText\",\n          onChange: function onChange(e) {\n            return setDesc(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n        type: \"submit\",\n        children: \"Let's make a model!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, this);\n}\n\n_s(StartPage, \"5AySzihgz9HXhjk6V+uaj+csdBw=\");\n\n_c = StartPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"StartPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3N0YXJ0UGFnZS9zdGFydFBhZ2UuanM/NGU2OCJdLCJuYW1lcyI6WyJTdGFydFBhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiaWQiLCJzZXRJZCIsIm5hbWUiLCJzZXROYW1lIiwibW9kZWwiLCJzZXRNb2RlbCIsImRlc2MiLCJzZXREZXNjIiwiaGFuZGxlSW5pdGlhdGUiLCJzZXRJbml0aWF0ZSIsImZldGNoIiwiaGVhZGVycyIsImFwaWtleSIsInRva2VuIiwic3R5bGVzIiwiY29udGFpbmVyIiwiZm9ybSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFBQSxrQkFDbEJDLHNEQUFRLEVBRFU7QUFBQSxNQUMvQkMsRUFEK0I7QUFBQSxNQUMzQkMsS0FEMkI7O0FBQUEsbUJBRWRGLHNEQUFRLEVBRk07QUFBQSxNQUUvQkcsSUFGK0I7QUFBQSxNQUV6QkMsT0FGeUI7O0FBQUEsbUJBR1pKLHNEQUFRLEVBSEk7QUFBQSxNQUcvQkssS0FIK0I7QUFBQSxNQUd4QkMsUUFId0I7O0FBQUEsbUJBSWROLHNEQUFRLEVBSk07QUFBQSxNQUkvQk8sSUFKK0I7QUFBQSxNQUl6QkMsT0FKeUI7O0FBTXJDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QlYsU0FBSyxDQUFDVyxXQUFOLENBQWtCLElBQWxCO0FBQ0FDLFNBQUssQ0FBQyxxSUFBRCxFQUF3STtBQUN6SUMsYUFBTyxFQUFFO0FBQ0xDLGNBQU0sRUFBRWQsS0FBSyxDQUFDZTtBQURUO0FBRGdJLEtBQXhJLENBQUw7QUFLSCxHQVBEOztBQVVBLHNCQUNJO0FBQUssYUFBUyxFQUFFQyw0REFBTSxDQUFDQyxTQUF2QjtBQUFBLDJCQUNJLHFFQUFDLCtDQUFEO0FBQU0sZUFBUyxFQUFFRCw0REFBTSxDQUFDRSxJQUF4QjtBQUE4QixjQUFRLEVBQUVSLGNBQXhDO0FBQUEsOEJBQ0kscUVBQUMsb0RBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUNxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURyQixlQUVJLHFFQUFDLGdEQUFEO0FBQU8sY0FBSSxFQUFDLFVBQVo7QUFBdUIsY0FBSSxFQUFDLE1BQTVCO0FBQW1DLFlBQUUsRUFBQyxhQUF0QztBQUFvRCxrQkFBUSxFQUFFLGtCQUFBUyxDQUFDO0FBQUEsbUJBQUloQixLQUFLLENBQUNnQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0FBQUE7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUtJLHFFQUFDLG9EQUFEO0FBQUEsZ0NBQ0kscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFDbUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEbkMsZUFFSSxxRUFBQyxnREFBRDtBQUFPLGNBQUksRUFBQyxVQUFaO0FBQXVCLGNBQUksRUFBQyxNQUE1QjtBQUFtQyxZQUFFLEVBQUMsYUFBdEM7QUFBb0Qsa0JBQVEsRUFBRSxrQkFBQUYsQ0FBQztBQUFBLG1CQUFJZCxPQUFPLENBQUNjLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFBQTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLGVBU0kscUVBQUMsb0RBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUN3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUR4QixlQUVJLHFFQUFDLGdEQUFEO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsY0FBSSxFQUFDLFFBQTFCO0FBQW1DLFlBQUUsRUFBQyxlQUF0QztBQUFzRCxrQkFBUSxFQUFFLGtCQUFBRixDQUFDO0FBQUEsbUJBQUlHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBckIsQ0FBSjtBQUFBLFdBQWpFO0FBQUEsa0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsZUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGQSxlQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUSixlQWlCSSxxRUFBQyxvREFBRDtBQUFBLGdDQUNJLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBQ3NDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRHRDLGVBRUkscUVBQUMsZ0RBQUQ7QUFBTyxjQUFJLEVBQUMsVUFBWjtBQUF1QixjQUFJLEVBQUMsTUFBNUI7QUFBbUMsWUFBRSxFQUFDLGFBQXRDO0FBQW9ELGtCQUFRLEVBQUUsa0JBQUFGLENBQUM7QUFBQSxtQkFBSVYsT0FBTyxDQUFDVSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQUE7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkosZUFxQkkscUVBQUMsaURBQUQ7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyQkg7O0dBM0N1QnRCLFM7O0tBQUFBLFMiLCJmaWxlIjoiLi9jb21wb25lbnQvc3RhcnRQYWdlL3N0YXJ0UGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3RhcnRQYWdlLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCwgRm9ybVRleHQgfSBmcm9tICdyZWFjdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhcnRQYWdlKHByb3BzKSB7XG4gICAgY29uc3RbaWQsIHNldElkXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3RbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0W21vZGVsLCBzZXRNb2RlbF0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0W2Rlc2MsIHNldERlc2NdID0gdXNlU3RhdGUoKTtcblxuICAgIGNvbnN0IGhhbmRsZUluaXRpYXRlID0gKCkgPT4ge1xuICAgICAgICBwcm9wcy5zZXRJbml0aWF0ZSh0cnVlKTtcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vcG9zdG1hbmFpLmhlcm9rdWFwcC5jb20vY3JlYXRlbW9kZWw/aWQ9YWIxMjE0Jm5hbWU9VGV4dCBDbGFzc2lmaWVyIDEmbW9kZWw9bm4mZGVzYz1DbGFzc2lmaWVzIFR3aXR0ZXIgUG9zdCBmb3IgQmVybmllIE1lbWVzJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIGFwaWtleTogcHJvcHMudG9rZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVJbml0aWF0ZX0+XG4gICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPklkPC9MYWJlbD48YnIvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cInRleHRcIiBpZD1cImV4YW1wbGVUZXh0XCIgb25DaGFuZ2U9e2UgPT4gc2V0SWQoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPk5hbWUgeW91ciBtb2RlbCE8L0xhYmVsPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBuYW1lPVwidGV4dFwiIGlkPVwiZXhhbXBsZVRleHRcIiBvbkNoYW5nZT17ZSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbD5Nb2RlbDwvTGFiZWw+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJzZWxlY3RcIiBuYW1lPVwic2VsZWN0XCIgaWQ9XCJleGFtcGxlU2VsZWN0XCIgb25DaGFuZ2U9e2UgPT4gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5SZWdyZXNzaW9uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+QmF5ZXMgTmV0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TmV1cmFsIE5ldDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0PiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWw+RGVzY3JpYmUgeW91ciBNb2RlbDwvTGFiZWw+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJ0ZXh0XCIgaWQ9XCJleGFtcGxlVGV4dFwiIG9uQ2hhbmdlPXtlID0+IHNldERlc2MoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TGV0J3MgbWFrZSBhIG1vZGVsITwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/startPage/startPage.js\n");

/***/ })

})