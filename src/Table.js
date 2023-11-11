import { BOARD_SIZE, CELL_CLASS_O, CELL_CLASS_X } from "./constants";

/**
 * @typedef {Object} Cell
 * @property {string} innerHTML - Contenido HTML de la celda.
 * @property {DOMTokenList} classList - Lista de clases de la celda.
 */

/**
 * @typedef {Object} Table
 * @property {HTMLTableElement} table - El elemento de tabla HTML.
 *
 * @method {function} initialize - Inicializa la tabla con celdas y asigna el evento de clic.
 * @method {function} reset - Reinicia el contenido y las clases de todas las celdas en la tabla.
 * @method {function} getCell - Obtiene una referencia a la celda en la posición de fila y columna especificada.
 * @method {function} addHTML - Agrega contenido HTML a una celda específica en la tabla.
 * @method {function} addClass - Agrega una clase a una celda específica en la tabla.
 * @method {function} setWinner - Establece la clase "winner" en la tabla.
 * @method {function} setTie - Establece la clase "tie" en la tabla.
 */
class Table {
  /**
   * Constructor de la clase
   * @param {HTMLTableElement} tableHtml - Elemento table html para manejar el tablero de juego.
   */
  constructor(tableHtml) {
    /** @type {HTMLTableElement} */
    this.table = tableHtml;
  }

  /**
   * Inicializa la tabla con celdas y asigna el evento de clic.
   * @param {function} onClick - Función de devolución de llamada para el evento de clic en la celda.
   */
  initialize(onClick) {
    console.log("HOLA");
    for (let i = 0; i < BOARD_SIZE; i++) {
      this.table.insertRow(i);

      for (let j = 0; j < BOARD_SIZE; j++) {
        let cell = this.table.rows[i].insertCell(j);

        cell.onclick = () => onClick(i, j);
        cell.innerHTML = "";
      }
    }
  }

  /**
   * Reinicia el contenido y las clases de todas las celdas en la tabla.
   */
  reset() {
    this.table.classList.remove("winner", "tie");

    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        let cell = this.getCell(i, j);

        cell.innerHTML = "";
        cell.classList.remove(CELL_CLASS_X, CELL_CLASS_O);
      }
    }
  }

  /**
   * Obtiene una referencia a la celda en la posición de fila y columna especificada.
   * @param {number} row - Fila de la celda.
   * @param {number} col - Columna de la celda.
   * @returns {Cell} - Objeto representando la celda.
   */
  getCell(row, col) {
    return this.table.rows[row].cells[col];
  }

  /**
   * Agrega contenido HTML a una celda específica en la tabla.
   * @param {string} html - Contenido HTML a agregar.
   * @param {number} row - Fila de la celda.
   * @param {number} col - Columna de la celda.
   */
  addHTML(html, row, col) {
    this.getCell(row, col).innerHTML = html;
  }

  /**
   * Agrega una clase a una celda específica en la tabla.
   * @param {string} classString - Clase a agregar.
   * @param {number} row - Fila de la celda.
   * @param {number} col - Columna de la celda.
   */
  addClass(classString, row, col) {
    this.getCell(row, col).classList.add(classString);
  }

  /**
   * Establece la clase "winner" en la tabla.
   */
  setWinner() {
    this.table.classList.add("winner");
  }

  /**
   * Establece la clase "tie" en la tabla.
   */
  setTie() {
    this.table.classList.add("tie");
  }
}

export default Table;
