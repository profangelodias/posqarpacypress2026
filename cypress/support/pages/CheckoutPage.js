class CheckoutPage {
  elements = {
    inputNome: '[data-test="firstName"]',
    inputSobrenome: '[data-test="lastName"]',
    inputCep: '[data-test="postalCode"]',
    botaoContinue: '[data-test="continue"]',
    botaoCancel: '[data-test="cancel"]',
    botaoFinish: '[data-test="finish"]',
    mensagemErro: '[data-test="error"]',
    cabecalhoSucesso: '[data-test="complete-header"]',
    tituloPagina: '[data-test="title"]'
  };

  preencherNomeESobrenome(nome, sobrenome) {
    cy.get(this.elements.inputNome).clear().type(nome);
    cy.get(this.elements.inputSobrenome).clear().type(sobrenome);
  }

  preencherCep(cep) {
    cy.get(this.elements.inputCep).clear().type(cep);
  }

  preencherDadosCompletos(nome, sobrenome, cep) {
    this.preencherNomeESobrenome(nome, sobrenome);
    this.preencherCep(cep);
  }

  clicarContinue() {
    cy.get(this.elements.botaoContinue).click();
  }

  clicarCancel() {
    cy.get(this.elements.botaoCancel).click();
  }

  clicarFinish() {
    cy.get(this.elements.botaoFinish).click();
  }

  validarMensagemErro(erroEsperado) {
    cy.get(this.elements.mensagemErro)
      .should("be.visible")
      .and("contain.text", erroEsperado);
  }

  validarPedidoConcluidoComSucesso(mensagemEsperada) {
    cy.get(this.elements.cabecalhoSucesso)
      .should("be.visible")
      .and("have.text", mensagemEsperada);
  }
}

export default new CheckoutPage();