/* ============================================================
   PCX — Constructores de páginas (inicio, unidad, TP, descargas)
   ============================================================ */
(function (PCX) {
  'use strict';
  var U = PCX.util, P = PCX.progress;

  function h(html) { var d = document.createElement('div'); d.innerHTML = html; return d; }
  function mountOf() { return U.qs('main') || document.body; }

  /* Catalogo unica vez, cuando los datos ya estan cargados. */
  var catalogDone = false;
  function ensureCatalog() {
    if (catalogDone) return;
    catalogDone = true;
    try { PCX.buildCatalog(); } catch (e) { console.error('[PCX] catalogo', e); }
  }

  /* ---------------- Pagina de inicio ---------------- */
  PCX.homePage = function () {
    var main = mountOf();
    main.innerHTML = '';
    ensureCatalog();
    P.load();

    main.appendChild(U.el('div', { class: 'eyebrow', text: 'UNaB' }));
    main.appendChild(U.el('h1', { text: 'Programación Concurrente y Paralela' }));
    main.appendChild(U.el('p', { class: 'lead', text: 'Recorré las ' + PCX.unidades.length + ' unidades con teoría, laboratorios de Python que corren en el navegador, las prácticas, el proyecto incremental y todo el material de la cursada.' }));

    /* Acciones */
    main.appendChild(U.el('div', { class: 'btn-row' }, [
      U.el('a', { class: 'btn primary', href: U.link('u1/index.html'), text: 'Empezar por la Unidad 1 →' }),
      U.el('a', { class: 'btn', href: U.link('tp/index.html'), text: 'Prácticas y proyecto' }),
      U.el('button', { class: 'btn', text: '◔ Mi progreso', onclick: function () { PCX.shell.openProgressModal(); } })
    ]));

    /* Progreso */
    var st = P.stats();
    var prog = U.el('div', { class: 'card', id: 'progreso' });
    prog.appendChild(U.el('h3', { html: '<span class="h-num">◔</span>Tu recorrido' }));
    prog.appendChild(U.el('div', { class: 'bar' }, U.el('i')));
    prog.appendChild(U.el('p', { class: 'small mt-1', id: 'prog-txt' }));
    main.appendChild(prog);

    /* Tarjetas de unidades */
    var grid = U.el('div', { class: 'grid grid-units' });
    var bars = [];
    PCX.unidades.forEach(function (u) {
      var labs = (u.labs || []).length;
      var card = U.el('a', { class: 'card unit-card unit-' + u.num, href: U.link(u.id + '/index.html') }, [
        U.el('div', { class: 'flex between' }, [
          U.el('span', { class: 'unit-num', text: (u.num < 10 ? '0' : '') + u.num }),
          U.el('span', { class: 'chip', text: labs + ' laboratorio' + (labs === 1 ? '' : 's') })
        ]),
        U.el('h3', { class: 'mt-1', text: u.title }),
        U.el('p', { class: 'small', text: u.resumen }),
        U.el('div', { class: 'bar sm' }, U.el('i')),
        U.el('div', { class: 'tiny dim' })
      ]);
      bars.push({ id: u.id, fill: U.qs('.bar > i', card), txt: U.qs('.tiny.dim', card) });
      grid.appendChild(card);
    });
    main.appendChild(U.el('h2', { class: 'mt-3', text: 'Las ' + PCX.unidades.length + ' unidades' }));
    main.appendChild(grid);

    /* TP y descargas */
    var grid2 = U.el('div', { class: 'grid grid-3' }, [
      U.el('a', { class: 'card', href: U.link('tp/index.html') }, [
        U.el('h3', { text: 'Prácticas y proyecto' }),
        U.el('p', { class: 'small', text: 'Prácticas clásicas con enunciado y, cuando los hay, laboratorios con tests automáticos. Más el proyecto incremental del curso en 4 hitos.' })
      ]),
      U.el('a', { class: 'card', href: U.link('downloads/index.html') }, [
        U.el('h3', { text: 'Descargas' }),
        U.el('p', { class: 'small', text: 'Todo el material público de la cursada: clases, apuntes, libros, prácticas, código Python, kernels CUDA y notebooks.' })
      ])
    ]);
    main.appendChild(grid2);

    main.appendChild(U.el('div', { class: 'notice mt-3', html: location.protocol === 'file:'
      ? '<b>Nota:</b> los laboratorios de Python usan <a href="https://pyodide.org" target="_blank" rel="noopener">Pyodide</a> dentro del navegador. Para usarlos, serví la carpeta por HTTP (<code>python -m http.server 8000</code>) en lugar de abrir los archivos con doble clic. Tu código nunca sale de tu máquina.'
      : '<b>Nota:</b> los laboratorios de Python usan <a href="https://pyodide.org" target="_blank" rel="noopener">Pyodide</a> dentro del navegador. La primera vez se descarga el intérprete (~13 MB) y después queda en caché. Corren en un solo hilo, así que los ejercicios trabajan con simulaciones e interleavings; los hilos y kernels reales se prueban localmente (Python/CUDA). Tu código nunca sale de tu máquina.' }));

    PCX.shell.mount({});

    function refresh() {
      var s = P.stats();
      var pct = s.pct();
      var fill = U.qs('.bar > i', prog);
      if (fill) fill.style.width = pct + '%';
      U.qs('#prog-txt', prog).textContent = pct + '% completado · ' +
        s.quizzes + '/' + s.quizzesTotal + ' autoevaluaciones · ' +
        s.labs + '/' + (P.labTotalCount ? P.labTotalCount() : PCX.labTotal) + ' laboratorios con tests';
      bars.forEach(function (b) {
        var up = P.unitPct(b.id);
        if (b.fill) b.fill.style.width = up + '%';
        if (b.txt) b.txt.textContent = up + '% de la unidad';
      });
    }
    refresh();
    P.on(refresh);
  };

  /* ---------------- Pagina de unidad ---------------- */
  PCX.unitPage = function (id) {
    var u = PCX.unitById(id);
    var main = mountOf();
    if (!u) { main.appendChild(U.el('h2', { text: 'Unidad no encontrada' })); return; }
    ensureCatalog();
    P.load();
    P.visitUnit(id);

    document.title = 'U' + u.num + ' — ' + u.title;
    var main2 = main;
    main2.innerHTML = '';

    var toc = [];
    main2.appendChild(U.el('div', { class: 'eyebrow', text: 'Unidad ' + u.num + ' de ' + PCX.unidades.length }));
    main2.appendChild(U.el('h1', { text: u.title }));
    main2.appendChild(U.el('p', { class: 'lead', text: u.resumen }));

    /* Objetivos */
    main2.appendChild(section('objetivos', '🎯', 'Qué vas a poder hacer', [
      U.el('ul', null, u.objetivos.map(function (o) { return U.el('li', { html: o }); })),
      U.el('div', { class: 'nav-units' }, navPrev(u), navNext(u))
    ]));

    /* Teoría */
    var secs = u.secciones.map(function (s, i) {
      var box = U.el('div', { class: 'card', id: 'teoria-' + i });
      box.appendChild(U.el('h3', { html: '<span class="h-num">' + (i + 1) + '</span>' + s.h }));
      box.appendChild(h(s.html));
      var codes = s.code ? [].concat(s.code) : [];
      codes.forEach(function (c) { box.appendChild(U.code(c, 'python')); });
      toc.push({ id: 'teoria-' + i, label: s.h, group: 'Teoría' });
      return box;
    });
    main2.appendChild(U.el('h2', { class: 'sr', text: 'Teoría' }));
    var wrap = U.el('div', { class: 'stack', id: 'teoria' });
    secs.forEach(function (b) { wrap.appendChild(b); });
    main2.appendChild(wrap);

    /* Laboratorios */
    if (u.labs && u.labs.length) {
      main2.appendChild(U.el('h2', { class: 'mt-3', text: 'Laboratorios de código' }));
      u.labs.forEach(function (l, i) { main2.appendChild(labCard(l, u.id, i)); });
    }

    /* Quiz */
    var q = PCX.quizzes[id];
    if (q) {
      main2.appendChild(U.el('h2', { class: 'mt-3', text: 'Autoevaluación' }));
      var qbox = U.el('div', { class: 'card', id: 'quiz-' + id });
      main2.appendChild(qbox);
      toc.push({ id: 'quiz-' + id, label: 'Autoevaluación', group: 'Practicar' });
      PCX.quiz.render(qbox, { id: 'quiz-' + id, titulo: q.titulo, preguntas: q.preguntas });
    }

    /* Material */
    if (u.archivos && u.archivos.length) {
      main2.appendChild(U.el('h2', { class: 'mt-3', text: 'Material de la unidad' }));
      main2.appendChild(U.el('div', { class: 'grid grid-files' }, u.archivos.map(function (a) {
        return U.el('a', { class: 'file', href: U.link('downloads/') + a.f, download: '' }, [
          U.el('span', { class: 'ext', text: (a.f.split('.').pop() || '').toUpperCase() }),
          U.el('span', { text: a.t })
        ]);
      })));
    }

    main2.appendChild(U.el('div', { class: 'nav-units' }, navPrev(u), navNext(u)));
    PCX.shell.mount({ toc: toc });
  };

  function section(id, icon, titulo, children) {
    var s = U.el('section', { class: 'card', id: id });
    if (icon) s.appendChild(U.el('h3', { html: '<span class="h-num">' + icon + '</span>' + titulo }));
    else s.appendChild(U.el('h3', { text: titulo }));
    (Array.isArray(children) ? children : [children]).forEach(function (c) { s.appendChild(c); });
    return s;
  }

  function navPrev(u) {
    var i = PCX.unidades.findIndex(function (x) { return x.id === u.id; });
    var p = PCX.unidades[i - 1];
    return p ? U.el('a', { class: 'btn', href: U.link(p.id + '/index.html'), text: '← ' + p.title }) : U.el('span');
  }
  function navNext(u) {
    var i = PCX.unidades.findIndex(function (x) { return x.id === u.id; });
    var n = PCX.unidades[i + 1];
    return n ? U.el('a', { class: 'btn primary', href: U.link(n.id + '/index.html'), text: n.title + ' →' })
             : U.el('a', { class: 'btn primary', href: U.link('tp/index.html'), text: 'Prácticas y proyecto →' });
  }

  /* ---------------- Laboratorio con tests ---------------- */
  function labCard(l, unit, i) {
    var box = U.el('div', { class: 'card', id: 'lab-' + unit + '-' + i });
    box.appendChild(U.el('h3', { html: '<span class="h-num">⌨</span>' + l.title }));
    box.appendChild(U.el('p', { html: l.enunciado }));
    var slot = U.el('div', { id: 'labslot-' + unit + '-' + i });
    box.appendChild(slot);
    PCX.py.lab(slot, {
      id: 'lab-' + unit + '-' + i,
      titulo: l.title,
      starter: l.starter || '',
      setup: l.setup || '',
      input: l.input,
      inputLabel: l.inputLabel,
      tests: l.tests || [],
      solution: l.solution || '',
      solutionExp: l.solutionExp || '',
      hints: l.hints,
      unit: unit
    });
    return box;
  }

  /* ---------------- Pagina de TP ---------------- */
  PCX.tpPage = function () {
    var main = mountOf();
    main.innerHTML = '';
    ensureCatalog();
    P.load();
    document.title = 'Prácticas y proyecto';
    main.appendChild(U.el('div', { class: 'eyebrow', text: 'Prácticas' }));
    main.appendChild(U.el('h1', { text: 'Prácticas y proyecto' }));
    main.appendChild(U.el('p', { class: 'lead', text: 'Las prácticas clásicas de la cursada y el proyecto incremental del curso actual en 4 hitos. Cuando el ejercicio tiene tests, podés resolverlo en un laboratorio de código dentro del navegador.' }));

    main.appendChild(U.el('div', { class: 'notice', html: '<b>Cómo usar el laboratorio:</b> editás el código a la izquierda, tocás <b>▶ Ejecutar</b> para ver la salida y <b>✓ Tests</b> para comprobar los casos. El Python corre dentro de tu navegador (Pyodide): no se envía nada a ningún servidor. Los hilos y kernels reales se prueban localmente.' }));

    var toc = [];
    var grupos = ['proyecto', 'practicas'];
    grupos.forEach(function (grupo) {
      var tps = PCX.tps.filter(function (tp) { return (tp.grupo || 'practicas') === grupo; });
      if (!tps.length) return;
      var titulo = grupo === 'proyecto' ? 'Proyecto incremental (curso 2026)' : 'Prácticas';
      main.appendChild(U.el('h2', { class: 'mt-3', text: titulo }));
      tps.forEach(function (tp) {
        var label = tp.grupo === 'proyecto' ? 'Hito ' + tp.num : 'Práctica ' + tp.num;
        toc.push({ id: tp.id, label: label + ' — ' + tp.titulo, group: titulo });
        main.appendChild(U.el('h3', { class: 'mt-2', text: label + ' — ' + tp.titulo }));
        var card = U.el('div', { class: 'card', id: tp.id });
        card.appendChild(U.el('p', { class: 'lead', text: tp.resumen }));
        if (tp.enunciado) {
          card.appendChild(U.el('h4', { text: 'Enunciado' }));
          card.appendChild(U.el('p', { html: tp.enunciado }));
        }
        if (tp.consignas && tp.consignas.length) {
          card.appendChild(U.el('h4', { text: 'Consignas' }));
          card.appendChild(U.el('ol', null, tp.consignas.map(function (c) { return U.el('li', { html: c }); })));
        }
        if (tp.temas && tp.temas.length) {
          card.appendChild(U.el('h4', { text: 'Temas' }));
          card.appendChild(U.el('div', { class: 'chips' }, tp.temas.map(function (t) { return U.el('span', { class: 'chip', text: t }); })));
        }
        if (tp.archivo) {
          card.appendChild(U.el('a', { class: 'btn mt-1', href: U.link('downloads/') + tp.archivo, download: '', text: '↓ ' + (tp.archivoTexto || 'Material') }));
        }
        if (tp.plantilla || (tp.tests && tp.tests.length)) {
          card.appendChild(U.el('h4', { class: 'mt-2', text: 'Laboratorio' }));
          var slot = U.el('div');
          card.appendChild(slot);
          main.appendChild(card);
          PCX.py.lab(slot, {
            id: tp.id,
            titulo: label,
            starter: tp.plantilla || '',
            setup: tp.setup || '',
            input: tp.input,
            inputLabel: tp.inputLabel,
            tests: tp.tests || [],
            solution: tp.solution || '',
            solutionExp: tp.solutionExp || '',
            unit: null
          });
        } else {
          main.appendChild(card);
        }
      });
    });
    PCX.shell.mount({ toc: toc });
  };

  /* ---------------- Pagina de descargas ---------------- */
  PCX.downloadsPage = function () {
    var main = mountOf();
    main.innerHTML = '';
    ensureCatalog();
    P.load();
    document.title = 'Descargas';
    main.appendChild(U.el('div', { class: 'eyebrow', text: 'Material' }));
    main.appendChild(U.el('h1', { text: 'Descargas' }));
    main.appendChild(U.el('p', { class: 'lead', text: 'Todo el material público de la cursada: programa, clases, apuntes, libros, prácticas, código Python, kernels CUDA y notebooks.' }));

    var n = 0;
    PCX.files.forEach(function (g) {
      main.appendChild(U.el('h2', { class: 'mt-3', text: g.t }));
      if (g.d) main.appendChild(U.el('p', { class: 'small dim', text: g.d }));
      var d = U.el('div', { class: 'grid grid-files' });
      g.items.forEach(function (f) {
        var partes = f.split('/');
        var nombre = partes.pop();
        var ext = (nombre.split('.').pop() || '').toUpperCase();
        n++;
        d.appendChild(U.el('a', { class: 'file', href: U.link('downloads/') + f, download: '' }, [
          U.el('span', { class: 'ext', text: ext }),
          U.el('span', {}, [
            U.el('span', { class: 'file-name', text: nombre }),
            U.el('span', { class: 'tiny dim', text: ' ' + partes.join(' / ') })
          ])
        ]));
      });
      main.appendChild(d);
    });
    main.appendChild(U.el('p', { class: 'small dim mt-3', text: n + ' archivos. Material de la cátedra, disponible para estudiar sin conexión.' }));
    PCX.shell.mount({});
  };

})(window.PCX);