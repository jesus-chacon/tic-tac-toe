import { expect } from "chai";
import { describe, it, beforeEach, afterEach } from "mocha";

// Importa las funciones que deseas probar
import { getBaseState, nextPlayer, checkTie, findWinner } from "../src/utils.js";

describe("Tic Tac Toe Game", () => {
  let gameState;

  beforeEach(() => {
    // Configuración inicial antes de cada prueba
    gameState = getBaseState();
  });

  afterEach(() => {
    // Limpiar después de cada prueba
    gameState = null;
  });

  describe("getBaseState", () => {
    it("should return the base game state", () => {
      const expectedState = {
        player: "x",
        winner: null,
        board: [
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ],
      };

      expect(getBaseState()).to.deep.equal(expectedState);
    });
  });

  describe("nextPlayer", () => {
    it("should switch to the next player", () => {
      expect(nextPlayer(gameState.player)).to.equal("o");
    });
  });

  describe("checkTie", () => {
    it("should return false when there are empty cells", () => {
      gameState.board = [
        ["x", "o", null],
        ["o", "x", "x"],
        ["o", "x", "o"],
      ];

      expect(checkTie(gameState.board)).to.be.false;
    });

    it("should return true when all cells are filled", () => {
      gameState.board = [
        ["x", "o", "x"],
        ["o", "x", "x"],
        ["o", "x", "o"],
      ];

      expect(checkTie(gameState.board)).to.be.true;
    });
  });

  describe("findWinner", () => {
    it("should return the player when there is a win in the current column", () => {
      const board = [
        ["x", "o", "x"],
        ["x", "o", "x"],
        ["x", "o", null],
      ];

      expect(findWinner(board, "x", 2, 0)).to.equal("x");
    });

    it("should return the player when there is a win in the current row", () => {
      const board = [
        ["o", "o", "o"],
        ["x", "x", null],
        [null, "x", "o"],
      ];

      expect(findWinner(board, "o", 0, 0)).to.equal("o");
    });

    it("should return the player when there is a win in the diagonal", () => {
      const board = [
        ["x", "o", "o"],
        ["x", "x", null],
        ["o", "x", "x"],
      ];

      expect(findWinner(board, "x", 2, 2)).to.equal("x");
    });

    it("should return the player when there is a win in the diagonal 2", () => {
      const board = [
        ["x", "o", "o"],
        ["x", "o", null],
        ["o", "x", "x"],
      ];

      expect(findWinner(board, "o", 1, 1)).to.equal("o");
    });

    it("should return null when there is no win", () => {
      const board = [
        ["o", "o", "x"],
        ["x", "x", null],
        [null, "x", "o"],
      ];

      expect(findWinner(board, "x", 0, 2)).to.be.null;
    });
  });
});
