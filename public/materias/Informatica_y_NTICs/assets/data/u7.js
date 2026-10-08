/* ============================================================
   NTX — Unidad 7: Herramientas digitales y colaboración (Microsoft Teams)
   ============================================================ */
(function (NTX) {
  'use strict';

  NTX.unidades.push({
    id: 'u7',
    num: 7,
    icon: '◈',
    title: 'Herramientas digitales y colaboración: Microsoft Teams',
    resumen: 'Cómo armar, comunicar y administrar un espacio de trabajo colaborativo con equipos, canales, reuniones y eventos en Microsoft Teams.',
    objetivos: [
      'Explicar qué es Microsoft Teams y sobre qué servicios de Microsoft 365 está construido.',
      'Crear y organizar equipos y canales, distinguiendo sus tipos, límites y permisos.',
      'Usar las herramientas de comunicación: chat, menciones, archivos compartidos y reuniones.',
      'Configurar reuniones con breakout rooms y diferenciar reuniones, webinars y live events.',
      'Aplicar roles, políticas y buenas prácticas de Teams en un contexto educativo.'
    ],
    secciones: [
      {
        h: '¿Qué es Microsoft Teams?',
        html: '<p>Microsoft Teams es el <b>centro de trabajo en equipo de Microsoft 365</b>: integra usuarios, contenido y herramientas para mejorar el compromiso y la eficacia organizacional.</p>' +
          '<ul><li><b>Hub de colaboración:</b> centraliza documentos, conversaciones, llamadas, reuniones y tareas.</li>' +
          '<li><b>Integración nativa:</b> funciona con toda la suite Microsoft 365.</li>' +
          '<li><b>Arquitectura híbrida:</b> soporta trabajo presencial, remoto e híbrido.</li>' +
          '<li><b>Escalabilidad:</b> desde pequeños equipos hasta organizaciones de miles de usuarios.</li></ul>' +
          '<p>Teams no funciona solo: se apoya en varios servicios de Microsoft 365.</p>' +
          '<table class="tabla"><tr><th>Servicio</th><th>Qué aporta a Teams</th></tr>' +
          '<tr><td>Grupos de Microsoft 365</td><td>Base organizacional del equipo</td></tr>' +
          '<tr><td>SharePoint Online</td><td>Almacenamiento y colaboración de documentos</td></tr>' +
          '<tr><td>Exchange Online</td><td>Buzón compartido y calendario</td></tr>' +
          '<tr><td>OneNote</td><td>Bloc de notas colaborativo</td></tr>' +
          '<tr><td>Microsoft Entra ID</td><td>Identidades y seguridad</td></tr></table>' +
          '<p>Para usarlo se necesita una cuenta de Microsoft 365 (Business Basic o superior) y acceder desde <code>teams.microsoft.com</code>, la aplicación de escritorio o la móvil.</p>'
      },
      {
        h: 'Estructura organizacional: equipos, canales y pestañas',
        html: '<p>La jerarquía de Teams es siempre la misma: <b>Organización (tenant) → Equipos → Canales → Pestañas</b>. Los equipos son como un edificio y los canales como sus habitaciones.</p>' +
          '<p><b>Tipos de equipo</b> al crear uno: <em>Clase</em> (entornos educativos), <em>PLC</em> o Comunidad de Aprendizaje Profesional, <em>Personal</em> (administración) y <em>Otros</em> (clubes, grupos de interés). La privacidad se define como <b>público</b> (cualquiera de la organización puede unirse) o <b>privado</b> (solo por invitación).</p>' +
          '<table class="tabla"><tr><th>Tipo de canal</th><th>Acceso</th><th>Límites</th><th>Uso recomendado</th></tr>' +
          '<tr><td><b>Estándar</b></td><td>Todos los miembros del equipo</td><td>Hasta 200 por equipo</td><td>Comunicación general</td></tr>' +
          '<tr><td><b>Privado</b></td><td>Miembros específicos</td><td>30 por equipo, hasta 250 miembros</td><td>Información confidencial</td></tr>' +
          '<tr><td><b>Compartido</b></td><td>Usuarios externos al equipo</td><td>Configuración avanzada</td><td>Colaboración externa controlada</td></tr></table>' +
          '<p>Dentro de cada canal aparecen pestañas: <b>Publicaciones</b> (conversaciones), <b>Archivos</b>, <b>Wiki</b> y las aplicaciones integradas.</p>' +
          '<p><b>Buenas prácticas:</b> usar nombres descriptivos y consistentes, organizar por proyectos, temas o departamentos, limitar la cantidad de canales y configurar los permisos desde el inicio.</p>'
      },
      {
        h: 'Interfaz y comunicación básica',
        html: '<p>La <b>barra lateral izquierda (App Bar)</b> es la navegación principal: <b>Actividad</b> (notificaciones), <b>Chat</b> (mensajería individual y grupal), <b>Teams</b> (espacios de trabajo), <b>Calendario</b> (integrado con Outlook), <b>Llamadas</b> (telefonía empresarial) y <b>Archivos</b> (OneDrive y SharePoint). El área principal contiene las pestañas, las conversaciones en hilos y la barra de comandos.</p>' +
          '<p>Hay cuatro tipos de chat: <b>individual</b>, <b>grupal</b> (hasta 250 personas), <b>de canal</b> (dentro del contexto del equipo) y <b>de reunión</b>.</p>' +
          '<ul><li><b>Formato:</b> negrita, cursiva, código, listas y citas; menciones con <code>@nombre</code>, <code>@canal</code> y <code>@equipo</code>, más reacciones, emojis, GIFs y stickers.</li>' +
          '<li><b>Archivos:</b> arrastrar y soltar, botón adjuntar o selección desde OneDrive/SharePoint, con coautoría en tiempo real y control de versiones automático (máximo 250 GB por archivo).</li>' +
          '<li><b>Atajos útiles:</b> <code>Ctrl+Shift+M</code> silenciar, <code>Ctrl+Shift+O</code> cámara, <code>Ctrl+Shift+E</code> compartir pantalla, <code>Ctrl+Shift+Y</code> chat, <code>Ctrl+Shift+P</code> participantes.</li></ul>' +
          '<p>Las pestañas se pueden personalizar: aplicaciones de Microsoft 365, herramientas de terceros (Trello, GitHub) o sitios web.</p>'
      },
      {
        h: 'Reuniones, breakout rooms y eventos grandes',
        html: '<p>Las reuniones se programan desde <b>Calendario → Nueva reunión</b>, definiendo título, fecha, duración y participantes. Las opciones incluyen control del <b>lobby</b> (sala de espera), permisos de presentación, grabación automática y permisos de chat y micrófono.</p>' +
          '<p>Las <b>breakout rooms</b> (salas grupales) dividen la reunión principal en sub-reuniones para trabajo en grupos pequeños. Requieren ser el <b>organizador de una reunión programada</b> y usar la <b>aplicación de escritorio</b>. Límites: hasta <b>50 salas</b> y <b>300 participantes</b> en total. La asignación de personas puede ser automática (distribución equitativa) o manual, y durante la sesión se pueden enviar anuncios a todas las salas, visitar salas, mover participantes y cerrarlas para volver al salón principal.</p>' +
          '<table class="tabla"><tr><th>Característica</th><th>Reuniones</th><th>Webinars</th><th>Live events</th></tr>' +
          '<tr><td>Participantes máximos</td><td>300</td><td>1.000 (+10.000 solo lectura)</td><td>20.000</td></tr>' +
          '<tr><td>Interactividad</td><td>Completa</td><td>Moderada</td><td>Solo Q&amp;A moderado</td></tr>' +
          '<tr><td>Registro</td><td>No</td><td>Sí, con formularios</td><td>Opcional</td></tr>' +
          '<tr><td>Producción</td><td>Básica</td><td>Intermedia</td><td>Profesional (externa o en Teams)</td></tr></table>' +
          '<p>Los live events comunican “uno a muchos” y tienen roles de <b>organizador</b>, <b>productor</b> y <b>presentador</b>. Los webinars, en cambio, destacan por la mayor interactividad, el registro integrado, los formularios personalizables y los reportes de asistencia.</p>'
      },
      {
        h: 'Administración, roles y políticas',
        html: '<p>Los <b>roles</b> de un equipo definen los permisos: el <b>Propietario</b> tiene control total y configuración (hasta 100 por equipo), el <b>Miembro</b> participa con permisos estándar y el <b>Invitado</b> tiene acceso limitado para usuarios externos.</p>' +
          '<p>El <b>Centro de Administración</b> se abre en <code>admin.teams.microsoft.com</code> y agrupa: Dashboard (vista general), Teams (equipos y miembros), Users (licencias y políticas), Dispositivos, Aplicaciones, Meetings, Messaging policies y Analytics &amp; reports.</p>' +
          '<ul><li><b>Políticas de reunión:</b> breakout rooms, límites de participantes, grabación, lobby y subtítulos.</li>' +
          '<li><b>Políticas de mensajería:</b> chat y canales, menciones, GIFs con filtro de contenido y retención de mensajes.</li>' +
          '<li><b>Políticas de aplicaciones:</b> apps permitidas por defecto, carga de aplicaciones personalizadas y permisos de instalación.</li>' +
          '<li><b>Update policies:</b> <em>Allow public preview</em> para funciones en preview y <em>Use new Teams client</em> para controlar la migración al nuevo cliente.</li></ul>' +
          '<p><b>Integración automática con SharePoint:</b> cada equipo crea un sitio de SharePoint; los canales estándar se mapean a carpetas de la biblioteca de documentos y los canales privados generan sitios separados. Para sumar contenido se usa el botón <b>+</b> del canal y se elige “SharePoint” o “Sitio web”.</p>'
      },
      {
        h: 'Colaboración educativa y evaluación del proyecto',
        html: '<p>Las integraciones nativas de productividad son <b>OneNote</b>, <b>Planner</b>, <b>Power BI</b>, <b>Forms</b> y <b>Stream</b>; entre terceros se destacan Trello, GitHub, Adobe Acrobat y Zoom.</p>' +
          '<p>En <b>contexto educativo</b> la estructura recomendada es: un equipo por materia o asignatura (tipo “Clase”), canales por temas o unidades, uso extensivo de <b>Tareas</b> y <b>OneNote Class Notebook</b>, breakout rooms para grupos pequeños y grabaciones para estudiantes ausentes.</p>' +
          '<p>El proyecto final consiste en diseñar un equipo educativo completo (“Mi equipo educativo ideal”) con:</p>' +
          '<ul><li>Nombre y descripción claros, privacidad apropiada y al menos <b>5 canales</b> temáticos.</li>' +
          '<li>Al menos <b>3 miembros</b> con roles diferenciados (propietario, moderador, miembros).</li>' +
          '<li>Mensajes con formato, archivos de ejemplo en varios canales y enlaces relevantes.</li>' +
          '<li>Una <b>asignación</b> creada desde la pestaña Tareas, con instrucciones, fecha de entrega y rúbrica.</li>' +
          '<li>Un <b>video explicativo</b> de 3 a 5 minutos que recorra los canales y justifique las decisiones.</li></ul>' +
          '<p>La rúbrica valora 6 criterios (organización, uso de funcionalidades, contenido, gestión de miembros, video y creatividad) de 4 puntos cada uno: <b>22-24 Excelente, 18-21 Bueno, 14-17 Satisfactorio, 10-13 Necesita Mejora e &lt;10 Insatisfactorio</b>.</p>'
      }
    ],
    archivos: [
      { t: 'Clase 17 — Serie de Clases: Uso de Microsoft Teams (PDF)', f: '07_Herramientas_Digitales_y_Colaboracion/Clase_17_2025_Microsoft_Teams/clases-microsoft-teams.pdf' },
      { t: 'Clase 17 — Guía de referencia rápida de Teams (PDF)', f: '07_Herramientas_Digitales_y_Colaboracion/Clase_17_2025_Microsoft_Teams/referencia-rapida-teams.pdf' },
      { t: 'Clase 17 — Ejercicios prácticos y evaluaciones (PDF)', f: '07_Herramientas_Digitales_y_Colaboracion/Clase_17_2025_Microsoft_Teams/ejercicios-teams.pdf' },
      { t: 'Plan de clase — Funcionalidades y uso colaborativo (PDF)', f: '07_Herramientas_Digitales_y_Colaboracion/Clase_17_2025_Microsoft_Teams/Curso_Completo_Teams/plan-clase-teams.pdf' },
      { t: 'Material de evaluación y rúbrica del proyecto (PDF)', f: '07_Herramientas_Digitales_y_Colaboracion/Clase_17_2025_Microsoft_Teams/Curso_Completo_Teams/material-evaluacion.pdf' },
      { t: 'Exposición de proyectos — Medesk (PDF)', f: '07_Herramientas_Digitales_y_Colaboracion/Clase_12_2025_Exposicion_Proyectos_Alumnos/Medesk.pdf' }
    ]
  });

  NTX.quizzes.u7 = {
    id: 'u7',
    titulo: 'Autoevaluación — Unidad 7: Microsoft Teams',
    preguntas: [
      { t: '¿Cuáles son los componentes principales de la **arquitectura** de Microsoft Teams?', type: 'mcq', opts: ['Grupos de Microsoft 365, SharePoint, Exchange, OneNote y Microsoft Entra ID', 'Solo SharePoint y Exchange', 'Únicamente Microsoft 365 y Azure', 'Teams funciona de forma independiente'], ans: 0, exp: 'Teams se construye sobre varios servicios de Microsoft 365: Grupos (base organizacional), SharePoint (documentos), Exchange (buzón y calendario), OneNote (notas) y Microsoft Entra ID (identidades y seguridad).', tag: 'concepto' },
      { t: '¿Cuál es el **límite máximo de canales privados** por equipo?', type: 'mcq', opts: ['10', '20', '30', '50'], ans: 2, exp: 'Un equipo admite hasta 200 canales estándar y <b>30 privados</b>, y cada canal privado acepta hasta 250 miembros.', tag: 'límites' },
      { t: '¿Qué ocurre **automáticamente** cuando se crea un nuevo equipo en Teams?', type: 'mcq', opts: ['Se crea un sitio de SharePoint asociado', 'Se genera un grupo de WhatsApp', 'Se agrega automáticamente a todos los empleados', 'Se duplica en todos los tenants'], ans: 0, exp: 'Cada equipo crea un sitio de SharePoint: los canales estándar se mapean a carpetas de la biblioteca de documentos y los canales privados generan sitios separados.', tag: 'concepto' },
      { t: '¿Qué **tipo de equipo** se usa en entornos educativos?', type: 'fill', ans: ['clase'], exp: 'Los tipos disponibles son Clase (educativo), PLC (formación), Personal (administración) y Otros. Para una materia o curso se crea un equipo tipo <b>Clase</b>.', tag: 'concepto' },
      { t: 'Las **breakout rooms** (salas grupales) pueden crearse:', type: 'mcq', opts: ['Solo si sos el organizador de una reunión programada, desde la aplicación de escritorio', 'Desde cualquier navegador web', 'Solo por un administrador del tenant', 'Únicamente en reuniones iniciadas con “Reunirse ahora”'], ans: 0, exp: 'Requieren ser organizador de una reunión <b>programada</b> y usar la app de escritorio (no están disponibles en la web). Si no aparece el botón, hay que revisar ese punto.', tag: 'reuniones' },
      { t: 'Marcá las afirmaciones **verdaderas** sobre las breakout rooms.', type: 'multi', opts: ['Admiten hasta 50 salas con 300 participantes en total', 'La asignación de participantes puede ser automática o manual', 'Permiten enviar anuncios a todas las salas y visitarlas individualmente', 'Se crean solamente después de que termine la reunión'], ans: [0, 1, 2], exp: 'Las salas se pueden crear antes o durante la reunión. Durante la sesión el organizador envía anuncios, visita salas, mueve participantes y las cierra para volver al salón principal.', tag: 'reuniones' },
      { t: 'En un **evento en vivo** (live event) de Teams, la cantidad máxima de asistentes es:', type: 'mcq', opts: ['300', '1.000', '10.000', '20.000'], ans: 3, exp: 'Las reuniones llegan a 300, los webinars a 1.000 (más 10.000 en modo solo lectura) y los live events hasta <b>20.000</b>, con interactividad limitada a un Q&amp;A moderado.', tag: 'límites' },
      { t: '¿Cuál es la **dirección** del Centro de Administración de Microsoft Teams?', type: 'fill', ans: ['admin.teams.microsoft.com'], exp: 'Se accede desde <code>admin.teams.microsoft.com</code>, con secciones para Dashboard, Teams, Users, Dispositivos, Aplicaciones, Meetings, Messaging policies y reportes.', tag: 'administración' },
      { t: 'Marcá las afirmaciones **verdaderas** sobre roles y políticas de Teams.', type: 'multi', opts: ['El Propietario tiene control total del equipo', 'El Invitado es un usuario externo con acceso limitado', 'Las políticas de mensajería regulan chat, menciones, GIFs y retención de mensajes', 'Las update policies sirven para crear canales nuevos'], ans: [0, 1, 2], exp: 'Las <em>update policies</em> controlan funciones en preview y la migración al nuevo cliente Teams; la creación de canales se gestiona con los permisos de miembros, no con ellas.', tag: 'administración' },
      { t: 'El proyecto final de la unidad se evalúa con una rúbrica de 6 criterios de 4 puntos. ¿Cuánto hay que sacar para obtener la calificación **Excelente (A)**?', type: 'mcq', opts: ['22 a 24 puntos', '18 a 21 puntos', '14 a 17 puntos', 'Más de 10 puntos'], ans: 0, exp: 'La escala es: 22-24 Excelente (A), 18-21 Bueno (B), 14-17 Satisfactorio (C), 10-13 Necesita Mejora (D) e insuficiente (&lt;10).', tag: 'evaluación' }
    ]
  };
})(window.NTX);
