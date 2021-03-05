const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "copyright",
  aliases: ['cr'],
  description: "Warn A User!",
  usage: "copyright <Mention User> | <Reason>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`Please Mention A User!`);

    let Reason = args.slice(1).join(" ");

    

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${Member.user.username} GOT A COPYRIGHT STRIKE!`)
      .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
      .addField(`COPYRIGHT  MEMBER`, `${Member.user.tag} (${Member.user.id})`)
      .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
