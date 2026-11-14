// ATENÇÃO: Comentar 02_produtosSteps.js para descomentar esse aqui!

// import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// import ProductsPage from "../../support/pages/ProductsPage";
// import EcommerceActions from "../../support/actions/ecommerceActions";

// Given("que estou logado na vitrine de produtos com o perfil {string}", (perfil) => {
//   // Chama a App Action que usa LoginPage, Fixture e ProductsPage.
//   EcommerceActions.realizarLoginComPerfil(perfil);
// });

// When("adiciono o produto {string} na vitrine", (nomeProduto) => {
//   ProductsPage.clicarBotaoDoProduto(nomeProduto);
// });

// When("removo o produto {string} na vitrine", (nomeProduto) => {
//   ProductsPage.clicarBotaoDoProduto(nomeProduto);
// });

// // Exemplo de fluxo único no Gherkin:
// When("adiciono e removo em seguida o produto {string} na vitrine", (nomeProduto) => {
//   EcommerceActions.adicionarERemoverProdutoDaVitrine(nomeProduto);
// });

// When("ordeno os produtos pela opção {string}", (opcaoOrdenacao) => {
//   ProductsPage.selecionarOrdenacao(opcaoOrdenacao);
// });

// Then("o badge do carrinho deve mostrar {string}", (quantidade) => {
//   ProductsPage.validarQuantidadeCarrinho(quantidade);
// });

// Then("o badge do carrinho não deve existir", () => {
//   ProductsPage.validarCarrinhoVazio();
// });

// Then("o primeiro produto da vitrine deve ser {string}", (produtoEsperado) => {
//   ProductsPage.validarPrimeiroProdutoDaLista(produtoEsperado);
// });