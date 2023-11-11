/**
 * @typedef {Object} StylesManager
 * @property {Array<Object>} themes - Lista de temas disponibles.
 * @property {CSSStyleDeclaration} styles - Estilos aplicados en el documento.
 * @property {number} themeIndex - Índice del tema actual.
 * @property {Button} button - Objeto que representa el botón para cambiar de tema.
 *
 * @method {function} changeStyles - Cambia los estilos a los del siguiente tema.
 * @method {function} #setStyles - Aplica los estilos del tema actual.
 * @method {function} #getCurrentStyles - Obtiene los estilos del tema actual.
 */
class StylesManager {
  /**
   * Constructor de la clase
   * @param {Document} document - Objeto que representa el documento HTML.
   * @param {Button} buttonElemt - Objeto que representa el botón para cambiar de tema.
   */
  constructor(document, buttonElemt) {
    /** @type {Button} */
    this.button = buttonElemt;

    /** @type {CSSStyleDeclaration} */
    this.styles = document.querySelector(":root").style;

    const currentStyles = getComputedStyle(document.querySelector(":root"));

    /** @type {Array<Object>} */
    this.themes = [
      {
        colorO: currentStyles.getPropertyValue("--color-o"),
        backO: currentStyles.getPropertyValue("--back-o"),
        colorX: currentStyles.getPropertyValue("--color-x"),
        backX: currentStyles.getPropertyValue("--back-x"),
      },
      {
        colorO: "#e9c05c",
        backO: "#edf0f5",
        colorX: "#5a6d88",
        backX: "#faf3db",
      },
    ];

    this.button.addOnClick(this.changeStyles.bind(this));

    /** @type {number} */
    this.themeIndex = this.themes.length;
  }

  /**
   * Cambia los estilos a los del siguiente tema.
   */
  changeStyles() {
    this.themeIndex++;
    this.#setStyles();
  }

  /**
   * Aplica los estilos del tema actual.
   * @private
   */
  #setStyles() {
    const currentStyles = this.#getCurrentStyles();

    this.styles.setProperty("--color-o", currentStyles.colorO);
    this.styles.setProperty("--back-o", currentStyles.backO);

    this.styles.setProperty("--color-x", currentStyles.colorX);
    this.styles.setProperty("--back-x", currentStyles.backX);
  }

  /**
   * Obtiene los estilos del tema actual.
   * @returns {Object} - Estilos del tema actual.
   * @private
   */
  #getCurrentStyles() {
    return this.themes[this.themeIndex % this.themes.length];
  }
}

export default StylesManager;
