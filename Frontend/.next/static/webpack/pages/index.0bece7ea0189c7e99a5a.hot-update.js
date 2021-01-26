webpackHotUpdate_N_E("pages/index",{

/***/ "./component/main/main.js":
/*!********************************!*\
  !*** ./component/main/main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/client.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.module.css */ \"./component/main/main.module.css\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _layer_layer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layer/layer.js */ \"./component/layer/layer.js\");\n/* harmony import */ var _Tree_tree_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Tree/tree.js */ \"./component/Tree/tree.js\");\n/* harmony import */ var _startPage_startPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../startPage/startPage */ \"./component/startPage/startPage.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\n\n\nvar _jsxFileName = \"/Users/marvinisawesome/Downloads/My Website Project/Postman Hackathon/Frontend/ez-machine-learning/component/main/main.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Main(props) {\n  _s();\n\n  var _this = this;\n\n  var _useSession = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__[\"useSession\"])(),\n      _useSession2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useSession, 2),\n      session = _useSession2[0],\n      loading = _useSession2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      layer = _useState[0],\n      setLayer = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      finalJSON = _useState2[0],\n      setFinalJSON = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      token = _useState3[0],\n      setToken = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      initiate = _useState4[0],\n      setInitiate = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(finalJSON);\n  }, [finalJSON]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (session) {\n      fetch('https://postmanai.herokuapp.com/register', {\n        method: 'GET',\n        mode: 'cors',\n        headers: {\n          'Content-Type': 'application/json',\n          'Access-Control-Allow-Origin': '*'\n        }\n      }).then(function (rawResp) {\n        return rawResp.json();\n      }).then(function (resp) {\n        return setToken(resp);\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n    }\n  }, [session]);\n\n  function handleRemove() {\n    var current = finalJSON.slice();\n    current.splice(-1, 1);\n    setFinalJSON(current);\n    setLayer(current.length);\n  }\n\n  var handleAdd = function handleAdd() {\n    if (layer < 10) {\n      setLayer(layer + 1);\n      var current = finalJSON;\n      current.push({\n        'type': 'dense',\n        'node': 1,\n        'activation': 'relu'\n      });\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.user,\n      children: [session.user.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: session.user.image,\n        style: {\n          width: '25px',\n          borderRadius: \"3px\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 36\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"Hello! Welcome \", session.user.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_3__[\"signOut\"],\n        children: \"Sign Out\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, this), initiate ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.layerVisualizer,\n        children: finalJSON.map(function (layer, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layer_layer_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            handleRemove: handleRemove,\n            thisLayer: layer,\n            setLayer: setLayer,\n            number: index,\n            json: finalJSON,\n            set: setFinalJSON\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 46\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.layer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n          onClick: handleAdd,\n          className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__[\"FontAwesomeIcon\"], {\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faPlus\"],\n            className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.buttonIcon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 67\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: \" form-control-label\",\n          htmlFor: \"example-number-input\",\n          children: [\"Layer Number: \", layer]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n          onClick: handleRemove,\n          className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button,\n          children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__[\"FontAwesomeIcon\"], {\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faMinus\"],\n            className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.buttonIcon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 71\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.tree,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Tree_tree_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          json: finalJSON\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 10\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_startPage_startPage__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      setInitiate: setInitiate,\n      token: token\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Main, \"U9tBAAio8iLk4+vp0WXfzL8n4cM=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_3__[\"useSession\"]];\n});\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21haW4vbWFpbi5qcz82YjljIl0sIm5hbWVzIjpbIk1haW4iLCJwcm9wcyIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwibG9hZGluZyIsInVzZVN0YXRlIiwibGF5ZXIiLCJzZXRMYXllciIsImZpbmFsSlNPTiIsInNldEZpbmFsSlNPTiIsInRva2VuIiwic2V0VG9rZW4iLCJpbml0aWF0ZSIsInNldEluaXRpYXRlIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImhlYWRlcnMiLCJ0aGVuIiwicmF3UmVzcCIsImpzb24iLCJyZXNwIiwiZXJyIiwiaGFuZGxlUmVtb3ZlIiwiY3VycmVudCIsInNsaWNlIiwic3BsaWNlIiwibGVuZ3RoIiwiaGFuZGxlQWRkIiwicHVzaCIsInN0eWxlcyIsImNvbnRhaW5lciIsInVzZXIiLCJpbWFnZSIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwibmFtZSIsInNpZ25PdXQiLCJsYXllclZpc3VhbGl6ZXIiLCJtYXAiLCJpbmRleCIsImJ1dHRvbiIsImZhUGx1cyIsImJ1dHRvbkljb24iLCJmYU1pbnVzIiwidHJlZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFBQSxvQkFDTEMsbUVBQVUsRUFETDtBQUFBO0FBQUEsTUFDekJDLE9BRHlCO0FBQUEsTUFDaEJDLE9BRGdCOztBQUFBLGtCQUdOQyxzREFBUSxDQUFDLENBQUQsQ0FIRjtBQUFBLE1BR3pCQyxLQUh5QjtBQUFBLE1BR2xCQyxRQUhrQjs7QUFBQSxtQkFJRUYsc0RBQVEsQ0FBQyxFQUFELENBSlY7QUFBQSxNQUl6QkcsU0FKeUI7QUFBQSxNQUlkQyxZQUpjOztBQUFBLG1CQUtOSixzREFB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WUFEVyxnQkFtQloscUVBQUMsNERBQUQ7QUFBVyxpQkFBVyxFQUFFSyxXQUF4QjtBQUFxQyxXQUFLLEVBQUVIO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFrQ0g7O0dBbkZ1QlYsSTtVQUNPRSwyRDs7O0tBRFBGLEkiLCJmaWxlIjoiLi9jb21wb25lbnQvbWFpbi9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb259IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWFpbi5tb2R1bGUuY3NzJztcbmltcG9ydCBMYXllciBmcm9tICcuLi9sYXllci9sYXllci5qcyc7XG5pbXBvcnQgVHJlZSBmcm9tICcuLi9UcmVlL3RyZWUuanMnO1xuaW1wb3J0IFN0YXJ0UGFnZSBmcm9tICcuLi9zdGFydFBhZ2Uvc3RhcnRQYWdlJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYU1pbnVzLCBmYVBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4ocHJvcHMpIHtcbiAgICBjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKCk7XG4gICAgXG4gICAgY29uc3QgW2xheWVyLCBzZXRMYXllcl0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbZmluYWxKU09OLCBzZXRGaW5hbEpTT05dID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbaW5pdGlhdGUsIHNldEluaXRpYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGZpbmFsSlNPTilcbiAgICB9LFtmaW5hbEpTT05dKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoc2Vzc2lvbikge1xuXG4gICAgICAgICAgICBmZXRjaCgnaHR0cHM6Ly9wb3N0bWFuYWkuaGVyb2t1YXBwLmNvbS9yZWdpc3RlcicsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXG4gICAgICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyYXdSZXNwID0+IHJhd1Jlc3AuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzcCA9PiBzZXRUb2tlbihyZXNwKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgIH1cbiAgICB9LFtzZXNzaW9uXSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZSgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBmaW5hbEpTT04uc2xpY2UoKTtcbiAgICAgICAgY3VycmVudC5zcGxpY2UoLTEsIDEpO1xuICAgICAgICBzZXRGaW5hbEpTT04oY3VycmVudCk7XG4gICAgICAgIHNldExheWVyKGN1cnJlbnQubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVBZGQgPSAoKSA9PiB7XG4gICAgICAgIGlmKGxheWVyIDwgMTAgKSB7XG5cbiAgICAgICAgICAgIHNldExheWVyKGxheWVyICsgMSk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gZmluYWxKU09OO1xuICAgICAgICAgICAgY3VycmVudC5wdXNoKHtcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdkZW5zZScsXG4gICAgICAgICAgICAgICAgJ25vZGUnIDogMSxcbiAgICAgICAgICAgICAgICAnYWN0aXZhdGlvbic6J3JlbHUnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcn0+XG4gICAgICAgICAgICB7c2Vzc2lvbi51c2VyLmltYWdlICYmIDxpbWcgc3JjPXtzZXNzaW9uLnVzZXIuaW1hZ2V9IHN0eWxlPXt7d2lkdGg6ICcyNXB4JywgYm9yZGVyUmFkaXVzOiBcIjNweFwifX0gLz59XG4gICAgICAgICAgICA8cD5IZWxsbyEgV2VsY29tZSB7c2Vzc2lvbi51c2VyLm5hbWV9PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduT3V0fT5TaWduIE91dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7XG4gICAgICAgICAgICBpbml0aWF0ZT9cbiAgICAgICAgKDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5ZXJWaXN1YWxpemVyfT5cbiAgICAgICAgICAgIHtmaW5hbEpTT04ubWFwKChsYXllciwgaW5kZXgpID0+IDxMYXllciBoYW5kbGVSZW1vdmU9e2hhbmRsZVJlbW92ZX0gdGhpc0xheWVyPXtsYXllcn0gc2V0TGF5ZXI9e3NldExheWVyfSBrZXk9e2luZGV4fSBudW1iZXI9e2luZGV4fSBqc29uPXtmaW5hbEpTT059IHNldD17c2V0RmluYWxKU09OfS8+KX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXllcn0+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFkZH0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c30gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uSWNvbn0vPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCIgZm9ybS1jb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cImV4YW1wbGUtbnVtYmVyLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIExheWVyIE51bWJlcjoge2xheWVyfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJyIC8+ICAgICAgICAgICAgXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZX0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT4gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYU1pbnVzfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25JY29ufS8+PC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHJlZX0+XG4gICAgICAgICAgICA8VHJlZSBqc29uPXtmaW5hbEpTT059Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PikgOlxuICAgICAgICA8U3RhcnRQYWdlIHNldEluaXRpYXRlPXtzZXRJbml0aWF0ZX0gdG9rZW49e3Rva2VufS8+XG4gICAgICAgIH1cblxuXG4gICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/main/main.js\n");

/***/ })

})