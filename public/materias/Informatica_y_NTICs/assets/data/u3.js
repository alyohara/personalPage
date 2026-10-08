/* ============================================================
   NTX — Unidad 3: Comunicaciones, redes y radios
   ============================================================ */
(function (NTX) {
  'use strict';

  NTX.unidades.push({
    id: 'u3',
    num: 3,
    icon: '◈',
    title: 'Comunicaciones, redes y radios',
    resumen: 'Cómo viaja la información desde quien pide ayuda hasta el hospital: proceso comunicacional, radio, telefonía, redes de datos, telemedicina y continuidad en desastres.',
    objetivos: [
      'Explicar los componentes de una comunicación (emisor, mensaje, canal, código, contexto, ruido y retroalimentación) aplicados a un caso de emergencia.',
      'Comparar radio, telefonía, datos móviles, Internet y satélite para elegir un canal según urgencia, cobertura y contingencia.',
      'Describir cómo viaja un dato clínico por una red: paquetes, direcciones (IP, DNS) y protocolos (TCP, UDP, HTTP).',
      'Reconocer los equipos de red (switch, router, access point, firewall) y las propiedades de seguridad: confidencialidad, integridad, disponibilidad y trazabilidad.',
      'Proponer un flujo multicanal de contingencia que reduzca demora, error y pérdida de continuidad, cuidando la privacidad de los pacientes.'
    ],
    secciones: [
      {
        h: 'El acto comunicacional en una emergencia',
        html: '<p>Comunicar en emergencias no es solamente hablar por teléfono o radio: es lograr que una <b>información correcta</b> llegue a la <b>persona correcta</b>, por un <b>medio disponible</b>, <b>a tiempo</b>, que se <b>comprenda</b>, se <b>confirme</b> y produzca una <b>acción segura</b>. Entre el choque que ve un testigo y la llegada del paciente al hospital ocurren muchas comunicaciones: llamada, interrogatorio, localización, despacho, radio, GPS, coordinación con otros servicios, preaviso y pase clínico.</p>' +
          '<p>El objetivo no es “usar tecnología” sino <b>disminuir demora, error y pérdida de continuidad</b>: un dato útil debe llegar, entenderse, verificarse y quedar disponible para quien lo necesita.</p>' +
          '<table class="tabla"><tr><th>Elemento</th><th>Lenguaje cotidiano</th><th>Ejemplo de emergencia</th></tr>' +
          '<tr><td><b>Emisor</b></td><td>Quien inicia la información</td><td>Operador/a que despacha</td></tr>' +
          '<tr><td><b>Receptor</b></td><td>Quien la recibe e interpreta</td><td>Tripulación del móvil</td></tr>' +
          '<tr><td><b>Mensaje</b></td><td>Lo que se transmite</td><td>“Colisión, dos víctimas, posible atrapado”</td></tr>' +
          '<tr><td><b>Canal</b></td><td>Medio por el que circula</td><td>Radio, teléfono, aplicación, voz directa</td></tr>' +
          '<tr><td><b>Código</b></td><td>Reglas, idioma y significados</td><td>Lenguaje claro, códigos operativos autorizados, SBAR</td></tr>' +
          '<tr><td><b>Contexto</b></td><td>Situación que da sentido</td><td>Ruido, estrés, calle, jerarquías, urgencia</td></tr>' +
          '<tr><td><b>Ruido</b></td><td>Todo lo que altera el mensaje</td><td>Sirena, mala cobertura, jerga, interferencia, dato incompleto</td></tr>' +
          '<tr><td><b>Retroalimentación</b></td><td>Respuesta que permite comprobar</td><td>“Recibido: móvil 12 a Av. Roca 850, dos víctimas; ETA 6 min”</td></tr></table>' +
          '<p>El ruido <b>no es sólo sonido</b>: puede ser <b>emocional</b> (pánico), <b>semántico</b> (siglas desconocidas), <b>técnico</b> (batería baja), <b>organizacional</b> (dos órdenes incompatibles) o <b>clínico</b> (información no actualizada). La herramienta más accesible para corregirlo es la <b>comunicación en circuito cerrado</b> (<i>closed-loop</i>): emitir, repetir/confirmar y corregir si es necesario.</p>' +
          '<p><b>SBAR para un preaviso:</b> <b>S</b>ituación (“Ambulancia 12, arribo en ocho minutos con adulto, dolor torácico”), <b>A</b>ntecedentes (“inicio hace 35 minutos, hipertensión”), <b>E</b>valuación (“ECG transmitido; requiere valoración médica”), <b>R</b>ecomendación (“solicitamos recepción en área crítica y confirmación de lectura”). SBAR no sustituye la evaluación ni el registro, y hay que adaptarlo al protocolo local.</p>' +
          '<p><b>Errores a evitar:</b> creer que un código o abreviatura siempre mejora la comunicación (ante equipos mixtos, el lenguaje claro y la confirmación suelen ser más seguros) y confundir <em>“recibido”</em> con <em>“comprendido correctamente”</em>. Separar siempre <b>hecho informado</b>, <b>dato verificado</b> y <b>suposición</b>.</p>'
      },
      {
        h: 'Historia de las comunicaciones: analógico y digital',
        html: '<p>La historia se lee mejor como una lista de <b>problemas resueltos</b> —distancia, velocidad, alcance, simultaneidad, fidelidad y cantidad de información— que como una lista de inventos. Cada salto resolvió algo y <b>creó una nueva dependencia</b>.</p>' +
          '<table class="tabla"><tr><th>Tecnología</th><th>Problema que resolvió</th><th>Límite que permaneció</th></tr>' +
          '<tr><td>Señales visuales y sonoras</td><td>Alertar a corta/media distancia sin traslado</td><td>Dependen de visibilidad, clima y significado compartido</td></tr>' +
          '<tr><td>Telégrafo (siglo XIX)</td><td>Llevar texto a gran distancia con rapidez</td><td>Requiere infraestructura y operadores</td></tr>' +
          '<tr><td>Teléfono (fines del s. XIX)</td><td>Conversación bidireccional inmediata</td><td>Voz efímera; dependencia de líneas y centrales</td></tr>' +
          '<tr><td>Radio (siglo XX)</td><td>Comunicación móvil uno-a-muchos y entre móviles</td><td>Cobertura, interferencia y disciplina de uso</td></tr>' +
          '<tr><td>Satélite (2.ª mitad del s. XX)</td><td>Cobertura de áreas remotas y enlaces distantes</td><td>Costo, energía, cielo visible y terminal</td></tr>' +
          '<tr><td>Internet y redes móviles</td><td>Integrar texto, voz, imagen, video, ubicación y sistemas</td><td>Dependencia de red, energía, seguridad e interoperabilidad</td></tr></table>' +
          '<p><b>Analógico:</b> representa una variación <b>continua</b>, como la aguja de un termómetro antiguo o la onda de voz de un micrófono. <b>Digital:</b> representa información con valores <b>discretos</b>, usualmente bits (0 y 1); permite copiar, almacenar, detectar errores y procesar datos.</p>' +
          '<table class="tabla"><tr><th>Aspecto</th><th>Analógico</th><th>Digital</th></tr>' +
          '<tr><td>Ejemplo</td><td>Radio AM/FM tradicional, aguja de reloj</td><td>Audio por mensajería, foto, ECG digital</td></tr>' +
          '<tr><td>Ruido</td><td>Degrada gradualmente (“se escucha con estática”)</td><td>Se recupera hasta cierto umbral; después entrecorta o no llega</td></tr>' +
          '<tr><td>Datos complejos</td><td>Limitado para integrar texto e imágenes</td><td>Combina voz, ubicación, imagen y registro</td></tr>' +
          '<tr><td>Uso en emergencias</td><td>Radio convencional simple y robusta</td><td>Telemedicina, despacho asistido, transmisión clínica</td></tr></table>' +
          '<p><b>Importante:</b> digital <b>no</b> significa automáticamente mejor, privado, disponible o sin demoras: requiere diseño, energía y recursos. Y se evita la falsa oposición “radio antigua versus 5G moderna”: el criterio es operacional (cobertura, prioridad, grupo de trabajo, energía, seguridad y respaldo).</p>'
      },
      {
        h: 'Radio: equipos, bandas y disciplina operativa',
        html: '<p>Una radio convierte la voz en señal de radiofrecuencia, la emite por una antena y otro equipo la recibe. La <b>frecuencia</b> es la “zona” del espectro donde opera; el <b>canal</b> es una asignación concreta para comunicarse. Distintos canales evitan conversaciones superpuestas y se gestionan por autoridad competente: nunca se sugieren frecuencias o códigos que la autoridad local no haya autorizado.</p>' +
          '<ul><li><b>VHF:</b> frecuencia más baja que UHF; en términos generales puede comportarse favorablemente en espacios abiertos, pero la cobertura real depende de geografía, antena, potencia y red.</li>' +
          '<li><b>UHF:</b> frecuencia más alta que VHF; se usa ampliamente en ámbitos urbanos y dentro de estructuras, aunque ningún rótulo garantiza penetración.</li>' +
          '<li><b>Portátil:</b> equipo que lleva una persona; movilidad a costa de batería, potencia y antena más limitadas.</li>' +
          '<li><b>Móvil:</b> radio instalada en la ambulancia; suele tener mejor alimentación y antena.</li>' +
          '<li><b>Repetidor:</b> recibe una señal y la retransmite desde un punto elevado para <b>extender la cobertura</b>.</li>' +
          '<li><b>Simplex:</b> hablar y escuchar usan el mismo canal, normalmente de a uno por vez (pulsar para hablar).</li>' +
          '<li><b>Dúplex:</b> transmisión y recepción simultáneas por trayectos o frecuencias separadas; familiar en telefonía.</li></ul>' +
          '<p><b>Disciplina de radio:</b> escuchar antes de transmitir, identificarse, decir ubicación y destinatario, usar frases breves, no dar información clínica innecesaria al aire, confirmar los datos críticos y registrar por el medio institucional definido. Ejemplo de mensaje corto: <i>“Central, móvil 12 en Av. Roca 850, colisión auto-moto, dos víctimas, una con dificultad respiratoria; solicitamos bomberos por derrame leve. Recibido y confirmo.”</i></p>' +
          '<p><b>Estándares digitales de radio bidireccional</b> (walkie-talkies profesionales):</p>' +
          '<table class="tabla"><tr><th>Estándar</th><th>Origen y características</th><th>Costo y seguridad</th><th>Uso típico</th></tr>' +
          '<tr><td><b>P25</b></td><td>EE. UU.; voz y datos, cifrado avanzado, interoperabilidad entre agencias; Fase II con TDMA de 2 ranuras en 12.5 kHz</td><td>El más costoso; seguridad muy alta</td><td>Seguridad pública de Norteamérica y Oceanía</td></tr>' +
          '<tr><td><b>TETRA</b></td><td>Estándar europeo (ETSI); TDMA de 4 ranuras en 25 kHz, alta eficiencia espectral, voz, datos y mensajería</td><td>Costo medio; seguridad alta</td><td>Transporte, servicios de emergencia y grandes eventos en Europa</td></tr>' +
          '<tr><td><b>DMR</b></td><td>Estándar global (ETSI); TDMA de 2 ranuras en 12.5 kHz, tres niveles de complejidad</td><td>El más económico; seguridad media</td><td>Empresas, industria y servicios municipales</td></tr></table>' +
          '<p>La elección depende de región, presupuesto, requisitos de seguridad y disponibilidad de equipos y repuestos. La recepción pasiva de señales puede estar restringida por la legislación local (especialmente en bandas de seguridad pública), y <b>transmitir o emular estos sistemas sin autorización es ilegal</b> en la mayoría de los países.</p>'
      },
      {
        h: 'Telefonía, generaciones móviles, Internet, GPS y telemedicina',
        html: '<p>La <b>telefonía</b> fija conectó terminales mediante cables y centrales; luego la digitalización y la telefonía móvil permitieron transportar voz como datos. Un <b>smartphone</b> combina teléfono, cámara, GPS/GNSS, aplicaciones y conexión de datos. <b>VoIP</b> es voz sobre protocolo de Internet: la voz se digitaliza y viaja por una red IP; es muy útil, pero falla si dependen de la misma conexión, energía o proveedor.</p>' +
          '<table class="tabla"><tr><th>Generación</th><th>Cambio principal</th><th>Aplicación posible</th></tr>' +
          '<tr><td><b>1G</b> (1980s)</td><td>Voz móvil analógica</td><td>Comunicación móvil básica</td></tr>' +
          '<tr><td><b>2G</b> (1990s)</td><td>Voz digital, SMS y datos muy limitados</td><td>Mensajes breves y coordinación básica</td></tr>' +
          '<tr><td><b>3G</b> (2000s)</td><td>Datos móviles para web y aplicaciones iniciales</td><td>Consulta de información y envío moderado</td></tr>' +
          '<tr><td><b>4G/LTE</b> (2010s)</td><td>Banda ancha móvil IP más consistente</td><td>Mapas, video, transmisión de ECG e imágenes</td></tr>' +
          '<tr><td><b>5G</b></td><td>Mayor capacidad, menor latencia y servicios especializados; despliegue desigual</td><td>Ambulancia conectada, video y servicios de misión crítica donde existan</td></tr></table>' +
          '<p>Las velocidades reales varían por cobertura, congestión, equipo, plan, distancia, edificios y backhaul: para emergencias interesan <b>disponibilidad, prioridad autorizada, cobertura, latencia y resiliencia</b> tanto como velocidad. Las llamadas de emergencia modernas pueden integrar identificación, ubicación, texto, fotos o video <b>según país, red y normativa</b>; ser posible técnicamente no significa estar disponible en cada jurisdicción. <b>NG911</b> (EE. UU.) y <b>NG112</b> (Europa) son arquitecturas de próxima generación basadas en IP: se enseñan como <b>modelos</b>, no como descripción del entorno local.</p>' +
          '<p><b>Internet</b> es una “red de redes”: equipos y redes autónomas intercambian datos siguiendo reglas comunes. Sobre ella funcionan web, correo, mensajería, videollamada y nube; cada servicio puede fallar por separado.</p>' +
          '<p><b>GPS/GNSS.</b> GPS es la constelación estadounidense; <b>GNSS</b> nombra el conjunto de sistemas satelitales de navegación (GPS es uno de ellos). El receptor estima su posición comparando señales de varios satélites. Una coordenada debe leerse con incertidumbre: <b>hora, fuente, precisión estimada y sistema de referencia (datum)</b>, y verificarse preguntando “¿en qué esquina, piso, acceso o hito se encuentra?”. En interiores, calles estrechas, bosques o cielo obstruido la precisión empeora.</p>' +
          '<p><b>Telemedicina:</b> uso de tecnologías de información y comunicación para el intercambio a distancia de información clínica, seguimiento, consulta o apoyo (teleconsulta, ECG, imagen de lesión, audio, video, monitoreo, médico-médico). <b>Beneficios:</b> acceso a expertise, preparación del receptor y mejor continuidad. <b>Límites:</b> conectividad, calidad del dato, identificación, consentimiento y encuadre legal, privacidad, responsabilidades y necesidad de protocolo: una videollamada no reemplaza la atención presencial cuando ésta es necesaria.</p>'
      },
      {
        h: 'Redes de datos: tipos, medios y componentes',
        html: '<p>Una <b>red de datos</b> es un conjunto de dispositivos y reglas que permite intercambiar información: personas, teléfonos, tablets, monitores, computadoras, servidores, equipos de red y enlaces. Su objetivo clínico es que el dato adecuado llegue de forma <b>oportuna, íntegra y accesible</b> a quien esté autorizado. Ejemplo progresivo: celular por Wi-Fi → estación de enfermería → sistema hospitalario → despacho a la ambulancia → ECG transmitido al hospital.</p>' +
          '<table class="tabla"><tr><th>Tipo</th><th>Alcance</th><th>Ejemplo en salud/emergencias</th></tr>' +
          '<tr><td><b>PAN</b></td><td>Persona y pocos metros</td><td>Sensor wearable vinculado a una tablet</td></tr>' +
          '<tr><td><b>LAN / WLAN</b></td><td>Aula, piso o edificio (inalámbrica)</td><td>Estaciones, servidores, tablets y celulares autorizados de un hospital</td></tr>' +
          '<tr><td><b>MAN</b></td><td>Área urbana</td><td>Hospitales y central municipal de una ciudad</td></tr>' +
          '<tr><td><b>WAN</b></td><td>Región, país o más</td><td>Sistema provincial o red de derivaciones</td></tr>' +
          '<tr><td><b>Internet</b></td><td>Red global de redes</td><td>Teleconsulta y servicios cloud autorizados</td></tr>' +
          '<tr><td><b>Intranet</b></td><td>Servicios internos restringidos</td><td>Historia clínica y protocolos internos</td></tr>' +
          '<tr><td><b>VPN</b></td><td>“Túnel” protegido sobre otra red</td><td>Acceso remoto autorizado desde móvil o sede externa</td></tr></table>' +
          '<p><b>Medios cableados:</b> Ethernet sobre cobre es común en puestos fijos (estable y previsible); la fibra óptica usa luz y permite enlaces de gran capacidad y distancia. <b>Medios inalámbricos:</b> Wi-Fi cubre áreas locales, Bluetooth vincula dispositivos cercanos, la red móvil conecta en movimiento, la radio favorece la voz operativa y el satélite aporta alcance donde faltan redes terrestres. Sus límites son interferencia, alcance, batería, congestión o visibilidad.</p>' +
          '<table class="tabla"><tr><th>Medio</th><th>Fortaleza</th><th>Riesgo/limitación</th></tr>' +
          '<tr><td>Cobre Ethernet</td><td>Estable y disponible</td><td>Corte físico; requiere tendido</td></tr>' +
          '<tr><td>Fibra</td><td>Capacidad alta y larga distancia</td><td>Obra y equipamiento especializado</td></tr>' +
          '<tr><td>Wi-Fi</td><td>Flexibilidad y movilidad</td><td>Cobertura, interferencia y configuración</td></tr>' +
          '<tr><td>Red móvil</td><td>Conecta ambulancias en movimiento</td><td>Cobertura y saturación</td></tr>' +
          '<tr><td>Radio</td><td>Voz operativa y grupos</td><td>Datos limitados según el sistema</td></tr>' +
          '<tr><td>Satélite</td><td>Áreas remotas y respaldo</td><td>Costo, energía, terminal y condiciones</td></tr></table>' +
          '<ul><li><b>Servidor:</b> equipo que ofrece un servicio a otros (por ejemplo, historia clínica).</li>' +
          '<li><b>Switch:</b> conecta varios equipos <b>dentro de la misma red local</b>.</li>' +
          '<li><b>Router:</b> conecta <b>redes diferentes</b> y decide el próximo trayecto.</li>' +
          '<li><b>Access point:</b> brinda acceso Wi-Fi a la red; no es necesariamente el router.</li>' +
          '<li><b>Módem:</b> adapta la red local a la tecnología del proveedor de acceso.</li>' +
          '<li><b>Firewall:</b> aplica reglas para permitir, bloquear y registrar comunicaciones; no reemplaza contraseñas ni capacitación.</li></ul>'
      },
      {
        h: 'Cómo viajan los datos: paquetes, direcciones y protocolos',
        html: '<p>Un archivo grande se divide en <b>paquetes</b>; cada uno incluye información para recorrer la red. Los routers leen la dirección de red y eligen el siguiente tramo, y el destinatario reordena y verifica según el protocolo. Un paquete puede perderse, llegar por otro camino o sufrir demora.</p>' +
          '<table class="tabla"><tr><th>Concepto</th><th>Función</th><th>Analogía</th></tr>' +
          '<tr><td><b>Dirección IP</b></td><td>Identifica una interfaz en una red IP para enrutar información; puede cambiar en redes móviles o Wi-Fi</td><td>Dirección para circular entre redes</td></tr>' +
          '<tr><td><b>MAC</b></td><td>Identificador de interfaz usado en el enlace local; no identifica a una persona</td><td>Serie del equipo en el barrio</td></tr>' +
          '<tr><td><b>DNS</b></td><td>Traduce nombres legibles a direcciones IP</td><td>Agenda telefónica</td></tr>' +
          '<tr><td><b>URL</b></td><td>Dirección completa de un recurso web, con esquema y ubicación</td><td>Dirección postal completa</td></tr>' +
          '<tr><td><b>Puerto</b></td><td>Número lógico que dirige los datos a la aplicación o servicio correcto</td><td>Recepción específica de un edificio</td></tr></table>' +
          '<table class="tabla"><tr><th>Protocolo</th><th>Función en términos simples</th><th>Ejemplo sanitario</th></tr>' +
          '<tr><td><b>IP</b></td><td>Lleva paquetes entre redes hacia el destino</td><td>Conectar ambulancia, central y servidor</td></tr>' +
          '<tr><td><b>TCP</b></td><td>Entrega orientada a conexión, con control de orden y recepción</td><td>Carga de un formulario o resultado</td></tr>' +
          '<tr><td><b>UDP</b></td><td>Envío más ligero, sin garantía de entrega u orden propia</td><td>Audio o video en tiempo real</td></tr>' +
          '<tr><td><b>HTTP / HTTPS</b></td><td>Reglas para solicitar y entregar contenido web; HTTPS las protege habitualmente con TLS</td><td>Portal de gestión con cifrado en tránsito</td></tr>' +
          '<tr><td><b>DNS</b></td><td>Traduce nombre a IP</td><td>Encontrar el servidor de aplicación</td></tr>' +
          '<tr><td><b>DHCP</b></td><td>Asigna configuración de red automáticamente</td><td>Tablet que se conecta al Wi-Fi institucional</td></tr></table>' +
          '<p>Decir “TCP es confiable” exige precisión: aporta mecanismos de entrega ordenada entre extremos, pero no garantiza que la aplicación funcione, que el usuario esté autorizado ni que el dato clínico sea verdadero.</p>' +
          '<p>Un <b>protocolo</b> es un conjunto acordado de reglas: formato del mensaje, cómo se interpreta y qué hacer ante eventos. Modelo práctico por capas:</p>' +
          '<p><code>Aplicación → Transporte (TCP/UDP) → Red (IP, routers) → Enlace (Ethernet, Wi-Fi, red móvil) → Medio físico (cable, fibra, ondas)</code></p>' +
          '<p>No hace falta memorizar modelos completos: sirven para <b>diagnosticar</b>. Si una tablet no abre una historia, ¿falla la señal Wi-Fi, el acceso IP, DNS, el servidor, la contraseña, el permiso o la aplicación? En Wi-Fi, el equipo se autentica con una credencial y obtiene parámetros vía DHCP; una buena señal <b>no</b> prueba que Internet, el servidor ni la autorización funcionen, y no se conectan equipos clínicos a Wi-Fi público o desconocido. En red móvil, <b>roaming</b> significa uso de otra red bajo acuerdos, no funcionamiento garantizado.</p>'
      },
      {
        h: 'Nube, IoT, interoperabilidad, seguridad y continuidad',
        html: '<p><b>Nube (cloud computing):</b> recursos informáticos ofrecidos como servicios a través de red (almacenamiento, servidores, bases de datos, aplicaciones). No significa que “los datos estén en el aire”: residen en centros de datos físicos administrados bajo contratos, copias y controles; exige evaluar jurisdicción, acceso, respaldo, conectividad y plan de salida. <b>IoT (Internet de las Cosas):</b> objetos con sensores, software y conectividad que intercambian datos: monitor que envía signos, GPS del móvil, sensor de temperatura, wearable. Sus riesgos son inventario incompleto, contraseñas por defecto, software sin actualizar, datos excesivos y dependencia de una app o proveedor: no se conecta un dispositivo clínico a una red sin evaluación institucional.</p>' +
          '<p><b>Interoperabilidad:</b> capacidad de sistemas distintos para intercambiar y usar información de manera acordada; no basta con “mandar un PDF”. <b>HL7 FHIR</b> estandariza el intercambio de información sanitaria basado en recursos estructurados (Paciente, Observación, Encuentro) y <b>DICOM</b> las imágenes médicas y objetos asociados. Un estándar no resuelve por sí solo identidad, permisos, calidad, trazabilidad ni el acuerdo clínico sobre el significado de un dato.</p>' +
          '<table class="tabla"><tr><th>Propiedad</th><th>Pregunta operativa</th><th>Medida simple</th></tr>' +
          '<tr><td><b>Confidencialidad</b></td><td>¿Sólo accede quien debe?</td><td>Roles, autenticación, pantalla bloqueada</td></tr>' +
          '<tr><td><b>Integridad</b></td><td>¿El dato llegó sin alteración y se puede atribuir?</td><td>Sistemas autorizados, registros y verificación</td></tr>' +
          '<tr><td><b>Disponibilidad</b></td><td>¿Está el servicio cuando hace falta?</td><td>Redundancia, batería, respaldo y papel</td></tr>' +
          '<tr><td><b>Trazabilidad</b></td><td>¿Podemos saber quién accedió o cambió?</td><td>Auditoría y cuentas individuales</td></tr></table>' +
          '<p>Prácticas elementales: contraseña robusta y única, autenticación multifactor cuando esté disponible, <b>phishing</b> como engaño para capturar credenciales, <b>malware</b> como software dañino y <b>VPN</b> como canal protegido sobre una red no confiable. Ante un enlace sospechoso no se ingresa credenciales ni se improvisa: se informa por el canal definido. La red pública no debe tratarse como entorno institucional seguro.</p>' +
          '<p><b>Continuidad en desastre.</b> Pueden fallar electricidad, torres, enlaces, rutas y personal mientras la red se congestiona sin estar “caída”. Una estrategia combina: (1) <b>canales diversos</b> —radio profesional, telefonía, datos, satélite, comunicación cara a cara y mensajería diferida—; (2) <b>energía</b> —baterías, cargadores, generador y prioridad de carga—; (3) <b>arquitectura</b> —repetidores y enlaces alternativos—; (4) <b>operación</b> —tarjetas de procedimientos, listas impresas, roles, mensajes estandarizados y simulacros—; (5) <b>prioridad</b> —qué comunicación es vital y qué puede esperar.</p>' +
          '<p><b>Redundancia real:</b> dos aplicaciones que dependen del mismo teléfono, batería y antena <b>no</b> son dos alternativas independientes. <b>Privacidad proporcional:</b> nombre, diagnóstico, ECG, imagen, audio y ubicación son datos sensibles; aplica el mínimo necesario, autenticación, dispositivo bloqueado, canal institucional y registro de acceso (Leyes 25.326 y 26.529 en Argentina). En radio abierta se transmite sólo lo indispensable para la operación.</p>'
      }
    ],
    archivos: [
      { t: 'Clase 14 — Comunicaciones en emergentología (PDF)', f: '03_Comunicaciones_Redes_y_Radios/Clase_14_2026_Comunicaciones_y_Redes/01_Clase_1_Comunicaciones_en_emergentologia.pdf' },
      { t: 'Clase 14 — Redes de datos (PDF)', f: '03_Comunicaciones_Redes_y_Radios/Clase_14_2026_Comunicaciones_y_Redes/02_Clase_2_Redes_de_datos.pdf' },
      { t: 'Clase 14 — Panorama general de comunicaciones y datos (PPTX)', f: '03_Comunicaciones_Redes_y_Radios/Clase_14_2026_Comunicaciones_y_Redes/00_Panorama_general_Comunicaciones_y_Datos.pptx' },
      { t: 'Clase 14 — Práctica de radiocomunicación en emergencias (PPTX)', f: '03_Comunicaciones_Redes_y_Radios/Clase_14_2026_Comunicaciones_y_Redes/Practica_radiocomunicacion_emergencias.pptx' },
      { t: 'Clase 15 — Radios: P25, TETRA y DMR (PDF)', f: '03_Comunicaciones_Redes_y_Radios/Clase_15_2025_Radios/Radios.pdf' },
      { t: 'Clase 15 — Radiocomunicaciones de emergencia (PPTX)', f: '03_Comunicaciones_Redes_y_Radios/Radios_2026/Radiocomunicaciones_de_Emergencia.pptx' }
    ]
  });

  NTX.quizzes.u3 = {
    id: 'u3',
    titulo: 'Autoevaluación — Unidad 3: Comunicaciones, redes y radios',
    preguntas: [
      { t: 'En un despacho, la **retroalimentación** sirve principalmente para:', type: 'mcq', opts: ['Hacer más largo el mensaje', 'Comprobar que el mensaje llegó y se interpretó correctamente', 'Reemplazar el registro escrito', 'Identificar al paciente'], ans: 1, exp: 'La retroalimentación (o comunicación en circuito cerrado) permite verificar <b>recepción e interpretación</b>: el receptor repite el dato y el emisor confirma o corrige. Reduce el riesgo de que un dato crítico se haya entendido mal.', tag: 'concepto' },
      { t: '¿Cuál de estos es un ejemplo de **ruido semántico** en una comunicación operativa?', type: 'mcq', opts: ['Una sirena de alta intensidad', 'Una batería descargada', 'Una sigla desconocida para quien recibe', 'Una antena dañada'], ans: 2, exp: 'El ruido <b>semántico</b> es el significado no compartido: siglas o códigos que el receptor no conoce. La sirena es ruido ambiental, la batería baja es ruido técnico y la antena dañada es una falla de canal.', tag: 'concepto' },
      { t: 'Que una señal sea **digital** garantiza que la información esté privada, disponible y sin fallas.', type: 'tf', ans: false, exp: 'Digital significa representación discreta (bits) que permite copiar, almacenar y procesar datos, pero <b>no</b> implica automáticamente privacidad, disponibilidad ni ausencia de demoras: eso requiere diseño, energía, seguridad y procedimientos.', tag: 'concepto' },
      { t: 'En una comunicación de radio en **simplex**:', type: 'mcq', opts: ['El canal es compartido y normalmente habla uno por vez (pulsar para hablar)', 'Se transmite y se recibe a la vez por canales separados', 'Todos los equipos hablan simultáneamente', 'No se usa antena'], ans: 0, exp: 'En <b>simplex</b> hablar y escuchar usan el mismo canal, así que se debe turnar (normalmente de a uno por vez). En <b>dúplex</b> la transmisión y la recepción ocurren simultáneamente por trayectos o frecuencias separadas.', tag: 'radio' },
      { t: 'El estándar digital de radio troncalizada definido por **ETSI** y muy utilizado en Europa en servicios de emergencia es:', type: 'fill', ans: ['tetra', 'terrestrial trunked radio'], exp: '<b>TETRA</b> (<i>Terrestrial Trunked Radio</i>) usa TDMA de cuatro ranuras en 25 kHz y ofrece alta eficiencia espectral para comunicaciones grupales. P25 es un estándar estadounidense y DMR un estándar global más económico.', tag: 'radio' },
      { t: 'Marcá las afirmaciones **verdaderas** sobre las generaciones de redes móviles.', type: 'multi', opts: ['2G permitía SMS y datos muy limitados', '4G/LTE hizo viables mapas, video y transmisión de ECG e imágenes', 'Roaming significa funcionamiento garantizado en cualquier red', '5G requiere despliegue adecuado para ofrecer sus capacidades'], ans: [0, 1, 3], exp: 'El <b>roaming</b> es el uso de otra red bajo acuerdos entre operadores: no equivale a funcionamiento garantizado. El resto son los cambios de capacidad que aportó cada generación; 5G tiene despliegue desigual y depende de cobertura, congestión y diseño.', tag: 'redes móviles' },
      { t: 'Además de la conectividad, la **telemedicina** en emergencias requiere:', type: 'mcq', opts: ['Sólo una cámara y buena voluntad', 'Identidad verificada, protocolos, privacidad y responsabilidad clínica', 'Ningún tipo de documentación', 'Redes sociales institucionales'], ans: 1, exp: 'Los límites de la telemedicina son conectividad, calidad del dato, <b>identificación</b>, consentimiento y encuadre legal, privacidad, responsabilidades y <b>protocolo</b>. Una videollamada no reemplaza la atención presencial cuando ésta es necesaria.', tag: 'telemedicina' },
      { t: 'La función del **DNS** en una red es:', type: 'fill', ans: ['domain name system', 'dns', 'traducir nombres a direcciones ip', 'traducir nombres legibles a direcciones ip', 'traduce nombres a ip'], exp: 'El <b>DNS</b> (<i>Domain Name System</i>) traduce nombres legibles (por ejemplo, el de un servidor de historia clínica) a direcciones IP, como una agenda telefónica. Si DNS falla, “hay señal pero no abre la aplicación”.', tag: 'protocolos' },
      { t: 'La diferencia más útil entre **GPS** y **GNSS** es:', type: 'mcq', opts: ['Son sinónimos obligatorios', 'GPS es una constelación concreta y GNSS es la categoría de sistemas satelitales de navegación', 'GNSS sólo funciona sin satélites', 'GPS siempre es exacto'], ans: 1, exp: '<b>GNSS</b> nombra al conjunto de sistemas satelitales (GPS, Galileo, GLONASS…); <b>GPS</b> es la constelación de EE. UU., una de ellas. La posición se estima comparando señales de varios satélites y debe leerse con incertidumbre (hora, fuente, precisión y datum).', tag: 'geolocalización' },
      { t: 'Marcá las afirmaciones **verdaderas** sobre la continuidad de las comunicaciones en un desastre.', type: 'multi', opts: ['Combina canales diversos: radio, telefonía, datos y satélite, además de comunicación cara a cara', 'Exige prever energía: baterías, cargadores y criterios de prioridad de carga', 'Debe definir de antemano qué comunicación es vital y qué puede esperar', 'Se resuelve usando una única aplicación de mensajería en el celular'], ans: [0, 1, 2], exp: 'La continuidad se diseña con <b>canales diversos, energía, arquitectura, operación y prioridad</b>. Depender de una sola app comparte teléfono, batería y red: no es redundancia real; dos aplicaciones en el mismo equipo tampoco lo son.', tag: 'contingencia' }
    ]
  };
})(window.NTX);
