import { PLAYER_X } from "./constants.js";

/**
 * @typedef {Object} ScoreBoard
 * @property {number} xWins - Número de victorias para el jugador X.
 * @property {number} oWins - Número de victorias para el jugador O.
 * @property {Text} xElement - Objeto que representa el elemento para mostrar las victorias del jugador X.
 * @property {Text} oElement - Objeto que representa el elemento para mostrar las victorias del jugador O.
 *
 * @method {function} reset - Reinicia el marcador.
 * @method {function} winner - Incrementa el marcador del jugador ganador y actualiza la visualización.
 */
class ScoreBoard {
  /**
   * Constructor de la clase
   * @param {Text} xElem - Objeto que representa el elemento para mostrar las victorias del jugador X.
   * @param {Text} oElem - Objeto que representa el elemento para mostrar las victorias del jugador O.
   */
  constructor(xElem, oElem) {
    /** @type {number} */
    this.xWins = 0;

    /** @type {number} */
    this.oWins = 0;

    /** @type {Text} */
    this.xElement = xElem;

    /** @type {Text} */
    this.oElement = oElem;
  }

  /**
   * Reinicia el marcador.
   */
  reset() {
    this.xWins = 0;
    this.oWins = 0;
    this.#updateScore();
  }

  /**
   * Incrementa el marcador del jugador ganador y actualiza la visualización.
   * @param {string} player - El jugador que ha ganado (PLAYER_X o PLAYER_O).
   */
  winner(player) {
    if (player === PLAYER_X) this.xWins++;
    else this.oWins++;

    this.#updateScore();
  }

  /**
   * Actualiza la visualización del marcador.
   * @private
   */
  #updateScore() {
    this.xElement.setText(this.xWins);
    this.oElement.setText(this.oWins);
  }
}

export default ScoreBoard;
