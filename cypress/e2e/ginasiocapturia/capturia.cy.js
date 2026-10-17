/// <reference types="cypress" />

describe('Testes de capturia', () => {
    

    // Se for um Treinador da lista (clássico) e um pokemon da lista
    // Exibe uma mensagem especial
    // Criar um teste com treinador ou pokemon fora da lista
    // Cirar um setundo teste com treinador e pokemon das listas

    it('Capturar um pokemon como um Treinador Qualquer', () => {
        cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/')
        cy.get('[data-cy="input-username"]').type('Ash');
        cy.get('[data-cy="input-password"]').type('123456');
        cy.get('[data-cy="input-pokeinit"]').type('Pikachu');
        cy.get('[data-cy="botao-login"]').click();
        cy.get('#mensagem-feedback').should('have.text','Login de Ash TREINADOR QUALQUER efetuado com sucesso!')
        cy.get('#mensagem-feedback').should('contain','QUALQUER')
    });

    it('Capturar um pokemon como um Treinador Qualquer', () => {
        cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/')
        cy.get('[data-cy="input-username"]').type('Ash K');
        cy.get('[data-cy="input-password"]').type('123456');
        cy.get('[data-cy="input-pokeinit"]').type('Pikachu');
        cy.get('[data-cy="botao-login"]').click();
        cy.get('#mensagem-feedback').should('have.text','Login de Ash K TREINADOR CLÁSSICO efetuado com sucesso!')
        cy.get('#mensagem-feedback').should('contain','CLÁSSICO')
    });

});