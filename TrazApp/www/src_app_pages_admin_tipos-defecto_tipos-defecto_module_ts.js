"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_admin_tipos-defecto_tipos-defecto_module_ts"],{

/***/ 6135
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/tipos-defecto/tipos-defecto-routing.module.ts ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TiposDefectoPageRoutingModule: () => (/* binding */ TiposDefectoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _tipos_defecto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tipos-defecto.page */ 7545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _tipos_defecto_page__WEBPACK_IMPORTED_MODULE_1__.TiposDefectoPage
}];
class TiposDefectoPageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function TiposDefectoPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TiposDefectoPageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: TiposDefectoPageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TiposDefectoPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 1654
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/tipos-defecto/tipos-defecto.module.ts ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TiposDefectoPageModule: () => (/* binding */ TiposDefectoPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _tipos_defecto_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tipos-defecto-routing.module */ 6135);
/* harmony import */ var _tipos_defecto_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tipos-defecto.page */ 7545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






class TiposDefectoPageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function TiposDefectoPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TiposDefectoPageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: TiposDefectoPageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _tipos_defecto_routing_module__WEBPACK_IMPORTED_MODULE_3__.TiposDefectoPageRoutingModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TiposDefectoPageModule, {
    declarations: [_tipos_defecto_page__WEBPACK_IMPORTED_MODULE_4__.TiposDefectoPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _tipos_defecto_routing_module__WEBPACK_IMPORTED_MODULE_3__.TiposDefectoPageRoutingModule]
  });
})();

/***/ },

/***/ 7545
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/tipos-defecto/tipos-defecto.page.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TiposDefectoPage: () => (/* binding */ TiposDefectoPage)
/* harmony export */ });
/* harmony import */ var _Users_carloslopez_Downloads_ProgramacionWEBI_Trazapp_TrazApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_tipo_defecto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tipo-defecto.service */ 8627);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 3683);

var _staticBlock;




function TiposDefectoPage_ion_item_sliding_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item-sliding")(1, "ion-item")(2, "ion-label")(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-badge", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-item-options", 8)(10, "ion-item-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TiposDefectoPage_ion_item_sliding_13_Template_ion_item_option_click_10_listener() {
      const t_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.abrirForm(t_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-item-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TiposDefectoPage_ion_item_sliding_13_Template_ion_item_option_click_12_listener() {
      const t_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.toggleEstado(t_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r2.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", t_r2.estado === "activo" ? "success" : "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r2.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", t_r2.estado === "activo" ? "warning" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", t_r2.estado === "activo" ? "eye-off-outline" : "eye-outline");
  }
}
class TiposDefectoPage {
  constructor(svc, alert, toast) {
    this.svc = svc;
    this.alert = alert;
    this.toast = toast;
    this.tipos = [];
  }
  ngOnInit() {
    this.cargar();
  }
  cargar(event) {
    this.svc.getAll().subscribe(d => {
      this.tipos = d;
      event?.target?.complete();
    });
  }
  abrirForm(tipo) {
    var _this = this;
    return (0,_Users_carloslopez_Downloads_ProgramacionWEBI_Trazapp_TrazApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const esEditar = !!tipo;
      const a = yield _this.alert.create({
        header: esEditar ? 'Editar Tipo de Defecto' : 'Nuevo Tipo de Defecto',
        inputs: [{
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre',
          value: tipo?.nombre || ''
        }, {
          name: 'descripcion',
          type: 'text',
          placeholder: 'Descripción',
          value: tipo?.descripcion || ''
        }],
        buttons: [{
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Guardar',
          handler: data => {
            if (!data.nombre?.trim()) return false;
            if (esEditar) {
              _this.svc.update(tipo.id, {
                nombre: data.nombre,
                descripcion: data.descripcion
              }).subscribe(() => _this.cargar());
            } else {
              _this.svc.create({
                nombre: data.nombre,
                descripcion: data.descripcion,
                estado: 'activo'
              }).subscribe(() => _this.cargar());
            }
            return true;
          }
        }]
      });
      yield a.present();
    })();
  }
  toggleEstado(t) {
    var _this2 = this;
    return (0,_Users_carloslopez_Downloads_ProgramacionWEBI_Trazapp_TrazApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Si tiene registros asociados, solo se desactiva (no se elimina)
      const nuevoEstado = t.estado === 'activo' ? 'inactivo' : 'activo';
      _this2.svc.update(t.id, {
        estado: nuevoEstado
      }).subscribe(/*#__PURE__*/(0,_Users_carloslopez_Downloads_ProgramacionWEBI_Trazapp_TrazApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this2.cargar();
        (yield _this2.toast.create({
          message: `Tipo ${nuevoEstado === 'activo' ? 'activado' : 'desactivado'}.`,
          duration: 2000,
          position: 'top',
          color: 'success'
        })).present();
      }));
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function TiposDefectoPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TiposDefectoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_tipo_defecto_service__WEBPACK_IMPORTED_MODULE_3__.TipoDefectoService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TiposDefectoPage,
    selectors: [["app-tipos-defecto"]],
    standalone: false,
    decls: 14,
    vars: 1,
    consts: [["color", "primary"], ["slot", "start"], ["slot", "end"], [3, "click"], ["name", "add-circle-outline", "slot", "icon-only"], ["slot", "fixed", 3, "ionRefresh"], [4, "ngFor", "ngForOf"], ["slot", "end", 3, "color"], ["side", "end"], ["color", "primary", 3, "click"], ["name", "create-outline", "slot", "icon-only"], [3, "click", "color"], ["slot", "icon-only", 3, "name"]],
    template: function TiposDefectoPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Tipos de Defecto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-buttons", 2)(7, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TiposDefectoPage_Template_ion_button_click_7_listener() {
          return ctx.abrirForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-content")(10, "ion-refresher", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionRefresh", function TiposDefectoPage_Template_ion_refresher_ionRefresh_10_listener($event) {
          return ctx.cargar($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "ion-refresher-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TiposDefectoPage_ion_item_sliding_13_Template, 14, 6, "ion-item-sliding", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tipos);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItemOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItemOptions, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_admin_tipos-defecto_tipos-defecto_module_ts.js.map