const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../database/messages.json");

// Lire la base
function loadMessages() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify({}, null, 2));
    }

    return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

// Sauvegarder
function saveMessages(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Récupérer les messages d'un utilisateur
function getUserMessages(userId) {

    const data = loadMessages();

    if (!data[userId]) {
        data[userId] = {
            banned: "💬 ÉCRIS ICI TON TEXT DE OFF ICI",
            clean: "💬 ÉCRIS ICI TON MESSAGE LORSQU’IL N’ES PAS BAN"
        };

        saveMessages(data);
    }

    return data[userId];
}

// Modifier le message BANNED
function setBanned(userId, text) {

    const data = loadMessages();

    if (!data[userId]) {
        data[userId] = {};
    }

    data[userId].banned = text;

    saveMessages(data);
}

// Modifier le message CLEAN
function setClean(userId, text) {

    const data = loadMessages();

    if (!data[userId]) {
        data[userId] = {};
    }

    data[userId].clean = text;

    saveMessages(data);
}

// Réinitialiser
function resetMessages(userId) {

    const data = loadMessages();

    delete data[userId];

    saveMessages(data);
}

module.exports = {
    getUserMessages,
    setBanned,
    setClean,
    resetMessages
};