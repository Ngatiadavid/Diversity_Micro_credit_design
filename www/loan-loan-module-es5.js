(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loan-loan-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loan/loan.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loan/loan.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoanLoanPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'loans' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\">\n\t<div class=\"banner\">\n\t\t<ion-card class=\"animate__animated animate__fadeInUp\" (click)=\"loan_statement()\">\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">Home Loan</h3>\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">1124 2541 2574</h2>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t<h4 class=\"animate__animated animate__fadeInUp\">{{'view_statement' | translate}}</h4>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'due_amount' | translate}}</h3>\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">$ 200000<sub>.00</sub></h2>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'emi' | translate}}</h3>\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">$ 1000<sub>.00</sub></h2>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-card>\n\n\t\t<ion-card class=\"animate__animated animate__fadeInUp\" (click)=\"loan_statement()\">\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">Personal Loan</h3>\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">8754 1414 2541</h2>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t<h4 class=\"animate__animated animate__fadeInUp\">{{'view_statement' | translate}}</h4>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'due_amount' | translate}}</h3>\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">$ 80000<sub>.00</sub></h2>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'emi' | translate}}</h3>\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">$ 700<sub>.00</sub></h2>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-card>\n\t</div>\n\n\t<ion-list lines=\"none\">\n\t\t<h2>{{'loan_offers_available' | translate}}</h2>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"loan_info()\">\n\t\t\t<div class=\"item_inner d-flex\">\n\t\t\t\t<div class=\"img_box center_img\" slot=\"start\">\n\t\t\t\t\t<img src=\"assets/imgs/img_travel.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-box\">\n\t\t\t\t\t<h3>Travel for</h3>\n\t\t\t\t\t<h2>discover yourself !</h2>\n\t\t\t\t\t<h4 class=\"d-flex\"><span>{{'apply_now' | translate}}</span> {{'instant_loan_at' | translate}}<br>Just 8.90% interest</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"loan_info()\">\n\t\t\t<div class=\"item_inner d-flex\">\n\t\t\t\t<div class=\"img_box center_img\" slot=\"start\">\n\t\t\t\t\t<img src=\"assets/imgs/img_study.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-box\">\n\t\t\t\t\t<h3>Get a Lowest interest rate</h3>\n\t\t\t\t\t<h2>Education Loan</h2>\n\t\t\t\t\t<h4 class=\"d-flex\"><span>{{'apply_now' | translate}}</span> {{'instant_loan_at' | translate}}<br>Just 8.90% interest</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/loan/loan-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/loan/loan-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: LoanPageRoutingModule */

  /***/
  function srcAppLoanLoanRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanPageRoutingModule", function () {
      return LoanPageRoutingModule;
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


    var _loan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./loan.page */
    "./src/app/loan/loan.page.ts");

    const routes = [{
      path: '',
      component: _loan_page__WEBPACK_IMPORTED_MODULE_3__["LoanPage"]
    }];
    let LoanPageRoutingModule = class LoanPageRoutingModule {};
    LoanPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoanPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/loan/loan.module.ts":
  /*!*************************************!*\
    !*** ./src/app/loan/loan.module.ts ***!
    \*************************************/

  /*! exports provided: LoanPageModule */

  /***/
  function srcAppLoanLoanModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanPageModule", function () {
      return LoanPageModule;
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


    var _loan_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./loan-routing.module */
    "./src/app/loan/loan-routing.module.ts");
    /* harmony import */


    var _loan_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./loan.page */
    "./src/app/loan/loan.page.ts");

    let LoanPageModule = class LoanPageModule {};
    LoanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _loan_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoanPageRoutingModule"]],
      declarations: [_loan_page__WEBPACK_IMPORTED_MODULE_7__["LoanPage"]]
    })], LoanPageModule);
    /***/
  },

  /***/
  "./src/app/loan/loan.page.scss":
  /*!*************************************!*\
    !*** ./src/app/loan/loan.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoanLoanPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.banner {\n  background: var(--primary);\n  padding-bottom: 6px;\n  overflow: hidden;\n}\n\n.banner ion-card {\n  background: url('item_bg.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  border-radius: 10px;\n  padding: 15px 15px 10px 15px;\n  margin: 0 auto;\n  margin-bottom: 13px;\n  width: calc(100% - 25px);\n}\n\n.banner ion-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.3;\n}\n\n.banner ion-card ion-row {\n  margin: 0 -5px;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  padding-bottom: 10px;\n  position: relative;\n  z-index: 99;\n}\n\n.banner ion-card ion-row ion-col h3 {\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 7px;\n  color: var(--text-light);\n}\n\n.banner ion-card ion-row ion-col h2 {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  color: var(--white);\n}\n\n.banner ion-card ion-row ion-col h2 sub {\n  font-weight: 400;\n  font-size: 0.7rem;\n}\n\n.banner ion-card ion-row ion-col h4 {\n  color: var(--primary);\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: 0;\n}\n\nion-list {\n  margin: 0;\n  background: none;\n  padding: none;\n  padding: 0;\n}\n\nion-list h2 {\n  width: calc(100% - 31px);\n  margin: 19px auto 13px auto;\n  font-size: 0.8rem;\n  color: var(--text-light);\n}\n\nion-list ion-item {\n  padding: 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  margin-bottom: 8px;\n  --background: var(--transparent);\n  background: url('banner_bg.png');\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n}\n\nion-list ion-item .img_box {\n  width: 123px;\n  min-width: 123px;\n  height: 113px;\n  margin: 0;\n}\n\nion-list ion-item .item_inner {\n  padding: 0;\n  position: relative;\n  z-index: 99;\n}\n\nion-list ion-item .item_inner .text-box {\n  width: 100%;\n  padding: 0 16px;\n}\n\nion-list ion-item .item_inner h2 {\n  margin: 0;\n  width: 100%;\n  color: var(--white);\n  font-size: 1.25rem;\n  margin-bottom: 12px;\n  font-weight: 400;\n}\n\nion-list ion-item .item_inner h3 {\n  color: var(--white);\n  font-size: 0.8rem;\n  letter-spacing: 0.5px;\n  margin: 0;\n  font-weight: 400;\n}\n\nion-list ion-item .item_inner h4 {\n  color: var(--white);\n  font-size: 0.6rem;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  margin: 0 -10px;\n}\n\nion-list ion-item .item_inner h4 span {\n  background: var(--secondary);\n  font-size: 0.7rem;\n  font-weight: 500;\n  border-radius: 3px;\n  height: 25px;\n  line-height: 25px;\n  padding: 0 8px;\n  margin: 0 10px;\n  min-width: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hbi9DOlxcVXNlcnNcXHVzZXJcXFBpY3R1cmVzXFxhbHBoYXZlY3RhQXBwLW1hc3RlclxcYWxwaGF2ZWN0YUFwcC1tYXN0ZXIvc3JjXFxhcHBcXGxvYW5cXGxvYW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2FuL2xvYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0Q7O0FERUE7RUFDQywwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURDQztFQUNDLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FEQ0U7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0g7O0FER0U7RUFDQyxjQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDREg7O0FES0k7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUNITDs7QURNSTtFQUNDLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0pMOztBRE1LO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtBQ0pOOztBRFFJO0VBQ0MscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ05MOztBRGFBO0VBQ0MsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNWRDs7QURZQztFQUNDLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FDVkY7O0FEYUM7RUFDQyxVQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ1hGOztBRGFFO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNYSDs7QURjRTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNaSDs7QURjRztFQUNDLFdBQUE7RUFDQSxlQUFBO0FDWko7O0FEZUc7RUFDQyxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDYko7O0FEZ0JHO0VBQ0MsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDZEo7O0FEa0JHO0VBQ0MsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDaEJKOztBRGtCSTtFQUNDLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDaEJMIiwiZmlsZSI6InNyYy9hcHAvbG9hbi9sb2FuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcblx0cGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuXHR0b3A6IC0zcHg7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYW5uZXIge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcblx0cGFkZGluZy1ib3R0b206IDZweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRpb24tY2FyZCB7XG5cdFx0YmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pdGVtX2JnLnBuZycpO1xuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHRwYWRkaW5nOiAxNXB4IDE1cHggMTBweCAxNXB4O1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdG1hcmdpbi1ib3R0b206IDEzcHg7XG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xuXG5cdFx0Jjo6YmVmb3JlIHtcblx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0YmFja2dyb3VuZDogIzAwMDtcblx0XHRcdG9wYWNpdHk6IC4zO1xuXG5cdFx0fVxuXG5cdFx0aW9uLXJvdyB7XG5cdFx0XHRtYXJnaW46IDAgLTVweDtcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0ei1pbmRleDogOTk7XG5cblx0XHRcdGlvbi1jb2wge1xuXG5cdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDAuOHJlbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA3cHg7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aDIge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuM3JlbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXG5cdFx0XHRcdFx0c3ViIHtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDAuN3JlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoNCB7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogLjhyZW07XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuaW9uLWxpc3Qge1xuXHRtYXJnaW46IDA7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdHBhZGRpbmc6IG5vbmU7XG5cdHBhZGRpbmc6IDA7XG5cblx0aDIge1xuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAzMXB4KTtcblx0XHRtYXJnaW46IDE5cHggYXV0byAxM3B4IGF1dG87XG5cdFx0Zm9udC1zaXplOiAwLjhyZW07XG5cdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHR9XG5cblx0aW9uLWl0ZW0ge1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG5cdFx0YmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9iYW5uZXJfYmcucG5nJyk7XG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHRcdC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XG5cdFx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuXHRcdC0tbWluLWhlaWdodDogdW5zZXQ7XG5cblx0XHQuaW1nX2JveCB7XG5cdFx0XHR3aWR0aDogMTIzcHg7XG5cdFx0XHRtaW4td2lkdGg6IDEyM3B4O1xuXHRcdFx0aGVpZ2h0OiAxMTNweDtcblx0XHRcdG1hcmdpbjogMDtcblx0XHR9XG5cblx0XHQuaXRlbV9pbm5lciB7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0ei1pbmRleDogOTk7XG5cblx0XHRcdC50ZXh0LWJveCB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRwYWRkaW5nOiAwIDE2cHhcblx0XHRcdH1cblxuXHRcdFx0aDIge1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdFx0XHRmb250LXNpemU6IDEuMjVyZW07XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDEycHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHR9XG5cblx0XHRcdGgzIHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcblx0XHRcdFx0Zm9udC1zaXplOiAuOHJlbTtcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cblx0XHRcdH1cblxuXHRcdFx0aDQge1xuXHRcdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdFx0XHRmb250LXNpemU6IDAuNnJlbTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuXHRcdFx0XHRtYXJnaW46IDAgLTEwcHg7XG5cblx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcblx0XHRcdFx0XHRmb250LXNpemU6IC43cmVtO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRcdFx0XHRcdGhlaWdodDogMjVweDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjVweDtcblx0XHRcdFx0XHRwYWRkaW5nOiAwIDhweDtcblx0XHRcdFx0XHRtYXJnaW46IDAgMTBweDtcblx0XHRcdFx0XHRtaW4td2lkdGg6IDcwcHg7XG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IC0zcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYW5uZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5iYW5uZXIgaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9pdGVtX2JnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMTBweCAxNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xufVxuLmJhbm5lciBpb24tY2FyZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIG9wYWNpdHk6IDAuMztcbn1cbi5iYW5uZXIgaW9uLWNhcmQgaW9uLXJvdyB7XG4gIG1hcmdpbjogMCAtNXB4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xufVxuLmJhbm5lciBpb24tY2FyZCBpb24tcm93IGlvbi1jb2wgaDMge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbn1cbi5iYW5uZXIgaW9uLWNhcmQgaW9uLXJvdyBpb24tY29sIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuLmJhbm5lciBpb24tY2FyZCBpb24tcm93IGlvbi1jb2wgaDIgc3ViIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG59XG4uYmFubmVyIGlvbi1jYXJkIGlvbi1yb3cgaW9uLWNvbCBoNCB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWxpc3Qge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tbGlzdCBoMiB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMXB4KTtcbiAgbWFyZ2luOiAxOXB4IGF1dG8gMTNweCBhdXRvO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2Jhbm5lcl9iZy5wbmdcIik7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiB1bnNldDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pbWdfYm94IHtcbiAgd2lkdGg6IDEyM3B4O1xuICBtaW4td2lkdGg6IDEyM3B4O1xuICBoZWlnaHQ6IDExM3B4O1xuICBtYXJnaW46IDA7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dC1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMyB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGg0IHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgbWFyZ2luOiAwIC0xMHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDQgc3BhbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgbWluLXdpZHRoOiA3MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/loan/loan.page.ts":
  /*!***********************************!*\
    !*** ./src/app/loan/loan.page.ts ***!
    \***********************************/

  /*! exports provided: LoanPage */

  /***/
  function srcAppLoanLoanPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanPage", function () {
      return LoanPage;
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

    let LoanPage = class LoanPage {
      constructor(route) {
        this.route = route;
      }

      ngOnInit() {}

      loan_statement() {
        this.route.navigate(['./loan-statement']);
      }

      loan_info() {
        this.route.navigate(['./loan-info']);
      }

    };

    LoanPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    LoanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loan',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loan.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loan/loan.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loan.page.scss */
      "./src/app/loan/loan.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LoanPage);
    /***/
  }
}]);
//# sourceMappingURL=loan-loan-module-es5.js.map