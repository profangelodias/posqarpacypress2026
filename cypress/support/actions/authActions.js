// A App Action não mapeia elementos da tela (não tem 'elements = {}').
// Ela representa uma AÇÃO DE NEGÓCIO / FLUXO direto para preparar o estado do teste!
class AuthActions {
  realizarLoginRapidoComFixture(perfil) {
    cy.visit("/");
    cy.fixture("usuarios").then((massa) => {
      cy.get('[data-test="username"]').type(massa[perfil].usuario);
      cy.get('[data-test="password"]').type(massa[perfil].senha);
      cy.get('[data-test="login-button"]').click();
    });
  }
}

export default new AuthActions();