/**
 * @typedef {Object} Cell
 * @property {string} innerHTML - Contenido HTML de la celda.
 * @property {DOMTokenList} classList - Lista de clases de la celda.
 */

/**
 * @typedef {Object} Board
 * @property {Array<Array<string|null>>} board - La representación del tablero.
 *
 * @method {function} setPlayer - Establece el jugador en una posición específica del tablero.
 * @method {function} getWinner - Determina si hay un ganador en el juego actual.
 * @method {function} checkTie - Determina si hay un empate.
 * @method {function} isValidPos - Verifica si una posición en el tablero es válida.
 * @method {function} reset - Reinicia el tablero.
 */
class Board {
  /**
   * Constructor de la clase
   */
  constructor() {
    /** @type {Array<Array<string|null>>} */
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  /**
   * Establece el jugador en una posición específica del tablero.
   * @param {string} player - El jugador actual.
   * @param {number} row - La fila de la posición clicada.
   * @param {number} col - La columna de la posición clicada.
   */
  setPlayer(player, row, col) {
    this.board[row][col] = player;
  }

  /**
   * Determina si hay un ganador en el juego actual.
   * @param {string} lastPlayer - El jugador actual.
   * @param {number} lastRow - La fila de la posición clicada.
   * @param {number} lastCol - La columna de la posición clicada.
   * @returns {string|null} - El jugador ganador o null si no hay ganador.
   */
  getWinner(lastPlayer, lastRow, lastCol) {
    let i = 0;

    // Check current column
    while (i < this.board.length && i !== -1) {
      if (this.board[i][lastCol] === lastPlayer) {
        i++;
      } else {
        i = -1;
      }
    }

    if (i >= this.board.length) return lastPlayer;

    i = 0;

    // Check current row
    while (i < this.board[lastRow].length && i !== -1) {
      if (this.board[lastRow][i] === lastPlayer) {
        i++;
      } else {
        i = -1;
      }
    }

    if (i >= this.board[lastRow].length) return lastPlayer;

    if (!((lastCol === 2 && lastRow === 0) || (lastCol === 0 && lastRow === 2) || lastCol === lastRow))
      return null;

    i = 0;

    // Check diagonal 1
    while (i < this.board.length && i !== -1) {
      if (this.board[i][i] === lastPlayer) {
        i++;
      } else {
        i = -1;
      }
    }

    if (i >= this.board.length) return lastPlayer;

    i = 0;

    // Check diagonal 2
    while (i < this.board.length && i !== -1) {
      if (this.board[i][this.board.length - 1 - i] === lastPlayer) {
        i++;
      } else {
        i = -1;
      }
    }

    if (i >= this.board.length) return lastPlayer;

    return null;
  }

  /**
   * Determina si hay un empate.
   * @returns {boolean} - true si hay un empate, false de lo contrario.
   */
  checkTie() {
    return this.board.every((row) => row.every((cell) => cell !== null));
  }

  /**
   * Verifica si una posición en el tablero es válida.
   * @param {number} row - La fila de la posición.
   * @param {number} col - La columna de la posición.
   * @returns {boolean} - true si la posición es válida, false de lo contrario.
   */
  isValidPos(row, col) {
    return this.board[row][col] === null;
  }

  /**
   * Reinicia el tablero.
   */
  reset() {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }
}

export default Board;
