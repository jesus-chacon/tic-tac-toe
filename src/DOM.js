/**
 * Clase de utilidades para manipular el DOM.
 * @class
 */
class DOMUtils {
  /**
   * @param {Document} doc
   */
  constructor(doc) {
    this.document = doc;
  }
  /**
   * Recupera un elemento del DOM por su ID.
   * @param {string} id - El ID del elemento a recuperar.
   * @returns {HTMLElement} - El elemento con el ID especificado.
   * @throws {Error} - Se lanza si no se encuentra el elemento con el ID especificado.
   */
  getById(id) {
    const element = this.document.getElementById(id);

    if (!element) {
      throw new Error(`Elemento con el ID '${id}' no existe.`);
    }

    return element;
  }
}

export default DOMUtils;
