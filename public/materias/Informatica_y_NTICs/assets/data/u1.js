/* ============================================================
   NTX — Unidad 1: Introducción a la Informática y NTICs
   ============================================================ */
(function (NTX) {
  'use strict';

  NTX.unidades.push({
    id: 'u1',
    num: 1,
    icon: '◆',
    title: 'Introducción a la Informática y NTICs',
    resumen: 'Conceptos de informática, historia desde la Pascalina hasta la IA y la Ley de Moore, hardware y software con sus clasificaciones, sistemas operativos, software libre vs. propietario, NTICs aplicadas a la medicina de emergencias y herramientas de ofimática (texto, cálculo y presentaciones).',
    objetivos: [
      'Definir la informática y explicar su importancia en la salud y la gestión de emergencias.',
      'Reconocer los componentes del hardware y clasificar el software y los sistemas operativos.',
      'Relatar la evolución de la informática y del software: lenguajes, paradigmas, crisis e ingeniería del software.',
      'Distinguir software libre y propietario, y describir las NTICs aplicadas a la medicina de emergencias.',
      'Identificar las herramientas ofimáticas básicas (procesadores de texto, hojas de cálculo y presentaciones) y sus usos.'
    ],
    secciones: [
      {
        h: '¿Qué es la informática?',
        html: '<p>La <b>informática</b> es la disciplina que se ocupa del <b>tratamiento automático de la información</b> mediante el uso de computadoras y otros sistemas electrónicos. Su objetivo es procesar, almacenar y comunicar datos de manera eficiente. Integra conocimientos de <b>matemáticas, lógica, electrónica y programación</b> para crear sistemas capaces de resolver problemas, automatizar tareas y tomar decisiones en base a datos.</p>' +
          '<p>En este curso la informática no se entiende solo desde una perspectiva técnica, sino como una <b>herramienta estratégica</b> en la gestión de emergencias, la salud pública y la organización de recursos. Dato curioso: la palabra proviene del francés <em>informatique</em>, contracción de <em>information</em> y <em>automatique</em>; en inglés se dice <em>Computer Science</em>.</p>' +
          '<p><b>Aplicaciones prácticas:</b></p>' +
          '<ul><li><b>En salud:</b> sistemas de gestión hospitalaria, historias clínicas electrónicas, monitoreo remoto de pacientes.</li>' +
          '<li><b>En emergencias:</b> geolocalización de recursos, comunicación interinstitucional, análisis de riesgo en tiempo real.</li>' +
          '<li><b>En educación:</b> plataformas virtuales, simuladores, acceso a recursos digitales.</li></ul>' +
          '<p><b>Ejemplo aplicado:</b> un operador del 911 puede, mediante un sistema informático, visualizar en tiempo real la ubicación de ambulancias, elegir la más cercana y enviar la alerta al hospital receptor para que prepare el ingreso del paciente. En síntesis, la informática <b>reduce tiempos de respuesta</b>, <b>mejora la comunicación</b> entre equipos y <b>salva vidas</b>: su impacto se nota en cada etapa de una emergencia, desde la detección del incidente hasta la atención, la logística y la evaluación post-evento.</p>'
      },
      {
        h: 'Historia de la informática y Ley de Moore',
        html: '<p>La historia de la informática abarca siglos de avances tecnológicos y científicos:</p>' +
          '<table class="tabla"><tr><th>Época</th><th>Hito</th></tr>' +
          '<tr><td>1642</td><td>Blaise Pascal inventa la <b>Pascalina</b>, una de las primeras calculadoras mecánicas</td></tr>' +
          '<tr><td>1801</td><td>Joseph Marie Jacquard desarrolla el telar de Jacquard, que usa <b>tarjetas perforadas</b> para automatizar patrones: precursor de la programación</td></tr>' +
          '<tr><td>1837</td><td>Charles Babbage diseña la <b>Máquina Analítica</b>, primer concepto de computadora programable (nunca construida por completo)</td></tr>' +
          '<tr><td>1843</td><td><b>Ada Lovelace</b> escribe el primer algoritmo destinado a ser procesado por una máquina: primera programadora de la historia</td></tr>' +
          '<tr><td>1936</td><td>Alan Turing introduce la <b>Máquina de Turing</b>, modelo teórico de los fundamentos de la computación</td></tr>' +
          '<tr><td>Década del 40</td><td>Se desarrollan <b>Colossus</b> y <b>ENIAC</b> (descifrado de códigos y cálculos balísticos)</td></tr>' +
          '<tr><td>Década del 50</td><td>Primeras computadoras comerciales (<b>UNIVAC I</b>) y lenguajes como <b>Fortran</b> y <b>COBOL</b></td></tr>' +
          '<tr><td>Década del 60</td><td>Nacen los sistemas operativos modernos y las primeras redes de computadoras</td></tr>' +
          '<tr><td>Década del 70</td><td>Intel inventa el <b>microprocesador</b>; aparece la PC Altair 8800</td></tr>' +
          '<tr><td>Década del 80</td><td>Apple, Microsoft e IBM popularizan las PC; surgen las interfaces gráficas (GUI), Windows y Mac OS</td></tr>' +
          '<tr><td>Década del 90</td><td><b>Tim Berners-Lee</b> crea la World Wide Web (WWW)</td></tr>' +
          '<tr><td>Década del 2000</td><td>Computación en la nube, dispositivos móviles y redes sociales</td></tr>' +
          '<tr><td>Década del 2010</td><td>Inteligencia artificial, aprendizaje automático y big data</td></tr>' +
          '<tr><td>Década del 2020</td><td>Computación cuántica, IA generativa y ciberseguridad como temas clave</td></tr></table>' +
          '<p><b>La Ley de Moore</b> fue formulada en 1965 por Gordon Moore, cofundador de Intel: establece que el número de transistores de un microprocesador se <b>duplica aproximadamente cada dos años</b>, lo que implica un aumento exponencial de la capacidad de procesamiento y una reducción de los costos por transistor.</p>' +
          '<ul><li><b>Décadas del 70 y 80:</b> la miniaturización permitió las primeras PCs (procesadores Intel 4004 y 8086).</li>' +
          '<li><b>Décadas del 90 y 2000:</b> dispositivos más potentes y accesibles (laptops, teléfonos móviles), gráficos, multimedia e internet.</li>' +
          '<li><b>Década del 2010:</b> la nube y los móviles se benefician de procesadores más eficientes; florecen IA y big data.</li>' +
          '<li><b>Hoy y el futuro:</b> frente a los límites físicos por el tamaño atómico de los transistores, aparecen la computación cuántica y los chips 3D.</li></ul>'
      },
      {
        h: 'Hardware: componentes y tipos de computadoras',
        html: '<p>El <b>hardware</b> es la parte <b>física y tangible</b> de una computadora o sistema informático: los elementos que se pueden ver y tocar, desde un teclado hasta un microprocesador.</p>' +
          '<p><b>Clasificación general del hardware:</b></p>' +
          '<table class="tabla"><tr><th>Grupo</th><th>Función</th><th>Ejemplos</th></tr>' +
          '<tr><td><b>Dispositivos de entrada</b></td><td>Ingresan información al sistema</td><td>Teclado, mouse, escáner, micrófono, cámara web</td></tr>' +
          '<tr><td><b>Dispositivos de salida</b></td><td>Muestran el resultado del procesamiento</td><td>Monitor, impresora, altavoces</td></tr>' +
          '<tr><td><b>CPU (Unidad Central de Procesamiento)</b></td><td>El cerebro del sistema: dirige, calcula y almacena datos temporales</td><td>Unidad de Control (UC), Unidad Aritmético-Lógica (ALU), registros</td></tr>' +
          '<tr><td><b>Dispositivos de almacenamiento</b></td><td>Guardan datos de forma temporal o permanente</td><td>Disco duro (HDD), SSD, memoria USB, tarjeta SD</td></tr>' +
          '<tr><td><b>Otros componentes</b></td><td>Conectan y alimentan al sistema</td><td>Placa base (motherboard), memoria RAM, fuente de alimentación, tarjetas de expansión</td></tr></table>' +
          '<p><b>Tipos de computadoras:</b> <b>escritorio</b> (potentes y duraderas, ideales para oficinas y centros de operaciones), <b>portátiles</b> (para tareas administrativas o móviles), <b>tabletas y teléfonos inteligentes</b> (útiles para el personal en campo) y <b>servidores</b> (gestionan grandes volúmenes de datos en red).</p>' +
          '<p><b>Ejemplo contextual:</b> en una central de emergencias se prefieren computadoras robustas con conectividad constante; en cambio, los socorristas pueden usar tablets resistentes al polvo y al agua con acceso a mapas y registros médicos. En una sala de operaciones móviles, una tablet con Android registra signos vitales que se sincronizan automáticamente con el sistema hospitalario.</p>'
      },
      {
        h: 'Software: clasificación, sistemas operativos y ofimática',
        html: '<p>El <b>software</b> es el conjunto de programas, instrucciones y datos que permiten que el hardware funcione y realice tareas específicas: es la parte <b>lógica e intangible</b> del sistema. Sin software, el hardware sería incapaz de operar. El software traduce las necesidades del usuario en instrucciones que el hardware puede ejecutar.</p>' +
          '<p><b>Clasificación del software:</b></p>' +
          '<table class="tabla"><tr><th>Categoría</th><th>Para qué sirve</th><th>Ejemplos (generales / en emergencias)</th></tr>' +
          '<tr><td><b>Software de sistema</b></td><td>Intermediario entre hardware y usuario; gestiona recursos y ofrece plataforma para otros programas</td><td>Windows, Linux, macOS, controladores y herramientas de diagnóstico / sistemas operativos en monitores de signos vitales y desfibriladores</td></tr>' +
          '<tr><td><b>Software de aplicación</b></td><td>Tareas específicas para el usuario</td><td>Word, Chrome, Photoshop / OpenMRS y Epic (historias clínicas), Traumasoft EMS y ZOLL Dispatch (despacho de ambulancias), Teladoc y Doxy.me (telemedicina), OsiriX (imágenes DICOM)</td></tr>' +
          '<tr><td><b>Software de programación</b></td><td>Herramientas para crear otros programas</td><td>Visual Studio Code, Eclipse, compiladores GCC, depuradores / simuladores médicos como SimMan</td></tr>' +
          '<tr><td><b>Software embebido</b></td><td>Controla dispositivos específicos, integrado al hardware</td><td>Firmware de electrodomésticos, navegación de autos / oxímetros, glucómetros, bombas de infusión, marcapasos</td></tr>' +
          '<tr><td><b>Software libre y propietario</b></td><td>Código abierto vs. licencia restrictiva</td><td>Linux, LibreOffice / Windows, Microsoft Office; GNU Health vs. Cerner e Philips IntelliSpace</td></tr>' +
          '<tr><td><b>Software en la nube</b></td><td>Acceso a aplicaciones y datos vía internet</td><td>Google Drive, Dropbox, Teams / Health Cloud de Salesforce, IBM Watson Health</td></tr>' +
          '<tr><td><b>Software en tiempo real</b></td><td>Respuestas inmediatas</td><td>Control industrial, vehículos autónomos / monitoreo de UCI y alertas temprana de cambios en signos vitales</td></tr></table>' +
          '<p><b>Sistemas operativos (SO):</b> software fundamental que administra los recursos del hardware y permite que el usuario interactúe con la máquina. Sus funciones principales son la <b>gestión de procesos</b> (multitarea), de <b>memoria</b> RAM, de <b>dispositivos</b> (mediante controladores), de <b>archivos</b> (NTFS, FAT32, ext4), la <b>seguridad y permisos</b> y la <b>interfaz de usuario</b> (GUI o CLI). Tipos: de escritorio (Windows, macOS, Linux), móviles (Android, iOS), de servidor (Windows Server, Ubuntu Server), embebidos (FreeRTOS, VxWorks) y en tiempo real o RTOS (QNX, RTEMS).</p>' +
          '<p><b>Ofimática:</b> conjunto de herramientas informáticas para crear, editar, organizar, analizar y compartir información en entornos laborales, académicos y personales. Incluye <b>procesadores de texto</b> (Word, Google Docs, LibreOffice Writer), <b>hojas de cálculo</b> (Excel, Google Sheets, Calc), <b>programas de presentaciones</b> (PowerPoint, Google Slides, Impress, Canva), gestores de correo y almacenamiento en la nube.</p>' +
          '<ul><li><b>Offline vs. online:</b> las herramientas offline (Microsoft Office, LibreOffice) funcionan sin internet, con más funciones y privacidad, pero con colaboración limitada; las online (Google Workspace) permiten edición colaborativa en tiempo real y acceso desde cualquier dispositivo, pero requieren conexión.</li>' +
          '<li><b>Procesadores de texto:</b> historia de WordStar y WordPerfect (años 80) a Microsoft Word (años 90) y Google Docs (nube); funciones básicas de formato, listas, tablas, imágenes y revisión ortográfica.</li>' +
          '<li><b>Hojas de cálculo:</b> VisiCalc (1979, la primera), Lotus 1-2-3 (1983), Excel (1985) y Google Sheets (2006); filas y columnas forman celdas con fórmulas y funciones para cálculos, gráficos y reportes.</li>' +
          '<li><b>Presentaciones:</b> Harvard Graphics (1986), PowerPoint (1987) y Google Slides (2006); secuencias de diapositivas con texto, imágenes, audio y video para exponer ideas.</li></ul>'
      },
      {
        h: 'Historia del software: lenguajes, paradigmas y crisis',
        html: '<p>El software comenzó con la programación de las primeras computadoras (ENIAC) usando lenguaje máquina y ensamblador; el término fue acuñado por <b>John Tukey en 1958</b>. Los programas pasaron de depender del hardware a convertirse en una industria global:</p>' +
          '<table class="tabla"><tr><th>Década</th><th>Hitos</th></tr>' +
          '<tr><td>1940</td><td>Código máquina y ensamblador para ENIAC y UNIVAC</td></tr>' +
          '<tr><td>1950</td><td>Primeros lenguajes de alto nivel: <b>Fortran (1957)</b> y <b>COBOL (1959)</b>; primeros sistemas operativos básicos</td></tr>' +
          '<tr><td>1960</td><td>IBM lanza <b>OS/360</b>; nace el software empaquetado, separado del hardware</td></tr>' +
          '<tr><td>1970</td><td>Lenguaje <b>C (1972)</b> en los laboratorios Bell; Microsoft fundada en 1975; primeras PC</td></tr>' +
          '<tr><td>1980</td><td>Macintosh (1984) y Windows (1985) popularizan las interfaces gráficas; se consolida el modelo propietario con licencias</td></tr>' +
          '<tr><td>1990</td><td>Internet y la WWW impulsan los navegadores; <b>Linux (1991)</b> impulsa el software libre</td></tr>' +
          '<tr><td>2000</td><td>Nube y SaaS (Google Docs, AWS); iPhone (2007) dispara las apps móviles</td></tr>' +
          '<tr><td>2010</td><td>IA democratizada con TensorFlow y PyTorch</td></tr>' +
          '<tr><td>2020</td><td>Zoom y Teams en la pandemia; IA generativa como ChatGPT</td></tr></table>' +
          '<p><b>Lenguajes y paradigmas:</b> <b>FORTRAN</b> (1957, IBM) facilitó la programación científica; <b>COBOL</b> (1959) aportó la independencia del hardware para aplicaciones comerciales; <b>C</b> (1972) combinó eficiencia del ensamblador con alto nivel y fue la base de UNIX; <b>BASIC</b> (1964) democratizó la programación; <b>Lisp</b> (1958) y <b>Prolog</b> (1972) se orientaron a la inteligencia artificial. Los paradigmas son enfoques para resolver problemas: <b>estructurada</b> (secuencias, decisiones, bucles y modularidad, con Pascal y C; Dijkstra cuestionó el uso indiscriminado del <em>goto</em>), <b>orientada a objetos</b> (Smalltalk en los 70, después C++, Java y Python: organiza el software en objetos que combinan datos y comportamientos), <b>lógica</b> (Prolog: hechos y reglas) y <b>funcional</b> (Lisp y Haskell: funciones sin efectos secundarios).</p>' +
          '<p><b>La crisis del software:</b> a finales de la década del 60 los proyectos crecieron en tamaño y complejidad y los métodos tradicionales resultaron insuficientes. El término se acuñó en la <b>primera Conferencia sobre Ingeniería del Software de la OTAN (1968)</b>. Síntomas: retrasos y sobrecostos, baja calidad (errores y caídas), dificultad de mantenimiento y falta de documentación.</p>' +
          '<p><b>La ingeniería del software</b> nació como respuesta: aplica principios de la ingeniería para lograr software <b>correcto, fiable, mantenible, eficiente y económico</b>. Aportó metodologías como el <b>modelo en cascada</b> (etapas secuenciales), los <b>modelos iterativos e incrementales</b> y, en los 2000, las <b>metodologías ágiles</b> (Scrum y XP), además de herramientas <b>CASE</b> y la profesionalización de la disciplina (ACM, IEEE Computer Society).</p>' +
          '<p><b>Software libre, web y contexto argentino:</b> Richard Stallman lanzó el <b>proyecto GNU en 1983</b> y fundó la <b>Free Software Foundation en 1985</b>; Linus Torvalds publicó el núcleo <b>Linux en 1991</b>, desarrollado colaborativamente (Debian, Red Hat, Ubuntu) e inspirando Apache, MySQL y Firefox. <b>Tim Berners-Lee</b> propuso la WWW en el CERN (1989) y publicó la primera página web en 1991 sobre estándares abiertos (HTML, HTTP, URL). En Argentina, la <b>Clementina (1961)</b>, una Ferranti Mercury de la UBA, fue la primera computadora científica del país; en los 80 surgieron <b>Tango</b> y <b>Calipso</b>; en los 2000, las comunidades <b>Solar</b> y <b>Fundación Vía Libre</b> impulsaron la migración a software libre (GDE, VUCE, Conectar Igualdad); hoy empresas como <b>Globant, Mercado Libre, Despegar y Auth0</b> consolidan la exportación de software.</p>'
      },
      {
        h: 'Software libre y propietario',
        html: '<p>El <b>software libre</b> respeta la libertad de los usuarios para ejecutar, estudiar, modificar y distribuir el programa. Fue definido por la Free Software Foundation (FSF) sobre principios de transparencia, colaboración y accesibilidad. Sus <b>cuatro libertades fundamentales</b> son: <b>usar</b> el programa con cualquier propósito, <b>estudiar</b> su código fuente, <b>modificar</b> el software para adaptarlo y <b>distribuir</b> copias (originales o modificadas). Usa licencias como GPL, MIT y Apache, y el desarrollo lo impulsan comunidades de programadores y usuarios.</p>' +
          '<p>El <b>software propietario</b> está controlado por una empresa o desarrollador y su uso se restringe mediante licencias: el código fuente es <b>cerrado</b>, los usuarios no pueden modificarlo ni redistribuirlo, el desarrollo está centralizado y las actualizaciones dependen exclusivamente del desarrollador.</p>' +
          '<table class="tabla"><tr><th>Aspecto</th><th>Software libre</th><th>Software propietario</th></tr>' +
          '<tr><td><b>Costo</b></td><td>Generalmente gratuito</td><td>Pago por licencia o suscripción</td></tr>' +
          '<tr><td><b>Código fuente</b></td><td>Disponible para estudiar y modificar</td><td>Cerrado y no accesible</td></tr>' +
          '<tr><td><b>Libertad de uso</b></td><td>Sin restricciones</td><td>Limitado por los términos de la licencia</td></tr>' +
          '<tr><td><b>Soporte técnico</b></td><td>Basado en comunidades o empresas externas</td><td>Proporcionado por el desarrollador</td></tr>' +
          '<tr><td><b>Seguridad</b></td><td>Transparente y revisada por la comunidad</td><td>Depende del desarrollador</td></tr>' +
          '<tr><td><b>Actualizaciones</b></td><td>Colaborativas y frecuentes</td><td>Controladas por el desarrollador</td></tr>' +
          '<tr><td><b>Ejemplos</b></td><td>Linux, LibreOffice, Firefox, GNU Health</td><td>Windows, Microsoft Office, Photoshop, Cerner</td></tr></table>' +
          '<p><b>Ventajas y desventajas:</b> el software libre ofrece bajo costo, flexibilidad de personalización, seguridad por revisión comunitaria e independencia del proveedor, pero exige una curva de aprendizaje, puede tener soporte profesional limitado y compatibilidad imperfecta con formatos propietarios. El propietario ofrece soporte técnico, interfaces amigables, amplia compatibilidad y garantías (SLA), pero implica costo de licencias, dependencia del desarrollador, restricciones de uso y posible obsolescencia programada.</p>' +
          '<p><b>¿Qué se puede hacer con cada uno?</b> Usar sin restricciones, modificar el código, redistribuir copias y personalizar funciones: <b>sí</b> con el software libre; <b>no</b> (o solo con permiso) con el propietario. El soporte técnico de pago es opcional en el libre y obligatorio en muchos casos en el propietario.</p>'
      },
      {
        h: 'NTICs en salud y medicina de emergencias',
        html: '<p>La medicina de emergencias (emergentología) exige respuestas rápidas, precisas y coordinadas: la integración de software y hardware ha transformado el diagnóstico, el tratamiento y la gestión de recursos en escenarios de urgencia. La evolución tecnológica fue constante y disruptiva, desde los primeros sistemas de radio en ambulancias hasta los algoritmos de IA que predicen el deterioro clínico.</p>' +
          '<table class="tabla"><tr><th>Período</th><th>Avances</th></tr>' +
          '<tr><td><b>Antes de 1960</b></td><td>Teléfono de línea fija, telégrafo y radio AM; en 1928, Schenectady (Nueva York) instala el primer servicio de ambulancias con comunicación por radio</td></tr>' +
          '<tr><td><b>Décadas 1960-1980</b></td><td>Radios VHF/UHF sin estandarización; en Argentina, la <b>Clementina (1961)</b> procesa datos epidemiológicos; <b>Technicon Data Systems</b> crea el sistema <b>TMIS</b>, implementado primero en el Hospital El Camino (California) en <b>1971</b>; primeros monitores cardíacos (Electrodyne PM-65, 1970) y desfibriladores manuales</td></tr>' +
          '<tr><td><b>Década de 1990</b></td><td>Se popularizan las HCE <b>EPIC (1979)</b> y <b>Cerner (1980)</b>; el protocolo <b>HL7 (1987)</b> sienta bases de interoperabilidad; monitores multiparamétrico <b>ProPaq 104 (1991)</b> y ECG <b>GE Marquette 12SL (1993)</b>; ECG por fax; GPS disponible comercialmente desde 1993; SIG del condado de Los Ángeles (1995); simulador SimMan (1997); teleconsulta en Telehealth Ontario y Hospital Garrahan</td></tr>' +
          '<tr><td><b>Siglo XXI</b></td><td>Interoperabilidad con <b>HL7 FHIR</b> (el SAME transmite datos del paciente al hospital receptor), <b>IA</b> (eCART, Rothman Index, AIDOC, Epic Deterioration Index), <b>big data</b> (SNVS en la pandemia, EpiMap en Chile, LAS Big Data en Londres) y <b>telemedicina</b> (RescueTrack redujo un 25% los tiempos de reperfusión en infartos; SatMed conecta regiones remotas por satélite)</td></tr></table>' +
          '<p><b>Ejemplo de interoperabilidad:</b> en HL7 FHIR un recurso <em>Patient</em> en JSON (nombre, género, fecha de nacimiento, dirección y contacto de emergencia) puede transmitirse entre el sistema prehospitalario y el hospital para garantizar la continuidad de la atención.</p>' +
          '<p><b>Impacto y desafíos:</b> la tecnología permite una atención más rápida, precisa y coordinada, pero persisten la <b>interoperabilidad limitada</b> (falta de estándares universales), la <b>ciberseguridad</b> (aumento de ciberataques a sistemas de salud) y la <b>brecha tecnológica</b> (desigualdad de acceso, especialmente en zonas rurales y países en desarrollo). La informática, la IA y el big data marcaron un antes y un después; maximizar su impacto exige que las tecnologías estén al servicio de todos, independientemente de la ubicación o el nivel socioeconómico.</p>'
      }
    ],
    archivos: [
      { t: 'Clase 1 — Introducción a la informática y hardware (PDF)', f: '01_Introduccion_a_la_Informatica_y_NTICs/Clase_01_2025_Introduccion_Hardware_y_Software/clase 1.pdf' },
      { t: 'Clase 1 — Presentación de la clase (PPTX)', f: '01_Introduccion_a_la_Informatica_y_NTICs/Clase_01_2025_Introduccion_Hardware_y_Software/clase 1.pptx' },
      { t: 'Clase 2 — Historia del software (PDF)', f: '01_Introduccion_a_la_Informatica_y_NTICs/Clase_02_2025_Historia_del_Software/Historia del software.pdf' },
      { t: 'Clase 3 — Sistemas en medicina y emergentología (PDF)', f: '01_Introduccion_a_la_Informatica_y_NTICs/Clase_03_2025_NTICs_y_Sistemas_en_Salud/Sistemas en Medicina y Emergentologia.pdf' },
      { t: 'Clase 3 — Introducción a las NTICs (PDF)', f: '01_Introduccion_a_la_Informatica_y_NTICs/Clase_03_2025_NTICs_y_Sistemas_en_Salud/Intro NTICS.pdf' },
      { t: 'Clase 3 — Ofimática: texto, cálculo y presentaciones (PDF)', f: '01_Introduccion_a_la_Informatica_y_NTICs/Clase_03_2025_NTICs_y_Sistemas_en_Salud/Texto, Calculo y demàs.pdf' }
    ]
  });

  NTX.quizzes.u1 = {
    id: 'u1',
    titulo: 'Autoevaluación — Unidad 1: Introducción a la Informática y NTICs',
    preguntas: [
      { t: 'La **informática** se define como:', type: 'mcq', opts: ['La disciplina del tratamiento automático de la información mediante computadoras y otros sistemas electrónicos', 'El estudio exclusivo de las redes sociales y la mensajería', 'La ciencia que se ocupa de reparar componentes físicos de las computadoras', 'La rama de la medicina dedicada a los equipos hospitalarios'], ans: 0, exp: 'La informática procesa, almacena y comunica datos de manera eficiente, integrando matemáticas, lógica, electrónica y programación. La palabra proviene del francés <em>informatique</em>.', tag: 'informática' },
      { t: 'La **Ley de Moore**, formulada en 1965 por Gordon Moore, establece que:', type: 'mcq', opts: ['El número de transistores de un microprocesador se duplica aproximadamente cada dos años', 'El precio de las computadoras se reduce a la mitad cada dos meses', 'Todo sistema operativo debe actualizarse cada dos años', 'La capacidad de internet se duplica cada diez años'], ans: 0, exp: 'La duplicación de transistores (y la reducción del costo por transistor) explica el aumento exponencial de la capacidad de procesamiento: impulsó las PCs en los 70-80, los móviles y la nube, y hoy convive con límites físicos que abren paso a los chips 3D y a la computación cuántica.', tag: 'historia' },
      { t: 'Marcá las afirmaciones **verdaderas** sobre el hardware.', type: 'multi', opts: ['La CPU está formada por la Unidad de Control, la Unidad Aritmético-Lógica (ALU) y registros', 'Los dispositivos de salida muestran el resultado del procesamiento (monitor, impresora, altavoces)', 'La memoria RAM almacena temporalmente información que la CPU necesita rápidamente', 'El software es un componente físico que se puede tocar dentro de la computadora'], ans: [0, 1, 2], exp: 'La CPU y sus partes, los dispositivos de salida y la RAM son componentes físicos del hardware. El software es la parte lógica e intangible del sistema, opuesta al hardware.', tag: 'hardware' },
      { t: 'El **software de sistema** actúa principalmente como:', type: 'mcq', opts: ['Intermediario entre el hardware y el usuario, gestionando los recursos del sistema y brindando una plataforma para que funcionen los programas', 'Aplicación para editar documentos de texto con formato', 'Herramienta que solo sirve para diseñar páginas web', 'Programa embebido en electrodomésticos como microondas y lavadoras'], ans: 0, exp: 'El software de sistema (sistemas operativos, controladores, herramientas de diagnóstico) gestiona recursos y habilita al software de aplicación; en emergencias se lo encuentra embebido en monitores de signos vitales y desfibriladores.', tag: 'software' },
      { t: 'El software **propietario** permite estudiar, modificar y redistribuir libremente su código fuente.', type: 'tf', ans: false, exp: 'Justo lo contrario: el propietario tiene <b>código cerrado</b> y su uso se restringe por licencia. Estudiar, modificar y distribuir son las cuatro libertades del <b>software libre</b>, definidas por la Free Software Foundation (FSF).', tag: 'software libre' },
      { t: 'El término **crisis del software** se acuñó en:', type: 'mcq', opts: ['La primera Conferencia sobre Ingeniería del Software de la OTAN (1968)', 'La creación de la Free Software Foundation en 1985', 'El lanzamiento del proyecto GNU en 1983', 'La publicación de la primera página web en 1991'], ans: 0, exp: 'En la conferencia de la OTAN de 1968 se debatieron los problemas recurrentes: proyectos que excedían plazos y presupuestos, sistemas defectuosos y dificultades de mantenimiento. De esa crisis surgió la <b>ingeniería del software</b> con metodologías como cascada, iterativas y ágiles (Scrum, XP).', tag: 'ingeniería del software' },
      { t: 'Marcá las afirmaciones **verdaderas** sobre las **cuatro libertades** del software libre.', type: 'multi', opts: ['Usar el programa con cualquier propósito, sin restricciones', 'Estudiar cómo funciona el programa (acceso al código fuente)', 'Modificar el programa para adaptarlo a las propias necesidades', 'Distribuir copias solo si se paga una licencia al fabricante'], ans: [0, 1, 2], exp: 'Las libertades son usar, estudiar, modificar y distribuir copias (originales o modificadas), definidas por la FSF de Richard Stallman. La cuarta opción contradice el principio: la distribución no exige pago de licencias.', tag: 'software libre' },
      { t: 'La **Clementina**, primera computadora científica de Argentina, se instaló en 1961 en la Universidad de Buenos Aires. Era una:', type: 'mcq', opts: ['Ferranti Mercury británica', 'IBM OS/360', 'Altair 8800', 'UNIVAC I'], ans: 0, exp: 'La Clementina (1961, UBA) fue una <b>Ferranti Mercury</b> fundamental para la investigación científica y la formación de profesionales, y marcó el primer paso de la computación argentina, continuada por el INTI y la CNEA.', tag: 'historia argentina' },
      { t: 'La primera hoja de cálculo electrónica, aparecida en 1979, fue **VisiCalc**.', type: 'tf', ans: true, exp: 'VisiCalc (1979) revolucionó el trabajo en oficinas; luego vinieron Lotus 1-2-3 (1983), Microsoft Excel (1985) y Google Sheets (2006), con edición colaborativa en la nube. En presentaciones, la secuencia fue Harvard Graphics (1986), PowerPoint (1987) y Google Slides (2006).', tag: 'ofimática' },
      { t: 'La primera programadora de la historia, que trabajó con Charles Babbage y escribió el primer algoritmo para una máquina (1843), se llamaba:', type: 'fill', ans: ['ada lovelace', 'lovelace', 'ada augusta lovelace'], exp: 'Ada Lovelace, colaborando con Babbage en la Máquina Analítica, escribió el primer algoritmo destinado a ser procesado por una máquina, por lo que se la considera la primera programadora. Su trabajo anticipó décadas después el concepto de computación.', tag: 'historia' }
    ]
  };
})(window.NTX);
