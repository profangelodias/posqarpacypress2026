#language: pt
Funcionalidade: Login no SauceDemo
  Como um cliente do e-commerce SauceDemo
  Eu quero realizar login no sistema
  Para ter acesso à vitrine de produtos

  Contexto:
    Dado que estou na página inicial do SauceDemo

    Cenário: Login com usuário e senha válidos
        Quando realizo login usando o usuário "standard_user" e a senha "secret_sauce"
         Então devo ser redirecionado para a vitrine de produtos

  Cenário: Tentar login com usuário bloqueado
    Quando realizo login usando o usuário "locked_out_user" e a senha "secret_sauce"
    Então devo ver a mensagem de erro "Epic sadface: Sorry, this user has been locked out."

  Cenário: Tentar login com senha incorreta
    Quando realizo login usando o usuário "standard_user" e a senha "senha_errada"
    Então devo ver a mensagem de erro "Epic sadface: Username and password do not match any user in this service"

  Esquema do Cenário: Tentar login com credenciais inválidas ou bloqueadas (<cenario>)
    Quando realizo login usando o usuário "<usuario>" e a senha "<senha>"
    Então devo ver a mensagem de erro "<mensagem_esperada>"

        Exemplos:
      | cenario           | usuario         | senha        | mensagem_esperada                                                       |
      | Usuário bloqueado | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                     |
      | Senha incorreta   | standard_user   | senha_errada | Epic sadface: Username and password do not match any user in this service |

    
    Cenário: Login com usuário válido usando Fixture
        Quando realizo login usando o perfil "valido" da fixture
        Então devo ser redirecionado para a vitrine de produtos