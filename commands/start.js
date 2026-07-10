const CHANNEL = "@trafalgar2010dev";
const CHANNEL_LINK = "https://t.me/trafalgar2010dev";

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

            return bot.sendMessage(chatId, `
╭━━━━━━━━━━━━━━━━━━━━━╮
┃   𝗕𝗔𝗡 𝗖𝗛𝗘𝗖𝗞 • 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟
┣━━━━━━━━━━━━━━━━━━━━━┫

❌ ACCÈS RESTREINT 

Rejoins avant tout 
ma chaîne.
📢 ${CHANNEL}
╰━━━━━━━━━━━━━━━━━━━╯
`, {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "📢 Rejoindre la chaîne",
                                url: CHANNEL_LINK
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
            });

        }

        return bot.sendMessage(chatId, `
╭━━━━━━━━━━━━━━━━━━━━━━╮
┃   𝗕𝗔𝗡 𝗖𝗛𝗘𝗖𝗞 • 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟
┣━━━━━━━━━━━━━━━━━━━━━━┫

❍ Bienvenue ${firstName}

🟢 BOT : ONLINE
❒ VERSION : 1.0

━━━━━━━━━━━━━━━━━━━
❍ COMMANDES.

❒ /check
➜ Vérifier un numéro

❒ /setbanned
➜ Modifier le texte banned

❒ /setclean
➜ Modifier le texte actif

❒ /resetmessages
➜ Restaurer les textes

━━━━━━━━━━━━━━━━━━━━
❍ Powered By TRAFALGAR
╰━━━━━━━━━━━━━━━━━━━╯`);

    } catch (err) {

        console.log(err);

        return bot.sendMessage(chatId,
`❌ Impossible de vérifier ton abonnement.

Vérifie que :

• le bot est administrateur de la chaîne ;
• la chaîne possède bien le pseudo ${CHANNEL}.`);
    }

};
