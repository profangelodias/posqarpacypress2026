#language: pt

Funcionalidade: Validação de solicitação de crédito
    Descrição da funcionalidade: Esta funcionalidade tem como objetivo validar o processo de solicitação de crédito, garantindo que todas as etapas sejam cumpridas corretamente e que os critérios de elegibilidade sejam atendidos.

    Contexto: O usuário está logado e tem permissão para aprovar ou reprocar solicitações de crédito.
        Dado que eu acesse a página de solicitações de crédito

    Cenário: Solicitação de crédito válida
        Quando eu preencher os campos obrigatórios com informações válidas
        E eu enviar a solicitação de crédito
        Então a solicitação deve ser registrada com sucesso
        E uma mensagem de confirmação deve ser exibida

    Cenário: Análise de crédito para clientes dentro do padrão de aprovação
        Quando eu preencho os dados do cliente com nome "Anjo do céu", email "anjo@doceu.com", renda mensal de "3000", CPF "123.456.789-01" e valor de crédito de "3000"
        E eu clico em "Solicitar Crédito"
        Então o sistema irá informar que a solicitação foi "APROVADA"