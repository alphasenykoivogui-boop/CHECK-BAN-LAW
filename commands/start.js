const TelegramBot = require("node-telegram-bot-api");

const CHANNEL = "@trafalgar2010dev";

module.exports = async (bot, msg) => {

    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const firstName = msg.from.first_name || "Utilisateur";

    try {

        const member = await bot.getChatMember(CHANNEL, userId);

        const allowed = [
            "creator",
            "administrator",
            "member"
        ];

        if (!allowed.includes(member.status)) {

            return bot.sendMessage(chatId,
`╭━━━━━━━━━━━━━━━━━━━━━━╮
┃   𝗕𝗔𝗡 𝗖𝗛𝗘𝗖𝗞 • 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟
┣━━━━━━━━━━━━━━━━━━━━━━┫

❍ ACCÈS RESTREINT

❒ Rejoins la chaîne pour
continuer.

❐ ${CHANNEL}

╰━━━━━━━━━━━━━━━━━━━━━━╯`,
{
reply_markup: {
inline_keyboard: [
[
{
text: "📢 Rejoindre",
url: "https://t.me/trafalgar2010dev"
}
],
[
{
text: "✅ Vérifier",
callback_data: "check_sub"
}
]
]
}
}
);

        }

        return bot.sendMessage(chatId,
`╭━━━━━━━━━━━━━━━━━━━━━━╮
┃   𝗕𝗔𝗡 𝗖𝗛𝗘𝗖𝗞 • 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟
┣━━━━━━━━━━━━━━━━━━━━━━┫

👋 Bienvenue ${firstName}

❍ BOT : ONLINE
❍ VERSION : 1.0

━━━━━━━━━━━━━━━━━━

❒ COMMANDES

❍ /check pour ✦vérifier l'état d'un compte
❍ /setbanned ✦changer le text banned
❍ /setclean ✦changer le text compte actif
❍ /resetmessages ✦réinitialiser les textes 

━━━━━━━━━━━━━━━━━━

✦ Power by Trafalgar
  
╰━━━━━━━━━━━━━━━━━━━━━━╯`
);

    } catch (e) {

        console.log(e);

        bot.sendMessage(
            chatId,
            "❌ Impossible de vérifier votre abonnement.\n\nAjoute d'abord le bot comme administrateur de la chaîne."
        );

    }

};
