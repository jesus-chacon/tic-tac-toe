/**
 * @typedef {Object} Element
 * @property {HTMLElement} element - El elemento HTML manejado por la clase.
 */
export class Element {
  /**
   * Constructor de la clase
   * @param {HTMLElement} elem - Elemento html.
   */
  constructor(elem) {
    /** @type {HTMLElement} */
    this.element = elem;
  }

  /**
   * Muestra el elemento.
   */
  show() {
    this.element.classList.remove("hide");
  }

  /**
   * Oculta el elemento.
   */
  hide() {
    this.element.classList.add("hide");
  }
}

/**
 * @typedef {Object} Button
 * @property {HTMLElement} element - El elemento HTML del botón manejado por la clase.
 */
export class Button extends Element {
  /**
   * Constructor de la clase
   * @param {HTMLElement} elem - Elemento html.
   */
  constructor(elem) {
    super(elem);
  }

  /**
   * Agrega una función de devolución de llamada al evento de clic del botón.
   * @param {Function} onClick - Función de devolución de llamada para el evento de clic en el botón.
   */
  addOnClick(onClick) {
    this.element.onclick = onClick;
  }
}

/**
 * @typedef {Object} Text
 * @property {HTMLElement} element - El elemento HTML del texto manejado por la clase.
 */
export class Text extends Element {
  /**
   * Constructor de la clase
   * @param {HTMLElement} elem - Elemento html para manejar un texto.
   */
  constructor(elem) {
    super(elem);
  }

  /**
   * Establece el texto del elemento.
   * @param {string} text - El texto a establecer.
   */
  setText(text) {
    this.element.innerHTML = text;
  }
}
