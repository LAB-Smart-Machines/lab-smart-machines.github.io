webpackHotUpdate_N_E("pages/proyecto",{

/***/ "./components/GraphQLProveedor.jsx":
/*!*****************************************!*\
  !*** ./components/GraphQLProveedor.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-react */ "./node_modules/graphql-react/universal/index.mjs");
var _this = undefined,
    _jsxFileName = "C:\\Users\\vanea\\Desktop\\Projects\\SMARTMACHINES\\lab-smart-machines.github.io\\components\\GraphQLProveedor.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




var GraphQLData = function GraphQLData(_ref) {
  _s();

  var queryString = _ref.queryString,
      repoString = _ref.repoString;

  // El hook useGraphQL se puede usar de la misma manera para consultas o mutaciones.
  var _useGraphQL = Object(graphql_react__WEBPACK_IMPORTED_MODULE_2__["useGraphQL"])({
    // Cualquier API GraphQL puede consultarse en componentes, donde las opciones de fetch para el URL,
    // autenticación, etc. son especificados. Las opciones de recuperación predeterminadas recibidas
    // por la función de anulación se adaptan a la operación; típicamente
    // el cuerpo es JSON.
    fetchOptionsOverride: function fetchOptionsOverride(options) {
      options.url = "https://api.github.com/graphql";
      options.headers["Authorization"] = "Bearer ".concat("30bdbef5fbe2ea222fed46ea8465a327c6857b8c"); // options.headers[
      //   "Authorization"
      // ] = `Bearer 598a5c7c68ca78b460ac901147f26466f68da27a`;
    },
    // La operación típicamente contiene `query` y algunas veces` variables`, pero
    // se pueden usar propiedades adicionales; todos están codificados en JSON y se envían al
    // servidor GraphQL en el cuerpo de solicitud de búsqueda.
    operation: {
      query: "{\n          repository(owner: \"" + queryString + "\", name:  \"" + repoString + "\") {\n            id\n            url\n\n            object(expression: \"master:README.md\") {\n              ... on Blob {\n                text\n              }\n            }\n          }\n        }\n      "
    },
    // Cargue la consulta cada vez que se monte el componente. Esto es deseable para mostrar contenido,
    // pero no para situaciones bajo demanda como paginación ver
    // más botones o formularios que envían mutaciones.
    loadOnMount: true,
    // Vuelva a cargar la consulta cada vez que se indique una recarga de cache.
    loadOnReload: true,
    // Vuelva a cargar la consulta cada vez que se restablezca la memoria caché global.
    // Restablece de inmediato elimina el caché y se usa principalmente cuando se
    // cierra la sesión del usuario.
    loadOnReset: true
  }),
      loading = _useGraphQL.loading,
      _useGraphQL$cacheValu = _useGraphQL.cacheValue,
      cacheValue = _useGraphQL$cacheValu === void 0 ? {} : _useGraphQL$cacheValu;

  return cacheValue.data ? __jsx(ReadMe, {
    data: cacheValue.data.repository,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }) : loading ? // Los datos a menudo se vuelven a cargar, por lo que no asuma que la carga indica que no hay datos.
  "Cargando…" : // La información detallada del error está disponible en las propiedades `cacheValue`
  // `fetchError`,` httpError`, `parseError` y` graphQLErrors`. Una combinación
  // de errores es posible, y un error no significa necesariamente que los datos sean
  // no disponible.
  __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, "Error");
};

_s(GraphQLData, "zniwRgafXE9AuJuzoBtrEILQxJw=", false, function () {
  return [graphql_react__WEBPACK_IMPORTED_MODULE_2__["useGraphQL"]];
});

_c = GraphQLData;
/* harmony default export */ __webpack_exports__["default"] = (GraphQLData);

var ReadMe = function ReadMe(_ref2) {
  var data = _ref2.data;
  return data ? __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    source: data.object.text,
    className: "readme",
    linkTarget: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  })) : "No hay nada aqui...";
};

_c2 = ReadMe;

var _c, _c2;

$RefreshReg$(_c, "GraphQLData");
$RefreshReg$(_c2, "ReadMe");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmFwaFFMUHJvdmVlZG9yLmpzeCJdLCJuYW1lcyI6WyJHcmFwaFFMRGF0YSIsInF1ZXJ5U3RyaW5nIiwicmVwb1N0cmluZyIsInVzZUdyYXBoUUwiLCJmZXRjaE9wdGlvbnNPdmVycmlkZSIsIm9wdGlvbnMiLCJ1cmwiLCJoZWFkZXJzIiwicHJvY2VzcyIsIm9wZXJhdGlvbiIsInF1ZXJ5IiwibG9hZE9uTW91bnQiLCJsb2FkT25SZWxvYWQiLCJsb2FkT25SZXNldCIsImxvYWRpbmciLCJjYWNoZVZhbHVlIiwiZGF0YSIsInJlcG9zaXRvcnkiLCJSZWFkTWUiLCJvYmplY3QiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBaUM7QUFBQTs7QUFBQSxNQUE5QkMsV0FBOEIsUUFBOUJBLFdBQThCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFDbkQ7QUFEbUQsb0JBRWRDLGdFQUFVLENBQUM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFFQUMsd0JBTjhDLGdDQU16QkMsT0FOeUIsRUFNaEI7QUFDNUJBLGFBQU8sQ0FBQ0MsR0FBUixHQUFjLGdDQUFkO0FBQ0FELGFBQU8sQ0FBQ0UsT0FBUixDQUNFLGVBREYscUJBRWNDLDBDQUZkLEVBRjRCLENBSzVCO0FBQ0E7QUFDQTtBQUNELEtBZDZDO0FBZTlDO0FBQ0E7QUFDQTtBQUNBQyxhQUFTLEVBQUU7QUFDVEMsV0FBSyxFQUNILHNDQUVBVCxXQUZBLHFCQUlBQyxVQUpBO0FBRk8sS0FsQm1DO0FBdUM5QztBQUNBO0FBQ0E7QUFDQVMsZUFBVyxFQUFFLElBMUNpQztBQTRDOUM7QUFDQUMsZ0JBQVksRUFBRSxJQTdDZ0M7QUErQzlDO0FBQ0E7QUFDQTtBQUNBQyxlQUFXLEVBQUU7QUFsRGlDLEdBQUQsQ0FGSTtBQUFBLE1BRTNDQyxPQUYyQyxlQUUzQ0EsT0FGMkM7QUFBQSwwQ0FFbENDLFVBRmtDO0FBQUEsTUFFbENBLFVBRmtDLHNDQUVyQixFQUZxQjs7QUFzRG5ELFNBQU9BLFVBQVUsQ0FBQ0MsSUFBWCxHQUNMLE1BQUMsTUFBRDtBQUFRLFFBQUksRUFBRUQsVUFBVSxDQUFDQyxJQUFYLENBQWdCQyxVQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREssR0FFSEgsT0FBTyxHQUNUO0FBQ0EsYUFGUyxHQUlUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFZRCxDQWxFRDs7R0FBTWQsVztVQUVpQ0csd0Q7OztLQUZqQ0gsVztBQW9FU0EsMEVBQWY7O0FBRUEsSUFBTWtCLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0YsSUFBSCxTQUFHQSxJQUFIO0FBQUEsU0FDYkEsSUFBSSxHQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQ0UsVUFBTSxFQUFFQSxJQUFJLENBQUNHLE1BQUwsQ0FBWUMsSUFEdEI7QUFFRSxhQUFTLEVBQUMsUUFGWjtBQUdFLGNBQVUsRUFBQyxRQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURFLEdBU0YscUJBVlc7QUFBQSxDQUFmOztNQUFNRixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb3llY3RvLmE4NmQzYWViMTVjZWUzZDBlOGZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuXG5pbXBvcnQgeyB1c2VHcmFwaFFMIH0gZnJvbSBcImdyYXBocWwtcmVhY3RcIjtcblxuY29uc3QgR3JhcGhRTERhdGEgPSAoeyBxdWVyeVN0cmluZywgcmVwb1N0cmluZyB9KSA9PiB7XG4gIC8vIEVsIGhvb2sgdXNlR3JhcGhRTCBzZSBwdWVkZSB1c2FyIGRlIGxhIG1pc21hIG1hbmVyYSBwYXJhIGNvbnN1bHRhcyBvIG11dGFjaW9uZXMuXG4gIGNvbnN0IHsgbG9hZGluZywgY2FjaGVWYWx1ZSA9IHt9IH0gPSB1c2VHcmFwaFFMKHtcbiAgICAvLyBDdWFscXVpZXIgQVBJIEdyYXBoUUwgcHVlZGUgY29uc3VsdGFyc2UgZW4gY29tcG9uZW50ZXMsIGRvbmRlIGxhcyBvcGNpb25lcyBkZSBmZXRjaCBwYXJhIGVsIFVSTCxcbiAgICAvLyBhdXRlbnRpY2FjacOzbiwgZXRjLiBzb24gZXNwZWNpZmljYWRvcy4gTGFzIG9wY2lvbmVzIGRlIHJlY3VwZXJhY2nDs24gcHJlZGV0ZXJtaW5hZGFzIHJlY2liaWRhc1xuICAgIC8vIHBvciBsYSBmdW5jacOzbiBkZSBhbnVsYWNpw7NuIHNlIGFkYXB0YW4gYSBsYSBvcGVyYWNpw7NuOyB0w61waWNhbWVudGVcbiAgICAvLyBlbCBjdWVycG8gZXMgSlNPTi5cblxuICAgIGZldGNoT3B0aW9uc092ZXJyaWRlKG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMudXJsID0gXCJodHRwczovL2FwaS5naXRodWIuY29tL2dyYXBocWxcIjtcbiAgICAgIG9wdGlvbnMuaGVhZGVyc1tcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCJcbiAgICAgIF0gPSBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0lUSFVCX1RPS0VOfWA7XG4gICAgICAvLyBvcHRpb25zLmhlYWRlcnNbXG4gICAgICAvLyAgIFwiQXV0aG9yaXphdGlvblwiXG4gICAgICAvLyBdID0gYEJlYXJlciA1OThhNWM3YzY4Y2E3OGI0NjBhYzkwMTE0N2YyNjQ2NmY2OGRhMjdhYDtcbiAgICB9LFxuICAgIC8vIExhIG9wZXJhY2nDs24gdMOtcGljYW1lbnRlIGNvbnRpZW5lIGBxdWVyeWAgeSBhbGd1bmFzIHZlY2VzYCB2YXJpYWJsZXNgLCBwZXJvXG4gICAgLy8gc2UgcHVlZGVuIHVzYXIgcHJvcGllZGFkZXMgYWRpY2lvbmFsZXM7IHRvZG9zIGVzdMOhbiBjb2RpZmljYWRvcyBlbiBKU09OIHkgc2UgZW52w61hbiBhbFxuICAgIC8vIHNlcnZpZG9yIEdyYXBoUUwgZW4gZWwgY3VlcnBvIGRlIHNvbGljaXR1ZCBkZSBiw7pzcXVlZGEuXG4gICAgb3BlcmF0aW9uOiB7XG4gICAgICBxdWVyeTpcbiAgICAgICAgYHtcbiAgICAgICAgICByZXBvc2l0b3J5KG93bmVyOiBcXFwiYCArXG4gICAgICAgIHF1ZXJ5U3RyaW5nICtcbiAgICAgICAgYFxcXCIsIG5hbWU6ICBcXFwiYCArXG4gICAgICAgIHJlcG9TdHJpbmcgK1xuICAgICAgICBgXFxcIikge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHVybFxuXG4gICAgICAgICAgICBvYmplY3QoZXhwcmVzc2lvbjogXCJtYXN0ZXI6UkVBRE1FLm1kXCIpIHtcbiAgICAgICAgICAgICAgLi4uIG9uIEJsb2Ige1xuICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICB9LFxuXG4gICAgLy8gQ2FyZ3VlIGxhIGNvbnN1bHRhIGNhZGEgdmV6IHF1ZSBzZSBtb250ZSBlbCBjb21wb25lbnRlLiBFc3RvIGVzIGRlc2VhYmxlIHBhcmEgbW9zdHJhciBjb250ZW5pZG8sXG4gICAgLy8gcGVybyBubyBwYXJhIHNpdHVhY2lvbmVzIGJham8gZGVtYW5kYSBjb21vIHBhZ2luYWNpw7NuIHZlclxuICAgIC8vIG3DoXMgYm90b25lcyBvIGZvcm11bGFyaW9zIHF1ZSBlbnbDrWFuIG11dGFjaW9uZXMuXG4gICAgbG9hZE9uTW91bnQ6IHRydWUsXG5cbiAgICAvLyBWdWVsdmEgYSBjYXJnYXIgbGEgY29uc3VsdGEgY2FkYSB2ZXogcXVlIHNlIGluZGlxdWUgdW5hIHJlY2FyZ2EgZGUgY2FjaGUuXG4gICAgbG9hZE9uUmVsb2FkOiB0cnVlLFxuXG4gICAgLy8gVnVlbHZhIGEgY2FyZ2FyIGxhIGNvbnN1bHRhIGNhZGEgdmV6IHF1ZSBzZSByZXN0YWJsZXpjYSBsYSBtZW1vcmlhIGNhY2jDqSBnbG9iYWwuXG4gICAgLy8gUmVzdGFibGVjZSBkZSBpbm1lZGlhdG8gZWxpbWluYSBlbCBjYWNow6kgeSBzZSB1c2EgcHJpbmNpcGFsbWVudGUgY3VhbmRvIHNlXG4gICAgLy8gY2llcnJhIGxhIHNlc2nDs24gZGVsIHVzdWFyaW8uXG4gICAgbG9hZE9uUmVzZXQ6IHRydWUsXG4gIH0pO1xuICByZXR1cm4gY2FjaGVWYWx1ZS5kYXRhID8gKFxuICAgIDxSZWFkTWUgZGF0YT17Y2FjaGVWYWx1ZS5kYXRhLnJlcG9zaXRvcnl9IC8+XG4gICkgOiBsb2FkaW5nID8gKFxuICAgIC8vIExvcyBkYXRvcyBhIG1lbnVkbyBzZSB2dWVsdmVuIGEgY2FyZ2FyLCBwb3IgbG8gcXVlIG5vIGFzdW1hIHF1ZSBsYSBjYXJnYSBpbmRpY2EgcXVlIG5vIGhheSBkYXRvcy5cbiAgICBcIkNhcmdhbmRv4oCmXCJcbiAgKSA6IChcbiAgICAvLyBMYSBpbmZvcm1hY2nDs24gZGV0YWxsYWRhIGRlbCBlcnJvciBlc3TDoSBkaXNwb25pYmxlIGVuIGxhcyBwcm9waWVkYWRlcyBgY2FjaGVWYWx1ZWBcbiAgICAvLyBgZmV0Y2hFcnJvcmAsYCBodHRwRXJyb3JgLCBgcGFyc2VFcnJvcmAgeWAgZ3JhcGhRTEVycm9yc2AuIFVuYSBjb21iaW5hY2nDs25cbiAgICAvLyBkZSBlcnJvcmVzIGVzIHBvc2libGUsIHkgdW4gZXJyb3Igbm8gc2lnbmlmaWNhIG5lY2VzYXJpYW1lbnRlIHF1ZSBsb3MgZGF0b3Mgc2VhblxuICAgIC8vIG5vIGRpc3BvbmlibGUuXG4gICAgPFJlYWN0LkZyYWdtZW50PkVycm9yPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoUUxEYXRhO1xuXG5jb25zdCBSZWFkTWUgPSAoeyBkYXRhIH0pID0+XG4gIGRhdGEgPyAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICBzb3VyY2U9e2RhdGEub2JqZWN0LnRleHR9XG4gICAgICAgIGNsYXNzTmFtZT1cInJlYWRtZVwiXG4gICAgICAgIGxpbmtUYXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgLz5cbiAgICA8L3NlY3Rpb24+XG4gICkgOiAoXG4gICAgXCJObyBoYXkgbmFkYSBhcXVpLi4uXCJcbiAgKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=