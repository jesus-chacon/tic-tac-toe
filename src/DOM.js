/**
 * Clase de utilidades para manipular el DOM.
 * @class
 */
class DOMUtils {
  /**
   * Recupera un elemento del DOM por su ID.
   * @param {string} id - El ID del elemento a recuperar.
   * @returns {HTMLElement} - El elemento con el ID especificado.
   * @throws {Error} - Se lanza si no se encuentra el elemento con el ID especificado.
   */
  static getById(id) {
    const element = document.getElementById(id);
    if (!element) {
      throw new Error(`Elemento con el ID '${id}' no existe.`);
    }
    return element;
  }

  /**
   * Muestra un elemento del DOM por su ID.
   * @param {string} id - El ID del elemento a mostrar.
   */
  static showById(id) {
    this.getById(id).classList.remove("hide");
  }

  /**
   * Oculta un elemento del DOM por su ID.
   * @param {string} id - El ID del elemento a ocultar.
   */
  static hideById(id) {
    this.getById(id).classList.add("hide");
  }
}

export default DOMUtils;
