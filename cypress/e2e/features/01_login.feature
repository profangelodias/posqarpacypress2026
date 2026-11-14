# language: pt
Funcionalidade: Login no SauceDemo - Com Fixtures

  Contexto:
    Dado que estou na página inicial do SauceDemo

  # Ao vivo
  @primeiro
  Cenário: Login com usuário válido usando Fixture
    Quando realizo login usando o perfil "valido" da fixture
    Então devo ser redirecionado para a vitrine de produtos

  # Eles
  Cenário: Tentar login com usuário bloqueado usando Fixture
    Quando realizo login usando o perfil "bloqueado" da fixture
    Então devo ver a mensagem de erro correspondente ao perfil "bloqueado"

  Cenário: Tentar login com senha incorreta usando Fixture
    Quando realizo login usando o perfil "senha_invalida" da fixture
    Então devo ver a mensagem de erro correspondente ao perfil "senha_invalida"
  
  # 2. Caminhos de Exceção agrupados (Esquema do Cenário + Fixture)
  Esquema do Cenário: Validar bloqueio e falhas de login por perfil (<descricao_cenario>)
    Quando realizo login usando o perfil "<perfil>" da fixture
    Então devo ver a mensagem de erro correspondente ao perfil "<perfil>"

    Exemplos:
      | descricao_cenario | perfil         |
      | Usuário bloqueado | bloqueado      |
      | Senha incorreta   | senha_invalida |
      # | Usuário em branco | usuario_vazio  |