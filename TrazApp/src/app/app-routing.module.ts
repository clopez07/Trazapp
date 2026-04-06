import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  // Recepciones
  {
    path: 'recepciones',
    loadChildren: () => import('./pages/recepciones/recepciones-lista/recepciones-lista.module').then(m => m.RecepcionesListaPageModule)
  },
  {
    path: 'recepciones/:id',
    loadChildren: () => import('./pages/recepciones/recepcion-detalle/recepcion-detalle.module').then(m => m.RecepcionDetallePageModule)
  },
  {
    path: 'recepcion-form',
    loadChildren: () => import('./pages/recepciones/recepcion-form/recepcion-form.module').then(m => m.RecepcionFormPageModule)
  },
  {
    path: 'recepcion-form/:id',
    loadChildren: () => import('./pages/recepciones/recepcion-form/recepcion-form.module').then(m => m.RecepcionFormPageModule)
  },
  // Calidades
  {
    path: 'calidades',
    loadChildren: () => import('./pages/calidades/calidades-lista/calidades-lista.module').then(m => m.CalidadesListaPageModule)
  },
  {
    path: 'calidad-entero-form',
    loadChildren: () => import('./pages/calidades/calidad-entero-form/calidad-entero-form.module').then(m => m.CalidadEnteroFormPageModule)
  },
  {
    path: 'calidad-entero-form/:id',
    loadChildren: () => import('./pages/calidades/calidad-entero-form/calidad-entero-form.module').then(m => m.CalidadEnteroFormPageModule)
  },
  {
    path: 'clasificacion-tallas-form',
    loadChildren: () => import('./pages/calidades/clasificacion-tallas-form/clasificacion-tallas-form.module').then(m => m.ClasificacionTallasFormPageModule)
  },
  {
    path: 'clasificacion-tallas-form/:id',
    loadChildren: () => import('./pages/calidades/clasificacion-tallas-form/clasificacion-tallas-form.module').then(m => m.ClasificacionTallasFormPageModule)
  },
  {
    path: 'muestra-sabor-form',
    loadChildren: () => import('./pages/calidades/muestra-sabor-form/muestra-sabor-form.module').then(m => m.MuestraSaborFormPageModule)
  },
  {
    path: 'muestra-sabor-form/:id',
    loadChildren: () => import('./pages/calidades/muestra-sabor-form/muestra-sabor-form.module').then(m => m.MuestraSaborFormPageModule)
  },
  // Catálogos
  {
    path: 'catalogos',
    loadChildren: () => import('./pages/catalogos/catalogos-menu/catalogos-menu.module').then(m => m.CatalogosMenuPageModule)
  },
  {
    path: 'catalogos/clientes',
    loadChildren: () => import('./pages/catalogos/clientes/clientes.module').then(m => m.ClientesPageModule)
  },
  {
    path: 'catalogos/fincas',
    loadChildren: () => import('./pages/catalogos/fincas/fincas.module').then(m => m.FincasPageModule)
  },
  {
    path: 'catalogos/lagunas',
    loadChildren: () => import('./pages/catalogos/lagunas/lagunas.module').then(m => m.LagunasPageModule)
  },
  {
    path: 'catalogos/usuarios',
    loadChildren: () => import('./pages/catalogos/usuarios/usuarios.module').then(m => m.UsuariosPageModule)
  },
  // Admin
  {
    path: 'tipos-defecto',
    loadChildren: () => import('./pages/admin/tipos-defecto/tipos-defecto.module').then(m => m.TiposDefectoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
