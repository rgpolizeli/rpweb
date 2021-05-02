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



var _jsxFileName = "D:\\Documentos\\meu site\\pages\\_app.js",
    _s = $RefreshSig$();










function App() {
  _s();

  var path = "http://localhost:3000";
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
    console.log(relativePath);
    setPageLoading("block");
    var currentComponent = "";

    switch (relativePath) {
      case "/":
        window.scrollTo(0, 0);
        currentComponent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this);
        router.replace(relativePath, undefined, {
          shallow: true
        });
        setCurrentComponent(currentComponent);
        setPageLoading("none");
        break;

      case "/contatos":
        window.scrollTo(0, 0);
        currentComponent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contatos__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
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

      case "/portfolio":
        window.scrollTo(0, 0);
        currentComponent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_portfolio__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
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

      case "/sobre":
        window.scrollTo(0, 0);
        currentComponent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sobre__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
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
      lineNumber: 87,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MainLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      goToRoute: goToRoute,
      children: currentComponent
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1723679585",
      children: ".loader.jsx-1723679585{position:fixed;right:3.125rem;bottom:3.125rem;z-index:11111111;border:5px solid ghostwhite;border-radius:50%;border-top:5px solid orange;width:3rem;height:3rem;-webkit-animation:spin 2s linear infinite;-webkit-animation:spin-jsx-1723679585 2s linear infinite;animation:spin-jsx-1723679585 2s linear infinite;}@-webkit-keyframes spin 0%.jsx-1723679585{-webkit-transform:rotate(0deg);}@-webkit-keyframes spin 100%.jsx-1723679585{-webkit-transform:rotate(360deg);}@-webkit-keyframes spin-jsx-1723679585{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-jsx-1723679585{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEb2N1bWVudG9zXFxtZXUgc2l0ZVxccGFnZXNcXF9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZrQixBQUcwQixBQWVvQixBQUNJLEFBSVosQUFDSSxlQXBCaEIsZUFDQyxDQWFvQixFQUNJLGFBYnpCLGlCQUNhLGtCQWdCQSxNQUNJLElBaEJkLGtCQUNVLDRCQUNqQixXQUNDLFlBQzhCLDBDQUNSLDBHQUNwQyIsImZpbGUiOiJEOlxcRG9jdW1lbnRvc1xcbWV1IHNpdGVcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vZ2xvYmFsQ3NzL21haW4uY3NzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluTGF5b3V0XCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuXCI7XHJcbmltcG9ydCBDb250YXRvcyBmcm9tIFwiLi9jb250YXRvc1wiO1xyXG5pbXBvcnQgUG9ydGZvbGlvIGZyb20gXCIuL3BvcnRmb2xpb1wiO1xyXG5pbXBvcnQgU29icmUgZnJvbSBcIi4vc29icmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBwYXRoID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vU1RBVEVTXHJcbiAgY29uc3QgW2N1cnJlbnRDb21wb25lbnQsIHNldEN1cnJlbnRDb21wb25lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BhZ2VMb2FkaW5nLCBzZXRQYWdlTG9hZGluZ10gPSB1c2VTdGF0ZShcImJsb2NrXCIpO1xyXG5cclxuICAvL2ZpcnN0IGxvYWQtIG9ubHkgbG9hZCBvbmUgdGltZSAtIHdoZW4gdGhlIHVzZXIgZW50ZXIgaW4gc2l0ZVxyXG4gIC8vIHRoZSB1c2VyIGNhbiBlbnRyeSBpbiBzaXRlIHZpYSBob21lIG9yIGFueSBwYWdlLlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwiYXV0b1wiO1xyXG4gICAgd2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGdvVG9Sb3V0ZShyb3V0ZXIuYXNQYXRoKTtcclxuICAgIH07XHJcblxyXG4gICAgZ29Ub1JvdXRlKHJvdXRlci5hc1BhdGgpO1xyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGdvVG9Sb3V0ZShyZWxhdGl2ZVBhdGgpIHtcclxuICAgIGNvbnNvbGUubG9nKHJlbGF0aXZlUGF0aClcclxuXHJcbiAgICBzZXRQYWdlTG9hZGluZyhcImJsb2NrXCIpO1xyXG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnQgPSBcIlwiO1xyXG5cclxuICAgIHN3aXRjaCAocmVsYXRpdmVQYXRoKSB7XHJcbiAgICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGN1cnJlbnRDb21wb25lbnQgPSAoXHJcbiAgICAgICAgICA8SG9tZSAgLz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKHJlbGF0aXZlUGF0aCwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XHJcbiAgICAgICAgc2V0Q3VycmVudENvbXBvbmVudChjdXJyZW50Q29tcG9uZW50KTtcclxuICAgICAgICBzZXRQYWdlTG9hZGluZyhcIm5vbmVcIik7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiL2NvbnRhdG9zXCI6XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGN1cnJlbnRDb21wb25lbnQgPSAoXHJcbiAgICAgICAgICA8Q29udGF0b3MvPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UocmVsYXRpdmVQYXRoLCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KTtcclxuICAgICAgICBzZXRDdXJyZW50Q29tcG9uZW50KGN1cnJlbnRDb21wb25lbnQpO1xyXG4gICAgICAgIHNldFBhZ2VMb2FkaW5nKFwibm9uZVwiKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiL3BvcnRmb2xpb1wiOlxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICBjdXJyZW50Q29tcG9uZW50ID0gKFxyXG4gICAgICAgICAgPFBvcnRmb2xpby8+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByb3V0ZXIucmVwbGFjZShyZWxhdGl2ZVBhdGgsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiB0cnVlIH0pO1xyXG4gICAgICAgIHNldEN1cnJlbnRDb21wb25lbnQoY3VycmVudENvbXBvbmVudCk7XHJcbiAgICAgICAgc2V0UGFnZUxvYWRpbmcoXCJub25lXCIpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCIvc29icmVcIjpcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgY3VycmVudENvbXBvbmVudCA9IChcclxuICAgICAgICAgIDxTb2JyZS8+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByb3V0ZXIucmVwbGFjZShyZWxhdGl2ZVBhdGgsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiB0cnVlIH0pO1xyXG4gICAgICAgIHNldEN1cnJlbnRDb21wb25lbnQoY3VycmVudENvbXBvbmVudCk7XHJcbiAgICAgICAgc2V0UGFnZUxvYWRpbmcoXCJub25lXCIpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiIHN0eWxlPXt7IGRpc3BsYXk6IHBhZ2VMb2FkaW5nIH19PjwvZGl2PlxyXG4gICAgICAgIDxNYWluTGF5b3V0IGdvVG9Sb3V0ZT17Z29Ub1JvdXRlfT5cclxuICAgICAgICAgIHtjdXJyZW50Q29tcG9uZW50fVxyXG4gICAgICAgIDwvTWFpbkxheW91dD5cclxuICAgICAgXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmxvYWRlciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICByaWdodDogMy4xMjVyZW07XHJcbiAgICAgICAgICBib3R0b206IDMuMTI1cmVtO1xyXG4gICAgICAgIHotaW5kZXg6IDExMTExMTExO1xyXG4gICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgZ2hvc3R3aGl0ZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCBvcmFuZ2U7XHJcbiAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgLyogU2FmYXJpICovXHJcbiAgICAgICAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKiBTYWZhcmkgKi9cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAgICAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgICAgICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgICAgICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Documentos\\\\meu site\\\\pages\\\\_app.js */"
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

/***/ }),

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Portfolio; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\Documentos\\meu site\\pages\\portfolio.js";


function Portfolio() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        className: "jsx-966452198",
        children: "Portf\xF3lio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-966452198" + " " + "title_header flex_row_center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "jsx-966452198" + " " + "highlight",
        children: "Trabalhos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), "\xA0recentes"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-966452198" + " " + "job",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-966452198" + " " + "job_img",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "sobre.jpg",
          style: {
            width: "100%"
          },
          className: "jsx-966452198"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-966452198" + " " + "job_text",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            display: "block",
            fontSize: "2rem",
            opacity: "1",
            marginBottom: "0.625rem"
          },
          className: "jsx-966452198",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "jsx-966452198" + " " + "highlight",
            children: "Trabalho One"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            opacity: "0.8",
            fontSize: "1rem",
            fontWeight: "200"
          },
          className: "jsx-966452198",
          children: "Porro omnis adipisci eius quam possimus voluptates. Maiores minus praesentium est. Totam sit voluptatem facilis reprehenderit consectetur modi. Totam ducimus blanditiis accusantium ut. Occaecati libero et sed aut quia."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        width: "100%",
        height: "25rem",
        display: "flex",
        flexDirection: "row",
        marginBottom: "15rem"
      },
      className: "jsx-966452198",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: "50%",
          marginLeft: "2.5rem"
        },
        className: "jsx-966452198",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "./sobre.jpg",
          style: {
            height: "25rem",
            width: "100%"
          },
          className: "jsx-966452198"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          textAlign: "left",
          padding: "2rem",
          width: "50%",
          height: "22rem",
          fontFamily: "Poppins",
          color: "white",
          backgroundColor: "black",
          marginLeft: "-2.5rem",
          marginTop: "7.5rem",
          boxSizing: "border-box"
        },
        className: "jsx-966452198",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            display: "block",
            fontSize: "2rem",
            opacity: "1",
            marginBottom: "0.625rem"
          },
          className: "jsx-966452198",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "jsx-966452198" + " " + "highlight",
            children: "Trabalho One"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            opacity: "0.8",
            fontSize: "1rem",
            fontWeight: "200"
          },
          className: "jsx-966452198",
          children: "Porro omnis adipisci eius quam possimus voluptates. Maiores minus praesentium est. Totam sit voluptatem facilis reprehenderit consectetur modi. Totam ducimus blanditiis accusantium ut. Occaecati libero et sed aut quia."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "966452198",
      children: ".title_header.jsx-966452198{margin:0;padding:0;color:white;font-family:Raleway;font-size:3rem;width:100%;padding:5rem 0 10rem 0;}.job.jsx-966452198{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:15rem;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.job_img.jsx-966452198{width:100%;}.job_text.jsx-966452198{text-align:justify;width:100%;font-family:Poppins;color:white;background-color:black;box-sizing:border-box;padding:0;margin:0;}@media only screen and (min-width:768px){.job.jsx-966452198{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.job_text.jsx-966452198{text-align:left;padding:2rem;width:50%;font-family:Poppins;color:white;background-color:black;margin-left:-2.5rem;margin-top:7.5rem;box-sizing:border-box;}.job_text.jsx-966452198 h1.jsx-966452198{font-size:2.2rem;}.job_img.jsx-966452198{width:50%;margin-left:2.5rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEb2N1bWVudG9zXFxtZXUgc2l0ZVxccGFnZXNcXHBvcnRmb2xpby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRmtCLEFBR29CLEFBVUUsQUFRQSxBQUlRLEFBYUEsQUFHRCxBQVdDLEFBR1AsU0FuREYsQ0FvRFcsQ0ExQ1IsQUFRZixLQW9CaUIsQ0FXZixFQWhEWSxBQXFCRCxVQWlCQyxBQWNaLENBOUJvQixDQXJCQSxRQXNDRSxXQWhCVixDQXJCRyxRQXNDRCxHQWhCUyxDQVV2QixHQS9CVyxLQXNDYyxNQXJDRixRQU1KLEFBZUcsU0FpQkEsTUFyQ3hCLE9BcUJZLE9BaUJVLEdBaEJYLFNBQ1gsTUFnQjBCLHNCQWpDSixBQWtDcEIsb0JBakNlLHlEQUNqQiIsImZpbGUiOiJEOlxcRG9jdW1lbnRvc1xcbWV1IHNpdGVcXHBhZ2VzXFxwb3J0Zm9saW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRmb2xpbygpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qb3J0ZsOzbGlvPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZV9oZWFkZXIgZmxleF9yb3dfY2VudGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPlRyYWJhbGhvczwvc3Bhbj4mbmJzcDtyZWNlbnRlc1xuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iX2ltZ1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwic29icmUuanBnXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiam9iX3RleHRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMnJlbVwiLFxuICAgICAgICAgICAgICBvcGFjaXR5OiBcIjFcIixcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjAuNjI1cmVtXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPlRyYWJhbGhvIE9uZTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8cCBzdHlsZT17eyBvcGFjaXR5OiBcIjAuOFwiLCBmb250U2l6ZTogXCIxcmVtXCIsIGZvbnRXZWlnaHQ6IFwiMjAwXCIgfX0+XG4gICAgICAgICAgICBQb3JybyBvbW5pcyBhZGlwaXNjaSBlaXVzIHF1YW0gcG9zc2ltdXMgdm9sdXB0YXRlcy4gTWFpb3JlcyBtaW51c1xuICAgICAgICAgICAgcHJhZXNlbnRpdW0gZXN0LiBUb3RhbSBzaXQgdm9sdXB0YXRlbSBmYWNpbGlzIHJlcHJlaGVuZGVyaXRcbiAgICAgICAgICAgIGNvbnNlY3RldHVyIG1vZGkuIFRvdGFtIGR1Y2ltdXMgYmxhbmRpdGlpcyBhY2N1c2FudGl1bSB1dC4gT2NjYWVjYXRpXG4gICAgICAgICAgICBsaWJlcm8gZXQgc2VkIGF1dCBxdWlhLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMjVyZW1cIixcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNXJlbVwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIyLjVyZW1cIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL3NvYnJlLmpwZ1wiIHN0eWxlPXt7IGhlaWdodDogXCIyNXJlbVwiLCB3aWR0aDogXCIxMDAlXCIgfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMnJlbVwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMjJyZW1cIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiUG9wcGluc1wiLFxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCItMi41cmVtXCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNy41cmVtXCIsXG4gICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIycmVtXCIsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IFwiMVwiLFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMC42MjVyZW1cIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+VHJhYmFsaG8gT25lPC9zcGFuPlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxwIHN0eWxlPXt7IG9wYWNpdHk6IFwiMC44XCIsIGZvbnRTaXplOiBcIjFyZW1cIiwgZm9udFdlaWdodDogXCIyMDBcIiB9fT5cbiAgICAgICAgICAgIFBvcnJvIG9tbmlzIGFkaXBpc2NpIGVpdXMgcXVhbSBwb3NzaW11cyB2b2x1cHRhdGVzLiBNYWlvcmVzIG1pbnVzXG4gICAgICAgICAgICBwcmFlc2VudGl1bSBlc3QuIFRvdGFtIHNpdCB2b2x1cHRhdGVtIGZhY2lsaXMgcmVwcmVoZW5kZXJpdFxuICAgICAgICAgICAgY29uc2VjdGV0dXIgbW9kaS4gVG90YW0gZHVjaW11cyBibGFuZGl0aWlzIGFjY3VzYW50aXVtIHV0LiBPY2NhZWNhdGlcbiAgICAgICAgICAgIGxpYmVybyBldCBzZWQgYXV0IHF1aWEuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50aXRsZV9oZWFkZXIge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LWZhbWlseTogUmFsZXdheTtcbiAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogNXJlbSAwIDEwcmVtIDA7XG4gICAgICAgIH1cblxuICAgICAgICAuam9iIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVyZW07XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmpvYl9pbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmpvYl90ZXh0IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogRm9yIGxhcHRvcCBhbmQgc21hbGwgZGVza3RvcCAqL1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgLmpvYiB7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmpvYl90ZXh0IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTIuNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDcuNXJlbTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5qb2JfdGV4dCBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmpvYl9pbWcge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=D:\\\\Documentos\\\\meu site\\\\pages\\\\portfolio.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true);
}
_c = Portfolio;

var _c;

$RefreshReg$(_c, "Portfolio");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ydGZvbGlvLmpzIl0sIm5hbWVzIjpbIkFwcCIsInBhdGgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRDb21wb25lbnQiLCJzZXRDdXJyZW50Q29tcG9uZW50IiwicGFnZUxvYWRpbmciLCJzZXRQYWdlTG9hZGluZyIsInVzZUVmZmVjdCIsIndpbmRvdyIsImhpc3RvcnkiLCJzY3JvbGxSZXN0b3JhdGlvbiIsIm9ucG9wc3RhdGUiLCJnb1RvUm91dGUiLCJhc1BhdGgiLCJyZWxhdGl2ZVBhdGgiLCJjb25zb2xlIiwibG9nIiwic2Nyb2xsVG8iLCJyZXBsYWNlIiwidW5kZWZpbmVkIiwic2hhbGxvdyIsImRpc3BsYXkiLCJQb3J0Zm9saW8iLCJ3aWR0aCIsImZvbnRTaXplIiwib3BhY2l0eSIsIm1hcmdpbkJvdHRvbSIsImZvbnRXZWlnaHQiLCJoZWlnaHQiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luTGVmdCIsInRleHRBbGlnbiIsInBhZGRpbmciLCJmb250RmFtaWx5IiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Ub3AiLCJib3hTaXppbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQzVCLE1BQU1DLElBQUksR0FBRyx1QkFBYjtBQUVBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FINEIsQ0FLNUI7O0FBTDRCLGtCQU1vQkMsc0RBQVEsQ0FBQyxFQUFELENBTjVCO0FBQUEsTUFNckJDLGdCQU5xQjtBQUFBLE1BTUhDLG1CQU5HOztBQUFBLG1CQU9VRixzREFBUSxDQUFDLE9BQUQsQ0FQbEI7QUFBQSxNQU9yQkcsV0FQcUI7QUFB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBcUpEO0tBdEp1QkwsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjgzOWMyYzA4OWNjYmEzZTFiZWI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9nbG9iYWxDc3MvbWFpbi5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL01haW5MYXlvdXRcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi5cIjtcclxuaW1wb3J0IENvbnRhdG9zIGZyb20gXCIuL2NvbnRhdG9zXCI7XHJcbmltcG9ydCBQb3J0Zm9saW8gZnJvbSBcIi4vcG9ydGZvbGlvXCI7XHJcbmltcG9ydCBTb2JyZSBmcm9tIFwiLi9zb2JyZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IHBhdGggPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy9TVEFURVNcclxuICBjb25zdCBbY3VycmVudENvbXBvbmVudCwgc2V0Q3VycmVudENvbXBvbmVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFnZUxvYWRpbmcsIHNldFBhZ2VMb2FkaW5nXSA9IHVzZVN0YXRlKFwiYmxvY2tcIik7XHJcblxyXG4gIC8vZmlyc3QgbG9hZC0gb25seSBsb2FkIG9uZSB0aW1lIC0gd2hlbiB0aGUgdXNlciBlbnRlciBpbiBzaXRlXHJcbiAgLy8gdGhlIHVzZXIgY2FuIGVudHJ5IGluIHNpdGUgdmlhIGhvbWUgb3IgYW55IHBhZ2UuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJhdXRvXCI7XHJcbiAgICB3aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgZ29Ub1JvdXRlKHJvdXRlci5hc1BhdGgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnb1RvUm91dGUocm91dGVyLmFzUGF0aCk7XHJcblxyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gZ29Ub1JvdXRlKHJlbGF0aXZlUGF0aCkge1xyXG4gICAgY29uc29sZS5sb2cocmVsYXRpdmVQYXRoKVxyXG5cclxuICAgIHNldFBhZ2VMb2FkaW5nKFwiYmxvY2tcIik7XHJcbiAgICB2YXIgY3VycmVudENvbXBvbmVudCA9IFwiXCI7XHJcblxyXG4gICAgc3dpdGNoIChyZWxhdGl2ZVBhdGgpIHtcclxuICAgICAgY2FzZSBcIi9cIjpcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3VycmVudENvbXBvbmVudCA9IChcclxuICAgICAgICAgIDxIb21lICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UocmVsYXRpdmVQYXRoLCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KTtcclxuICAgICAgICBzZXRDdXJyZW50Q29tcG9uZW50KGN1cnJlbnRDb21wb25lbnQpO1xyXG4gICAgICAgIHNldFBhZ2VMb2FkaW5nKFwibm9uZVwiKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCIvY29udGF0b3NcIjpcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3VycmVudENvbXBvbmVudCA9IChcclxuICAgICAgICAgIDxDb250YXRvcy8+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByb3V0ZXIucmVwbGFjZShyZWxhdGl2ZVBhdGgsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiB0cnVlIH0pO1xyXG4gICAgICAgIHNldEN1cnJlbnRDb21wb25lbnQoY3VycmVudENvbXBvbmVudCk7XHJcbiAgICAgICAgc2V0UGFnZUxvYWRpbmcoXCJub25lXCIpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCIvcG9ydGZvbGlvXCI6XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgIGN1cnJlbnRDb21wb25lbnQgPSAoXHJcbiAgICAgICAgICA8UG9ydGZvbGlvLz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKHJlbGF0aXZlUGF0aCwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XHJcbiAgICAgICAgc2V0Q3VycmVudENvbXBvbmVudChjdXJyZW50Q29tcG9uZW50KTtcclxuICAgICAgICBzZXRQYWdlTG9hZGluZyhcIm5vbmVcIik7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcIi9zb2JyZVwiOlxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICBjdXJyZW50Q29tcG9uZW50ID0gKFxyXG4gICAgICAgICAgPFNvYnJlLz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKHJlbGF0aXZlUGF0aCwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XHJcbiAgICAgICAgc2V0Q3VycmVudENvbXBvbmVudChjdXJyZW50Q29tcG9uZW50KTtcclxuICAgICAgICBzZXRQYWdlTG9hZGluZyhcIm5vbmVcIik7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCIgc3R5bGU9e3sgZGlzcGxheTogcGFnZUxvYWRpbmcgfX0+PC9kaXY+XHJcbiAgICAgICAgPE1haW5MYXlvdXQgZ29Ub1JvdXRlPXtnb1RvUm91dGV9PlxyXG4gICAgICAgICAge2N1cnJlbnRDb21wb25lbnR9XHJcbiAgICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgICBcclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubG9hZGVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHJpZ2h0OiAzLjEyNXJlbTtcclxuICAgICAgICAgIGJvdHRvbTogMy4xMjVyZW07XHJcbiAgICAgICAgei1pbmRleDogMTExMTExMTE7XHJcbiAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBnaG9zdHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIG9yYW5nZTtcclxuICAgICAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAvKiBTYWZhcmkgKi9cclxuICAgICAgICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIFNhZmFyaSAqL1xyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAgICAgICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW8oKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UG9ydGbDs2xpbzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVfaGVhZGVyIGZsZXhfcm93X2NlbnRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5UcmFiYWxob3M8L3NwYW4+Jm5ic3A7cmVjZW50ZXNcbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvYlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvYl9pbWdcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cInNvYnJlLmpwZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImpvYl90ZXh0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjJyZW1cIixcbiAgICAgICAgICAgICAgb3BhY2l0eTogXCIxXCIsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIwLjYyNXJlbVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5UcmFiYWxobyBPbmU8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHAgc3R5bGU9e3sgb3BhY2l0eTogXCIwLjhcIiwgZm9udFNpemU6IFwiMXJlbVwiLCBmb250V2VpZ2h0OiBcIjIwMFwiIH19PlxuICAgICAgICAgICAgUG9ycm8gb21uaXMgYWRpcGlzY2kgZWl1cyBxdWFtIHBvc3NpbXVzIHZvbHVwdGF0ZXMuIE1haW9yZXMgbWludXNcbiAgICAgICAgICAgIHByYWVzZW50aXVtIGVzdC4gVG90YW0gc2l0IHZvbHVwdGF0ZW0gZmFjaWxpcyByZXByZWhlbmRlcml0XG4gICAgICAgICAgICBjb25zZWN0ZXR1ciBtb2RpLiBUb3RhbSBkdWNpbXVzIGJsYW5kaXRpaXMgYWNjdXNhbnRpdW0gdXQuIE9jY2FlY2F0aVxuICAgICAgICAgICAgbGliZXJvIGV0IHNlZCBhdXQgcXVpYS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjI1cmVtXCIsXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTVyZW1cIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogXCI1MCVcIixcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMi41cmVtXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9zb2JyZS5qcGdcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMjVyZW1cIiwgd2lkdGg6IFwiMTAwJVwiIH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjJyZW1cIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjIycmVtXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIlBvcHBpbnNcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiLTIuNXJlbVwiLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjcuNXJlbVwiLFxuICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMnJlbVwiLFxuICAgICAgICAgICAgICBvcGFjaXR5OiBcIjFcIixcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjAuNjI1cmVtXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPlRyYWJhbGhvIE9uZTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8cCBzdHlsZT17eyBvcGFjaXR5OiBcIjAuOFwiLCBmb250U2l6ZTogXCIxcmVtXCIsIGZvbnRXZWlnaHQ6IFwiMjAwXCIgfX0+XG4gICAgICAgICAgICBQb3JybyBvbW5pcyBhZGlwaXNjaSBlaXVzIHF1YW0gcG9zc2ltdXMgdm9sdXB0YXRlcy4gTWFpb3JlcyBtaW51c1xuICAgICAgICAgICAgcHJhZXNlbnRpdW0gZXN0LiBUb3RhbSBzaXQgdm9sdXB0YXRlbSBmYWNpbGlzIHJlcHJlaGVuZGVyaXRcbiAgICAgICAgICAgIGNvbnNlY3RldHVyIG1vZGkuIFRvdGFtIGR1Y2ltdXMgYmxhbmRpdGlpcyBhY2N1c2FudGl1bSB1dC4gT2NjYWVjYXRpXG4gICAgICAgICAgICBsaWJlcm8gZXQgc2VkIGF1dCBxdWlhLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGl0bGVfaGVhZGVyIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDVyZW0gMCAxMHJlbSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmpvYiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cmVtO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5qb2JfaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5qb2JfdGV4dCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEZvciBsYXB0b3AgYW5kIHNtYWxsIGRlc2t0b3AgKi9cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC5qb2Ige1xuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5qb2JfdGV4dCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yLjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3LjVyZW07XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuam9iX3RleHQgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5qb2JfaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==