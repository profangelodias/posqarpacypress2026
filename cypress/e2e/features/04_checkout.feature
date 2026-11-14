# language: pt
Funcionalidade: Finalização de Compra - Checkout (Com Page Objects e cy.task)

  Contexto:
    Dado que iniciei o checkout usando o perfil "valido" com o produto "Sauce Labs Backpack"

  # Ao vivo
  Cenário: Finalizar compra com sucesso buscando CEP real na API via cy.task
    Quando preencho os dados de entrega buscando o CEP real "58038000" para o cliente "Angelo"
    E confirmo a finalização do pedido no resumo
    Então devo ver a mensagem de pedido concluído "Thank you for your order!"

  # Eles
  Cenário: Tentar avançar no checkout sem informar o CEP
    Quando tento continuar o checkout informando apenas nome "Angelo" e sobrenome "Dias"
    Então devo ver o erro obrigatório no checkout "Error: Postal Code is required"

  Cenário: Cancelar a compra na tela de resumo do pedido
    Quando preencho os dados de entrega buscando o CEP real "58038000" para o cliente "Angelo"
    E clico em cancelar na tela de resumo do checkout
    Então devo voltar para a vitrine de produtos

    # 4. O CENÁRIO EXTRA DO FAKER.JS:
  @faker @checkout
  Cenário: Finalizar compra com sucesso usando dados dinâmicos do Faker.js
    Quando preencho os dados de entrega com um comprador gerado pelo Faker
    E confirmo a finalização do pedido no resumo
    Então devo ver a mensagem de pedido concluído "Thank you for your order!"