(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loan-statement-loan-statement-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loan-statement/loan-statement.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loan-statement/loan-statement.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'loan_statement' | translate}}</ion-title>\n\t</ion-toolbar>\n\t<div class=\"banner\">\n\t\t<ion-card>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">Home Loan</h3>\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">1124 2541 2574</h2>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t<h4 class=\"animate__animated animate__fadeInUp\">{{'view_statement' | translate}}</h4>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'due_amount' | translate}}</h3>\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">$ 200000<sub>.00</sub></h2>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'emi' | translate}}</h3>\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">$ 1000<sub>.00</sub></h2>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-card>\n\t</div>\n</ion-header>\n\n<ion-content>\n\t<ion-list lines=\"none\">\n\t\t<h2>{{'recent_transactios' | translate}}</h2>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\n\n\t\t<h2>{{'yesterday_transactios' | translate}}</h2>\n\n\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\n\t</ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/loan-statement/loan-statement-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/loan-statement/loan-statement-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: LoanStatementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanStatementPageRoutingModule", function() { return LoanStatementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loan_statement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-statement.page */ "./src/app/loan-statement/loan-statement.page.ts");




const routes = [
    {
        path: '',
        component: _loan_statement_page__WEBPACK_IMPORTED_MODULE_3__["LoanStatementPage"]
    }
];
let LoanStatementPageRoutingModule = class LoanStatementPageRoutingModule {
};
LoanStatementPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoanStatementPageRoutingModule);



/***/ }),

/***/ "./src/app/loan-statement/loan-statement.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/loan-statement/loan-statement.module.ts ***!
  \*********************************************************/
/*! exports provided: LoanStatementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanStatementPageModule", function() { return LoanStatementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _loan_statement_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loan-statement-routing.module */ "./src/app/loan-statement/loan-statement-routing.module.ts");
/* harmony import */ var _loan_statement_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loan-statement.page */ "./src/app/loan-statement/loan-statement.page.ts");








let LoanStatementPageModule = class LoanStatementPageModule {
};
LoanStatementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _loan_statement_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoanStatementPageRoutingModule"]
        ],
        declarations: [_loan_statement_page__WEBPACK_IMPORTED_MODULE_7__["LoanStatementPage"]]
    })
], LoanStatementPageModule);



/***/ }),

/***/ "./src/app/loan-statement/loan-statement.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/loan-statement/loan-statement.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.banner {\n  background: var(--primary);\n  padding-bottom: 6px;\n  overflow: hidden;\n}\n\n.banner ion-card {\n  background: url('item_bg.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  border-radius: 10px;\n  padding: 15px 15px 10px 15px;\n  margin: 0 auto;\n  margin-bottom: 13px;\n  width: calc(100% - 25px);\n}\n\n.banner ion-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.3;\n}\n\n.banner ion-card ion-row {\n  margin: 0 -5px;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  padding-bottom: 10px;\n  position: relative;\n  z-index: 99;\n}\n\n.banner ion-card ion-row ion-col h3 {\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 7px;\n  color: var(--text-light);\n}\n\n.banner ion-card ion-row ion-col h2 {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  color: var(--white);\n}\n\n.banner ion-card ion-row ion-col h2 sub {\n  font-weight: 400;\n  font-size: 0.7rem;\n}\n\n.banner ion-card ion-row ion-col h4 {\n  color: var(--primary);\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: 0;\n}\n\nion-list {\n  width: calc(100% - 37px);\n  margin: 0 auto;\n  padding: 0;\n  background: none;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\nion-list ion-item {\n  padding: 0;\n  border-bottom: 1px solid #ccc !important;\n  padding-bottom: 10px;\n  margin-bottom: 13px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item .item_inner h3 {\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 0;\n  padding-bottom: 6px;\n}\n\nion-list ion-item .item_inner h4 {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 400;\n  margin: 0;\n}\n\nion-list ion-item .item_inner h4 span.end {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--red_color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hbi1zdGF0ZW1lbnQvQzpcXFVzZXJzXFx1c2VyXFxQaWN0dXJlc1xcYWxwaGF2ZWN0YUFwcC1tYXN0ZXJcXGFscGhhdmVjdGFBcHAtbWFzdGVyL3NyY1xcYXBwXFxsb2FuLXN0YXRlbWVudFxcbG9hbi1zdGF0ZW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9sb2FuLXN0YXRlbWVudC9sb2FuLXN0YXRlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQywwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRDs7QURFQTtFQUNDLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NEOztBRENDO0VBQ0MsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURDRTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDSDs7QURHRTtFQUNDLGNBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNESDs7QURLSTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0hMOztBRE1JO0VBQ0MsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDSkw7O0FETUs7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FDSk47O0FEUUk7RUFDQyxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDTkw7O0FEYUE7RUFDQyx3QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNWRDs7QURZQztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDVkY7O0FEYUM7RUFDQyxVQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDWEY7O0FEY0U7RUFDQyxXQUFBO0FDWkg7O0FEY0c7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNaSjs7QURlRztFQUNDLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNiSjs7QURnQks7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNkTiIsImZpbGUiOiJzcmMvYXBwL2xvYW4tc3RhdGVtZW50L2xvYW4tc3RhdGVtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcblx0cGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuXHR0b3A6IC0zcHg7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYW5uZXIge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcblx0cGFkZGluZy1ib3R0b206IDZweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRpb24tY2FyZCB7XG5cdFx0YmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pdGVtX2JnLnBuZycpO1xuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHRwYWRkaW5nOiAxNXB4IDE1cHggMTBweCAxNXB4O1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdG1hcmdpbi1ib3R0b206IDEzcHg7XG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xuXG5cdFx0Jjo6YmVmb3JlIHtcblx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0YmFja2dyb3VuZDogIzAwMDtcblx0XHRcdG9wYWNpdHk6IC4zO1xuXG5cdFx0fVxuXG5cdFx0aW9uLXJvdyB7XG5cdFx0XHRtYXJnaW46IDAgLTVweDtcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0ei1pbmRleDogOTk7XG5cblx0XHRcdGlvbi1jb2wge1xuXG5cdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDAuOHJlbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA3cHg7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aDIge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuM3JlbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXG5cdFx0XHRcdFx0c3ViIHtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDAuN3JlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoNCB7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogLjhyZW07XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuaW9uLWxpc3Qge1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMzdweCk7XG5cdG1hcmdpbjogMCBhdXRvOyBcblx0cGFkZGluZzogMDtcblx0YmFja2dyb3VuZDogbm9uZTtcblxuXHRoMiB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHRmb250LXNpemU6IC44NXJlbTtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0bWFyZ2luLXRvcDogMjBweDtcblx0fVxuXG5cdGlvbi1pdGVtIHtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG5cdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTNweDtcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHRcdC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XG5cdFx0LS1taW4taGVpZ2h0OiB1bnNldDtcblxuXG5cdFx0Lml0ZW1faW5uZXIge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdGgzIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiA2cHg7XG5cdFx0XHR9XG5cblx0XHRcdGg0IHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdFx0XHRmb250LXNpemU6IC44cmVtO1xuXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cblx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0Ji5lbmQge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuOTVyZW07XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLXJlZF9jb2xvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cbn1cbiIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IC0zcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYW5uZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5iYW5uZXIgaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9pdGVtX2JnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMTBweCAxNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xufVxuLmJhbm5lciBpb24tY2FyZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIG9wYWNpdHk6IDAuMztcbn1cbi5iYW5uZXIgaW9uLWNhcmQgaW9uLXJvdyB7XG4gIG1hcmdpbjogMCAtNXB4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xufVxuLmJhbm5lciBpb24tY2FyZCBpb24tcm93IGlvbi1jb2wgaDMge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbn1cbi5iYW5uZXIgaW9uLWNhcmQgaW9uLXJvdyBpb24tY29sIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuLmJhbm5lciBpb24tY2FyZCBpb24tcm93IGlvbi1jb2wgaDIgc3ViIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG59XG4uYmFubmVyIGlvbi1jYXJkIGlvbi1yb3cgaW9uLWNvbCBoNCB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWxpc3Qge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzdweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuaW9uLWxpc3QgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1taW4taGVpZ2h0OiB1bnNldDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDQge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoNCBzcGFuLmVuZCB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXJlZF9jb2xvcik7XG59Il19 */");

/***/ }),

/***/ "./src/app/loan-statement/loan-statement.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/loan-statement/loan-statement.page.ts ***!
  \*******************************************************/
/*! exports provided: LoanStatementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanStatementPage", function() { return LoanStatementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LoanStatementPage = class LoanStatementPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    list_of_deposites() {
        this.route.navigate(['./list-of-deposites']);
    }
};
LoanStatementPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoanStatementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loan-statement',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loan-statement.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loan-statement/loan-statement.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loan-statement.page.scss */ "./src/app/loan-statement/loan-statement.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoanStatementPage);



/***/ })

}]);
//# sourceMappingURL=loan-statement-loan-statement-module-es2015.js.map