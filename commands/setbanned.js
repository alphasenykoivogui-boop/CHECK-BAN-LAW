const { setBanned } = require("../lib/messages");

module.exports = async (bot, msg) => {

    const chatId = msg.chat.id;
    const userId = msg.from.id;

    const text = msg.text.replace("/setbanned", "").trim();

    if (!text) {
        return bot.sendMessage(
            chatId,
            "❌ Utilisation :\n\n/setbanned Votre message"
        );
    }

    setBanned(userId, text);

    bot.sendMessage(
        chatId,
`✅ Votre text pour verification de compte si off a été enregistré avec succès.`
    );

};
