/* ============================================================
   PCX — Catálogo de unidades (fragmentos por unidad en u1..u4.js)
   ============================================================ */
(function () {
  'use strict';
  window.PCX = window.PCX || {};
  PCX.unidades = [];
  PCX.unitById = function (id) {
    for (var i = 0; i < PCX.unidades.length; i++) {
      if (PCX.unidades[i].id === id) return PCX.unidades[i];
    }
    return null;
  };
})();