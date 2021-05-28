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
/* harmony import */ var _dashboard_thegraph_thegraph_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/thegraph/thegraph.component */ "./src/app/dashboard/thegraph/thegraph.component.ts");





const routes = [
    { path: '', component: _dashboard_thegraph_thegraph_component__WEBPACK_IMPORTED_MODULE_2__["ThegraphComponent"] },
    {
        path: 'indexer',
        component: _dashboard_thegraph_thegraph_component__WEBPACK_IMPORTED_MODULE_2__["ThegraphComponent"],
    },
    {
        path: 'indexer/:indexer_address',
        component: _dashboard_thegraph_thegraph_component__WEBPACK_IMPORTED_MODULE_2__["ThegraphComponent"],
    },
    {
        path: 'delegator',
        component: _dashboard_thegraph_thegraph_component__WEBPACK_IMPORTED_MODULE_2__["ThegraphComponent"],
    },
    {
        path: 'delegator/:id',
        component: _dashboard_thegraph_thegraph_component__WEBPACK_IMPORTED_MODULE_2__["ThegraphComponent"],
    },
    {
        path: 'curator',
        component: _dashboard_thegraph_thegraph_component__WEBPACK_IMPORTED_MODULE_2__["ThegraphComponent"],
    },
    { path: '**', redirectTo: '/indexer' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
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
        this.title = 'dappquery-thegraph';
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
/* harmony import */ var _dashboard_thegraph_thegraph_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/thegraph/thegraph.component */ "./src/app/dashboard/thegraph/thegraph.component.ts");
/* harmony import */ var _shared_header_menu_area_header_menu_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/header-menu-area/header-menu-area.component */ "./src/app/shared/header-menu-area/header-menu-area.component.ts");
/* harmony import */ var _shared_logout_header_logout_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/logout-header/logout-header.component */ "./src/app/shared/logout-header/logout-header.component.ts");
/* harmony import */ var _utility_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utility/svg-icon/svg-icon.component */ "./src/app/utility/svg-icon/svg-icon.component.ts");
/* harmony import */ var _utility_pipe_dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utility/pipe/dom-sanitizer.pipe */ "./src/app/utility/pipe/dom-sanitizer.pipe.ts");
/* harmony import */ var _utility_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utility/svg-icon/svg-icon */ "./src/app/utility/svg-icon/svg-icon.ts");
/* harmony import */ var angular_sliding_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-sliding-tabs */ "./node_modules/angular-sliding-tabs/__ivy_ngcc__/fesm2015/angular-sliding-tabs.js");
/* harmony import */ var _utility_svg_icon_svg_icon_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utility/svg-icon/svg-icon.service */ "./src/app/utility/svg-icon/svg-icon.service.ts");













class AppModule {
    constructor(svgIconService) {
        this.svgIconService = svgIconService;
        this.svgIconService.registerIcons([
            _utility_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_9__["dappQueryLogo"],
            _utility_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_9__["discordLogo"],
            _utility_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_9__["twitterLogo"],
            _utility_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_9__["medium"],
            _utility_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_9__["arrowIcon"],
            _utility_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_9__["indexerIcon"],
            _utility_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_9__["delegatorIcon"],
            _utility_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_9__["arrowUp"],
            _utility_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_9__["curatorIcon"],
        ]);
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_utility_svg_icon_svg_icon_service__WEBPACK_IMPORTED_MODULE_11__["SvgIconService"])); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], angular_sliding_tabs__WEBPACK_IMPORTED_MODULE_10__["SlidingTabsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _dashboard_thegraph_thegraph_component__WEBPACK_IMPORTED_MODULE_4__["ThegraphComponent"],
        _shared_header_menu_area_header_menu_area_component__WEBPACK_IMPORTED_MODULE_5__["HeaderMenuAreaComponent"],
        _shared_logout_header_logout_header_component__WEBPACK_IMPORTED_MODULE_6__["LogoutHeaderComponent"],
        _utility_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_7__["SvgIconComponent"],
        _utility_pipe_dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_8__["DomSanitizerPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], angular_sliding_tabs__WEBPACK_IMPORTED_MODULE_10__["SlidingTabsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _dashboard_thegraph_thegraph_component__WEBPACK_IMPORTED_MODULE_4__["ThegraphComponent"],
                    _shared_header_menu_area_header_menu_area_component__WEBPACK_IMPORTED_MODULE_5__["HeaderMenuAreaComponent"],
                    _shared_logout_header_logout_header_component__WEBPACK_IMPORTED_MODULE_6__["LogoutHeaderComponent"],
                    _utility_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_7__["SvgIconComponent"],
                    _utility_pipe_dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_8__["DomSanitizerPipe"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], angular_sliding_tabs__WEBPACK_IMPORTED_MODULE_10__["SlidingTabsModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], function () { return [{ type: _utility_svg_icon_svg_icon_service__WEBPACK_IMPORTED_MODULE_11__["SvgIconService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/thegraph/thegraph.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/thegraph/thegraph.component.ts ***!
  \**********************************************************/
/*! exports provided: ThegraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThegraphComponent", function() { return ThegraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_core_utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/core/utils/constant */ "./src/core/utils/constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_logout_header_logout_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/logout-header/logout-header.component */ "./src/app/shared/logout-header/logout-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _utility_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility/svg-icon/svg-icon.component */ "./src/app/utility/svg-icon/svg-icon.component.ts");
/* harmony import */ var _utility_pipe_dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility/pipe/dom-sanitizer.pipe */ "./src/app/utility/pipe/dom-sanitizer.pipe.ts");








const _c0 = function (a0) { return { active: a0 }; };
class ThegraphComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.constants = src_core_utils_constant__WEBPACK_IMPORTED_MODULE_1__["Constants"];
        this.isMoreTabOpen = false;
        this.arrayOfAaddresses = [];
        this.labels = this.constants.LABELS.theGraphDashboard;
    }
    ngOnInit() {
        this.routeTodashboard();
    }
    routeTodashboard() {
        let route = this.router.url.replace(/\\/g, '');
        switch (route) {
            case this.labels.indexer:
                {
                    this.switchTab('tab1');
                }
                break;
            case this.labels.delegator: {
                this.switchTab('tab2');
                break;
            }
            case this.labels.curator: {
                this.switchTab('tab3');
                break;
            }
            default: {
                this.switchTab('tab1');
                break;
            }
        }
    }
    switchTab(tab) {
        switch (tab) {
            case 'tab1': {
                this.dashboardUrl = this.constants.IndexerDashboard;
                this.disableAllTabs();
                this.isTab1Active = true;
                this.router.navigate([this.labels.indexer]);
                break;
            }
            case 'tab2': {
                this.dashboardUrl = this.constants.DelegratorDashboard;
                this.disableAllTabs();
                this.isTab2Active = true;
                this.router.navigate([this.labels.delegator]);
                break;
            }
            case 'tab3': {
                this.dashboardUrl = this.constants.curatorDashboard;
                this.disableAllTabs();
                this.isTab3Active = true;
                this.router.navigate([this.labels.curator]);
                break;
            }
            default: {
                this.switchTab('tab1');
                break;
            }
        }
    }
    createUrlWithAddress(typeOfAddress) {
        let url = '';
        if (Array.isArray(this.arrayOfAaddresses)) {
            if (this.arrayOfAaddresses.length) {
                this.arrayOfAaddresses.forEach((address) => {
                    url =
                        typeOfAddress === this.labels.indexer
                            ? url + `indexer_address=${address}&`
                            : url + `id=${address}&`;
                });
            }
        }
        else {
            url =
                typeOfAddress === this.labels.indexer
                    ? url + `indexer_address=${this.arrayOfAaddresses}`
                    : url + `id=${this.arrayOfAaddresses}`;
        }
        return url;
    }
    disableAllTabs() {
        this.isTab1Active = false;
        this.isTab2Active = false;
        this.isTab3Active = false;
        this.isTab4Active = false;
    }
}
ThegraphComponent.ɵfac = function ThegraphComponent_Factory(t) { return new (t || ThegraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ThegraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThegraphComponent, selectors: [["app-thegraph"]], decls: 14, vars: 15, consts: [[1, "tab-container"], [1, "tabs", 3, "ngClass", "click"], ["name", "indexerIcon", 1, "filter-icon"], ["name", "delegatorIcon", 1, "icons"], ["name", "curatorIcon", 1, "icons"], [1, "user-dashboard-container"], ["frameBorder", "0", 3, "src"]], template: function ThegraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-logout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThegraphComponent_Template_div_click_2_listener() { return ctx.switchTab("tab1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-svg-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThegraphComponent_Template_div_click_5_listener() { return ctx.switchTab("tab2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-svg-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThegraphComponent_Template_div_click_8_listener() { return ctx.switchTab("tab3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-svg-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.isTab1Active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.labels.indexerLabel, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.isTab2Active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.labels.delegatorLabel, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.isTab3Active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.labels.curatorLabel, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, ctx.dashboardUrl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    } }, directives: [_shared_logout_header_logout_header_component__WEBPACK_IMPORTED_MODULE_3__["LogoutHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _utility_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_5__["SvgIconComponent"]], pipes: [_utility_pipe_dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_6__["DomSanitizerPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Heebo:300,400,500,700|Roboto:300,400,500,700\");\n\n\n\n.tab-container[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 14px;\n  font-weight: 400;\n  color: #fff;\n  margin-top: 1px;\n  text-transform: uppercase;\n  background: #3bacf0;\n  position: relative;\n}\n.tab-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%] {\n  width: 17%;\n  text-align: center;\n  font-weight: 500;\n}\n.tab-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background: #199df0;\n  border-radius: 6px;\n}\n.tab-container[_ngcontent-%COMP%]   .tabs.active[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  transition: all 0.25s ease;\n  background-color: #1392e1;\n  color: #fff;\n}\n  .icons #delegator {\n  height: 40px;\n  width: 40px;\n}\n  .icons #curator {\n  height: 45px;\n  width: 50px;\n}\niframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  border: none;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100vh;\n}\n.user-dashboard-container[_ngcontent-%COMP%] {\n  min-height: 80vh;\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 0 solid rgba(0, 0, 0, 0.1);\n}\n  .arrowIcon #arrow {\n  height: 20px;\n  width: 20px;\n  fill: white;\n}\n  .arrowIcon #arrowUp {\n  height: 20px;\n  width: 12px;\n  fill: white;\n}\n@media (min-width: 450px) and (max-width: 491px) {\n  .tab-container[_ngcontent-%COMP%] {\n    margin-top: 60px;\n  }\n}\n@media (max-width: 382px) {\n  .tab-container[_ngcontent-%COMP%] {\n    margin-top: 60px;\n  }\n}\n@media (min-width: 991px) and (max-width: 1200px) {\n  .tab-container[_ngcontent-%COMP%] {\n    margin-top: 19px;\n  }\n}\n.dropdown-content[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #f9f9f9;\n  border: 2px solid #daf1f2;\n  border-radius: 4px;\n  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.175);\n  right: 2%;\n  width: 90%;\n  z-index: 1;\n  top: 100%;\n  margin-top: 2%;\n  min-width: 200px;\n}\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n  font-weight: 400;\n}\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #199df0;\n  color: white;\n}\n@media (max-width: 500px) {\n  .tab-container[_ngcontent-%COMP%] {\n    flex-flow: column;\n  }\n  .tab-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%] {\n    width: 100%;\n    border-bottom: 1px solid white;\n  }\n\n  .dropdown-content[_ngcontent-%COMP%] {\n    right: 25%;\n    width: 50%;\n  }\n}\n.dropdowm-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n  flex-flow: row;\n  align-items: center;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpbmF2L0RvY3VtZW50cy9EUS9kYXBwcXVlcnktdGhlZ3JhcGgvc3JjL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9hYmhpbmF2L0RvY3VtZW50cy9EUS9kYXBwcXVlcnktdGhlZ3JhcGgvc3JjL2FwcC9kYXNoYm9hcmQvdGhlZ3JhcGgvdGhlZ3JhcGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC90aGVncmFwaC90aGVncmFwaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBY1EsbUdBQUE7QUFkUixpQkFBQTtBQU9BLGtCQUFBO0FBTUEsaURBQUE7QUNYQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0dGO0FERkU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0lKO0FEQUk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0VOO0FEQUk7RUFDRSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNFTjtBRElFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNESjtBRElFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNGSjtBRE1BO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNIRjtBRE1BO0VBRUUsZ0JBQUE7QUNKRjtBRE9BO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtBQ0pGO0FEUUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNMSjtBRE9FO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDTEo7QURRQTtFQUNFO0lBQ0UsZ0JBQUE7RUNMRjtBQUNGO0FET0E7RUFDRTtJQUNFLGdCQUFBO0VDTEY7QUFDRjtBRE9BO0VBQ0U7SUFDRSxnQkFBQTtFQ0xGO0FBQ0Y7QURRQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTkY7QURRQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDTEY7QURRQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0xGO0FET0E7RUFDRTtJQUNFLGlCQUFBO0VDSkY7RURLRTtJQUNFLFdBQUE7SUFDQSw4QkFBQTtFQ0hKOztFRE1BO0lBQ0UsVUFBQTtJQUNBLFVBQUE7RUNIRjtBQUNGO0FES0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvdGhlZ3JhcGgvdGhlZ3JhcGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmZvbnQgVmFyaWFibGVzKi9cclxuJHJvYjogJ1JvYm90bycsXHJcbnNhbnMtc2VyaWY7XHJcbiRoZWU6ICdIZWVibycsXHJcbnNhbnMtc2VyaWY7XHJcblxyXG5cclxuLypDb2xvciBWYXJpYWJsZXMqL1xyXG4kYmFzZUNvbG9yOiAjM2JhY2YwO1xyXG4kZGlwOiAjMjIyMjIyO1xyXG4kcGZvbnQ6ICM3Nzc3Nzc7XHJcbiRzZWNvbmRhcnlDb2xvcjojNmFiYWVhO1xyXG4kaW5wdXRDb250YWluZXJDb2xvcjojYzJkY2VjO1xyXG4vKj09PT09PT09PT09PT09PT09PT0gZm9udHMgPT09PT09PT09PT09PT09PT09PT0qL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUhlZWJvOjMwMCw0MDAsNTAwLDcwMHxSb2JvdG86MzAwLDQwMCw1MDAsNzAwJyk7XHJcblxyXG4vLyBNaXhpbnNcclxuQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5OiBhbGwsICRkdXJhdGlvbjogMzAwbXMsICRhbmltYXRlOiBsaW5lYXIsICRkZWxheTowcykge1xyXG4gIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb24gJGFuaW1hdGUgJGRlbGF5O1xyXG59XHJcblxyXG4vLyBQbGFjZWhvbGRlciBNaXhpbnNcclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJi5wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcblxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcblxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXNcIjtcblxuLnRhYi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQ6ICMzYmFjZjA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLnRhYnMge1xuICAgIHdpZHRoOiAxNyU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgLy9wYWRkaW5nOiA2cHg7XG4gICAgLy9ib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAjMTk5ZGYwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM5MmUxO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICB9XG59XG5cbjo6bmctZGVlcCAuaWNvbnMge1xuICAjZGVsZWdhdG9yIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gIH1cblxuICAjY3VyYXRvciB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG59XG5cbmlmcmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi51c2VyLWRhc2hib2FyZC1jb250YWluZXIge1xuICAvLyBoZWlnaHQ6IDEwMHZoO1xuICBtaW4taGVpZ2h0OiA4MHZoO1xufVxuXG5ociB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXRvcDogMCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbjo6bmctZGVlcCAuYXJyb3dJY29uIHtcbiAgI2Fycm93IHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgZmlsbDogd2hpdGU7XG4gIH1cbiAgI2Fycm93VXAge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KSBhbmQgKG1heC13aWR0aDogNDkxcHgpIHtcbiAgLnRhYi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzODJweCkge1xuICAudGFiLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC50YWItY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxOXB4O1xuICB9XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGFmMWYyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTc1KTtcbiAgcmlnaHQ6IDIlO1xuICB3aWR0aDogOTAlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGZsb2F0OiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTlkZjA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAudGFiLWNvbnRhaW5lciB7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgLnRhYnMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gICAgfVxuICB9XG4gIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICByaWdodDogMjUlO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbi5kcm9wZG93bS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtZmxvdzogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4iLCIvKmZvbnQgVmFyaWFibGVzKi9cbi8qQ29sb3IgVmFyaWFibGVzKi9cbi8qPT09PT09PT09PT09PT09PT09PSBmb250cyA9PT09PT09PT09PT09PT09PT09PSovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1IZWVibzozMDAsNDAwLDUwMCw3MDB8Um9ib3RvOjMwMCw0MDAsNTAwLDcwMFwiKTtcbi50YWItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBiYWNrZ3JvdW5kOiAjM2JhY2YwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udGFiLWNvbnRhaW5lciAudGFicyB7XG4gIHdpZHRoOiAxNyU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi50YWItY29udGFpbmVyIC50YWJzOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMTk5ZGYwO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4udGFiLWNvbnRhaW5lciAudGFicy5hY3RpdmUge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM5MmUxO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuOjpuZy1kZWVwIC5pY29ucyAjZGVsZWdhdG9yIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cbjo6bmctZGVlcCAuaWNvbnMgI2N1cmF0b3Ige1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG5pZnJhbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4udXNlci1kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogODB2aDtcbn1cblxuaHIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDAgc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG46Om5nLWRlZXAgLmFycm93SWNvbiAjYXJyb3cge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBmaWxsOiB3aGl0ZTtcbn1cbjo6bmctZGVlcCAuYXJyb3dJY29uICNhcnJvd1VwIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTJweDtcbiAgZmlsbDogd2hpdGU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0NTBweCkgYW5kIChtYXgtd2lkdGg6IDQ5MXB4KSB7XG4gIC50YWItY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzgycHgpIHtcbiAgLnRhYi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAudGFiLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTlweDtcbiAgfVxufVxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkYWYxZjI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNzUpO1xuICByaWdodDogMiU7XG4gIHdpZHRoOiA5MCU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBmbG9hdDogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk5ZGYwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAudGFiLWNvbnRhaW5lciB7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gIH1cbiAgLnRhYi1jb250YWluZXIgLnRhYnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgfVxuXG4gIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICByaWdodDogMjUlO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbi5kcm9wZG93bS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtZmxvdzogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThegraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-thegraph',
                templateUrl: './thegraph.component.html',
                styleUrls: ['./thegraph.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/header-menu-area/header-menu-area.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/header-menu-area/header-menu-area.component.ts ***!
  \***********************************************************************/
/*! exports provided: HeaderMenuAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderMenuAreaComponent", function() { return HeaderMenuAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_core_utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/core/utils/constant */ "./src/core/utils/constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _utility_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility/svg-icon/svg-icon.component */ "./src/app/utility/svg-icon/svg-icon.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

// import { AppService } from 'src/app/app.service';





function HeaderMenuAreaComponent_li_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderMenuAreaComponent {
    constructor(_router) {
        this._router = _router;
        this.constantsURLs = src_core_utils_constant__WEBPACK_IMPORTED_MODULE_1__["Constants"].URLs;
        this.labels = src_core_utils_constant__WEBPACK_IMPORTED_MODULE_1__["Constants"].LABELS.headerArea;
        this.commonLables = src_core_utils_constant__WEBPACK_IMPORTED_MODULE_1__["Constants"].LABELS.commonLables;
        this.isUserLoggedIn = false;
        this.currentPage = '';
    }
    ngOnInit() {
        // this.analyzerUrl = `${environment.ANALYZER}?ref=analyzer`;
        this.isUserLoggedIn = this.getCookie('_dqco') ? true : false;
        // this.isUserLoggedIn = true;
        this.getScreenSize();
    }
    ngAfterViewInit() {
        this.setSVGProperty('discord-logo', { height: '45px', width: '45px' });
        this.setSVGProperty('twitter-logo', { height: '50px', width: '50px' });
    }
    getCookie(name) {
        let ca = document.cookie.split(';');
        let caLen = ca.length;
        let cookieName = `${name}=`;
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }
    setSVGProperty(svgId, styleProperties) {
        const ele = document.getElementById(svgId);
        ele.style.height = styleProperties.height;
        ele.style.width = styleProperties.width;
    }
    getScreenSize(event) {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth < 450) {
            this.setSVGProperty('dappquery-logo', { height: '70px', width: '200px' });
        }
        if (this.screenWidth > 450) {
            this.setSVGProperty('dappquery-logo', { height: '70px', width: '310px' });
        }
    }
}
HeaderMenuAreaComponent.ɵfac = function HeaderMenuAreaComponent_Factory(t) { return new (t || HeaderMenuAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderMenuAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderMenuAreaComponent, selectors: [["app-header-menu-area"]], hostBindings: function HeaderMenuAreaComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HeaderMenuAreaComponent_resize_HostBindingHandler($event) { return ctx.getScreenSize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 40, vars: 13, consts: [[1, "header_area"], [1, "main_menu"], [1, "navbar", "navbar-expand-lg", "navbar-light"], [1, "container", "box_1620"], ["target", "_blank", 1, "dapp-logo", 3, "href"], ["name", "dappQueryLogo"], ["target", "_blank", 3, "href"], ["name", "discordLogo"], ["name", "twitterLogo"], ["name", "medium"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "icon-bar"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "offset"], [1, "nav", "navbar-nav", "menu_nav", "justify-content-center"], [1, "nav-item", "active"], ["target", "_blank", 1, "nav-link", 3, "href"], ["name", "new", 1, "new_icon"], [1, "nav-item"], [1, "nav-link", 3, "href"], [1, "nav-item", "submenu", "dropdown"], ["href", "#", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["name", "arrowIcon", 1, "menu-icon"], [1, "dropdown-menu"], ["class", "nav-item", 4, "ngIf"], ["href", "https://analytics.dappquery.com/browse/34/schema/thegraph_mainnet_network", "target", "_blank", 1, "nav-link", "button-link"]], template: function HeaderMenuAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-svg-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-svg-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-svg-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-svg-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-svg-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Resources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-svg-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, HeaderMenuAreaComponent_li_39_Template, 3, 0, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.constantsURLs.DAPPQUERY_WEBSITE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.constantsURLs.DISCORD, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.constantsURLs.SOCIAL_NETWORK_TWITTER, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.constantsURLs.MEDIUM_BLOG, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.constantsURLs.DAPPQUERY_DELEGATION_LINK, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.commonLables.delegateToUs, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.constantsURLs.DAPPQUERY_INDEXER, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.commonLables.indexerStats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.constantsURLs.EXPLORER, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.commonLables.explorer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.constantsURLs.MEDIUM_BLOG, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.constantsURLs.DOCS, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUserLoggedIn);
    } }, directives: [_utility_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_3__["SvgIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["ul.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute !important;\n  top: 75px !important;\n}\n\n  .new_icon {\n  position: absolute;\n  top: -10%;\n}\n\n  .new_icon svg {\n  height: 30px;\n  width: 30px;\n}\n\n.header_area[_ngcontent-%COMP%] {\n  top: -7px;\n}\n\n  .menu-icon {\n  position: relative;\n  bottom: 2px;\n}\n\n  .menu-icon svg {\n  height: 16px;\n  width: 16px;\n  fill: #fff;\n}\n\n@media only screen and (min-width: 780px) {\n  .menu-icon[_ngcontent-%COMP%] {\n    position: relative;\n    bottom: 2px;\n  }\n  .menu-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    fill: #fff;\n  }\n\n  .button-link[_ngcontent-%COMP%] {\n    font: 500 12px/39px \"Roboto\", sans-serif !important;\n    text-transform: uppercase;\n    color: #fff;\n    padding: 0 10px !important;\n    border-radius: 10px;\n    margin-top: 31px;\n    background-color: #1b5a90;\n  }\n}\n\n@media (max-width: 1200px) {\n  .header_area[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n    background: #000;\n  }\n\n  .header_area[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    font: 500 12px/50px \"Roboto\", sans-serif;\n  }\n}\n\n@media (min-width: 1200px) {\n  .box_1620[_ngcontent-%COMP%] {\n    max-width: 1650px;\n    margin: auto;\n  }\n}\n\n@media (max-width: 1200px) and (min-width: 991px) {\n  .button-link[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpbmF2L0RvY3VtZW50cy9EUS9kYXBwcXVlcnktdGhlZ3JhcGgvc3JjL2FwcC9zaGFyZWQvaGVhZGVyLW1lbnUtYXJlYS9oZWFkZXItbWVudS1hcmVhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaGVhZGVyLW1lbnUtYXJlYS9oZWFkZXItbWVudS1hcmVhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREdBO0VBQ0UsU0FBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDQUY7O0FEQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNDSjs7QURHQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VDQUY7RURDRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFQ0NKOztFREdBO0lBQ0UsbURBQUE7SUFDQSx5QkFBQTtJQUNBLFdBQUE7SUFDQSwwQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRTtJQUNFLGdCQUFBO0VDREY7O0VESUE7SUFDRSx3Q0FBQTtFQ0RGO0FBQ0Y7O0FER0E7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsWUFBQTtFQ0RGO0FBQ0Y7O0FER0E7RUFDRTtJQUNFLGFBQUE7RUNERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci1tZW51LWFyZWEvaGVhZGVyLW1lbnUtYXJlYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsLmRyb3Bkb3duLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiA3NXB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubmV3X2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwJTtcblxuICBzdmcge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgfVxufVxuXG4uaGVhZGVyX2FyZWEge1xuICB0b3A6IC03cHg7XG59XG5cbjo6bmctZGVlcCAubWVudS1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDJweDtcbiAgc3ZnIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgZmlsbDogI2ZmZjtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc4MHB4KSB7XG4gIC5tZW51LWljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDJweDtcbiAgICBzdmcge1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBmaWxsOiAjZmZmO1xuICAgIH1cbiAgfVxuXG4gIC5idXR0b24tbGluayB7XG4gICAgZm9udDogNTAwIDEycHgvMzlweCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDMxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiNWE5MDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5oZWFkZXJfYXJlYSAubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICB9XG5cbiAgLmhlYWRlcl9hcmVhIC5uYXZiYXIgLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgICBmb250OiA1MDAgMTJweC81MHB4IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmJveF8xNjIwIHtcbiAgICBtYXgtd2lkdGg6IDE2NTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiA5OTFweCkge1xuICAuYnV0dG9uLWxpbmsge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn1cbiIsInVsLmRyb3Bkb3duLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiA3NXB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubmV3X2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwJTtcbn1cbjo6bmctZGVlcCAubmV3X2ljb24gc3ZnIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLmhlYWRlcl9hcmVhIHtcbiAgdG9wOiAtN3B4O1xufVxuXG46Om5nLWRlZXAgLm1lbnUtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAycHg7XG59XG46Om5nLWRlZXAgLm1lbnUtaWNvbiBzdmcge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBmaWxsOiAjZmZmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc4MHB4KSB7XG4gIC5tZW51LWljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDJweDtcbiAgfVxuICAubWVudS1pY29uIHN2ZyB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGZpbGw6ICNmZmY7XG4gIH1cblxuICAuYnV0dG9uLWxpbmsge1xuICAgIGZvbnQ6IDUwMCAxMnB4LzM5cHggXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAzMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjVhOTA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlYWRlcl9hcmVhIC5uYXZiYXIge1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gIH1cblxuICAuaGVhZGVyX2FyZWEgLm5hdmJhciAubmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICAgIGZvbnQ6IDUwMCAxMnB4LzUwcHggXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuYm94XzE2MjAge1xuICAgIG1heC13aWR0aDogMTY1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDk5MXB4KSB7XG4gIC5idXR0b24tbGluayB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderMenuAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-menu-area',
                templateUrl: './header-menu-area.component.html',
                styleUrls: ['./header-menu-area.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { getScreenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/logout-header/logout-header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/logout-header/logout-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: LogoutHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutHeaderComponent", function() { return LogoutHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_menu_area_header_menu_area_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header-menu-area/header-menu-area.component */ "./src/app/shared/header-menu-area/header-menu-area.component.ts");



class LogoutHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoutHeaderComponent.ɵfac = function LogoutHeaderComponent_Factory(t) { return new (t || LogoutHeaderComponent)(); };
LogoutHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutHeaderComponent, selectors: [["app-logout-header"]], decls: 4, vars: 0, consts: [[1, "banner_area"], [1, "banner_inner", "d-flex", "align-items-center"], ["data-stellar-ratio", "0.9", "data-stellar-vertical-offset", "0", "data-background", "", 1, "overlay", "bg-parallax"]], template: function LogoutHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-menu-area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_menu_area_header_menu_area_component__WEBPACK_IMPORTED_MODULE_1__["HeaderMenuAreaComponent"]], styles: [".banner_area[_ngcontent-%COMP%] {\n  min-height: 75px;\n}\n.banner_area[_ngcontent-%COMP%]   .banner_inner[_ngcontent-%COMP%] {\n  min-height: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpbmF2L0RvY3VtZW50cy9EUS9kYXBwcXVlcnktdGhlZ3JhcGgvc3JjL2FwcC9zaGFyZWQvbG9nb3V0LWhlYWRlci9sb2dvdXQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbG9nb3V0LWhlYWRlci9sb2dvdXQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjtBREFFO0VBQ0UsZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2dvdXQtaGVhZGVyL2xvZ291dC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyX2FyZWEge1xuICBtaW4taGVpZ2h0OiA3NXB4O1xuICAuYmFubmVyX2lubmVyIHtcbiAgICBtaW4taGVpZ2h0OiA3NXB4O1xuICB9XG59XG4iLCIuYmFubmVyX2FyZWEge1xuICBtaW4taGVpZ2h0OiA3NXB4O1xufVxuLmJhbm5lcl9hcmVhIC5iYW5uZXJfaW5uZXIge1xuICBtaW4taGVpZ2h0OiA3NXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logout-header',
                templateUrl: './logout-header.component.html',
                styleUrls: ['./logout-header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/utility/pipe/dom-sanitizer.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/utility/pipe/dom-sanitizer.pipe.ts ***!
  \****************************************************/
/*! exports provided: DomSanitizerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomSanitizerPipe", function() { return DomSanitizerPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class DomSanitizerPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
DomSanitizerPipe.ɵfac = function DomSanitizerPipe_Factory(t) { return new (t || DomSanitizerPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
DomSanitizerPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: DomSanitizerPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomSanitizerPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safe'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/utility/svg-icon/svg-icon.component.ts":
/*!********************************************************!*\
  !*** ./src/app/utility/svg-icon/svg-icon.component.ts ***!
  \********************************************************/
/*! exports provided: SvgIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgIconComponent", function() { return SvgIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _svg_icon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg-icon.service */ "./src/app/utility/svg-icon/svg-icon.service.ts");




const _c0 = ["*"];
class SvgIconComponent {
    constructor(element, svgIconService, document) {
        this.element = element;
        this.svgIconService = svgIconService;
        this.document = document;
    }
    set name(iconName) {
        if (this.svgIcon) {
            this.element.nativeElement.removeChild(this.svgIcon);
        }
        const svgData = this.svgIconService.getIcon(iconName);
        this.svgIcon = this.svgElementFromString(svgData);
        this.element.nativeElement.appendChild(this.svgIcon);
    }
    svgElementFromString(svgContent) {
        const div = this.document.createElement('DIV');
        div.innerHTML = svgContent;
        return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
    }
}
SvgIconComponent.ɵfac = function SvgIconComponent_Factory(t) { return new (t || SvgIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_svg_icon_service__WEBPACK_IMPORTED_MODULE_2__["SvgIconService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8)); };
SvgIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SvgIconComponent, selectors: [["app-svg-icon"]], inputs: { name: "name" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function SvgIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SvgIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-svg-icon',
                template: `
  <ng-content></ng-content>
`,
                // styles: [':host::ng-deep'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _svg_icon_service__WEBPACK_IMPORTED_MODULE_2__["SvgIconService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/utility/svg-icon/svg-icon.service.ts":
/*!******************************************************!*\
  !*** ./src/app/utility/svg-icon/svg-icon.service.ts ***!
  \******************************************************/
/*! exports provided: SvgIconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgIconService", function() { return SvgIconService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SvgIconService {
    constructor() {
        this.registry = new Map();
    }
    registerIcons(icons) {
        icons.forEach((icon) => this.registry.set(icon.name, icon.data));
    }
    getIcon(iconName) {
        if (!this.registry.has(iconName)) {
            console.warn(`We could not find the dinosaur Icon with the name ${iconName}, did you add it to the Icon registry?`);
        }
        return this.registry.get(iconName);
    }
}
SvgIconService.ɵfac = function SvgIconService_Factory(t) { return new (t || SvgIconService)(); };
SvgIconService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SvgIconService, factory: SvgIconService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SvgIconService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/utility/svg-icon/svg-icon.ts":
/*!**********************************************!*\
  !*** ./src/app/utility/svg-icon/svg-icon.ts ***!
  \**********************************************/
/*! exports provided: dappQueryLogo, discordLogo, twitterLogo, medium, arrowIcon, indexerIcon, delegatorIcon, arrowUp, curatorIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dappQueryLogo", function() { return dappQueryLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discordLogo", function() { return discordLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twitterLogo", function() { return twitterLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "medium", function() { return medium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrowIcon", function() { return arrowIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexerIcon", function() { return indexerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegatorIcon", function() { return delegatorIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrowUp", function() { return arrowUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curatorIcon", function() { return curatorIcon; });
const dappQueryLogo = {
    name: 'dappQueryLogo',
    data: `<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
    preserveAspectRatio="xMidYMid meet" id="dappquery-logo" width="310px" height="70px" viewBox="0 0 310 70" overflow="visible">
    <defs id="SvgjsDefs1937"></defs>
    <g id="SvgjsG1938" transform="scale(0.6493506493506493)" opacity="1">
        <g id="SvgjsG1939" className="J5ccx3Tzc" transform="translate(0, 0) scale(1)" light-content="false"
            fill="#ffffff">
            <path d=" M 44.94487023917744, 45.44487023917744
        m 0, -45.44487023917744
        a 45.44487023917744, 45.44487023917744, 0, 1, 0, 1, 0
        Z
        m 1, 8
        a 37.44487023917744, 37.44487023917744, 0, 1, 1, -1, 0Z">
            </path>
        </g>

        <g id="SvgjsG1940" className="text" transform="translate(278.0662258597227, 64.81636503876302) scale(1)"
            light-content="false" fill="#ffffff">
            <path
                d="M-154.2 -20.1C-154.2 -17.9 -154.29 -15.9 -154.46 -14.1C-154.64 -12.29 -154.91 -10.75 -155.29 -9.47C-155.66 -8.19 -156.16 -7.2 -156.77 -6.5C-157.38 -5.79 -158.13 -5.44 -159 -5.44C-159.66 -5.44 -160.19 -5.56 -160.59 -5.8C-160.99 -6.04 -161.3 -6.37 -161.5 -6.77C-161.7 -7.17 -161.84 -7.63 -161.9 -8.17C-161.96 -8.7 -161.99 -9.26 -161.99 -9.84L-161.99 -28.48C-161.99 -29.06 -161.96 -29.61 -161.9 -30.15C-161.84 -30.68 -161.7 -31.15 -161.5 -31.55C-161.3 -31.95 -160.99 -32.27 -160.59 -32.51C-160.19 -32.75 -159.66 -32.88 -159 -32.88C-158.13 -32.88 -157.38 -32.53 -156.77 -31.83C-156.16 -31.13 -155.66 -30.19 -155.29 -29.02C-154.91 -27.84 -154.64 -26.48 -154.46 -24.95C-154.29 -23.41 -154.2 -21.79 -154.2 -20.1ZM-159 -37.49L-170.49 -37.49C-172.34 -37.49 -173.98 -37.39 -175.42 -37.18C-176.86 -36.98 -178.06 -36.66 -179.04 -36.22C-180.02 -35.78 -180.77 -35.21 -181.28 -34.51C-181.79 -33.81 -182.04 -32.98 -182.04 -32.01C-182.04 -31.63 -181.95 -31.36 -181.76 -31.19C-181.57 -31.03 -181.34 -30.9 -181.07 -30.82C-180.79 -30.73 -180.49 -30.65 -180.17 -30.57C-179.85 -30.49 -179.55 -30.35 -179.28 -30.16C-179 -29.96 -178.77 -29.67 -178.58 -29.29C-178.4 -28.9 -178.3 -28.37 -178.3 -27.68L-178.3 -9.88C-178.3 -9.18 -178.4 -8.64 -178.58 -8.26C-178.77 -7.88 -179 -7.6 -179.28 -7.4C-179.55 -7.21 -179.85 -7.07 -180.17 -6.99C-180.49 -6.91 -180.79 -6.83 -181.07 -6.74C-181.34 -6.66 -181.57 -6.53 -181.76 -6.37C-181.95 -6.2 -182.04 -5.93 -182.04 -5.55C-182.04 -4.58 -181.79 -3.74 -181.28 -3.04C-180.77 -2.33 -180.02 -1.75 -179.04 -1.31C-178.06 -0.86 -176.86 -0.53 -175.42 -0.32C-173.98 -0.11 -172.34 0 -170.49 0L-160.98 0C-157.84 0 -155.11 -0.25 -152.78 -0.74C-150.45 -1.24 -148.46 -1.92 -146.8 -2.8C-145.15 -3.68 -143.79 -4.73 -142.72 -5.97C-141.65 -7.2 -140.81 -8.55 -140.2 -10.01C-139.59 -11.48 -139.17 -13.05 -138.93 -14.72C-138.7 -16.39 -138.58 -18.11 -138.58 -19.86C-138.58 -21.42 -138.73 -22.93 -139.02 -24.4C-139.32 -25.88 -139.81 -27.27 -140.47 -28.58C-141.14 -29.89 -142 -31.09 -143.06 -32.18C-144.12 -33.27 -145.41 -34.21 -146.92 -34.99C-148.43 -35.78 -150.19 -36.39 -152.19 -36.83C-154.19 -37.27 -156.46 -37.49 -159 -37.49Z M-120.67 -4.82C-121.36 -4.82 -121.91 -4.93 -122.33 -5.14C-122.74 -5.35 -123.06 -5.64 -123.28 -6.01C-123.5 -6.38 -123.64 -6.81 -123.7 -7.31C-123.77 -7.8 -123.8 -8.32 -123.8 -8.87C-123.8 -9.78 -123.73 -10.63 -123.6 -11.4C-123.47 -12.18 -123.23 -12.85 -122.9 -13.43C-122.57 -14 -122.14 -14.45 -121.6 -14.77C-121.06 -15.09 -120.39 -15.25 -119.59 -15.25C-119.4 -15.25 -119.21 -15.24 -119.01 -15.21C-118.81 -15.19 -118.61 -15.16 -118.39 -15.13C-118.37 -14.22 -118.35 -13.34 -118.32 -12.5C-118.3 -11.77 -118.28 -11.04 -118.27 -10.28C-118.25 -9.53 -118.24 -8.91 -118.24 -8.43C-118.24 -7.86 -118.27 -7.35 -118.33 -6.91C-118.38 -6.46 -118.5 -6.08 -118.67 -5.78C-118.84 -5.47 -119.09 -5.24 -119.41 -5.07C-119.73 -4.91 -120.15 -4.82 -120.67 -4.82ZM-109.33 0C-106.61 0 -104.55 -0.44 -103.15 -1.31C-101.74 -2.18 -101.04 -3.4 -101.04 -4.97C-101.04 -5.31 -101.13 -5.56 -101.31 -5.71C-101.49 -5.86 -101.71 -5.97 -101.97 -6.06C-102.23 -6.15 -102.52 -6.23 -102.83 -6.31C-103.14 -6.39 -103.43 -6.52 -103.69 -6.72C-103.95 -6.91 -104.17 -7.2 -104.35 -7.58C-104.53 -7.95 -104.62 -8.48 -104.62 -9.15L-104.62 -17.49C-104.62 -19.79 -104.93 -21.8 -105.55 -23.52C-106.17 -25.24 -107.12 -26.66 -108.42 -27.79C-109.71 -28.92 -111.36 -29.77 -113.37 -30.33C-115.38 -30.9 -117.77 -31.18 -120.55 -31.18C-122.94 -31.18 -124.99 -30.97 -126.72 -30.56C-128.44 -30.14 -129.87 -29.59 -130.99 -28.89C-132.11 -28.19 -132.94 -27.38 -133.48 -26.45C-134.02 -25.53 -134.29 -24.55 -134.29 -23.51C-134.29 -22.77 -134.15 -22.15 -133.85 -21.63C-133.55 -21.11 -133.15 -20.68 -132.65 -20.34C-132.15 -20.01 -131.57 -19.74 -130.92 -19.54C-130.27 -19.35 -129.58 -19.2 -128.85 -19.11C-128.12 -19.02 -127.38 -18.96 -126.63 -18.93C-125.89 -18.91 -125.18 -18.9 -124.5 -18.9C-124.5 -20.12 -124.45 -21.22 -124.35 -22.18C-124.25 -23.15 -124.08 -23.97 -123.83 -24.65C-123.59 -25.33 -123.27 -25.86 -122.87 -26.22C-122.47 -26.58 -121.97 -26.76 -121.37 -26.76C-120.84 -26.76 -120.39 -26.62 -120.01 -26.36C-119.63 -26.09 -119.32 -25.62 -119.07 -24.95C-118.82 -24.27 -118.63 -23.36 -118.52 -22.22C-118.4 -21.07 -118.34 -19.63 -118.34 -17.89L-121.56 -17.89C-124.47 -17.89 -126.88 -17.61 -128.81 -17.05C-130.74 -16.49 -132.28 -15.74 -133.44 -14.78C-134.59 -13.82 -135.4 -12.7 -135.88 -11.43C-136.36 -10.15 -136.6 -8.79 -136.6 -7.37C-136.6 -6.16 -136.4 -5.07 -135.99 -4.09C-135.58 -3.12 -134.97 -2.29 -134.15 -1.59C-133.34 -0.89 -132.33 -0.35 -131.14 0.02C-129.95 0.4 -128.56 0.59 -126.98 0.59C-126.08 0.59 -125.14 0.5 -124.16 0.32C-123.18 0.14 -122.25 -0.14 -121.36 -0.51C-120.48 -0.87 -119.68 -1.33 -118.99 -1.88C-118.29 -2.43 -117.78 -3.08 -117.47 -3.81C-117.04 -2.98 -116.53 -2.31 -115.94 -1.81C-115.34 -1.31 -114.69 -0.93 -113.97 -0.66C-113.26 -0.39 -112.51 -0.22 -111.71 -0.13C-110.92 -0.04 -110.13 0 -109.33 0Z M-62.21 -15.09C-62.21 -16.32 -62.29 -17.58 -62.45 -18.85C-62.6 -20.12 -62.87 -21.35 -63.23 -22.55C-63.6 -23.74 -64.09 -24.86 -64.69 -25.91C-65.3 -26.96 -66.05 -27.88 -66.95 -28.65C-67.86 -29.43 -68.92 -30.04 -70.14 -30.5C-71.37 -30.95 -72.77 -31.18 -74.35 -31.18C-75.42 -31.18 -76.39 -31.11 -77.26 -30.97C-78.13 -30.83 -78.92 -30.64 -79.64 -30.42C-80.35 -30.19 -80.99 -29.93 -81.56 -29.63C-82.12 -29.33 -82.62 -29.02 -83.06 -28.69C-83.52 -29.36 -84.24 -29.83 -85.24 -30.1C-86.23 -30.37 -87.65 -30.5 -89.49 -30.5C-91.17 -30.5 -92.66 -30.41 -93.96 -30.22C-95.26 -30.03 -96.36 -29.73 -97.25 -29.31C-98.15 -28.9 -98.83 -28.37 -99.29 -27.73C-99.75 -27.1 -99.98 -26.33 -99.98 -25.44C-99.98 -25.09 -99.9 -24.85 -99.74 -24.7C-99.57 -24.55 -99.36 -24.44 -99.1 -24.36C-98.84 -24.28 -98.57 -24.21 -98.28 -24.15C-97.99 -24.08 -97.71 -23.96 -97.45 -23.78C-97.19 -23.6 -96.98 -23.34 -96.82 -22.99C-96.65 -22.65 -96.57 -22.16 -96.57 -21.53L-96.57 4.24C-96.57 4.88 -96.65 5.37 -96.82 5.71C-96.98 6.04 -97.19 6.3 -97.45 6.48C-97.71 6.66 -97.99 6.79 -98.28 6.85C-98.57 6.91 -98.84 6.98 -99.1 7.06C-99.36 7.14 -99.57 7.25 -99.74 7.4C-99.9 7.55 -99.98 7.8 -99.98 8.14C-99.98 9.04 -99.75 9.8 -99.29 10.44C-98.83 11.07 -98.15 11.6 -97.25 12.01C-96.36 12.43 -95.26 12.73 -93.96 12.92C-92.66 13.11 -91.17 13.2 -89.49 13.2C-85.99 13.2 -83.31 12.81 -81.46 12.01C-79.61 11.22 -78.68 9.93 -78.68 8.14C-78.68 7.8 -78.77 7.55 -78.94 7.4C-79.12 7.25 -79.33 7.14 -79.58 7.06C-79.83 6.98 -80.11 6.91 -80.41 6.84C-80.72 6.77 -81 6.64 -81.25 6.46C-81.5 6.28 -81.71 6.01 -81.89 5.66C-82.06 5.31 -82.14 4.8 -82.14 4.14L-82.14 -1.34C-81.23 -0.81 -80.13 -0.35 -78.84 0.02C-77.54 0.4 -76 0.59 -74.21 0.59C-72.63 0.59 -71.23 0.37 -70.01 -0.07C-68.8 -0.51 -67.75 -1.11 -66.86 -1.87C-65.97 -2.63 -65.23 -3.52 -64.64 -4.54C-64.04 -5.56 -63.56 -6.65 -63.2 -7.81C-62.84 -8.97 -62.58 -10.17 -62.43 -11.41C-62.29 -12.65 -62.21 -13.88 -62.21 -15.09ZM-82.14 -6.02L-82.1 -21.53L-82.1 -23.32C-82.1 -23.87 -82.11 -24.39 -82.14 -24.88C-81.91 -24.97 -81.65 -25.04 -81.37 -25.09C-81.09 -25.13 -80.8 -25.16 -80.52 -25.16C-79.8 -25.16 -79.19 -24.99 -78.68 -24.66C-78.18 -24.33 -77.77 -23.78 -77.46 -23C-77.15 -22.23 -76.92 -21.18 -76.78 -19.87C-76.64 -18.56 -76.57 -16.94 -76.57 -14.99C-76.57 -13.14 -76.59 -11.61 -76.63 -10.4C-76.66 -9.19 -76.79 -8.24 -77.01 -7.53C-77.23 -6.82 -77.58 -6.33 -78.05 -6.06C-78.52 -5.79 -79.19 -5.65 -80.07 -5.65C-80.43 -5.65 -80.79 -5.68 -81.13 -5.74C-81.48 -5.8 -81.81 -5.9 -82.14 -6.02Z M-22.13 -15.09C-22.13 -16.32 -22.21 -17.58 -22.37 -18.85C-22.53 -20.12 -22.79 -21.35 -23.16 -22.55C-23.53 -23.74 -24.01 -24.86 -24.62 -25.91C-25.22 -26.96 -25.97 -27.88 -26.88 -28.65C-27.78 -29.43 -28.84 -30.04 -30.06 -30.5C-31.29 -30.95 -32.69 -31.18 -34.28 -31.18C-35.34 -31.18 -36.31 -31.11 -37.18 -30.97C-38.05 -30.83 -38.85 -30.64 -39.56 -30.42C-40.27 -30.19 -40.91 -29.93 -41.48 -29.63C-42.04 -29.33 -42.54 -29.02 -42.98 -28.69C-43.44 -29.36 -44.16 -29.83 -45.16 -30.1C-46.16 -30.37 -47.57 -30.5 -49.41 -30.5C-51.09 -30.5 -52.58 -30.41 -53.88 -30.22C-55.18 -30.03 -56.28 -29.73 -57.17 -29.31C-58.07 -28.9 -58.75 -28.37 -59.21 -27.73C-59.67 -27.1 -59.9 -26.33 -59.9 -25.44C-59.9 -25.09 -59.82 -24.85 -59.66 -24.7C-59.49 -24.55 -59.28 -24.44 -59.02 -24.36C-58.76 -24.28 -58.49 -24.21 -58.2 -24.15C-57.91 -24.08 -57.63 -23.96 -57.37 -23.78C-57.12 -23.6 -56.9 -23.34 -56.74 -22.99C-56.57 -22.65 -56.49 -22.16 -56.49 -21.53L-56.49 4.24C-56.49 4.88 -56.57 5.37 -56.74 5.71C-56.9 6.04 -57.12 6.3 -57.37 6.48C-57.63 6.66 -57.91 6.79 -58.2 6.85C-58.49 6.91 -58.76 6.98 -59.02 7.06C-59.28 7.14 -59.49 7.25 -59.66 7.4C-59.82 7.55 -59.9 7.8 -59.9 8.14C-59.9 9.04 -59.67 9.8 -59.21 10.44C-58.75 11.07 -58.07 11.6 -57.17 12.01C-56.28 12.43 -55.18 12.73 -53.88 12.92C-52.58 13.11 -51.09 13.2 -49.41 13.2C-45.91 13.2 -43.24 12.81 -41.38 12.01C-39.53 11.22 -38.61 9.93 -38.61 8.14C-38.61 7.8 -38.69 7.55 -38.87 7.4C-39.04 7.25 -39.25 7.14 -39.5 7.06C-39.75 6.98 -40.03 6.91 -40.34 6.84C-40.64 6.77 -40.92 6.64 -41.17 6.46C-41.42 6.28 -41.63 6.01 -41.81 5.66C-41.98 5.31 -42.07 4.8 -42.07 4.14L-42.07 -1.34C-41.16 -0.81 -40.05 -0.35 -38.76 0.02C-37.47 0.4 -35.92 0.59 -34.14 0.59C-32.55 0.59 -31.15 0.37 -29.93 -0.07C-28.72 -0.51 -27.67 -1.11 -26.78 -1.87C-25.89 -2.63 -25.15 -3.52 -24.56 -4.54C-23.96 -5.56 -23.48 -6.65 -23.12 -7.81C-22.76 -8.97 -22.51 -10.17 -22.36 -11.41C-22.21 -12.65 -22.13 -13.88 -22.13 -15.09ZM-42.07 -6.02L-42.02 -21.53L-42.02 -23.32C-42.02 -23.87 -42.03 -24.39 -42.07 -24.88C-41.83 -24.97 -41.57 -25.04 -41.29 -25.09C-41.01 -25.13 -40.72 -25.16 -40.44 -25.16C-39.72 -25.16 -39.11 -24.99 -38.61 -24.66C-38.1 -24.33 -37.7 -23.78 -37.38 -23C-37.07 -22.23 -36.84 -21.18 -36.7 -19.87C-36.56 -18.56 -36.49 -16.94 -36.49 -14.99C-36.49 -13.14 -36.51 -11.61 -36.55 -10.4C-36.59 -9.19 -36.72 -8.24 -36.94 -7.53C-37.16 -6.82 -37.5 -6.33 -37.97 -6.06C-38.44 -5.79 -39.12 -5.65 -40 -5.65C-40.36 -5.65 -40.71 -5.68 -41.05 -5.74C-41.4 -5.8 -41.74 -5.9 -42.07 -6.02Z M34.16 -19.96C34.16 -21.51 34.02 -23.04 33.75 -24.55C33.47 -26.05 33.02 -27.48 32.39 -28.82C31.77 -30.16 30.94 -31.4 29.92 -32.54C28.9 -33.67 27.66 -34.66 26.18 -35.49C24.71 -36.32 22.98 -36.97 21 -37.43C19.03 -37.89 16.77 -38.12 14.23 -38.12C11.07 -38.12 8.34 -37.88 6.04 -37.39C3.73 -36.91 1.77 -36.22 0.14 -35.34C-1.48 -34.45 -2.8 -33.39 -3.82 -32.15C-4.84 -30.91 -5.64 -29.53 -6.21 -28.03C-6.79 -26.52 -7.18 -24.91 -7.39 -23.19C-7.6 -21.47 -7.71 -19.69 -7.71 -17.84C-7.71 -16.36 -7.57 -14.92 -7.3 -13.5C-7.02 -12.08 -6.6 -10.73 -6.04 -9.45C-5.47 -8.17 -4.75 -6.98 -3.86 -5.87C-2.97 -4.77 -1.91 -3.78 -0.68 -2.93C0.55 -2.07 1.96 -1.36 3.54 -0.79C5.13 -0.22 6.9 0.17 8.86 0.38L17.29 7.79C17.76 8.15 18.22 8.52 18.69 8.9C19.15 9.27 19.63 9.61 20.13 9.92C20.64 10.23 21.16 10.48 21.71 10.68C22.26 10.89 22.85 10.99 23.47 10.99C23.96 10.99 24.47 10.93 25 10.8C25.54 10.68 26.1 10.46 26.7 10.17C27.97 9.57 29.06 9 29.97 8.46C30.88 7.92 31.63 7.39 32.23 6.87C32.83 6.35 33.26 5.85 33.55 5.35C33.83 4.86 33.97 4.36 33.97 3.86C33.97 3.59 33.94 3.33 33.88 3.06C33.81 2.79 33.72 2.53 33.59 2.26C33.48 2.29 33.35 2.31 33.19 2.33C32.93 2.38 32.59 2.4 32.18 2.4C31.7 2.4 31.14 2.36 30.51 2.27C29.88 2.18 29.27 1.95 28.68 1.55L24.3 -1.39C26.35 -2.25 28.02 -3.34 29.31 -4.66C30.6 -5.98 31.6 -7.45 32.31 -9.07C33.03 -10.7 33.51 -12.43 33.77 -14.28C34.03 -16.14 34.16 -18.03 34.16 -19.96ZM13.59 -5.6C12.87 -5.6 12.26 -5.9 11.77 -6.5C11.27 -7.09 10.86 -7.88 10.54 -8.87C10.22 -9.86 9.97 -11 9.8 -12.28C9.63 -13.57 9.5 -14.9 9.43 -16.27C9.35 -17.65 9.3 -19.02 9.28 -20.38C9.27 -21.75 9.26 -23 9.26 -24.15C9.26 -25.4 9.3 -26.51 9.39 -27.46C9.48 -28.42 9.64 -29.22 9.88 -29.88C10.13 -30.53 10.48 -31.02 10.93 -31.36C11.39 -31.7 11.98 -31.86 12.72 -31.86C13.44 -31.86 14.05 -31.62 14.54 -31.13C15.04 -30.65 15.44 -29.99 15.76 -29.17C16.07 -28.35 16.32 -27.39 16.5 -26.29C16.68 -25.19 16.81 -24.03 16.89 -22.82C16.96 -21.6 17.01 -20.35 17.03 -19.07C17.04 -17.8 17.05 -16.56 17.05 -15.37L17.05 -14.21C17.05 -12.87 17 -11.66 16.91 -10.59C16.81 -9.52 16.64 -8.62 16.38 -7.88C16.12 -7.15 15.77 -6.58 15.32 -6.19C14.87 -5.8 14.3 -5.6 13.59 -5.6Z M62.61 -21.44L62.56 -8.92C62.56 -8.4 62.46 -7.93 62.25 -7.5C62.03 -7.06 61.75 -6.69 61.39 -6.38C61.03 -6.06 60.6 -5.82 60.12 -5.65C59.63 -5.48 59.11 -5.39 58.56 -5.39C57.7 -5.39 56.98 -5.53 56.4 -5.8C55.82 -6.08 55.35 -6.48 55 -7.01C54.65 -7.55 54.39 -8.19 54.24 -8.95C54.1 -9.72 54.02 -10.58 54.02 -11.56L54.02 -23.18C54.02 -24.22 53.95 -25.18 53.81 -26.08C53.67 -26.97 53.35 -27.74 52.87 -28.39C52.38 -29.04 51.68 -29.56 50.75 -29.93C49.82 -30.31 48.59 -30.5 47.03 -30.5C43.53 -30.5 40.86 -30.1 39.01 -29.31C37.16 -28.52 36.23 -27.23 36.23 -25.44C36.23 -25.09 36.32 -24.85 36.49 -24.7C36.66 -24.55 36.88 -24.43 37.15 -24.35C37.41 -24.26 37.7 -24.18 38 -24.11C38.29 -24.04 38.58 -23.91 38.84 -23.71C39.11 -23.51 39.33 -23.23 39.5 -22.86C39.67 -22.49 39.76 -21.98 39.76 -21.32L39.76 -13.58C39.76 -12.61 39.81 -11.58 39.91 -10.51C40.01 -9.43 40.22 -8.37 40.51 -7.32C40.81 -6.27 41.23 -5.26 41.76 -4.31C42.29 -3.35 43 -2.51 43.87 -1.79C44.74 -1.07 45.8 -0.49 47.06 -0.06C48.31 0.37 49.8 0.59 51.53 0.59C52.45 0.59 53.33 0.52 54.15 0.38C54.97 0.24 55.74 0.05 56.45 -0.18C57.15 -0.4 57.8 -0.66 58.4 -0.95C58.99 -1.24 59.53 -1.55 60 -1.86C61.11 -2.58 62.08 -3.4 62.89 -4.33C63.03 -3.5 63.38 -2.77 63.93 -2.14C64.16 -1.86 64.45 -1.59 64.8 -1.33C65.14 -1.07 65.56 -0.84 66.04 -0.64C66.51 -0.43 67.07 -0.27 67.72 -0.14C68.36 -0.02 69.1 0.05 69.93 0.05C73.3 0.05 75.9 -0.35 77.71 -1.14C79.52 -1.93 80.43 -3.22 80.43 -5.01C80.43 -5.36 80.34 -5.6 80.18 -5.75C80.01 -5.9 79.8 -6.02 79.54 -6.1C79.28 -6.17 79.01 -6.24 78.72 -6.31C78.43 -6.37 78.16 -6.49 77.9 -6.67C77.64 -6.85 77.43 -7.11 77.26 -7.46C77.1 -7.81 77.01 -8.29 77.01 -8.92L77.01 -21.53C77.01 -22.35 77 -23.13 76.98 -23.89C76.95 -24.64 76.88 -25.35 76.74 -26.02C76.61 -26.68 76.4 -27.29 76.11 -27.84C75.82 -28.39 75.41 -28.86 74.88 -29.25C74.36 -29.64 73.7 -29.95 72.9 -30.17C72.1 -30.39 71.11 -30.5 69.93 -30.5C66.43 -30.5 63.76 -30.1 61.91 -29.31C60.05 -28.52 59.13 -27.23 59.13 -25.44C59.13 -25.09 59.21 -24.85 59.39 -24.7C59.56 -24.55 59.78 -24.44 60.03 -24.36C60.29 -24.28 60.57 -24.2 60.87 -24.13C61.17 -24.06 61.45 -23.94 61.71 -23.76C61.96 -23.58 62.18 -23.31 62.35 -22.95C62.52 -22.58 62.61 -22.08 62.61 -21.44Z M99.51 -25.16C100.14 -25.16 100.7 -25.06 101.19 -24.88C101.69 -24.69 102.1 -24.37 102.43 -23.92C102.76 -23.47 103.01 -22.88 103.18 -22.13C103.36 -21.39 103.44 -20.47 103.44 -19.37L95.93 -19.37C95.93 -20.37 96.02 -21.24 96.21 -21.97C96.39 -22.7 96.64 -23.3 96.96 -23.77C97.28 -24.24 97.66 -24.59 98.1 -24.82C98.54 -25.04 99.01 -25.16 99.51 -25.16ZM97.77 -31.18C95.98 -31.18 94.34 -30.98 92.85 -30.57C91.36 -30.16 90.02 -29.59 88.83 -28.86C87.64 -28.13 86.59 -27.27 85.7 -26.28C84.8 -25.28 84.06 -24.19 83.46 -23.02C82.87 -21.84 82.42 -20.6 82.12 -19.29C81.82 -17.98 81.67 -16.65 81.67 -15.32C81.67 -14 81.82 -12.7 82.11 -11.4C82.4 -10.11 82.83 -8.87 83.41 -7.68C84 -6.5 84.72 -5.4 85.6 -4.4C86.48 -3.4 87.51 -2.52 88.67 -1.78C89.84 -1.03 91.15 -0.45 92.6 -0.04C94.06 0.38 95.66 0.59 97.42 0.59C99.25 0.59 100.91 0.38 102.38 -0.02C103.86 -0.43 105.16 -1 106.28 -1.73C107.4 -2.46 108.35 -3.32 109.14 -4.31C109.92 -5.3 110.54 -6.37 111 -7.53C111.04 -7.64 111.07 -7.75 111.09 -7.86C111.11 -7.97 111.11 -8.09 111.11 -8.21C111.11 -8.59 111.01 -8.93 110.81 -9.24C110.6 -9.54 110.32 -9.7 109.96 -9.7C109.73 -9.7 109.48 -9.63 109.23 -9.48C108.92 -9.31 108.53 -9.13 108.05 -8.94C107.58 -8.75 107.07 -8.57 106.51 -8.4C105.96 -8.23 105.38 -8.09 104.77 -7.98C104.17 -7.87 103.58 -7.81 103.02 -7.81C101.95 -7.81 100.98 -7.92 100.1 -8.13C99.22 -8.34 98.47 -8.75 97.84 -9.34C97.21 -9.94 96.72 -10.77 96.37 -11.85C96.02 -12.92 95.84 -14.32 95.84 -16.05L107.16 -16.05C107.83 -16.05 108.44 -16.07 108.97 -16.12C109.51 -16.17 109.95 -16.29 110.31 -16.47C110.67 -16.66 110.95 -16.95 111.15 -17.34C111.35 -17.74 111.44 -18.29 111.44 -18.99C111.44 -20.7 111.13 -22.3 110.49 -23.78C109.85 -25.26 108.94 -26.55 107.76 -27.65C106.58 -28.75 105.14 -29.61 103.45 -30.24C101.77 -30.87 99.87 -31.18 97.77 -31.18Z M130.65 -9.06L130.69 -21.65C130.69 -22.28 130.64 -22.81 130.53 -23.25C130.42 -23.69 130.36 -24.05 130.36 -24.33C130.36 -24.55 130.44 -24.72 130.6 -24.84C130.76 -24.96 131.08 -25.02 131.56 -25.02C132.05 -25.02 132.42 -24.88 132.66 -24.62C132.9 -24.35 133.1 -24.02 133.25 -23.63C133.4 -23.24 133.54 -22.81 133.67 -22.35C133.8 -21.88 134.01 -21.45 134.29 -21.06C134.58 -20.67 134.98 -20.34 135.49 -20.07C136.01 -19.81 136.73 -19.67 137.64 -19.67C138.55 -19.67 139.35 -19.83 140.05 -20.14C140.75 -20.46 141.33 -20.87 141.79 -21.38C142.25 -21.89 142.6 -22.47 142.84 -23.13C143.07 -23.79 143.19 -24.47 143.19 -25.16C143.19 -26.21 142.99 -27.09 142.59 -27.8C142.19 -28.52 141.65 -29.1 140.98 -29.55C140.3 -29.99 139.53 -30.32 138.66 -30.51C137.79 -30.71 136.88 -30.81 135.94 -30.81C135.19 -30.81 134.5 -30.75 133.87 -30.64C133.24 -30.53 132.66 -30.38 132.13 -30.18C131.6 -29.99 131.09 -29.76 130.62 -29.5C130.15 -29.24 129.7 -28.97 129.26 -28.69C128.72 -29.28 127.99 -29.73 127.06 -30.04C126.12 -30.35 124.88 -30.5 123.33 -30.5C121.63 -30.5 120.14 -30.41 118.83 -30.22C117.53 -30.03 116.43 -29.73 115.54 -29.31C114.64 -28.9 113.97 -28.37 113.5 -27.73C113.04 -27.1 112.81 -26.33 112.81 -25.44C112.81 -25.09 112.89 -24.85 113.07 -24.7C113.24 -24.55 113.45 -24.44 113.7 -24.36C113.95 -24.28 114.23 -24.21 114.53 -24.15C114.82 -24.08 115.1 -23.96 115.35 -23.78C115.6 -23.6 115.81 -23.34 115.99 -22.99C116.16 -22.65 116.24 -22.16 116.24 -21.53L116.24 -8.97C116.24 -8.32 116.16 -7.83 115.99 -7.5C115.81 -7.16 115.6 -6.9 115.35 -6.72C115.1 -6.54 114.82 -6.42 114.53 -6.35C114.23 -6.29 113.95 -6.22 113.7 -6.14C113.45 -6.06 113.24 -5.95 113.07 -5.8C112.89 -5.65 112.81 -5.4 112.81 -5.06C112.81 -4.17 113.04 -3.4 113.5 -2.77C113.97 -2.13 114.64 -1.6 115.54 -1.19C116.43 -0.77 117.53 -0.47 118.83 -0.28C120.14 -0.09 121.63 0 123.33 0C126.83 0 129.5 -0.4 131.35 -1.19C133.2 -1.98 134.13 -3.27 134.13 -5.06C134.13 -5.4 134.04 -5.65 133.87 -5.8C133.7 -5.95 133.48 -6.06 133.22 -6.14C132.96 -6.22 132.69 -6.3 132.39 -6.37C132.09 -6.44 131.81 -6.56 131.55 -6.74C131.29 -6.92 131.08 -7.19 130.91 -7.55C130.73 -7.92 130.65 -8.42 130.65 -9.06Z M167.88 -15.04L163.52 -22.4C163.35 -22.75 163.22 -23.01 163.12 -23.19C163.03 -23.37 162.94 -23.55 162.86 -23.72C162.83 -23.82 162.82 -23.89 162.82 -23.93C162.82 -24.17 162.96 -24.38 163.24 -24.56C163.52 -24.74 163.83 -24.92 164.16 -25.11C164.49 -25.3 164.79 -25.5 165.08 -25.72C165.36 -25.94 165.5 -26.2 165.5 -26.5C165.5 -27.31 165.28 -27.99 164.85 -28.51C164.42 -29.04 163.76 -29.44 162.88 -29.73C161.99 -30.02 160.88 -30.22 159.55 -30.33C158.21 -30.44 156.65 -30.5 154.86 -30.5C153.98 -30.5 153.11 -30.48 152.23 -30.44C151.35 -30.4 150.51 -30.33 149.7 -30.23C148.89 -30.13 148.13 -29.99 147.43 -29.81C146.72 -29.62 146.11 -29.39 145.59 -29.09C145.07 -28.79 144.66 -28.43 144.37 -28C144.07 -27.58 143.92 -27.08 143.92 -26.5C143.92 -26.08 144.01 -25.76 144.18 -25.56C144.35 -25.35 144.58 -25.19 144.87 -25.08C145.16 -24.96 145.49 -24.86 145.85 -24.77C146.21 -24.68 146.58 -24.56 146.97 -24.39C147.35 -24.23 147.73 -23.99 148.11 -23.69C148.49 -23.38 148.82 -22.95 149.12 -22.4L161.03 -0.38C160.53 0.78 160.09 1.77 159.71 2.57C159.33 3.37 159 4.01 158.72 4.51C158.44 5 158.19 5.35 157.98 5.57C157.77 5.78 157.59 5.88 157.45 5.88C157.25 5.88 157.08 5.71 156.93 5.38C156.79 5.04 156.64 4.62 156.49 4.13C156.33 3.64 156.15 3.09 155.96 2.51C155.76 1.92 155.51 1.38 155.19 0.88C154.88 0.39 154.48 -0.03 153.99 -0.36C153.51 -0.7 152.91 -0.87 152.2 -0.87C151.62 -0.87 151.05 -0.76 150.5 -0.54C149.94 -0.32 149.44 0.04 149 0.55C148.56 1.06 148.21 1.74 147.93 2.58C147.66 3.42 147.52 4.46 147.52 5.7C147.52 6.67 147.72 7.64 148.13 8.61C148.54 9.59 149.1 10.47 149.8 11.26C150.51 12.05 151.34 12.7 152.3 13.19C153.25 13.68 154.28 13.93 155.38 13.93C156.27 13.93 157.18 13.74 158.1 13.36C159.02 12.97 159.94 12.34 160.88 11.47C161.81 10.6 162.74 9.47 163.68 8.08C164.61 6.7 165.54 5 166.46 2.99L178.18 -22.4C178.44 -22.94 178.75 -23.36 179.13 -23.66C179.5 -23.97 179.9 -24.22 180.33 -24.4C180.75 -24.59 181.18 -24.74 181.61 -24.84C182.04 -24.94 182.43 -25.06 182.77 -25.18C183.12 -25.31 183.4 -25.47 183.61 -25.66C183.82 -25.86 183.93 -26.14 183.93 -26.5C183.93 -27.93 183.37 -28.95 182.27 -29.57C181.16 -30.19 179.59 -30.5 177.55 -30.5C176.67 -30.5 175.71 -30.45 174.65 -30.35C173.6 -30.25 172.62 -30.05 171.7 -29.76C170.78 -29.47 170.02 -29.06 169.41 -28.53C168.79 -28.01 168.49 -27.33 168.49 -26.5C168.49 -26.2 168.65 -25.93 168.97 -25.68C169.29 -25.42 169.65 -25.19 170.03 -24.97C170.41 -24.75 170.77 -24.54 171.09 -24.33C171.41 -24.13 171.57 -23.93 171.57 -23.72L171.57 -23.39C171.57 -23.25 171.56 -23.12 171.55 -22.99C171.53 -22.87 171.46 -22.67 171.34 -22.4Z">
            </path>
        </g>


        <g id="SvgjsG1941" className="nXVDqY0Ua9"
            transform="translate(18.715176701276846, 14.825786654412395) scale(0.5407172622055384)"
            light-content="false" fill="#ffffff">
            <path
                d="M10.6 75.3l22.5-22.5v39.4H10.6V75.3zm28.2-16.9v33.8h22.5V58.4L49.9 69.7 38.8 58.4zm28.1 33.8h22.5V30.3L66.9 52.8v39.4zM78.1 7.8l6.4 6.4L50 48.8 33.1 32 5 60.1v8L33.1 40 50 56.8l38.6-38.6 6.4 6.4V7.8H78.1z">
            </path>
        </g>
    </g>
</svg>`,
};
const discordLogo = {
    name: 'discordLogo',
    data: `<svg id="discord-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240"><style>.st0-discord{fill:#fff;}</style><path class="st0-discord" d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/><path class="st0-discord" d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/></svg>`,
};
const twitterLogo = {
    name: 'twitterLogo',
    data: `<?xml version="1.0" encoding="utf-8"?>
    <!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg  id="twitter-logo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 400 400" style="enable-background:new 0 0 400 400;" xml:space="preserve">
    <style type="text/css">
        .st0-twitter{fill:none;}
        .st1{fill:#fff;}
    </style>
    <g id="Dark_Blue">
        <rect class="st0-twitter" width="400" height="400"/>
    </g>
    <g id="Logo__x2014__FIXED">
        <path class="st1" d="M153.6,301.6c94.3,0,145.9-78.2,145.9-145.9c0-2.2,0-4.4-0.1-6.6c10-7.2,18.7-16.3,25.6-26.6
            c-9.2,4.1-19.1,6.8-29.5,8.1c10.6-6.3,18.7-16.4,22.6-28.4c-9.9,5.9-20.9,10.1-32.6,12.4c-9.4-10-22.7-16.2-37.4-16.2
            c-28.3,0-51.3,23-51.3,51.3c0,4,0.5,7.9,1.3,11.7c-42.6-2.1-80.4-22.6-105.7-53.6c-4.4,7.6-6.9,16.4-6.9,25.8
            c0,17.8,9.1,33.5,22.8,42.7c-8.4-0.3-16.3-2.6-23.2-6.4c0,0.2,0,0.4,0,0.7c0,24.8,17.7,45.6,41.1,50.3c-4.3,1.2-8.8,1.8-13.5,1.8
            c-3.3,0-6.5-0.3-9.6-0.9c6.5,20.4,25.5,35.2,47.9,35.6c-17.6,13.8-39.7,22-63.7,22c-4.1,0-8.2-0.2-12.2-0.7
            C97.7,293.1,124.7,301.6,153.6,301.6"/>
    </g>
    <g id="Annotations">
    </g>
    </svg>
    `,
};
const medium = {
    name: 'medium',
    data: `
    <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg id="medium-logo" height="32px" style="fill:#fff; fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-19.502,137.321l-99.495,0l-70.926,176.926l-80.672,-176.926l-104.37,0l0,6.049l33.614,40.493c3.301,2.974 4.985,7.343 4.537,11.762l0,159.114c0.978,5.739 -0.83,11.603 -4.872,15.794l-37.816,45.868l0,6.048l107.227,0l0,-6.048l-37.816,-45.868c-4.073,-4.182 -5.994,-10.008 -5.21,-15.794l0,-137.607l94.119,205.317l10.924,0l80.84,-205.317l0,163.651c0,4.367 0,5.208 -2.858,8.063l-29.075,28.229l0,6.048l141.175,0l0,-6.048l-28.066,-27.556c-2.478,-1.888 -3.707,-4.993 -3.194,-8.065l0,-202.463c-0.513,-3.073 0.716,-6.178 3.194,-8.066l28.74,-27.555l0,-6.049Z"/></svg>
    `,
};
const arrowIcon = {
    name: 'arrowIcon',
    data: `
  <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
  <svg height="512px" id="arrow" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z"/></svg>
  `,
};
const indexerIcon = {
    name: 'indexerIcon',
    data: `
  <?xml version="1.0" encoding="UTF-8"?>
<svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Illustration / Characters / Indexer - 2</title>
    <defs>
        <linearGradient x1="50.0002525%" y1="0.298943436%" x2="50.0002525%" y2="97.0667389%" id="linearGradient-1">
            <stop stop-color="#FFA801" offset="0%"></stop>
            <stop stop-color="#FFA801" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50.0531934%" y1="99.9977555%" x2="49.9830299%" y2="-0.0363250088%" id="linearGradient-2">
            <stop stop-color="#FFA801" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFA801" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50.0359354%" y1="100.068918%" x2="50.008675%" y2="-0.04290453%" id="linearGradient-3">
            <stop stop-color="#FFA801" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50.0003143%" y1="0.298871871%" x2="50.0003143%" y2="97.0668418%" id="linearGradient-4">
            <stop stop-color="#FFA801" offset="0%"></stop>
            <stop stop-color="#FFA801" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="49.5940951%" y1="62.0190161%" x2="49.5940951%" y2="-2.72852722%" id="linearGradient-5">
            <stop stop-color="#FFA801" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFA801" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50.0378573%" y1="99.9929064%" x2="50.0063201%" y2="-0.122039773%" id="linearGradient-6">
            <stop stop-color="#FFA801" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="50.0000503%" cy="50.000312%" fx="50.0000503%" fy="50.000312%" r="61.7927226%" gradientTransform="translate(0.500001,0.500003),scale(1.000000,0.697631),translate(-0.500001,-0.500003)" id="radialGradient-7">
            <stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </radialGradient>
        <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="50%" id="radialGradient-8">
            <stop stop-color="#FFA801" offset="0%"></stop>
            <stop stop-color="#FFA801" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
        <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="50%" id="radialGradient-9">
            <stop stop-color="#66D8FF" offset="0%"></stop>
            <stop stop-color="#AAEAFF" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
    </defs>
    <g id="Illustration-/-Characters-/-Indexer---2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Indexer-3_2" transform="translate(9.000000, 4.000000)" fill-rule="nonzero">
            <path d="M10.6121103,25.896973 C10.6285151,25.7435676 10.6271595,25.5943243 10.63502,25.4493265 C10.6418527,25.3236831 10.7452484,25.2250352 10.8710741,25.2241119 L13.7268524,25.5294422 C13.8526984,25.5282054 13.9577832,25.6250986 13.9667416,25.7506314 C13.9770757,25.8954627 13.9738114,26.0453541 13.9972978,26.19782 C15.2648546,34.426147 13.3128481,40.1568676 12.6622962,41.5779011 C12.6238685,41.6618569 12.5403336,41.7159957 12.4480046,41.7167917 C12.3556756,41.7175704 12.2712295,41.664864 12.2313757,41.5815757 C11.556713,40.1718157 9.65226811,34.874513 10.6121103,25.896973 Z" id="Path" fill="url(#linearGradient-1)" opacity="0.1"></path>
            <path d="M10.9508984,25.7421703 C10.930418,25.481762 11.1155257,25.2501438 11.3740416,25.2127076 L13.2966216,25.1963265 C13.5539839,25.2283136 13.7426585,25.4540768 13.72844,25.7130292 C14.0424335,31.7305524 13.3218384,35.4579173 12.8390811,37.2043011 C12.8190446,37.4098097 12.6471733,37.5670796 12.4406977,37.5688544 C12.2342222,37.5705994 12.059695,37.4162821 12.0361584,37.2111449 C11.523707,35.4732162 10.7396865,31.7586708 10.9508984,25.7421703 Z" id="Path" fill="url(#linearGradient-2)" opacity="0.5"></path>
            <path d="M11.5358308,25.0187568 C11.5393984,24.8563908 11.5433346,24.7029378 11.5473957,24.553433 L13.2472703,24.5389486 C13.2538762,24.6883584 13.2604108,24.8417222 13.2667849,25.0040049 C13.5711103,32.7531184 12.4852319,34.8611108 12.4852319,34.8611108 C12.4852319,34.8611108 11.3635886,32.7719432 11.5358308,25.0187568 Z" id="Path" fill="url(#linearGradient-3)" style="mix-blend-mode: screen;"></path>
            <path d="M14.1017146,28.0752168 C14.1181135,27.9218114 14.1167638,27.7725681 14.1246184,27.6275703 C14.1314539,27.5019282 14.234848,27.4032819 14.3606724,27.4023557 L17.2164568,27.7076859 C17.3422909,27.7064484 17.4473696,27.8033253 17.45634,27.9288454 C17.46668,28.0736768 17.4634097,28.2235681 17.4868962,28.3760341 C18.7544589,36.6043611 16.8024524,42.3350816 16.1518946,43.7561151 C16.1134669,43.8400709 16.029932,43.8942098 15.9376029,43.8950058 C15.8452739,43.8957844 15.7608279,43.843078 15.7209741,43.7597897 C15.0463173,42.3500476 13.1418665,37.0527568 14.1017146,28.0752168 Z" id="Path" fill="url(#linearGradient-4)" opacity="0.2"></path>
            <path d="M14.4405027,27.9203784 C14.420019,27.6599711 14.6051249,27.428352 14.86364,27.3909157 L16.78622,27.3745346 C17.0435847,27.4065189 17.2322626,27.6322829 17.2180443,27.8912373 C17.5320378,33.9087605 16.8114427,37.6361254 16.3286795,39.3825092 C16.3086297,39.5880057 16.1367637,39.7452597 15.9302989,39.7470345 C15.7238341,39.7487794 15.5493124,39.5944778 15.5257627,39.389353 C15.0133054,37.6514481 14.2292849,33.9369027 14.4405027,27.9203784 Z" id="Path" fill="url(#linearGradient-5)"></path>
            <path d="M14.9610346,26.2630173 C14.9645486,26.0924519 14.9684016,25.9312335 14.9723973,25.774207 L16.6722719,25.7597227 C16.6789373,25.9166957 16.6855432,26.0777892 16.6919886,26.2482595 C16.9996438,34.3887054 15.9146692,36.6026486 15.9146692,36.6026486 C15.9146692,36.6026486 14.7921281,34.4075184 14.9610346,26.2630173 Z" id="Path" fill="url(#linearGradient-6)" style="mix-blend-mode: screen;"></path>
            <path d="M10.8140286,15.9997378 C10.8140286,15.9997378 10.0229146,23.4603957 10.6528935,26.2439486 C11.2385882,26.6004164 11.8761727,26.8635993 12.5427768,27.0240568 C13.0039325,26.9821894 13.4579964,26.882519 13.8942903,26.7273897 C15.0589049,24.2295335 13.5097243,18.3547486 13.5097243,18.3547486 L10.8140286,15.9997378 Z" id="Path" fill="#FFFFFF"></path>
            <path d="M14.2306584,26.4530259 L14.2311578,27.6788659 C14.2311578,27.6788659 14.2537049,28.1861443 13.3406038,28.3890557 C12.3997232,28.5981389 11.0127659,28.310147 10.7253032,27.9155978 C10.664764,27.4413059 10.6460911,26.9626055 10.6695005,26.4850389 L12.4609011,26.9210789 L13.8366086,26.7488546 L14.2306584,26.4530259 Z" id="Path" fill="#333333"></path>
            <path d="M12.6072843,27.1322373 C11.872175,27.1762449 11.148151,26.9368683 10.5841465,26.4633481 L10.5646141,25.7876686 C10.6953357,26.4812989 11.65098,26.829773 12.6046384,26.8216686 C13.5320216,26.8137665 14.453233,26.4683308 14.6083865,25.7783692 L14.6007222,26.4272681 C14.0526896,26.9116777 13.3380076,27.1644214 12.6072843,27.1322373 Z" id="Path" fill="#666666"></path>
            <polygon id="Path" fill="#000000" opacity="0.2" points="12.8212432 19.6037838 15.224 28.0791351 12.8943784 28.5185405 12.366973 19.3255135"></polygon>
            <path d="M12.5134632,18.0068276 C12.5134632,18.0068276 13.3631746,24.6287562 13.9345443,28.0422762 C14.3868762,28.4222222 14.9309005,28.9056276 16.4653827,28.7161897 C16.9182737,28.4941113 17.3553884,28.2412107 17.7736454,27.9592708 C18.5933357,25.3173503 19.0181914,18.3584649 19.0181914,18.3584649 L12.5134632,18.0068276 Z" id="Path" fill="#FFFFFF"></path>
            <path d="M16.9492816,18.3003492 L16.384613,28.6319297 L17.8022157,27.9983238 C18.5933297,25.3026697 19.040233,18.4133578 19.040233,18.4133578 L16.9492816,18.3003492 Z" id="Path" fill="#000000" opacity="0.2"></path>
            <path d="M17.7782535,28.2204465 L17.7787886,29.5506914 C17.7787886,29.5506914 17.8032562,30.101173 16.8123881,30.3213692 C15.7913741,30.5482605 14.2862827,30.2357476 13.9743405,29.80758 C13.9086471,29.2928932 13.8883844,28.7734228 13.913787,28.2551827 L15.8577605,28.7283611 L17.3506389,28.5414741 L17.7782535,28.2204465 Z" id="Path" fill="#333333"></path>
            <path d="M15.8639146,28.9090465 C15.1301733,28.9529741 14.407496,28.7140443 13.8445405,28.2414059 L13.8250438,27.566987 C13.9555216,28.259327 14.9093822,28.607147 15.8612508,28.5990368 C16.7869038,28.5911465 17.6602086,28.2089173 17.8356735,27.5697103 L17.8037914,28.2058789 C17.2761956,28.6885677 16.5782596,28.9415559 15.8639146,28.9090465 Z" id="Path" fill="#666666"></path>
            <path d="M10.6748519,16.9813124 L10.8506557,17.2889676 C10.8506557,17.2889676 12.1106016,18.2632108 12.2131276,18.2778616 C12.3156535,18.2925124 14.1542946,19.1202535 14.2128919,19.0909519 C14.2714892,19.0616503 18.7544827,19.2228032 18.7544827,19.2228032 L18.6812286,17.8749762 L13.9491892,17.6259243 L11.2388843,17.0106081 L10.6821773,16.5124984 L10.6748519,16.9813124 Z" id="Path" fill="#000000" opacity="0.2"></path>
            <path d="M22.1609508,7.31014811 C22.2998481,16.0870065 20.4758697,16.7835324 16.0588286,18.4536654 C11.7038751,20.1003119 13.8947065,5.16872757 13.8947065,5.16872757 L22.1609508,7.31014811 Z" id="Path" fill="#333333"></path>
            <g id="Group" opacity="0.5" transform="translate(7.729730, 27.945946)">
                <g opacity="0.49711" transform="translate(1.783784, 7.729730)">
                    <path d="M0.706901622,0.276968108 C0.667635047,0.25938089 0.622752519,0.259268527 0.583398378,0.276658919 L0.519776757,0.27651027 L0.519776757,0.362012973 L0.519824324,0.362012973 C0.52903317,0.423003932 0.584517628,0.466012238 0.645878378,0.459722703 C0.707273571,0.466663028 0.762952796,0.423247763 0.771189189,0.362012973 L0.771189189,0.277122703 L0.706901622,0.276968108 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.645493, 0.276818) rotate(-89.286850) translate(-0.645493, -0.276818) " cx="0.645493154" cy="0.276818093" r="1"></circle>
                </g>
                <g opacity="0.48059" transform="translate(1.189189, 4.756757)">
                    <path d="M0.589278919,0.656432432 C0.531591596,0.630594846 0.465653686,0.630430622 0.407838378,0.655980541 L0.314391892,0.655766486 L0.314391892,0.781374595 L0.314463243,0.781374595 C0.327986994,0.870972046 0.409491338,0.934156102 0.499631892,0.924921622 C0.58982395,0.935099716 0.671612659,0.871326607 0.68373027,0.781374595 L0.68373027,0.656664324 L0.589278919,0.656432432 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.499054, 0.656237) rotate(-89.286850) translate(-0.499054, -0.656237) " cx="0.499054053" cy="0.656236767" r="1"></circle>
                </g>
                <g opacity="0.49018" transform="translate(1.189189, 7.729730)">
                    <path d="M0.426728649,0.654458378 C0.390933501,0.638422329 0.350016477,0.638320766 0.314142162,0.654178919 L0.256157297,0.654054054 L0.256157297,0.731999459 L0.256198919,0.731999459 C0.264592157,0.78759713 0.31516974,0.826802935 0.371104324,0.82106973 C0.4270684,0.82738538 0.477818398,0.78781454 0.485337838,0.731999459 L0.485337838,0.654612973 L0.426728649,0.654458378 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.370745, 0.654320) rotate(-89.286850) translate(-0.370745, -0.654320) " cx="0.370744771" cy="0.654319602" r="1"></circle>
                </g>
                <g opacity="0.51101" transform="translate(2.378378, 8.324324)">
                    <path d="M0.760040541,0.783384324 C0.727219404,0.768686125 0.689704841,0.76859537 0.656812973,0.783134595 L0.60365027,0.78300973 L0.60365027,0.854474054 L0.603685946,0.854474054 C0.611382955,0.905450469 0.657756518,0.941397243 0.709042162,0.936141622 C0.760354072,0.941930185 0.806884391,0.905648951 0.81378,0.854474054 L0.81378,0.783515135 L0.760040541,0.783384324 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.708714, 0.783260) rotate(-89.286850) translate(-0.708714, -0.783260) " cx="0.708714311" cy="0.78326017" r="1"></circle>
                </g>
                <g opacity="0.5174" transform="translate(1.783784, 9.513514)">
                    <path d="M0.452361622,0.34537027 C0.42449486,0.332894782 0.392645746,0.332816996 0.364718378,0.345156216 L0.319582703,0.345049189 L0.319582703,0.405697838 L0.319612432,0.405697838 C0.326147174,0.448976443 0.365515661,0.479496638 0.409057297,0.475039459 C0.452624829,0.479956197 0.492132887,0.449149633 0.497984865,0.405697838 L0.497984865,0.345459459 L0.452361622,0.34537027 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.408720, 0.345420) rotate(-89.286647) translate(-0.408720, -0.345420) " cx="0.408720115" cy="0.345420419" r="1"></circle>
                </g>
                <g opacity="0.50136" transform="translate(5.351351, 9.513514)">
                    <path d="M0.396493514,0.380689189 C0.364688754,0.366442797 0.328334412,0.366352041 0.296458919,0.380439459 L0.244937297,0.380320541 L0.244937297,0.449572973 L0.244972973,0.449572973 C0.252428027,0.4989724 0.297366525,0.533808243 0.347064865,0.528713514 C0.396790004,0.53432614 0.441882605,0.499166063 0.448562162,0.449572973 L0.448562162,0.380814054 L0.396493514,0.380689189 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.346751, 0.380567) rotate(-89.286850) translate(-0.346751, -0.380567) " cx="0.346750739" cy="0.380567115" r="1"></circle>
                </g>
                <g opacity="0.52179" transform="translate(4.756757, 10.108108)">
                    <path d="M0.692316216,0.70028973 C0.666361694,0.688666733 0.636696097,0.688593266 0.610684324,0.700087568 L0.568640541,0.699992432 L0.568640541,0.756508649 L0.568640541,0.756508649 C0.574727599,0.7968197 0.611399628,0.825244972 0.651955135,0.821087568 C0.692532814,0.825670413 0.729331683,0.796978919 0.734782162,0.756508649 L0.734782162,0.700396757 L0.692316216,0.70028973 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.651723, 0.700197) rotate(-89.286850) translate(-0.651723, -0.700197) " cx="0.651723264" cy="0.700197089" r="1"></circle>
                </g>
                <g opacity="0.48472" transform="translate(4.756757, 7.135135)">
                    <path d="M0.519592432,0.249355135 C0.47220746,0.228134298 0.418046672,0.228000327 0.370557297,0.248986486 L0.293801081,0.248808108 L0.293801081,0.352 L0.293860541,0.352 C0.304970712,0.425594037 0.371917293,0.477492031 0.445957838,0.469908108 C0.520040768,0.478272261 0.587222215,0.425887058 0.597169189,0.352 L0.597169189,0.249563243 L0.519592432,0.249355135 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.445488, 0.249173) rotate(-89.286850) translate(-0.445488, -0.249173) " cx="0.44548753" cy="0.249173081" r="1"></circle>
                </g>
                <g opacity="0.52653" transform="translate(3.567568, 9.513514)">
                    <path d="M0.492794054,0.743659459 C0.465848072,0.731588544 0.435047151,0.731510753 0.408040541,0.743445405 L0.364391351,0.743344324 L0.364391351,0.802024865 L0.364421081,0.802024865 C0.370741165,0.84387822 0.408815307,0.8733917 0.450922703,0.869077297 C0.493053032,0.873832463 0.531258488,0.844043144 0.536918919,0.802024865 L0.536918919,0.743754595 L0.492794054,0.743659459 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.450655, 0.743555) rotate(-89.286850) translate(-0.450655, -0.743555) " cx="0.450655106" cy="0.743554994" r="1"></circle>
                </g>
                <g opacity="0.55063" transform="translate(2.972973, 10.702703)">
                    <path d="M0.492252973,0.62526973 C0.471710319,0.616071511 0.448230762,0.616015329 0.427644324,0.625115135 L0.394347027,0.625037838 L0.394347027,0.669763243 L0.394347027,0.669763243 C0.399153164,0.701675085 0.428177669,0.724184847 0.460281622,0.720898378 C0.492400808,0.724504939 0.521518527,0.701793858 0.525841622,0.669763243 L0.525841622,0.625352973 L0.492252973,0.62526973 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.460122, 0.625194) rotate(-89.286850) translate(-0.460122, -0.625194) " cx="0.460122406" cy="0.625194422" r="1"></circle>
                </g>
                <g opacity="0.57527" transform="translate(2.972973, 11.891892)">
                    <path d="M0.834513514,0.425872432 C0.818224639,0.418579393 0.799607475,0.418534016 0.783283243,0.425747568 L0.756901081,0.425688108 L0.756901081,0.461155676 L0.756901081,0.461155676 C0.760721878,0.48645191 0.783733763,0.50428985 0.809183784,0.501683243 C0.834648653,0.504558142 0.857741682,0.486552871 0.861163243,0.461155676 L0.861163243,0.425937838 L0.834513514,0.425872432 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.809039, 0.425812) rotate(-89.286850) translate(-0.809039, -0.425812) " cx="0.809039302" cy="0.425811921" r="1"></circle>
                </g>
                <g opacity="0.56449" transform="translate(2.378378, 11.297297)">
                    <path d="M0.743742703,0.557527568 C0.724957597,0.549112499 0.703485047,0.549058478 0.684657838,0.557378919 L0.654226486,0.557307568 L0.654226486,0.598215676 L0.654226486,0.598215676 C0.658638652,0.627389239 0.685178176,0.647959857 0.71453027,0.644956757 C0.743898565,0.648271015 0.770530777,0.627505708 0.774477297,0.598215676 L0.774477297,0.557604865 L0.743742703,0.557527568 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.714363, 0.557455) rotate(-89.286850) translate(-0.714363, -0.557455) " cx="0.714363171" cy="0.557454787" r="1"></circle>
                </g>
                <g opacity="0.50487" transform="translate(4.162162, 8.324324)">
                    <path d="M0.411233514,0.726755135 C0.376041831,0.71098687 0.335812962,0.710887465 0.300543784,0.726481622 L0.243534054,0.726344865 L0.243534054,0.802982162 L0.243575676,0.802982162 C0.251827845,0.85764471 0.301554855,0.896190994 0.356548649,0.890554054 C0.411570798,0.896760961 0.461465827,0.857857155 0.468861622,0.802982162 L0.468861622,0.726874054 L0.411233514,0.726755135 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.356196, 0.726619) rotate(-89.286850) translate(-0.356196, -0.726619) " cx="0.356195578" cy="0.726619492" r="1"></circle>
                </g>
                <g opacity="0.59599" transform="translate(4.162162, 12.486486)">
                    <path d="M0.38038,0.660671892 C0.36523207,0.653893417 0.34792099,0.653852364 0.332741081,0.660558919 L0.308208108,0.660499459 L0.308208108,0.693475676 L0.308208108,0.693475676 C0.311767654,0.716996364 0.333162515,0.733582157 0.356828108,0.731167027 C0.380507423,0.73383785 0.401978929,0.717092294 0.405156757,0.693475676 L0.405156757,0.660737297 L0.38038,0.660671892 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.356693, 0.660616) rotate(-89.286850) translate(-0.356693, -0.660616) " cx="0.356693152" cy="0.660615903" r="1"></circle>
                </g>
                <g opacity="0.60477" transform="translate(3.567568, 12.486486)">
                    <path d="M0.453937297,0.809879459 C0.440216564,0.803732849 0.424532673,0.803693952 0.410781622,0.809772432 L0.388555676,0.809724865 L0.388555676,0.839567568 L0.388555676,0.839567568 C0.391769714,0.86087939 0.411157005,0.875908663 0.432597297,0.873709189 C0.454047981,0.876127352 0.473499066,0.860960577 0.476383243,0.839567568 L0.476383243,0.809903243 L0.453937297,0.809879459 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.432475, 0.809827) rotate(-89.286850) translate(-0.432475, -0.809827) " cx="0.432474529" cy="0.809826881" r="1"></circle>
                </g>
                <g opacity="0.49571" transform="translate(2.972973, 6.540541)">
                    <path d="M0.655356216,0.682315135 C0.60917253,0.661636826 0.556387407,0.661507181 0.510102703,0.681958378 L0.435296757,0.681785946 L0.435296757,0.782343784 L0.43535027,0.782343784 C0.446178414,0.854072639 0.511431275,0.90465329 0.583594595,0.897255135 C0.655795848,0.905405273 0.721271146,0.854353243 0.730970811,0.782343784 L0.730970811,0.682499459 L0.655356216,0.682315135 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.583132, 0.682140) rotate(-89.286850) translate(-0.583132, -0.682140) " cx="0.583131905" cy="0.682140346" r="1"></circle>
                </g>
                <g opacity="0.49298" transform="translate(2.378378, 5.945946)">
                    <path d="M0.606082162,0.681268649 C0.556483757,0.659055106 0.499792188,0.658914652 0.450084324,0.680882162 L0.369742703,0.680697838 L0.369742703,0.788694054 L0.369802162,0.788694054 C0.381430712,0.865728787 0.451509385,0.920051797 0.529010811,0.912108108 C0.606553619,0.920862467 0.676872741,0.866031568 0.687285946,0.788694054 L0.687285946,0.681464865 L0.606082162,0.681268649 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.528511, 0.681086) rotate(-89.286850) translate(-0.528511, -0.681086) " cx="0.528511119" cy="0.681085922" r="1"></circle>
                </g>
                <g opacity="0.52111" transform="translate(4.162162, 10.108108)">
                    <path d="M0.756823784,0.290661622 C0.729329236,0.278345243 0.697901128,0.27826745 0.670345946,0.290447568 L0.625810811,0.290340541 L0.625810811,0.350216216 L0.625840541,0.350216216 C0.632286547,0.392919813 0.671133912,0.423033523 0.714096216,0.41863027 C0.757083871,0.423487071 0.796068794,0.393090614 0.801840541,0.350216216 L0.801840541,0.290756757 L0.756823784,0.290661622 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.713827, 0.290555) rotate(-89.286850) translate(-0.713827, -0.290555) " cx="0.713826757" cy="0.290554557" r="1"></circle>
                </g>
                <g opacity="0.46531" transform="translate(5.945946, 7.135135)">
                    <path d="M0.570329189,0.677944865 C0.524988076,0.65763743 0.473162097,0.657509939 0.427721622,0.677594054 L0.354277297,0.677421622 L0.354277297,0.776124324 L0.354330811,0.776124324 C0.364959729,0.846546343 0.42902102,0.89620778 0.49986973,0.888948649 C0.570757799,0.896947709 0.63504067,0.846823711 0.644564324,0.776124324 L0.644564324,0.678105405 L0.570329189,0.677944865 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.499415, 0.677777) rotate(-89.286850) translate(-0.499415, -0.677777) " cx="0.499414911" cy="0.67777686" r="1"></circle>
                </g>
                <g opacity="0.50327" transform="translate(4.756757, 2.972973)">
                    <path d="M0.589154054,0.701936757 C0.514450146,0.668474087 0.429060416,0.668258004 0.354188108,0.701342162 L0.233176216,0.701062703 L0.233176216,0.863731892 L0.233271351,0.863731892 C0.250784776,0.979760122 0.356334162,1.0615819 0.473065405,1.04962 C0.589873769,1.06282356 0.695810337,0.980232665 0.711497838,0.863731892 L0.711497838,0.702216216 L0.589154054,0.701936757 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.472319, 0.701653) rotate(-89.286850) translate(-0.472319, -0.701653) " cx="0.472318604" cy="0.701653365" r="1"></circle>
                </g>
                <g opacity="0.51716" transform="translate(2.972973, 2.972973)">
                    <path d="M1.01335568,0.214612973 C0.932225634,0.178288785 0.839499847,0.178059747 0.758191351,0.213982703 L0.626785946,0.213679459 L0.626785946,0.390333514 L0.626887027,0.390333514 C0.645909192,0.516344404 0.760545963,0.605200988 0.887319459,0.592198378 C1.0141571,0.606519791 1.1291808,0.516835012 1.14621784,0.390333514 L1.14621784,0.214928108 L1.01335568,0.214612973 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.886480, 0.214306) rotate(-89.286850) translate(-0.886480, -0.214306) " cx="0.886479596" cy="0.214305903" r="1"></circle>
                </g>
                <g opacity="0.55436" transform="translate(4.162162, 0.594595)">
                    <path d="M0.518551892,0.68222 C0.421096669,0.638578746 0.309707448,0.638304324 0.212038378,0.681464865 L0.0541735135,0.681096216 L0.0541735135,0.893295135 L0.0542924324,0.893295135 C0.077138731,1.04465635 0.214830504,1.1513943 0.367108649,1.13578865 C0.519473631,1.15299185 0.657646466,1.0452564 0.678111351,0.893295135 L0.678111351,0.682594595 L0.518551892,0.68222 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.366138, 0.681852) rotate(-89.286850) translate(-0.366138, -0.681852) " cx="0.366137823" cy="0.681852332" r="1"></circle>
                </g>
                <g opacity="0.59542" transform="translate(4.756757, 1.783784)">
                    <path d="M0.928162162,0.633921081 C0.817231932,0.584244104 0.690440335,0.583930788 0.579265946,0.633058919 L0.399567568,0.632648649 L0.399567568,0.874190811 L0.399704324,0.874190811 C0.425700844,1.04648812 0.582438507,1.16799155 0.755777297,1.15021946 C0.929211888,1.16979856 1.08649041,1.04716528 1.10978703,0.874190811 L1.10978703,0.634372973 L0.928162162,0.633921081 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.754682, 0.633505) rotate(-89.286850) translate(-0.754682, -0.633505) " cx="0.754682221" cy="0.633505275" r="1"></circle>
                </g>
                <g opacity="0.55374" transform="translate(1.783784, 0.000000)">
                    <path d="M0.532364324,0.474403243 C0.428450799,0.427863272 0.309676065,0.427569398 0.205533514,0.473594595 L0.0372037838,0.473202162 L0.0372037838,0.699469189 L0.0373345946,0.699469189 C0.0616959135,0.860869813 0.208524767,0.974684421 0.370902162,0.958034595 C0.533364322,0.976376456 0.68069291,0.861500787 0.702513514,0.699469189 L0.702513514,0.474813514 L0.532364324,0.474403243 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.369846, 0.474008) rotate(-89.286850) translate(-0.369846, -0.474008) " cx="0.36984585" cy="0.474007837" r="1"></circle>
                </g>
                <g opacity="0.49059" transform="translate(4.162162, 5.945946)">
                    <path d="M0.399258378,0.320135676 C0.345032077,0.295849429 0.28305073,0.29569601 0.228704865,0.319713514 L0.140871351,0.319511351 L0.140871351,0.43758 L0.140918919,0.43758 C0.153632916,0.521799041 0.23024458,0.581189895 0.314974595,0.572511351 C0.39974674,0.582070712 0.476615632,0.522126184 0.488001622,0.43758 L0.488001622,0.32034973 L0.399258378,0.320135676 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.314454, 0.319932) rotate(-89.286850) translate(-0.314454, -0.319932) " cx="0.31445449" cy="0.319931986" r="1"></circle>
                </g>
                <g opacity="0.44291" transform="translate(7.135135, 4.756757)">
                    <path d="M0.537477838,0.226540541 C0.476342813,0.199162769 0.406465897,0.198992063 0.345197838,0.226070811 L0.246162162,0.225838919 L0.246162162,0.358956757 L0.246239459,0.358956757 C0.260572528,0.453899543 0.346936157,0.520854909 0.442455676,0.511077838 C0.538037577,0.521870639 0.624716763,0.4542856 0.637554054,0.358956757 L0.637554054,0.226784324 L0.537477838,0.226540541 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.441874, 0.226326) rotate(-89.286850) translate(-0.441874, -0.226326) " cx="0.441874176" cy="0.226325828" r="1"></circle>
                </g>
                <g opacity="0.45352" transform="translate(0.000000, 4.756757)">
                    <path d="M0.928614054,0.252988108 C0.869665074,0.226597427 0.802292115,0.226431053 0.743213514,0.25253027 L0.647733514,0.25231027 L0.647733514,0.380659459 L0.647804865,0.380659459 C0.661625924,0.472211288 0.744909828,0.536771886 0.837016757,0.527334054 C0.929173068,0.537733478 1.01274253,0.47257064 1.0251227,0.380659459 L1.0251227,0.253225946 L0.928614054,0.252988108 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.836428, 0.252765) rotate(-89.286850) translate(-0.836428, -0.252765) " cx="0.836428045" cy="0.252764697" r="1"></circle>
                </g>
                <g opacity="0.46148" transform="translate(5.945946, 5.351351)">
                    <path d="M0.827675676,0.20372 C0.766650723,0.176391672 0.696900199,0.176218809 0.635740541,0.203244324 L0.536889189,0.203012432 L0.536889189,0.335892432 L0.536960541,0.335892432 C0.551257964,0.430681414 0.637489292,0.497525417 0.73284973,0.48774 C0.82825715,0.498508349 0.914775716,0.43104648 0.927591351,0.335892432 L0.927591351,0.203945946 L0.827675676,0.20372 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.732239, 0.203488) rotate(-89.286850) translate(-0.732239, -0.203488) " cx="0.73223896" cy="0.203488241" r="1"></circle>
                </g>
                <g opacity="0.55033" transform="translate(2.378378, 0.594595)">
                    <path d="M0.995196757,0.691097297 C0.895000468,0.646228634 0.780478488,0.64594557 0.680061622,0.690318378 L0.517737297,0.689937838 L0.517737297,0.908124324 L0.517862162,0.908124324 C0.541358143,1.06375097 0.682931796,1.1734945 0.839502162,1.15744973 C0.996159116,1.17513779 1.13822387,1.06436649 1.15926324,0.908124324 L1.15926324,0.691513514 L0.995196757,0.691097297 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.838488, 0.690721) rotate(-89.286850) translate(-0.838488, -0.690721) " cx="0.838487847" cy="0.69072055" r="1"></circle>
                </g>
                <g opacity="0.4849" transform="translate(5.351351, 3.567568)">
                    <path d="M0.968273514,0.634985405 C0.899449618,0.604157912 0.820780878,0.603963433 0.751805405,0.63445027 L0.640318919,0.634188649 L0.640318919,0.784026486 L0.640378378,0.784026486 C0.656523266,0.890915378 0.753761669,0.9662879 0.8613,0.95526973 C0.968898618,0.967419364 1.06647609,0.891339681 1.08093135,0.784026486 L1.08093135,0.635235135 L0.968273514,0.634985405 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.860634, 0.634728) rotate(-89.286850) translate(-0.860634, -0.634728) " cx="0.860634173" cy="0.634727917" r="1"></circle>
                </g>
                <g opacity="0.47394" transform="translate(0.594595, 2.378378)">
                    <path d="M0.539564865,0.485022703 C0.461815054,0.450208888 0.372950086,0.449992808 0.295031892,0.484428108 L0.169090811,0.484130811 L0.169090811,0.653417838 L0.169191892,0.653417838 C0.187419713,0.774169478 0.297265512,0.859322153 0.418749189,0.846875135 C0.540302908,0.860602171 0.650534775,0.774650533 0.666855676,0.653417838 L0.666855676,0.485337838 L0.539564865,0.485022703 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.417974, 0.484724) rotate(-89.286850) translate(-0.417974, -0.484724) " cx="0.417974234" cy="0.484723538" r="1"></circle>
                </g>
                <g opacity="0.49851" transform="translate(2.972973, 4.162162)">
                    <path d="M0.666992432,0.752982703 C0.602291065,0.724005381 0.528336935,0.723821711 0.463492432,0.752477297 L0.358689189,0.752233514 L0.358689189,0.893116757 L0.358766486,0.893116757 C0.373939674,0.993605472 0.465353876,1.06446725 0.566452432,1.05410919 C0.667606786,1.06552771 0.759337763,0.994002642 0.772925405,0.893116757 L0.772925405,0.753238378 L0.666992432,0.752982703 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.565810, 0.752736) rotate(-89.286850) translate(-0.565810, -0.752736) " cx="0.565810148" cy="0.752736288" r="1"></circle>
                </g>
                <g opacity="0.51869" transform="translate(1.783784, 1.783784)">
                    <path d="M0.64572973,0.562522162 C0.557278364,0.522915381 0.456181756,0.52266689 0.367536757,0.561838378 L0.224239459,0.561505405 L0.224239459,0.754094595 L0.224352432,0.754094595 C0.245088771,0.8914668 0.370054685,0.988339724 0.508259459,0.974177838 C0.646543606,0.989792395 0.771947512,0.892012695 0.790519459,0.754094595 L0.790519459,0.562878919 L0.64572973,0.562522162 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.507385, 0.562188) rotate(-89.286850) translate(-0.507385, -0.562188) " cx="0.507384576" cy="0.562188201" r="1"></circle>
                </g>
            </g>
            <g id="Group" opacity="0.5" transform="translate(12.486486, 29.729730)">
                <g opacity="0.49711" transform="translate(1.783784, 7.729730)">
                    <path d="M0.518486486,0.292837838 C0.479218265,0.275256258 0.434337328,0.275146059 0.394983243,0.292534595 L0.331361622,0.292385946 L0.331361622,0.377888649 L0.331409189,0.377888649 C0.340618059,0.43887886 0.396103582,0.481885375 0.457463243,0.475592432 C0.51885641,0.482532963 0.574534739,0.439121039 0.582774054,0.377888649 L0.582774054,0.292998378 L0.518486486,0.292837838 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.457098, 0.292692) rotate(-89.286850) translate(-0.457098, -0.292692) " cx="0.457098209" cy="0.292691879" r="1"></circle>
                </g>
                <g opacity="0.48059" transform="translate(1.189189, 4.756757)">
                    <path d="M0.400881622,0.672331892 C0.343194298,0.646494305 0.277256389,0.646330082 0.219441081,0.67188 L0.125994595,0.67166 L0.125994595,0.797274054 L0.126054054,0.797274054 C0.139580694,0.88687164 0.221087902,0.95005327 0.311228649,0.940815135 C0.401418363,0.950996544 0.48320646,0.887224494 0.495321081,0.797274054 L0.495321081,0.672557838 L0.400881622,0.672331892 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.310665, 0.672111) rotate(-89.286850) translate(-0.310665, -0.672111) " cx="0.310665054" cy="0.672110626" r="1"></circle>
                </g>
                <g opacity="0.49018" transform="translate(0.594595, 7.729730)">
                    <path d="M0.832925946,0.670328108 C0.79712899,0.654298447 0.756213876,0.65419905 0.720339459,0.670054595 L0.662354595,0.669917838 L0.662354595,0.747863243 L0.662378378,0.747863243 C0.670768751,0.803460031 0.721344535,0.842666471 0.777277838,0.836933514 C0.833242842,0.843252454 0.883994876,0.803680026 0.891511351,0.747863243 L0.891511351,0.670470811 L0.832925946,0.670328108 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.776950, 0.670193) rotate(-89.286850) translate(-0.776950, -0.670193) " cx="0.776950293" cy="0.670193461" r="1"></circle>
                </g>
                <g opacity="0.51101" transform="translate(2.378378, 8.324324)">
                    <path d="M0.571649189,0.79926 C0.53882809,0.78456365 0.501315118,0.784470737 0.468421622,0.799004324 L0.415252973,0.798879459 L0.415252973,0.87034973 L0.415294595,0.87034973 C0.422991549,0.921323614 0.469361399,0.957269538 0.520644865,0.952017297 C0.571957703,0.95780915 0.618490058,0.921526329 0.625382703,0.87034973 L0.625382703,0.799390811 L0.571649189,0.79926 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.520313, 0.799140) rotate(-89.286850) translate(-0.520313, -0.799140) " cx="0.520313347" cy="0.799139901" r="1"></circle>
                </g>
                <g opacity="0.5174" transform="translate(1.189189, 9.513514)">
                    <path d="M0.858558919,0.361245946 C0.830693804,0.34876482 0.798843098,0.348684869 0.770915676,0.361025946 L0.72578,0.360924865 L0.72578,0.421573514 L0.725815676,0.421573514 C0.73234763,0.464853021 0.771719096,0.495372908 0.815260541,0.490909189 C0.858825728,0.495829242 0.898333175,0.465023736 0.904182162,0.421573514 L0.904182162,0.361335135 L0.858558919,0.361245946 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.814931, 0.361318) rotate(-89.286647) translate(-0.814931, -0.361318) " cx="0.814931137" cy="0.361318135" r="1"></circle>
                </g>
                <g opacity="0.50136" transform="translate(4.756757, 9.513514)">
                    <path d="M0.802702703,0.396558919 C0.770895974,0.382319662 0.73454386,0.382231072 0.702668108,0.396315135 L0.651152432,0.39619027 L0.651152432,0.465448649 L0.651188108,0.465448649 C0.658648783,0.514844777 0.703583453,0.549677652 0.75328,0.544589189 C0.803005139,0.550201816 0.84809774,0.515041739 0.854777297,0.465448649 L0.854777297,0.39668973 L0.802702703,0.396558919 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.752950, 0.396441) rotate(-89.286850) translate(-0.752950, -0.396441) " cx="0.752950389" cy="0.396440975" r="1"></circle>
                </g>
                <g opacity="0.52179" transform="translate(4.756757, 10.108108)">
                    <path d="M0.503918919,0.716165405 C0.477964397,0.704542408 0.448298799,0.704468941 0.422287027,0.715963243 L0.380243243,0.715891892 L0.380243243,0.772378378 L0.380278919,0.772378378 C0.386363112,0.812688548 0.423033342,0.841114454 0.463587568,0.836957297 C0.504165247,0.841540143 0.540964115,0.812848649 0.546414595,0.772378378 L0.546414595,0.716260541 L0.503918919,0.716165405 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.463334, 0.716065) rotate(-89.286850) translate(-0.463334, -0.716065) " cx="0.463334265" cy="0.716065003" r="1"></circle>
                </g>
                <g opacity="0.48472" transform="translate(4.162162, 7.135135)">
                    <path d="M0.925783784,0.265230811 C0.878400988,0.24400949 0.824241798,0.243875518 0.776754595,0.264862162 L0.699998378,0.264683784 L0.699998378,0.367857838 L0.700057838,0.367857838 C0.711165199,0.441453524 0.778113693,0.493353002 0.852155135,0.485765946 C0.926237137,0.494126808 0.993416548,0.441743194 1.00336649,0.367857838 L1.00336649,0.265421081 L0.925783784,0.265230811 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.851687, 0.265053) rotate(-89.286850) translate(-0.851687, -0.265053) " cx="0.851687105" cy="0.265052886" r="1"></circle>
                </g>
                <g opacity="0.52653" transform="translate(2.972973, 9.513514)">
                    <path d="M0.899027027,0.759529189 C0.872079398,0.747463913 0.841280069,0.747388286 0.814273514,0.759321081 L0.770618378,0.75922 L0.770618378,0.817894595 L0.770654054,0.817894595 C0.776968461,0.859748717 0.815042719,0.889264315 0.85714973,0.884947027 C0.899280987,0.889705483 0.93748848,0.859914576 0.943145946,0.817894595 L0.943145946,0.759624324 L0.899027027,0.759529189 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.856849, 0.759429) rotate(-89.286850) translate(-0.856849, -0.759429) " cx="0.856848736" cy="0.759428779" r="1"></circle>
                </g>
                <g opacity="0.55063" transform="translate(2.378378, 10.702703)">
                    <path d="M0.898432432,0.641145405 C0.877887639,0.631949516 0.854408073,0.631891179 0.833817838,0.640984865 L0.800520541,0.640907568 L0.800520541,0.685638919 L0.800520541,0.685638919 C0.805329544,0.717551643 0.834355848,0.74006077 0.866461081,0.736774054 C0.89858552,0.740403458 0.927715735,0.717680569 0.932015135,0.685638919 L0.932015135,0.641228649 L0.898432432,0.641145405 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.866328, 0.641074) rotate(-89.286850) translate(-0.866328, -0.641074) " cx="0.866327928" cy="0.641074228" r="1"></circle>
                </g>
                <g opacity="0.57527" transform="translate(2.972973, 11.891892)">
                    <path d="M0.646116216,0.441748108 C0.629829036,0.434456831 0.611214425,0.434411456 0.594891892,0.441623243 L0.568503784,0.441563784 L0.568503784,0.477025405 L0.568503784,0.477025405 C0.572321746,0.502324036 0.595334481,0.520165252 0.620786486,0.517558919 C0.646251205,0.52043014 0.66934134,0.502422424 0.67276,0.477025405 L0.67276,0.441813514 L0.646116216,0.441748108 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.620644, 0.441692) rotate(-89.286850) translate(-0.620644, -0.441692) " cx="0.620644283" cy="0.441691726" r="1"></circle>
                </g>
                <g opacity="0.56449" transform="translate(2.378378, 11.297297)">
                    <path d="M0.555351351,0.573403243 C0.536566246,0.564988175 0.515093696,0.564934153 0.496266486,0.573254595 L0.465835135,0.573183243 L0.465835135,0.614085405 L0.465835135,0.614085405 C0.470244411,0.643258835 0.496781073,0.663831879 0.526132973,0.660832432 C0.555504221,0.664149775 0.582139365,0.643379541 0.58608,0.614085405 L0.58608,0.573474595 L0.555351351,0.573403243 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.525974, 0.573329) rotate(-89.286850) translate(-0.525974, -0.573329) " cx="0.525974172" cy="0.573328647" r="1"></circle>
                </g>
                <g opacity="0.50487" transform="translate(3.567568, 8.324324)">
                    <path d="M0.817436757,0.742648649 C0.782241769,0.726886111 0.742013532,0.726786713 0.706741081,0.742375135 L0.649731351,0.742244324 L0.649731351,0.818875676 L0.649772973,0.818875676 C0.658025119,0.873538971 0.707751064,0.912087047 0.762745946,0.906453514 C0.817771977,0.912666795 0.867671974,0.873756473 0.875058919,0.818875676 L0.875058919,0.742767568 L0.817436757,0.742648649 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.762395, 0.742493) rotate(-89.286850) translate(-0.762395, -0.742493) " cx="0.762395227" cy="0.742493352" r="1"></circle>
                </g>
                <g opacity="0.59599" transform="translate(3.567568, 12.486486)">
                    <path d="M0.786577297,0.676547568 C0.771433191,0.669762972 0.754122118,0.669719753 0.738944324,0.676428649 L0.714411351,0.676375135 L0.714411351,0.709351351 L0.714411351,0.709351351 C0.717973672,0.732867114 0.739363974,0.749448784 0.763025405,0.747036757 C0.786705799,0.749714549 0.808182237,0.732969849 0.81136,0.709351351 L0.81136,0.676607027 L0.786577297,0.676547568 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.762893, 0.676490) rotate(-89.286850) translate(-0.762893, -0.676490) " cx="0.762892801" cy="0.676489763" r="1"></circle>
                </g>
                <g opacity="0.60477" transform="translate(2.972973, 12.486486)">
                    <path d="M0.860134595,0.825755135 C0.846413862,0.819608524 0.83072997,0.819569628 0.816978919,0.825648108 L0.794752973,0.825594595 L0.794752973,0.855472973 L0.794752973,0.855472973 C0.797969823,0.876783146 0.817355199,0.891810934 0.838794595,0.889614595 C0.860246206,0.892036047 0.879699327,0.876867684 0.882580541,0.855472973 L0.882580541,0.825808649 L0.860134595,0.825755135 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.838674, 0.825707) rotate(-89.286850) translate(-0.838674, -0.825707) " cx="0.838674104" cy="0.825706687" r="1"></circle>
                </g>
                <g opacity="0.49571" transform="translate(2.972973, 6.540541)">
                    <path d="M0.466964865,0.698190811 C0.420781179,0.677512502 0.367996055,0.677382857 0.321711351,0.697834054 L0.246899459,0.697655676 L0.246899459,0.798219459 L0.246958919,0.798219459 C0.257784197,0.869947433 0.323035259,0.920528718 0.395197297,0.913130811 C0.467399798,0.92128113 0.532876849,0.870229793 0.542579459,0.798219459 L0.542579459,0.698375135 L0.466964865,0.698190811 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.394737, 0.698014) rotate(-89.286850) translate(-0.394737, -0.698014) " cx="0.39473696" cy="0.698014206" r="1"></circle>
                </g>
                <g opacity="0.49298" transform="translate(2.378378, 5.945946)">
                    <path d="M0.417684865,0.697144324 C0.368088637,0.674930299 0.311398666,0.674789843 0.261692973,0.696757838 L0.181351351,0.696567568 L0.181351351,0.80456973 L0.181416757,0.80456973 C0.193045252,0.881601931 0.263120212,0.935924092 0.340619459,0.927983784 C0.418163515,0.936738324 0.48848439,0.881908118 0.498900541,0.80456973 L0.498900541,0.697340541 L0.417684865,0.697144324 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.340116, 0.696954) rotate(-89.286850) translate(-0.340116, -0.696954) " cx="0.340116174" cy="0.696953836" r="1"></circle>
                </g>
                <g opacity="0.52111" transform="translate(4.162162, 10.108108)">
                    <path d="M0.568432432,0.306531351 C0.540935794,0.294224703 0.50951182,0.294146921 0.481954595,0.306317297 L0.437413514,0.306216216 L0.437413514,0.366085946 L0.437449189,0.366085946 C0.443895195,0.408789543 0.482742561,0.438903252 0.525704865,0.4345 C0.568690664,0.43935022 0.607671513,0.408956939 0.613449189,0.366085946 L0.613449189,0.306626486 L0.568432432,0.306531351 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.525432, 0.306428) rotate(-89.286850) translate(-0.525432, -0.306428) " cx="0.525431812" cy="0.306428417" r="1"></circle>
                </g>
                <g opacity="0.46531" transform="translate(5.945946, 7.135135)">
                    <path d="M0.381931892,0.693820541 C0.336590779,0.673513105 0.2847648,0.673385615 0.239324324,0.69346973 L0.165891892,0.693297297 L0.165891892,0.792 L0.165951351,0.792 C0.176580293,0.862421272 0.240642649,0.912080917 0.31149027,0.904818378 C0.382377242,0.912820935 0.446661255,0.862698689 0.456184865,0.792 L0.456184865,0.693975135 L0.381931892,0.693820541 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.311026, 0.693645) rotate(-89.286850) translate(-0.311026, -0.693645) " cx="0.311025912" cy="0.693644774" r="1"></circle>
                </g>
                <g opacity="0.50327" transform="translate(4.162162, 2.972973)">
                    <path d="M0.995351351,0.717812432 C0.920647444,0.684349763 0.835257714,0.684133679 0.760385405,0.717217838 L0.639367568,0.716938378 L0.639367568,0.879601622 L0.639462703,0.879601622 C0.656976182,0.995632383 0.762529282,1.07745501 0.879262703,1.06548973 C0.99606019,1.07867593 1.10197781,0.99608951 1.11766541,0.879601622 L1.11766541,0.718097838 L0.995351351,0.717812432 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.878518, 0.717527) rotate(-89.286850) translate(-0.878518, -0.717527) " cx="0.87851818" cy="0.717527225" r="1"></circle>
                </g>
                <g opacity="0.51716" transform="translate(2.972973, 2.972973)">
                    <path d="M0.824964324,0.230488649 C0.743836697,0.194153232 0.651106137,0.193924182 0.5698,0.229858378 L0.438394595,0.229555135 L0.438394595,0.406203243 L0.43848973,0.406203243 C0.457511872,0.532214881 0.572147577,0.621073256 0.698922162,0.608074054 C0.825763074,0.622395442 0.940789423,0.532708016 0.957826486,0.406203243 L0.957826486,0.230797838 L0.824964324,0.230488649 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.698091, 0.230186) rotate(-89.286850) translate(-0.698091, -0.230186) " cx="0.698090523" cy="0.230185708" r="1"></circle>
                </g>
                <g opacity="0.55436" transform="translate(3.567568, 0.594595)">
                    <path d="M0.924749189,0.698095676 C0.827296382,0.654443188 0.715902386,0.654168755 0.618235676,0.697340541 L0.460370811,0.696971892 L0.460370811,0.909170811 L0.46048973,0.909170811 C0.483341705,1.06053125 0.621033363,1.16726709 0.773311892,1.15166432 C0.925665997,1.16885017 1.06381988,1.06111919 1.08428486,0.909170811 L1.08428486,0.698482162 L0.924749189,0.698095676 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.772337, 0.697726) rotate(-89.286850) translate(-0.772337, -0.697726) " cx="0.772337399" cy="0.697726191" r="1"></circle>
                </g>
                <g opacity="0.59542" transform="translate(5.351351, 1.189189)">
                    <path d="M0.872686486,0.743677297 C0.76175585,0.693992567 0.634959154,0.693679243 0.523784324,0.742815135 L0.344091892,0.742392973 L0.344091892,0.983941081 L0.344228649,0.983941081 C0.370228058,1.15623853 0.526968585,1.27773953 0.700307568,1.25996378 C0.873739815,1.2795462 1.03101772,1.15691398 1.05431135,0.983941081 L1.05431135,0.744117297 L0.872686486,0.743677297 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.699199, 0.743256) rotate(-89.286850) translate(-0.699199, -0.743256) " cx="0.699199393" cy="0.743255712" r="1"></circle>
                </g>
                <g opacity="0.55374" transform="translate(1.189189, 0.000000)">
                    <path d="M0.938567568,0.490272973 C0.834652395,0.443738641 0.715879253,0.443446932 0.611736757,0.48947027 L0.443407027,0.489071892 L0.443407027,0.715344865 L0.443531892,0.715344865 C0.467901644,0.87674054 0.614724753,0.990550696 0.777099459,0.97391027 C0.939562867,0.992252313 1.08689321,0.877377337 1.10871676,0.715344865 L1.10871676,0.490689189 L0.938567568,0.490272973 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.776051, 0.489882) rotate(-89.286850) translate(-0.776051, -0.489882) " cx="0.776051446" cy="0.489881697" r="1"></circle>
                </g>
                <g opacity="0.49059" transform="translate(3.567568, 5.945946)">
                    <path d="M0.805455676,0.336011351 C0.751231552,0.311724622 0.689251802,0.311571201 0.634908108,0.335589189 L0.547068649,0.335381081 L0.547068649,0.453455676 L0.547134054,0.453455676 C0.55984813,0.5376765 0.636464571,0.597066413 0.721195676,0.588381081 C0.805966724,0.597943938 0.882836757,0.538001162 0.894222703,0.453455676 L0.894222703,0.336225405 L0.805455676,0.336011351 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.720648, 0.335806) rotate(-89.286850) translate(-0.720648, -0.335806) " cx="0.720648194" cy="0.335805772" r="1"></circle>
                </g>
                <g opacity="0.44291" transform="translate(6.540541, 4.756757)">
                    <path d="M0.943681081,0.242428108 C0.882543916,0.215052668 0.812666993,0.214879807 0.751395135,0.241952432 L0.652365405,0.241720541 L0.652365405,0.374844324 L0.652442703,0.374844324 C0.666775772,0.469787111 0.7531394,0.536742477 0.848658919,0.526965405 C0.944239892,0.537754916 1.03091704,0.470171465 1.0437573,0.374844324 L1.0437573,0.242671892 L0.943681081,0.242428108 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.848068, 0.242194) rotate(-89.286850) translate(-0.848068, -0.242194) " cx="0.848067881" cy="0.242193668" r="1"></circle>
                </g>
                <g opacity="0.45352" transform="translate(0.000000, 4.756757)">
                    <path d="M0.740216757,0.268863784 C0.681271563,0.242465135 0.613897021,0.242298751 0.554822162,0.268405946 L0.459336216,0.268185946 L0.459336216,0.396535135 L0.459413514,0.396535135 C0.47323173,0.488085334 0.556514901,0.552644775 0.648619459,0.543203784 C0.740775602,0.553609994 0.824348244,0.48844732 0.836725405,0.396535135 L0.836725405,0.269101622 L0.740216757,0.268863784 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.648033, 0.268645) rotate(-89.286850) translate(-0.648033, -0.268645) " cx="0.648033026" cy="0.268644502" r="1"></circle>
                </g>
                <g opacity="0.46148" transform="translate(5.945946, 5.351351)">
                    <path d="M0.639284324,0.219595676 C0.578257194,0.192267831 0.508505072,0.192094969 0.447343243,0.21912 L0.348491892,0.218888108 L0.348491892,0.351768108 L0.348569189,0.351768108 C0.362866559,0.446554558 0.449094173,0.513397711 0.544452432,0.503615676 C0.6398611,0.514384206 0.726381419,0.44692303 0.7392,0.351768108 L0.7392,0.219839459 L0.639284324,0.219595676 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.543844, 0.219362) rotate(-89.286850) translate(-0.543844, -0.219362) " cx="0.543844015" cy="0.219362101" r="1"></circle>
                </g>
                <g opacity="0.55033" transform="translate(2.378378, 0.594595)">
                    <path d="M0.806799459,0.706972973 C0.706603171,0.66210431 0.592081191,0.661821246 0.491664324,0.706194054 L0.32934,0.705813514 L0.32934,0.92402973 L0.329464865,0.92402973 C0.35295798,1.07965549 0.494529834,1.18939966 0.651098919,1.17335514 C0.807756192,1.19104009 0.949820664,1.08027107 0.970865946,0.92402973 L0.970865946,0.707401081 L0.806799459,0.706972973 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.650093, 0.706588) rotate(-89.286850) translate(-0.650093, -0.706588) " cx="0.650092902" cy="0.706588464" r="1"></circle>
                </g>
                <g opacity="0.4849" transform="translate(5.351351, 3.567568)">
                    <path d="M0.779876216,0.650861081 C0.71105232,0.620033587 0.63238358,0.619839109 0.563408108,0.650325946 L0.451921622,0.650064324 L0.451921622,0.799902162 L0.452010811,0.799902162 C0.468150022,0.906791821 0.565388541,0.982166461 0.672926486,0.971145405 C0.780526352,0.983295221 0.878105581,0.907216231 0.892563784,0.799902162 L0.892563784,0.651110811 L0.779876216,0.650861081 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.672245, 0.650596) rotate(-89.286850) translate(-0.672245, -0.650596) " cx="0.672245174" cy="0.650595831" r="1"></circle>
                </g>
                <g opacity="0.47394" transform="translate(0.000000, 2.378378)">
                    <path d="M0.945762162,0.500898378 C0.868015333,0.466080336 0.779150371,0.465864251 0.701235135,0.500303784 L0.575294054,0.500012432 L0.575294054,0.669299459 L0.575389189,0.669299459 C0.593619875,0.790051982 0.703467474,0.875204023 0.824952432,0.862756757 C0.946503367,0.876473921 1.05672912,0.790527047 1.07305892,0.669299459 L1.07305892,0.501219459 L0.945762162,0.500898378 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.824174, 0.500603) rotate(-89.286850) translate(-0.824174, -0.500603) " cx="0.82417381" cy="0.500603269" r="1"></circle>
                </g>
                <g opacity="0.49851" transform="translate(2.972973, 4.756757)">
                    <path d="M0.478595135,0.174263784 C0.413895462,0.145288225 0.339943885,0.145104556 0.275101081,0.173758378 L0.170291892,0.173514595 L0.170291892,0.314397838 L0.170375135,0.314397838 C0.185545457,0.414885671 0.27695786,0.48574808 0.378055135,0.47539027 C0.479210736,0.486808971 0.570943466,0.415284597 0.584534054,0.314397838 L0.584534054,0.174519459 L0.478595135,0.174263784 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.377409, 0.174015) rotate(-89.286850) translate(-0.377409, -0.174015) " cx="0.377409258" cy="0.174015479" r="1"></circle>
                </g>
                <g opacity="0.51869" transform="translate(1.783784, 1.783784)">
                    <path d="M0.457314595,0.578397838 C0.368867016,0.538783085 0.267768823,0.538534586 0.179127568,0.577714054 L0.0358302703,0.577375135 L0.0358302703,0.77 L0.0359372973,0.77 C0.0566765015,0.907373088 0.181644215,1.00424538 0.31985027,0.990083243 C0.458133489,1.00569451 0.583535358,0.907916398 0.60211027,0.77 L0.60211027,0.578778378 L0.457314595,0.578397838 Z" id="Path" fill="#E99E05"></path>
                    <circle id="Oval" fill="#FFDC42" transform="translate(0.318990, 0.578068) rotate(-89.286850) translate(-0.318990, -0.578068) " cx="0.318989557" cy="0.578068007" r="1"></circle>
                </g>
            </g>
            <path d="M9.03995459,7.12671568 C8.48921867,8.58679779 8.16733877,10.1231943 8.08570162,11.6815541 C8.11500324,11.8866535 6.92100378,12.7803232 6.01268919,13.0147243 C5.10437459,13.2491254 6.45219568,15.3001735 6.45219568,15.3001735 L10.4500892,14.4488865 L10.4295519,9.55358919 L9.03995459,7.12671568 Z" id="Path" fill="#E6E6E6"></path>
            <path d="M17.3334016,12.41042 C17.5445719,16.5171065 17.9502162,16.7632389 17.9502162,16.7632389 C17.9502162,16.7632389 16.2461081,19.3474065 14.0663897,18.6807411 C13.1293562,18.3941465 10.7554254,17.1717611 10.6968222,16.6590005 C10.6746987,16.2720727 10.5906098,15.8912044 10.4477643,15.5309297 C10.065576,14.7429007 9.74934501,13.9245567 9.50228315,13.0842978 C9.50020857,11.9428293 9.59578355,10.8032739 9.78799622,9.67810324 L10.4295638,9.55361297 L17.3334016,12.41042 Z" id="Path" fill="#3B3B3B"></path>
            <polygon id="Path" fill="#2C454D" points="6.16416216 16.409027 1.5947027 14.363027 1.50313514 11.129027 5.70097297 13.0388649"></polygon>
            <path d="M4.94082541,12.574427 C3.52182143,13.1736624 2.05489049,13.6523781 0.555571351,14.0055032 L5.42134108,16.1013303 L4.94082541,12.574427 Z" id="Path" fill="#406570"></path>
            <path d="M1.50325405,11.1291341 C0.963868865,11.366614 0.50805831,11.7603344 0.194676216,12.2594584 C-0.147310811,12.9335622 -0.0725881081,16.5129146 0.691424324,16.8978908 C1.87387081,17.4937043 1.59485135,14.3631341 1.59485135,14.3631341 L1.50325405,11.1291341 Z" id="Path" fill="#406570"></path>
            <path d="M1.59485135,14.3630924 C-0.403842703,15.4221249 -0.0604048649,16.5736168 1.12204757,17.1694243 C2.3045,17.7652319 4.87267892,17.1600832 6.1640373,16.4091697 C7.45539568,15.6582562 5.52883189,16.0712735 5.52883189,16.0712735 L1.59485135,14.3630924 Z" id="Path" fill="#2C454D"></path>
            <polygon id="Path" fill="#406570" points="4.94108108 12.5744865 5.78540541 12.3003784 6.21827027 15.2037838 5.42151351 16.1016216"></polygon>
            <polygon id="Path" fill="#528391" points="5.52854054 16.0712973 6.25216216 16.458973 6.87291892 15.2864324 6.21827027 15.2037838"></polygon>
            <polygon id="Path" fill="#649FB0" points="5.79491892 12.2801622 6.40318919 12.7707027 6.83783784 15.3334054 6.19745946 15.0979459"></polygon>
            <polygon id="Path" fill="#85D3EA" points="1.60421622 12.735027 1.3312973 13.0138919 1.32178378 13.1631351 1.60183784 13.1435135"></polygon>
            <polygon id="Path" fill="#85D3EA" points="1.53524324 12.1243784 1.26291892 12.4032432 1.25281081 12.5530811 1.53286486 12.5334595"></polygon>
            <polygon id="Path" fill="#85D3EA" points="1.53345946 11.4792432 1.26054054 11.7581081 1.25102703 11.9073514 1.53108108 11.8883243"></polygon>
            <polygon id="Path" fill="#85D3EA" points="1.6167027 13.2392432 1.34378378 13.5181081 1.33427027 13.6679459 1.61432432 13.6483243"></polygon>
            <polygon id="Path" fill="#85D3EA" points="1.60362162 13.8023243 1.3312973 14.0811892 1.32118919 14.2304324 1.60124324 14.2114054"></polygon>
            <path d="M7.36048649,12.2993735 C5.39734919,12.7095843 4.97596,13.4295611 5.18105946,14.3378757 C5.38615892,15.2461903 7.92173622,15.5353297 8.07411892,15.0610811 C8.82158973,12.7348189 7.36048649,12.2993735 7.36048649,12.2993735 Z" id="Path" fill="#E6E6E6"></path>
            <polygon id="Path" fill="#EBF8FC" points="2.98843243 13.8035135 2.32545946 13.4205946 2.98427027 13.0406486 3.64724324 13.422973"></polygon>
            <polygon id="Path" fill="#E0F4FA" points="2.98843243 14.564 2.32545946 14.1816757 2.32545946 13.4205946 2.98843243 13.8035135"></polygon>
            <polygon id="Path" fill="#CEE8F0" points="2.98843243 14.564 3.65140541 14.1816757 3.65140541 13.4205946 2.98843243 13.8035135"></polygon>
            <polygon id="Path" fill="#000000" opacity="0.2" points="16.4399459 12.7035135 16.4108108 15.0182703 15.5462703 16.1313514 16.3519459 19.7649189 18.7547027 18.9735135 19.4194595 12.6607027"></polygon>
            <path d="M10.9820016,6.51364108 C10.5748232,6.51364108 8.55005027,6.80665135 8.55005027,6.80665135 C9.15399367,6.40371309 9.79696539,6.06259483 10.4692411,5.78845568 C10.9763308,5.61001014 11.4665942,5.38694012 11.9342686,5.12186757 L10.7622454,5.73717784 L10.9820016,6.51364108 Z" id="Path" fill="#3B3B3B"></path>
            <polygon id="Path" fill="#292929" points="9.77394595 4.65805405 9.77394595 6.73616216 10.4541622 7.02691892 10.5421622 4.90243243"></polygon>
            <path d="M12.1535135,4.27769189 L12.2267616,6.29804108 C12.0013806,6.06664774 11.6611139,5.98920445 11.3577914,6.10026703 C10.9756568,6.31835456 10.6625041,6.63944563 10.4540492,7.02691892 L10.5419541,4.90262865 L10.9637773,4.30928865 L11.7652432,4.1554373 L12.1535135,4.27769189 Z" id="Path" fill="#333333"></path>
            <path d="M10.6884324,3.93568703 C9.93012216,4.26615676 9.77405297,4.65780432 9.77405297,4.65780432 L10.5419303,4.90260486 C10.5419303,4.90260486 10.6416914,4.68718919 11.3577141,4.34589189 C11.6016763,4.21255667 11.8904217,4.18781119 12.1535135,4.27769189 C11.7669189,3.8998068 11.2023789,3.76802199 10.6884324,3.93568703 Z" id="Path" fill="#545454"></path>
            <path d="M19.2716908,10.4987568 C26.5009265,6.67745189 19.2023076,1.67956919 11.3577616,5.45566108" id="Path" fill="#171717"></path>
            <path d="M18.8699649,10.4987568 C25.7322227,6.87143243 18.8040957,2.12725135 11.3577616,5.71167568" id="Path" fill="#000000"></path>
            <path d="M12.0990724,4.9739027 C15.5321724,5.85292162 17.1403665,6.82875243 19.3685027,9.63057135 C21.5966389,12.4323903 14.1762708,8.36694486 14.1762708,8.36694486 L12.2022168,7.44472865 L10.2133514,8.55205405 L10.4295341,5.9292973 L12.0990724,4.9739027 Z" id="Path" fill="#191919"></path>
            <path d="M12.6306638,7.37072541 C13.4877896,7.33186847 14.3440631,7.46424954 15.1494378,7.76013135 C15.3327117,8.21605978 15.4449857,8.69739697 15.4823454,9.18736054 C15.4173859,9.54887405 14.6817,11.3556032 14.6817,11.3556032 C14.6817,11.3556032 11.1949378,10.2128757 11.1949378,10.0663735 C11.1949378,9.91987135 11.8102481,8.24973838 11.8102481,8.24973838 L12.6306638,7.37072541 Z" id="Path" fill="#383838"></path>
            <path d="M12.1911573,9.45108108 C12.1299214,8.84187736 12.3751764,8.24202659 12.8456811,7.85023027 C13.1032808,7.66569429 13.3131689,7.42239782 13.4579351,7.14052216 C13.4579351,7.14052216 13.336287,7.09123027 13.2790811,7.07422486 C12.8103238,6.91019762 12.2944639,6.94851717 11.8550865,7.18000324 C11.2601587,7.4308425 10.8862237,8.02761214 10.9199676,8.67237622 L10.6968281,9.53898595 C10.6968281,9.53898595 11.8466492,12.2018362 12.1911573,9.45108108 Z" id="Path" fill="#000000"></path>
            <path d="M16.9085459,11.3556032 L17.7829568,10.351333 C17.7829568,9.20120865 16.9148486,8.52301405 15.9413784,7.93299784 C15.8477297,7.87460865 15.7484324,7.81800324 15.6477081,7.75973297 L15.1031784,7.44477622 L15.1494378,7.76014919 C15.2307189,8.30783027 13.8764108,8.98620324 13.5389784,10.4473005 C13.0955297,12.3694286 16.9085459,11.3556032 16.9085459,11.3556032 Z" id="Path" fill="#000000"></path>
            <path d="M12.5427589,4.82854216 C12.4695108,5.8470827 12.4109076,6.64556378 12.4109076,6.64556378 L12.3816059,8.33398649 C12.7249734,8.1854201 13.0399846,7.97844906 13.3126459,7.72226757 C13.5198497,7.41156854 13.6890183,7.07712603 13.8165232,6.72611351 L12.5427589,4.82854216 Z" id="Path" fill="#0C0B17"></path>
            <path d="M14.8778092,6.09955351 L14.8428649,8.15962162 C14.8274556,8.26333644 14.7636691,8.35355351 14.671027,8.40266216 C14.3114871,8.58065384 13.8943145,8.6019057 13.5185481,8.46137243 C13.3075205,8.37953243 13.1940838,8.25837189 13.1962362,8.13168162 L13.2243011,6.47763838 L14.0199995,5.48125243 L14.1057816,5.48270919 L14.8778092,6.09955351 Z" id="Path" fill="#DBA2A7"></path>
            <path d="M11.9310519,4.75707784 C11.7944676,5.49228216 11.9697778,6.72630378 12.5207946,7.23185189 C12.8008008,7.53253913 13.2321955,7.63905182 13.6199741,7.5032427 C14.1023243,7.28900078 14.5244153,6.9591436 14.8488822,6.54287135 C15.0819913,6.2221005 15.2475615,5.8573489 15.3355638,5.47071027 C15.4822607,4.98969514 15.4209035,4.46923447 15.1663691,4.03552055 C14.9118347,3.60180663 14.4873667,3.29444542 13.9958827,3.18796054 C12.2368281,2.81218865 12.1151562,3.7655973 11.9310519,4.75707784 Z" id="Path" fill="#FCBAC0"></path>
            <path d="M15.9155135,4.02043459 C16.141513,4.75191676 16.0993384,8.97400216 14.8060832,8.64506649 L14.8777854,6.09955351 C14.9566524,5.94139135 15.1446157,5.82279351 15.1333005,5.62748703 C15.1278659,5.50982865 14.9381962,5.51499568 14.7954043,5.64185838 C14.7141292,5.72111784 14.47116,6.60284216 14.3517892,6.62484216 C14.1589384,6.66319946 14.1122568,5.66154541 14.1209735,5.46651838 C14.1624306,5.12501784 14.0278189,4.78580398 13.7634795,4.56565405 C13.7333038,4.54200703 13.576313,4.55351243 13.7620941,4.37393297 C13.7897427,4.34717622 13.6024751,4.46108865 13.5676616,4.44391676 C13.1019276,4.21415351 12.3989919,4.40421568 12.1091211,4.25364649 C12.0381421,4.41713119 11.9786222,4.58535565 11.9309924,4.75710162 C11.9181545,4.53581961 11.9193937,4.31394534 11.9347027,4.09282054 C11.9428769,3.47013274 12.3702456,2.93140423 12.9747438,2.78177514 C13.0763465,2.7558448 13.1794338,2.73612525 13.2834335,2.72272595 C14.8040735,2.52415514 15.6888659,3.29720541 15.9155135,4.02043459 Z" id="Path" fill="#17142B"></path>
            <path d="M14.4522162,5.67730216 C14.276353,6.01804649 14.3131524,6.3868973 14.5344546,6.5011427 C14.7557568,6.61538811 15.0777416,6.43174162 15.2536643,6.09100324 C15.429587,5.75026486 15.3927341,5.38140811 15.17142,5.2671627 C14.9501059,5.1529173 14.6281508,5.33656378 14.4522162,5.67730216 Z" id="Path" fill="#FCBAC0"></path>
            <path d="M20.8934238,11.6486076 C21.9482346,13.9340508 20.5711178,17.8603373 17.7829568,19.0963805 C15.784453,19.9823622 17.73552,18.02856 17.3492178,17.8055157 C16.9629157,17.5824714 17.5559346,14.0489265 18.0805692,12.7912995 C18.7790811,11.1169865 20.8934238,11.6486076 20.8934238,11.6486076 Z" id="Path" fill="#E6E6E6"></path>
            <path d="M19.4195427,12.6605481 L17.8956859,13.2558919 C16.3677675,12.947625 14.8737005,12.4905064 13.4348649,11.8910773 C13.5208016,14.6360649 13.3208751,15.1236919 12.0248432,14.4942124 C11.2606941,14.1230962 10.7067222,12.9063178 11.1716,10.7306189 C9.60286386,10.0511028 8.57729669,8.51604108 8.55003243,6.80667514 L9.78065892,6.63087135 L10.9819838,6.51366486 C10.9819838,6.51366486 10.1411081,8.48930649 12.4470114,9.26792216 C13.8040551,9.71874054 15.2795544,9.65432871 16.5921503,9.08696919 L17.1429351,9.91989514 L19.3844438,11.7218378 L19.4195427,12.6605481 Z" id="Path" fill="#292929"></path>
            <path d="M18.651927,9.14707081 C20.9526989,10.4753951 21.2639811,11.6193059 21.2639811,11.6193059 L19.4195486,12.6605481 C19.4195486,12.6605481 17.6819292,10.3393519 16.8792503,9.87592486 C17.1973584,8.89860757 17.1386184,8.89860757 17.4975573,8.69137946 C17.8564962,8.48415135 18.651927,9.14707081 18.651927,9.14707081 Z" id="Path" fill="#3B3B3B"></path>
            <path d="M17.5960212,3.41625514 C17.5960212,1.5294734 16.0664655,-6.54054054e-05 14.1796838,-6.54054054e-05 C12.292902,-6.54054054e-05 10.7633632,1.5294734 10.7633632,3.41625514 L10.7633632,7.8155773 L10.7633632,7.8155773 C10.7692438,8.90481514 12.3038092,9.79067189 14.1903686,9.79402375 C16.0769281,9.79748595 17.6018789,8.91716486 17.5960212,7.82786757 L17.5944049,7.8155773 L17.5960212,7.8155773 L17.5960212,3.41625514 Z" id="Path" fill="url(#radialGradient-7)" opacity="0.5"></path>
            <polygon id="Path" fill="#292929" points="16.1991351 7.50675676 16.1991351 9.58545946 16.8793514 9.87621622 16.9673514 7.75172973"></polygon>
            <path d="M18.5787027,7.12671568 L18.6519508,9.14707081 C18.4265719,8.915674 18.0863042,8.83822814 17.7829805,8.94929081 C17.4008608,9.1673797 17.0877195,9.48846348 16.8792681,9.87592486 L16.967173,7.75162865 L17.3889962,7.15829459 L18.1904681,7.00446703 L18.5787027,7.12671568 Z" id="Path" fill="#333333"></path>
            <path d="M17.1136514,6.78471081 C16.3553411,7.11518054 16.1992719,7.50683405 16.1992719,7.50683405 L16.9671492,7.75162865 C16.9671492,7.75162865 17.0669103,7.53621297 17.782933,7.19492162 C18.0268747,7.06161184 18.315585,7.03686481 18.5786551,7.12671568 C18.1920741,6.74886355 17.627575,6.61708134 17.1136514,6.78471081 Z" id="Path" fill="#545454"></path>
            <polygon id="Path" fill="#010101" points="12.9157838 17.2123243 11.5838919 16.4435135 11.5838919 14.8161081 12.9157838 15.5855135"></polygon>
            <polygon id="Path" fill="#85D3EA" points="12.6303784 16.6991892 11.8692973 16.2597838 11.8692973 15.3298378 12.6303784 15.7692432"></polygon>
            <path d="M12.9575778,13.6274481 C12.9575778,14.1370157 12.5975568,14.3422816 12.1534838,14.0858805 C11.6796649,13.7782006 11.3809771,13.2630097 11.3493897,12.6989411 C11.3493897,12.1893735 11.7094108,11.9841195 12.1534838,12.2405086 C12.6273062,12.5481851 12.9259952,13.063378 12.9575778,13.6274481 Z M12.6895405,13.4726989 C12.6684791,13.0966641 12.4693561,12.7532152 12.1534838,12.5481043 C11.8574292,12.3771762 11.617427,12.5140103 11.617427,12.8537259 C11.6384894,13.2297605 11.8376122,13.573209 12.1534838,13.7783205 C12.4495384,13.9492546 12.6895405,13.8124324 12.6895405,13.4726989 L12.6895405,13.4726989 Z" id="Shape" fill="#85D3EA"></path>
            <path d="M7.45643027,26.1286211 L16.3914032,15.4556481 C16.3960964,15.4476926 16.400095,15.4393473 16.4033546,15.4307049 C16.44016,15.3401303 17.2828016,13.9007178 19.0165205,15.1195595 C20.0928338,15.8027147 20.4471917,17.2081718 19.8234389,18.3199649 L7.45643027,26.1286211 Z" id="Path" fill="#2C454D"></path>
            <path d="M18.0348032,19.5223243 C18.119093,19.0278535 18.6630935,18.3028941 18.2591676,17.1701081 C17.8349778,15.9805027 16.1174378,15.8386027 16.1174378,15.8386027 L16.1174378,15.6041838 C16.1174378,15.6041838 18.4834249,15.2181135 18.7837903,17.3915351 C18.9747255,18.1872789 18.6816441,19.0210646 18.0348032,19.5223243 Z" id="Path" fill="#14B4AC" opacity="0"></path>
            <path d="M17.1169335,20.0943659 C17.195087,19.6358859 17.664353,18.9991227 17.2910546,17.948367 C16.9021897,16.8546103 15.3482881,16.7509724 15.3482881,16.7509724 L15.3556135,16.5190092 C15.3556135,16.5190092 17.5004886,16.1525605 17.7770346,18.1283746 C17.9601805,18.8563957 17.7023198,19.6243872 17.1169335,20.0943659 L17.1169335,20.0943659 Z" id="Path" fill="#14B4AC" opacity="0.11111"></path>
            <path d="M16.1990578,20.6664314 C16.4719366,20.0556877 16.5159105,19.3671386 16.3229416,18.7266438 C15.9693957,17.7287416 14.5791503,17.66336 14.5791503,17.66336 L14.5938011,17.4338465 C14.5938011,17.4338465 16.5175584,17.0870135 16.7702789,18.8652378 C16.9452148,19.5256052 16.7225959,20.2275744 16.1990578,20.6664314 Z" id="Path" fill="#14B4AC" opacity="0.22222"></path>
            <path d="M15.2811881,21.2384908 C15.5129899,20.6881984 15.5391277,20.0728886 15.3548286,19.5049205 C15.0366016,18.602867 13.8100124,18.5757476 13.8100124,18.5757476 L13.8320124,18.3486719 C13.8320124,18.3486719 15.5310427,18.0219838 15.763553,19.6020773 C15.9282958,20.1949049 15.7411463,20.829806 15.2811881,21.2384908 Z" id="Path" fill="#14B4AC" opacity="0.33333"></path>
            <path d="M14.3633184,21.8105562 C14.5534942,21.3206099 14.5617951,20.778733 14.3867157,20.2831914 C14.1038135,19.4769924 13.0408686,19.4881351 13.0408686,19.4881351 L13.0701703,19.2634973 C13.0701703,19.2634973 14.5472681,18.9565676 14.7567795,20.3389465 C14.9115193,20.86446 14.7596737,21.4323878 14.3633184,21.8105562 L14.3633184,21.8105562 Z" id="Path" fill="#14B4AC" opacity="0.44444"></path>
            <path d="M13.4454427,22.3826157 C13.5931693,21.9529406 13.5836584,21.4847888 13.4186027,21.0614681 C13.1710254,20.3511238 12.2717308,20.4005405 12.2717308,20.4005405 L12.3083578,20.1783465 C12.3083578,20.1783465 13.5638205,19.8911573 13.7500297,21.0758216 C13.9024362,22.0454092 13.4454427,22.3826157 13.4454427,22.3826157 Z" id="Path" fill="#14B4AC" opacity="0.55556"></path>
            <path d="M12.527573,22.9546811 C12.6315132,22.5852968 12.6042742,22.1913109 12.4504897,21.8397449 C12.2871745,21.472575 11.9006386,21.2577507 11.502593,21.3129341 L11.5465395,21.0931778 C11.5465395,21.0931778 12.5808011,20.8256103 12.74328,21.8126789 C12.8840265,22.6676643 12.527573,22.9546811 12.527573,22.9546811 Z" id="Path" fill="#14B4AC" opacity="0.66667"></path>
            <path d="M11.6097032,23.5267465 C11.6675975,23.2180605 11.6228794,22.8989091 11.4823768,22.6180216 C11.366477,22.3178839 11.0462421,22.1499587 10.7334492,22.2252978 L10.784727,22.0079854 C10.784727,22.0079854 11.5983941,21.7600395 11.7365303,22.5495124 C11.8660686,23.2898541 11.6097032,23.5267465 11.6097032,23.5267465 Z" id="Path" fill="#14B4AC" opacity="0.77778"></path>
            <path d="M10.6918276,24.0988059 C10.7270395,23.8922497 10.6731632,23.87286 10.5142638,23.3962924 C10.4820926,23.2844265 10.4032379,23.1918707 10.2979026,23.1423384 C10.1925674,23.0928061 10.0709871,23.0911102 9.96431135,23.1376854 L10.0229146,22.9228108 C10.0229146,22.9228108 10.6169146,22.6942665 10.7297805,23.2863697 C10.848973,23.9118832 10.6918276,24.0988059 10.6918276,24.0988059 Z" id="Path" fill="#14B4AC" opacity="0.88889"></path>
            <path d="M9.77394595,24.6708714 C9.80302162,24.5003 9.67441081,24.5690946 9.54613892,24.1745692 C9.43984919,23.8476314 9.19516162,24.050073 9.19516162,24.050073 L9.26108432,23.8376422 C9.26108432,23.8376422 9.63701676,23.6281486 9.72301892,24.023227 C9.79422024,24.231384 9.8117368,24.4541438 9.77394595,24.6708714 L9.77394595,24.6708714 Z" id="Path" fill="#14B4AC"></path>
            <path d="M18.3775276,19.2230232 C18.4618173,18.7285524 19.0058178,18.003593 18.6018919,16.870807 C18.1777022,15.6811957 16.1174319,15.6041778 16.1174319,15.6041778 L16.3371822,15.516273 C16.3371822,15.516273 18.5127205,14.8078968 18.8130741,16.9813065 C19.0262422,18.5237265 18.3775276,19.2230232 18.3775276,19.2230232 Z" id="Path" fill="#000000" opacity="0.5"></path>
            <path d="M17.4215741,19.8283384 C17.4997335,19.3698584 17.9761227,18.7181232 17.6028243,17.6673676 C17.2139595,16.5736108 15.3556135,16.5190092 15.3556135,16.5190092 L15.5753697,16.4270432 C15.5753697,16.4270432 17.5370622,15.7933541 17.8136081,17.7691681 C17.9859035,18.4799781 17.8430036,19.2305644 17.4215741,19.8283384 Z" id="Path" fill="#000000" opacity="0.44444"></path>
            <path d="M16.4656205,20.4336595 C16.5376438,20.0111643 16.9464276,19.4326535 16.6037568,18.4639281 C16.2502108,17.46602 14.5938011,17.4338405 14.5938011,17.4338405 L14.8135573,17.3378016 C14.8135573,17.3378016 16.5614097,16.7788054 16.8141303,18.5570297 C16.9779511,19.2034399 16.8506042,19.8891681 16.4656205,20.4336595 L16.4656205,20.4336595 Z" id="Path" fill="#000000" opacity="0.38889"></path>
            <path d="M15.509667,21.0389746 C15.7504087,20.4759754 15.7840712,19.8459284 15.6046892,19.2604827 C15.2864681,18.3584292 13.8319886,18.3486719 13.8319886,18.3486719 L14.0517389,18.24856 C14.4323969,18.1025622 14.8594629,18.1432814 15.2056723,18.3585835 C15.5518816,18.5738855 15.7772649,18.938914 15.8146584,19.3448914 C15.9683926,19.9269076 15.8567339,20.5471192 15.509667,21.0389746 Z" id="Path" fill="#000000" opacity="0.33333"></path>
            <path d="M14.5537195,21.6442897 C14.7561929,21.1375735 14.7745594,20.5758985 14.6056216,20.0570373 C14.3227195,19.2508384 13.0701703,19.2634973 13.0701703,19.2634973 L13.2899265,19.1593184 C13.6231671,19.0368548 13.9944849,19.0770889 14.2937603,19.2680887 C14.5930356,19.4590885 14.7859088,19.7789253 14.8151805,20.132747 C14.959977,20.6502658 14.8639385,21.2054779 14.5537195,21.6442897 Z" id="Path" fill="#000000" opacity="0.27778"></path>
            <path d="M13.5977838,22.2496049 C13.7615569,21.7991967 13.7646636,21.3060335 13.6065778,20.8535978 C13.3589946,20.1432476 12.3083757,20.1783286 12.3083757,20.1783286 L12.5281259,20.0700768 C12.8139196,19.9712688 13.1294164,20.0110557 13.3817313,20.1777237 C13.6340461,20.3443917 13.7944529,20.6189657 13.8157265,20.9206086 C13.9681092,21.89022 13.5977838,22.2496049 13.5977838,22.2496049 Z" id="Path" fill="#000000" opacity="0.22222"></path>
            <path d="M12.6418124,22.85492 C12.766235,22.4609058 12.7541435,22.0364446 12.6074924,21.6501524 C12.3952222,21.0356568 11.5465395,21.0931541 11.5465395,21.0931541 L11.7662957,20.9808351 C12.0045772,20.9058954 12.2641182,20.9452971 12.4694227,21.087579 C12.6747271,21.2298609 12.8027423,21.4590467 12.8162308,21.7084703 C12.9569773,22.5634735 12.6418124,22.85492 12.6418124,22.85492 Z" id="Path" fill="#000000" opacity="0.16667"></path>
            <path d="M11.6858649,23.4602351 C11.7699066,23.1228714 11.7427453,22.7673865 11.6084249,22.446707 C11.4314854,21.9280659 10.784727,22.0079854 10.784727,22.0079854 L11.0044832,21.8915935 C11.1951,21.8409167 11.3984235,21.88003 11.5566341,21.9978107 C11.7148448,22.1155914 11.8106329,22.2991532 11.8167589,22.4962962 C11.9462973,23.2366676 11.6858649,23.4602351 11.6858649,23.4602351 Z" id="Path" fill="#000000" opacity="0.11111"></path>
            <path d="M10.7299114,24.0655562 C10.7719062,23.7855674 10.729954,23.4994133 10.6093573,23.2432616 C10.5255138,23.0014074 10.2717407,22.8627377 10.0229146,22.9228108 L10.2426649,22.8023578 C10.2426649,22.8023578 10.7044389,22.6920843 10.8172811,23.2841876 C10.9364973,23.9097011 10.7299114,24.0655562 10.7299114,24.0655562 Z" id="Path" fill="#000000" opacity="0.05556"></path>
            <path d="M9.77394595,24.6708714 C9.80302162,24.5003 9.73854973,24.4343476 9.61027784,24.0398222 C9.50398216,23.7128843 9.26108432,23.83766 9.26108432,23.83766 L9.48084054,23.7131341 C9.48084054,23.7131341 9.73179514,23.6769886 9.8177973,24.072067 C9.92887351,24.582253 9.77394595,24.6708714 9.77394595,24.6708714 Z" id="Path" fill="#000000" opacity="0"></path>
            <path d="M14.5628465,13.4396989 C14.5193043,13.3645957 14.4486843,13.3238362 14.4051659,13.3486605 L13.9591546,13.6029508 C13.9156124,13.6277751 13.9156124,13.7087886 13.9591546,13.7838919 C14.0026968,13.8589951 14.0733168,13.8997546 14.1168351,13.8749303 L14.5628465,13.62064 C14.6063827,13.5958097 14.6063827,13.5148022 14.5628465,13.4396989 Z" id="Path" fill="#85D3EA"></path>
            <path d="M10.1331584,11.5262162 C10.0896162,11.5510405 10.0896162,11.6320541 10.1331584,11.7071514 L10.5791697,12.4764497 C10.6227119,12.551553 10.6933319,12.5923124 10.7368562,12.5674881 C10.7803805,12.5426638 10.7803984,12.4616503 10.7368562,12.386553 L10.2908449,11.6172546 C10.2473027,11.5421751 10.1767065,11.5014157 10.1331584,11.5262162 Z" id="Path" fill="#85D3EA"></path>
            <path d="M14.5628465,14.7142719 C14.5193043,14.6391686 14.4486843,14.5984092 14.4051659,14.6232335 L13.9591546,14.8775238 C13.9156124,14.9023541 13.9156124,14.9833616 13.9591546,15.0584649 C14.0026968,15.1335681 14.0733168,15.1743276 14.1168351,15.1495032 L14.5628465,14.895213 C14.6063827,14.8703886 14.6063827,14.7893514 14.5628465,14.7142719 Z" id="Path" fill="#85D3EA"></path>
            <path d="M10.1331584,12.800813 C10.0896162,12.8256373 10.0896162,12.9066508 10.1331584,12.9817481 L10.5791697,13.7510465 C10.6227119,13.8261497 10.6933319,13.8669092 10.7368562,13.8420849 C10.7803805,13.8172605 10.7803984,13.736247 10.7368562,13.6611497 L10.2908449,12.8918514 C10.2473027,12.8167481 10.1767065,12.7759886 10.1331584,12.800813 Z" id="Path" fill="#85D3EA"></path>
            <path d="M9.84572541,5.92989189 C9.87386197,6.08322161 9.97306413,6.21411446 10.1130789,6.28265297 C10.2497881,6.34704757 10.3517849,6.29350432 10.3408741,6.16306216 C10.3127504,6.00974287 10.2135567,5.87885773 10.0735503,5.81033081 C9.9368173,5.74596 9.83482054,5.79947351 9.84572541,5.92989189 Z" id="Path" fill="#85D3EA" style="mix-blend-mode: screen;"></path>
            <path d="M16.3248146,8.73418432 C16.3529494,8.88751483 16.4521521,9.0184084 16.5921681,9.08694541 C16.7288714,9.15134 16.8308741,9.09779676 16.8199632,8.96736054 C16.7918404,8.81403943 16.6926468,8.68315212 16.5526395,8.61462324 C16.4159065,8.55023459 16.3138919,8.60374216 16.3248146,8.73418432 Z" id="Path" fill="#85D3EA" style="mix-blend-mode: screen;"></path>
            <path d="M9.84572541,5.16077189 C9.87386202,5.31410304 9.97306388,5.44499769 10.1130789,5.51353892 C10.2497881,5.57792757 10.3517849,5.52439027 10.3408741,5.39394811 C10.3127504,5.24062882 10.2135567,5.10974368 10.0735503,5.04121676 C9.9368173,4.97682216 9.83482054,5.03033568 9.84572541,5.16077189 Z" id="Path" fill="#85D3EA" style="mix-blend-mode: screen;"></path>
            <path d="M16.3248146,7.96504649 C16.3529494,8.11837699 16.4521521,8.24927056 16.5921681,8.31780757 C16.7288714,8.38220216 16.8308741,8.32865892 16.8199632,8.19821676 C16.7918396,8.04489747 16.6926459,7.91401232 16.5526395,7.84548541 C16.4159065,7.78109081 16.3138919,7.83460432 16.3248146,7.96504649 Z" id="Path" fill="#85D3EA" style="mix-blend-mode: screen;"></path>
        </g>
        <circle id="Oval-Copy-3" fill-opacity="0" fill="url(#radialGradient-8)" opacity="0.08" cx="24" cy="34" r="14"></circle>
        <circle id="Oval-Copy-5" fill="url(#radialGradient-8)" opacity="0.12" cx="24" cy="25.5" r="15.5"></circle>
        <circle id="Oval" fill-opacity="0.24" fill="url(#radialGradient-9)" cx="25" cy="27" r="9"></circle>
        <circle id="Oval-Copy" fill="url(#radialGradient-9)" opacity="0.5" cx="20" cy="9" r="2"></circle>
        <circle id="Oval-Copy-2" fill="url(#radialGradient-9)" opacity="0.5" cx="26" cy="11" r="2"></circle>
        <circle id="Oval-Copy-2" fill="url(#radialGradient-9)" opacity="0.5" cx="25" cy="12" r="5"></circle>
        <circle id="Oval-Copy-4" fill="url(#radialGradient-9)" opacity="0.24" cx="20" cy="10" r="5"></circle>
        <circle id="Oval-Copy-6" fill="url(#radialGradient-9)" opacity="0.12" cx="28" cy="20" r="10"></circle>
    </g>
</svg>
  `,
};
const delegatorIcon = {
    name: 'delegatorIcon',
    data: `
  <?xml version="1.0" standalone="no"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
   "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" id="delegator"
   width="1200.000000pt" height="1200.000000pt" viewBox="0 0 1200.000000 1200.000000"
   preserveAspectRatio="xMidYMid meet">
  <metadata>
  Created by potrace 1.16, written by Peter Selinger 2001-2019
  </metadata>
  <g transform="translate(0.000000,1200.000000) scale(0.100000,-0.100000)"
  fill="#000000" stroke="none">
  <path d="M7490 10093 c-19 -2 -39 -9 -44 -14 -6 -5 -18 -9 -29 -9 -45 0 -170
  -111 -192 -171 -9 -24 -22 -55 -28 -68 -7 -14 -12 -72 -12 -138 0 -128 7 -118
  -90 -127 -56 -5 -130 -18 -219 -36 -32 -6 -62 -8 -66 -3 -5 4 -10 80 -12 167
  -2 116 -6 160 -15 164 -7 2 -13 9 -13 16 0 14 -45 56 -59 56 -5 0 -11 3 -13 8
  -1 4 -46 29 -99 55 -92 46 -99 48 -153 42 -38 -5 -56 -12 -56 -21 0 -8 -4 -14
  -8 -14 -8 0 -19 -30 -37 -97 -7 -24 -10 -41 -20 -116 -4 -27 -20 -77 -36 -112
  -16 -35 -29 -69 -29 -77 0 -8 -4 -18 -8 -24 -24 -26 -34 -134 -31 -342 l3
  -217 -32 -35 c-96 -104 -102 -119 -101 -227 1 -48 4 -74 6 -58 3 17 9 35 15
  42 5 7 7 16 5 21 -3 4 -2 13 2 20 5 9 11 9 25 -1 14 -11 18 -35 23 -147 8
  -180 22 -201 23 -32 0 105 3 132 14 132 29 0 34 -28 36 -189 1 -141 -1 -163
  -14 -158 -11 4 -13 1 -9 -11 7 -17 28 -42 36 -42 2 0 8 54 12 120 4 71 11 120
  17 120 7 0 7 4 1 13 -6 6 -9 30 -8 52 3 57 3 58 20 41 10 -9 15 -34 15 -70 0
  -30 5 -58 10 -61 6 -4 10 -58 10 -131 l0 -124 -30 0 -31 0 33 -44 33 -43 12
  101 c6 55 13 154 15 219 1 64 6 117 10 117 5 0 8 -4 8 -10 0 -5 7 -10 15 -10
  21 0 19 -18 -2 -23 -17 -4 -17 -5 0 -6 20 -1 23 -17 5 -24 -10 -4 -10 -8 1
  -15 11 -8 10 -12 -5 -21 -17 -9 -17 -10 -1 -11 15 0 17 -15 19 -167 1 -93 2
  -185 2 -206 1 -28 9 -45 34 -71 18 -19 29 -37 23 -40 -5 -3 -7 -15 -4 -27 4
  -16 8 -17 14 -7 7 10 9 9 9 -4 0 -10 6 -18 14 -18 8 0 16 -5 18 -11 2 -5 12
  -11 21 -13 10 -1 22 -7 25 -13 4 -5 48 -29 97 -52 157 -74 175 -79 200 -52 17
  19 17 19 48 1 19 -12 32 -28 32 -41 0 -17 13 -26 64 -45 35 -13 73 -24 85 -24
  12 0 26 -4 31 -9 16 -16 129 -23 370 -24 268 -1 454 21 495 58 9 8 22 15 28
  15 7 0 12 4 12 8 0 5 20 29 45 53 25 24 45 49 45 54 0 6 9 17 20 25 11 8 20
  20 20 26 0 6 12 38 26 70 21 49 25 68 21 123 -6 82 -17 131 -28 131 -4 0 -11
  16 -15 35 -3 20 -9 34 -11 31 -6 -5 -33 18 -33 28 0 18 -43 46 -63 41 -14 -4
  -30 1 -42 12 -11 10 -43 30 -70 44 -36 20 -49 32 -48 46 1 11 -3 20 -10 20 -7
  0 -39 8 -72 17 -68 20 -85 24 -138 32 -21 3 -46 7 -55 9 -9 2 -47 4 -84 4 -65
  1 -67 2 -70 29 -2 20 -8 27 -23 25 -11 -1 -38 -3 -60 -5 -44 -3 -75 -23 -75
  -50 0 -17 -9 -21 -70 -33 -19 -4 -39 -10 -45 -13 -5 -4 -14 -7 -20 -8 -5 -1
  -19 -5 -29 -10 -18 -7 -19 -3 -12 71 6 70 6 77 -8 65 -9 -7 -16 -9 -16 -4 0 5
  -4 3 -9 -4 -4 -7 -18 -14 -29 -15 -12 -1 -22 -5 -22 -10 0 -4 -4 -5 -10 -2 -5
  3 -10 1 -10 -4 0 -6 -7 -11 -15 -11 -22 0 -27 38 -22 147 30 584 31 595 56
  585 9 -3 25 -14 35 -24 11 -10 25 -18 32 -18 20 0 24 -26 24 -145 0 -108 1
  -113 23 -119 50 -13 96 -6 121 19 14 14 30 25 36 25 5 0 10 3 10 8 0 4 14 16
  30 27 16 11 30 23 30 26 0 3 -12 19 -28 35 -32 34 -62 93 -62 122 0 12 -4 23
  -9 26 -5 3 -11 20 -14 38 -3 18 -13 67 -21 108 -15 77 -21 246 -10 312 l6 37
  32 -32 c33 -35 56 -51 133 -94 132 -73 200 -137 234 -219 24 -62 39 -69 39
  -20 0 45 38 100 73 104 26 3 27 2 27 -47 0 -28 -4 -51 -10 -51 -5 0 -10 -6
  -10 -14 0 -8 -18 -33 -40 -55 -22 -22 -40 -50 -40 -61 0 -12 -5 -31 -11 -42
  -14 -26 7 -128 26 -128 6 0 18 -12 26 -27 17 -34 24 -43 74 -97 36 -39 84 -71
  170 -114 32 -16 45 -29 104 -102 20 -25 38 -47 41 -50 16 -16 90 -162 90 -177
  0 -7 5 -13 10 -13 6 0 10 -6 10 -13 0 -8 11 -36 25 -63 14 -27 25 -57 25 -66
  0 -10 5 -18 10 -18 6 0 10 -7 10 -15 0 -8 4 -23 10 -33 10 -19 34 -76 45 -107
  6 -20 11 -91 14 -227 1 -66 2 -69 49 -122 26 -30 55 -57 65 -61 14 -5 17 -19
  17 -72 0 -35 -3 -63 -7 -61 -5 2 -21 10 -38 18 -16 8 -32 17 -35 20 -20 22
  -64 30 -103 18 -23 -6 -46 -14 -52 -18 -5 -4 -39 -14 -75 -24 -36 -10 -75 -22
  -88 -27 -13 -5 -35 -9 -50 -9 -16 0 -32 -4 -37 -9 -6 -5 -28 -11 -50 -14 -22
  -2 -76 -9 -120 -15 -200 -27 -362 -35 -476 -24 -63 6 -162 14 -222 18 -59 3
  -110 10 -113 15 -3 5 -17 9 -31 9 -29 0 -145 26 -178 40 -11 4 -40 14 -65 21
  -25 7 -56 19 -70 26 -14 7 -31 13 -38 13 -7 0 -20 4 -30 9 -9 5 -53 27 -97 48
  -44 21 -82 40 -85 43 -3 3 -22 14 -43 25 -21 11 -46 27 -55 35 -9 8 -30 23
  -46 34 -52 33 -135 110 -197 182 -30 35 -99 150 -99 166 0 5 -6 24 -14 41 -17
  38 -26 76 -33 137 -3 25 -9 50 -14 56 -11 13 -10 395 1 409 9 11 18 101 26
  253 3 56 9 102 15 102 5 0 9 18 9 40 0 44 25 164 41 192 11 22 12 68 1 68 -4
  0 -26 -16 -48 -35 -21 -19 -43 -39 -49 -44 -19 -16 -52 -58 -71 -89 -10 -18
  -22 -32 -26 -32 -4 0 -8 -5 -8 -10 0 -6 -11 -34 -25 -63 -20 -40 -25 -65 -23
  -105 2 -30 7 -56 11 -59 4 -3 3 -11 -3 -18 -8 -10 -8 -15 1 -20 8 -6 7 -10 -2
  -16 -12 -8 -12 -10 -1 -18 11 -7 11 -9 -2 -14 -14 -6 -16 5 -16 73 0 43 -4 81
  -8 84 -5 3 -21 -22 -36 -55 -26 -58 -37 -87 -93 -244 -25 -71 -28 -80 -58
  -150 -9 -22 -20 -49 -25 -60 -14 -36 -65 -140 -70 -145 -3 -3 -25 -35 -50 -72
  -25 -38 -48 -68 -52 -68 -5 0 -8 -5 -8 -11 0 -6 -17 -26 -37 -44 -21 -18 -54
  -47 -73 -64 -19 -17 -63 -48 -97 -68 -35 -21 -63 -41 -63 -45 0 -4 -6 -8 -14
  -8 -8 0 -41 -13 -73 -30 -31 -16 -61 -30 -66 -30 -4 0 -17 -9 -29 -20 -12 -11
  -28 -20 -35 -20 -7 0 -13 -4 -13 -9 0 -5 -14 -12 -30 -16 -17 -4 -36 -15 -43
  -26 -6 -10 -19 -19 -28 -19 -9 0 -19 -7 -23 -15 -3 -8 -11 -15 -19 -15 -7 0
  -23 -10 -35 -22 -26 -29 -49 -48 -57 -48 -10 0 -128 -122 -159 -165 -17 -22
  -40 -49 -53 -60 -13 -11 -23 -28 -23 -37 0 -17 -20 -28 -51 -28 -10 0 -19 -4
  -19 -10 0 -5 -9 -10 -20 -10 -23 0 -80 -50 -80 -71 0 -8 -11 -23 -25 -33 -14
  -10 -25 -27 -25 -37 0 -11 -4 -19 -10 -19 -6 0 -10 -36 -10 -89 0 -72 3 -90
  16 -95 22 -9 24 -8 24 9 0 8 4 15 9 15 5 0 12 13 16 29 7 35 56 91 78 91 10 0
  17 5 17 10 0 13 64 13 88 1 9 -5 33 -17 52 -25 74 -34 105 -65 141 -134 31
  -63 23 -125 -24 -190 -46 -62 -48 -82 -7 -82 17 0 30 5 30 10 0 6 13 10 29 10
  22 0 42 12 75 45 25 25 46 50 46 56 0 6 10 19 23 29 20 17 22 26 22 126 0 77
  -4 109 -12 112 -7 2 -13 12 -13 22 0 10 -6 21 -12 24 -10 5 -10 7 0 12 6 3 12
  10 12 15 0 12 8 22 98 114 40 41 76 75 81 75 4 0 22 14 39 30 18 17 34 30 38
  30 3 0 20 11 38 25 18 14 38 25 44 25 6 0 12 3 14 8 3 7 35 23 193 97 156 73
  190 90 193 98 2 4 8 7 14 7 25 0 178 136 178 159 0 6 3 11 8 11 4 0 18 20 32
  45 28 51 40 57 40 20 0 -14 4 -33 9 -43 8 -16 24 -84 37 -157 3 -16 8 -37 12
  -45 5 -14 21 -79 37 -155 4 -16 10 -39 15 -50 5 -11 11 -33 15 -50 12 -60 41
  -181 76 -320 6 -22 13 -55 16 -72 3 -18 9 -33 14 -33 5 0 8 -3 7 -7 -4 -18 15
  -124 23 -129 5 -3 9 -17 9 -32 1 -31 33 -158 43 -168 4 -4 7 -22 7 -41 0 -18
  5 -33 10 -33 23 0 8 -45 -25 -73 -19 -16 -35 -35 -35 -43 0 -7 -6 -19 -13 -26
  -7 -7 -26 -31 -42 -53 -17 -22 -32 -42 -35 -45 -9 -9 -53 -104 -72 -155 -10
  -27 -18 -68 -18 -92 0 -23 -4 -45 -10 -48 -18 -11 -11 -194 11 -270 30 -103
  32 -110 38 -115 3 -3 15 -21 25 -40 11 -19 25 -40 30 -46 6 -7 27 -30 46 -53
  19 -23 40 -41 47 -41 7 0 13 -3 13 -8 0 -4 15 -13 33 -21 17 -8 34 -17 37 -20
  14 -17 92 -73 95 -69 3 3 -41 51 -98 109 -89 90 -99 104 -79 107 12 2 29 -4
  38 -12 9 -9 20 -14 25 -11 5 4 19 -1 31 -9 12 -9 32 -16 43 -16 12 0 26 -5 33
  -12 9 -9 12 -9 12 0 0 7 9 12 20 12 11 0 20 -4 20 -10 0 -5 7 -10 15 -10 8 0
  15 5 15 10 0 14 27 12 33 -2 4 -10 8 -9 17 2 9 11 13 12 17 3 6 -16 30 -17 35
  -1 3 8 9 8 23 0 15 -8 27 -7 48 4 31 17 60 11 91 -18 12 -10 22 -14 24 -8 2 5
  11 10 19 10 11 0 14 6 9 23 -3 12 -6 28 -6 35 0 7 -13 12 -30 12 -21 0 -30 5
  -30 16 0 25 -33 74 -50 75 -10 0 -9 3 5 9 18 7 19 8 3 15 -10 4 -18 13 -18 21
  0 8 -5 14 -11 14 -6 0 -8 8 -4 19 3 10 -1 24 -10 31 -17 14 -21 50 -5 50 10 0
  130 -60 140 -70 10 -10 50 -30 60 -30 6 0 33 -11 62 -25 28 -14 60 -25 70 -25
  10 0 18 -4 18 -10 0 -5 8 -10 17 -10 25 0 103 -31 103 -41 0 -4 -17 -11 -37
  -15 -21 -4 -50 -16 -65 -27 -14 -11 -31 -16 -37 -13 -6 4 -11 0 -11 -10 0 -12
  -6 -15 -25 -12 -14 3 -25 1 -25 -4 0 -5 -9 -6 -20 -3 -14 5 -20 2 -20 -9 0
  -22 -17 -20 -23 2 -3 9 -5 -2 -6 -25 -1 -25 5 -48 14 -57 8 -8 15 -19 15 -25
  0 -6 4 -11 9 -11 11 0 81 -69 81 -79 0 -4 18 -20 40 -37 22 -16 40 -35 40 -41
  0 -7 5 -13 10 -13 6 0 14 -8 17 -17 6 -16 20 -32 88 -104 14 -15 13 -17 -17
  -24 -18 -4 -27 -9 -20 -12 6 -2 12 -11 12 -18 0 -21 97 -66 126 -59 13 3 24
  10 24 15 0 5 7 9 15 9 8 0 15 3 15 8 0 4 20 16 45 27 25 11 45 23 45 26 0 4
  11 10 25 13 14 4 25 11 25 16 0 6 7 10 15 10 8 0 15 3 15 8 0 4 14 13 31 21
  18 8 34 22 36 31 6 21 63 54 122 70 24 6 50 18 58 26 8 8 20 14 27 14 6 0 45
  20 85 45 40 25 77 45 82 45 5 0 9 4 9 9 0 5 10 11 23 15 12 3 31 13 42 23 11
  10 39 27 62 38 24 11 43 23 43 28 0 4 7 7 15 7 8 0 15 4 15 10 0 5 11 12 25
  16 14 3 25 10 25 15 0 5 4 9 10 9 5 0 34 16 64 35 47 30 64 35 115 35 37 0 71
  -6 92 -17 40 -22 116 -97 124 -124 4 -10 11 -19 16 -19 5 0 9 -5 9 -11 0 -6 6
  -25 13 -42 29 -68 37 -106 37 -181 0 -64 -5 -87 -25 -129 -26 -50 -70 -97 -91
  -97 -10 0 -59 -20 -96 -41 -10 -5 -23 -9 -29 -9 -6 0 -17 -6 -24 -14 -11 -11
  -4 -18 45 -45 38 -20 74 -31 102 -32 82 -2 89 -7 94 -72 4 -67 9 -77 33 -77
  10 0 27 -10 38 -23 20 -20 20 -25 8 -54 -9 -22 -21 -33 -35 -33 -17 0 -20 -6
  -20 -46 0 -26 5 -75 11 -109 l12 -61 24 24 c25 25 64 25 90 -1 35 -34 -28 -87
  -80 -68 l-27 11 0 -58 c0 -31 4 -75 9 -97 5 -22 12 -82 16 -134 3 -51 11 -105
  16 -118 5 -13 9 -38 9 -54 0 -16 9 -42 20 -57 19 -26 20 -29 4 -60 -9 -20 -18
  -70 -21 -130 -3 -53 -10 -102 -14 -108 -5 -6 -8 -33 -8 -60 0 -27 -7 -87 -15
  -134 -20 -105 -20 -150 -2 -187 67 -135 74 -235 24 -380 -18 -52 -41 -103 -51
  -114 -11 -11 -17 -23 -13 -26 6 -6 36 22 36 34 0 4 10 19 23 33 23 25 57 90
  57 108 0 6 3 12 8 14 14 6 52 90 58 129 4 22 11 42 15 45 5 3 9 18 9 33 0 15
  4 31 10 37 5 5 12 69 16 142 4 72 11 132 15 132 5 0 9 27 9 60 0 33 4 60 9 60
  5 0 12 54 16 120 4 66 11 120 16 120 5 0 9 27 9 60 0 33 4 60 10 60 6 0 10 26
  10 59 0 33 4 62 9 65 5 3 12 58 16 121 4 63 11 115 16 115 5 0 9 27 9 59 0 33
  4 62 9 65 5 3 12 58 16 121 4 63 11 118 16 121 5 3 9 32 9 65 0 32 4 59 9 59
  5 0 12 54 16 120 4 66 11 120 16 120 5 0 9 27 9 60 0 33 4 60 10 60 6 0 10 27
  10 60 0 33 4 60 9 60 5 0 12 54 16 120 4 66 11 120 16 120 5 0 9 27 9 59 0 33
  4 62 9 65 4 3 11 38 15 78 3 40 10 75 14 78 13 9 29 45 37 80 4 19 10 37 14
  40 13 11 49 87 56 118 3 17 11 32 16 32 5 0 9 9 9 20 0 11 4 20 9 20 5 0 12
  13 16 30 4 16 11 32 16 35 5 4 9 17 9 31 0 13 3 24 8 24 10 0 42 75 42 100 0
  11 3 20 8 20 10 0 32 52 39 94 3 20 10 36 14 36 5 0 9 14 9 30 0 17 4 30 9 30
  5 0 12 23 16 50 4 28 11 50 16 50 5 0 9 11 9 24 0 14 5 28 10 31 6 3 10 17 10
  31 0 14 4 33 10 43 5 10 12 55 16 100 4 44 11 81 15 81 5 0 9 38 9 85 0 58 4
  86 13 92 10 6 11 25 5 83 -5 41 -11 110 -14 153 -3 42 -9 77 -13 77 -5 0 -11
  29 -14 63 -3 35 -11 77 -18 93 -6 16 -16 40 -21 54 -6 14 -14 33 -19 42 -5 10
  -9 24 -9 31 0 28 -130 254 -171 297 -37 39 -40 47 -28 76 23 57 27 70 43 131
  35 136 13 288 -62 438 -14 28 -26 51 -28 53 -7 9 -64 -54 -64 -70 0 -10 -4
  -18 -9 -18 -5 0 -12 -23 -16 -52 -4 -29 -11 -59 -15 -68 -4 -8 -13 -27 -21
  -42 -7 -16 -16 -28 -20 -28 -5 0 -40 20 -78 45 -38 25 -74 45 -80 45 -6 0 -11
  4 -11 9 0 5 -12 11 -27 13 -28 3 -28 3 14 33 28 20 43 38 43 53 0 12 -4 22
  -10 22 -5 0 -10 5 -10 12 0 23 -146 198 -165 198 -3 0 -19 14 -37 30 -17 17
  -34 30 -39 30 -4 0 -14 6 -21 13 -19 19 -121 87 -131 87 -20 0 -37 32 -38 72
  l-2 43 -7 -35 c-6 -29 -8 -24 -9 32 0 36 -6 68 -12 70 -5 2 -11 12 -13 23 -2
  13 -18 25 -49 35 -26 9 -50 19 -54 23 -3 4 -15 7 -25 7 -10 0 -26 4 -36 10
  -16 9 -70 22 -205 51 -47 10 -56 15 -50 28 11 23 9 200 -4 241 -29 99 -115
  220 -167 236 -12 4 -23 9 -26 13 -24 30 -176 48 -280 34z m-1650 -1137 c7 -7
  10 12 10 50 0 42 3 55 10 44 13 -20 13 -250 0 -250 -5 0 -10 8 -11 18 0 11 -4
  8 -13 -10 -9 -22 -15 -25 -24 -16 -9 9 -12 9 -12 0 0 -7 -7 -12 -15 -12 -13 0
  -15 23 -15 145 0 122 2 145 15 145 8 0 15 -4 15 -10 0 -5 -5 -10 -12 -10 -9 0
  -9 -3 0 -12 7 -7 13 -39 13 -72 l2 -61 7 55 c5 30 9 80 11 110 3 47 4 43 6
  -25 2 -44 8 -84 13 -89z m935 -516 c3 -5 17 -10 31 -10 14 0 34 -4 44 -10 10
  -5 60 -15 112 -20 51 -6 122 -14 158 -18 36 -4 71 -11 78 -15 7 -5 12 -28 12
  -54 l0 -46 -77 7 c-151 13 -193 19 -193 27 0 5 -12 9 -27 9 -15 0 -40 4 -57 9
  -17 5 -50 15 -73 21 l-43 11 0 49 c0 37 4 50 14 50 8 0 18 -4 21 -10z m-94
  -121 c92 -30 165 -49 234 -59 69 -10 105 -16 190 -31 113 -20 105 -15 105 -64
  0 -44 -1 -45 -33 -45 -45 0 -235 28 -271 40 -16 6 -42 10 -57 10 -15 0 -31 5
  -34 10 -3 6 -16 10 -27 10 -12 0 -35 4 -52 10 -17 5 -58 18 -91 29 l-60 19 -3
  46 c-4 55 3 57 99 25z m354 -230 c44 -6 101 -13 128 -16 l47 -5 0 -50 0 -49
  -97 7 c-54 4 -106 11 -115 15 -9 5 -30 9 -45 9 -38 0 -53 16 -53 56 0 51 8 64
  33 54 12 -5 58 -14 102 -21z m-159 -606 c14 -9 38 -35 55 -59 23 -34 29 -53
  29 -97 0 -52 -2 -56 -29 -68 -17 -8 -25 -16 -20 -20 6 -3 -2 -10 -17 -13 -22
  -6 -25 -9 -13 -17 11 -7 11 -11 1 -17 -9 -7 -8 -13 8 -27 11 -10 32 -43 46
  -74 22 -47 26 -69 25 -140 0 -49 -5 -89 -12 -98 -7 -8 -12 -35 -12 -61 0 -26
  -4 -53 -10 -60 -7 -9 -7 -16 0 -20 24 -16 33 -56 33 -141 0 -80 -2 -92 -20
  -103 -31 -19 -25 -36 34 -97 116 -120 126 -134 112 -156 -8 -11 -27 -21 -45
  -23 -37 -4 -42 -22 -6 -22 37 0 31 -19 -26 -72 -34 -32 -68 -53 -102 -63 -58
  -17 -137 -20 -137 -5 0 6 -11 10 -25 10 -14 0 -25 5 -25 10 0 6 -5 10 -11 10
  -16 0 -79 71 -79 89 0 10 -5 22 -12 29 -7 7 -9 12 -4 12 4 0 -2 14 -14 31 -12
  16 -23 45 -25 63 l-3 34 54 -19 c29 -10 61 -18 71 -18 17 1 17 2 1 6 -10 2
  -18 9 -18 14 0 5 -7 9 -15 9 -8 0 -15 5 -15 10 0 6 -5 10 -11 10 -23 0 -72 44
  -86 78 -8 19 -18 66 -22 104 l-7 69 40 -7 c23 -3 47 -11 54 -16 8 -7 12 -7 12
  1 0 6 -18 22 -40 36 -46 29 -54 51 -12 33 15 -7 32 -15 37 -19 6 -4 26 -10 46
  -14 36 -7 37 -6 42 32 18 119 27 137 69 131 15 -3 28 -3 28 -2 0 2 -18 13 -40
  25 -37 21 -40 26 -40 65 0 24 -3 45 -8 48 -4 2 -9 32 -10 65 -3 49 0 61 12 61
  11 0 13 8 9 35 -4 23 -2 35 6 35 6 0 11 8 11 18 0 9 11 29 24 43 33 36 42 82
  20 104 -14 13 -15 18 -4 25 10 6 11 17 1 53 -33 132 13 204 95 150z m1814
  -1325 c11 -23 20 -45 20 -50 0 -4 11 -31 24 -60 45 -100 76 -179 76 -194 0 -8
  5 -14 10 -14 6 0 10 -7 10 -15 0 -8 11 -38 25 -67 14 -28 25 -58 25 -65 0 -16
  -49 -96 -61 -101 -5 -2 -9 -10 -9 -17 0 -7 -7 -15 -15 -19 -12 -4 -15 7 -15
  66 0 67 -10 119 -31 160 -5 10 -9 23 -9 29 0 12 -31 81 -39 89 -8 7 -30 42
  -38 60 -9 23 -135 140 -150 140 -28 0 -11 19 32 37 25 10 45 21 45 26 0 4 7 7
  16 7 8 0 22 7 30 15 23 23 32 19 54 -27z"/>
  <path d="M3770 6653 c-8 -3 -23 -16 -32 -27 -10 -12 -22 -26 -28 -33 -5 -7
  -10 -15 -10 -18 0 -3 -9 -15 -20 -27 -29 -31 -28 -122 3 -180 28 -54 108 -135
  141 -144 15 -3 26 -10 26 -15 0 -5 9 -9 20 -9 11 0 20 -4 20 -10 0 -14 126
  -12 153 3 45 25 116 108 123 143 10 56 -2 112 -30 141 -14 14 -26 29 -26 33 0
  18 -86 91 -133 114 -52 26 -175 43 -207 29z"/>
  <path d="M6430 2944 c1 -83 16 -347 24 -399 3 -16 7 -86 11 -155 7 -142 8
  -157 18 -166 4 -4 7 -34 7 -66 0 -32 4 -58 10 -58 6 0 10 -22 10 -49 0 -28 5
  -53 10 -56 6 -4 8 -26 4 -56 -5 -34 -3 -49 5 -49 7 0 11 -20 11 -50 0 -27 4
  -50 9 -50 5 0 12 -34 16 -75 4 -41 11 -78 16 -81 5 -3 9 -18 9 -34 0 -16 5
  -32 10 -35 6 -3 10 -22 10 -41 0 -19 4 -34 9 -34 4 0 11 -27 15 -60 4 -33 11
  -60 16 -60 6 0 10 -11 10 -25 0 -14 4 -33 10 -43 14 -26 40 -110 40 -132 0
  -11 5 -20 10 -20 6 0 10 -10 10 -22 0 -13 7 -36 15 -52 8 -15 15 -37 15 -47 0
  -11 5 -19 10 -19 6 0 10 -11 10 -25 0 -14 4 -25 9 -25 5 0 12 -16 15 -35 4
  -19 11 -35 16 -35 6 0 10 -11 10 -25 0 -14 4 -25 9 -25 5 0 12 -16 15 -35 4
  -19 10 -35 14 -35 4 0 15 -19 25 -42 10 -24 24 -55 30 -70 7 -16 15 -28 19
  -28 5 0 8 -7 8 -15 0 -8 4 -15 9 -15 5 0 11 -12 14 -27 3 -16 15 -38 26 -50
  11 -12 23 -32 26 -46 4 -14 15 -34 26 -46 10 -11 19 -25 19 -31 0 -5 5 -10 10
  -10 6 0 10 -9 10 -20 0 -11 7 -23 15 -26 8 -4 15 -10 15 -15 0 -7 31 -58 57
  -95 16 -21 33 -49 40 -64 4 -8 14 -22 23 -30 10 -8 20 -25 24 -37 4 -13 12
  -23 17 -23 5 0 9 -6 9 -13 0 -8 12 -24 26 -38 22 -21 35 -24 94 -23 48 0 72 5
  84 16 9 9 16 19 16 23 0 4 6 13 13 20 26 30 37 44 37 50 0 7 66 80 98 108 12
  12 22 25 22 30 0 4 29 38 65 75 36 37 74 76 85 87 11 12 20 25 20 29 0 5 11
  19 25 32 14 13 25 28 25 33 0 5 11 22 25 37 14 15 25 33 25 40 0 8 5 14 10 14
  6 0 10 6 10 14 0 8 6 21 13 28 7 7 20 28 28 45 7 18 17 33 21 33 3 0 10 15 13
  32 4 18 10 35 14 38 16 13 41 71 41 94 0 14 3 26 8 26 4 0 13 15 20 33 7 17
  18 40 23 50 5 9 12 38 16 62 3 25 10 45 14 45 5 0 9 11 9 24 0 14 4 27 9 31 5
  3 13 34 16 70 4 36 11 65 16 65 5 0 9 13 9 28 0 15 4 32 10 38 5 5 12 42 16
  82 4 39 11 72 15 72 5 0 9 22 9 49 0 28 5 53 10 56 6 3 10 28 10 55 0 26 4 50
  9 52 6 2 13 56 17 121 4 64 11 117 15 117 5 0 9 33 9 73 0 40 4 77 9 82 5 6
  13 102 17 215 3 113 10 210 15 215 8 11 14 313 6 321 -4 4 -126 -77 -172 -114
  -5 -4 -31 -17 -57 -28 -27 -10 -48 -22 -48 -26 0 -5 -8 -8 -18 -8 -10 0 -22
  -4 -28 -8 -5 -5 -36 -17 -69 -26 -33 -10 -68 -22 -77 -27 -10 -5 -31 -9 -48
  -9 -16 0 -30 -4 -30 -9 0 -5 -19 -11 -42 -14 -92 -12 -104 -17 -116 -51 -7
  -18 -12 -40 -12 -49 0 -9 -4 -17 -8 -17 -4 0 -16 -22 -27 -50 -11 -27 -23 -50
  -27 -50 -4 0 -8 -7 -8 -15 0 -16 -24 -58 -50 -86 -30 -33 -50 -63 -50 -75 0
  -7 -3 -14 -7 -16 -13 -5 -43 -77 -43 -103 0 -13 -4 -26 -9 -29 -4 -3 -11 -19
  -14 -35 -7 -36 -44 -63 -74 -55 -20 6 -59 70 -65 109 -2 14 -12 21 -32 23 -54
  6 -83 67 -50 103 16 18 12 59 -7 59 -5 0 -9 17 -9 39 0 24 -9 51 -25 75 -14
  20 -25 41 -25 46 0 6 -4 10 -10 10 -5 0 -10 9 -10 20 0 11 -11 25 -27 33 -25
  13 -30 12 -47 -4 -39 -38 -96 -14 -96 40 0 17 5 31 11 31 8 0 10 12 6 36 -7
  42 -23 64 -45 64 -17 0 -203 88 -212 100 -3 4 -15 10 -27 14 -13 4 -23 12 -23
  17 0 5 -7 9 -15 9 -8 0 -15 4 -15 8 0 5 -9 13 -19 18 -24 11 -118 101 -145
  139 -56 76 -56 76 -56 -11z"/>
  </g>
  </svg>
  

  `,
};
const arrowUp = {
    name: 'arrowUp',
    data: `<?xml version="1.0" encoding="iso-8859-1"?>
  <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg version="1.1" id="arrowUp" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="123.959px" height="123.959px" viewBox="0 0 123.959 123.959" style="enable-background:new 0 0 123.959 123.959;"
     xml:space="preserve">
  <g>
    <path d="M66.18,29.742c-2.301-2.3-6.101-2.3-8.401,0l-56,56c-3.8,3.801-1.1,10.2,4.2,10.2h112c5.3,0,8-6.399,4.2-10.2L66.18,29.742
      z"/>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  </svg>
  `,
};
const curatorIcon = {
    name: 'curatorIcon',
    data: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="curator" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="422px" height="345px" viewBox="0 0 422 345" enable-background="new 0 0 422 345" xml:space="preserve">  <image id="image0" width="422" height="345" x="0" y="0"
    xlink:href="data:image/png;base64,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
YII=" />
</svg>
`,
};


/***/ }),

/***/ "./src/core/utils/constant.ts":
/*!************************************!*\
  !*** ./src/core/utils/constant.ts ***!
  \************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
class Constants {
}
Constants.IndexerDashboard = `https://analytics.dappquery.com/public/dashboard/0f6f41d7-0a56-4b0a-ac1b-6112fc984f80`;
Constants.DelegratorDashboard = `https://analytics.dappquery.com/public/dashboard/b6562bf4-b3a1-4642-a364-7f2ab6d3d867`;
Constants.IndividualIndexerDashboard = `https://analytics.dappquery.com/public/dashboard/6940bd30-0cc7-40e7-ad20-c09e4664ddff`;
Constants.IndividualDelegatorDashboard = `https://analytics.dappquery.com/public/dashboard/f0323b61-7f96-4591-bde2-69c52676bd40`;
Constants.curatorDashboard = `https://analytics.dappquery.com/public/dashboard/aed96cfe-5de5-4b46-85bb-5324f3bc785d`;
Constants.GENERAL = {
    GA_TRACKING_ID: 'UA-150439015-2',
};
Constants.URLs = {
    DEV: {
        COOKIE_DOMAIN: 'dqdev.com',
        RESTFUL_API_ENDPOINT: 'http://dqdev.com:8080',
        ANALYZER: 'https://analytics.dqdev.com:8080/question/new',
        ANALYZER_HOME: 'https://analytics.dqdev.com:8080/',
    },
    PROD: {
        COOKIE_DOMAIN: 'dappquery.com',
        RESTFUL_API_ENDPOINT: 'https://dappquery.com',
        ANALYZER: 'https://analytics.dappquery.com/question/new',
        ANALYZER_HOME: 'https://analytics.dappquery.com/',
    },
    TWITTER_ID: 'dappquery',
    S3_BASE_URL: '//dappquery.s3.amazonaws.com',
    CLOUDFRONT_BASE_URL: 'https://duhy7tdvrc6v6.cloudfront.net',
    DEMO_ANALYTICS_DASHBOARD: 'https://dashboard.dappquery.com/livepeer',
    SOCIAL_NETWORK_TWITTER: 'https://twitter.com/teamdappquery',
    DISCORD: 'https://discord.gg/wTAf85T',
    MEDIUM_BLOG: 'https://medium.com/dappquery',
    DOCS: 'https://docs.dappquery.com',
    SCHEDULE_DEMO: 'https://calendly.com/dappquery',
    ONBOARDING_GOOGLE_FORM: 'https://forms.gle/7qe2fGvoXHhWc1Vx9',
    dappqueryDocs: 'https://docs.dappquery.com/',
    EXPLORER: 'https://dappquery.com/explorer/',
    DAPPQUERY_WEBSITE: 'https://dappquery.com/',
    DAPPQUERY_DELEGATION_LINK: 'https://network.thegraph.com/profile?id=0x4bc2e066fb0857493a1fbe48462bb34ff6ea731f&view=Indexing',
    DAPPQUERY_INDEXER: 'https://thegraph.dappquery.com/indexer?indexer_address=0x4bc2e066fb0857493a1fbe48462bb34ff6ea731f',
};
Constants.LABELS = {
    commonLables: {
        indexerStats: 'Our Indexer Status',
        delegateToUs: 'Delegate To Us',
        features: 'FEATURES',
        demo: 'DEMO',
        explorer: 'EXPLORER',
        integration: 'INTEGRATION',
        pricing: 'PRICING',
        contact: 'CONTACT',
        technicalErrorMessage: 'There is some technical issue, please try later.',
        termsOfService: 'Terms of Service',
        privacy: 'Privacy',
        space: '&nbsp;',
        dash: '-',
        FIFTYMB: 50000000,
        FIVEMB: 5250000,
        IMAGETYPEALLLOWED: ['png', 'jpeg', 'jpg'],
        MAINNET: 'MAINNET',
        etherscanUrl: 'https://etherscan.io/address/',
        SMART_CONTRACT: 'SMART_CONTRACT',
        EXTERNAL_SUBGRAPH: 'EXTERNAL_SUBGRAPH',
        comingSoon: 'COMING SOON',
        needHelpLabel: 'NEED HELP?',
        emailNotConfirmedText: 'Your account is not verified yet. Please check your inbox and verify your email.',
    },
    headerArea: {},
    theGraphDashboard: {
        delegator: '/delegator',
        indexer: '/indexer',
        indexer_address: 'indexer_address',
        indexerLabel: 'Indexer ',
        curatorLabel: 'Curator ',
        delegatorLabel: 'Delegator',
        curator: '/curator',
        more: 'More',
    },
};


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

module.exports = __webpack_require__(/*! /Users/abhinav/Documents/DQ/dappquery-thegraph/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map