/* ============================================================
   NTX — Unidad 8: Inteligencia Artificial en emergencias
   ============================================================ */
(function (NTX) {
  'use strict';

  NTX.unidades.push({
    id: 'u8',
    num: 8,
    icon: '◉',
    title: 'Inteligencia Artificial: conceptos, datos y aplicaciones en emergencias',
    resumen: 'Qué es la IA, cómo se relacionan machine learning, deep learning y NLP, de qué datos depende y cómo se aplica (y se limita) en situaciones de emergencia.',
    objetivos: [
      'Definir qué es la Inteligencia Artificial y situar sus hitos históricos principales.',
      'Distinguir entre IA, Machine Learning, Deep Learning, NLP e IA generativa.',
      'Explicar por qué los datos son el combustible de la IA y cómo es el proceso de entrenamiento.',
      'Reconocer limitaciones, sesgos y el marco ético-regulatorio de la IA médica.',
      'Analizar casos reales de IA aplicada a emergencias y su rol de apoyo al profesional.'
    ],
    secciones: [
      {
        h: '¿Qué es la Inteligencia Artificial?',
        html: '<p>Definición simple: la IA es la <b>capacidad que tienen las computadoras para realizar tareas que normalmente requieren inteligencia humana</b>: razonar y tomar decisiones, aprender de la experiencia, reconocer patrones, resolver problemas complejos y procesar lenguaje natural.</p>' +
          '<p>La IA <b>no es binaria</b>: existe un espectro de complejidad que va de lo simple a lo complejo — calculadora → algoritmo de diagnóstico → Machine Learning → Deep Learning → IA General (futuro). Lo que cambia es la complejidad de las tareas, la variedad de contextos donde opera y la diversidad de objetivos que alcanza.</p>' +
          '<p><b>Línea de tiempo:</b></p>' +
          '<ul><li><b>Años 1950:</b> Alan Turing plantea el Test de Turing — “¿Puede una máquina pensar?”.</li>' +
          '<li><b>1976:</b> MYCIN, primer sistema experto médico, para diagnóstico de infecciones bacterianas.</li>' +
          '<li><b>Años 2000:</b> era digital y registros electrónicos.</li>' +
          '<li><b>Años 2020:</b> revolución actual con ChatGPT, IA generativa y aplicaciones masivas.</li></ul>' +
          '<p><b>Mitos vs. realidades:</b> la IA no es perfecta ni infalible (puede equivocarse, sobre todo con datos sesgados); no reemplaza a los profesionales, es una <b>herramienta de apoyo</b>; más complejo no siempre es mejor; y no “entiende” como un humano: solo reconoce patrones en datos.</p>'
      },
      {
        h: 'Subcampos: Machine Learning, Deep Learning y NLP',
        html: '<p>El panorama de la IA se organiza así:</p>' +
          '<ul><li><b>Machine Learning (ML):</b> algoritmos que identifican patrones en datos y hacen predicciones para lograr objetivos específicos. <em>Supervisado</em>: con respuestas correctas (ej.: predecir mortalidad en sepsis). <em>No supervisado</em>: sin respuestas predefinidas (ej.: agrupar pacientes por síntomas).</li>' +
          '<li><b>Deep Learning (DL):</b> redes neuronales con <b>3 o más capas</b> que encuentran relaciones complejas. Excelente para imágenes y patrones complejos (radiografías, ECG, signos vitales), necesita grandes volúmenes de datos y mucho poder computacional, pero funciona como una <b>“caja negra”</b>: cuesta explicar sus decisiones.</li>' +
          '<li><b>NLP (Procesamiento de Lenguaje Natural):</b> enseña a las computadoras a interpretar el lenguaje humano tal como se habla o escribe. Aplicaciones clínicas: análisis de notas de enfermería, chatbots de triaje, documentación automática y extracción de información de historias clínicas.</li></ul>' +
          '<table class="tabla"><tr><th>Concepto</th><th>Definición simple</th></tr>' +
          '<tr><td><b>Algorithm</b></td><td>Conjunto de reglas para resolver problemas</td></tr>' +
          '<tr><td><b>Bias</b></td><td>Error sistemático que favorece ciertos grupos</td></tr>' +
          '<tr><td><b>Neural Network</b></td><td>Modelo inspirado en el cerebro humano</td></tr>' +
          '<tr><td><b>Overfitting</b></td><td>Memorizar en vez de aprender</td></tr></table>' +
          '<p><b>IA analítica vs. IA generativa:</b> la analítica estudia datos existentes para identificar patrones y predecir (ej.: sistema que predice sepsis); la generativa <b>crea contenido nuevo</b> —texto, imágenes, respuestas— como ChatGPT o DALL-E, con el riesgo de <b>“alucinaciones”</b>: información falsa pero convincente.</p>'
      },
      {
        h: 'Los datos: combustible y entrenamiento de la IA',
        html: '<p>Principio fundamental: <b>“Garbage in, garbage out”</b> (basura entra, basura sale). La calidad del modelo depende de tres condiciones de los datos:</p>' +
          '<ul><li><b>Cantidad:</b> volumen suficiente.</li>' +
          '<li><b>Calidad:</b> datos precisos y relevantes.</li>' +
          '<li><b>Representatividad:</b> que reflejen a la población real.</li></ul>' +
          '<p>En medicina, los datos son signos vitales, laboratorios, imágenes, notas clínicas, historias y datos en tiempo real de los monitores.</p>' +
          '<p><b>Proceso de entrenamiento (4 pasos):</b></p>' +
          '<ul><li><b>1. Recopilación:</b> historiales, imágenes, resultados.</li>' +
          '<li><b>2. Preparación:</b> limpieza, filtrado y estructuración.</li>' +
          '<li><b>3. Entrenamiento:</b> el algoritmo aprende patrones.</li>' +
          '<li><b>4. Evaluación:</b> se prueba con datos nuevos.</li></ul>' +
          '<p>La guía docente lo resume así: la base de la IA son <b>datos de calidad y cantidad</b>, y un modelo se valida mediante el ciclo de entrenamiento y evaluación. Un buen criterio para medir el aprendizaje es poder explicar la IA con un ejemplo médico propio, distinguir 3 de 4 ejemplos de ML/DL/NLP y ubicar al menos 3 hitos históricos en orden cronológico.</p>'
      },
      {
        h: 'Limitaciones, sesgos y ética',
        html: '<p>Las limitaciones se agrupan en tres bloques:</p>' +
          '<ul><li><b>Técnicas:</b> la “caja negra” no explica sus decisiones, depende de datos de calidad y no siempre supera a los métodos tradicionales.</li>' +
          '<li><b>Éticas:</b> sesgos sociales (refleja prejuicios existentes), sesgos estadísticos (datos no representativos) y privacidad de los datos sensibles.</li>' +
          '<li><b>Prácticas:</b> regulación compleja, resistencia del personal y costos de implementación.</li></ul>' +
          '<p><b>Caso Obermeyer (2019):</b> un algoritmo que identificaba pacientes de alto riesgo daba acceso preferencial a programas a pacientes blancos y discriminaba sistemáticamente a los negros, porque confundió la <em>capacidad de pago</em> con la <em>necesidad médica</em>. La lección es que los algoritmos pueden <b>amplificar</b> los sesgos ya existentes en el sistema de salud.</p>' +
          '<p><b>Regulación:</b> la FDA regula la IA como <b>Software as Medical Device (SaMD)</b> y establece los estándares de calidad <b>FAVES</b>:</p>' +
          '<ul><li><b>F</b>air (Justo): sin discriminación.</li>' +
          '<li><b>A</b>ppropriate (Apropiado): adecuado para el contexto clínico.</li>' +
          '<li><b>V</b>alid (Válido): funcionamiento correcto.</li>' +
          '<li><b>E</b>ffective (Efectivo): mejora los resultados.</li>' +
          '<li><b>S</b>afe (Seguro): no causa daño.</li></ul>' +
          '<p>El desafío abierto es el software “congelado” frente a la actualización continua de los modelos.</p>'
      },
      {
        h: 'Aplicaciones reales en emergencias',
        html: '<p><b>Caso 1 — Hematoma subdural:</b> hombre de 78 años, anticoagulado, con caída reciente y Glasgow 14 en un centro de emergencias con recursos radiológicos limitados. El sistema <b>Viz.ai</b> logró una precisión del <b>95,1%</b> y permitió la transferencia urgente <em>antes</em> de la confirmación radiológica: ganancia de tiempo crítico.</p>' +
          '<p><b>Caso 2 — Sepsis temprana:</b> mujer de 86 años con EPOC, fiebre y disnea en un servicio de alto volumen. El sistema <b>“Sepsis Watch”</b> analiza datos <b>estáticos</b> (comorbilidades) y <b>dinámicos</b> (signos vitales); su alerta temprana permite iniciar antibióticos a tiempo, mejorando desenlaces y reduciendo mortalidad.</p>' +
          '<p>El temario de la materia suma otras aplicaciones: <b>triaje automático</b> (algoritmos que priorizan pacientes según signos vitales y síntomas), <b>diagnóstico asistido</b> por imágenes (radiografías, ecografías) y detección de accidentes cerebrovasculares, <b>monitoreo en tiempo real</b> con sensores y wearables, y <b>predicción de deterioro</b> clínico.</p>' +
          '<p><b>¿Y el rol profesional?</b> La IA es apoyo, no sustituto: hay que validar rigurosamente, supervisar profesionalmente y mantener protocolos de contingencia. Como futuro especialista se deben aprender conceptos, interpretar resultados, conocer limitaciones y sesgos y aspectos éticos, conservando el juicio clínico, la empatía y el pensamiento crítico.</p>'
      }
    ],
    archivos: [
      { t: 'Clase 18 — Introducción a la Inteligencia Artificial (PDF)', f: '08_Inteligencia_Artificial/Clase_18_2025_Inteligencia_Artificial_en_Emergencias/Introducción a la Inteligencia Artificial.pdf' },
      { t: 'Clase 18 — Presentación: IA en emergencias médicas (PDF)', f: '08_Inteligencia_Artificial/Clase_18_2025_Inteligencia_Artificial_en_Emergencias/presentacion-clase1-IA.pdf' },
      { t: 'Clase 18 — La Inteligencia Artificial (PDF)', f: '08_Inteligencia_Artificial/Clase_18_2025_Inteligencia_Artificial_en_Emergencias/La Inteligencia Artificial.pdf' },
      { t: 'Clase 18 — La Inteligencia Artificial (PPTX)', f: '08_Inteligencia_Artificial/Clase_18_2025_Inteligencia_Artificial_en_Emergencias/La Inteligencia Artificial.pptx' },
      { t: 'Clase 18 — IA en emergencias: material completo (PDF)', f: '08_Inteligencia_Artificial/Clase_18_2025_Inteligencia_Artificial_en_Emergencias/exported-assets/Clase1-IA-Emergencias-Completa.pdf' }
    ]
  });

  NTX.quizzes.u8 = {
    id: 'u8',
    titulo: 'Autoevaluación — Unidad 8: Inteligencia Artificial',
    preguntas: [
      { t: 'La **Inteligencia Artificial** se define como:', type: 'mcq', opts: ['La capacidad de las computadoras para realizar tareas que normalmente requieren inteligencia humana', 'Un programa que solo calcula números', 'Una base de datos de pacientes', 'Un tipo de red social'], ans: 0, exp: 'Incluye tareas como razonar, aprender de la experiencia, reconocer patrones, resolver problemas complejos y procesar lenguaje natural.', tag: 'concepto' },
      { t: '¿Cuál es la diferencia principal entre **Machine Learning** y **Deep Learning**?', type: 'mcq', opts: ['El Deep Learning usa redes neuronales con 3 o más capas para relaciones complejas', 'El ML no trabaja con datos', 'El DL solo sirve para texto', 'No hay diferencia: son sinónimos'], ans: 0, exp: 'El Deep Learning es un subcampo del Machine Learning basado en redes neuronales profundas. Es ideal para imágenes y patrones complejos, pero requiere muchos datos y es una “caja negra”.', tag: 'concepto' },
      { t: 'El principio **“garbage in, garbage out”** significa que:', type: 'mcq', opts: ['Si los datos de entrada son malos, el resultado también lo será', 'Los datos se guardan en la papelera', 'La IA borra los archivos corruptos', 'Los modelos no necesitan datos'], ans: 0, exp: 'La calidad del modelo depende de la cantidad, la precisión y la representatividad de los datos. En medicina: signos vitales, laboratorios, imágenes y notas clínicas.', tag: 'datos' },
      { t: 'Marcá las afirmaciones **verdaderas** sobre el proceso de entrenamiento de un modelo.', type: 'multi', opts: ['Comienza con la recopilación de datos (historiales, imágenes, resultados)', 'Incluye una etapa de preparación con limpieza y estructuración', 'Se valida evaluando el modelo con datos nuevos', 'Termina instalando el modelo sin evaluarlo nunca'], ans: [0, 1, 2], exp: 'El ciclo es recopilación → preparación → entrenamiento → evaluación. Sin la evaluación con datos nuevos no se conoce el desempeño real.', tag: 'datos' },
      { t: 'El estudio de **Obermeyer (2019)** sobre un algoritmo de alto riesgo mostró que:', type: 'mcq', opts: ['Confundió la capacidad de pago con la necesidad médica y discriminó a pacientes negros', 'Diagnosticó todas las enfermedades con exactitud perfecta', 'No usó datos de pacientes', 'Fue aprobado sin sesgos'], ans: 0, exp: 'El algoritmo amplificó sesgos existentes del sistema de salud: es el ejemplo clásico de por qué los datos deben ser representativos y justos.', tag: 'ética' },
      { t: 'Los estándares de calidad **FAVES** que aplica la FDA a la IA médica significan:', type: 'mcq', opts: ['Fair, Appropriate, Valid, Effective, Safe', 'Fast, Automated, Visible, Efficient, Simple', 'File, Access, Version, Edit, Store', 'FDA Applied Validation Expert System'], ans: 0, exp: 'Fair (justo), Appropriate (apropiado), Valid (válido), Effective (efectivo) y Safe (seguro). La FDA regula estos sistemas como <b>Software as Medical Device (SaMD)</b>.', tag: 'ética' },
      { t: 'El sistema **Viz.ai** en el caso del hematoma subdural permitió:', type: 'mcq', opts: ['La transferencia urgente del paciente antes de la confirmación radiológica, con 95,1% de precisión', 'Reemplazar al equipo de radiología', 'Diagnosticar sin imágenes', 'Prevenir todas las caídas'], ans: 0, exp: 'La IA detectó la necesidad de traslado con antelación y ganó tiempo crítico: es un ejemplo de IA como herramienta de apoyo a la decisión.', tag: 'casos' },
      { t: 'El sistema **“Sepsis Watch”** para detectar sepsis temprana:', type: 'mcq', opts: ['Combina datos estáticos (comorbilidades) y dinámicos (signos vitales) para alertar a tiempo', 'Solo revisa el historial impreso', 'Funciona sin datos del paciente', 'Reemplaza al antibiótico'], ans: 0, exp: 'La alerta temprana permite iniciar los antibióticos a tiempo, lo que mejora los desenlaces y reduce la mortalidad.', tag: 'casos' },
      { t: 'Sobre el futuro de la IA en salud, la guía de la clase establece que:', type: 'tf', ans: true, exp: 'La IA es una herramienta de <b>apoyo, no un sustituto</b>: el profesional mantiene el juicio clínico, la empatía y el pensamiento crítico, junto con capacitación continua.', tag: 'concepto' },
      { t: 'Escribí la sigla del subcampo de la IA que se ocupa de **interpretar el lenguaje humano** tal como se habla o se escribe.', type: 'fill', ans: ['nlp', 'procesamiento de lenguaje natural'], exp: '<b>NLP</b> (Natural Language Processing): analiza notas clínicas, alimenta chatbots de triaje, documenta automáticamente y extrae información de las historias.', tag: 'concepto' }
    ]
  };
})(window.NTX);
