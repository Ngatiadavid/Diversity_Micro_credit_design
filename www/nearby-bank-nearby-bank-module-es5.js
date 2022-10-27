(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nearby-bank-nearby-bank-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nearby-bank/nearby-bank.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nearby-bank/nearby-bank.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNearbyBankNearbyBankPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t\t<ion-title>{{'nearby_bank_atm' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"map\">\n\t\t<img src=\"assets/imgs/map.png\">\n\t</div>\n\t<div class=\"near_me atm ion-text-center animate__animated animate__zoomIn\"  style=\"right: 10%; top: 11%\">\n\t\t<ion-icon class=\"zmdi zmdi-card\"></ion-icon>\n\t</div>\n\t<div class=\"near_me atm ion-text-center animate__animated animate__zoomIn\"  style=\"right: 40%; top: 41%\">\n\t\t<ion-icon class=\"zmdi zmdi-card\"></ion-icon>\n\t</div>\n\t<div class=\"near_me atm ion-text-center animate__animated animate__zoomIn\"  style=\"left: 10%; top: 60%\">\n\t\t<ion-icon class=\"zmdi zmdi-card\"></ion-icon>\n\t</div>\n\t<div class=\"near_me bank ion-text-center animate__animated animate__zoomIn\"  style=\"left: 30%; top: 30%\">\n\t\t<ion-icon class=\"zmdi zmdi-balance\"></ion-icon>\n\t</div>\n\t<div class=\"near_me bank ion-text-cente animate__animated animate__zoomInr\"  style=\"left: 40%; top:80%\">\n\t\t<ion-icon class=\"zmdi zmdi-balance\"></ion-icon>\n\t</div>\n\t<div class=\"my_location animate__animated animate__zoomIn\" style=\"top: 62%; right: 38%;\">\n\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/nearby-bank/nearby-bank-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/nearby-bank/nearby-bank-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: NearbyBankPageRoutingModule */

  /***/
  function srcAppNearbyBankNearbyBankRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NearbyBankPageRoutingModule", function () {
      return NearbyBankPageRoutingModule;
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


    var _nearby_bank_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./nearby-bank.page */
    "./src/app/nearby-bank/nearby-bank.page.ts");

    const routes = [{
      path: '',
      component: _nearby_bank_page__WEBPACK_IMPORTED_MODULE_3__["NearbyBankPage"]
    }];
    let NearbyBankPageRoutingModule = class NearbyBankPageRoutingModule {};
    NearbyBankPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NearbyBankPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/nearby-bank/nearby-bank.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/nearby-bank/nearby-bank.module.ts ***!
    \***************************************************/

  /*! exports provided: NearbyBankPageModule */

  /***/
  function srcAppNearbyBankNearbyBankModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NearbyBankPageModule", function () {
      return NearbyBankPageModule;
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


    var _nearby_bank_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nearby-bank-routing.module */
    "./src/app/nearby-bank/nearby-bank-routing.module.ts");
    /* harmony import */


    var _nearby_bank_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./nearby-bank.page */
    "./src/app/nearby-bank/nearby-bank.page.ts");

    let NearbyBankPageModule = class NearbyBankPageModule {};
    NearbyBankPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _nearby_bank_routing_module__WEBPACK_IMPORTED_MODULE_6__["NearbyBankPageRoutingModule"]],
      declarations: [_nearby_bank_page__WEBPACK_IMPORTED_MODULE_7__["NearbyBankPage"]]
    })], NearbyBankPageModule);
    /***/
  },

  /***/
  "./src/app/nearby-bank/nearby-bank.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/nearby-bank/nearby-bank.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNearbyBankNearbyBankPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.map {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.map img {\n  width: 100%;\n  height: 100%;\n}\n\n.near_me {\n  position: absolute;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  z-index: 99;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.near_me ion-icon {\n  color: var(--white);\n  font-size: 0.9rem;\n  margin: 0 auto;\n}\n\n.near_me.atm {\n  background: var(--secondary);\n}\n\n.near_me.bank {\n  background: var(--primary);\n}\n\n.my_location {\n  position: absolute;\n  z-index: 99;\n  border-radius: 50%;\n  width: 22px;\n  height: 22px;\n  overflow: hidden;\n  text-align: center;\n}\n\n.my_location::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #ff5e39;\n  opacity: 0.4;\n}\n\n.my_location ion-icon {\n  color: #ff5e39;\n  font-size: 0.95rem;\n  line-height: 22px;\n  margin: 0;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmVhcmJ5LWJhbmsvQzpcXFVzZXJzXFx1c2VyXFxQaWN0dXJlc1xcYWxwaGF2ZWN0YUFwcC1tYXN0ZXJcXGFscGhhdmVjdGFBcHAtbWFzdGVyL3NyY1xcYXBwXFxuZWFyYnktYmFua1xcbmVhcmJ5LWJhbmsucGFnZS5zY3NzIiwic3JjL2FwcC9uZWFyYnktYmFuay9uZWFyYnktYmFuay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQywwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FEQ0M7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRElBO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0REOztBREdDO0VBQ0MsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNERjs7QURJQztFQUNDLDRCQUFBO0FDRkY7O0FES0M7RUFDQywwQkFBQTtBQ0hGOztBRE9BO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNKRDs7QURNQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNKRjs7QURPQztFQUNDLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL25lYXJieS1iYW5rL25lYXJieS1iYW5rLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcblx0cGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuXHR0b3A6IC0zcHg7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXAge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRpbWcge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0fVxuXG59XG5cbi5uZWFyX21lIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdHdpZHRoOiAyNHB4O1xuXHRoZWlnaHQ6IDI0cHg7XG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHR6LWluZGV4OiA5OTtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRpb24taWNvbiB7XG5cdFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcblx0XHRmb250LXNpemU6IC45cmVtO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHR9XG5cblx0Ji5hdG0ge1xuXHRcdGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSksXG5cdH1cblxuXHQmLmJhbmsge1xuXHRcdGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpLFxuXHR9XG59XG5cbi5teV9sb2NhdGlvbiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ei1pbmRleDogOTk7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0d2lkdGg6IDIycHg7XG5cdGhlaWdodDogMjJweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdCY6OmJlZm9yZSB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRiYWNrZ3JvdW5kOiAjZmY1ZTM5O1xuXHRcdG9wYWNpdHk6IC40O1xuXHR9XG5cblx0aW9uLWljb24ge1xuXHRcdGNvbG9yOiAjZmY1ZTM5O1xuXHRcdGZvbnQtc2l6ZTogLjk1cmVtO1xuXHRcdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRcdG1hcmdpbjogMDtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cblx0fVxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IC0zcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYXAgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5lYXJfbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHotaW5kZXg6IDk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5lYXJfbWUgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubmVhcl9tZS5hdG0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuLm5lYXJfbWUuYmFuayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xufVxuXG4ubXlfbG9jYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5teV9sb2NhdGlvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZjVlMzk7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5teV9sb2NhdGlvbiBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmY1ZTM5O1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/nearby-bank/nearby-bank.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/nearby-bank/nearby-bank.page.ts ***!
    \*************************************************/

  /*! exports provided: NearbyBankPage */

  /***/
  function srcAppNearbyBankNearbyBankPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NearbyBankPage", function () {
      return NearbyBankPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let NearbyBankPage = class NearbyBankPage {
      constructor() {}

      ngOnInit() {}

    };
    NearbyBankPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nearby-bank',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nearby-bank.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nearby-bank/nearby-bank.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nearby-bank.page.scss */
      "./src/app/nearby-bank/nearby-bank.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NearbyBankPage);
    /***/
  }
}]);
//# sourceMappingURL=nearby-bank-nearby-bank-module-es5.js.map