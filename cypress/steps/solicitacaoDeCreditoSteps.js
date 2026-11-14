/// <reference types="cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário está na página de solicitação de crédito", () => {
  cy.visit("/solicitacao-credito");
});

Then("o usuário deve ver o formulário de solicitação de crédito", () => {
  cy.get("form#solicitacao-credito-form").should("be.visible");
});
