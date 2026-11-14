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