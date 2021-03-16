
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const { Prefix, Token, Color } = require("./config.js");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.db = require("quick.db");
const moment = require("moment")
const db = require("quick.db")




client.on("ready", async () => {
  console.log(`ready!`);
  client.user
    .setActivity(`USE =help FOR HELP`, { type: "PLAYING" })
    .catch(error => console.log(error));
});


//hi
const Discord = require("discord.js")
module.exports = {
name: "set-welcome-channel",
run: async (client, message, args, db) => {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(":x: | **You Cannot Use This Command!**")
  let channel = message.mentions.channels.first()
  if (!channel) return message.channel.send(":x: | **mention The channel**")
  db.set(`joinChannel_${message.guild.id}`, channel.id)
  let embed = new Discord.MessageEmbed()
  .setTitle("Welcome channel Set!")
  .setDescription("The welcome channel has Been set")
  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
  .setTimestamp()
  .setFooter(message.guild.name + " | made by LΣGΣПD#0001", message.guild.iconURL())
  .setThumbnail(message.guild.iconURL())
  .setColor("GREEN")
  .addField("Channel", channel.toString())
  message.channel.send({embed:embed})
}
}

client.on("guildMemberAdd", async member => {
  if (member.user.bot) return;
  let user = member.user
  let channelID = db.get(`joinChannel_${member.guild.id}`)
 if (channelID === null) return;
 let channel = member.guild.channels.cache.get(channelID)
 if (!channel) return;
  let joinMsg = db.get(`joinmsg_${member.guild.id}`)
  if (!joinMsg) return;
  let send = joinMsg
 .split("{member-mention}").join("<@" + user.id + ">")
 .split("{member-tag}").join(user.tag)
 .split("{member-username}").join(user.username)
 .split("{member-id}").join(user.id)
 .split("{member-created:duration}").join(moment(user.createdTimestamp).fromNow())
 .split("{member-created:date}").join(moment(user.createdTimestamp).format("YYYY/MM/DD"))
 .split("{server-name}").join(member.guild.name)
 .split("{server-memberCount}").join(member.guild.members.cache.size)
 channel.send(send)
})
client.on("guildMemberRemove", async member => {
 if (member.user.bot) return;
 let user = member.user
 let channelID = db.get(`leaveChannel_${member.guild.id}`)
 if (channelID === null) return;
 let channel = member.guild.channels.cache.get(channelID)
 if (!channel) return;
 let leaveMsg = db.get(`leavemsg_${member.guild.id}`)
 if (leaveMsg === null) return;
 let send = leaveMsg
 .split("{member-tag}").join(user.tag)
 .split("{member-username}").join(user.username)
 .split("{member-id}").join(user.id)
 .split("{member-created:duration}").join(moment(user.createdTimestamp).fromNow())
 .split("{member-created:date}").join(moment(user.createdTimestamp).format("YYYY/MM/DD"))
 .split("{server-name}").join(member.guild.name)
 .split("{server-memberCount}").join(member.guild.members.cache.size)
 channel.send(send)
})


//
client.on("message", (message) => {
  
  if (message.content.startsWith("Tech")) {
    message.channel.send("THAT MEANS PRO!");
  };
});

client.on("message", (message) => {
  
  if (message.content.startsWith("pro")) {
    message.channel.send("THE ONWER OF THIS SERVER");
  };
});

client.on("message", (message) => {
    
  if (message.content.startsWith("tech")) {
    message.channel.send("THAT MEANS PRO!");
  };
});


client.on("message", (message) => {
  if (message.content.startsWith("nanda",)) {
    message.channel.send("THAT MEANS NOOB!");
  };
});

client.on("message", (message) => {
  if (message.content.startsWith("Nanda",)) {
    message.channel.send("THAT MEANS NOOB!");
  };
});

client.on("message", (message) => {
  if (message.content.startsWith("bot")) {
    message.channel.send('OK YOU CAN SEARCH N̷A̷N̷D̷A ̷S̷E̷T̷T̷A̷N on the server');
  };
});


client.on("message", (message) => {
  if (message.content.startsWith("noob")) {
    message.channel.send("OK YOU CAN SEARCH N̷A̷N̷D̷A ̷S̷E̷T̷T̷A̷N on the server");
  };
});


client.on("message", (message) => {
  if (message.content.startsWith("insta")) {
    message.channel.send("https://www.instagram.com/abhijith.k.s3/ ");
  };
});


//test
let modules = ["fun", "info", "moderation"];

modules.forEach(function(module) {
  fs.readdir(`./commands/${module}`, function(err, files) {
    if (err)
      return new Error(
        "Missing Folder Of Commands! Example : Commands/<Folder>/<Command>.js"
      );
      files.forEach(function(file) {
      if (!file.endsWith(".js")) return;
      
      let command = require(`./commands/${module}/${file}`);
      console.log(`${command.name} Command Has Been Loaded - ✅`);
      if (command.name) client.commands.set(command.name, command);
      if (command.aliases) {
        command.aliases.forEach(alias =>
          client.aliases.set(alias, command.name)
        );
      }
      if (command.aliases.length === 1000000) command.aliases = null;
    });
  });
});


client.on("message", async message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (!message.content.startsWith(Prefix)) return;

  const args = message.content
    .slice(Prefix.length)
    .trim()
    .split(" ");
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command =
    client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

  if (!command) return;

  if (command) {
    if (!message.guild.me.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "I Don't Have Enough Permission To Use This Or Any Of My Commands | Require : Administrator"
      );
    command.run(client, message, args);
  }
  console.log(
    `User : ${message.author.tag} (${message.author.id}) Server : ${message.guild.name} (${message.guild.id}) Command : ${command.name}`
  );
});




client.login(Token);