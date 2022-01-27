self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Skills/SkillsStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Skills/SkillsStyles.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boxes": function() { return /* binding */ Boxes; },
/* harmony export */   "Box": function() { return /* binding */ Box; },
/* harmony export */   "BoxNum": function() { return /* binding */ BoxNum; },
/* harmony export */   "BoxText": function() { return /* binding */ BoxText; },
/* harmony export */   "Join": function() { return /* binding */ Join; },
/* harmony export */   "JoinText": function() { return /* binding */ JoinText; },
/* harmony export */   "IconContainer": function() { return /* binding */ IconContainer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Boxes = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "SkillsStyles__Boxes",
  componentId: "sc-1spyi8r-0"
})(["width:100%;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin:24px 0 40px;@media ", "{gap:16px;margin:20px 0 32px;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));}@media ", "{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:500px;margin:24px auto;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var Box = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "SkillsStyles__Box",
  componentId: "sc-1spyi8r-1"
})(["background:#212D45;border-radius:12px;height:85px;padding:24px;@media ", "{height:210px;}@media ", "{height:135px;padding:16px;}@media ", "{height:110px;padding:12px;&:nth-child(2n){grid-row:2;}}"], function (props) {
  return props.theme.breakpoints.lg;
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var BoxNum = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h5.withConfig({
  displayName: "SkillsStyles__BoxNum",
  componentId: "sc-1spyi8r-2"
})(["font-style:normal;font-weight:600;font-size:36px;line-height:40px;letter-spacing:0.01em;color:#FFFFFF;margin-bottom:8px;@media ", "{font-size:28px;line-height:32px;}@media ", "{font-size:24px;line-height:26px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var BoxText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "SkillsStyles__BoxText",
  componentId: "sc-1spyi8r-3"
})(["font-style:normal;font-weight:600;font-size:36px;line-height:40px;letter-spacing:0.01em;color:#FFFFFF;margin-bottom:8px;text-align:center;@media ", "{font-size:16px;line-height:20px;};@media ", "{font-size:10px;line-height:14px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var Join = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "SkillsStyles__Join",
  componentId: "sc-1spyi8r-4"
})(["display:flex;max-width:1040px;justify-content:center;align-items:center;padding-bottom:80px;@media ", "{display:flex;justify-content:center;padding-bottom:64px;}@media ", "{display:flex;flex-direction:column;align-items:center;padding-bottom:32px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var JoinText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h5.withConfig({
  displayName: "SkillsStyles__JoinText",
  componentId: "sc-1spyi8r-5"
})(["display:flex;font-size:24px;line-height:40px;letter-spacing:0.02em;color:rgba(255,255,255,0.5);@media ", "{line-height:32px;font-size:20px;};@media ", "{font-size:16px;line-height:24px;margin:0 0 16px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "SkillsStyles__IconContainer",
  componentId: "sc-1spyi8r-6"
})(["display:flex;@media ", "{width:160px;justify-content:space-between;}"], function (props) {
  return props.theme.breakpoints.sm;
});

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2tpbGxzL1NraWxsc1N0eWxlcy5qcyJdLCJuYW1lcyI6WyJCb3hlcyIsInN0eWxlZCIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsIm1kIiwic20iLCJCb3giLCJsZyIsIkJveE51bSIsIkJveFRleHQiLCJKb2luIiwiSm9pblRleHQiLCJJY29uQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLEtBQUssR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsMlNBT1AsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUE1QjtBQUFBLENBUEUsRUFhUCxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQTVCO0FBQUEsQ0FiRSxDQUFYO0FBc0JBLElBQU1DLEdBQUcsR0FBR04scUVBQUg7QUFBQTtBQUFBO0FBQUEsNE1BS0wsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCSSxFQUE1QjtBQUFBLENBTEEsRUFVTCxVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQTVCO0FBQUEsQ0FWQSxFQWVMLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBNUI7QUFBQSxDQWZBLENBQVQ7QUF3QkEsSUFBTUcsTUFBTSxHQUFHUixvRUFBSDtBQUFBO0FBQUE7QUFBQSwyTkFTUixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQTVCO0FBQUEsQ0FURyxFQWFSLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBNUI7QUFBQSxDQWJHLENBQVo7QUFtQkEsSUFBTUksT0FBTyxHQUFHVCxtRUFBSDtBQUFBO0FBQUE7QUFBQSw4T0FVVCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQTVCO0FBQUEsQ0FWSSxFQWVULFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBNUI7QUFBQSxDQWZJLENBQWI7QUFxQkEsSUFBTUssSUFBSSxHQUFHVixxRUFBSDtBQUFBO0FBQUE7QUFBQSxpUUFPTixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQTVCO0FBQUEsQ0FQQyxFQWFOLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBNUI7QUFBQSxDQWJDLENBQVY7QUFxQkEsSUFBTU0sUUFBUSxHQUFHWCxvRUFBSDtBQUFBO0FBQUE7QUFBQSxtTkFPWixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQTVCO0FBQUEsQ0FQTyxFQVlaLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBNUI7QUFBQSxDQVpPLENBQWQ7QUFtQkEsSUFBTU8sYUFBYSxHQUFHWixxRUFBSDtBQUFBO0FBQUE7QUFBQSw2RUFHZixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQTVCO0FBQUEsQ0FIVSxDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNzAzN2I1M2UxY2QxNGIwZmI5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IEJveGVzID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgZ2FwOiAyNHB4O1xyXG4gIG1hcmdpbjogMjRweCAwIDQwcHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIGdhcDogMTZweDtcclxuICAgIG1hcmdpbjogMjBweCAwIDMycHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE0MHB4LCAxZnIpKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogMjRweCBhdXRvO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogIzIxMkQ0NTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGhlaWdodDogODVweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfSB7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBoZWlnaHQ6IDEzNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIFxyXG4gICAgJjpudGgtY2hpbGQoMm4pe1xyXG4gICAgICBncmlkLXJvdzoyO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQm94TnVtID0gc3R5bGVkLmg1YFxyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIH1cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJveFRleHQgPSBzdHlsZWQucGBcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9O1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSm9pbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXgtd2lkdGg6IDEwNDBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjRweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEpvaW5UZXh0ID0gc3R5bGVkLmg1YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHJcbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn07XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbjogMCAwIDE2cHg7XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEljb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbmBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==