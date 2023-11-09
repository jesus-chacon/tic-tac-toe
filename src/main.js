import "./scss/main.scss";

import { PLAYER_O, PLAYER_X } from "./constants.js";

import DOMUtils from "./DOM.js";
import { getSvgHTML, getBaseState, findWinner, checkTie, nextPlayer } from "./utils.js";

let currentGameState = null;

document.addEventListener("DOMContentLoaded", () => {
  console.log("Init game");

  init();
});

/**
 * Rellena el tablero en blanco y lo inicializa si es la primera vez.
 */
function setupBoard() {
  console.log("Setup board");
  const boardLength = currentGameState.board.length;
  const table = DOMUtils.getById("game-table");
  const isSetup = table.rows.length === 0;

  for (let i = 0; i < boardLength; i++) {
    if (isSetup) {
      table.insertRow(i);
    }

    for (let j = 0; j < boardLength; j++) {
      if (isSetup) {
        let cell = table.rows[i].insertCell(j);

        cell.onclick = onClickPosition;
        cell.innerHTML = "";
      } else {
        table.rows[i].cells[j].innerHTML = "";
        table.rows[i].cells[j].classList.remove("winner", `cell-${PLAYER_X}`, `cell-${PLAYER_O}`);
      }
    }
  }
}

/**
 * Actualiza el jugador siguiente.
 * @param {string} currentPlayer - El jugador actual.
 */
function updateNextPlayer(currentPlayer) {
  const player = nextPlayer(currentPlayer);

  DOMUtils.hideById(`next-player-${currentPlayer}`);
  DOMUtils.showById(`next-player-${player}`);

  currentGameState.player = player;
}

/**
 * Actualiza al ganador.
 * @param {string} winner - El jugador ganador.
 */
function updateWinner(winner) {
  if (winner === PLAYER_X) {
    currentGameState.xWins++;
    DOMUtils.getById("x-wins").innerHTML = currentGameState.xWins;
  } else {
    currentGameState.oWins++;
    DOMUtils.getById("o-wins").innerHTML = currentGameState.oWins;
  }

  DOMUtils.showById("reset-game");
}

/**
 * Maneja el evento onClick.
 */
function onClickPosition() {
  const row = this.parentNode.rowIndex;
  const col = this.cellIndex;
  const board = currentGameState.board;

  if (board[row][col] === null && currentGameState.winner === null) {
    const currentPlayer = currentGameState.player.toString();

    this.innerHTML = getSvgHTML(currentPlayer);
    this.classList.add(`cell-${currentPlayer}`);

    currentGameState.board[row][col] = currentPlayer;
    const winner = findWinner(currentGameState.board, currentPlayer, row, col);

    if (winner) {
      this.classList.add("winner");
      updateWinner(winner);

      alert(`${winner} WINS!!!`);
    } else if (checkTie(currentGameState.board)) {
      alert("Empate !!");
      DOMUtils.showById("reset-game");
    } else {
      updateNextPlayer(currentGameState.player);
    }
  }
}

/**
 * Reinicia el juego.
 */
function reset() {
  console.log("Reset Game");
  currentGameState = {
    ...currentGameState,
    ...getBaseState(),
  };

  setupBoard();
  updateNextPlayer(PLAYER_O);
  DOMUtils.hideById("reset-game");
}

/**
 * Inicializa el juego.
 */
const init = () => {
  currentGameState = {
    ...getBaseState(),
    xWins: 0,
    oWins: 0,
  };

  setupBoard();
  updateNextPlayer(PLAYER_O);
  DOMUtils.getById("reset-game").onclick = reset;
  DOMUtils.hideById("reset-game");
};
