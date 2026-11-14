// Copiar o outerHTML da <div class="cart_contents_container"> do SauceDemo e colarmos na IA pedindo o Page Object,
// ela gera exatamente esta classe!

class CartPage {
  elements = {
    tituloPagina: '[data-test="title"]',
    itemCarrinho: '[data-test="inventory-item"]',
    nomeItem: '[data-test="inventory-item-name"]',
    botaoContinueShopping: '[data-test="continue-shopping"]',
    botaoCheckout: '[data-test="checkout"]'
  };

  validarTelaCarrinhoVisivel() {
    cy.get(this.elements.tituloPagina)
      .should("be.visible")
      .and("have.text", "Your Cart");
  }

  validarProdutoPresenteNoCarrinho(nomeProduto) {
    cy.contains(this.elements.nomeItem, nomeProduto).should("be.visible");
  }

  validarProdutoAusenteNoCarrinho(nomeProduto) {
    cy.contains(this.elements.nomeItem, nomeProduto).should("not.exist");
  }

  removerProdutoDoCarrinho(nomeProduto) {
    cy.contains(this.elements.itemCarrinho, nomeProduto)
      .find("button")
      .click();
  }

  validarQuantidadeDeItensListados(quantidadeEsperada) {
    cy.get(this.elements.itemCarrinho).should("have.length", quantidadeEsperada);
  }

  clicarContinuarComprando() {
    cy.get(this.elements.botaoContinueShopping).click();
  }

  clicarIrParaCheckout() {
    cy.get(this.elements.botaoCheckout).click();
  }
}

export default new CartPage();