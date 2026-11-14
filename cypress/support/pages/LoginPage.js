class LoginPage {
  elements = {
    inputUsuario: '[data-test="username"]',
    inputSenha: '[data-test="password"]',
    botaoLogin: '[data-test="login-button"]',
    mensagemErro: '[data-test="error"]'
  };

  acessarPagina() {
    cy.visit("/");
  }

  preencherUsuario(usuario) {
    cy.get(this.elements.inputUsuario).clear();
    if (usuario) {
      cy.get(this.elements.inputUsuario).type(usuario);
    }
  }

  preencherSenha(senha) {
    cy.get(this.elements.inputSenha).clear();
    if (senha) {
      cy.get(this.elements.inputSenha).type(senha);
    }
  }

  clicarEntrar() {
    cy.get(this.elements.botaoLogin).click();
  }

  validarMensagemDeErro(mensagemEsperada) {
    cy.get(this.elements.mensagemErro)
      .should("be.visible")
      .and("contain.text", mensagemEsperada);
  }
}

export default new LoginPage();