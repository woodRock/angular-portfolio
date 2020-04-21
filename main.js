(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Latest compiled and minified CSS -->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<!-- jQuery library -->\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<!-- Latest compiled JavaScript -->\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<!-- Icon library -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<link href=\"https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap\" rel=\"stylesheet\"> \n<link rel=\"stylesheet\"\n  href=\"https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en\">\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n<link rel=\"stylesheet\" href=\"https://code.getmdl.io/1.3.0/material.min.css\">\n\n<app-title></app-title>\n<div class=\"content\" [@routeAnimations]=\"o && o.activatedRouteData\n      && o.activatedRouteData['animation']\">\n  <router-outlet #o=\"outlet\"></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-me/about-me.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-me/about-me.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<app-home></app-home>\n<div class=\"content\">\n  <ul class=\"inline\">\n    <li *ngFor=\"let social of social\">\n      <a href=\"{{social.link}}\" class=\"fa fa-{{social.title}}\"></a>\n    </li>\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/corona/corona.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/corona/corona.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"black\">\n  <div>\n    <iframe id=\"iframe\" [attr.src]=\"getURL()\"></iframe>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"content\" style=\"display: flex; justify-content: center; align-items: center\">\n    <mat-progress-spinner color=\"primary\" mode=\"indeterminate\">\n    </mat-progress-spinner>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content mdl-layout__content\">\n  <div *ngFor=\"let feature of features\"  class=\"feature active mdl-typography--text-center\" [style.background]=\"'url(' + feature.gif + ')'\" [style.background-repeat]=\"'no-repeat'\" [style.background-size]=\"'cover'\" style=\"background-repeat: no-repeat\" [style.background-position]=\"'center'\">\n    <div class=\"feature-font slogan\">{{feature.title}}</div>\n    <div class=\"feature-font sub-slogan\">{{feature.description}}</div>\n    <div class=\"feature-font github-link\">\n      <a routerLink=\"{{feature.link}}\">\n        <img src=\"{{feature.linkImage}}\" height=20px width=20px>\n        <b>See Also</b>\n        {{feature.link}}\n      </a>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/languages/languages.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/languages/languages.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n  <div class=\"row\">\n      <div class=\"column\" *ngFor=\"let language of languages\">\n          <img src=\"{{language.url}}\" width=\"100\" height=\"100\" alt=\"{{language.name}}\">\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n  <div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\" [style.background-repeat]=\"'no-repeat'\" [style.background-size]=\"'cover'\" style=\"background-repeat: no-repeat\">\n    <div class=\"projects\">\n      <div class=\"mdl-grid\">\n        <div *ngFor=\"let project of projects | sortgrid : '-time'\" id=\"first\" class=\"card mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp\">\n          <div class=\"mdl-card__media card-image not-pink-please\">\n            <img src=\"{{project.image}}\" class=\"square\" alt=\"Avatar\">\n          </div>\n          <div class=\"mdl-card__title\">\n            <strong>\n              {{ getFolderName(project.title) }}\n            </strong>\n            <div class=\"mdl-card__subtitle-text\">\n              |\n              {{ project.time | timeAgo }}\n            </div>\n          </div>\n          <div class=\"mdl-card__supporting-text\">\n            <div>{{project.description}}</div>\n          </div>\n          <div class=\"button mdl-card__actions\">\n            <a class=\"mdl-button mdl-js-button mdl-typography--text-uppercase\" href=\"{{project.link}}\">\n              Source\n              <i class=\"material-icons\">code</i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/title/title.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/title/title.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sticky nav\">\n  <nav mat-tab-nav-bar class=\"right\">\n    <div class=\"button\">\n      <a *ngFor=\"let tab of tabs\" mat-tab-link routerLinkActive #rla=\"routerLinkActive\" [active]=\"rla.isActive\" [routerLink]=\"tab.path\">\n        <i class=\"material-icons\">{{ tab.path }}</i>\n      </a>\n    </div>\n    <div class=\"button\">\n      <p [class]=\"'main-title' + ' ' + 'logo-font' + ' '+'title'\">{{ title }}</p>\n    </div>\n  </nav>\n</div>\n");

/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about-me/about-me.component */ "./src/app/components/about-me/about-me.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_corona_corona_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/corona/corona.component */ "./src/app/components/corona/corona.component.ts");
/* harmony import */ var _components_languages_languages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/languages/languages.component */ "./src/app/components/languages/languages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var routes = [
    { path: 'code', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"], data: { animation: 'code' } },
    { path: 'language', component: _components_languages_languages_component__WEBPACK_IMPORTED_MODULE_5__["LanguagesComponent"], data: { animation: 'language' } },
    { path: 'person', component: _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"], data: { animation: 'person' } },
    { path: 'map', component: _components_corona_corona_component__WEBPACK_IMPORTED_MODULE_4__["CoronaComponent"], data: { animation: 'map' } },
    { path: '', pathMatch: 'full', redirectTo: '/code' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body,\nhtml {\n  background: var(--third-color);\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\nbody {\n  background-color: var(--fourth-color);\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\n.content {\n  top: 49px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsOEJBQThCO0VBQzlCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSxcbmh0bWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGlyZC1jb2xvcik7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm91cnRoLWNvbG9yKTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jb250ZW50IHtcbiAgdG9wOiA0OXB4O1xufVxuIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route-animation */ "./src/app/route-animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'WoodRock';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]],
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about-me/about-me.component */ "./src/app/components/about-me/about-me.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/title/title.component */ "./src/app/components/title/title.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _util_sort_grid_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./util/sort-grid.pipe */ "./src/app/util/sort-grid.pipe.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var _components_corona_corona_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/corona/corona.component */ "./src/app/components/corona/corona.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _components_languages_languages_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/languages/languages.component */ "./src/app/components/languages/languages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
                _components_title_title_component__WEBPACK_IMPORTED_MODULE_8__["TitleComponent"],
                _util_sort_grid_pipe__WEBPACK_IMPORTED_MODULE_17__["SortGridPipe"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_18__["TimeAgoPipe"],
                _components_corona_corona_component__WEBPACK_IMPORTED_MODULE_19__["CoronaComponent"],
                _components_languages_languages_component__WEBPACK_IMPORTED_MODULE_21__["LanguagesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__["AngularFireStorageModule"],
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about-me/about-me.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Style all font awesome icons */\n.fa {\n padding: 20px;\n font-size: 50px;\n width: 100px;\n height: 100px;\n text-align: center;\n text-decoration: none;\n}\n/* Add a hover effect if you want */\n.fa:hover {\n opacity: 0.7;\n}\n/* Set a specific color for each brand */\n/* Github */\n.fa-github {\n background: black;\n color: white;\n}\n/* Twitter */\n.fa-twitter {\n background: #55ACEE;\n color: white;\n}\n/* Linkedin */\n.fa-linkedin {\n  background-color: #2a445d;\n  color: white;\n}\n/* University */\n.fa-university {\n  background-color: #015138;\n  color: white;\n}\n/* CV */\n.fa-file {\n  background-color: #ff9600;\n  color: white;\n}\n/* Steam */\n.fa-steam {\n  background-color: black;\n  color: white;\n}\n.content {\n  position: relative;\n  text-align: center;\n  margin: 0 auto;\n  background: black;\n}\n/* Make links side by side */\n.inline li {\n  display: inline;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQztBQUNqQztDQUNDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIscUJBQXFCO0FBQ3RCO0FBRUEsbUNBQW1DO0FBQ25DO0NBQ0MsWUFBWTtBQUNiO0FBRUEsd0NBQXdDO0FBRXhDLFdBQVc7QUFDWDtDQUNDLGlCQUFpQjtDQUNqQixZQUFZO0FBQ2I7QUFFQSxZQUFZO0FBQ1o7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiO0FBRUEsYUFBYTtBQUNiO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUVBLGVBQWU7QUFDZjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFFQSxPQUFPO0FBQ1A7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUEsVUFBVTtBQUNWO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlIGFsbCBmb250IGF3ZXNvbWUgaWNvbnMgKi9cbi5mYSB7XG4gcGFkZGluZzogMjBweDtcbiBmb250LXNpemU6IDUwcHg7XG4gd2lkdGg6IDEwMHB4O1xuIGhlaWdodDogMTAwcHg7XG4gdGV4dC1hbGlnbjogY2VudGVyO1xuIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogQWRkIGEgaG92ZXIgZWZmZWN0IGlmIHlvdSB3YW50ICovXG4uZmE6aG92ZXIge1xuIG9wYWNpdHk6IDAuNztcbn1cblxuLyogU2V0IGEgc3BlY2lmaWMgY29sb3IgZm9yIGVhY2ggYnJhbmQgKi9cblxuLyogR2l0aHViICovXG4uZmEtZ2l0aHViIHtcbiBiYWNrZ3JvdW5kOiBibGFjaztcbiBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFR3aXR0ZXIgKi9cbi5mYS10d2l0dGVyIHtcbiBiYWNrZ3JvdW5kOiAjNTVBQ0VFO1xuIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogTGlua2VkaW4gKi9cbi5mYS1saW5rZWRpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTQ0NWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogVW5pdmVyc2l0eSAqL1xuLmZhLXVuaXZlcnNpdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE1MTM4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIENWICovXG4uZmEtZmlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk2MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogU3RlYW0gKi9cbi5mYS1zdGVhbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLyogTWFrZSBsaW5rcyBzaWRlIGJ5IHNpZGUgKi9cbi5pbmxpbmUgbGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/about-me/about-me.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/crud.service */ "./src/app/services/crud.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent(service) {
        this.service = service;
    }
    AboutMeComponent_1 = AboutMeComponent;
    AboutMeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.setName(AboutMeComponent_1.COLLECTION);
        this.subscription = this.service.list().subscribe(function (social) {
            _this._social = social;
        });
    };
    AboutMeComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    Object.defineProperty(AboutMeComponent.prototype, "social", {
        get: function () {
            return this._social;
        },
        enumerable: true,
        configurable: true
    });
    var AboutMeComponent_1;
    AboutMeComponent.COLLECTION = 'social';
    AboutMeComponent.ctorParameters = function () { return [
        { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"] }
    ]; };
    AboutMeComponent = AboutMeComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __importDefault(__webpack_require__(/*! raw-loader!./about-me.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-me/about-me.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./about-me.component.css */ "./src/app/components/about-me/about-me.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"]])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/components/corona/corona.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/corona/corona.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".black {\n  background: black;\n}\n\n.content {\n  margin: auto;\n  background: var(--fourth-color);\n  display: block;\n  position: relative;\n  height: 100%;\n  widht: 100%;\n  top: 50px;\n}\n\niframe {\n  position: absolute;\n  top: 39px;\n  left: 0;\n  width: 100%;\n  height: 94%;\n  border:0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3JvbmEvY29yb25hLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29yb25hL2Nvcm9uYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsYWNrIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3VydGgtY29sb3IpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZGh0OiAxMDAlO1xuICB0b3A6IDUwcHg7XG59XG5cbmlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzOXB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5NCU7XG4gIGJvcmRlcjowO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/corona/corona.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/corona/corona.component.ts ***!
  \*******************************************************/
/*! exports provided: CoronaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoronaComponent", function() { return CoronaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var CoronaComponent = /** @class */ (function () {
    function CoronaComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this._loading = true;
        var map = 'https://www.google.com/maps/d/embed?mid=1OpK1PunEXt7LnC3Xa6EwlFWq0k1AoVnY';
        this.URL = this.sanitizer.bypassSecurityTrustResourceUrl(map);
    }
    CoronaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var iframe = document.getElementById('iframe');
        iframe.onload = function () {
            _this._loading = false;
        };
    };
    Object.defineProperty(CoronaComponent.prototype, "loading", {
        get: function () {
            return this._loading;
        },
        enumerable: true,
        configurable: true
    });
    CoronaComponent.prototype.getURL = function () {
        return this.URL;
    };
    CoronaComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
    ]; };
    CoronaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-corona',
            template: __importDefault(__webpack_require__(/*! raw-loader!./corona.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/corona/corona.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./corona.component.css */ "./src/app/components/corona/corona.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], CoronaComponent);
    return CoronaComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Add rounded corners to the top left and the */\n.content{\n  background: black;\n  background-color: var(--third-color);\n  display: block;\n  position: relative;\n}\n.feature {\n  position: relative;\n  height: 800px;\n  width: auto;\n  background-color: var(--third-color);\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.feature-font {\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  line-height: 1;\n  color: var(--third-color);\n  font-weight: 500;\n  font-size: 50px;\n}\n.slogan {\n  font-size: 60px;\n  padding-top: 160px;\n}\n.sub-slogan {\n  font-size: 21px;\n  margin: 0 16px;\n  padding-top: 8px;\n}\n.github-link {\n  font-size: 21px;\n  padding-top: 400px;\n}\n.github-link a {\n  text-decoration: none;\n  color: var(--third-color);\n  font-weight: 300;\n}\n/* Gifs appear when mouse hovers over them */\n/* ref: https://codepen.io/QDeltaE/pen/VWGYOB */\n.static {\n  position:absolute;\n  background: white;\n}\n.static:hover {\n  opacity:0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnREFBZ0Q7QUFDaEQ7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSx1REFBdUQ7RUFDdkQsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCO0FBRUEsNENBQTRDO0FBQzVDLCtDQUErQztBQUMvQztFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBZGQgcm91bmRlZCBjb3JuZXJzIHRvIHRoZSB0b3AgbGVmdCBhbmQgdGhlICovXG4uY29udGVudHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZlYXR1cmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5mZWF0dXJlLWZvbnQge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4uc2xvZ2FuIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBwYWRkaW5nLXRvcDogMTYwcHg7XG59XG5cbi5zdWItc2xvZ2FuIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBtYXJnaW46IDAgMTZweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLmdpdGh1Yi1saW5rIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBwYWRkaW5nLXRvcDogNDAwcHg7XG59XG5cbi5naXRodWItbGluayBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4vKiBHaWZzIGFwcGVhciB3aGVuIG1vdXNlIGhvdmVycyBvdmVyIHRoZW0gKi9cbi8qIHJlZjogaHR0cHM6Ly9jb2RlcGVuLmlvL1FEZWx0YUUvcGVuL1ZXR1lPQiAqL1xuLnN0YXRpYyB7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnN0YXRpYzpob3ZlciB7XG4gIG9wYWNpdHk6MDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/crud.service */ "./src/app/services/crud.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(service) {
        this.service = service;
    }
    HomeComponent_1 = HomeComponent;
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.setName(HomeComponent_1.COLLECTION);
        this.subscription = this.service.list().subscribe(function (feature) {
            _this._features = feature;
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    Object.defineProperty(HomeComponent.prototype, "features", {
        get: function () {
            return this._features;
        },
        enumerable: true,
        configurable: true
    });
    var HomeComponent_1;
    HomeComponent.COLLECTION = 'features';
    HomeComponent.ctorParameters = function () { return [
        { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"] }
    ]; };
    HomeComponent = HomeComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/languages/languages.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/languages/languages.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.content {\n  background: black;\n}\n\n/* Three image containers (use 25% for four, and 50% for two, etc) */\n\n.column {\n    float: left;\n    top: 49px;\n    padding: 50px;\n}\n\n/* Clear floats after image containers */\n\n.row::after {\n    content: \"\";\n    clear: both;\n    display: table;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5ndWFnZXMvbGFuZ3VhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLG9FQUFvRTs7QUFDcEU7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUEsd0NBQXdDOztBQUN4QztJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZ3VhZ2VzL2xhbmd1YWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGVudCB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4vKiBUaHJlZSBpbWFnZSBjb250YWluZXJzICh1c2UgMjUlIGZvciBmb3VyLCBhbmQgNTAlIGZvciB0d28sIGV0YykgKi9cbi5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRvcDogNDlweDtcbiAgICBwYWRkaW5nOiA1MHB4O1xufVxuXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgaW1hZ2UgY29udGFpbmVycyAqL1xuLnJvdzo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZGlzcGxheTogdGFibGU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/languages/languages.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/languages/languages.component.ts ***!
  \*************************************************************/
/*! exports provided: LANGUAGES, LanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGES", function() { return LANGUAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesComponent", function() { return LanguagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LANGUAGES = [
    {
        name: 'linux',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/869px-Tux.svg.png'
    },
    {
        name: 'bash',
        url: 'https://freesvg.org/img/1296126657.png'
    },
    {
        name: 'git',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png'
    },
    {
        name: 'gitlab',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/GitLab_Logo.svg/1200px-GitLab_Logo.svg.png'
    },
    {
        name: 'Github',
        url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
    },
    {
        name: 'javascript',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'
    },
    {
        name: 'typescript',
        url: 'https://cdn.worldvectorlogo.com/logos/typescript.svg'
    },
    {
        name: 'angular',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png'
    },
    {
        name: 'Vue',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png'
    },
    {
        name: 'firebase',
        url: 'https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png'
    },
    {
        name: 'java',
        url: 'https://cpng.pikpng.com/pngl/s/204-2047555_datei-java-logo-svg-java-logo-svg-clipart.png'
    },
    {
        name: 'haskell',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Haskell-Logo.svg/800px-Haskell-Logo.svg.png'
    },
    {
        name: 'ruby',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png'
    },
    {
        name: 'c',
        url: 'https://seeklogo.com/images/C/c-logo-672525892C-seeklogo.com.png'
    },
    {
        name: 'c++',
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Images_200px-ISO_C%2B%2B_Logo_svg.png'
    },
    {
        name: 'psql',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'
    },
    {
        name: 'mapserver',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/MapServer_logo.svg/1200px-MapServer_logo.svg.png'
    },
    {
        name: 'plantuml',
        url: 'https://lh3.googleusercontent.com/agXY3BUcC-ngVh9Vg6gG46ezZ4y_rbM0vzzcx4YiOOOckUVwD9S31m5XsmS6RvJJYdymd1t4=w128-h128-e365'
    },
    {
        name: 'unreal',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/UE_Logo_Black_Centered.svg/940px-UE_Logo_Black_Centered.svg.png'
    },
    {
        name: 'latex',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LaTeX_logo.svg/1280px-LaTeX_logo.svg.png'
    },
    {
        name: 'markdown',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Markdown-mark-solid.svg/1280px-Markdown-mark-solid.svg.png'
    },
];
var LanguagesComponent = /** @class */ (function () {
    function LanguagesComponent() {
        this._languages = LANGUAGES;
    }
    LanguagesComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(LanguagesComponent.prototype, "languages", {
        get: function () {
            return this._languages;
        },
        enumerable: true,
        configurable: true
    });
    LanguagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-languages',
            template: __importDefault(__webpack_require__(/*! raw-loader!./languages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/languages/languages.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./languages.component.css */ "./src/app/components/languages/languages.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], LanguagesComponent);
    return LanguagesComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* On mouse-over, add a deeper shadow */\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n/* Add some padding inside the card container */\n\n.container {\n  padding: 2px 16px;\n}\n\n.card {\n  margin: auto;\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  border-radius: 5px;\n  /* 5px rounded corners */\n  width: 40%;\n  background: var(--third-color);\n  margin-bottom: 20px;\n  height: 400px;\n  width: 250px;\n}\n\n/* Add rounded corners to the top left and the top right corner of the image */\n\nimg {\n  max-width: 100%;\n  max-height: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.content {\n  margin: auto;\n  background: black;\n  display: block;\n  position: relative;\n  top: 39px;\n}\n\n.projects {\n  width: 100%;\n  margin: auto;\n}\n\n.button a {\n  text-decoration: none;\n  background-color: var(--fourth-color);\n  color: var(--third-color);\n}\n\n.button a:hover {\n  background-color: var(--secondary-color);\n}\n\n.square {\n  background-color: var(-main-color);\n  align-content: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width:100%;\n  height:220px;\n}\n\n.not-pink-please {\n  background: var(--third-color);\n  background-color: var(--third-color);\n}\n\n.secondary-text {\n  color: #484848;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1Qzs7QUFFdkM7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUEsK0NBQStDOztBQUUvQztFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQSw4RUFBOEU7O0FBRTlFO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBkZWVwZXIgc2hhZG93ICovXG5cbi5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLyogQWRkIHNvbWUgcGFkZGluZyBpbnNpZGUgdGhlIGNhcmQgY29udGFpbmVyICovXG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAycHggMTZweDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8qIDVweCByb3VuZGVkIGNvcm5lcnMgKi9cbiAgd2lkdGg6IDQwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhpcmQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi8qIEFkZCByb3VuZGVkIGNvcm5lcnMgdG8gdGhlIHRvcCBsZWZ0IGFuZCB0aGUgdG9wIHJpZ2h0IGNvcm5lciBvZiB0aGUgaW1hZ2UgKi9cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDM5cHg7XG59XG5cbi5wcm9qZWN0cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5idXR0b24gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm91cnRoLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcbn1cblxuLmJ1dHRvbiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLnNxdWFyZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtbWFpbi1jb2xvcik7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoyMjBweDtcbn1cblxuLm5vdC1waW5rLXBsZWFzZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRoaXJkLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xufVxuXG4uc2Vjb25kYXJ5LXRleHQge1xuICBjb2xvcjogIzQ4NDg0ODtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/crud.service */ "./src/app/services/crud.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(service) {
        this.service = service;
    }
    ProjectsComponent_1 = ProjectsComponent;
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.setName(ProjectsComponent_1.COLLECTION);
        this.subscription = this.service.list().subscribe(function (projects) {
            _this._projects = projects;
        });
    };
    ProjectsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProjectsComponent.prototype.getFolderName = function (str) {
        return str.toLowerCase().split(' ').join('-');
    };
    Object.defineProperty(ProjectsComponent.prototype, "projects", {
        get: function () {
            return this._projects;
        },
        enumerable: true,
        configurable: true
    });
    var ProjectsComponent_1;
    ProjectsComponent.COLLECTION = 'projects';
    ProjectsComponent.ctorParameters = function () { return [
        { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"] }
    ]; };
    ProjectsComponent = ProjectsComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __importDefault(__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/title/title.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/title/title.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-title {\n  margin-top: 10px;\n  color: var(--third-color);\n  background-color: var(--fourth-color);\n}\n\n.logo-font {\n  font-family: 'Comic Neue';\n  font-size: 20pt;\n}\n\n.sticky {\n  background-color: var(--third-color);\n  position: fixed;\n  top: 0;\n  overflow: hidden;\n  z-index: 20;\n}\n\n.nav {\n  width: 100%;\n  background: var(--fourth-color);\n}\n\nfooter {\n  background-color: #ddd;\n  border-top: 1px solid #bbb;\n  text-align: center;\n}\n\n.button a {\n  text-decoration: none;\n  background-color: var(--fourth-color);\n  color: var(--third-color);\n}\n\n.button a:hover {\n  color: var(--third-color);\n  background-color: #8A2BE2; /* var(--background-colo); */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aXRsZS90aXRsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsTUFBTTtFQUNOLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUIsRUFBRSw0QkFBNEI7QUFDekQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvdXJ0aC1jb2xvcik7XG59XG5cbi5sb2dvLWZvbnQge1xuICBmb250LWZhbWlseTogJ0NvbWljIE5ldWUnO1xuICBmb250LXNpemU6IDIwcHQ7XG59XG5cbi5zdGlja3kge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAyMDtcbn1cblxuLm5hdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3VydGgtY29sb3IpO1xufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2JiYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnV0dG9uIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvdXJ0aC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XG59XG5cbi5idXR0b24gYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4QTJCRTI7IC8qIHZhcigtLWJhY2tncm91bmQtY29sbyk7ICovXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/title/title.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/title/title.component.ts ***!
  \*****************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
        this.typewriter_text = 'wR';
        this.typewriter_display = this.typewriter_text + '|';
    }
    TitleComponent.prototype.ngOnInit = function () {
        this.typingCallback(this);
    };
    TitleComponent.prototype.typingCallback = function (that) {
        var delay = 500;
        var total_length = that.typewriter_text.length;
        var current_length = that.typewriter_display.length;
        var cursor = '|';
        if (current_length < total_length) {
            that.typewriter_display += that.typewriter_text[current_length];
        }
        else {
            if (that.typewriter_display.slice(-1) === cursor) {
                that.typewriter_display = that.typewriter_display.slice(0, -1);
            }
            else {
                that.typewriter_display += cursor;
            }
        }
        setTimeout(that.typingCallback, delay, that);
    };
    TitleComponent.prototype.capitalise = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    Object.defineProperty(TitleComponent.prototype, "tabs", {
        get: function () {
            return _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["routes"].filter(function (i) { return i.path !== ''; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleComponent.prototype, "title", {
        get: function () {
            return this.typewriter_display;
        },
        enumerable: true,
        configurable: true
    });
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: __importDefault(__webpack_require__(/*! raw-loader!./title.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/title/title.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./title.component.css */ "./src/app/components/title/title.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/app/route-animation.ts":
/*!************************************!*\
  !*** ./src/app/route-animation.ts ***!
  \************************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    // route 'enter and leave (<=>)' transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*<=>*', [
        // css styles at start of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        // animation and styles at end of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
    ]),
]);


/***/ }),

/***/ "./src/app/services/crud.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/crud.service.ts ***!
  \******************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



function serialize(object) {
    return JSON.parse(JSON.stringify(object));
}
var CrudService = /** @class */ (function () {
    function CrudService(afs) {
        this.afs = afs;
    }
    CrudService.prototype.setName = function (name) {
        this.collection = this.afs.collection(name);
    };
    CrudService.prototype.add = function (entity, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (id) {
                _this.collection
                    .doc(id)
                    .set(serialize(entity))
                    .then(function (ref) {
                    resolve(entity);
                });
            }
            else {
                _this.collection.add(serialize(entity)).then(function (ref) {
                    var newEntity = __assign({ id: ref.id }, entity);
                    resolve(newEntity);
                });
            }
        });
    };
    CrudService.prototype.get = function (id) {
        return this.collection
            .doc(id)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (doc) {
            if (doc.payload.exists) {
                var data = doc.payload.data();
                var payloadId = doc.payload.id;
                return __assign({ id: payloadId }, data);
            }
        }));
    };
    CrudService.prototype.list = function () {
        return this.collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    };
    CrudService.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.collection
                .doc(entity.id)
                .set(serialize(entity))
                .then(function () {
                resolve(__assign({}, entity));
            });
        });
    };
    CrudService.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.collection
                .doc(id)
                .delete()
                .then(function () {
                resolve();
            });
        });
    };
    CrudService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"] }
    ]; };
    CrudService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"]])
    ], CrudService);
    return CrudService;
}());



/***/ }),

/***/ "./src/app/util/sort-grid.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/util/sort-grid.pipe.ts ***!
  \****************************************/
/*! exports provided: SortGridPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortGridPipe", function() { return SortGridPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SortGridPipe = /** @class */ (function () {
    function SortGridPipe() {
    }
    SortGridPipe.prototype.transform = function (array, args) {
        if (typeof args[0] === 'undefined') {
            return array;
        }
        var direction = args[0][0];
        var column = args.replace('-', '');
        array.sort(function (a, b) {
            var left = Number(new Date(a[column]));
            var right = Number(new Date(b[column]));
            return (direction === '-') ? right - left : left - right;
        });
        return array;
    };
    SortGridPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sortgrid'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SortGridPipe);
    return SortGridPipe;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyA6w14wLmGD4M3zYhUsWc_IZMsAO6Cs7Ng',
        authDomain: 'portfolio-7b51b.firebaseapp.com',
        databaseURL: 'https://portfolio-7b51b.firebaseio.com',
        projectId: 'portfolio-7b51b',
        storageBucket: 'portfolio-7b51b.appspot.com',
        messagingSenderId: '888392851400',
        appId: '1:888392851400:web:c91412c8602e7f2e6f2afd',
        measurementId: 'G-N4G5H32S57'
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/woodRock.github.io/woodRock.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map