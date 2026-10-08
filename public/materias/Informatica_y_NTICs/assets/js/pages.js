/* ============================================================
   NTX — Constructores de páginas (inicio, unidad, TP, descargas)
   ============================================================ */
(function (NTX) {
  'use strict';
  var U = NTX.util, P = NTX.progress;

  function h(html) { var d = document.createElement('div'); d.innerHTML = html; return d; }
  function mountOf() { return U.qs('main') || document.body; }

  /* Se construye el catálogo una sola vez, apenas están cargados los datos.
     Así el progreso global tiene denominador aunque la página actual no monte
     ningún quiz (por ejemplo, el inicio). */
  var catalogDone = false;
  function ensureCatalog() {
    if (catalogDone) return;
    catalogDone = true;
    try { NTX.buildCatalog(); } catch (e) { console.error('[NTX] catálogo', e); }
  }

  /* ---------------- Página de inicio ---------------- */
  NTX.homePage = function () {
    var main = mountOf();
    main.innerHTML = '';
    ensureCatalog();
    P.load();

    main.appendChild(U.el('div', { class: 'eyebrow', text: 'UNAB' }));
    main.appendChild(U.el('h1', { text: 'Informática & NTICs' }));
    main.appendChild(U.el('p', { class: 'lead', text: 'Recorré las ' + NTX.unidades.length + ' unidades con teoría, autoevaluaciones, trabajos prácticos y todo el material de la cursada para descargar.' }));

    /* Acciones */
    main.appendChild(U.el('div', { class: 'btn-row' }, [
      U.el('a', { class: 'btn primary', href: U.link('u1/index.html'), text: 'Empezar por la Unidad 1 →' }),
      U.el('a', { class: 'btn', href: U.link('tp/index.html'), text: 'Trabajos prácticos' }),
      U.el('button', { class: 'btn', text: '◔ Mi progreso', onclick: function () { NTX.shell.openProgressModal(); } })
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
    NTX.unidades.forEach(function (u) {
      var card = U.el('a', { class: 'card unit-card unit-' + u.num, href: U.link(u.id + '/index.html') }, [
        U.el('div', { class: 'flex between' }, [
          U.el('span', { class: 'unit-num', text: (u.num < 10 ? '0' : '') + u.num }),
          U.el('span', { class: 'chip', text: (u.secciones || []).length + ' temas' })
        ]),
        U.el('h3', { class: 'mt-1', text: u.title }),
        U.el('p', { class: 'small', text: u.resumen }),
        U.el('div', { class: 'bar sm' }, U.el('i')),
        U.el('div', { class: 'tiny dim' })
      ]);
      bars.push({ id: u.id, fill: U.qs('.bar > i', card), txt: U.qs('.tiny.dim', card) });
      grid.appendChild(card);
    });
    main.appendChild(U.el('h2', { class: 'mt-3', text: 'Las ' + NTX.unidades.length + ' unidades' }));
    main.appendChild(grid);

    /* TP y descargas */
    var grid2 = U.el('div', { class: 'grid grid-3' }, [
      U.el('a', { class: 'card', href: U.link('tp/index.html') }, [
        U.el('h3', { text: 'Trabajos prácticos' }),
        U.el('p', { class: 'small', text: 'GIS, telemedicina, misión de ciberseguridad y el TP final integrador, con sus enunciados y material de apoyo.' })
      ]),
      U.el('a', { class: 'card', href: U.link('downloads/index.html') }, [
        U.el('h3', { text: 'Descargas' }),
        U.el('p', { class: 'small', text: 'Presentaciones, apuntes y guías de cada clase para estudiar sin conexión.' })
      ])
    ]);
    main.appendChild(grid2);

    main.appendChild(U.el('div', { class: 'notice mt-3', html:
      '<b>Nota:</b> tu progreso de autoevaluaciones se guarda en este navegador. Podés exportarlo o volver a importarlo desde <b>◔ Mi progreso</b>.' }));

    NTX.shell.mount({});

    /* Un solo lugar que redibuja todas las barras y textos de progreso. */
    function refresh() {
      var s = P.stats();
      var pct = s.pct();
      var fill = U.qs('.bar > i', prog);
      if (fill) fill.style.width = pct + '%';
      U.qs('#prog-txt', prog).textContent = pct + '% completado · ' +
        s.quizzes + '/' + s.quizzesTotal + ' autoevaluaciones';
      bars.forEach(function (b) {
        var up = P.unitPct(b.id);
        if (b.fill) b.fill.style.width = up + '%';
        if (b.txt) b.txt.textContent = up + '% de la unidad';
      });
    }
    refresh();
    P.on(refresh);
  };

  /* ---------------- Página de unidad ---------------- */
  NTX.unitPage = function (id) {
    var u = NTX.unitById(id);
    var main = mountOf();
    if (!u) { main.appendChild(U.el('h2', { text: 'Unidad no encontrada' })); return; }
    ensureCatalog();
    P.load();
    P.visitUnit(id);

    document.title = 'U' + u.num + ' — ' + u.title;
    main.innerHTML = '';

    var toc = [];
    main.appendChild(U.el('div', { class: 'eyebrow', text: 'Unidad ' + u.num + ' de ' + NTX.unidades.length }));
    main.appendChild(U.el('h1', { text: u.title }));
    main.appendChild(U.el('p', { class: 'lead', text: u.resumen }));

    /* Objetivos */
    main.appendChild(section('objetivos', '🎯', 'Qué vas a poder hacer', [
      U.el('ul', null, u.objetivos.map(function (o) { return U.el('li', { html: o }); })),
      U.el('div', { class: 'nav-units' }, navPrev(u), navNext(u))
    ]));

    /* Teoría. `code` acepta un string (un bloque) o un array de bloques. */
    var secs = u.secciones.map(function (s, i) {
      var box = U.el('div', { class: 'card', id: 'teoria-' + i });
      box.appendChild(U.el('h3', { html: '<span class="h-num">' + (i + 1) + '</span>' + s.h }));
      box.appendChild(h(s.html));
      var codes = s.code ? [].concat(s.code) : [];
      codes.forEach(function (c) { box.appendChild(U.code(c, 'texto')); });
      toc.push({ id: 'teoria-' + i, label: s.h, group: 'Teoría' });
      return box;
    });
    main.appendChild(U.el('h2', { class: 'sr', text: 'Teoría' }));
    var wrap = U.el('div', { class: 'stack', id: 'teoria' });
    secs.forEach(function (b) { wrap.appendChild(b); });
    main.appendChild(wrap);

    /* Quiz */
    var q = NTX.quizzes[id];
    if (q) {
      main.appendChild(U.el('h2', { class: 'mt-3', text: 'Autoevaluación' }));
      var qbox = U.el('div', { class: 'card', id: 'quiz-' + id });
      main.appendChild(qbox);
      toc.push({ id: 'quiz-' + id, label: 'Autoevaluación', group: 'Practicar' });
      NTX.quiz.render(qbox, { id: 'quiz-' + id, titulo: q.titulo, preguntas: q.preguntas });
    }

    /* Material */
    if (u.archivos && u.archivos.length) {
      main.appendChild(U.el('h2', { class: 'mt-3', text: 'Material de la unidad' }));
      main.appendChild(U.el('div', { class: 'grid grid-files' }, u.archivos.map(function (a) {
        return U.el('a', { class: 'file', href: U.link(a.f), download: '' }, [
          U.el('span', { class: 'ext', text: (a.f.split('.').pop() || '').toUpperCase() }),
          U.el('span', { text: a.t })
        ]);
      })));
    }

    main.appendChild(U.el('div', { class: 'nav-units' }, navPrev(u), navNext(u)));
    NTX.shell.mount({ toc: toc });
  };

  function section(id, icon, titulo, children) {
    var s = U.el('section', { class: 'card', id: id });
    if (icon) s.appendChild(U.el('h3', { html: '<span class="h-num">' + icon + '</span>' + titulo }));
    else s.appendChild(U.el('h3', { text: titulo }));
    (Array.isArray(children) ? children : [children]).forEach(function (c) { s.appendChild(c); });
    return s;
  }

  function navPrev(u) {
    var i = NTX.unidades.findIndex(function (x) { return x.id === u.id; });
    var p = NTX.unidades[i - 1];
    return p ? U.el('a', { class: 'btn', href: U.link(p.id + '/index.html'), text: '← ' + p.title }) : U.el('span');
  }
  function navNext(u) {
    var i = NTX.unidades.findIndex(function (x) { return x.id === u.id; });
    var n = NTX.unidades[i + 1];
    return n ? U.el('a', { class: 'btn primary', href: U.link(n.id + '/index.html'), text: n.title + ' →' })
             : U.el('a', { class: 'btn primary', href: U.link('tp/index.html'), text: 'Trabajos prácticos →' });
  }

  /* ---------------- Página de TP ---------------- */
  NTX.tpPage = function () {
    var main = mountOf();
    main.innerHTML = '';
    ensureCatalog();
    P.load();
    document.title = 'Trabajos prácticos';
    main.appendChild(U.el('div', { class: 'eyebrow', text: 'Prácticas' }));
    main.appendChild(U.el('h1', { text: 'Trabajos prácticos' }));
    main.appendChild(U.el('p', { class: 'lead', text: 'Los trabajos de la cursada con su enunciado, consignas y el material de apoyo para descargar.' }));

    var toc = [];
    NTX.tps.forEach(function (tp) {
      toc.push({ id: tp.id, label: tp.titulo.split('—')[0].trim(), group: 'Trabajos' });
      main.appendChild(U.el('h2', { class: 'mt-3', text: tp.titulo }));
      var card = U.el('div', { class: 'card', id: tp.id });
      card.appendChild(U.el('p', { class: 'lead', text: tp.resumen }));
      if (tp.enunciado) {
        card.appendChild(U.el('h4', { text: 'Enunciado' }));
        card.appendChild(h(tp.enunciado));
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
        card.appendChild(U.el('a', { class: 'btn mt-1', href: U.link(tp.archivo), download: '', text: '↓ ' + (tp.archivoTexto || 'Enunciado en PDF') }));
      }
      main.appendChild(card);
    });
    NTX.shell.mount({ toc: toc });
  };

  /* ---------------- Página de descargas ---------------- */
  NTX.downloadsPage = function () {
    var main = mountOf();
    main.innerHTML = '';
    ensureCatalog();
    P.load();
    document.title = 'Descargas';
    main.appendChild(U.el('div', { class: 'eyebrow', text: 'Material' }));
    main.appendChild(U.el('h1', { text: 'Descargas' }));
    main.appendChild(U.el('p', { class: 'lead', text: 'Todo el material público de la cursada, organizado por unidad: presentaciones, apuntes y guías.' }));

    var n = 0;
    NTX.files.forEach(function (g) {
      main.appendChild(U.el('h2', { class: 'mt-3', text: g.t }));
      if (g.d) main.appendChild(U.el('p', { class: 'small dim', text: g.d }));
      var d = U.el('div', { class: 'grid grid-files' });
      g.items.forEach(function (f) {
        var partes = f.split('/');
        var nombre = partes.pop();
        var ext = (nombre.split('.').pop() || '').toUpperCase();
        n++;
        d.appendChild(U.el('a', { class: 'file', href: U.link(f), download: '' }, [
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
    NTX.shell.mount({});
  };

})(window.NTX);
