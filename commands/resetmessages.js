const { resetMessages } = require("../lib/messages");

module.exports = async (bot, msg) => {

    const chatId = msg.chat.id;
    const userId = msg.from.id;

    resetMessages(userId);

    bot.sendMessage(
        chatId,
        `✅ Vos messages personnalisés ont été réinitialisés.

Les messages par défaut seront utilisés lors de votre prochaine vérification.`
    );

};