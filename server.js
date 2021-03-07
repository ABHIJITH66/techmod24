
const fs = require("fs");
const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const client = new Client({
  disableEveryone: true


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.db = require("quick.db");


client.on("ready", async () => {
  console.log(`ready!`);
  client.user
    .setActivity(`USE =help FOR HELP`, { type: "PLAYING" })
    .catch(error => console.log(error));
});
//WELCOME
const { createCanvas, loadImage, registerFont } = require("canvas");
//--------MUSIC - CLIENT------
const { Player } = require('discord-player');
client.play = new Player(client);

//-----database-------
const db = require("quick.db");
client.commands = new Collection();
client.aliases = new Collection();
client.queue = new Map();

//test
module.exports = async (client) =>{

    const guild = 800306515553943582;

    setInterval(() =>{

        const memberCount = guild.memberCount;

        const channel = guild.channels.cache.get('818135844753899592');

        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);

        console.log('Updating Member Count');

    }, 5000);

}
//hello


client.on("message", (message) => {
  
  if (message.content.startsWith("Tech")) {
    message.channel.send("THAT MEANS PRO!");
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
      if (command.aliases.length === 0) command.aliases = null;
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
