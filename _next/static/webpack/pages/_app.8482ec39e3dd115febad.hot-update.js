webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/MainLayout.js":
/*!**********************************!*\
  !*** ./components/MainLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainLayout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideNav */ "./components/SideNav.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\Documentos\\meu site\\components\\MainLayout.js",
    _s = $RefreshSig$();





function MainLayout(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("sidenav_closed"),
      sideNavClassName = _useState[0],
      setSideNavClassName = _useState[1];

  function closeSideNav() {
    setSideNavClassName("sidenav_closed");
  }

  function openSideNav() {
    setSideNavClassName("sidenav_opened");
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "main_content",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "http://localhost:3000/assets/favicon.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      toggleFunction: openSideNav
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SideNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
      goToRoute: props.goToRoute,
      toggleFunction: closeSideNav,
      className: sideNavClassName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_s(MainLayout, "HfH5zQ4GsNE5icbs6hlMmRFRmtM=");

_c = MainLayout;

var _c;

$RefreshReg$(_c, "MainLayout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluTGF5b3V0LmpzIl0sIm5hbWVzIjpbIk1haW5MYXlvdXQiLCJwcm9wcyIsInVzZVN0YXRlIiwic2lkZU5hdkNsYXNzTmFtZSIsInNldFNpZGVOYXZDbGFzc05hbWUiLCJjbG9zZVNpZGVOYXYiLCJvcGVuU2lkZU5hdiIsImdvVG9Sb3V0ZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLGdCQUFELENBRGhCO0FBQUEsTUFDakNDLGdCQURpQztBQUFBLE1BQ2ZDLG1CQURlOztBQUd4QyxXQUFTQyxZQUFULEdBQXdCO0FBQ3RCRCx1QkFBbUIsQ0FBQyxnQkFBRCxDQUFuQjtBQUNEOztBQUVELFdBQVNFLFdBQVQsR0FBdUI7QUFDckJGLHVCQUFtQixDQUFDLGdCQUFELENBQW5CO0FBQ0Q7O0FBQ0Qsc0JBQ0U7QUFBSyxNQUFFLEVBQUMsY0FBUjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FLHFFQUFDLCtDQUFEO0FBQVEsb0JBQWMsRUFBRUU7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBT0UscUVBQUMsZ0RBQUQ7QUFBUyxlQUFTLEVBQUVMLEtBQUssQ0FBQ00sU0FBMUI7QUFBcUMsb0JBQWMsRUFBRUYsWUFBckQ7QUFBbUUsZUFBUyxFQUFFRjtBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFRRTtBQUFBLGdCQUFPRixLQUFLLENBQUNPO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0dBdkJ1QlIsVTs7S0FBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjg0ODJlYzM5ZTNkZDExNWZlYmFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCBTaWRlTmF2IGZyb20gXCIuL1NpZGVOYXZcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluTGF5b3V0KHByb3BzKSB7XHJcbiAgY29uc3QgW3NpZGVOYXZDbGFzc05hbWUsIHNldFNpZGVOYXZDbGFzc05hbWVdID0gdXNlU3RhdGUoXCJzaWRlbmF2X2Nsb3NlZFwiKTtcclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VTaWRlTmF2KCkge1xyXG4gICAgc2V0U2lkZU5hdkNsYXNzTmFtZShcInNpZGVuYXZfY2xvc2VkXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3BlblNpZGVOYXYoKSB7XHJcbiAgICBzZXRTaWRlTmF2Q2xhc3NOYW1lKFwic2lkZW5hdl9vcGVuZWRcIik7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwibWFpbl9jb250ZW50XCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2Fzc2V0cy9mYXZpY29uLnN2Z1wiIC8+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxOYXZiYXIgdG9nZ2xlRnVuY3Rpb249e29wZW5TaWRlTmF2fSAvPlxyXG4gICAgICA8U2lkZU5hdiBnb1RvUm91dGU9e3Byb3BzLmdvVG9Sb3V0ZX0gdG9nZ2xlRnVuY3Rpb249e2Nsb3NlU2lkZU5hdn0gY2xhc3NOYW1lPXtzaWRlTmF2Q2xhc3NOYW1lfSAvPlxyXG4gICAgICA8bWFpbj57cHJvcHMuY2hpbGRyZW59PC9tYWluPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==