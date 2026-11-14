# language: pt
# npx cypress run --expose tags="@regressao"
@regressao @saucedemo
Funcionalidade: Jornada Completa de E-commerce no SauceDemo (Projeto Guiado)
  Como um cliente do e-commerce SauceDemo
  Eu quero autenticar no sistema, gerenciar meu carrinho e concluir o checkout
  Para garantir que o fluxo crítico de vendas funcione de ponta a ponta

  @login @excecao
  Esquema do Cenário: Validar bloqueio e falhas de login por perfil (<descricao_cenario>)
    Dado que estou na página inicial do SauceDemo
    Quando tento logar usando o perfil "<perfil>" da fixture
    Então devo ver a mensagem de erro correspondente ao perfil "<perfil>"

    Exemplos:
      | descricao_cenario | perfil         |
      | Usuário bloqueado | bloqueado      |
      | Senha incorreta   | senha_invalida |
      | Usuário em branco | usuario_vazio  |

# npx cypress run --expose tags="@e2e and @viacep"
  @e2e @viacep
  Cenário: Compra E2E completa usando CEP real buscado via cy.task (ViaCEP)
    Dado que acessei a vitrine logado com o perfil "valido"
    Quando ordeno os produtos pela opção "Price (low to high)"
    Então o primeiro produto da vitrine deve ser "Sauce Labs Onesie"
    Quando adiciono os produtos "Sauce Labs Onesie" e "Sauce Labs Bike Light" ao carrinho
    Então o badge do carrinho deve mostrar "2"
    Quando acesso o carrinho de compras pela vitrine
    E removo o produto "Sauce Labs Bike Light" dentro do carrinho
    Então o produto "Sauce Labs Bike Light" não deve mais existir no carrinho
    E deve restar apenas 1 item listado no carrinho
    Quando avanço do carrinho para a tela de checkout
    E preencho os dados de entrega buscando o CEP real "58038000" para o cliente "Angelo"
    E confirmo a finalização do pedido no resumo
    Então devo ver a mensagem de pedido concluído "Thank you for your order!"

# npx cypress run --expose tags="@viacep or @faker"
  @e2e @faker
  Cenário: Compra E2E completa usando comprador dinâmico gerado pelo Faker.js
    Dado que acessei o carrinho usando o perfil "valido" com os produtos "Sauce Labs Backpack" e "Sauce Labs Bolt T-Shirt"
    Quando removo o produto "Sauce Labs Bolt T-Shirt" dentro do carrinho
    E avanço do carrinho para a tela de checkout
    E preencho os dados de entrega com um comprador gerado pelo Faker
    E confirmo a finalização do pedido no resumo
    Então devo ver a mensagem de pedido concluído "Thank you for your order!"

  # npx cypress run --expose tags="not @excecao"