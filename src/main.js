import "./scss/main.scss";

import DOMUtils from "./DOM.js";

import Table from "./Table";
import Game from "./Game";
import ScoreBoard from "./ScoreBoard";
import StylesManager from "./Styles";
import { Element, Button, Text } from "./Elements";

document.addEventListener("DOMContentLoaded", () => {
  const DOM = new DOMUtils(document);
  const table = new Table(DOM.getById("game-table"));
  const resetButton = new Button(DOM.getById("reset-game"));
  const nextPlayerX = new Element(DOM.getById("next-player-x"));
  const nextPlayerO = new Element(DOM.getById("next-player-o"));
  const scoreBoard = new ScoreBoard(new Text(DOM.getById("x-wins")), new Text(DOM.getById("o-wins")));
  const stylesManager = new StylesManager(document, new Button(DOM.getById("change-style")));

  const game = new Game(table, resetButton, nextPlayerX, nextPlayerO, scoreBoard, stylesManager);

  game.initGame();
});
