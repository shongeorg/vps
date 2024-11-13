import { Telegraf } from 'telegraf';

const bot = new Telegraf('7062487698:AAE4B4ZuVDBMGC1WKzm-052hg2HqoZMePzc');

bot.on('text', async (ctx) => {
  const message = ctx.message.text;
  if (ytdl.validateURL(message)) {
    try {
      const stream = ytdl(message, { filter: 'audioonly' });
      ctx.replyWithAudio({ source: stream });
    } catch (error) {
      console.error(error);
      ctx.reply('Сталася помилка при завантаженні аудіо.');
    }
  } else {
    ctx.reply('Будь ласка, надішліть посилання на відео з YouTube.');
  }
});

bot.launch();
