const TelegramApi = require("node-telegram-bot-api");
const {
  vaccinatedOptions,
  nastiaOptions,
  linkOptions,
  anotherCommandsOptions,
  nastia2Options,
  nastia1Options,
} = require("./options");

const token = "2133196038:AAGruU6miNr0h3znPdxce99qS49SG7uFib8";
const bot = new TelegramApi(token, { polling: true });

const startTest = async (chatId) => {
  await bot.sendMessage(chatId, `Are you vaccinated?`, vaccinatedOptions);
};

const nastiaFunc = async (chatId) => {
  return bot.sendMessage(chatId, "What do you wanna hear?", nastiaOptions);
};

const infoFunc = async (chatId) => {
  bot.sendMessage(chatId, `Bot about vaccine and Nastia.`, linkOptions);
};

const start = async () => {
  bot.setMyCommands([
    { command: "/start", description: "Greetings" },
    { command: "/test", description: "Information" },
    { command: "/nastia", description: "Mood: Nastia" },
    { command: "/info", description: "Get info about this bot" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    try {
      if (text === "/start") {
        // await UserModel.create({ chatId });
        await bot.sendSticker(
          chatId,
          "https://tlgrm.ru/_/stickers/dc7/a36/dc7a3659-1457-4506-9294-0d28f529bb0a/1.webp"
        );
        return bot.sendMessage(chatId, `Hey, buddy`);
      }
      if (text === "/info") {
        return infoFunc(chatId);
      }
      if (text === "/nastia") {
        await bot.sendAudio(chatId, "audio/nastiaOpinion.ogg");
        return nastiaFunc(chatId);
      }
      if (text === "/test") {
        return startTest(chatId);
      }
      return bot.sendMessage(
        chatId,
        "I don't understand this command, dumbass)"
      );
    } catch (e) {
      return bot.sendMessage(chatId, "Error with testBot)");
    }
  });
  bot.on("callback_query", async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    async function assetsFunc(text, method, options) {
      method
        ? await bot.sendMessage(chatId, text, options)
        : await bot.sendAudio(chatId, text, options);
    }

    if (data === "/nastia") {
      return nastiaFunc(chatId);
    }
    if (data === "/info") {
      return infoFunc(chatId);
    }

    if (data == "yes") {
      await bot.sendMessage(
        chatId,
        `Станом на 5 листопада в Україні від коронавірусу зробили 18 848 929 щеплень (+270 320 за попередню добу)`
      );
      await bot.sendAudio(chatId, `audio/true.ogg`);
      await bot.sendMessage(
        chatId,
        `Another commands:`,
        anotherCommandsOptions
      );
    } else if (data == "no") {
      await assetsFunc(`audio/hoi_opinion.ogg`, false);
      await assetsFunc(`Sign up for vaccination:`, true, linkOptions);
      return await bot.sendMessage(
        chatId,
        `Another commands:`,
        anotherCommandsOptions
      );
    } else if (data == "pr") {
      await assetsFunc(`audio/nastiaAboutPr.ogg`, false, nastia1Options);
    } else if (data == "d") {
      await assetsFunc(`audio/nastiaAboutD.ogg`, false, nastia2Options);
    } else {
    }
  });
};
start();
