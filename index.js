require('dotenv').config();
const { App } = require('@slack/bolt');

// Slack app with Socket Mode enabled
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
});

// Slash command listener example
app.command('/hello', async ({ command, ack, say }) => {
  await ack();
  await say(`Hello <@${command.user_id}>!`);
});

// Start your app
(async () => {
  await app.start();
  console.log('⚡️ Slack app is running with Socket Mode!');
})();
