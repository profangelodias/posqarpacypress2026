# language: pt
Funcionalidade: Gestão do Carrinho de Compras - Com Custom Commands e Page Objects

  Contexto:
    Dado que acessei o carrinho usando o perfil "valido" com os produtos "Sauce Labs Backpack" e "Sauce Labs Bike Light"

  # ao vivo:
  Cenário: Visualizar produtos adicionados dentro do carrinho
    Então devo ver os produtos "Sauce Labs Backpack" e "Sauce Labs Bike Light" listados no carrinho

  # façam estes dois na prática:
  Cenário: Remover um produto de dentro da tela do carrinho
    Quando removo o produto "Sauce Labs Backpack" dentro do carrinho
    Então o produto "Sauce Labs Backpack" não deve mais existir no carrinho
    E deve restar apenas 1 item listado no carrinho

  Cenário: Voltar para a vitrine a partir do carrinho
    Quando clico no botão continuar comprando no carrinho
    Então devo ser redirecionado para a vitrine de produtos