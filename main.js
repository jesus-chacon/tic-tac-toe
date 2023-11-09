import "./styles.scss";

const getById = (id) => {
  return document.getElementById(id);
};

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
        table.rows[i].cells[j].classList.remove("winner");
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

  getById(`next-player-${currentPlayer}`).addClass("hide");
  getById(`next-player-${player}`).classList.remove("hide");

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
    document.getElementById("x-wins").innerHTML = currentGameState.xWins;
  } else {
    currentGameState.oWins++;
    document.getElementById("o-wins").innerHTML = currentGameState.yWins;
  }
}

// Función para manejar el evento onClick
function onClickPosition() {
  const row = this.parentNode.rowIndex;
  const col = this.cellIndex;
  const board = currentGameState.board;

  // Puede jugar y está libre la posición
  if (board[row][col] === null && currentGameState.winner === null) {
    const currentPlayer = currentGameState.player.toString();

    this.innerHTML = currentGameState.player;

    currentGameState.board[row][col] = currentPlayer;
    const winner = findWinner(currentPlayer, row, col);

    // Check ganador, empate o continuar
    if (winner) {
      this.classList.add("winner");
      updateWinner(winner);

      alert(`${winner} WINS!!!`);
    } else if (checkTie(currentGameState.board)) {
      alert("TIE!!");
    } else {
      updateNextPlayer(currentGameState.player);
    }
  }
}

// Función para reiniciar el juego
function reset() {
  currentGameState = {
    ...currentGameState,
    ...getBaseState(),
  };

  setupBoard();
  updateNextPlayer("o");
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

let currentGameState = {
  ...getBaseState(),
  xWins: 0,
  yWins: 0,
};

setupBoard();

// Añadir botón "Nuevo juego"
const newGameButton = document.createElement("button");

newGameButton.innerHTML = "Nuevo juego";
// Añadir evento onClick al botón "Nuevo juego"
newGameButton.onclick = reset;

document.body.prepend(newGameButton);
