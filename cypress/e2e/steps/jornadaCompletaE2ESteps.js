import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/pages/LoginPage";
import ProductsPage from "../../support/pages/ProductsPage";
import CartPage from "../../support/pages/CartPage";
import CheckoutPage from "../../support/pages/CheckoutPage";
import EcommerceActions from "../../support/actions/ecommerceActions";

// --- STEPS DE LOGIN E EXCEÇÕES ---

Given("que estou na página inicial do SauceDemo", () => {
  LoginPage.acessarPagina();
});

When("tento logar usando o perfil {string} da fixture", (perfil) => {
  EcommerceActions.realizarLoginComPerfilFixture(perfil);
});

Then("devo ver a mensagem de erro correspondente ao perfil {string}", (perfil) => {
  cy.fixture("usuarios").then((massa) => {
    LoginPage.validarMensagemDeErro(massa[perfil].msgErro);
  });
});

// --- STEPS DE VITRINE E CARRINHO ---

Given("que acessei a vitrine logado com o perfil {string}", (perfil) => {
  // Usando nosso Custom Command global
  cy.loginComFixture(perfil);
});

Given("que acessei o carrinho usando o perfil {string} com os produtos {string} e {string}", (perfil, prod1, prod2) => {
  // Usando nosso Custom Command que já loga, adiciona itens e abre o carrinho
  cy.acessarCarrinhoComProdutos(perfil, [prod1, prod2]);
});

When("ordeno os produtos pela opção {string}", (opcaoOrdenacao) => {
  ProductsPage.selecionarOrdenacao(opcaoOrdenacao);
});

Then("o primeiro produto da vitrine deve ser {string}", (produtoEsperado) => {
  ProductsPage.validarPrimeiroProdutoDaLista(produtoEsperado);
});

When("adiciono os produtos {string} e {string} ao carrinho", (prod1, prod2) => {
  EcommerceActions.adicionarListaDeProdutos([prod1, prod2]);
});

Then("o badge do carrinho deve mostrar {string}", (quantidade) => {
  ProductsPage.validarQuantidadeCarrinho(quantidade);
});

When("acesso o carrinho de compras pela vitrine", () => {
  ProductsPage.acessarCarrinho();
  CartPage.validarTelaCarrinhoVisivel();
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

// --- STEPS DE CHECKOUT COM CY.TASK (VIACEP E FAKER) ---

When("avanço do carrinho para a tela de checkout", () => {
  CartPage.clicarIrParaCheckout();
});

When("preencho os dados de entrega buscando o CEP real {string} para o cliente {string}", (cep, nomeCliente) => {
  cy.task("buscarEnderecoCep", cep).then((endereco) => {
    cy.log(`📍 ViaCEP retornou: ${endereco.bairro} - ${endereco.cidade}/${endereco.uf}`);
    CheckoutPage.preencherDadosCompletos(
      nomeCliente,
      `de ${endereco.cidade}`,
      endereco.cepFormatado
    );
    CheckoutPage.clicarContinue();
  });
});

When("preencho os dados de entrega com um comprador gerado pelo Faker", () => {
  cy.task("gerarCompradorFaker").then((comprador) => {
    cy.log(`🎲 Comprador Faker: ${comprador.nome} ${comprador.sobrenome} (${comprador.cep})`);
    CheckoutPage.preencherDadosCompletos(
      comprador.nome,
      comprador.sobrenome,
      comprador.cep
    );
    CheckoutPage.clicarContinue();
  });
});

When("confirmo a finalização do pedido no resumo", () => {
  CheckoutPage.clicarFinish();
});

Then("devo ver a mensagem de pedido concluído {string}", (msgEsperada) => {
  CheckoutPage.validarPedidoConcluidoComSucesso(msgEsperada);
});