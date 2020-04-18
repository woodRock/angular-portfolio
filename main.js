(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Latest compiled and minified CSS -->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<!-- jQuery library -->\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<!-- Latest compiled JavaScript -->\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<!-- Icon library -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<link rel=\"stylesheet\"\n  href=\"https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en\">\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n<link rel=\"stylesheet\" href=\"https://code.getmdl.io/1.3.0/material.min.css\">\n\n<app-title></app-title>\n<div [@routeAnimations]=\"o && o.activatedRouteData \n      && o.activatedRouteData['animation']\">\n  <router-outlet #o=\"outlet\"></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-me/about-me.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-me/about-me.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-home></app-home>\n<div class=\"project mdl-typography--text-center\">\n  <div class=\"content mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n    <div class=\"projects\">\n      <div class=\"mdl-grid\">\n        <div *ngFor=\"let social of social\"\n             id=\"first\" class=\"card mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp\">\n          <div class=\"mdl-card__media card-image not-pink-please\">\n            <img src=\"{{social.image}}\" class=\"square\" alt=\"Avatar\">\n          </div>\n          <div class=\"mdl-card__title \">\n            <b>{{social.title}}</b>\n          </div>\n          <div class=\"mdl-card__supporting-text\">\n            {{social.description}}\n          </div>\n          <div class=\"button mdl-card__actions\">\n            <a class=\"mdl-button mdl-js-button mdl-typography--text-uppercase\" href=\"{{social.link}}\">\n              Visit\n              <i class=\"material-icons\">chevron_right</i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/corona/corona.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/corona/corona.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <iframe id=\"iframe\" [attr.src]=\"getURL()\"></iframe>\n</div>\n\n<div *ngIf=\"loading\" class=\"content\" style=\"display: flex; justify-content: center; align-items: center\">\n  <mat-progress-spinner color=\"primary\" mode=\"indeterminate\">\n  </mat-progress-spinner>\n</div>\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content mdl-layout mdl-js-layout mdl-layout--fixed-header\" [style.background-repeat]=\"'no-repeat'\" [style.background-size]=\"'cover'\" style=\"background-repeat: no-repeat\">\n  <div class=\"projects\">\n    <div class=\"mdl-grid\">\n      <div *ngFor=\"let project of projects | sortgrid : '-time'\" id=\"first\" class=\"card mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp\">\n        <div class=\"mdl-card__media card-image not-pink-please\">\n          <img src=\"{{project.image}}\" class=\"square\" alt=\"Avatar\">\n        </div>\n        <div class=\"mdl-card__title\">\n          <strong>\n            {{ getFolderName(project.title) }}\n          </strong>\n          <div class=\"mdl-card__subtitle-text\">\n            |\n            {{ project.time | timeAgo }}\n          </div>\n        </div>\n        <div class=\"mdl-card__supporting-text\">\n          <div>{{project.description}}</div>\n        </div>\n        <div class=\"button mdl-card__actions\">\n          <a class=\"mdl-button mdl-js-button mdl-typography--text-uppercase\" href=\"{{project.link}}\">\n            Source\n            <i class=\"material-icons\">code</i>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/title/title.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/title/title.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sticky nav\">\n  <nav mat-tab-nav-bar class=\"right\">\n    <div>\n      <p [class]=\"'main-title' + ' ' + 'logo-font' + ' '+'title'\">{{title}}</p>\n    </div>\n    <div class=\"button\">\n      <a *ngFor=\"let tab of tabs\" mat-tab-link routerLinkActive #rla=\"routerLinkActive\" [active]=\"rla.isActive\" [routerLink]=\"tab.path\">\n        {{ capitalise(tab.path) }}\n      </a>\n    </div>\n  </nav>\n</div>\n");

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
    { path: '', pathMatch: 'full', redirectTo: '/projects' },
    { path: 'projects', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"], data: { animation: 'Home' } },
    { path: 'about', component: _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"], data: { animation: 'About' } },
    { path: 'corona', component: _components_corona_corona_component__WEBPACK_IMPORTED_MODULE_4__["CoronaComponent"], data: { animation: 'About' } }
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
/* harmony default export */ __webpack_exports__["default"] = ("body,\nhtml {\n  background: var(--third-color);\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\nbody {\n  background-color: var(--fourth-color);\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsOEJBQThCO0VBQzlCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSxcbmh0bWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGlyZC1jb2xvcik7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm91cnRoLWNvbG9yKTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */");

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
                _components_corona_corona_component__WEBPACK_IMPORTED_MODULE_19__["CoronaComponent"]
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
/* harmony default export */ __webpack_exports__["default"] = ("/* On mouse-over, add a deeper shadow */\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n/* Add some padding inside the card container */\n\n.container {\n  padding: 2px 16px;\n}\n\n.card {\n  margin: auto;\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  border-radius: 5px;\n  /* 5px rounded corners */\n  width: 40%;\n  background: var(--third-color);\n  margin-bottom: 20px;\n  height: 400px;\n  width: 250px;\n}\n\n/* Add rounded corners to the top left and the top right corner of the image */\n\nimg {\n  max-width: 100%;\n  max-height: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.content {\n  margin: auto;\n  background: var(--background-color);\n  display: block;\n  position: relative;\n}\n\n.projects {\n  width: 100%;\n  margin: auto;\n}\n\n.button a {\n  text-decoration: none;\n  background-color: var(--fourth-color);\n  color: var(--third-color);\n}\n\n.button a:hover {\n  background-color: var(--secondary-color);\n}\n\n.square {\n  background-color: var(-main-color);\n  align-content: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width:100%;\n  height:220px;\n}\n\n.not-pink-please {\n  background: var(--third-color);\n  background-color: var(--third-color);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1Qzs7QUFFdkM7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUEsK0NBQStDOztBQUUvQztFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQSw4RUFBOEU7O0FBRTlFO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixxQ0FBcUM7RUFDckMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsb0NBQW9DO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZGVlcGVyIHNoYWRvdyAqL1xuXG4uY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi8qIEFkZCBzb21lIHBhZGRpbmcgaW5zaWRlIHRoZSBjYXJkIGNvbnRhaW5lciAqL1xuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnB4IDE2cHg7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAvKiA1cHggcm91bmRlZCBjb3JuZXJzICovXG4gIHdpZHRoOiA0MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRoaXJkLWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4vKiBBZGQgcm91bmRlZCBjb3JuZXJzIHRvIHRoZSB0b3AgbGVmdCBhbmQgdGhlIHRvcCByaWdodCBjb3JuZXIgb2YgdGhlIGltYWdlICovXG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2plY3RzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmJ1dHRvbiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3VydGgtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xufVxuXG4uYnV0dG9uIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4uc3F1YXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC1tYWluLWNvbG9yKTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OjIyMHB4O1xufVxuXG4ubm90LXBpbmstcGxlYXNlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhpcmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XG59XG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  margin: auto;\n  background: var(--fourth-color);\n  display: block;\n  position: relative;\n  height: 100%;\n  widht: 100%;\n  top: 50px;\n}\n\niframe {\n  position: absolute;\n  top: 39px;\n  left: 0;\n  width: 100%;\n  height: 94%;\n  border:0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3JvbmEvY29yb25hLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29yb25hL2Nvcm9uYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6IHZhcigtLWZvdXJ0aC1jb2xvcik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkaHQ6IDEwMCU7XG4gIHRvcDogNTBweDtcbn1cblxuaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM5cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk0JTtcbiAgYm9yZGVyOjA7XG59XG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("/* Add rounded corners to the top left and the */\n.content{\n  background: var(--third-color);\n  background-color: var(--third-color);\n  display: block;\n  position: relative;\n}\n.feature {\n  position: relative;\n  height: 800px;\n  width: auto;\n  background-color: var(--third-color);\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.feature-font {\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  line-height: 1;\n  color: var(--third-color);\n  font-weight: 500;\n  font: 50px;\n}\n.slogan {\n  font-size: 60px;\n  padding-top: 160px;\n}\n.sub-slogan {\n  font-size: 21px;\n  margin: 0 16px;\n  padding-top: 8px;\n}\n.github-link {\n  font-size: 21px;\n  padding-top: 400px;\n}\n.github-link a {\n  text-decoration: none;\n  color: var(--third-color);\n  font-weight: 300;\n}\n/* Gifs appear when mouse hovers over them */\n/* ref: https://codepen.io/QDeltaE/pen/VWGYOB */\n.static {\n  position:absolute;\n  background: white;\n}\n.static:hover {\n  opacity:0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnREFBZ0Q7QUFDaEQ7RUFDRSw4QkFBOEI7RUFDOUIsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSx1REFBdUQ7RUFDdkQsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFFQSw0Q0FBNEM7QUFDNUMsK0NBQStDO0FBQy9DO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFkZCByb3VuZGVkIGNvcm5lcnMgdG8gdGhlIHRvcCBsZWZ0IGFuZCB0aGUgKi9cbi5jb250ZW50e1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGlyZC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZlYXR1cmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5mZWF0dXJlLWZvbnQge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udDogNTBweDtcbn1cblxuLnNsb2dhbiB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgcGFkZGluZy10b3A6IDE2MHB4O1xufVxuXG4uc3ViLXNsb2dhbiB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5naXRodWItbGluayB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgcGFkZGluZy10b3A6IDQwMHB4O1xufVxuXG4uZ2l0aHViLWxpbmsgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLyogR2lmcyBhcHBlYXIgd2hlbiBtb3VzZSBob3ZlcnMgb3ZlciB0aGVtICovXG4vKiByZWY6IGh0dHBzOi8vY29kZXBlbi5pby9RRGVsdGFFL3Blbi9WV0dZT0IgKi9cbi5zdGF0aWMge1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5zdGF0aWM6aG92ZXIge1xuICBvcGFjaXR5OjA7XG59Il19 */");

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

/***/ "./src/app/components/projects/projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* On mouse-over, add a deeper shadow */\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n/* Add some padding inside the card container */\n\n.container {\n  padding: 2px 16px;\n}\n\n.card {\n  margin: auto;\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  border-radius: 5px;\n  /* 5px rounded corners */\n  width: 40%;\n  background: var(--third-color);\n  margin-bottom: 20px;\n  height: 400px;\n  width: 250px;\n}\n\n/* Add rounded corners to the top left and the top right corner of the image */\n\nimg {\n  max-width: 100%;\n  max-height: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.content {\n  margin: auto;\n  background: var(--fourth-color);\n  display: block;\n  position: relative;\n  top: 39px;\n}\n\n.projects {\n  width: 100%;\n  margin: auto;\n}\n\n.button a {\n  text-decoration: none;\n  background-color: var(--fourth-color);\n  color: var(--third-color);\n}\n\n.button a:hover {\n  background-color: var(--secondary-color);\n}\n\n.square {\n  background-color: var(-main-color);\n  align-content: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width:100%;\n  height:220px;\n}\n\n.not-pink-please {\n  background: var(--third-color);\n  background-color: var(--third-color);\n}\n\n.secondary-text {\n  color: #484848;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1Qzs7QUFFdkM7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUEsK0NBQStDOztBQUUvQztFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQSw4RUFBOEU7O0FBRTlFO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBkZWVwZXIgc2hhZG93ICovXG5cbi5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLyogQWRkIHNvbWUgcGFkZGluZyBpbnNpZGUgdGhlIGNhcmQgY29udGFpbmVyICovXG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAycHggMTZweDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8qIDVweCByb3VuZGVkIGNvcm5lcnMgKi9cbiAgd2lkdGg6IDQwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhpcmQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi8qIEFkZCByb3VuZGVkIGNvcm5lcnMgdG8gdGhlIHRvcCBsZWZ0IGFuZCB0aGUgdG9wIHJpZ2h0IGNvcm5lciBvZiB0aGUgaW1hZ2UgKi9cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6IHZhcigtLWZvdXJ0aC1jb2xvcik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzlweDtcbn1cblxuLnByb2plY3RzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmJ1dHRvbiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3VydGgtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xufVxuXG4uYnV0dG9uIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4uc3F1YXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC1tYWluLWNvbG9yKTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OjIyMHB4O1xufVxuXG4ubm90LXBpbmstcGxlYXNlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhpcmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XG59XG5cbi5zZWNvbmRhcnktdGV4dCB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xufVxuIl19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".main-title {\n  margin-top: 10px;\n  color: var(--third-color);\n  background-color: var(--fourth-color);\n  position: fixed;\n  left: 49%;\n}\n\n.logo-font {\n  font-family: var(--logo-font);\n  font-size: 20pt;\n}\n\n.sticky {\n  background-color: var(--third-color);\n  position: fixed;\n  top: 0;\n  overflow: hidden;\n  z-index: 20;\n}\n\n.nav {\n  width: 100%;\n  background: var(--fourth-color);\n}\n\nfooter {\n  background-color: #ddd;\n  border-top: 1px solid #bbb;\n  text-align: center;\n}\n\n.button a {\n  text-decoration: none;\n  background-color: var(--fourth-color);\n  color: var(--third-color);\n}\n\n.button a:hover {\n  color: var(--third-color);\n  background-color: #8A2BE2; /* var(--background-colo); */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aXRsZS90aXRsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixNQUFNO0VBQ04sZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixxQ0FBcUM7RUFDckMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QixFQUFFLDRCQUE0QjtBQUN6RCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGl0bGUvdGl0bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm91cnRoLWNvbG9yKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA0OSU7XG59XG5cbi5sb2dvLWZvbnQge1xuICBmb250LWZhbWlseTogdmFyKC0tbG9nby1mb250KTtcbiAgZm9udC1zaXplOiAyMHB0O1xufVxuXG4uc3RpY2t5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMjA7XG59XG5cbi5uYXYge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZm91cnRoLWNvbG9yKTtcbn1cblxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiYmI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1dHRvbiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3VydGgtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xufVxuXG4uYnV0dG9uIGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEEyQkUyOyAvKiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG8pOyAqL1xufVxuIl19 */");

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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Home => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Home => About', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('About => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
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