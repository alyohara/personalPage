/* ============================================================
   NTX — Trabajos prácticos y actividades
   ============================================================ */
(function (NTX) {
  'use strict';

  NTX.tps.push(
    {
      id: 'tp1',
      num: 1,
      titulo: 'TP 1 — Explorando y representando datos geográficos con ArcGIS',
      resumen: 'Investigación breve sobre SIG y ArcGIS más la creación de un mapa temático con capas propias.',
      enunciado: '<p>Trabajo práctico para comprender el funcionamiento básico de la plataforma <strong>ArcGIS</strong> mediante la exploración de información geográfica, la realización de un breve trabajo de investigación y la creación de un mapa temático.</p>' +
        '<p>Se organiza en tres partes: una <strong>investigación breve</strong> (máx. 1 página) sobre SIG, ArcGIS y tipos de datos geográficos; la <strong>creación de un mapa temático</strong> a partir de una capa de datos elegida por el estudiante; y una <strong>entrega con reflexión</strong> donde se exporta el mapa y se escriben las aprendizajes y dificultades encontradas.</p>' +
        '<p>Entrega: documento PDF con las respuestas de la investigación y la reflexión, más la imagen o enlace al mapa creado.</p>',
      consignas: [
        'Parte 1 — Investigación breve (máx. 1 página): ¿qué es un Sistema de Información Geográfica (SIG) y para qué se utiliza?',
        '¿Qué es ArcGIS y qué herramientas principales ofrece? Mencioná al menos tres ejemplos de uso real en disciplinas como salud, medio ambiente, urbanismo o transporte.',
        'Explicá brevemente los tipos de datos geográficos que se pueden usar en ArcGIS: **datos vectoriales** y **datos ráster**.',
        'Parte 2 — Elegí un tema de interés (hospitales, zonas inundables, uso del suelo, etc.) y buscá o descargá desde ArcGIS Online una capa de información relacionada para tu país, provincia o ciudad.',
        'Cargá la capa en ArcGIS (Online o Pro) y aplicá simbología adecuada: colores, etiquetas y leyendas que representen el tema de forma clara.',
        'Agregá al menos una capa adicional complementaria (límites de departamentos, red vial, cuerpos de agua) y completá el mapa con título, leyenda, escala, norte y fuente de los datos.',
        'Parte 3 — Exportá tu mapa como imagen (PNG o JPG) o compartilo públicamente si lo hiciste en ArcGIS Online.',
        'Escribí una breve reflexión (máx. media página): qué aprendiste, qué dificultades encontraste y qué utilidad le ves a este tipo de herramientas en tu carrera.'
      ],
      temas: ['SIG y ArcGIS', 'Datos vectoriales y ráster', 'Mapas temáticos', 'Simbología y cartografía', 'ArcGIS Online'],
      archivo: '09_Actividades_y_Trabajos_Practicos/TP_01_GIS_ArcGIS_2025/tp1.pdf',
      archivoTexto: 'Enunciado (PDF)'
    },
    {
      id: 'tp2',
      num: 2,
      titulo: 'TP 2 — Sistemas de telemedicina',
      resumen: 'Cada estudiante releva un sistema de telemedicina asignado siguiendo una guía de investigación en seis puntos.',
      enunciado: '<p>Trabajo práctico de investigación para analizar diferentes <strong>sistemas de telemedicina</strong>, enfocándose en los aspectos informáticos y en el uso de las NTICs (Nuevas Tecnologías de la Información y la Comunicación).</p>' +
        '<p>Cada estudiante releva un sistema asignado (Docline, Medilink, Dricloud, AppsMedical, Medesk), tomando como ejemplo la guía ilustrada con <strong>Nimbo</strong>: descripción general, características informáticas, funcionalidades, interoperabilidad y NTICs, ventajas y desventajas, y conclusión personal.</p>' +
        '<p>Entrega: un informe en formato markdown que sigue la estructura de la guía, adaptada al sistema asignado.</p>',
      consignas: [
        'Descripción general del sistema: qué es, para qué se utiliza y quiénes son sus usuarios principales.',
        'Características informáticas: en qué plataformas funciona (web, móvil, escritorio), qué tecnologías utiliza (lenguajes, frameworks, bases de datos) y cómo gestiona la seguridad y privacidad de los datos.',
        'Funcionalidades principales: qué módulos ofrece para la telemedicina —videollamadas, gestión de historias clínicas, recetas electrónicas, etc.—.',
        'Interoperabilidad y NTICs: cómo se integra con otros sistemas de salud, si utiliza estándares como **HL7** o **FHIR** y qué rol cumplen las NTICs en su funcionamiento.',
        'Ventajas y desventajas: puntos fuertes y débiles del sistema desde el punto de vista informático.',
        'Conclusión personal: opinión sobre la solución investigada y sugerencias de mejora.',
        'Entregar el informe en formato markdown siguiendo la estructura de la guía (ejemplo de referencia: Nimbo).'
      ],
      temas: ['Telemedicina', 'NTICs', 'Interoperabilidad HL7/FHIR', 'Seguridad de datos', 'Plataformas de salud'],
      archivo: '09_Actividades_y_Trabajos_Practicos/TP_02_Telemedicina_2025/tp2 telemedicina.pdf',
      archivoTexto: 'Enunciado (PDF)'
    },
    {
      id: 'tp3',
      num: 3,
      titulo: 'TP 3 — Misión Ciberseguridad en Emergencias (2026)',
      resumen: 'Seis actividades prácticas para reconocer riesgos digitales y practicar hábitos seguros en un entorno hospitalario.',
      enunciado: '<p>Misión de ciberseguridad con objetivo claro: reconocer riesgos digitales, practicar hábitos seguros y aprender a proteger información sensible en un entorno hospitalario, con un enfoque dinámico y divertido.</p>' +
        '<p>Se trabaja sobre casos reales y simulados: análisis de un correo de suplantación, medición de la fuerza de contraseñas, detección de phishing, armado de una checklist personal de protección, respaldo de una carpeta con información de pacientes y una reflexión final sobre el rol profesional.</p>' +
        '<p>Entrega: un documento (Word, PDF o foto legible) con las respuestas, capturas de pantalla y la evidencia de la actividad de backup.</p>',
      consignas: [
        'Detective Digital: leer un correo sospechoso de "actualización urgente de credenciales" e identificar los detalles que lo delatan como falso.',
        'Contraseñas Ninja: probar contraseñas en un medidor de seguridad (Kaspersky o howsecureismypassword.net) y anotar el nivel indicado por la herramienta.',
        'Misión de Phishing: marcar cuál de dos mensajes es sospechoso y explicar las señales de phishing identificadas.',
        'Superhéroe de la Seguridad: armar una lista personal con las 5 medidas más importantes que una persona del área de salud debería aplicar para cuidarse en internet.',
        'Backups en modo emergencia: copiar la carpeta "Pacientes" a un pendrive y generar una copia comprimida en "Backup_Seguro".',
        'Documentar dónde están las copias, qué harías si la computadora principal falla y cuánto tiempo tardarías en recuperar la información.',
        'Cierre de misión: reflexionar sobre por qué la ciberseguridad es importante en el ámbito hospitalario, cuál es el riesgo más grave y qué hábito digital vas a empezar a usar.',
        'Entrega: subir un documento (Word, PDF o foto legible) con las respuestas, capturas y la evidencia de la actividad de backup.'
      ],
      temas: ['Phishing', 'Contraseñas seguras', 'Copias de seguridad', 'Higiene digital', 'Ciberseguridad hospitalaria'],
      archivo: '09_Actividades_y_Trabajos_Practicos/TP_Mision_Ciberseguridad_2026/TP_Ciberseguirdad.pdf',
      archivoTexto: 'Enunciado (PDF)'
    },
    {
      id: 'tp4',
      num: 4,
      titulo: 'TP 4 — TP Final Integrador: NTIC y respuesta en inundaciones',
      resumen: 'Propuestas NTIC para sostener la continuidad asistencial y la coordinación interinstitucional durante una inundación urbana masiva.',
      enunciado: '<p>Trabajo práctico final de carácter investigativo: proponer soluciones NTIC que faciliten la <strong>continuidad asistencial</strong> y la <strong>coordinación interinstitucional</strong> durante una inundación urbana masiva. El enfoque es conceptual y exploratorio, no técnico.</p>' +
        '<p>El escenario describe 36 horas de lluvias intensas con barrios anegados, red eléctrica y redes móviles degradadas, hospital operando con generadores, información clínica fragmentada entre papel, mensajería y dispositivos offline, y una demanda que combina trauma, hipotermia y pacientes crónicos con necesidad de continuidad de tratamiento.</p>' +
        '<p>Se desarrolla en cuatro partes —arquitectura y comunicaciones, datos e interoperabilidad, telemedicina y UX, seguridad y gobernanza— y se entrega un documento escrito de hasta 4 páginas con propuestas, justificaciones y diagramas o mockups simples. Criterios: claridad de las propuestas 40 %, justificación de decisiones 30 %, aplicabilidad y creatividad 20 %, presentación y concisión 10 %.</p>',
      consignas: [
        'Parte 1 — Arquitectura y comunicaciones: describir a alto nivel una propuesta de comunicaciones para coordinar ambulancias, puestos avanzados y hospital, considerando redundancia y prioridades.',
        'Investigar ventajas y limitaciones del procesamiento local (**edge**) frente a depender solo de la nube (3 a 5 puntos) e identificar 5 dispositivos o tecnologías útiles en campo, justificando la elección.',
        'Parte 2 — Datos e interoperabilidad: definir un conjunto mínimo de datos a capturar en el punto de atención (identificador, triage, signos vitales, alergias) y explicar por qué cada elemento es necesario.',
        'Explicar la interoperabilidad sintáctica vs. semántica con un ejemplo de compartir información entre ambulancia y hospital, y proponer una política simple de sincronización cuando la conectividad falla.',
        'Parte 3 — Telemedicina y UX: proponer un flujo básico de teleconsulta prehospitalaria (roles, pasos e información mínima) y un mockup textual de la pantalla principal de registro de pacientes.',
        'Parte 4 — Seguridad y gobernanza: identificar los principales riesgos de manejo de datos, resumir una política de respaldo y recuperación para entornos con conectividad limitada y esbozar un comunicado interno de incidencia.',
        'Entregar un documento escrito (máx. 4 páginas) con las propuestas y justificaciones de cada parte, incluyendo diagramas o mockups simples (PNG/SVG o dibujos escaneados).'
      ],
      temas: ['Arquitectura y comunicaciones', 'Edge computing', 'Interoperabilidad y datos', 'Telemedicina y UX', 'Ciberseguridad y respaldo', 'Continuidad asistencial'],
      archivo: '09_Actividades_y_Trabajos_Practicos/TP_Final_Integrador_2025/Consignas/tpfinal3.pdf',
      archivoTexto: 'Consignas (PDF)'
    },
    {
      id: 'tp5',
      num: 5,
      titulo: 'Actividades — Historia clínica digital',
      resumen: 'Cinco ejercicios prácticos sobre digitalización de la historia clínica, HL7, XML/JSON, OpenEMR y casos reales.',
      enunciado: '<p>Conjunto de actividades y ejercicios prácticos para la unidad de Historia Clínica Digital e Interoperabilidad, pensadas para trabajar en forma individual o en grupo.</p>' +
        '<p>Cubren desde el debate sobre la digitalización del registro clínico hasta el análisis de mensajes estándar, la conversión entre formatos de datos, la exploración de un sistema de código abierto y el análisis de casos reales de éxito o fracaso.</p>',
      consignas: [
        '**Debate guiado:** ¿qué problemas del papel resolvió la digitalización y qué nuevos desafíos surgieron?',
        '**Análisis de mensaje HL7:** analizar un ejemplo real y discutir su estructura.',
        '**Conversión XML a JSON:** convertir un registro clínico simple de XML a JSON.',
        '**Exploración de OpenEMR:** listar las funcionalidades clave tras explorar la demo online.',
        '**Análisis de caso real:** en grupos, analizar un caso de éxito o fracaso y exponer conclusiones.'
      ],
      temas: ['Historia clínica digital', 'HL7', 'XML y JSON', 'OpenEMR', 'Interoperabilidad'],
      archivo: '09_Actividades_y_Trabajos_Practicos/Actividades/Actividades_Historia_Clinica_Digital.pdf',
      archivoTexto: 'Enunciado (PDF)'
    }
  );
})(window.NTX);
