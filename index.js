const venom = require('venom-bot');

venom.create().then(start);

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Oi' || message.body === 'Olá') {
      client.sendText(message.from, 'Olá, como posso ajudar?')
        .then(console.log)
        .catch(console.error);
    }
  });
}
