import "./scss/main.scss";

const getById = (id) => {
  console.log(id);
  return document.getElementById(id);
};

const showById = (id) => {
  getById(id).classList.remove("hide");
};

const hideById = (id) => {
  getById(id).classList.add("hide");
};
const getSvgHTML = (type) => `
<svg width="50" height="50" version="2.0" class="icon-${type}">
  <use href="#icon-${type}" />
</svg>
`;

const getBaseState = () => ({
  player: "x",
  winner: null,
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
});

// Función para rellenar el tablero en blanco
function setupBoard() {
  console.log("Setup board");
  const boardLength = currentGameState.board.length;
  const table = document.getElementById("game-table");
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
        table.rows[i].cells[j].classList.remove("winner", "cell-x", "cell-o");
      }
    }
  }
}

// Función para determinar qué jugador debe ser el siguiente
function nextPlayer(currentPlayer) {
  if (currentPlayer === "x") {
    return "o";
  } else {
    return "x";
  }
}

// Función para actualizar el jugador siguiente
function updateNextPlayer(currentPlayer) {
  const player = nextPlayer(currentPlayer);

  hideById(`next-player-${currentPlayer}`);
  showById(`next-player-${player}`);

  currentGameState.player = player;
}

// Función para determinar si hay un ganador en el juego actual
function findWinner(player, row, col) {
  // Si ha ganado alguien lo sabremos por que tiene que estar relacionado con la posición en la que ha clicado
  // de esta forma nos ahorramos tantos bucles
  const board = currentGameState.board;
  const boardLength = currentGameState.board.length;

  let i = 0;

  // Check current column
  while (i < boardLength && i !== -1) {
    if (board[i][col] === player) {
      i++;
    } else {
      i = -1;
    }
  }

  // Check winner
  if (i >= boardLength) return player;

  i = 0;

  // Check current row
  while (i < boardLength && i !== -1) {
    if (board[row][i] === player) {
      i++;
    } else {
      i = -1;
    }
  }

  // Check winner
  if (i >= boardLength) return player;

  // Check diagonal
  if (col !== row) return null;

  i = 0;

  // Check current row
  while (i < boardLength && i !== -1) {
    if (board[i][i] === player) {
      i++;
    } else {
      i = -1;
    }
  }

  // Check winner
  if (i >= boardLength) return player;

  return null;
}

function updateWinner(winner) {
  if (winner === "x") {
    currentGameState.xWins++;
    getById("x-wins").innerHTML = currentGameState.xWins;
  } else {
    currentGameState.oWins++;
    getById("o-wins").innerHTML = currentGameState.yWins;
  }

  showById("reset-game");
}

// Función para manejar el evento onClick
function onClickPosition() {
  const row = this.parentNode.rowIndex;
  const col = this.cellIndex;
  const board = currentGameState.board;

  // Puede jugar y está libre la posición
  if (board[row][col] === null && currentGameState.winner === null) {
    const currentPlayer = currentGameState.player.toString();

    this.innerHTML = getSvgHTML(currentPlayer);
    this.classList.add(`cell-${currentPlayer}`);

    currentGameState.board[row][col] = currentPlayer;
    const winner = findWinner(currentPlayer, row, col);

    // Check ganador, empate o continuar
    if (winner) {
      this.classList.add("winner");
      updateWinner(winner);

      alert(`${winner} WINS!!!`);
    } else if (checkTie(currentGameState.board)) {
      alert("Empate !!");
      showById("reset-game");
    } else {
      updateNextPlayer(currentGameState.player);
    }
  }
}

// Función para reiniciar el juego
function reset() {
  console.log("Reset Game");
  currentGameState = {
    ...currentGameState,
    ...getBaseState(),
  };

  setupBoard();
  updateNextPlayer("o");
  hideById("reset-game");
}

// Función para determinar si hay un empate
function checkTie(state) {
  for (let i = 0; i < state.length; i++) {
    for (let j = 0; j < state[i].length; j++) {
      if (state[i][j] === null) {
        return false;
      }
    }
  }

  return true;
}

const init = () => {
  currentGameState = {
    ...getBaseState(),
    xWins: 0,
    yWins: 0,
  };

  setupBoard();
  updateNextPlayer("o");
  getById("reset-game").onclick = reset;
  hideById("reset-game");
};

let currentGameState = null;

document.addEventListener("DOMContentLoaded", () => {
  console.log("Init game");

  init();
});
