# TrazApp — Estructura del proyecto
> Sistema de Trazabilidad y Control de Calidad en Recepción de Camarón
> Stack: Ionic + Angular + JSON Server
> Actualizado: 2026-04-04

---

## Índice
1. [Requisitos previos](#1-requisitos-previos)
2. [Crear el proyecto](#2-crear-el-proyecto)
3. [Instalar dependencias](#3-instalar-dependencias)
4. [Estructura de carpetas](#4-estructura-de-carpetas)
5. [Modelos](#5-modelos)
6. [Servicios](#6-servicios)
7. [Páginas](#7-páginas)
8. [Rutas](#8-rutas)
9. [Side Menu](#9-side-menu)
10. [db.json — tablas y campos](#10-dbjson--tablas-y-campos)
11. [Endpoints de la API](#11-endpoints-de-la-api)
12. [Plugins de Capacitor](#12-plugins-de-capacitor)
13. [Orden de desarrollo recomendado](#13-orden-de-desarrollo-recomendado)
14. [Comandos útiles](#14-comandos-útiles)

---

## 1. Requisitos previos

- Node.js v18 o superior
- npm v9 o superior
- Ionic CLI: `npm install -g @ionic/cli`
- JSON Server: `npm install -g json-server`
- Android Studio (para pruebas en dispositivo)

---

## 2. Crear el proyecto

```bash
ionic start TrazApp sidemenu --type=angular
cd TrazApp
ionic serve
```

---

## 3. Instalar dependencias

```bash
npm install @capacitor/geolocation
npm install @capacitor/camera
npm install @capacitor/filesystem
npx cap sync
```

---

## 4. Estructura de carpetas

```
TrazApp/
├── db.json                          ← JSON Server (raíz del proyecto)
└── src/
    └── app/
        ├── models/                  ← Interfaces TypeScript
        ├── services/                ← Consumo de API
        └── pages/                   ← Pantallas de la app
            ├── dashboard/
            ├── recepciones/
            │   ├── recepciones-lista/
            │   ├── recepcion-detalle/
            │   └── recepcion-form/
            ├── calidades/
            │   ├── calidades-lista/
            │   ├── calidad-entero-form/
            │   ├── clasificacion-tallas-form/
            │   └── muestra-sabor-form/
            ├── catalogos/
            │   ├── catalogos-menu/
            │   ├── clientes/
            │   ├── fincas/
            │   ├── lagunas/
            │   └── usuarios/
            └── admin/
                └── tipos-defecto/
```

---

## 5. Modelos

Un archivo por cada tabla. Todos van en `src/app/models/`.

| Archivo | Tabla que representa |
|---|---|
| `cliente.model.ts` | clientes |
| `finca.model.ts` | fincas |
| `laguna.model.ts` | lagunas |
| `usuario.model.ts` | usuarios |
| `tipo-defecto.model.ts` | tipos_defecto |
| `trazabilidad-recepcion.model.ts` | trazabilidad_recepcion |
| `detalle-bin.model.ts` | detalle_bins |
| `calidad-entero.model.ts` | calidad_entero |
| `detalle-calidad.model.ts` | detalle_calidad |
| `clasificacion-tallas.model.ts` | clasificacion_tallas |
| `detalle-talla.model.ts` | detalle_tallas |
| `muestra-sabor.model.ts` | muestras_sabor |
| `detalle-sabor.model.ts` | detalle_sabor |
| `foto.model.ts` | fotos |

---

## 6. Servicios

Un archivo por cada entidad principal. Todos van en `src/app/services/`.  
Cada servicio usa `HttpClient` para consumir la API de JSON Server.

| Archivo | Tablas que consume |
|---|---|
| `cliente.service.ts` | clientes |
| `finca.service.ts` | fincas |
| `laguna.service.ts` | lagunas |
| `usuario.service.ts` | usuarios |
| `tipo-defecto.service.ts` | tipos_defecto |
| `trazabilidad.service.ts` | trazabilidad_recepcion + detalle_bins |
| `calidad-entero.service.ts` | calidad_entero + detalle_calidad |
| `clasificacion-tallas.service.ts` | clasificacion_tallas + detalle_tallas |
| `muestra-sabor.service.ts` | muestras_sabor + detalle_sabor |
| `foto.service.ts` | fotos |

---

## 7. Páginas

### Dashboard
- Resumen del día: total de bins recibidos, evaluaciones realizadas, muestras de sabor
- Accesos rápidos a cada módulo

---

### Recepciones — Lista
- Lista de recepciones con ion-card
- Buscador por número de bin o cliente
- Filtros: turno (A/B) y estado
- Sección superior: recepciones activas
- Sección inferior: recepciones inactivas
- Botón FAB para nueva recepción

### Recepciones — Detalle
- Encabezado del registro (fecha, turno, inspector, verificador)
- Tabla de bins asociados con todas sus columnas
- Coordenadas GPS del punto de recepción
- Fotos del lote
- Botones: editar, agregar bin, eliminar

### Recepciones — Formulario (insertar y editar)
- Campos del encabezado: fecha, turno, inspector, verificador, observaciones
- Captura automática de GPS al abrir el formulario
- Captura de foto (cámara o galería)
- Lista de bins agregados con botón para agregar más
- Cada bin tiene: número de bin, libras, cliente, finca, laguna, remisión SAG, fechas y horas

---

### Calidades — Lista (`/calidades`)
- Menú principal con 3 opciones: Calidad Camarón Entero, Clasificación de Tallas, Muestras de Sabor.
- Al seleccionar un tipo se muestra su lista con botón **+** en el header para crear nuevo registro.
- Cada ítem de la lista muestra:
  - Badge **Verificado** (verde) o **Pendiente** (amarillo).
  - Botón pequeño **Verificar** debajo del badge cuando el registro está pendiente.
    - Usa `$event.stopPropagation()` para no disparar la navegación del `ion-item`.
    - Abre `AlertController` con lista de radio de usuarios → ejecuta PATCH `{ verificado: true, idUsuarioVerifica }`.
  - Deslizar a la izquierda → opción **Editar** (navega al formulario sin `?modo=ver`).
  - Tap en el ítem → navega al formulario con `?modo=ver` (solo lectura).
- Funciones de verificación por tipo: `verificar(c)` · `verificarTallas(c)` · `verificarSabor(s)`.

### Calidad Entero — Formulario (`/calidad-entero-form/:id`)
- Encabezado: fecha, turno, tipo (proceso/proxco).
- Lote: selector de recepción (loteInterno); autocompleta cliente / finca / laguna.
- Peso muestra (g).
- Tabla de defectos: un input por cada `TipoDefecto` activo + nítidos (cargados dinámicamente).
- Totales calculados automáticamente: suma defectos, suma nítidos, total muestra.
- Observación, corrección, supervisor.
- Realizado por (selector de usuario).
- Botón **Verificar** visible en modo `soloLectura && !calidad.verificado`: abre AlertController con radio de usuarios → llama `svc.update(id, { verificado: true, idUsuarioVerifica })`.
- Botón **Guardar** visible en modo edición: registra encabezado en `calidad_entero` y una fila por defecto en `detalle_calidad`.

### Clasificación de Tallas — Formulario (`/clasificacion-tallas-form/:id`)
- Encabezado: fecha, turno, proceso (proceso/proxco).
- Lote: selector de recepción; autocompleta cliente / finca / laguna.
- Peso muestra (g).
- Grilla de conteo por gramaje: 8 rangos de talla (10–20, 20–30, 30–40, 40–50, 50–60, 60–70, 70–80, 80–100), cada rango con múltiples pesos en gramos.
  - Cada celda muestra etiqueta de peso + input de cantidad.
  - Subtotal y porcentaje por grupo calculados automáticamente.
- Resumen: total camarones, talla dominante (auto-calculado), cobertura.
- Realizado por (selector de usuario).
- Botón **Verificar** visible en `soloLectura && !clasif.verificado`: mismo patrón AlertController.
- Botón **Guardar** visible en modo edición: registra encabezado en `clasificacion_tallas` y filas en `detalle_tallas`.

### Muestra de Sabor — Formulario (`/muestra-sabor-form/:id`)
Página única con scroll continuo (se eliminó el wizard de 3 pasos).

Secciones apiladas (cards):
1. **Encabezado** — fecha, turno, tipo (proceso / proxcos).
2. **Panelistas** *(solo en modo edición)* — checkboxes; `togglePanelista(id, checked)` agrega/elimina calificaciones en todos los códigos de forma reactiva.
3. **Códigos de Lote** (máx. 6) — por cada código:
   - Input código (ej: `L-001`).
   - Selector cliente → carga fincas del cliente.
   - Selector finca → carga lagunas de la finca.
   - Selector laguna.
   - Sección inline **Calificaciones**: una fila por panelista (nombre + input 0–10).
   - Fila de **Promedio** + badge de estado: Aprobado (≥9) / Revisar (≥7) / Rechazado (<7).
   - Botón **Agregar Código** (deshabilitado si `codigos.length >= 6`).
4. **Observaciones** — textarea.
5. **Realizado por** — selector de usuario.
6. Botón **Verificar** visible en `soloLectura && !muestra.verificado`: mismo patrón AlertController.
7. Botón **Guardar** visible en modo edición: crea cabecera en `muestras_sabor` y un `DetalleSabor` por cada par (código × panelista).

Interface interna:
```typescript
interface CodigoLote {
  codigo: string;
  idCliente: number; idFinca: number; idLaguna: number;
  fincas: Finca[]; lagunas: Laguna[];
  calificaciones: { idPanelista: string | number; nota: number }[];
  promedio: number;
}
```

---

### Tipos de Defecto — Admin
- Lista de todos los tipos (activos e inactivos) con badge de estado
- Crear nuevo tipo: nombre, descripción
- Editar nombre y descripción
- Activar / desactivar (si tiene registros asociados, solo se desactiva; no se elimina)
- Solo los tipos activos aparecen en el formulario de calidad entero

---

### Catálogos — Menú
- Menú con acceso a: Clientes, Fincas, Lagunas, Usuarios
- Cada sub-página tiene: lista + agregar + editar + eliminar con confirmación

---

## 8. Rutas

| Ruta | Página |
|---|---|
| `/dashboard` | Dashboard |
| `/recepciones` | Recepciones — Lista |
| `/recepciones/:id` | Recepciones — Detalle |
| `/recepcion-form` | Formulario nueva recepción |
| `/recepcion-form/:id` | Formulario editar recepción |
| `/calidades` | Calidades — Lista |
| `/calidad-entero-form` | Formulario nueva calidad entero |
| `/calidad-entero-form/:id` | Formulario editar calidad entero |
| `/clasificacion-tallas-form` | Formulario nueva clasificación |
| `/clasificacion-tallas-form/:id` | Formulario editar clasificación |
| `/muestra-sabor-form` | Formulario nueva muestra de sabor |
| `/muestra-sabor-form/:id` | Formulario editar muestra de sabor |
| `/catalogos` | Catálogos — Menú |
| `/catalogos/clientes` | Gestión de clientes |
| `/catalogos/fincas` | Gestión de fincas |
| `/catalogos/lagunas` | Gestión de lagunas |
| `/catalogos/usuarios` | Gestión de usuarios |
| `/tipos-defecto` | Admin — Tipos de defecto |

> **Modo lectura:** añadir `?modo=ver` al navegar a cualquier formulario activa `soloLectura = true` (inputs deshabilitados, botón Verificar visible si el registro está pendiente).

---

## 9. Side Menu

Opciones del menú lateral:

| Ícono sugerido | Etiqueta | Ruta |
|---|---|---|
| `grid-outline` | Dashboard | `/dashboard` |
| `boat-outline` | Recepciones | `/recepciones` |
| `flask-outline` | Calidades | `/calidades` |
| `list-outline` | Catálogos | `/catalogos` |
| `settings-outline` | Admin — Tipos de defecto | `/tipos-defecto` |

---

## 10. db.json — tablas y campos

### clientes
| Campo | Tipo |
|---|---|
| id | number |
| nombre | string |
| estado | activo / inactivo |

### fincas
| Campo | Tipo |
|---|---|
| id | number |
| nombre | string |
| idCliente | number (FK) |
| estado | activo / inactivo |

### lagunas
| Campo | Tipo |
|---|---|
| id | number |
| nombre | string |
| idFinca | number (FK) |
| estado | activo / inactivo |

### usuarios
| Campo | Tipo |
|---|---|
| id | number |
| nombre | string |
| rol | admin / inspector / verificador / panelista |
| correo | string |
| telefono | string |
| estado | activo / inactivo |

### tipos_defecto
| Campo | Tipo |
|---|---|
| id | number |
| nombre | string |
| descripcion | string |
| estado | activo / inactivo |

Datos iniciales (20 tipos del formulario STB/ACC/R001):
Mudado, Concha Suave, Flácido, Melanosis, Necrosis Leve, Necrosis Moderada, Arena, Quebrado, Pálido, Camarón Rojo, Deshidratado, Algas en Pleópodos, Algas en Pleuras, Cabeza Roja, Cabeza Naranja, Cabeza Caída, Cabeza Reventada, Branquias Oscuras, Branquias Sucias, Descabezado.

### trazabilidad_recepcion
| Campo | Tipo |
|---|---|
| id | number |
| fecha | string (YYYY-MM-DD) |
| turno | A / B |
| idUsuarioRealiza | number (FK usuarios) |
| idUsuarioVerifica | number (FK usuarios) |
| observaciones | string |
| correcciones | string |
| estado | activo / inactivo |

### detalle_bins
| Campo | Tipo |
|---|---|
| id | number |
| idRecepcion | number (FK trazabilidad_recepcion) |
| numeroBin | string |
| cantidadLibras | number |
| idCliente | number (FK) |
| idFinca | number (FK) |
| idLaguna | number (FK) |
| remisionSAG | string |
| fechaCosecha | string |
| horaCosecha | string |
| fechaRecibido | string |
| horaRecibido | string |
| horaInicioProceso | string |

### calidad_entero
| Campo | Tipo |
|---|---|
| id | number |
| fecha | string (YYYY-MM-DD) |
| turno | A / B |
| tipo | proceso / proxco |
| idRecepcion | number (FK trazabilidad_recepcion) |
| loteInterno | string (desnormalizado) |
| idCliente | number (FK) |
| idFinca | number (FK) |
| idLaguna | number (FK) |
| gramos | number |
| observacion | string |
| correccion | string |
| supervisor | string |
| idUsuarioRealiza | number (FK usuarios) |
| verificado | boolean |
| idUsuarioVerifica | number (FK usuarios) |

### detalle_calidad
| Campo | Tipo |
|---|---|
| id | number |
| idCalidad | number (FK calidad_entero) |
| idTipoDefecto | number (FK tipos_defecto) |
| cantidad | number |
| esNitido | boolean |

### clasificacion_tallas
| Campo | Tipo |
|---|---|
| id | number |
| fecha | string (YYYY-MM-DD) |
| turno | A / B |
| tipo | proceso / proxco |
| idRecepcion | number (FK trazabilidad_recepcion) |
| loteInterno | string (desnormalizado) |
| idCliente | number (FK) |
| idFinca | number (FK) |
| idLaguna | number (FK) |
| pesoMuestra | number |
| tallaDominante | string (auto-calculado) |
| idUsuarioRealiza | number (FK) |
| verificado | boolean |
| idUsuarioVerifica | number (FK) |

### detalle_tallas
| Campo | Tipo |
|---|---|
| id | number |
| idClasif | number (FK clasificacion_tallas) |
| rangoTalla | string |
| pesoGramos | number |
| cantidad | number |
| porcentaje | number |

### muestras_sabor
| Campo | Tipo |
|---|---|
| id | number |
| fecha | string (YYYY-MM-DD) |
| tipo | proceso / proxcos |
| turno | A / B |
| idUsuarioRealiza | number (FK usuarios) |
| observaciones | string |
| verificado | boolean |
| idUsuarioVerifica | number (FK usuarios) |

### detalle_sabor
| Campo | Tipo |
|---|---|
| id | number |
| idMuestra | number (FK muestras_sabor) |
| codigo | string |
| idCliente | number (FK) |
| idFinca | number (FK) |
| idLaguna | number (FK) |
| idPanelista | number (FK usuarios) |
| calificacion | number (0–10) |
| totalRespuestas | number |

### fotos
| Campo | Tipo |
|---|---|
| id | number |
| idRegistro | number |
| tipoRegistro | recepcion / calidad / tallas / sabor |
| pathLocal | string |
| nombreArchivo | string |
| latitud | number |
| longitud | number |
| fechaFoto | string (ISO) |

---

## 11. Endpoints de la API

Correr JSON Server:
```bash
json-server --watch db.json --port 3000
```

URL base: `http://localhost:3000`
> En dispositivo físico usar la IP de la PC. Ejemplo: `http://192.168.1.100:3000`

| Método | Endpoint | Descripción |
|---|---|---|
| GET | /clientes | Listar clientes |
| GET | /fincas?idCliente=X | Fincas por cliente |
| GET | /lagunas?idFinca=X | Lagunas por finca |
| GET | /usuarios | Listar usuarios |
| GET | /usuarios?rol=panelista | Panelistas activos |
| GET | /tipos_defecto?estado=activo | Tipos de defecto activos |
| POST | /tipos_defecto | Crear tipo de defecto |
| PATCH | /tipos_defecto/:id | Editar / desactivar tipo |
| GET | /trazabilidad_recepcion | Listar recepciones |
| GET | /trazabilidad_recepcion/:id | Recepción por ID |
| POST | /trazabilidad_recepcion | Nueva recepción |
| PATCH | /trazabilidad_recepcion/:id | Editar recepción |
| DELETE | /trazabilidad_recepcion/:id | Eliminar recepción |
| GET | /detalle_bins?idRecepcion=X | Bins de una recepción |
| POST | /detalle_bins | Agregar bin |
| PATCH | /detalle_bins/:id | Editar bin |
| DELETE | /detalle_bins/:id | Eliminar bin |
| GET | /calidad_entero | Listar evaluaciones |
| POST | /calidad_entero | Nueva evaluación |
| PATCH | /calidad_entero/:id | Editar evaluación |
| DELETE | /calidad_entero/:id | Eliminar evaluación |
| GET | /detalle_calidad?idCalidad=X | Defectos de una evaluación |
| POST | /detalle_calidad | Registrar defecto |
| GET | /clasificacion_tallas | Listar clasificaciones |
| POST | /clasificacion_tallas | Nueva clasificación |
| PATCH | /clasificacion_tallas/:id | Editar clasificación |
| GET | /detalle_tallas?idClasif=X | Tallas de una clasificación |
| POST | /detalle_tallas | Agregar fila de talla |
| GET | /muestras_sabor | Listar sesiones de cata |
| POST | /muestras_sabor | Nueva sesión |
| PATCH | /muestras_sabor/:id | Editar sesión |
| GET | /detalle_sabor?idMuestra=X | Calificaciones de una sesión |
| POST | /detalle_sabor | Registrar calificación |
| GET | /fotos?idRegistro=X | Fotos de un registro |
| POST | /fotos | Registrar foto |

---

## 12. Plugins de Capacitor

| Plugin | Para qué se usa en TrazApp |
|---|---|
| `@capacitor/geolocation` | Capturar latitud y longitud al registrar una recepción |
| `@capacitor/camera` | Tomar foto del lote o seleccionar desde galería |
| `@capacitor/filesystem` | Guardar la foto localmente en el dispositivo |

Permisos necesarios en Android (`AndroidManifest.xml`):
- `ACCESS_FINE_LOCATION`
- `ACCESS_COARSE_LOCATION`
- `CAMERA`
- `READ_EXTERNAL_STORAGE`
- `WRITE_EXTERNAL_STORAGE`


## 13. Comandos útiles

```bash
# Iniciar JSON Server
json-server --watch db.json --port 3000

# Iniciar la app en el navegador
ionic serve

# Generar una página
ionic generate page pages/nombre-pagina

# Generar un servicio
ionic generate service services/nombre-servicio

# Sincronizar Capacitor
npx cap sync

# Abrir en Android Studio
ionic cap open android
```

---

> **Nota:** Cuando pruebes en dispositivo físico, cambia `localhost` por la IP de tu PC
> en `src/environments/environment.ts`. Ambos deben estar en la misma red WiFi.

---

## 14. Patrones de código implementados

### Flujo de verificación (aplica a los 3 tipos de calidad)

```
Lista → badge "Pendiente" + botón "Verificar" inline (stopPropagation)
  ↓
AlertController con radio de usuarios
  ↓ Confirmar
service.update(id, { verificado: true, idUsuarioVerifica })
  ↓
Badge cambia a "Verificado" en la lista
```

El botón Verificar también aparece dentro del formulario en modo `soloLectura && !record.verificado`.

### Modo lectura en formularios

```typescript
this.soloLectura = this.route.snapshot.queryParamMap.get('modo') === 'ver';
```

- Todos los inputs y selects tienen `[disabled]="soloLectura"`.
- El botón Guardar usa `*ngIf="!soloLectura"`.
- El botón Verificar usa `*ngIf="soloLectura && !record.verificado"`.

### Panelistas reactivos en muestra-sabor-form

`togglePanelista(id, checked)` mantiene sincronizados los arreglos de calificaciones en todos los códigos de lote:
- Al marcar: añade `{ idPanelista: id, nota: 0 }` a cada código si no existe.
- Al desmarcar: elimina las calificaciones del panelista de todos los códigos y recalcula promedios.

### Carga encadenada Cliente → Finca → Laguna

```
onCodigoClienteChange(c) → fincaSvc.getActivasByCliente(c.idCliente) → c.fincas
onCodigoFincaChange(c)   → lagunaSvc.getActivasByFinca(c.idFinca)    → c.lagunas
```

### Badge de estado en muestra de sabor

| Promedio | Estado | Color Ionic |
|----------|--------|-------------|
| ≥ 9 | Aprobado | `success` |
| ≥ 7 | Revisar | `warning` |
| < 7 | Rechazado | `danger` |
