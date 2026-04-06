"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_calidades_clasificacion-tallas-form_clasificacion-tallas-form_module_ts"],{

/***/ 3166
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/calidades/clasificacion-tallas-form/clasificacion-tallas-form-routing.module.ts ***!
  \*******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClasificacionTallasFormPageRoutingModule: () => (/* binding */ ClasificacionTallasFormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _clasificacion_tallas_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clasificacion-tallas-form.page */ 5840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _clasificacion_tallas_form_page__WEBPACK_IMPORTED_MODULE_1__.ClasificacionTallasFormPage
}];
class ClasificacionTallasFormPageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function ClasificacionTallasFormPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ClasificacionTallasFormPageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ClasificacionTallasFormPageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ClasificacionTallasFormPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 1671
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/calidades/clasificacion-tallas-form/clasificacion-tallas-form.module.ts ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClasificacionTallasFormPageModule: () => (/* binding */ ClasificacionTallasFormPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _clasificacion_tallas_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clasificacion-tallas-form-routing.module */ 3166);
/* harmony import */ var _clasificacion_tallas_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clasificacion-tallas-form.page */ 5840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






class ClasificacionTallasFormPageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function ClasificacionTallasFormPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ClasificacionTallasFormPageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: ClasificacionTallasFormPageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _clasificacion_tallas_form_routing_module__WEBPACK_IMPORTED_MODULE_3__.ClasificacionTallasFormPageRoutingModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ClasificacionTallasFormPageModule, {
    declarations: [_clasificacion_tallas_form_page__WEBPACK_IMPORTED_MODULE_4__.ClasificacionTallasFormPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _clasificacion_tallas_form_routing_module__WEBPACK_IMPORTED_MODULE_3__.ClasificacionTallasFormPageRoutingModule]
  });
})();

/***/ },

/***/ 5840
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/calidades/clasificacion-tallas-form/clasificacion-tallas-form.page.ts ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClasificacionTallasFormPage: () => (/* binding */ ClasificacionTallasFormPage)
/* harmony export */ });
/* harmony import */ var _Users_carloslopez_Downloads_ProgramacionWEBI_Trazapp_TrazApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var src_app_services_clasificacion_tallas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/clasificacion-tallas.service */ 2159);
/* harmony import */ var src_app_services_trazabilidad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/trazabilidad.service */ 6025);
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cliente.service */ 4384);
/* harmony import */ var src_app_services_finca_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/finca.service */ 2775);
/* harmony import */ var src_app_services_laguna_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/laguna.service */ 1684);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/usuario.service */ 8570);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 4456);

var _staticBlock;











function ClasificacionTallasFormPage_ion_select_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-select-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", r_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](r_r1.loteInterno);
  }
}
function ClasificacionTallasFormPage_ion_item_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 23)(1, "ion-label", 24)(2, "p")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Cliente:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p")(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Finca:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p")(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Laguna:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.nombreCliente);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.nombreFinca);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.nombreLaguna);
  }
}
function ClasificacionTallasFormPage_div_47_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32)(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ClasificacionTallasFormPage_div_47_div_11_Template_ion_input_ngModelChange_3_listener($event) {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](item_r4.cantidad, $event) || (item_r4.cantidad = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("tiene-datos", item_r4.cantidad > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r4.peso, " gr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", item_r4.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.soloLectura);
  }
}
function ClasificacionTallasFormPage_div_47_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 35);
  }
}
function ClasificacionTallasFormPage_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 25)(2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Subtotal: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ClasificacionTallasFormPage_div_47_div_11_Template, 4, 5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ClasificacionTallasFormPage_div_47_div_12_Template, 1, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const grupo_r5 = ctx.$implicit;
    const last_r6 = ctx.last;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Talla ", grupo_r5.rango);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.subtotal(grupo_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.pctGrupo(grupo_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", grupo_r5.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !last_r6);
  }
}
function ClasificacionTallasFormPage_ion_select_option_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-select-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", u_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](u_r7.nombre);
  }
}
function ClasificacionTallasFormPage_ion_button_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClasificacionTallasFormPage_ion_button_80_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.guardar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const GRUPOS_DEF = [{
  rango: '10-20',
  pesos: [104, 90, 76, 64, 51]
}, {
  rango: '20-30',
  pesos: [50, 44, 38, 34]
}, {
  rango: '30-40',
  pesos: [33, 32, 31, 30, 29, 28, 27, 26]
}, {
  rango: '40-50',
  pesos: [25, 24, 23, 22, 21, 20]
}, {
  rango: '50-60',
  pesos: [20, 19, 18, 17]
}, {
  rango: '60-70',
  pesos: [16, 15, 14]
}, {
  rango: '70-80',
  pesos: [13, 12, 11]
}, {
  rango: '80-100',
  pesos: [10, 9, 8]
}];
class ClasificacionTallasFormPage {
  // ── Getters calculados ──────────────────────────────────────────
  subtotal(g) {
    return g.items.reduce((a, i) => a + (i.cantidad || 0), 0);
  }
  pctGrupo(g) {
    if (!this.clasif.pesoMuestra || this.clasif.pesoMuestra === 0) return '';
    const pct = this.subtotal(g) / this.clasif.pesoMuestra * 100;
    return pct > 0 ? '(' + pct.toFixed(1) + '%)' : '';
  }
  get totalCamarones() {
    return this.grupos.reduce((a, g) => a + this.subtotal(g), 0);
  }
  get tallaDominanteCalc() {
    let maxSub = 0,
      rango = '—';
    this.grupos.forEach(g => {
      const s = this.subtotal(g);
      if (s > maxSub) {
        maxSub = s;
        rango = g.rango;
      }
    });
    return maxSub > 0 ? rango : '—';
  }
  get coberturaCalc() {
    if (!this.clasif.pesoMuestra || this.clasif.pesoMuestra === 0) return '—';
    return (this.totalCamarones / this.clasif.pesoMuestra * 100).toFixed(1) + '%';
  }
  constructor(route, svc, trazSvc, clienteSvc, fincaSvc, lagunaSvc, usuarioSvc, nav, toast, alert) {
    this.route = route;
    this.svc = svc;
    this.trazSvc = trazSvc;
    this.clienteSvc = clienteSvc;
    this.fincaSvc = fincaSvc;
    this.lagunaSvc = lagunaSvc;
    this.usuarioSvc = usuarioSvc;
    this.nav = nav;
    this.toast = toast;
    this.alert = alert;
    this.soloLectura = false;
    this.recepciones = [];
    this.clientes = [];
    this.fincas = [];
    this.lagunas = [];
    this.usuarios = [];
    this.nombreCliente = '';
    this.nombreFinca = '';
    this.nombreLaguna = '';
    this.grupos = GRUPOS_DEF.map(g => ({
      rango: g.rango,
      items: g.pesos.map(p => ({
        peso: p,
        cantidad: 0
      }))
    }));
    this.clasif = {
      fecha: new Date().toISOString().slice(0, 10),
      turno: 'A',
      tipo: 'proceso',
      idRecepcion: 0,
      loteInterno: '',
      idCliente: 0,
      idFinca: 0,
      idLaguna: 0,
      pesoMuestra: 0,
      tallaDominante: '',
      idUsuarioRealiza: 0
    };
  }
  ngOnInit() {
    this.trazSvc.getAllRecepciones().subscribe(r => this.recepciones = r);
    this.clienteSvc.getAll().subscribe(d => this.clientes = d);
    this.fincaSvc.getAll().subscribe(d => this.fincas = d);
    this.lagunaSvc.getAll().subscribe(d => this.lagunas = d);
    this.usuarioSvc.getAll().subscribe(d => this.usuarios = d);
    this.soloLectura = this.route.snapshot.queryParamMap.get('modo') === 'ver';
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = idParam;
      this.svc.getById(this.id).subscribe(c => {
        this.clasif = c;
        this.actualizarNombres();
      });
      this.svc.getDetalleByClasif(this.id).subscribe(det => {
        det.forEach(d => {
          const grupo = this.grupos.find(g => g.rango === d.rangoTalla);
          if (grupo) {
            const item = grupo.items.find(i => i.peso === d.pesoGramos);
            if (item) item.cantidad = d.cantidad;
          }
        });
      });
    }
  }
  onLoteChange() {
    const rec = this.recepciones.find(r => String(r.id) === String(this.clasif.idRecepcion));
    if (!rec) return;
    this.clasif.loteInterno = rec.loteInterno;
    this.clasif.idCliente = rec.idCliente;
    this.clasif.idFinca = rec.idFinca;
    this.clasif.idLaguna = rec.idLaguna;
    this.actualizarNombres();
  }
  actualizarNombres() {
    this.nombreCliente = this.clientes.find(x => String(x.id) === String(this.clasif.idCliente))?.nombre || '';
    this.nombreFinca = this.fincas.find(x => String(x.id) === String(this.clasif.idFinca))?.nombre || '';
    this.nombreLaguna = this.lagunas.find(x => String(x.id) === String(this.clasif.idLaguna))?.nombre || '';
  }
  guardar() {
    var _this = this;
    return (0,_Users_carloslopez_Downloads_ProgramacionWEBI_Trazapp_TrazApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.clasif.idRecepcion) {
        (yield _this.toast.create({
          message: 'Selecciona un lote de recepción.',
          duration: 3000,
          position: 'top',
          color: 'warning'
        })).present();
        return;
      }
      if (!_this.clasif.idUsuarioRealiza) {
        (yield _this.toast.create({
          message: 'Selecciona quién realizó la clasificación.',
          duration: 3000,
          position: 'top',
          color: 'warning'
        })).present();
        return;
      }
      // Actualizar talla dominante antes de guardar
      _this.clasif.tallaDominante = _this.tallaDominanteCalc;
      const a = yield _this.alert.create({
        header: 'Confirmar',
        message: '¿Deseas guardar esta clasificación?',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Guardar',
          handler: () => {
            if (_this.id) {
              _this.svc.update(_this.id, _this.clasif).subscribe(() => _this.nav.back());
            } else {
              _this.svc.create(_this.clasif).subscribe(/*#__PURE__*/function () {
                var _ref = (0,_Users_carloslopez_Downloads_ProgramacionWEBI_Trazapp_TrazApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (creada) {
                  const filas = _this.grupos.reduce((acc, g) => {
                    const items = g.items.map(i => ({
                      idClasif: creada.id,
                      rangoTalla: g.rango,
                      pesoGramos: i.peso,
                      cantidad: i.cantidad || 0,
                      porcentaje: _this.totalCamarones > 0 ? parseFloat((i.cantidad / _this.totalCamarones * 100).toFixed(1)) : 0
                    }));
                    return acc.concat(items);
                  }, []);
                  for (const fila of filas) {
                    yield _this.svc.createDetalle(fila).toPromise();
                  }
                  _this.nav.navigateRoot('/calidades');
                });
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());
            }
          }
        }]
      });
      yield a.present();
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ClasificacionTallasFormPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ClasificacionTallasFormPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_clasificacion_tallas_service__WEBPACK_IMPORTED_MODULE_4__.ClasificacionTallasService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_trazabilidad_service__WEBPACK_IMPORTED_MODULE_5__.TrazabilidadService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_6__.ClienteService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_finca_service__WEBPACK_IMPORTED_MODULE_7__.FincaService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_laguna_service__WEBPACK_IMPORTED_MODULE_8__.LagunaService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_9__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ClasificacionTallasFormPage,
    selectors: [["app-clasificacion-tallas-form"]],
    standalone: false,
    decls: 81,
    vars: 21,
    consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "/calidades"], [1, "ion-padding"], ["position", "stacked"], ["type", "date", 3, "ngModelChange", "ngModel", "disabled"], [3, "ngModelChange", "ngModel", "disabled"], ["value", "A"], ["value", "B"], ["value", "proceso"], ["value", "proxco"], ["placeholder", "Seleccionar lote", 3, "ngModelChange", "ionChange", "ngModel", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], ["lines", "none", 4, "ngIf"], ["type", "number", "inputmode", "decimal", 3, "ngModelChange", "ngModel", "disabled"], [4, "ngFor", "ngForOf"], ["size", "4"], [1, "resumen-item"], [1, "resumen-val"], [1, "resumen-lbl"], ["placeholder", "Seleccionar", 3, "ngModelChange", "ngModel", "disabled"], ["expand", "block", "color", "primary", 3, "click", 4, "ngIf"], [3, "value"], ["lines", "none"], ["color", "medium"], [1, "grupo-header"], [1, "grupo-badge"], [1, "grupo-subtotal"], [1, "grupo-pct"], [1, "pesos-grid"], ["class", "peso-item", 3, "tiene-datos", 4, "ngFor", "ngForOf"], ["class", "grupo-separador", 4, "ngIf"], [1, "peso-item"], [1, "peso-label"], ["type", "number", "min", "0", "inputmode", "numeric", 1, "peso-input", 3, "ngModelChange", "ngModel", "disabled"], [1, "grupo-separador"], ["expand", "block", "color", "primary", 3, "click"], ["name", "save-outline", "slot", "start"]],
    template: function ClasificacionTallasFormPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 3)(7, "ion-card")(8, "ion-card-header")(9, "ion-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Datos Generales");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-card-content")(12, "ion-item")(13, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ClasificacionTallasFormPage_Template_ion_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.clasif.fecha, $event) || (ctx.clasif.fecha = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-item")(17, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Turno");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ClasificacionTallasFormPage_Template_ion_select_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.clasif.turno, $event) || (ctx.clasif.turno = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-select-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-select-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-item")(25, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Proceso");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ClasificacionTallasFormPage_Template_ion_select_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.clasif.tipo, $event) || (ctx.clasif.tipo = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ion-select-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Proceso");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-select-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Proxco");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ion-item")(33, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Lote");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ClasificacionTallasFormPage_Template_ion_select_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.clasif.idRecepcion, $event) || (ctx.clasif.idRecepcion = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function ClasificacionTallasFormPage_Template_ion_select_ionChange_35_listener() {
          return ctx.onLoteChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, ClasificacionTallasFormPage_ion_select_option_36_Template, 2, 2, "ion-select-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, ClasificacionTallasFormPage_ion_item_37_Template, 14, 3, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-item")(39, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Peso Muestra (g)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "ion-input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ClasificacionTallasFormPage_Template_ion_input_ngModelChange_41_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.clasif.pesoMuestra, $event) || (ctx.clasif.pesoMuestra = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-card")(43, "ion-card-header")(44, "ion-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Conteo por Gramaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, ClasificacionTallasFormPage_div_47_Template, 13, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "ion-card")(49, "ion-card-header")(50, "ion-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Resumen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "ion-card-content")(53, "ion-grid")(54, "ion-row")(55, "ion-col", 16)(56, "div", 17)(57, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Total camarones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "ion-col", 16)(62, "div", 17)(63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Talla dominante");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "ion-col", 16)(68, "div", 17)(69, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Cobertura");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "ion-card")(74, "ion-card-content")(75, "ion-item")(76, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Realizado por");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "ion-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ClasificacionTallasFormPage_Template_ion_select_ngModelChange_78_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.clasif.idUsuarioRealiza, $event) || (ctx.clasif.idUsuarioRealiza = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](79, ClasificacionTallasFormPage_ion_select_option_79_Template, 2, 2, "ion-select-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](80, ClasificacionTallasFormPage_ion_button_80_Template, 3, 0, "ion-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.soloLectura ? "Ver" : ctx.id ? "Editar" : "Nueva", " Clasificaci\u00F3n Tallas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.clasif.fecha);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.soloLectura);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.clasif.turno);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.soloLectura);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.clasif.tipo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.soloLectura);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.clasif.idRecepcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.soloLectura);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.recepciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nombreCliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.clasif.pesoMuestra);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.soloLectura);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.grupos);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.totalCamarones);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.tallaDominanteCalc);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.coberturaCalc);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.clasif.idUsuarioRealiza);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.soloLectura);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.usuarios);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.soloLectura);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonMinValidator],
    styles: [".grupo-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n\n.grupo-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: #e8f5ee;\n  color: #0f6e56;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 4px 12px;\n  border-radius: 8px;\n  border: 0.5px solid #9fe1cb;\n}\n\n.grupo-subtotal[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n}\n\n.grupo-pct[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-size: 12px;\n  color: var(--ion-color-success);\n}\n\n.pesos-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n\n.peso-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  background: var(--ion-color-light);\n  border: 0.5px solid var(--ion-color-light-shade);\n  border-radius: 8px;\n  padding: 8px 6px;\n  min-width: 66px;\n  flex: 1 1 66px;\n  max-width: 90px;\n}\n.peso-item.tiene-datos[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-success);\n  background: #e8f5ee;\n}\n\n.peso-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  white-space: nowrap;\n}\n\n.peso-input[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  text-align: center;\n  font-size: 17px;\n  font-weight: 500;\n  width: 100%;\n  max-width: 64px;\n  border: 0.5px solid var(--ion-color-light-shade);\n  border-radius: 6px;\n  background: white;\n}\n\n.grupo-separador[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--ion-color-light-shade);\n  margin: 14px 0;\n}\n\n.resumen-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px 4px;\n  background: var(--ion-color-light);\n  border-radius: 8px;\n}\n\n.resumen-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  color: var(--ion-color-success-shade);\n}\n\n.resumen-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--ion-color-medium);\n  margin-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2FsaWRhZGVzL2NsYXNpZmljYWNpb24tdGFsbGFzLWZvcm0vY2xhc2lmaWNhY2lvbi10YWxsYXMtZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0NBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0Usc0NBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdBO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFBRiIsInNvdXJjZXNDb250ZW50IjpbIi5ncnVwby1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmdydXBvLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNlOGY1ZWU7XG4gIGNvbG9yOiAjMGY2ZTU2O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgIzlmZTFjYjtcbn1cblxuLmdydXBvLXN1YnRvdGFsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5cbi5ncnVwby1wY3Qge1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5wZXNvcy1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4ucGVzby1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiA4cHggNnB4O1xuICBtaW4td2lkdGg6IDY2cHg7XG4gIGZsZXg6IDEgMSA2NnB4O1xuICBtYXgtd2lkdGg6IDkwcHg7XG5cbiAgJi50aWVuZS1kYXRvcyB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgYmFja2dyb3VuZDogI2U4ZjVlZTtcbiAgfVxufVxuXG4ucGVzby1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucGVzby1pbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDY0cHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmdydXBvLXNlcGFyYWRvciB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBtYXJnaW46IDE0cHggMDtcbn1cblxuLnJlc3VtZW4taXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCA0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnJlc3VtZW4tdmFsIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xufVxuXG4ucmVzdW1lbi1sYmwge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_calidades_clasificacion-tallas-form_clasificacion-tallas-form_module_ts.js.map