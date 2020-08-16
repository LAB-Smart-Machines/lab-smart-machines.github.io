webpackHotUpdate_N_E("pages/index",{

/***/ "./components/DropdownMenu.jsx":
/*!*************************************!*\
  !*** ./components/DropdownMenu.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_static_images_sort_down_solid_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/static/images/sort-down-solid.svg */ "./public/static/images/sort-down-solid.svg");
/* harmony import */ var _public_static_images_sort_down_solid_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_sort_down_solid_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _PROYECTOS_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../PROYECTOS.json */ "./PROYECTOS.json");
var _PROYECTOS_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../PROYECTOS.json */ "./PROYECTOS.json", 1);







var _jsxFileName = "C:\\Users\\vanea\\Desktop\\Projects\\SMARTMACHINES\\lab-smart-machines.github.io\\components\\DropdownMenu.jsx",
    _this5 = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




 // usando data de json PROYECTOS

var Menu = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Menu, _Component);

  var _super = _createSuper(Menu);

  function Menu() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Menu);

    _this = _super.call(this);
    _this.state = {
      showMenu: false
    };
    _this.showMenu = _this.showMenu.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.closeMenu = _this.closeMenu.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Menu, [{
    key: "showMenu",
    value: function showMenu(event) {
      var _this2 = this;

      event.preventDefault();
      this.setState({
        showMenu: true
      }, function () {
        document.addEventListener("click", _this2.closeMenu);
      });
    }
  }, {
    key: "closeMenu",
    value: function closeMenu(event) {
      var _this3 = this;

      this.setState({
        showMenu: false
      }, function () {
        document.removeEventListener("click", _this3.closeMenu);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return __jsx("div", {
        className: "nav-link w-nav-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 7
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "#proyectos",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }, __jsx("a", {
        className: "button-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }
      }, "PROYECTOS")), __jsx("img", {
        className: "menu-img",
        src: _public_static_images_sort_down_solid_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "menu",
        sizes: "(max-width: 71px) 50px, 71px",
        width: "16",
        onClick: this.showMenu,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }), this.state.showMenu ? __jsx("ul", {
        className: "ul-dropdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }, _PROYECTOS_json__WEBPACK_IMPORTED_MODULE_9__.proyecto.map(function (proyecto, i) {
        return __jsx(PostLink, {
          titulo: proyecto.titulo,
          github: proyecto.github,
          key: i,
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 17
          }
        });
      })) : null);
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Menu); // https://nextjs.org/learn/basics/create-dynamic-pages/passing-data

var PostLink = function PostLink(props) {
  return __jsx("li", {
    className: "li-dropdown",
    __self: _this5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 3
    }
  }, __jsx("a", {
    href: "/proyecto?titulo=".concat(props.github.toUpperCase()),
    __self: _this5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, props.titulo));
};

_c = PostLink;

var _c;

$RefreshReg$(_c, "PostLink");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bk1lbnUuanN4Il0sIm5hbWVzIjpbIk1lbnUiLCJzdGF0ZSIsInNob3dNZW51IiwiYmluZCIsImNsb3NlTWVudSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzb3J0RG93biIsIlBST1lFQ1RPUyIsInByb3llY3RvIiwibWFwIiwiaSIsInRpdHVsbyIsImdpdGh1YiIsIkNvbXBvbmVudCIsIlBvc3RMaW5rIiwicHJvcHMiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7Q0FFQTs7SUFDTUEsSTs7Ozs7QUFDSixrQkFBYztBQUFBOztBQUFBOztBQUNaO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFBRTtBQURDLEtBQWI7QUFJQSxVQUFLQSxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCx5R0FBaEI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUQsSUFBZix5R0FBakI7QUFSWTtBQVNiOzs7OzZCQUVRRSxLLEVBQU87QUFBQTs7QUFDZEEsV0FBSyxDQUFDQyxjQUFOO0FBRUEsV0FBS0MsUUFBTCxDQUFjO0FBQUVMLGdCQUFRLEVBQUU7QUFBWixPQUFkLEVBQWtDLFlBQU07QUFDdENNLGdCQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLE1BQUksQ0FBQ0wsU0FBeEM7QUFDRCxPQUZEO0FBR0Q7Ozs4QkFFU0MsSyxFQUFPO0FBQUE7O0FBQ2YsV0FBS0UsUUFBTCxDQUFjO0FBQUVMLGdCQUFRLEVBQUU7QUFBWixPQUFkLEVBQW1DLFlBQU07QUFDdkNNLGdCQUFRLENBQUNFLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDLE1BQUksQ0FBQ04sU0FBM0M7QUFDRCxPQUZEO0FBR0Q7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsQ0FERixFQUtFO0FBQ0UsaUJBQVMsRUFBQyxVQURaO0FBRUUsV0FBRyxFQUFFTyxnRkFGUDtBQUdFLFdBQUcsRUFBQyxNQUhOO0FBSUUsYUFBSyxFQUFDLDhCQUpSO0FBS0UsYUFBSyxFQUFDLElBTFI7QUFNRSxlQUFPLEVBQUUsS0FBS1QsUUFOaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUxGLEVBYUcsS0FBS0QsS0FBTCxDQUFXQyxRQUFYLEdBQ0M7QUFBSSxpQkFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHVSw0Q0FBUyxDQUFDQyxRQUFWLENBQW1CQyxHQUFuQixDQUF1QixVQUFDRCxRQUFELEVBQVdFLENBQVgsRUFBaUI7QUFDdkMsZUFDRSxNQUFDLFFBQUQ7QUFDRSxnQkFBTSxFQUFFRixRQUFRLENBQUNHLE1BRG5CO0FBRUUsZ0JBQU0sRUFBRUgsUUFBUSxDQUFDSSxNQUZuQjtBQUdFLGFBQUcsRUFBRUYsQ0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRCxPQVJBLENBREgsQ0FERCxHQVlHLElBekJOLENBREY7QUE2QkQ7Ozs7RUF4RGdCRywrQzs7QUEyREpsQixtRUFBZixFLENBRUE7O0FBQ0EsSUFBTW1CLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxTQUNmO0FBQUksYUFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSw2QkFBc0JBLEtBQUssQ0FBQ0gsTUFBTixDQUFhSSxXQUFiLEVBQXRCLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxLQUFLLENBQUNKLE1BRFQsQ0FERixDQURlO0FBQUEsQ0FBakI7O0tBQU1HLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTg3ZjAzYWQ2NmI4MWUyNGE2ZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IHNvcnREb3duIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL2ltYWdlcy9zb3J0LWRvd24tc29saWQuc3ZnXCI7XG5pbXBvcnQgUFJPWUVDVE9TIGZyb20gXCIuLi9QUk9ZRUNUT1MuanNvblwiO1xuLy8gdXNhbmRvIGRhdGEgZGUganNvbiBQUk9ZRUNUT1NcbmNsYXNzIE1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dNZW51OiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy5zaG93TWVudSA9IHRoaXMuc2hvd01lbnUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlTWVudSA9IHRoaXMuY2xvc2VNZW51LmJpbmQodGhpcyk7XG4gIH1cblxuICBzaG93TWVudShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01lbnU6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2xvc2VNZW51KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlTWVudShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TWVudTogZmFsc2UgfSwgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2xvc2VNZW51KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtbGluayB3LW5hdi1saW5rXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIjcHJveWVjdG9zXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uLW1lbnVcIj5QUk9ZRUNUT1M8L2E+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1pbWdcIlxuICAgICAgICAgIHNyYz17c29ydERvd259XG4gICAgICAgICAgYWx0PVwibWVudVwiXG4gICAgICAgICAgc2l6ZXM9XCIobWF4LXdpZHRoOiA3MXB4KSA1MHB4LCA3MXB4XCJcbiAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dNZW51fVxuICAgICAgICA+PC9pbWc+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dNZW51ID8gKFxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1bC1kcm9wZG93blwiPlxuICAgICAgICAgICAge1BST1lFQ1RPUy5wcm95ZWN0by5tYXAoKHByb3llY3RvLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFBvc3RMaW5rXG4gICAgICAgICAgICAgICAgICB0aXR1bG89e3Byb3llY3RvLnRpdHVsb31cbiAgICAgICAgICAgICAgICAgIGdpdGh1Yj17cHJveWVjdG8uZ2l0aHVifVxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcblxuLy8gaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuL2Jhc2ljcy9jcmVhdGUtZHluYW1pYy1wYWdlcy9wYXNzaW5nLWRhdGFcbmNvbnN0IFBvc3RMaW5rID0gKHByb3BzKSA9PiAoXG4gIDxsaSBjbGFzc05hbWU9XCJsaS1kcm9wZG93blwiPlxuICAgIDxhIGhyZWY9e2AvcHJveWVjdG8/dGl0dWxvPSR7cHJvcHMuZ2l0aHViLnRvVXBwZXJDYXNlKCl9YH0+XG4gICAgICB7cHJvcHMudGl0dWxvfVxuICAgIDwvYT5cbiAgPC9saT5cbik7XG4iXSwic291cmNlUm9vdCI6IiJ9