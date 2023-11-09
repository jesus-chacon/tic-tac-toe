import { expect } from "chai";
import { describe, it } from "mocha";
import { JSDOM } from "jsdom";

// Importa la clase DOMUtils
import DOMUtils from "../src/DOM.js";

// Configura el entorno de DOM usando JSDOM
const { window } = new JSDOM();
global.document = window.document;

describe("DOMUtils", () => {
  describe("getById", () => {
    it("should return the element with the specified ID", () => {
      const div = document.createElement("div");
      div.id = "test-element";
      document.body.appendChild(div);

      const result = DOMUtils.getById("test-element");

      expect(result).to.equal(div);
    });

    it("should throw an error if the element with the specified ID does not exist", () => {
      expect(() => DOMUtils.getById("nonexistent-element")).to.throw(Error);
    });
  });

  describe("showById", () => {
    it('should remove the "hide" class from the element with the specified ID', () => {
      const div = document.createElement("div");
      div.id = "test-show-element";
      div.classList.add("hide");
      document.body.appendChild(div);

      DOMUtils.showById("test-show-element");

      expect(div.classList.contains("hide")).to.be.false;
    });
  });

  describe("hideById", () => {
    it('should add the "hide" class to the element with the specified ID', () => {
      const div = document.createElement("div");
      div.id = "test-hide-element";
      document.body.appendChild(div);

      DOMUtils.hideById("test-hide-element");

      expect(div.classList.contains("hide")).to.be.true;
    });
  });
});
