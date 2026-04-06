(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 4114
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;



const routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard/dashboard.module */ 3326)).then(m => m.DashboardPageModule)
},
// Recepciones
{
  path: 'recepciones',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_recepciones_recepciones-lista_recepciones-lista_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/recepciones/recepciones-lista/recepciones-lista.module */ 5053)).then(m => m.RecepcionesListaPageModule)
}, {
  path: 'recepciones/:id',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_recepciones_recepcion-detalle_recepcion-detalle_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/recepciones/recepcion-detalle/recepcion-detalle.module */ 4285)).then(m => m.RecepcionDetallePageModule)
}, {
  path: 'recepcion-form',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_recepciones_recepcion-form_recepcion-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/recepciones/recepcion-form/recepcion-form.module */ 7349)).then(m => m.RecepcionFormPageModule)
}, {
  path: 'recepcion-form/:id',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_recepciones_recepcion-form_recepcion-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/recepciones/recepcion-form/recepcion-form.module */ 7349)).then(m => m.RecepcionFormPageModule)
},
// Calidades
{
  path: 'calidades',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_calidades_calidades-lista_calidades-lista_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/calidades/calidades-lista/calidades-lista.module */ 4891)).then(m => m.CalidadesListaPageModule)
}, {
  path: 'calidad-entero-form',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_calidades_calidad-entero-form_calidad-entero-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/calidades/calidad-entero-form/calidad-entero-form.module */ 371)).then(m => m.CalidadEnteroFormPageModule)
}, {
  path: 'calidad-entero-form/:id',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_calidades_calidad-entero-form_calidad-entero-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/calidades/calidad-entero-form/calidad-entero-form.module */ 371)).then(m => m.CalidadEnteroFormPageModule)
}, {
  path: 'clasificacion-tallas-form',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_calidades_clasificacion-tallas-form_clasificacion-tallas-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/calidades/clasificacion-tallas-form/clasificacion-tallas-form.module */ 1671)).then(m => m.ClasificacionTallasFormPageModule)
}, {
  path: 'clasificacion-tallas-form/:id',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_calidades_clasificacion-tallas-form_clasificacion-tallas-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/calidades/clasificacion-tallas-form/clasificacion-tallas-form.module */ 1671)).then(m => m.ClasificacionTallasFormPageModule)
}, {
  path: 'muestra-sabor-form',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_calidades_muestra-sabor-form_muestra-sabor-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/calidades/muestra-sabor-form/muestra-sabor-form.module */ 4045)).then(m => m.MuestraSaborFormPageModule)
}, {
  path: 'muestra-sabor-form/:id',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_calidades_muestra-sabor-form_muestra-sabor-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/calidades/muestra-sabor-form/muestra-sabor-form.module */ 4045)).then(m => m.MuestraSaborFormPageModule)
},
// Catálogos
{
  path: 'catalogos',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_catalogos_catalogos-menu_catalogos-menu_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/catalogos/catalogos-menu/catalogos-menu.module */ 3276)).then(m => m.CatalogosMenuPageModule)
}, {
  path: 'catalogos/clientes',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_catalogos_clientes_clientes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/catalogos/clientes/clientes.module */ 3236)).then(m => m.ClientesPageModule)
}, {
  path: 'catalogos/fincas',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_catalogos_fincas_fincas_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/catalogos/fincas/fincas.module */ 9846)).then(m => m.FincasPageModule)
}, {
  path: 'catalogos/lagunas',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_catalogos_lagunas_lagunas_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/catalogos/lagunas/lagunas.module */ 1140)).then(m => m.LagunasPageModule)
}, {
  path: 'catalogos/usuarios',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_catalogos_usuarios_usuarios_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/catalogos/usuarios/usuarios.module */ 9104)).then(m => m.UsuariosPageModule)
},
// Admin
{
  path: 'tipos-defecto',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_admin_tipos-defecto_tipos-defecto_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin/tipos-defecto/tipos-defecto.module */ 1654)).then(m => m.TiposDefectoPageModule)
}];
class AppRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forRoot(routes, {
      preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__.PreloadAllModules
    }), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 92
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
var _staticBlock;



const _c0 = a0 => [a0];
function AppComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-menu-toggle", 3)(1, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, p_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ios", p_r1.icon + "-outline")("md", p_r1.icon + "-sharp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.title);
  }
}
class AppComponent {
  constructor() {
    this.appPages = [{
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'grid'
    }, {
      title: 'Recepciones',
      url: '/recepciones',
      icon: 'boat'
    }, {
      title: 'Calidades',
      url: '/calidades',
      icon: 'flask'
    }, {
      title: 'Catálogos',
      url: '/catalogos',
      icon: 'list'
    }, {
      title: 'Tipos de Defecto',
      url: '/tipos-defecto',
      icon: 'settings'
    }];
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: false,
    decls: 12,
    vars: 0,
    consts: [["contentId", "main-content"], ["contentId", "main-content", "type", "overlay"], ["id", "inbox-list"], ["auto-hide", "false"], ["id", "main-content"], ["routerDirection", "root", "lines", "none", "detail", "false", "routerLinkActive", "selected", 3, "routerLink"], ["aria-hidden", "true", "slot", "start", 3, "ios", "md"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-app")(1, "ion-split-pane", 0)(2, "ion-menu", 1)(3, "ion-content")(4, "ion-list", 2)(5, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "TrazApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Control de Calidad \u2014 Camar\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](9, AppComponent_For_10_Template, 5, 6, "ion-menu-toggle", 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ion-router-outlet", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.appPages);
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonSplitPane, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonRouterOutlet, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
    styles: ["ion-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], \nion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], \nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%] {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #616e7e;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], \nion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\nion-note[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected[_ngcontent-%COMP%] {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0RBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ },

/***/ 635
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 2190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _interceptors_numeric_id_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/numeric-id.interceptor */ 4261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;









class AppModule {
  static #_ = _staticBlock = () => (this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouteReuseStrategy,
      useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicRouteStrategy
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
      useClass: _interceptors_numeric_id_interceptor__WEBPACK_IMPORTED_MODULE_7__.NumericIdInterceptor,
      multi: true
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule]
  });
})();

/***/ },

/***/ 4261
/*!********************************************************!*\
  !*** ./src/app/interceptors/numeric-id.interceptor.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumericIdInterceptor: () => (/* binding */ NumericIdInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3855);
var _staticBlock;



class NumericIdInterceptor {
  constructor(http) {
    this.http = http;
  }
  intercept(req, next) {
    if (req.method !== 'POST' || !req.body) {
      return next.handle(req);
    }
    // Obtener la URL base del recurso (ej: http://localhost:3000/detalle_bins)
    const url = req.url;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.switchMap)(items => {
      const maxId = Array.isArray(items) ? items.reduce((max, item) => {
        const n = Number(item.id);
        return !isNaN(n) && n > max ? n : max;
      }, 0) : 0;
      const modifiedReq = req.clone({
        body: {
          id: maxId + 1,
          ...req.body
        }
      });
      return next.handle(modifiedReq);
    }));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function NumericIdInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NumericIdInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NumericIdInterceptor,
    factory: NumericIdInterceptor.ɵfac
  }));
}
_staticBlock();

/***/ },

/***/ 4429
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 2190);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.log(err));

/***/ },

/***/ 6120
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ referencedExports: ,  namespace object ***!
  \****************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-accordion_2.entry.js": [
		7518,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
		]
	],
	"./ion-action-sheet.entry.js": [
		1981,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
		]
	],
	"./ion-alert.entry.js": [
		1603,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
		]
	],
	"./ion-app_8.entry.js": [
		2273,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
		]
	],
	"./ion-avatar_3.entry.js": [
		9642,
		[
			"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
		]
	],
	"./ion-back-button.entry.js": [
		2095,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
		]
	],
	"./ion-backdrop.entry.js": [
		2335,
		[
			"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
		]
	],
	"./ion-breadcrumb_2.entry.js": [
		8221,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
		]
	],
	"./ion-button_2.entry.js": [
		7184,
		[
			"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
		]
	],
	"./ion-card_5.entry.js": [
		8759,
		[
			"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
		]
	],
	"./ion-checkbox.entry.js": [
		4248,
		[
			"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
		]
	],
	"./ion-chip.entry.js": [
		9863,
		[
			"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
		]
	],
	"./ion-col_3.entry.js": [
		1769,
		[
			"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
		]
	],
	"./ion-datetime-button.entry.js": [
		2569,
		[
			"default-node_modules_ionic_core_dist_esm_data-B9iGR5YO_js",
			"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
		]
	],
	"./ion-datetime_3.entry.js": [
		6534,
		[
			"default-node_modules_ionic_core_dist_esm_data-B9iGR5YO_js",
			"common",
			"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
		]
	],
	"./ion-fab_3.entry.js": [
		5458,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
		]
	],
	"./ion-img.entry.js": [
		654,
		[
			"node_modules_ionic_core_dist_esm_ion-img_entry_js"
		]
	],
	"./ion-infinite-scroll_2.entry.js": [
		6034,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
		]
	],
	"./ion-input-otp.entry.js": [
		381,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-input-otp_entry_js"
		]
	],
	"./ion-input-password-toggle.entry.js": [
		5196,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-input-password-toggle_entry_js"
		]
	],
	"./ion-input.entry.js": [
		761,
		[
			"default-node_modules_ionic_core_dist_esm_input_utils-Bxa_DQ7-_js-node_modules_ionic_core_dist-66891c",
			"common",
			"node_modules_ionic_core_dist_esm_ion-input_entry_js"
		]
	],
	"./ion-item-option_3.entry.js": [
		6492,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
		]
	],
	"./ion-item_8.entry.js": [
		9557,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
		]
	],
	"./ion-loading.entry.js": [
		8353,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
		]
	],
	"./ion-menu_3.entry.js": [
		1024,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
		]
	],
	"./ion-modal.entry.js": [
		9160,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
		]
	],
	"./ion-nav_2.entry.js": [
		393,
		[
			"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
		]
	],
	"./ion-picker-column-option.entry.js": [
		8442,
		[
			"node_modules_ionic_core_dist_esm_ion-picker-column-option_entry_js"
		]
	],
	"./ion-picker-column.entry.js": [
		3110,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-picker-column_entry_js"
		]
	],
	"./ion-picker.entry.js": [
		5575,
		[
			"node_modules_ionic_core_dist_esm_ion-picker_entry_js"
		]
	],
	"./ion-popover.entry.js": [
		6772,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
		]
	],
	"./ion-progress-bar.entry.js": [
		4810,
		[
			"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
		]
	],
	"./ion-radio_2.entry.js": [
		4639,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
		]
	],
	"./ion-range.entry.js": [
		628,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-range_entry_js"
		]
	],
	"./ion-refresher_2.entry.js": [
		852,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
		]
	],
	"./ion-reorder_2.entry.js": [
		1479,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
		]
	],
	"./ion-ripple-effect.entry.js": [
		4065,
		[
			"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
		]
	],
	"./ion-route_4.entry.js": [
		7971,
		[
			"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
		]
	],
	"./ion-searchbar.entry.js": [
		3184,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
		]
	],
	"./ion-segment-content.entry.js": [
		4312,
		[
			"node_modules_ionic_core_dist_esm_ion-segment-content_entry_js"
		]
	],
	"./ion-segment-view.entry.js": [
		4540,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-segment-view_entry_js"
		]
	],
	"./ion-segment_2.entry.js": [
		469,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
		]
	],
	"./ion-select-modal.entry.js": [
		7101,
		[
			"node_modules_ionic_core_dist_esm_ion-select-modal_entry_js"
		]
	],
	"./ion-select_3.entry.js": [
		8471,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
		]
	],
	"./ion-spinner.entry.js": [
		388,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
		]
	],
	"./ion-split-pane.entry.js": [
		2392,
		[
			"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
		]
	],
	"./ion-tab-bar_2.entry.js": [
		6059,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
		]
	],
	"./ion-tab_2.entry.js": [
		5427,
		[
			"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
		]
	],
	"./ion-text.entry.js": [
		198,
		[
			"node_modules_ionic_core_dist_esm_ion-text_entry_js"
		]
	],
	"./ion-textarea.entry.js": [
		1735,
		[
			"default-node_modules_ionic_core_dist_esm_input_utils-Bxa_DQ7-_js-node_modules_ionic_core_dist-66891c",
			"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
		]
	],
	"./ion-toast.entry.js": [
		7510,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
		]
	],
	"./ion-toggle.entry.js": [
		5297,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
		]
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids[1].map(__webpack_require__.e)).then(() => (__webpack_require__(id)));
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 6120;
module.exports = webpackAsyncContext;

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map