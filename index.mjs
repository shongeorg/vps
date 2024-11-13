import { Telegraf } from 'telegraf';

const bot = new Telegraf('7062487698:AAE4B4ZuVDBMGC1WKzm-052hg2HqoZMePzc');

bot.start((ctx) => ctx.reply('Привіт!'));


bot.on('message', async (ctx) => {
  const chatId = ctx.chat.id;
  const text = ctx.message.text;
  bot.telegram.sendMessage(chatId, `text: ${JSON.stringify({text}, null, 2)}`);
  
});

bot.launch();
