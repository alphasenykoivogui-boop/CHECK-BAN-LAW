const CHANNEL = "@trafalgar2010dev";

async function showMenu(bot, chatId, firstName) {
    return bot.sendMessage(chatId, `
╭━━━━━━━━━━━━━━━━━━━━━━╮
┃   𝗕𝗔𝗡 𝗖𝗛𝗘𝗖𝗞 • 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟
┣━━━━━━━━━━━━━━━━━━━━━━┫

🫴 Bienvenue ${firstName}

❍ BOT : ONLINE
❍ VERSION : 1.0

━━━━━━━━━━━━━━━━

❒ COMMANDES

❍ /check ✦pour vérifier l'état d'un compte
❍ /setbanned ✦changer le text banned
❍ /setclean ✦changer le text compte actif
❍ /resetmessages ✦réinitialiser les textes 


━━━━━━━━━━━━━━━━

✦ Powered By TRAFALGAR

╰━━━━━━━━━━━━━━━━━━━━╯`);
}

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

❒ Rejoins notre chaîne
pour utiliser le bot.

❐ ${CHANNEL}

╰━━━━━━━━━━━━━━━━━━━━━━╯`,
{
reply_markup:{
inline_keyboard:[
[
{
text:"📢 Rejoins",
url:"https://t.me/trafalgar2010dev"
}
],
[
{
text:"✅ Vérifier",
callback_data:"check_sub"
}
]
]
}
});

        }

        return showMenu(bot, chatId, firstName);

    } catch(err) {

        console.log(err);

        return bot.sendMessage(chatId,
"❌ Impossible de vérifier votre abonnement.\n\nVérifie que le bot est administrateur de la chaîne.");
    }

};
