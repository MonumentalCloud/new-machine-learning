webpackHotUpdate_N_E("pages/index",{

/***/ "./component/main/main.js":
/*!********************************!*\
  !*** ./component/main/main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/client.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.module.css */ \"./component/main/main.module.css\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _layer_layer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layer/layer.js */ \"./component/layer/layer.js\");\n/* harmony import */ var _Tree_tree_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Tree/tree.js */ \"./component/Tree/tree.js\");\n/* harmony import */ var _startPage_startPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../startPage/startPage */ \"./component/startPage/startPage.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\nvar _jsxFileName = \"/Users/marvinisawesome/Downloads/My Website Project/Postman Hackathon/Frontend/ez-machine-learning/component/main/main.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Main(props) {\n  _s();\n\n  var _this = this;\n\n  var _useSession = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__[\"useSession\"])(),\n      _useSession2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useSession, 2),\n      session = _useSession2[0],\n      loading = _useSession2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      layer = _useState[0],\n      setLayer = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      finalJSON = _useState2[0],\n      setFinalJSON = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      token = _useState3[0],\n      setToken = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      initiate = _useState4[0],\n      setInitiate = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      id = _useState5[0],\n      setId = _useState5[1];\n\n  var url = 'https://postmanai.herokuapp.com';\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(finalJSON);\n  }, [finalJSON]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (session) {\n      fetch(\"\".concat(url, \"/register\"), {\n        method: 'GET',\n        mode: 'cors',\n        headers: {\n          'Content-Type': 'application/json',\n          'Access-Control-Allow-Origin': '*'\n        }\n      }).then(function (rawResp) {\n        return rawResp.json();\n      }).then(function (resp) {\n        return setToken(resp);\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n    }\n  }, [session]);\n\n  function handleRemove() {\n    var current = finalJSON.slice();\n    current.splice(-1, 1);\n    setFinalJSON(current);\n    setLayer(current.length); // fetch(`https://postmanai.heroku.com/poplayer?modelid=${id}`, {\n    //     method: 'DEL',\n    //     headers: {\n    //         apikey: token\n    //     }\n    // })\n    // .catch(err => console.log(err))\n  }\n\n  var handleAdd = function handleAdd() {\n    if (layer < 10) {\n      setLayer(layer + 1);\n      var current = finalJSON;\n      current.push({\n        'type': 'dense',\n        'node': 1,\n        'activation': 'relu'\n      });\n    }\n  };\n\n  var handleSubmit = function handleSubmit() {\n    finalJSON.map(function (layerData, index) {\n      if (layerData['type'] === 'dense') {\n        fetch(\"\".concat(url, \"/appenddenselayer?modelid=\").concat(id, \"&units=\").concat(layerData['node'], \"&activation=\").concat(layerData['activation'], \"&use_bias=true&name=dense-layer\").concat(index), {\n          method: 'POST',\n          headers: {\n            apikey: token\n          }\n        });\n      } else if (layerData['type'] === 'embedding') {\n        fetch(\"\".concat(url, \"/appendembeddinglayer?modelid=\").concat(id, \"&input_dim=\").concat(layerData['input_dim'], \"&output_dim=\").concat(layerData['output_dim'], \"&input_len=\").concat(layerData['input_len'], \"&mask_zero=false\"), {\n          method: 'POST',\n          headers: {\n            apikey: token\n          }\n        });\n      }\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.user,\n      children: [session.user.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: session.user.image,\n        style: {\n          width: '25px',\n          borderRadius: \"3px\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 36\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"Hello! Welcome \", session.user.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        style: {\n          backgroundColor: \"lightskyblue\",\n          border: \"none\",\n          fontWeight: 100\n        },\n        onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_3__[\"signOut\"],\n        children: \"Sign Out\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }, this), true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.layerVisualizer,\n        children: finalJSON.map(function (layer, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layer_layer_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            handleRemove: handleRemove,\n            thisLayer: layer,\n            setLayer: setLayer,\n            number: index,\n            json: finalJSON,\n            set: setFinalJSON\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 46\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.layer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n          onClick: handleAdd,\n          className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__[\"FontAwesomeIcon\"], {\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faPlus\"],\n            className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.buttonIcon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 67\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: \" form-control-label\",\n          htmlFor: \"example-number-input\",\n          children: layer\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n          onClick: handleRemove,\n          className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button,\n          children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__[\"FontAwesomeIcon\"], {\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faMinus\"],\n            className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.buttonIcon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 71\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.tree,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_11___default.a, {\n          src: \"/public/nn.png\",\n          layout: \"fill\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        onClick: handleSubmit,\n        className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.done,\n        children: \"I'm done!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 10\n    }, this) : /*#__PURE__*/undefined]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 93,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Main, \"0cakWMRyM7/ONRUXOelpDpXQugE=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_3__[\"useSession\"]];\n});\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21haW4vbWFpbi5qcz82YjljIl0sIm5hbWVzIjpbIk1haW4iLCJwcm9wcyIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwibG9hZGluZyIsInVzZVN0YXRlIiwibGF5ZXIiLCJzZXRMYXllciIsImZpbmFsSlNPTiIsInNldEZpbmFsSlNPTiIsInRva2VuIiwic2V0VG9rZW4iLCJpbml0aWF0ZSIsInNldEluaXRpYXRlIiwiaWQiLCJzZXRJZCIsInVybCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwidGhlbiIsInJhd1Jlc3AiLCJqc29uIiwicmVzcCIsImVyciIsImhhbmRsZVJlbW92ZSIsImN1cnJlbnQiLCJzbGljZSIsInNwbGljZSIsImxlbmd0aCIsImhhbmRsZUFkZCIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJtYXAiLCJsYXllckRhdGEiLCJpbmRleCIsImFwaWtleSIsInN0eWxlcyIsImNvbnRhaW5lciIsInVzZXIiLCJpbWFnZSIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwibmFtZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImZvbnRXZWlnaHQiLCJzaWduT3V0IiwibGF5ZXJWaXN1YWxpemVyIiwiYnV0dG9uIiwiZmFQbHVzIiwiYnV0dG9uSWNvbiIsImZhTWludXMiLCJ0cmVlIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ0xDLG1FQUFVLEVBREw7QUFBQTtBQUFBLE1BQ3pCQyxPQUR5QjtBQUFBLE1BQ2hCQyxPQURnQjs7QUFBQSxrQkFHTkMsc0RBQVEsQ0FBQyxDQUFELENBSEY7QUFBQSxNQUd6QkMs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QUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiQyxlQWlCRDtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRXJCLFlBQS9CO0FBQTZDLGlCQUFTLEVBQUVLLHVEQUFNLENBQUNpQixJQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERyxnQkFvQkosU0E1Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFtQ0g7O0dBbkh1QjFELEk7VUFDT0UsMkQ7OztLQURQRixJIiwiZmlsZSI6Ii4vY29tcG9uZW50L21haW4vbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7c2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9ufSBmcm9tICduZXh0LWF1dGgvY2xpZW50JztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21haW4ubW9kdWxlLmNzcyc7XG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi4vbGF5ZXIvbGF5ZXIuanMnO1xuaW1wb3J0IFRyZWUgZnJvbSAnLi4vVHJlZS90cmVlLmpzJztcbmltcG9ydCBTdGFydFBhZ2UgZnJvbSAnLi4vc3RhcnRQYWdlL3N0YXJ0UGFnZSc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFNaW51cywgZmFQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKHByb3BzKSB7XG4gICAgY29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpO1xuICAgIFxuICAgIGNvbnN0IFtsYXllciwgc2V0TGF5ZXJdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2ZpbmFsSlNPTiwgc2V0RmluYWxKU09OXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2luaXRpYXRlLCBzZXRJbml0aWF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vcG9zdG1hbmFpLmhlcm9rdWFwcC5jb20nXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhmaW5hbEpTT04pXG4gICAgfSxbZmluYWxKU09OXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKHNlc3Npb24pIHtcblxuICAgICAgICAgICAgZmV0Y2goYCR7dXJsfS9yZWdpc3RlcmAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXG4gICAgICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyYXdSZXNwID0+IHJhd1Jlc3AuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzcCA9PiBzZXRUb2tlbihyZXNwKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgIH1cbiAgICB9LFtzZXNzaW9uXSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZSgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBmaW5hbEpTT04uc2xpY2UoKTtcbiAgICAgICAgY3VycmVudC5zcGxpY2UoLTEsIDEpO1xuICAgICAgICBzZXRGaW5hbEpTT04oY3VycmVudCk7XG4gICAgICAgIHNldExheWVyKGN1cnJlbnQubGVuZ3RoKTtcbiAgICAgICAgLy8gZmV0Y2goYGh0dHBzOi8vcG9zdG1hbmFpLmhlcm9rdS5jb20vcG9wbGF5ZXI/bW9kZWxpZD0ke2lkfWAsIHtcbiAgICAgICAgLy8gICAgIG1ldGhvZDogJ0RFTCcsXG4gICAgICAgIC8vICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC8vICAgICAgICAgYXBpa2V5OiB0b2tlblxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KVxuICAgICAgICAvLyAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQWRkID0gKCkgPT4ge1xuICAgICAgICBpZihsYXllciA8IDEwICkge1xuXG4gICAgICAgICAgICBzZXRMYXllcihsYXllciArIDEpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGZpbmFsSlNPTjtcbiAgICAgICAgICAgIGN1cnJlbnQucHVzaCh7XG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnZGVuc2UnLFxuICAgICAgICAgICAgICAgICdub2RlJyA6IDEsXG4gICAgICAgICAgICAgICAgJ2FjdGl2YXRpb24nOidyZWx1J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIGZpbmFsSlNPTi5tYXAoKGxheWVyRGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmKGxheWVyRGF0YVsndHlwZSddID09PSAnZGVuc2UnKSB7XG4gICAgICAgICAgICAgICAgZmV0Y2goYCR7dXJsfS9hcHBlbmRkZW5zZWxheWVyP21vZGVsaWQ9JHtpZH0mdW5pdHM9JHtsYXllckRhdGFbJ25vZGUnXX0mYWN0aXZhdGlvbj0ke2xheWVyRGF0YVsnYWN0aXZhdGlvbiddfSZ1c2VfYmlhcz10cnVlJm5hbWU9ZGVuc2UtbGF5ZXIke2luZGV4fWAsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaWtleTogdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZihsYXllckRhdGFbJ3R5cGUnXSA9PT0gJ2VtYmVkZGluZycpIHtcbiAgICAgICAgICAgICAgICBmZXRjaChgJHt1cmx9L2FwcGVuZGVtYmVkZGluZ2xheWVyP21vZGVsaWQ9JHtpZH0maW5wdXRfZGltPSR7bGF5ZXJEYXRhWydpbnB1dF9kaW0nXX0mb3V0cHV0X2RpbT0ke2xheWVyRGF0YVsnb3V0cHV0X2RpbSddfSZpbnB1dF9sZW49JHtsYXllckRhdGFbJ2lucHV0X2xlbiddfSZtYXNrX3plcm89ZmFsc2VgLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcGlrZXk6IHRva2VuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJ9PlxuICAgICAgICAgICAge3Nlc3Npb24udXNlci5pbWFnZSAmJiA8aW1nIHNyYz17c2Vzc2lvbi51c2VyLmltYWdlfSBzdHlsZT17e3dpZHRoOiAnMjVweCcsIGJvcmRlclJhZGl1czogXCIzcHhcIn19IC8+fVxuICAgICAgICAgICAgPHA+SGVsbG8hIFdlbGNvbWUge3Nlc3Npb24udXNlci5uYW1lfTwvcD5cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwibGlnaHRza3libHVlXCIsIGJvcmRlcjogXCJub25lXCIsIGZvbnRXZWlnaHQ6IDEwMH19IG9uQ2xpY2s9e3NpZ25PdXR9PlNpZ24gT3V0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRydWU/XG4gICAgICAgICg8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxheWVyVmlzdWFsaXplcn0+XG4gICAgICAgICAgICB7ZmluYWxKU09OLm1hcCgobGF5ZXIsIGluZGV4KSA9PiA8TGF5ZXIgaGFuZGxlUmVtb3ZlPXtoYW5kbGVSZW1vdmV9IHRoaXNMYXllcj17bGF5ZXJ9IHNldExheWVyPXtzZXRMYXllcn0ga2V5PXtpbmRleH0gbnVtYmVyPXtpbmRleH0ganNvbj17ZmluYWxKU09OfSBzZXQ9e3NldEZpbmFsSlNPTn0vPil9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5ZXJ9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGR9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXN9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkljb259Lz48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiIGZvcm0tY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJleGFtcGxlLW51bWJlci1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICB7bGF5ZXJ9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD4gICAgIFxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZW1vdmV9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNaW51c30gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uSWNvbn0vPjwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyZWV9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9wdWJsaWMvbm4ucG5nXCIgbGF5b3V0PVwiZmlsbFwiPjwvSW1hZ2U+XG4gICAgICAgICAgICB7LyogPFRyZWUganNvbj17ZmluYWxKU09OfS8+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5kb25lfT5JJ20gZG9uZSE8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+KSA6XG4gICAgICAgIDxTdGFydFBhZ2UgaWQ9e2lkfSBzZXRJZD17c2V0SWR9IHNldEluaXRpYXRlPXtzZXRJbml0aWF0ZX0gdG9rZW49e3Rva2VufS8+XG4gICAgICAgIH1cblxuXG4gICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/main/main.js\n");

/***/ })

})