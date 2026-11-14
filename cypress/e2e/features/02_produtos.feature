# language: pt
Funcionalidade: Vitrine de Produtos - Com Page Objects e App Actions

  Contexto:
    Dado que estou logado na vitrine de produtos com o perfil "valido"
    # Ao vivo
  Cenário: Adicionar um produto ao carrinho pela vitrine
    Quando adiciono o produto "Sauce Labs Backpack" na vitrine
    Então o badge do carrinho deve mostrar "1"

    # Eles
  Cenário: Remover um produto adicionado direto na vitrine
    Quando adiciono o produto "Sauce Labs Backpack" na vitrine
    E removo o produto "Sauce Labs Backpack" na vitrine
    Então o badge do carrinho não deve existir

  Cenário: Ordenar produtos do menor para o maior preço
    Quando ordeno os produtos pela opção "Price (low to high)"
    Então o primeiro produto da vitrine deve ser "Sauce Labs Onesie"