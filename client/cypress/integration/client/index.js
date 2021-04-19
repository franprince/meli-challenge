/// <reference types="cypress" />

describe("ProductDetails", () => {
  beforeEach(() => {
    cy.intercept("/products/*", {
      fixture: "error.json",
      statusCode: 404,
    }).as("getError");
    cy.intercept("GET", "/products/MLA14186171", {
      fixture: "MLA14186171.json",
    }).as("getProduct");
    cy.visit("http://localhost:3000/");
  });

  it("Checks all elements are present", () => {
    cy.get("form").within(() => {
      cy.get("input").type("MLA14186171");
      cy.get("button").click();
      cy.wait(["@getProduct"]);
    });
    cy.get("img").each(($el) => {
      cy.wrap($el).should("have.attr", "alt");
    });
    cy.get("button")
      .contains(/Ver más detalles/i)
      .should("to.be.visible");
  });

  it("Shouldn't show the 'more details' button", () => {
    cy.intercept("GET", "/products/MLA14186171", {
      fixture: "MLA14186171-noExtraDetails.json",
    }).as("getProductNoDetails");
    cy.get("form").within(() => {
      cy.get("input").type("MLA14186171");
      cy.get("button").click();
      cy.wait(["@getProductNoDetails"]);
    });
    cy.get("button")
      .contains(/Ver más detalles/i)
      .should("not.exist");
  });

  it("Should display more product details", () => {
    cy.intercept("GET", "/products/MLA14186171", {
      fixture: "MLA14186171-noExtraThumbnails.json",
    }).as("getProductNoExtraThumbnails");
    cy.get("form").within(() => {
      cy.get("input").type("MLA14186171");
      cy.get("button").click();
      cy.wait(["@getProductNoExtraThumbnails"]);
    });
    cy.get("li")
      .its("length")
      .then((size) => {
        cy.get("button")
          .contains(/ver más detalles/i)
          .click();
        cy.get("li").its("length").should("be.greaterThan", size);
      });
  });

  it("Shows error message", () => {
    cy.get("form").within(() => {
      cy.get("input").type("Boca Juniors");
      cy.get("button").click();
      cy.wait(["@getError"]);
    });
    cy.get("p").should("have.text", "No se encontró el producto.");
  });
});
