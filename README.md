# Discord Webhook Notifier - NestJS

Este projeto implementa uma integração externa que permite o envio de mensagens para um canal do Discord por meio de Webhooks. Ele foi desenvolvido utilizando o framework NestJS.

## Funcionamento
O projeto contém um **controller** e um **serviço** responsáveis por enviar mensagens ao Discord por meio de um Webhook.

- O **DiscordNotifier** gerencia a lógica de envio de mensagens.
- O **DiscordController** disponibiliza um endpoint para acionar o envio.

## Instalação

Para instalar as dependências, execute o seguinte comando:

```bash
npm install
```

## Configuração

1. No Discord, acesse o canal desejado e vá até **Editar Canal** → **Integrações** → **Criar Webhook**.
2. Copie a **URL do Webhook** gerada.
3. Crie um arquivo `.env` na raiz do projeto e adicione a seguinte configuração:

```env
DISCORD_WEBHOOK_URL=SEU_WEBHOOK_AQUI
```

## Execução

Para iniciar o projeto, utilize o seguinte comando:

```bash
npm run start
```

## Utilização

Para enviar uma mensagem ao Discord, faça uma requisição `POST` para o endpoint do webhook:

```bash
curl -X POST http://localhost:3000/discord/send -H "Content-Type: application/json" -d '{"message": "Mensagem de teste"}'
```

Essa requisição enviará a mensagem "Mensagem de teste" para o canal configurado no Webhook.

## Estrutura do Projeto

```
📂 src
 ├── 📂 discord
 │   ├── discord.controller.ts  # Controller responsável por processar requisições
 │   ├── discord.notifier.ts    # Serviço responsável pelo envio de mensagens ao Discord
 ├── app.module.ts             # Módulo principal do NestJS
```

## Tecnologias Utilizadas
- NestJS (Framework para Node.js)
- Axios (Biblioteca para requisições HTTP)
- Dotenv (Gerenciamento de variáveis de ambiente)

## Licença
Este projeto está licenciado sob os termos da licença MIT.

