import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";

class ecommerceActions {
  
  /**
   * App Action 1: Orquestra a LoginPage + Fixture + ProductsPage
   * Representa o processo de negócio completo de entrar na loja!
   */
  realizarLoginComPerfil(perfil) {
    LoginPage.acessarPagina();
    
    cy.fixture("usuarios").then((massa) => {
      const { usuario, senha } = massa[perfil];
      
      // Usa as "ruas" do Mapa (LoginPage) para fazer a rota!
      LoginPage.preencherUsuario(usuario);
      LoginPage.preencherSenha(senha);
      LoginPage.clicarEntrar();
    });

    // Garante que a rota terminou na vitrine usando a ProductsPage
    ProductsPage.validarVitrineVisivel();
  }

  /**
   * App Action 2: Fluxo de negócio para adicionar e remover na sequência
   */
  adicionarERemoverProdutoDaVitrine(nomeProduto) {
    ProductsPage.clicarBotaoDoProduto(nomeProduto); // Adiciona (Add to cart)
    ProductsPage.clicarBotaoDoProduto(nomeProduto); // Remove (Remove)
  }

  /**
   * App Action 3: Fluxo de adicionar múltiplos itens de uma vez
   */
  adicionarMultiplosItensAoCarrinho(listaProdutos) {
    listaProdutos.forEach((produto) => {
      ProductsPage.clicarBotaoDoProduto(produto);
    });
  }
}

export default new ecommerceActions();