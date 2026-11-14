import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou logado na vitrine de produtos sem padrao com o perfil {string}", (perfil) => {
  // DOR 1: Repetindo todos os cy.get() de login que já tínhamos feito no outro arquivo!
  cy.visit("/");
  cy.fixture("usuarios").then((massa) => {
    cy.get('[data-test="username"]').type(massa[perfil].usuario);
    cy.get('[data-test="password"]').type(massa[perfil].senha);
    cy.get('[data-test="login-button"]').click();
  });
});

When("adiciono o produto {string} na vitrine sem padrao", (nomeProduto) => {
  // DOR 2: Seletores complexos misturados com a lógica do Cucumber
  cy.contains('[data-test="inventory-item"]', nomeProduto)
    .find('button')
    .click();
});

When("removo o produto {string} na vitrine sem padrao", (nomeProduto) => {
  // DOR 3: Repetindo exatamente a mesma busca de seletor!
  cy.contains('[data-test="inventory-item"]', nomeProduto)
    .find('button')
    .click();
});

When("ordeno os produtos na vitrine sem padrao pela opção {string}", (opcaoOrdenacao) => {
  cy.get('[data-test="product-sort-container"]').select(opcaoOrdenacao);
});

Then("o badge do carrinho na vitrine sem padrao deve mostrar {string}", (quantidade) => {
  cy.get('[data-test="shopping-cart-badge"]')
    .should("be.visible")
    .and("have.text", quantidade);
});

Then("o badge do carrinho na vitrine sem padrao não deve existir", () => {
  cy.get('[data-test="shopping-cart-badge"]').should("not.exist");
});

Then("o primeiro produto da vitrine sem padrao deve ser {string}", (produtoEsperado) => {
  cy.get('[data-test="inventory-item-name"]')
    .first()
    .should("have.text", produtoEsperado);
});