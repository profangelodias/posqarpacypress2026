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

  preencherCredenciais(usuario, senha) {
    cy.get(this.elements.inputUsuario).clear().type(usuario);
    cy.get(this.elements.inputSenha).clear().type(senha);
  }

  preencherUsuario(usuario) {
    cy.get(this.elements.inputUsuario).clear().type(usuario);
  }

  preencherSenha(senha) {
    cy.get(this.elements.inputSenha).clear().type(senha);
  }

  clicarEntrar() {
    cy.get(this.elements.botaoLogin).click();
  }
}

export default new LoginPage();