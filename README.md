# Testes end-to-end com Cypress

Projeto de demonstração de testes end-to-end para uma aplicação de notas.

## Requisitos

- Git
- Node.js e npm
- Google Chrome (para executar localmente)

## Instalação

```bash
npm ci
```

## Configuração

Copie `cypress.env.example.json` para `cypress.env.json` e preencha as credenciais usadas nos cenários de autenticação. O arquivo local não deve ser versionado.

O cenário de cadastro simula a resposta de confirmação do serviço de e-mail no Cypress; não precisa de uma chave Mailosaur. Os demais cenários continuam exercitando a aplicação externa configurada em `cypress.json`.

## Executar testes

```bash
npm test
npm run test:tablet
npm run lint
```

Para abrir o Cypress:

```bash
npm run cy:open
```
