const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if ((message.mentions.users.has("720902882928361543") || message.mentions.users.has("670816688891101204")) && message.author.bot == false) {
    message.reply("Stop tagging Rocket Destroyer you fool.");
  }
  if (message.content.includes("nitro")){
    message.reply("No Nitro for SIMPS on this server!");
  }
});
client.login("ODA5MTE2MDkwNjkyOTI3NTM2.YCQaFA.KrSNxh1iKyqLMlz_ig9ebr7gWks");