(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n\t<ion-tab-bar class=\"animate__animated animate__fadeInUp\" slot=\"bottom\">\n\t\t<ion-tab-button tab=\"home\">\n\t\t\t<div class=\"icon_box\">\n\t\t\t\t<img src=\"assets/imgs/ic_banking.png\" class=\"before\">\n\t\t\t\t<img src=\"assets/imgs/ic_banking_act.png\" class=\"after\">\n\t\t\t</div>\n\t\t\t<ion-label>{{'banking' | translate}}</ion-label>\n\t\t</ion-tab-button>\n\n\t\t<ion-tab-button tab=\"transactions\">\n\t\t\t<div class=\"icon_box\">\n\t\t\t\t<img src=\"assets/imgs/ic_transaction.png\" class=\"before\">\n\t\t\t\t<img src=\"assets/imgs/ic_transaction_act.png\" class=\"after\">\n\t\t\t</div>\n\t\t\t<ion-label>{{'transactions' | translate}}</ion-label>\n\t\t</ion-tab-button>\n\n\t\t<ion-tab-button tab=\"account\">\n\t\t\t<div class=\"icon_box\">\n\t\t\t\t<img src=\"assets/imgs/ic_accounts.png\" class=\"before\">\n\t\t\t\t<img src=\"assets/imgs/ic_accounts_act.png\" class=\"after\">\n\t\t\t</div>\n\t\t\t<ion-label>{{'account' | translate}}</ion-label>\n\t\t</ion-tab-button>\n\t</ion-tab-bar>\n\n</ion-tabs>");

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'transactions',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | transactions-transactions-module */ "transactions-transactions-module").then(__webpack_require__.bind(null, /*! ../transactions/transactions.module */ "./src/app/transactions/transactions.module.ts")).then(m => m.TransactionsPageModule)
                    }
                ]
            },
            {
                path: 'account',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ../account/account.module */ "./src/app/account/account.module.ts")).then(m => m.AccountPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_6__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-bar {\n  --background: #000 !important;\n  --animate-duration: .4s!important;\n}\nion-tab-bar ion-tab-button {\n  position: relative;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\nion-tab-bar ion-tab-button .icon_box {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  margin: 0 auto;\n}\nion-tab-bar ion-tab-button .icon_box img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 0;\n  height: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\nion-tab-bar ion-tab-button .icon_box img.before {\n  width: 24px;\n  height: 24px;\n}\nion-tab-bar ion-tab-button ion-label {\n  color: var(--white);\n  font-weight: 400;\n  letter-spacing: 0;\n  font-size: 0.55rem;\n  padding: 0;\n  margin: 0;\n}\nion-tab-bar ion-tab-button.tab-selected .icon_box img.before {\n  width: 0;\n  height: 0;\n}\nion-tab-bar ion-tab-button.tab-selected .icon_box img.after {\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcVXNlcnNcXHVzZXJcXFBpY3R1cmVzXFxhbHBoYXZlY3RhQXBwLW1hc3RlclxcYWxwaGF2ZWN0YUFwcC1tYXN0ZXIvc3JjXFxhcHBcXHRhYnNcXHRhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0MsNkJBQUE7RUFDQSxpQ0FBQTtBQ0NGO0FEQUU7RUFDQyxrQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNFSDtBREFHO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNFSjtBREFJO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ0VMO0FEQUs7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0VOO0FESUc7RUFDQyxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDRko7QURVTTtFQUNDLFFBQUE7RUFDQSxTQUFBO0FDUlA7QURXTTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDVFAiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHRpb24tdGFiLWJhciB7XG5cdFx0LS1iYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XG5cdFx0LS1hbmltYXRlLWR1cmF0aW9uOiAuNHMhaW1wb3J0YW50O1xuXHRcdGlvbi10YWItYnV0dG9uIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHRyYW5zaXRpb246IGFsbCAuNHM7XG5cblx0XHRcdC5pY29uX2JveCB7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0d2lkdGg6IDMwcHg7XG5cdFx0XHRcdGhlaWdodDogMzBweDtcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cblx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHR3aWR0aDogMDtcblx0XHRcdFx0XHRoZWlnaHQ6IDA7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIC4zcztcblxuXHRcdFx0XHRcdCYuYmVmb3JlIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAyNHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyNHB4XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aW9uLWxhYmVsIHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDA7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMC41NXJlbTtcblx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXG5cdFx0XHR9XG5cblx0XHRcdCYudGFiLXNlbGVjdGVkIHtcblx0XHRcdFx0Lmljb25fYm94IHtcblx0XHRcdFx0XHRpbWcge1xuXG5cdFx0XHRcdFx0XHQmLmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAwO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCYuYWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMjRweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyNHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuIiwiaW9uLXRhYi1iYXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMhaW1wb3J0YW50O1xufVxuaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24gLmljb25fYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbmlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIC5pY29uX2JveCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbmlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIC5pY29uX2JveCBpbWcuYmVmb3JlIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbmlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXNpemU6IDAuNTVyZW07XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCAuaWNvbl9ib3ggaW1nLmJlZm9yZSB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5pb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgLmljb25fYm94IGltZy5hZnRlciB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map