require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const checkCommand = require("./commands/check");
const setBannedCommand = require("./commands/setbanned");
const setCleanCommand = require("./commands/setclean");
const resetMessagesCommand = require("./commands/resetmessages");

const token = process.env.BOT_TOKEN;

if (!token) {
    console.error("❌ BOT_TOKEN introuvable.");
    process.exit(1);
}

const bot = new TelegramBot(token, {
    polling: true
});

console.log("✅ TRAFALGAR est en ligne.");

bot.on("message", async (msg) => {

    if (!msg.text) return;

    if (msg.text.startsWith("/check")) {
        return checkCommand(bot, msg);
    }

    if (msg.text.startsWith("/setbanned")) {
        return setBannedCommand(bot, msg);
    }

    if (msg.text.startsWith("/setclean")) {
        return setCleanCommand(bot, msg);
    }

    if (msg.text.startsWith("/resetmessages")) {
        return resetMessagesCommand(bot, msg);
    }

});