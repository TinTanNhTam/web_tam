webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header *ngIf=\"displayLayout()\">\n</app-header>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n  <app-footer *ngIf=\"displayLayout()\"></app-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticate = false;
        this._authSubscription = this.authenticationService.authenticate$.subscribe(function (status) {
            _this.authenticate = Boolean(status);
            if (!status) {
                router.navigate(['/login']);
            }
        });
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationStart */]) {
                if (event.url == '/login') {
                    if (_this.authenticate) {
                        _this.router.navigate(['/dashboards']);
                    }
                }
                else {
                    if (!_this.authenticate) {
                        _this.router.navigate(['/login']);
                    }
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.displayLayout = function () {
        return !(this.router.url == '/login');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_playouts_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/playouts/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_playouts_login_login_component__ = __webpack_require__("../../../../../src/app/components/playouts/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_httpClient_service__ = __webpack_require__("../../../../../src/app/services/httpClient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_logging_service__ = __webpack_require__("../../../../../src/app/services/logging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_playouts_menu_menu_component__ = __webpack_require__("../../../../../src/app/components/playouts/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_playouts_header_header_component__ = __webpack_require__("../../../../../src/app/components/playouts/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_mains_user_user_component__ = __webpack_require__("../../../../../src/app/components/mains/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_playouts_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/playouts/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// My libraries

/** MY SERVICE **/







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_1__components_playouts_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_2__components_playouts_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_playouts_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_playouts_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_mains_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_playouts_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_10__services_httpClient_service__["a" /* HttpClientService */],
            __WEBPACK_IMPORTED_MODULE_11__services_logging_service__["a" /* LoggingService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_playouts_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/playouts/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_playouts_login_login_component__ = __webpack_require__("../../../../../src/app/components/playouts/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_mains_user_user_component__ = __webpack_require__("../../../../../src/app/components/mains/user/user.component.ts");




var APP_ROUTES = [
    { path: '', redirectTo: 'dashboards', pathMatch: 'full' },
    { path: 'dashboards', component: __WEBPACK_IMPORTED_MODULE_1__components_playouts_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_playouts_login_login_component__["a" /* LoginComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_3__components_mains_user_user_component__["a" /* UserComponent */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/mains/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\n  <!-- BEGIN BREADCRUMBS -->\n  <div class=\"breadcrumbs\">\n    <h1>USER</h1>\n    <ol class=\"breadcrumb\">\n      <li>\n        <a href=\"#\">Home</a>\n      </li>\n      <li class=\"active\">Dashboard</li>\n    </ol>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/mains/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_httpClient_service__ = __webpack_require__("../../../../../src/app/services/httpClient.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(httpClientService) {
        this.httpClientService = httpClientService;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/components/mains/user/user.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_httpClient_service__["a" /* HttpClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_httpClient_service__["a" /* HttpClientService */]) === "function" && _a || Object])
], UserComponent);

var _a;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/playouts/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\n  <!-- BEGIN BREADCRUMBS -->\n  <div class=\"breadcrumbs\">\n    <h1>Dashboard</h1>\n    <ol class=\"breadcrumb\">\n      <li>\n        <a href=\"#\">Home</a>\n      </li>\n      <li class=\"active\">Dashboard</li>\n    </ol>\n  </div>\n  <!-- END BREADCRUMBS -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/playouts/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_httpClient_service__ = __webpack_require__("../../../../../src/app/services/httpClient.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(httpClientService, authenticationService, router) {
        var _this = this;
        this.httpClientService = httpClientService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.fullname = '';
        this.position_name = '';
        this.user_image = '';
        this._httpClientSubscription = this.httpClientService.httpClient$.subscribe(function (status) {
            // this.loggingService.consoleLog("%c Profile", "background: green; color: white");
            // this.loggingService.consoleLog(status);
            if (status) {
                _this.fullname = _this.authenticationService.authenticateUser.fullname;
                _this.position_name = _this.authenticationService.authenticateUser.position_name;
                _this.user_image = _this.authenticationService.authenticateUser.file_path;
            }
            else {
                _this.fullname = '';
                _this.position_name = '';
                _this.user_image = '';
            }
            // this.loggingService.consoleLog("%c ----------", "background: green; color: white");
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.logOut = function () {
        this.authenticationService.logOut();
    };
    DashboardComponent.prototype.onClick = function (event) {
        this.active = !this.active;
        event.preventDefault();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/playouts/dashboard/dashboard.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_httpClient_service__["a" /* HttpClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_httpClient_service__["a" /* HttpClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/playouts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"copyright\">2015 © Metronic by keenthemes.\n  <a href=\"http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes\" title=\"Purchase Metronic just for 27$ and get lifetime updates for free\"\n    target=\"_blank\">Purchase Metronic!</a>\n</p>\n<a href=\"#index\" class=\"go2top\">\n                    <i class=\"icon-arrow-up\"></i>\n                </a>\n"

/***/ }),

/***/ "../../../../../src/app/components/playouts/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/playouts/footer/footer.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/playouts/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header class=\"page-header\">\n  <nav class=\"navbar mega-menu\" role=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"clearfix navbar-fixed-top\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-responsive-collapse\">\n                                <span class=\"sr-only\">Toggle navigation</span>\n                                <span class=\"toggle-icon\">\n                                    <span class=\"icon-bar\"></span>\n                                    <span class=\"icon-bar\"></span>\n                                    <span class=\"icon-bar\"></span>\n                                </span>\n                            </button>\n        <!-- End Toggle Button -->\n        <!-- BEGIN LOGO -->\n        <a id=\"index\" class=\"page-logo\" href=\"index.html\">\n                                <img src=\"assets/pages/img/logo.png\" alt=\"Logo\"> </a>\n        <!-- END LOGO -->\n        <!-- BEGIN SEARCH -->\n        <form class=\"search\" action=\"extra_search.html\" method=\"GET\">\n          <input type=\"name\" class=\"form-control\" name=\"query\" placeholder=\"Search...\">\n          <a href=\"javascript:;\" class=\"btn submit\">\n                                    <i class=\"fa fa-search\"></i>\n                                </a>\n        </form>\n        <!-- END SEARCH -->\n        <!-- BEGIN TOPBAR ACTIONS -->\n        <div class=\"topbar-actions\">\n          <!-- BEGIN USER PROFILE -->\n          <div class=\"btn-group-img btn-group\">\n            <button type=\"button\" class=\"btn btn-sm dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\">\n                                        <span>Hi, Marcus</span>\n                                        <img src=\"assets/layout/img/avatar1.jpg\" alt=\"\"> </button>\n            <ul class=\"dropdown-menu-v2\" role=\"menu\">\n              <li>\n                <a href=\"page_user_profile_1.html\">\n                                                <i class=\"icon-user\"></i> My Profile\n                                                <span class=\"badge badge-danger\">1</span>\n                                            </a>\n              </li>\n              <li>\n                <a href=\"app_calendar.html\">\n                                                <i class=\"icon-calendar\"></i> My Calendar </a>\n              </li>\n              <li>\n                <a href=\"app_inbox.html\">\n                                                <i class=\"icon-envelope-open\"></i> My Inbox\n                                                <span class=\"badge badge-danger\"> 3 </span>\n                                            </a>\n              </li>\n              <li>\n                <a href=\"app_todo_2.html\">\n                                                <i class=\"icon-rocket\"></i> My Tasks\n                                                <span class=\"badge badge-success\"> 7 </span>\n                                            </a>\n              </li>\n              <li class=\"divider\"> </li>\n              <li>\n                <a href=\"page_user_lock_1.html\">\n                                                <i class=\"icon-lock\"></i> Lock Screen </a>\n              </li>\n              <li>\n                <a  (click)=\"logOut()\">\n                                                <i class=\"icon-key\"></i> Log Out </a>\n              </li>\n            </ul>\n          </div>\n          <!-- END USER PROFILE -->\n\n\n\n        </div>\n        <!-- END TOPBAR ACTIONS -->\n      </div>\n\n      <!-- Menu Top -->\n      <app-menu></app-menu>\n\n    </div>\n    <!--/container-->\n  </nav>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/components/playouts/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_httpClient_service__ = __webpack_require__("../../../../../src/app/services/httpClient.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(httpClientService, authenticationService, router) {
        var _this = this;
        this.httpClientService = httpClientService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.fullname = "";
        this.position_name = "";
        this.supplier_name = "";
        this.distributor_name = "";
        this.user_image = "";
        this.nav_is_full = true;
        this.nav_have_not_user = true;
        this._httpClientSubscription = this.httpClientService.httpClient$.subscribe(function (status) {
            if (status) {
                _this.fullname = _this.authenticationService.authenticateUser.fullname;
                _this.position_name = _this.authenticationService.authenticateUser.position_name;
                _this.supplier_name = _this.authenticationService.authenticateUser.supplier_name;
                _this.distributor_name = _this.authenticationService.authenticateUser.distributor_name;
                _this.user_image = _this.authenticationService.authenticateUser.file_path;
            }
            else {
                _this.fullname = '';
                _this.position_name = '';
                _this.supplier_name = '';
                _this.distributor_name = '';
                _this.user_image = '';
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.displayItemOnNav();
    };
    HeaderComponent.prototype.logOut = function () {
        this.authenticationService.logOut();
    };
    HeaderComponent.prototype.displayItemOnNav = function () {
        if (this.router.url == '/login')
            return;
        var statusNavFull = localStorage.getItem('nav_is_full');
        if (statusNavFull != null)
            if (statusNavFull == 'false') {
                if (!document.getElementById('display-nav'))
                    return;
                document.getElementById('display-nav').click();
            }
        var statusNavUser = localStorage.getItem('nav_have_not_user');
        if (statusNavUser != null)
            if (statusNavUser == 'false') {
                if (!document.getElementById('display-user'))
                    return;
                document.getElementById('display-user').click();
            }
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/playouts/header/header.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_httpClient_service__["a" /* HttpClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_httpClient_service__["a" /* HttpClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/playouts/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n  <a href=\"index.html\">\n                <img src=\"assets/pages/img/logo.png\" alt=\"\" /> </a>\n</div>\n<div class=\"content\">\n  <!-- BEGIN LOGIN FORM -->\n  <form name=\"form\" class=\"form-validation\">\n    <h3 class=\"form-title font-green\">Sign In</h3>\n    <div class=\"alert alert-danger display-hide\">\n      <button class=\"close\" data-close=\"alert\"></button>\n      <span>Vui lòng điền đầy đủ thông tin. </span>\n    </div>\n    <div class=\"form-group\">\n      <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->\n      <label class=\"control-label visible-ie8 visible-ie9\">Username</label>\n      <input type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" placeholder=\"Username\" class=\"form-control no-border\" required\n        autofocus>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label visible-ie8 visible-ie9\">Password</label>\n      <input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"Password\" class=\"form-control no-border\"\n        required>\n    </div>\n    <div class=\"form-actions\">\n      <button type=\"submit\" class=\"btn btn-lg green btn-block\" (click)=\"postAuthentication()\">Đăng nhập</button>\n      <!-- <button type=\"submit\" class=\"btn green uppercase\">Login</button> -->\n    </div>\n\n    <div class=\"create-account\">\n      <p style=\"font-family: unset;color: darkgrey;\">TinTanSoft &copy; 2017 Copyright.</p>\n    </div>\n  </form>\n\n  <!-- END LOGIN FORM -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/playouts/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_httpClient_service__ = __webpack_require__("../../../../../src/app/services/httpClient.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authenticationService, httpClientService, router) {
        this.authenticationService = authenticationService;
        this.httpClientService = httpClientService;
        this.router = router;
        this.user = {
            username: "admin",
            password: "123456"
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.postAuthentication = function () {
        var _this = this;
        this.httpClientService.post('authentication', { "user": this.user }).subscribe(function (success) {
            // /* SAVE TOKEN */
            _this.authenticationService.authenticateToken = success['token'];
            _this.getAuthorization(_this.authenticationService.authenticateToken);
        }, function (Error) {
            console.log(Error);
        });
    };
    LoginComponent.prototype.getAuthorization = function (token) {
        var _this = this;
        this.httpClientService.createHeaderFromToken(token);
        this.httpClientService.get('authorization').subscribe(function (success) {
            /** save User */
            _this.authenticationService.authenticateUser = success['user'];
            /** Save Role */
            var array_role = success['roles'];
            _this.authenticationService.authenticateRole = [];
            for (var i = 0; i < array_role.length; i++) {
                _this.authenticationService.authenticateRole.push(array_role[i]);
            }
            /** save Group Role */
            var array_group_role = success['group_roles'];
            _this.authenticationService.authenticateGroupRole = [];
            for (var i = 0; i < array_group_role.length; i++) {
                _this.authenticationService.authenticateGroupRole.push(array_group_role[i]);
            }
            /**Save Auth */
            _this.authenticationService.createAuthLocalStorage();
            _this.authenticationService.notifyAuthenticate(true);
            _this.router.navigate(['/dashboards']);
        }, function (Error) {
            alert('Loi get');
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/playouts/login/login.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_httpClient_service__["a" /* HttpClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_httpClient_service__["a" /* HttpClientService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/playouts/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-collapse collapse navbar-collapse navbar-responsive-collapse\">\n  <ul class=\"nav navbar-nav\">\n    <ng-container *ngFor=\"let group_role of group_roles\">\n      <ng-container [ngSwitch]=\"group_role.id\">\n        <ng-container *ngSwitchDefault>\n          <li *ngIf=\"sliceRoles(group_role.id).length != 0\" class=\"dropdown dropdown-fw\" routerLinkActive=\" open selected\">\n            <a class=\"auto\">\n             <i class=\"icon-home\"></i> {{ group_role.description }}\n            </a>\n            <ul class=\"dropdown-menu dropdown-menu-fw\">\n              <li *ngFor=\"let role of sliceRoles(group_role.id)\" routerLinkActive=\"active\">\n                <a [routerLink]=\"role.router_link\">\n                  <i class=\"icon-bar-chart\"></i> {{role.description}} </a>\n              </li>\n            </ul>\n          </li>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/playouts/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_httpClient_service__ = __webpack_require__("../../../../../src/app/services/httpClient.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = (function () {
    function MenuComponent(httpClientService, authenticationService, router) {
        var _this = this;
        this.httpClientService = httpClientService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.roles = [];
        this.group_roles = [];
        this.fullname = '';
        this.position_name = '';
        this.user_image = '';
        this._httpClientSubscription = this.httpClientService.httpClient$.subscribe(function (status) {
            if (status) {
                _this.roles = _this.authenticationService.authenticateRole;
                _this.group_roles = _this.authenticationService.authenticateGroupRole;
                _this.fullname = _this.authenticationService.authenticateUser.fullname;
                _this.position_name = _this.authenticationService.authenticateUser.position_name;
                _this.user_image = _this.authenticationService.authenticateUser.file_path;
            }
            else {
                _this.roles = [];
                _this.group_roles = [];
                _this.fullname = '';
                _this.position_name = '';
                _this.user_image = '';
            }
        });
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.sliceRoles = function (group_role_id) {
        return this.roles.filter(function (o) {
            return o['group_role_id'] == group_role_id;
        });
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/components/playouts/menu/menu.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_httpClient_service__["a" /* HttpClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_httpClient_service__["a" /* HttpClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], MenuComponent);

var _a, _b, _c;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(router) {
        this.router = router;
        this.authenticate = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.authenticate$ = this.authenticate.asObservable();
        this.authenticateRole = [];
        this.authenticateGroupRole = [];
        this.authenticateUser = null;
        this.checkAuthLocalStorage();
    }
    AuthenticationService.prototype.checkAuthLocalStorage = function () {
        try {
            if (localStorage.getItem('_token')) {
                /** Get auth form Local Storage */
                this.getAuthLocalStorage();
                /** Notify */
                this.notifyAuthenticate(true);
            }
            else {
                this.clearAuthLocalStorage();
                this.notifyAuthenticate(false);
            }
        }
        catch (exception) {
            /** Clear Auth In local Storage */
            this.clearAuthLocalStorage();
            /** Notify */
            this.notifyAuthenticate(false);
        }
    };
    AuthenticationService.prototype.getAuthLocalStorage = function () {
        /* Get Token */
        this.authenticateToken = localStorage.getItem('_token');
    };
    AuthenticationService.prototype.createAuthLocalStorage = function () {
        /** Clear Local Storage */
        this.clearAuthLocalStorage();
        /** Create Token */
        localStorage.setItem('_token', this.authenticateToken);
    };
    AuthenticationService.prototype.clearAuthLocalStorage = function () {
        /* remove TOKEN */
        localStorage.removeItem('_token');
    };
    AuthenticationService.prototype.notifyAuthenticate = function (status) {
        this.authenticate.next(status);
    };
    AuthenticationService.prototype.logOut = function () {
        this.clearAuthLocalStorage();
        this.notifyAuthenticate(false);
        this.router.navigate(['/login']);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/httpClient.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logging_service__ = __webpack_require__("../../../../../src/app/services/logging.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HttpClientService = (function () {
    function HttpClientService(http, authenticationService, router, loggingService) {
        var _this = this;
        this.http = http;
        this.authenticationService = authenticationService;
        this.router = router;
        this.loggingService = loggingService;
        this._headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.httpClient = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.httpClient$ = this.httpClient.asObservable();
        this.apiHost = '';
        this.apiUrl = '';
        this.apiVersion = '';
        var config = this.getConfig();
        this.apiHost = config.apiHost;
        this.apiUrl = config.apiUrl;
        this.apiVersion = config.apiVersion;
        this._authSubscription = this.authenticationService.authenticate$.subscribe(function (status) {
            // this.loggingService.consoleLog("%c HttpClientService", "color: green");
            // this.loggingService.consoleLog(status);
            if (status) {
                _this.createHeader();
                _this.loggingService.consoleLog("%c Tạo header", "color: green");
                _this.loggingService.consoleLog("%c Role", "color: green");
                _this.loggingService.consoleTable(_this.authenticationService.authenticateRole);
                _this.loggingService.consoleLog("%c User", "color: green");
                _this.loggingService.consoleLog(_this.authenticationService.authenticateUser);
                _this.loggingService.consoleWarn(_this.authenticationService.authenticateUser);
                _this.get('authorization').subscribe(function (success) {
                    /* SAVE USER */
                    _this.authenticationService.authenticateUser = success['user'];
                    /* SAVE ROLE */
                    _this.authenticationService.authenticateRole = success['roles'];
                    /* SAVE GROUP ROLE */
                    _this.authenticationService.authenticateGroupRole = success['group_roles'];
                    /* SAVE AUTH */
                    _this.authenticationService.createAuthLocalStorage();
                    // this.authenticationService.notifyAuthenticate(true);
                    _this.notifyHttpClient(true);
                    // this.loggingService.consoleLog("%c Role", "color: green");
                    // this.loggingService.consoleTable(this.authenticationService.authenticateRole);
                    // this.loggingService.consoleLog("%c User", "color: green");
                    // this.loggingService.consoleLog(this.authenticationService.authenticateUser);
                    // this.loggingService.consoleLog("%c Current URL: " + this.router.url, "color: yellow; background: black");
                    // this.loggingService.consoleLog("%c -----------------", "color: green");
                    _this.router.navigate([_this.router.url]);
                }, function (error) {
                    _this.authenticationService.clearAuthLocalStorage();
                    _this.authenticationService.notifyAuthenticate(false);
                    _this.notifyHttpClient(false);
                });
            }
            else {
                _this.removeHeader();
                _this.notifyHttpClient(false);
            }
        });
    }
    HttpClientService.prototype.getConfig = function () {
        // Pure Ajax
        var config;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                config = JSON.parse(this.responseText);
            }
        };
        xhttp.open("GET", "./assets/config/app.config.json", false);
        xhttp.send();
        return config;
    };
    HttpClientService.prototype.createHeader = function () {
        this._headers.delete('Authorization');
        this._headers.append('Authorization', 'Bearer ' + localStorage.getItem('_token'));
    };
    HttpClientService.prototype.createHeaderFromToken = function (token) {
        this._headers.delete('Authorization');
        this._headers.append('Authorization', 'Bearer ' + token);
    };
    HttpClientService.prototype.removeHeader = function () {
        this._headers.delete('Authorization');
    };
    HttpClientService.prototype.get = function (url, mode) {
        var _this = this;
        if (mode === void 0) { mode = 'json'; }
        // toPromise().then(if status code = 401 redirect to login)
        return this.http.get(this.apiHost + "/" + this.apiUrl + "/" + this.apiVersion + "/" + url, {
            headers: this._headers
        })
            .map(function (res) {
            if (res.status == 401) {
                _this.authenticationService.clearAuthLocalStorage();
                _this.authenticationService.notifyAuthenticate(false);
                _this.router.navigate(['/login']);
            }
            if (mode == 'json')
                return res.json();
            else if (mode == 'text')
                return res.text();
            else
                return res;
        });
    };
    HttpClientService.prototype.post = function (url, data) {
        return this.http.post(this.apiHost + "/" + this.apiUrl + "/" + this.apiVersion + "/" + url, data, {
            headers: this._headers
        })
            .map(function (res) { return res.json(); });
    };
    HttpClientService.prototype.put = function (url, data) {
        return this.http.put(this.apiHost + "/" + this.apiUrl + "/" + this.apiVersion + "/" + url, data, {
            headers: this._headers
        })
            .map(function (res) { return res.json(); });
    };
    HttpClientService.prototype.patch = function (url, data) {
        return this.http.patch(this.apiHost + "/" + this.apiUrl + "/" + this.apiVersion + "/" + url, data, {
            headers: this._headers
        })
            .map(function (res) { return res.json(); });
    };
    HttpClientService.prototype.delete = function (url) {
        return this.http.delete(this.apiHost + "/" + this.apiUrl + "/" + this.apiVersion + "/" + url, {
            headers: this._headers
        })
            .map(function (res) { return res.json(); });
    };
    /** Pure HTTP Method */
    HttpClientService.prototype.pureGet = function (url, mode) {
        if (mode === void 0) { mode = 'json'; }
        return this.http.get("" + url, {
            headers: this._headers
        })
            .map(function (res) {
            if (mode == 'json')
                return res.json();
            else if (mode == 'text')
                return res.text();
            else
                return res;
        });
    };
    HttpClientService.prototype.purePost = function (url, data) {
        return this.http.post("" + url, data, {
            headers: this._headers
        })
            .map(function (res) { return res.json(); });
    };
    HttpClientService.prototype.purePut = function (url, data) {
        return this.http.put("" + url, data, {
            headers: this._headers
        })
            .map(function (res) { return res.json(); });
    };
    HttpClientService.prototype.purePatch = function (url, data) {
        return this.http.patch("" + url, data, {
            headers: this._headers
        })
            .map(function (res) { return res.json(); });
    };
    HttpClientService.prototype.pureDelete = function (url) {
        return this.http.delete("" + url, {
            headers: this._headers
        })
            .map(function (res) { return res.json(); });
    };
    HttpClientService.prototype.notifyHttpClient = function (status) {
        this.httpClient.next(status);
    };
    HttpClientService.prototype.getDatasPage = function (url, page, pageSize) {
        return this.http.get(this.apiHost + "/" + this.apiUrl + "/" + this.apiVersion + "/" + url + "/page/" + page + "/" + pageSize, {
            headers: this._headers
        });
    };
    return HttpClientService;
}());
HttpClientService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__logging_service__["a" /* LoggingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__logging_service__["a" /* LoggingService */]) === "function" && _d || Object])
], HttpClientService);

var _a, _b, _c, _d;
//# sourceMappingURL=httpClient.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/logging.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggingService = (function () {
    function LoggingService() {
        var config = this.getConfig();
        this.env = config.env;
    }
    LoggingService.prototype.consoleLog = function (data, color) {
        if (this.env === 'dev')
            console.log(data, color);
    };
    LoggingService.prototype.consoleTable = function (data) {
        if (this.env === 'dev')
            console.table(data);
    };
    LoggingService.prototype.consoleInfo = function (data) {
        if (this.env === 'dev')
            console.info(data);
    };
    LoggingService.prototype.consoleWarn = function (data) {
        if (this.env === 'dev')
            console.warn(data);
    };
    LoggingService.prototype.consoleError = function (data) {
        if (this.env === 'dev')
            console.error(data);
    };
    LoggingService.prototype.getConfig = function () {
        // Pure Ajax
        var config;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                config = JSON.parse(this.responseText);
            }
        };
        xhttp.open("GET", "./assets/config/app.config.json", false);
        xhttp.send();
        return config;
    };
    return LoggingService;
}());
LoggingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LoggingService);

//# sourceMappingURL=logging.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map