# TrazApp — Sistema de Trazabilidad y Control de Calidad en Recepción de Camarón

Aplicación móvil desarrollada con **Ionic + Angular + Capacitor** para digitalizar los registros de calidad y trazabilidad del área de recepción de materia prima en una empacadora de camarón.

---

## Tecnologías utilizadas

| Capa | Tecnología |
|---|---|
| Frontend / Mobile | Ionic 8 + Angular 20 |
| API REST local | JSON Server |
| Plugins nativos | Capacitor 7 (Camera, Geolocation, Filesystem) |
| Lenguaje | TypeScript |

---

## Requisitos previos

- Node.js v18 o superior
- npm v9 o superior
- Ionic CLI: `npm install -g @ionic/cli`

---

## Cómo ejecutar el proyecto

### 1. Iniciar la API (JSON Server)

```bash
cd Api-Trazapp
npx json-server --watch db.json --port 3000
```

La API quedará disponible en `http://localhost:3000`.

### 2. Iniciar la aplicación Ionic

```bash
cd TrazApp
npm install
ionic serve
```

La app abrirá en `http://localhost:8100`.

> Ambos procesos deben correr simultáneamente en terminales separadas.

---

## Estructura del proyecto

```
Trazapp/
├── Api-Trazapp/
│   └── db.json                  # Base de datos JSON Server (14 colecciones)
├── TrazApp/
│   └── src/
│       └── app/
│           ├── interceptors/    # NumericIdInterceptor
│           ├── models/          # 14 interfaces TypeScript
│           ├── services/        # 10 servicios Angular (HttpClient)
│           └── pages/
│               ├── dashboard/
│               ├── recepciones/
│               │   ├── recepciones-lista/
│               │   ├── recepcion-detalle/
│               │   └── recepcion-form/
│               ├── calidades/
│               │   ├── calidades-lista/
│               │   ├── calidad-entero-form/
│               │   ├── clasificacion-tallas-form/
│               │   └── muestra-sabor-form/
│               ├── catalogos/
│               │   ├── catalogos-menu/
│               │   ├── clientes/
│               │   ├── fincas/
│               │   ├── lagunas/
│               │   └── usuarios/
│               └── admin/
│                   └── tipos-defecto/
└── TrazApp_Estructura.md        # Especificación completa del proyecto
```

---

## Módulos de la aplicación

| # | Módulo | Descripción |
|---|---|---|
| 1 | Dashboard | Resumen de conteos globales con accesos rápidos |
| 2 | Recepciones | Registro de trazabilidad por lote, con bins y estado de proceso |
| 3 | Calidad de Camarón Entero | Evaluación de defectos físicos con carga dinámica de tipos |
| 4 | Clasificación de Tallas | Conteo por rango de talla con porcentajes y talla dominante automática |
| 5 | Muestras de Sabor | Panel de cata con calificaciones por panelista y lote |
| 6 | Catálogos | CRUD de clientes, fincas, lagunas y usuarios |
| 7 | Tipos de Defecto (Admin) | Administración de tipos de defecto con protección ante eliminación |

---

## Colecciones de la API

```
GET/POST   /trazabilidad_recepcion
GET/PATCH  /trazabilidad_recepcion/:id
GET/POST   /detalle_bins
PATCH      /detalle_bins/:id
GET/POST   /calidad_entero
PATCH/DEL  /calidad_entero/:id
GET/POST   /detalle_calidad
GET/POST   /clasificacion_tallas
PATCH/DEL  /clasificacion_tallas/:id
GET/POST   /detalle_tallas
GET/POST   /muestras_sabor
PATCH/DEL  /muestras_sabor/:id
GET/POST   /detalle_sabor
GET/POST   /fotos
GET/POST   /clientes
PATCH      /clientes/:id
GET/POST   /fincas
PATCH      /fincas/:id
GET/POST   /lagunas
PATCH      /lagunas/:id
GET/POST   /usuarios
PATCH      /usuarios/:id
GET/POST   /tipos_defecto
PATCH/DEL  /tipos_defecto/:id
```

---

## Plugins nativos de Capacitor

| Plugin | Uso |
|---|---|
| `@capacitor/camera` | Tomar fotos o seleccionar desde galería |
| `@capacitor/geolocation` | Capturar coordenadas GPS del punto de registro |
| `@capacitor/filesystem` | Guardar imágenes localmente en el dispositivo |

---

## Notas técnicas

- Los `id` de todos los registros se generan en el cliente como `String(Date.now())` para garantizar compatibilidad con el sistema de rutas de JSON Server (comparación estricta de strings).
- Las claves foráneas (`idRecepcion`, `idCalidad`, etc.) se almacenan como `number` para que los filtros por query param de JSON Server funcionen correctamente (`?idRecepcion=5`).
- El interceptor `NumericIdInterceptor` normaliza tipos de ID entre el frontend y la API.
- Las imágenes se persisten con `Capacitor Filesystem`; la API solo almacena la referencia del archivo (`pathLocal`).
