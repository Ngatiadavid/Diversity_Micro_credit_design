(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-deposite-upload-deposite-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-deposite/upload-deposite.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload-deposite/upload-deposite.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUploadDepositeUploadDepositePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'make_a_deposite' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n\t<div class=\"img_container\">\n\t\t<ion-card class=\"animate__animated animate__fadeInUp\">\n\t\t\t<p class=\"d-flex\">{{'front_side' | translate}} <span class=\"end\">{{'delete' | translate}}</span></p>\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<img src=\"assets/imgs/cheque_book.jpg\" class=\"crop_img\">\n\t\t\t</div>\n\t\t</ion-card>\n\n\t\t<ion-card class=\"animate__animated animate__fadeInUp\">\n\t\t\t<p class=\"d-flex\">{{'back_side' | translate}} <span class=\"end\"></span></p>\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<!--\t\t\t\t<img src=\"assets/imgs/cheque_book.jpg\" class=\"crop_img\">-->\n\t\t\t</div>\n\t\t\t<ion-icon class=\"zmdi zmdi-camera\"></ion-icon>\n\t\t</ion-card>\n\t</div>\n\n\t<div class=\"form\">\n\t\t<ion-list lines=\"none\">\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-select mode=\"md\" interface=\"action-sheet\"  placeholder=\"{{'select_account' | translate}}\">\n\t\t\t\t\t<ion-select-option value=\"1\">SB 1144 2254 2478 2145</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"2\">SB 2244 1154 6778 7745</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"3\">SB 8844 5654 3278 1045</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-item>\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'amount' | translate}}</h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-input type=\"number\" placeholder=\"0.00\"></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</div>\n</ion-content>\n\n\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n\t<ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"transfered_successfully()\">{{'transfer_now' | translate}}</ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/upload-deposite/upload-deposite-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/upload-deposite/upload-deposite-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: UploadDepositePageRoutingModule */

  /***/
  function srcAppUploadDepositeUploadDepositeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadDepositePageRoutingModule", function () {
      return UploadDepositePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _upload_deposite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./upload-deposite.page */
    "./src/app/upload-deposite/upload-deposite.page.ts");

    const routes = [{
      path: '',
      component: _upload_deposite_page__WEBPACK_IMPORTED_MODULE_3__["UploadDepositePage"]
    }];
    let UploadDepositePageRoutingModule = class UploadDepositePageRoutingModule {};
    UploadDepositePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UploadDepositePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/upload-deposite/upload-deposite.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/upload-deposite/upload-deposite.module.ts ***!
    \***********************************************************/

  /*! exports provided: UploadDepositePageModule */

  /***/
  function srcAppUploadDepositeUploadDepositeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadDepositePageModule", function () {
      return UploadDepositePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _upload_deposite_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./upload-deposite-routing.module */
    "./src/app/upload-deposite/upload-deposite-routing.module.ts");
    /* harmony import */


    var _upload_deposite_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./upload-deposite.page */
    "./src/app/upload-deposite/upload-deposite.page.ts");

    let UploadDepositePageModule = class UploadDepositePageModule {};
    UploadDepositePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _upload_deposite_routing_module__WEBPACK_IMPORTED_MODULE_6__["UploadDepositePageRoutingModule"]],
      declarations: [_upload_deposite_page__WEBPACK_IMPORTED_MODULE_7__["UploadDepositePage"]]
    })], UploadDepositePageModule);
    /***/
  },

  /***/
  "./src/app/upload-deposite/upload-deposite.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/upload-deposite/upload-deposite.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUploadDepositeUploadDepositePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.img_container {\n  background: var(--primary);\n  padding-top: 20px;\n  padding-bottom: 10px;\n  display: block;\n  overflow: hidden;\n}\n\n.img_container ion-card {\n  margin: 0 auto;\n  width: calc(100% - 25px);\n  background: var(--secondary);\n  border-radius: 10px;\n  margin-bottom: 13px;\n  box-shadow: none;\n  height: 125px;\n  overflow: hidden;\n  position: relative;\n}\n\n.img_container ion-card .img_box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.img_container ion-card p {\n  color: var(--white);\n  position: relative;\n  z-index: 99;\n  font-size: 0.7rem;\n  margin: 0;\n  padding: 5px 13px 9px 11px;\n  font-weight: 400;\n}\n\n.img_container ion-card p span {\n  color: var(--red_color);\n  font-weight: 500;\n}\n\n.img_container ion-card ion-icon {\n  color: var(--secondary);\n  background: var(--white);\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 60px;\n  text-align: center;\n  height: 60px;\n  line-height: 60px;\n  font-size: 2rem;\n}\n\n.form {\n  width: calc(100% - 30px);\n  padding-top: 21px;\n}\n\n.form ion-list h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  padding-bottom: 8px;\n}\n\n.form ion-list ion-item {\n  background: var(--white);\n  margin-bottom: 19px;\n}\n\n.form ion-list ion-item.item-select ion-select {\n  --placeholder-color: var(--text-light) !important;\n  --placeholder-opacity: 1;\n  color: var(--text-black);\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0;\n}\n\nion-footer {\n  padding: 10px;\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLWRlcG9zaXRlL0M6XFxVc2Vyc1xcdXNlclxcUGljdHVyZXNcXGFscGhhdmVjdGFBcHAtbWFzdGVyXFxhbHBoYXZlY3RhQXBwLW1hc3Rlci9zcmNcXGFwcFxcdXBsb2FkLWRlcG9zaXRlXFx1cGxvYWQtZGVwb3NpdGUucGFnZS5zY3NzIiwic3JjL2FwcC91cGxvYWQtZGVwb3NpdGUvdXBsb2FkLWRlcG9zaXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FSOztBRElBO0VBQ0ksMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDREo7O0FER0k7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRFI7O0FER1E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNEWjs7QURJUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0ZaOztBRElZO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtBQ0ZoQjs7QURNUTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSlo7O0FEV0E7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEV1E7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVFo7O0FEYVE7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0FDWFo7O0FEY2dCO0VBQ0ksaURBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ1pwQjs7QURvQkE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7QUNqQkoiLCJmaWxlIjoic3JjL2FwcC91cGxvYWQtZGVwb3NpdGUvdXBsb2FkLWRlcG9zaXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAgICAgdG9wOiAtM3B4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLmltZ19jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBpb24tY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGhlaWdodDogMTI1cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAuaW1nX2JveCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTNweCA5cHggMTFweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1yZWRfY29sb3IpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG5cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG4uZm9ybSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgIHBhZGRpbmctdG9wOiAyMXB4O1xuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuXG4gICAgICAgIH1cblxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxOXB4O1xuXG4gICAgICAgICAgICAmLml0ZW0tc2VsZWN0IHtcbiAgICAgICAgICAgICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1mb290ZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMgIWltcG9ydGFudDtcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiAtM3B4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nX2NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmltZ19jb250YWluZXIgaW9uLWNhcmQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBoZWlnaHQ6IDEyNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW1nX2NvbnRhaW5lciBpb24tY2FyZCAuaW1nX2JveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmltZ19jb250YWluZXIgaW9uLWNhcmQgcCB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDVweCAxM3B4IDlweCAxMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmltZ19jb250YWluZXIgaW9uLWNhcmQgcCBzcGFuIHtcbiAgY29sb3I6IHZhcigtLXJlZF9jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uaW1nX2NvbnRhaW5lciBpb24tY2FyZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9ybSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgcGFkZGluZy10b3A6IDIxcHg7XG59XG4uZm9ybSBpb24tbGlzdCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgbWFyZ2luLWJvdHRvbTogMTlweDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1pdGVtLml0ZW0tc2VsZWN0IGlvbi1zZWxlY3Qge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/upload-deposite/upload-deposite.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/upload-deposite/upload-deposite.page.ts ***!
    \*********************************************************/

  /*! exports provided: UploadDepositePage */

  /***/
  function srcAppUploadDepositeUploadDepositePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadDepositePage", function () {
      return UploadDepositePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let UploadDepositePage = class UploadDepositePage {
      constructor(route) {
        this.route = route;
      }

      ngOnInit() {}

      transfered_successfully() {
        this.route.navigate(['./transfered-successfully']);
      }

    };

    UploadDepositePage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    UploadDepositePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-upload-deposite',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upload-deposite.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-deposite/upload-deposite.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upload-deposite.page.scss */
      "./src/app/upload-deposite/upload-deposite.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], UploadDepositePage);
    /***/
  }
}]);
//# sourceMappingURL=upload-deposite-upload-deposite-module-es5.js.map