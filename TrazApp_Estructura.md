TrazApp
Sistema de Trazabilidad y Control de Calidad
en Recepción de Camarón

Especificación y Documentación del Proyecto
Ionic con Angular — JSON Server — Capacitor


1. Objetivo General del Proyecto

Desarrollar una aplicación móvil funcional llamada TrazApp, utilizando Ionic con Angular, que permita registrar, consultar, actualizar y eliminar los registros de calidad y trazabilidad del área de recepción de materia prima en una empacadora de camarón. La aplicación integra geolocalización, captura de imágenes, filtros de búsqueda y consumo de una API REST implementada con JSON Server, digitalizando cuatro formularios que actualmente se gestionan en papel dentro de la planta.


2. Alcance Mínimo Esperado

• Interfaz móvil completa con navegación clara mediante Side Menu y estructura modular por páginas.
• Consumo de API REST creada con JSON Server mediante HttpClient de Angular.
• Implementación de 14 tablas, justificadas por la naturaleza real del proyecto.
• Operaciones completas de mostrar, mostrar por id, insertar, actualizar y eliminar en las entidades principales.
• Uso obligatorio de Geolocation y Camera como plugins nativos de Capacitor.
• Las imágenes se guardarán en el dispositivo usando Capacitor Filesystem; la API almacenará la referencia del archivo.


3. Tema del Proyecto

Nombre: TrazApp — Sistema de Trazabilidad y Control de Calidad en Recepción de Camarón.

TrazApp nace de una necesidad real identificada en una empacadora de camarón activa. Actualmente el área de recepción de materia prima gestiona sus registros de calidad y trazabilidad de forma manual en papel, utilizando aproximadamente 50 formularios de distintos tipos. Ninguno de estos registros se encuentra digitalizado en un sistema.

La aplicación digitaliza los siguientes cuatro formularios del área de recepción:

• Trazabilidad de Producto: registro por bin de número y libras, con datos de cliente, finca, laguna, fechas de cosecha y recibo, y remisión SAG centralizados por encabezado de recepción.
• Calidad de Camarón Entero: evaluación de defectos físicos por muestra con totales de defecto, nítido y suma general. Los tipos de defecto son parametrizables desde un catálogo administrable.
• Clasificación de Tallas en Camarón Entero: conteo de unidades por peso en gramos con porcentaje por rango de talla y cálculo automático de talla dominante.
• Resumen de Muestras de Sabor: panel de cata donde múltiples panelistas califican lotes del 0 al 10 con total de respuestas por código.


4. Estructura de Datos

TrazApp utiliza 14 tablas organizadas en tres grupos: tablas maestras (catálogos compartidos), tabla de parametrización y tablas transaccionales (una por formulario digitalizado, con sus respectivas tablas de detalle hijo).

4.1 Tablas Maestras (Catálogos)

Tabla         | Propósito                                          | Campos implementados                               | Tipo
--------------|----------------------------------------------------|-----------------------------------------------------|----------
clientes      | Empresas compradoras del camarón                  | id, nombre, estado                                  | Obligatoria
fincas        | Fincas acuícolas proveedoras                       | id, nombre, idCliente, estado                       | Obligatoria
lagunas       | Lagunas de cultivo por finca                       | id, nombre, idFinca, estado                         | Obligatoria
usuarios      | Inspectores, verificadores y panelistas de planta  | id, nombre, rol, correo, telefono, estado           | Obligatoria

Roles de usuario implementados: admin, supervisor, inspector, verificador, panelista, operario.

4.2 Tabla de Parametrización

Tabla          | Propósito                                                                                                                                  | Campos implementados              | Tipo
---------------|--------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|----------
tipos_defecto  | Catálogo administrable de tipos de defecto físico para el formulario Calidad de Camarón Entero. Solo el administrador puede crear, editar o desactivar tipos. | id, nombre, descripcion, estado   | Obligatoria

Esta tabla reemplaza las columnas fijas del formulario STB/ACC/R001. El formulario se genera dinámicamente leyendo los tipos activos, lo que permite agregar o desactivar defectos sin modificar el código de la aplicación. No se permite eliminar un tipo que ya tenga registros asociados; solo se desactiva.

4.3 Tablas Transaccionales (Formularios Digitalizados)

Tabla                    | Formulario origen                          | Campos implementados                                                                                                                                        | Tipo
-------------------------|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|----------
trazabilidad_recepcion   | Trazabilidad de Producto                   | id, loteInterno, fecha, turno, idCliente, idFinca, idLaguna, fechaCosecha, horaCosecha, horaRecibido, remisionSAG, numeroAutorizacion, idUsuarioRealiza, observaciones, correcciones, latitud, longitud | Obligatoria
detalle_bins             | Trazabilidad de Producto                   | id, idRecepcion, numeroBin, cantidadLibras, horaInicioProceso, estado                                                                                        | Obligatoria
calidad_entero           | Calidad de Camarón Entero                  | id, fecha, turno, tipo, idRecepcion, loteInterno, idCliente, idFinca, idLaguna, gramos, observacion, correccion, supervisor, idUsuarioRealiza, estado, idUsuarioVerifica, latitud, longitud | Obligatoria
detalle_calidad          | Calidad de Camarón Entero                  | id, idCalidad, idTipoDefecto, cantidad, esNitido                                                                                                             | Obligatoria
clasificacion_tallas     | Clasificación de Tallas en Camarón Entero  | id, fecha, turno, tipo, idRecepcion, loteInterno, idCliente, idFinca, idLaguna, pesoMuestra, tallaDominante, idUsuarioRealiza, estado, idUsuarioVerifica, latitud, longitud | Obligatoria
detalle_tallas           | Clasificación de Tallas en Camarón Entero  | id, idClasif, rangoTalla, pesoGramos, cantidad, porcentaje                                                                                                   | Obligatoria
muestras_sabor           | Resumen de Muestras de Sabor               | id, fecha, tipo, turno, idUsuarioRealiza, observaciones, estado, idUsuarioVerifica, latitud, longitud                                                        | Obligatoria
detalle_sabor            | Resumen de Muestras de Sabor               | id, idMuestra, codigo, idCliente, idFinca, idLaguna, idPanelista, calificacion, totalRespuestas                                                              | Obligatoria
fotos                    | Evidencia fotográfica                      | id, idRegistro, tipoRegistro, pathLocal, nombreArchivo, latitud, longitud, fechaFoto                                                                         | Obligatoria

Decisiones de diseño adoptadas

• Los campos idCliente, idFinca, idLaguna, fechaCosecha, horaCosecha, horaRecibido, remisionSAG y numeroAutorizacion se centralizaron en el encabezado trazabilidad_recepcion. En el formulario original cada bin los repetía; en TrazApp una recepción corresponde a un solo lote de un solo cliente/finca/laguna, lo que elimina redundancia sin perder trazabilidad.
• detalle_bins registra el estado operativo de cada bin (pendiente / procesado) y la horaInicioProceso. El flujo de verificación en recepciones se realiza bin a bin mediante "Procesar Bin"; no existe un campo de verificación global de recepción.
• loteInterno en trazabilidad_recepcion se genera automáticamente con el patrón R-YYYY-MM-DD-NNNN y se desnormaliza en calidad_entero y clasificacion_tallas para acceso rápido sin JOINs.
• tallaDominante en clasificacion_tallas se calcula automáticamente en el formulario seleccionando el rango con mayor cantidad acumulada de camarones.
• Los registros de calidad (calidad_entero, clasificacion_tallas, muestras_sabor) incorporan un campo estado (pendiente / verificado / declinado) que permite el flujo de aprobación por supervisor.
• El campo idUsuarioVerifica en trazabilidad_recepcion existe en el modelo de datos pero el formulario de recepción no lo expone al usuario; la verificación de recepciones se hace exclusivamente a nivel de bins.


5. Requerimientos Funcionales Obligatorios

5.1 Gestión de Trazabilidad de Recepción

• Registrar encabezados de recepción con lote interno auto-generado (patrón R-YYYY-MM-DD-NNNN correlativo por día), fecha, turno (A/B mediante ion-segment), cliente, finca, laguna, fechas y horas de cosecha y recibo, remisión SAG, número de autorización y campo "Realizado por".
• Agregar múltiples bins por recepción con número de bin, libras y estado visual (pendiente/procesado).
• Procesar bins individualmente desde la lista de recepciones: registra la horaInicioProceso actual y cambia el estado a "procesado".
• Listar recepciones con buscador (lote, cliente, fecha) y filtro por turno en pantalla principal.
• Expandir/colapsar el detalle de una recepción directamente en la lista para ver sus bins.
• Editar datos del encabezado desde el formulario de recepción.
• Capturar coordenadas GPS del punto de recepción; mostrar latitud y longitud en el formulario.
• Adjuntar fotos desde cámara o galería asociadas a la recepción con visualización en lightbox.
• Registrar observaciones y acciones correctivas aplicadas.

5.2 Gestión de Calidad de Camarón Entero

• Registrar evaluaciones de calidad vinculadas a un lote (recepción) con cliente, finca y laguna heredados automáticamente al seleccionar el lote.
• El formulario carga dinámicamente los tipos de defecto activos desde el catálogo tipos_defecto.
• Ingresar cantidad de unidades por tipo de defecto mediante botones +/− táctiles.
• Calcular automáticamente suma de defectos, suma de nítidos, total de la muestra y porcentajes.
• Registrar gramaje de la muestra, observaciones, correcciones y nombre del supervisor.
• Seleccionar turno (A/B) y tipo de proceso (Proceso/Proxco) mediante ion-segment.
• Flujo de aprobación: pendiente → verificado/declinado con selección de usuario verificador.
• Listar evaluaciones con filtro por turno y estado; badge de color diferenciado por estado.
• Eliminar con confirmación mediante deslizamiento (ion-item-sliding).

5.3 Administración de Tipos de Defecto

• Pantalla exclusiva para administrador que permite crear, editar y desactivar tipos de defecto.
• Cada tipo de defecto tiene nombre, descripción y estado (activo/inactivo).
• Solo los tipos con estado activo aparecen en el formulario de calidad de camarón entero.
• No se permite eliminar un tipo de defecto que ya tenga registros asociados; solo se desactiva.
• Al intentar eliminar un tipo con registros, se muestra un mensaje informativo con el número de registros vinculados y se ofrece la opción de desactivarlo.

5.4 Clasificación de Tallas

• Registrar clasificación por lote vinculada a una recepción con cliente, finca y laguna heredados.
• Seleccionar turno y tipo de proceso mediante ion-segment.
• Ingresar peso de muestra y conteo de unidades por rango de talla en 8 grupos predefinidos:
  10-20 g, 20-30 g, 30-40 g, 40-50 g, 50-60 g, 60-70 g, 70-80 g, 80-100 g.
• Cada grupo contiene pesos individuales en gramos con contador por peso.
• Calcular automáticamente subtotales por grupo, porcentajes y cobertura total.
• Calcular automáticamente la talla dominante (grupo con mayor subtotal de camarones).
• Flujo de aprobación: pendiente → verificado/declinado.
• Eliminar con confirmación mediante deslizamiento.

5.5 Muestras de Sabor — Panel de Cata

• Registrar sesión de cata con tipo, turno y usuario que realiza.
• Seleccionar panelistas participantes (mínimo 3) con toggle; la calificación de cada panelista aparece automáticamente en todos los códigos al seleccionarlo.
• Agregar hasta 6 códigos de lote por sesión, cada uno con su cliente, finca y laguna.
• Cada panelista ingresa su calificación (0–10) por cada lote evaluado.
• Calcular promedio por lote automáticamente con indicador de estado: Aprobado (≥9), Revisar (≥7), Rechazado (<7).
• Flujo de aprobación: pendiente → verificado/declinado.
• Eliminar con confirmación mediante deslizamiento.

5.6 Geolocalización

• La aplicación obtiene la ubicación actual del dispositivo mediante Capacitor Geolocation (enableHighAccuracy: true).
• La latitud y longitud se capturan mediante botón "Capturar Ubicación" en los formularios de recepción, calidad entero, clasificación de tallas y muestras de sabor.
• Las coordenadas se almacenan en el registro correspondiente.

5.7 Cámara y Galería

• La app permite tomar una foto o seleccionar una desde la galería mediante Capacitor Camera (calidad 40%, 800×800 px, formato Base64).
• Las fotos se guardan localmente con Capacitor Filesystem en Directory.Data con nombre IMG_${Date.now()}.jpeg.
• La foto se asocia al registro correspondiente mediante la tabla fotos (tipoRegistro: recepcion/calidad/tallas/sabor).
• Las imágenes se mantienen disponibles después de cerrar la aplicación.
• Visualización en lightbox al tocar la miniatura.

5.8 Filtros y Búsquedas

• Buscador de texto libre en listado de recepciones (lote, cliente, fecha) y en lista de calidades.
• Filtro por turno (A/B) en listados de recepciones y calidades.
• Filtro por estado (pendiente/verificado/declinado) en listado de calidades.
• Los filtros se aplican en tiempo real sin recargar la aplicación.

5.9 Visualización por Estado

• Registros verificados con badge en verde.
• Registros pendientes con badge en amarillo.
• Registros declinados con badge en rojo.
• Bins pendientes con ícono en amarillo; bins procesados con ícono en verde y chip "OK".


6. Funcionalidades Adicionales Implementadas

• Dashboard con conteo de bins recibidos hoy, evaluaciones de calidad entero realizadas hoy y muestras de sabor registradas hoy, con accesos directos a cada módulo.
• Gestión completa CRUD de catálogos: clientes, fincas, lagunas, usuarios con activación/desactivación mediante toggle.
• Cascading dropdowns: al seleccionar cliente se cargan solo sus fincas activas; al seleccionar finca se cargan solo sus lagunas activas; aplicado tanto en formularios principales como en catálogos.
• Selector de turno y tipo de proceso como botones de selección directa (ion-segment) para uso táctil en planta.
• Lote interno generado automáticamente con patrón R-YYYY-MM-DD-NNNN correlativo por día.
• Selector de lote en formularios de calidad con información de cliente, finca y laguna para facilitar la identificación.
• Bins con estado visual (pendiente/procesado) e ícono de estado en la lista expandible.
• Campo correcciones en recepción para registrar acciones correctivas aplicadas.
• Validación antes de eliminar tipos de defecto: bloquea eliminación si existen registros asociados.
• Componentes modales reutilizables (FincaFormComponent, LagunaFormComponent, UsuarioFormComponent) para los formularios de catálogos.
• ionViewWillEnter en listas de calidades y recepciones para recarga automática al regresar de un formulario.


7. Requerimientos Técnicos

• Framework obligatorio: Ionic 8 con Angular 20.
• API implementada con JSON Server (npx json-server --watch db.json --port 3000).
• Consumo de datos mediante HttpClient de Angular.
• Organización del código en carpetas: pages/, services/ y models/.
• Navegación mediante Side Menu con acceso a los módulos principales.
• Plugins nativos de Capacitor: Geolocation y Camera (obligatorios); Filesystem (para persistencia de fotos).
• Interceptor HTTP (NumericIdInterceptor) para normalización de tipos de ID entre frontend y API.
• Generación de IDs en cliente: String(Date.now()) garantiza compatibilidad con el sistema de rutas de JSON Server (comparación estricta de tipos). Las claves foráneas se almacenan como number para compatibilidad con los filtros por query param de JSON Server.
• Código comentado en servicios y componentes principales.
• Separación estricta de responsabilidades entre páginas, servicios y modelos.


8. Pantallas Implementadas

#  | Pantalla                         | Ruta                               | Descripción
---|----------------------------------|------------------------------------|-------------
1  | Dashboard                        | /dashboard                         | Conteo de bins, calidades y sabores del día. Accesos rápidos a cada módulo.
2  | Listado de recepciones           | /recepciones                       | Tarjetas expandibles con buscador y filtro por turno. Procesado de bins desde la lista.
3  | Formulario de recepción          | /recepcion-form / /recepcion-form/:id | Creación y edición de encabezado, gestión de bins, GPS y fotos. Modo solo lectura con queryParam modo=ver.
4  | Detalle de recepción             | /recepciones/:id                   | Vista completa del encabezado con tabla de bins y estado por bin.
5  | Listado de calidades             | /calidades                         | Menú de acceso a los tres tipos + lista por tipo con swipe para editar/validar/eliminar.
6  | Formulario de calidad entero     | /calidad-entero-form / /:id        | Tipos de defecto dinámicos con botones +/−, cálculo de totales y porcentajes, GPS y fotos.
7  | Formulario de clasificación tallas | /clasificacion-tallas-form / /:id | Tabla de conteo por rango con subtotales, porcentajes y talla dominante automática.
8  | Formulario de muestra de sabor   | /muestra-sabor-form / /:id         | Panel de cata con selección de panelistas, calificaciones por código y estado por promedio.
9  | Catálogos — Menú                 | /catalogos                         | Acceso a los cuatro catálogos con íconos.
10 | Catálogo de clientes             | /catalogos/clientes                | Lista con buscador, CRUD inline mediante alert, toggle de estado.
11 | Catálogo de fincas               | /catalogos/fincas                  | Lista con buscador, modal FincaFormComponent, cascading por cliente, toggle de estado.
12 | Catálogo de lagunas              | /catalogos/lagunas                 | Lista con buscador, modal LagunaFormComponent, cascading por finca, toggle de estado.
13 | Catálogo de usuarios             | /catalogos/usuarios                | Lista con buscador, modal UsuarioFormComponent, toggle de estado.
14 | Tipos de defecto (Admin)         | /tipos-defecto                     | CRUD con alert, toggle activo/inactivo, protección ante eliminación con registros.


9. Reglas de Interfaz y Experiencia de Usuario

• Interfaz limpia, ordenada y apta para uso en planta (pantalla táctil, condiciones de trabajo exigentes).
• Uso de componentes Ionic: ion-card, ion-list, ion-button, ion-input, ion-alert, ion-toast, ion-segment, ion-badge, ion-chip, ion-item-sliding.
• Validación visual en formularios para campos obligatorios con mensajes de error claros mediante ion-toast.
• Las acciones de guardar, actualizar y eliminar informan al usuario mediante toast o alert de confirmación.
• Los contadores de defectos (+/−) y selectores de turno/tipo son de tamaño suficiente para uso táctil cómodo en planta.
• Swipe izquierdo (ion-item-sliding) en listas de calidades para acceder a Editar, Validar y Eliminar.
• Tarjetas expandibles en lista de recepciones para ver bins sin salir de la pantalla principal.
• Lightbox para visualización de fotos a pantalla completa.


10. Lineamientos de la API JSON Server

El archivo db.json contiene datos iniciales para todas las entidades. Endpoints implementados:

Endpoint                                    | Descripción
--------------------------------------------|---------------------------------------------
GET /trazabilidad_recepcion                 | Listar todos los encabezados de recepción
GET /trazabilidad_recepcion/:id             | Obtener recepción por ID
POST /trazabilidad_recepcion                | Crear nuevo registro de recepción
PATCH /trazabilidad_recepcion/:id           | Actualizar recepción existente
DELETE /trazabilidad_recepcion/:id          | Eliminar recepción
GET /detalle_bins?idRecepcion=X             | Obtener bins de una recepción
POST /detalle_bins                          | Agregar bin
PATCH /detalle_bins/:id                     | Actualizar estado/hora de proceso de un bin
DELETE /detalle_bins/:id                    | Eliminar bin
GET /tipos_defecto                          | Listar todos los tipos de defecto
POST /tipos_defecto                         | Crear nuevo tipo
PATCH /tipos_defecto/:id                    | Actualizar o desactivar tipo
DELETE /tipos_defecto/:id                   | Eliminar tipo (solo sin registros)
GET /calidad_entero                         | Listar evaluaciones de calidad
GET /calidad_entero/:id                     | Obtener evaluación por ID
POST /calidad_entero                        | Registrar nueva evaluación
PATCH /calidad_entero/:id                   | Actualizar evaluación (incluye cambio de estado)
DELETE /calidad_entero/:id                  | Eliminar evaluación
GET /detalle_calidad?idCalidad=X            | Obtener defectos por evaluación
GET /detalle_calidad?idTipoDefecto=X        | Verificar registros asociados a un tipo
POST /detalle_calidad                       | Registrar detalle de defecto
GET /clasificacion_tallas                   | Listar clasificaciones
GET /clasificacion_tallas/:id               | Obtener clasificación por ID
POST /clasificacion_tallas                  | Registrar nueva clasificación
PATCH /clasificacion_tallas/:id             | Actualizar (incluye cambio de estado)
DELETE /clasificacion_tallas/:id            | Eliminar clasificación
GET /detalle_tallas?idClasif=X              | Obtener detalles por clasificación
POST /detalle_tallas                        | Registrar detalle de talla
GET /muestras_sabor                         | Listar sesiones de cata
GET /muestras_sabor/:id                     | Obtener sesión por ID
POST /muestras_sabor                        | Registrar nueva sesión
PATCH /muestras_sabor/:id                   | Actualizar (incluye cambio de estado)
DELETE /muestras_sabor/:id                  | Eliminar sesión
GET /detalle_sabor?idMuestra=X              | Obtener calificaciones por sesión
POST /detalle_sabor                         | Registrar calificación de panelista
PATCH /detalle_sabor/:id                    | Actualizar calificación
GET /clientes                               | Catálogo de clientes
POST /clientes                              | Crear cliente
PATCH /clientes/:id                         | Actualizar cliente
GET /fincas                                 | Catálogo de fincas
GET /fincas?idCliente=X&estado=activo       | Fincas activas de un cliente
POST /fincas                                | Crear finca
PATCH /fincas/:id                           | Actualizar finca
GET /lagunas                                | Catálogo de lagunas
GET /lagunas?idFinca=X&estado=activo        | Lagunas activas de una finca
POST /lagunas                               | Crear laguna
PATCH /lagunas/:id                          | Actualizar laguna
GET /usuarios                               | Catálogo de usuarios
GET /usuarios?rol=panelista&estado=activo   | Panelistas activos
GET /usuarios?rol=verificador               | Verificadores
POST /usuarios                              | Crear usuario
PATCH /usuarios/:id                         | Actualizar usuario
GET /fotos?idRegistro=X                     | Obtener fotos de un registro
POST /fotos                                 | Registrar referencia de foto
DELETE /fotos/:id                           | Eliminar referencia de foto


11. Estructura de Archivos del Proyecto

Trazapp/
├── .gitignore
├── README.md
├── TrazApp_Estructura.md
├── Api-Trazapp/
│   └── db.json                              # Base de datos JSON Server (14 colecciones)
└── TrazApp/
    └── src/
        └── app/
            ├── app.component.ts / .html / .scss
            ├── app.module.ts
            ├── app-routing.module.ts
            ├── interceptors/
            │   └── numeric-id.interceptor.ts
            ├── models/                      # 14 interfaces TypeScript
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
            ├── services/                    # 10 servicios Angular
            │   ├── cliente.service.ts
            │   ├── finca.service.ts
            │   ├── laguna.service.ts
            │   ├── usuario.service.ts
            │   ├── tipo-defecto.service.ts
            │   ├── trazabilidad.service.ts
            │   ├── calidad-entero.service.ts
            │   ├── clasificacion-tallas.service.ts
            │   ├── muestra-sabor.service.ts
            │   └── foto.service.ts
            └── pages/
                ├── dashboard/
                │   └── dashboard.page.ts / .html / .scss / .module.ts
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
                │   │   └── finca-form/        (componente modal)
                │   ├── lagunas/
                │   │   └── laguna-form/       (componente modal)
                │   └── usuarios/
                │       └── usuario-form/      (componente modal)
                └── admin/
                    └── tipos-defecto/


12. Servicios — Métodos Implementados

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
  getDetalleByMuestra(idMuestra), createDetalle(detalle)

foto.service.ts
  getFotosByRegistro(idRegistro), createFoto(foto), deleteFoto(id),
  tomarOSeleccionarFoto(source), obtenerPathVisible(pathLocal),
  borrarFotoLocal(nombreArchivo), obtenerUbicacion()


13. Entregables del Estudiante

• Proyecto Ionic funcional con todos los módulos implementados.
• Archivo db.json con datos iniciales representativos (mínimo 2 registros por tabla).
• Capturas de pantalla o video corto demostrando el funcionamiento de cada módulo.
• Explicación breve de las 14 tablas utilizadas y su correspondencia con los formularios reales de planta.
• Evidencia del uso de geolocalización (coordenadas capturadas en formulario) y cámara (foto adjunta a un registro).
• Manual corto de ejecución:

  Iniciar API:
    cd Api-Trazapp
    npx json-server --watch db.json --port 3000

  Iniciar aplicación:
    cd TrazApp
    npm install
    ionic serve
