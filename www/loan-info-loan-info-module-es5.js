(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loan-info-loan-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loan-info/loan-info.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loan-info/loan-info.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoanInfoLoanInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Travel Loan</ion-title>\n\t</ion-toolbar>\n\t<ion-list lines=\"none\">\n\t\t<ion-item>\n\t\t\t<div class=\"item_inner d-flex\">\n\t\t\t\t<div class=\"img_box center_img\" slot=\"start\">\n\t\t\t\t\t<img src=\"assets/imgs/img_travel.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-box\">\n\t\t\t\t\t<h3>Travel for</h3>\n\t\t\t\t\t<h2>discover yourself !</h2>\n\t\t\t\t\t<h4 class=\"d-flex\"><span>{{'apply_now' | translate}}</span> {{'instant_loan_at' | translate}}<br>Just 8.90% interest</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n\t<div class=\"about\">\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n\t\t</p>\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n\t\t</p>\n\t</div>\n\t<div class=\"form\">\n\t\t<ion-list lines=\"none\">\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'phone_number' | translate}}</h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-input type=\"number\" placeholder=\"{{'enter_your_phone_number' | translate}}\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'your_message' | translate}}</h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-input type=\"text\" placeholder=\"{{'enter_your_message' | translate}}\"></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</div>\n</ion-content>\n\n \n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n\t<ion-button size=\"large\" shape=\"block\" class=\"btn\">{{'i_am_interested' | translate}}</ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/loan-info/loan-info-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/loan-info/loan-info-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: LoanInfoPageRoutingModule */

  /***/
  function srcAppLoanInfoLoanInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanInfoPageRoutingModule", function () {
      return LoanInfoPageRoutingModule;
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


    var _loan_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./loan-info.page */
    "./src/app/loan-info/loan-info.page.ts");

    const routes = [{
      path: '',
      component: _loan_info_page__WEBPACK_IMPORTED_MODULE_3__["LoanInfoPage"]
    }];
    let LoanInfoPageRoutingModule = class LoanInfoPageRoutingModule {};
    LoanInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoanInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/loan-info/loan-info.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/loan-info/loan-info.module.ts ***!
    \***********************************************/

  /*! exports provided: LoanInfoPageModule */

  /***/
  function srcAppLoanInfoLoanInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanInfoPageModule", function () {
      return LoanInfoPageModule;
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


    var _loan_info_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./loan-info-routing.module */
    "./src/app/loan-info/loan-info-routing.module.ts");
    /* harmony import */


    var _loan_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./loan-info.page */
    "./src/app/loan-info/loan-info.page.ts");

    let LoanInfoPageModule = class LoanInfoPageModule {};
    LoanInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _loan_info_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoanInfoPageRoutingModule"]],
      declarations: [_loan_info_page__WEBPACK_IMPORTED_MODULE_7__["LoanInfoPage"]]
    })], LoanInfoPageModule);
    /***/
  },

  /***/
  "./src/app/loan-info/loan-info.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/loan-info/loan-info.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoanInfoLoanInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\nion-header ion-list {\n  margin: 0;\n  background: none;\n  padding: none;\n  padding: 0;\n}\nion-header ion-list ion-item {\n  padding: 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  --background: var(--transparent);\n  background: url('banner_bg.png');\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n}\nion-header ion-list ion-item .img_box {\n  width: 123px;\n  min-width: 123px;\n  height: 113px;\n  margin: 0;\n}\nion-header ion-list ion-item .item_inner {\n  padding: 0;\n  position: relative;\n  z-index: 99;\n}\nion-header ion-list ion-item .item_inner .text-box {\n  width: 100%;\n  padding: 0 16px;\n}\nion-header ion-list ion-item .item_inner h2 {\n  margin: 0;\n  width: 100%;\n  color: var(--white);\n  font-size: 1.25rem;\n  margin-bottom: 12px;\n  font-weight: 400;\n}\nion-header ion-list ion-item .item_inner h3 {\n  color: var(--white);\n  font-size: 0.8rem;\n  letter-spacing: 0.5px;\n  margin: 0;\n  font-weight: 400;\n}\nion-header ion-list ion-item .item_inner h4 {\n  color: var(--white);\n  font-size: 0.6rem;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  margin: 0 -10px;\n}\nion-header ion-list ion-item .item_inner h4 span {\n  background: var(--secondary);\n  font-size: 0.7rem;\n  font-weight: 500;\n  border-radius: 3px;\n  height: 25px;\n  line-height: 25px;\n  padding: 0 8px;\n  margin: 0 10px;\n  min-width: 70px;\n}\n.about {\n  padding: 20px 20px 7px 20px;\n  background: var(--white);\n}\n.about p {\n  margin: 0;\n  font-size: 0.95rem;\n  margin-bottom: 15px;\n  font-weight: 400;\n  line-height: 19px;\n}\n.form {\n  width: calc(100% - 30px);\n  padding-top: 21px;\n}\n.form ion-list h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  padding-bottom: 8px;\n}\n.form ion-list ion-item {\n  background: var(--white);\n  margin-bottom: 19px;\n}\nion-footer {\n  padding: 10px;\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hbi1pbmZvL0M6XFxVc2Vyc1xcdXNlclxcUGljdHVyZXNcXGFscGhhdmVjdGFBcHAtbWFzdGVyXFxhbHBoYXZlY3RhQXBwLW1hc3Rlci9zcmNcXGFwcFxcbG9hbi1pbmZvXFxsb2FuLWluZm8ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2FuLWluZm8vbG9hbi1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FSO0FER0k7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0RSO0FER1E7RUFDSSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNEWjtBREdZO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNEaEI7QURJWTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNGaEI7QURJZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0ZwQjtBREtnQjtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNIcEI7QURNZ0I7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNKcEI7QURRZ0I7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNOcEI7QURRb0I7RUFDSSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ054QjtBRGVBO0VBQ0ksMkJBQUE7RUFDQSx3QkFBQTtBQ1pKO0FEY0k7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNaUjtBRGdCQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7QUNiSjtBRGdCUTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNkWjtBRGtCUTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7QUNoQlo7QURxQkE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7QUNsQkoiLCJmaWxlIjoic3JjL2FwcC9sb2FuLWluZm8vbG9hbi1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAgICAgdG9wOiAtM3B4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBwYWRkaW5nOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9iYW5uZXJfYmcucG5nJyk7XG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xuXG4gICAgICAgICAgICAuaW1nX2JveCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyM3B4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTIzcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTNweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pdGVtX2lubmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcblxuICAgICAgICAgICAgICAgIC50ZXh0LWJveCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHhcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgLTEwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDcwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFib3V0IHtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggN3B4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAuOTVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIH1cbn1cblxuLmZvcm0ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICBwYWRkaW5nLXRvcDogMjFweDtcblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcblxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTlweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAtLWFuaW1hdGUtZHVyYXRpb246IC40cyAhaW1wb3J0YW50O1xufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IC0zcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24taGVhZGVyIGlvbi1saXN0IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWhlYWRlciBpb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2Jhbm5lcl9iZy5wbmdcIik7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiB1bnNldDtcbn1cbmlvbi1oZWFkZXIgaW9uLWxpc3QgaW9uLWl0ZW0gLmltZ19ib3gge1xuICB3aWR0aDogMTIzcHg7XG4gIG1pbi13aWR0aDogMTIzcHg7XG4gIGhlaWdodDogMTEzcHg7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1oZWFkZXIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xufVxuaW9uLWhlYWRlciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dC1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuaW9uLWhlYWRlciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmlvbi1oZWFkZXIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDMge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5pb24taGVhZGVyIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGg0IHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgbWFyZ2luOiAwIC0xMHB4O1xufVxuaW9uLWhlYWRlciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoNCBzcGFuIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBtaW4td2lkdGg6IDcwcHg7XG59XG5cbi5hYm91dCB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCA3cHggMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xufVxuLmFib3V0IHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbi5mb3JtIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBwYWRkaW5nLXRvcDogMjFweDtcbn1cbi5mb3JtIGlvbi1saXN0IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBtYXJnaW4tYm90dG9tOiAxOXB4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/loan-info/loan-info.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/loan-info/loan-info.page.ts ***!
    \*********************************************/

  /*! exports provided: LoanInfoPage */

  /***/
  function srcAppLoanInfoLoanInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanInfoPage", function () {
      return LoanInfoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let LoanInfoPage = class LoanInfoPage {
      constructor() {}

      ngOnInit() {}

    };
    LoanInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loan-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loan-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loan-info/loan-info.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loan-info.page.scss */
      "./src/app/loan-info/loan-info.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LoanInfoPage);
    /***/
  }
}]);
//# sourceMappingURL=loan-info-loan-info-module-es5.js.map