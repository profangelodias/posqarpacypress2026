class CheckoutPage {
  elements = {
    inputNome: '[data-test="firstName"]',
    inputSobrenome: '[data-test="lastName"]',
    inputCep: '[data-test="postalCode"]',
    botaoContinue: '[data-test="continue"]',
    botaoFinish: '[data-test="finish"]',
    cabecalhoSucesso: '[data-test="complete-header"]'
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

  clicarFinish() {
    cy.get(this.elements.botaoFinish).click();
  }

  validarPedidoConcluidoComSucesso(mensagemEsperada) {
    cy.get(this.elements.cabecalhoSucesso)
      .should("be.visible")
      .and("have.text", mensagemEsperada);
  }
}

export default new CheckoutPage();