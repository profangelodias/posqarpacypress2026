import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/pages/LoginPage";
import ProductsPage from "../../support/pages/ProductsPage";
import AuthActions from "../../support/actions/authActions";

Given("que estou logado na vitrine de produtos com o perfil {string}", (perfil) => {
  
  // =========================================================================
  // OPÇÃO 1: USANDO APENAS PAGE OBJECTS (Sem precisar de App Actions)
  // =========================================================================
  /*
  LoginPage.acessarPagina();
  cy.fixture("usuarios").then((massa) => {
    LoginPage.preencherCredenciais(massa[perfil].usuario, massa[perfil].senha);
    LoginPage.clicarEntrar();
  });
  */

  // =========================================================================
  // OPÇÃO 2: USANDO APP ACTIONS (Mais enxuto para pré-condições de negócio!)
  // =========================================================================
  AuthActions.realizarLoginRapidoComFixture(perfil);
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