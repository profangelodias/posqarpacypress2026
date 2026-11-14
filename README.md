# Projeto Guiado — Jornada E2E no SauceDemo

Execute todos os cenários marcados com `@regressao`:

```bash
npm test
```

Para executar apenas um grupo de cenários, por exemplo os fluxos E2E:

```bash
npx cypress run --spec "cypress/e2e/features/jornadaCompletaE2E.feature" --expose "tags=@e2e"
```

## Estrutura

```text
cypress/
├── config/                 # URLs por ambiente
├── e2e/
│   ├── features/           # Cenários Gherkin
│   └── steps/              # Steps Badeball e hooks
├── fixtures/
│   └── usuarios.json       # Perfis usados nos cenários
└── support/
    ├── actions/            # Fluxos de negócio reutilizáveis
    ├── pages/              # Page Objects
    ├── commands.js         # Custom commands Cypress
    └── e2e.js              # Carregamento global do suporte
```

Os dados Faker são produzidos pela task `gerarCompradorFaker` em `cypress.config.js`. O cenário ViaCEP consulta um serviço externo e precisa de conexão à internet.
