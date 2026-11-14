# language: pt
Funcionalidade: Finalização de Compra - Checkout - Sem Padrões
  Como um cliente do SauceDemo com itens no carrinho
  Eu quero preencher meus dados de entrega e finalizar o pedido
  Para receber meus produtos em casa

  # Você mostra este ao vivo:
  Cenário: Finalizar compra com sucesso usando dados fixos sem padrao
    Dado que estou na tela de checkout sem padrao com o produto "Sauce Labs Backpack"
    Quando preencho o checkout sem padrao com nome "Angelo", sobrenome "Dias" e cep "58000-000"
    E confirmo a finalização do pedido sem padrao
    Então devo ver a mensagem de confirmação sem padrao "Thank you for your order!"

  # Eles veem/fazem estes dois:
  Cenário: Tentar avançar no checkout sem informar o CEP sem padrao
    Dado que estou na tela de checkout sem padrao com o produto "Sauce Labs Backpack"
    Quando tento continuar o checkout sem padrao preenchendo apenas nome "Angelo" e sobrenome "Dias"
    Então devo ver o erro no checkout sem padrao "Error: Postal Code is required"

  Cenário: Cancelar a compra na tela de resumo do pedido sem padrao
    Dado que estou na tela de checkout sem padrao com o produto "Sauce Labs Backpack"
    Quando preencho o checkout sem padrao com nome "Angelo", sobrenome "Dias" e cep "58000-000"
    E clico em cancelar na tela de resumo sem padrao
    Então devo voltar para a vitrine após cancelar sem padrao