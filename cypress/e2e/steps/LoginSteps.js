import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial do SauceDemo", () => {
  cy.visit("/");
});

When("realizo login usando o usuário {string} e a senha {string}", (username, password) => {
  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
});

Then("devo ser redirecionado para a vitrine de produtos", () => {
  cy.url().should("include", "/inventory.html");
  cy.get(".title").should("contain.text", "Products");
});

Then("devo ver a mensagem de erro {string}", (mensagemEsperada) => {
  cy.get('[data-test="error"]')
    .should("be.visible")
    .and("contain.text", mensagemEsperada);
});

When("realizo login usando o perfil {string} da fixture", (perfil) => {
    cy.fixture("usuarios").then((massa) => {
        const usuario = massa[perfil];
        cy.get("#user-name").type(usuario.usuario);
        cy.get("#password").type(usuario.senha);
        cy.get("#login-button").click();
    });
});