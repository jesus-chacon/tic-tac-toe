import { PLAYER_O, PLAYER_X } from "./constants.js";

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

/**
 * Obtiene el estado base del juego.
 * @returns {Object} - El estado base del juego.
 */
export function getBaseState() {
  return {
    player: PLAYER_X,
    winner: null,
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
  };
}

/**
 * Determina qué jugador debe ser el siguiente.
 * @param {string} currentPlayer - El jugador actual.
 * @returns {string} - El siguiente jugador.
 */
export function nextPlayer(currentPlayer) {
  return currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
}

/**
 * Determina si hay un ganador en el juego actual.
 * @param {Array} board - El tablero del juego.
 * @param {string} player - El jugador actual.
 * @param {number} row - La fila de la posición clicada.
 * @param {number} col - La columna de la posición clicada.
 * @returns {string|null} - El jugador ganador o null si no hay ganador.
 */
export function findWinner(board, player, row, col) {
  let i = 0;

  // Check current column
  while (i < board.length && i !== -1) {
    if (board[i][col] === player) {
      i++;
    } else {
      i = -1;
    }
  }

  if (i >= board.length) return player;

  i = 0;

  // Check current row
  while (i < board.length && i !== -1) {
    if (board[row][i] === player) {
      i++;
    } else {
      i = -1;
    }
  }

  if (i >= board.length) return player;

  if (!((col === 2 && row === 0) || (col === 0 && row === 2) || col === row)) return null;

  i = 0;

  // Check diagonal 1
  while (i < board.length && i !== -1) {
    if (board[i][i] === player) {
      i++;
    } else {
      i = -1;
    }
  }

  if (i >= board.length) return player;

  i = 0;

  // Check diagonal 2
  while (i < board.length && i !== -1) {
    if (board[i][board.length - 1 - i] === player) {
      i++;
    } else {
      i = -1;
    }
  }

  if (i >= board.length) return player;

  return null;
}

/**
 * Determina si hay un empate.
 * @param {Array} board - El tablero del juego.
 * @returns {boolean} - true si hay un empate, false de lo contrario.
 */
export function checkTie(board) {
  return board.every((row) => row.every((cell) => cell !== null));
}
