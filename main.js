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

client.login("Nzk3MTM4NjI3MDQ0ODM1MzI4.X_iHMg.68EqW4DID-VJjMgGzGI-PFV45jc");