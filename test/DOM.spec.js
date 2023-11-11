import { expect } from "chai";
import { describe, it } from "mocha";
import { JSDOM } from "jsdom";

// Importa la clase DOMUtils
import DOM from "../src/DOM.js";

// Configura el entorno de DOM usando JSDOM
const { window } = new JSDOM();
const document = window.document;

const DOMUtils = new DOM(document);

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
});
