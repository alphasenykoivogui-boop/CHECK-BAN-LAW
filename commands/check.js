const path = require("path");

const { checkBan } = require("../lib/checkBan");
const { getUserMessages } = require("../lib/messages");

module.exports = async (bot, msg) => {

    const chatId = msg.chat.id;

    const args = msg.text.trim().split(" ");

    if (args.length < 2) {
        return bot.sendMessage(
            chatId,
            "❌ Utilisation :\n\n/check +224XXXXXXXX"
        );
    }

    const number = args[1];

    const messages = getUserMessages(msg.from.id);

    try {

        const result = await checkBan(number);

        if (result.banned) {

            return bot.sendPhoto(
                chatId,
                path.join(__dirname, "../assets/banned.jpg"),
                {
                    caption: `━━━━━━━━━━━━━━━━━━━━

   ❖ 𝗕𝗔𝗡 𝗖𝗛𝗘𝗖𝗞 ❖

━━━━━━━━━━━━━━━━━━━━
╭─❖ 𝗡𝗨𝗠𝗕𝗘𝗥 ❖─╮
➜ ${number}

╭─❖ 𝗦𝗧𝗔𝗧𝗨𝗧 ❖─╮
➜ 📵『𝗢𝗙𝗙』🚫

📋 ╭─❖ 𝗥𝗔𝗜𝗦𝗢𝗡 ❖─╮
➜ ⚠️ 𝐔𝐬𝐚𝐠𝐞 𝐜𝐨𝐧𝐝𝐢𝐭𝐢𝐨𝐧𝐬 𝐧𝐨𝐭 𝐦𝐞𝐭.
━━━━━━━━━━━━━━━━━━━━

${messages.banned}

━━━━━━━━━━━━━━━━━━━━`,
                }
            );

        }

        return bot.sendPhoto(
            chatId,
            path.join(__dirname, "../assets/clean.jpg"),
            {
                caption: `━━━━━━━━━━━━━━━━━━━━━━
  ❖ 𝗕𝗔𝗡 𝗖𝗛𝗘𝗖𝗞 ❖
━━━━━━━━━━━━━━━━━━━━
╭─❖ 𝗡𝗨𝗠𝗕𝗘𝗥 ❖─╮
➜ ${number}

╭─❖ 𝗦𝗧𝗔𝗧𝗨𝗧 ❖─╮
➜ ✅ 𝐀𝐂𝐓𝐈𝐅 ✅
━━━━━━━━━━━━━━━━━━━━

${messages.clean}

━━━━━━━━━━━━━━━━━━━━`,
            }
        );

    } catch (err) {

        console.error(err);

        bot.sendMessage(
            chatId,
            "❌ Une erreur est survenue pendant la vérification."
        );

    }

};
