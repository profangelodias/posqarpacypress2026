# language: pt
Funcionalidade: Vitrine de Produtos - Sem Padrões de Projeto

  Contexto:
    Dado que estou logado na vitrine de produtos sem padrao com o perfil "valido"

  # Você faz este ao vivo:
  Cenário: Adicionar um produto ao carrinho pela vitrine
    Quando adiciono o produto "Sauce Labs Backpack" na vitrine sem padrao
    Então o badge do carrinho na vitrine sem padrao deve mostrar "1"

  # Eles fazem estes dois:
  Cenário: Remover um produto adicionado direto na vitrine
    Quando adiciono o produto "Sauce Labs Backpack" na vitrine sem padrao
    E removo o produto "Sauce Labs Backpack" na vitrine sem padrao
    Então o badge do carrinho na vitrine sem padrao não deve existir

  Cenário: Ordenar produtos do menor para o maior preço
    Quando ordeno os produtos na vitrine sem padrao pela opção "Price (low to high)"
    Então o primeiro produto da vitrine sem padrao deve ser "Sauce Labs Onesie"