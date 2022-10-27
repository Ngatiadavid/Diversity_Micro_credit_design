(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verification-verification-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVerificationVerificationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{'verification' | translate}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"form\">\n        <h2 class=\"ion-text-center\">\n            <span class=\"animate__animated animate__fadeInUp\">{{'enter_otp_send_on' | translate}}</span>\n            <br>\n            <span class=\"animate__animated animate__fadeInUp\">+1 987 654 3210</span>\n        </h2>\n        <ion-list lines=\"none\">\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-input type=\"text\" placeholder=\"{{'enter_otp_code' | translate}}\"></ion-input>\n            </ion-item>\n            <ion-button size=\"large\" shape=\"block\" class=\"btn animate__animated animate__fadeInUp\" (click)=\"tabs()\">{{'continue' | translate}}</ion-button>\n        </ion-list>\n    </div>\n    <div class=\"thumb_impression ion-text-center animate__animated animate__fadeInUp\">\n        <h2>{{'verification_text' | translate}}<br>{{'verification_text_2' | translate}}</h2>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/verification/verification-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/verification/verification-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: VerificationPageRoutingModule */

  /***/
  function srcAppVerificationVerificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationPageRoutingModule", function () {
      return VerificationPageRoutingModule;
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


    var _verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./verification.page */
    "./src/app/verification/verification.page.ts");

    const routes = [{
      path: '',
      component: _verification_page__WEBPACK_IMPORTED_MODULE_3__["VerificationPage"]
    }];
    let VerificationPageRoutingModule = class VerificationPageRoutingModule {};
    VerificationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerificationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/verification/verification.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/verification/verification.module.ts ***!
    \*****************************************************/

  /*! exports provided: VerificationPageModule */

  /***/
  function srcAppVerificationVerificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function () {
      return VerificationPageModule;
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


    var _verification_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./verification-routing.module */
    "./src/app/verification/verification-routing.module.ts");
    /* harmony import */


    var _verification_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./verification.page */
    "./src/app/verification/verification.page.ts");

    let VerificationPageModule = class VerificationPageModule {};
    VerificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _verification_routing_module__WEBPACK_IMPORTED_MODULE_6__["VerificationPageRoutingModule"]],
      declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_7__["VerificationPage"]]
    })], VerificationPageModule);
    /***/
  },

  /***/
  "./src/app/verification/verification.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/verification/verification.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVerificationVerificationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form {\n  margin-top: 30px;\n}\n.form ion-list {\n  padding-bottom: 8px;\n}\n.form ion-list ion-item:last-of-type {\n  margin-bottom: 16px !important;\n}\n.form h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.95rem;\n  margin-bottom: 30px;\n}\n.thumb_impression {\n  padding-top: 30px;\n  width: calc(100% - 64px);\n  margin: 0 auto;\n}\n.thumb_impression h2 {\n  color: var(--text-dark);\n  margin: 0;\n  font-size: 0.95rem;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2F0aW9uL0M6XFxVc2Vyc1xcdXNlclxcUGljdHVyZXNcXGFscGhhdmVjdGFBcHAtbWFzdGVyXFxhbHBoYXZlY3RhQXBwLW1hc3Rlci9zcmNcXGFwcFxcdmVyaWZpY2F0aW9uXFx2ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC92ZXJpZmljYXRpb24vdmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURFWTtFQUNJLDhCQUFBO0FDQWhCO0FES0k7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSFI7QURRQTtFQUNJLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDTEo7QURPSTtFQUNJLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG5cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgIGZvbnQtc2l6ZTogLjk1cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cblxufVxuXG4udGh1bWJfaW1wcmVzc2lvbiB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgaDIge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IC45NXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG59IiwiLmZvcm0ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmZvcm0gaW9uLWxpc3Qge1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW06bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xufVxuLmZvcm0gaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGh1bWJfaW1wcmVzc2lvbiB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNjRweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnRodW1iX2ltcHJlc3Npb24gaDIge1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/verification/verification.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/verification/verification.page.ts ***!
    \***************************************************/

  /*! exports provided: VerificationPage */

  /***/
  function srcAppVerificationVerificationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationPage", function () {
      return VerificationPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let VerificationPage = class VerificationPage {
      constructor(navCtrl) {
        this.navCtrl = navCtrl;
      }

      ngOnInit() {}

      tabs() {
        this.navCtrl.navigateRoot(['./tabs']);
      }

    };

    VerificationPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }];

    VerificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verification',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verification.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verification.page.scss */
      "./src/app/verification/verification.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], VerificationPage);
    /***/
  }
}]);
//# sourceMappingURL=verification-verification-module-es5.js.map