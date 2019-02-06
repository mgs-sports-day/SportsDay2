(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav #sidenav position=\"end\" mode=\"over\" [(opened)]=\"sidenavOpened\">\n\n        <mat-toolbar color=\"primary\">\n            <span>Menu</span>\n        </mat-toolbar>\n\n        <mat-nav-list>\n            <mat-list-item *ngFor=\"let item of navigation\">\n                <a matLine [routerLink]=\"item.path\">\n                    {{ item.name }}\n                </a>\n            </mat-list-item>\n        </mat-nav-list>\n\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n\n        <mat-toolbar color=\"primary\" class=\"nav\">\n            <span>MGS Sports Day</span>\n\n            <span class=\"nav-filler\"></span>\n\n            <div *ngIf=\"!mobile\">\n\n                <a mat-button *ngFor=\"let item of navigation\" [routerLink]=\"item.path\">\n                    {{ item.name }}\n                </a>\n\n            </div>\n\n            <button mat-icon-button *ngIf=\"mobile\" (click)=\"sidenav.toggle()\">\n                <mat-icon>\n                    menu\n                </mat-icon>\n            </button>\n        </mat-toolbar>\n\n        <div class=\"main-container\">\n            <router-outlet></router-outlet>\n        </div>\n\n    </mat-sidenav-content>\n</mat-sidenav-container>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.updateNavigation = function () {
        this.mobile = window.innerWidth <= 768;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.updateNavigation();
        this.sidenavOpened = false;
        this.navigation = [
            {
                name: 'Home',
                path: '/'
            }
        ];
        localStorage.setItem('rootUrl', 'http://localhost:3000');
    };
    AppComponent.prototype.onResize = function () {
        this.updateNavigation();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_imports_material_imports_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material-imports/material-imports.module */ "./src/app/material-imports/material-imports.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-detail/event-detail.component */ "./src/app/event-detail/event-detail.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _form_detail_form_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-detail/form-detail.component */ "./src/app/form-detail/form-detail.component.ts");










var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'events', component: _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_7__["EventDetailComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_7__["EventDetailComponent"],
                _form_detail_form_detail_component__WEBPACK_IMPORTED_MODULE_9__["FormDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _material_imports_material_imports_module__WEBPACK_IMPORTED_MODULE_4__["MaterialImportsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes, { enableTracing: true })
            ],
            exports: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/event-detail/event-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/event-detail/event-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50LWRldGFpbC9ldmVudC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/event-detail/event-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/event-detail/event-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  event-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/event-detail/event-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/event-detail/event-detail.component.ts ***!
  \********************************************************/
/*! exports provided: EventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return EventDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-detail.service */ "./src/app/event-detail/event-detail.service.ts");



var EventDetailComponent = /** @class */ (function () {
    function EventDetailComponent(eventDetailService) {
        this.eventDetailService = eventDetailService;
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventDetailService.getEvents()
            .subscribe(function (data) {
            _this.events = data.slice();
        });
    };
    EventDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__(/*! ./event-detail.component.html */ "./src/app/event-detail/event-detail.component.html"),
            styles: [__webpack_require__(/*! ./event-detail.component.css */ "./src/app/event-detail/event-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_event_detail_service__WEBPACK_IMPORTED_MODULE_2__["EventDetailService"]])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "./src/app/event-detail/event-detail.service.ts":
/*!******************************************************!*\
  !*** ./src/app/event-detail/event-detail.service.ts ***!
  \******************************************************/
/*! exports provided: EventDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailService", function() { return EventDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EventDetailService = /** @class */ (function () {
    function EventDetailService(http) {
        this.http = http;
        this.rootUrl = localStorage.getItem('rootUrl');
    }
    EventDetailService.prototype.getEvent = function (id) {
        return this.http.get(this.rootUrl + '/event/' + id);
    };
    EventDetailService.prototype.getEvents = function () {
        return this.http.get(this.rootUrl + '/events');
    };
    EventDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EventDetailService);
    return EventDetailService;
}());



/***/ }),

/***/ "./src/app/form-detail/form-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/form-detail/form-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tZGV0YWlsL2Zvcm0tZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/form-detail/form-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/form-detail/form-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  form-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/form-detail/form-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/form-detail/form-detail.component.ts ***!
  \******************************************************/
/*! exports provided: FormDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDetailComponent", function() { return FormDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormDetailComponent = /** @class */ (function () {
    function FormDetailComponent() {
    }
    FormDetailComponent.prototype.ngOnInit = function () {
    };
    FormDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-detail',
            template: __webpack_require__(/*! ./form-detail.component.html */ "./src/app/form-detail/form-detail.component.html"),
            styles: [__webpack_require__(/*! ./form-detail.component.css */ "./src/app/form-detail/form-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormDetailComponent);
    return FormDetailComponent;
}());



/***/ }),

/***/ "./src/app/form-detail/form-detail.service.ts":
/*!****************************************************!*\
  !*** ./src/app/form-detail/form-detail.service.ts ***!
  \****************************************************/
/*! exports provided: FormDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDetailService", function() { return FormDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FormDetailService = /** @class */ (function () {
    function FormDetailService(http) {
        this.http = http;
        this.rootUrl = localStorage.getItem('rootUrl');
    }
    FormDetailService.prototype.getForms = function () {
        return this.http.get(this.rootUrl + '/forms');
    };
    FormDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FormDetailService);
    return FormDetailService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>MGS Sports Day 2019</h1>\r\n\r\n<p>Lorem ipsum informative text.</p>\r\n\r\n<mat-tab-group>\r\n    <mat-tab label=\"All forms\">\r\n\r\n        <div class=\"mat-elevation-z8\">\r\n            <table mat-table [dataSource]=\"forms\">\r\n                <ng-container matColumnDef=\"position\">\r\n                    <th mat-header-cell *matHeaderCellDef>School position</th>\r\n\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        {{ forms.indexOf(element) + 1 }}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"form\">\r\n                    <th mat-header-cell *matHeaderCellDef>Form</th>\r\n\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <strong>{{ element.year }}{{ element.name }}</strong>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"total\">\r\n                    <th mat-header-cell *matHeaderCellDef>Total points</th>\r\n\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        {{ element.totalPoints }}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef></th>\r\n\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <a mat-button color=\"primary\" [routerLink]=\"'/forms/' + element.id\">\r\n                            More\r\n                        </a>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"['position', 'form', 'total', 'action']\"></tr>\r\n                <tr mat-row\r\n                    *matRowDef=\"let row; columns: ['position', 'form', 'total', 'action']\"\r\n                    [ngClass]=\"'table-position-' + forms.indexOf(row)\"\r\n                ></tr>\r\n            </table>\r\n        </div>\r\n\r\n\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"All events\">\r\n\r\n        <div class=\"mat-elevation-z8\">\r\n            <table mat-table [dataSource]=\"events\">\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef>Name</th>\r\n\r\n                    <td mat-cell *matCellDef=\"let element\" matRipple matRippleColor=\"primary\" [routerLink]=\"'/events/' + element.id\">\r\n                        {{ element.name }}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"['name']\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: ['name']\"></tr>\r\n            </table>\r\n        </div>\r\n\r\n    </mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_detail_event_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-detail/event-detail.service */ "./src/app/event-detail/event-detail.service.ts");
/* harmony import */ var _form_detail_form_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-detail/form-detail.service */ "./src/app/form-detail/form-detail.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(eventDetailService, formDetailService) {
        this.eventDetailService = eventDetailService;
        this.formDetailService = formDetailService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventDetailService.getEvents()
            .subscribe(function (data) {
            _this.events = data.slice();
        });
        this.formDetailService.getForms()
            .subscribe(function (data) {
            data.forEach(function (e) {
                var scoreArray = e.scores.map(function (i) { return i.score; });
                if (scoreArray.length > 0) {
                    e.totalPoints = scoreArray.reduce(function (total, next) {
                        return total + next;
                    });
                }
                else {
                    e.totalPoints = 0;
                }
            });
            _this.forms = data.slice();
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            providers: [_event_detail_event_detail_service__WEBPACK_IMPORTED_MODULE_2__["EventDetailService"]],
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_event_detail_event_detail_service__WEBPACK_IMPORTED_MODULE_2__["EventDetailService"], _form_detail_form_detail_service__WEBPACK_IMPORTED_MODULE_3__["FormDetailService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material-imports/material-imports.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/material-imports/material-imports.module.ts ***!
  \*************************************************************/
/*! exports provided: MaterialImportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialImportsModule", function() { return MaterialImportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");





var MaterialImportsModule = /** @class */ (function () {
    function MaterialImportsModule() {
    }
    MaterialImportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]
            ],
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]
            ]
        })
    ], MaterialImportsModule);
    return MaterialImportsModule;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator.GRAPH-PC\Documents\PROJECTS\SportsDay2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map