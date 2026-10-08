/* ============================================================
   NTX — Unidad 6: Estándares en sistemas de información
   ============================================================ */
(function (NTX) {
  'use strict';

  NTX.unidades.push({
    id: 'u6',
    num: 6,
    icon: '◇',
    title: 'Estándares en sistemas de información',
    resumen: 'Qué es un estándar, cómo se clasifican y quién los crea, su aplicación en hardware, software y datos, y su rol crítico en la gestión de emergencias y la resiliencia.',
    objetivos: [
      'Definir qué es un estándar según la ISO y explicar sus beneficios estratégicos y su posible uso competitivo.',
      'Distinguir estándares de jure y de facto e identificar a los organismos principales: ISO, IEEE, IETF y W3C.',
      'Reconocer estándares de hardware (USB, HDMI, IPC) y de software (TCP/IP, XML y JSON, ISO 9001, 12207 y 25000).',
      'Describir los estándares críticos de la gestión de emergencias: TETRA, P25, CAP, ISO 22320 e ISO 22301.',
      'Analizar el caso del SINAGIR de Argentina como gobernanza del riesgo basada en estándares.'
    ],
    secciones: [
      {
        h: '¿Qué es un estándar y por qué es necesario?',
        html: '<p>La <b>ISO</b> define los estándares como “acuerdos documentados que contienen especificaciones técnicas u otros criterios precisos para ser usados consistentemente como reglas, guías o definiciones de características para asegurar que los materiales, productos, procesos y servicios cumplan con su propósito”. No son sólo prescripciones técnicas: buscan responder a necesidades de la sociedad y contribuir a la mejora de la calidad de vida.</p>' +
          '<p>Sin reglas compartidas, la complejidad del hardware y el software colapsaría en incompatibilidad. Ejemplos cotidianos: un papel <b>A4</b> encaja en cualquier impresora compatible con A4, y los estándares inalámbricos (<code>AMPS</code>, <code>CDMA</code>, <code>GSM</code>) armonizan el uso del espectro electromagnético para evitar interferencias y permitir la comunicación global.</p>' +
          '<p>Adherirse a un estándar comunica al mercado un umbral mínimo de <b>calidad, seguridad y fiabilidad</b>. Sus beneficios se agrupan en varios pilares:</p>' +
          '<ul><li><b>Garantía de calidad, seguridad y confianza:</b> productos consistentes y fiables, crítico en industrias como la farmacéutica o la alimentaria.</li>' +
          '<li><b>Interoperabilidad y compatibilidad:</b> el ejemplo paradigmático es <b>USB</b>, que permite conectar teclados, discos y periféricos sin importar el fabricante, evitando “silos” tecnológicos.</li>' +
          '<li><b>Eficiencia económica:</b> procesos estandarizados reducen desperdicio y costos (p. ej. ISO 9001 de gestión de la calidad).</li>' +
          '<li><b>Fomento de la innovación:</b> ofrecen un lenguaje compartido y un marco estable sobre el cual construir sin reinventar la rueda.</li>' +
          '<li><b>Acceso a mercados y cumplimiento regulatorio:</b> funcionan como un “pasaporte técnico” para entrar en cadenas de suministro globales y licitaciones públicas.</li></ul>' +
          '<p><b>El lado oscuro:</b> los estándares no son neutrales. La estrategia <b>“Embrace, Extend and Extinguish”</b> (abrazar, extender y extinguir) consiste en adoptar un estándar abierto, añadirle extensiones propietarias que rompen la compatibilidad y, una vez que el mercado depende de ellas, dejar fuera a la competencia (citada en la guerra de los navegadores entre Netscape e Internet Explorer y en las batallas alrededor de Java). Otra forma es la proliferación de <b>estándares alternativos</b> propietarios: “lo bueno de los estándares es que tienes muchos para elegir” (Andrew S. Tanenbaum). Ejemplos: los distintos cargadores de celular antes de la estandarización impulsada en Europa o conectores exclusivos de una marca.</p>'
      },
      {
        h: 'De jure, de facto y los organismos que crean estándares',
        html: '<p><b>Estándares <em>de jure</em> (por ley):</b> desarrollados y aprobados por un organismo formal reconocido (ISO, IEEE, UNE en España, ANSI en EE. UU.), mediante procedimientos oficiales que buscan consenso entre industria, academia y gobierno. Su adopción es voluntaria o, en contextos como las adquisiciones públicas, obligatoria.</p>' +
          '<p><b>Estándares <em>de facto</em> (de hecho):</b> emergen por su abrumadora aceptación en el mercado sin ratificación formal. Dominan por <b>tradición</b> (teclado QWERTY), <b>eficiencia o fiabilidad</b>, <b>aceptación o bajo costo</b>, o <b>monopolización</b> por una empresa dominante. El caso clásico: el modelo <b>OSI</b> fue un estándar de jure de la ISO, pero la pila <b>TCP/IP</b> de ARPANET se convirtió en el estándar de facto de Internet.</p>' +
          '<p><b>Proceso típico de creación</b> (ejemplo de una norma mexicana NMX): 1) formación del comité técnico con representación equilibrada; 2) elaboración y consenso; 3) consulta pública (unos 60 días); 4) revisión y aprobación de comentarios; 5) publicación y declaración de vigencia. El desarrollo completo puede llevar <b>varios años</b>.</p>' +
          '<table class="tabla"><tr><th>Organismo</th><th>Modelo</th><th>Dominio</th><th>Ejemplos</th></tr>' +
          '<tr><td><b>ISO</b></td><td>Federación de cuerpos nacionales de más de 160 países</td><td>Multisectorial: gestión y seguridad</td><td>ISO 9001, ISO/IEC 27001, ISO/IEC 12207</td></tr>' +
          '<tr><td><b>IEEE</b></td><td>Asociación profesional técnica</td><td>Electricidad, electrónica y redes</td><td>IEEE 802.3 (Ethernet), IEEE 802.11 (Wi-Fi)</td></tr>' +
          '<tr><td><b>IETF</b></td><td>Comunidad abierta de voluntarios, “consenso aproximado y código en ejecución”</td><td>Protocolos de Internet</td><td>RFC 791 (IP), RFC 793 (TCP), HTTP</td></tr>' +
          '<tr><td><b>W3C</b></td><td>Consorcio industrial liderado por Tim Berners-Lee</td><td>Tecnologías de la web</td><td>HTML5, CSS, XML, SVG</td></tr></table>' +
          '<p>El W3C madura sus especificaciones en etapas: Borrador de Trabajo (WD), Candidato a Recomendación (CR), Recomendación Propuesta (PR) y Recomendación (REC). Muchos estándares de facto terminan formalizándose: Adobe cedió el control de <b>PDF</b> a la ISO para crear <b>PDF/A (ISO 19005)</b>, lo que redujo el riesgo de dependencia de un proveedor y garantizó su longevidad.</p>'
      },
      {
        h: 'Estándares de hardware: interfaces y fabricación',
        html: '<p><b>USB (Universal Serial Bus):</b> evolucionó en conectores (Tipo-A y Tipo-B, Mini USB, Micro USB y el <b>Tipo-C</b> ovalado, simétrico y reversible) y en velocidad: USB 1.0/1.1 hasta 12 Mbit/s; USB 2.0 con 480 Mbit/s; USB 3.0 (“SuperSpeed”) con 5 Gbit/s; USB 3.1/3.2 con 10 y 20 Gbit/s; y <b>USB4</b>, basado en Thunderbolt 3, con hasta <b>40 Gbit/s</b>. Además, <b>USB Power Delivery</b> entrega hasta 240 W por un cable USB-C y el “Modo Alternativo” permite transmitir señales como DisplayPort.</p>' +
          '<p>Lección clave: un estándar exitoso que innova y mantiene retrocompatibilidad genera una matriz compleja de conectores y velocidades. Un mismo USB-C puede soportar USB 2.0, 3.2, USB4 o Thunderbolt, así que el conector ya no define la capacidad del puerto y el consumidor se confunde.</p>' +
          '<p><b>HDMI:</b> desde 2003 es el estándar de facto para audio y video digital sin comprimir, reemplazando a VGA. Conectores: Tipo A (estándar, 19 pines), Tipo C (Mini) y Tipo D (Micro). De HDMI 1.0 a HDMI 2.1 el ancho de banda pasó de 4,95 a 48 Gbit/s, permitiendo de 1080p a 4K a 60 Hz y hasta 8K/10K, con ARC/eARC y tasas de refresco variables.</p>' +
          '<p><b>Fabricación de placas (PCB):</b> los estándares los lidera <b>IPC</b> (Association Connecting Electronics Industries), fundada en 1957. Los más usados:</p>' +
          '<ul><li><b>IPC-A-610:</b> criterios de inspección visual para ensamblajes electrónicos; es la norma más difundida de la industria.</li>' +
          '<li><b>IPC-A-600:</b> aceptación de las placas de circuito impreso sin ensamblar.</li>' +
          '<li><b>IPC-4101:</b> materiales base de las placas rígidas y multicapa.</li>' +
          '<li><b>J-STD-001:</b> requisitos para interconexiones soldadas de alta calidad, con énfasis en el control de procesos.</li></ul>' +
          '<p>Se suman la directiva europea <b>RoHS</b> (restringe plomo, mercurio y otras sustancias peligrosas) y los <b>AEC-Q100</b> para cualificar fiabilidad de circuitos integrados en automoción.</p>'
      },
      {
        h: 'Estándares de software: protocolos, formatos y calidad',
        html: '<p><b>Redes locales:</b> <code>IEEE 802.3 (Ethernet)</code> domina las LAN cableadas, desde 10 Mbit/s hasta más de 100 Gbit/s; <code>IEEE 802.11 (Wi-Fi)</code> cubre las redes inalámbricas y la Wi-Fi Alliance certifica los productos, renombrándolos comercialmente: Wi-Fi 4 = 802.11n (hasta 600 Mbps), Wi-Fi 5 = 802.11ac, Wi-Fi 6/6E = 802.11ax (9,6 Gbps) y <b>Wi-Fi 7</b> = 802.11be (hasta 46 Gbps, 2024).</p>' +
          '<p><b>Internet se apoya en la familia TCP/IP</b>, organizada en capas:</p>' +
          '<ul><li><b>Capa de red:</b> <code>IP</code> hace el direccionamiento lógico y el enrutamiento; es un protocolo no fiable y sin conexión.</li>' +
          '<li><b>Capa de transporte:</b> <code>TCP</code> es fiable y orientado a conexión (garantiza entrega en orden, sin duplicados, con retransmisión); <code>UDP</code> es rápido y sin conexión, ideal para streaming, juegos y consultas DNS.</li>' +
          '<li><b>Capa de aplicación:</b> <code>HTTP</code> (web), <code>SMTP</code> (correo) y <code>FTP</code> (archivos).</li></ul>' +
          '<table class="tabla"><tr><th>Característica</th><th>JSON</th><th>XML</th></tr>' +
          '<tr><td>Sintaxis</td><td>Pares clave-valor y matrices</td><td>Etiquetas de apertura y cierre</td></tr>' +
          '<tr><td>Verbosidad</td><td>Conciso, archivos más pequeños</td><td>Verboso, archivos más grandes</td></tr>' +
          '<tr><td>Flexibilidad</td><td>Estructura fija de objetos y arrays</td><td>Etiquetas personalizadas, atributos y espacios de nombres</td></tr>' +
          '<tr><td>Uso principal</td><td>APIs REST, apps móviles, intercambio ligero</td><td>Documentos complejos, SOAP, configuración</td></tr></table>' +
          '<p><b>Calidad y ciclo de vida:</b> <code>ISO 9001</code> define el Sistema de Gestión de la Calidad; <code>ISO/IEC/IEEE 12207</code> organiza los procesos del ciclo de vida en <b>primarios</b> (adquisición, suministro, desarrollo, operación, mantenimiento), <b>de soporte</b> (documentación, configuración, aseguramiento, verificación, validación) y <b>organizacionales</b> (gestión, infraestructura, mejora, formación); <code>ISO/IEC 25000 (SQuaRE)</code> evalúa la calidad del producto con ocho características: adecuación funcional, fiabilidad, usabilidad, eficiencia de desempeño, compatibilidad, seguridad, mantenibilidad y portabilidad.</p>' +
          '<p><b>Guías de estilo de codificación:</b> convenciones de nomenclatura (<code>camelCase</code> vs <code>snake_case</code>), indentación, comentarios, manejo de errores y patrones a evitar, verificadas con <em>linters</em> y <em>formatters</em> como ESLint y Prettier (JavaScript), Flake8 y Black (Python) o Clang-Format (C/C++). La estandarización del software forma una pirámide: gestión de calidad → procesos → calidad del producto → protocolos → formatos → estilo de código; un fallo en una capa superior no se compensa con excelencia en una inferior.</p>'
      },
      {
        h: 'Estándares en la gestión de emergencias',
        html: '<p>La <b>gestión de emergencias</b> organiza recursos y responsabilidades para afrontar una crisis y se apoya en dos pilares: la <b>gestión de la respuesta a incidentes</b> (el “durante”: mando, información y coordinación en el terreno) y la <b>continuidad del negocio</b> (seguir operando las funciones críticas durante y después del incidente). La estandarización garantiza que policía, bomberos, servicios médicos y protección civil colaboren bajo presión extrema.</p>' +
          '<table class="tabla"><tr><th></th><th>TETRA</th><th>P25</th></tr>' +
          '<tr><td><b>Origen</b></td><td>Europa (ETSI); dominante en Europa, Asia y América Latina</td><td>Norteamérica (TIA/APCO); EE. UU., Canadá y Australia</td></tr>' +
          '<tr><td><b>Acceso</b></td><td>TDMA, 4 ranuras por canal de 25 kHz</td><td>Fase 1: FDMA de 12,5 kHz; Fase 2: TDMA de 2 ranuras</td></tr>' +
          '<tr><td><b>Enfoque</b></td><td>Comunicaciones seguras y ricas en datos para un operador de red</td><td>Interoperabilidad entre múltiples agencias y fabricantes</td></tr>' +
          '<tr><td><b>Seguridad</b></td><td>Autenticación mutua, cifrado de interfaz aérea (AIE), cifrado extremo a extremo, deshabilitación remota</td><td>Cifrado AES y DES; modo analógico, digital o mixto</td></tr>' +
          '<tr><td><b>Particularidad</b></td><td>Llamadas de grupo y de emergencia, modo directo (DMO) sin estación base</td><td>Compatibilidad con sistemas heredados; alta eficiencia espectral</td></tr></table>' +
          '<p><b>CAP (Common Alerting Protocol):</b> estándar internacional creado por OASIS y adoptado como recomendación por la ITU-T para comunicar una advertencia de forma consistente, rápida y simultánea a través de múltiples canales. Un mensaje único, estructurado en <b>XML</b> y codificado en UTF-8, se genera una vez y cada medio (TV, radio, apps, sirenas, paneles) lo interpreta. Es aplicable a “todas las amenazas” y “todos los medios”. Sus segmentos principales son <code>&lt;alert&gt;</code> (identificador, remitente, estado, tipo de mensaje), <code>&lt;info&gt;</code> (categoría, evento, urgencia, severidad, certeza, descripción) y <code>&lt;area&gt;</code> (área geográfica afectada).</p>' +
          '<ul><li><b>ISO 22320</b> (IRAM-ISO 22320 en Argentina): define <em>cómo gestionar</em> la respuesta a incidentes, con tres pilares: <b>mando y control</b>, <b>gestión de la información operacional</b> y <b>cooperación y coordinación</b>.</li>' +
          '<li><b>ISO 22301</b> (IRAM-ISO 22301): sistema de gestión de la continuidad del negocio, basado en el ciclo <b>PHVA</b> (Planificar-Hacer-Verificar-Actuar): análisis de impacto en el negocio (BIA), estrategias y planes, pruebas mediante simulacros y mejora continua.</li></ul>' +
          '<p><b>Caso SINAGIR (Argentina):</b> el Sistema Nacional para la Gestión Integral del Riesgo fue creado en 2016 por la <b>Ley 27.287</b> para pasar de un enfoque reactivo a la <b>gestión integral del riesgo</b> (prevención, crisis y recuperación) con estructura federal (Consejo Nacional y Consejo Federal, más la RED GIRCYT). Sus componentes operativos se apoyan en estándares: el SINAME y el sistema de alerta temprana por colores del SMN se harían masivos con <b>CAP</b>; los “protocolos de actuación” de la ley se desarrollarían con <b>IRAM-ISO 22320</b>; la continuidad de los servicios críticos con <b>IRAM-ISO 22301</b>; y las comunicaciones entre fuerzas federales y provinciales con <b>P25 o TETRA</b>.</p>'
      },
      {
        h: 'Importancia, síntesis y desafíos futuros',
        html: '<p>Los estándares son una <b>infraestructura invisible</b> que sostiene la interoperabilidad, la calidad, la seguridad y la eficiencia. El recorrido del curso va de los fundamentos (de jure vs de facto y sus creadores) hasta el hardware que conectamos (USB, HDMI), el software que ejecutamos (protocolos, formatos, calidad) y su aplicación crítica en la gestión de emergencias.</p>' +
          '<p>Dos ideas centrales: <b>una ley puede crear un sistema, pero son los estándares los que le dan vida</b>, permitiendo que sus componentes dispares hablen un lenguaje común; y la estandarización no es sólo un tema técnico o empresarial, sino un componente de la <b>gobernanza, la seguridad pública y la resiliencia nacional</b>.</p>' +
          '<p><b>Áreas emergentes que demandan nuevos estándares:</b></p>' +
          '<ul><li><b>Inteligencia artificial y aprendizaje automático:</b> ya existe la norma ISO/IEC 20546 con terminología común, pero faltan estándares sobre ética, explicabilidad (<em>Explainable AI</em>), mitigación de sesgos, seguridad frente a ataques adversariales e interoperabilidad de los sistemas de IA.</li>' +
          '<li><b>Internet de las Cosas (IoT):</b> miles de millones de dispositivos conectados exigen comunicación de bajo consumo, protocolos de seguridad ligeros y formatos de datos eficientes.</li>' +
          '<li><b>Ciberseguridad:</b> la familia ISO/IEC 27000 y los marcos del NIST deben evolucionar frente al <em>ransomware</em>, los ataques a la cadena de suministro de software y las amenazas impulsadas por IA; siguen siendo intensas el desarrollo de la notificación de vulnerabilidades, la respuesta a incidentes y la seguridad en la nube.</li></ul>' +
          '<p>Para el profesional de sistemas, comprender y participar en el proceso de estandarización no es una opción, sino una responsabilidad para construir un futuro tecnológico más seguro, interoperable y fiable.</p>'
      }
    ],
    archivos: [
      { t: 'Clase 10 — Estándares informáticos (PDF)', f: '06_Estandares_en_Sistemas_de_Informacion/Clase_10_2025_Estandares_en_Sistemas/estandares informaticos.pdf' },
      { t: 'Clase 10 — El ecosistema de estándares en sistemas de información (PPTX)', f: '06_Estandares_en_Sistemas_de_Informacion/Clase_10_2025_Estandares_en_Sistemas/El-Ecosistema-de-Estandares-en-Sistemas-de-Informacion.pptx' },
      { t: 'Clase 10 — Estándares informáticos: presentación (PDF)', f: '06_Estandares_en_Sistemas_de_Informacion/Clase_10_2025_Estandares_en_Sistemas/estandares informaticos PPT.pdf' },
      { t: 'Clase 10 — Estándares informáticos: presentación 1 (PDF)', f: '06_Estandares_en_Sistemas_de_Informacion/Clase_10_2025_Estandares_en_Sistemas/estandares informaticos 1 PPT.pdf' },
      { t: 'Clase 11 — El ecosistema de estándares en sistemas de información (PDF)', f: '06_Estandares_en_Sistemas_de_Informacion/Clase_11_2026_Estandares/El-Ecosistema-de-Estandares-en-Sistemas-de-Informacion.pdf' }
    ]
  });

  NTX.quizzes.u6 = {
    id: 'u6',
    titulo: 'Autoevaluación — Unidad 6: Estándares en sistemas de información',
    preguntas: [
      { t: 'Según la **ISO**, un estándar es fundamentalmente:', type: 'mcq', opts: ['Un acuerdo documentado con especificaciones técnicas usadas como reglas, guías o definiciones', 'Una ley obligatoria para todas las empresas', 'Un producto comercial certificado', 'Un manual de instrucciones de un fabricante'], ans: 0, exp: 'La definición de la ISO habla de “acuerdos documentados” con especificaciones precisas para que materiales, productos, procesos y servicios cumplan su propósito. No implica por sí solo obligación legal.', tag: 'concepto' },
      { t: 'Marcá los **beneficios estratégicos** de la adopción de estándares.', type: 'multi', opts: ['Garantía de calidad, seguridad y confianza', 'Interoperabilidad y compatibilidad entre productos', 'Eficiencia económica y reducción de costos', 'Eliminación de toda competencia entre proveedores'], ans: [0, 1, 2], exp: 'Los pilares son calidad/seguridad, interoperabilidad, eficiencia económica, fomento de la innovación y acceso a mercados. Los estándares crean un campo de juego nivelado, no eliminan la competencia.', tag: 'beneficios' },
      { t: 'El modelo **OSI** y la pila **TCP/IP** son un ejemplo de:', type: 'mcq', opts: ['OSI fue estándar de jure (ISO) y TCP/IP se convirtió en el estándar de facto de Internet', 'Ambos son estándares de facto', 'Ambos fueron creados por la IETF', 'TCP/IP es de jure y OSI de facto'], ans: 0, exp: 'OSI fue desarrollado formalmente por la ISO (de jure), pero fue TCP/IP, surgida de ARPANET y consolidada por el uso, la que se impuso de hecho. La línea entre ambos puede ser borrosa.', tag: 'clasificación' },
      { t: '¿Qué organismo es responsable de estándares como **IEEE 802.3 (Ethernet)** y **IEEE 802.11 (Wi-Fi)**?', type: 'mcq', opts: ['IEEE', 'ISO', 'W3C', 'IETF'], ans: 0, exp: 'El comité IEEE 802 de la asociación IEEE define Ethernet y Wi-Fi. La ISO abarca todas las industrias (ISO 9001, ISO/IEC 27000), la IETF publica los RFC de Internet y el W3C desarrolla HTML, CSS y XML.', tag: 'organismos' },
      { t: 'Marcá las afirmaciones **verdaderas** sobre los estándares de hardware vistos en la unidad.', type: 'multi', opts: ['USB4 alcanza velocidades de hasta 40 Gbit/s y USB Power Delivery entrega hasta 240 W', 'HDMI 2.1 llegó a 48 Gbit/s de ancho de banda y soporta 8K', 'Los estándares IPC (como IPC-A-610) sirven para inspeccionar la calidad de ensamblajes electrónicos', 'USB Tipo-C es sinónimo exclusivo de la versión USB 1.0'], ans: [0, 1, 2], exp: 'USB4 llega a 40 Gbit/s y el PD a 240 W; HDMI 2.1 va de 4,95 a 48 Gbit/s; IPC-A-610 es la norma de inspección visual más difundida. El Tipo-C es un conector reversible, no una versión de velocidad.', tag: 'hardware' },
      { t: 'En la familia **TCP/IP**, el protocolo **TCP** se caracteriza por ser:', type: 'mcq', opts: ['Fiable y orientado a conexión, con retransmisión y orden garantizado', 'Sin conexión y sin garantías de entrega', 'Un protocolo de capa de aplicación', 'Exclusivo para streaming de video'], ans: 0, exp: 'TCP establece sesión y garantiza entrega ordenada y sin duplicados. UDP es el que no tiene conexión ni garantías, usado en streaming, juegos y DNS. HTTP y SMTP pertenecen a la capa de aplicación.', tag: 'protocolos' },
      { t: 'La familia **ISO/IEC 25000 (SQuaRE)** sirve para:', type: 'mcq', opts: ['Evaluar la calidad del producto software con ocho características medibles', 'Definir los procesos del ciclo de vida del software', 'Gestionar la calidad de toda la organización', 'Certificar la seguridad de las redes'], ans: 0, exp: 'SQuaRE evalúa el producto: adecuación funcional, fiabilidad, usabilidad, eficiencia, compatibilidad, seguridad, mantenibilidad y portabilidad. Los procesos del ciclo de vida los define ISO 12207 y la gestión de la calidad ISO 9001.', tag: 'calidad' },
      { t: 'El protocolo **CAP** (Common Alerting Protocol) fue desarrollado por **OASIS** y se usa para:', type: 'mcq', opts: ['Estructurar una alerta única que se difunde por todos los canales a la vez', 'Cifrar las comunicaciones de radio de los servicios de emergencia', 'Gestionar la continuidad del negocio', 'Definir las interfaces USB'], ans: 0, exp: 'CAP es un mensaje XML (UTF-8) generado una sola vez por la autoridad y entendido por TV, radio, apps, sirenas y paneles, eliminando la necesidad de avisar a cada medio por separado.', tag: 'emergencias' },
      { t: 'La norma **ISO 22320** corresponde a la gestión de la respuesta a incidentes y se estructura en tres pilares. Marcá los correctos.', type: 'multi', opts: ['Mando y control', 'Gestión de la información operacional', 'Cooperación y coordinación', 'Auditoría financiera trimestral'], ans: [0, 1, 2], exp: 'Los tres pilares son mando y control, gestión de la información operacional y cooperación y coordinación. La auditoría financiera no forma parte de la norma; la continuidad del negocio la cubre la ISO 22301.', tag: 'emergencias' },
      { t: 'El **SINAGIR** de Argentina fue creado por la Ley 27.287 en:', type: 'fill', ans: ['2016'], exp: 'La Ley Nacional 27.287 de <b>2016</b> creó el Sistema Nacional para la Gestión Integral del Riesgo, pasando de un enfoque reactivo a la gestión integral del riesgo (prevención, crisis y recuperación).', tag: 'emergencias' }
    ]
  };
})(window.NTX);
