/* Shim para los visualizadores portados del repo de referencia (EDD).
   Provee EDD.util, EDD.registerViz y EDD.progress.min para que los
   viz-*.js corran en este sitio sin el core completo del otro proyecto. */
(function (global) {
  "use strict";

  var EDD = global.EDD = global.EDD || {};
  EDD.viz = EDD.viz || {};
  EDD.vizRegistry = [];
  EDD.registerViz = function (key) {
    if (EDD.vizRegistry.indexOf(key) < 0) EDD.vizRegistry.push(key);
  };
  EDD.progress = {
    setVizDone: function () {},
    vizDone: function () { return false; }
  };

  var U = EDD.util = {
    el: function (tag, attrs, children) {
      var e = document.createElement(tag);
      if (attrs) Object.keys(attrs).forEach(function (k) {
        if (k === "class") e.className = attrs[k];
        else if (k === "html") e.innerHTML = attrs[k];
        else if (k === "text") e.textContent = attrs[k];
        else if (k.slice(0, 2) === "on") e.addEventListener(k.slice(2), attrs[k]);
        else if (attrs[k] != null && attrs[k] !== false) e.setAttribute(k, attrs[k]);
      });
      (Array.isArray(children) ? children : children ? [children] : []).forEach(function (c) {
        if (c == null || c === false) return;
        e.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
      });
      return e;
    },
    qs: function (s, r) { return (r || document).querySelector(s); },
    qsa: function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); },
    esc: function (s) {
      return String(s).replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      });
    },
    py: function (code) {
      var out = U.esc(code);
      var kw = /\b(def|class|return|if|elif|else|for|while|in|not|and|or|is|None|True|False|import|from|as|with|try|except|finally|raise|lambda|pass|break|continue|global|nonlocal|yield|assert|del|global|async|await|self|super|init|len|range|print|input|int|float|str|list|dict|set|tuple|bool|sorted|min|max|sum|abs|enumerate|zip|reversed|append|extend|pop|insert|remove|items|keys|values|get|popleft|isinstance|type)\b/g;
      out = out.replace(/(&quot;&quot;&quot;[\s\S]*?&quot;&quot;&quot;|&#39;&#39;&#39;[\s\S]*?&#39;&#39;&#39;)/g, "\u0001$1\u0002");
      out = out.replace(/(#[^\n]*)/g, "\u0003$1\u0002");
      out = out.replace(kw, '<span class="tok-kw">$1</span>');
      out = out.replace(/(&quot;[^&\n]*?&quot;|&#39;[^&\n]*?&#39;)/g, '<span class="tok-str">$1</span>');
      out = out.replace(/\b(\d+\.?\d*)\b/g, '<span class="tok-num">$1</span>');
      out = out.replace(/\u0001([\s\S]*?)\u0002/g, '<span class="tok-com">$1</span>');
      out = out.replace(/\u0003([^\n]*)\u0002/g, '<span class="tok-com">$1</span>');
      return out;
    },
    code: function (code, lang) {
      var pre = U.el("pre", { html: "<code>" + U.py(code) + "</code>" });
      return U.el("div", { class: "codeblock" }, [
        pre,
        lang ? U.el("span", { class: "lang", text: lang }) : null,
        U.el("button", {
          class: "btn sm copy", text: "copiar",
          onclick: function () {
            var b = this;
            function ok() {
              EDD.util.toast("Codigo copiado", "ok");
              b.textContent = "copiado!";
              setTimeout(function () { b.textContent = "copiar"; }, 1400);
            }
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(code).then(ok, function () { fallback(); });
            } else {
              fallback();
            }
            function fallback() {
              var ta = document.createElement("textarea");
              ta.value = code;
              ta.setAttribute("readonly", "");
              ta.style.cssText = "position:fixed;top:-1000px;opacity:0";
              document.body.appendChild(ta);
              ta.select();
              var done = false;
              try { done = document.execCommand("copy"); } catch (e) { done = false; }
              document.body.removeChild(ta);
              if (done) ok();
              else EDD.util.toast("No se pudo copiar. Selecciona el codigo a mano.", "err");
            }
          }
        })
      ]);
    },
    table: function (head, rows, cls) {
      var t = U.el("table", { class: cls || "" });
      if (head) t.appendChild(U.el("thead", null, U.el("tr", null, head.map(function (h) { return U.el("th", { html: h }); }))));
      t.appendChild(U.el("tbody", null, rows.map(function (r) {
        return U.el("tr", null, r.map(function (c) { return U.el("td", { html: c }); }));
      })));
      return U.el("div", { class: "table-wrap" }, t);
    },
    toast: (function () {
      var el;
      return function (msg, kind, ms) {
        if (!el) { el = U.el("div", { class: "toast" }); document.body.appendChild(el); }
        el.className = "toast show " + (kind || "");
        el.innerHTML = U.esc(msg);
        clearTimeout(el._t);
        el._t = setTimeout(function () { el.className = "toast " + (kind || ""); }, ms || 2200);
      };
    })()
  };
})(window);
