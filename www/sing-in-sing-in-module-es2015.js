(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sing-in-sing-in-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sing-in/sing-in.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sing-in/sing-in.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            <span class=\"d-flex\" (click)=\"sign_up()\">\n                <span class=\"end\"> {{'new_user' | translate}}</span>\n            </span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <div class=\"banner\">\n        <h2 class=\"ion-text-center animate__animated animate__zoomIn\">\n            {{'app_title' | translate}}\n            <span>{{'app_title_2' | translate}}</span>\n        </h2>\n    </div>\n\n    <div class=\"form\">\n        <h2 class=\"ion-text-center animate__animated animate__fadeInUp\">{{'or_sign_in_with_customer_id' | translate}}</h2>\n        <ion-list lines=\"none\">\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-input type=\"email\" placeholder=\"{{'email_customer_id' | translate}}\"></ion-input>\n            </ion-item>\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-input type=\"text\" placeholder=\"{{'enter_mpin' | translate}}\"></ion-input>\n            </ion-item>\n            <ion-button size=\"large\" shape=\"block animate__animated animate__fadeInUp\" class=\"btn\" (click)=\"tabs()\">{{'sign_in' | translate}}</ion-button>\n        </ion-list>\n    </div>\n\n    <div class=\"thumb_impression ion-text-center\">\n        <h2 class=\"animate__animated animate__fadeInUp\">{{'or_scan_you_thump_to_continue' | translate}}</h2>\n        <div class=\"fingerprint animate__animated animate__zoomIn\">\n            <img src=\"assets/imgs/ic_thumb.png\">\n        </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/sing-in/sing-in-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sing-in/sing-in-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SingInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingInPageRoutingModule", function() { return SingInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sing_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sing-in.page */ "./src/app/sing-in/sing-in.page.ts");




const routes = [
    {
        path: '',
        component: _sing_in_page__WEBPACK_IMPORTED_MODULE_3__["SingInPage"]
    }
];
let SingInPageRoutingModule = class SingInPageRoutingModule {
};
SingInPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SingInPageRoutingModule);



/***/ }),

/***/ "./src/app/sing-in/sing-in.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sing-in/sing-in.module.ts ***!
  \*******************************************/
/*! exports provided: SingInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingInPageModule", function() { return SingInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sing_in_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sing-in-routing.module */ "./src/app/sing-in/sing-in-routing.module.ts");
/* harmony import */ var _sing_in_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sing-in.page */ "./src/app/sing-in/sing-in.page.ts");








let SingInPageModule = class SingInPageModule {
};
SingInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _sing_in_routing_module__WEBPACK_IMPORTED_MODULE_6__["SingInPageRoutingModule"]
        ],
        declarations: [_sing_in_page__WEBPACK_IMPORTED_MODULE_7__["SingInPage"]]
    })
], SingInPageModule);



/***/ }),

/***/ "./src/app/sing-in/sing-in.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sing-in/sing-in.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-title {\n  font-size: 1.15rem;\n  font-weight: 400;\n}\n\n.banner {\n  background: var(--primary);\n  height: 160px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n.banner h2 {\n  margin: 0;\n  color: var(--white);\n  align-self: center;\n  width: 100%;\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n\n.banner h2 span {\n  font-weight: 400;\n}\n\n.form {\n  margin-top: 30px;\n}\n\n.form ion-list {\n  padding-bottom: 8px;\n}\n\n.form ion-list ion-item:last-of-type {\n  margin-bottom: 16px !important;\n}\n\n.form h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.95rem;\n  margin-bottom: 30px;\n}\n\n.thumb_impression {\n  padding-top: 40px;\n  width: calc(100% - 64px);\n  margin: 0 auto;\n}\n\n.thumb_impression h2 {\n  color: var(--text-dark);\n  margin: 0;\n  font-size: 0.95rem;\n  margin-bottom: 30px;\n}\n\n.thumb_impression .fingerprint {\n  width: 47px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZy1pbi9DOlxcVXNlcnNcXHVzZXJcXFBpY3R1cmVzXFxhbHBoYXZlY3RhQXBwLW1hc3RlclxcYWxwaGF2ZWN0YUFwcC1tYXN0ZXIvc3JjXFxhcHBcXHNpbmctaW5cXHNpbmctaW4ucGFnZS5zY3NzIiwic3JjL2FwcC9zaW5nLWluL3NpbmctaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsMEJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NEOztBRENDO0VBQ0MsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENFO0VBQ0MsZ0JBQUE7QUNDSDs7QURJQTtFQUNDLGdCQUFBO0FDREQ7O0FER0M7RUFDQyxtQkFBQTtBQ0RGOztBREdZO0VBQ0ksOEJBQUE7QUNEaEI7O0FETUM7RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSkY7O0FEU0E7RUFDQyxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQ05EOztBRFFDO0VBQ0MsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ05GOztBRFNDO0VBQ0MsV0FBQTtFQUNBLGNBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL3NpbmctaW4vc2luZy1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG5cdGZvbnQtc2l6ZTogMS4xNXJlbTtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmJhbm5lciB7XG5cdGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuXHRoZWlnaHQ6IDE2MHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuXHRoMiB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cdFx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGZvbnQtc2l6ZTogMS42cmVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cblx0XHRzcGFuIHtcblx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0fVxuXHR9XG59XG5cbi5mb3JtIHtcblx0bWFyZ2luLXRvcDogMzBweDtcblxuXHRpb24tbGlzdCB7XG5cdFx0cGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblx0fVxuXG5cdGgyIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdGZvbnQtc2l6ZTogLjk1cmVtO1xuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdH1cblxufVxuXG4udGh1bWJfaW1wcmVzc2lvbiB7XG5cdHBhZGRpbmctdG9wOiA0MHB4O1xuXHR3aWR0aDogY2FsYygxMDAlIC0gNjRweCk7XG5cdG1hcmdpbjogMCBhdXRvO1xuXG5cdGgyIHtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcblx0XHRtYXJnaW46IDA7XG5cdFx0Zm9udC1zaXplOiAuOTVyZW07XG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0fVxuXG5cdC5maW5nZXJwcmludCB7XG5cdFx0d2lkdGg6IDQ3cHg7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdH1cblxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uYmFubmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGhlaWdodDogMTYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmJhbm5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYmFubmVyIGgyIHNwYW4ge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZm9ybSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uZm9ybSBpb24tbGlzdCB7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24taXRlbTpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4uZm9ybSBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi50aHVtYl9pbXByZXNzaW9uIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4udGh1bWJfaW1wcmVzc2lvbiBoMiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi50aHVtYl9pbXByZXNzaW9uIC5maW5nZXJwcmludCB7XG4gIHdpZHRoOiA0N3B4O1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sing-in/sing-in.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sing-in/sing-in.page.ts ***!
  \*****************************************/
/*! exports provided: SingInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingInPage", function() { return SingInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SingInPage = class SingInPage {
    constructor(navCtrl, route) {
        this.navCtrl = navCtrl;
        this.route = route;
    }
    ngOnInit() {
    }
    tabs() {
        this.navCtrl.navigateRoot(['./tabs']);
    }
    sign_up() {
        this.route.navigate(['./sign-up']);
    }
};
SingInPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SingInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sing-in',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sing-in.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sing-in/sing-in.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sing-in.page.scss */ "./src/app/sing-in/sing-in.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SingInPage);



/***/ })

}]);
//# sourceMappingURL=sing-in-sing-in-module-es2015.js.map