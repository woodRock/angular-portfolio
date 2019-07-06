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

/***/ "./src/app/about-me/about-me.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-me/about-me.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* Add some padding inside the card container */\r\n.container {\r\n  padding: 2px 16px;\r\n}\r\n.card {\r\n  margin:auto;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n  border-radius: 5px; /* 5px rounded corners */\r\n  width:40%;\r\n  padding:10px;\r\n  background: var(--third-color);\r\n}\r\n/* Add rounded corners to the top left and the top right corner of the image */\r\n.img {\r\n  border-radius: 5px 5px 0 0;\r\n}\r\n.content{\r\n  background: var(--third-color);\r\n  background-color: var(--third-color);\r\n  display: block;\r\n  position: relative;\r\n  top: 120px;\r\n}\r\np {\r\n  font-size: 15px;\r\n  line-height: 1.5;\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/about-me/about-me.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-me/about-me.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box2 content\">\r\n  <div class=\"card\">\r\n    <div class=\"containter\">\r\n      <p>\r\n        Hi\r\n      </p>\r\n      <p>\r\n        My name is Jesse Wood. I am student at Victora University studying towards a degree in Software Engineering.\r\n      </p>\r\n      <p>\r\n        Provided the very rare cirumstance of not being snowed under by assignments, I enjoy to fill my free time with Classical\r\n        Guitar, PC Gaming, Astrophysics and Canoe Polo.\r\n      </p>\r\n    </div>\r\n    <embed src=\"assets/files/my-cv.pdf\" width=\"100%\" height=\"1000px\"/>\r\n  </div>"

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
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

var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.css */ "./src/app/about-me/about-me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'about', component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"], data: { animation: 'About' } },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { animation: 'Home' } }
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,\r\nhtml {\r\n  background: var(--third-color);\r\n  -ms-overflow-style: -ms-autohiding-scrollbar;\r\n}\r\n\r\n.title {\r\n  width: 100%; /* Full width */\r\n  margin: auto;\r\n  background-color: var(--third-color);\r\n}\r\n\r\n.sticky{\r\n  position: fixed;\r\n  top: 0;\r\n  overflow: hidden;\r\n  z-index: 10;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.active {\r\n  background-color: var(--secondary-color);\r\n  color: var(--main-color);\r\n  outline: 0;\r\n  text-decoration: none;\r\n}\r\n\r\n.navigation-padding {\r\n  padding-top: 30px;\r\n}\r\n\r\n.navigation {\r\n  text-decoration: none;\r\n  font-family: var(--title-font);\r\n  color: var(--title-text-color);\r\n  width: 50%;\r\n}\r\n\r\n.navigation:hover {\r\n  background-color: var(--main-color);\r\n  transition: left 300ms linear;\r\n}\r\n\r\na:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.main-title {\r\n  color: var(--title-text-color);\r\n  background-color: var(--third-color);\r\n  position: fixed;\r\n  left: 47%;\r\n}\r\n\r\n.title-font {\r\n  font-family: var(--title-font);\r\n  font-size: 20pt;\r\n}\r\n\r\n.left, .left:hover {\r\n  text-decoration: none;\r\n  text-align: center;\r\n  width: 50%;\r\n  float:left;\r\n}\r\n\r\n.right, .right:hover {\r\n  text-decoration: none;\r\n  text-align: center;\r\n  width: 50%;\r\n  float:right;\r\n}\r\n\r\n.link-font {\r\n  font-size: 15pt;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Latest compiled and minified CSS -->\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n\r\n<!-- jQuery library -->\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n\r\n<!-- Latest compiled JavaScript -->\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n\r\n<!-- Icon library -->\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en\">\r\n\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\r\n\r\n<link rel=\"stylesheet\" href=\"https://code.getmdl.io/1.3.0/material.min.css\">\r\n\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n\r\n<div [@routeAnimations]=\"o && o.activatedRouteData \r\n      && o.activatedRouteData['animation']\">\r\n    <router-outlet #o=\"outlet\"><div class=\"title sticky\">\r\n      <app-title></app-title>\r\n      <div class=\"navigation-padding\">\r\n          <div routerLink=\"/home\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"left navigation\">\r\n              <a class=\"title-font link-font\">Home</a>\r\n          </div>\r\n          <div routerLink=\"/about\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"right navigation\">\r\n              <a class=\"title-font link-font\">About</a>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </router-outlet>\r\n</div>\r\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'WoodRock';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./title/title.component */ "./src/app/title/title.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- NgModel lives here







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
                _title_title_component__WEBPACK_IMPORTED_MODULE_8__["TitleComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Add rounded corners to the top left and the */\r\n.content{\r\n  background: var(--third-color);\r\n  background-color: var(--third-color);\r\n  display: block;\r\n  position: relative;\r\n  top: 120px;\r\n}\r\n.feature {\r\n  position: relative;\r\n  height: 800px;\r\n  width: auto;\r\n  background-color: var(--third-color);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n.feature-font {\r\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\r\n  line-height: 1;\r\n  color: var(--third-color);\r\n  font-weight: 500;\r\n  font: 50px;\r\n}\r\n.slogan {\r\n  font-size: 60px;\r\n  padding-top: 160px;\r\n}\r\n.sub-slogan {\r\n  font-size: 21px;\r\n  margin: 0 16px;\r\n  padding-top: 8px;\r\n}\r\n.github-link {\r\n  font-size: 21px;\r\n  padding-top: 400px;\r\n}\r\n.github-link a {\r\n    text-decoration: none;\r\n    color: var(--third-color);\r\n    font-weight: 300;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project mdl-typography--text-center\">\r\n  <app-projects></app-projects>\r\n</div>\r\n<div class=\"content mdl-layout__content\">\r\n  <div style=\"background-repeat: no-repeat\" class=\"feature mdl-typography--text-center\" *ngFor=\"let ftr of features\" [style.background]=\"'url(' + ftr.backgroundImage + ')'\" [style.background-repeat]=\"'no-repeat'\" [style.background-size]=\"'cover'\"\r\n  [style.background-position]=\"'center'\">\r\n    <div class=\"feature-font slogan\">\r\n      {{ftr.title}}\r\n    </div>\r\n    <div class=\"feature-font sub-slogan\">{{ftr.description}}</div>\r\n    <div class=\"feature-font github-link\">\r\n      <a routerLink=\"{{ftr.link}}\">\r\n        <img src=\"{{ftr.linkImage}}\" height=20px width=20px>\r\n        <b>\r\n          See Also\r\n        </b>\r\n        {{ftr.link}}\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_features__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-features */ "./src/app/mock-features.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.features = _mock_features__WEBPACK_IMPORTED_MODULE_1__["FEATURES"];
    }
    HomeComponent.prototype.onSelect = function (p) {
        this.selectedFeature = p;
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mock-features.ts":
/*!**********************************!*\
  !*** ./src/app/mock-features.ts ***!
  \**********************************/
/*! exports provided: FEATURES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURES", function() { return FEATURES; });
var FEATURES = [
    { title: "Hi, I'm Jesse",
        description: "Welcome to my portfolio of work", backgroundImage: "assets/images/features/programming.png",
        linkImage: "assets/images/logo.png",
        link: "Github" },
    { title: "Learn more about me...",
        description: "My name is Jesse Wood. I am student at Victora University studying towards a degree in Software Engineering. I am familiar with, but by know means an expert...",
        backgroundImage: "assets/images/features/bg_1024.jpg",
        linkImage: "assets/images/logo.png",
        link: "/aboutme" }
];


/***/ }),

/***/ "./src/app/mock-projects.ts":
/*!**********************************!*\
  !*** ./src/app/mock-projects.ts ***!
  \**********************************/
/*! exports provided: PROJECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
var PROJECTS = [
    { title: "Angular Website", description: 'This is my portfolio website written using Angular javascript.', image: 'assets/images/features/programming.png', button: "https://github.com/woodRock/ng-portfolio-website" },
    { title: "Rockets", description: 'Rocket Launch (class D) @ Kelburn Park', image: 'assets/images/projects/death-star.jpg', button: "" },
    { title: "Roster Generator", description: 'Automated Rostering System that learns ... (not finished)', image: 'assets/images/projects/roster_generator.jpg', button: "https://github.com/woodRock/roster-generator" },
    { title: "SCARA", description: 'Selective Compliance Assembly Robot Arm.', image: 'assets/images/projects/elf.jpg', button: "https://github.com/LaserFlash/ENGR110-SCARA" },
    { title: "Barbie2016", description: 'Autonomous Vehicle Challenge.', image: 'assets/images/projects/barbie.jpg', button: "https://github.com/j-salvador/barbie2016" },
    { title: "The-Finding-of-I-Zack", description: "This is a sub-aquatic immersive 2D dungeon crawler.",
        image: "assets/images/projects/finding.jpg",
        button: "https://github.com/woodRock/finding-of-i-zack" },
    { title: "Bartender", description: "Coffee, Cocktails and Craft Beer", image: "assets/images/projects/my_coffee.jpg", button: "https://www.stjohnsbar.co.nz/" }
];


/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* On mouse-over, add a deeper shadow */\r\n\r\n.card:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/* Add some padding inside the card container */\r\n\r\n.container {\r\n  padding: 2px 16px;\r\n}\r\n\r\n.card {\r\n  margin: auto;\r\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  border-radius: 5px;\r\n  /* 5px rounded corners */\r\n  width: 40%;\r\n  background: var(--third-color);\r\n  margin-bottom: 20px;\r\n  height: 400px;\r\n  width: 250px;\r\n}\r\n\r\n/* Add rounded corners to the top left and the top right corner of the image */\r\n\r\nimg {\r\n  max-width: 100%;\r\n  max-height: 300px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.content {\r\n  margin: auto;\r\n  background: var(--third-color);\r\n  display: block;\r\n  position: relative;\r\n  top: 120px;\r\n}\r\n\r\n.projects {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.button a {\r\n  text-decoration: none;\r\n}\r\n\r\n.button a:hover {\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.square {\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  width:250px;\r\n  height:150px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content mdl-layout mdl-js-layout mdl-layout--fixed-header\">\r\n  <div class=\"projects\">\r\n    <div class=\"mdl-grid\">\r\n      <div id=\"first\" class=\"card mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp\"\r\n        *ngFor=\"let projectitem of projects\">\r\n        <div class=\"mdl-card__media card-image\">\r\n          <img src=\"{{projectitem.image}}\" class=\"square\" alt=\"Avatar\">\r\n        </div>\r\n        <div class=\"mdl-card__title \">\r\n          <h4>\r\n            <b>{{projectitem.title.replace(\" \",\"-\") | lowercase}}</b>\r\n          </h4>\r\n        </div>\r\n        <div class=\"mdl-card__supporting-text\">\r\n          <p>{{projectitem.description}}</p>\r\n        </div>\r\n        <div class=\"button mdl-card__actions\">\r\n          <a class=\"mdl-button mdl-js-button mdl-typography--text-uppercase\" href={{projectitem.button}}>\r\n            View Source\r\n            <i class=\"material-icons\">chevron_right</i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-projects */ "./src/app/mock-projects.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.projects = _mock_projects__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"];
    }
    ProjectsComponent.prototype.onSelect = function (p) {
        this.selectedProject = p;
    };
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
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

var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Home => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: false }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: false }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Home => About', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: false }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: false }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('About => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: false }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: false }),
        ])
    ]),
]);


/***/ }),

/***/ "./src/app/title/title.component.css":
/*!*******************************************!*\
  !*** ./src/app/title/title.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/title/title.component.html":
/*!********************************************!*\
  !*** ./src/app/title/title.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p [class]=\"'main-title' + ' ' + 'title-font' + ' '+'title'\">{{typewriter_display}}</p>"

/***/ }),

/***/ "./src/app/title/title.component.ts":
/*!******************************************!*\
  !*** ./src/app/title/title.component.ts ***!
  \******************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
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

var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
        this.typewriter_text = "woodRock";
        this.typewriter_display = "";
    }
    TitleComponent.prototype.typingCallback = function (that) {
        var total_length = that.typewriter_text.length;
        var current_length = that.typewriter_display.length;
        if (current_length < total_length) {
            that.typewriter_display += that.typewriter_text[current_length];
            setTimeout(that.typingCallback, 500, that);
        }
        else {
            if (that.typewriter_display.slice(-1) == '|') {
                that.typewriter_display = that.typewriter_display.slice(0, -1);
            }
            else {
                that.typewriter_display += "|";
            }
            setTimeout(that.typingCallback, 500, that);
        }
    };
    TitleComponent.prototype.ngOnInit = function () {
        this.typingCallback(this);
    };
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/title/title.component.html"),
            styles: [__webpack_require__(/*! ./title.component.css */ "./src/app/title/title.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleComponent);
    return TitleComponent;
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
var environment = {
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\jesse\OneDrive\Work\portfolio\ng-portfolio-website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map