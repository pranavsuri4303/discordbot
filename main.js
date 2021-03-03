const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("ODA5MTE2MDkwNjkyOTI3NTM2.YCQaFA.KrSNxh1iKyqLMlz_ig9ebr7gWks");