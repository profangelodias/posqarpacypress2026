const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { faker } = require("@faker-js/faker");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    async setupNodeEvents(on, config) {
      const version = config.env.version || "qa";
      const envDoComando = config.env;
      const envDoArquivo = require(`./cypress/config/${version}.json`);
      config.env = { ...envDoComando, ...envDoArquivo };
      config.baseUrl = config.env.baseUrl;

      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Exemplo inicial: mantém fallbacks para demonstrar por que validações são importantes.
      on("task", {
        async buscarEnderecoCep(cep) {
          // Remove traços caso o aluno passe "58038-000"
          const cepLimpo = cep.replace(/\D/g, "");
          const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
          const dados = await response.json();

          // Retorna um objeto limpo para o Cypress usar no teste!
          return {
            cepFormatado: dados.cep || cep,
            cidade: dados.localidade || "João Pessoa",
            bairro: dados.bairro || "Manaíra",
            uf: dados.uf || "PB"
          };
        },

        gerarCompradorFaker() {
          return {
            nome: faker.person.firstName(),
            sobrenome: faker.person.lastName(),
            cep: faker.location.zipCode("#####-###")
          };
        }
      });

      return config;
    },
  },
});
