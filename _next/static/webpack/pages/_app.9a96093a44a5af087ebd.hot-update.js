webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/SideNav.js":
/*!*******************************!*\
  !*** ./components/SideNav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideNav; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Documentos\\meu site\\components\\SideNav.js";

function SideNav(props) {
  function sideNavItemClick(relativePath) {
    props.goToRoute(relativePath);
    props.toggleFunction();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-3614891211" + " " + (props.className + " flex_column_center" || false),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "jsx-3614891211" + " " + "logo",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
        stroke: "#fff",
        className: "jsx-3614891211",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
          cx: "40.33",
          cy: "40",
          r: "39.5",
          className: "jsx-3614891211"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M44.468 38.14c-11.68 0-21.15 10.12-21.15 20.465M53.688 47.125c0-2.22-1.306-4.494-3.763-6.316-1.831-1.358-4.158-2.343-6.623-2.752l-.01 18.128c2.464-.406 4.793-1.39 6.626-2.746 2.46-1.821 3.768-4.094 3.77-6.314zM31.343 28.52c-.002-2.22 1.305-4.494 3.762-6.316 1.831-1.358 4.159-2.343 6.623-2.751l.01 18.128c-2.464-.407-4.793-1.39-6.625-2.747-2.46-1.82-3.769-4.094-3.77-6.314z",
          "stroke-width": "5",
          className: "jsx-3614891211"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: props.toggleFunction.bind(this),
      className: "jsx-3614891211" + " " + "close_button",
      children: "\xD7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: sideNavItemClick.bind(this, '/'),
      className: "jsx-3614891211" + " " + "sidenav_item",
      children: "IN\xCDCIO"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: sideNavItemClick.bind(this, '/sobre'),
      className: "jsx-3614891211" + " " + "sidenav_item",
      children: "SOBRE"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: sideNavItemClick.bind(this, '/portfolio'),
      className: "jsx-3614891211" + " " + "sidenav_item",
      children: "PORTF\xD3LIO"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: sideNavItemClick.bind(this, '/contatos'),
      className: "jsx-3614891211" + " " + "sidenav_item",
      children: "CONTATOS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3614891211",
      children: ".logo.jsx-3614891211{position:absolute;width:6rem;height:6rem;left:2.5rem;top:2.5rem;z-index:99999;}.close_button.jsx-3614891211{position:absolute;width:1.75rem;height:1.75rem;color:white;font-size:3.125rem;right:3.75rem;top:2.5rem;font-family:Poppins;}.close_button.jsx-3614891211:hover{color:#ff6b00;}.sidenav_opened.jsx-3614891211{position:fixed;left:0;background-color:black;z-index:9999;width:100%;height:100vh;-webkit-transition:all .4s ease;transition:all .4s ease;}.sidenav_closed.jsx-3614891211{position:fixed;background-color:black;z-index:9999;width:100%;height:0;left:0;visibility:visible;-webkit-transition:all .4s ease;transition:all .4s ease;overflow:hidden;}.sidenav_item.jsx-3614891211{padding:1.75rem;color:white;font-size:2rem;font-family:Poppins;}.sidenav_item.jsx-3614891211:hover{color:#ff6b00;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEb2N1bWVudG9zXFxtZXUgc2l0ZVxcY29tcG9uZW50c1xcU2lkZU5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2tCLEFBRzZCLEFBU0EsQUFXSixBQUlDLEFBU0EsQUFXQyxBQU9GLGNBOUJoQixBQStCQSxDQTNCUSxBQVNpQixDQVdYLEVBNUNELEFBU0csSUFnQlMsTUFvQlIsQ0E1Q0gsR0FTRyxNQXdCRixHQWhDRCxFQTRDUSxFQXBCUCxFQWZGLElBd0JBLEVBaENBLEtBd0JBLENBZlEsR0F3QlYsQ0FXWCxDQTNDZ0IsS0F3QkQsRUFTUCxPQWhDUixBQVFnQixBQXlCSyxJQVRLLFVBZmIsS0F5QmEsTUF4Qkosb0JBQ3RCLGVBY0EsZUFVaUIsZ0JBQ2pCIiwiZmlsZSI6IkQ6XFxEb2N1bWVudG9zXFxtZXUgc2l0ZVxcY29tcG9uZW50c1xcU2lkZU5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlTmF2KHByb3BzKSB7XHJcbiAgZnVuY3Rpb24gc2lkZU5hdkl0ZW1DbGljayhyZWxhdGl2ZVBhdGgpe1xyXG4gICAgcHJvcHMuZ29Ub1JvdXRlKHJlbGF0aXZlUGF0aClcclxuICAgIHByb3BzLnRvZ2dsZUZ1bmN0aW9uKClcclxuICB9XHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lICsgXCIgZmxleF9jb2x1bW5fY2VudGVyXCJ9PlxyXG4gICAgICBcclxuICAgICAgPHN2ZyBjbGFzc05hbWU9XCJsb2dvXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgPGcgc3Ryb2tlPVwiI2ZmZlwiPlxyXG4gICAgICAgICAgPGNpcmNsZSBjeD1cIjQwLjMzXCIgY3k9XCI0MFwiIHI9XCIzOS41XCIgLz5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNNDQuNDY4IDM4LjE0Yy0xMS42OCAwLTIxLjE1IDEwLjEyLTIxLjE1IDIwLjQ2NU01My42ODggNDcuMTI1YzAtMi4yMi0xLjMwNi00LjQ5NC0zLjc2My02LjMxNi0xLjgzMS0xLjM1OC00LjE1OC0yLjM0My02LjYyMy0yLjc1MmwtLjAxIDE4LjEyOGMyLjQ2NC0uNDA2IDQuNzkzLTEuMzkgNi42MjYtMi43NDYgMi40Ni0xLjgyMSAzLjc2OC00LjA5NCAzLjc3LTYuMzE0ek0zMS4zNDMgMjguNTJjLS4wMDItMi4yMiAxLjMwNS00LjQ5NCAzLjc2Mi02LjMxNiAxLjgzMS0xLjM1OCA0LjE1OS0yLjM0MyA2LjYyMy0yLjc1MWwuMDEgMTguMTI4Yy0yLjQ2NC0uNDA3LTQuNzkzLTEuMzktNi42MjUtMi43NDctMi40Ni0xLjgyLTMuNzY5LTQuMDk0LTMuNzctNi4zMTR6XCJcclxuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiNVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9zdmc+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlX2J1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLnRvZ2dsZUZ1bmN0aW9uLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICZ0aW1lcztcclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVuYXZfaXRlbVwiIG9uQ2xpY2s9e3NpZGVOYXZJdGVtQ2xpY2suYmluZCh0aGlzLCcvJyl9PklOw41DSU88L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZW5hdl9pdGVtXCIgb25DbGljaz17c2lkZU5hdkl0ZW1DbGljay5iaW5kKHRoaXMsJy9zb2JyZScpfT5TT0JSRTwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlbmF2X2l0ZW1cIiBvbkNsaWNrPXtzaWRlTmF2SXRlbUNsaWNrLmJpbmQodGhpcywnL3BvcnRmb2xpbycpfT5QT1JURsOTTElPPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVuYXZfaXRlbVwiIG9uQ2xpY2s9e3NpZGVOYXZJdGVtQ2xpY2suYmluZCh0aGlzLCcvY29udGF0b3MnKX0+Q09OVEFUT1M8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogNnJlbTtcclxuICAgICAgICAgIGhlaWdodDogNnJlbTtcclxuICAgICAgICAgIGxlZnQ6IDIuNXJlbTtcclxuICAgICAgICAgIHRvcDogMi41cmVtO1xyXG4gICAgICAgICAgei1pbmRleDogOTk5OTk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xvc2VfYnV0dG9uIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMuMTI1cmVtO1xyXG4gICAgICAgICAgcmlnaHQ6IDMuNzVyZW07XHJcbiAgICAgICAgICB0b3A6IDIuNXJlbTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNsb3NlX2J1dHRvbjpob3ZlcntcclxuICAgICAgICAgIGNvbG9yOiAjZmY2YjAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNpZGVuYXZfb3BlbmVkIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIGxlZnQ6MDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNpZGVuYXZfY2xvc2VkIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcclxuICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNpZGVuYXZfaXRlbXtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNzVyZW07XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaWRlbmF2X2l0ZW0gOmhvdmVye1xyXG4gICAgICAgICAgY29sb3I6ICNmZjZiMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Documentos\\\\meu site\\\\components\\\\SideNav.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
_c = SideNav;

var _c;

$RefreshReg$(_c, "SideNav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlTmF2LmpzIl0sIm5hbWVzIjpbIlNpZGVOYXYiLCJwcm9wcyIsInNpZGVOYXZJdGVtQ2xpY2siLCJyZWxhdGl2ZVBhdGgiLCJnb1RvUm91dGUiLCJ0b2dnbGVGdW5jdGlvbiIsImNsYXNzTmFtZSIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDZSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUNyQyxXQUFTQyxnQkFBVCxDQUEwQkMsWUFBMUIsRUFBdUM7QUFDckNGLFNBQUssQ0FBQ0csU0FBTixDQUFnQkQsWUFBaEI7QUFDQUYsU0FBSyxDQUFDSSxjQUFOO0FBQ0Q7O0FBQ0Qsc0JBRUU7QUFBQSx5Q0FBZ0JKLEtBQUssQ0FBQ0ssU0FBTixHQUFrQixxQkFBbEM7QUFBQSw0QkFFRTtBQUFzQixVQUFJLEVBQUMsTUFBM0I7QUFBa0MsV0FBSyxFQUFDLDRCQUF4QztBQUFBLDBDQUFlLE1BQWY7QUFBQSw2QkFDRTtBQUFHLGNBQU0sRUFBQyxNQUFWO0FBQUE7QUFBQSxnQ0FDRTtBQUFRLFlBQUUsRUFBQyxPQUFYO0FBQW1CLFlBQUUsRUFBQyxJQUF0QjtBQUEyQixXQUFDLEVBQUMsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUNFLFdBQUMsRUFBQyx1WEFESjtBQUVFLDBCQUFhLEdBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBWUU7QUFBOEIsYUFBTyxFQUFFTCxLQUFLLENBQUNJLGNBQU4sQ0FBcUJFLElBQXJCLENBQTBCLElBQTFCLENBQXZDO0FBQUEsMENBQWUsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLGVBZ0JFO0FBQThCLGFBQU8sRUFBRUwsZ0JBQWdCLENBQUNLLElBQWpCLENBQXNCLElBQXRCLEVBQTJCLEdBQTNCLENBQXZDO0FBQUEsMENBQWUsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRixlQWtCRTtBQUE4QixhQUFPLEVBQUVMLGdCQUFnQixDQUFDSyxJQUFqQixDQUFzQixJQUF0QixFQUEyQixRQUEzQixDQUF2QztBQUFBLDBDQUFlLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkYsZUFvQkU7QUFBOEIsYUFBTyxFQUFFTCxnQkFBZ0IsQ0FBQ0ssSUFBakIsQ0FBc0IsSUFBdEIsRUFBMkIsWUFBM0IsQ0FBdkM7QUFBQSwwQ0FBZSxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJGLGVBc0JFO0FBQThCLGFBQU8sRUFBRUwsZ0JBQWdCLENBQUNLLElBQWpCLENBQXNCLElBQXRCLEVBQTJCLFdBQTNCLENBQXZDO0FBQUEsMENBQWUsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQW9GRDtLQXpGdUJQLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45YTk2MDkzYTQ0YTVhZjA4N2ViZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVOYXYocHJvcHMpIHtcclxuICBmdW5jdGlvbiBzaWRlTmF2SXRlbUNsaWNrKHJlbGF0aXZlUGF0aCl7XHJcbiAgICBwcm9wcy5nb1RvUm91dGUocmVsYXRpdmVQYXRoKVxyXG4gICAgcHJvcHMudG9nZ2xlRnVuY3Rpb24oKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWUgKyBcIiBmbGV4X2NvbHVtbl9jZW50ZXJcIn0+XHJcbiAgICAgIFxyXG4gICAgICA8c3ZnIGNsYXNzTmFtZT1cImxvZ29cIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICA8ZyBzdHJva2U9XCIjZmZmXCI+XHJcbiAgICAgICAgICA8Y2lyY2xlIGN4PVwiNDAuMzNcIiBjeT1cIjQwXCIgcj1cIjM5LjVcIiAvPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk00NC40NjggMzguMTRjLTExLjY4IDAtMjEuMTUgMTAuMTItMjEuMTUgMjAuNDY1TTUzLjY4OCA0Ny4xMjVjMC0yLjIyLTEuMzA2LTQuNDk0LTMuNzYzLTYuMzE2LTEuODMxLTEuMzU4LTQuMTU4LTIuMzQzLTYuNjIzLTIuNzUybC0uMDEgMTguMTI4YzIuNDY0LS40MDYgNC43OTMtMS4zOSA2LjYyNi0yLjc0NiAyLjQ2LTEuODIxIDMuNzY4LTQuMDk0IDMuNzctNi4zMTR6TTMxLjM0MyAyOC41MmMtLjAwMi0yLjIyIDEuMzA1LTQuNDk0IDMuNzYyLTYuMzE2IDEuODMxLTEuMzU4IDQuMTU5LTIuMzQzIDYuNjIzLTIuNzUxbC4wMSAxOC4xMjhjLTIuNDY0LS40MDctNC43OTMtMS4zOS02LjYyNS0yLjc0Ny0yLjQ2LTEuODItMy43NjktNC4wOTQtMy43Ny02LjMxNHpcIlxyXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg9XCI1XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L3N2Zz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2VfYnV0dG9uXCIgb25DbGljaz17cHJvcHMudG9nZ2xlRnVuY3Rpb24uYmluZCh0aGlzKX0+XHJcbiAgICAgICAgJnRpbWVzO1xyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZW5hdl9pdGVtXCIgb25DbGljaz17c2lkZU5hdkl0ZW1DbGljay5iaW5kKHRoaXMsJy8nKX0+SU7DjUNJTzwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlbmF2X2l0ZW1cIiBvbkNsaWNrPXtzaWRlTmF2SXRlbUNsaWNrLmJpbmQodGhpcywnL3NvYnJlJyl9PlNPQlJFPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVuYXZfaXRlbVwiIG9uQ2xpY2s9e3NpZGVOYXZJdGVtQ2xpY2suYmluZCh0aGlzLCcvcG9ydGZvbGlvJyl9PlBPUlRGw5NMSU88L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZW5hdl9pdGVtXCIgb25DbGljaz17c2lkZU5hdkl0ZW1DbGljay5iaW5kKHRoaXMsJy9jb250YXRvcycpfT5DT05UQVRPUzwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiA2cmVtO1xyXG4gICAgICAgICAgbGVmdDogMi41cmVtO1xyXG4gICAgICAgICAgdG9wOiAyLjVyZW07XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTk5OTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jbG9zZV9idXR0b24ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMy4xMjVyZW07XHJcbiAgICAgICAgICByaWdodDogMy43NXJlbTtcclxuICAgICAgICAgIHRvcDogMi41cmVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xvc2VfYnV0dG9uOmhvdmVye1xyXG4gICAgICAgICAgY29sb3I6ICNmZjZiMDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2lkZW5hdl9vcGVuZWQge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2lkZW5hdl9jbG9zZWQge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2lkZW5hdl9pdGVte1xyXG4gICAgICAgICAgcGFkZGluZzogMS43NXJlbTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNpZGVuYXZfaXRlbSA6aG92ZXJ7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmNmIwMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==