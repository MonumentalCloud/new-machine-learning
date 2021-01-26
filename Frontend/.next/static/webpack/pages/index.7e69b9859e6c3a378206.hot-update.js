webpackHotUpdate_N_E("pages/index",{

/***/ "./component/main/main.js":
/*!********************************!*\
  !*** ./component/main/main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/client.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.module.css */ \"./component/main/main.module.css\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _layer_layer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layer/layer.js */ \"./component/layer/layer.js\");\n/* harmony import */ var _Tree_tree_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Tree/tree.js */ \"./component/Tree/tree.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\n\n\nvar _jsxFileName = \"/Users/marvinisawesome/Downloads/My Website Project/Postman Hackathon/Frontend/ez-machine-learning/component/main/main.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Main(props) {\n  _s();\n\n  var _this = this;\n\n  var _useSession = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__[\"useSession\"])(),\n      _useSession2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useSession, 2),\n      session = _useSession2[0],\n      loading = _useSession2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      layer = _useState[0],\n      setLayer = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      finalJSON = _useState2[0],\n      setFinalJSON = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      token = _useState3[0],\n      setToken = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(finalJSON);\n  }, [finalJSON]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (session) {\n      fetch('https://cors-anywhere.herokuapp.com/https://postmanai.herokuapp.com/register/').then(function (resp) {\n        return setToken(resp);\n      }).then(function () {\n        return console.log(token);\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n    }\n  }, [session]);\n\n  function handleRemove() {\n    var current = finalJSON.slice();\n    current.splice(-1, 1);\n    setFinalJSON(current);\n    setLayer(current.length);\n  }\n\n  var handleAdd = function handleAdd() {\n    if (layer < 10) {\n      setLayer(layer + 1);\n      var current = finalJSON;\n      current.push({\n        'type': 'dense',\n        'node': 1,\n        'activation': 'relu'\n      });\n    }\n  };\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n    var value = parseInt(e.target.value);\n\n    if (value) {\n      if (value > 10) {\n        setLayer(10);\n      } else if (value < 0) {\n        setLayer(0);\n      } else {\n        setLayer(value);\n      }\n    } else {\n      setLayer(0);\n    }\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    console.log(finalJSON);\n    return null;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.user,\n      children: [session.user.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: session.user.image,\n        style: {\n          width: '25px',\n          borderRadius: \"3px\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 36\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"Hello! Welcome \", session.user.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_3__[\"signOut\"],\n        children: \"Sign Out\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.layerVisualizer,\n      children: finalJSON.map(function (layer, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layer_layer_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          handleRemove: handleRemove,\n          thisLayer: layer,\n          setLayer: setLayer,\n          number: index,\n          json: finalJSON,\n          set: setFinalJSON\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 46\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.layer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n        onClick: handleAdd,\n        className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__[\"FontAwesomeIcon\"], {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__[\"faPlus\"],\n          className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.buttonIcon\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 67\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        className: \" form-control-label\",\n        htmlFor: \"example-number-input\",\n        children: [\"Layer Number: \", layer]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n        onClick: handleRemove,\n        className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button,\n        children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__[\"FontAwesomeIcon\"], {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__[\"faMinus\"],\n          className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.buttonIcon\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 71\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _main_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.tree,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Tree_tree_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        json: finalJSON\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        onClick: function onClick(e) {\n          return handleSubmit(e);\n        },\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Main, \"hNnrtTnD050TvOhxvbgFPaWgvyQ=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_3__[\"useSession\"]];\n});\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21haW4vbWFpbi5qcz82YjljIl0sIm5hbWVzIjpbIk1haW4iLCJwcm9wcyIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwibG9hZGluZyIsInVzZVN0YXRlIiwibGF5ZXIiLCJzZXRMYXllciIsImZpbmFsSlNPTiIsInNldEZpbmFsSlNPTiIsInRva2VuIiwic2V0VG9rZW4iLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcCIsImVyciIsImhhbmRsZVJlbW92ZSIsImN1cnJlbnQiLCJzbGljZSIsInNwbGljZSIsImxlbmd0aCIsImhhbmRsZUFkZCIsInB1c2giLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ1c2VyIiwiaW1hZ2UiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsIm5hbWUiLCJzaWduT3V0IiwibGF5ZXJWaXN1YWxpemVyIiwibWFwIiwiaW5kZXgiLCJidXR0b24iLCJmYVBsdXMiLCJidXR0b25JY29uIiwiZmFNaW51cyIsInRyZWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ0xDLG1FQUFVLEVBREw7QUFBQTtBQUFBLE1BQ3pCQyxPQUR5QjtBQUFBLE1BQ2hCQyxPQURnQjs7QUFBQSxrQkFHTkMsc0RBQVEsQ0FBQyxDQUFELENBSEY7QUFBQSxNQUd6QkMsS0FIeUI7QUFBQSxNQUdsQkMsUUFIa0I7O0FBQUEsbUJBSUVGLHNEQUFRLENBQUMsRUFBRCxDQUpWO0FBQUEsTUFJekJHLFNBSnlCO0FBQUEsTUFJZEMsWUFKYzs7QUFBQSxtQkFLTkos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SSxFQUFFRyx5RUFBdkI7QUFBZ0MsbUJBQVMsRUFBRWQsdURBQU0sQ0FBQ2E7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEosZUFvQkk7QUFBSyxlQUFTLEVBQUViLHVEQUFNLENBQUNlLElBQXZCO0FBQUEsNkJBQ0kscUVBQUMscURBQUQ7QUFBTSxZQUFJLEVBQUV4QztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJKLGVBdUJJO0FBQUEsNkJBQ0k7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUUsaUJBQUFtQixDQUFDO0FBQUEsaUJBQUlLLFlBQVksQ0FBQ0wsQ0FBRCxDQUFoQjtBQUFBLFNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQThCSDs7R0E5RnVCM0IsSTtVQUNPRSwyRDs7O0tBRFBGLEkiLCJmaWxlIjoiLi9jb21wb25lbnQvbWFpbi9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb259IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWFpbi5tb2R1bGUuY3NzJztcbmltcG9ydCBMYXllciBmcm9tICcuLi9sYXllci9sYXllci5qcyc7XG5pbXBvcnQgVHJlZSBmcm9tICcuLi9UcmVlL3RyZWUuanMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhTWludXMsIGZhUGx1cyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbihwcm9wcykge1xuICAgIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcbiAgICBcbiAgICBjb25zdCBbbGF5ZXIsIHNldExheWVyXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtmaW5hbEpTT04sIHNldEZpbmFsSlNPTl0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZmluYWxKU09OKVxuICAgIH0sW2ZpbmFsSlNPTl0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihzZXNzaW9uKSB7XG5cbiAgICAgICAgICAgIGZldGNoKCdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL3Bvc3RtYW5haS5oZXJva3VhcHAuY29tL3JlZ2lzdGVyLycpXG4gICAgICAgICAgICAudGhlbihyZXNwID0+IHNldFRva2VuKHJlc3ApKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2codG9rZW4pKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgfVxuICAgIH0sW3Nlc3Npb25dKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlKCkge1xuICAgICAgICBsZXQgY3VycmVudCA9IGZpbmFsSlNPTi5zbGljZSgpO1xuICAgICAgICBjdXJyZW50LnNwbGljZSgtMSwgMSk7XG4gICAgICAgIHNldEZpbmFsSlNPTihjdXJyZW50KTtcbiAgICAgICAgc2V0TGF5ZXIoY3VycmVudC5sZW5ndGgpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUFkZCA9ICgpID0+IHtcbiAgICAgICAgaWYobGF5ZXIgPCAxMCApIHtcblxuICAgICAgICAgICAgc2V0TGF5ZXIobGF5ZXIgKyAxKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBmaW5hbEpTT047XG4gICAgICAgICAgICBjdXJyZW50LnB1c2goe1xuICAgICAgICAgICAgICAgICd0eXBlJzogJ2RlbnNlJyxcbiAgICAgICAgICAgICAgICAnbm9kZScgOiAxLFxuICAgICAgICAgICAgICAgICdhY3RpdmF0aW9uJzoncmVsdSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgaWYodmFsdWU+IDEwKSB7XG4gICAgICAgICAgICAgICAgc2V0TGF5ZXIoMTApO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlIDwgMCl7XG4gICAgICAgICAgICAgICAgc2V0TGF5ZXIoMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldExheWVyKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldExheWVyKDApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZpbmFsSlNPTilcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcn0+XG4gICAgICAgICAgICB7c2Vzc2lvbi51c2VyLmltYWdlICYmIDxpbWcgc3JjPXtzZXNzaW9uLnVzZXIuaW1hZ2V9IHN0eWxlPXt7d2lkdGg6ICcyNXB4JywgYm9yZGVyUmFkaXVzOiBcIjNweFwifX0gLz59XG4gICAgICAgICAgICA8cD5IZWxsbyEgV2VsY29tZSB7c2Vzc2lvbi51c2VyLm5hbWV9PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduT3V0fT5TaWduIE91dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxheWVyVmlzdWFsaXplcn0+XG4gICAgICAgICAgICB7ZmluYWxKU09OLm1hcCgobGF5ZXIsIGluZGV4KSA9PiA8TGF5ZXIgaGFuZGxlUmVtb3ZlPXtoYW5kbGVSZW1vdmV9IHRoaXNMYXllcj17bGF5ZXJ9IHNldExheWVyPXtzZXRMYXllcn0ga2V5PXtpbmRleH0gbnVtYmVyPXtpbmRleH0ganNvbj17ZmluYWxKU09OfSBzZXQ9e3NldEZpbmFsSlNPTn0vPil9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5ZXJ9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGR9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXN9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkljb259Lz48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiIGZvcm0tY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJleGFtcGxlLW51bWJlci1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICBMYXllciBOdW1iZXI6IHtsYXllcn1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxiciAvPiAgICAgICAgICAgIFxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZW1vdmV9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNaW51c30gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uSWNvbn0vPjwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyZWV9PlxuICAgICAgICAgICAgPFRyZWUganNvbj17ZmluYWxKU09OfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e2UgPT4gaGFuZGxlU3VibWl0KGUpfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/main/main.js\n");

/***/ })

})