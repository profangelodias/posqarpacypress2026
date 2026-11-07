/// <reference types="cypress" />
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

Given('que eu acesse a página de solicitações de crédito', () => {
  cy.visit('/');
});

When('eu preencher os campos obrigatórios com informações válidas', () => {
  cy.get('#creditForm').within(() => {
    cy.get('#nome').type('Maria Silva');
    cy.get('#email').type('maria.silva@example.com');
    cy.get('#renda').type('3000');
    cy.get('#cpf').type('529.982.247-25');
    cy.get('#credito').type('5000');
  });
});