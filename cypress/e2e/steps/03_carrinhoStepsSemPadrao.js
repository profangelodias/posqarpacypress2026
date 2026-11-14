import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acessei o carrinho sem padrao usando o perfil {string} com os produtos {string} e {string}", (perfil, prod1, prod2) => {
  // DOR 1: Olha o tamanho desse Given repetindo Login + Vitrine + Navegação tudo chumbado!
  cy.visit("/");
  cy.fixture("usuarios").then((massa) => {
    cy.get('[data-test="username"]').type(massa[perfil].usuario);
    cy.get('[data-test="password"]').type(massa[perfil].senha);
    cy.get('[data-test="login-button"]').click();
  });

  // Adicionando os 2 produtos manualmente com seletores expostos
  cy.contains('[data-test="inventory-item"]', prod1).find("button").click();
  cy.contains('[data-test="inventory-item"]', prod2).find("button").click();

  // Indo para o carrinho
  cy.get('[data-test="shopping-cart-link"]').click();
});

Then("devo ver os produtos {string} e {string} listados no carrinho sem padrao", (prod1, prod2) => {
  cy.get('[data-test="title"]').should("have.text", "Your Cart");
  cy.contains('[data-test="inventory-item-name"]', prod1).should("be.visible");
  cy.contains('[data-test="inventory-item-name"]', prod2).should("be.visible");
});

When("removo o produto {string} dentro do carrinho sem padrao", (nomeProduto) => {
  // DOR 2: Seletores internos do carrinho misturados no Step
  cy.contains('[data-test="inventory-item"]', nomeProduto)
    .find("button")
    .click();
});

Then("o produto {string} não deve mais existir no carrinho sem padrao", (nomeProduto) => {
  cy.contains('[data-test="inventory-item-name"]', nomeProduto).should("not.exist");
});

Then("deve restar apenas {int} item listado no carrinho sem padrao", (quantidadeEsperada) => {
  cy.get('[data-test="inventory-item"]').should("have.length", quantidadeEsperada);
});

When("clico no botão continuar comprando no carrinho sem padrao", () => {
  cy.get('[data-test="continue-shopping"]').click();
});

Then("devo voltar para a vitrine de produtos sem padrao", () => {
  cy.get('[data-test="title"]').should("have.text", "Products");
});