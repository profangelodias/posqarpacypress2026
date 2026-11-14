import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from "../../support/pages/CartPage";
import ProductsPage from "../../support/pages/ProductsPage";

Given("que acessei o carrinho usando o perfil {string} com os produtos {string} e {string}", (perfil, prod1, prod2) => {
  // O Custom Command resolve tudo em 1 linha sem precisar de import de Login/Actions!
  cy.acessarCarrinhoComProdutos(perfil, [prod1, prod2]);
});

Then("devo ver os produtos {string} e {string} listados no carrinho", (prod1, prod2) => {
  CartPage.validarProdutoPresenteNoCarrinho(prod1);
  CartPage.validarProdutoPresenteNoCarrinho(prod2);
});

When("removo o produto {string} dentro do carrinho", (nomeProduto) => {
  CartPage.removerProdutoDoCarrinho(nomeProduto);
});

Then("o produto {string} não deve mais existir no carrinho", (nomeProduto) => {
  CartPage.validarProdutoAusenteNoCarrinho(nomeProduto);
});

Then("deve restar apenas {int} item listado no carrinho", (quantidadeEsperada) => {
  CartPage.validarQuantidadeDeItensListados(quantidadeEsperada);
});

When("clico no botão continuar comprando no carrinho", () => {
  CartPage.clicarContinuarComprando();
});

// Nota: Se o step "Então devo ser redirecionado para a vitrine de produtos" já existir
// globalmente no loginSteps, o Cucumber já o reaproveita automaticamente!
// Caso queira usar um específico com a Page:
Then("devo voltar para a vitrine de produtos", () => {
  ProductsPage.validarVitrineVisivel();
});