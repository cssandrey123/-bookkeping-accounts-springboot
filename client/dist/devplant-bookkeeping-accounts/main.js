(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _screens_landing_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/landing-screen */ "./src/app/screens/landing-screen/index.ts");
/* harmony import */ var _screens_transaction_rules_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/transaction-rules-screen */ "./src/app/screens/transaction-rules-screen/index.ts");
/* harmony import */ var _screens_validate_transactions_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/validate-transactions-screen */ "./src/app/screens/validate-transactions-screen/index.ts");
/* harmony import */ var _screens_accounts_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/accounts-screen */ "./src/app/screens/accounts-screen/index.ts");








const routes = [
    {
        path: '',
        component: _screens_landing_screen__WEBPACK_IMPORTED_MODULE_2__["LandingScreenComponent"],
        children: [
            {
                path: '',
                component: _screens_accounts_screen__WEBPACK_IMPORTED_MODULE_5__["AccountsScreenComponent"]
            },
            {
                path: 'rules',
                component: _screens_transaction_rules_screen__WEBPACK_IMPORTED_MODULE_3__["TransactionRulesScreenComponent"]
            },
            {
                path: 'validate',
                component: _screens_validate_transactions_screen__WEBPACK_IMPORTED_MODULE_4__["ValidateTransactionsScreenComponent"]
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'devplant-bookkeeping-accounts';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _screens_validate_transactions_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/validate-transactions-screen */ "./src/app/screens/validate-transactions-screen/index.ts");
/* harmony import */ var _screens_transaction_rules_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/transaction-rules-screen */ "./src/app/screens/transaction-rules-screen/index.ts");
/* harmony import */ var _screens_accounts_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screens/accounts-screen */ "./src/app/screens/accounts-screen/index.ts");
/* harmony import */ var _screens_landing_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screens/landing-screen */ "./src/app/screens/landing-screen/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _screens_validate_transactions_screen__WEBPACK_IMPORTED_MODULE_4__["ValidateTransactionsScreenModule"],
            _screens_transaction_rules_screen__WEBPACK_IMPORTED_MODULE_5__["TransactionRulesScreenModule"],
            _screens_accounts_screen__WEBPACK_IMPORTED_MODULE_6__["AccountsScreenModule"],
            _screens_landing_screen__WEBPACK_IMPORTED_MODULE_7__["LandingScreenModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
        _screens_validate_transactions_screen__WEBPACK_IMPORTED_MODULE_4__["ValidateTransactionsScreenModule"],
        _screens_transaction_rules_screen__WEBPACK_IMPORTED_MODULE_5__["TransactionRulesScreenModule"],
        _screens_accounts_screen__WEBPACK_IMPORTED_MODULE_6__["AccountsScreenModule"],
        _screens_landing_screen__WEBPACK_IMPORTED_MODULE_7__["LandingScreenModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                    _screens_validate_transactions_screen__WEBPACK_IMPORTED_MODULE_4__["ValidateTransactionsScreenModule"],
                    _screens_transaction_rules_screen__WEBPACK_IMPORTED_MODULE_5__["TransactionRulesScreenModule"],
                    _screens_accounts_screen__WEBPACK_IMPORTED_MODULE_6__["AccountsScreenModule"],
                    _screens_landing_screen__WEBPACK_IMPORTED_MODULE_7__["LandingScreenModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/common/components/breadcrumbs/breadcrumbs.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/common/components/breadcrumbs/breadcrumbs.component.ts ***!
  \************************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function (a0) { return [a0]; };
function BreadcrumbsComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, breadcrumb_r1.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r1.name);
} }
class BreadcrumbsComponent {
    constructor() {
        this.breadcrumbs = [];
    }
    ngOnInit() {
    }
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(); };
BreadcrumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbsComponent, selectors: [["app-breadcrumbs"]], inputs: { breadcrumbs: "breadcrumbs" }, decls: 2, vars: 1, consts: [[1, "breadcrumbs-wrapper"], ["class", "breadcrumb-element", 4, "ngFor", "ngForOf"], [1, "breadcrumb-element"], [3, "routerLink"], [1, "separator"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbsComponent_span_1_Template, 5, 4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".color-green-1[_ngcontent-%COMP%] {\n  color: #30c45d;\n}\n\n.background-green-1[_ngcontent-%COMP%] {\n  background: #30c45d;\n  color: #FFFFFF;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n}\n\n.box-1[_ngcontent-%COMP%] {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  background: #f2f2f2;\n  padding: 20px;\n}\n\n.breadcrumbs-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.breadcrumbs-wrapper[_ngcontent-%COMP%]   .breadcrumb-element[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #30c45d;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.breadcrumbs-wrapper[_ngcontent-%COMP%]   .breadcrumb-element[_ngcontent-%COMP%]:last-child   .separator[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3N0eWxlcy9jb21tb24uc2NzcyIsInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSxjQU5RO0FDRlY7O0FEV0E7RUFDRSxtQkFWUTtFQVdSLGNBQUE7QUNSRjs7QURXQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNSRjs7QURXQTtFQUNFLHFEQUFBO0VBQ0EsbUJBeEJPO0VBeUJQLGFBQUE7QUNSRjs7QUFqQkE7RUFDRSxtQkFBQTtBQW9CRjs7QUFsQkU7RUFDRSxjREZNO0VDR04saUJBQUE7RUFDQSxlQUFBO0FBb0JKOztBQWpCSTtFQUNFLGFBQUE7QUFtQk4iLCJmaWxlIjoic3JjL2FwcC9jb21tb24vY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vVmFyaWFibGVzXG5cbiRHUkFZLTE6ICNmMmYyZjI7XG4kR1JBWS0yOiAjZmFmYWZhO1xuJEdSRUVOLTE6ICMzMGM0NWQ7XG5cblxuLy9DbGFzc2VzXG5cbi5jb2xvci1ncmVlbi0xIHtcbiAgY29sb3I6ICRHUkVFTi0xO1xufVxuXG4uYmFja2dyb3VuZC1ncmVlbi0xIHtcbiAgYmFja2dyb3VuZDogJEdSRUVOLTE7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDEgYXV0bztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJveC0xIHtcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XG4gIGJhY2tncm91bmQ6ICRHUkFZLTE7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvY29tbW9uJztcblxuLmJyZWFkY3J1bWJzLXdyYXBwZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gIC5icmVhZGNydW1iLWVsZW1lbnQgYSB7XG4gICAgY29sb3I6ICRHUkVFTi0xO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuYnJlYWRjcnVtYi1lbGVtZW50Omxhc3QtY2hpbGQge1xuICAgIC5zZXBhcmF0b3Ige1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumbs',
                templateUrl: './breadcrumbs.component.html',
                styleUrls: ['./breadcrumbs.component.scss']
            }]
    }], function () { return []; }, { breadcrumbs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/common/components/components.module.ts":
/*!********************************************************!*\
  !*** ./src/app/common/components/components.module.ts ***!
  \********************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _error_viewer_error_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-viewer/error-viewer.component */ "./src/app/common/components/error-viewer/error-viewer.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ "./src/app/common/components/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_error_viewer_error_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ErrorViewerComponent"],
        _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]], imports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_error_viewer_error_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ErrorViewerComponent"],
        _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _error_viewer_error_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ErrorViewerComponent"],
                    _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]
                ],
                imports: [
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
                ],
                exports: [
                    _error_viewer_error_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ErrorViewerComponent"],
                    _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/common/components/error-viewer/error-viewer.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/common/components/error-viewer/error-viewer.component.ts ***!
  \**************************************************************************/
/*! exports provided: ErrorViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorViewerComponent", function() { return ErrorViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/app/common/constants.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ErrorViewerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, "\n");
} }
class ErrorViewerComponent {
    constructor() {
        this.errorMessage = '';
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        var _a;
        if ((_a = changes.errors) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.updateErrorMessage(changes.errors.currentValue);
        }
    }
    updateErrorMessage(validationErrors) {
        for (const errorKey of Object.keys(_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR_MESSAGES"])) {
            if (errorKey in validationErrors) {
                this.errorMessage = _constants__WEBPACK_IMPORTED_MODULE_1__["ERROR_MESSAGES"][errorKey];
                break;
            }
        }
    }
}
ErrorViewerComponent.ɵfac = function ErrorViewerComponent_Factory(t) { return new (t || ErrorViewerComponent)(); };
ErrorViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorViewerComponent, selectors: [["app-error-viewer"]], inputs: { errors: "errors" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function ErrorViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ErrorViewerComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2Vycm9yLXZpZXdlci9lcnJvci12aWV3ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-viewer',
                templateUrl: './error-viewer.component.html',
                styleUrls: ['./error-viewer.component.scss']
            }]
    }], function () { return []; }, { errors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/common/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/common/components/index.ts ***!
  \********************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/components.module */ "./src/app/common/components/components.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return _components_components_module__WEBPACK_IMPORTED_MODULE_0__["ComponentsModule"]; });




/***/ }),

/***/ "./src/app/common/constants.ts":
/*!*************************************!*\
  !*** ./src/app/common/constants.ts ***!
  \*************************************/
/*! exports provided: ACCOUNTS_SCREEN_MESSAGE, ERROR_MESSAGES, MOCK_RULES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNTS_SCREEN_MESSAGE", function() { return ACCOUNTS_SCREEN_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_MESSAGES", function() { return ERROR_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_RULES", function() { return MOCK_RULES; });
const ACCOUNTS_SCREEN_MESSAGE = {
    saved_accounts: 'You currently have {} accounts saved. What you want to do next?',
    unsaved_accounts: 'I can see that you didn\'t added any accounts yet. Please add some accounts before you do any operation'
};
const ERROR_MESSAGES = {
    required: 'This field is required',
    invalidAccount: 'You need to pick an account from the list',
    differentAccount: 'Credit account and debit account should not be the same'
};
const MOCK_RULES = [
    {
        id: 1,
        debitAccount: '1011',
        creditAccount: '1012',
        description: 'Registering acquired goods from the supplier'
    },
    {
        id: 2,
        debitAccount: '1011',
        creditAccount: '1016',
        description: 'Registering alimentary goods from a local business. Goods needs to be eco'
    },
    {
        id: 3,
        debitAccount: '1011',
        creditAccount: '1044',
        description: 'Registering material goods from a charity organisation. The materials value should be under 100.000$'
    },
    {
        id: 4,
        debitAccount: '1044',
        creditAccount: '1012',
        description: 'Moving goods from alimentary department to the IT department'
    },
    {
        id: 5,
        debitAccount: '1044',
        creditAccount: '1011',
        description: 'For taxes purposes'
    },
    {
        id: 6,
        debitAccount: '121',
        creditAccount: '131',
        description: 'Money loan to one of the entities registered in the business'
    },
    {
        id: 7,
        debitAccount: '133',
        creditAccount: '131',
        description: 'To pay for the consumables from production '
    },
    {
        id: 8,
        debitAccount: '1511',
        creditAccount: '1512',
        description: 'Payment of annual interest on loans for production machinery'
    },
    {
        id: 9,
        debitAccount: '1511',
        creditAccount: '1516',
        description: 'Donations to charitiesr'
    },
    {
        id: 10,
        debitAccount: '1614',
        creditAccount: '1617',
        description: 'Improving anti-pollution systems'
    },
    {
        id: 11,
        debitAccount: '1682',
        creditAccount: '1685',
        description: 'Registering acquired gods from the supplier'
    }
];


/***/ }),

/***/ "./src/app/common/index.ts":
/*!*********************************!*\
  !*** ./src/app/common/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/app/common/constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCOUNTS_SCREEN_MESSAGE", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["ACCOUNTS_SCREEN_MESSAGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_MESSAGES", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["ERROR_MESSAGES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MOCK_RULES", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["MOCK_RULES"]; });

/* harmony import */ var _services_accounts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/accounts.service */ "./src/app/common/services/accounts.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return _services_accounts_service__WEBPACK_IMPORTED_MODULE_1__["AccountsService"]; });

/* harmony import */ var _services_transaction_rules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/transaction-rules.service */ "./src/app/common/services/transaction-rules.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionRulesService", function() { return _services_transaction_rules_service__WEBPACK_IMPORTED_MODULE_2__["TransactionRulesService"]; });

/* harmony import */ var _models_account_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/account.model */ "./src/app/common/models/account.model.ts");
/* harmony import */ var _models_account_model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models_account_model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models_account_model__WEBPACK_IMPORTED_MODULE_3__) if(["ACCOUNTS_SCREEN_MESSAGE","ERROR_MESSAGES","MOCK_RULES","AccountsService","TransactionRulesService","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models_account_model__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _models_transaction_rule_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/transaction-rule.model */ "./src/app/common/models/transaction-rule.model.ts");
/* harmony import */ var _models_transaction_rule_model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_models_transaction_rule_model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models_transaction_rule_model__WEBPACK_IMPORTED_MODULE_4__) if(["ACCOUNTS_SCREEN_MESSAGE","ERROR_MESSAGES","MOCK_RULES","AccountsService","TransactionRulesService","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models_transaction_rule_model__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/index */ "./src/app/common/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return _components_index__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]; });

/* harmony import */ var _validators_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validators/index */ "./src/app/common/validators/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differentValuesValidator", function() { return _validators_index__WEBPACK_IMPORTED_MODULE_6__["differentValuesValidator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accountValidator", function() { return _validators_index__WEBPACK_IMPORTED_MODULE_6__["accountValidator"]; });










/***/ }),

/***/ "./src/app/common/models/account.model.ts":
/*!************************************************!*\
  !*** ./src/app/common/models/account.model.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/common/models/transaction-rule.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/models/transaction-rule.model.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/common/services/accounts.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/services/accounts.service.ts ***!
  \*****************************************************/
/*! exports provided: AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return AccountsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-csv-parser */ "./node_modules/ngx-csv-parser/__ivy_ngcc__/fesm2015/ngx-csv-parser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class AccountsService {
    constructor(ngxCsvParser) {
        this.ngxCsvParser = ngxCsvParser;
    }
    parseCSV(file) {
        return this.ngxCsvParser.parse(file, { header: false, delimiter: ',' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((files) => {
            if (files instanceof ngx_csv_parser__WEBPACK_IMPORTED_MODULE_1__["NgxCSVParserError"]) {
                return null;
            }
            else {
                return files.map(rowFile => {
                    return {
                        id: rowFile[0],
                        name: rowFile[1]
                    };
                });
            }
        }));
    }
    saveAccounts(accounts) {
        localStorage.setItem('saved_accounts', JSON.stringify(accounts));
    }
    getAccounts() {
        return JSON.parse(localStorage.getItem('saved_accounts'));
    }
}
AccountsService.ɵfac = function AccountsService_Factory(t) { return new (t || AccountsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_csv_parser__WEBPACK_IMPORTED_MODULE_1__["NgxCsvParser"])); };
AccountsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountsService, factory: AccountsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_csv_parser__WEBPACK_IMPORTED_MODULE_1__["NgxCsvParser"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/services/transaction-rules.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/common/services/transaction-rules.service.ts ***!
  \**************************************************************/
/*! exports provided: TransactionRulesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionRulesService", function() { return TransactionRulesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/app/common/constants.ts");




class TransactionRulesService {
    constructor() {
        this.allRules = [];
        this.rulesChangeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    getRules() {
        if (!this.allRules || this.allRules.length === 0) {
            this.allRules = this._getRules();
        }
        this.rulesChangeEvent.next(this.allRules);
        return this.rulesChangeEvent;
    }
    addRule(rule) {
        this.allRules.push(rule);
        this._saveRules(this.allRules);
        this.rulesChangeEvent.next(this.allRules);
    }
    editRule(editedRule) {
        const ruleIndex = this.allRules.findIndex(rule => rule.id === editedRule.id);
        this.allRules[ruleIndex] = editedRule;
        this._saveRules(this.allRules);
        this.rulesChangeEvent.next(this.allRules);
    }
    deleteRule(rule) {
        this.allRules = this.allRules.filter(filteredRule => filteredRule.id !== rule.id);
        this._saveRules(this.allRules);
        this.rulesChangeEvent.next(this.allRules);
    }
    addMockedRules() {
        this.allRules = _constants__WEBPACK_IMPORTED_MODULE_2__["MOCK_RULES"];
        this._saveRules(this.allRules);
        this.rulesChangeEvent.next(this.allRules);
    }
    _saveRules(rules) {
        localStorage.setItem('transaction_rules', JSON.stringify(rules));
    }
    _getRules() {
        return JSON.parse(localStorage.getItem('transaction_rules')) || [];
    }
}
TransactionRulesService.ɵfac = function TransactionRulesService_Factory(t) { return new (t || TransactionRulesService)(); };
TransactionRulesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransactionRulesService, factory: TransactionRulesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionRulesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/common/validators/custom-validators.ts":
/*!********************************************************!*\
  !*** ./src/app/common/validators/custom-validators.ts ***!
  \********************************************************/
/*! exports provided: differentValuesValidator, accountValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "differentValuesValidator", function() { return differentValuesValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountValidator", function() { return accountValidator; });
function differentValuesValidator(firstControlName) {
    return (secondControl) => {
        var _a;
        if (!((_a = secondControl.parent) === null || _a === void 0 ? void 0 : _a.get(firstControlName))) {
            return null;
        }
        const firstControl = secondControl.parent.get(firstControlName);
        if (firstControl.disabled) {
            return null;
        }
        let isDifferent = true;
        if ((firstControl === null || firstControl === void 0 ? void 0 : firstControl.value) !== '' && (secondControl === null || secondControl === void 0 ? void 0 : secondControl.value) !== '' && (firstControl === null || firstControl === void 0 ? void 0 : firstControl.value) === (secondControl === null || secondControl === void 0 ? void 0 : secondControl.value)) {
            isDifferent = false;
        }
        return !isDifferent ? { differentAccount: false } : null;
    };
}
function accountValidator(allAccounts) {
    return (control) => {
        const isIn = allAccounts.some(account => account.id === control.value);
        return !isIn ? { invalidAccount: true } : null;
    };
}


/***/ }),

/***/ "./src/app/common/validators/index.ts":
/*!********************************************!*\
  !*** ./src/app/common/validators/index.ts ***!
  \********************************************/
/*! exports provided: differentValuesValidator, accountValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-validators */ "./src/app/common/validators/custom-validators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "differentValuesValidator", function() { return _custom_validators__WEBPACK_IMPORTED_MODULE_0__["differentValuesValidator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accountValidator", function() { return _custom_validators__WEBPACK_IMPORTED_MODULE_0__["accountValidator"]; });




/***/ }),

/***/ "./src/app/screens/accounts-screen/accounts-screen.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/screens/accounts-screen/accounts-screen.component.ts ***!
  \**********************************************************************/
/*! exports provided: AccountsScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsScreenComponent", function() { return AccountsScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common */ "./src/app/common/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");








function AccountsScreenComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccountsScreenComponent_div_40_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.readCSV($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/rules"]; };
const _c1 = function () { return ["/validate"]; };
function AccountsScreenComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Transactions Rules ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "check_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Check Transactions Validity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
} }
class AccountsScreenComponent {
    constructor(accountsService) {
        this.accountsService = accountsService;
        this.allAccounts = [];
        this.dynamicMessage = '';
    }
    ngOnInit() {
        this.allAccounts = this.accountsService.getAccounts();
        this.updateScreenMessages();
    }
    readCSV(event) {
        const file = event.target.files[0];
        this.accountsService.parseCSV(file).subscribe((parsedFiles) => {
            if (parsedFiles === null || parsedFiles === void 0 ? void 0 : parsedFiles.length) {
                this.accountsService.saveAccounts(parsedFiles);
                this.allAccounts = parsedFiles;
                this.updateScreenMessages();
            }
        }, error => {
            console.log(error);
        });
    }
    updateScreenMessages() {
        var _a;
        if ((_a = this.allAccounts) === null || _a === void 0 ? void 0 : _a.length) {
            this.dynamicMessage = _common__WEBPACK_IMPORTED_MODULE_1__["ACCOUNTS_SCREEN_MESSAGE"].saved_accounts.replace('{}', this.allAccounts.length.toString());
        }
        else {
            this.dynamicMessage = _common__WEBPACK_IMPORTED_MODULE_1__["ACCOUNTS_SCREEN_MESSAGE"].unsaved_accounts;
        }
    }
}
AccountsScreenComponent.ɵfac = function AccountsScreenComponent_Factory(t) { return new (t || AccountsScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common__WEBPACK_IMPORTED_MODULE_1__["AccountsService"])); };
AccountsScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountsScreenComponent, selectors: [["app-accounts-screen"]], decls: 42, vars: 3, consts: [[1, "accunts-screen-wrapper"], [1, "screen-title"], [1, "color-green-1", "first-word"], ["target", "_blank", "href", "https://drive.google.com/file/d/1VRA8Ygkn8QMTUG-9fSd3lsslLQXml-VD/view?usp=sharing"], [2, "margin", "0"], [1, "accounts-example"], [1, "accounts-screen-actions"], [4, "ngIf"], ["class", "actions-wrapper", 4, "ngIf"], ["type", "file", "accept", ".csv", 3, "change"], [1, "actions-wrapper"], ["mat-raised-button", "", 1, "background-green-1", 3, "routerLink"], ["mat-raised-button", "", "color", "warn", 3, "routerLink"]], template: function AccountsScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bookkeeping accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " is an application that let you store some accounts and setup a set of rules of transactions in order to check if a transaction between two accounts is legal or not. Pretty fancy, no? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " In order to use this application, you need to upload a CSV with the accounts on which you want to set the transaction rules. The CSV should be in a two columns format having a comma ',' as a separator between the columns. First column represents an unique identifier and the second one is the account name. You can find a list of the valid accounts in Romania ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Valid accounts example: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " 361,Animale \u0219i p\u0103s\u0103ri ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 368,Diferen\u021Be de pre\u021B la animale \u0219i p\u0103s\u0103ri ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " 371,M\u0103rfuri ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " 378,Diferen\u021Be de pre\u021B la m\u0103rfuri ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " After you uploaded your accounts, you can now set some transaction rules. To do that, click on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\"Transaction Rules\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " button from below and the transaction rules screen will be prompted to you. There you can add rules between multiple accounts in order to easily see under what circumstances you are allowed to move assets from one account to another. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " What remains to be done now is to go to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\"Check Transactions Validity\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " section so that you can check where and from which accounts you can move your assets. As they say, keep your assets close and your transaction rules closer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AccountsScreenComponent_div_40_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AccountsScreenComponent_div_41_Template, 11, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dynamicMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.allAccounts == null ? null : ctx.allAccounts.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.allAccounts == null ? null : ctx.allAccounts.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".color-green-1[_ngcontent-%COMP%] {\n  color: #30c45d;\n}\n\n.background-green-1[_ngcontent-%COMP%] {\n  background: #30c45d;\n  color: #FFFFFF;\n}\n\n.flex-container[_ngcontent-%COMP%], .accunts-screen-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n}\n\n.box-1[_ngcontent-%COMP%] {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  background: #f2f2f2;\n  padding: 20px;\n}\n\n.accunts-screen-wrapper[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.accunts-screen-wrapper[_ngcontent-%COMP%]   .screen-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-size: 16px;\n  margin-bottom: 50px;\n}\n\n.accunts-screen-wrapper[_ngcontent-%COMP%]   .screen-title[_ngcontent-%COMP%]   .first-word[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\n.accunts-screen-wrapper[_ngcontent-%COMP%]   .accounts-example[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  font-weight: bold;\n}\n\n.accunts-screen-wrapper[_ngcontent-%COMP%]   .accounts-screen-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\n.accunts-screen-wrapper[_ngcontent-%COMP%]   .accounts-screen-actions[_ngcontent-%COMP%]   .actions-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n.accunts-screen-wrapper[_ngcontent-%COMP%]   .accounts-screen-actions[_ngcontent-%COMP%]   .actions-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: -10px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3N0eWxlcy9jb21tb24uc2NzcyIsInNyYy9hcHAvc2NyZWVucy9hY2NvdW50cy1zY3JlZW4vYWNjb3VudHMtc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UsY0FOUTtBQ0ZWOztBRFdBO0VBQ0UsbUJBVlE7RUFXUixjQUFBO0FDUkY7O0FEV0E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDUkY7O0FEV0E7RUFDRSxxREFBQTtFQUNBLG1CQXhCTztFQXlCUCxhQUFBO0FDUkY7O0FBYkE7RUFDRSxpQkFBQTtBQWdCRjs7QUFkRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWdCSjs7QUFmSTtFQUNFLGVBQUE7QUFpQk47O0FBYkU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBZUo7O0FBWkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBY0o7O0FBWkk7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQWNOOztBQVpNO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQWNSIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9hY2NvdW50cy1zY3JlZW4vYWNjb3VudHMtc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9WYXJpYWJsZXNcblxuJEdSQVktMTogI2YyZjJmMjtcbiRHUkFZLTI6ICNmYWZhZmE7XG4kR1JFRU4tMTogIzMwYzQ1ZDtcblxuXG4vL0NsYXNzZXNcblxuLmNvbG9yLWdyZWVuLTEge1xuICBjb2xvcjogJEdSRUVOLTE7XG59XG5cbi5iYWNrZ3JvdW5kLWdyZWVuLTEge1xuICBiYWNrZ3JvdW5kOiAkR1JFRU4tMTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYm94LTEge1xuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcbiAgYmFja2dyb3VuZDogJEdSQVktMTtcbiAgcGFkZGluZzogMjBweDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9jb21tb24vc3R5bGVzL2NvbW1vblwiO1xuXG46aG9zdCB7XG4gIEBleHRlbmQgLmZsZXgtY29udGFpbmVyO1xufVxuXG4uYWNjdW50cy1zY3JlZW4td3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBAZXh0ZW5kIC5mbGV4LWNvbnRhaW5lcjtcbiAgLnNjcmVlbi10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAuZmlyc3Qtd29yZCB7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgfVxuICB9XG5cbiAgLmFjY291bnRzLWV4YW1wbGUge1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmFjY291bnRzLXNjcmVlbi1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgLmFjdGlvbnMtd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxMHB4O1xuXG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accounts-screen',
                templateUrl: './accounts-screen.component.html',
                styleUrls: ['./accounts-screen.component.scss']
            }]
    }], function () { return [{ type: _common__WEBPACK_IMPORTED_MODULE_1__["AccountsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/screens/accounts-screen/accounts-screen.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/screens/accounts-screen/accounts-screen.module.ts ***!
  \*******************************************************************/
/*! exports provided: AccountsScreenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsScreenModule", function() { return AccountsScreenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _accounts_screen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts-screen.component */ "./src/app/screens/accounts-screen/accounts-screen.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-csv-parser */ "./node_modules/ngx-csv-parser/__ivy_ngcc__/fesm2015/ngx-csv-parser.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









class AccountsScreenModule {
}
AccountsScreenModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccountsScreenModule });
AccountsScreenModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccountsScreenModule_Factory(t) { return new (t || AccountsScreenModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParserModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountsScreenModule, { declarations: [_accounts_screen_component__WEBPACK_IMPORTED_MODULE_1__["AccountsScreenComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParserModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]], exports: [_accounts_screen_component__WEBPACK_IMPORTED_MODULE_1__["AccountsScreenComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsScreenModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _accounts_screen_component__WEBPACK_IMPORTED_MODULE_1__["AccountsScreenComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParserModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]
                ],
                exports: [
                    _accounts_screen_component__WEBPACK_IMPORTED_MODULE_1__["AccountsScreenComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/screens/accounts-screen/index.ts":
/*!**************************************************!*\
  !*** ./src/app/screens/accounts-screen/index.ts ***!
  \**************************************************/
/*! exports provided: AccountsScreenComponent, AccountsScreenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accounts_screen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts-screen.component */ "./src/app/screens/accounts-screen/accounts-screen.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountsScreenComponent", function() { return _accounts_screen_component__WEBPACK_IMPORTED_MODULE_0__["AccountsScreenComponent"]; });

/* harmony import */ var _accounts_screen_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts-screen.module */ "./src/app/screens/accounts-screen/accounts-screen.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountsScreenModule", function() { return _accounts_screen_module__WEBPACK_IMPORTED_MODULE_1__["AccountsScreenModule"]; });





/***/ }),

/***/ "./src/app/screens/landing-screen/index.ts":
/*!*************************************************!*\
  !*** ./src/app/screens/landing-screen/index.ts ***!
  \*************************************************/
/*! exports provided: LandingScreenComponent, LandingScreenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _landing_screen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-screen.component */ "./src/app/screens/landing-screen/landing-screen.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandingScreenComponent", function() { return _landing_screen_component__WEBPACK_IMPORTED_MODULE_0__["LandingScreenComponent"]; });

/* harmony import */ var _landing_screen_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-screen.module */ "./src/app/screens/landing-screen/landing-screen.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandingScreenModule", function() { return _landing_screen_module__WEBPACK_IMPORTED_MODULE_1__["LandingScreenModule"]; });





/***/ }),

/***/ "./src/app/screens/landing-screen/landing-screen.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/screens/landing-screen/landing-screen.component.ts ***!
  \********************************************************************/
/*! exports provided: LandingScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingScreenComponent", function() { return LandingScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class LandingScreenComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingScreenComponent.ɵfac = function LandingScreenComponent_Factory(t) { return new (t || LandingScreenComponent)(); };
LandingScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingScreenComponent, selectors: [["app-landing-screen"]], decls: 2, vars: 0, consts: [[1, "box-1", "flex-container"]], template: function LandingScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".color-green-1[_ngcontent-%COMP%] {\n  color: #30c45d;\n}\n\n.background-green-1[_ngcontent-%COMP%] {\n  background: #30c45d;\n  color: #FFFFFF;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n}\n\n.box-1[_ngcontent-%COMP%] {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  background: #f2f2f2;\n  padding: 20px;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background-color: #f2f2f2;\n  padding: 20px;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3N0eWxlcy9jb21tb24uc2NzcyIsInNyYy9hcHAvc2NyZWVucy9sYW5kaW5nLXNjcmVlbi9sYW5kaW5nLXNjcmVlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLGNBTlE7QUNGVjs7QURXQTtFQUNFLG1CQVZRO0VBV1IsY0FBQTtBQ1JGOztBRFdBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ1JGOztBRFdBO0VBQ0UscURBQUE7RUFDQSxtQkF4Qk87RUF5QlAsYUFBQTtBQ1JGOztBQWxCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkRITztFQ0lQLGFBQUE7RUFDQSxzQkFBQTtBQXFCRiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvbGFuZGluZy1zY3JlZW4vbGFuZGluZy1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1ZhcmlhYmxlc1xuXG4kR1JBWS0xOiAjZjJmMmYyO1xuJEdSQVktMjogI2ZhZmFmYTtcbiRHUkVFTi0xOiAjMzBjNDVkO1xuXG5cbi8vQ2xhc3Nlc1xuXG4uY29sb3ItZ3JlZW4tMSB7XG4gIGNvbG9yOiAkR1JFRU4tMTtcbn1cblxuLmJhY2tncm91bmQtZ3JlZW4tMSB7XG4gIGJhY2tncm91bmQ6ICRHUkVFTi0xO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAxIGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ib3gtMSB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xuICBiYWNrZ3JvdW5kOiAkR1JBWS0xO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL2NvbW1vbi9zdHlsZXMvY29tbW9uXCI7XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJEdSQVktMTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-screen',
                templateUrl: './landing-screen.component.html',
                styleUrls: ['./landing-screen.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/screens/landing-screen/landing-screen.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/screens/landing-screen/landing-screen.module.ts ***!
  \*****************************************************************/
/*! exports provided: LandingScreenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingScreenModule", function() { return LandingScreenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _landing_screen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-screen.component */ "./src/app/screens/landing-screen/landing-screen.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class LandingScreenModule {
}
LandingScreenModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LandingScreenModule });
LandingScreenModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LandingScreenModule_Factory(t) { return new (t || LandingScreenModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingScreenModule, { declarations: [_landing_screen_component__WEBPACK_IMPORTED_MODULE_1__["LandingScreenComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_landing_screen_component__WEBPACK_IMPORTED_MODULE_1__["LandingScreenComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingScreenModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _landing_screen_component__WEBPACK_IMPORTED_MODULE_1__["LandingScreenComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ],
                exports: [
                    _landing_screen_component__WEBPACK_IMPORTED_MODULE_1__["LandingScreenComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/screens/transaction-rules-screen/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/screens/transaction-rules-screen/index.ts ***!
  \***********************************************************/
/*! exports provided: TransactionRulesScreenComponent, TransactionRulesScreenModule, TransactionRulesModalComponent, TransactionRulesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transaction_rules_screen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction-rules-screen.component */ "./src/app/screens/transaction-rules-screen/transaction-rules-screen.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionRulesScreenComponent", function() { return _transaction_rules_screen_component__WEBPACK_IMPORTED_MODULE_0__["TransactionRulesScreenComponent"]; });

/* harmony import */ var _transaction_rules_screen_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction-rules-screen.module */ "./src/app/screens/transaction-rules-screen/transaction-rules-screen.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionRulesScreenModule", function() { return _transaction_rules_screen_module__WEBPACK_IMPORTED_MODULE_1__["TransactionRulesScreenModule"]; });

/* harmony import */ var _transaction_rules_modal_transaction_rules_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction-rules-modal/transaction-rules-modal.component */ "./src/app/screens/transaction-rules-screen/transaction-rules-modal/transaction-rules-modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionRulesModalComponent", function() { return _transaction_rules_modal_transaction_rules_modal_component__WEBPACK_IMPORTED_MODULE_2__["TransactionRulesModalComponent"]; });

/* harmony import */ var _transaction_rules_table_transaction_rules_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction-rules-table/transaction-rules-table.component */ "./src/app/screens/transaction-rules-screen/transaction-rules-table/transaction-rules-table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionRulesTableComponent", function() { return _transaction_rules_table_transaction_rules_table_component__WEBPACK_IMPORTED_MODULE_3__["TransactionRulesTableComponent"]; });







/***/ }),

/***/ "./src/app/screens/transaction-rules-screen/transaction-rules-modal/transaction-rules-modal.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/screens/transaction-rules-screen/transaction-rules-modal/transaction-rules-modal.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: TransactionRulesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionRulesModalComponent", function() { return TransactionRulesModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common */ "./src/app/common/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _common_components_error_viewer_error_viewer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/components/error-viewer/error-viewer.component */ "./src/app/common/components/error-viewer/error-viewer.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
















function TransactionRulesModalComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add a new rule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionRulesModalComponent_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit current rule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionRulesModalComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r6.id, " ");
} }
function TransactionRulesModalComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r7.id, " ");
} }
class TransactionRulesModalComponent {
    constructor(accountsService, dialogRef, existingRule) {
        this.accountsService = accountsService;
        this.dialogRef = dialogRef;
        this.existingRule = existingRule;
        this.rulesFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.allAccounts = [];
        this.editMode = false;
        this.filter = (value) => {
            const filterValue = value.trim().toLowerCase();
            return this.allAccounts.filter(account => account.id.toLowerCase().includes(filterValue));
        };
    }
    ngOnInit() {
        this.editMode = this.existingRule ? true : false;
        this.allAccounts = this.accountsService.getAccounts();
        this.rulesFormGroup = this.initializeFormGroup(this.existingRule);
        this.setAccountsFilters();
    }
    saveRule() {
        const newRule = {
            description: this.rulesFormGroup.controls['description'].value,
            creditAccount: this.rulesFormGroup.controls['creditAccount'].value,
            debitAccount: this.rulesFormGroup.controls['debitAccount'].value
        };
        if (this.editMode) {
            newRule.id = this.existingRule.id;
        }
        this.dialogRef.close(newRule);
    }
    setAccountsFilters() {
        this.creditFilteredAccounts = this.rulesFormGroup.controls['creditAccount'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.filter));
        this.debitFilteredAccounts = this.rulesFormGroup.controls['debitAccount'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.filter));
    }
    initializeFormGroup(existingRule) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            debitAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((existingRule === null || existingRule === void 0 ? void 0 : existingRule.debitAccount) || '', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                Object(_common__WEBPACK_IMPORTED_MODULE_2__["accountValidator"])(this.allAccounts),
                Object(_common__WEBPACK_IMPORTED_MODULE_2__["differentValuesValidator"])('creditAccount')
            ]),
            creditAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((existingRule === null || existingRule === void 0 ? void 0 : existingRule.creditAccount) || '', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                Object(_common__WEBPACK_IMPORTED_MODULE_2__["accountValidator"])(this.allAccounts),
                Object(_common__WEBPACK_IMPORTED_MODULE_2__["differentValuesValidator"])('debitAccount')
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((existingRule === null || existingRule === void 0 ? void 0 : existingRule.description) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
}
TransactionRulesModalComponent.ɵfac = function TransactionRulesModalComponent_Factory(t) { return new (t || TransactionRulesModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common__WEBPACK_IMPORTED_MODULE_2__["AccountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])); };
TransactionRulesModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionRulesModalComponent, selectors: [["app-transaction-rules-modal"]], decls: 37, vars: 18, consts: [[1, "rules-modal-wrapper"], ["mat-dialog-title", "", 4, "ngIf"], [1, "transaction-rules-modal-content", 3, "formGroup"], ["type", "text", "autocomplete", "off", "placeholder", "Add a debit account", "matInput", "", 3, "formControl", "matAutocomplete"], ["debitAutocomlete", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "errors"], ["autocomplete", "off", "type", "text", "placeholder", "Add a credit account", "matInput", "", 3, "formControl", "matAutocomplete"], ["creditAutocomplete", "matAutocomplete"], ["matInput", "", "placeholder", "Add a rule description", 3, "formControl"], ["align", ""], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "disabled", "click"], ["mat-dialog-title", ""], [3, "value"]], template: function TransactionRulesModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TransactionRulesModalComponent_h2_1_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TransactionRulesModalComponent_h2_2_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Debit Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-autocomplete", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TransactionRulesModalComponent_mat_option_11_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-error-viewer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Credit Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-autocomplete", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TransactionRulesModalComponent_mat_option_21_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-error-viewer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Rule description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-error-viewer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-dialog-actions", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionRulesModalComponent_Template_button_click_35_listener() { return ctx.saveRule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Save Rule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rulesFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.rulesFormGroup.controls["debitAccount"])("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 14, ctx.debitFilteredAccounts));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx.rulesFormGroup.controls["debitAccount"].errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.rulesFormGroup.controls["creditAccount"])("matAutocomplete", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 16, ctx.creditFilteredAccounts));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx.rulesFormGroup.controls["creditAccount"].errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.rulesFormGroup.controls["description"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx.rulesFormGroup.controls["description"].errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.rulesFormGroup.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _common_components_error_viewer_error_viewer_component__WEBPACK_IMPORTED_MODULE_9__["ErrorViewerComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogTitle"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".rules-modal-wrapper[_ngcontent-%COMP%] {\n  width: 550px;\n}\n\n.transaction-rules-modal-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.transaction-rules-modal-content[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy90cmFuc2FjdGlvbi1ydWxlcy1zY3JlZW4vdHJhbnNhY3Rpb24tcnVsZXMtbW9kYWwvdHJhbnNhY3Rpb24tcnVsZXMtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDRTtFQUNFLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvdHJhbnNhY3Rpb24tcnVsZXMtc2NyZWVuL3RyYW5zYWN0aW9uLXJ1bGVzLW1vZGFsL3RyYW5zYWN0aW9uLXJ1bGVzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJ1bGVzLW1vZGFsLXdyYXBwZXIge1xuICB3aWR0aDogNTUwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1ydWxlcy1tb2RhbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICB0ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionRulesModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transaction-rules-modal',
                templateUrl: './transaction-rules-modal.component.html',
                styleUrls: ['./transaction-rules-modal.component.scss']
            }]
    }], function () { return [{ type: _common__WEBPACK_IMPORTED_MODULE_2__["AccountsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/screens/transaction-rules-screen/transaction-rules-screen.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/screens/transaction-rules-screen/transaction-rules-screen.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TransactionRulesScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionRulesScreenComponent", function() { return TransactionRulesScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _transaction_rules_modal_transaction_rules_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction-rules-modal/transaction-rules-modal.component */ "./src/app/screens/transaction-rules-screen/transaction-rules-modal/transaction-rules-modal.component.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./src/app/common/index.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _common_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/components/breadcrumbs/breadcrumbs.component */ "./src/app/common/components/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _transaction_rules_table_transaction_rules_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transaction-rules-table/transaction-rules-table.component */ "./src/app/screens/transaction-rules-screen/transaction-rules-table/transaction-rules-table.component.ts");










function TransactionRulesScreenComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " In this screen, you can view, add, edit or delete your transaction rules. To edit or delete a rule , click on that rule in the table below and perform that action. If you want to navigate back, click on \"accounts\" link from the top navigation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionRulesScreenComponent_ng_container_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.addTransactionRule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Rule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-transaction-rules-table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteRuleAction", function TransactionRulesScreenComponent_ng_container_2_Template_app_transaction_rules_table_deleteRuleAction_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteRule($event); })("editRuleAction", function TransactionRulesScreenComponent_ng_container_2_Template_app_transaction_rules_table_editRuleAction_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.editRule($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("transactionRules", ctx_r0.allRules);
} }
class TransactionRulesScreenComponent {
    constructor(transactionRulesService, modalService, router, accountsService) {
        this.transactionRulesService = transactionRulesService;
        this.modalService = modalService;
        this.router = router;
        this.accountsService = accountsService;
        this.transactionRulesBreadcrumbs = [
            {
                name: 'accounts',
                route: '/'
            },
            {
                name: 'transaction-rules',
                route: '/rules'
            }
        ];
        this.allRules = [];
        this.allAccounts = [];
    }
    ngOnInit() {
        this.allAccounts = this.accountsService.getAccounts();
        this.rulesEventSubscription = this.transactionRulesService.getRules().subscribe(rules => {
            //Todo chack why property binding not trigger onChanges in transaction-rules-table
            // if we reasign rules directly
            this.allRules = [];
            this.allRules.push(...rules);
        });
    }
    ngOnDestroy() {
        this.rulesEventSubscription.unsubscribe();
    }
    addTransactionRule() {
        const modalRef = this.modalService.open(_transaction_rules_modal_transaction_rules_modal_component__WEBPACK_IMPORTED_MODULE_1__["TransactionRulesModalComponent"]);
        modalRef.afterClosed().subscribe((newRule) => {
            if (newRule) {
                this.saveRule(newRule);
            }
        });
    }
    saveRule(rule) {
        if (this.allRules.length > 0) {
            rule.id = this.allRules[this.allRules.length - 1].id + 1;
        }
        else {
            rule.id = 1;
        }
        this.transactionRulesService.addRule(rule);
    }
    deleteRule(rule) {
        this.transactionRulesService.deleteRule(rule);
    }
    editRule(rule) {
        const modalRef = this.modalService.open(_transaction_rules_modal_transaction_rules_modal_component__WEBPACK_IMPORTED_MODULE_1__["TransactionRulesModalComponent"], {
            data: rule
        });
        modalRef.afterClosed().subscribe((editedRule) => {
            if (editedRule) {
                this.transactionRulesService.editRule(editedRule);
            }
        });
    }
}
TransactionRulesScreenComponent.ɵfac = function TransactionRulesScreenComponent_Factory(t) { return new (t || TransactionRulesScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common__WEBPACK_IMPORTED_MODULE_2__["TransactionRulesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common__WEBPACK_IMPORTED_MODULE_2__["AccountsService"])); };
TransactionRulesScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionRulesScreenComponent, selectors: [["app-transaction-rules-screen"]], decls: 3, vars: 2, consts: [[3, "breadcrumbs"], [4, "ngIf"], ["mat-raised-button", "", 1, "background-green-1", 3, "click"], [1, "table-wrapper"], [3, "transactionRules", "deleteRuleAction", "editRuleAction"]], template: function TransactionRulesScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TransactionRulesScreenComponent_ng_container_2_Template, 8, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumbs", ctx.transactionRulesBreadcrumbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allAccounts);
    } }, directives: [_common_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _transaction_rules_table_transaction_rules_table_component__WEBPACK_IMPORTED_MODULE_8__["TransactionRulesTableComponent"]], styles: [".color-green-1[_ngcontent-%COMP%] {\n  color: #30c45d;\n}\n\n.background-green-1[_ngcontent-%COMP%] {\n  background: #30c45d;\n  color: #FFFFFF;\n}\n\n.flex-container[_ngcontent-%COMP%], [_nghost-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n}\n\n.box-1[_ngcontent-%COMP%] {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  background: #f2f2f2;\n  padding: 20px;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3N0eWxlcy9jb21tb24uc2NzcyIsInNyYy9hcHAvc2NyZWVucy90cmFuc2FjdGlvbi1ydWxlcy1zY3JlZW4vdHJhbnNhY3Rpb24tcnVsZXMtc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UsY0FOUTtBQ0ZWOztBRFdBO0VBQ0UsbUJBVlE7RUFXUixjQUFBO0FDUkY7O0FEV0E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDUkY7O0FEV0E7RUFDRSxxREFBQTtFQUNBLG1CQXhCTztFQXlCUCxhQUFBO0FDUkY7O0FBYkE7RUFDRSxnQkFBQTtBQWdCRiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvdHJhbnNhY3Rpb24tcnVsZXMtc2NyZWVuL3RyYW5zYWN0aW9uLXJ1bGVzLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vVmFyaWFibGVzXG5cbiRHUkFZLTE6ICNmMmYyZjI7XG4kR1JBWS0yOiAjZmFmYWZhO1xuJEdSRUVOLTE6ICMzMGM0NWQ7XG5cblxuLy9DbGFzc2VzXG5cbi5jb2xvci1ncmVlbi0xIHtcbiAgY29sb3I6ICRHUkVFTi0xO1xufVxuXG4uYmFja2dyb3VuZC1ncmVlbi0xIHtcbiAgYmFja2dyb3VuZDogJEdSRUVOLTE7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDEgYXV0bztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJveC0xIHtcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XG4gIGJhY2tncm91bmQ6ICRHUkFZLTE7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vY29tbW9uL3N0eWxlcy9jb21tb25cIjtcblxuOmhvc3Qge1xuICBAZXh0ZW5kIC5mbGV4LWNvbnRhaW5lclxufVxuXG4udGFibGUtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionRulesScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transaction-rules-screen',
                templateUrl: './transaction-rules-screen.component.html',
                styleUrls: ['./transaction-rules-screen.component.scss']
            }]
    }], function () { return [{ type: _common__WEBPACK_IMPORTED_MODULE_2__["TransactionRulesService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _common__WEBPACK_IMPORTED_MODULE_2__["AccountsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/screens/transaction-rules-screen/transaction-rules-screen.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/screens/transaction-rules-screen/transaction-rules-screen.module.ts ***!
  \*************************************************************************************/
/*! exports provided: TransactionRulesScreenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionRulesScreenModule", function() { return TransactionRulesScreenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _transaction_rules_screen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction-rules-screen.component */ "./src/app/screens/transaction-rules-screen/transaction-rules-screen.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _transaction_rules_table_transaction_rules_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transaction-rules-table/transaction-rules-table.component */ "./src/app/screens/transaction-rules-screen/transaction-rules-table/transaction-rules-table.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _transaction_rules_modal_transaction_rules_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transaction-rules-modal/transaction-rules-modal.component */ "./src/app/screens/transaction-rules-screen/transaction-rules-modal/transaction-rules-modal.component.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common */ "./src/app/common/index.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
















class TransactionRulesScreenModule {
}
TransactionRulesScreenModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TransactionRulesScreenModule });
TransactionRulesScreenModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TransactionRulesScreenModule_Factory(t) { return new (t || TransactionRulesScreenModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _common__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TransactionRulesScreenModule, { declarations: [_transaction_rules_screen_component__WEBPACK_IMPORTED_MODULE_1__["TransactionRulesScreenComponent"],
        _transaction_rules_table_transaction_rules_table_component__WEBPACK_IMPORTED_MODULE_4__["TransactionRulesTableComponent"],
        _transaction_rules_modal_transaction_rules_modal_component__WEBPACK_IMPORTED_MODULE_8__["TransactionRulesModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _common__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"]], exports: [_transaction_rules_screen_component__WEBPACK_IMPORTED_MODULE_1__["TransactionRulesScreenComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionRulesScreenModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _transaction_rules_screen_component__WEBPACK_IMPORTED_MODULE_1__["TransactionRulesScreenComponent"],
                    _transaction_rules_table_transaction_rules_table_component__WEBPACK_IMPORTED_MODULE_4__["TransactionRulesTableComponent"],
                    _transaction_rules_modal_transaction_rules_modal_component__WEBPACK_IMPORTED_MODULE_8__["TransactionRulesModalComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                    _common__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"]
                ],
                exports: [
                    _transaction_rules_screen_component__WEBPACK_IMPORTED_MODULE_1__["TransactionRulesScreenComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/screens/transaction-rules-screen/transaction-rules-table/transaction-rules-table.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/screens/transaction-rules-screen/transaction-rules-table/transaction-rules-table.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: TransactionRulesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionRulesTableComponent", function() { return TransactionRulesTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common */ "./src/app/common/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");











function TransactionRulesTableComponent_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.displayedColumnsMapper[column_r6], " ");
} }
function TransactionRulesTableComponent_ng_container_2_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10[column_r6], " ");
} }
function TransactionRulesTableComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TransactionRulesTableComponent_ng_container_2_th_1_Template, 2, 1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TransactionRulesTableComponent_ng_container_2_td_2_Template, 2, 1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matColumnDef", column_r6);
} }
function TransactionRulesTableComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionRulesTableComponent_td_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const element_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.deleteRule(element_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionRulesTableComponent_td_4_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const element_r12 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.editRule(element_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r1.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@detailExpand", element_r12 == ctx_r1.expendedRule ? "expanded" : "collapsed");
} }
function TransactionRulesTableComponent_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
function TransactionRulesTableComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionRulesTableComponent_tr_6_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.expendedRule = ctx_r17.expendedRule === element_r16 ? null : element_r16; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("table-expended-row", ctx_r3.expendedRule === element_r16);
} }
function TransactionRulesTableComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
} }
function TransactionRulesTableComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " You currently have no rules added yet. Please add some by pressing the \"Add Rule\" button right above the table ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " If you want, we can add some transactions rules for you to play with by pressing this ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionRulesTableComponent_tr_8_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.addMockRules(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " button ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r5.displayedColumns.length);
} }
const _c0 = function () { return ["expandedDetail"]; };
const _c1 = function () { return [5, 10, 25, 100]; };
class TransactionRulesTableComponent {
    constructor(transactionRulesSrvc) {
        this.transactionRulesSrvc = transactionRulesSrvc;
        this.deleteRuleAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editRuleAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayedColumns = ['id', 'debitAccount', 'creditAccount', 'description'];
        this.displayedColumnsMapper = {
            id: 'Rule ID',
            debitAccount: 'Debit Account',
            creditAccount: 'Credit Account',
            description: 'Rule Description'
        };
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    set transactionRules(rules) {
        this._transactionRules = rules;
        this.dataSource.data = rules;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    deleteRule(rule) {
        this.deleteRuleAction.emit(rule);
    }
    editRule(rule) {
        this.editRuleAction.emit(rule);
    }
    addMockRules() {
        this.transactionRulesSrvc.addMockedRules();
    }
}
TransactionRulesTableComponent.ɵfac = function TransactionRulesTableComponent_Factory(t) { return new (t || TransactionRulesTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common__WEBPACK_IMPORTED_MODULE_4__["TransactionRulesService"])); };
TransactionRulesTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionRulesTableComponent, selectors: [["app-transaction-rules-table"]], viewQuery: function TransactionRulesTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { transactionRules: "transactionRules" }, outputs: { deleteRuleAction: "deleteRuleAction", editRuleAction: "editRuleAction" }, decls: 10, vars: 9, consts: [[1, "table-container"], ["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "table-row", 3, "table-expended-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "table-detailed-row", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "pageSizeOptions", "pageSize"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "detailed-row-wrapper"], [1, "detailed-row-container"], [1, "detailed-row-actions"], ["mat-mini-fab", "", "color", "warn", 3, "click"], ["mat-mini-fab", "", 1, "background-green-1", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "table-row", 3, "click"], ["mat-row", "", 1, "table-detailed-row"], [1, "mat-row"], [1, "mat-cell"], [1, "table-no-data-row"]], template: function TransactionRulesTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TransactionRulesTableComponent_ng_container_2_Template, 3, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TransactionRulesTableComponent_td_4_Template, 10, 2, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TransactionRulesTableComponent_tr_5_Template, 1, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TransactionRulesTableComponent_tr_6_Template, 1, 2, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TransactionRulesTableComponent_tr_7_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TransactionRulesTableComponent_tr_8_Template, 11, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-paginator", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1))("pageSize", 10);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".color-green-1[_ngcontent-%COMP%] {\n  color: #30c45d;\n}\n\n.background-green-1[_ngcontent-%COMP%] {\n  background: #30c45d;\n  color: #FFFFFF;\n}\n\n.flex-container[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%], [_nghost-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n}\n\n.box-1[_ngcontent-%COMP%] {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  background: #f2f2f2;\n  padding: 20px;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.table-container[_ngcontent-%COMP%]   .table-detailed-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\n.table-container[_ngcontent-%COMP%]   .table-no-data-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 300px;\n  align-items: center;\n  justify-content: center;\n}\n\n.table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:not(.table-expended-row):hover {\n  background: whitesmoke;\n}\n\n.table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:not(.table-expended-row):active {\n  background: #efefef;\n}\n\n.table-container[_ngcontent-%COMP%]   .detailed-row-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  margin-left: -10px;\n}\n\n.table-container[_ngcontent-%COMP%]   .detailed-row-wrapper[_ngcontent-%COMP%]   .detailed-row-container[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n.table-container[_ngcontent-%COMP%]   .detailed-row-wrapper[_ngcontent-%COMP%]   .detailed-row-container[_ngcontent-%COMP%]   .detailed-row-actions[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3N0eWxlcy9jb21tb24uc2NzcyIsInNyYy9hcHAvc2NyZWVucy90cmFuc2FjdGlvbi1ydWxlcy1zY3JlZW4vdHJhbnNhY3Rpb24tcnVsZXMtdGFibGUvdHJhbnNhY3Rpb24tcnVsZXMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSxjQU5RO0FDRlY7O0FEV0E7RUFDRSxtQkFWUTtFQVdSLGNBQUE7QUNSRjs7QURXQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNSRjs7QURXQTtFQUNFLHFEQUFBO0VBQ0EsbUJBeEJPO0VBeUJQLGFBQUE7QUNSRjs7QUFiQTtFQUVFLGNBQUE7RUFDQSxpQkFBQTtBQWVGOztBQWJFO0VBQ0Usc0JBQUE7QUFlSjs7QUFaRTtFQUNFLFNBQUE7QUFjSjs7QUFYRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBYUo7O0FBVkU7RUFDRSxzQkFBQTtBQVlKOztBQVRFO0VBQ0UsbUJBQUE7QUFXSjs7QUFSRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBVUo7O0FBUkk7RUFDRSxlQUFBO0FBVU47O0FBUk07RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFVUiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvdHJhbnNhY3Rpb24tcnVsZXMtc2NyZWVuL3RyYW5zYWN0aW9uLXJ1bGVzLXRhYmxlL3RyYW5zYWN0aW9uLXJ1bGVzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9WYXJpYWJsZXNcblxuJEdSQVktMTogI2YyZjJmMjtcbiRHUkFZLTI6ICNmYWZhZmE7XG4kR1JFRU4tMTogIzMwYzQ1ZDtcblxuXG4vL0NsYXNzZXNcblxuLmNvbG9yLWdyZWVuLTEge1xuICBjb2xvcjogJEdSRUVOLTE7XG59XG5cbi5iYWNrZ3JvdW5kLWdyZWVuLTEge1xuICBiYWNrZ3JvdW5kOiAkR1JFRU4tMTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYm94LTEge1xuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcbiAgYmFja2dyb3VuZDogJEdSQVktMTtcbiAgcGFkZGluZzogMjBweDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9jb21tb24vc3R5bGVzL2NvbW1vblwiO1xuXG46aG9zdCB7XG4gIEBleHRlbmQgLmZsZXgtY29udGFpbmVyXG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICBAZXh0ZW5kIC5mbGV4LWNvbnRhaW5lcjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuXG4gIC50YWJsZS1yb3cgdGR7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgfVxuXG4gIC50YWJsZS1kZXRhaWxlZC1yb3cge1xuICAgIGhlaWdodDogMDtcbiAgfVxuXG4gIC50YWJsZS1uby1kYXRhLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC50YWJsZS1yb3c6bm90KC50YWJsZS1leHBlbmRlZC1yb3cpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICB9XG5cbiAgLnRhYmxlLXJvdzpub3QoLnRhYmxlLWV4cGVuZGVkLXJvdyk6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICB9XG5cbiAgLmRldGFpbGVkLXJvdy13cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuXG4gICAgLmRldGFpbGVkLXJvdy1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuXG4gICAgICAuZGV0YWlsZWQtcm93LWFjdGlvbnMge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionRulesTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transaction-rules-table',
                templateUrl: './transaction-rules-table.component.html',
                styleUrls: ['./transaction-rules-table.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', minHeight: '0' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
            }]
    }], function () { return [{ type: _common__WEBPACK_IMPORTED_MODULE_4__["TransactionRulesService"] }]; }, { transactionRules: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteRuleAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], editRuleAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "./src/app/screens/validate-transactions-screen/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/screens/validate-transactions-screen/index.ts ***!
  \***************************************************************/
/*! exports provided: ValidateTransactionsScreenModule, ValidateTransactionsScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_transactions_screen_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate-transactions-screen.module */ "./src/app/screens/validate-transactions-screen/validate-transactions-screen.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidateTransactionsScreenModule", function() { return _validate_transactions_screen_module__WEBPACK_IMPORTED_MODULE_0__["ValidateTransactionsScreenModule"]; });

/* harmony import */ var _validate_transactions_screen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate-transactions-screen.component */ "./src/app/screens/validate-transactions-screen/validate-transactions-screen.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidateTransactionsScreenComponent", function() { return _validate_transactions_screen_component__WEBPACK_IMPORTED_MODULE_1__["ValidateTransactionsScreenComponent"]; });





/***/ }),

/***/ "./src/app/screens/validate-transactions-screen/validate-transactions-screen.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/screens/validate-transactions-screen/validate-transactions-screen.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ValidateTransactionsScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateTransactionsScreenComponent", function() { return ValidateTransactionsScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./src/app/common/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _common_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/components/breadcrumbs/breadcrumbs.component */ "./src/app/common/components/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _common_components_error_viewer_error_viewer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/components/error-viewer/error-viewer.component */ "./src/app/common/components/error-viewer/error-viewer.component.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
















function ValidateTransactionsScreenComponent_ng_container_2_mat_form_field_12_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r6.id, " ");
} }
function ValidateTransactionsScreenComponent_ng_container_2_mat_form_field_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select a debit account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-autocomplete", null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ValidateTransactionsScreenComponent_ng_container_2_mat_form_field_12_mat_option_6_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-error-viewer", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.accountsFormGroup.controls["debitAccount"])("matAutocomplete", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx_r1.debitFilteredAccounts));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.accountsFormGroup.controls["debitAccount"].errors);
} }
function ValidateTransactionsScreenComponent_ng_container_2_mat_form_field_13_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r9.id, " ");
} }
function ValidateTransactionsScreenComponent_ng_container_2_mat_form_field_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select a credit account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-autocomplete", null, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ValidateTransactionsScreenComponent_ng_container_2_mat_form_field_13_mat_option_6_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-error-viewer", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.accountsFormGroup.controls["creditAccount"])("matAutocomplete", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx_r2.creditFilteredAccounts));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r2.accountsFormGroup.controls["creditAccount"].errors);
} }
function ValidateTransactionsScreenComponent_ng_container_2_div_14_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Debit account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " can receive from credit account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " when ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rule_r14.debitAccount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rule_r14.creditAccount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rule_r14.description);
} }
function ValidateTransactionsScreenComponent_ng_container_2_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ValidateTransactionsScreenComponent_ng_container_2_div_14_div_1_li_2_Template, 10, 3, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.filteredRules);
} }
function ValidateTransactionsScreenComponent_ng_container_2_div_14_ng_template_2_h3_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" You don't have any rules for the credit account ", ctx_r15.selectedCreditAccount, " and the debit account ", ctx_r15.selectedDebitAccount, ". Please add some or change the accounts ");
} }
function ValidateTransactionsScreenComponent_ng_container_2_div_14_ng_template_2_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" You don't have any rules for the credit account ", ctx_r16.selectedCreditAccount, " ");
} }
function ValidateTransactionsScreenComponent_ng_container_2_div_14_ng_template_2_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" You don't have any rules for the debit account ", ctx_r17.selectedDebitAccount, " ");
} }
function ValidateTransactionsScreenComponent_ng_container_2_div_14_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ValidateTransactionsScreenComponent_ng_container_2_div_14_ng_template_2_h3_0_Template, 2, 2, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ValidateTransactionsScreenComponent_ng_container_2_div_14_ng_template_2_h3_1_Template, 2, 1, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ValidateTransactionsScreenComponent_ng_container_2_div_14_ng_template_2_h3_2_Template, 2, 1, "h3", 21);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "both");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "debit");
} }
function ValidateTransactionsScreenComponent_ng_container_2_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ValidateTransactionsScreenComponent_ng_container_2_div_14_div_1_Template, 3, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ValidateTransactionsScreenComponent_ng_container_2_div_14_ng_template_2_Template, 3, 3, "ng-template", 18, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.filteredRules && ctx_r3.filteredRules.length > 0)("ngIfElse", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r3.whichAccounts);
} }
function ValidateTransactionsScreenComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Select a debit account and a credit account from the lists above and then a list will appear with all the transaction rules available for this accounts. You can choose between seeing transaction rules for a specific credit / debit account or for a pair of accounts. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-button-toggle-group", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ValidateTransactionsScreenComponent_ng_container_2_Template_mat_button_toggle_group_valueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.updateAccountsSelection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-button-toggle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Debit&Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-button-toggle", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Only Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-button-toggle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Only Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ValidateTransactionsScreenComponent_ng_container_2_mat_form_field_12_Template, 10, 6, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ValidateTransactionsScreenComponent_ng_container_2_mat_form_field_13_Template, 10, 6, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ValidateTransactionsScreenComponent_ng_container_2_div_14_Template, 4, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.whichAccounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.whichAccounts === "both" || ctx_r0.whichAccounts === "debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.whichAccounts === "both" || ctx_r0.whichAccounts === "credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.accountsFormGroup.valid);
} }
class ValidateTransactionsScreenComponent {
    constructor(accountsService, rulesService) {
        this.accountsService = accountsService;
        this.rulesService = rulesService;
        this.accountsFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.allAccounts = [];
        this.allRules = [];
        this.filteredRules = [];
        this.whichAccounts = 'both';
        this.validateScreenBreadcrumbs = [
            {
                name: 'accounts',
                route: '/'
            },
            {
                name: 'validate-transactions',
                route: '/validate'
            }
        ];
        this.filter = (value) => {
            const filterValue = value.trim().toLowerCase();
            return this.allAccounts.filter(account => account.id.toLowerCase().includes(filterValue));
        };
    }
    get selectedCreditAccount() {
        return this.accountsFormGroup.controls.creditAccount.value;
    }
    get selectedDebitAccount() {
        return this.accountsFormGroup.controls.debitAccount.value;
    }
    ngOnInit() {
        var _a;
        this.allAccounts = this.accountsService.getAccounts();
        if (((_a = this.allAccounts) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            this.rulesService.getRules().subscribe(rules => {
                this.allRules = rules;
            });
            this.accountsFormGroup = this.initializeFormGroup();
            this.setAccountsFilters();
            this.filterRules();
        }
    }
    setAccountsFilters() {
        this.creditFilteredAccounts = this.accountsFormGroup.controls.creditAccount.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.filter));
        this.debitFilteredAccounts = this.accountsFormGroup.controls.debitAccount.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.filter));
    }
    initializeFormGroup(existingRule) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            debitAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((existingRule === null || existingRule === void 0 ? void 0 : existingRule.debitAccount) || '', [
                Object(_common__WEBPACK_IMPORTED_MODULE_2__["accountValidator"])(this.allAccounts),
                Object(_common__WEBPACK_IMPORTED_MODULE_2__["differentValuesValidator"])('creditAccount')
            ]),
            creditAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((existingRule === null || existingRule === void 0 ? void 0 : existingRule.creditAccount) || '', [
                Object(_common__WEBPACK_IMPORTED_MODULE_2__["accountValidator"])(this.allAccounts),
                Object(_common__WEBPACK_IMPORTED_MODULE_2__["differentValuesValidator"])('debitAccount')
            ]),
        });
    }
    filterRules() {
        const creditAccount = this.accountsFormGroup.controls.creditAccount;
        const debitAccount = this.accountsFormGroup.controls.debitAccount;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            creditAccount.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])('')),
            debitAccount.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''))
        ]).subscribe(([newCredit, newDebit]) => {
            this.filteredRules = this.allRules.filter((rule) => {
                switch (this.whichAccounts) {
                    case 'both':
                        return rule.creditAccount === newCredit && rule.debitAccount === newDebit;
                        break;
                    case 'credit':
                        return rule.creditAccount === newCredit;
                        break;
                    case 'debit':
                        return rule.debitAccount === newDebit;
                }
            });
        });
    }
    // TODO buttons group value changed is trigger twiced and first value is always undefined then the actual value is passed
    updateAccountsSelection(newSelection) {
        if (newSelection) {
            this.whichAccounts = newSelection;
            switch (newSelection) {
                case 'both': {
                    this.accountsFormGroup.controls.debitAccount.enable();
                    this.accountsFormGroup.controls.creditAccount.enable();
                    break;
                }
                case 'credit': {
                    this.accountsFormGroup.controls.debitAccount.disable();
                    this.accountsFormGroup.controls.creditAccount.enable();
                    break;
                }
                case 'debit': {
                    this.accountsFormGroup.controls.debitAccount.enable();
                    this.accountsFormGroup.controls.creditAccount.disable();
                    break;
                }
            }
        }
    }
}
ValidateTransactionsScreenComponent.ɵfac = function ValidateTransactionsScreenComponent_Factory(t) { return new (t || ValidateTransactionsScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common__WEBPACK_IMPORTED_MODULE_2__["AccountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common__WEBPACK_IMPORTED_MODULE_2__["TransactionRulesService"])); };
ValidateTransactionsScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidateTransactionsScreenComponent, selectors: [["app-validate-transactions-screen"]], decls: 3, vars: 2, consts: [[1, "validate-transaction-screen"], [3, "breadcrumbs"], [4, "ngIf"], [3, "value", "valueChange"], ["value", "both"], ["value", "debit"], ["value", "credit"], [1, "validate-transaction-fields"], ["class", "available-rules", 4, "ngIf"], ["type", "text", "autocomplete", "off", "placeholder", "Debit Account", "matInput", "", 3, "formControl", "matAutocomplete"], ["debitAutocomlete", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "errors"], [3, "value"], ["autocomplete", "off", "type", "text", "placeholder", "Credit Account", "matInput", "", 3, "formControl", "matAutocomplete"], ["creditAutocomplete", "matAutocomplete"], [1, "available-rules"], [4, "ngIf", "ngIfElse"], [3, "ngSwitch"], ["noRules", ""], [4, "ngFor", "ngForOf"], [4, "ngSwitchCase"]], template: function ValidateTransactionsScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ValidateTransactionsScreenComponent_ng_container_2_Template, 15, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumbs", ctx.validateScreenBreadcrumbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.allAccounts == null ? null : ctx.allAccounts.length) > 0);
    } }, directives: [_common_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _common_components_error_viewer_error_viewer_component__WEBPACK_IMPORTED_MODULE_11__["ErrorViewerComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".color-green-1[_ngcontent-%COMP%] {\n  color: #30c45d;\n}\n\n.background-green-1[_ngcontent-%COMP%] {\n  background: #30c45d;\n  color: #FFFFFF;\n}\n\n.flex-container[_ngcontent-%COMP%], [_nghost-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n}\n\n.box-1[_ngcontent-%COMP%] {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  background: #f2f2f2;\n  padding: 20px;\n}\n\n.validate-transaction-screen[_ngcontent-%COMP%]   .validate-transaction-fields[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-top: 20px;\n}\n\n.validate-transaction-screen[_ngcontent-%COMP%]   .validate-transaction-fields[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3N0eWxlcy9jb21tb24uc2NzcyIsInNyYy9hcHAvc2NyZWVucy92YWxpZGF0ZS10cmFuc2FjdGlvbnMtc2NyZWVuL3ZhbGlkYXRlLXRyYW5zYWN0aW9ucy1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSxjQU5RO0FDRlY7O0FEV0E7RUFDRSxtQkFWUTtFQVdSLGNBQUE7QUNSRjs7QURXQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNSRjs7QURXQTtFQUNFLHFEQUFBO0VBQ0EsbUJBeEJPO0VBeUJQLGFBQUE7QUNSRjs7QUFaRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFlSjs7QUFiSTtFQUNFLFlBQUE7QUFlTiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvdmFsaWRhdGUtdHJhbnNhY3Rpb25zLXNjcmVlbi92YWxpZGF0ZS10cmFuc2FjdGlvbnMtc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9WYXJpYWJsZXNcblxuJEdSQVktMTogI2YyZjJmMjtcbiRHUkFZLTI6ICNmYWZhZmE7XG4kR1JFRU4tMTogIzMwYzQ1ZDtcblxuXG4vL0NsYXNzZXNcblxuLmNvbG9yLWdyZWVuLTEge1xuICBjb2xvcjogJEdSRUVOLTE7XG59XG5cbi5iYWNrZ3JvdW5kLWdyZWVuLTEge1xuICBiYWNrZ3JvdW5kOiAkR1JFRU4tMTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYm94LTEge1xuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcbiAgYmFja2dyb3VuZDogJEdSQVktMTtcbiAgcGFkZGluZzogMjBweDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9jb21tb24vc3R5bGVzL2NvbW1vblwiO1xuXG46aG9zdCB7XG4gIEBleHRlbmQgLmZsZXgtY29udGFpbmVyXG59XG5cbi52YWxpZGF0ZS10cmFuc2FjdGlvbi1zY3JlZW4ge1xuICAudmFsaWRhdGUtdHJhbnNhY3Rpb24tZmllbGRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidateTransactionsScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-validate-transactions-screen',
                templateUrl: './validate-transactions-screen.component.html',
                styleUrls: ['./validate-transactions-screen.component.scss']
            }]
    }], function () { return [{ type: _common__WEBPACK_IMPORTED_MODULE_2__["AccountsService"] }, { type: _common__WEBPACK_IMPORTED_MODULE_2__["TransactionRulesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/screens/validate-transactions-screen/validate-transactions-screen.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/screens/validate-transactions-screen/validate-transactions-screen.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ValidateTransactionsScreenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateTransactionsScreenModule", function() { return ValidateTransactionsScreenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _validate_transactions_screen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate-transactions-screen.component */ "./src/app/screens/validate-transactions-screen/validate-transactions-screen.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common */ "./src/app/common/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");










class ValidateTransactionsScreenModule {
}
ValidateTransactionsScreenModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ValidateTransactionsScreenModule });
ValidateTransactionsScreenModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ValidateTransactionsScreenModule_Factory(t) { return new (t || ValidateTransactionsScreenModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _common__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ValidateTransactionsScreenModule, { declarations: [_validate_transactions_screen_component__WEBPACK_IMPORTED_MODULE_1__["ValidateTransactionsScreenComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _common__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]], exports: [_validate_transactions_screen_component__WEBPACK_IMPORTED_MODULE_1__["ValidateTransactionsScreenComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidateTransactionsScreenModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _validate_transactions_screen_component__WEBPACK_IMPORTED_MODULE_1__["ValidateTransactionsScreenComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _common__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ],
                exports: [
                    _validate_transactions_screen_component__WEBPACK_IMPORTED_MODULE_1__["ValidateTransactionsScreenComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andreiispas/Public/Practice/devplant-bookkeeping-accounts/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map