# language: pt
Funcionalidade: Login no SauceDemo - Sem Fixtures
  Como um cliente do e-commerce SauceDemo
  Eu quero realizar login no sistema
  Para ter acesso à vitrine de produtos

  Contexto:
    Dado que estou na página inicial do SauceDemo

  # Você faz este ao vivo com eles:
  Cenário: Login com usuário válido sem Fixture
    Quando realizo login usando o usuário "standard_user" e a senha "secret_sauce"
    Então devo ser redirecionado para a vitrine de produtos

  # Eles replicam estes dois (sentindo a dor de repetir dados no Gherkin):
  Cenário: Tentar login com usuário bloqueado sem Fixture
    Quando realizo login usando o usuário "locked_out_user" e a senha "secret_sauce"
    Então devo ver a mensagem de erro "Epic sadface: Sorry, this user has been locked out."

  Cenário: Tentar login com senha incorreta sem Fixture
    Quando realizo login usando o usuário "standard_user" e a senha "senha_errada"
    Então devo ver a mensagem de erro "Epic sadface: Username and password do not match any user in this service"

  Esquema do Cenário: Tentar login com credenciais inválidas ou bloqueadas (<cenario>)
    Quando realizo login usando o usuário "<usuario>" e a senha "<senha>"
    Então devo ver a mensagem de erro "<mensagem_esperada>"

    Exemplos:
      | cenario           | usuario         | senha        | mensagem_esperada                                                       |
      | Usuário bloqueado | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                     |
      | Senha incorreta   | standard_user   | senha_errada | Epic sadface: Username and password do not match any user in this service |
    #   | Usuário em branco |                 | secret_sauce | Epic sadface: Username is required                                      |