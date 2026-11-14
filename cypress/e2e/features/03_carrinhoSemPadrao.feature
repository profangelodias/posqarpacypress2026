# language: pt
Funcionalidade: Gestão do Carrinho de Compras - Sem Padrões
  Como um cliente do e-commerce SauceDemo
  Eu quero gerenciar os itens dentro do meu carrinho
  Para revisar minha escolha antes de ir para o pagamento

  # Você mostra este ao vivo:
  Cenário: Visualizar produtos adicionados dentro do carrinho
    Dado que acessei o carrinho sem padrao usando o perfil "valido" com os produtos "Sauce Labs Backpack" e "Sauce Labs Bike Light"
    Então devo ver os produtos "Sauce Labs Backpack" e "Sauce Labs Bike Light" listados no carrinho sem padrao

  # Eles fazem estes dois (ou veem a dor de repetir os seletores):
  Cenário: Remover um produto de dentro da tela do carrinho
    Dado que acessei o carrinho sem padrao usando o perfil "valido" com os produtos "Sauce Labs Backpack" e "Sauce Labs Bike Light"
    Quando removo o produto "Sauce Labs Backpack" dentro do carrinho sem padrao
    Então o produto "Sauce Labs Backpack" não deve mais existir no carrinho sem padrao
    E deve restar apenas 1 item listado no carrinho sem padrao

  Cenário: Voltar para a vitrine a partir do carrinho
    Dado que acessei o carrinho sem padrao usando o perfil "valido" com os produtos "Sauce Labs Backpack" e "Sauce Labs Bike Light"
    Quando clico no botão continuar comprando no carrinho sem padrao
    Então devo voltar para a vitrine de produtos sem padrao