import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Given("que estou na página inicial do SauceDemo", () => {
//   cy.visit("/");
// });

When("realizo login usando o perfil {string} da fixture", (perfil) => {
  cy.fixture("usuarios").then((massa) => {
    const dados = massa[perfil];
    cy.get('[data-test="username"]').clear().type(dados.usuario);
    cy.get('[data-test="password"]').clear().type(dados.senha);
    cy.get('[data-test="login-button"]').click();
  });
});

//Para usuário "vazio"
// When("realizo login usando o perfil {string} da fixture", (perfil) => {
//   cy.fixture("usuarios").then((massa) => {
//     const dados = massa[perfil];

//     cy.get('[data-test="username"]').clear();
//     if (dados.usuario) {
//       cy.get('[data-test="username"]').type(dados.usuario);
//     }

//     cy.get('[data-test="password"]').clear();
//     if (dados.senha) {
//       cy.get('[data-test="password"]').type(dados.senha);
//     }

//     cy.get('[data-test="login-button"]').click();
//   });
// });

// Then("devo ser redirecionado para a vitrine de produtos", () => {
//   cy.get('[data-test="title"]').should("have.text", "Products");
// });

Then("devo ver a mensagem de erro correspondente ao perfil {string}", (perfil) => {
  cy.fixture("usuarios").then((massa) => {
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain.text", massa[perfil].msgErro);
  });
});