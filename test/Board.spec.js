import { assert } from "chai";
import { describe, it } from "mocha";

import Board from "../src/Board.js";

describe("Board", () => {
  describe("#setPlayer()", () => {
    it("should set the player in the specified position", () => {
      const board = new Board();
      board.setPlayer("X", 1, 1);
      assert.strictEqual(board.board[1][1], "X");
    });
  });

  describe("#getWinner()", () => {
    it("should return the winner if there is one in the current game state", () => {
      const board = new Board();

      board.setPlayer("X", 0, 0);
      board.setPlayer("X", 0, 1);
      board.setPlayer("X", 0, 2);

      assert.strictEqual(board.getWinner("X", 0, 2), "X");
    });

    it("should return null if there is no winner", () => {
      const board = new Board();
      assert.isNull(board.getWinner("X", 0, 2));
    });
  });

  describe("#checkTie()", () => {
    it("should return true if the game is a tie", () => {
      const board = new Board();

      board.setPlayer("X", 0, 0);
      board.setPlayer("O", 0, 1);
      board.setPlayer("X", 0, 2);

      board.setPlayer("O", 1, 2);
      board.setPlayer("X", 1, 1);
      board.setPlayer("O", 2, 0);

      board.setPlayer("X", 1, 0);
      board.setPlayer("O", 2, 2);
      board.setPlayer("X", 2, 1);

      assert.isTrue(board.checkTie());
    });

    it("should return false if the game is not a tie", () => {
      const board = new Board();

      board.setPlayer("X", 0, 0);
      board.setPlayer("X", 0, 1);
      board.setPlayer("X", 0, 2);

      assert.isFalse(board.checkTie());
    });
  });

  describe("#isValidPos()", () => {
    it("should return true if the position is valid", () => {
      const board = new Board();
      assert.isTrue(board.isValidPos(1, 1));
    });

    it("should return false if the position is not valid", () => {
      const board = new Board();
      board.setPlayer("X", 1, 1);
      assert.isFalse(board.isValidPos(1, 1));
    });
  });

  describe("#reset()", () => {
    it("should reset the board to its initial state", () => {
      const board = new Board();
      board.setPlayer("X", 1, 1);
      board.reset();
      assert.deepStrictEqual(board.board, [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]);
    });
  });
});
