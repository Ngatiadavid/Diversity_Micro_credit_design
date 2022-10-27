(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-beneficiary-add-beneficiary-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-beneficiary/add-beneficiary.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-beneficiary/add-beneficiary.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddBeneficiaryAddBeneficiaryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'add_beneficiary' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"form\">\n\t\t<ion-list lines=\"none\">\n\t\t\t<h2>{{'baneficiary_bank' | translate}}</h2>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-select mode=\"md\" [(ngModel)]=\"from_account\" interface=\"action-sheet\">\n\t\t\t\t\t<ion-select-option value=\"1\">SB 1144 2254 2478 2145</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"2\">SB 2244 1154 6778 7745</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"3\">SB 8844 5654 3278 1045</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-item>\n\n\t\t\t<h2>{{'baneficiary_full_name' | translate}}</h2>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-input type=\"name\" value=\"Sam Smith\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t\t<h2>{{'baneficiary_account_number' | translate}}</h2>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-input type=\"text\" value=\"SB 1144 2254 2478 2145\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<h2>{{'transfer_limit' | translate}}</h2>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-input type=\"text\" value=\"$ 500.00\"></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</div>\n</ion-content>\n \n<ion-footer class=\"ion-no-border\">\n\t<ion-button size=\"large\" shape=\"block\" class=\"btn\">{{'submit' | translate}}</ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/add-beneficiary/add-beneficiary-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/add-beneficiary/add-beneficiary-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: AddBeneficiaryPageRoutingModule */

  /***/
  function srcAppAddBeneficiaryAddBeneficiaryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddBeneficiaryPageRoutingModule", function () {
      return AddBeneficiaryPageRoutingModule;
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


    var _add_beneficiary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-beneficiary.page */
    "./src/app/add-beneficiary/add-beneficiary.page.ts");

    const routes = [{
      path: '',
      component: _add_beneficiary_page__WEBPACK_IMPORTED_MODULE_3__["AddBeneficiaryPage"]
    }];
    let AddBeneficiaryPageRoutingModule = class AddBeneficiaryPageRoutingModule {};
    AddBeneficiaryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddBeneficiaryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-beneficiary/add-beneficiary.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/add-beneficiary/add-beneficiary.module.ts ***!
    \***********************************************************/

  /*! exports provided: AddBeneficiaryPageModule */

  /***/
  function srcAppAddBeneficiaryAddBeneficiaryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddBeneficiaryPageModule", function () {
      return AddBeneficiaryPageModule;
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


    var _add_beneficiary_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-beneficiary-routing.module */
    "./src/app/add-beneficiary/add-beneficiary-routing.module.ts");
    /* harmony import */


    var _add_beneficiary_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./add-beneficiary.page */
    "./src/app/add-beneficiary/add-beneficiary.page.ts");

    let AddBeneficiaryPageModule = class AddBeneficiaryPageModule {};
    AddBeneficiaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _add_beneficiary_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddBeneficiaryPageRoutingModule"]],
      declarations: [_add_beneficiary_page__WEBPACK_IMPORTED_MODULE_7__["AddBeneficiaryPage"]]
    })], AddBeneficiaryPageModule);
    /***/
  },

  /***/
  "./src/app/add-beneficiary/add-beneficiary.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/add-beneficiary/add-beneficiary.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddBeneficiaryAddBeneficiaryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form {\n  width: calc(100% - 32px);\n  margin-top: 30px;\n}\n.form ion-list h2 {\n  color: var(--text-black) !important;\n  font-size: 1.1rem !important;\n  letter-spacing: 0px;\n  font-weight: 600 !important;\n  margin: 0;\n  margin-bottom: 7px;\n}\n.form ion-list h2 span {\n  color: var(--primary);\n  font-size: 0.9rem;\n}\n.form ion-list ion-item {\n  background: var(--white);\n  border-radius: 0px;\n  padding: 0;\n  margin-bottom: 35px;\n}\n.form ion-list ion-item.item-select ion-select {\n  --placeholder-color: var(--text-light) !important;\n  --placeholder-opacity: 1;\n  color: var(--text-light);\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\n.form ion-list ion-item.item-input ion-input {\n  color: var(--text-light) !important;\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px !important;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\nion-footer {\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWJlbmVmaWNpYXJ5L0M6XFxVc2Vyc1xcdXNlclxcUGljdHVyZXNcXGFscGhhdmVjdGFBcHAtbWFzdGVyXFxhbHBoYXZlY3RhQXBwLW1hc3Rlci9zcmNcXGFwcFxcYWRkLWJlbmVmaWNpYXJ5XFxhZGQtYmVuZWZpY2lhcnkucGFnZS5zY3NzIiwic3JjL2FwcC9hZGQtYmVuZWZpY2lhcnkvYWRkLWJlbmVmaWNpYXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHdCQUFBO0VBQ0EsZ0JBQUE7QUNDRDtBREVFO0VBQ0MsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNBSDtBREVHO0VBQ0MscUJBQUE7RUFDQSxpQkFBQTtBQ0FKO0FESUU7RUFDQyx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDRkg7QURLSTtFQUNDLGlEQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUNITDtBRFFJO0VBQ0MsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQ05MO0FEYUE7RUFDQyxhQUFBO0FDVkQiLCJmaWxlIjoic3JjL2FwcC9hZGQtYmVuZWZpY2lhcnkvYWRkLWJlbmVmaWNpYXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuXHRtYXJnaW4tdG9wOiAzMHB4O1xuXG5cdGlvbi1saXN0IHtcblx0XHRoMiB7XG5cdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1ibGFjaykgIWltcG9ydGFudDtcblx0XHRcdGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogN3B4O1xuXG5cdFx0XHRzcGFuIHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xuXHRcdFx0XHRmb250LXNpemU6IC45cmVtO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlvbi1pdGVtIHtcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDBweDtcblx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAzNXB4O1xuXG5cdFx0XHQmLml0ZW0tc2VsZWN0IHtcblx0XHRcdFx0aW9uLXNlbGVjdCB7XG5cdFx0XHRcdFx0LS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcblx0XHRcdFx0XHQtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogLjhyZW0gIWltcG9ydGFudDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMHB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMThweDtcblx0XHRcdFx0XHRtaW4taGVpZ2h0OiA0MHB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDdweDtcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ji5pdGVtLWlucHV0IHtcblx0XHRcdFx0aW9uLWlucHV0IHtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcblx0XHRcdFx0XHRmb250LXNpemU6IC44cmVtICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjBweDtcblx0XHRcdFx0XHRwYWRkaW5nOiAwIDE4cHghaW1wb3J0YW50O1xuXHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDQwcHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogN3B4O1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5pb24tZm9vdGVyIHtcblx0cGFkZGluZzogMTZweDtcblxufSIsIi5mb3JtIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaDIge1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjaykgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cbi5mb3JtIGlvbi1saXN0IGgyIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1pdGVtLml0ZW0tc2VsZWN0IGlvbi1zZWxlY3Qge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBwYWRkaW5nOiAwIDE4cHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0uaXRlbS1pbnB1dCBpb24taW5wdXQge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBwYWRkaW5nOiAwIDE4cHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBwYWRkaW5nOiAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/add-beneficiary/add-beneficiary.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/add-beneficiary/add-beneficiary.page.ts ***!
    \*********************************************************/

  /*! exports provided: AddBeneficiaryPage */

  /***/
  function srcAppAddBeneficiaryAddBeneficiaryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddBeneficiaryPage", function () {
      return AddBeneficiaryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AddBeneficiaryPage = class AddBeneficiaryPage {
      constructor() {
        this.from_account = "1";
      }

      ngOnInit() {}

    };
    AddBeneficiaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-beneficiary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-beneficiary.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-beneficiary/add-beneficiary.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-beneficiary.page.scss */
      "./src/app/add-beneficiary/add-beneficiary.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AddBeneficiaryPage);
    /***/
  }
}]);
//# sourceMappingURL=add-beneficiary-add-beneficiary-module-es5.js.map