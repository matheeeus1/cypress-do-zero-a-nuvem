# Cypress do Zero à Nuvem

Este projeto é um exemplo de como utilizar o Cypress para testes automatizados de ponta a ponta. Abaixo estão as instruções para configurar e executar o projeto.

## Pré-requisitos

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/cypress-do-zero-a-nuvem.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd cypress-do-zero-a-nuvem
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```

## Estrutura do Projeto

- `cypress/`: Contém todos os testes e configurações do Cypress.
  - `integration/`: Contém os arquivos de teste.
  - `fixtures/`: Contém dados estáticos usados nos testes.
  - `plugins/`: Contém plugins e configurações adicionais.
  - `support/`: Contém comandos customizados e configurações globais.

## Executando os Testes

Para executar os testes em modo interativo:
```bash
npx cypress open
```

Para executar os testes em modo headless:
```bash
npx cypress run
```

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch:
    ```bash
    git checkout -b minha-nova-feature
    ```
3. Faça suas alterações e commit:
    ```bash
    git commit -m 'Adiciona nova feature'
    ```
4. Envie para o repositório remoto:
    ```bash
    git push origin minha-nova-feature
    ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.