/// <reference types="cypress" />

describe("ProductDetails", () => {
  beforeEach(() => {
    cy.intercept("/products/*", {
      fixture: "error.json",
    }).as("getError");
    cy.intercept("GET", "/products/MLA14186171", {
      fixture: "MLA14186171.json",
    }).as("getProduct");
  });

  it("All elements are present", () => {
    cy.visit("http://localhost:3000/");
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

  it("View more details shouldn't be visible", () => {
    cy.intercept("GET", "/products/MLA14186171", {
      fixture: "MLA14186171-noExtraDetails.json",
    }).as("getProductNoDetails");
    cy.visit("http://localhost:3000/");
    cy.get("form").within(() => {
      cy.get("input").type("MLA14186171");
      cy.get("button").click();
      cy.wait(["@getProductNoDetails"]);
    });
    cy.get("button")
      .contains(/Ver más detalles/i)
      .should("not.exist");
  });

  it("Should display product details", () => {
    cy.intercept("GET", "/products/MLA14186171", {
      fixture: "MLA14186171-noExtraThumbnails.json",
    }).as("getProductNoExtraThumbnails");
    cy.visit("http://localhost:3000/");
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

  it("Should display error", () => {
    cy.visit("http://localhost:3000/");
    cy.get("form").within(() => {
      cy.get("input").type("AGUANTE BOQUITA");
      cy.get("button").click();
      cy.wait(["@getError"]);
    });
    cy.get("p").should("have.text", "No se encontró el producto.");
  });
});
