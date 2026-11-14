// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import loginPage from './pages/LoginPage.js';

Cypress.Commands.add('login', (perfil) => {
	return cy.fixture('usuarios').then((massa) => {
		const usuario = massa[perfil];
		loginPage.acessarPagina();
		loginPage.preencherCredenciais(usuario.usuario, usuario.senha);
		loginPage.clicarEntrar();
	});
});

Cypress.Commands.add('login_valido', () => {
	loginPage.acessarPagina();
	loginPage.preencherCredenciais("standard_user", "secret_sauce");
	loginPage.clicarEntrar();
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })