# language: pt

Funcionalidade: Validação de Solicitação de Crédito
    Descrição da funcionalidade: Esta funcionalidade permite que os usuários solicitem crédito e valida se a solicitação foi enviada com sucesso.

  Contexto: O usuário está logado e tem permissão para aprovar ou rejeitar solicitações de crédito.
    Dado que o usuário está na página de solicitação de crédito

Cenário: Solicitação de crédito enviada com sucesso
    Quando eu preenche o formulário de solicitação de crédito com informações válidas
    E clica no botão "Enviar Solicitação"
    Então a solicitação de crédito deve ser enviada com sucesso
    E uma mensagem de confirmação deve ser exibida na tela

Cenário: Analise de solicitação de crédito
    Quando eu preencho os dados do cliente com nome "João Silva", CPF "123.456.789-00" e valor solicitado "R$ 10.000,00"
    E clico no botão "Solicitar Crédito"
    Então o sistema deve validar os dados do cliente e exibir uma mensagem de sucesso
    E as informações da solicitação devem ser exibidas corretamente