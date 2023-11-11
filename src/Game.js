import { PLAYER_O, PLAYER_X, CELL_CLASS } from "./constants";

import Board from "./Board";
import { getSvgHTML } from "./utils";

/**
 * @typedef {Object} Game
 * @property {Table} table - Objeto que representa la tabla del juego.
 * @property {Button} resetButton - Objeto que representa el botón de reinicio del juego.
 * @property {Board} board - Objeto que representa el tablero del juego.
 * @property {Element} nextPlayerXElement - Objeto que representa el elemento para el jugador X.
 * @property {Element} nextPlayerOElement - Objeto que representa el elemento para el jugador O.
 * @property {string|null} winner - Jugador ganador (PLAYER_X o PLAYER_O) o null si no hay ganador.
 * @property {string|null} player - Jugador actual (PLAYER_X o PLAYER_O) o null si no hay jugador actual.
 * @property {ScoreBoard} scoreBoard - Objeto que representa el marcador de puntuación del juego.
 * @property {StylesManager} stylesManager - Objeto que gestiona los estilos del juego.
 *
 * @method {function} reset - Reinicia el estado del juego.
 * @method {function} clickOnCell - Maneja el clic en una celda del juego.
 * @method {function} updateNextPlayer - Actualiza el jugador actual y muestra el elemento correspondiente.
 * @method {function} initGame - Inicializa el juego, estableciendo los eventos y mostrando el primer jugador.
 */
class Game {
  /**
   * Constructor de la clase
   * @param {Table} table - Objeto que representa la tabla del juego.
   * @param {Button} resetButton - Objeto que representa el botón de reinicio del juego.
   * @param {Element} nextPlayerX - Objeto que representa el elemento para el jugador X.
   * @param {Element} nextPlayerO - Objeto que representa el elemento para el jugador O.
   * @param {ScoreBoard} scoreBoard - Objeto que representa el marcador de puntuación del juego.
   * @param {StylesManager} stylesManager - Objeto que gestiona los estilos del juego.
   */
  constructor(table, resetButton, nextPlayerX, nextPlayerO, scoreBoard, stylesManager) {
    try {
      /** @type {Table} */
      this.table = table;
    } catch (e) {
      throw new Error("Invalid table id element");
    }

    /** @type {Board} */
    this.board = new Board();

    /** @type {string|null} */
    this.winner = null;

    /** @type {string|null} */
    this.player = null;

    /** @type {Button} */
    this.resetButton = resetButton;

    /** @type {Element} */
    this.nextPlayerXElement = nextPlayerX;

    /** @type {Element} */
    this.nextPlayerOElement = nextPlayerO;

    /** @type {ScoreBoard} */
    this.scoreBoard = scoreBoard;

    /** @type {StylesManager} */
    this.stylesManager = stylesManager;
  }

  /**
   * Reinicia el estado del juego.
   */
  reset() {
    this.table.reset();
    this.board.reset();
    this.resetButton.hide();
    this.winner = null;
  }

  /**
   * Maneja el clic en una celda del juego.
   * @param {number} row - La fila de la celda clicada.
   * @param {number} col - La columna de la celda clicada.
   */
  clickOnCell(row, col) {
    if (this.board.isValidPos(row, col) && this.winner === null) {
      this.table.addHTML(getSvgHTML(this.player), row, col);
      this.table.addClass(CELL_CLASS[this.player], row, col);
      this.board.setPlayer(this.player, row, col);

      const winner = this.board.getWinner(this.player, row, col);

      if (winner !== null) {
        this.table.setWinner();
        this.scoreBoard.winner(this.player);
        this.resetButton.show();
        this.winner = this.player;

        alert(`${winner} WINS!!!`);
      } else if (this.board.checkTie()) {
        this.table.setTie();

        alert("TIE");

        this.resetButton.show();
      } else {
        this.updateNextPlayer();
      }
    }
  }

  /**
   * Actualiza el jugador actual y muestra el elemento correspondiente.
   */
  updateNextPlayer() {
    if (this.player === PLAYER_O || this.player === null) {
      this.nextPlayerXElement.show();
      this.nextPlayerOElement.hide();
      this.player = PLAYER_X;
    } else {
      this.nextPlayerOElement.show();
      this.nextPlayerXElement.hide();
      this.player = PLAYER_O;
    }
  }

  /**
   * Inicializa el juego, estableciendo los eventos y mostrando el primer jugador.
   */
  initGame() {
    this.table.initialize(this.clickOnCell.bind(this));
    this.resetButton.addOnClick(this.reset.bind(this));
    this.resetButton.hide();
    this.updateNextPlayer();
  }
}

export default Game;
