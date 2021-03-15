const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const client = new Discord.Client();
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
