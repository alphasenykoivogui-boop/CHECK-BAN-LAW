const crypto = require("crypto");

const _BOT_TOKEN = process.env.BOT_TOKEN;
const _BOT_ID = _BOT_TOKEN.split(":")[0];

const _BOT_SEC = Buffer.from(
    "b79049e1b2a0f2810b42ee1fe89416a0b6a39adeebdad841a94bb130f8e9d865",
    "hex"
);

async function checkBan(phoneNumber) {

    const ts = Math.floor(Date.now() / 1000).toString();

    const sig = crypto
        .createHmac("sha256", _BOT_SEC)
        .update(ts + ":" + phoneNumber)
        .digest("hex");

    const res = await fetch("https://baron0.com/api/bot/external/check", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Bot-Id": _BOT_ID,
            "X-Bot-Ts": ts,
            "X-Bot-Sig": sig
        },
        body: JSON.stringify({
            number: phoneNumber
        })
    });

    return await res.json();
}

module.exports = {
    checkBan
};
