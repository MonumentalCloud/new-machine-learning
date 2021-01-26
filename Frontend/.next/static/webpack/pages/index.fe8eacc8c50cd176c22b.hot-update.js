webpackHotUpdate_N_E("pages/index",{

/***/ "./component/startPage/startPage.js":
/*!******************************************!*\
  !*** ./component/startPage/startPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StartPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _startPage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startPage.module.css */ \"./component/startPage/startPage.module.css\");\n/* harmony import */ var _startPage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_startPage_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/marvinisawesome/Downloads/My Website Project/Postman Hackathon/Frontend/ez-machine-learning/component/startPage/startPage.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction StartPage(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      id = _useState[0],\n      setId = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      name = _useState2[0],\n      setName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      model = _useState3[0],\n      setModel = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      desc = _useState4[0],\n      setDesc = _useState4[1];\n\n  var handleInitiate = function handleInitiate(e) {\n    e.preventDefault();\n    fetch(\"https://postmanai.herokuapp.com/createmodel?id=\".concat(id, \"&name=\").concat(name, \"&model=\").concat(model, \"&desc=\").concat(desc), {\n      method: 'PUT',\n      headers: {\n        apikey: props.token\n      }\n    }).then(function (resp) {\n      if (resp.status === 201) {\n        props.setInitiate(true);\n      } else {\n        alert('That id is already taken!');\n      }\n\n      console.log(resp.status);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  var handleModel = function handleModel(type) {\n    switch (type) {\n      case 'Regression':\n        setModel('reg');\n        break;\n\n      case 'Bayes Net':\n        setModel('bn');\n        break;\n\n      default:\n        setModel('nn');\n        break;\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _startPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n      className: _startPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,\n      onSubmit: function onSubmit(e) {\n        return handleInitiate(e);\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"FormGroup\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], {\n          children: \"Id\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 38\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          type: \"textarea\",\n          name: \"text\",\n          id: \"exampleText\",\n          onChange: function onChange(e) {\n            return setId(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"FormGroup\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], {\n          children: \"Name your model!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 52\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          type: \"textarea\",\n          name: \"text\",\n          id: \"exampleText\",\n          onChange: function onChange(e) {\n            return setName(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"FormGroup\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], {\n          children: \"Model\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 41\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          type: \"select\",\n          name: \"select\",\n          id: \"exampleSelect\",\n          onChange: function onChange(e) {\n            return handleModel(e.target.value);\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n            children: \"Regression\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n            children: \"Bayes Net\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n            children: \"Neural Net\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"FormGroup\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], {\n          children: \"Describe your Model\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 55\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          type: \"textarea\",\n          name: \"text\",\n          id: \"exampleText\",\n          onChange: function onChange(e) {\n            return setDesc(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n        type: \"submit\",\n        children: \"Let's make a model!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 9\n  }, this);\n}\n\n_s(StartPage, \"5AySzihgz9HXhjk6V+uaj+csdBw=\");\n\n_c = StartPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"StartPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3N0YXJ0UGFnZS9zdGFydFBhZ2UuanM/NGU2OCJdLCJuYW1lcyI6WyJTdGFydFBhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiaWQiLCJzZXRJZCIsIm5hbWUiLCJzZXROYW1lIiwibW9kZWwiLCJzZXRNb2RlbCIsImRlc2MiLCJzZXREZXNjIiwiaGFuZGxlSW5pdGlhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhcGlrZXkiLCJ0b2tlbiIsInRoZW4iLCJyZXNwIiwic3RhdHVzIiwic2V0SW5pdGlhdGUiLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJoYW5kbGVNb2RlbCIsInR5cGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJmb3JtIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFBQSxrQkFDbEJDLHNEQUFRLEVBRFU7QUFBQSxNQUMvQkMsRUFEK0I7QUFBQSxNQUMzQkMsS0FEMkI7O0FBQUEsbUJBRWRGLHNEQUFRLEVBRk07QUFBQSxNQUUvQkcsSUFGK0I7QUFBQSxNQUV6QkMsT0FGeUI7O0FBQUEsbUJBR1pKLHNEQUFRLEVBSEk7QUFBQSxNQUcvQkssS0FIK0I7QUFBQSxNQUd4QkMsUUFId0I7O0FBQUEsbUJBSWROLHNEQUFRLEVBSk07QUFBQSxNQUkvQk8sSUFKK0I7QUFBQSxNQUl6QkMsT0FKeUI7O0FBTXJDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsU0FBSywwREFBbURYLEVBQW5ELG1CQUE4REUsSUFBOUQsb0JBQTRFRSxLQUE1RSxtQkFBMEZFLElBQTFGLEdBQWtHO0FBQ25HTSxZQUFNLEVBQUUsS0FEMkY7QUFF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O0FBQUE7QUFBQTtBQUFBLGtCQUZBLGVBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKLGVBaUJJLHFFQUFDLG9EQUFEO0FBQUEsZ0NBQ0kscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFDc0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEdEMsZUFFSSxxRUFBQyxnREFBRDtBQUFPLGNBQUksRUFBQyxVQUFaO0FBQXVCLGNBQUksRUFBQyxNQUE1QjtBQUFtQyxZQUFFLEVBQUMsYUFBdEM7QUFBb0Qsa0JBQVEsRUFBRSxrQkFBQXJCLENBQUM7QUFBQSxtQkFBSUYsT0FBTyxDQUFDRSxDQUFDLENBQUNvQixNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUFBO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJKLGVBcUJJLHFFQUFDLGlEQUFEO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMkJIOztHQW5FdUJqQyxTOztLQUFBQSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50L3N0YXJ0UGFnZS9zdGFydFBhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0YXJ0UGFnZS5tb2R1bGUuY3NzJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgRm9ybUdyb3VwLCBMYWJlbCwgSW5wdXQsIEZvcm1UZXh0IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJ0UGFnZShwcm9wcykge1xuICAgIGNvbnN0W2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0W25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdFttb2RlbCwgc2V0TW9kZWxdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdFtkZXNjLCBzZXREZXNjXSA9IHVzZVN0YXRlKCk7XG5cbiAgICBjb25zdCBoYW5kbGVJbml0aWF0ZSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9wb3N0bWFuYWkuaGVyb2t1YXBwLmNvbS9jcmVhdGVtb2RlbD9pZD0ke2lkfSZuYW1lPSR7bmFtZX0mbW9kZWw9JHttb2RlbH0mZGVzYz0ke2Rlc2N9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBhcGlrZXk6IHByb3BzLnRva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgaWYocmVzcC5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgICAgICAgIHByb3BzLnNldEluaXRpYXRlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnVGhhdCBpZCBpcyBhbHJlYWR5IHRha2VuIScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwLnN0YXR1cylcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU1vZGVsID0gdHlwZSA9PiB7XG4gICAgICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdSZWdyZXNzaW9uJzpcbiAgICAgICAgICAgICAgICBzZXRNb2RlbCgncmVnJylcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0JheWVzIE5ldCc6XG4gICAgICAgICAgICAgICAgc2V0TW9kZWwoJ2JuJylcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc2V0TW9kZWwoJ25uJylcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e2UgPT4gaGFuZGxlSW5pdGlhdGUoZSl9PlxuICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbD5JZDwvTGFiZWw+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJ0ZXh0XCIgaWQ9XCJleGFtcGxlVGV4dFwiIG9uQ2hhbmdlPXtlID0+IHNldElkKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbD5OYW1lIHlvdXIgbW9kZWwhPC9MYWJlbD48YnIvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cInRleHRcIiBpZD1cImV4YW1wbGVUZXh0XCIgb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWw+TW9kZWw8L0xhYmVsPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwic2VsZWN0XCIgbmFtZT1cInNlbGVjdFwiIGlkPVwiZXhhbXBsZVNlbGVjdFwiIG9uQ2hhbmdlPXtlID0+IGhhbmRsZU1vZGVsKGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+UmVncmVzc2lvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkJheWVzIE5ldDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk5ldXJhbCBOZXQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dD4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPkRlc2NyaWJlIHlvdXIgTW9kZWw8L0xhYmVsPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBuYW1lPVwidGV4dFwiIGlkPVwiZXhhbXBsZVRleHRcIiBvbkNoYW5nZT17ZSA9PiBzZXREZXNjKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPkxldCdzIG1ha2UgYSBtb2RlbCE8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/startPage/startPage.js\n");

/***/ })

})