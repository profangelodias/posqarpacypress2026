import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from "../../support/pages/CartPage";
import CheckoutPage from "../../support/pages/CheckoutPage";

Given("que iniciei o checkout usando o perfil {string} com o produto {string}", (perfil, produto) => {
  // Reutiliza o Custom Command da Etapa 3 + método da CartPage!
  cy.acessarCarrinhoComProdutos(perfil, [produto]);
  CartPage.clicarIrParaCheckout();
});

When("preencho os dados de entrega buscando o CEP real {string} para o cliente {string}", (cep, nomeCliente) => {
  // Chama o Node.js via cy.task para buscar os dados reais na API do ViaCEP!
  cy.task("buscarEnderecoCep", cep).then((endereco) => {
    cy.log(`📍 Endereço retornado pelo ViaCEP: ${endereco.bairro} - ${endereco.cidade}/${endereco.uf}`);

    // Usa o Nome passado no Gherkin, a Cidade retornada da API como Sobrenome e o CEP formatado!
    CheckoutPage.preencherDadosCompletos(
      nomeCliente,
      `de ${endereco.cidade}`,
      endereco.cepFormatado
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

When("tento continuar o checkout informando apenas nome {string} e sobrenome {string}", (nome, sobrenome) => {
  CheckoutPage.preencherNomeESobrenome(nome, sobrenome);
  CheckoutPage.clicarContinue();
});

Then("devo ver o erro obrigatório no checkout {string}", (erroEsperado) => {
  CheckoutPage.validarMensagemErro(erroEsperado);
});

When("clico em cancelar na tela de resumo do checkout", () => {
  CheckoutPage.clicarCancel();
});
// O Then "devo voltar para a vitrine de produtos" já existe na Etapa 3 e é reaproveitado automaticamente!

When("preencho os dados de entrega com um comprador gerado pelo Faker", () => {
  cy.task("gerarCompradorFaker").then((comprador) => {
    cy.log(`🎲 Comprador Faker: ${comprador.nome} ${comprador.sobrenome} - CEP: ${comprador.cep}`);
    CheckoutPage.preencherDadosCompletos(comprador.nome, comprador.sobrenome, comprador.cep);
    CheckoutPage.clicarContinue();
  });
});