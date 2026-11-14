import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.log("🚀 [INÍCIO DO CENÁRIO]: Limpando sessão e preparando ambiente...");
  cy.clearCookies();
  cy.clearLocalStorage();
});

// Exemplo de Hook Condicional por Tag no @badeball (ótimo para mostrar na aula!):
Before({ tags: "@viacep or @faker" }, () => {
  cy.log("⚡ [HOOK E2E]: Cenário com consumo de cy.task no Node.js ativado!");
});

After(() => {
  cy.log("🏁 [FIM DO CENÁRIO]: Execução finalizada.");
});