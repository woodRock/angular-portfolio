(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/about-me/about-me.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-me/about-me.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content mdl-layout mdl-js-layout mdl-layout--fixed-header\">\r\n  <div class=\"projects\">\r\n    <div class=\"mdl-grid\">\r\n      <div id=\"first\" class=\"card mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp\"\r\n        *ngFor=\"let card of cards\">\r\n        <div class=\"mdl-card__media card-image\">\r\n          <img src=\"{{card.image}}\" class=\"square\" alt=\"Avatar\">\r\n        </div>\r\n        <div class=\"mdl-card__title \">\r\n          <h4>\r\n            <b>{{card.title}}</b>\r\n          </h4>\r\n        </div>\r\n        <div class=\"mdl-card__supporting-text\">\r\n          <p>{{card.description}}</p>\r\n        </div>\r\n        <div class=\"button mdl-card__actions\">\r\n          <a class=\"mdl-button mdl-js-button mdl-typography--text-uppercase\" href={{card.button}}>\r\n            View Source\r\n            <i class=\"material-icons\">chevron_right</i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Latest compiled and minified CSS -->\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n<!-- jQuery library -->\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n<!-- Latest compiled JavaScript -->\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n<!-- Icon library -->\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<link rel=\"stylesheet\"\r\n  href=\"https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\r\n<link rel=\"stylesheet\" href=\"https://code.getmdl.io/1.3.0/material.min.css\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n\r\n\r\n  <app-title></app-title>\r\n<div [@routeAnimations]=\"o && o.activatedRouteData \r\n      && o.activatedRouteData['animation']\">\r\n  <router-outlet #o=\"outlet\"></router-outlet>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content mdl-layout__content\">\r\n  <div style=\"background-repeat: no-repeat\" class=\"feature mdl-typography--text-center\" *ngFor=\"let ftr of features\" [style.background]=\"'url(' + ftr.backgroundImage + ')'\" [style.background-repeat]=\"'no-repeat'\" [style.background-size]=\"'cover'\"\r\n  [style.background-position]=\"'center'\">\r\n    <div class=\"feature-font slogan\">\r\n      {{ftr.title}}\r\n    </div>\r\n    <div class=\"feature-font sub-slogan\">{{ftr.description}}</div>\r\n    <div class=\"feature-font github-link\">\r\n      <a routerLink=\"{{ftr.link}}\">\r\n        <img src=\"{{ftr.linkImage}}\" height=20px width=20px>\r\n        <b>\r\n          See Also\r\n        </b>\r\n        {{ftr.link}}\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"project mdl-typography--text-center\">\r\n  <app-projects></app-projects>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content mdl-layout mdl-js-layout mdl-layout--fixed-header\">\r\n  <div class=\"projects\">\r\n    <div class=\"mdl-grid\">\r\n      <div id=\"first\" class=\"card mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp\"\r\n        *ngFor=\"let card of cards\">\r\n        <div class=\"mdl-card__media card-image\">\r\n          <img src=\"{{card.image}}\" class=\"square\" alt=\"Avatar\">\r\n        </div>\r\n        <div class=\"mdl-card__title \">\r\n          <h4>\r\n            <b>{{card.title.replace(\" \",\"-\") | lowercase}}</b>\r\n          </h4>\r\n        </div>\r\n        <div class=\"mdl-card__supporting-text\">\r\n          <p>{{card.description}}</p>\r\n        </div>\r\n        <div class=\"button mdl-card__actions\">\r\n          <a class=\"mdl-button mdl-js-button mdl-typography--text-uppercase\" href={{card.button}}>\r\n            View Source\r\n            <i class=\"material-icons\">chevron_right</i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/title/title.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/title/title.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky nav\">\r\n    <nav mat-tab-nav-bar class=\"right\">\r\n        <p [class]=\"'main-title' + ' ' + 'logo-font' + ' '+'title'\">{{typewriter_display}}</p>\r\n        <a mat-tab-link *ngFor=\"let tab of tabs\" routerLinkActive #rla=\"routerLinkActive\"\r\n            [active]=\"rla.isActive\" [routerLink]=\"tab.link\">\r\n            {{ tab.link }}\r\n        </a>\r\n    </nav>\r\n</div>"

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

/***/ "./src/app/about-me/about-me.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-me/about-me.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* On mouse-over, add a deeper shadow */\r\n\r\n.card:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/* Add some padding inside the card container */\r\n\r\n.container {\r\n  padding: 2px 16px;\r\n}\r\n\r\n.card {\r\n  margin: auto;\r\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  border-radius: 5px;\r\n  /* 5px rounded corners */\r\n  width: 40%;\r\n  background: var(--third-color);\r\n  margin-bottom: 20px;\r\n  height: 400px;\r\n  width: 250px;\r\n}\r\n\r\n/* Add rounded corners to the top left and the top right corner of the image */\r\n\r\nimg {\r\n  max-width: 100%;\r\n  max-height: 300px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.content {\r\n  margin: auto;\r\n  background: var(--background-color);\r\n  display: block;\r\n  position: relative;\r\n  top: 49px;\r\n}\r\n\r\n.projects {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.button a {\r\n  text-decoration: none;\r\n  background-color: var(--fourth-color);\r\n  color: var(--third-color);\r\n}\r\n\r\n.button a:hover {\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.square {\r\n  background-color: var(-main-color);\r\n  align-content: center;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  width:220px;\r\n  height:220px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7O0FBRXZDO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBLCtDQUErQzs7QUFFL0M7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNENBQTRDO0VBQzVDLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBLDhFQUE4RTs7QUFFOUU7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixxQ0FBcUM7RUFDckMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZGVlcGVyIHNoYWRvdyAqL1xyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi8qIEFkZCBzb21lIHBhZGRpbmcgaW5zaWRlIHRoZSBjYXJkIGNvbnRhaW5lciAqL1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLyogNXB4IHJvdW5kZWQgY29ybmVycyAqL1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhpcmQtY29sb3IpO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qIEFkZCByb3VuZGVkIGNvcm5lcnMgdG8gdGhlIHRvcCBsZWZ0IGFuZCB0aGUgdG9wIHJpZ2h0IGNvcm5lciBvZiB0aGUgaW1hZ2UgKi9cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA0OXB4O1xyXG59XHJcblxyXG4ucHJvamVjdHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmJ1dHRvbiBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm91cnRoLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xyXG59XHJcblxyXG4uYnV0dG9uIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbn1cclxuXHJcbi5zcXVhcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtbWFpbi1jb2xvcik7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHdpZHRoOjIyMHB4O1xyXG4gIGhlaWdodDoyMjBweDtcclxufVxyXG4iXX0= */"

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
        this.cards = [
            {
                title: "Hi My name is Jesse Wood.",
                description: "I enjoy to fill my free time with Classical Guitar, PC Gaming, Astrophysics and Canoe Polo.",
                image: "assets/images/about/tank_big.jpg",
                button: ""
            }, {
                title: "Cirriculum Vitae",
                description: "This is my cv",
                image: "assets/files/cv-image.png",
                button: "assets/files/my-cv.pdf"
            }, {
                title: "Github",
                description: "View my other projects",
                image: "assets/images/logo.png",
                button: "https://github.com/woodRock"
            }, {
                title: "Linked In",
                description: "Add me on LinkedIn",
                image: "assets/images/about/linked-in.png",
                button: "https://www.linkedin.com/in/jesse-wood-047b3b16b/"
            }, {
                title: "Victoria University",
                description: "I am student at Victora University studying towards a degree in Software Engineering.",
                image: "assets/images/about/victoria.jpg",
                button: "https://www.victoria.ac.nz/engineering"
            }, {
                title: "Steam",
                description: "Add me on Steam",
                image: "assets/images/about/steam.png",
                button: "https://steamcommunity.com/profiles/76561198082249224"
            }, {
                title: "Bartender @ St. Johns",
                description: "Coffee, Cocktails and Craft Beer",
                image: "assets/images/about/my_coffee.jpg",
                button: "https://www.stjohnsbar.co.nz/"
            }
        ];
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! raw-loader!./about-me.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-me/about-me.component.html"),
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

module.exports = "body,\r\nhtml {\r\n  background: var(--third-color);\r\n  -ms-overflow-style: -ms-autohiding-scrollbar;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsOEJBQThCO0VBQzlCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSxcclxuaHRtbCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhpcmQtY29sb3IpO1xyXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"

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
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"]
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

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Add rounded corners to the top left and the */\r\n.content{\r\n  background: var(--third-color);\r\n  background-color: var(--third-color);\r\n  display: block;\r\n  position: relative;\r\n}\r\n.feature {\r\n  position: relative;\r\n  height: 800px;\r\n  width: auto;\r\n  background-color: var(--third-color);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n.feature-font {\r\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\r\n  line-height: 1;\r\n  color: var(--third-color);\r\n  font-weight: 500;\r\n  font: 50px;\r\n}\r\n.slogan {\r\n  font-size: 60px;\r\n  padding-top: 160px;\r\n}\r\n.sub-slogan {\r\n  font-size: 21px;\r\n  margin: 0 16px;\r\n  padding-top: 8px;\r\n}\r\n.github-link {\r\n  font-size: 21px;\r\n  padding-top: 400px;\r\n}\r\n.github-link a {\r\n    text-decoration: none;\r\n    color: var(--third-color);\r\n    font-weight: 300;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hEO0VBQ0UsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsdURBQXVEO0VBQ3ZELGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFRTtJQUNFLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBZGQgcm91bmRlZCBjb3JuZXJzIHRvIHRoZSB0b3AgbGVmdCBhbmQgdGhlICovXHJcbi5jb250ZW50e1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXRoaXJkLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZmVhdHVyZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogODAwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmZlYXR1cmUtZm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBjb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udDogNTBweDtcclxufVxyXG5cclxuLnNsb2dhbiB7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNjBweDtcclxufVxyXG5cclxuLnN1Yi1zbG9nYW4ge1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICBtYXJnaW46IDAgMTZweDtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcblxyXG4uZ2l0aHViLWxpbmsge1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICBwYWRkaW5nLXRvcDogNDAwcHg7XHJcbn1cclxuXHJcbiAgLmdpdGh1Yi1saW5rIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4iXX0= */"

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
        this.features = [
            {
                title: "Hi, I'm Jesse",
                description: "Welcome to my portfolio of work",
                backgroundImage: "assets/images/features/programming-2.jpg",
                linkImage: "assets/images/logo.png",
                link: "Github"
            }, {
                title: "Learn more about me...",
                description: "My name is Jesse Wood. I am student at Victora University studying towards a degree in Software Engineering. I am familiar with, but by know means an expert...",
                backgroundImage: "assets/images/features/bg_1024.jpg",
                linkImage: "assets/images/logo.png",
                link: "/about"
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* On mouse-over, add a deeper shadow */\r\n\r\n.card:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/* Add some padding inside the card container */\r\n\r\n.container {\r\n  padding: 2px 16px;\r\n}\r\n\r\n.card {\r\n  margin: auto;\r\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  border-radius: 5px;\r\n  /* 5px rounded corners */\r\n  width: 40%;\r\n  background: var(--third-color);\r\n  margin-bottom: 20px;\r\n  height: 400px;\r\n  width: 250px;\r\n}\r\n\r\n/* Add rounded corners to the top left and the top right corner of the image */\r\n\r\nimg {\r\n  max-width: 100%;\r\n  max-height: 300px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.content {\r\n  margin: auto;\r\n  background: var(--background-color);\r\n  display: block;\r\n  position: relative;\r\n}\r\n\r\n.projects {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.button a {\r\n  text-decoration: none;\r\n  background-color: var(--fourth-color);\r\n  color: var(--third-color);\r\n}\r\n\r\n.button a:hover {\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.square {\r\n  background-color: var(-main-color);\r\n  align-content: center;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  width:220px;\r\n  height:220px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7O0FBRXZDO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBLCtDQUErQzs7QUFFL0M7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNENBQTRDO0VBQzVDLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBLDhFQUE4RTs7QUFFOUU7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFDQUFxQztFQUNyQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBkZWVwZXIgc2hhZG93ICovXHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLyogQWRkIHNvbWUgcGFkZGluZyBpbnNpZGUgdGhlIGNhcmQgY29udGFpbmVyICovXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAvKiA1cHggcm91bmRlZCBjb3JuZXJzICovXHJcbiAgd2lkdGg6IDQwJTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGlyZC1jb2xvcik7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLyogQWRkIHJvdW5kZWQgY29ybmVycyB0byB0aGUgdG9wIGxlZnQgYW5kIHRoZSB0b3AgcmlnaHQgY29ybmVyIG9mIHRoZSBpbWFnZSAqL1xyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2plY3RzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5idXR0b24gYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvdXJ0aC1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcclxufVxyXG5cclxuLmJ1dHRvbiBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG59XHJcblxyXG4uc3F1YXJlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLW1haW4tY29sb3IpO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDoyMjBweDtcclxuICBoZWlnaHQ6MjIwcHg7XHJcbn1cclxuIl19 */"

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
        this.cards = [
            {
                title: "Angular Website",
                description: 'This is my portfolio website written using Angular javascript.',
                image: 'assets/images/features/programming.png',
                button: "https://github.com/woodRock/ng-portfolio-website"
            }, {
                title: "Rockets",
                description: 'Rocket Launch (class D) @ Kelburn Park',
                image: 'assets/images/projects/death-star.jpg',
                button: ""
            }, {
                title: "Roster Generator",
                description: 'Automated Rostering System that learns ... (not finished)',
                image: 'assets/images/projects/roster_generator.jpg',
                button: "https://github.com/woodRock/roster-generator"
            }, {
                title: "SCARA",
                description: 'Selective Compliance Assembly Robot Arm.',
                image: 'assets/images/projects/elf.jpg',
                button: "https://github.com/LaserFlash/ENGR110-SCARA"
            }, {
                title: "Barbie2016",
                description: 'Autonomous Vehicle Challenge.',
                image: 'assets/images/projects/barbie.jpg',
                button: "https://github.com/j-salvador/barbie2016"
            }, {
                title: "The-Finding-of-I-Zack",
                description: "This is a sub-aquatic immersive 2D dungeon crawler.",
                image: "assets/images/projects/finding.jpg",
                button: "https://github.com/woodRock/finding-of-i-zack"
            }
        ];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html"),
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

/***/ "./src/app/title/title.component.css":
/*!*******************************************!*\
  !*** ./src/app/title/title.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-title {\r\n  margin-top: 10px;\r\n  color: var(--title-text-color);\r\n  background-color: var(--third-color);\r\n  position: fixed;\r\n  left: 49%;\r\n}\r\n\r\n.logo-font {\r\n  font-family: var(--logo-font);\r\n  font-size: 20pt;\r\n}\r\n\r\n.sticky {\r\n  background-color: var(--third-color);\r\n  position: fixed;\r\n  top: 0;\r\n  overflow: hidden;\r\n  z-index: 20;\r\n}\r\n\r\n.nav {\r\n  width: 100%;\r\n  background: var(--third-color);\r\n}\r\n\r\nfooter {\r\n  background-color: #ddd;\r\n  border-top: 1px solid #bbb;\r\n  text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGl0bGUvdGl0bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsTUFBTTtFQUNOLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC90aXRsZS90aXRsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tdGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLXRpdGxlLXRleHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogNDklO1xyXG59XHJcblxyXG4ubG9nby1mb250IHtcclxuICBmb250LWZhbWlseTogdmFyKC0tbG9nby1mb250KTtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbn1cclxuXHJcbi5zdGlja3kge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXRoaXJkLWNvbG9yKTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYmJiO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

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
        this.typewriter_text = "wR";
        this.typewriter_display = "";
        this.tabs = [
            {
                link: 'home',
            },
            {
                link: 'about'
            }
        ];
    }
    TitleComponent.prototype.typingCallback = function (that) {
        var total_length = that.typewriter_text.length;
        var current_length = that.typewriter_display.length;
        if (current_length < total_length) {
            that.typewriter_display += that.typewriter_text[current_length];
        }
        else {
            if (that.typewriter_display.slice(-1) == '|') {
                that.typewriter_display = that.typewriter_display.slice(0, -1);
            }
            else {
                that.typewriter_display += "|";
            }
        }
        setTimeout(that.typingCallback, 500, that);
    };
    TitleComponent.prototype.ngOnInit = function () {
        this.typingCallback(this);
    };
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: __webpack_require__(/*! raw-loader!./title.component.html */ "./node_modules/raw-loader/index.js!./src/app/title/title.component.html"),
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