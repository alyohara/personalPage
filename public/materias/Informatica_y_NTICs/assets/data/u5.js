/* ============================================================
   NTX — Unidad 5: Historia clínica digital e interoperabilidad
   ============================================================ */
(function (NTX) {
  'use strict';

  NTX.unidades.push({
    id: 'u5',
    num: 5,
    icon: '◉',
    title: 'Historia clínica digital e interoperabilidad',
    resumen: 'Del papel a la historia clínica electrónica: evolución, ventajas y riesgos, estándares de intercambio (HL7, FHIR, DICOM, LOINC, SNOMED CT), formatos XML y JSON, software libre y prácticas de interoperabilidad.',
    objetivos: [
      'Relatar la evolución de la historia clínica en papel hacia la historia clínica digital y sus hitos internacionales.',
      'Comparar ventajas y desventajas de la historia clínica digital usando casos reales de éxito y fracaso.',
      'Reconocer los principales estándares de interoperabilidad en salud y el objetivo de cada uno.',
      'Distinguir XML y JSON como formatos de intercambio de datos y su relación con HL7 y FHIR.',
      'Evaluar soluciones libres de historia clínica electrónica y clasificar los niveles de interoperabilidad.'
    ],
    secciones: [
      {
        h: 'La historia clínica: del papel a lo digital',
        html: '<p>La <b>historia clínica</b> es el registro de la información médica de un paciente: antecedentes, diagnósticos, tratamientos, estudios y evolución. Durante décadas fue un documento en papel; la digitalización transformó su gestión y aportó mayor <b>accesibilidad</b>, <b>seguridad</b> y posibilidad de <b>análisis de datos</b>.</p>' +
          '<p><b>Hitos internacionales:</b></p>' +
          '<table class="tabla"><tr><th>Fecha</th><th>Hito</th></tr>' +
          '<tr><td>Década del 60</td><td>Primeros sistemas electrónicos en hospitales de EE. UU., como el del Hospital General de Massachusetts, que almacenaba datos básicos de pacientes</td></tr>' +
          '<tr><td>1972</td><td>Sistema Regenstrief (Indiana): uno de los primeros en integrar información clínica y administrativa</td></tr>' +
          '<tr><td>1991</td><td>El Institute of Medicine (IOM) recomienda informatizar las historias clínicas para mejorar calidad y seguridad</td></tr>' +
          '<tr><td>2004</td><td>EE. UU. lanza un plan nacional de EHR (<em>Electronic Health Record</em>), impulsando adopción masiva y estándares de interoperabilidad</td></tr>' +
          '<tr><td>2010s</td><td>Expansión global (Reino Unido, Canadá, Australia); la interoperabilidad y la protección de datos se vuelven desafíos centrales</td></tr></table>' +
          '<p><b>Casos y situaciones actuales:</b> en <b>Estonia</b> todos los ciudadanos tienen una historia clínica digital accesible para los profesionales autorizados, lo que permite una atención eficiente y segura en cualquier punto del país. En <b>Argentina</b> hay avances con la Historia Clínica Digital Nacional (HCDN) y la integración de sistemas provinciales y hospitales públicos: el <b>Hospital El Cruce</b> usa HCD para compartir información entre especialidades.</p>' +
          '<ul><li><b>Ejemplo de uso:</b> un paciente diabético atendido en distintos centros tiene su información disponible para todos los profesionales, evitando duplicidad de estudios y errores de medicación.</li>' +
          '<li><b>En emergencias:</b> el acceso rápido a los antecedentes médicos puede salvar vidas.</li></ul>'
      },
      {
        h: 'Ventajas, desventajas y casos reales',
        html: '<p><b>Ventajas principales</b> de la historia clínica digital:</p>' +
          '<ul><li><b>Acceso rápido y remoto:</b> consultar la información desde cualquier lugar y momento (emergencias, telemedicina, consultas externas).</li>' +
          '<li><b>Seguridad y trazabilidad:</b> cada acceso y modificación queda registrado: quién, cuándo y qué se consultó o editó.</li>' +
          '<li><b>Investigación y gestión:</b> grandes volúmenes de datos estructurados para estudios epidemiológicos, estadísticos y reportes.</li>' +
          '<li><b>Interoperabilidad y menos errores:</b> menos duplicidad de estudios y menos errores por transcripción manual.</li>' +
          '<li><b>Ahorro de espacio físico</b> y <b>mejor legibilidad</b> frente a la escritura manuscrita.</li>' +
          '<li><b>Actualización en tiempo real</b> y <b>soporte a la decisión clínica</b> con alertas, recordatorios y guías integradas.</li></ul>' +
          '<p><b>Desventajas y riesgos:</b> costos de implementación y mantenimiento; curva de aprendizaje y resistencia al cambio; riesgos de seguridad y privacidad (accesos no autorizados, robo de datos, ciberataques); dependencia tecnológica (electricidad, internet, servidores); problemas de interoperabilidad entre sistemas; actualización y obsolescencia; e impacto en la relación médico-paciente si el profesional se concentra más en la pantalla que en el enfermo.</p>' +
          '<table class="tabla"><tr><th>Casos de éxito</th><th>Casos de fracaso</th></tr>' +
          '<tr><td><b>Estonia:</b> sistema nacional que mejoró la coordinación entre niveles de atención, redujo errores y facilitó la investigación en salud pública.</td>' +
          '<td><b>NPfIT (Reino Unido):</b> ambicioso proyecto de digitalización cancelado por problemas de gestión, falta de interoperabilidad, sobrecostos y resistencia del personal.</td></tr>' +
          '<tr><td><b>Kaiser Permanente (EE. UU.):</b> HCD integrada en todos sus centros: seguimiento integral, menos pruebas duplicadas, alertas que previenen eventos adversos.</td>' +
          '<td><b>Sistemas no interoperables:</b> la falta de estándares genera “islas de información” que rompen la continuidad del cuidado.</td></tr></table>'
      },
      {
        h: 'Estándares internacionales de interoperabilidad',
        html: '<p>Los estándares permiten la <b>interoperabilidad</b> y el <b>intercambio seguro</b> de información entre sistemas de salud: los datos pueden ser comprendidos por distintas instituciones, profesionales y aplicaciones, sin importar el software usado. Sin ellos, cada sistema guardaría y transmitiría la información a su manera y se dificultarían la continuidad del cuidado, la investigación y la gestión.</p>' +
          '<table class="tabla"><tr><th>Estándar</th><th>Para qué sirve</th></tr>' +
          '<tr><td><b>HL7</b> (Health Level 7)</td><td>Intercambio, integración y recuperación electrónica de información de salud: admisiones, resultados de laboratorio, documentos clínicos</td></tr>' +
          '<tr><td><b>FHIR</b></td><td>Estándar moderno de HL7 para la web y APIs RESTful, usando JSON y XML, basado en “recursos” modulares</td></tr>' +
          '<tr><td><b>DICOM</b></td><td>Manejo, almacenamiento, impresión y transmisión de imágenes médicas (radiografías, tomografías, resonancias)</td></tr>' +
          '<tr><td><b>LOINC</b></td><td>Identificación de pruebas de laboratorio y observaciones clínicas</td></tr>' +
          '<tr><td><b>SNOMED CT</b></td><td>Ontología clínica para codificar enfermedades, hallazgos y procedimientos</td></tr></table>' +
          '<p><b>HL7</b> tiene varias versiones: <code>HL7 v2.x</code> es el más usado en hospitales para mensajería; <code>HL7 v3</code> es más estructurado y menos adoptado; <code>HL7 CDA</code> se aplica a documentos clínicos estructurados. Un mensaje se arma en segmentos: <code>MSH</code> es el encabezado del mensaje y <code>PID</code> la información del paciente.</p>' +
          '<p><b>FHIR</b> es fácil de implementar, compatible con apps móviles y web, y modular: cada recurso representa un concepto (<em>Patient</em>, <em>Observation</em>, <em>Consultation</em>…). Su ejemplo típico es un paciente en JSON:</p>' +
          '<p><code>{ "resourceType": "Patient", "name": [{ "family": "García", "given": ["Juan"] }], "birthDate": "1980-01-01" }</code></p>' +
          '<ul><li><b>Ejemplos de códigos:</b> LOINC <code>718-7</code> = hemoglobina en sangre; SNOMED CT <code>44054006</code> = diabetes mellitus tipo 2.</li>' +
          '<li><b>Ejemplo de uso DICOM:</b> un tomógrafo genera una imagen que puede verse en cualquier visor compatible, sin importar el fabricante.</li>' +
          '<li><b>Software relacionado:</b> OpenEMR y GNU Health (HL7, LOINC, SNOMED), HAPI FHIR y OpenMRS (FHIR), Orthanc y Weasis (DICOM), Mirth Connect (integración HL7).</li></ul>'
      },
      {
        h: 'XML y JSON: los formatos del intercambio de datos',
        html: '<p><b>XML</b> (lenguaje de marcado extensible) se basa en etiquetas y atributos para almacenar y transportar datos estructurados. Es muy usado en sistemas de salud, en interoperabilidad y en estándares como HL7.</p>' +
          '<p><code>&lt;Paciente id="12345"&gt;&lt;Nombre&gt;Maria Gomez&lt;/Nombre&gt;&lt;Diagnostico&gt;Hipertensión&lt;/Diagnostico&gt;&lt;/Paciente&gt;</code></p>' +
          '<p><b>JSON</b> es un formato ligero de intercambio de datos basado en texto: usa objetos (pares clave-valor) y arrays (listas ordenadas). Es el formato preferido en las APIs modernas y en las aplicaciones web.</p>' +
          '<p><code>{ "id": 12345, "nombre": "Maria Gomez", "edad": 45, "diagnostico": "Hipertensión" }</code></p>' +
          '<table class="tabla"><tr><th>Característica</th><th>XML</th><th>JSON</th></tr>' +
          '<tr><td>Legibilidad</td><td>Estructura de etiquetas, más densa</td><td>Más fácil de leer y escribir</td></tr>' +
          '<tr><td>Peso</td><td>Más verboso y pesado</td><td>Más ligero y conciso</td></tr>' +
          '<tr><td>Estructura</td><td>Más compleja: atributos, <em>namespaces</em></td><td>Más simple: objetos y arrays</td></tr>' +
          '<tr><td>Validación</td><td>Se valida con XSD</td><td>Se valida con JSON Schema</td></tr>' +
          '<tr><td>Uso típico</td><td>HL7 tradicional, documentos</td><td>APIs REST, FHIR, apps móviles</td></tr></table>' +
          '<p><b>Relación con los estándares:</b> HL7 utilizó tradicionalmente XML, mientras que FHIR soporta <b>XML y JSON</b> para el intercambio de datos clínicos: el mismo recurso <em>Patient</em> se puede expresar en cualquiera de los dos formatos. En la práctica se usan validadores y convertidores online para pasar de XML a JSON y viceversa, y para probar recursos FHIR.'
      },
      {
        h: 'Software libre de historia clínica electrónica',
        html: '<p>El <b>software libre</b> permite acceder a sistemas robustos de historia clínica electrónica (HCE) sin altos costos de licenciamiento. Frente a las soluciones propietarias ofrece: <b>bajo costo</b>, <b>personalización</b> (el código fuente está disponible), <b>comunidad activa</b>, <b>transparencia y seguridad</b> (se puede auditar el código) e <b>independencia del proveedor</b>.</p>' +
          '<table class="tabla"><tr><th>Sistema</th><th>Enfoque y características</th><th>Casos de uso</th></tr>' +
          '<tr><td><b>OpenEMR</b></td><td>Uno de los más usados en el mundo: pacientes, citas, facturación, recetas, reportes, portal para pacientes, integración con laboratorios y farmacias, soporte de telemedicina; cumple HIPAA y soporta HL7</td><td>Clínicas privadas, consultorios, hospitales pequeños y medianos</td></tr>' +
          '<tr><td><b>GNU Health</b></td><td>Orientado a salud pública y atención primaria: historial médico, vacunación, epidemiología, RR. HH. y stock de medicamentos; integra HL7 e ICD-10</td><td>Hospitales públicos, centros comunitarios, salud global</td></tr>' +
          '<tr><td><b>OpenMRS</b></td><td>Sistema modular con registro longitudinal de pacientes, arquitectura de módulos y herramientas de análisis de datos; usa SNOMED CT</td><td>Programas de salud pública, ONG, regiones con recursos limitados</td></tr></table>' +
          '<p><b>Limitaciones a considerar:</b> requiere personal técnico para instalación, configuración y mantenimiento; el soporte comercial puede ser menor que el de las soluciones propietarias; la personalización demanda tiempo; y la integración con otros sistemas puede exigir desarrollo adicional.</p>' +
          '<p>La práctica propuesta es navegar las demos online de estos sistemas y explorar sus módulos de registro de pacientes, agenda de citas, consultas, recetas y reportes, para listar funcionalidades clave para un consultorio o clínica.</p>'
      },
      {
        h: 'Interoperabilidad en la práctica: niveles, códigos y plataformas',
        html: '<p>Los problemas de interoperabilidad se analizan en <b>cuatro niveles</b>, y cada estándar interviene en uno de ellos:</p>' +
          '<table class="tabla"><tr><th>Nivel</th><th>Problema típico</th><th>Estándares que lo abordan</th></tr>' +
          '<tr><td><b>Técnico</b></td><td>Falta de conectividad, protocolos incompatibles, transmisión por correo</td><td><code>TCP/IP</code>, <code>HTTPS/TLS</code></td></tr>' +
          '<tr><td><b>Sintáctico</b></td><td>Distintos formatos y estructuras de datos</td><td>Mensajes <code>HL7 v2</code>, recursos <code>FHIR</code>, <code>JSON</code></td></tr>' +
          '<tr><td><b>Semántico</b></td><td>Códigos distintos para el mismo concepto (“GLU”, “GLUC”, “33743-4”)</td><td><code>SNOMED CT</code>, <code>LOINC</code>, <code>CIE-10</code></td></tr>' +
          '<tr><td><b>Organizacional</b></td><td>Falta de políticas y acuerdos de intercambio, procesos manuales</td><td>Flujos de trabajo clínicos y protocolos institucionales</td></tr></table>' +
          '<p><b>Ejemplos de práctica:</b> analizar un mensaje HL7 (los segmentos <code>MSH</code> y <code>PID</code> describen el encabezado y al paciente), crear un recurso FHIR <em>Patient</em> en JSON y validarlo, convertir un registro clínico de XML a JSON, y navegar las jerarquías de SNOMED-CT y los capítulos del CIE-10.</p>' +
          '<p><b>Mapeo entre clasificaciones:</b> los códigos se pueden cruzar, por ejemplo <code>E11.9</code> (diabetes tipo 2 sin complicaciones, CIE-10) ↔ <code>44054006</code> (Type 2 diabetes mellitus, SNOMED CT); <code>I10</code> (hipertensión esencial) ↔ <code>59621000</code>. El mapeo no siempre es 1:1: SNOMED-CT es más granular que el código CIE-10 genérico.</p>' +
          '<p><b>Plataformas y aplicaciones:</b> existen soluciones argentinas de salud digital como <b>SHAMAN AID</b> (Smart Medical Tech S.A.), que funciona como nexo entre el personal médico y los pacientes con videollamadas, chat, botones de emergencia y recetas digitales, e incluye una consola con ingreso de diagnóstico, triage, historial de atenciones, epicrisis e historia clínica unificada.</p>'
      }
    ],
    archivos: [
      { t: 'Clase 16 — Historia clínica digital: evolución y actualidad (PDF)', f: '05_Historia_Clinica_Digital_e_Interoperabilidad/Clase_16_2025_Historia_Clinica_Digital/historia_evolucion.pdf' },
      { t: 'Clase 16 — Ventajas y desventajas de la historia clínica digital (PDF)', f: '05_Historia_Clinica_Digital_e_Interoperabilidad/Clase_16_2025_Historia_Clinica_Digital/ventajas_desventajas.pdf' },
      { t: 'Clase 16 — Estándares internacionales en historia clínica digital (PDF)', f: '05_Historia_Clinica_Digital_e_Interoperabilidad/Clase_16_2025_Historia_Clinica_Digital/estandares.pdf' },
      { t: 'Clase 16 — Introducción a XML y JSON en salud (PDF)', f: '05_Historia_Clinica_Digital_e_Interoperabilidad/Clase_16_2025_Historia_Clinica_Digital/xml_json.pdf' },
      { t: 'Clase 16 — Software gratuito de historia clínica electrónica (PDF)', f: '05_Historia_Clinica_Digital_e_Interoperabilidad/Clase_16_2025_Historia_Clinica_Digital/software_libre.pdf' },
      { t: 'Guía de ejercicios de interoperabilidad en salud (PDF)', f: '05_Historia_Clinica_Digital_e_Interoperabilidad/Clase_16_2025_Historia_Clinica_Digital/exported-assets/guia-ejercicios-interoperabilidad.pdf' }
    ]
  });

  NTX.quizzes.u5 = {
    id: 'u5',
    titulo: 'Autoevaluación — Unidad 5: Historia clínica digital e interoperabilidad',
    preguntas: [
      { t: 'El sistema **Regenstrief** (1972, Indiana) fue relevante porque:', type: 'mcq', opts: ['Fue uno de los primeros en integrar información clínica y administrativa', 'Creó el primer estándar DICOM', 'Implementó la historia clínica nacional de Estonia', 'Definió el formato JSON'], ans: 0, exp: 'Regenstrief es uno de los primeros sistemas en combinar datos clínicos y administrativos, lo que facilitó la investigación médica. El plan nacional de EHR de EE. UU. recién llegó en 2004.', tag: 'historia' },
      { t: 'Marcá las afirmaciones **verdaderas** sobre las ventajas de la historia clínica digital.', type: 'multi', opts: ['Registra quién, cuándo y qué información fue consultada o modificada', 'Permite el acceso remoto y simultáneo a la información del paciente', 'Facilita los estudios epidemiológicos y la generación de reportes', 'Elimina por completo la necesidad de capacitación del personal'], ans: [0, 1, 2], exp: 'La trazabilidad, el acceso remoto y el análisis de datos son ventajas centrales. La capacitación sigue siendo necesaria: de hecho, la curva de aprendizaje y la resistencia al cambio figuran como desventaja.', tag: 'ventajas' },
      { t: 'La digitalización de la historia clínica **resuelve** los problemas de interoperabilidad entre sistemas.', type: 'tf', ans: false, exp: 'Al contrario: la interoperabilidad entre sistemas de distintos proveedores y jurisdicciones es uno de los desafíos que <b>surgieron</b> con la digitalización, junto a la privacidad, la ciberseguridad y los costos.', tag: 'interoperabilidad' },
      { t: 'El proyecto **NPfIT** (Reino Unido) se citó como caso de fracaso porque:', type: 'mcq', opts: ['Tuvo problemas de gestión, falta de interoperabilidad, sobrecostos y resistencia del personal', 'No usó historia clínica en papel', 'Fue cancelado por no tener datos de pacientes', 'Se implementó solamente en Estonia'], ans: 0, exp: 'El <em>National Programme for IT</em> se canceló tras una inversión millonaria por esos motivos. En cambio, Estonia y Kaiser Permanente se citan como casos de éxito.', tag: 'casos' },
      { t: '¿Qué estándar internacional sirve para el **manejo, almacenamiento y transmisión de imágenes médicas** (radiografías, tomografías, resonancias)?', type: 'mcq', opts: ['DICOM', 'LOINC', 'CIE-10', 'HIPAA'], ans: 0, exp: 'DICOM (<em>Digital Imaging and Communications in Medicine</em>) define formatos de archivo y protocolos de red para que equipos de distintos fabricantes compartan imágenes.', tag: 'estándares' },
      { t: 'El estándar **HL7 v2.x** se utiliza principalmente en hospitales para:', type: 'mcq', opts: ['Mensajería: admisiones, resultados de laboratorio, pedidos', 'Codificar enfermedades', 'Transmitir imágenes médicas', 'Diseñar páginas web'], ans: 0, exp: 'HL7 v2.x es el estándar de mensajería más usado: los mensajes se organizan en segmentos como <code>MSH</code> (encabezado) y <code>PID</code> (paciente).', tag: 'estándares' },
      { t: 'Escribí el nombre del estándar moderno de HL7, diseñado para la web y APIs RESTful usando JSON y XML.', type: 'fill', ans: ['fhir', 'fast healthcare interoperability resources'], exp: 'FHIR (<em>Fast Healthcare Interoperability Resources</em>) se organiza en recursos modulares (<em>Patient</em>, <em>Observation</em>, <em>Condition</em>…) y es fácil de implementar en apps móviles y web.', tag: 'estándares' },
      { t: '¿Cuál es la diferencia principal entre **XML** y **JSON** en el intercambio de datos clínicos?', type: 'mcq', opts: ['JSON es más ligero y es el formato preferido en las APIs REST; XML permite estructuras más complejas', 'XML solo sirve para páginas web y JSON no admite listas', 'JSON no puede validarse y XML no tiene etiquetas', 'Son idénticos y solo cambia el nombre'], ans: 0, exp: 'JSON usa pares clave-valor y arrays, es menos verboso y domina las APIs modernas; XML usa etiquetas y atributos, admite <em>namespaces</em> y se valida con XSD (JSON con JSON Schema). FHIR soporta ambos.', tag: 'formatos' },
      { t: 'Marcá las afirmaciones **verdaderas** sobre el **software libre** de historia clínica electrónica.', type: 'multi', opts: ['No requiere pago de licencias y el código fuente se puede auditar', 'Permite adaptar el sistema a las necesidades locales de cada institución', 'La comunidad de desarrolladores aporta mejoras y corrección de errores', 'Elimina por completo la necesidad de personal técnico para instalarlo y mantenerlo'], ans: [0, 1, 2], exp: 'Bajo costo, personalización, comunidad y transparencia son ventajas. La limitación justamente es que requiere personal técnico para instalación, configuración y mantenimiento.', tag: 'software libre' },
      { t: 'La codificación de diagnósticos con **SNOMED CT** y el mapeo con **CIE-10** pertenecen al nivel de interoperabilidad:', type: 'mcq', opts: ['Semántico', 'Sintáctico', 'Técnico', 'Organizacional'], ans: 0, exp: 'El nivel semántico se ocupa de que los datos signifiquen lo mismo en todos los sistemas: ahí actúan SNOMED CT, LOINC y el CIE-10. Los formatos (HL7, FHIR, JSON) corresponden al nivel sintáctico y las redes (TCP/IP) al técnico.', tag: 'interoperabilidad' }
    ]
  };
})(window.NTX);
