# Teste de API com Cypress

## Vídeo da execução do teste automatizado do desafio

![Execução teste automatizado](./video.gif)

## Ferramenta utilizada

Cypress

## Descrição do desafio

Testar as APIs que se encontram no endereço https://treinamento-api.herokuapp.com/apidoc/index.html, validar o código de resposta que cada API retorna respectivamente, validar o contrato utilizando bahmutov/cy-spok e configurar o Git Actions para executar os testes automaticamente assim que subir alguma alteração no repositório.

## Cenários de teste

- Validar que a aplicação está no ar

- Validar o contrato do GET booking

- Criar uma reserva com sucesso

- Alterar uma reserva sem token

- Alterar uma reserva com sucesso

- Excluir uma reserva com sucesso

- Alterar um reserva inexistente

- Alterar um reserva com token inválido

- Excluir reserva inexistente

- Excluir reserva sem token

- Excluir reserva com token inválido

