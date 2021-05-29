webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globalCss_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globalCss/main.css */ "./globalCss/main.css");
/* harmony import */ var _globalCss_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_globalCss_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MainLayout */ "./components/MainLayout.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! . */ "./pages/index.js");
/* harmony import */ var _contatos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contatos */ "./pages/contatos.js");
/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio */ "./pages/portfolio.js");
/* harmony import */ var _sobre__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sobre */ "./pages/sobre.js");
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./404 */ "./pages/404.js");



var _jsxFileName = "D:\\Documentos\\meu site\\pages\\_app.js",
    _s = $RefreshSig$();











function App() {
  _s();

  var path = "https://rgpolizeli.github.io/rpweb";
  var pathAssets = path + "/assets/";
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(); //STATES

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      currentComponent = _useState[0],
      setCurrentComponent = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("block"),
      pageLoading = _useState2[0],
      setPageLoading = _useState2[1]; //first load- only load one time - when the user enter in site
  // the user can entry in site via home or any page.


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.history.scrollRestoration = "auto";

    window.onpopstate = function () {
      goToRoute(router.asPath);
    };

    goToRoute(router.asPath);
  }, []);

  function goToRoute(relativePath) {
    setPageLoading("block");
    var currentComponent = "";

    switch (relativePath) {
      default:
        window.scrollTo(0, 0);
        currentComponent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_404__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this);
        router.replace("/404/", undefined, {
          shallow: true
        });
        setCurrentComponent(currentComponent);
        setPageLoading("none");
        break;

      case "/":
        window.scrollTo(0, 0);
        currentComponent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["default"], {
          pathAssets: pathAssets
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this);
        router.replace(relativePath, undefined, {
          shallow: true
        });
        setCurrentComponent(currentComponent);
        setPageLoading("none");
        break;

      case "/contatos/":
        window.scrollTo(0, 0);
        currentComponent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contatos__WEBPACK_IMPORTED_MODULE_7__["default"], {
          pathAssets: pathAssets
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this);
        router.replace(relativePath, undefined, {
          shallow: true
        });
        setCurrentComponent(currentComponent);
        setPageLoading("none");
        break;

      case "/portfolio/":
        window.scrollTo(0, 0);
        currentComponent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_portfolio__WEBPACK_IMPORTED_MODULE_8__["default"], {
          pathAssets: pathAssets
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this);
        router.replace(relativePath, undefined, {
          shallow: true
        });
        setCurrentComponent(currentComponent);
        setPageLoading("none");
        break;

      case "/sobre/":
        window.scrollTo(0, 0);
        currentComponent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sobre__WEBPACK_IMPORTED_MODULE_9__["default"], {
          pathAssets: pathAssets
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this);
        router.replace(relativePath, undefined, {
          shallow: true
        });
        setCurrentComponent(currentComponent);
        setPageLoading("none");
        break;
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: pageLoading
      },
      className: "jsx-1723679585" + " " + "loader"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MainLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      goToRoute: goToRoute,
      pathAssets: pathAssets,
      children: currentComponent
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1723679585",
      children: ".loader.jsx-1723679585{position:fixed;right:3.125rem;bottom:3.125rem;z-index:11111111;border:5px solid ghostwhite;border-radius:50%;border-top:5px solid orange;width:3rem;height:3rem;-webkit-animation:spin 2s linear infinite;-webkit-animation:spin-jsx-1723679585 2s linear infinite;animation:spin-jsx-1723679585 2s linear infinite;}@-webkit-keyframes spin 0%.jsx-1723679585{-webkit-transform:rotate(0deg);}@-webkit-keyframes spin 100%.jsx-1723679585{-webkit-transform:rotate(360deg);}@-webkit-keyframes spin-jsx-1723679585{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-jsx-1723679585{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEb2N1bWVudG9zXFxtZXUgc2l0ZVxccGFnZXNcXF9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0drQixBQUcwQixBQWVvQixBQUNJLEFBSVosQUFDSSxlQXBCaEIsZUFDQyxDQWFvQixFQUNJLGFBYnpCLGlCQUNhLGtCQWdCQSxNQUNJLElBaEJkLGtCQUNVLDRCQUNqQixXQUNDLFlBQzhCLDBDQUNSLDBHQUNwQyIsImZpbGUiOiJEOlxcRG9jdW1lbnRvc1xcbWV1IHNpdGVcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vZ2xvYmFsQ3NzL21haW4uY3NzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluTGF5b3V0XCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuXCI7XHJcbmltcG9ydCBDb250YXRvcyBmcm9tIFwiLi9jb250YXRvc1wiO1xyXG5pbXBvcnQgUG9ydGZvbGlvIGZyb20gXCIuL3BvcnRmb2xpb1wiO1xyXG5pbXBvcnQgU29icmUgZnJvbSBcIi4vc29icmVcIjtcclxuaW1wb3J0IFBhZ2U0MDQgZnJvbSBcIi4vNDA0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgcGF0aCA9IFwiaHR0cHM6Ly9yZ3BvbGl6ZWxpLmdpdGh1Yi5pby9ycHdlYlwiO1xyXG4gIGNvbnN0IHBhdGhBc3NldHMgPSBwYXRoICsgXCIvYXNzZXRzL1wiXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vU1RBVEVTXHJcbiAgY29uc3QgW2N1cnJlbnRDb21wb25lbnQsIHNldEN1cnJlbnRDb21wb25lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BhZ2VMb2FkaW5nLCBzZXRQYWdlTG9hZGluZ10gPSB1c2VTdGF0ZShcImJsb2NrXCIpO1xyXG5cclxuICAvL2ZpcnN0IGxvYWQtIG9ubHkgbG9hZCBvbmUgdGltZSAtIHdoZW4gdGhlIHVzZXIgZW50ZXIgaW4gc2l0ZVxyXG4gIC8vIHRoZSB1c2VyIGNhbiBlbnRyeSBpbiBzaXRlIHZpYSBob21lIG9yIGFueSBwYWdlLlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwiYXV0b1wiO1xyXG4gICAgd2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGdvVG9Sb3V0ZShyb3V0ZXIuYXNQYXRoKTtcclxuICAgIH07XHJcblxyXG4gICAgZ29Ub1JvdXRlKHJvdXRlci5hc1BhdGgpO1xyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGdvVG9Sb3V0ZShyZWxhdGl2ZVBhdGgpIHtcclxuICAgIFxyXG4gICAgc2V0UGFnZUxvYWRpbmcoXCJibG9ja1wiKTtcclxuICAgIHZhciBjdXJyZW50Q29tcG9uZW50ID0gXCJcIjtcclxuXHJcbiAgICBzd2l0Y2ggKHJlbGF0aXZlUGF0aCkge1xyXG4gICAgICBkZWZhdWx0OiBcclxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGN1cnJlbnRDb21wb25lbnQgPSAoXHJcbiAgICAgICAgICA8UGFnZTQwNCAgLz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiLzQwNC9cIiwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XHJcbiAgICAgICAgc2V0Q3VycmVudENvbXBvbmVudChjdXJyZW50Q29tcG9uZW50KTtcclxuICAgICAgICBzZXRQYWdlTG9hZGluZyhcIm5vbmVcIik7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiL1wiOlxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICBcclxuICAgICAgICBjdXJyZW50Q29tcG9uZW50ID0gKFxyXG4gICAgICAgICAgPEhvbWUgIHBhdGhBc3NldHM9e3BhdGhBc3NldHN9Lz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKHJlbGF0aXZlUGF0aCwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XHJcbiAgICAgICAgc2V0Q3VycmVudENvbXBvbmVudChjdXJyZW50Q29tcG9uZW50KTtcclxuICAgICAgICBzZXRQYWdlTG9hZGluZyhcIm5vbmVcIik7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiL2NvbnRhdG9zL1wiOlxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICBcclxuICAgICAgICBjdXJyZW50Q29tcG9uZW50ID0gKFxyXG4gICAgICAgICAgPENvbnRhdG9zIHBhdGhBc3NldHM9e3BhdGhBc3NldHN9Lz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKHJlbGF0aXZlUGF0aCwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XHJcbiAgICAgICAgc2V0Q3VycmVudENvbXBvbmVudChjdXJyZW50Q29tcG9uZW50KTtcclxuICAgICAgICBzZXRQYWdlTG9hZGluZyhcIm5vbmVcIik7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcIi9wb3J0Zm9saW8vXCI6XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgIGN1cnJlbnRDb21wb25lbnQgPSAoXHJcbiAgICAgICAgICA8UG9ydGZvbGlvIHBhdGhBc3NldHM9e3BhdGhBc3NldHN9Lz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKHJlbGF0aXZlUGF0aCwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XHJcbiAgICAgICAgc2V0Q3VycmVudENvbXBvbmVudChjdXJyZW50Q29tcG9uZW50KTtcclxuICAgICAgICBzZXRQYWdlTG9hZGluZyhcIm5vbmVcIik7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcIi9zb2JyZS9cIjpcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgY3VycmVudENvbXBvbmVudCA9IChcclxuICAgICAgICAgIDxTb2JyZSBwYXRoQXNzZXRzPXtwYXRoQXNzZXRzfS8+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByb3V0ZXIucmVwbGFjZShyZWxhdGl2ZVBhdGgsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiB0cnVlIH0pO1xyXG4gICAgICAgIHNldEN1cnJlbnRDb21wb25lbnQoY3VycmVudENvbXBvbmVudCk7XHJcbiAgICAgICAgc2V0UGFnZUxvYWRpbmcoXCJub25lXCIpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCIgc3R5bGU9e3sgZGlzcGxheTogcGFnZUxvYWRpbmcgfX0+PC9kaXY+XHJcbiAgICAgICAgPE1haW5MYXlvdXQgZ29Ub1JvdXRlPXtnb1RvUm91dGV9IHBhdGhBc3NldHM9e3BhdGhBc3NldHN9PlxyXG4gICAgICAgICAge2N1cnJlbnRDb21wb25lbnR9XHJcbiAgICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgICBcclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubG9hZGVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHJpZ2h0OiAzLjEyNXJlbTtcclxuICAgICAgICAgIGJvdHRvbTogMy4xMjVyZW07XHJcbiAgICAgICAgei1pbmRleDogMTExMTExMTE7XHJcbiAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBnaG9zdHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIG9yYW5nZTtcclxuICAgICAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAvKiBTYWZhcmkgKi9cclxuICAgICAgICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIFNhZmFyaSAqL1xyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAgICAgICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\\\Documentos\\\\meu site\\\\pages\\\\_app.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

_s(App, "CsVnDQQ6MWfKjSek5qpE0oLX38o=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = App;

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwYXRoIiwicGF0aEFzc2V0cyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiY3VycmVudENvbXBvbmVudCIsInNldEN1cnJlbnRDb21wb25lbnQiLCJwYWdlTG9hZGluZyIsInNldFBhZ2VMb2FkaW5nIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaGlzdG9yeSIsInNjcm9sbFJlc3RvcmF0aW9uIiwib25wb3BzdGF0ZSIsImdvVG9Sb3V0ZSIsImFzUGF0aCIsInJlbGF0aXZlUGF0aCIsInNjcm9sbFRvIiwicmVwbGFjZSIsInVuZGVmaW5lZCIsInNoYWxsb3ciLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEdBQVQsR0FBZTtBQUFBOztBQUM1QixNQUFNQyxJQUFJLEdBQUcsb0NBQWI7QUFDQSxNQUFNQyxVQUFVLEdBQUdELElBQUksR0FBRyxVQUExQjtBQUNBLE1BQU1FLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FINEIsQ0FLNUI7O0FBTDRCLGtCQU1vQkMsc0RBQVEsQ0FBQyxFQUFELENBTjVCO0FBQUEsTUFNckJDLGdCQU5xQjtBQUFBLE1BTUhDLG1CQU5HOztBQUFBLG1CQU9VRixzREFBUSxDQUFDLE9BQUQsQ0FQbEI7QUFBQSxNQU9yQkcsV0FQcUI7QUFBQSxNQU9SQyxjQVBRLGtCQVM1QjtBQUNBOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFVBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxpQkFBZixHQUFtQyxNQUFuQzs7QUFDQUYsVUFBTSxDQUFDRyxVQUFQLEdBQW9CLFlBQVk7QUFDOUJDLGVBQVMsQ0FBQ1osTUFBTSxDQUFDYSxNQUFSLENBQVQ7QUFDRCxLQUZEOztBQUlBRCxhQUFT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QUEsa0JBREY7QUFxQ0Q7O0dBMUh1Qk4sRztVQUdQSSxxRDs7O0tBSE9KLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yYTVhMDYwYzAxZDNhMDZmNDgzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vZ2xvYmFsQ3NzL21haW4uY3NzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluTGF5b3V0XCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuXCI7XHJcbmltcG9ydCBDb250YXRvcyBmcm9tIFwiLi9jb250YXRvc1wiO1xyXG5pbXBvcnQgUG9ydGZvbGlvIGZyb20gXCIuL3BvcnRmb2xpb1wiO1xyXG5pbXBvcnQgU29icmUgZnJvbSBcIi4vc29icmVcIjtcclxuaW1wb3J0IFBhZ2U0MDQgZnJvbSBcIi4vNDA0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgcGF0aCA9IFwiaHR0cHM6Ly9yZ3BvbGl6ZWxpLmdpdGh1Yi5pby9ycHdlYlwiO1xyXG4gIGNvbnN0IHBhdGhBc3NldHMgPSBwYXRoICsgXCIvYXNzZXRzL1wiXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vU1RBVEVTXHJcbiAgY29uc3QgW2N1cnJlbnRDb21wb25lbnQsIHNldEN1cnJlbnRDb21wb25lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BhZ2VMb2FkaW5nLCBzZXRQYWdlTG9hZGluZ10gPSB1c2VTdGF0ZShcImJsb2NrXCIpO1xyXG5cclxuICAvL2ZpcnN0IGxvYWQtIG9ubHkgbG9hZCBvbmUgdGltZSAtIHdoZW4gdGhlIHVzZXIgZW50ZXIgaW4gc2l0ZVxyXG4gIC8vIHRoZSB1c2VyIGNhbiBlbnRyeSBpbiBzaXRlIHZpYSBob21lIG9yIGFueSBwYWdlLlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwiYXV0b1wiO1xyXG4gICAgd2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGdvVG9Sb3V0ZShyb3V0ZXIuYXNQYXRoKTtcclxuICAgIH07XHJcblxyXG4gICAgZ29Ub1JvdXRlKHJvdXRlci5hc1BhdGgpO1xyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGdvVG9Sb3V0ZShyZWxhdGl2ZVBhdGgpIHtcclxuICAgIFxyXG4gICAgc2V0UGFnZUxvYWRpbmcoXCJibG9ja1wiKTtcclxuICAgIHZhciBjdXJyZW50Q29tcG9uZW50ID0gXCJcIjtcclxuXHJcbiAgICBzd2l0Y2ggKHJlbGF0aXZlUGF0aCkge1xyXG4gICAgICBkZWZhdWx0OiBcclxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGN1cnJlbnRDb21wb25lbnQgPSAoXHJcbiAgICAgICAgICA8UGFnZTQwNCAgLz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiLzQwNC9cIiwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XHJcbiAgICAgICAgc2V0Q3VycmVudENvbXBvbmVudChjdXJyZW50Q29tcG9uZW50KTtcclxuICAgICAgICBzZXRQYWdlTG9hZGluZyhcIm5vbmVcIik7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiL1wiOlxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICBcclxuICAgICAgICBjdXJyZW50Q29tcG9uZW50ID0gKFxyXG4gICAgICAgICAgPEhvbWUgIHBhdGhBc3NldHM9e3BhdGhBc3NldHN9Lz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKHJlbGF0aXZlUGF0aCwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XHJcbiAgICAgICAgc2V0Q3VycmVudENvbXBvbmVudChjdXJyZW50Q29tcG9uZW50KTtcclxuICAgICAgICBzZXRQYWdlTG9hZGluZyhcIm5vbmVcIik7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiL2NvbnRhdG9zL1wiOlxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICBcclxuICAgICAgICBjdXJyZW50Q29tcG9uZW50ID0gKFxyXG4gICAgICAgICAgPENvbnRhdG9zIHBhdGhBc3NldHM9e3BhdGhBc3NldHN9Lz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKHJlbGF0aXZlUGF0aCwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XHJcbiAgICAgICAgc2V0Q3VycmVudENvbXBvbmVudChjdXJyZW50Q29tcG9uZW50KTtcclxuICAgICAgICBzZXRQYWdlTG9hZGluZyhcIm5vbmVcIik7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcIi9wb3J0Zm9saW8vXCI6XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgIGN1cnJlbnRDb21wb25lbnQgPSAoXHJcbiAgICAgICAgICA8UG9ydGZvbGlvIHBhdGhBc3NldHM9e3BhdGhBc3NldHN9Lz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKHJlbGF0aXZlUGF0aCwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XHJcbiAgICAgICAgc2V0Q3VycmVudENvbXBvbmVudChjdXJyZW50Q29tcG9uZW50KTtcclxuICAgICAgICBzZXRQYWdlTG9hZGluZyhcIm5vbmVcIik7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcIi9zb2JyZS9cIjpcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgY3VycmVudENvbXBvbmVudCA9IChcclxuICAgICAgICAgIDxTb2JyZSBwYXRoQXNzZXRzPXtwYXRoQXNzZXRzfS8+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByb3V0ZXIucmVwbGFjZShyZWxhdGl2ZVBhdGgsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiB0cnVlIH0pO1xyXG4gICAgICAgIHNldEN1cnJlbnRDb21wb25lbnQoY3VycmVudENvbXBvbmVudCk7XHJcbiAgICAgICAgc2V0UGFnZUxvYWRpbmcoXCJub25lXCIpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCIgc3R5bGU9e3sgZGlzcGxheTogcGFnZUxvYWRpbmcgfX0+PC9kaXY+XHJcbiAgICAgICAgPE1haW5MYXlvdXQgZ29Ub1JvdXRlPXtnb1RvUm91dGV9IHBhdGhBc3NldHM9e3BhdGhBc3NldHN9PlxyXG4gICAgICAgICAge2N1cnJlbnRDb21wb25lbnR9XHJcbiAgICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgICBcclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubG9hZGVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHJpZ2h0OiAzLjEyNXJlbTtcclxuICAgICAgICAgIGJvdHRvbTogMy4xMjVyZW07XHJcbiAgICAgICAgei1pbmRleDogMTExMTExMTE7XHJcbiAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBnaG9zdHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIG9yYW5nZTtcclxuICAgICAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAvKiBTYWZhcmkgKi9cclxuICAgICAgICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIFNhZmFyaSAqL1xyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAgICAgICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==