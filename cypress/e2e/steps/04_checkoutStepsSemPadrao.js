import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na tela de checkout sem padrao com o produto {string}", (produto) => {
  // DOR 1: Repetindo Login + Vitrine + Carrinho + Botão Checkout tudo na mão!
  cy.visit("/");
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();

  cy.contains('[data-test="inventory-item"]', produto).find("button").click();
  cy.get('[data-test="shopping-cart-link"]').click();
  cy.get('[data-test="checkout"]').click();
});

When("preencho o checkout sem padrao com nome {string}, sobrenome {string} e cep {string}", (nome, sobrenome, cep) => {
  // DOR 2: Seletores do formulário de checkout espalhados nos steps e dados fixos
  cy.get('[data-test="firstName"]').type(nome);
  cy.get('[data-test="lastName"]').type(sobrenome);
  cy.get('[data-test="postalCode"]').type(cep);
  cy.get('[data-test="continue"]').click();
});

When("confirmo a finalização do pedido sem padrao", () => {
  cy.get('[data-test="finish"]').click();
});

Then("devo ver a mensagem de confirmação sem padrao {string}", (msgEsperada) => {
  cy.get('[data-test="complete-header"]')
    .should("be.visible")
    .and("have.text", msgEsperada);
});

When("tento continuar o checkout sem padrao preenchendo apenas nome {string} e sobrenome {string}", (nome, sobrenome) => {
  cy.get('[data-test="firstName"]').type(nome);
  cy.get('[data-test="lastName"]').type(sobrenome);
  cy.get('[data-test="continue"]').click();
});

Then("devo ver o erro no checkout sem padrao {string}", (erroEsperado) => {
  cy.get('[data-test="error"]')
    .should("be.visible")
    .and("contain.text", erroEsperado);
});

When("clico em cancelar na tela de resumo sem padrao", () => {
  cy.get('[data-test="cancel"]').click();
});

Then("devo voltar para a vitrine após cancelar sem padrao", () => {
  cy.get('[data-test="title"]').should("have.text", "Products");
});