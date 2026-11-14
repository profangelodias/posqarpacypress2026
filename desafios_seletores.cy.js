context('Desafios com Regras de Negócio da página de capturia', () => {
    beforeEach(() => {
      cy.visit('index.html');
    });

    /**
     * Regra de Negócio: Pokebola M deve aparecer após Antidoto e estar destacada.
     */
    it('Deve exibir "Pokebola M" após "Antidoto" na lista de itens', () => {
        cy.get('#secao-item')
          .contains('li', 'Antidoto')
          .next()
          .should('contain.text', 'Pokebola M')
          .and('have.class', 'item-especial');
        cy.log('RN Verificada: Ordem e destaque da Pokebola M na lista.');
    });

    /**
     * Regra de Negócio: A seção de informações deve destacar a escolha do Pokémon inicial.
     */
    it('Deve exibir o destaque sobre o Pokémon inicial na seção de informações', () => {
        cy.get('#secao-info')
          .contains('p.texto-destaque', 'Escolha um Pokémon Inicial.')
          .should('be.visible');
        cy.log('RN Verificada: Destaque sobre a escolha do Pokémon inicial.');
    });

    /**
     * Desafio 3 Original: "Pegar input por data-cy e encontrar seu label"
     * Regra de Negócio: O campo de entrada para "Treinador" deve ser claramente
     * identificado com seu respectivo rótulo.
     */
    it('Deve rotular corretamente o campo de "Treinador" na seção de login', () => {
        cy.get('[data-cy="input-username"]')
          .parent()
          .find('label[for="username"]')
          .should('contain.text', 'Treinador:');
        cy.log('RN Verificada: Rótulo do campo de Treinador correto.');
    });

    /**
     * Desafio 4 Original: "Filtrar botões por texto e verificar classe adicional"
     * Regra de Negócio: O botão principal para submeter o login deve ser "Entrar"
     * e possuir o estilo visual primário.
     */
    it('Deve apresentar o botão "Entrar" como ação principal de login e com estilo primário', () => {
        cy.get('#secao-login button.btn-primary')
          .should('have.text', 'Entrar');
        cy.log('RN Verificada: Botão de login principal correto e estilizado.');
    });

    /**
     * Regra de Negócio: O título principal deve identificar a página de captura.
     */
    it('Deve exibir o título principal correto da página', () => {
      cy.get('h1').should('have.text', 'Ginásio de Captura de Elementos');
        cy.log('RN Verificada: Título principal da página.');
    });

    /**
     * Nova Regra de Negócio: Deve haver dois botões de ação disponíveis na seção de login.
     */
    it('Deve disponibilizar duas opções de ação (botões) na seção de login', () => {
        cy.get('#secao-login').find('button.btn').should('have.length', 2);
        cy.log('RN Verificada: Quantidade de botões de ação no login.');
    });
});