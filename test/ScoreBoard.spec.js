import { assert } from "chai";
import { describe, it, beforeEach } from "mocha";
import { Text } from "../src/Elements.js";
import ScoreBoard from "../src/ScoreBoard.js";

import { JSDOM } from "jsdom";

const { window } = new JSDOM();
const document = window.document;

describe("ScoreBoard", () => {
  let xTextElement, oTextElement, scoreBoard;

  beforeEach(() => {
    xTextElement = new Text(document.createElement("div"));
    oTextElement = new Text(document.createElement("div"));
    scoreBoard = new ScoreBoard(xTextElement, oTextElement);
  });

  it("should initialize with zero wins for both players", () => {
    assert.strictEqual(scoreBoard.xWins, 0);
    assert.strictEqual(scoreBoard.oWins, 0);
  });

  it("should increment the win count for player O when O wins", () => {
    scoreBoard.winner("O");
    assert.strictEqual(scoreBoard.xWins, 0);
    assert.strictEqual(scoreBoard.oWins, 1);
  });

  it("should reset the wins when reset is called", () => {
    scoreBoard.winner("X");
    scoreBoard.reset();
    assert.strictEqual(scoreBoard.xWins, 0);
    assert.strictEqual(scoreBoard.oWins, 0);
    assert.strictEqual(xTextElement.element.innerHTML, "0");
    assert.strictEqual(oTextElement.element.innerHTML, "0");
  });
});
