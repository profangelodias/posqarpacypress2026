// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import EcommerceActions from "./actions/ecommerceActions";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

/**
 * Custom Command Global: cy.acessarCarrinhoComProdutos(perfil, arrayDeProdutos)
 * Faz o login, adiciona qualquer lista de produtos e já abre a tela do carrinho!
 * Não precisa de 'import' nos arquivos .steps.js!
 */
Cypress.Commands.add("acessarCarrinhoComProdutos", (perfil, listaDeProdutos) => {
  EcommerceActions.realizarLoginComPerfil(perfil);
  
  listaDeProdutos.forEach((produto) => {
    ProductsPage.clicarBotaoDoProduto(produto);
  });

  ProductsPage.acessarCarrinho();
  CartPage.validarTelaCarrinhoVisivel();
});