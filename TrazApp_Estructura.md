TrazApp
Sistema de Trazabilidad y Control de Calidad
en Recepción de Camarón

Especificación y Documentación del Proyecto
Ionic 8 con Angular — JSON Server — Capacitor
Tema visual: "Jade & Amber"


════════════════════════════════════════════════════════════════
1. OBJETIVO GENERAL DEL PROYECTO
════════════════════════════════════════════════════════════════

Desarrollar una aplicación móvil funcional llamada TrazApp, utilizando Ionic 8 con Angular,
que permita registrar, consultar, actualizar y eliminar los registros de calidad y trazabilidad
del área de recepción de materia prima en una empacadora de camarón. La aplicación integra
geolocalización, captura de imágenes, filtros de búsqueda y consumo de una API REST
implementada con JSON Server, digitalizando cuatro formularios que actualmente se gestionan
en papel dentro de la planta.


════════════════════════════════════════════════════════════════
2. ALCANCE MÍNIMO CUMPLIDO
════════════════════════════════════════════════════════════════

• Interfaz móvil completa con navegación mediante Side Menu y estructura modular por páginas.
• Consumo de API REST con JSON Server mediante HttpClient de Angular.
• 14 tablas implementadas y justificadas por la naturaleza real del proyecto.
• Operaciones completas (mostrar, mostrar por id, insertar, actualizar, eliminar) en todas las entidades principales.
• Geolocation y Camera como plugins nativos de Capacitor (obligatorios).
• Las imágenes se guardan en el dispositivo con Capacitor Filesystem; la API almacena la referencia del archivo.
• Pull-to-refresh en todas las pantallas de listado.
• Modo previsualización (solo lectura) en todos los formularios de registro.


════════════════════════════════════════════════════════════════
3. TEMA DEL PROYECTO
════════════════════════════════════════════════════════════════

Nombre: TrazApp — Sistema de Trazabilidad y Control de Calidad en Recepción de Camarón.

TrazApp nace de una necesidad real identificada en una empacadora de camarón activa.
Actualmente el área de recepción de materia prima gestiona sus registros de calidad y
trazabilidad de forma manual en papel, utilizando aproximadamente 50 formularios de distintos
tipos. Ninguno de estos registros se encuentra digitalizado en un sistema.

La aplicación digitaliza los siguientes cuatro formularios del área de recepción:

• Trazabilidad de Producto: registro por bin de número y libras, con datos de cliente, finca,
  laguna, fechas de cosecha y recibo, y remisión SAG centralizados por encabezado de recepción.

• Calidad de Camarón Entero: evaluación de defectos físicos por muestra con totales de defecto,
  nítido y suma general. Los tipos de defecto son parametrizables desde un catálogo administrable.

• Clasificación de Tallas en Camarón Entero: conteo de unidades por peso en gramos con porcentaje
  por rango de talla y cálculo automático de talla dominante.

• Resumen de Muestras de Sabor: panel de cata donde múltiples panelistas califican lotes del 0 al 10
  con total de respuestas por código.


════════════════════════════════════════════════════════════════
4. ESTRUCTURA DE DATOS — 14 TABLAS
════════════════════════════════════════════════════════════════

4.1 Tablas Maestras (Catálogos)

Tabla      | Propósito                                        | Campos implementados
-----------|--------------------------------------------------|-----------------------------------------------------------
clientes   | Empresas compradoras del camarón                | id, nombre, estado
fincas     | Fincas acuícolas proveedoras                    | id, nombre, idCliente, estado
lagunas    | Lagunas de cultivo por finca                    | id, nombre, idFinca, estado
usuarios   | Inspectores, verificadores y panelistas         | id, nombre, rol, correo, telefono, estado

Roles implementados: admin | supervisor | inspector | verificador | panelista | operario

────────────────────────────────────────────────────────────────
4.2 Tabla de Parametrización

Tabla          | Propósito                                               | Campos implementados
---------------|--------------------------------------------------------|--------------------------------------
tipos_defecto  | Catálogo administrable de tipos de defecto físico       | id, nombre, descripcion, estado

Esta tabla reemplaza las columnas fijas del formulario STB/ACC/R001. El formulario de calidad
entero se genera dinámicamente leyendo los tipos activos, lo que permite agregar o desactivar
defectos sin modificar el código. No se permite eliminar un tipo con registros asociados;
solo se desactiva mediante toggle.

────────────────────────────────────────────────────────────────
4.3 Tablas Transaccionales (Formularios Digitalizados)

Tabla                   | Formulario                              | Campos implementados
------------------------|-----------------------------------------|------------------------------------------------------------
trazabilidad_recepcion  | Trazabilidad de Producto                | id, loteInterno, fecha, turno, idCliente, idFinca, idLaguna,
                        |                                         | fechaCosecha, horaCosecha, horaRecibido, remisionSAG,
                        |                                         | numeroAutorizacion, idUsuarioRealiza, idUsuarioVerifica,
                        |                                         | observaciones, correcciones, latitud?, longitud?
detalle_bins            | Trazabilidad de Producto                | id, idRecepcion, numeroBin, cantidadLibras,
                        |                                         | horaInicioProceso, estado ('pendiente'|'procesado')
calidad_entero          | Calidad de Camarón Entero               | id, fecha, turno, tipo, idRecepcion, loteInterno,
                        |                                         | idCliente, idFinca, idLaguna, gramos, observacion,
                        |                                         | correccion, supervisor, idUsuarioRealiza, estado,
                        |                                         | idUsuarioVerifica?, latitud?, longitud?
detalle_calidad         | Calidad de Camarón Entero               | id, idCalidad, idTipoDefecto, cantidad, esNitido
clasificacion_tallas    | Clasificación de Tallas                 | id, fecha, turno, tipo, idRecepcion, loteInterno,
                        |                                         | idCliente, idFinca, idLaguna, pesoMuestra, tallaDominante,
                        |                                         | idUsuarioRealiza, estado, idUsuarioVerifica?, latitud?, longitud?
detalle_tallas          | Clasificación de Tallas                 | id, idClasif, rangoTalla, pesoGramos, cantidad, porcentaje
muestras_sabor          | Resumen de Muestras de Sabor            | id, fecha, tipo, turno, idUsuarioRealiza, observaciones,
                        |                                         | estado, idUsuarioVerifica?, latitud?, longitud?
detalle_sabor           | Resumen de Muestras de Sabor            | id, idMuestra, codigo, idCliente, idFinca, idLaguna,
                        |                                         | idPanelista, calificacion (0–10), totalRespuestas
fotos                   | Evidencia fotográfica                   | id, idRegistro, tipoRegistro, pathLocal, nombreArchivo,
                        |                                         | latitud, longitud, fechaFoto

────────────────────────────────────────────────────────────────
4.4 Decisiones de Diseño Adoptadas

• Los campos idCliente, idFinca, idLaguna, fechaCosecha, horaCosecha, horaRecibido, remisionSAG
  y numeroAutorizacion se centralizaron en el encabezado trazabilidad_recepcion. En el formulario
  original cada bin los repetía; en TrazApp una recepción = un lote de un cliente/finca/laguna.

• detalle_bins registra el estado operativo de cada bin (pendiente/procesado) y la
  horaInicioProceso. La verificación de bins se realiza bin a bin desde la lista de recepciones.

• loteInterno se genera automáticamente con el patrón R-YYYY-MM-DD-NNNN (correlativo por día)
  y se desnormaliza en calidad_entero y clasificacion_tallas para acceso rápido sin JOINs.

• tallaDominante en clasificacion_tallas se calcula automáticamente en el formulario
  seleccionando el rango con mayor cantidad acumulada de camarones.

• Los registros de calidad (calidad_entero, clasificacion_tallas, muestras_sabor) incorporan un
  campo estado (pendiente / verificado / declinado) para el flujo de aprobación por supervisor.

• El campo idUsuarioVerifica en trazabilidad_recepcion existe en el modelo pero no se expone en
  el formulario; la verificación de recepciones se hace exclusivamente a nivel de bins.

• Los IDs se generan en cliente como String(Date.now()) para compatibilidad con JSON Server
  (comparación estricta de tipos en rutas). Las claves foráneas se almacenan como number
  para compatibilidad con los filtros por query param (?idX=Y) de JSON Server.


════════════════════════════════════════════════════════════════
5. REQUERIMIENTOS FUNCIONALES IMPLEMENTADOS
════════════════════════════════════════════════════════════════

────────────────────────────────────────────────────────────────
5.1 Gestión de Trazabilidad de Recepción

• Registrar encabezados de recepción con lote interno auto-generado (patrón R-YYYY-MM-DD-NNNN
  correlativo por día), fecha, turno A/B (ion-segment), cliente, finca, laguna, fechas y horas
  de cosecha y recibo, remisión SAG, número de autorización y campo "Realizado por".
• Agregar múltiples bins por recepción con número de bin y libras; estado visual (pendiente/procesado).
• Procesar bins individualmente desde la lista: registra horaInicioProceso y cambia estado a "procesado".
• Listar recepciones con buscador de texto libre (lote, cliente, fecha) y filtro por turno.
• Expandir/colapsar detalle de bins directamente en la lista (tarjetas expandibles sin salir de pantalla).
• Editar datos del encabezado; acceder a modo previsualización (solo lectura) mediante ?modo=ver.
• Capturar coordenadas GPS del punto de recepción; latitud y longitud visibles en el formulario.
• Adjuntar fotos desde cámara o galería asociadas a la recepción con visualización en lightbox.
• Registrar observaciones y acciones correctivas aplicadas.
• ionViewWillEnter en la lista de recepciones para recarga automática al regresar de un formulario.

────────────────────────────────────────────────────────────────
5.2 Gestión de Calidad de Camarón Entero

• Registrar evaluaciones de calidad vinculadas a un lote; cliente, finca y laguna se heredan
  automáticamente al seleccionar el lote (idRecepcion).
• El formulario carga dinámicamente los tipos de defecto activos desde tipos_defecto.
• Ingresar cantidad de unidades por tipo de defecto mediante botones +/− táctiles.
• Calcular automáticamente: suma de defectos, suma de nítidos, total de muestra y porcentajes.
• Registrar gramaje (gramos), observaciones, correcciones y nombre del supervisor.
• Seleccionar turno (A/B) y tipo de proceso (Proceso/Proxco) mediante ion-segment.
• Flujo de aprobación: pendiente → verificado / declinado con selección de usuario verificador.
• Listar evaluaciones con filtros por turno, estado y buscador; badge de color por estado.
• Modo previsualización completo (?modo=ver) en el formulario.
• Adjuntar fotos con lightbox; captura GPS.
• Eliminar con confirmación mediante deslizamiento (ion-item-sliding).

────────────────────────────────────────────────────────────────
5.3 Administración de Tipos de Defecto

• Pantalla exclusiva para administrador: crear, editar y desactivar tipos de defecto.
• Cada tipo tiene nombre, descripción y estado (activo/inactivo) con toggle de activación.
• Solo los tipos activos aparecen en el formulario de calidad entero.
• Al intentar eliminar un tipo con registros asociados: muestra alerta informativa con el número
  de registros vinculados y ofrece la opción de desactivarlo en lugar de eliminar.
• Si no tiene registros vinculados, permite la eliminación directa con confirmación.

────────────────────────────────────────────────────────────────
5.4 Clasificación de Tallas

• Registrar clasificación por lote vinculada a una recepción; cliente, finca y laguna heredados.
• Seleccionar turno y tipo de proceso mediante ion-segment.
• Ingresar peso de muestra y conteo de unidades por rango de talla en 8 grupos predefinidos:
  10-20 g, 20-30 g, 30-40 g, 40-50 g, 50-60 g, 60-70 g, 70-80 g, 80-100 g.
• Cada grupo contiene pesos individuales en gramos con contador por peso:
    10-20 g  → [104, 90, 76, 64, 51]
    20-30 g  → [50, 44, 38, 34]
    30-40 g  → [33, 32, 31, 30, 29, 28, 27, 26]
    40-50 g  → [25, 24, 23, 22, 21, 20]
    50-60 g  → [20, 19, 18, 17]
    60-70 g  → [16, 15, 14]
    70-80 g  → [13, 12, 11]
    80-100 g → [10, 9, 8]
• Calcular automáticamente: subtotales por grupo, porcentajes, cobertura total y talla dominante
  (grupo con mayor subtotal de camarones).
• Flujo de aprobación: pendiente → verificado / declinado.
• Modo previsualización (?modo=ver); adjuntar fotos; captura GPS.
• Eliminar con confirmación mediante deslizamiento.

────────────────────────────────────────────────────────────────
5.5 Muestras de Sabor — Panel de Cata

• Registrar sesión de cata con tipo, turno y usuario que realiza.
• Seleccionar panelistas participantes mediante toggle; la columna de calificación aparece
  automáticamente en todos los códigos al seleccionar cada panelista. Mínimo 3 panelistas requeridos.
• Agregar hasta 6 códigos de lote por sesión, cada uno con cliente, finca y laguna propios
  (con cascading dropdowns Cliente → Finca → Laguna por código).
• Cada panelista ingresa su calificación (0–10) por cada lote evaluado.
• Calcular automáticamente el promedio por lote con indicador visual de estado:
    Aprobado  → promedio ≥ 9
    Revisar   → promedio ≥ 7
    Rechazado → promedio < 7
• Flujo de aprobación: pendiente → verificado / declinado.
• Modo previsualización (?modo=ver); captura GPS.
• Eliminar con confirmación mediante deslizamiento.

────────────────────────────────────────────────────────────────
5.6 Geolocalización

• Capacitor Geolocation (enableHighAccuracy: true) a través de FotoService.obtenerUbicacion().
• Botón "Capturar Ubicación" en formularios de: recepción, calidad entero,
  clasificación de tallas y muestras de sabor.
• Latitud y longitud almacenadas en el registro correspondiente.

────────────────────────────────────────────────────────────────
5.7 Cámara y Galería

• Capacitor Camera — fuente: CameraSource.Camera (cámara) o CameraSource.Photos (galería).
• Parámetros: calidad 40%, 800×800 px máximo, formato Base64.
• Las fotos se guardan localmente con Capacitor Filesystem en Directory.Data como IMG_${Date.now()}.jpeg.
• En web: se convierte a data URI para visualización inmediata.
• En nativo: se usa Capacitor.convertFileSrc() para obtener la ruta visible.
• La foto se asocia al registro mediante la tabla fotos (tipoRegistro: recepcion/calidad/tallas/sabor).
• Las imágenes persisten después de cerrar la aplicación.
• Visualización en lightbox al tocar la miniatura (fotoAmpliada: string | null).
• Eliminación de foto con confirmación: borra el archivo local y la referencia en la API.

────────────────────────────────────────────────────────────────
5.8 Filtros y Búsquedas

• Buscador de texto libre en: listado de recepciones (lote, cliente, fecha),
  lista de calidades, catálogos (nombre, estado, rol/correo según el catálogo).
• Filtro por turno (A/B) en listados de recepciones y calidades.
• Filtro por estado (pendiente/verificado/declinado) en listado de calidades.
• Todos los filtros son getters reactivos aplicados en tiempo real sin llamadas a la API.

────────────────────────────────────────────────────────────────
5.9 Modo Previsualización (Solo Lectura)

• Todos los formularios de registro soportan el query param ?modo=ver.
• Cuando soloLectura = true, todos los inputs, selects, textareas y segmentos del formulario
  quedan deshabilitados ([disabled]="soloLectura").
• El botón de guardar y los botones de captura GPS/foto se ocultan (*ngIf="!soloLectura").
• Los elementos deshabilitados muestran texto con color #1A3A3A (legible) — la opacidad
  por defecto de Ionic (0.3) se sobreescribe globalmente en el tema para garantizar legibilidad.

────────────────────────────────────────────────────────────────
5.10 Visualización por Estado

• Verificado  → badge verde (success)
• Pendiente   → badge amarillo (warning)
• Declinado   → badge rojo (danger)
• Bins pendientes → ícono en amarillo
• Bins procesados → ícono en verde con chip "OK"
• Promedio sabor: Aprobado / Revisar / Rechazado según umbral


════════════════════════════════════════════════════════════════
6. FUNCIONALIDADES ADICIONALES IMPLEMENTADAS
════════════════════════════════════════════════════════════════

• Dashboard con logo TrazApp, conteo de recepciones, evaluaciones de calidad entero y muestras
  de sabor registradas; accesos directos a cada módulo con íconos de color por módulo.
• Logo TrazApp (PNG) visible en el encabezado del menú lateral y en el hero del dashboard.
• Gestión completa CRUD de catálogos: clientes, fincas, lagunas, usuarios con activación/
  desactivación mediante toggle.
• Cascading dropdowns en formularios principales y catálogos: cliente → fincas activas →
  lagunas activas. También aplicado por código individual en el panel de cata.
• ion-segment para selección táctil de turno y tipo de proceso en planta.
• Lote interno auto-generado R-YYYY-MM-DD-NNNN correlativo por día en RecepcionFormPage.
• Selector de lote en formularios de calidad muestra: loteInterno, cliente, finca y laguna
  para facilitar identificación visual del lote.
• ionViewWillEnter en RecepcionesListaPage y CalidadesListaPage: recarga datos al volver
  de cualquier formulario sin necesidad de refrescar manualmente.
• Pull-to-refresh (ion-refresher) en todas las pantallas de listado.
• Componentes modales reutilizables: FincaFormComponent, LagunaFormComponent,
  UsuarioFormComponent — lanzados con ModalController.
• Formularios inline mediante AlertController: clientes y tipos de defecto.
• Validación de integridad referencial antes de eliminar tipos de defecto:
  consulta getDetalleByTipo() y bloquea eliminación si existen registros vinculados.
• Swipe izquierdo (ion-item-sliding) en listas de calidades para acceder a
  Editar / Validar / Eliminar sin entrar al formulario.
• Tarjetas expandibles en lista de recepciones para ver bins sin salir de la pantalla principal.
• Lightbox de fotos en formularios de recepción, calidad entero y clasificación de tallas.
• Botones +/− táctiles para conteo de defectos en calidad entero (sumar/restar en FilaDefecto).
• Validación mínimo de 3 panelistas antes de guardar una muestra de sabor.
• Helpers de lookup (nombreCliente, nombreFinca, nombreLaguna, nombreUsuario) en todas las
  listas para mostrar nombres en lugar de IDs.


════════════════════════════════════════════════════════════════
7. DISEÑO VISUAL — TEMA "JADE & AMBER"
════════════════════════════════════════════════════════════════

La aplicación usa un sistema de diseño propio definido en theme/variables.scss y global.scss.

7.1 Paleta de Colores

Token                | Valor       | Uso
---------------------|-------------|--------------------------------------------
--tz-teal            | #00ADA8     | Color primario (jade teal)
--tz-teal-deep       | #007A76     | Gradiente de botones y toolbar
--tz-amber           | #D4860A     | Acento secundario (estados pendiente)
--tz-surface-1       | #FFFFFF     | Fondo de tarjetas
--tz-surface-2       | #EEF7F7     | Fondo alternativo (jade claro)
ion-background-color | #F4FAFA     | Fondo global de pantallas
ion-text-color       | #0D2A2A     | Texto principal (teal oscuro)
--tz-medium          | #5A8080     | Texto secundario
--tz-emerald         | #1A9E6A     | Estado verificado / procesado
--tz-coral           | #C84040     | Estado declinado / error

7.2 Tipografía

Rol          | Fuente           | Aplicación
-------------|------------------|--------------------------------------------
Display      | Exo 2            | Títulos, labels, botones, nombres de sección
Body         | DM Sans          | Texto de párrafos, ítems de lista
Monoespaciado| JetBrains Mono   | Códigos de lote, fechas, datos técnicos

7.3 Tokens de Espaciado y Forma

Token                | Valor
---------------------|----------
--tz-radius-sm       | 10px
--tz-radius-md       | 16px
--tz-radius-lg       | 24px
--tz-shadow-card     | 0 2px 12px rgba(0,80,80,0.07), 0 1px 3px rgba(0,173,168,0.05)

7.4 Clases de Utilidad Globales

Clase              | Uso
-------------------|-----------------------------------------------------------
.lote-code         | Código de lote en fuente mono y color jade
.estado-pill       | Badge inline con variantes: .pendiente .procesado .verificado .declinado
.glass-card        | Efecto frosted glass con backdrop-filter
.teal-divider      | Separador con gradiente jade
.stat-number       | Número estadístico grande con degradado de texto
.stat-label        | Etiqueta pequeña uppercase para estadísticas
.animate-in        | Animación fadeInUp 0.35s al entrar la vista
.animate-fade      | Animación fadeIn 0.3s
.mono              | Aplica fuente monoespaciada puntualmente

Nota sobre modo previsualización: se sobreescribe la opacidad de Ionic para elementos
deshabilitados (ion-input, ion-textarea, ion-select, ion-segment, .item-interactive-disabled)
con opacity: 1 !important para garantizar texto legible en modo soloLectura.


════════════════════════════════════════════════════════════════
8. REQUERIMIENTOS TÉCNICOS
════════════════════════════════════════════════════════════════

• Framework: Ionic 8 con Angular 20.
• API: JSON Server — npx json-server --watch db.json --port 3000
• Consumo HTTP: HttpClient de Angular con firstValueFrom() en operaciones encadenadas.
• Organización del código: pages/ | services/ | models/ | interceptors/
• Navegación: Side Menu + RouterLink con rutas lazy-loaded.
• Plugins nativos de Capacitor: Geolocation, Camera, Filesystem.
• Interceptor HTTP: NumericIdInterceptor — intercepta cada POST, consulta la colección para
  obtener el ID numérico máximo y prepende {id: maxId+1} al body antes de enviar.
• Generación de IDs: String(Date.now()) en cliente para evitar conflictos de tipo en rutas de
  JSON Server; claves foráneas almacenadas como number para compatibilidad con query params.
• Separación de responsabilidades: páginas (UI + lógica de vista), servicios (HTTP), modelos (tipos).
• Código comentado en servicios y componentes principales.


════════════════════════════════════════════════════════════════
9. PANTALLAS IMPLEMENTADAS — 14 RUTAS
════════════════════════════════════════════════════════════════

#  | Pantalla                          | Ruta                                    | Descripción
---|-----------------------------------|-----------------------------------------|---------------------------------------------
1  | Dashboard                         | /dashboard                              | Logo + stats de totales + accesos directos a módulos
2  | Listado de recepciones            | /recepciones                            | Tarjetas expandibles, buscador, filtro turno, procesar bins
3  | Formulario de recepción           | /recepcion-form                         | Crear recepción con bins, GPS y fotos
3b | Formulario de recepción (editar)  | /recepcion-form/:id                     | Editar recepción existente
3c | Formulario de recepción (ver)     | /recepcion-form/:id?modo=ver            | Previsualización solo lectura
4  | Detalle de recepción              | /recepciones/:id                        | Vista de encabezado + tabla de bins con estado
5  | Listado de calidades              | /calidades                              | Menú de tipos + lista con swipe (editar/validar/eliminar)
5b | Listado de calidades por tipo     | /calidades?tipo=entero|tallas|sabor     | Filtra y carga el tipo indicado al entrar
6  | Formulario calidad entero         | /calidad-entero-form                    | Defectos dinámicos con +/−, totales, GPS y fotos
6b | Formulario calidad entero (editar)| /calidad-entero-form/:id               | Editar evaluación existente
6c | Formulario calidad entero (ver)   | /calidad-entero-form/:id?modo=ver      | Previsualización
7  | Formulario clasificación tallas   | /clasificacion-tallas-form              | 8 grupos de talla, subtotales, talla dominante
7b | Clasificación tallas (editar)     | /clasificacion-tallas-form/:id         | Editar clasificación
7c | Clasificación tallas (ver)        | /clasificacion-tallas-form/:id?modo=ver| Previsualización
8  | Formulario muestra de sabor       | /muestra-sabor-form                     | Panel de cata con panelistas y calificaciones
8b | Muestra de sabor (editar)         | /muestra-sabor-form/:id                | Editar sesión de cata
8c | Muestra de sabor (ver)            | /muestra-sabor-form/:id?modo=ver       | Previsualización
9  | Catálogos — Menú                  | /catalogos                              | Grid de acceso a 4 catálogos con íconos
10 | Catálogo de clientes              | /catalogos/clientes                     | CRUD inline con AlertController, toggle estado
11 | Catálogo de fincas                | /catalogos/fincas                       | CRUD con modal FincaFormComponent, cascading cliente
12 | Catálogo de lagunas               | /catalogos/lagunas                      | CRUD con modal LagunaFormComponent, cascading cliente→finca
13 | Catálogo de usuarios              | /catalogos/usuarios                     | CRUD con modal UsuarioFormComponent, toggle estado
14 | Tipos de defecto (Admin)          | /tipos-defecto                          | CRUD con AlertController, toggle activo/inactivo, protección referencial


════════════════════════════════════════════════════════════════
10. COMPONENTES MODALES REUTILIZABLES
════════════════════════════════════════════════════════════════

Componente              | Archivo                          | Input        | Retorna
------------------------|----------------------------------|--------------|--------------------------------
FincaFormComponent      | fincas/finca-form/               | finca?:Finca | {nombre, idCliente}
LagunaFormComponent     | lagunas/laguna-form/             | laguna?:Laguna | {nombre, idFinca}
UsuarioFormComponent    | usuarios/usuario-form/           | usuario?:Usuario | {nombre, correo, telefono, rol}

• FincaFormComponent: carga clientes activos al iniciar; requiere nombre e idCliente.
• LagunaFormComponent: cascading Cliente → Finca con onClienteChange(); requiere los 3 campos.
• UsuarioFormComponent: roles disponibles: admin, supervisor, operario, panelista;
  requiere nombre y rol.
• Todos se lanzan con ModalController.create() desde sus páginas padre y retornan datos
  mediante modal.dismiss(data) al guardar, o dismiss() sin datos al cancelar.


════════════════════════════════════════════════════════════════
11. SERVICIOS — MÉTODOS IMPLEMENTADOS
════════════════════════════════════════════════════════════════

cliente.service.ts
  getAll(), getActivos(), getById(id), create(cliente), update(id, data), delete(id)

finca.service.ts
  getAll(), getByCliente(idCliente), getActivasByCliente(idCliente),
  getById(id), create(finca), update(id, data), delete(id)

laguna.service.ts
  getAll(), getByFinca(idFinca), getActivasByFinca(idFinca),
  getById(id), create(laguna), update(id, data), delete(id)

usuario.service.ts
  getAll(), getActivos(), getPanelistas(), getInspectores(), getVerificadores(),
  getById(id), create(usuario), update(id, data), delete(id)

tipo-defecto.service.ts
  getAll(), getActivos(), getById(id), create(tipo), update(id, data), delete(id)

trazabilidad.service.ts
  getAllRecepciones(), getRecepcionById(id), createRecepcion(recepcion),
  updateRecepcion(id, data), deleteRecepcion(id),
  getBinsByRecepcion(idRecepcion), createBin(bin), updateBin(id, data),
  deleteBin(id), procesarBin(id)

calidad-entero.service.ts
  getAll(), getById(id), create(calidad), update(id, data), delete(id),
  getDetalleByCalidad(idCalidad), getDetalleByTipo(idTipoDefecto), createDetalle(detalle)

clasificacion-tallas.service.ts
  getAll(), getById(id), create(clasif), update(id, data), delete(id),
  getDetalleByClasif(idClasif), createDetalle(detalle)

muestra-sabor.service.ts
  getAll(), getById(id), create(muestra), update(id, data), delete(id),
  getDetalleByMuestra(idMuestra), createDetalle(detalle), updateDetalle(id, data)

foto.service.ts  — Capacitor Camera + Filesystem + Geolocation
  getFotosByRegistro(idRegistro), createFoto(foto), deleteFoto(id)
  tomarOSeleccionarFoto(source: CameraSource) → {pathLocal, nombreArchivo}
    └ Abre cámara o galería, comprime (calidad 40, 800×800 px, Base64)
    └ Guarda en Filesystem.Data como IMG_${timestamp}.jpeg
  obtenerPathVisible(pathLocal) → string
    └ Web: lee archivo y retorna data URI
    └ Nativo: usa Capacitor.convertFileSrc()
  borrarFotoLocal(nombreArchivo) → void — elimina archivo de Filesystem.Data
  obtenerUbicacion() → {lat, lng} — Capacitor Geolocation (enableHighAccuracy: true)


════════════════════════════════════════════════════════════════
12. INTERCEPTOR HTTP
════════════════════════════════════════════════════════════════

NumericIdInterceptor (interceptors/numeric-id.interceptor.ts)

• Intercepta todas las peticiones POST.
• Realiza GET a la colección correspondiente para obtener el ID numérico máximo actual.
• Prepende {id: maxId + 1} al body del request antes de enviarlo.
• Garantiza IDs numéricos secuenciales sin depender del comportamiento de auto-incremento
  de JSON Server, evitando conflictos de tipo con las claves foráneas number.


════════════════════════════════════════════════════════════════
13. ENDPOINTS DE LA API — JSON SERVER
════════════════════════════════════════════════════════════════

Recepciones y Bins
  GET    /trazabilidad_recepcion                   Listar todas las recepciones
  GET    /trazabilidad_recepcion/:id               Obtener recepción por ID
  POST   /trazabilidad_recepcion                   Crear nueva recepción
  PATCH  /trazabilidad_recepcion/:id               Actualizar recepción
  DELETE /trazabilidad_recepcion/:id               Eliminar recepción
  GET    /detalle_bins?idRecepcion=X               Bins de una recepción
  POST   /detalle_bins                             Agregar bin
  PATCH  /detalle_bins/:id                         Actualizar bin (estado / horaInicioProceso)
  DELETE /detalle_bins/:id                         Eliminar bin

Tipos de Defecto
  GET    /tipos_defecto                            Listar todos
  POST   /tipos_defecto                            Crear tipo
  PATCH  /tipos_defecto/:id                        Actualizar / desactivar tipo
  DELETE /tipos_defecto/:id                        Eliminar (solo sin registros asociados)

Calidad Entero
  GET    /calidad_entero                           Listar evaluaciones
  GET    /calidad_entero/:id                       Obtener evaluación por ID
  POST   /calidad_entero                           Registrar nueva evaluación
  PATCH  /calidad_entero/:id                       Actualizar (incluyendo cambio de estado)
  DELETE /calidad_entero/:id                       Eliminar evaluación
  GET    /detalle_calidad?idCalidad=X              Defectos por evaluación
  GET    /detalle_calidad?idTipoDefecto=X          Verificar registros por tipo de defecto
  POST   /detalle_calidad                          Registrar detalle de defecto

Clasificación de Tallas
  GET    /clasificacion_tallas                     Listar clasificaciones
  GET    /clasificacion_tallas/:id                 Obtener clasificación por ID
  POST   /clasificacion_tallas                     Registrar nueva clasificación
  PATCH  /clasificacion_tallas/:id                 Actualizar (incluyendo estado)
  DELETE /clasificacion_tallas/:id                 Eliminar clasificación
  GET    /detalle_tallas?idClasif=X                Detalles por clasificación
  POST   /detalle_tallas                           Registrar detalle de talla

Muestras de Sabor
  GET    /muestras_sabor                           Listar sesiones de cata
  GET    /muestras_sabor/:id                       Obtener sesión por ID
  POST   /muestras_sabor                           Registrar nueva sesión
  PATCH  /muestras_sabor/:id                       Actualizar (incluyendo estado)
  DELETE /muestras_sabor/:id                       Eliminar sesión
  GET    /detalle_sabor?idMuestra=X                Calificaciones por sesión
  POST   /detalle_sabor                            Registrar calificación de panelista
  PATCH  /detalle_sabor/:id                        Actualizar calificación

Catálogos
  GET    /clientes                                 Catálogo de clientes
  POST   /clientes                                 Crear cliente
  PATCH  /clientes/:id                             Actualizar cliente
  GET    /fincas                                   Catálogo de fincas
  GET    /fincas?idCliente=X&estado=activo         Fincas activas de un cliente
  POST   /fincas                                   Crear finca
  PATCH  /fincas/:id                               Actualizar finca
  GET    /lagunas                                  Catálogo de lagunas
  GET    /lagunas?idFinca=X&estado=activo          Lagunas activas de una finca
  POST   /lagunas                                  Crear laguna
  PATCH  /lagunas/:id                              Actualizar laguna
  GET    /usuarios                                 Catálogo de usuarios
  GET    /usuarios?rol=panelista&estado=activo     Panelistas activos
  GET    /usuarios?rol=verificador                 Verificadores
  POST   /usuarios                                 Crear usuario
  PATCH  /usuarios/:id                             Actualizar usuario

Fotos
  GET    /fotos?idRegistro=X                       Fotos de un registro
  POST   /fotos                                    Registrar referencia de foto
  DELETE /fotos/:id                                Eliminar referencia de foto


════════════════════════════════════════════════════════════════
14. ESTRUCTURA DE ARCHIVOS DEL PROYECTO
════════════════════════════════════════════════════════════════

Trazapp/
├── .gitignore
├── README.md
├── TrazApp_Estructura.md
├── Logo-TrazApp.png                              # Logo original PNG
├── Api-Trazapp/
│   └── db.json                                   # Base de datos JSON Server (14 colecciones)
└── TrazApp/
    └── src/
        ├── assets/
        │   ├── icon/                             # Íconos de la app (Ionic default)
        │   └── logo-trazapp.png                  # Logo TrazApp — usado en dashboard y menú
        ├── theme/
        │   └── variables.scss                    # Tokens de diseño "Jade & Amber"
        ├── global.scss                           # Estilos globales, modo previsualización, animaciones
        └── app/
            ├── app.component.ts / .html / .scss  # Side menu con logo y navegación
            ├── app.module.ts
            ├── app-routing.module.ts             # 14 rutas lazy-loaded
            ├── interceptors/
            │   └── numeric-id.interceptor.ts     # Auto-asignación de IDs numéricos en POST
            ├── models/                           # 14 interfaces TypeScript
            │   ├── cliente.model.ts
            │   ├── finca.model.ts
            │   ├── laguna.model.ts
            │   ├── usuario.model.ts
            │   ├── tipo-defecto.model.ts
            │   ├── trazabilidad-recepcion.model.ts
            │   ├── detalle-bin.model.ts
            │   ├── calidad-entero.model.ts
            │   ├── detalle-calidad.model.ts
            │   ├── clasificacion-tallas.model.ts
            │   ├── detalle-talla.model.ts
            │   ├── muestra-sabor.model.ts
            │   ├── detalle-sabor.model.ts
            │   └── foto.model.ts
            ├── services/                         # 10 servicios Angular
            │   ├── cliente.service.ts
            │   ├── finca.service.ts
            │   ├── laguna.service.ts
            │   ├── usuario.service.ts
            │   ├── tipo-defecto.service.ts
            │   ├── trazabilidad.service.ts
            │   ├── calidad-entero.service.ts
            │   ├── clasificacion-tallas.service.ts
            │   ├── muestra-sabor.service.ts
            │   └── foto.service.ts               # Camera + Filesystem + Geolocation
            └── pages/
                ├── dashboard/
                │   └── dashboard.page.ts / .html / .scss / .module.ts
                ├── recepciones/
                │   ├── recepciones-lista/        # ionViewWillEnter, expandir/colapsar, procesar bins
                │   ├── recepcion-detalle/        # Vista detalle con tabla de bins
                │   └── recepcion-form/           # Crear/editar/ver; bins inline; GPS; fotos; lightbox
                ├── calidades/
                │   ├── calidades-lista/          # ionViewWillEnter, tabs por tipo, swipe acciones
                │   ├── calidad-entero-form/      # Defectos dinámicos, botones +/−, GPS, fotos
                │   ├── clasificacion-tallas-form/ # 8 grupos de talla, talla dominante automática
                │   └── muestra-sabor-form/       # Panel de cata, panelistas toggle, calificaciones
                ├── catalogos/
                │   ├── catalogos-menu/           # Grid de acceso a 4 catálogos
                │   ├── clientes/                 # CRUD inline AlertController
                │   ├── fincas/
                │   │   └── finca-form/           # Componente modal (ModalController)
                │   ├── lagunas/
                │   │   └── laguna-form/          # Componente modal con cascading
                │   └── usuarios/
                │       └── usuario-form/         # Componente modal
                └── admin/
                    └── tipos-defecto/            # CRUD inline, toggle, protección referencial


════════════════════════════════════════════════════════════════
15. ENTREGABLES DEL ESTUDIANTE
════════════════════════════════════════════════════════════════

• Proyecto Ionic funcional con todos los módulos implementados.
• Archivo db.json con datos iniciales representativos (mínimo 2 registros por tabla).
• Capturas de pantalla o video corto demostrando el funcionamiento de cada módulo.
• Explicación de las 14 tablas utilizadas y su correspondencia con los formularios reales de planta.
• Evidencia del uso de geolocalización (coordenadas capturadas en formulario) y cámara (foto adjunta).
• Manual de ejecución:

  Iniciar API:
    cd Api-Trazapp
    npx json-server --watch db.json --port 3000

  Iniciar aplicación:
    cd TrazApp
    npm install
    ionic serve
