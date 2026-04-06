


TrazApp
Sistema de Trazabilidad y Control de Calidad
en Recepción de Camarón

Especificación del Proyecto
Ionic con Angular — JSON Server — Capacitor


 
1. Objetivo General del Proyecto
Desarrollar una aplicación móvil funcional llamada TrazApp, utilizando Ionic con Angular, que permita registrar, consultar, actualizar y eliminar los registros de calidad y trazabilidad del área de recepción de materia prima en una empacadora de camarón. La aplicación integra geolocalización, captura de imágenes, filtros de búsqueda y consumo de una API REST implementada con JSON Server, digitalizando cuatro formularios que actualmente se gestionan en papel dentro de la planta.
2. Alcance Mínimo Esperado
•	Interfaz móvil completa con navegación clara mediante Side Menu y estructura modular por páginas.
•	Consumo de API REST creada con JSON Server mediante HttpClient de Angular.
•	Implementación de 14 tablas, justificadas por la naturaleza real del proyecto.
•	Operaciones completas de mostrar, mostrar por id, insertar, actualizar y eliminar en las entidades principales.
•	Uso obligatorio de Geolocation y Camera como plugins nativos de Capacitor.
•	Las imágenes se guardarán en el dispositivo usando Capacitor Filesystem; la API almacenará la referencia del archivo.
3. Tema del Proyecto
Nombre: TrazApp — Sistema de Trazabilidad y Control de Calidad en Recepción de Camarón.

TrazApp nace de una necesidad real identificada en una empacadora de camarón activa. Actualmente el área de recepción de materia prima gestiona sus registros de calidad y trazabilidad de forma manual en papel, utilizando aproximadamente 50 formularios de distintos tipos. Ninguno de estos registros se encuentra digitalizado en un sistema.
La aplicación digitalizará los siguientes cuatro formularios del área de recepción:
•	Trazabilidad de Producto: registro por bin de número y libras, con datos de cliente, finca, laguna, fechas de cosecha y recibo, y remisión SAG centralizados por encabezado de recepción.
•	Calidad de Camarón Entero: evaluación de defectos físicos por muestra con totales de defecto, nítido y suma general. Los tipos de defecto son parametrizables desde un catálogo administrable.
•	Clasificación de Tallas en Camarón Entero: conteo de unidades por peso en gramos con porcentaje por rango de talla y cálculo automático de talla dominante.
•	Resumen de Muestras de Sabor: panel de cata donde múltiples panelistas califican lotes del 0 al 10 con total de respuestas por código.
4. Estructura de Datos
TrazApp utiliza 14 tablas organizadas en tres grupos: tablas maestras (catálogos compartidos), tabla de parametrización y tablas transaccionales (una por formulario digitalizado, con sus respectivas tablas de detalle hijo).
4.1 Tablas Maestras (Catálogos)
Tabla	Propósito	Campos implementados	Tipo
clientes	Empresas compradoras del camarón	id, nombre, estado	Obligatoria
fincas	Fincas acuícolas proveedoras	id, nombre, idCliente, estado	Obligatoria
lagunas	Lagunas de cultivo por finca	id, nombre, idFinca, estado	Obligatoria
usuarios	Inspectores, verificadores y panelistas de planta	id, nombre, rol, correo, telefono, estado	Obligatoria

Roles de usuario implementados: admin, supervisor, inspector, verificador, panelista, operario.
4.2 Tabla de Parametrización
Tabla	Propósito	Campos implementados	Tipo
tipos_defecto	Catálogo administrable de tipos de defecto físico para el formulario Calidad de Camarón Entero. Solo el administrador puede crear, editar o desactivar tipos.	id, nombre, descripcion, estado	Obligatoria

Esta tabla reemplaza las columnas fijas del formulario STB/ACC/R001. El formulario se genera dinámicamente leyendo los tipos activos, lo que permite agregar o desactivar defectos sin modificar el código de la aplicación. No se permite eliminar un tipo que ya tenga registros asociados; solo se desactiva.
4.3 Tablas Transaccionales (Formularios Digitalizados)
Tabla	Formulario origen	Campos implementados	Tipo
trazabilidad_recepcion	Trazabilidad de Producto	id, loteInterno, fecha, turno, idCliente, idFinca, idLaguna, fechaCosecha, horaCosecha, horaRecibido, remisionSAG, numeroAutorizacion, idUsuarioRealiza, observaciones, correcciones, latitud, longitud	Obligatoria
detalle_bins	Trazabilidad de Producto	id, idRecepcion, numeroBin, cantidadLibras, horaInicioProceso, estado	Obligatoria
calidad_entero	Calidad de Camarón Entero	id, fecha, turno, tipo, idRecepcion, loteInterno, idCliente, idFinca, idLaguna, gramos, observacion, correccion, supervisor, idUsuarioRealiza, estado, idUsuarioVerifica, latitud, longitud	Obligatoria
detalle_calidad	Calidad de Camarón Entero	id, idCalidad, idTipoDefecto, cantidad, esNitido	Obligatoria
clasificacion_tallas	Clasificación de Tallas en Camarón Entero	id, fecha, turno, tipo, idRecepcion, loteInterno, idCliente, idFinca, idLaguna, pesoMuestra, tallaDominante, idUsuarioRealiza, estado, idUsuarioVerifica, latitud, longitud	Obligatoria
detalle_tallas	Clasificación de Tallas en Camarón Entero	id, idClasif, rangoTalla, pesoGramos, cantidad, porcentaje	Obligatoria
muestras_sabor	Resumen de Muestras de Sabor	id, fecha, tipo, turno, idUsuarioRealiza, observaciones, estado, idUsuarioVerifica, latitud, longitud	Obligatoria
detalle_sabor	Resumen de Muestras de Sabor	id, idMuestra, codigo, idCliente, idFinca, idLaguna, idPanelista, calificacion, totalRespuestas	Obligatoria
fotos	Evidencia fotográfica	id, idRegistro, tipoRegistro, pathLocal, nombreArchivo, latitud, longitud, fechaFoto	Obligatoria

Decisiones de diseño adoptadas
•	Los campos idCliente, idFinca, idLaguna, fechaCosecha, horaCosecha, horaRecibido, remisionSAG y numeroAutorizacion se centralizaron en el encabezado trazabilidad_recepcion. En el formulario original cada bin los repetía; en TrazApp una recepción corresponde a un solo lote de un solo cliente/finca/laguna, lo que elimina redundancia sin perder trazabilidad.
•	detalle_bins registra el estado operativo de cada bin (pendiente / procesado) y la horaInicioProceso, datos que el formulario original no capturaba.
•	loteInterno en trazabilidad_recepcion se genera automáticamente con el patrón R-YYYY-MM-DD-NNNN y se desnormaliza en calidad_entero y clasificacion_tallas para acceso rápido sin JOINs.
•	tallaDominante en clasificacion_tallas se calcula automáticamente en el formulario seleccionando el rango con mayor porcentaje acumulado.
•	Los registros de calidad incorporan un campo estado (pendiente / verificado / declinado) que permite el flujo de aprobación por supervisor.
5. Requerimientos Funcionales Obligatorios
5.1 Gestión de Trazabilidad de Recepción
•	Registrar encabezados de recepción con lote interno auto-generado, fecha, turno (A/B mediante botones de selección directa), cliente, finca, laguna, fechas y horas de cosecha y recibo, remisión SAG, número de autorización y usuario que realiza (campo "Realizado por").
•	Agregar múltiples bins por recepción con número de bin, libras y estado (pendiente/procesado).
•	Listar recepciones con buscador y filtro por turno en pantalla principal.
•	Consultar el detalle de una recepción mostrando cabecera completa y todos sus bins con estado visual.
•	Editar datos del encabezado desde el formulario de recepción.
•	Eliminar con mensaje de confirmación.
•	Capturar coordenadas GPS del punto de recepción; mostrar latitud y longitud en el detalle.
•	Adjuntar fotos desde cámara o galería asociadas a la recepción.
•	Registrar observaciones y acciones correctivas aplicadas.
5.2 Gestión de Calidad de Camarón Entero
•	Registrar evaluaciones de calidad vinculadas a un lote (recepción) con cliente, finca y laguna heredados.
•	El formulario cargará dinámicamente los tipos de defecto activos desde el catálogo tipos_defecto.
•	Ingresar cantidad de unidades por tipo de defecto.
•	Calcular automáticamente suma de defectos, suma de nítidos y total de la muestra.
•	Registrar gramaje de la muestra.
•	Seleccionar turno (A/B) y tipo de proceso (Proceso/Proxco) mediante botones de selección directa.
•	Flujo de aprobación: pendiente → verificado/declinado. Solo el verificador puede cambiar el estado.
•	Listar evaluaciones con filtro por turno y estado; visualización diferenciada por color según estado.
•	Operación de eliminar con confirmación mediante deslizamiento (swipe izquierdo).
5.3 Administración de Tipos de Defecto
•	Pantalla exclusiva para administrador que permite crear, editar y desactivar tipos de defecto.
•	Cada tipo de defecto tiene nombre, descripción y estado (activo/inactivo).
•	Solo los tipos con estado activo aparecen en el formulario de calidad de camarón entero.
•	No se permite eliminar un tipo de defecto que ya tenga registros asociados; solo se desactiva.
•	Al intentar eliminar un tipo con registros, se muestra un mensaje informativo con el número de registros vinculados.
5.4 Clasificación de Tallas
•	Registrar clasificación por lote vinculada a una recepción con cliente, finca y laguna heredados.
•	Seleccionar turno y tipo de proceso mediante botones de selección directa.
•	Agregar conteo de unidades por rango de talla (8 grupos: 10-20 g hasta 80-100 g) con peso en gramos.
•	Calcular automáticamente totales y porcentajes por rango.
•	Calcular automáticamente la talla dominante (rango con mayor porcentaje).
•	Flujo de aprobación: pendiente → verificado/declinado.
•	Operación de eliminar con confirmación mediante deslizamiento (swipe izquierdo).
5.5 Muestras de Sabor — Panel de Cata
•	Registrar sesión de cata con tipo, turno (mediante botones de selección directa) y panelistas participantes.
•	Agregar hasta 6 códigos de lote por sesión, cada uno con su cliente, finca y laguna.
•	Cada panelista ingresa su calificación (0–10) por cada lote evaluado.
•	Calcular promedio y total de respuestas por lote automáticamente.
•	Flujo de aprobación: pendiente → verificado/declinado.
•	Operación de eliminar con confirmación mediante deslizamiento (swipe izquierdo).
5.6 Geolocalización
•	La aplicación obtendrá la ubicación actual del dispositivo mediante Capacitor Geolocation.
•	La latitud y longitud se capturan mediante botón "Capturar Ubicación" en los formularios de recepción y calidad.
•	Las coordenadas se almacenan en el registro y se muestran en el detalle de la recepción.
5.7 Cámara y Galería
•	La app permitirá tomar una foto o seleccionar una desde la galería mediante Capacitor Camera.
•	La foto se asociará al registro correspondiente mediante la tabla fotos.
•	La imagen se mantendrá disponible después de cerrar la aplicación usando Capacitor Filesystem.
•	La API almacenará la referencia (path local) de cada imagen.
5.8 Filtros y Búsquedas
•	Buscador por número de bin o texto libre en listado de recepciones.
•	Filtro por turno (A/B) en listados de recepciones y calidades.
•	Los filtros actualizarán la información mostrada sin recargar la aplicación.
5.9 Visualización por Estado
•	Registros verificados/aprobados con indicador visual en verde.
•	Registros pendientes con indicador visual en amarillo.
•	Registros declinados/rechazados con indicador visual en rojo.
•	La diferencia será evidente mediante badge de color en cada ítem de lista.
6. Funcionalidades Adicionales Implementadas
•	Dashboard con conteo de bins recibidos, evaluaciones de calidad entero realizadas y muestras de sabor registradas.
•	Gestión completa CRUD de catálogos: clientes, fincas, lagunas, usuarios con activación/desactivación.
•	Cascading dropdowns: al seleccionar cliente se cargan solo sus fincas activas; al seleccionar finca se cargan solo sus lagunas activas.
•	Selector de turno y tipo de proceso como botones de selección directa (ion-segment) para uso táctil en planta.
•	Lote interno generado automáticamente con patrón R-YYYY-MM-DD-NNNN correlativo por día.
•	Selector de lote en formularios de calidad con información de cliente, finca y laguna para facilitar la identificación.
•	Bins con estado (pendiente/procesado) e icono de estado en la lista.
•	Campo correcciones en recepción para registrar acciones correctivas aplicadas.
•	Validación antes de eliminar tipos de defecto: bloquea eliminación si existen registros asociados.
7. Requerimientos Técnicos
•	Framework obligatorio: Ionic con Angular.
•	API implementada con JSON Server.
•	Consumo de datos mediante HttpClient de Angular.
•	Organización del código en carpetas: pages/, services/ y models/.
•	Navegación mediante Side Menu con acceso a los módulos principales.
•	Plugins nativos de Capacitor: Geolocation y Camera (obligatorios); Filesystem (para persistencia de fotos).
•	Código comentado en servicios y componentes principales.
•	Nombres de variables, servicios y modelos descriptivos y consistentes.
•	La lógica no se escribirá en un solo archivo; separación estricta de responsabilidades.
•	Interceptor HTTP (NumericIdInterceptor) para normalización de tipos de ID entre frontend y API.
8. Pantallas Implementadas
#	Pantalla	Descripción
1	Inicio / Dashboard	Resumen de conteos globales (bins, calidades, sabores). Accesos rápidos a cada módulo.
2	Listado de recepciones	Lista de registros con buscador y filtro por turno.
3	Detalle de recepción	Cabecera del registro con tabla de bins, estado por bin e íconos de estado.
4	Formulario de recepción	Inserción y edición del encabezado, gestión de bins, captura GPS y fotos. Turno mediante botones directos.
5	Listado de calidades	Tres pestañas: calidad entero, clasificación de tallas, muestras de sabor. Swipe para editar/eliminar.
6	Formulario de calidad entero	Carga dinámica de tipos de defecto activos y cálculo automático de totales.
7	Formulario de clasificación de tallas	Tabla de conteo por rango con porcentajes y talla dominante calculados automáticamente.
8	Formulario de muestra de sabor	Encabezado de sesión, calificaciones por panelista y lote, resumen final con promedio.
9	Catálogos	Gestión de clientes, fincas, lagunas y usuarios con CRUD completo y activación/desactivación.
10	Tipos de defecto (Admin)	Creación, edición y desactivación de tipos de defecto. Eliminación protegida si tiene registros.

9. Reglas de Interfaz y Experiencia de Usuario
•	Interfaz limpia, ordenada y apta para uso en planta (pantalla táctil, condiciones de trabajo exigentes).
•	Uso de componentes Ionic: ion-card, ion-list, ion-button, ion-input, ion-alert, ion-toast, ion-segment.
•	Validación visual en formularios para campos obligatorios con mensajes de error claros mediante ion-toast.
•	Las acciones de guardar, actualizar y eliminar informarán al usuario mediante toast o alert de confirmación.
•	Los contadores de defectos y selectores de turno/tipo serán de tamaño suficiente para uso táctil cómodo en planta.
•	Swipe izquierdo (ion-item-sliding) en listas de calidades para acceder a Editar y Eliminar.
•	Swipe derecho en listas de calidades para acceder a la opción Declinar.
10. Lineamientos Específicos de la API JSON Server
El archivo db.json contendrá datos iniciales para todas las entidades. A continuación se detallan los endpoints implementados:
Endpoint	Descripción
GET /trazabilidad_recepcion	Listar todos los encabezados de recepción
GET /trazabilidad_recepcion/:id	Obtener recepción por ID
POST /trazabilidad_recepcion	Crear nuevo registro de recepción
PATCH /trazabilidad_recepcion/:id	Actualizar recepción existente
DELETE /trazabilidad_recepcion/:id	Eliminar recepción
GET /detalle_bins?idRecepcion=X	Obtener bins de una recepción específica
POST /detalle_bins	Agregar bin a una recepción
PATCH /detalle_bins/:id	Actualizar estado de un bin
DELETE /detalle_bins/:id	Eliminar bin
GET /tipos_defecto	Listar todos los tipos de defecto
POST /tipos_defecto	Crear nuevo tipo de defecto
PATCH /tipos_defecto/:id	Actualizar o desactivar tipo de defecto
DELETE /tipos_defecto/:id	Eliminar tipo de defecto (solo si no tiene registros)
GET /calidad_entero	Listar evaluaciones de calidad de camarón entero
GET /calidad_entero/:id	Obtener evaluación por ID
POST /calidad_entero	Registrar nueva evaluación de calidad
PATCH /calidad_entero/:id	Actualizar evaluación existente
DELETE /calidad_entero/:id	Eliminar evaluación
GET /detalle_calidad?idCalidad=X	Obtener defectos registrados por evaluación
POST /detalle_calidad	Registrar detalle de defecto
PATCH /detalle_calidad/:id	Actualizar detalle de defecto
GET /detalle_calidad?idTipoDefecto=X	Verificar registros asociados a un tipo de defecto
GET /clasificacion_tallas	Listar clasificaciones de talla
GET /clasificacion_tallas/:id	Obtener clasificación por ID
POST /clasificacion_tallas	Registrar nueva clasificación
PATCH /clasificacion_tallas/:id	Actualizar clasificación
DELETE /clasificacion_tallas/:id	Eliminar clasificación
GET /detalle_tallas?idClasif=X	Obtener detalles de talla por clasificación
POST /detalle_tallas	Registrar detalle de talla
PATCH /detalle_tallas/:id	Actualizar detalle de talla
GET /muestras_sabor	Listar sesiones de cata
GET /muestras_sabor/:id	Obtener sesión por ID
POST /muestras_sabor	Registrar nueva sesión de cata
PATCH /muestras_sabor/:id	Actualizar sesión
DELETE /muestras_sabor/:id	Eliminar sesión
GET /detalle_sabor?idMuestra=X	Obtener calificaciones por sesión
POST /detalle_sabor	Registrar calificación de panelista
PATCH /detalle_sabor/:id	Actualizar calificación
GET /clientes	Catálogo de clientes
POST /clientes	Crear cliente
PATCH /clientes/:id	Actualizar cliente
GET /fincas	Catálogo de fincas
GET /fincas?idCliente=X&estado=activo	Fincas activas de un cliente
POST /fincas	Crear finca
PATCH /fincas/:id	Actualizar finca
GET /lagunas	Catálogo de lagunas
GET /lagunas?idFinca=X&estado=activo	Lagunas activas de una finca
POST /lagunas	Crear laguna
PATCH /lagunas/:id	Actualizar laguna
GET /usuarios	Catálogo de usuarios
GET /usuarios?rol=panelista&estado=activo	Panelistas activos
GET /usuarios?rol=verificador	Verificadores
POST /usuarios	Crear usuario
PATCH /usuarios/:id	Actualizar usuario
GET /fotos?idRegistro=X	Obtener fotos asociadas a un registro
POST /fotos	Registrar referencia de foto

11. Estructura de Archivos del Proyecto

Trazapp/
├── Api-Trazapp/
│   └── db.json                        # Base de datos JSON (14 colecciones)
├── TrazApp/
│   └── src/
│       └── app/
│           ├── interceptors/
│           │   └── numeric-id.interceptor.ts
│           ├── models/                # 14 interfaces TypeScript
│           │   ├── calidad-entero.model.ts
│           │   ├── clasificacion-tallas.model.ts
│           │   ├── cliente.model.ts
│           │   ├── detalle-bin.model.ts
│           │   ├── detalle-calidad.model.ts
│           │   ├── detalle-sabor.model.ts
│           │   ├── detalle-talla.model.ts
│           │   ├── finca.model.ts
│           │   ├── foto.model.ts
│           │   ├── laguna.model.ts
│           │   ├── muestra-sabor.model.ts
│           │   ├── tipo-defecto.model.ts
│           │   ├── trazabilidad-recepcion.model.ts
│           │   └── usuario.model.ts
│           ├── services/              # 10 servicios Angular
│           │   ├── calidad-entero.service.ts
│           │   ├── clasificacion-tallas.service.ts
│           │   ├── cliente.service.ts
│           │   ├── finca.service.ts
│           │   ├── foto.service.ts
│           │   ├── laguna.service.ts
│           │   ├── muestra-sabor.service.ts
│           │   ├── tipo-defecto.service.ts
│           │   ├── trazabilidad.service.ts
│           │   └── usuario.service.ts
│           └── pages/                 # 15 páginas + componentes inline
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
│               │   ├── fincas/           (incluye finca-form component)
│               │   ├── lagunas/          (incluye laguna-form component)
│               │   └── usuarios/         (incluye usuario-form component)
│               └── admin/
│                   └── tipos-defecto/
└── README.md
└── TrazApp_Estructura.md

12. Entregables del Estudiante
•	Proyecto Ionic funcional con todos los módulos implementados.
•	Archivo db.json con datos iniciales representativos (mínimo 2 registros por tabla).
•	Capturas de pantalla o video corto demostrando el funcionamiento de cada módulo.
•	Explicación breve de las 14 tablas utilizadas y su correspondencia con los formularios reales de planta.
•	Evidencia del uso de geolocalización (coordenadas capturadas en formulario) y cámara (foto adjunta a un registro).
•	Manual corto de ejecución: cómo correr JSON Server y cómo iniciar el proyecto Ionic.


