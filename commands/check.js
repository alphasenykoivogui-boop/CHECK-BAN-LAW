const { checkBan } = require("../lib/checkBan");
const { getUserMessages } = require("../lib/messages");

module.exports = async (bot, msg) => {

    const chatId = msg.chat.id;

    const args = msg.text.trim().split(" ");

    if (args.length < 2) {
        return bot.sendMessage(
            chatId,
            "❌ Utilisation :\n/check 224XXXXXXXX"
        );
    }

    const number = args[1];
    const messages = getUserMessages(msg.from.id);

    try {

        const result = await checkBan(number);

        if (result.banned) {

            return bot.sendMessage(chatId, `
╭━━━━━━━━━━━━━━━━━━━━━━╮
┃      ⚜ CHECK BAN ⚜
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ 📱 Number
┃ ➜ ${number}
┃
┃ ⚖️ Verdict
┃ ➜ STATUT: OFF
┃
┃ ${messages.banned}
╰━━━━━━━━━━━━━━━━━━━━━━╯
`);

        }

        return bot.sendMessage(chatId, `
╭━━━━━━━━━━━━━━━━━━━━━━╮
┃      ⚜ CHECK BAN ⚜
┣━━━━━━━━━━━━━━━━━━━━━━┫
┃ 📱 Number
┃ ➜ ${number}
┃
┃ 🏀 Verdict
┃ ➜ STATUT: ACTIF
┃
┃ ${messages.clean}
╰━━━━━━━━━━━━━━━━━━━━━━╯
`);

    } catch (err) {

        console.error(err);

        bot.sendMessage(
            chatId,
            "❌ Une erreur est survenue lors de la vérification."
        );

    }

};
