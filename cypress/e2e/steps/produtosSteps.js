import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/pages/LoginPage";
import ProductsPage from "../../support/pages/ProductsPage";
// import AuthActions from "../../support/actions/authActions";

Given("que estou logado na vitrine de produtos sem padrao com o perfil {string}", (perfil) => {
  // DOR 1: Repetindo todos os cy.get() de login que já tínhamos feito no outro arquivo!
  cy.visit("/");
  cy.fixture("usuarios").then((massa) => {
    cy.get('[data-test="username"]').type(massa[perfil].usuario);
    cy.get('[data-test="password"]').type(massa[perfil].senha);
    cy.get('[data-test="login-button"]').click();
  });
});


Given("que estou logado na vitrine de produtos com o perfil {string}", (perfil) => {
 
//   AuthActions.realizarLoginRapidoComFixture(perfil);
    // cy.login(perfil); // Usando o comando customizado 'login' definido em cypress/support/commands.js
    cy.login_valido(); // Usando o comando customizado 'login_valido' definido em cypress/support/commands.js
});

// Nos passos de interação e validação da tela, o Page Object brilha!
// Repare como não existe NENHUM cy.get() dentro do arquivo de Steps:

When("adiciono o produto {string} na vitrine", (nomeProduto) => {
  ProductsPage.clicarBotaoDoProduto(nomeProduto);
});

When("removo o produto {string} na vitrine", (nomeProduto) => {
  ProductsPage.clicarBotaoDoProduto(nomeProduto);
});

When("ordeno os produtos pela opção {string}", (opcaoOrdenacao) => {
  ProductsPage.selecionarOrdenacao(opcaoOrdenacao);
});

Then("o badge do carrinho deve mostrar {string}", (quantidade) => {
  ProductsPage.validarQuantidadeCarrinho(quantidade);
});

Then("o badge do carrinho não deve existir", () => {
  ProductsPage.validarCarrinhoVazio();
});

Then("o primeiro produto da vitrine deve ser {string}", (produtoEsperado) => {
  ProductsPage.validarPrimeiroProdutoDaLista(produtoEsperado);
});