/**
 * Obtiene el HTML de un elemento SVG.
 * @param {string} type - El tipo de SVG.
 * @returns {string} - El HTML del SVG.
 */
export const getSvgHTML = (type) => `
  <svg width="50" height="50" version="2.0" class="icon-${type}">
    <use href="#icon-${type}" />
  </svg>
`;
