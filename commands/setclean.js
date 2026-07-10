const { setClean } = require("../lib/messages");

module.exports = async (bot, msg) => {

    const chatId = msg.chat.id;
    const userId = msg.from.id;

    const text = msg.text.replace("/setclean", "").trim();

    if (!text) {
        return bot.sendMessage(
            chatId,
            "❌ Utilisation :\n\n/setclean Votre message"
        );
    }

    setClean(userId, text);

    bot.sendMessage(
        chatId,
`✅ Votre tex de compte actif a été enregistré avec succès.`
    );

};
