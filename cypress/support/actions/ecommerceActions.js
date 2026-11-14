import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";

class ecommerceActions {
  realizarLoginComPerfilFixture(perfil) {
    LoginPage.acessarPagina();

    cy.fixture("usuarios").then((massa) => {
      const dados = massa[perfil];
      LoginPage.preencherUsuario(dados.usuario);
      LoginPage.preencherSenha(dados.senha);
      LoginPage.clicarEntrar();
    });
  }

  logarEValidarVitrine(perfil) {
    this.realizarLoginComPerfilFixture(perfil);
    ProductsPage.validarVitrineVisivel();
  }

  adicionarListaDeProdutos(listaDeProdutos) {
    listaDeProdutos.forEach((produto) => {
      ProductsPage.clicarBotaoDoProduto(produto);
    });
  }
}

export default new ecommerceActions();