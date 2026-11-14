class ProductsPage {
  elements = {
    tituloPagina: '[data-test="title"]',
    cardProduto: '[data-test="inventory-item"]',
    nomeProduto: '[data-test="inventory-item-name"]',
    selectOrdenacao: '[data-test="product-sort-container"]',
    badgeCarrinho: '[data-test="shopping-cart-badge"]',
    linkCarrinho: '[data-test="shopping-cart-link"]'
  };

  validarVitrineVisivel() {
    cy.get(this.elements.tituloPagina).should("be.visible").and("have.text", "Products");
  }

  clicarBotaoDoProduto(nomeDoProduto) {
    cy.contains(this.elements.cardProduto, nomeDoProduto).find("button").click();
  }

  selecionarOrdenacao(textoOpcao) {
    cy.get(this.elements.selectOrdenacao).select(textoOpcao);
  }

  validarQuantidadeCarrinho(quantidadeEsperada) {
    cy.get(this.elements.badgeCarrinho).should("be.visible").and("have.text", quantidadeEsperada);
  }

  validarCarrinhoVazio() {
    cy.get(this.elements.badgeCarrinho).should("not.exist");
  }

  validarPrimeiroProdutoDaLista(nomeEsperado) {
    cy.get(this.elements.nomeProduto).first().should("have.text", nomeEsperado);
  }

//ETAPA 3
  acessarCarrinho() { 
    cy.get('[data-test="shopping-cart-link"]').click(); }
}

export default new ProductsPage();