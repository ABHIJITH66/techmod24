const Discord = require("discord.js");

module.exports = {
  name: "poll",
  aliases: ["p"],
  category: "Moderation",
  description: "Create A Fresh Poll!",
  usage: "Poll <Channel> <Message>",
  run: async (client, message, args) => {
 
    message.delete();