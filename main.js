const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.mentions.users.has("720902882928361543") && message.author.bot == false) {
    message.channel.send(message.content);
    console.log(message);
  }
});
// && (message.content.includes("Not Rocket Destroyer"))
client.login("ODA5MTE2MDkwNjkyOTI3NTM2.YCQaFA.KrSNxh1iKyqLMlz_ig9ebr7gWks");