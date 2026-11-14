const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { faker } = require("@faker-js/faker");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
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

        // Versão com validação explícita da resposta do serviço.
        async buscarEnderecoCepCompleto(cep) {
          // Remove traços caso passe "58038-000"
          if (typeof cep !== "string") {
            throw new Error("CEP inválido: informe o CEP como texto.");
          }

          // Aceita CEP com ou sem hífen, mas exige exatamente oito dígitos.
          const cepLimpo = cep.replace(/\D/g, "");
          if (!/^\d{8}$/.test(cepLimpo)) {
            throw new Error(`CEP inválido: "${cep}" deve conter exatamente 8 dígitos.`);
          }

          let response;
          try {
            response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
          } catch (error) {
            throw new Error(
              `Não foi possível consultar o ViaCEP para o CEP ${cepLimpo}. ` +
              `Verifique a conexão com a internet. Detalhe: ${error.message}`
            );
          }

          if (!response.ok) {
            throw new Error(
              `O ViaCEP respondeu com HTTP ${response.status} ao consultar o CEP ${cepLimpo}.`
            );
          }

          let dados;
          try {
            dados = await response.json();
          } catch (error) {
            throw new Error(
              `O ViaCEP retornou uma resposta inválida para o CEP ${cepLimpo}. ` +
              `Detalhe: ${error.message}`
            );
          }

          if (!dados || typeof dados !== "object" || Array.isArray(dados)) {
            throw new Error(`O ViaCEP retornou dados inválidos para o CEP ${cepLimpo}.`);
          }

          if (dados.erro) {
            throw new Error(`O ViaCEP não encontrou o CEP ${cepLimpo}.`);
          }

          if (!dados.cep || !dados.localidade || !dados.uf) {
            throw new Error(`A resposta do ViaCEP está incompleta para o CEP ${cepLimpo}.`);
          }

          // Retorna um objeto limpo para o Cypress usar no teste!
          // Evita valores padrao inventados, que poderiam esconder uma resposta incompleta.
          return {
            cepFormatado: dados.cep,
            cidade: dados.localidade,
            bairro: dados.bairro,
            uf: dados.uf
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
