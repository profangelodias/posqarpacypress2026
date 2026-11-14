import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial do SauceDemo", () => {
  cy.visit("/");
});

When("realizo login usando o usuário {string} e a senha {string}", (usuario, senha) => {
  cy.get('[data-test="username"]').clear().type(usuario);
  cy.get('[data-test="password"]').clear().type(senha);
  cy.get('[data-test="login-button"]').click();
});

//Usuário vazio
// When("realizo login usando o usuário {string} e a senha {string}", (usuario, senha) => {
//   cy.get('[data-test="username"]').clear();
//   if (usuario) {
//     cy.get('[data-test="username"]').type(usuario);
//   }

//   cy.get('[data-test="password"]').clear();
//   if (senha) {
//     cy.get('[data-test="password"]').type(senha);
//   }

//   cy.get('[data-test="login-button"]').click();
// });

Then("devo ser redirecionado para a vitrine de produtos", () => {
  cy.url().should("include", "/inventory.html");
  cy.get('[data-test="title"]').should("be.visible").and("have.text", "Products");
});

Then("devo ver a mensagem de erro {string}", (mensagemEsperada) => {
  cy.get('[data-test="error"]')
    .should("be.visible")
    .and("contain.text", mensagemEsperada);
});