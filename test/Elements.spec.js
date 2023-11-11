import { assert } from "chai";
import { describe, it } from "mocha";
import { Element, Text, Button } from "../src/Elements.js";

import { JSDOM } from "jsdom";

const { window } = new JSDOM();
const document = window.document;

describe("Element", () => {
  it("should show the element", () => {
    const element = new Element(document.createElement("div"));

    element.show();
    assert.isFalse(element.element.classList.contains("hide"));
  });

  it("should hide the element", () => {
    const element = new Element(document.createElement("div"));

    element.hide();
    assert.isTrue(element.element.classList.contains("hide"));
  });
});

describe("Text", () => {
  it("should set text in the element", () => {
    const textElement = new Text(document.createElement("div"));

    textElement.setText("Hello, World!");
    assert.strictEqual(textElement.element.innerHTML, "Hello, World!");
  });
});

describe("Button", () => {
  it("should call the onClick function when clicked", (done) => {
    const buttonElement = new Button(document.createElement("button"));

    buttonElement.addOnClick(() => {
      assert.isTrue(true); // This assertion ensures that the onClick function is called
      done();
    });

    // Simulate a click on the button
    buttonElement.element.click();
  });
});
