webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/App.jsx */ "./components/App.jsx");
/* harmony import */ var _components_Seccion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Seccion */ "./components/Seccion.jsx");
/* harmony import */ var _components_Columna__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Columna */ "./components/Columna.jsx");
/* harmony import */ var _PROYECTOS_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PROYECTOS.json */ "./PROYECTOS.json");
var _PROYECTOS_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../PROYECTOS.json */ "./PROYECTOS.json", 1);
/* harmony import */ var _CONTENIDO_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CONTENIDO.json */ "./CONTENIDO.json");
var _CONTENIDO_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../CONTENIDO.json */ "./CONTENIDO.json", 1);
var _this = undefined,
    _jsxFileName = "C:\\Users\\vanea\\Desktop\\Projects\\SMARTMACHINES\\lab-smart-machines.github.io\\pages\\index.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var aDiferenteFilas = function aDiferenteFilas(data) {
  var tables = [];
  var fila = [];
  data.proyecto.forEach(function (row, i) {
    fila.push(row);

    if ((i + 1) % 3 === 0) {
      // nueva fila
      tables.push(nuevaFila(fila, i));
      fila = [];
    }
  });
  fila.length && tables.push(nuevaFila(fila));
  return tables;
}; //TODO: <!-- github es requerido? -->


var nuevaFila = function nuevaFila(data, x) {
  return __jsx("div", {
    className: "w-row",
    key: x,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, data.map(function (proyecto, i) {
    return __jsx(_components_Columna__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: i,
      titulo: proyecto.titulo,
      subtitulo: proyecto.subtitulo,
      img: proyecto.img ? __webpack_require__("./public/static/images sync recursive ^\\.\\/.*$")("./" + proyecto.img) : __webpack_require__(/*! ../public/static/images/undraw_scrum_board_cesn.svg */ "./public/static/images/undraw_scrum_board_cesn.svg"),
      github: proyecto.github,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    });
  }));
};

function Home() {
  return __jsx(_components_App_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(_components_Seccion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    claseSeccion: "header",
    claseHeading: "main-heading",
    claseSub: "main-subtitle",
    titulo: _CONTENIDO_json__WEBPACK_IMPORTED_MODULE_6__.titulo_principal,
    subTexto: _CONTENIDO_json__WEBPACK_IMPORTED_MODULE_6__.subtexto_principal.join(" "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx(_components_Seccion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    claseSeccion: "section",
    claseHeading: "heading",
    claseSub: "text-block",
    titulo: _CONTENIDO_json__WEBPACK_IMPORTED_MODULE_6__.titulo_primera_seccion,
    subTexto: _CONTENIDO_json__WEBPACK_IMPORTED_MODULE_6__.subtexto_primera_seccion.join(" "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), __jsx(_components_Seccion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    claseSeccion: "about-section",
    claseHeading: "heading-2",
    claseSub: "about-text",
    titulo: _CONTENIDO_json__WEBPACK_IMPORTED_MODULE_6__.titulo_segunda_seccion,
    subTexto: __jsx("div", {
      dangerouslySetInnerHTML: {
        __html: _CONTENIDO_json__WEBPACK_IMPORTED_MODULE_6__.subtexto_segunda_seccion.join(" ")
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    }),
    botonHref: "#contact",
    botonTexto: "Contacto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "proyectos",
    className: "section grey",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "heading-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, "Proyectos"), __jsx("div", {
    className: "divider grey",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }), aDiferenteFilas(_PROYECTOS_json__WEBPACK_IMPORTED_MODULE_5__))));
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbImFEaWZlcmVudGVGaWxhcyIsImRhdGEiLCJ0YWJsZXMiLCJmaWxhIiwicHJveWVjdG8iLCJmb3JFYWNoIiwicm93IiwiaSIsInB1c2giLCJudWV2YUZpbGEiLCJsZW5ndGgiLCJ4IiwibWFwIiwidGl0dWxvIiwic3VidGl0dWxvIiwiaW1nIiwicmVxdWlyZSIsImdpdGh1YiIsIkhvbWUiLCJDT05URU5JRE8iLCJ0aXR1bG9fcHJpbmNpcGFsIiwic3VidGV4dG9fcHJpbmNpcGFsIiwiam9pbiIsInRpdHVsb19wcmltZXJhX3NlY2Npb24iLCJzdWJ0ZXh0b19wcmltZXJhX3NlY2Npb24iLCJ0aXR1bG9fc2VndW5kYV9zZWNjaW9uIiwiX19odG1sIiwic3VidGV4dG9fc2VndW5kYV9zZWNjaW9uIiwiUFJPWUVDVE9TIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2hDLE1BQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLEVBQVg7QUFFQUYsTUFBSSxDQUFDRyxRQUFMLENBQWNDLE9BQWQsQ0FBc0IsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDaENKLFFBQUksQ0FBQ0ssSUFBTCxDQUFVRixHQUFWOztBQUNBLFFBQUksQ0FBQ0MsQ0FBQyxHQUFHLENBQUwsSUFBVSxDQUFWLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCO0FBQ0FMLFlBQU0sQ0FBQ00sSUFBUCxDQUFZQyxTQUFTLENBQUNOLElBQUQsRUFBT0ksQ0FBUCxDQUFyQjtBQUNBSixVQUFJLEdBQUcsRUFBUDtBQUNEO0FBQ0YsR0FQRDtBQVFBQSxNQUFJLENBQUNPLE1BQUwsSUFBZVIsTUFBTSxDQUFDTSxJQUFQLENB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aWMvd2VicGFjay9wYWdlcy9pbmRleC45MDQ3ZWJiZjM1M2E5MmYzN2FjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHAuanN4XCI7XG5pbXBvcnQgU2VjY2lvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWNjaW9uXCI7XG5pbXBvcnQgQ29sdW1uYSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db2x1bW5hXCI7XG5pbXBvcnQgUFJPWUVDVE9TIGZyb20gXCIuLi9QUk9ZRUNUT1MuanNvblwiO1xuaW1wb3J0IENPTlRFTklETyBmcm9tIFwiLi4vQ09OVEVOSURPLmpzb25cIjtcblxuY29uc3QgYURpZmVyZW50ZUZpbGFzID0gKGRhdGEpID0+IHtcbiAgbGV0IHRhYmxlcyA9IFtdO1xuICBsZXQgZmlsYSA9IFtdO1xuXG4gIGRhdGEucHJveWVjdG8uZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgZmlsYS5wdXNoKHJvdyk7XG4gICAgaWYgKChpICsgMSkgJSAzID09PSAwKSB7XG4gICAgICAvLyBudWV2YSBmaWxhXG4gICAgICB0YWJsZXMucHVzaChudWV2YUZpbGEoZmlsYSwgaSkpO1xuICAgICAgZmlsYSA9IFtdO1xuICAgIH1cbiAgfSk7XG4gIGZpbGEubGVuZ3RoICYmIHRhYmxlcy5wdXNoKG51ZXZhRmlsYShmaWxhKSk7XG4gIHJldHVybiB0YWJsZXM7XG59O1xuXG4vL1RPRE86IDwhLS0gZ2l0aHViIGVzIHJlcXVlcmlkbz8gLS0+XG5jb25zdCBudWV2YUZpbGEgPSAoZGF0YSwgeCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1yb3dcIiBrZXk9e3h9PlxuICAgICAge2RhdGEubWFwKChwcm95ZWN0bywgaSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDb2x1bW5hXG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICB0aXR1bG89e3Byb3llY3RvLnRpdHVsb31cbiAgICAgICAgICAgIHN1YnRpdHVsbz17cHJveWVjdG8uc3VidGl0dWxvfVxuICAgICAgICAgICAgaW1nPXtcbiAgICAgICAgICAgICAgcHJveWVjdG8uaW1nXG4gICAgICAgICAgICAgICAgPyByZXF1aXJlKFwiLi4vcHVibGljL3N0YXRpYy9pbWFnZXMvXCIgKyBwcm95ZWN0by5pbWcpXG4gICAgICAgICAgICAgICAgOiByZXF1aXJlKFwiLi4vcHVibGljL3N0YXRpYy9pbWFnZXMvdW5kcmF3X3NjcnVtX2JvYXJkX2Nlc24uc3ZnXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnaXRodWI9e3Byb3llY3RvLmdpdGh1Yn1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxBcHA+XG4gICAgICA8U2VjY2lvblxuICAgICAgICBjbGFzZVNlY2Npb249e1wiaGVhZGVyXCJ9XG4gICAgICAgIGNsYXNlSGVhZGluZz17XCJtYWluLWhlYWRpbmdcIn1cbiAgICAgICAgY2xhc2VTdWI9e1wibWFpbi1zdWJ0aXRsZVwifVxuICAgICAgICB0aXR1bG89e0NPTlRFTklETy50aXR1bG9fcHJpbmNpcGFsfVxuICAgICAgICBzdWJUZXh0bz17Q09OVEVOSURPLnN1YnRleHRvX3ByaW5jaXBhbC5qb2luKFwiIFwiKX1cbiAgICAgIC8+XG4gICAgICA8U2VjY2lvblxuICAgICAgICBjbGFzZVNlY2Npb249e1wic2VjdGlvblwifVxuICAgICAgICBjbGFzZUhlYWRpbmc9e1wiaGVhZGluZ1wifVxuICAgICAgICBjbGFzZVN1Yj17XCJ0ZXh0LWJsb2NrXCJ9XG4gICAgICAgIHRpdHVsbz17Q09OVEVOSURPLnRpdHVsb19wcmltZXJhX3NlY2Npb259XG4gICAgICAgIHN1YlRleHRvPXtDT05URU5JRE8uc3VidGV4dG9fcHJpbWVyYV9zZWNjaW9uLmpvaW4oXCIgXCIpfVxuICAgICAgLz5cblxuICAgICAgPFNlY2Npb25cbiAgICAgICAgY2xhc2VTZWNjaW9uPXtcImFib3V0LXNlY3Rpb25cIn1cbiAgICAgICAgY2xhc2VIZWFkaW5nPXtcImhlYWRpbmctMlwifVxuICAgICAgICBjbGFzZVN1Yj17XCJhYm91dC10ZXh0XCJ9XG4gICAgICAgIHRpdHVsbz17Q09OVEVOSURPLnRpdHVsb19zZWd1bmRhX3NlY2Npb259XG4gICAgICAgIHN1YlRleHRvPXtcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IENPTlRFTklETy5zdWJ0ZXh0b19zZWd1bmRhX3NlY2Npb24uam9pbihcIiBcIiksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBib3RvbkhyZWY9e1wiI2NvbnRhY3RcIn1cbiAgICAgICAgYm90b25UZXh0bz17XCJDb250YWN0b1wifVxuICAgICAgLz5cblxuICAgICAgPGRpdiBpZD1cInByb3llY3Rvc1wiIGNsYXNzTmFtZT1cInNlY3Rpb24gZ3JleVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRpbmctM1wiPlByb3llY3RvczwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyIGdyZXlcIj48L2Rpdj5cbiAgICAgICAgICB7YURpZmVyZW50ZUZpbGFzKFBST1lFQ1RPUyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9BcHA+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9