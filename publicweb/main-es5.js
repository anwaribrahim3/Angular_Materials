function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: "home",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'AngMatLearn';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
        useValue: {
          floatLabel: 'always'
        }
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_32__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__["MatTreeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_41__["HomeComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_41__["DialogContentExampleDialog"], _home_home_component__WEBPACK_IMPORTED_MODULE_41__["BottomSheetOverviewExampleSheet"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_32__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__["MatTreeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_41__["HomeComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_41__["DialogContentExampleDialog"], _home_home_component__WEBPACK_IMPORTED_MODULE_41__["BottomSheetOverviewExampleSheet"]],
          entryComponents: [_home_home_component__WEBPACK_IMPORTED_MODULE_41__["DialogContentExampleDialog"], _home_home_component__WEBPACK_IMPORTED_MODULE_41__["BottomSheetOverviewExampleSheet"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_32__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__["MatTreeModule"]],
          providers: [{
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
            useValue: {
              floatLabel: 'always'
            }
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: MyErrorStateMatcher, HomeComponent, DialogContentExampleDialog, BottomSheetOverviewExampleSheet */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
      return MyErrorStateMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogContentExampleDialog", function () {
      return DialogContentExampleDialog;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BottomSheetOverviewExampleSheet", function () {
      return BottomSheetOverviewExampleSheet;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");

    function HomeComponent_div_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have a Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You have a meeting");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "You have a missed call");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You have a message");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "You have a notification");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_53_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_53_mat_radio_group_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-group", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Option 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Option 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_53_mat_option_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r9, " ");
      }
    }

    function HomeComponent_div_53_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Site Visitors");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Warnings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Memory load");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Server Control Panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_div_53_div_15_Template, 2, 0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-radio-group", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-radio-button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Option 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-radio-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Option 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_53_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.openDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Reload Server");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Usage Stats");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Autocomplete Input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_53_Template_mat_icon_click_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.showradiobutton();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HomeComponent_div_53_mat_radio_group_36_Template, 6, 0, "mat-radio-group", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_53_Template_input_ngModelChange_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.selected = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-autocomplete", null, 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, HomeComponent_div_53_mat_option_43_Template, 2, 2, "mat-option", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "You selected :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gutterSize", "15px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showradio);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r7)("formControl", ctx_r2.myControl)("ngModel", ctx_r2.selected);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 8, ctx_r2.filteredOptions));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.selected, "");
      }
    }

    function HomeComponent_div_54_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_54_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "User name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Errors appear instantly!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_54_mat_error_14_Template, 2, 0, "mat-error", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_div_54_mat_error_15_Template, 4, 0, "mat-error", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Company (disabled)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Choose a date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-datepicker-toggle", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-datepicker", null, 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "First name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Long Last Name That Will Be Truncated");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "textarea", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "1600 Amphitheatre Pkwy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "table", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "City");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "State");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Postal Code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 56, 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-hint", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "About Us");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "textarea", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "We are young and ambitious full service design and technology company. Our focus is JavaScript development and User Interface design.\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63);

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r3.emailFormControl)("errorStateMatcher", ctx_r3.matcher);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.emailFormControl.hasError("email") && !ctx_r3.emailFormControl.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.emailFormControl.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r17.value.length, " / 6");
      }
    }

    function HomeComponent_div_55_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_55_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r28 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r28.position, " ");
      }
    }

    function HomeComponent_div_55_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Issue ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_55_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r29.name, " ");
      }
    }

    function HomeComponent_div_55_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_55_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r30.symbol, " ");
      }
    }

    function HomeComponent_div_55_th_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " percentage ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_55_td_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r31.percentage, "% ");
      }
    }

    function HomeComponent_div_55_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 72);
      }
    }

    function HomeComponent_div_55_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 73);
      }
    }

    function HomeComponent_div_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_55_th_3_Template, 2, 0, "th", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_55_td_4_Template, 2, 1, "td", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_55_th_6_Template, 2, 0, "th", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_55_td_7_Template, 2, 1, "td", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_div_55_th_9_Template, 2, 0, "th", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_55_td_10_Template, 2, 1, "td", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_55_th_12_Template, 2, 0, "th", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_div_55_td_13_Template, 2, 1, "td", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_55_tr_14_Template, 1, 0, "tr", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_div_55_tr_15_Template, 1, 0, "tr", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r4.dataSource);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r4.displayedColumns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r4.displayedColumns);
      }
    }
    /*import { ChartType } from 'chart.js';
    import { MultiDataSet, Label } from 'ng2-charts';*/


    var MyErrorStateMatcher = /*#__PURE__*/function () {
      function MyErrorStateMatcher() {
        _classCallCheck(this, MyErrorStateMatcher);
      }

      _createClass(MyErrorStateMatcher, [{
        key: "isErrorState",
        value: function isErrorState(control, form) {
          var isSubmitted = form && form.submitted;
          return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        }
      }]);

      return MyErrorStateMatcher;
    }();

    var ELEMENT_DATA = [{
      position: 1,
      name: 'Nested views',
      symbol: 'Done',
      percentage: 100
    }, {
      position: 2,
      name: 'Table component',
      symbol: 'Feedback',
      percentage: 70
    }, {
      position: 3,
      name: 'Dashboard tiles',
      symbol: 'Feedback',
      percentage: 75
    }, {
      position: 4,
      name: 'Panel widget',
      symbol: 'Done',
      percentage: 100
    }, {
      position: 5,
      name: 'Form',
      symbol: 'In progress',
      percentage: 90
    }, {
      position: 6,
      name: 'Custom CSS',
      symbol: 'ToDo',
      percentage: 50
    }, {
      position: 7,
      name: 'Add backend',
      symbol: 'Feedback',
      percentage: 60
    }, {
      position: 8,
      name: 'Layout with sidebar',
      symbol: 'Done',
      percentage: 100
    }, {
      position: 9,
      name: 'Jquery',
      symbol: 'On progress',
      percentage: 80
    }, {
      position: 10,
      name: 'Angular Materials',
      symbol: 'Done',
      percentage: 100
    }];

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(dialog, _bottomSheet) {
        _classCallCheck(this, HomeComponent);

        this.dialog = dialog;
        this._bottomSheet = _bottomSheet;
        this.showFiller = false;
        this.hide = false;
        this.loading = false;
        this.dashboard = true;
        this.profile = false;
        this.table = false;
        this.showradio = false;
        /* doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
         doughnutChartData: MultiDataSet = [
           [55, 25, 20]
         ];
         doughnutChartType: ChartType = 'doughnut';
         public pieColor: Color[] = [
           { backgroundColor: 'red' },
           { backgroundColor: 'green' },
           { backgroundColor: 'blue' }
         ]*/

        this.options = ['Angular', 'React', 'Vue', 'Javascript', 'Jquery', 'Phython'];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.displayedColumns = ['position', 'name', 'symbol', 'percentage'];
        this.dataSource = ELEMENT_DATA;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.matcher = new MyErrorStateMatcher();
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this._filter(value);
          }));
          /* let chart = new Chart("chartContainer", {
             theme: "light2",
             animationEnabled: true,
             exportEnabled: true,
             title: {
               text: "Monthly Expense"
             },
             data: [{
               type: "pie",
               showInLegend: true,
               toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
               indexLabel: "{name} - #percent%",
               dataPoints: [
                 { y: 450, name: "Food" },
                 { y: 120, name: "Insurance" },
                 { y: 300, name: "Traveling" },
                 { y: 800, name: "Housing" },
                 { y: 150, name: "Education" },
                 { y: 150, name: "Shopping" },
                 { y: 250, name: "Others" }
               ]
             }]
           });
                  chart.render();*/
        }
      }, {
        key: "_filter",
        value: function _filter(value) {
          var filterValue = value.toLowerCase();
          return this.options.filter(function (option) {
            return option.toLowerCase().includes(filterValue);
          });
        }
      }, {
        key: "openBottomSheet",
        value: function openBottomSheet() {
          this._bottomSheet.open(BottomSheetOverviewExampleSheet);
        }
      }, {
        key: "shownotifications",
        value: function shownotifications() {
          this.hide = !this.hide;
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var _this2 = this;

          this.loading = true;
          setTimeout(function () {
            //your task after delay.
            _this2.loading = false;

            var dialogRef = _this2.dialog.open(DialogContentExampleDialog);

            dialogRef.afterClosed().subscribe(function (result) {});
          }, 4000);
        }
      }, {
        key: "delay",
        value: function delay(arg0) {
          throw new Error("Method not implemented.");
        }
      }, {
        key: "showdashboard",
        value: function showdashboard() {
          this.dashboard = true;
          this.profile = false;
          this.table = false;
        }
      }, {
        key: "showprofile",
        value: function showprofile() {
          this.profile = true;
          this.dashboard = false;
          this.table = false;
        }
      }, {
        key: "showtable",
        value: function showtable() {
          this.table = true;
          this.dashboard = false;
          this.profile = false;
        }
      }, {
        key: "showradiobutton",
        value: function showradiobutton() {
          this.showradio = !this.showradio;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 56,
      vars: 4,
      consts: [["autosize", "", 1, "example-container"], ["mode", "side", "opened", "", 1, "example-sidenav"], ["drawer", ""], ["href", "localhost:4200"], [1, "list", 3, "click"], [1, "text"], [1, "list1", 3, "click"], [1, "example-sidenav-content"], ["color", "primary"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon", 3, "click"], ["matBadge", "5"], ["class", "notification", 4, "ngIf"], [1, "container"], ["class", "dashboard", 4, "ngIf"], ["class", "profile", 4, "ngIf"], ["class", "table", 4, "ngIf"], [1, "notification"], [1, "para"], [1, "dashboard"], ["cols", "3", "rowHeight", "320", 3, "gutterSize"], [1, "section"], ["class", "para4", 4, "ngIf"], ["aria-label", "Select an option"], ["value", "1"], ["value", "2"], [1, "button"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "headicon"], [1, "head"], [1, "icon"], [3, "click"], ["aria-label", "Select an option", 4, "ngIf"], [1, "autocomplete"], [1, "example-full-width"], ["type", "text", "matInput", "", 3, "matAutocomplete", "formControl", "ngModel", "ngModelChange"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "para4"], [1, "line1", "line2"], [3, "value"], [1, "profile"], [1, "example-form"], ["matInput", "", "value", "Admin"], ["matInput", "", "value", "contact@flatlogic.com", 3, "formControl", "errorStateMatcher"], [4, "ngIf"], ["matInput", "", "disabled", "", "value", "Google"], ["matInput", "", "placeholder", "mm/dd/yy", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["cellspacing", "0", 1, "example-full-width"], ["matInput", ""], ["matInput", "", "placeholder", "Ex. 100 Main St"], ["matInput", "", "placeholder", "Ex. San Francisco"], ["matInput", "", "placeholder", "Ex. California"], ["matInput", "", "maxlength", "6", "placeholder", "Ex. 941054", "value", "940435"], ["postalCode", ""], ["align", "end"], ["matInput", "", "placeholder", "Ex. 100 Main St", 1, "area"], [1, "table"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "symbol"], ["matColumnDef", "percentage"], ["mat-header-row", "", "class", "tabhead", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", "", 1, "tabhead"], ["mat-row", ""]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "AMD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_7_listener() {
            return ctx.showdashboard();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_16_listener() {
            return ctx.showprofile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "person");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_25_listener() {
            return ctx.showtable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "table_view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Table ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_33_listener() {
            return ctx.openBottomSheet();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-toolbar", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_45_listener() {
            return ctx.shownotifications();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, HomeComponent_div_51_Template, 11, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, HomeComponent_div_53_Template, 50, 10, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, HomeComponent_div_54_Template, 72, 7, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, HomeComponent_div_55_Template, 16, 3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dashboard);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.table);
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawer"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadge"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridTile"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatHint"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepicker"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]],
      styles: [".example-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: left;\n  justify-content: left;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.example-sidenav[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.list[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding: 60px 0px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n  border-radius: 5px;\n}\n\n.list[_ngcontent-%COMP%]:hover {\n  background-color: rgba(158, 158, 158, 0.2);\n}\n\n.mat-pseudo-checkbox-checked[_ngcontent-%COMP%] {\n  background-color: #00f;\n}\n\nmat-list[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 300%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #3f3d3d;\n}\n\nmat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n}\n\nmat-list[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\na[_ngcontent-%COMP%]:focus {\n  color: red;\n}\n\na[_ngcontent-%COMP%]:focus   mat-list[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n  height: 64px;\n  width: 100%;\n  background-color: #757575;\n  color: rgba(255, 255, 255, 0.87);\n  position: relative;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  position: absolute;\n  color: black;\n  top: 100%;\n  right: 10px;\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 10px 0px;\n  font-size: 16px;\n  width: 220px;\n  text-align: left;\n  font-weight: normal;\n  z-index: 2;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .para[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  padding-left: 15%;\n  cursor: pointer;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .para[_ngcontent-%COMP%]:hover {\n  background-color: #757575;\n  color: #fff;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #ECECEC;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-grid-list[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #757575;\n  font-weight: normal;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   mat-radio-group[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + #favour[_ngcontent-%COMP%] {\n  color: #0B4DB7;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .grid2[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.para4[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n\n.para4[_ngcontent-%COMP%]   .line1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  height: 5px;\n  position: absolute;\n  width: 350px;\n  background-color: #c5c0c0;\n  z-index: 1;\n}\n\n.para4[_ngcontent-%COMP%]   .line1[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: #33929e;\n  width: 350px;\n  transition: 3s ease-in-out;\n  display: block;\n  height: 5px;\n  -webkit-animation: animative 4s;\n          animation: animative 4s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  position: absolute;\n  z-index: 2;\n}\n\n@-webkit-keyframes animative {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 350px;\n  }\n}\n\n@keyframes animative {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 350px;\n  }\n}\n\n.headicon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.headicon[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: left;\n}\n\n.headicon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 10%;\n  margin-top: 10px;\n}\n\n.headicon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 200%;\n  cursor: pointer;\n}\n\n.autocomplete[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n\n.autocomplete[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%] {\n  width: 120%;\n}\n\n.uploader-status[_ngcontent-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #000000;\n}\n\n  .mat-focused .mat-form-field-label {\n  \n  color: #5438ce !important;\n}\n\n .mat-form-field-underline {\n  \n}\n\n .mat-form-field-ripple {\n  \n  background-color: #5438ce !important;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 0px 10px;\n  padding-top: 20px;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #333232;\n  height: 100px;\n  color: #fff;\n  font-size: inherit;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   mat-hint[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-right: 20px;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .area[_ngcontent-%COMP%] {\n  height: 145px;\n  width: 140%;\n  overflow-x: hidden;\n  word-spacing: 4px;\n}\n\n.table[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n}\n\n.table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.mat-footer-cell[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c5c0c0;\n}\n\n.table[_ngcontent-%COMP%]   .tabhead[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n}\n\n.table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: fixed;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 200px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1) {\n  width: 100px;\n}\n\n.bottomsheet[_ngcontent-%COMP%] {\n  width: 1100px;\n  overflow-x: hidden;\n}\n\n.bottomsheet[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.bottomsheet[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcTXkgUHJvamVjdFxcQW5nTWF0TGVhcm4vc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFFRSxZQUFBO0FDQUY7O0FER0U7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNDLGdIQUFBO0FDREw7O0FEUUE7RUFDRSxZQUFBO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTEg7O0FEUUE7RUFDQSwwQ0FBQTtBQ0xBOztBRFFBO0VBQ0Usc0JBQUE7QUNMRjs7QURTRTtFQUNDLGVBQUE7RUFDRCxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNORjs7QURTQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Qsa0JBQUE7RUFDQSxlQUFBO0FDUEQ7O0FEVUE7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNSRjs7QURjQTtFQUNFLFVBQUE7QUNYRjs7QURhSTtFQUNFLFVBQUE7QUNYTjs7QURpQkE7RUFDRSxjQUFBO0FDZEY7O0FEZUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ2JGOztBRGNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDRCxVQUFBO0FDWkg7O0FEYUk7RUFDSSxpQkFBQTtFQUNELGlCQUFBO0VBQ0EsZUFBQTtBQ1hQOztBRGFJO0VBQ0MseUJBQUE7RUFDQSxXQUFBO0FDWEw7O0FEYUk7RUFDRSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtBQ1hOOztBRGVBO0VBQ0UsY0FBQTtBQ2JGOztBRGVBO0VBQ0UsV0FBQTtBQ2JGOztBRGVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDYkY7O0FEZUE7RUFDRSxlQUFBO0FDYkY7O0FEaUJBO0VBQ0UsZ0JBQUE7RUFDQSwrR0FBQTtBQ2ZGOztBRG1CRTtFQUNGLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDakJBOztBRG9CSTtFQUNFLGtCQUFBO0FDbEJOOztBRHNCQztFQUNHLGNBQUE7QUNwQko7O0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0FDdEJGOztBRDJCQTtFQUNFLGdCQUFBO0FDekJGOztBRGdDQztFQUVDLGtCQUFBO0FDOUJGOztBRGdDRztFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDOUJMOztBRGlDRztFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNDLG9DQUFBO1VBQUEsNEJBQUE7RUFDRCxrQkFBQTtFQUNBLFVBQUE7QUMvQkw7O0FEbUNHO0VBQ0U7SUFDRSxRQUFBO0VDakNMO0VEbUNHO0lBQ0UsWUFBQTtFQ2pDTDtBQUNGOztBRDJCRztFQUNFO0lBQ0UsUUFBQTtFQ2pDTDtFRG1DRztJQUNFLFlBQUE7RUNqQ0w7QUFDRjs7QURxQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0FDbkNGOztBRG9DRTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ2xDRjs7QURvQ0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNsQ0o7O0FEbUNJO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNqQ0o7O0FEcUNFO0VBQ0Usa0JBQUE7QUNsQ0o7O0FEbUNJO0VBQ0UsV0FBQTtBQ2pDTjs7QURxQ0k7O0VBRUUsZUFBQTtBQ2xDTjs7QURvQ0U7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0FDakNKOztBRG9DRTtFQUNFLDRCQUFBO0FDakNKOztBRG9DRTtFQUNFLHlDQUFBO0VBQ0Esb0NBQUE7QUNqQ0o7O0FEcUNFO0VBRUUsc0JBQUE7RUFDQSxpQkFBQTtFQUNFLGlCQUFBO0FDbkNOOztBRG9DSTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2xDTjs7QURzQ0E7RUFDRSxjQUFBO0FDcENGOztBRHNDQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ3BDRjs7QURzQ0E7RUFDRSxrQkFBQTtBQ3BDRjs7QURzQ0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNwQ0Y7O0FEeUNFO0VBQ0Usa0JBQUE7QUN0Q0o7O0FEdUNFOzs7RUFHRSxlQUFBO0FDckNKOztBRHdDRztFQUNFLHlCQUFBO0FDdENMOztBRHdDQTtFQUNFLHNCQUFBO0FDdENGOztBRHdDRztFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ3RDTDs7QUR5Q0c7RUFFRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDeENMOztBRDJDSTtFQUNFLFlBQUE7QUN6Q047O0FENkNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDMUNGOztBRDJDQTtFQUNFLGFBQUE7RUFDRCxlQUFBO0VBQ0EsZUFBQTtBQ3pDRDs7QUQyQ0U7RUFDRSxjQUFBO0FDekNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdCA7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNpZGVuYXYge1xyXG5cclxuICB3aWR0aDogMTUwcHg7XHJcbiAgXHJcblxyXG4gIG1hdC10b29sYmFye1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIC4yKSxcclxuICAgICAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4xNCksXHJcbiAgICAgMCAxcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuICBcclxuICB9XHJcbn1cclxuXHJcbi5saXN0e1xyXG4gIG1hcmdpbjogMTBweDtcclxuICAgcGFkZGluZzogNjBweCAwcHg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmxpc3Q6aG92ZXJ7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKTtcclxuXHJcbn1cclxuLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZjtcclxufVxyXG5tYXQtbGlzdHtcclxuICBcclxuICBtYXQtaWNvbntcclxuICAgZm9udC1zaXplOiAzMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyIDtcclxuICBjb2xvcjogcmdiKDYzLCA2MSwgNjEpO1xyXG4gXHJcbiAgfVxyXG5tYXQtbGlzdC1pdGVte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRleHR7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG59XHJcblxyXG5hOmZvY3VzIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIG1hdC1saXN0e1xyXG4gICAgbWF0LWljb257XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxubWF0LXRvb2xiYXJ7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTcsIDExNywgMTE3KTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLm5vdGlmaWNhdGlvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRvcDogMTAwJTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgei1pbmRleDogMjtcclxuICAgIC5wYXJhe1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgcGFkZGluZy1sZWZ0OiAxNSU7XHJcbiAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAucGFyYTpob3ZlcntcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCAxMTcsIDExNyk7XHJcbiAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcclxuICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi5tYXQtaWNvbi1idXR0b257XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XHJcbn1cclxubWF0LWdyaWQtbGlzdHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiBcclxuXHJcbm1hdC1ncmlkLXRpbGUge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAuMiksXHJcbiAgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLFxyXG4gIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuXHJcbiAgbWF0LXRvb2xiYXJ7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbmNvbG9yOiByZ2IoMTE3LCAxMTcsIDExNyk7XHJcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIG1hdC1yYWRpby1ncm91cHtcclxuICAgIG1hdC1yYWRpby1idXR0b257XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyAjZmF2b3VyIHtcclxuICAgIGNvbG9yOiAjMEI0REI3O1xyXG4gIFxyXG4gfVxyXG5cclxuLmJ1dHRvbntcclxuICBwYWRkaW5nOjE1cHggMjBweDtcclxuICBhbmltYXRpb24tZGVsYXk6IDRzO1xyXG59XHJcblxyXG59XHJcbn1cclxuLmdyaWQye1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcblxyXG59XHJcblxyXG5cclxuIC5wYXJhNCB7XHJcbiAgXHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG5cclxuICAgLmxpbmUxOjpiZWZvcmUge1xyXG4gICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgIGhlaWdodDogNXB4O1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMTkyLCAxOTIpO1xyXG4gICAgIHotaW5kZXg6IDE7XHJcbiAgIH1cclxuXHJcbiAgIC5saW5lMTo6YWZ0ZXIge1xyXG4gICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzkyOWU7XHJcbiAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgIHRyYW5zaXRpb246IDNzIGVhc2UtaW4tb3V0O1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIGhlaWdodDogNXB4O1xyXG4gICAgIGFuaW1hdGlvbjogYW5pbWF0aXZlIDRzIDtcclxuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgei1pbmRleDogMjtcclxuICAgICBcclxuICAgfVxyXG5cclxuICAgQGtleWZyYW1lcyBhbmltYXRpdmUge1xyXG4gICAgIDAlIHtcclxuICAgICAgIHdpZHRoOjA7XHJcbiAgICAgfVxyXG4gICAgIDEwMCUge1xyXG4gICAgICAgd2lkdGg6MzUwcHg7XHJcbiAgICBcclxuICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4uaGVhZGljb257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC5oZWFke1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLmljb257XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hdC1pY29ue1xyXG4gICAgZm9udC1zaXplOiAyMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICB9XHJcbn1cclxuICAuYXV0b2NvbXBsZXRle1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgLmV4YW1wbGUtZnVsbC13aWR0aHtcclxuICAgICAgd2lkdGg6IDEyMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgICAudXBsb2FkZXItc3RhdHVzIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLFxyXG4gICAgLm1hdC1zcGlubmVyIGNpcmNsZSB7XHJcbiAgICAgIHN0cm9rZTogIzAwMDAwMDtcclxuICAgIH1cclxuICA6Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXHJcbiAgICBjb2xvcjogIzU0MzhjZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDM4Y2UgIWltcG9ydGFudDtcclxuXHJcbiAgfVxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnR7XHJcbiAgLnByb2ZpbGV7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgbWF0LXRvb2xiYXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTAsIDUwKTtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIH1cclxuXHJcbiBcclxubWF0LWhpbnR7XHJcbiAgY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxudGQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG4uYXJlYXtcclxuICBoZWlnaHQ6IDE0NXB4O1xyXG4gIHdpZHRoOiAxNDAlO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB3b3JkLXNwYWNpbmc6IDRweDtcclxufVxyXG4gIH1cclxuICB9XHJcblxyXG4gIC50YWJsZXtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICB0aC5tYXQtaGVhZGVyLWNlbGwsXHJcbiAgdGQubWF0LWNlbGwsXHJcbiAgdGQubWF0LWZvb3Rlci1jZWxse1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgIHRyOmhvdmVye1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE5MiwgMTkyKTsgXHJcbiAgIH1cclxuLnRhYmhlYWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuICAgdGFibGUge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgIH1cclxuXHJcbiAgIHRoXHJcbiAgIHtcclxuICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgIHdpZHRoOiAyMDBweDtcclxuICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICB9XHJcblxyXG4gICAgdGg6bnRoLWNoaWxkKDEpe1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLmJvdHRvbXNoZWV0e1xyXG4gIHdpZHRoOiAxMTAwcHg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5we1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiBmb250LXNpemU6IDIwcHg7XHJcbiBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIG1hdC1pY29ue1xyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbiAgfVxyXG59XHJcbn1cclxuIiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogbGVmdDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2IHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLmV4YW1wbGUtc2lkZW5hdiBtYXQtdG9vbGJhciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogNjBweCAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxpc3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuMik7XG59XG5cbi5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmO1xufVxuXG5tYXQtbGlzdCBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjM2YzZDNkO1xufVxubWF0LWxpc3QgbWF0LWxpc3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm1hdC1saXN0IC50ZXh0IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYTpmb2N1cyB7XG4gIGNvbG9yOiByZWQ7XG59XG5hOmZvY3VzIG1hdC1saXN0IG1hdC1pY29uIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQgbWF0LXRvb2xiYXIge1xuICBoZWlnaHQ6IDY0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IG1hdC10b29sYmFyIC5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiBibGFjaztcbiAgdG9wOiAxMDAlO1xuICByaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDIyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB6LWluZGV4OiAyO1xufVxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IG1hdC10b29sYmFyIC5ub3RpZmljYXRpb24gLnBhcmEge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCBtYXQtdG9vbGJhciAubm90aWZpY2F0aW9uIC5wYXJhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcbiAgY29sb3I6ICNmZmY7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQgbWF0LXRvb2xiYXIgLm5vdGlmaWNhdGlvbiBwIHtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcbn1cbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCAuZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCAubWF0LWljb24tYnV0dG9uIHtcbiAgd2lkdGg6IDYwcHg7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQgLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQgbWF0LWdyaWQtbGlzdCB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCBtYXQtZ3JpZC1saXN0IG1hdC1ncmlkLXRpbGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQgbWF0LWdyaWQtbGlzdCBtYXQtZ3JpZC10aWxlIG1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQgbWF0LWdyaWQtbGlzdCBtYXQtZ3JpZC10aWxlIG1hdC1yYWRpby1ncm91cCBtYXQtcmFkaW8tYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IG1hdC1ncmlkLWxpc3QgbWF0LWdyaWQtdGlsZSBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgI2Zhdm91ciB7XG4gIGNvbG9yOiAjMEI0REI3O1xufVxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IG1hdC1ncmlkLWxpc3QgbWF0LWdyaWQtdGlsZSAuYnV0dG9uIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBhbmltYXRpb24tZGVsYXk6IDRzO1xufVxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IC5ncmlkMiB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5wYXJhNCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5wYXJhNCAubGluZTE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzBjMDtcbiAgei1pbmRleDogMTtcbn1cbi5wYXJhNCAubGluZTE6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOTI5ZTtcbiAgd2lkdGg6IDM1MHB4O1xuICB0cmFuc2l0aW9uOiAzcyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNXB4O1xuICBhbmltYXRpb246IGFuaW1hdGl2ZSA0cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xufVxuQGtleWZyYW1lcyBhbmltYXRpdmUge1xuICAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICB9XG59XG5cbi5oZWFkaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhlYWRpY29uIC5oZWFkIHtcbiAgd2lkdGg6IDkwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5oZWFkaWNvbiAuaWNvbiB7XG4gIHdpZHRoOiAxMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaGVhZGljb24gLmljb24gbWF0LWljb24ge1xuICBmb250LXNpemU6IDIwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmF1dG9jb21wbGV0ZSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5hdXRvY29tcGxldGUgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMjAlO1xufVxuXG4udXBsb2FkZXItc3RhdHVzIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLFxuLm1hdC1zcGlubmVyIGNpcmNsZSB7XG4gIHN0cm9rZTogIzAwMDAwMDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiAjNTQzOGNlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDM4Y2UgIWltcG9ydGFudDtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IC5wcm9maWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IC5wcm9maWxlIG1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzIzMjtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCAucHJvZmlsZSBtYXQtaGludCB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IC5wcm9maWxlIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQgLnByb2ZpbGUgdGQge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQgLnByb2ZpbGUgLmFyZWEge1xuICBoZWlnaHQ6IDE0NXB4O1xuICB3aWR0aDogMTQwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB3b3JkLXNwYWNpbmc6IDRweDtcbn1cblxuLnRhYmxlIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xufVxuLnRhYmxlIHRoLm1hdC1oZWFkZXItY2VsbCxcbi50YWJsZSB0ZC5tYXQtY2VsbCxcbi50YWJsZSB0ZC5tYXQtZm9vdGVyLWNlbGwge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4udGFibGUgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjMGMwO1xufVxuLnRhYmxlIC50YWJoZWFkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi50YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuLnRhYmxlIHRoIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDIwMHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi50YWJsZSB0aDpudGgtY2hpbGQoMSkge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5ib3R0b21zaGVldCB7XG4gIHdpZHRoOiAxMTAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5ib3R0b21zaGVldCBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm90dG9tc2hlZXQgcCBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogOTAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"]
        }];
      }, null);
    })();

    var DialogContentExampleDialog = function DialogContentExampleDialog() {
      _classCallCheck(this, DialogContentExampleDialog);
    };

    DialogContentExampleDialog.ɵfac = function DialogContentExampleDialog_Factory(t) {
      return new (t || DialogContentExampleDialog)();
    };

    DialogContentExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogContentExampleDialog,
      selectors: [["dialog-content-example-dialog"]],
      decls: 8,
      vars: 0,
      consts: [[1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""]],
      template: function DialogContentExampleDialog_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reloading done !");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Production server reloaded");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogContentExampleDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'dialog-content-example-dialog',
          templateUrl: 'dialog-content-example-dialog.html'
        }]
      }], null, null);
    })();

    var BottomSheetOverviewExampleSheet = /*#__PURE__*/function () {
      function BottomSheetOverviewExampleSheet(_bottomSheetRef) {
        _classCallCheck(this, BottomSheetOverviewExampleSheet);

        this._bottomSheetRef = _bottomSheetRef;
      }

      _createClass(BottomSheetOverviewExampleSheet, [{
        key: "openLink",
        value: function openLink(event) {
          this._bottomSheetRef.dismiss();

          event.preventDefault();
        }
      }]);

      return BottomSheetOverviewExampleSheet;
    }();

    BottomSheetOverviewExampleSheet.ɵfac = function BottomSheetOverviewExampleSheet_Factory(t) {
      return new (t || BottomSheetOverviewExampleSheet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetRef"]));
    };

    BottomSheetOverviewExampleSheet.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BottomSheetOverviewExampleSheet,
      selectors: [["bottom-sheet-overview-example-sheet"]],
      decls: 12,
      vars: 0,
      consts: [[1, "bottomsheet"], [3, "click"]],
      template: function BottomSheetOverviewExampleSheet_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Selcet Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BottomSheetOverviewExampleSheet_Template_p_click_3_listener($event) {
            return ctx.openLink($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BottomSheetOverviewExampleSheet_Template_p_click_8_listener($event) {
            return ctx.openLink($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "star_rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Star ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatList"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"]],
      styles: [".example-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: left;\n  justify-content: left;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.example-sidenav[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.list[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding: 60px 0px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n  border-radius: 5px;\n}\n\n.list[_ngcontent-%COMP%]:hover {\n  background-color: rgba(158, 158, 158, 0.2);\n}\n\n.mat-pseudo-checkbox-checked[_ngcontent-%COMP%] {\n  background-color: #00f;\n}\n\nmat-list[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 300%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #3f3d3d;\n}\n\nmat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n}\n\nmat-list[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\na[_ngcontent-%COMP%]:focus {\n  color: red;\n}\n\na[_ngcontent-%COMP%]:focus   mat-list[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n  height: 64px;\n  width: 100%;\n  background-color: #757575;\n  color: rgba(255, 255, 255, 0.87);\n  position: relative;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  position: absolute;\n  color: black;\n  top: 100%;\n  right: 10px;\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 10px 0px;\n  font-size: 16px;\n  width: 220px;\n  text-align: left;\n  font-weight: normal;\n  z-index: 2;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .para[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  padding-left: 15%;\n  cursor: pointer;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .para[_ngcontent-%COMP%]:hover {\n  background-color: #757575;\n  color: #fff;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #ECECEC;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-grid-list[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #757575;\n  font-weight: normal;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   mat-radio-group[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + #favour[_ngcontent-%COMP%] {\n  color: #0B4DB7;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   mat-grid-list[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .grid2[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.para4[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n\n.para4[_ngcontent-%COMP%]   .line1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  height: 5px;\n  position: absolute;\n  width: 350px;\n  background-color: #c5c0c0;\n  z-index: 1;\n}\n\n.para4[_ngcontent-%COMP%]   .line1[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: #33929e;\n  width: 350px;\n  transition: 3s ease-in-out;\n  display: block;\n  height: 5px;\n  -webkit-animation: animative 4s;\n          animation: animative 4s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  position: absolute;\n  z-index: 2;\n}\n\n@-webkit-keyframes animative {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 350px;\n  }\n}\n\n@keyframes animative {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 350px;\n  }\n}\n\n.headicon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.headicon[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: left;\n}\n\n.headicon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 10%;\n  margin-top: 10px;\n}\n\n.headicon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 200%;\n  cursor: pointer;\n}\n\n.autocomplete[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n\n.autocomplete[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%] {\n  width: 120%;\n}\n\n.uploader-status[_ngcontent-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #000000;\n}\n\n  .mat-focused .mat-form-field-label {\n  \n  color: #5438ce !important;\n}\n\n .mat-form-field-underline {\n  \n}\n\n .mat-form-field-ripple {\n  \n  background-color: #5438ce !important;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 0px 10px;\n  padding-top: 20px;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #333232;\n  height: 100px;\n  color: #fff;\n  font-size: inherit;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   mat-hint[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-right: 20px;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .area[_ngcontent-%COMP%] {\n  height: 145px;\n  width: 140%;\n  overflow-x: hidden;\n  word-spacing: 4px;\n}\n\n.table[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n}\n\n.table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.mat-footer-cell[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #c5c0c0;\n}\n\n.table[_ngcontent-%COMP%]   .tabhead[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n}\n\n.table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: fixed;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 200px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1) {\n  width: 100px;\n}\n\n.bottomsheet[_ngcontent-%COMP%] {\n  width: 1100px;\n  overflow-x: hidden;\n}\n\n.bottomsheet[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.bottomsheet[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcTXkgUHJvamVjdFxcQW5nTWF0TGVhcm4vc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFFRSxZQUFBO0FDQUY7O0FER0U7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNDLGdIQUFBO0FDREw7O0FEUUE7RUFDRSxZQUFBO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTEg7O0FEUUE7RUFDQSwwQ0FBQTtBQ0xBOztBRFFBO0VBQ0Usc0JBQUE7QUNMRjs7QURTRTtFQUNDLGVBQUE7RUFDRCxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNORjs7QURTQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Qsa0JBQUE7RUFDQSxlQUFBO0FDUEQ7O0FEVUE7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNSRjs7QURjQTtFQUNFLFVBQUE7QUNYRjs7QURhSTtFQUNFLFVBQUE7QUNYTjs7QURpQkE7RUFDRSxjQUFBO0FDZEY7O0FEZUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ2JGOztBRGNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDRCxVQUFBO0FDWkg7O0FEYUk7RUFDSSxpQkFBQTtFQUNELGlCQUFBO0VBQ0EsZUFBQTtBQ1hQOztBRGFJO0VBQ0MseUJBQUE7RUFDQSxXQUFBO0FDWEw7O0FEYUk7RUFDRSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtBQ1hOOztBRGVBO0VBQ0UsY0FBQTtBQ2JGOztBRGVBO0VBQ0UsV0FBQTtBQ2JGOztBRGVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDYkY7O0FEZUE7RUFDRSxlQUFBO0FDYkY7O0FEaUJBO0VBQ0UsZ0JBQUE7RUFDQSwrR0FBQTtBQ2ZGOztBRG1CRTtFQUNGLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDakJBOztBRG9CSTtFQUNFLGtCQUFBO0FDbEJOOztBRHNCQztFQUNHLGNBQUE7QUNwQko7O0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0FDdEJGOztBRDJCQTtFQUNFLGdCQUFBO0FDekJGOztBRGdDQztFQUVDLGtCQUFBO0FDOUJGOztBRGdDRztFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDOUJMOztBRGlDRztFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNDLG9DQUFBO1VBQUEsNEJBQUE7RUFDRCxrQkFBQTtFQUNBLFVBQUE7QUMvQkw7O0FEbUNHO0VBQ0U7SUFDRSxRQUFBO0VDakNMO0VEbUNHO0lBQ0UsWUFBQTtFQ2pDTDtBQUNGOztBRDJCRztFQUNFO0lBQ0UsUUFBQTtFQ2pDTDtFRG1DRztJQUNFLFlBQUE7RUNqQ0w7QUFDRjs7QURxQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0FDbkNGOztBRG9DRTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ2xDRjs7QURvQ0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNsQ0o7O0FEbUNJO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNqQ0o7O0FEcUNFO0VBQ0Usa0JBQUE7QUNsQ0o7O0FEbUNJO0VBQ0UsV0FBQTtBQ2pDTjs7QURxQ0k7O0VBRUUsZUFBQTtBQ2xDTjs7QURvQ0U7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0FDakNKOztBRG9DRTtFQUNFLDRCQUFBO0FDakNKOztBRG9DRTtFQUNFLHlDQUFBO0VBQ0Esb0NBQUE7QUNqQ0o7O0FEcUNFO0VBRUUsc0JBQUE7RUFDQSxpQkFBQTtFQUNFLGlCQUFBO0FDbkNOOztBRG9DSTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2xDTjs7QURzQ0E7RUFDRSxjQUFBO0FDcENGOztBRHNDQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ3BDRjs7QURzQ0E7RUFDRSxrQkFBQTtBQ3BDRjs7QURzQ0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNwQ0Y7O0FEeUNFO0VBQ0Usa0JBQUE7QUN0Q0o7O0FEdUNFOzs7RUFHRSxlQUFBO0FDckNKOztBRHdDRztFQUNFLHlCQUFBO0FDdENMOztBRHdDQTtFQUNFLHNCQUFBO0FDdENGOztBRHdDRztFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ3RDTDs7QUR5Q0c7RUFFRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDeENMOztBRDJDSTtFQUNFLFlBQUE7QUN6Q047O0FENkNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDMUNGOztBRDJDQTtFQUNFLGFBQUE7RUFDRCxlQUFBO0VBQ0EsZUFBQTtBQ3pDRDs7QUQyQ0U7RUFDRSxjQUFBO0FDekNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdCA7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNpZGVuYXYge1xyXG5cclxuICB3aWR0aDogMTUwcHg7XHJcbiAgXHJcblxyXG4gIG1hdC10b29sYmFye1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIC4yKSxcclxuICAgICAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4xNCksXHJcbiAgICAgMCAxcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuICBcclxuICB9XHJcbn1cclxuXHJcbi5saXN0e1xyXG4gIG1hcmdpbjogMTBweDtcclxuICAgcGFkZGluZzogNjBweCAwcHg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmxpc3Q6aG92ZXJ7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKTtcclxuXHJcbn1cclxuLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZjtcclxufVxyXG5tYXQtbGlzdHtcclxuICBcclxuICBtYXQtaWNvbntcclxuICAgZm9udC1zaXplOiAzMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyIDtcclxuICBjb2xvcjogcmdiKDYzLCA2MSwgNjEpO1xyXG4gXHJcbiAgfVxyXG5tYXQtbGlzdC1pdGVte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRleHR7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG59XHJcblxyXG5hOmZvY3VzIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIG1hdC1saXN0e1xyXG4gICAgbWF0LWljb257XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxubWF0LXRvb2xiYXJ7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTcsIDExNywgMTE3KTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLm5vdGlmaWNhdGlvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRvcDogMTAwJTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgei1pbmRleDogMjtcclxuICAgIC5wYXJhe1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgcGFkZGluZy1sZWZ0OiAxNSU7XHJcbiAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAucGFyYTpob3ZlcntcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCAxMTcsIDExNyk7XHJcbiAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcclxuICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi5tYXQtaWNvbi1idXR0b257XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XHJcbn1cclxubWF0LWdyaWQtbGlzdHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiBcclxuXHJcbm1hdC1ncmlkLXRpbGUge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAuMiksXHJcbiAgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLFxyXG4gIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuXHJcbiAgbWF0LXRvb2xiYXJ7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbmNvbG9yOiByZ2IoMTE3LCAxMTcsIDExNyk7XHJcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIG1hdC1yYWRpby1ncm91cHtcclxuICAgIG1hdC1yYWRpby1idXR0b257XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyAjZmF2b3VyIHtcclxuICAgIGNvbG9yOiAjMEI0REI3O1xyXG4gIFxyXG4gfVxyXG5cclxuLmJ1dHRvbntcclxuICBwYWRkaW5nOjE1cHggMjBweDtcclxuICBhbmltYXRpb24tZGVsYXk6IDRzO1xyXG59XHJcblxyXG59XHJcbn1cclxuLmdyaWQye1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcblxyXG59XHJcblxyXG5cclxuIC5wYXJhNCB7XHJcbiAgXHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG5cclxuICAgLmxpbmUxOjpiZWZvcmUge1xyXG4gICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgIGhlaWdodDogNXB4O1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMTkyLCAxOTIpO1xyXG4gICAgIHotaW5kZXg6IDE7XHJcbiAgIH1cclxuXHJcbiAgIC5saW5lMTo6YWZ0ZXIge1xyXG4gICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzkyOWU7XHJcbiAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgIHRyYW5zaXRpb246IDNzIGVhc2UtaW4tb3V0O1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIGhlaWdodDogNXB4O1xyXG4gICAgIGFuaW1hdGlvbjogYW5pbWF0aXZlIDRzIDtcclxuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgei1pbmRleDogMjtcclxuICAgICBcclxuICAgfVxyXG5cclxuICAgQGtleWZyYW1lcyBhbmltYXRpdmUge1xyXG4gICAgIDAlIHtcclxuICAgICAgIHdpZHRoOjA7XHJcbiAgICAgfVxyXG4gICAgIDEwMCUge1xyXG4gICAgICAgd2lkdGg6MzUwcHg7XHJcbiAgICBcclxuICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4uaGVhZGljb257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC5oZWFke1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLmljb257XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hdC1pY29ue1xyXG4gICAgZm9udC1zaXplOiAyMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICB9XHJcbn1cclxuICAuYXV0b2NvbXBsZXRle1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgLmV4YW1wbGUtZnVsbC13aWR0aHtcclxuICAgICAgd2lkdGg6IDEyMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgICAudXBsb2FkZXItc3RhdHVzIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLFxyXG4gICAgLm1hdC1zcGlubmVyIGNpcmNsZSB7XHJcbiAgICAgIHN0cm9rZTogIzAwMDAwMDtcclxuICAgIH1cclxuICA6Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXHJcbiAgICBjb2xvcjogIzU0MzhjZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDM4Y2UgIWltcG9ydGFudDtcclxuXHJcbiAgfVxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnR7XHJcbiAgLnByb2ZpbGV7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgbWF0LXRvb2xiYXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTAsIDUwKTtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIH1cclxuXHJcbiBcclxubWF0LWhpbnR7XHJcbiAgY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxudGQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG4uYXJlYXtcclxuICBoZWlnaHQ6IDE0NXB4O1xyXG4gIHdpZHRoOiAxNDAlO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB3b3JkLXNwYWNpbmc6IDRweDtcclxufVxyXG4gIH1cclxuICB9XHJcblxyXG4gIC50YWJsZXtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICB0aC5tYXQtaGVhZGVyLWNlbGwsXHJcbiAgdGQubWF0LWNlbGwsXHJcbiAgdGQubWF0LWZvb3Rlci1jZWxse1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgIHRyOmhvdmVye1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE5MiwgMTkyKTsgXHJcbiAgIH1cclxuLnRhYmhlYWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuICAgdGFibGUge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgIH1cclxuXHJcbiAgIHRoXHJcbiAgIHtcclxuICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgIHdpZHRoOiAyMDBweDtcclxuICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICB9XHJcblxyXG4gICAgdGg6bnRoLWNoaWxkKDEpe1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLmJvdHRvbXNoZWV0e1xyXG4gIHdpZHRoOiAxMTAwcHg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5we1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiBmb250LXNpemU6IDIwcHg7XHJcbiBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIG1hdC1pY29ue1xyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbiAgfVxyXG59XHJcbn1cclxuIiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogbGVmdDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2IHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLmV4YW1wbGUtc2lkZW5hdiBtYXQtdG9vbGJhciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogNjBweCAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxpc3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuMik7XG59XG5cbi5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmO1xufVxuXG5tYXQtbGlzdCBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjM2YzZDNkO1xufVxubWF0LWxpc3QgbWF0LWxpc3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm1hdC1saXN0IC50ZXh0IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYTpmb2N1cyB7XG4gIGNvbG9yOiByZWQ7XG59XG5hOmZvY3VzIG1hdC1saXN0IG1hdC1pY29uIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQgbWF0LXRvb2xiYXIge1xuICBoZWlnaHQ6IDY0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IG1hdC10b29sYmFyIC5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiBibGFjaztcbiAgdG9wOiAxMDAlO1xuICByaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDIyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB6LWluZGV4OiAyO1xufVxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IG1hdC10b29sYmFyIC5ub3RpZmljYXRpb24gLnBhcmEge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCBtYXQtdG9vbGJhciAubm90aWZpY2F0aW9uIC5wYXJhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcbiAgY29sb3I6ICNmZmY7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQgbWF0LXRvb2xiYXIgLm5vdGlmaWNhdGlvbiBwIHtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcbn1cbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCAuZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCAubWF0LWljb24tYnV0dG9uIHtcbiAgd2lkdGg6IDYwcHg7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQgLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQgbWF0LWdyaWQtbGlzdCB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCBtYXQtZ3JpZC1saXN0IG1hdC1ncmlkLXRpbGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQgbWF0LWdyaWQtbGlzdCBtYXQtZ3JpZC10aWxlIG1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQgbWF0LWdyaWQtbGlzdCBtYXQtZ3JpZC10aWxlIG1hdC1yYWRpby1ncm91cCBtYXQtcmFkaW8tYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IG1hdC1ncmlkLWxpc3QgbWF0LWdyaWQtdGlsZSBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgI2Zhdm91ciB7XG4gIGNvbG9yOiAjMEI0REI3O1xufVxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IG1hdC1ncmlkLWxpc3QgbWF0LWdyaWQtdGlsZSAuYnV0dG9uIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBhbmltYXRpb24tZGVsYXk6IDRzO1xufVxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IC5ncmlkMiB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5wYXJhNCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5wYXJhNCAubGluZTE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzBjMDtcbiAgei1pbmRleDogMTtcbn1cbi5wYXJhNCAubGluZTE6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOTI5ZTtcbiAgd2lkdGg6IDM1MHB4O1xuICB0cmFuc2l0aW9uOiAzcyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNXB4O1xuICBhbmltYXRpb246IGFuaW1hdGl2ZSA0cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xufVxuQGtleWZyYW1lcyBhbmltYXRpdmUge1xuICAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICB9XG59XG5cbi5oZWFkaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhlYWRpY29uIC5oZWFkIHtcbiAgd2lkdGg6IDkwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5oZWFkaWNvbiAuaWNvbiB7XG4gIHdpZHRoOiAxMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaGVhZGljb24gLmljb24gbWF0LWljb24ge1xuICBmb250LXNpemU6IDIwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmF1dG9jb21wbGV0ZSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5hdXRvY29tcGxldGUgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMjAlO1xufVxuXG4udXBsb2FkZXItc3RhdHVzIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLFxuLm1hdC1zcGlubmVyIGNpcmNsZSB7XG4gIHN0cm9rZTogIzAwMDAwMDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiAjNTQzOGNlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDM4Y2UgIWltcG9ydGFudDtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IC5wcm9maWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IC5wcm9maWxlIG1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzIzMjtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCAucHJvZmlsZSBtYXQtaGludCB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IC5wcm9maWxlIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQgLnByb2ZpbGUgdGQge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQgLnByb2ZpbGUgLmFyZWEge1xuICBoZWlnaHQ6IDE0NXB4O1xuICB3aWR0aDogMTQwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB3b3JkLXNwYWNpbmc6IDRweDtcbn1cblxuLnRhYmxlIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xufVxuLnRhYmxlIHRoLm1hdC1oZWFkZXItY2VsbCxcbi50YWJsZSB0ZC5tYXQtY2VsbCxcbi50YWJsZSB0ZC5tYXQtZm9vdGVyLWNlbGwge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4udGFibGUgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjMGMwO1xufVxuLnRhYmxlIC50YWJoZWFkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi50YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuLnRhYmxlIHRoIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDIwMHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi50YWJsZSB0aDpudGgtY2hpbGQoMSkge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5ib3R0b21zaGVldCB7XG4gIHdpZHRoOiAxMTAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5ib3R0b21zaGVldCBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm90dG9tc2hlZXQgcCBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogOTAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BottomSheetOverviewExampleSheet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bottom-sheet-overview-example-sheet',
          templateUrl: 'bottom-sheet-overview-example-sheet.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\My Project\AngMatLearn\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map