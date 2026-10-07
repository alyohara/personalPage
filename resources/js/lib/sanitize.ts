import DOMPurify from 'dompurify';

/**
 * Sanitiza HTML generado por el editor (o almacenado en BD) para
 * prevenir XSS al renderizarlo con dangerouslySetInnerHTML.
 */
export function sanitizeHtml(html: string): string {
    return DOMPurify.sanitize(html, {
        USE_PROFILES: { html: true },
        ADD_ATTR: ['target', 'rel'],
        ADD_TAGS: ['iframe'],
    });
}

/**
 * Convierte etiquetas de paginación generadas por Laravel (que incluyen
 * HTML oculto y entidades) a texto plano para renderizarlas de forma segura.
 */
export function paginationLabel(label: string): string {
    const div = document.createElement('div');
    div.innerHTML = label;
    return div.textContent ?? '';
}
